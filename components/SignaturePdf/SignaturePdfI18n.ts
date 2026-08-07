import type {
  SignatureLocale,
} from "./SignaturePdfTypes";

import frCover from "../../i18n/migrated/fr/components/signaturepdf/pdfsignaturecover.json";
import enCover from "../../i18n/migrated/en/components/signaturepdf/pdfsignaturecover.json";
import esCover from "../../i18n/migrated/es/components/signaturepdf/pdfsignaturecover.json";
import deCover from "../../i18n/migrated/de/components/signaturepdf/pdfsignaturecover.json";
import itCover from "../../i18n/migrated/it/components/signaturepdf/pdfsignaturecover.json";
import ptCover from "../../i18n/migrated/pt/components/signaturepdf/pdfsignaturecover.json";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

export type SignaturePdfDictionary =
  Record<string, string>;

type SignatureDictionaryGroup = Record<
  SignatureLocale,
  SignaturePdfDictionary
>;

/*
|--------------------------------------------------------------------------
| Langues supportées
|--------------------------------------------------------------------------
*/

export const SIGNATURE_PDF_LOCALES:
  SignatureLocale[] = [
    "fr",
    "en",
    "es",
    "de",
    "it",
    "pt",
  ];

/*
|--------------------------------------------------------------------------
| Validation de la langue
|--------------------------------------------------------------------------
*/

export function isSignaturePdfLocale(
  value: unknown,
): value is SignatureLocale {
  return (
    value === "fr" ||
    value === "en" ||
    value === "es" ||
    value === "de" ||
    value === "it" ||
    value === "pt"
  );
}

export function normalizeSignaturePdfLocale(
  value: unknown,
): SignatureLocale {
  return isSignaturePdfLocale(value)
    ? value
    : "fr";
}

/*
|--------------------------------------------------------------------------
| Couverture Signature
|--------------------------------------------------------------------------
*/

const SIGNATURE_COVER_DICTIONARIES:
  SignatureDictionaryGroup = {
    fr: frCover,
    en: enCover,
    es: esCover,
    de: deCover,
    it: itCover,
    pt: ptCover,
  };

export function getSignatureCoverDictionary(
  locale: SignatureLocale = "fr",
): SignaturePdfDictionary {
  return (
    SIGNATURE_COVER_DICTIONARIES[
      normalizeSignaturePdfLocale(locale)
    ] ||
    SIGNATURE_COVER_DICTIONARIES.fr
  );
}

/*
|--------------------------------------------------------------------------
| Lecture sécurisée
|--------------------------------------------------------------------------
|
| Permet de conserver le français comme secours si jamais une traduction
| manque accidentellement dans une autre langue.
|
*/

export function signatureText(
  dictionary: SignaturePdfDictionary,
  key: string,
  fallback = "",
): string {
  const translated =
    dictionary[key];

  if (
    typeof translated === "string" &&
    translated.trim()
  ) {
    return translated;
  }

  const french =
    SIGNATURE_COVER_DICTIONARIES.fr[
      key
    ];

  if (
    typeof french === "string" &&
    french.trim()
  ) {
    return french;
  }

  return fallback;
}
