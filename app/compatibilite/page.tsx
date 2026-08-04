import __i18n from "../../i18n/migrated/fr/app/compatibilite/page.json";
import type { Metadata } from "next";
import Link from "next/link";

import CompatibilityCard from "@/components/CompatibilityCard";

import "./page.css";

export const metadata: Metadata = {
  title: __i18n["compatibilite_amoureuse_gratuite_luna_astralis"],
  description:
    __i18n["calculez_gratuitement_la_compatibilite_amoureuse_entre_deux"],
  alternates: {
    canonical: "https://luna-astralis.app/compatibilite",
  },
  openGraph: {
    title: __i18n["compatibilite_amoureuse_gratuite_luna_astralis_2"],
    description:
      __i18n["decouvrez_gratuitement_la_compatibilite_entre_deux_signes_as"],
    url: "https://luna-astralis.app/compatibilite",
    siteName: __i18n["luna_astralis"],
    type: "website",
    locale: "fr_CA",
  },
};

export default function CompatibilitePage() {
  return (
    <div className="compat-page">
      <main className="compat-main">
        <section className="compat-hero">
          <div className="compat-badge">{__i18n["test_gratuit"]}</div>

          <h1>{__i18n["compatibilite_amoureuse"]}</h1>

          <p>
            {__i18n["decouvrez_gratuitement_l_alchimie_entre_deux_signes_astrolog"]}</p>
        </section>

        <section
          className="compat-card"
          aria-label={__i18n["calculateur_de_compatibilite_amoureuse"]}
        >
          <CompatibilityCard />
        </section>

        <section className="compat-services">
          <div className="compat-services-heading">
            <span className="compat-services-label">
              {__i18n["analyses_personnalisees"]}</span>

            <h2>{__i18n["allez_encore_plus_loin"]}</h2>

            <p className="compat-services-intro">
              {__i18n["explorez_votre_personnalite_vos_relations_et_votre_avenir_gr"]}</p>
          </div>

          <div className="compat-services-grid">
            <article className="premium-card premium-card-featured">
              <div className="premium-card-label">{__i18n["le_plus_populaire"]}</div>

              <div className="premium-icon" aria-hidden="true">
                🌙
              </div>

              <h3>{__i18n["carte_du_ciel_premium"]}</h3>

              <p>
                {__i18n["recevez_une_analyse_astrologique_complete_basee_sur_votre_da"]}</p>

              <ul className="premium-features">
                <li>{__i18n["votre_soleil_votre_lune_et_votre_ascendant"]}</li>
                <li>{__i18n["vos_planetes_maisons_et_aspects"]}</li>
                <li>{__i18n["vos_forces_vos_defis_et_votre_potentiel"]}</li>
                <li>{__i18n["rapport_pdf_personnalise"]}</li>
              </ul>

              <Link href="/pricing" className="premium-button">
                {__i18n["decouvrir_les_cartes_du_ciel"]}</Link>
            </article>

            <article className="premium-card">
              <div className="premium-icon" aria-hidden="true">
                ❤️
              </div>

              <h3>{__i18n["compatibilite_premium"]}</h3>

              <p>
                {__i18n["comparez_deux_cartes_du_ciel_completes_et_decouvrez_les_forc"]}</p>

              <ul className="premium-features">
                <li>{__i18n["compatibilite_emotionnelle_et_amoureuse"]}</li>
                <li>{__i18n["communication_et_attirance"]}</li>
                <li>{__i18n["forces_et_tensions_de_la_relation"]}</li>
                <li>{__i18n["rapport_pdf_personnalise_2"]}</li>
              </ul>

              <Link
                href="/compatibilite/premium"
                className="premium-button premium-button-secondary"
              >
                {__i18n["decouvrir_la_compatibilite"]}</Link>
            </article>

            <article className="premium-card">
              <div className="premium-icon" aria-hidden="true">
                🔮
              </div>

              <h3>{__i18n["horoscope_premium"]}</h3>

              <p>
                {__i18n["recevez_des_previsions_astrologiques_personnalisees_selon_vo"]}</p>

              <ul className="premium-features">
                <li>{__i18n["horoscope_du_jour"]}</li>
                <li>{__i18n["previsions_mensuelles"]}</li>
                <li>{__i18n["previsions_annuelles"]}</li>
                <li>{__i18n["conseils_personnalises"]}</li>
              </ul>

              <Link
                href="/horoscope/premium"
                className="premium-button premium-button-secondary"
              >
                {__i18n["decouvrir_les_horoscopes"]}</Link>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
