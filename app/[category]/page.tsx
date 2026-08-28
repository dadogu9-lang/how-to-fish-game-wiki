import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { categories, getArticlesByCategory, getCategory } from "@/lib/content";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = getCategory(params.category);
  if (!category) return {};
  const hasArticles = getArticlesByCategory(category.slug).length > 0;
  return {
    title: category.seoTitle ?? category.label,
    description: category.description,
    alternates: { canonical: `/${category.slug}` },
    robots: { index: hasArticles, follow: true },
  };
}

export default function CategoryRoute({ params }: { params: { category: string } }) {
  const category = getCategory(params.category);
  if (!category) return notFound();
  return <CategoryPage slug={category.slug} />;
}
