import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentManager from "@/components/ConsentManager";
import OptionalAnalytics from "@/components/OptionalAnalytics";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "How to Fish Game Wiki | Guides, Bosses & Achievements",
    template: "%s | How to Fish Game Wiki",
  },
  description: "A current How to Fish Game wiki for quest answers, boss strategies, island progression, weapons, player counts, and updates.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "How to Fish Game Wiki",
    description: "Quest answers, boss strategies, island routes, equipment, player counts, and current updates for How to Fish.",
    url: siteUrl,
    siteName: "How to Fish Game Wiki",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell"><Header />{children}<Footer /></div>
        <ConsentManager />
        <OptionalAnalytics gaId={gaId} />
      </body>
    </html>
  );
}
