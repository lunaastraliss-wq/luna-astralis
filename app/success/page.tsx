"use client";

import { useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "luna_astralis_cookie_consent_v1";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function readConsent(): "all" | "necessary" | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "all" || v === "necessary" ? v : null;
  } catch {
    return null;
  }
}

function fireConversion(): boolean {
  if (typeof window === "undefined") return false;
  if (typeof window.gtag !== "function") return false;

  window.gtag("event", "conversion", {
    send_to: "AW-17878472225/YVPXCMjRqOcbEKGsj81C",
    transaction_id: "",
  });

  return true;
}

export default function SuccessPage() {
  useEffect(() => {
    // ✅ Ne track pas si l’utilisateur a refusé
    const consent = readConsent();
    if (consent !== "all") return;

    // ✅ Essaie tout de suite
    if (fireConversion()) return;

    // ✅ Sinon retry (gtag peut charger après)
    let tries = 0;
    const t = window.setInterval(() => {
      tries++;
      if (fireConversion() || tries >= 10) window.clearInterval(t); // ~2s max
    }, 200);

    return () => window.clearInterval(t);
  }, []);

  return (
    <div style={{ padding: 28 }}>
      <h1>Paiement confirmé ✅</h1>
      <p>Merci ! Ton accès est activé.</p>

      <div style={{ marginTop: 18 }}>
        <Link href="/chat">Aller au chat</Link>
      </div>
    </div>
  );
}
