import Link from "next/link";
import type { CategorySlug } from "@/lib/content";
import { getArticlesByCategory, getCategory } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/structured-data";

export default function CategoryPage({ slug }: { slug: CategorySlug }) {
  const category = getCategory(slug);
  const categoryArticles = getArticlesByCategory(slug);

  if (!category) return null;

  return (
    <main>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Wiki", path: "/" },
          { name: category.label, path: `/${category.slug}` },
        ])}
      />
      <section className="page-hero">
        <div className="container narrow-container">
          <div className="breadcrumbs"><Link href="/">Wiki</Link><span>/</span><span>{category.label}</span></div>
          <span className="eyebrow">{category.eyebrow}</span>
          <h1>{category.heading ?? category.label}</h1>
          <p>{category.description}</p>
        </div>
      </section>
      <section className="container listing-section">
        <div className="section-title-row"><div><span className="mini-label">{categoryArticles.length} current guides</span><h2>Browse {category.label.toLowerCase()}</h2></div><Link href="/search" className="text-link">Search all guides →</Link></div>
        {categoryArticles.length ? <div className="article-grid">{categoryArticles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div> : <div className="empty-state"><span className="category-icon">{category.icon}</span><h2>More {category.label.toLowerCase()} are on the way.</h2><p>This section will appear in search when its first complete guide is ready.</p><Link href="/" className="button button-secondary">Back to wiki home</Link></div>}
      </section>
    </main>
  );
}
