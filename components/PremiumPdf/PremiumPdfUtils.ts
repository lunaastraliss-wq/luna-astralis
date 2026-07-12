import type { PremiumPlanet } from "./PremiumPdfTypes";

export const MAIN_PLANETS = [
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

export const PLANET_NAMES: Record<string, string> = {
  Sun: "Soleil",
  Moon: "Lune",
  Mercury: "Mercure",
  Venus: "Vénus",
  Mars: "Mars",
  Jupiter: "Jupiter",
  Saturn: "Saturne",
  Uranus: "Uranus",
  Neptune: "Neptune",
  Pluto: "Pluton",
};

export const SIGN_NAMES_FR: Record<string, string> = {
  Aries: "Bélier",
  Taurus: "Taureau",
  Gemini: "Gémeaux",
  Cancer: "Cancer",
  Leo: "Lion",
  Virgo: "Vierge",
  Libra: "Balance",
  Scorpio: "Scorpion",
  Sagittarius: "Sagittaire",
  Capricorn: "Capricorne",
  Aquarius: "Verseau",
  Pisces: "Poissons",

  Bélier: "Bélier",
  Taureau: "Taureau",
  Gémeaux: "Gémeaux",
  Lion: "Lion",
  Vierge: "Vierge",
  Balance: "Balance",
  Scorpion: "Scorpion",
  Sagittaire: "Sagittaire",
  Capricorne: "Capricorne",
  Verseau: "Verseau",
  Poissons: "Poissons",
};

const SIGNS_FROM_LONGITUDE = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
] as const;

export function getPlanet(
  planets: PremiumPlanet[],
  name: string
): PremiumPlanet | null {
  const normalizedName =
    name.trim().toLowerCase();

  return (
    planets.find((planet) => {
      if (typeof planet?.name !== "string") {
        return false;
      }

      return (
        planet.name.trim().toLowerCase() ===
        normalizedName
      );
    }) || null
  );
}

export function getPlanetSignName(
  planet: PremiumPlanet | null | undefined
): string {
  if (!planet) {
    return "";
  }

  if (
    typeof planet.sign === "string" &&
    planet.sign.trim().length > 0
  ) {
    return planet.sign.trim();
  }

  if (
    typeof planet.longitude === "number" &&
    Number.isFinite(planet.longitude)
  ) {
    const normalizedLongitude =
      ((planet.longitude % 360) + 360) % 360;

    const signIndex =
      Math.floor(normalizedLongitude / 30);

    return (
      SIGNS_FROM_LONGITUDE[signIndex] ||
      ""
    );
  }

  return "";
}

export function translateSign(
  value: unknown
): string {
  if (
    typeof value !== "string" ||
    value.trim().length === 0
  ) {
    return "Non précisé";
  }

  const cleanValue = value.trim();

  return (
    SIGN_NAMES_FR[cleanValue] ||
    cleanValue
  );
}

export function normalizePlanet(
  planet: PremiumPlanet
): PremiumPlanet {
  const sign =
    getPlanetSignName(planet);

  return {
    ...planet,
    sign,
  };
}

export function normalizePlanets(
  planets: unknown
): PremiumPlanet[] {
  if (!Array.isArray(planets)) {
    return [];
  }

  return planets
    .filter(
      (planet): planet is PremiumPlanet =>
        Boolean(
          planet &&
          typeof planet === "object"
        )
    )
    .map(normalizePlanet);
}

export function formatDegree(
  value?: number
): string {
  if (
    typeof value !== "number" ||
    !Number.isFinite(value)
  ) {
    return "--";
  }

  return `${value.toFixed(1)}°`;
}

export function displayValue(
  value?: string
): string {
  const clean =
    typeof value === "string"
      ? value.trim()
      : "";

  return clean || "Non précisé";
}
