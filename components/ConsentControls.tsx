"use client";

import type { OptionalConsent } from "@/lib/consent";
import { OPTIONAL_CONSENT_EVENT, OPTIONAL_CONSENT_KEY } from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConsentControls({ onSelect }: { onSelect?: (choice: OptionalConsent) => void }) {
  function save(choice: OptionalConsent) {
    localStorage.setItem(OPTIONAL_CONSENT_KEY, choice);
    const granted = choice === "accepted" ? "granted" : "denied";
    window.gtag?.("consent", "update", {
      ad_storage: granted,
      analytics_storage: granted,
      ad_user_data: granted,
      ad_personalization: granted,
    });
    window.dispatchEvent(new CustomEvent(OPTIONAL_CONSENT_EVENT, { detail: choice }));
    onSelect?.(choice);
  }

  return (
    <div className="consent-actions" aria-label="Optional cookie choices">
      <button type="button" className="button-secondary" onClick={() => save("rejected")}>Reject optional</button>
      <button type="button" className="button-primary" onClick={() => save("accepted")}>Accept optional</button>
    </div>
  );
}
