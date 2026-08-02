import type { Locale } from "@/i18n/config";
import {
  MODALITY_TRANSLATIONS,
  type ModalityKey,
} from "@/i18n/lib/astrology/modalities";

export const SIGN_MODALITY: Record<string, ModalityKey> = {
  Aries: "Cardinal",
  Cancer: "Cardinal",
  Libra: "Cardinal",
  Capricorn: "Cardinal",

  Taurus: "Fixe",
  Leo: "Fixe",
  Scorpio: "Fixe",
  Aquarius: "Fixe",

  Gemini: "Mutable",
  Virgo: "Mutable",
  Sagittarius: "Mutable",
  Pisces: "Mutable",
};

/*
|--------------------------------------------------------------------------
| Compatibilité avec le code existant
|--------------------------------------------------------------------------
*/

export const MODALITY_TEXT: Record<ModalityKey, string> =
  MODALITY_TRANSLATIONS.fr.texts;

/*
|--------------------------------------------------------------------------
| Accès multilingue
|--------------------------------------------------------------------------
*/

export function getModalityLabel(
  modality: ModalityKey,
  locale: Locale = "fr",
): string {
  return MODALITY_TRANSLATIONS[locale].labels[modality];
}

export function getModalityText(
  modality: ModalityKey,
  locale: Locale = "fr",
): string {
  return MODALITY_TRANSLATIONS[locale].texts[modality];
}
