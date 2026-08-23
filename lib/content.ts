export type CategorySlug =
  | "guides"
  | "quests"
  | "bosses"
  | "islands"
  | "items"
  | "weapons"
  | "achievements"
  | "fish"
  | "faq";

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Source = {
  label: string;
  url: string;
  note: string;
};

export type Article = {
  slug: string;
  category: CategorySlug;
  title: string;
  excerpt: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intent: string;
  priority: "S" | "A" | "B";
  readTime: string;
  updatedAt: string;
  status: "Research draft" | "Ready for review";
  sections: ArticleSection[];
  sources: Source[];
  relatedSlugs: string[];
};

export const categories: Array<{
  slug: CategorySlug;
  label: string;
  eyebrow: string;
  description: string;
  icon: string;
}> = [
  {
    slug: "guides",
    label: "Guides",
    eyebrow: "Start here",
    description: "Clear routes for first-time players, upgrades, money, and everyday questions.",
    icon: "✦",
  },
  {
    slug: "quests",
    label: "Quests",
    eyebrow: "Objectives",
    description: "Track NPC requests, quest items, unlock conditions, and rewards.",
    icon: "⌁",
  },
  {
    slug: "bosses",
    label: "Bosses",
    eyebrow: "Encounters",
    description: "Preparation notes, attack patterns, and practical fight plans.",
    icon: "◈",
  },
  {
    slug: "islands",
    label: "Islands",
    eyebrow: "Progression",
    description: "Follow the route from the lighthouse to the late-game islands.",
    icon: "⌂",
  },
  {
    slug: "items",
    label: "Items",
    eyebrow: "Database",
    description: "A growing reference for bait, quest items, tools, and useful drops.",
    icon: "◇",
  },
  {
    slug: "weapons",
    label: "Weapons",
    eyebrow: "Loadouts",
    description: "Compare weapons, upgrades, and the best time to spend your money.",
    icon: "↗",
  },
  {
    slug: "achievements",
    label: "Achievements",
    eyebrow: "100% guide",
    description: "Short, verifiable steps for the full achievement list and tricky unlocks.",
    icon: "★",
  },
  {
    slug: "fish",
    label: "Fish Database",
    eyebrow: "Collection",
    description: "Locations, variants, selling value, and collection progress in one place.",
    icon: "≈",
  },
  {
    slug: "faq",
    label: "FAQ",
    eyebrow: "Quick answers",
    description: "Fast answers for the questions players search right before giving up.",
    icon: "?",
  },
];

const steamSource: Source = {
  label: "Steam — How to Fish",
  url: "https://store.steampowered.com/app/4001890/How_to_Fish/",
  note: "Use for official game description and release information; verify changing details before publishing.",
};

const planningSource: Source = {
  label: "Research planning conversation",
  url: "https://chatgpt.com/share/6a8a93ec-5c6c-83ea-a29f-4bd1071c7be2",
  note: "Initial keyword and page-planning input; not a substitute for in-game verification.",
};

