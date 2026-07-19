import type {
  PremiumAngles,
  PremiumPlanet,
} from "@/components/PremiumPdf/PremiumPdfTypes";

import {
  normalizePlanets,
} from "@/components/PremiumPdf/PremiumPdfUtils";

import type {
  CompatibilityAspect,
  CompatibilityAspectCategory,
  CompatibilityPerson,
  SafeCompatibilityPerson,
} from "./CompatibilityPdfTypes";

/*
 * Planètes utilisées pour la synastrie.
 *
 * On conserve les principales planètes relationnelles
 * et générationnelles utilisées dans le rapport.
 */
export const COMPATIBILITY_PLANETS = [
  "Sun",
  "Moon",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
] as const;

export type CompatibilityPlanetName =
  (typeof COMPATIBILITY_PLANETS)[number];

/*
 * Aspects étudiés dans la compatibilité.
 */
export const COMPATIBILITY_ASPECT_ANGLES = {
  conjunction: 0,
  sextile: 60,
  square: 90,
  trine: 120,
  quincunx: 150,
  opposition: 180,
} as const;

/*
 * Orbes maximaux utilisés pour chaque aspect.
 *
 * Les conjonctions et oppositions reçoivent un orbe
 * légèrement plus large. Le quinconce reste plus précis.
 */
export const COMPATIBILITY_ASPECT_ORBS = {
  conjunction: 8,
  sextile: 5,
  square: 7,
  trine: 7,
  quincunx: 3,
  opposition: 8,
} as const;

export type CompatibilityAspectType =
  keyof typeof COMPATIBILITY_ASPECT_ANGLES;

/*
 * Valeur numérique sécurisée.
 */
export function toSafeNumber(
  value: unknown,
  fallback = 0,
): number {
  return typeof value === "number" &&
    Number.isFinite(value)
    ? value
    : fallback;
}

/*
 * Chaîne sécurisée.
 */
export function toSafeString(
  value: unknown,
): string {
  return typeof value === "string"
    ? value.trim()
    : "";
}

/*
 * Normalise une longitude entre 0 et 360 degrés.
 */
export function normalizeLongitude(
  longitude: number,
): number {
  const normalized =
    ((longitude % 360) + 360) % 360;

  return normalized;
}

/*
 * Calcule la distance angulaire la plus courte
 * entre deux positions zodiacales.
 *
 * Le résultat se situe toujours entre 0 et 180 degrés.
 */
export function getAngularDistance(
  longitude1: number,
  longitude2: number,
): number {
  const first =
    normalizeLongitude(longitude1);

  const second =
    normalizeLongitude(longitude2);

  const rawDistance =
    Math.abs(first - second);

  return rawDistance > 180
    ? 360 - rawDistance
    : rawDistance;
}

/*
 * Vérifie qu’un objet angles est valide.
 */
export function normalizeCompatibilityAngles(
  angles: unknown,
): PremiumAngles {
  if (
    !angles ||
    typeof angles !== "object" ||
    Array.isArray(angles)
  ) {
    return {};
  }

  return angles as PremiumAngles;
}

/*
 * Normalise toutes les données d’une personne.
 */
export function normalizeCompatibilityPerson(
  person?: CompatibilityPerson,
): SafeCompatibilityPerson {
  return {
    firstName: toSafeString(
      person?.firstName,
    ),

    birthDate: toSafeString(
      person?.birthDate,
    ),

    birthTime: toSafeString(
      person?.birthTime,
    ),

    birthCity: toSafeString(
      person?.birthCity,
    ),

     birthCountry: toSafeString(
    person?.birthCountry,
  ),
    
   planets: normalizePlanets(
  person?.planets,
).map((planet) => ({
  ...planet,

  sign: translateCompatibilitySign(
    toSafeString(planet.sign),
  ),
})),

    angles: normalizeCompatibilityAngles(
      person?.angles,
    ),

    wheelImage: toSafeString(
      person?.wheelImage,
    ),
  };
}

/*
 * Récupère une planète par son nom.
 *
 * La comparaison ignore les majuscules et les espaces.
 */
export function getCompatibilityPlanet(
  planets: PremiumPlanet[],
  planetName: string,
): PremiumPlanet | undefined {
  const normalizedPlanetName =
    planetName.trim().toLowerCase();

  return planets.find((planet) => {
    const currentName =
      toSafeString(planet.name).toLowerCase();

    return currentName === normalizedPlanetName;
  });
}

/*
 * Vérifie qu’une planète contient une longitude exploitable.
 */
