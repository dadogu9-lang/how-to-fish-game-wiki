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
                <span className="status-pill">{article.status}</span>
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
            <p>This is a research draft. Use the links below as a starting point, then verify volatile details in the current game build before publishing.</p>
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
            <span className="mini-label">Editorial rule</span>
            <strong>Lead with the answer. Show the evidence below it.</strong>
            <p>That keeps the page useful for players while preserving a trail for future corrections.</p>
          </div>
        </aside>
      </section>

      {related.length ? <section className="container related-section"><div className="section-heading-line"><span className="eyebrow">Keep exploring</span><span className="line" /></div><div className="section-title-row"><h2>Related guides</h2><Link href={`/${article.category}`}>View section →</Link></div><div className="article-grid related-grid">{related.map((item) => <ArticleCard key={item.slug} article={item} />)}</div></section> : null}
    </main>
  );
}
