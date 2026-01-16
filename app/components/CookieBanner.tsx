"use client";

import { useEffect, useState } from "react";

/**
 * Luna Astralis — Cookie Banner (FR only)
 * - Stocke le choix dans localStorage
 * - Met à jour Google Consent Mode via gtag (Google Ads)
 * - Valeur par défaut : refus des cookies non essentiels (case décochée)
 */

const CONSENT_KEY = "luna_astralis_cookie_consent_v1"; // values: "all" | "necessary"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function readConsent(): "all" | "necessary" | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "all" || v === "necessary" ? v : null;
  } catch {
    return null;
  }
}

function writeConsent(v: "all" | "necessary") {
  try {
    localStorage.setItem(CONSENT_KEY, v);
  } catch {
    // ignore
  }
}

/**
 * ✅ Google Consent Mode update (robuste: retry si gtag pas prêt)
 * allowAnalytics = true  => granted
 * allowAnalytics = false => denied
 */
function pushGtagConsent(allowAnalytics: boolean) {
  if (typeof window === "undefined") return;

  const update = () => {
    if (typeof window.gtag !== "function") return false;

    window.gtag("consent", "update", {
      ad_storage: allowAnalytics ? "granted" : "denied",
      analytics_storage: allowAnalytics ? "granted" : "denied",
      ad_user_data: allowAnalytics ? "granted" : "denied",
      ad_personalization: allowAnalytics ? "granted" : "denied",
    });

    return true;
  };

  // tente tout de suite
  if (update()) return;

  // sinon, retry court (gtag peut charger afterInteractive)
  let tries = 0;
  const t = window.setInterval(() => {
    tries++;
    if (update() || tries >= 10) window.clearInterval(t); // ~2s max
  }, 200);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // ✅ Par défaut: analytics OFF tant que l’utilisateur n’a pas accepté
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  // ✅ au montage : lit le consent + applique le consent si déjà enregistré
  useEffect(() => {
    if (typeof window === "undefined") return;

    const consent = readConsent();

    if (!consent) {
      setVisible(true);
      setAnalyticsAllowed(false); // ✅ case décochée par défaut
      return;
    }

    const allow = consent === "all";
    setAnalyticsAllowed(allow);
    pushGtagConsent(allow);
    setVisible(false);
  }, []);

  const acceptAll = () => {
    writeConsent("all");
    setAnalyticsAllowed(true);
    pushGtagConsent(true);
    setShowSettings(false);
    setVisible(false);
  };

  const decline = () => {
    writeConsent("necessary");
    setAnalyticsAllowed(false);
    pushGtagConsent(false);
    setShowSettings(false);
    setVisible(false);
  };

  const save = () => {
    const allow = analyticsAllowed;
    writeConsent(allow ? "all" : "necessary");
    pushGtagConsent(allow);
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
        background: "rgba(10,6,20,0.98)", // mauve très foncé
        borderTop: "1px solid rgba(212,175,55,0.35)", // or doux
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
          Luna Astralis utilise des cookies pour assurer le bon fonctionnement du site, améliorer ton
          expérience et mesurer l’audience. Tu peux accepter ou refuser les cookies non essentiels.
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
            <p style={{ margin: 0, marginBottom: 10, fontSize: 12, opacity: 0.92 }}>
              Tu peux choisir si tu acceptes les cookies de mesure d’audience. Les cookies essentiels
              sont toujours activés pour que le site fonctionne correctement.
            </p>

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
              <span style={{ fontSize: 12 }}>Cookies de mesure d’audience (analytics)</span>
            </label>

            <button
              onClick={save}
              style={{
                marginTop: 6,
                background: "linear-gradient(135deg, #d4af37, #f7e7a1)", // or
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
              background: "linear-gradient(135deg, #7c3aed, #d4af37)", // mauve -> or
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
