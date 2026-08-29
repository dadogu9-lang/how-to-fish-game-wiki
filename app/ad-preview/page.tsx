import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Advertisement Preview",
  description: "Private quality-assurance page for the site's responsive advertisement.",
  alternates: { canonical: "/ad-preview" },
  robots: { index: false, follow: false },
};

export default function AdPreviewPage() {
  return (
    <main className="ad-preview-page">
      <section className="container narrow-container ad-preview-content">
        <span className="eyebrow">Quality assurance</span>
        <h1>Advertisement preview</h1>
        <p>This noindex page isolates the responsive unit for desktop and mobile checks before it appears in an article.</p>
        <AdSlot />
      </section>
    </main>
  );
}
