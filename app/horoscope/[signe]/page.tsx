import __i18n from "../../../i18n/migrated/fr/app/horoscope/index/page.json";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";

import "../page.css";
import "../horoscope.css";

import { HOROSCOPE_TEXTES } from "../data";

export const dynamic = "force-dynamic";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type HoroscopeSign = {
  nom: string;
  slug: string;
  symbole: string;
  dates: string;
  element: string;
  qualite: string;
  couleurs: string[];
  nombres: number[];
};

type PageProps = {
  params: Promise<{
    signe: string;
  }>;
};

/*
|--------------------------------------------------------------------------
| Signes astrologiques
|--------------------------------------------------------------------------
*/

const SIGNES: HoroscopeSign[] = [
  {
    nom: __i18n["belier"],
    slug: "belier",
    symbole: "♈",
    dates: __i18n["21_mars_au_19_avril"],
    element: "Feu",
    qualite: "initiative",
    couleurs: [
      "Rouge",
      "Orange",
      "Or",
      "Corail",
      "Bordeaux",
      "Blanc",
      "Jaune",
      "Cuivre",
      "Grenat",
      __i18n["ecarlate"],
    ],
    nombres: [1, 9, 18, 27, 36, 5, 14, 23, 32, 41],
  },
  {
    nom: "Taureau",
    slug: "taureau",
    symbole: "♉",
    dates: __i18n["20_avril_au_20_mai"],
    element: "Terre",
    qualite: __i18n["stabilite"],
    couleurs: [
      "Vert",
      __i18n["rose_poudre"],
      "Beige",
      __i18n["creme"],
      "Brun",
      __i18n["vert_olive"],
      "Blanc",
      "Cuivre",
      "Terracotta",
      "Sauge",
    ],
    nombres: [6, 15, 24, 33, 42, 2, 11, 20, 29, 38],
  },
  {
    nom: __i18n["gemeaux"],
    slug: "gemeaux",
    symbole: "♊",
    dates: __i18n["21_mai_au_20_juin"],
    element: "Air",
    qualite: "communication",
    couleurs: [
      "Jaune",
      __i18n["bleu_ciel"],
      "Argent",
      "Blanc",
      __i18n["vert_menthe"],
      "Orange",
      "Lavande",
      "Turquoise",
      "Or",
      "Citron",
    ],
    nombres: [5, 14, 23, 32, 41, 3, 12, 21, 30, 39],
  },
  {
    nom: "Cancer",
    slug: "cancer",
    symbole: "♋",
    dates: __i18n["21_juin_au_22_juillet"],
    element: "Eau",
    qualite: __i18n["sensibilite"],
    couleurs: [
      "Blanc",
      "Argent",
      __i18n["bleu_pale"],
      "Perle",
      __i18n["creme_2"],
      "Turquoise",
      __i18n["rose_tendre"],
      "Lavande",
      __i18n["bleu_nuit"],
      __i18n["vert_d_eau"],
    ],
    nombres: [2, 11, 20, 29, 38, 4, 13, 22, 31, 40],
  },
  {
    nom: "Lion",
    slug: "lion",
    symbole: "♌",
    dates: __i18n["23_juillet_au_22_aout"],
    element: "Feu",
    qualite: "confiance",
    couleurs: [
      "Or",
      "Orange",
      "Rouge",
      __i18n["jaune_soleil"],
      "Cuivre",
      "Pourpre",
      "Blanc",
      "Corail",
      "Ambre",
      "Bordeaux",
    ],
    nombres: [9, 18, 27, 36, 45, 1, 10, 19, 28, 37],
  },
  {
    nom: "Vierge",
    slug: "vierge",
    symbole: "♍",
    dates: __i18n["23_aout_au_22_septembre"],
    element: "Terre",
    qualite: "organisation",
    couleurs: [
      "Beige",
      __i18n["vert_sauge"],
      "Blanc",
      __i18n["brun_clair"],
      __i18n["bleu_gris"],
      __i18n["creme_3"],
      "Olive",
      "Terracotta",
      "Lavande",
      "Taupe",
    ],
    nombres: [4, 13, 22, 31, 40, 6, 15, 24, 33, 42],
  },
  {
    nom: "Balance",
    slug: "balance",
    symbole: "♎",
    dates: __i18n["23_septembre_au_22_octobre"],
    element: "Air",
    qualite: "harmonie",
    couleurs: [
      "Rose",
      __i18n["bleu_ciel_2"],
      "Lavande",
      "Blanc",
      __i18n["vert_tendre"],
      __i18n["or_rose"],
      "Turquoise",
      "Corail",
      "Argent",
      __i18n["violet_clair"],
    ],
    nombres: [7, 16, 25, 34, 43, 5, 14, 23, 32, 41],
  },
  {
    nom: "Scorpion",
    slug: "scorpion",
    symbole: "♏",
    dates: __i18n["23_octobre_au_21_novembre"],
    element: "Eau",
    qualite: "transformation",
    couleurs: [
      "Bordeaux",
      "Noir",
      __i18n["rouge_profond"],
      "Prune",
      "Grenat",
      "Violet",
      __i18n["bleu_nuit_2"],
      "Or",
      "Argent",
      __i18n["emeraude"],
    ],
    nombres: [8, 17, 26, 35, 44, 4, 13, 22, 31, 40],
  },
  {
    nom: "Sagittaire",
    slug: "sagittaire",
    symbole: "♐",
    dates: __i18n["22_novembre_au_21_decembre"],
    element: "Feu",
    qualite: "expansion",
    couleurs: [
      "Violet",
      __i18n["bleu_royal"],
      "Turquoise",
      "Pourpre",
      "Orange",
      "Or",
      "Indigo",
      "Rouge",
      "Blanc",
      "Magenta",
    ],
    nombres: [3, 12, 21, 30, 39, 6, 15, 24, 33, 42],
  },
  {
    nom: "Capricorne",
    slug: "capricorne",
    symbole: "♑",
    dates: __i18n["22_decembre_au_19_janvier"],
    element: "Terre",
    qualite: "discipline",
    couleurs: [
      "Brun",
      "Noir",
      __i18n["vert_foret"],
      "Gris",
      "Bordeaux",
      __i18n["bleu_marine"],
      "Beige",
      "Or",
      "Taupe",
      "Anthracite",
    ],
    nombres: [10, 19, 28, 37, 46, 8, 17, 26, 35, 44],
  },
  {
    nom: "Verseau",
    slug: "verseau",
    symbole: "♒",
    dates: __i18n["20_janvier_au_18_fevrier"],
    element: "Air",
    qualite: "innovation",
    couleurs: [
      __i18n["bleu_electrique"],
      "Turquoise",
      "Argent",
      "Violet",
      "Blanc",
      "Indigo",
      __i18n["vert_menthe_2"],
      __i18n["bleu_ciel_3"],
      "Or",
      "Magenta",
    ],
    nombres: [11, 20, 29, 38, 47, 7, 16, 25, 34, 43],
  },
  {
    nom: "Poissons",
    slug: "poissons",
    symbole: "♓",
    dates: __i18n["19_fevrier_au_20_mars"],
    element: "Eau",
    qualite: "intuition",
    couleurs: [
      "Turquoise",
      __i18n["bleu_ocean"],
      "Lavande",
      "Blanc",
      __i18n["vert_d_eau_2"],
      __i18n["rose_pale"],
      "Argent",
      "Violet",
      __i18n["bleu_nuit_3"],
      __i18n["nacre"],
    ],
    nombres: [12, 21, 30, 39, 48, 3, 14, 25, 36, 47],
  },
];

