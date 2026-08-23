import Link from "next/link";

export default function NotFound() {
  return <main><section className="page-hero"><div className="container narrow-container"><span className="eyebrow">No charted waters here</span><h1>That guide has not been mapped yet.</h1><p>Try the wiki home or search for a different quest, boss, or achievement.</p><div className="hero-actions"><Link href="/" className="button button-primary">Back to the wiki</Link><Link href="/search" className="button button-ghost">Search guides</Link></div></div></section></main>;
}

