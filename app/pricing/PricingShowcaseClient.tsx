// app/pricing/PricingClient.tsx
"use client";





import __i18n from "../../i18n/migrated/fr/app/pricing/pricingshowcaseclient.json";
import React, { useMemo } from "react";
import Link from "next/link";

export default function PricingClient() {
  const y = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="pricing-body pricing-page">
      <header className="top" role="banner">
        <Link className="brand" href="/" aria-label={__i18n["accueil_luna_astralis"]}>
          <div className="logo" aria-hidden="true">
            <img src="/logo-luna-astralis-transparent.png" alt="" />
          </div>

          <div className="brand-text">
            <div className="brand-name">{__i18n["luna_astralis"]}</div>
            <div className="brand-sub">{__i18n["astro_psycho"]}</div>
          </div>
        </Link>

        <nav className="nav" aria-label={__i18n["navigation_principale"]}>
          <Link href="/">Accueil</Link>

          <Link href={`/login?next=${encodeURIComponent("/chat")}`}>
            {__i18n["se_connecter"]}</Link>

          <Link className="btn btn-small btn-ghost" href="/">
            Retour
          </Link>
        </nav>
      </header>

      <main className="wrap" role="main">
        <section className="pricing-hero" aria-label={__i18n["presentation_des_tarifs"]}>
          <div className="pricing-hero-inner">
            <div className="pricing-kicker">{__i18n["acces_24h_7"]}</div>
            <div className="pricing-kicker pricing-kicker-alt">TARIFS</div>

            <h1 className="pricing-title">{__i18n["forfaits_prix"]}</h1>

            <p className="pricing-subtitle">
              {__i18n["cette_page_affiche_seulement_les_prix_l_abonnement_se_fait_a"]}</p>

            <div className="pricing-chips" aria-label="Informations">
              <span className="chip">{__i18n["prix_en_dollars_us_usd"]}</span>
              <span className="chip">{__i18n["annulez_ou_changez_en_tout_temps"]}</span>
            </div>
          </div>
        </section>

        <section className="section" aria-label="Formules">
          <div className="pricing-grid">
            <article className="price-card" aria-label={__i18n["mensuel_essentiel"]}>
              <div className="price-head">
                <div className="price-name">{__i18n["mensuel_essentiel_2"]}</div>

                <div className="price-value">
                  <span className="price-now">{__i18n["4_99_nbsp"]}</span>
                  <span className="price-period">/ mois</span>
                </div>

                <div className="price-mini">{__i18n["acces_24h_7_2"]}</div>
              </div>

              <ul className="price-features">
                <li>{__i18n["100_messages_mois"]}</li>
                <li>{__i18n["tous_les_signes_astrologiques"]}</li>
                <li>{__i18n["astro_psycho_2"]}</li>
                <li>{__i18n["compatible_mobile"]}</li>
              </ul>

              <Link
                className="price-cta"
                href={`/signup?plan=${encodeURIComponent("mensuel-essentiel")}`}
              >
                {__i18n["choisir_ce_forfait"]}</Link>
            </article>

            <div
              className="price-halo"
              role="group"
              aria-label={__i18n["mensuel_illimite_le_plus_populaire"]}
            >
              <article
                className="price-card price-featured"
                aria-label={__i18n["mensuel_illimite"]}
              >
                <div className="price-badge">{__i18n["le_plus_populaire"]}</div>

                <div className="price-head">
                  <div className="price-name">{__i18n["mensuel_illimite_2"]}</div>

                  <div className="price-value">
                    <span className="price-now">{__i18n["9_99_nbsp"]}</span>
                    <span className="price-period">/ mois</span>
                  </div>

                  <div className="price-mini">{__i18n["acces_24h_7_3"]}</div>
                </div>

                <ul className="price-features">
                  <li>{__i18n["messages_illimites"]}</li>
                  <li>{__i18n["tous_les_signes_astrologiques_2"]}</li>
                  <li>{__i18n["historique_des_conversations"]}</li>
                  <li>{__i18n["exploration_approfondie"]}</li>
                </ul>

                <Link
                  className="price-cta btn-primary"
                  href={`/signup?plan=${encodeURIComponent("mensuel-illimite")}`}
                >
                  {__i18n["choisir_ce_forfait_2"]}</Link>
              </article>
            </div>

            <article className="price-card" aria-label={__i18n["annuel_essentiel"]}>
              <div className="price-head">
                <div className="price-name">{__i18n["annuel_essentiel_2"]}</div>

                <div className="price-value">
                  <span className="price-was">
                    <s>{__i18n["59_99_nbsp"]}</s>
                  </span>
                  <span className="price-now">{__i18n["49_99_nbsp"]}</span>
                  <span className="price-period">/ an</span>
                </div>

                <div className="price-mini">
                  {__i18n["acces_24h_7_4"]}<strong>{__i18n["economisez_10_nbsp"]}</strong>
                </div>
              </div>

              <ul className="price-features">
                <li>{__i18n["100_messages_mois_2"]}</li>
                <li>{__i18n["tous_les_signes_astrologiques_3"]}</li>
                <li>{__i18n["astro_psycho_3"]}</li>
                <li>{__i18n["le_plus_economique"]}</li>
              </ul>

              <Link
                className="price-cta"
                href={`/signup?plan=${encodeURIComponent("annuel-essentiel")}`}
              >
                {__i18n["choisir_ce_forfait_3"]}</Link>
            </article>

            <article className="price-card premium" aria-label={__i18n["annuel_illimite"]}>
              <div className="price-badge premium">{__i18n["meilleure_valeur"]}</div>

              <div className="price-head">
                <div className="price-name">{__i18n["annuel_illimite_2"]}</div>

                <div className="price-value">
                  <span className="price-was">
                    <s>{__i18n["119_99_nbsp"]}</s>
                  </span>
                  <span className="price-now">{__i18n["99_99_nbsp"]}</span>
                  <span className="price-period">/ an</span>
                </div>

                <div className="price-mini">
                  {__i18n["acces_24h_7_5"]}<strong>{__i18n["economisez_20_nbsp"]}</strong>
                </div>
              </div>

              <ul className="price-features">
                <li>{__i18n["messages_illimites_2"]}</li>
                <li>{__i18n["tous_les_signes_astrologiques_4"]}</li>
                <li>{__i18n["acces_prioritaire"]}</li>
                <li>{__i18n["futur_tarot_lune_ascendant"]}</li>
              </ul>

              <Link
                className="price-cta btn-primary"
                href={`/signup?plan=${encodeURIComponent("annuel-illimite")}`}
              >
                {__i18n["choisir_ce_forfait_4"]}</Link>
            </article>
          </div>
        </section>

        <div className="pricing-foot" aria-label={__i18n["informations_legales"]}>
          © {y} {__i18n["luna_astralis_prix_en_usd"]}</div>
      </main>

      <style jsx>{`
.pricing-foot { margin-top: 18px; font-size: 12px; opacity: 0.7; text-align: center; }
`}</style>
    </div>
  );
}
