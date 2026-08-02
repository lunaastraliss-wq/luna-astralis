import type { Locale } from "@/i18n/config";
import {
  ELEMENT_TRANSLATIONS,
  type ElementKey,
} from "@/i18n/lib/astrology/elements";

export const SIGN_ELEMENT: Record<string, ElementKey> = {
  Aries: "Feu",
  Leo: "Feu",
  Sagittarius: "Feu",

  Taurus: "Terre",
  Virgo: "Terre",
  Capricorn: "Terre",

  Gemini: "Air",
  Libra: "Air",
  Aquarius: "Air",

  Cancer: "Eau",
  Scorpio: "Eau",
  Pisces: "Eau",
};

/*
|--------------------------------------------------------------------------
| Compatibilité avec le code existant
|--------------------------------------------------------------------------
*/

export const ELEMENT_TEXT: Record<ElementKey, string> =
  ELEMENT_TRANSLATIONS.fr.texts;

/*
|--------------------------------------------------------------------------
| Accès multilingue
|--------------------------------------------------------------------------
*/

export function getElementLabel(
  element: ElementKey,
  locale: Locale = "fr",
): string {
  return ELEMENT_TRANSLATIONS[locale].labels[element];
}

export function getElementText(
  element: ElementKey,
  locale: Locale = "fr",
): string {
  return ELEMENT_TRANSLATIONS[locale].texts[element];
}
