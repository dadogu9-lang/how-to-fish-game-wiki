import Link from "next/link";
import type { Article } from "@/lib/content";
import { getCategory, getRelatedArticles } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";

export default function ArticlePage({ article }: { article: Article }) {
  const category = getCategory(article.category);
  const related = getRelatedArticles(article);

  return (
    <main>
      <section className="article-hero">
        <div className="container narrow-container">
          <div className="breadcrumbs"><Link href="/">Wiki</Link><span>/</span><Link href={`/${article.category}`}>{category?.label}</Link><span>/</span><span>{article.title}</span></div>
          <div className="article-hero-grid">
            <div>
              <div className="eyebrow-row">
                <span className="eyebrow">{category?.eyebrow}</span>
              </div>
              <h1>{article.title}</h1>
              <p className="article-lead">{article.excerpt}</p>
              <div className="article-meta"><span>{article.readTime}</span><span>·</span><span>{article.updatedAt}</span></div>
            </div>
            <aside className="intent-card">
              <span className="mini-label">Search intent</span>
              <strong>{article.intent}</strong>
              <span className="mini-label">Primary keyword</span>
              <code>{article.primaryKeyword}</code>
            </aside>
          </div>
        </div>
      </section>

      <section className="container article-layout">
        <article className="article-body">
          {article.sections.map((section) => (
            <section key={section.id} id={section.id} className="article-section">
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
            </section>
          ))}

          <div className="keyword-strip">
            <span className="mini-label">Also targets</span>
            <div>{article.secondaryKeywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div>
          </div>

          <section className="source-notes" id="sources">
            <div className="section-heading-line"><span className="eyebrow">Evidence trail</span><span className="line" /></div>
            <h2>Sources and update notes</h2>
            <p>Game details can change after patches. These sources were checked for the date shown above; use current in-game labels and official announcements when they differ.</p>
            <ol>
              {article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a><span>{source.note}</span></li>)}
            </ol>
          </section>
        </article>

        <aside className="article-sidebar">
          <div className="sidebar-card sticky-card">
            <span className="mini-label">On this page</span>
            <nav aria-label="Article sections">
              {article.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
              <a href="#sources">Sources and update notes</a>
            </nav>
          </div>
          <div className="sidebar-card fact-card">
            <span className="mini-label">Quick rule</span>
            <strong>Use the direct answer first, then check the dated sources.</strong>
            <p>Patch-sensitive facts are easier to verify when the route and evidence stay together.</p>
          </div>
        </aside>
      </section>

      {related.length ? <section className="container related-section"><div className="section-heading-line"><span className="eyebrow">Keep exploring</span><span className="line" /></div><div className="section-title-row"><h2>Related guides</h2><Link href={`/${article.category}`}>View section →</Link></div><div className="article-grid related-grid">{related.map((item) => <ArticleCard key={item.slug} article={item} />)}</div></section> : null}
    </main>
  );
}
