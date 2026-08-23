import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticlePage from "@/components/ArticlePage";
import { articles, getArticleBySlug, getCategory } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((article) => ({ category: article.category, slug: article.slug }));
}

export function generateMetadata({ params }: { params: { category: string; slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article || article.category !== params.category) return {};
  return { title: article.title, description: article.excerpt, keywords: [article.primaryKeyword, ...article.secondaryKeywords], alternates: { canonical: `/${article.category}/${article.slug}` }, openGraph: { title: article.title, description: article.excerpt, type: "article" } };
}

export default function ArticleRoute({ params }: { params: { category: string; slug: string } }) {
  const article = getArticleBySlug(params.slug);
  const category = getCategory(params.category);
  if (!article || !category || article.category !== category.slug) return notFound();
  return <ArticlePage article={article} />;
}
