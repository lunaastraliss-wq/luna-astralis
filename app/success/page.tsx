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
    send_to: "AW-17878472225/YVPXCMjRqOcbEKGsj81C",
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
        padding: "40px 20px",
        background: "#070b18",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 650,
          width: "100%",
          textAlign: "center",
          padding: 40,
          borderRadius: 24,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(244,201,93,.25)",
          boxShadow: "0 30px 80px rgba(0,0,0,.35)",
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 20 }}>🌙</div>

        <h1 style={{ fontSize: 38, marginBottom: 16 }}>
          Accès confirmé
        </h1>

        <p style={{ fontSize: 18, opacity: 0.9, lineHeight: 1.7 }}>
          Merci pour votre confiance.
        </p>

        <p style={{ marginTop: 12, opacity: 0.75, lineHeight: 1.7 }}>
          Votre accès à Luna est maintenant activé.
          Vous pouvez commencer votre échange dès maintenant.
        </p>

        <Link
          href="/chat"
          style={{
            display: "inline-block",
            marginTop: 32,
            padding: "14px 32px",
            borderRadius: 999,
            textDecoration: "none",
            background: "#f4c95d",
            color: "#111",
            fontWeight: 700,
          }}
        >
          Aller au chat
        </Link>
      </div>
    </main>
  );
}
