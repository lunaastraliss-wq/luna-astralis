import type {
  PremiumPlanetHouseContent,
  PremiumPlanetHouseTexts,
} from "./PremiumPlanetHouses/PremiumPlanetHouseTypes";

import {
  PREMIUM_PLANET_HOUSE_1_TEXTS,
} from "./PremiumPlanetHouses/PremiumPlanetHouse1";

import {
  PREMIUM_PLANET_HOUSE_2_TEXTS,
} from "./PremiumPlanetHouses/PremiumPlanetHouse2";

import {
  PREMIUM_PLANET_HOUSE_3_TEXTS,
} from "./PremiumPlanetHouses/PremiumPlanetHouse3";

import {
  PREMIUM_PLANET_HOUSE_4_TEXTS,
} from "./PremiumPlanetHouses/PremiumPlanetHouse4";

import {
  PREMIUM_PLANET_HOUSE_5_TEXTS,
} from "./PremiumPlanetHouses/PremiumPlanetHouse5";

import {
  PREMIUM_PLANET_HOUSE_6_TEXTS,
} from "./PremiumPlanetHouses/PremiumPlanetHouse6";

import {
  PREMIUM_PLANET_HOUSE_7_TEXTS,
} from "./PremiumPlanetHouses/PremiumPlanetHouse7";

import {
  PREMIUM_PLANET_HOUSE_8_TEXTS,
} from "./PremiumPlanetHouses/PremiumPlanetHouse8";

import {
  PREMIUM_PLANET_HOUSE_9_TEXTS,
} from "./PremiumPlanetHouses/PremiumPlanetHouse9";

import {
  PREMIUM_PLANET_HOUSE_10_TEXTS,
} from "./PremiumPlanetHouses/PremiumPlanetHouse10";

import {
  PREMIUM_PLANET_HOUSE_11_TEXTS,
} from "./PremiumPlanetHouses/PremiumPlanetHouse11";

import {
  PREMIUM_PLANET_HOUSE_12_TEXTS,
} from "./PremiumPlanetHouses/PremiumPlanetHouse12";

export const PREMIUM_PLANET_HOUSE_TEXTS: PremiumPlanetHouseTexts = {
  1: PREMIUM_PLANET_HOUSE_1_TEXTS,
  2: PREMIUM_PLANET_HOUSE_2_TEXTS,
  3: PREMIUM_PLANET_HOUSE_3_TEXTS,
  4: PREMIUM_PLANET_HOUSE_4_TEXTS,
  5: PREMIUM_PLANET_HOUSE_5_TEXTS,
  6: PREMIUM_PLANET_HOUSE_6_TEXTS,
  7: PREMIUM_PLANET_HOUSE_7_TEXTS,
  8: PREMIUM_PLANET_HOUSE_8_TEXTS,
  9: PREMIUM_PLANET_HOUSE_9_TEXTS,
  10: PREMIUM_PLANET_HOUSE_10_TEXTS,
  11: PREMIUM_PLANET_HOUSE_11_TEXTS,
  12: PREMIUM_PLANET_HOUSE_12_TEXTS,
};

export function getPremiumPlanetHouseContent(
  planet: string,
  house: number | null | undefined
): PremiumPlanetHouseContent | null {
  if (
    typeof house !== "number" ||
    !Number.isFinite(house)
  ) {
    return null;
  }

  const normalizedHouse = Math.trunc(house);

  if (
    normalizedHouse < 1 ||
    normalizedHouse > 12
  ) {
    return null;
  }

  const houseContent =
    PREMIUM_PLANET_HOUSE_TEXTS[normalizedHouse];

  if (!houseContent) {
    return null;
  }

  return houseContent[planet] || null;
}

export function getHouseRomanNumeral(
  house: number | null | undefined
): string {
  const romanNumerals: Record<number, string> = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    11: "XI",
    12: "XII",
  };

  if (
    typeof house !== "number" ||
    !Number.isFinite(house)
  ) {
    return "";
  }

  return romanNumerals[Math.trunc(house)] || "";
}

export function getHouseDisplayName(
  house: number | null | undefined
): string {
  const romanNumeral = getHouseRomanNumeral(house);

  return romanNumeral
    ? `Maison ${romanNumeral}`
    : "Maison non précisée";
}
