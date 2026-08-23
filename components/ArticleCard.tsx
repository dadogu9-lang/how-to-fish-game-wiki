import Link from "next/link";
import type { Article } from "@/lib/content";
import { getCategory } from "@/lib/content";

export default function ArticleCard({ article }: { article: Article }) {
  const category = getCategory(article.category);

  return (
    <article className="article-card">
      <div className="card-topline">
        <span className="category-kicker">{category?.label}</span>
        <span className={`priority priority-${article.priority.toLowerCase()}`}>{article.priority}</span>
      </div>
      <h3><Link href={`/${article.category}/${article.slug}`}>{article.title}</Link></h3>
      <p>{article.excerpt}</p>
      <div className="card-footer">
        <span>{article.readTime}</span>
        <Link href={`/${article.category}/${article.slug}`} className="arrow-link" aria-label={`Read ${article.title}`}>Read guide <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}

