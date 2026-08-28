export type CategorySlug =
  | "guides"
  | "game-info"
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
  status: "Research draft" | "Ready for review" | "Verified guide";
  sections: ArticleSection[];
  sources: Source[];
  relatedSlugs: string[];
};

export type Category = {
  slug: CategorySlug;
  label: string;
  heading?: string;
  seoTitle?: string;
  eyebrow: string;
  description: string;
  icon: string;
};

export const categories: Category[] = [
  {
    slug: "guides",
    label: "Guides",
    heading: "How to Fish Game Guides",
    seoTitle: "How to Fish Game Guides: Quests, Money & Progression",
    eyebrow: "Start here",
    description: "Direct answers for endangered fish, beginner progression, money, equipment, and the questions that stop a run.",
    icon: "✦",
  },
  {
    slug: "game-info",
    label: "Game Info",
    heading: "How to Fish Game Info",
    seoTitle: "How to Fish Game Info: Player Count, Sales & Updates",
    eyebrow: "Current facts",
    description: "Sourced launch numbers, player-count snapshots, patch notes, and roadmap status with clear dates.",
    icon: "◎",
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
  note: "Official source for the game description and release information; check current announcements for details that may change after patches.",
};

const planningSource: Source = {
  label: "Research planning conversation",
  url: "https://chatgpt.com/share/6a8a93ec-5c6c-83ea-a29f-4bd1071c7be2",
  note: "Initial keyword and page-planning input; not a substitute for in-game verification.",
};

const pcGamerPufferfishSource: Source = {
  label: "PC Gamer — How to Fish Pufferfish guide",
  url: "https://www.pcgamer.com/games/sim/how-to-fish-pufferfish/",
  note: "Independent launch-week walkthrough used to cross-check the endangered-fish exchange and Pufferfish bait flow.",
};

const gamesRadarLeechesSource: Source = {
  label: "GamesRadar+ — How to get Leeches",
  url: "https://www.gamesradar.com/games/co-op/how-to-fish-leeches/",
  note: "Independent launch-week walkthrough confirming the three ground pickups, NPC handoff, and Giant Piranha bait loop.",
};

const dexertoLeechesSource: Source = {
  label: "Dexerto — Leech bait reference",
  url: "https://www.dexerto.com/wikis/how-to-fish/all-bait/leech/",
  note: "Second independent reference confirming the Forest Island location and three-Leech requirement.",
};

const steamAnnouncementsSource: Source = {
  label: "Steam — How to Fish announcements",
  url: "https://steamcommunity.com/app/4001890/eventcomments/",
  note: "Official source for release announcements and patch posts; check it before relying on older route details.",
};

const steamDbSource: Source = {
  label: "SteamDB — How to Fish charts",
  url: "https://steamdb.info/app/4001890/charts/",
  note: "Third-party Steam telemetry for dated concurrent-player, review, platform, and store snapshots.",
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
    updatedAt: "Last reviewed · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "the-first-loop",
        title: "Learn the first useful loop",
        paragraphs: [
          "Your first goal is not to unlock everything at once. Learn the repeatable loop: catch something, sell it, improve your equipment, then return with a clearer objective.",
          "Follow the objective text and current shop labels when exact prices or unlock requirements differ after a patch. The route matters more than buying every available upgrade immediately.",
        ],
        bullets: ["Follow the first available objective before wandering too far.", "Keep quest items separate from ordinary sellable catches.", "Spend early money on the upgrade that removes your current bottleneck."],
      },
      {
        id: "before-first-boss",
        title: "Prepare before the first boss",
        paragraphs: [
          "Before starting the first boss encounter, check that the current quest step is complete, keep enough money for the equipment you actually use, and leave room to move around the arena.",
        ],
        bullets: ["Bring the equipment required by the current quest chain.", "Keep one flexible option for damage and one option for positioning or utility.", "Treat the first attempt as pattern learning, not a race."],
      },
      {
        id: "version-check",
        title: "Check the current version",
        paragraphs: [
          "How to Fish received frequent launch-week patches. If an item price, quest trigger, or island gate differs from this route, follow the current in-game objective and check the official Steam announcements linked below.",
        ],
      },
    ],
    sources: [steamSource, planningSource],
    relatedSlugs: ["island-progression", "leeches", "weapons"],
  },
  {
    slug: "endangered-fish",
    category: "guides",
    title: "How to Get an Endangered Fish in How to Fish",
    excerpt: "Catch a fish with the Standard Lure, inspect it for the Endangered Species label, and trade it for the Carrot that summons Pufferfish.",
    primaryKeyword: "how to fish endangered fish",
    secondaryKeywords: ["How to Fish endangered species", "How to Fish endangered creature", "How to Fish carrot bait"],
    intent: "Specific quest problem",
    priority: "S",
    readTime: "5 min read",
    updatedAt: "Last checked · Aug 28, 2026",
    status: "Verified guide",
    sections: [
      {
        id: "short-answer",
        title: "Short answer",
        paragraphs: [
          "An endangered fish is not one hidden species. On the third island, use the pink Standard Lure and inspect every catch before you sell, cook, or eat it. Keep a fish only when its information shows the Endangered Species label, then give that fish to the swimmer in yellow floaties.",
          "The swimmer gives you a Carrot in return. Equip the Carrot as bait to summon the Pufferfish boss.",
        ],
        bullets: ["Reach the third island and speak to the swimmer.", "Buy the new Fishing Rod and pink Standard Lure.", "Inspect every catch and look for the Endangered Species label.", "Trade the labeled fish for a Carrot, then use it as Pufferfish bait."],
      },
      {
        id: "what-counts",
        title: "What counts as an endangered fish?",
        paragraphs: [
          "The label matters more than the species name or appearance. A rare-looking catch or special variant does not automatically complete the request. Inspect the fish and confirm that the endangered label is actually present.",
          "Treat a valid catch like a quest item. If you sell or consume it first, you will need to keep fishing for another labeled catch.",
        ],
      },
      {
        id: "troubleshooting",
        title: "If the swimmer will not accept the fish",
        paragraphs: [
          "Check the catch again and make sure it carries the Endangered Species label. Then confirm that you started the request with the swimmer and that the fish is still intact in your possession.",
          "If you lose the Pufferfish fight, repeat the exchange to obtain another Carrot before trying again.",
        ],
      },
    ],
    sources: [pcGamerPufferfishSource, steamAnnouncementsSource, steamSource],
    relatedSlugs: ["pufferfish", "beginner-guide", "fish-database"],
  },
  {
    slug: "leeches",
    category: "quests",
    title: "How to Find All 3 Leeches in How to Fish",
    excerpt: "Find three tiny Leeches on the Forest Island ground, trade them for Modified Leech bait, and summon the Giant Piranha.",
    primaryKeyword: "how to fish game leeches",
    secondaryKeywords: ["how many leeches How to Fish", "how to fish leech locations", "where are the leeches in How to Fish"],
    intent: "Stuck on a quest",
    priority: "S",
    readTime: "5 min read",
    updatedAt: "Last checked · Aug 28, 2026",
    status: "Verified guide",
    sections: [
      {
        id: "short-answer",
        title: "Short answer",
        paragraphs: [
          "You need three Leeches. They are small ground pickups on the second island, also called the Forest Island; you do not catch them with a fishing rod.",
          "Give all three to the quest NPC near the central shack. She turns them into Modified Leech bait, which you equip before casting into the lake to summon the Giant Piranha.",
        ],
      },
      {
        id: "where-to-look",
        title: "Where to look on Forest Island",
        paragraphs: [
          "Walk the ground around the island instead of searching the water. Leeches look like tiny dark lines and are easy to miss in tall grass, so sweep your view from side to side and watch for the pickup prompt.",
          "Check the island perimeter, the grass around the middle area, and the dirt path near the central cabin. When one appears, look nearby because the pickups can be close together.",
        ],
        bullets: ["Search the ground, not the lake.", "Move slowly through grass and watch for the Leech prompt.", "Check nearby ground after finding the first pickup.", "Confirm that all three are in your possession before returning to the NPC."],
      },
      {
        id: "after-handoff",
        title: "Use the Modified Leech bait",
        paragraphs: [
          "After the handoff, equip the Modified Leech on your fishing rod and cast into the Forest Island lake. Slowly reel it in until the Giant Piranha takes the bait and starts the boss fight.",
          "The bait is consumed. If the fight is lost and the boss must be summoned again, collect another set of three Leeches and repeat the exchange.",
        ],
      },
    ],
    sources: [gamesRadarLeechesSource, dexertoLeechesSource, steamAnnouncementsSource],
    relatedSlugs: ["island-progression", "giant-piranha", "who-stole-my-beer"],
  },
  {
    slug: "sales-player-count",
    category: "game-info",
    title: "How to Fish Player Count, Sales and Revenue Estimate",
    excerpt: "A dated snapshot of the launch, one-million-copy milestone, concurrent-player peak, and what the widely shared revenue estimate actually means.",
    primaryKeyword: "how to fish player count",
    secondaryKeywords: ["how to fish sales", "how to fish revenue", "how much money has How to Fish made"],
    intent: "Check launch and commercial performance",
    priority: "S",
    readTime: "5 min read",
    updatedAt: "Data checked · Aug 28, 2026",
    status: "Verified guide",
    sections: [
      {
        id: "launch-snapshot",
        title: "Launch snapshot",
        paragraphs: [
          "How to Fish launched on Steam on August 20, 2026. The developer announced that the game sold one million copies in its first two days.",
          "SteamDB recorded an all-time concurrent-player peak of 373,971 on August 26, 2026. Concurrent players are not the same as copies sold: one measures people playing at the same moment, while the other measures purchases.",
        ],
        bullets: ["Developer and publisher: Dazed Games.", "Platform in this snapshot: Windows on Steam.", "Modes: single-player and 1-4 player online co-op.", "Controller support: full controller support is listed on Steam."],
      },
      {
        id: "revenue-estimate",
        title: "The revenue number is an estimate, not official revenue",
        paragraphs: [
          "A widely shared launch analysis estimated roughly USD 3.0-4.2 million in gross sales during the first two days, or about CNY 21.5-30 million at the exchange assumptions used in that analysis. It began with one million copies and adjusted the US launch price downward to account for regional pricing.",
          "That range is not an official revenue disclosure. It does not provide a verified country mix, refunds, taxes, Valve's share, or the game's final net income, so it should be read as a rough gross-sales scenario rather than money received by the two-person studio.",
        ],
      },
      {
        id: "how-to-read-live-data",
        title: "How to read changing player data",
        paragraphs: [
          "Player counts change every hour and normally fall after a launch spike. Always check the timestamp on SteamDB before comparing today's live count with the all-time peak on this page.",
          "This page keeps milestone numbers separate from live telemetry so an old snapshot cannot be mistaken for a current player count.",
        ],
      },
    ],
    sources: [steamAnnouncementsSource, steamDbSource, steamSource],
    relatedSlugs: ["updates-roadmap", "beginner-guide", "money-guide"],
  },
  {
    slug: "updates-roadmap",
    category: "game-info",
    title: "How to Fish Roadmap, Updates and Patch Notes",
    excerpt: "Where to find official How to Fish updates, what launch-week patches changed, and how to tell whether an older guide still applies.",
    primaryKeyword: "how to fish roadmap",
    secondaryKeywords: ["How to Fish updates", "How to Fish patch notes", "How to Fish future content"],
    intent: "Check current and future game changes",
    priority: "S",
    readTime: "4 min read",
    updatedAt: "Announcements checked · Aug 28, 2026",
    status: "Verified guide",
    sections: [
      {
        id: "roadmap-status",
        title: "Is there a How to Fish roadmap?",
        paragraphs: [
          "There is no detailed public roadmap with dated features in the official Steam announcements checked for this page. The developer has said that more content and bug fixes are planned, but players should not treat community wish lists as confirmed features.",
          "Use the official Steam announcements page for confirmed patches. This page will separate announced changes from requests and rumors.",
        ],
      },
      {
        id: "launch-week",
        title: "Launch-week update pace",
        paragraphs: [
          "The official announcement feed moved quickly from release posts through multiple hotfixes, including Patch 1.0.9 during launch week. That pace matters because quest triggers, island skips, save behavior, and multiplayer bugs can change faster than third-party guides are updated.",
        ],
        bullets: ["Check the patch number when a route no longer works.", "Re-test boss bait and quest handoffs after progression changes.", "Use official announcements for fixes; use community reports only to identify issues worth testing."],
      },
      {
        id: "guide-versioning",
        title: "How this wiki handles patches",
        paragraphs: [
          "Guides that depend on quest counts, item spawns, progression gates, or boss behavior show a last-checked date and source trail. If a patch changes a route, the relevant page should be updated before a new page is created for the same search intent.",
        ],
      },
    ],
    sources: [steamAnnouncementsSource, steamSource],
    relatedSlugs: ["sales-player-count", "island-progression", "leeches"],
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
    updatedAt: "Last reviewed · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "quest-chain",
        title: "Quest chain at a glance",
        paragraphs: [
          "Treat this as a compact chain: start the request, keep the required item, complete the handoff, then prepare for the encounter that unlocks the next step.",
        ],
        bullets: ["Quest giver and starting condition.", "Required item and where the player should look.", "Handoff location and reward.", "Next unlock or related boss guide."],
      },
      {
        id: "common-mistake",
        title: "Common mistake to avoid",
        paragraphs: ["Keep the quest item until the handoff is complete. If the next step becomes a boss encounter, prepare separately before consuming or losing any one-use bait."],
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
    updatedAt: "Last reviewed · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "progression-model",
        title: "The progression model",
        paragraphs: [
          "Progression connects the lighthouse, NPC quests, boss encounters, and new-island unlocks. When you feel stuck, return to the most recent quest giver and check whether the current island boss has been summoned and defeated.",
        ],
        bullets: ["Lighthouse and first objectives.", "Island 2 quest and boss chain.", "Island 3 and later progression gates.", "Volcano and final-route preparation."],
      },
      {
        id: "what-to-check",
        title: "What to check when the next island stays locked",
        paragraphs: ["Confirm the island's quest handoff, boss reward, and any coordinates or travel item before leaving. Use the related quest and boss guides below when one of those steps is incomplete."],
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
    updatedAt: "Last reviewed · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "before-the-fight",
        title: "Before the fight",
        paragraphs: ["Complete the sailor's opening objective, keep the required bait or quest item, and enter with a weapon you can use while moving. Preparation matters because another summon attempt may cost time and money."],
        bullets: ["Confirm the encounter has been unlocked.", "Bring the bait or quest item required by the current route.", "Leave room to move instead of overloading the loadout with niche options."],
      },
      {
        id: "fight-plan",
        title: "Simple fight plan",
        paragraphs: ["Watch the attack rhythm before committing to damage. Keep moving, use the available space, and attack during the safer recovery windows instead of trading hits at close range."],
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
    updatedAt: "Last reviewed · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "encounter-loop",
        title: "Understand the encounter loop",
        paragraphs: ["Separate the guide into summon, damage windows, adds or hazards, and reward handoff. That structure helps a player return to the exact step where they failed."],
        bullets: ["Complete the bait or quest prerequisite.", "Prioritize the main target without ignoring the arena hazard.", "Confirm the reward item is delivered to the correct NPC."],
      },
      {
        id: "retry-checklist",
        title: "Before another attempt",
        paragraphs: ["If the fight fails, check whether the bait was consumed, recover or replace lost equipment, and review the current patch notes before assuming an older island skip or boss behavior still works."],
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
    updatedAt: "Last reviewed · Aug 23, 2026",
    status: "Ready for review",
    sections: [
      {
        id: "bait-and-entry",
        title: "Bait and entry requirements",
        paragraphs: ["Reach the third island, trade a fish carrying the Endangered Species label to the swimmer, and keep the Carrot he gives you. Equip that Carrot as bait to summon the Pufferfish."],
      },
      {
        id: "phase-guide",
        title: "Read the phases, not just the damage",
        paragraphs: ["The Pufferfish grows as it takes damage and leaves dangerous purple poison behind. Keep moving, use trees and the shop to break its route, and shoot only when the terrain gives you enough space."],
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
    updatedAt: "Last reviewed · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "group-the-list",
        title: "Group achievements by how players unlock them",
        paragraphs: ["Work through achievements in four groups: automatic story progress, combat or trick-shot challenges, collection goals, and economy or upgrade milestones."],
        bullets: ["Story and progression.", "Boss and combat challenges.", "Fishipedia and collection work.", "Money, upgrades, and special actions."],
      },
      {
        id: "completion-route",
        title: "Build a completion route",
        paragraphs: ["Clear story unlocks first, save collection work for islands with the right equipment, and use a dedicated checklist for actions such as 360 No Scope that are easy to perform incorrectly."],
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
    updatedAt: "Last reviewed · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "checklist",
        title: "Checklist format",
        paragraphs: ["Confirm the required target and weapon, launch the catch into the air, complete the rotation, and fire without aiming down sights. Check for the achievement notification before leaving the area."],
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
    updatedAt: "Last reviewed · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "upgrade-rule",
        title: "Use a bottleneck rule",
        paragraphs: ["Rank upgrades by the problem they solve: reach, damage, mobility, information, or income. Fix the bottleneck that blocks the current quest or boss before spending on a general stat increase."],
      },
      {
        id: "comparison-rule",
        title: "Compare cost with immediate use",
        paragraphs: ["Compare each purchase by cost, current use case, and the next quest or boss where it becomes valuable. Recheck shop values after balance updates rather than relying on an old universal tier list."],
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
    updatedAt: "Last reviewed · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "money-phases",
        title: "Organize the economy by phase",
        paragraphs: ["Use different money goals for early, mid, and late progression. The best catch or route changes as equipment improves, so fund the next useful upgrade instead of repeating one farm forever."],
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
    excerpt: "A collection hub for fish locations, variants, selling notes, and Fishipedia progress.",
    primaryKeyword: "how to fish all fish locations",
    secondaryKeywords: ["How to Fish fish guide", "How to Fish Fishipedia", "How to Fish rare fish"],
    intent: "Collection reference",
    priority: "A",
    readTime: "4 min read",
    updatedAt: "Last reviewed · Aug 23, 2026",
    status: "Research draft",
    sections: [
      {
        id: "database-shape",
        title: "How to use the fish database",
        paragraphs: ["Search by location, variant, quest, or achievement need. Individual fish pages are most useful when a catch has a special spawn condition, quest role, or collection requirement."],
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
