import __i18n from "../../../i18n/migrated/fr/app/astrologie/vierge/page.json";
import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/vierge";

export const metadata: Metadata = {
  title:
    __i18n["vierge_personnalite_amour_travail_et_compatibilites_luna_ast"],

  description:
    __i18n["decouvrez_le_signe_de_la_vierge_en_astrologie_personnalite_q"],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      __i18n["la_vierge_en_astrologie_personnalite_amour_et_compatibilites"],
    description:
      __i18n["guide_complet_du_signe_de_la_vierge_caractere_forces_defis_r"],
    url: PAGE_URL,
    siteName: __i18n["luna_astralis"],
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      __i18n["le_signe_de_la_vierge_luna_astralis"],
    description:
      __i18n["decouvrez_la_personnalite_de_la_vierge_ses_qualites_ses_defi"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const VIRGO_TRAITS = [
  {
    title: __i18n["le_sens_de_l_analyse"],
    symbol: "☿",
    text:
      __i18n["la_vierge_observe_attentivement_les_details_et_cherche_a_com"],
  },
  {
    title: __i18n["le_sens_du_service"],
    symbol: "✦",
    text:
      __i18n["ce_signe_aime_se_rendre_utile_et_apporter_des_solutions_conc"],
  },
  {
    title: __i18n["la_recherche_de_precision"],
    symbol: "◇",
    text:
      __i18n["la_vierge_apprecie_la_clarte_l_ordre_et_le_travail_bien_fait"],
  },
];

const VIRGO_STRENGTHS = [
  __i18n["sens_de_l_analyse"],
  __i18n["fiabilite"],
  "Organisation",
  __i18n["precision"],
  __i18n["discretion"],
  __i18n["sens_du_service"],
];

const VIRGO_CHALLENGES = [
  "Perfectionnisme",
  "Autocritique",
  __i18n["anxiete"],
  __i18n["difficulte_a_lacher_prise"],
  __i18n["tendance_a_trop_analyser"],
  __i18n["exigence_envers_soi_et_les_autres"],
];

const COMPATIBILITIES = [
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      __i18n["le_taureau_partage_avec_la_vierge_un_besoin_de_stabilite_de"],
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      __i18n["le_capricorne_apprecie_le_serieux_l_organisation_et_la_fiabi"],
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      __i18n["le_cancer_apporte_sensibilite_douceur_et_profondeur_emotionn"],
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      __i18n["le_scorpion_peut_apprecier_la_discretion_et_la_loyaute_de_la"],
  },
];

const FAQ_ITEMS = [
  {
    question:
      __i18n["quelles_sont_les_principales_qualites_de_la_vierge"],
    answer:
      __i18n["la_vierge_est_souvent_associee_a_l_intelligence_pratique_a_l"],
  },
  {
    question:
      __i18n["quels_sont_les_principaux_defis_de_la_vierge"],
    answer:
      __i18n["la_vierge_peut_parfois_devenir_perfectionniste_trop_critique"],
  },
  {
    question:
      __i18n["quelle_planete_gouverne_la_vierge"],
    answer:
      __i18n["la_vierge_est_gouvernee_par_mercure_planete_traditionnelleme"],
  },
  {
    question:
      __i18n["quel_est_l_element_de_la_vierge"],
    answer:
      __i18n["la_vierge_appartient_a_l_element_terre_cet_element_est_lie_a"],
  },
  {
    question:
      __i18n["comment_savoir_si_la_vierge_est_importante_dans_mon_theme_na"],
    answer:
      __i18n["la_vierge_peut_etre_importante_si_votre_soleil_votre_lune_vo"],
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    __i18n["la_vierge_en_astrologie_personnalite_amour_travail_et_compat"],
  description:
    __i18n["guide_complet_consacre_au_signe_de_la_vierge_a_ses_qualites"],
  inLanguage: "fr-CA",
  mainEntityOfPage: PAGE_URL,
  publisher: {
    "@type": "Organization",
    name: "Luna Astralis",
    url: "https://luna-astralis.app",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ViergeAstrologiePage() {
  return (
    <div className="virgo-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="virgo-wrap">
        <section className="virgo-hero">
          <div className="virgo-badge">
            {__i18n["sixieme_signe_du_zodiaque"]}</div>

          <h1>
            {__i18n["la_vierge_en_astrologie"]}</h1>

          <p className="virgo-hero-lead">
            {__i18n["la_vierge_symbolise_l_analyse_l_organisation_l_amelioration"]}</p>

          <div className="virgo-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="virgo-primary-button"
            >
              {__i18n["creer_ma_carte_du_ciel_gratuite"]}</Link>

            <a
              href="#personnalite-vierge"
              className="virgo-secondary-button"
            >
              {__i18n["decouvrir_la_vierge"]}</a>
          </div>
        </section>

        <article className="virgo-content">
          <section id="personnalite-vierge">
            <span className="virgo-kicker">
              {__i18n["personnalite_de_la_vierge"]}</span>

            <h2>
              {__i18n["que_represente_le_signe_de_la_vierge"]}</h2>

            <p>
              {__i18n["la_vierge_est_le_sixieme_signe_du_zodiaque_elle_represente_l"]}</p>

            <p>
              {__i18n["une_personne_marquee_par_la_vierge_cherche_generalement_a_co"]}</p>

            <p>
              {__i18n["cette_energie_apporte_precision_fiabilite_et_discernement_el"]}</p>
          </section>

          <section>
            <h2>
              {__i18n["les_grandes_caracteristiques_de_la_vierge"]}</h2>

            <div className="virgo-info-grid">
              {VIRGO_TRAITS.map((item) => (
                <article
                  className="virgo-info-card"
                  key={item.title}
                >
                  <span className="virgo-card-icon">
                    {item.symbol}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              {__i18n["element_modalite_et_planete_maitresse"]}</h2>

            <div className="virgo-pillars">
              <div className="virgo-pillar-card">
                <div className="virgo-pillar-symbol">
                  🌿
                </div>

                <h3>
                  {__i18n["element_terre"]}</h3>

                <p>
                  {__i18n["la_terre_apporte_realisme_patience_stabilite_et_sens_pratiqu"]}</p>
              </div>

              <div className="virgo-pillar-card">
                <div className="virgo-pillar-symbol">
                  ◇
                </div>

                <h3>
                  {__i18n["modalite_mutable"]}</h3>

                <p>
                  {__i18n["la_modalite_mutable_favorise_l_adaptation_la_souplesse_et_la"]}</p>
              </div>

              <div className="virgo-pillar-card">
                <div className="virgo-pillar-symbol">
                  ☿
                </div>

                <h3>
                  {__i18n["planete_mercure"]}</h3>

                <p>
                  {__i18n["mercure_represente_la_pensee_l_analyse_les_apprentissages_et"]}</p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              {__i18n["les_forces_et_les_defis_de_la_vierge"]}</h2>

            <div className="virgo-strengths-grid">
              <div className="virgo-list-card">
                <span className="virgo-kicker">
                  {__i18n["forces_naturelles"]}</span>

                <h3>
                  {__i18n["ce_que_la_vierge_apporte"]}</h3>

                <ul>
                  {VIRGO_STRENGTHS.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="virgo-list-card">
                <span className="virgo-kicker">
                  {__i18n["points_d_attention"]}</span>

                <h3>
                  {__i18n["ce_que_la_vierge_apprend"]}</h3>

                <ul>
                  {VIRGO_CHALLENGES.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              {__i18n["la_vierge_en_amour"]}</h2>

            <p>
              {__i18n["en_amour_la_vierge_recherche_generalement_une_relation_stabl"]}</p>

            <p>
              {__i18n["elle_remarque_les_details_se_souvient_des_besoins_de_l_autre"]}</p>

            <p>
              {__i18n["son_principal_defi_consiste_a_ne_pas_analyser_constamment_la"]}</p>
          </section>

          <section>
            <h2>
              {__i18n["la_vierge_au_travail"]}</h2>

            <p>
              {__i18n["dans_la_vie_professionnelle_la_vierge_se_distingue_souvent_p"]}</p>

            <p>
              {__i18n["elle_peut_etre_particulierement_efficace_dans_les_domaines_l"]}</p>

            <p>
              {__i18n["elle_apprecie_generalement_les_environnements_ou_son_travail"]}</p>
          </section>

          <section>
            <h2>
              {__i18n["soleil_lune_et_ascendant_en_vierge"]}</h2>

            <div className="virgo-pillars">
              <div className="virgo-pillar-card">
                <div className="virgo-pillar-symbol">
                  ☀️
                </div>

                <h3>
                  {__i18n["soleil_en_vierge"]}</h3>

                <p>
                  {__i18n["le_soleil_en_vierge_construit_son_identite_par_l_analyse_la"]}</p>

                <Link
                  href="/astrologie/soleil"
                  className="virgo-text-link"
                >
                  {__i18n["comprendre_le_soleil"]}</Link>
              </div>

              <div className="virgo-pillar-card">
                <div className="virgo-pillar-symbol">
                  🌙
                </div>

                <h3>
                  {__i18n["lune_en_vierge"]}</h3>

                <p>
                  {__i18n["la_lune_en_vierge_a_besoin_d_ordre_de_clarte_et_de_reperes_c"]}</p>

                <Link
                  href="/astrologie/lune"
                  className="virgo-text-link"
                >
                  {__i18n["comprendre_la_lune"]}</Link>
              </div>

              <div className="virgo-pillar-card">
                <div className="virgo-pillar-symbol">
                  ↑
                </div>

                <h3>
                  {__i18n["ascendant_vierge"]}</h3>

                <p>
                  {__i18n["l_ascendant_vierge_donne_une_presence_discrete_attentive_et"]}</p>

                <Link
                  href="/astrologie/ascendant"
                  className="virgo-text-link"
                >
                  {__i18n["comprendre_l_ascendant"]}</Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              {__i18n["les_compatibilites_de_la_vierge"]}</h2>

            <p>
              {__i18n["les_compatibilites_astrologiques_ne_reposent_jamais_uniqueme"]}</p>

            <p>
              {__i18n["certaines_associations_peuvent_neanmoins_sembler_naturelleme"]}</p>

            <div className="virgo-compatibility-grid">
              {COMPATIBILITIES.map((item) => (
                <article
                  className="virgo-compatibility-card"
                  key={item.sign}
                >
                  <div className="virgo-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    {__i18n["vierge_et"]}{item.sign}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              {__i18n["la_vierge_dans_votre_theme_natal"]}</h2>

            <p>
              {__i18n["la_vierge_ne_concerne_pas_uniquement_les_personnes_nees_sous"]}</p>

            <p>
              {__i18n["cette_maison_montre_le_domaine_de_vie_dans_lequel_vous_cherc"]}</p>

            <div className="virgo-cta-card">
              <div>
                <span className="virgo-kicker">
                  {__i18n["decouvrez_votre_theme_natal"]}</span>

                <h2>
                  {__i18n["ou_se_trouve_la_vierge_dans_votre_carte_du_ciel"]}</h2>

                <p>
                  {__i18n["generez_gratuitement_votre_carte_du_ciel_pour_decouvrir_vos"]}</p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="virgo-primary-button"
              >
                {__i18n["creer_ma_carte_du_ciel"]}</Link>
            </div>
          </section>

          <section className="virgo-faq">
            <span className="virgo-kicker">
              {__i18n["questions_frequentes"]}</span>

            <h2>
              {__i18n["questions_sur_la_vierge"]}</h2>

            <div className="virgo-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="virgo-faq-item"
                  key={item.question}
                >
                  <summary>
                    {item.question}
                  </summary>

                  <p>
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <p className="virgo-disclaimer">
            {__i18n["l_astrologie_est_presentee_comme_un_langage_symbolique_d_exp"]}</p>
        </article>
      </main>
    </div>
  );
}
