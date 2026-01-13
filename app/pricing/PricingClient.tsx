"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type MsgType = "ok" | "err" | "info";

const LS_SIGN_KEY = "la_sign";

/** ✅ pas de fallback “bélier” */
function safeNext(v: string | null) {
  const s = (v || "").trim();
  const fallback = "/chat";

  if (!s) return fallback;

  // block external/open-redirect
  if (/^https?:\/\//i.test(s) || s.startsWith("//")) return fallback;

  // force absolute internal path
  const path = s.startsWith("/") ? s : `/${s}`;

  // éviter les boucles
  if (path.startsWith("/login") || path.startsWith("/auth")) return fallback;

  return path;
}

function getStoredSign(): string {
  if (typeof window === "undefined") return "";
  try {
    return (localStorage.getItem(LS_SIGN_KEY) || "").trim();
  } catch {
    return "";
  }
}

export default function PricingClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const supabase = useMemo(() => createClientComponentClient(), []);

  const [msg, setMsg] = useState<{ text: string; type: MsgType } | null>(null);
  const [busyPlan, setBusyPlan] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  const y = useMemo(() => new Date().getFullYear(), []);

  const nextRaw = sp.get("next");
  const nextUrl = useMemo(() => safeNext(nextRaw), [nextRaw]);
  const nextEnc = useMemo(() => encodeURIComponent(nextUrl), [nextUrl]);

  const showMsg = useCallback((text: string, type: MsgType = "info") => {
    setMsg({ text, type });
  }, []);

  /**
   * ✅ Règle finale:
   * - /pricing = connecté obligatoire
   * - si connecté MAIS pas de signe => onboarding d'abord (puis chat)
   *   (ensuite, l’utilisateur peut revenir à /pricing depuis le chat si besoin)
   */
  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (!mounted) return;

        // pas connecté => login
        if (error || !data?.session) {
          router.replace(`/login?next=${encodeURIComponent("/pricing")}`);
          return;
        }

        // connecté mais pas de signe => onboarding => chat
        const s = getStoredSign();
        if (!s) {
          router.replace(`/onboarding/sign?next=${encodeURIComponent("/chat")}`);
          return;
        }

        setChecking(false);
      } catch {
        if (!mounted) return;
        router.replace(`/login?next=${encodeURIComponent("/pricing")}`);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [supabase, router]);

  // Messages Stripe (retour checkout)
  useEffect(() => {
    const canceled = sp.get("canceled");
    const paid = sp.get("paid");

    if (canceled === "1") {
      showMsg("Paiement annulé. Tu peux réessayer quand tu veux.", "info");
    } else if (paid === "1") {
      showMsg("Paiement reçu. Merci ✨ Tu peux retourner au chat.", "ok");
    } else {
      setMsg(null);
    }
  }, [sp, showMsg]);

  async function startCheckout(plan: string) {
    try {
      setBusyPlan(plan);
      showMsg("Ouverture de Stripe…", "info");

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, next: nextUrl }),
      });

      const data = (await res.json().catch(() => ({}))) as any;

      if (!res.ok) throw new Error(data?.error || "Erreur checkout.");
      if (!data?.url) throw new Error("URL Stripe manquante.");

      window.location.href = data.url;
    } catch (err: any) {
      setBusyPlan(null);
      showMsg("Erreur: " + (err?.message || String(err)), "err");
    }
  }

  const msgClass =
    msg?.type === "ok"
      ? "is-ok"
      : msg?.type === "err"
      ? "is-err"
      : msg?.type === "info"
      ? "is-info"
      : "";

  // évite le flash de pricing
  if (checking) {
    return (
      <div className="pricing-body pricing-page">
        <header className="top" role="banner">
          <Link className="brand" href="/" aria-label="Accueil Luna Astralis">
            <div className="logo" aria-hidden="true">
              <img src="/logo-luna-astralis-transparent.png" alt="" />
            </div>
            <div className="brand-text">
              <div className="brand-name">LUNA ASTRALIS</div>
              <div className="brand-sub">Astro & psycho</div>
            </div>
          </Link>
        </header>

        <main className="wrap" role="main" style={{ paddingTop: 40 }}>
          <div className="pricing-msg is-info">Vérification…</div>
        </main>

        <style jsx>{`
          .pricing-msg {
            margin: 14px 0 0;
            padding: 12px 14px;
            border-radius: 14px;
            border: 1px solid rgba(255, 255, 255, 0.14);
            background: rgba(255, 255, 255, 0.06);
            color: rgba(255, 255, 255, 0.92);
            line-height: 1.35;
          }
          .pricing-msg.is-info {
            background: rgba(159, 211, 255, 0.1);
            border-color: rgba(159, 211, 255, 0.22);
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="pricing-body pricing-page">
      <header className="top" role="banner">
        <Link className="brand" href="/" aria-label="Accueil Luna Astralis">
          <div className="logo" aria-hidden="true">
            <img src="/logo-luna-astralis-transparent.png" alt="" />
          </div>

          <div className="brand-text">
            <div className="brand-name">LUNA ASTRALIS</div>
            <div className="brand-sub">Astro & psycho</div>
          </div>
        </Link>

        <nav className="nav" aria-label="Navigation principale">
          <Link href="/">Accueil</Link>

          <Link className="active" href={`/pricing?next=${nextEnc}`}>
            Tarifs
          </Link>

          <Link className="btn btn-small btn-ghost" href="/chat">
            Retour au chat
          </Link>
        </nav>
      </header>

      <main className="wrap" role="main">
        <section className="pricing-hero" aria-label="Présentation des tarifs">
          <div className="pricing-hero-inner">
            <div className="pricing-kicker">Accès 24h/7</div>
            <div className="pricing-kicker pricing-kicker-alt">TARIFS</div>

            <h1 className="pricing-title">Choisis le forfait qui te convient</h1>

            <p className="pricing-subtitle">Paiement sécurisé. Annulation possible en tout temps.</p>

            <div className="pricing-chips" aria-label="Informations">
              <span className="chip">Prix en dollars US (USD)</span>
              <span className="chip">Annule ou change en tout temps</span>
            </div>

            {msg ? (
              <div role="status" aria-live="polite" className={`pricing-msg ${msgClass}`}>
                {msg.text}
              </div>
            ) : null}
          </div>
        </section>

        <section className="section" aria-label="Confiance">
          <div className="pricing-trust">
            <div className="trust-line">✦ Une expérience douce, inspirée de l’astrologie, pour mieux te comprendre.</div>
            <div className="trust-sub">Paiement sécurisé • Annulation en tout temps • Aucun frais caché</div>
          </div>
        </section>

        <section className="section" aria-label="Formules">
          <div className="pricing-grid">
            {/* Mensuel — Essentiel */}
            <article className="price-card" aria-label="Mensuel — Essentiel">
              <div className="price-head">
                <div className="price-name">Mensuel — Essentiel</div>
                <div className="price-value">
                  <span className="price-now">4,99&nbsp;$</span>
                  <span className="price-period">/ mois</span>
                </div>
                <div className="price-mini">Accès 24h/7</div>
              </div>

              <ul className="price-features">
                <li>100 messages / mois</li>
                <li>Tous les signes astrologiques</li>
                <li>Astro & psycho</li>
                <li>Compatible mobile</li>
              </ul>

              <button
                className="price-cta"
                aria-busy={busyPlan === "monthly_essential"}
                type="button"
                onClick={() => startCheckout("monthly_essential")}
                disabled={!!busyPlan}
              >
                {busyPlan === "monthly_essential" ? "Redirection…" : "Commencer"}
              </button>
            </article>

            {/* Mensuel — Illimité */}
            <div className="price-halo" role="group" aria-label="Mensuel — Illimité (le plus populaire)">
              <article className="price-card price-featured" aria-label="Mensuel — Illimité">
                <div className="price-badge">LE PLUS POPULAIRE</div>

                <div className="price-head">
                  <div className="price-name">Mensuel — Illimité</div>
                  <div className="price-value">
                    <span className="price-now">9,99&nbsp;$</span>
                    <span className="price-period">/ mois</span>
                  </div>
                  <div className="price-mini">Accès 24h/7</div>
                </div>

                <ul className="price-features">
                  <li>Messages illimités</li>
                  <li>Tous les signes astrologiques</li>
                  <li>Historique des conversations</li>
                  <li>Exploration approfondie</li>
                </ul>

                <button
                  className="price-cta btn-primary"
                  aria-busy={busyPlan === "monthly_unlimited"}
                  type="button"
                  onClick={() => startCheckout("monthly_unlimited")}
                  disabled={!!busyPlan}
                >
                  {busyPlan === "monthly_unlimited" ? "Redirection…" : "Accès illimité 24h/7"}
                </button>
              </article>
            </div>

            {/* Annuel — Essentiel */}
            <article className="price-card" aria-label="Annuel — Essentiel">
              <div className="price-head">
                <div className="price-name">Annuel — Essentiel</div>
                <div className="price-value">
                  <span className="price-was">
                    <s>59,99&nbsp;$</s>
                  </span>
                  <span className="price-now">49,99&nbsp;$</span>
                  <span className="price-period">/ an</span>
                </div>
                <div className="price-mini">
                  Accès 24h/7 • <strong>Économisez 10&nbsp;$</strong>
                </div>
              </div>

              <ul className="price-features">
                <li>100 messages / mois</li>
                <li>Tous les signes astrologiques</li>
                <li>Astro & psycho</li>
                <li>Le plus économique</li>
              </ul>

              <button
                className="price-cta"
                aria-busy={busyPlan === "yearly_essential"}
                type="button"
                onClick={() => startCheckout("yearly_essential")}
                disabled={!!busyPlan}
              >
                {busyPlan === "yearly_essential" ? "Redirection…" : "Choisir l’annuel"}
              </button>
            </article>

            {/* Annuel — Illimité */}
            <article className="price-card premium" aria-label="Annuel — Illimité">
              <div className="price-badge premium">MEILLEURE VALEUR</div>

              <div className="price-head">
                <div className="price-name">Annuel — Illimité</div>
                <div className="price-value">
                  <span className="price-was">
                    <s>119,99&nbsp;$</s>
                  </span>
                  <span className="price-now">99,99&nbsp;$</span>
                  <span className="price-period">/ an</span>
                </div>
                <div className="price-mini">
                  Accès 24h/7 • <strong>Économisez 20&nbsp;$</strong>
                </div>
              </div>

              <ul className="price-features">
                <li>Messages illimités</li>
                <li>Tous les signes astrologiques</li>
                <li>Accès prioritaire</li>
                <li>Futur : Tarot, Lune, Ascendant</li>
              </ul>

              <button
                className="price-cta btn-primary"
                aria-busy={busyPlan === "yearly_unlimited"}
                type="button"
                onClick={() => startCheckout("yearly_unlimited")}
                disabled={!!busyPlan}
              >
                {busyPlan === "yearly_unlimited" ? "Redirection…" : "Accès illimité annuel"}
              </button>
            </article>
          </div>
        </section>

        <footer className="footer" role="contentinfo">
          <div>© {y} Luna Astralis</div>
          <div className="footer-note">Prix en USD • Accès 24h/7</div>
        </footer>
      </main>

      <style jsx>{`
        .pricing-msg {
          margin: 14px 0 0;
          padding: 12px 14px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.35;
        }
        .pricing-msg.is-ok {
          background: rgba(120, 255, 190, 0.1);
          border-color: rgba(120, 255, 190, 0.22);
        }
        .pricing-msg.is-err {
          background: rgba(255, 90, 90, 0.1);
          border-color: rgba(255, 90, 90, 0.22);
        }
        .pricing-msg.is-info {
          background: rgba(159, 211, 255, 0.1);
          border-color: rgba(159, 211, 255, 0.22);
        }
        .price-cta[aria-busy="true"] {
          opacity: 0.75;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
        }
