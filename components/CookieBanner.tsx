"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "luna_astralis_cookie_consent_v1"; // "all" | "necessary" | "analytics"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function readConsent(): "all" | "necessary" | "analytics" | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "all" || v === "necessary" || v === "analytics" ? v : null;
  } catch {
    return null;
  }
}

function writeConsent(v: "all" | "necessary" | "analytics") {
  try {
    localStorage.setItem(CONSENT_KEY, v);
  } catch {}
}

function pushGtagConsent(opts: { ads: boolean; analytics: boolean }) {
  if (typeof window === "undefined") return;

  const update = () => {
    if (typeof window.gtag !== "function") return false;

    window.gtag("consent", "update", {
      // Ads
      ad_storage: opts.ads ? "granted" : "denied",
      ad_user_data: opts.ads ? "granted" : "denied",
      ad_personalization: opts.ads ? "granted" : "denied",
      // Analytics
      analytics_storage: opts.analytics ? "granted" : "denied",
    });

    return true;
  };

  if (update()) return;

  let tries = 0;
  const t = window.setInterval(() => {
    tries++;
    if (update() || tries >= 10) window.clearInterval(t);
  }, 200);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // uniquement la mesure d’audience ici
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    const consent = readConsent();

    if (!consent) {
      // ✅ pas de choix => on garde tout refusé (et on applique au cas où)
      pushGtagConsent({ ads: false, analytics: false });
      setAnalyticsAllowed(false);
      setVisible(true);
      return;
    }

    if (consent === "all") {
      setAnalyticsAllowed(true);
      pushGtagConsent({ ads: true, analytics: true });
      setVisible(false);
      return;
    }

    if (consent === "analytics") {
      setAnalyticsAllowed(true);
      pushGtagConsent({ ads: false, analytics: true });
      setVisible(false);
      return;
    }

    // necessary
    setAnalyticsAllowed(false);
    pushGtagConsent({ ads: false, analytics: false });
    setVisible(false);
  }, []);

  const acceptAll = () => {
    writeConsent("all");
    setAnalyticsAllowed(true);
    pushGtagConsent({ ads: true, analytics: true });
    setShowSettings(false);
    setVisible(false);
  };

  const decline = () => {
    writeConsent("necessary");
    setAnalyticsAllowed(false);
    pushGtagConsent({ ads: false, analytics: false });
    setShowSettings(false);
    setVisible(false);
  };

  const save = () => {
    if (analyticsAllowed) {
      writeConsent("analytics"); // ✅ analytics oui, ads non
      pushGtagConsent({ ads: false, analytics: true });
    } else {
      writeConsent("necessary");
      pushGtagConsent({ ads: false, analytics: false });
    }
    setShowSettings(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: "auto 0 0 0",
        zIndex: 2147483647,
        padding: "14px 16px 18px",
        background: "rgba(10,6,20,0.98)",
        borderTop: "1px solid rgba(212,175,55,0.35)",
        color: "#f3f4f6",
      }}
    >
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: 13, textAlign: "center", lineHeight: 1.4, margin: 0 }}>
          Luna Astralis utilise des cookies pour assurer le bon fonctionnement du site et mesurer
          l’audience. Tu peux accepter ou refuser les cookies non essentiels.
        </p>

        {showSettings && (
          <div
            style={{
              width: "100%",
              maxWidth: 980,
              background: "rgba(17,12,32,0.98)",
              border: "1px solid rgba(212,175,55,0.35)",
              borderRadius: 14,
              padding: "10px 12px",
            }}
          >
            <h3 style={{ margin: 0, marginBottom: 4, fontSize: 13, fontWeight: 800 }}>
              Paramètres des cookies
            </h3>

            <label style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <input type="checkbox" checked readOnly />
              <span style={{ fontSize: 12 }}>Cookies essentiels (obligatoires)</span>
            </label>

            <label style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <input
                type="checkbox"
                checked={analyticsAllowed}
                onChange={(e) => setAnalyticsAllowed(e.target.checked)}
              />
              <span style={{ fontSize: 12 }}>Mesure d’audience (analytics)</span>
            </label>

            <button
              onClick={save}
              style={{
                marginTop: 6,
                background: "linear-gradient(135deg, #d4af37, #f7e7a1)",
                border: "none",
                borderRadius: 999,
                padding: "7px 16px",
                fontSize: 12,
                fontWeight: 900,
                color: "#120b1f",
                cursor: "pointer",
              }}
            >
              Enregistrer mes préférences
            </button>
          </div>
        )}

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => setShowSettings((v) => !v)}
            style={{
              background: "rgba(20,14,40,0.9)",
              borderRadius: 999,
              padding: "7px 16px",
              fontSize: 13,
              fontWeight: 700,
              color: "#f3f4f6",
              cursor: "pointer",
              border: "1px solid rgba(212,175,55,0.35)",
              minWidth: 130,
            }}
          >
            Paramétrer
          </button>

          <button
            onClick={decline}
            style={{
              background: "transparent",
              borderRadius: 999,
              padding: "7px 16px",
              fontSize: 13,
              fontWeight: 700,
              color: "#f3f4f6",
              cursor: "pointer",
              border: "1px solid rgba(212,175,55,0.35)",
              minWidth: 130,
            }}
          >
            Refuser
          </button>

          <button
            onClick={acceptAll}
            style={{
              background: "linear-gradient(135deg, #7c3aed, #d4af37)",
              border: "none",
              borderRadius: 999,
              padding: "7px 16px",
              fontSize: 13,
              fontWeight: 900,
              color: "#fff",
              cursor: "pointer",
              minWidth: 130,
            }}
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