/*
|--------------------------------------------------------------------------
| Recherche du signe
|--------------------------------------------------------------------------
*/

function getSigne(slug: string) {
  return SIGNES.find(
    (signe) => signe.slug === slug
  );
}

/*
|--------------------------------------------------------------------------
| Date du jour
|--------------------------------------------------------------------------
*/

function getDateDuJour() {
  return new Intl.DateTimeFormat(
    "fr-CA",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: __i18n["america_toronto"],
    }
  ).format(new Date());
}

/*
|--------------------------------------------------------------------------
| Horoscope quotidien automatique
|--------------------------------------------------------------------------
|
| Le contenu est sélectionné selon :
|
| - la date du jour;
| - le signe astrologique;
| - un décalage différent pour chaque rubrique.
|
| Le contenu change donc automatiquement chaque jour.
|
|--------------------------------------------------------------------------
*/

function getHoroscopeDuJour(
  signe: HoroscopeSign
) {
  const textes =
    HOROSCOPE_TEXTES[
      signe.slug
    ];

  if (!textes) {
    throw new Error(
      `Aucun contenu d’horoscope trouvé pour ${signe.slug}.`
    );
  }

  const dateKey =
    new Intl.DateTimeFormat(
      "en-CA",
      {
        timeZone: __i18n["america_toronto_2"],
      }
    ).format(new Date());

  const seed = Array.from(
    `${dateKey}-${signe.slug}`
  ).reduce(
    (total, caractere) =>
      (total * 31 + caractere.charCodeAt(0)) >>> 0,
    0
  );

 const choisir = (
  banque: string[],
  decalage: number
) => {
  if (banque.length === 0) {
    return "";
  }

  return banque[
    (seed + decalage) %
      banque.length
  ];
};

  return {
    energie: choisir(
      textes.energie,
      1
    ),

    amour: choisir(
      textes.amour,
      2
    ),

    travail: choisir(
      textes.travail,
      3
    ),

    finances: choisir(
      textes.finances,
      4
    ),

    bienEtre: choisir(
      textes.bienEtre,
      5
    ),

    conseil: choisir(
      textes.conseil,
      6
    ),

    couleur: choisir(
      signe.couleurs,
      7
    ),

    nombre:
      signe.nombres[
        (seed + 8) %
          signe.nombres.length
      ],
  };
}

