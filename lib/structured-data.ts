import type { Article } from "@/lib/content";

const SITE_NAME = "How to Fish Game Wiki";
const SITE_DESCRIPTION =
  "An independent fan guide with current quest answers, boss strategies, island routes, equipment help, and game information for How to Fish.";
const GAME_NAME = "How to Fish";
const GAME_URL = "https://store.steampowered.com/app/4001890/How_to_Fish/";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

type BreadcrumbItem = {
  name: string;
  path: string;
};

function absoluteUrl(path: string) {
  return new URL(path, `${siteUrl}/`).toString();
}

export function getWebsiteJsonLd(): Record<string, unknown> {
  const url = absoluteUrl("/");

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}#website`,
    name: SITE_NAME,
    url,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
  };
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getArticleJsonLd(
  article: Article,
  categoryLabel: string,
): Record<string, unknown> {
  const url = absoluteUrl(`/${article.category}/${article.slug}`);
  const websiteUrl = absoluteUrl("/");

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.excerpt,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: "en",
    articleSection: categoryLabel,
    keywords: [article.primaryKeyword, ...article.secondaryKeywords],
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: websiteUrl,
      description:
        "Independent fan guide for How to Fish players; not affiliated with the developer or publisher.",
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${websiteUrl}#website`,
      name: SITE_NAME,
      url: websiteUrl,
    },
    about: {
      "@type": "VideoGame",
      name: GAME_NAME,
      url: GAME_URL,
    },
  };
}
