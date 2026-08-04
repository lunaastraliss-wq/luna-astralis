import fr from "../../../../i18n/migrated/fr/app/compatibilite/premium/page.json";
import en from "../../../../i18n/migrated/en/app/compatibilite/premium/page.json";
import es from "../../../../i18n/migrated/es/app/compatibilite/premium/page.json";
import de from "../../../../i18n/migrated/de/app/compatibilite/premium/page.json";
import it from "../../../../i18n/migrated/it/app/compatibilite/premium/page.json";
import pt from "../../../../i18n/migrated/pt/app/compatibilite/premium/page.json";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import AuthProvider from "@/components/AuthProvider";
import CompatibilityPremiumForm from "@/components/CompatibilityPremiumForm";
import SiteHeader from "@/components/SiteHeader";

import {
  isLocale,
  type Locale,
} from "@/i18n/config";

import "../../../compatibilite/premium/page.css";


type Dictionary = Record<string, string>;

const DICTIONARIES: Record<
  Locale,
  Dictionary
> = {
  fr,
  en,
  es,
  de,
  it,
  pt,
};

type CompatibilityPremiumPageProps = {
  params: {
    locale: string;
  };
};

/*
|--------------------------------------------------------------------------
| Informations du rapport
|--------------------------------------------------------------------------
*/

function getPageUrl(
  locale: Locale
): string {
  return `https://luna-astralis.app/${locale}/compatibilite/premium`;
}

const REPORT_PRICE =
  "49,99 $ US";

const REPORT_PAGES =
  "Environ 50 pages";

const REPORT_PREVIEW_URL =
  "/reports/apercu-rapport-compatibilite-premium.pdf";

const REPORT_COVER_URL =
  "/reports/couverture-compatibilite-premium.png";

/*
|--------------------------------------------------------------------------
| Métadonnées SEO
|--------------------------------------------------------------------------
*/

export function generateMetadata({
  params,
}: CompatibilityPremiumPageProps): Metadata {
  const { locale } = params;

  if (!isLocale(locale)) {
    return {};
  }

  const __i18n =
    DICTIONARIES[locale];

  const pageUrl =
    getPageUrl(locale);

  return {
    title:
      __i18n["compatibilite_amoureuse_premium_et_synastrie_luna_astralis"],

    description:
      __i18n["comparez_deux_themes_astraux_complets_et_recevez_un_rapport"],

    alternates: {
      canonical:
        pageUrl,

      languages: {
        fr:
          getPageUrl("fr"),
        en:
          getPageUrl("en"),
        es:
          getPageUrl("es"),
        de:
          getPageUrl("de"),
        it:
          getPageUrl("it"),
        pt:
          getPageUrl("pt"),
        "x-default":
          getPageUrl("fr"),
      },
    },

    openGraph: {
      title:
        __i18n["compatibilite_premium_et_rapport_de_synastrie_luna_astralis"],

      description:
        __i18n["decouvrez_les_forces_les_defis_et_le_potentiel_de_votre_rela"],

      url:
        pageUrl,

      siteName:
        __i18n["luna_astralis"],

      type:
        "website",

      locale:
        locale === "fr"
          ? "fr_CA"
          : locale,

      images: [
        {
          url:
            REPORT_COVER_URL,

          width:
            1414,

          height:
            2000,

          alt:
            __i18n["couverture_du_rapport_compatibilite_premium"],
        },
      ],
    },

    twitter: {
      card:
        "summary_large_image",

      title:
        __i18n["compatibilite_premium_et_synastrie_luna_astralis"],

      description:
        __i18n["une_analyse_approfondie_de_la_rencontre_entre_deux_themes_as"],

      images: [
        REPORT_COVER_URL,
      ],
    },

    robots: {
      index:
        true,

      follow:
        true,
    },
  };
}

/*
|--------------------------------------------------------------------------
| Contenu du rapport
|--------------------------------------------------------------------------
*/

