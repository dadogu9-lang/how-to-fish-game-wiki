import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import ArticleCard from "@/components/ArticleCard";
import { categories, getArticlesByCategory, getFeaturedArticles } from "@/lib/content";

export default function HomePage() {
  const featured = getFeaturedArticles();

  return (
    <main>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow-row"><span className="eyebrow">Independent guide project</span><span className="live-dot">Research draft</span></div>
            <h1>Find the answer before the water gets rough.</h1>
            <p className="hero-lead">A clean, searchable field guide for How to Fish — from the first cast to the final achievement.</p>
            <div className="hero-actions"><Link href="/guides/beginner-guide" className="button button-primary">Start with the beginner guide <span aria-hidden="true">→</span></Link><Link href="/search" className="button button-ghost">Search the wiki</Link></div>
            <div className="hero-note"><span>⌁</span><span>Built around verified sources, clear routes, and pages that answer one real player question at a time.</span></div>
          </div>
          <div className="hero-map" aria-label="Illustration of a route map from the lighthouse to the volcano">
            <div className="map-glow" />
            <div className="map-label map-label-start"><span>01</span> Lighthouse</div>
            <div className="map-label map-label-mid"><span>02</span> Boss routes</div>
            <div className="map-label map-label-end"><span>03</span> Volcano</div>
            <div className="route-line route-one" /><div className="route-line route-two" /><div className="route-line route-three" />
            <div className="map-node node-one">⌂</div><div className="map-node node-two">◈</div><div className="map-node node-three">✦</div>
            <div className="map-watermark">HTF<br /><span>FIELD NOTES</span></div>
          </div>
        </div>
      </section>

      <section className="container signal-strip" aria-label="Project signals">
        <div><span className="mini-label">01</span><strong>One answer</strong><span>per search intent</span></div>
        <div><span className="mini-label">02</span><strong>Source notes</strong><span>on every guide</span></div>
        <div><span className="mini-label">03</span><strong>Version aware</strong><span>because games change</span></div>
      </section>

      <section className="container section-block">
        <div className="section-heading-line"><span className="eyebrow">Explore the field guide</span><span className="line" /></div>
        <div className="section-title-row"><h2>Every route has a place.</h2><Link href="/search" className="text-link">View all guides →</Link></div>
        <div className="category-grid">{categories.map((category) => <CategoryCard key={category.slug} {...category} count={getArticlesByCategory(category.slug).length} />)}</div>
      </section>

      <section className="feature-band">
        <div className="container feature-grid">
          <div><span className="eyebrow">First pages to publish</span><h2>Start where players are already stuck.</h2><p>The first release focuses on high-intent questions: the beginner route, island progression, the leeches count, and the boss pages players search mid-run.</p><Link href="/guides" className="text-link">Browse the launch set →</Link></div>
          <div className="priority-list">{featured.slice(0, 4).map((article, index) => <Link key={article.slug} href={`/${article.category}/${article.slug}`}><span>0{index + 1}</span><strong>{article.title}</strong><small>{article.priority} priority · {article.readTime}</small><b aria-hidden="true">↗</b></Link>)}</div>
        </div>
      </section>

      <section className="container section-block latest-block">
        <div className="section-heading-line"><span className="eyebrow">Research desk</span><span className="line" /></div>
        <div className="section-title-row"><div><span className="mini-label">Drafts with a clear next step</span><h2>Latest guide notes.</h2></div><span className="muted-copy">Original summaries · Source-aware · Ready to expand</span></div>
        <div className="article-grid">{featured.slice(0, 3).map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
      </section>
    </main>
  );
}
