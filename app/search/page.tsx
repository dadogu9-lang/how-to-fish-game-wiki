import type { Metadata } from "next";
import Link from "next/link";
import SearchClient from "@/components/SearchClient";

export const metadata: Metadata = {
  title: "Search the Wiki",
  description: "Search How to Fish Game guides, quests, bosses, weapons, fish, and achievements.",
  alternates: { canonical: "/search" },
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return <main><section className="page-hero"><div className="container narrow-container"><div className="breadcrumbs"><Link href="/">Wiki</Link><span>/</span><span>Search</span></div><span className="eyebrow">Field guide index</span><h1>Search the wiki.</h1><p>Start with the problem in front of you. The search index is intentionally small and clear while the first guides are being verified.</p></div></section><section className="container search-section"><SearchClient /></section></main>;
}
