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
    nom: "Bélier",
    slug: "belier",
    symbole: "♈",
    dates: "21 mars au 19 avril",
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
      "Écarlate",
    ],
    nombres: [1, 9, 18, 27, 36, 5, 14, 23, 32, 41],
  },
  {
    nom: "Taureau",
    slug: "taureau",
    symbole: "♉",
    dates: "20 avril au 20 mai",
    element: "Terre",
    qualite: "stabilité",
    couleurs: [
      "Vert",
      "Rose poudré",
      "Beige",
      "Crème",
      "Brun",
      "Vert olive",
      "Blanc",
      "Cuivre",
      "Terracotta",
      "Sauge",
    ],
    nombres: [6, 15, 24, 33, 42, 2, 11, 20, 29, 38],
  },
  {
    nom: "Gémeaux",
    slug: "gemeaux",
    symbole: "♊",
    dates: "21 mai au 20 juin",
    element: "Air",
    qualite: "communication",
    couleurs: [
      "Jaune",
      "Bleu ciel",
      "Argent",
      "Blanc",
      "Vert menthe",
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
    dates: "21 juin au 22 juillet",
    element: "Eau",
    qualite: "sensibilité",
    couleurs: [
      "Blanc",
      "Argent",
      "Bleu pâle",
      "Perle",
      "Crème",
      "Turquoise",
      "Rose tendre",
      "Lavande",
      "Bleu nuit",
      "Vert d’eau",
    ],
    nombres: [2, 11, 20, 29, 38, 4, 13, 22, 31, 40],
  },
  {
    nom: "Lion",
    slug: "lion",
    symbole: "♌",
    dates: "23 juillet au 22 août",
    element: "Feu",
    qualite: "confiance",
    couleurs: [
      "Or",
      "Orange",
      "Rouge",
      "Jaune soleil",
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
    dates: "23 août au 22 septembre",
    element: "Terre",
    qualite: "organisation",
    couleurs: [
      "Beige",
      "Vert sauge",
      "Blanc",
      "Brun clair",
      "Bleu gris",
      "Crème",
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
    dates: "23 septembre au 22 octobre",
    element: "Air",
    qualite: "harmonie",
    couleurs: [
      "Rose",
      "Bleu ciel",
      "Lavande",
      "Blanc",
      "Vert tendre",
      "Or rose",
      "Turquoise",
      "Corail",
      "Argent",
      "Violet clair",
    ],
    nombres: [7, 16, 25, 34, 43, 5, 14, 23, 32, 41],
  },
  {
    nom: "Scorpion",
    slug: "scorpion",
    symbole: "♏",
    dates: "23 octobre au 21 novembre",
    element: "Eau",
    qualite: "transformation",
    couleurs: [
      "Bordeaux",
      "Noir",
      "Rouge profond",
      "Prune",
      "Grenat",
      "Violet",
      "Bleu nuit",
      "Or",
      "Argent",
      "Émeraude",
    ],
    nombres: [8, 17, 26, 35, 44, 4, 13, 22, 31, 40],
  },
  {
    nom: "Sagittaire",
    slug: "sagittaire",
    symbole: "♐",
    dates: "22 novembre au 21 décembre",
    element: "Feu",
    qualite: "expansion",
    couleurs: [
      "Violet",
      "Bleu royal",
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
    dates: "22 décembre au 19 janvier",
    element: "Terre",
    qualite: "discipline",
    couleurs: [
      "Brun",
      "Noir",
      "Vert forêt",
      "Gris",
      "Bordeaux",
      "Bleu marine",
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
    dates: "20 janvier au 18 février",
    element: "Air",
    qualite: "innovation",
    couleurs: [
      "Bleu électrique",
      "Turquoise",
      "Argent",
      "Violet",
      "Blanc",
      "Indigo",
      "Vert menthe",
      "Bleu ciel",
      "Or",
      "Magenta",
    ],
    nombres: [11, 20, 29, 38, 47, 7, 16, 25, 34, 43],
  },
  {
    nom: "Poissons",
    slug: "poissons",
    symbole: "♓",
    dates: "19 février au 20 mars",
    element: "Eau",
    qualite: "intuition",
    couleurs: [
      "Turquoise",
      "Bleu océan",
      "Lavande",
      "Blanc",
      "Vert d’eau",
      "Rose pâle",
      "Argent",
      "Violet",
      "Bleu nuit",
      "Nacré",
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
      timeZone: "America/Toronto",
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
        timeZone: "America/Toronto",
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
        "Horoscope introuvable | Luna Astralis",
      description:
        "Cet horoscope astrologique est introuvable.",
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
        "Luna Astralis",
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
              ✨ Mis à jour chaque jour
            </span>

            <h1>
              Horoscope{" "}
              {signe.nom} du jour
            </h1>

            <p className="horoscope-date">
              {dateDuJour}
            </p>

            <p className="horoscope-intro">
              Découvrez les
              principales tendances
              de votre journée en
              amour, au travail,
              dans vos finances et
              votre bien-être.
            </p>

            <div className="horoscope-sign-meta">
              <span>
                {signe.dates}
              </span>

              <span>
                Élément{" "}
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
                  Énergie du jour
                </h2>

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
                  Bien-être
                </h2>

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
              Conseil astrologique
            </span>

            <h2>
              Votre conseil du jour
            </h2>

            <p>
              {horoscope.conseil}
            </p>

            <div className="horoscope-lucky-grid">
              <div>
                <span>
                  Nombre du jour
                </span>

                <strong>
                  {horoscope.nombre}
                </strong>
              </div>

              <div>
                <span>
                  Couleur du jour
                </span>

                <strong>
                  {horoscope.couleur}
                </strong>
              </div>

              <div>
                <span>
                  Force à privilégier
                </span>

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
              🌌 Votre astrologie personnelle
            </span>

            <h2>
              Votre horoscope
              général n’est qu’un
              aperçu
            </h2>

            <p>
              Votre carte du ciel
              tient compte de votre
              date, de votre heure
              et de votre lieu de
              naissance pour offrir
              une lecture beaucoup
              plus personnelle.
            </p>

            <div className="horoscope-cta-actions">
              <Link
                href="/carte-du-ciel"
                className="horoscope-primary-button"
              >
                Créer ma carte du
                ciel gratuite
              </Link>

              <Link
                href="/compatibilite"
                className="horoscope-secondary-button"
              >
                Tester une
                compatibilité
              </Link>
            </div>
          </div>
        </section>

        {/* Horoscope Premium */}

        <section className="horoscope-premium-section">
          <div className="horoscope-premium-card">
            <span className="horoscope-premium-kicker">
              🌙 Luna Astralis
              Premium
            </span>

            <h2>
              Découvrez votre
              horoscope personnalisé
            </h2>

            <p className="horoscope-premium-intro">
              L’horoscope gratuit
              présente les grandes
              tendances de votre
              signe solaire. Votre
              horoscope Premium sera
              calculé selon votre
              date, votre heure et
              votre lieu de
              naissance.
            </p>

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
                    Horoscope Premium
                    du jour
                  </h3>

                  <p>
                    Une lecture
                    approfondie des
                    énergies qui vous
                    accompagnent
                    aujourd’hui.
                  </p>
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
                    Horoscope Premium
                    du mois
                  </h3>

                  <p>
                    Vos grandes
                    périodes, vos
                    opportunités et
                    les moments à
                    surveiller durant
                    le mois.
                  </p>
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
                    Horoscope Premium
                    de l’année
                  </h3>

                  <p>
                    Une vision
                    complète de votre
                    année en amour,
                    au travail, dans
                    vos finances et
                    votre évolution.
                  </p>
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
                  Analyse basée sur
                  votre naissance
                </span>
              </li>

              <li>
                <span
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>
                  Transits
                  astrologiques
                  personnalisés
                </span>
              </li>

              <li>
                <span
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>
                  Amour, travail,
                  argent et
                  bien-être
                </span>
              </li>

              <li>
                <span
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>
                  Conseils
                  approfondis et
                  périodes clés
                </span>
              </li>
            </ul>

            <div className="horoscope-premium-actions">
              <Link
                href="/horoscope/premium"
                className="horoscope-premium-button"
              >
                Découvrir
                l’Horoscope Premium
              </Link>

              <p className="horoscope-premium-note">
                Horoscope du jour,
                du mois et de
                l’année
              </p>
            </div>
          </div>
        </section>

        {/* Navigation entre les signes */}

        <nav
          className="horoscope-sign-navigation"
          aria-label="Navigation entre les horoscopes"
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
            Tous les horoscopes
          </Link>

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
