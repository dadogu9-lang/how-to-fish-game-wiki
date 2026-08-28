import type { MetadataRoute } from "next";
import { articles, categories, getArticlesByCategory } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    ...categories
      .filter((category) => getArticlesByCategory(category.slug).length > 0)
      .map((category) => ({ url: `${baseUrl}/${category.slug}`, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...articles.map((article) => ({ url: `${baseUrl}/${article.category}/${article.slug}`, lastModified: new Date("2026-08-28"), changeFrequency: "weekly" as const, priority: article.priority === "S" ? 0.9 : 0.7 })),
  ];
}