export function hasValidLongitude(
  planet?: PremiumPlanet,
): planet is PremiumPlanet & {
  longitude: number;
} {
  return (
    typeof planet?.longitude === "number" &&
    Number.isFinite(planet.longitude)
  );
}

/*
 * Détermine si deux positions forment un aspect reconnu.
 */
export function detectCompatibilityAspect(
  longitude1: number,
  longitude2: number,
): {
  type: CompatibilityAspectType;
  orb: number;
} | null {
  const distance =
    getAngularDistance(
      longitude1,
      longitude2,
    );

  const entries = Object.entries(
    COMPATIBILITY_ASPECT_ANGLES,
  ) as Array<
    [
      CompatibilityAspectType,
      number,
    ]
  >;

  let closestAspect:
    | {
        type: CompatibilityAspectType;
        orb: number;
      }
    | null = null;

  for (const [type, angle] of entries) {
    const orb =
      Math.abs(distance - angle);

    const maximumOrb =
      COMPATIBILITY_ASPECT_ORBS[type];

    if (orb > maximumOrb) {
      continue;
    }

    if (
      !closestAspect ||
      orb < closestAspect.orb
    ) {
      closestAspect = {
        type,
        orb,
      };
    }
  }

  return closestAspect;
}

/*
 * Calcule tous les aspects entre les planètes
 * de la première personne et celles de la seconde.
 */
export function calculateCompatibilityAspects(
  person1Planets: PremiumPlanet[],
  person2Planets: PremiumPlanet[],
): CompatibilityAspect[] {
  const normalizedPerson1 =
    normalizePlanets(person1Planets);

  const normalizedPerson2 =
    normalizePlanets(person2Planets);

  const aspects: CompatibilityAspect[] = [];

  for (
    const person1PlanetName
    of COMPATIBILITY_PLANETS
  ) {
    const person1Planet =
      getCompatibilityPlanet(
        normalizedPerson1,
        person1PlanetName,
      );

    if (
      !hasValidLongitude(person1Planet)
    ) {
      continue;
    }

    for (
      const person2PlanetName
      of COMPATIBILITY_PLANETS
    ) {
      const person2Planet =
        getCompatibilityPlanet(
          normalizedPerson2,
          person2PlanetName,
        );

      if (
        !hasValidLongitude(person2Planet)
      ) {
        continue;
      }

      const detectedAspect =
        detectCompatibilityAspect(
          person1Planet.longitude,
          person2Planet.longitude,
        );

      if (!detectedAspect) {
        continue;
      }

      aspects.push({
        person1Planet:
          person1PlanetName,

        person2Planet:
          person2PlanetName,

        type: detectedAspect.type,

        orb: Number(
          detectedAspect.orb.toFixed(2),
        ),

        person1Longitude:
          normalizeLongitude(
            person1Planet.longitude,
          ),

        person2Longitude:
          normalizeLongitude(
            person2Planet.longitude,
          ),
      });
    }
  }

  /*
   * Les aspects les plus précis sont placés
   * en premier dans le rapport.
   */
  return aspects.sort(
    (first, second) =>
      first.orb - second.orb,
  );
}

/*
 * Retourne les aspects concernant une paire
 * précise de planètes.
 */
export function getAspectsBetweenPlanets(
  aspects: CompatibilityAspect[],
  person1Planet: string,
  person2Planet: string,
): CompatibilityAspect[] {
  const firstPlanet =
    person1Planet.trim().toLowerCase();

  const secondPlanet =
    person2Planet.trim().toLowerCase();

  return aspects.filter((aspect) => {
    return (
      aspect.person1Planet
        .trim()
        .toLowerCase() === firstPlanet &&
      aspect.person2Planet
        .trim()
        .toLowerCase() === secondPlanet
    );
  });
}

/*
 * Indique si l’aspect est généralement fluide.
 *
 * Une conjonction n’est pas automatiquement classée
 * comme harmonieuse ou difficile, car son expression
 * dépend fortement des planètes concernées.
 */
export function isHarmoniousAspect(
  type: CompatibilityAspectType,
): boolean {
  return (
    type === "trine" ||
    type === "sextile"
  );
}

/*
 * Indique si l’aspect est généralement plus exigeant.
 */
export function isChallengingAspect(
  type: CompatibilityAspectType,
): boolean {
  return (
    type === "square" ||
    type === "opposition" ||
    type === "quincunx"
  );
}

/*
 * Classe une combinaison planétaire
 * dans la section appropriée du rapport.
 */
