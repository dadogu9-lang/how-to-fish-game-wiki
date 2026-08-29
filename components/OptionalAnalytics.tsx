"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { OPTIONAL_CONSENT_EVENT, OPTIONAL_CONSENT_KEY, type OptionalConsent } from "@/lib/consent";

export default function OptionalAnalytics({ gaId }: { gaId?: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = (event?: Event) => {
      const detail = (event as CustomEvent<OptionalConsent> | undefined)?.detail;
      setEnabled((detail ?? localStorage.getItem(OPTIONAL_CONSENT_KEY)) === "accepted");
    };
    sync();
    window.addEventListener(OPTIONAL_CONSENT_EVENT, sync);
    return () => window.removeEventListener(OPTIONAL_CONSENT_EVENT, sync);
  }, []);

  if (!gaId || !enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function(){window.dataLayer.push(arguments);};
          window.gtag('js', new Date());
          window.gtag('consent', 'update', {
            analytics_storage: 'granted',
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted'
          });
          window.gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
