// app/pricing/PricingClient.tsx
"use client";

import React, { useMemo } from "react";
import Link from "next/link";

export default function PricingClient() {
  const y = useMemo(() => new Date().getFullYear(), []);

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

          {/* ✅ Se connecter -> login -> retour au chat */}
          <Link href={`/login?next=${encodeURIComponent("/chat")}`}>Se connecter</Link>

          {/* ✅ Retour vers l'accueil (vitrine) */}
          <Link className="btn btn-small btn-ghost" href="/">
            Retour
          </Link>
        </nav>
      </header>

      <main className="wrap" role="main">
        <section className="pricing-hero" aria-label="Présentation des tarifs">
          <div className="pricing-hero-inner">
            <div className="pricing-kicker">Accès 24h/7</div>
            <div className="pricing-kicker pricing-kicker-alt">TARIFS</div>

            <h1 className="pricing-title">Forfaits & prix</h1>

            <p className="pricing-subtitle">
              Cette page affiche seulement les prix. L’abonnement se fait dans le chat.
            </p>

            <div className="pricing-chips" aria-label="Informations">
              <span className="chip">Prix en dollars US (USD)</span>
              <span className="chip">Annule ou change en tout temps</span>
            </div>
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

              <button className="price-cta" type="button" disabled aria-disabled="true">
                Prix
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

                <button className="price-cta btn-primary" type="button" disabled aria-disabled="true">
                  Prix
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

              <button className="price-cta" type="button" disabled aria-disabled="true">
                Prix
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

              <button className="price-cta btn-primary" type="button" disabled aria-disabled="true">
                Prix
              </button>
            </article>
          </div>
        </section>

        {/* Footer volontairement retiré */}
        <div className="pricing-foot" aria-label="Informations légales">
          © {y} Luna Astralis • Prix en USD
        </div>
      </main>

      <style jsx>{`
        .price-cta:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .pricing-foot {
          margin-top: 18px;
          font-size: 12px;
          opacity: 0.7;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