function getReportFeatures(
  __i18n: Dictionary
) {
  return [
  {
    icon: "✦",
    title: __i18n["compatibilite_globale"],
    description:
      __i18n["decouvrez_votre_indice_general_ainsi_que_les_grandes_tendanc"],
  },
  {
    icon: "☾",
    title: __i18n["lien_emotionnel"],
    description:
      __i18n["comprenez_vos_besoins_affectifs_vos_sensibilites_et_votre_fa"],
  },
  {
    icon: "☿",
    title: "Communication",
    description:
      __i18n["analysez_votre_maniere_d_echanger_de_vous_comprendre_et_de_t"],
  },
  {
    icon: "♀",
    title: __i18n["affinite_amoureuse"],
    description:
      __i18n["explorez_vos_langages_amoureux_vos_valeurs_vos_attentes_et_v"],
  },
  {
    icon: "♂",
    title: __i18n["attirance_et_passion"],
    description:
      __i18n["decouvrez_votre_alchimie_votre_rythme_de_desir_et_les_dynami"],
  },
  {
    icon: "♄",
    title: __i18n["stabilite_et_duree"],
    description:
      __i18n["identifiez_les_forces_qui_soutiennent_le_lien_et_les_defis_p"],
  },
  {
    icon: "△",
    title: __i18n["aspects_de_synastrie"],
    description:
      __i18n["comprenez_les_harmonies_les_tensions_et_les_complementarites"],
  },
  {
    icon: "☉",
    title: __i18n["vos_deux_profils"],
    description:
      __i18n["decouvrez_les_principales_energies_relationnelles_que_chaque"],
  },
  {
    icon: "⚖",
    title: __i18n["forces_et_defis"],
    description:
      __i18n["reperez_ce_qui_vous_rapproche_ce_qui_demande_davantage_d_aju"],
  },
  {
    icon: "♃",
    title: __i18n["potentiel_d_evolution"],
    description:
      __i18n["explorez_les_apprentissages_les_possibilites_de_croissance_e"],
  },
  {
    icon: "♡",
    title: __i18n["conseils_relationnels"],
    description:
      __i18n["recevez_des_pistes_concretes_pour_mieux_accueillir_vos_diffe"],
  },
];
}

function getBenefitItems(
  __i18n: Dictionary
) {
  return [
  {
    icon: "☾",
    title: __i18n["comprendre_vos_besoins_affectifs"],
    text:
      __i18n["observez_comment_chacun_recherche_la_securite_l_ecoute_et_la"],
  },
  {
    icon: "☿",
    title: __i18n["ameliorer_votre_communication"],
    text:
      __i18n["identifiez_vos_facons_naturelles_d_echanger_ainsi_que_les_ma"],
  },
  {
    icon: "♀",
    title: __i18n["decoder_votre_facon_d_aimer"],
    text:
      __i18n["comprenez_vos_attentes_vos_gestes_d_affection_et_ce_qui_vous"],
  },
  {
    icon: "♂",
    title: __i18n["explorer_votre_attraction"],
    text:
      __i18n["mettez_en_lumiere_les_dynamiques_de_desir_d_action_de_passio"],
  },
  {
    icon: "♄",
    title: __i18n["evaluer_votre_solidite"],
    text:
      __i18n["reperez_les_facteurs_d_engagement_de_continuite_et_les_defis"],
  },
  {
    icon: "✧",
    title: __i18n["relier_toutes_les_dimensions"],
    text:
      __i18n["recevez_une_synthese_claire_qui_rassemble_les_principales_fo"],
  },
];
}

function getProcessSteps(
  __i18n: Dictionary
) {
  return [
  {
    number: "01",
    title: __i18n["indiquez_vos_naissances"],
    description:
      __i18n["entrez_le_prenom_la_date_l_heure_la_ville_et_le_pays_de_nais"],
  },
  {
    number: "02",
    title: __i18n["vos_deux_themes_sont_compares"],
    description:
      __i18n["les_positions_planetaires_les_maisons_et_les_aspects_de_syna"],
  },
  {
    number: "03",
    title: __i18n["telechargez_votre_rapport"],
    description:
      __i18n["apres_le_paiement_votre_rapport_personnalise_est_genere_et_o"],
  },
];
}

