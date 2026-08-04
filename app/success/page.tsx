"use client";



import __i18n from "../../i18n/migrated/fr/app/success/page.json";
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
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "all" || value === "necessary" ? value : null;
  } catch {
    return null;
  }
}

function fireConversion(): boolean {
  if (typeof window === "undefined") return false;
  if (typeof window.gtag !== "function") return false;

  window.gtag("event", "conversion", {
    send_to: __i18n["aw_17878472225_yvpxcmjrqocbekgsj81c"],
    transaction_id: "",
  });

  return true;
}

export default function SuccessPage() {
  useEffect(() => {
    const consent = readConsent();
    if (consent !== "all") return;

    if (fireConversion()) return;

    let tries = 0;

    const timer = window.setInterval(() => {
      tries++;

      if (fireConversion() || tries >= 10) {
        window.clearInterval(timer);
      }
    }, 200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: __i18n["40px_20px"],
        background: __i18n["070b18"],
        color: __i18n["fff"],
      }}
    >
      <div
        style={{
          maxWidth: 650,
          width: "100%",
          textAlign: "center",
          padding: 40,
          borderRadius: 24,
          background: __i18n["rgba_255_255_255_0_05"],
          border: __i18n["1px_solid_rgba_244_201_93_25"],
          boxShadow: __i18n["0_30px_80px_rgba_0_0_0_35"],
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 20 }}>🌙</div>

        <h1 style={{ fontSize: 38, marginBottom: 16 }}>
          {__i18n["acces_confirme"]}</h1>

        <p style={{ fontSize: 18, opacity: 0.9, lineHeight: 1.7 }}>
          {__i18n["merci_pour_votre_confiance"]}</p>

        <p style={{ marginTop: 12, opacity: 0.75, lineHeight: 1.7 }}>
          {__i18n["votre_acces_a_luna_est_maintenant_active_vous_pouvez_commenc"]}</p>

        <Link
          href="/chat"
          style={{
            display: "inline-block",
            marginTop: 32,
            padding: __i18n["14px_32px"],
            borderRadius: 999,
            textDecoration: "none",
            background: __i18n["f4c95d"],
            color: "#111",
            fontWeight: 700,
          }}
        >
          {__i18n["aller_au_chat"]}</Link>
      </div>
    </main>
  );
}
