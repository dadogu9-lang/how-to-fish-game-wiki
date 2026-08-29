"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ConsentControls from "@/components/ConsentControls";
import { OPEN_CONSENT_EVENT, OPTIONAL_CONSENT_KEY } from "@/lib/consent";

export default function ConsentManager() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(localStorage.getItem(OPTIONAL_CONSENT_KEY) === null);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  if (!open) return null;

  return (
    <aside className="consent-banner" aria-label="Optional cookies and advertising">
      <div>
        <strong>Your privacy choices</strong>
        <p>We use optional analytics and advertising only if you accept. You can change this choice at any time.</p>
        <Link href="/privacy">Read the privacy notice</Link>
      </div>
      <ConsentControls onSelect={() => setOpen(false)} />
    </aside>
  );
}
