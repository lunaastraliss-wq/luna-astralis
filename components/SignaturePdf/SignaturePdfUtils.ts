import type {
  SignaturePlanet,
} from "./SignaturePdfTypes";

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

export const PLANET_NAMES: Record<
  string,
  string
> = {
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

export const SIGN_NAMES_FR: Record<
  string,
  string
> = {
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

export const SIGN_KEYS: Record<
  string,
  string
> = {
  Aries: "Aries",
  Taurus: "Taurus",
  Gemini: "Gemini",
  Cancer: "Cancer",
  Leo: "Leo",
  Virgo: "Virgo",
  Libra: "Libra",
  Scorpio: "Scorpio",
  Sagittarius: "Sagittarius",
  Capricorn: "Capricorn",
  Aquarius: "Aquarius",
  Pisces: "Pisces",

  Bélier: "Aries",
  Taureau: "Taurus",
  Gémeaux: "Gemini",
  Lion: "Leo",
  Vierge: "Virgo",
  Balance: "Libra",
  Scorpion: "Scorpio",
  Sagittaire: "Sagittarius",
  Capricorne: "Capricorn",
  Verseau: "Aquarius",
  Poissons: "Pisces",
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

type SignaturePlanetWithPosition =
  SignaturePlanet & {
    degree?: number | null;
    longitude?: number | null;
    house?: number | null;
    retrograde?: boolean;
  };

export function getPlanet(
  planets: SignaturePlanet[],
  name: string
): SignaturePlanet | null {
  const normalizedName =
    name.trim().toLowerCase();

  return (
    planets.find((planet) => {
      if (
        typeof planet?.name !==
        "string"
      ) {
        return false;
      }

      return (
        planet.name
          .trim()
          .toLowerCase() ===
        normalizedName
      );
    }) || null
  );
}

export function getPlanetData(
  planets: SignaturePlanet[],
  name: string
): SignaturePlanet | null {
  return getPlanet(planets, name);
}

export function getPlanetSignName(
  planet:
    | SignaturePlanet
    | null
    | undefined
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

  const positionedPlanet =
    planet as SignaturePlanetWithPosition;

  if (
    typeof positionedPlanet.longitude ===
      "number" &&
    Number.isFinite(
      positionedPlanet.longitude
    )
  ) {
    const normalizedLongitude =
      ((positionedPlanet.longitude %
        360) +
        360) %
      360;

    const signIndex = Math.floor(
      normalizedLongitude / 30
    );

    return (
      SIGNS_FROM_LONGITUDE[
        signIndex
      ] || ""
    );
  }

  return "";
}

export function getPlanetSign(
  planet:
    | SignaturePlanet
    | null
    | undefined
): string {
  return getPlanetSignName(planet);
}

export function getEnglishSignKey(
  value: unknown
): string {
  if (
    typeof value !== "string" ||
    value.trim().length === 0
  ) {
    return "";
  }

  const cleanValue = value.trim();

  return (
    SIGN_KEYS[cleanValue] ||
    cleanValue
  );
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

export function getPlanetDegree(
  planet:
    | SignaturePlanet
    | null
    | undefined
): number | null {
  if (!planet) {
    return null;
  }

  const positionedPlanet =
    planet as SignaturePlanetWithPosition;

  if (
    typeof positionedPlanet.degree ===
      "number" &&
    Number.isFinite(
      positionedPlanet.degree
    )
  ) {
    return positionedPlanet.degree;
  }

  if (
    typeof positionedPlanet.longitude ===
      "number" &&
    Number.isFinite(
      positionedPlanet.longitude
    )
  ) {
    const normalizedLongitude =
      ((positionedPlanet.longitude %
        360) +
        360) %
      360;

    return normalizedLongitude % 30;
  }

  return null;
}

export function getPlanetHouse(
  planet:
    | SignaturePlanet
    | null
    | undefined
): number | null {
  if (!planet) {
    return null;
  }

  const positionedPlanet =
    planet as SignaturePlanetWithPosition;

  if (
    typeof positionedPlanet.house !==
      "number" ||
    !Number.isFinite(
      positionedPlanet.house
    )
  ) {
    return null;
  }

  const normalizedHouse = Math.trunc(
    positionedPlanet.house
  );

  if (
    normalizedHouse < 1 ||
    normalizedHouse > 12
  ) {
    return null;
  }

  return normalizedHouse;
}

export function getPositionLine(
  translatedSign: string,
  degree: number | null,
  houseName: string,
  retrograde: boolean
): string {
  const safeSign =
    translatedSign.trim() ||
    "Signe non précisé";

  const degreeText =
    typeof degree === "number" &&
    Number.isFinite(degree)
      ? `${degree.toFixed(1)}°`
      : "";

  const safeHouse =
    houseName.trim();

  return [
    safeSign,
    degreeText,
    safeHouse,
    retrograde
      ? "Rétrograde"
      : "",
  ]
    .filter(Boolean)
    .join(" • ");
}

export function getSafeItems(
  value: unknown
): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(
      (item): item is string =>
        typeof item === "string"
    )
    .map((item) => item.trim())
    .filter(
      (item) => item.length > 0
    );
}

export function normalizePlanet(
  planet: SignaturePlanet
): SignaturePlanet {
  const sign =
    getPlanetSignName(planet);

  return {
    ...planet,
    sign,
  };
}

export function normalizePlanets(
  planets: unknown
): SignaturePlanet[] {
  if (!Array.isArray(planets)) {
    return [];
  }

  return planets
    .filter(
      (
        planet
      ): planet is SignaturePlanet =>
        Boolean(
          planet &&
            typeof planet ===
              "object"
        )
    )
    .map(normalizePlanet);
}

export function formatDegree(
  value?: number | null
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