/*
|--------------------------------------------------------------------------
| Génération des 12 routes
|--------------------------------------------------------------------------
*/

export async function generateStaticParams() {
  return SIGNES.map(
    (signe) => ({
      signe: signe.slug,
    })
  );
}

/*
|--------------------------------------------------------------------------
| Métadonnées SEO dynamiques
|--------------------------------------------------------------------------
*/

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { signe: slug } =
    await params;

  const signe =
    getSigne(slug);

  if (!signe) {
    return {
      title:
        __i18n["horoscope_introuvable_luna_astralis"],
      description:
        __i18n["cet_horoscope_astrologique_est_introuvable"],
    };
  }

  const title =
    `Horoscope ${signe.nom} du jour gratuit | Luna Astralis`;

  const description =
    `Découvrez gratuitement l’horoscope du jour du signe ${signe.nom} : amour, travail, finances, bien-être et conseil astrologique.`;

  const canonical =
    `https://luna-astralis.app/horoscope/${signe.slug}`;

  return {
    title,
    description,

    alternates: {
      canonical,
    },

    openGraph: {
      title,
      description,
      url: canonical,
      siteName:
        __i18n["luna_astralis"],
      locale:
        "fr_CA",
      type:
        "article",
    },
  };
}

/*
|--------------------------------------------------------------------------
| Page Horoscope par signe
|--------------------------------------------------------------------------
*/

