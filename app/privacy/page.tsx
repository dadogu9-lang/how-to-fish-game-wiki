import type { Metadata } from "next";
import ConsentControls from "@/components/ConsentControls";

export const metadata: Metadata = {
  title: "Privacy and Cookie Choices",
  description: "How this independent guide uses essential storage, optional analytics, and optional advertising.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <section className="container narrow-container privacy-content">
        <span className="eyebrow">Site information</span>
        <h1>Privacy and cookie choices</h1>
        <p className="privacy-updated">Last updated: August 29, 2026</p>

        <h2>Your choice</h2>
        <p>This site stores your accept-or-reject choice in your browser so it can respect that decision on later visits. This choice storage is necessary for the privacy control itself.</p>
        <ConsentControls />

        <h2>Google Analytics</h2>
        <p>If you accept optional cookies, Google Analytics may collect usage information such as pages viewed, approximate location, device details, and referral source. We use it to understand and improve the guide. Analytics storage remains denied when you reject optional cookies.</p>

        <h2>Adsterra advertising</h2>
        <p>If you accept optional cookies, selected guide pages may load an advertisement supplied by Adsterra. Adsterra and its advertising partners may use cookies, pixels, IP addresses, device information, and interaction data to deliver and measure advertising. Advertising does not load when you reject optional cookies.</p>

        <h2>Change your choice</h2>
        <p>Use “Cookie settings” in the footer at any time, or use the buttons above. Rejecting optional cookies prevents new optional analytics and advertising from loading on later page views.</p>

        <h2>External policies</h2>
        <ul>
          <li><a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy Policy ↗</a></li>
          <li><a href="https://adsterra.com/privacy-policy/" target="_blank" rel="noreferrer">Adsterra Privacy Policy ↗</a></li>
          <li><a href="https://adsterra.com/cookies/" target="_blank" rel="noreferrer">Adsterra Cookie Policy ↗</a></li>
        </ul>
      </section>
    </main>
  );
}
