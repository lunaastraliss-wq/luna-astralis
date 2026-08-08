import type { MetadataRoute } from "next";

import { COMPATIBILITY_PAGES } from "@/lib/compatibility-pages";

const BASE_URL = "https://luna-astralis.app";

const LOCALES = ["fr", "en", "es", "de", "it", "pt"] as const;

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
| Types
|--------------------------------------------------------------------------
*/

type SitemapEntryOptions = {
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

/*
|--------------------------------------------------------------------------
| Création d’une entrée
|--------------------------------------------------------------------------
*/

function createEntry(
  path: string,
  {
    changeFrequency,
    priority,
  }: SitemapEntryOptions,
): MetadataRoute.Sitemap[number] {
  return {
    url: path === "/" ? BASE_URL : `${BASE_URL}${path}`,
    changeFrequency,
    priority,
  };
}

/*
|--------------------------------------------------------------------------
| Création des routes localisées
|--------------------------------------------------------------------------
*/

function createLocalizedEntries(
  path: string,
  options: SitemapEntryOptions,
): MetadataRoute.Sitemap {
  return LOCALES.map((locale) =>
    createEntry(
      path === "/"
        ? `/${locale}`
        : `/${locale}${path}`,
      options,
    ),
  );
}

/*
|--------------------------------------------------------------------------
| Sitemap
|--------------------------------------------------------------------------
*/

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    /*
    |--------------------------------------------------------------------------
    | Accueil dans les 6 langues
    |--------------------------------------------------------------------------
    */

    ...createLocalizedEntries("/", {
      changeFrequency: "weekly",
      priority: 1,
    }),

    /*
    |--------------------------------------------------------------------------
    | Pages principales
    |--------------------------------------------------------------------------
    */

    ...createLocalizedEntries("/astrologie", {
      changeFrequency: "weekly",
      priority: 0.95,
    }),

    ...createLocalizedEntries("/horoscope", {
      changeFrequency: "daily",
      priority: 0.95,
    }),

    ...createLocalizedEntries("/carte-du-ciel", {
      changeFrequency: "weekly",
      priority: 0.95,
    }),

    ...createLocalizedEntries("/compatibilite", {
      changeFrequency: "weekly",
      priority: 0.95,
    }),

    /*
    |--------------------------------------------------------------------------
    | Horoscope gratuit par signe
    |--------------------------------------------------------------------------
    */

    ...LOCALES.flatMap((locale) =>
      SIGNES.map((signe) =>
        createEntry(
          `/${locale}/horoscope/${signe}`,
          {
            changeFrequency: "daily",
            priority: 0.9,
          },
        ),
      ),
    ),

    /*
    |--------------------------------------------------------------------------
    | Horoscope Premium
    |--------------------------------------------------------------------------
    */

    ...createLocalizedEntries("/horoscope/premium", {
      changeFrequency: "weekly",
      priority: 0.9,
    }),

    ...createLocalizedEntries("/horoscope/premium/jour", {
      changeFrequency: "weekly",
      priority: 0.9,
    }),

    ...createLocalizedEntries("/horoscope/premium/mois", {
      changeFrequency: "weekly",
      priority: 0.9,
    }),

    ...createLocalizedEntries("/horoscope/premium/annee", {
      changeFrequency: "weekly",
      priority: 0.9,
    }),

    /*
    |--------------------------------------------------------------------------
    | Carte du ciel gratuite
    |--------------------------------------------------------------------------
    */

    ...createLocalizedEntries("/carte-du-ciel/gratuite", {
      changeFrequency: "weekly",
      priority: 0.95,
    }),

    /*
    |--------------------------------------------------------------------------
    | Rapports de carte du ciel
    |--------------------------------------------------------------------------
    */

    ...createLocalizedEntries("/carte-du-ciel/essentielle", {
      changeFrequency: "weekly",
      priority: 0.9,
    }),

    ...createLocalizedEntries("/carte-du-ciel/premium", {
      changeFrequency: "weekly",
      priority: 0.9,
    }),

    ...createLocalizedEntries("/carte-du-ciel/signature", {
      changeFrequency: "weekly",
      priority: 0.9,
    }),

    /*
    |--------------------------------------------------------------------------
    | Compatibilité Premium
    |--------------------------------------------------------------------------
    */

    ...createLocalizedEntries("/compatibilite/premium", {
      changeFrequency: "weekly",
      priority: 0.9,
    }),

    /*
    |--------------------------------------------------------------------------
    | Les 144 compatibilités amoureuses
    |--------------------------------------------------------------------------
    */

    ...LOCALES.flatMap((locale) =>
      COMPATIBILITY_PAGES.map((compatibility) =>
        createEntry(
          `/${locale}/compatibilite/${compatibility.signA}/${compatibility.signB}`,
          {
            changeFrequency: "monthly",
            priority: 0.85,
          },
        ),
      ),
    ),

    /*
    |--------------------------------------------------------------------------
    | Index astrologiques
    |--------------------------------------------------------------------------
    */

    ...createLocalizedEntries("/astrologie/signes", {
      changeFrequency: "monthly",
      priority: 0.9,
    }),

    ...createLocalizedEntries("/astrologie/planetes", {
      changeFrequency: "monthly",
      priority: 0.9,
    }),

    ...createLocalizedEntries("/astrologie/maisons", {
      changeFrequency: "monthly",
      priority: 0.9,
    }),

    ...createLocalizedEntries("/astrologie/aspects", {
      changeFrequency: "monthly",
      priority: 0.9,
    }),

    ...createLocalizedEntries("/astrologie/ascendant", {
      changeFrequency: "monthly",
      priority: 0.9,
    }),

    /*
    |--------------------------------------------------------------------------
    | Les 12 signes astrologiques
    |--------------------------------------------------------------------------
    */

    ...LOCALES.flatMap((locale) =>
      SIGNES.map((signe) =>
        createEntry(
          `/${locale}/astrologie/${signe}`,
          {
            changeFrequency: "monthly",
            priority: 0.85,
          },
        ),
      ),
    ),

    /*
    |--------------------------------------------------------------------------
    | Les 12 maisons astrologiques
    |--------------------------------------------------------------------------
    */

    ...LOCALES.flatMap((locale) =>
      Array.from(
        {
          length: 12,
        },
        (_, index) =>
          createEntry(
            `/${locale}/astrologie/maison-${index + 1}`,
            {
              changeFrequency: "monthly",
              priority: 0.85,
            },
          ),
      ),
    ),

    /*
    |--------------------------------------------------------------------------
    | Planètes et points astrologiques
    |--------------------------------------------------------------------------
    */

    ...LOCALES.flatMap((locale) =>
      PLANETES.map((planete) =>
        createEntry(
          `/${locale}/astrologie/${planete}`,
          {
            changeFrequency: "monthly",
            priority: 0.85,
          },
        ),
      ),
    ),

    /*
    |--------------------------------------------------------------------------
    | Aspects astrologiques
    |--------------------------------------------------------------------------
    */

    ...LOCALES.flatMap((locale) =>
      ASPECTS.map((aspect) =>
        createEntry(
          `/${locale}/astrologie/${aspect}`,
          {
            changeFrequency: "monthly",
            priority: 0.85,
          },
        ),
      ),
    ),

    /*
    |--------------------------------------------------------------------------
    | Tarifs
    |--------------------------------------------------------------------------
    */

    ...createLocalizedEntries("/pricing", {
      changeFrequency: "monthly",
      priority: 0.8,
    }),

    /*
    |--------------------------------------------------------------------------
    | Pages légales
    |--------------------------------------------------------------------------
    */

    ...createLocalizedEntries("/conditions", {
      changeFrequency: "yearly",
      priority: 0.2,
    }),

    ...createLocalizedEntries("/confidentialite", {
      changeFrequency: "yearly",
      priority: 0.2,
    }),

    ...createLocalizedEntries("/mentions-legales", {
      changeFrequency: "yearly",
      priority: 0.2,
    }),
  ];
}
