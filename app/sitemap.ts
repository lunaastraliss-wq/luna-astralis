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

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ==========================
    // Pages principales
    // ==========================

    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/astrologie`,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/carte-du-ciel`,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/compatibilite`,
      changeFrequency: "weekly",
      priority: 0.95,
    },

    // Ajoute cette route seulement lorsqu’elle existe réellement.
    {
      url: `${BASE_URL}/compatibilite/premium`,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // ==========================
    // Horoscope
    // ==========================

    {
      url: `${BASE_URL}/horoscope`,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/horoscope/premium`,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    ...SIGNES.map((signe) => ({
      url: `${BASE_URL}/horoscope/${signe}`,
      changeFrequency: "daily" as const,
      priority: 0.9,
    })),

    // ==========================
    // Index astrologiques
    // ==========================

    {
      url: `${BASE_URL}/astrologie/signes`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/astrologie/planetes`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/astrologie/maisons`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/astrologie/aspects`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/astrologie/ascendant`,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ==========================
    // Les 12 signes
    // ==========================

    ...SIGNES.map((signe) => ({
      url: `${BASE_URL}/astrologie/${signe}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    // ==========================
    // Les 12 maisons
    // ==========================

    ...Array.from({ length: 12 }, (_, index) => ({
      url: `${BASE_URL}/astrologie/maison-${index + 1}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    // ==========================
    // Planètes et points
    // ==========================

    ...PLANETES.map((planete) => ({
      url: `${BASE_URL}/astrologie/${planete}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    // ==========================
    // Aspects
    // ==========================

    ...ASPECTS.map((aspect) => ({
      url: `${BASE_URL}/astrologie/${aspect}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    // ==========================
    // Tarifs
    // ==========================

    {
      url: `${BASE_URL}/pricing`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ==========================
    // Pages légales
    // ==========================

    {
      url: `${BASE_URL}/conditions`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/confidentialite`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/mentions-legales`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
