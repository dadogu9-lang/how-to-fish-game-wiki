"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { articles, getCategory } from "@/lib/content";

export default function SearchClient() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!normalizedQuery) return articles.slice(0, 6);
    return articles.filter((article) => [article.title, article.excerpt, article.primaryKeyword, ...article.secondaryKeywords].join(" ").toLowerCase().includes(normalizedQuery));
  }, [normalizedQuery]);

  return (
    <div className="search-tool">
      <label htmlFor="wiki-search">Search guides, bosses, quests, and keywords</label>
      <div className="search-input-wrap"><span aria-hidden="true">⌕</span><input id="wiki-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “pufferfish”, “leeches”, or “achievement”" /></div>
      <div className="search-result-heading"><span>{normalizedQuery ? `${results.length} result${results.length === 1 ? "" : "s"}` : "Featured searches"}</span>{normalizedQuery ? <button type="button" onClick={() => setQuery("")}>Clear</button> : null}</div>
      <div className="search-results">
        {results.length ? results.map((article) => {
          const category = getCategory(article.category);
          return <Link className="search-result" key={article.slug} href={`/${article.category}/${article.slug}`}><span className="search-result-category">{category?.label}</span><strong>{article.title}</strong><p>{article.excerpt}</p><span className="arrow-link">Open guide →</span></Link>;
        }) : <div className="empty-state"><h2>No matching guide yet.</h2><p>Try a broader term, or add this query to the content backlog.</p></div>}
      </div>
    </div>
  );
}
