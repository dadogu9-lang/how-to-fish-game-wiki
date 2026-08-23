import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { categories, getCategory } from "@/lib/content";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = getCategory(params.category);
  if (!category) return {};
  return { title: category.label, description: category.description, alternates: { canonical: `/${category.slug}` } };
}

export default function CategoryRoute({ params }: { params: { category: string } }) {
  const category = getCategory(params.category);
  if (!category) return notFound();
  return <CategoryPage slug={category.slug} />;
}
