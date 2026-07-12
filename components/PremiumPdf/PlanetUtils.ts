import type { PremiumPlanet } from "./PremiumPdfTypes";

import {
  SIGN_KEYS,
  SIGN_NAMES_FR,
  SIGNS_FROM_LONGITUDE,
} from "./PlanetConstants";

export function normalizePlanetName(
  value: unknown
): string {
  return typeof value === "string"
    ? value.trim().toLowerCase()
    : "";
}

export function getPlanetData(
  planets: PremiumPlanet[],
  planetName: string
): PremiumPlanet | null {
  const normalizedName =
    normalizePlanetName(
      planetName
    );

  return (
    planets.find((item) => {
      return (
        normalizePlanetName(
          item?.name
        ) === normalizedName;
      );
    }) || null
  );
}

export function getPlanetSign(
  planetData: PremiumPlanet | null
): string {
  if (!planetData) {
    return "";
  }

  if (
    typeof planetData.sign === "string" &&
    planetData.sign.trim().length > 0
  ) {
    return planetData.sign.trim();
  }

  if (
    typeof planetData.longitude !== "number" ||
    !Number.isFinite(
      planetData.longitude
    )
  ) {
    return "";
  }

  const longitude =
    ((planetData.longitude % 360) +
      360) %
    360;

  return (
    SIGNS_FROM_LONGITUDE[
      Math.floor(
        longitude / 30
      )
    ] || ""
  );
}

export function translateSign(
  sign: string
): string {
  return (
    SIGN_NAMES_FR[sign] ||
    sign ||
    "Signe non précisé"
  );
}

export function getEnglishSignKey(
  sign: string
): string {
  return (
    SIGN_KEYS[sign] ||
    sign
  );
}

export function getPlanetDegree(
  planetData: PremiumPlanet | null
): string {
  if (!planetData) {
    return "";
  }

  if (
    typeof planetData.degree === "number" &&
    Number.isFinite(
      planetData.degree
    )
  ) {
    return `${planetData.degree.toFixed(
      1
    )}°`;
  }

  if (
    typeof planetData.longitude !== "number" ||
    !Number.isFinite(
      planetData.longitude
    )
  ) {
    return "";
  }

  const longitude =
    ((planetData.longitude % 360) +
      360) %
    360;

  return `${(
    longitude % 30
  ).toFixed(1)}°`;
}

export function getPlanetHouse(
  planetData: PremiumPlanet | null
): number | null {
  if (
    typeof planetData?.house !== "number" ||
    !Number.isFinite(
      planetData.house
    )
  ) {
    return null;
  }

  const house =
    Math.trunc(
      planetData.house
    );

  if (
    house < 1 ||
    house > 12
  ) {
    return null;
  }

  return house;
}

export function getPositionLine(
  sign: string,
  degree: string,
  house: string,
  retrograde: boolean
): string {
  const values = [
    sign,
    degree,
    house,
  ].filter(Boolean);

  if (retrograde) {
    values.push(
      "Rétrograde"
    );
  }

  return values.join(
    " • "
  );
}

export function getSafeItems(
  values: string[],
  max = 4
): string[] {
  if (!Array.isArray(values)) {
    return [];
  }

  return values
    .filter(
      (value) =>
        typeof value ===
          "string" &&
        value.trim().length > 0
    )
    .map((value) =>
      value.trim()
    )
    .slice(0, max);
}