function getFaqItems(
  __i18n: Dictionary
) {
  return [
  {
    question:
      __i18n["quelle_est_la_difference_avec_la_compatibilite_gratuite"],
    answer:
      __i18n["la_compatibilite_gratuite_compare_deux_signes_astrologiques"],
  },
  {
    question:
      __i18n["quelles_informations_dois_je_fournir"],
    answer:
      __i18n["vous_devez_fournir_le_prenom_la_date_de_naissance_l_heure_de"],
  },
  {
    question:
      __i18n["que_contient_le_rapport"],
    answer:
      __i18n["le_rapport_presente_les_deux_profils_astrologiques_la_compat"],
  },
  {
    question:
      __i18n["que_faire_si_je_ne_connais_pas_une_heure_de_naissance"],
    answer:
      __i18n["certaines_positions_peuvent_etre_calculees_sans_heure_precis"],
  },
  {
    question:
      __i18n["le_score_determine_t_il_si_une_relation_va_fonctionner"],
    answer:
      __i18n["non_les_scores_presentent_de_grandes_tendances_astrologiques"],
  },
  {
    question:
      __i18n["comment_vais_je_recevoir_mon_rapport"],
    answer:
      __i18n["votre_rapport_est_genere_au_format_pdf_apres_le_paiement_vou"],
  },
  {
    question:
      __i18n["mes_informations_sont_elles_conservees"],
    answer:
      __i18n["non_vos_informations_de_naissance_servent_uniquement_a_calcu"],
  },
];
}

/*
|--------------------------------------------------------------------------
| Données structurées
|--------------------------------------------------------------------------
*/

