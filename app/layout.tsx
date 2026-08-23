import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "How to Fish Game Wiki | Guides, Bosses & Achievements",
    template: "%s | How to Fish Game Wiki",
  },
  description: "A research-first How to Fish Game wiki for quests, bosses, island progression, weapons, fish, and achievements.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "How to Fish Game Wiki",
    description: "Guides, boss strategies, quests, progression, and achievement checklists for How to Fish.",
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
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
