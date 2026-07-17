import type { MetadataRoute } from "next";

const BASE_URL = "https://luna-astralis.app";

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
];

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
];

const ASPECTS = [
  "conjonction",
  "opposition",
  "carre",
  "trigone",
  "sextile",
  "quinconce",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    // ==========================
    // Pages principales
    // ==========================

    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/astrologie`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/carte-du-ciel`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/compatibilite`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // ==========================
    // Horoscope
    // ==========================

    {
      url: `${BASE_URL}/horoscope`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/horoscope/premium`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },

    // ==========================
    // Pages astrologiques
    // ==========================

    {
      url: `${BASE_URL}/astrologie/signes`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/astrologie/planetes`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/astrologie/maisons`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/astrologie/aspects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/astrologie/ascendant`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ==========================
    // Les 12 signes
    // ==========================

    ...SIGNES.map((signe) => ({
      url: `${BASE_URL}/astrologie/${signe}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    // ==========================
    // Les 12 maisons
    // ==========================

    ...Array.from({ length: 12 }, (_, index) => ({
      url: `${BASE_URL}/astrologie/maison-${index + 1}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    // ==========================
    // Les planètes
    // ==========================

    ...PLANETES.map((planete) => ({
      url: `${BASE_URL}/astrologie/${planete}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    // ==========================
    // Les aspects
    // ==========================

    ...ASPECTS.map((aspect) => ({
      url: `${BASE_URL}/astrologie/${aspect}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    // ==========================
    // Tarifs
    // ==========================

    {
      url: `${BASE_URL}/pricing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ==========================
    // Pages légales
    // ==========================

    {
      url: `${BASE_URL}/conditions`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/confidentialite`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/mentions-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
