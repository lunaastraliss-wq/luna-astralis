"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type MsgType = "ok" | "err" | "info";

function safeNext(v: string | null) {
  const s = (v || "").trim();
  const fallback = "/chat?signe=belier";

  if (!s) return fallback;

  // block external/open-redirect
  if (s.includes("http://") || s.includes("https://") || s.startsWith("//")) return fallback;

  // force absolute internal path
  return s.startsWith("/") ? s : `/${s}`;
}

export default function PricingPage() {
  const sp = useSearchParams();

  const [msg, setMsg] = useState<{ text: string; type: MsgType } | null>(null);
  const [busyPlan, setBusyPlan] = useState<string | null>(null);

  const y = useMemo(() => new Date().getFullYear(), []);

  const nextRaw = sp.get("next");
  const nextUrl = useMemo(() => safeNext(nextRaw), [nextRaw]);
  const nextEnc = useMemo(() => encodeURIComponent(nextUrl), [nextUrl]);

  useEffect(() => {
    const canceled = sp.get("canceled");
    const paid = sp.get("paid");

    if (canceled === "1") {
      setMsg({ text: "Paiement annulé. Tu peux réessayer quand tu veux.", type: "info" });
    } else if (paid === "1") {
      setMsg({ text: "Paiement reçu. Merci ✨ Tu peux retourner au chat.", type: "ok" });
    } else {
      setMsg(null);
    }
  }, [sp]);

  async function startCheckout(plan: string) {
    try {
      setBusyPlan(plan);
      setMsg({ text: "Ouverture de Stripe…", type: "info" });

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
      setMsg({ text: "Erreur: " + (err?.message || String(err)), type: "err" });
    }
  }

  const msgClass =
    msg?.type === "ok" ? "is-ok" : msg?.type === "err" ? "is-err" : msg?.type === "info" ? "is-info" : "";

  return (
    <div className="pricing-body">
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
          <Link className="btn btn-small btn-ghost" href={`/login?next=${nextEnc}`}>
            Connexion
          </Link>
          <Link className="btn btn-small" href={`/signup?next=${nextEnc}`}>
            Créer un compte
          </Link>
        </nav>
      </header>

      <main className="wrap" role="main">
        <section className="pricing-hero" aria-label="Présentation des tarifs">
          <div className="pricing-hero-inner">
            <div className="pricing-kicker">Accès 24h/7</div>
            <div className="pricing-kicker pricing-kicker-alt">TARIFS</div>

            <h1 className="pricing-title">Choisis le forfait qui te convient</h1>

            <p className="pricing-subtitle">
              Tu peux payer tout de suite (même en invité). Si tu crées un compte, tu gardes ton historique.
            </p>

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
