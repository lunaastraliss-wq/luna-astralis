import type {
  MetadataRoute,
} from "next";

const BASE_URL =
  "https://luna-astralis.app";

/*
|--------------------------------------------------------------------------
| Contenus dynamiques
|--------------------------------------------------------------------------
*/

const SIGNES = [
  "belier",
  "taureau",
  "gemeaux",
  "cancer",
  "lion",
  "vierge",
  "balance",
  "scorpion",
  "sagittaire",
  "capricorne",
  "verseau",
  "poissons",
] as const;

const PLANETES = [
  "soleil",
  "lune",
  "mercure",
  "venus",
  "mars",
  "jupiter",
  "saturne",
  "uranus",
  "neptune",
  "pluton",
  "chiron",
  "noeuds-lunaires",
] as const;

const ASPECTS = [
  "conjonction",
  "opposition",
  "carre",
  "trigone",
  "sextile",
  "quinconce",
] as const;

/*
|--------------------------------------------------------------------------
| Création d’une entrée
|--------------------------------------------------------------------------
*/

type SitemapEntryOptions = {
  changeFrequency:
    MetadataRoute.Sitemap[number]["changeFrequency"];

  priority: number;
};

function createEntry(
  path: string,
  {
    changeFrequency,
    priority,
  }: SitemapEntryOptions,
): MetadataRoute.Sitemap[number] {
  return {
    url:
      path === "/"
        ? BASE_URL
        : `${BASE_URL}${path}`,

    changeFrequency,
    priority,
  };
}

/*
|--------------------------------------------------------------------------
| Sitemap
|--------------------------------------------------------------------------
*/

export default function sitemap():
  MetadataRoute.Sitemap {
  return [
    /*
    |--------------------------------------------------------------------------
    | Pages principales
    |--------------------------------------------------------------------------
    */

    createEntry(
      "/",
      {
        changeFrequency:
          "weekly",

        priority:
          1,
      },
    ),

    createEntry(
      "/astrologie",
      {
        changeFrequency:
          "weekly",

        priority:
          0.95,
      },
    ),

    createEntry(
      "/horoscope",
      {
        changeFrequency:
          "daily",

        priority:
          0.95,
      },
    ),

    createEntry(
      "/carte-du-ciel",
      {
        changeFrequency:
          "weekly",

        priority:
          0.95,
      },
    ),

    createEntry(
      "/compatibilite",
      {
        changeFrequency:
          "weekly",

        priority:
          0.95,
      },
    ),

    /*
    |--------------------------------------------------------------------------
    | Horoscopes gratuits par signe
    |--------------------------------------------------------------------------
    */

    ...SIGNES.map(
      (
        signe,
      ) =>
        createEntry(
          `/horoscope/${signe}`,
          {
            changeFrequency:
              "daily",

            priority:
              0.9,
          },
        ),
    ),

    /*
    |--------------------------------------------------------------------------
    | Horoscopes Premium
    |--------------------------------------------------------------------------
    */

    createEntry(
      "/horoscope/premium",
      {
        changeFrequency:
          "weekly",

        priority:
          0.9,
      },
    ),

    createEntry(
      "/horoscope/premium/jour",
      {
        changeFrequency:
          "weekly",

        priority:
          0.9,
      },
    ),

    createEntry(
      "/horoscope/premium/mois",
      {
        changeFrequency:
          "weekly",

        priority:
          0.9,
      },
    ),

    /*
     * Ne pas ajouter /horoscope/premium/annee
     * avant que la page existe réellement.
     */

    /*
    |--------------------------------------------------------------------------
    | Rapports de carte du ciel
    |--------------------------------------------------------------------------
    */

    createEntry(
      "/carte-du-ciel/essentielle",
      {
        changeFrequency:
          "weekly",

        priority:
          0.9,
      },
    ),

    createEntry(
      "/carte-du-ciel/premium",
      {
        changeFrequency:
          "weekly",

        priority:
          0.9,
      },
    ),

    createEntry(
      "/carte-du-ciel/signature",
      {
        changeFrequency:
          "weekly",

        priority:
          0.9,
      },
    ),

    /*
    |--------------------------------------------------------------------------
    | Compatibilité Premium
    |--------------------------------------------------------------------------
    */

    createEntry(
      "/compatibilite/premium",
      {
        changeFrequency:
          "weekly",

        priority:
          0.9,
      },
    ),

    /*
    |--------------------------------------------------------------------------
    | Index astrologiques
    |--------------------------------------------------------------------------
    */

    createEntry(
      "/astrologie/signes",
      {
        changeFrequency:
          "monthly",

        priority:
          0.9,
      },
    ),

    createEntry(
      "/astrologie/planetes",
      {
        changeFrequency:
          "monthly",

        priority:
          0.9,
      },
    ),

    createEntry(
      "/astrologie/maisons",
      {
        changeFrequency:
          "monthly",

        priority:
          0.9,
      },
    ),

    createEntry(
      "/astrologie/aspects",
      {
        changeFrequency:
          "monthly",

        priority:
          0.9,
      },
    ),

    createEntry(
      "/astrologie/ascendant",
      {
        changeFrequency:
          "monthly",

        priority:
          0.9,
      },
    ),

    /*
    |--------------------------------------------------------------------------
    | Les 12 signes astrologiques
    |--------------------------------------------------------------------------
    */

    ...SIGNES.map(
      (
        signe,
      ) =>
        createEntry(
          `/astrologie/${signe}`,
          {
            changeFrequency:
              "monthly",

            priority:
              0.85,
          },
        ),
    ),

    /*
    |--------------------------------------------------------------------------
    | Les 12 maisons astrologiques
    |--------------------------------------------------------------------------
    */

    ...Array.from(
      {
        length:
          12,
      },
      (
        _,
        index,
      ) =>
        createEntry(
          `/astrologie/maison-${index + 1}`,
          {
            changeFrequency:
              "monthly",

            priority:
              0.85,
          },
        ),
    ),

    /*
    |--------------------------------------------------------------------------
    | Planètes et points astrologiques
    |--------------------------------------------------------------------------
    */

    ...PLANETES.map(
      (
        planete,
      ) =>
        createEntry(
          `/astrologie/${planete}`,
          {
            changeFrequency:
              "monthly",

            priority:
              0.85,
          },
        ),
    ),

    /*
    |--------------------------------------------------------------------------
    | Aspects astrologiques
    |--------------------------------------------------------------------------
    */

    ...ASPECTS.map(
      (
        aspect,
      ) =>
        createEntry(
          `/astrologie/${aspect}`,
          {
            changeFrequency:
              "monthly",

            priority:
              0.85,
          },
        ),
    ),

    /*
    |--------------------------------------------------------------------------
    | Tarifs
    |--------------------------------------------------------------------------
    */

    createEntry(
      "/pricing",
      {
        changeFrequency:
          "monthly",

        priority:
          0.8,
      },
    ),

    /*
    |--------------------------------------------------------------------------
    | Pages légales
    |--------------------------------------------------------------------------
    */

    createEntry(
      "/conditions",
      {
        changeFrequency:
          "yearly",

        priority:
          0.2,
      },
    ),

    createEntry(
      "/confidentialite",
      {
        changeFrequency:
          "yearly",

        priority:
          0.2,
      },
    ),

    createEntry(
      "/mentions-legales",
      {
        changeFrequency:
          "yearly",

        priority:
          0.2,
      },
    ),
  ];
}
