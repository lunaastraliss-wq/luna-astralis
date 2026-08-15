import PdfHoroscopeYearViewer
  from "./PdfHoroscopeYearViewer";

import {
  buildYearlyHoroscope as buildYearlyHoroscopeFr,
} from "@/paid-pdf-generated/fr/HoroscopePdf/buildYearlyHoroscope";

import {
  buildYearlyHoroscope as buildYearlyHoroscopeEn,
} from "@/paid-pdf-generated/en/HoroscopePdf/buildYearlyHoroscope";

import {
  buildYearlyHoroscope as buildYearlyHoroscopeEs,
} from "@/paid-pdf-generated/es/HoroscopePdf/buildYearlyHoroscope";

import {
  buildYearlyHoroscope as buildYearlyHoroscopeDe,
} from "@/paid-pdf-generated/de/HoroscopePdf/buildYearlyHoroscope";

import {
  buildYearlyHoroscope as buildYearlyHoroscopeIt,
} from "@/paid-pdf-generated/it/HoroscopePdf/buildYearlyHoroscope";

import {
  buildYearlyHoroscope as buildYearlyHoroscopePt,
} from "@/paid-pdf-generated/pt/HoroscopePdf/buildYearlyHoroscope";

type HoroscopeLocale =
  | "fr"
  | "en"
  | "es"
  | "de"
  | "it"
  | "pt";

const SUPPORTED_LOCALES:
  HoroscopeLocale[] = [
    "fr",
    "en",
    "es",
    "de",
    "it",
    "pt",
  ];

const HOROSCOPE_BUILDERS = {
  fr: buildYearlyHoroscopeFr,
  en: buildYearlyHoroscopeEn,
  es: buildYearlyHoroscopeEs,
  de: buildYearlyHoroscopeDe,
  it: buildYearlyHoroscopeIt,
  pt: buildYearlyHoroscopePt,
};

function normalizeLocale(
  value:
    | string
    | string[]
    | undefined,
): HoroscopeLocale {
  const raw =
    Array.isArray(value)
      ? value[0]
      : value;

  if (
    raw &&
    SUPPORTED_LOCALES.includes(
      raw as HoroscopeLocale,
    )
  ) {
    return raw as HoroscopeLocale;
  }

  return "fr";
}

type PdfHoroscopeYearDevPageProps = {
  searchParams: Promise<{
    locale?:
      | string
      | string[];
  }>;
};

export default async function PdfHoroscopeYearDevPage({
  searchParams,
}: PdfHoroscopeYearDevPageProps) {
  const resolvedSearchParams =
    await searchParams;

  const locale =
    normalizeLocale(
      resolvedSearchParams.locale,
    );

  const buildYearlyHoroscope =
    HOROSCOPE_BUILDERS[
      locale
    ];

  const horoscope =
    buildYearlyHoroscope({
      firstName:
        "Martine",

      zodiacSign:
        "scorpion",

      year:
        2027,

      birthDate:
        "17/11/1970",

      birthTime:
        "21:36",

      birthCity:
        "Québec",

      birthCountry:
        "Canada",
    });

  return (
    <PdfHoroscopeYearViewer
      horoscope={horoscope}
      locale={locale}
    />
  );
}
