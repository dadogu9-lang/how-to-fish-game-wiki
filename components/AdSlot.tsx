"use client";

import { useEffect, useRef, useState } from "react";
import { OPTIONAL_CONSENT_EVENT, OPTIONAL_CONSENT_KEY, type OptionalConsent } from "@/lib/consent";

const MOBILE_UNIT = { frame: "/ad-frame-mobile.html", width: 320, height: 50 };
const DESKTOP_UNIT = { frame: "/ad-frame-desktop.html", width: 300, height: 250 };

function getUnit(isMobile: boolean) {
  return isMobile ? MOBILE_UNIT : DESKTOP_UNIT;
}

export default function AdSlot() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [accepted, setAccepted] = useState(false);
  const [nearViewport, setNearViewport] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 680px)");
    const syncMedia = () => setIsMobile(media.matches);
    const syncConsent = (event?: Event) => {
      const detail = (event as CustomEvent<OptionalConsent> | undefined)?.detail;
      setAccepted((detail ?? localStorage.getItem(OPTIONAL_CONSENT_KEY)) === "accepted");
    };
    syncMedia();
    syncConsent();
    media.addEventListener("change", syncMedia);
    window.addEventListener(OPTIONAL_CONSENT_EVENT, syncConsent);
    return () => {
      media.removeEventListener("change", syncMedia);
      window.removeEventListener(OPTIONAL_CONSENT_EVENT, syncConsent);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || nearViewport) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setNearViewport(true),
      { rootMargin: "300px 0px" },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, [nearViewport]);

  const unit = getUnit(isMobile);
  const canLoad = accepted && nearViewport;

  return (
    <div
      ref={rootRef}
      className={`ad-slot ${isMobile ? "ad-slot-mobile" : "ad-slot-desktop"}`}
      data-ad-slot="responsive-article"
      aria-label="Advertisement"
    >
      <span className="ad-label">Advertisement</span>
      {canLoad ? (
        <iframe
          key={unit.frame}
          title="Advertisement"
          width={unit.width}
          height={unit.height}
          loading="lazy"
          sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          referrerPolicy="strict-origin-when-cross-origin"
          src={unit.frame}
        />
      ) : (
        <div className="ad-placeholder" aria-hidden="true" />
      )}
    </div>
  );
}