function getJsonLd(
  locale: Locale,
  __i18n: Dictionary
) {
  const pageUrl =
    getPageUrl(locale);

  return {
    "@context":
      "https://schema.org",

    "@type":
      "Product",

    name:
      __i18n["rapport_de_compatibilite_astrologique_premium"] ??
      "Rapport de compatibilité astrologique Premium",

    description:
      __i18n["rapport_pdf_personnalise_comparant_deux_themes_astraux_compl"],

    image:
      `https://luna-astralis.app${REPORT_COVER_URL}`,

    brand: {
      "@type":
        "Brand",

      name:
        "Luna Astralis",
    },

    url:
      pageUrl,

    offers: {
      "@type":
        "Offer",

      price:
        "49.99",

      priceCurrency:
        "USD",

      availability:
        "https://schema.org/InStock",

      url:
        pageUrl,
    },
  };
}

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default function CompatibilityPremiumPage({
  params,
}: CompatibilityPremiumPageProps) {
  const { locale } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const __i18n =
    DICTIONARIES[locale];

  const reportFeatures =
    getReportFeatures(__i18n);

  const benefitItems =
    getBenefitItems(__i18n);

  const processSteps =
    getProcessSteps(__i18n);

  const faqItems =
    getFaqItems(__i18n);

  const jsonLd =
    getJsonLd(
      locale,
      __i18n
    );

  function localizedPath(
    path: string
  ): string {
    return `/${locale}${path}`;
  }

  return (
    <AuthProvider>
      <SiteHeader />

      <div className="compat-premium-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(jsonLd).replace(
                /</g,
                "\\u003c",
              ),
          }}
        />

        <main className="compat-premium-main">
          <section
            className="compat-premium-hero"
            aria-labelledby="compat-premium-title"
          >
            <div
              className="compat-premium-hero-glow"
              aria-hidden="true"
            />

            <div
              className="compat-premium-hero-stars"
              aria-hidden="true"
            />

            <div className="compat-premium-hero-copy">
              <div className="compat-premium-hero-badge">
                {__i18n["rapport_astrologique_personnalise"]}</div>

              <p className="compat-premium-hero-eyebrow">
                {__i18n["deux_themes_natals_une_rencontre_unique"]}</p>

              <h1 id="compat-premium-title">
                {__i18n["decouvrez_en_profondeur_votre"]}<span>
                  {" "}
                  {__i18n["compatibilite_amoureuse"]}</span>
              </h1>

              <p className="compat-premium-hero-description">
                {__i18n["explorez_vos_affinites_naturelles_votre_communication_votre"]}</p>

              <div className="compat-premium-hero-actions">
                <Link
                  href="#commande"
                  className="compat-premium-button compat-premium-button-primary"
                >
                  {__i18n["creer_notre_rapport"]}<span aria-hidden="true">
                    ♡
                  </span>
                </Link>

                <a
                  href={REPORT_PREVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="compat-premium-button compat-premium-button-secondary"
                >
                  {__i18n["voir_l_apercu_pdf"]}</a>
              </div>

              <a
                href={REPORT_PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="compat-premium-hero-preview-link"
              >
                {__i18n["consulter_un_veritable_apercu_du_rapport"]}</a>

              <div className="compat-premium-hero-trust">
                <span>{__i18n["deux_themes_astraux"]}</span>
                <span>✓ {REPORT_PAGES}</span>
                <span>{__i18n["telechargement_apres_paiement"]}</span>
              </div>

              <div className="compat-premium-hero-price">
                <div>
                  <span>{__i18n["compatibilite_premium"]}</span>
                  <small>{__i18n["paiement_unique"]}</small>
                </div>

                <strong>{REPORT_PRICE}</strong>
              </div>
            </div>

            <div className="compat-premium-hero-visual">
              <div
                className="compat-premium-cover-glow"
                aria-hidden="true"
              />

              <div className="compat-premium-cover-frame">
                <Image
                  src={REPORT_COVER_URL}
                  alt={__i18n["couverture_du_rapport_compatibilite_premium_2"]}
                  width={707}
                  height={1000}
                  priority
                  className="compat-premium-cover-image"
                />
              </div>

              <div className="compat-premium-cover-badge">
                <span aria-hidden="true">♡</span>
                {__i18n["cree_pour_votre_relation"]}</div>

              <div
                className="compat-premium-hero-orbit compat-premium-hero-orbit-one"
                aria-hidden="true"
              >
                <span>☾</span>
              </div>

              <div
                className="compat-premium-hero-orbit compat-premium-hero-orbit-two"
                aria-hidden="true"
              >
                <span>♀</span>
              </div>
            </div>
          </section>

          <section className="compat-premium-introduction">
            <div className="compat-premium-section-heading">
              <span className="compat-premium-section-label">
                {__i18n["au_dela_des_signes"]}</span>

              <h2>
                {__i18n["une_relation_est_bien_plus_que_deux_signes_astrologiques"]}</h2>

              <p>
                {__i18n["la_synastrie_compare_deux_themes_natals_complets_elle_revele"]}</p>
            </div>

            <div className="compat-premium-introduction-grid">
              <article className="compat-premium-introduction-card">
                <div className="compat-premium-introduction-icon">
                  ♡
                </div>

                <span>{__i18n["compatibilite_gratuite"]}</span>

                <h3>{__i18n["une_premiere_impression"]}</h3>

                <p>
                  {__i18n["une_lecture_simple_fondee_sur_vos_deux_signes_solaires_avec"]}</p>

                <Link
                  href={localizedPath("/compatibilite")}
                  className="compat-premium-text-link"
                >
                  {__i18n["faire_le_test_gratuit"]}<span aria-hidden="true"> →</span>
                </Link>
              </article>

              <article className="compat-premium-introduction-card compat-premium-introduction-card-featured">
                <div className="compat-premium-introduction-card-label">
                  {__i18n["analyse_approfondie"]}</div>

                <div className="compat-premium-introduction-icon">
                  ✦
                </div>

                <span>{__i18n["synastrie_premium"]}</span>

                <h3>{__i18n["une_relation_complete"]}</h3>

                <p>
                  {__i18n["le_rapport_premium_compare_vos_deux_themes_vos_planetes_vos"]}</p>

                <Link
                  href="#commande"
                  className="compat-premium-text-link"
                >
                  {__i18n["commencer_notre_analyse"]}<span aria-hidden="true"> →</span>
                </Link>
              </article>
            </div>
          </section>

          <section
            id="apercu"
            className="compat-premium-report-showcase"
          >
            <div className="compat-premium-report-visual">
              <div className="compat-premium-report-cover-wrapper">
                <Image
                  src={REPORT_COVER_URL}
                  alt={__i18n["apercu_de_la_couverture_du_rapport_compatibilite_premium"]}
                  width={566}
                  height={800}
                  className="compat-premium-report-cover"
                />
              </div>

              <div
                className="compat-premium-report-page compat-premium-report-page-back"
                aria-hidden="true"
              >
                <span>{__i18n["luna_astralis_2"]}</span>
              </div>

              <div
                className="compat-premium-report-page compat-premium-report-page-middle"
                aria-hidden="true"
              >
                <span>{__i18n["votre_synastrie_personnalisee"]}</span>
              </div>
            </div>

            <div className="compat-premium-report-copy">
              <span className="compat-premium-section-label">
                {__i18n["votre_rapport_personnalise"]}</span>

              <h2>
                {__i18n["bien_plus_qu_un_simple_pourcentage"]}</h2>

              <p>
                {__i18n["votre_rapport_explique_le_fonctionnement_profond_de_votre_re"]}</p>

              <div className="compat-premium-report-statistics">
                <div>
                  <strong>2</strong>
                  <span>{__i18n["themes_astraux"]}</span>
                </div>

                <div>
                  <strong>6</strong>
                  <span>{__i18n["dimensions_principales"]}</span>
                </div>

                <div>
                  <strong>50</strong>
                  <span>{__i18n["pages_environ"]}</span>
                </div>
              </div>

              <ul className="compat-premium-check-list">
                <li>{__i18n["vos_deux_profils_relationnels"]}</li>
                <li>{__i18n["votre_indice_general_de_compatibilite"]}</li>
                <li>{__i18n["vos_interactions_planetaires_principales"]}</li>
                <li>{__i18n["vos_forces_naturelles_et_vos_defis"]}</li>
                <li>{__i18n["une_synthese_et_des_conseils_personnalises"]}</li>
              </ul>

              <div className="compat-premium-report-actions">
                <a
                  href={REPORT_PREVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="compat-premium-button compat-premium-button-primary"
                >
                  {__i18n["voir_l_apercu_du_rapport"]}</a>

                <Link
                  href="#commande"
                  className="compat-premium-button compat-premium-button-secondary"
                >
                  {__i18n["creer_notre_rapport_2"]}</Link>
              </div>
            </div>
          </section>

          <section className="compat-premium-contents">
            <div className="compat-premium-section-heading">
              <span className="compat-premium-section-label">
                {__i18n["dans_votre_rapport"]}</span>

              <h2>
                {__i18n["tout_ce_que_votre_synastrie_vous_revele"]}</h2>

              <p>
                {__i18n["chaque_section_eclaire_une_dimension_precise_de_votre_relati"]}</p>
            </div>

            <div className="compat-premium-feature-grid">
              {reportFeatures.map((feature) => (
                <article
                  className="compat-premium-feature-card"
                  key={feature.title}
                >
                  <div className="compat-premium-feature-icon">
                    {feature.icon}
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>

            <div className="compat-premium-section-action">
              <Link
                href="#commande"
                className="compat-premium-button compat-premium-button-primary"
              >
                {__i18n["obtenir_notre_rapport_premium"]}<span aria-hidden="true">♡</span>
              </Link>
            </div>
          </section>

          <section className="compat-premium-benefits">
            <div className="compat-premium-benefits-copy">
              <span className="compat-premium-section-label">
                {__i18n["une_lecture_profonde_du_lien"]}</span>

              <h2>
                {__i18n["comprenez_ce_qui_vous_rapproche_vous_stimule_ou_vous_destabi"]}</h2>

              <p>
                {__i18n["la_synastrie_ne_decide_pas_de_l_avenir_d_une_relation_elle_o"]}</p>

              <a
                href={REPORT_PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="compat-premium-text-link"
              >
                {__i18n["consulter_l_apercu_reel"]}<span aria-hidden="true"> →</span>
              </a>
            </div>

            <div className="compat-premium-benefit-grid">
              {benefitItems.map((item) => (
                <article
                  className="compat-premium-benefit-card"
                  key={item.title}
                >
                  <div className="compat-premium-benefit-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="compat-premium-process">
            <div className="compat-premium-section-heading">
              <span className="compat-premium-section-label">
                {__i18n["simple_et_immediat"]}</span>

              <h2>{__i18n["comment_obtenir_votre_rapport"]}</h2>

              <p>
                {__i18n["quelques_minutes_suffisent_pour_transmettre_vos_informations"]}</p>
            </div>

            <div className="compat-premium-process-grid">
              {processSteps.map((step) => (
                <article
                  className="compat-premium-process-card"
                  key={step.number}
                >
                  <span className="compat-premium-process-number">
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="commande"
            className="compat-premium-order"
          >
            <div
              className="compat-premium-order-glow"
              aria-hidden="true"
            />

            <div className="compat-premium-section-heading">
              <span className="compat-premium-section-label">
                {__i18n["votre_rapport_personnalise_2"]}</span>

              <h2>
                {__i18n["creez_votre_rapport_compatibilite_premium"]}</h2>

              <p>
                {__i18n["entrez_les_informations_de_naissance_des_deux_personnes_afin"]}</p>
            </div>

            <div className="compat-premium-order-layout">
              <div className="compat-premium-order-form">
               <CompatibilityPremiumForm locale={locale} />
              </div>

              <aside className="compat-premium-order-summary">
                <span className="compat-premium-order-summary-label">
                  {__i18n["votre_commande"]}</span>

                <h3>{__i18n["compatibilite_premium_2"]}</h3>

                <div className="compat-premium-order-price">
                  <strong>{REPORT_PRICE}</strong>
                  <span>{__i18n["paiement_unique_2"]}</span>
                </div>

                <ul>
                  <li>{__i18n["rapport_pdf_personnalise"]}</li>
                  <li>{__i18n["deux_themes_astraux_complets"]}</li>
                  <li>{__i18n["environ_50_pages"]}</li>
                  <li>{__i18n["scores_relationnels_detailles"]}</li>
                  <li>{__i18n["aspects_de_synastrie_2"]}</li>
                  <li>{__i18n["forces_defis_et_conseils"]}</li>
                  <li>{__i18n["telechargement_apres_le_paiement"]}</li>
                </ul>

                <div className="compat-premium-order-security">
                  <span aria-hidden="true">🔒</span>

                  <p>
                    {__i18n["paiement_securise"]}<small>{__i18n["aucun_abonnement"]}</small>
                  </p>
                </div>

                <div className="compat-premium-order-download">
                  <span aria-hidden="true">⬇</span>

                  <p>
                    {__i18n["telechargez_et_conservez_votre_pdf"]}<small>
                      {__i18n["aucun_compte_client_n_est_cree_et_le_rapport_ne_pourra_pas_e"]}</small>
                  </p>
                </div>

                <div className="compat-premium-order-privacy">
                  <span aria-hidden="true">✓</span>

                  <p>
                    {__i18n["vos_donnees_ne_sont_pas_conservees"]}<small>
                      {__i18n["elles_servent_uniquement_a_generer_votre_rapport_personnalis"]}</small>
                  </p>
                </div>

                <a
                  href={REPORT_PREVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="compat-premium-order-preview-link"
                >
                  {__i18n["voir_l_apercu_avant_de_commander"]}<span aria-hidden="true"> →</span>
                </a>
              </aside>
            </div>
          </section>

          <section className="compat-premium-faq">
            <div className="compat-premium-section-heading">
              <span className="compat-premium-section-label">
                {__i18n["questions_frequentes"]}</span>

              <h2>{__i18n["tout_savoir_avant_de_commencer"]}</h2>
            </div>

            <div className="compat-premium-faq-list">
              {faqItems.map((item) => (
                <details
                  className="compat-premium-faq-item"
                  key={item.question}
                >
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="compat-premium-final">
            <div
              className="compat-premium-final-glow"
              aria-hidden="true"
            />

            <span className="compat-premium-section-label">
              {__i18n["une_premiere_decouverte_gratuite"]}</span>

            <h2>
              {__i18n["commencez_par_comparer_vos_deux_signes"]}</h2>

            <p>
              {__i18n["essayez_gratuitement_la_compatibilite_par_signes_puis_passez"]}</p>

            <div className="compat-premium-final-actions">
              <Link
                href={localizedPath("/compatibilite")}
                className="compat-premium-button compat-premium-button-primary"
              >
                {__i18n["faire_le_test_gratuit_2"]}<span aria-hidden="true">→</span>
              </Link>

              <Link
                href="#commande"
                className="compat-premium-button compat-premium-button-secondary"
              >
                {__i18n["choisir_premium"]}</Link>
            </div>
          </section>

          <p className="compat-premium-disclaimer">
            {__i18n["l_astrologie_est_proposee_comme_un_outil_symbolique_d_explor"]}</p>
        </main>
      </div>
    </AuthProvider>
  );
}
