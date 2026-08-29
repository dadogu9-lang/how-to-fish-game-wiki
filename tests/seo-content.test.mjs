import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { spawn } from "node:child_process";

const port = 3107;
const baseUrl = `http://127.0.0.1:${port}`;
let server;

async function waitForServer() {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("Next.js test server did not become ready");
}

async function get(path) {
  const response = await fetch(`${baseUrl}${path}`);
  const body = await response.text();
  assert.equal(response.status, 200, `${path} should return HTTP 200`);
  return body;
}

function getJsonLd(html) {
  return [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]));
}

before(async () => {
  server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", String(port)], {
    cwd: process.cwd(),
    stdio: "ignore",
  });
  await waitForServer();
});

after(() => {
  server?.kill();
});

test("homepage explains the game loop and exposes four current answers", async () => {
  const html = await get("/");
  assert.match(html, /How to Fish Game Wiki/);
  assert.match(html, /Catch, fight, sell, progress/i);
  assert.match(html, /Trending now/i);
  for (const href of [
    "/guides/endangered-fish",
    "/quests/leeches",
    "/game-info/sales-player-count",
    "/game-info/updates-roadmap",
  ]) {
    assert.match(html, new RegExp(`href="${href}"`));
  }
});

test("guides hub leads with the highest-impression player questions", async () => {
  const html = await get("/guides");
  assert.match(html, /How to Fish Game Guides/);
  assert.match(html, /Endangered Fish/);
  assert.match(html, /Beginner Guide/);
  assert.doesNotMatch(html, /published drafts/i);
});

test("endangered-fish guide gives the direct quest flow without editorial scaffolding", async () => {
  const html = await get("/guides/endangered-fish");
  assert.match(html, /Standard Lure/);
  assert.match(html, /Endangered Species/);
  assert.match(html, /Carrot/);
  assert.match(html, /Pufferfish/);
  assert.doesNotMatch(html, /research draft|planned page|recommended page outline/i);
});

test("leeches guide resolves the count and explains the boss-bait handoff", async () => {
  const html = await get("/quests/leeches");
  assert.match(html, /three Leeches/i);
  assert.match(html, /Forest Island/);
  assert.match(html, /Modified Leech/);
  assert.match(html, /Giant Piranha/);
  assert.doesNotMatch(html, /research draft|before launch|should show/i);
});

test("game-info pages distinguish sourced facts from estimates and roadmap uncertainty", async () => {
  const sales = await get("/game-info/sales-player-count");
  assert.match(sales, /one million copies/i);
  assert.match(sales, /estimate, not official revenue/i);
  assert.match(sales, /373,971/);

  const updates = await get("/game-info/updates-roadmap");
  assert.match(updates, /no detailed public roadmap/i);
  assert.match(updates, /official Steam announcements/i);
  assert.match(updates, /Patch 1\.0\.9/);
});

test("internal search and empty hubs are kept out of index signals", async () => {
  const search = await get("/search");
  assert.match(search, /<meta name="robots" content="noindex, follow"/);

  const sitemap = await get("/sitemap.xml");
  assert.doesNotMatch(sitemap, /<loc>[^<]*\/search<\/loc>/);
  assert.doesNotMatch(sitemap, /<loc>[^<]*\/items<\/loc>/);
  assert.doesNotMatch(sitemap, /<loc>[^<]*\/faq<\/loc>/);
  assert.match(sitemap, /<loc>[^<]*\/game-info\/sales-player-count<\/loc>/);
  assert.match(sitemap, /<loc>[^<]*\/game-info\/updates-roadmap<\/loc>/);
});

test("homepage publishes one minimal WebSite entity without deprecated search markup", async () => {
  const schemas = getJsonLd(await get("/"));
  const website = schemas.find((schema) => schema["@type"] === "WebSite");

  assert.ok(website, "homepage should publish WebSite JSON-LD");
  assert.equal(website.name, "How to Fish Game Wiki");
  assert.equal(new URL(website.url).pathname, "/");
  assert.doesNotMatch(JSON.stringify(schemas), /SearchAction|HowTo|FAQPage/);
});

test("category pages publish a two-level BreadcrumbList", async () => {
  const schemas = getJsonLd(await get("/guides"));
  const breadcrumbs = schemas.find((schema) => schema["@type"] === "BreadcrumbList");

  assert.ok(breadcrumbs, "category should publish BreadcrumbList JSON-LD");
  assert.deepEqual(
    breadcrumbs.itemListElement.map(({ position, name }) => ({ position, name })),
    [
      { position: 1, name: "Wiki" },
      { position: 2, name: "Guides" },
    ],
  );
});

test("guide pages publish Article and three-level breadcrumbs without rich-result overreach", async () => {
  const schemas = getJsonLd(await get("/guides/endangered-fish"));
  const article = schemas.find((schema) => schema["@type"] === "Article");
  const breadcrumbs = schemas.find((schema) => schema["@type"] === "BreadcrumbList");

  assert.ok(article, "guide should publish Article JSON-LD");
  assert.equal(article.headline, "How to Get an Endangered Fish in How to Fish");
  assert.equal(article.about["@type"], "VideoGame");
  assert.equal(article.about.name, "How to Fish");
  assert.match(article.author.description, /independent fan guide/i);
  assert.deepEqual(
    breadcrumbs.itemListElement.map(({ position, name }) => ({ position, name })),
    [
      { position: 1, name: "Wiki" },
      { position: 2, name: "Guides" },
      { position: 3, name: "How to Get an Endangered Fish in How to Fish" },
    ],
  );
  assert.doesNotMatch(JSON.stringify(schemas), /SearchAction|HowTo|FAQPage/);
});

test("the production ad preview is noindex and does not server-render a third-party ad script", async () => {
  const preview = await get("/ad-preview");

  assert.match(preview, /<meta name="robots" content="noindex, nofollow"/);
  assert.match(preview, /data-ad-slot="responsive-article"/);
  assert.doesNotMatch(
    preview,
    /<script[^>]+src="https:\/\/(?:www\.)?(?:highrevenueformat|profitableratecpmnetwork)\.com/i,
  );

  const sitemap = await get("/sitemap.xml");
  assert.doesNotMatch(sitemap, /<loc>[^<]*\/ad-preview<\/loc>/);
});

test("visitors can reach privacy information and reopen optional cookie settings", async () => {
  const home = await get("/");
  assert.match(home, /href="\/privacy"/);
  assert.match(home, /Cookie settings/i);

  const privacy = await get("/privacy");
  assert.match(privacy, /<meta name="robots" content="noindex, follow"/);
  assert.match(privacy, /Google Analytics/i);
  assert.match(privacy, /Adsterra/i);
  assert.match(privacy, /Reject optional/i);
});

test("ad frames use real noindex documents with the publisher-provided banner code", async () => {
  const desktop = await get("/ad-frame-desktop.html");
  const mobile = await get("/ad-frame-mobile.html");

  assert.match(desktop, /<meta name="robots" content="noindex, nofollow">/i);
  assert.match(desktop, /fc8b575640f04a1c770e6303783094e3\/invoke\.js/i);
  assert.match(desktop, /'width'\s*:\s*300/i);
  assert.match(desktop, /'height'\s*:\s*250/i);

  assert.match(mobile, /<meta name="robots" content="noindex, nofollow">/i);
  assert.match(mobile, /5ae94ad8bad3095a03071c50c6354702\/invoke\.js/i);
  assert.match(mobile, /'width'\s*:\s*320/i);
  assert.match(mobile, /'height'\s*:\s*50/i);
});
