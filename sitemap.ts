import type { MetadataRoute } from "next";
import { articles, categories } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/search`, changeFrequency: "weekly", priority: 0.5 },
    ...categories.map((category) => ({ url: `${baseUrl}/${category.slug}`, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...articles.map((article) => ({ url: `${baseUrl}/${article.category}/${article.slug}`, lastModified: new Date("2026-08-23"), changeFrequency: "monthly" as const, priority: article.priority === "S" ? 0.9 : 0.7 })),
  ];
}
