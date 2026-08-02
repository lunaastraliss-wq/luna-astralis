// lib/compatibility.ts

import type { Locale } from "@/i18n/config";
import { COMPATIBILITY_TRANSLATIONS } from "@/i18n/lib/compatibility";

export type SignKey =
  | "belier"
  | "taureau"
  | "gemeaux"
  | "cancer"
  | "lion"
  | "vierge"
  | "balance"
  | "scorpion"
  | "sagittaire"
  | "capricorne"
  | "verseau"
  | "poissons";

export type ElementKey =
  | "feu"
  | "terre"
  | "air"
  | "eau";

export type SignDefinition = {
  key: SignKey;
  label: string;
  symbol: string;
  element: ElementKey;
};

const SIGN_DEFINITIONS: Omit<SignDefinition, "label">[] = [
  { key: "belier", symbol: "♈", element: "feu" },
  { key: "taureau", symbol: "♉", element: "terre" },
  { key: "gemeaux", symbol: "♊", element: "air" },
  { key: "cancer", symbol: "♋", element: "eau" },
  { key: "lion", symbol: "♌", element: "feu" },
  { key: "vierge", symbol: "♍", element: "terre" },
  { key: "balance", symbol: "♎", element: "air" },
  { key: "scorpion", symbol: "♏", element: "eau" },
  { key: "sagittaire", symbol: "♐", element: "feu" },
  { key: "capricorne", symbol: "♑", element: "terre" },
  { key: "verseau", symbol: "♒", element: "air" },
  { key: "poissons", symbol: "♓", element: "eau" },
];

export function getSigns(
  locale: Locale = "fr",
): SignDefinition[] {
  const t = COMPATIBILITY_TRANSLATIONS[locale];

  return SIGN_DEFINITIONS.map((sign) => ({
    ...sign,
    label: t.signs[sign.key],
  }));
}

/*
|--------------------------------------------------------------------------
| Compatibilité avec le code français existant
|--------------------------------------------------------------------------
*/

export const SIGNS: SignDefinition[] = getSigns("fr");

function getSign(
  key: SignKey,
  locale: Locale,
): SignDefinition {
  const sign = getSigns(locale).find(
    (item) => item.key === key,
  );

  if (!sign) {
    throw new Error(`Unknown zodiac sign: ${key}`);
  }

  return sign;
}

const ELEMENT_SCORES: Record<string, number> = {
  "feu-feu": 82,
  "feu-terre": 58,
  "feu-air": 90,
  "feu-eau": 55,
  "terre-terre": 78,
  "terre-air": 52,
  "terre-eau": 88,
  "air-air": 80,
  "air-eau": 60,
  "eau-eau": 85,
};

function elementScore(
  elementA: ElementKey,
  elementB: ElementKey,
): number {
  const key1 = `${elementA}-${elementB}`;
  const key2 = `${elementB}-${elementA}`;

  return (
    ELEMENT_SCORES[key1] ??
    ELEMENT_SCORES[key2] ??
    65
  );
}

export function getCompatibility(
  signA: SignKey,
  signB: SignKey,
  locale: Locale = "fr",
) {
  const a = getSign(signA, locale);
  const b = getSign(signB, locale);
  const score = elementScore(a.element, b.element);
  const key1 = `${a.element}-${b.element}`;
  const key2 = `${b.element}-${a.element}`;
  const t = COMPATIBILITY_TRANSLATIONS[locale];

  const text =
    t.combinations[key1] ??
    t.combinations[key2] ??
    t.fallback;

  return {
    signA: a,
    signB: b,
    score,
    text,
  };
}
