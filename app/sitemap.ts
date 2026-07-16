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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pagesPrincipales: MetadataRoute.Sitemap = [
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
    {
      url: `${BASE_URL}/astrologie/planetes`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/astrologie/ascendant`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const pagesSignes: MetadataRoute.Sitemap = SIGNES.map(
    (signe) => ({
      url: `${BASE_URL}/astrologie/${signe}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  const pagesMaisons: MetadataRoute.Sitemap = Array.from(
    { length: 12 },
    (_, index) => ({
      url: `${BASE_URL}/astrologie/maison-${index + 1}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const pagesPlanetes: MetadataRoute.Sitemap = PLANETES.map(
    (planete) => ({
      url: `${BASE_URL}/astrologie/${planete}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  const pagesCompte: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/login`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/signup`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const pagesLegales: MetadataRoute.Sitemap = [
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

  return [
    ...pagesPrincipales,
    ...pagesSignes,
    ...pagesMaisons,
    ...pagesPlanetes,
    ...pagesCompte,
    ...pagesLegales,
  ];
}