export function getCompatibilityCategory(
  person1Planet: string,
  person2Planet: string,
): CompatibilityAspectCategory {
  const first =
    person1Planet.toLowerCase();

  const second =
    person2Planet.toLowerCase();

  const pair =
    new Set([first, second]);

  if (
    pair.has("sun") &&
    (
      pair.has("sun") ||
      pair.has("moon")
    )
  ) {
    return "identity";
  }

  if (
    pair.has("moon") &&
    (
      pair.has("moon") ||
      pair.has("venus") ||
      pair.has("saturn")
    )
  ) {
    return "emotions";
  }

  if (
    pair.has("venus") &&
    (
      pair.has("sun") ||
      pair.has("moon") ||
      pair.has("venus")
    )
  ) {
    return "love";
  }

  if (
    pair.has("mars") &&
    (
      pair.has("venus") ||
      pair.has("mars") ||
      pair.has("pluto")
    )
  ) {
    return "attraction";
  }

  if (
    pair.has("mercury")
  ) {
    return "communication";
  }

  if (
    pair.has("saturn")
  ) {
    return "stability";
  }

  if (
    pair.has("jupiter") ||
    pair.has("uranus") ||
    pair.has("neptune") ||
    pair.has("pluto")
  ) {
    return "growth";
  }

  return "challenges";
}

/*
 * Filtre les aspects par catégorie.
 */
export function getAspectsByCategory(
  aspects: CompatibilityAspect[],
  category: CompatibilityAspectCategory,
): CompatibilityAspect[] {
  return aspects.filter((aspect) => {
    return (
      getCompatibilityCategory(
        aspect.person1Planet,
        aspect.person2Planet,
      ) === category
    );
  });
}

/*
 * Retourne les aspects les plus précis.
 */
export function getStrongestCompatibilityAspects(
  aspects: CompatibilityAspect[],
  limit = 12,
): CompatibilityAspect[] {
  const safeLimit =
    Number.isInteger(limit) && limit > 0
      ? limit
      : 12;

  return [...aspects]
    .sort(
      (first, second) =>
        first.orb - second.orb,
    )
    .slice(0, safeLimit);
}

/*
 * Traduit le nom technique d’un aspect.
 */
export function translateCompatibilityAspect(
  type: CompatibilityAspectType,
): string {
  const translations: Record<
    CompatibilityAspectType,
    string
  > = {
    conjunction: "Conjonction",
    sextile: "Sextile",
    square: "Carré",
    trine: "Trigone",
    quincunx: "Quinconce",
    opposition: "Opposition",
  };

  return translations[type];
}

/*
 * Traduit les noms des planètes.
 */
export function translateCompatibilityPlanet(
  planetName: string,
): string {
  const translations: Record<
    string,
    string
  > = {
    sun: "Soleil",
    moon: "Lune",
    mercury: "Mercure",
    venus: "Vénus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturne",
    uranus: "Uranus",
    neptune: "Neptune",
    pluto: "Pluton",
    ascendant: "Ascendant",
  };

  const normalized =
    planetName.trim().toLowerCase();

  return (
    translations[normalized] ??
    planetName
  );
}

/*
 * Traduit les signes astrologiques anglais en français.
 *
 * Les signes déjà en français restent inchangés.
 * Cancer est identique en anglais et en français.
 */
export function translateCompatibilitySign(
  sign: string,
): string {
  const safeSign =
    typeof sign === "string"
      ? sign.trim()
      : "";

  if (!safeSign) {
    return "Non précisé";
  }

  const normalized = safeSign
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const translations: Record<
    string,
    string
  > = {
    aries: "Bélier",
    taurus: "Taureau",
    gemini: "Gémeaux",
    leo: "Lion",
    virgo: "Vierge",
    libra: "Balance",
    scorpio: "Scorpion",
    sagittarius: "Sagittaire",
    capricorn: "Capricorne",
    aquarius: "Verseau",
    pisces: "Poissons",
  };

  return (
    translations[normalized] ??
    safeSign
  );
}
/*
 * Détermine le signe astrologique correspondant
 * à une longitude zodiacale.
 */
export function getCompatibilitySignFromLongitude(
  longitude: number,
): string {
  if (
    typeof longitude !== "number" ||
    !Number.isFinite(longitude)
  ) {
    return "Non précisé";
  }

  const signs = [
    "Bélier",
    "Taureau",
    "Gémeaux",
    "Cancer",
    "Lion",
    "Vierge",
    "Balance",
    "Scorpion",
    "Sagittaire",
    "Capricorne",
    "Verseau",
    "Poissons",
  ];

  const normalized =
    normalizeLongitude(longitude);

  return (
    signs[Math.floor(normalized / 30)] ??
    "Non précisé"
  );
}