export default async function HoroscopeSignePage({
  params,
}: PageProps) {
  const { signe: slug } =
    await params;

  const signe =
    getSigne(slug);

  if (!signe) {
    notFound();
  }

  const horoscope =
    getHoroscopeDuJour(
      signe
    );

  const dateDuJour =
    getDateDuJour();

  const indexActuel =
    SIGNES.findIndex(
      (element) =>
        element.slug ===
        signe.slug
    );

  const signePrecedent =
    SIGNES[
      (
        indexActuel -
        1 +
        SIGNES.length
      ) %
        SIGNES.length
    ];

  const signeSuivant =
    SIGNES[
      (
        indexActuel +
        1
      ) %
        SIGNES.length
    ];

  return (
    <AuthProvider>
      <SiteHeader />

      <main className="horoscope-page">
        {/* Hero */}

        <section className="horoscope-hero">
          <div className="horoscope-hero-glow" />

          <div className="horoscope-hero-content">
            <span
              className="horoscope-sign-symbol"
              aria-hidden="true"
            >
              {signe.symbole}
            </span>

            <span className="horoscope-eyebrow">
              {__i18n["mis_a_jour_chaque_jour"]}</span>

            <h1>
              Horoscope{" "}
              {signe.nom} {__i18n["du_jour"]}</h1>

            <p className="horoscope-date">
              {dateDuJour}
            </p>

            <p className="horoscope-intro">
              {__i18n["decouvrez_les_principales_tendances_de_votre_journee_en_amou"]}</p>

            <div className="horoscope-sign-meta">
              <span>
                {signe.dates}
              </span>

              <span>
                {__i18n["element"]}{" "}
                {signe.element}
              </span>
            </div>
          </div>
        </section>

        {/* Horoscope du jour */}

        <section className="horoscope-daily-section">
          <div className="horoscope-daily-grid">
            <article className="horoscope-daily-card horoscope-daily-card-wide">
              <span
                className="horoscope-daily-icon"
                aria-hidden="true"
              >
                ✦
              </span>

              <div>
                <h2>
                  {__i18n["energie_du_jour"]}</h2>

                <p>
                  {
                    horoscope.energie
                  }
                </p>
              </div>
            </article>

            <article className="horoscope-daily-card">
              <span
                className="horoscope-daily-icon"
                aria-hidden="true"
              >
                ♡
              </span>

              <div>
                <h2>
                  Amour
                </h2>

                <p>
                  {
                    horoscope.amour
                  }
                </p>
              </div>
            </article>

            <article className="horoscope-daily-card">
              <span
                className="horoscope-daily-icon"
                aria-hidden="true"
              >
                ◇
              </span>

              <div>
                <h2>
                  Travail
                </h2>

                <p>
                  {
                    horoscope.travail
                  }
                </p>
              </div>
            </article>

            <article className="horoscope-daily-card">
              <span
                className="horoscope-daily-icon"
                aria-hidden="true"
              >
                $
              </span>

              <div>
                <h2>
                  Finances
                </h2>

                <p>
                  {
                    horoscope.finances
                  }
                </p>
              </div>
            </article>

            <article className="horoscope-daily-card">
              <span
                className="horoscope-daily-icon"
                aria-hidden="true"
              >
                ☾
              </span>

              <div>
                <h2>
                  {__i18n["bien_etre"]}</h2>

                <p>
                  {
                    horoscope.bienEtre
                  }
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Conseil du jour */}

        <section className="horoscope-advice-section">
          <div className="horoscope-advice-card">
            <span className="horoscope-section-kicker">
              {__i18n["conseil_astrologique"]}</span>

            <h2>
              {__i18n["votre_conseil_du_jour"]}</h2>

            <p>
              {horoscope.conseil}
            </p>

            <div className="horoscope-lucky-grid">
              <div>
                <span>
                  {__i18n["nombre_du_jour"]}</span>

                <strong>
                  {horoscope.nombre}
                </strong>
              </div>

              <div>
                <span>
                  {__i18n["couleur_du_jour"]}</span>

                <strong>
                  {horoscope.couleur}
                </strong>
              </div>

              <div>
                <span>
                  {__i18n["force_a_privilegier"]}</span>

                <strong>
                  {signe.qualite}
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* Carte du ciel */}

        <section className="horoscope-cta-section">
          <div className="horoscope-cta">
            <span className="horoscope-cta-kicker">
              {__i18n["votre_astrologie_personnelle"]}</span>

            <h2>
              {__i18n["votre_horoscope_general_n_est_qu_un_apercu"]}</h2>

            <p>
              {__i18n["votre_carte_du_ciel_tient_compte_de_votre_date_de_votre_heur"]}</p>

            <div className="horoscope-cta-actions">
              <Link
                href="/carte-du-ciel"
                className="horoscope-primary-button"
              >
                {__i18n["creer_ma_carte_du_ciel_gratuite"]}</Link>

              <Link
                href="/compatibilite"
                className="horoscope-secondary-button"
              >
                {__i18n["tester_une_compatibilite"]}</Link>
            </div>
          </div>
        </section>

        {/* Horoscope Premium */}

        <section className="horoscope-premium-section">
          <div className="horoscope-premium-card">
            <span className="horoscope-premium-kicker">
              {__i18n["luna_astralis_premium"]}</span>

            <h2>
              {__i18n["decouvrez_votre_horoscope_personnalise"]}</h2>

            <p className="horoscope-premium-intro">
              {__i18n["l_horoscope_gratuit_presente_les_grandes_tendances_de_votre"]}</p>

            <div className="horoscope-premium-offers">
              <article className="horoscope-premium-offer">
                <span
                  className="horoscope-premium-offer-icon"
                  aria-hidden="true"
                >
                  ✨
                </span>

                <div>
                  <h3>
                    {__i18n["horoscope_premium_du_jour"]}</h3>

                  <p>
                    {__i18n["une_lecture_approfondie_des_energies_qui_vous_accompagnent_a"]}</p>
                </div>
              </article>

              <article className="horoscope-premium-offer">
                <span
                  className="horoscope-premium-offer-icon"
                  aria-hidden="true"
                >
                  📅
                </span>

                <div>
                  <h3>
                    {__i18n["horoscope_premium_du_mois"]}</h3>

                  <p>
                    {__i18n["vos_grandes_periodes_vos_opportunites_et_les_moments_a_surve"]}</p>
                </div>
              </article>

              <article className="horoscope-premium-offer">
                <span
                  className="horoscope-premium-offer-icon"
                  aria-hidden="true"
                >
                  🌟
                </span>

                <div>
                  <h3>
                    {__i18n["horoscope_premium_de_l_annee"]}</h3>

                  <p>
                    {__i18n["une_vision_complete_de_votre_annee_en_amour_au_travail_dans"]}</p>
                </div>
              </article>
            </div>

            <ul className="horoscope-premium-list">
              <li>
                <span
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>
                  {__i18n["analyse_basee_sur_votre_naissance"]}</span>
              </li>

              <li>
                <span
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>
                  {__i18n["transits_astrologiques_personnalises"]}</span>
              </li>

              <li>
                <span
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>
                  {__i18n["amour_travail_argent_et_bien_etre"]}</span>
              </li>

              <li>
                <span
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>
                  {__i18n["conseils_approfondis_et_periodes_cles"]}</span>
              </li>
            </ul>

            <div className="horoscope-premium-actions">
              <Link
                href="/horoscope/premium"
                className="horoscope-premium-button"
              >
                {__i18n["decouvrir_l_horoscope_premium"]}</Link>

              <p className="horoscope-premium-note">
                {__i18n["horoscope_du_jour_du_mois_et_de_l_annee"]}</p>
            </div>
          </div>
        </section>

        {/* Navigation entre les signes */}

        <nav
          className="horoscope-sign-navigation"
          aria-label={__i18n["navigation_entre_les_horoscopes"]}
        >
          <Link
            href={`/horoscope/${signePrecedent.slug}`}
          >
            <span aria-hidden="true">
              ←
            </span>

            Horoscope{" "}
            {signePrecedent.nom}
          </Link>

          <Link href="/horoscope">
            {__i18n["tous_les_horoscopes"]}</Link>

          <Link
            href={`/horoscope/${signeSuivant.slug}`}
          >
            Horoscope{" "}
            {signeSuivant.nom}

            <span aria-hidden="true">
              →
            </span>
          </Link>
        </nav>
      </main>
    </AuthProvider>
  );
}
