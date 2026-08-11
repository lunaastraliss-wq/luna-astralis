import type {
  PdfLocale,
} from "../EssentialPdf/EssentialPdfTypes";

import {
  SUN,
} from "@/lib/astrology";

/*
|--------------------------------------------------------------------------
| Soleil — dictionnaires existants
|--------------------------------------------------------------------------
*/

import sunFr from "../../i18n/migrated/fr/lib/astrology/sun.json";
import sunEn from "../../i18n/migrated/en/lib/astrology/sun.json";
import sunEs from "../../i18n/migrated/es/lib/astrology/sun.json";
import sunDe from "../../i18n/migrated/de/lib/astrology/sun.json";
import sunIt from "../../i18n/migrated/it/lib/astrology/sun.json";
import sunPt from "../../i18n/migrated/pt/lib/astrology/sun.json";

type Dictionary =
  Record<string, string>;

const SUN_DICTIONARIES: Record<
  PdfLocale,
  Dictionary
> = {
  fr: sunFr,
  en: sunEn,
  es: sunEs,
  de: sunDe,
  it: sunIt,
  pt: sunPt,
};

/*
|--------------------------------------------------------------------------
| Recherche de la clé i18n
|--------------------------------------------------------------------------
|
| SUN[sign] contient actuellement le texte français.
|
| On retrouve automatiquement quelle clé du JSON français possède
| cette valeur, puis on utilise exactement cette même clé dans le
| JSON de la langue demandée.
|
*/

function findTranslationKey(
  frenchDictionary: Dictionary,
  frenchText: string
): string | null {
  const entry =
    Object.entries(
      frenchDictionary
    ).find(
      ([, value]) =>
        value === frenchText
    );

  return entry?.[0] ?? null;
}

/*
|--------------------------------------------------------------------------
| Soleil localisé
|--------------------------------------------------------------------------
*/

export function getLocalizedSunInterpretation(
  signName: string,
  locale: PdfLocale = "fr"
): string {
  const frenchText =
    SUN[signName];

  if (!frenchText) {
    return "";
  }

  if (locale === "fr") {
    return frenchText;
  }

  const key =
    findTranslationKey(
      sunFr,
      frenchText
    );

  if (!key) {
    return frenchText;
  }

  return (
    SUN_DICTIONARIES[
      locale
    ]?.[key] ||
    frenchText
  );
}
