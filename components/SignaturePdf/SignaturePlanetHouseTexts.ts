import type {
  SignaturePlanetHouseContent,
  SignaturePlanetHouseTexts,
} from "./SignaturePlanetHouses/SignaturePlanetHouseTypes";

import {
  SIGNATURE_PLANET_HOUSE_1_TEXTS,
} from "./SignaturePlanetHouses/SignaturePlanetHouse1";

import {
  SIGNATURE_PLANET_HOUSE_2_TEXTS,
} from "./SignaturePlanetHouses/SignaturePlanetHouse2";

import {
  SIGNATURE_PLANET_HOUSE_3_TEXTS,
} from "./SignaturePlanetHouses/SignaturePlanetHouse3";

import {
  SIGNATURE_PLANET_HOUSE_4_TEXTS,
} from "./SignaturePlanetHouses/SignaturePlanetHouse4";

import {
  SIGNATURE_PLANET_HOUSE_5_TEXTS,
} from "./SignaturePlanetHouses/SignaturePlanetHouse5";

import {
  SIGNATURE_PLANET_HOUSE_6_TEXTS,
} from "./SignaturePlanetHouses/SignaturePlanetHouse6";

import {
  SIGNATURE_PLANET_HOUSE_7_TEXTS,
} from "./SignaturePlanetHouses/SignaturePlanetHouse7";

import {
  SIGNATURE_PLANET_HOUSE_8_TEXTS,
} from "./SignaturePlanetHouses/SignaturePlanetHouse8";

import {
  SIGNATURE_PLANET_HOUSE_9_TEXTS,
} from "./SignaturePlanetHouses/SignaturePlanetHouse9";

import {
  SIGNATURE_PLANET_HOUSE_10_TEXTS,
} from "./SignaturePlanetHouses/SignaturePlanetHouse10";

import {
  SIGNATURE_PLANET_HOUSE_11_TEXTS,
} from "./SignaturePlanetHouses/SignaturePlanetHouse11";

import {
  SIGNATURE_PLANET_HOUSE_12_TEXTS,
} from "./SignaturePlanetHouses/SignaturePlanetHouse12";

export const SIGNATURE_PLANET_HOUSE_TEXTS: SignaturePlanetHouseTexts = {
  1: SIGNATURE_PLANET_HOUSE_1_TEXTS,
  2: SIGNATURE_PLANET_HOUSE_2_TEXTS,
  3: SIGNATURE_PLANET_HOUSE_3_TEXTS,
  4: SIGNATURE_PLANET_HOUSE_4_TEXTS,
  5: SIGNATURE_PLANET_HOUSE_5_TEXTS,
  6: SIGNATURE_PLANET_HOUSE_6_TEXTS,
  7: SIGNATURE_PLANET_HOUSE_7_TEXTS,
  8: SIGNATURE_PLANET_HOUSE_8_TEXTS,
  9: SIGNATURE_PLANET_HOUSE_9_TEXTS,
  10: SIGNATURE_PLANET_HOUSE_10_TEXTS,
  11: SIGNATURE_PLANET_HOUSE_11_TEXTS,
  12: SIGNATURE_PLANET_HOUSE_12_TEXTS,
};

export function getSignaturePlanetHouseContent(
  planet: string,
  house: number | null | undefined
): SignaturePlanetHouseContent | null {
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
    SIGNATURE_PLANET_HOUSE_TEXTS[normalizedHouse];

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
  const romanNumeral =
    getHouseRomanNumeral(house);

  return romanNumeral
    ? `Maison ${romanNumeral}`
    : "Maison non précisée";
}