export const articles: Article[] = [
  {
    slug: "beginner-guide",
    category: "guides",
    title: "How to Fish Beginner Guide: Your First Hour",
    excerpt: "A clean starting route for learning the loop, earning early money, and preparing for the first major encounter.",
    primaryKeyword: "how to fish beginner guide",
    secondaryKeywords: ["how to start How to Fish", "what to do first in How to Fish", "How to Fish early money"],
    intent: "New player walkthrough",
    priority: "S",
    readTime: "6 min read",
    updatedAt: "Research draft · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "the-first-loop",
        title: "Learn the first useful loop",
        paragraphs: [
          "Your first goal is not to unlock everything at once. Learn the repeatable loop: catch something, sell it, improve your equipment, then return with a clearer objective.",
          "Keep this page focused on decisions that reduce early friction. Exact prices, item locations, and unlock requirements should be checked against the current game version before publication.",
        ],
        bullets: ["Follow the first available objective before wandering too far.", "Keep quest items separate from ordinary sellable catches.", "Spend early money on the upgrade that removes your current bottleneck."],
      },
      {
        id: "before-first-boss",
        title: "Prepare before the first boss",
        paragraphs: [
          "A good beginner guide should end with a readiness checklist rather than a long lore dump. The player should know what to carry, what to buy, and what movement habit matters most.",
        ],
        bullets: ["Bring the equipment required by the current quest chain.", "Keep one flexible option for damage and one option for positioning or utility.", "Treat the first attempt as pattern learning, not a race."],
      },
      {
        id: "what-to-verify",
        title: "What this page still needs to verify",
        paragraphs: [
          "This first draft intentionally leaves volatile values out. Before the page is published, verify the first-hour route in a current build, add screenshots where they clarify a location, and timestamp the final version.",
        ],
      },
    ],
    sources: [steamSource, planningSource],
    relatedSlugs: ["island-progression", "leeches", "weapons"],
  },
  {
    slug: "endangered-fish",
    category: "guides",
    title: "Endangered Fish Guide",
    excerpt: "A focused guide page for the endangered-fish objective and the bait or quest steps around it.",
    primaryKeyword: "how to fish endangered fish",
    secondaryKeywords: ["How to Fish endangered fish guide", "How to Fish fish bait", "How to Fish carrot bait"],
    intent: "Specific quest problem",
    priority: "A",
    readTime: "4 min read",
    updatedAt: "Research draft · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "why-this-page-matters",
        title: "Why this deserves its own page",
        paragraphs: [
          "The best early content is often a small page that answers one stuck-player question. Endangered Fish is a useful example because it can connect a quest, a bait requirement, and a later boss preparation step.",
        ],
      },
      {
        id: "page-outline",
        title: "Recommended page outline",
        paragraphs: ["Keep the final version scannable and lead with the direct answer. Then explain the prerequisite and the common mistake."],
        bullets: ["Where the objective starts.", "What item or bait is required.", "What to do if the objective does not advance.", "Which later page to read next."],
      },
    ],
    sources: [planningSource, steamSource],
    relatedSlugs: ["pufferfish", "beginner-guide", "fish-database"],
  },
  {
    slug: "leeches",
    category: "quests",
    title: "How Many Leeches Are There in How to Fish?",
    excerpt: "The high-intent quest page for finding the leeches, checking progress, and resolving the old 3-versus-5 answer conflict.",
    primaryKeyword: "how to fish leeches",
    secondaryKeywords: ["how many leeches How to Fish", "how to fish leech locations", "where are the leeches in How to Fish"],
    intent: "Stuck on a quest",
    priority: "S",
    readTime: "5 min read",
    updatedAt: "Research draft · Aug 23, 2026",
    status: "Ready for review",
    sections: [
      {
        id: "short-answer",
        title: "Short answer",
        paragraphs: [
          "The research plan currently treats the requirement as 3 leeches, not 5. Because this is exactly the kind of early-game fact that can change or be misreported, the published page should show the game version and cite the evidence used.",
        ],
      },
      {
        id: "how-to-use-the-page",
        title: "How to use this guide",
        paragraphs: [
          "Lead with the number players need, then show the route and a checklist. Put the explanation of the older answer below the direct solution so the page does not bury the answer.",
        ],
        bullets: ["Check the quest tracker before searching again.", "Record each confirmed pickup rather than relying on memory.", "If the count does not advance, capture the current build and update the source note."],
      },
      {
        id: "evidence-note",
        title: "Evidence note",
        paragraphs: [
          "This draft preserves the discrepancy as an editorial note. Before launch, confirm the number in-game and cross-check at least two current guides.",
        ],
      },
    ],
    sources: [planningSource],
    relatedSlugs: ["island-progression", "giant-piranha", "who-stole-my-beer"],
  },
  {
    slug: "who-stole-my-beer",
    category: "quests",
    title: "Who Stole My Beer? Quest Guide",
    excerpt: "A quest-chain page for the beer objective, its item handoffs, and the encounter it leads into.",
    primaryKeyword: "how to fish who stole my beer",
    secondaryKeywords: ["How to Fish beer quest", "How to Fish empty beer can", "How to Fish Lighthouse Keeper"],
    intent: "Quest walkthrough",
    priority: "A",
    readTime: "4 min read",
    updatedAt: "Research draft · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "quest-chain",
        title: "Quest chain at a glance",
        paragraphs: [
          "The final article should present this as a compact chain: start the request, collect the required item, follow the handoff, then prepare for the encounter that unlocks the next step.",
        ],
        bullets: ["Quest giver and starting condition.", "Required item and where the player should look.", "Handoff location and reward.", "Next unlock or related boss guide."],
      },
      {
        id: "common-mistake",
        title: "Common mistake to avoid",
        paragraphs: ["Do not mix the item route with general boss advice. Keep the answer to the quest question above the fold and link to the boss page for combat details."],
      },
    ],
    sources: [planningSource],
    relatedSlugs: ["spider-crab", "leeches", "island-progression"],
  },
  {
    slug: "island-progression",
    category: "islands",
    title: "How to Fish Island Progression Guide",
    excerpt: "A route map for understanding how objectives, bosses, and island unlocks fit together.",
    primaryKeyword: "how to fish island progression",
    secondaryKeywords: ["How to Fish next island", "How to unlock islands in How to Fish", "How to Fish full progression"],
    intent: "Find the next objective",
    priority: "S",
    readTime: "7 min read",
    updatedAt: "Research draft · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "progression-model",
        title: "The progression model",
        paragraphs: [
          "The planned page should connect the lighthouse, quests, boss encounters, and new-island unlocks in one visual route. This is more useful than a flat list because it answers what the player should do next.",
        ],
        bullets: ["Lighthouse and first objectives.", "Island 2 quest and boss chain.", "Island 3 and later progression gates.", "Volcano and final-route preparation."],
      },
      {
        id: "internal-links",
        title: "Internal-link strategy",
        paragraphs: ["Every island step should link to its quest, boss, and item pages. The progression page becomes the site's strongest navigation hub while the detail pages capture specific search intent."],
      },
    ],
    sources: [planningSource, steamSource],
    relatedSlugs: ["beginner-guide", "leeches", "pufferfish"],
  },
  {
    slug: "spider-crab",
    category: "bosses",
    title: "Spider Crab Boss Guide",
    excerpt: "Preparation notes and a practical combat outline for the first major boss encounter.",
    primaryKeyword: "how to fish spider crab",
    secondaryKeywords: ["how to beat Spider Crab How to Fish", "Spider Crab bait", "Spider Crab shell"],
    intent: "Boss strategy",
    priority: "S",
    readTime: "5 min read",
    updatedAt: "Research draft · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "before-the-fight",
        title: "Before the fight",
        paragraphs: ["Put the required quest item, recommended weapon, and arena entry condition at the top of the final page. Players searching for a boss guide usually need preparation before mechanics."],
        bullets: ["Confirm the encounter has been unlocked.", "Bring the bait or quest item required by the current route.", "Leave room to move instead of overloading the loadout with niche options."],
      },
      {
        id: "fight-plan",
        title: "Simple fight plan",
        paragraphs: ["The final version should explain the attack rhythm, the safe window, and what the boss drops. Use screenshots or a short clip to verify timing rather than relying on generic action-game advice."],
      },
    ],
    sources: [planningSource],
    relatedSlugs: ["who-stole-my-beer", "giant-piranha", "weapons"],
  },
  {
    slug: "giant-piranha",
    category: "bosses",
    title: "Giant Piranha Boss Guide",
    excerpt: "A focused boss page for the Giant Piranha encounter, including the summon step and the post-fight handoff.",
    primaryKeyword: "how to fish giant piranha",
    secondaryKeywords: ["how to beat Giant Piranha", "How to Fish piranha boss", "Giant Piranha tail"],
    intent: "Boss strategy",
    priority: "S",
    readTime: "5 min read",
    updatedAt: "Research draft · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "encounter-loop",
        title: "Understand the encounter loop",
        paragraphs: ["Separate the guide into summon, damage windows, adds or hazards, and reward handoff. That structure helps a player return to the exact step where they failed."],
        bullets: ["Complete the bait or quest prerequisite.", "Prioritize the main target without ignoring the arena hazard.", "Confirm the reward item is delivered to the correct NPC."],
      },
      {
        id: "verification-needed",
        title: "Verification needed before publishing",
        paragraphs: ["The exact weapon recommendation and small-enemy behavior should be checked in the current build and supported by two independent walkthroughs."],
      },
    ],
    sources: [planningSource],
    relatedSlugs: ["leeches", "pufferfish", "island-progression"],
  },
  {
    slug: "pufferfish",
    category: "bosses",
    title: "Pufferfish Boss Guide",
    excerpt: "A high-priority boss page covering the bait prerequisite, phases, poison hazards, and reward path.",
    primaryKeyword: "how to fish pufferfish boss",
    secondaryKeywords: ["how to beat pufferfish How to Fish", "How to Fish pufferfish bait", "How to Fish carrot bait"],
    intent: "Boss strategy",
    priority: "S",
    readTime: "6 min read",
    updatedAt: "Research draft · Aug 23, 2026",
    status: "Ready for review",
    sections: [
      {
        id: "bait-and-entry",
        title: "Bait and entry requirements",
        paragraphs: ["Put the prerequisite before the mechanics. The research plan connects this encounter with an endangered-fish or carrot-bait step, but the final article must verify the exact chain in-game."],
      },
      {
        id: "phase-guide",
        title: "Read the phases, not just the damage",
        paragraphs: ["A useful boss guide should name the visible phase change, the hazard to avoid, and the moment when attacking is safe. This is where a screenshot or short annotated clip will add more value than extra prose."],
        bullets: ["Phase one: establish the arena rhythm.", "Phase two: respect the rolling or poison pattern.", "After the fight: record the drop and the next unlock."],
      },
    ],
    sources: [planningSource],
    relatedSlugs: ["endangered-fish", "island-progression", "weapons"],
  },
  {
    slug: "achievements",
    category: "achievements",
    title: "How to Fish Achievement Guide",
    excerpt: "A structured route to the full achievement list, grouped by story, mechanics, collection, and challenge.",
    primaryKeyword: "how to fish achievements",
    secondaryKeywords: ["how to fish all achievements", "How to Fish 100 percent guide", "How to Fish achievement checklist"],
    intent: "Completionist reference",
    priority: "A",
    readTime: "8 min read",
    updatedAt: "Research draft · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "group-the-list",
        title: "Group achievements by how players unlock them",
        paragraphs: ["A flat 28-item list is hard to use. Group the final guide into automatic story unlocks, combat or trick-shot challenges, collection goals, and economy or upgrade milestones."],
        bullets: ["Story and progression.", "Boss and combat challenges.", "Fishipedia and collection work.", "Money, upgrades, and special actions."],
      },
      {
        id: "completion-route",
        title: "Build a completion route",
        paragraphs: ["Mark missable or easy-to-forget actions, then link each difficult achievement to its own detail page. The 360 No Scope page is the first planned child page."],
      },
    ],
    sources: [planningSource],
    relatedSlugs: ["360-no-scope", "fish-database", "money-guide"],
  },
  {
    slug: "360-no-scope",
    category: "achievements",
    title: "360 No Scope Achievement Guide",
    excerpt: "A precise checklist for one of the most search-friendly challenge achievements.",
    primaryKeyword: "how to fish 360 no scope achievement",
    secondaryKeywords: ["How to Fish 360 achievement", "How to Fish no scope", "How to Fish achievement guide"],
    intent: "Specific achievement problem",
    priority: "S",
    readTime: "3 min read",
    updatedAt: "Research draft · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "checklist",
        title: "Checklist format",
        paragraphs: ["The final page should answer the action, target, and failure condition in the first few lines. Add a short troubleshooting section for players who completed the motion but did not trigger the achievement."],
        bullets: ["Confirm the exact target and weapon condition.", "Complete the rotation without accidentally aiming first.", "Check the achievement notification before leaving the area."],
      },
    ],
    sources: [planningSource],
    relatedSlugs: ["achievements", "weapons", "beginner-guide"],
  },
  {
    slug: "weapons",
    category: "weapons",
    title: "How to Fish Weapons and Upgrade Priorities",
    excerpt: "A framework for comparing weapons, tools, and upgrade timing without pretending one loadout fits every player.",
    primaryKeyword: "how to fish weapons",
    secondaryKeywords: ["how to fish best weapons", "How to Fish upgrades", "How to Fish shotgun"],
    intent: "Spend resources wisely",
    priority: "A",
    readTime: "6 min read",
    updatedAt: "Research draft · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "upgrade-rule",
        title: "Use a bottleneck rule",
        paragraphs: ["The page should rank upgrades by the problem they solve: reach, damage, mobility, information, or income. This is more durable than a single tier list that may become wrong after a balance update."],
      },
      {
        id: "planned-comparison",
        title: "Planned comparison table",
        paragraphs: ["The publishable version will compare cost, use case, timing, and the quests or bosses where each item becomes valuable. Keep every value linked to a source and version date."],
      },
    ],
    sources: [planningSource, steamSource],
    relatedSlugs: ["money-guide", "pufferfish", "360-no-scope"],
  },
  {
    slug: "money-guide",
    category: "guides",
    title: "How to Fish Money Guide",
    excerpt: "A practical route for turning catches, cooking, and upgrades into faster progression.",
    primaryKeyword: "how to fish money guide",
    secondaryKeywords: ["how to make money fast How to Fish", "best fish to sell How to Fish", "How to Fish killscore"],
    intent: "Economy guide",
    priority: "A",
    readTime: "5 min read",
    updatedAt: "Research draft · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "money-phases",
        title: "Organize the economy by phase",
        paragraphs: ["A useful money guide should distinguish early, mid, and late progression. The best catch or route can change once a player owns better equipment, so avoid presenting one universal farm."],
        bullets: ["Early: fund the first meaningful upgrade.", "Mid: combine safer routes with better multipliers.", "Late: optimize the activity that supports completion goals."],
      },
    ],
    sources: [planningSource],
    relatedSlugs: ["beginner-guide", "weapons", "achievements"],
  },
  {
    slug: "fish-database",
    category: "fish",
    title: "How to Fish Fish Database",
    excerpt: "The planned collection hub for locations, variants, selling notes, and Fishipedia progress.",
    primaryKeyword: "how to fish all fish locations",
    secondaryKeywords: ["How to Fish fish guide", "How to Fish Fishipedia", "How to Fish rare fish"],
    intent: "Collection reference",
    priority: "A",
    readTime: "4 min read",
    updatedAt: "Research draft · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "database-shape",
        title: "How the database should work",
        paragraphs: ["Start with a searchable table and add individual fish pages only when a fish has a meaningful location, variant, quest, or achievement question. This keeps the site useful without creating thin pages."],
        bullets: ["Location or island.", "Collection status.", "Variant or special condition.", "Related achievement or quest."],
      },
    ],
    sources: [planningSource],
    relatedSlugs: ["achievements", "endangered-fish", "island-progression"],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: CategorySlug) {
  return articles.filter((article) => article.category === category);
}

export function getFeaturedArticles() {
  return articles.filter((article) => article.priority === "S").slice(0, 6);
}

export function getRelatedArticles(article: Article) {
  return article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((item): item is Article => Boolean(item));
}
