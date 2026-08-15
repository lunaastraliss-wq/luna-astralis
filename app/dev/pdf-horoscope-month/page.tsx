import PdfHoroscopeMonthViewer from "./PdfHoroscopeMonthViewer";

import {
  buildMonthlyHoroscope as buildMonthlyHoroscopeFr,
} from "@/paid-pdf-generated/fr/HoroscopePdf/buildMonthlyHoroscope";

import {
  buildMonthlyHoroscope as buildMonthlyHoroscopeEn,
} from "@/paid-pdf-generated/en/HoroscopePdf/buildMonthlyHoroscope";

import {
  buildMonthlyHoroscope as buildMonthlyHoroscopeEs,
} from "@/paid-pdf-generated/es/HoroscopePdf/buildMonthlyHoroscope";

import {
  buildMonthlyHoroscope as buildMonthlyHoroscopeDe,
} from "@/paid-pdf-generated/de/HoroscopePdf/buildMonthlyHoroscope";

import {
  buildMonthlyHoroscope as buildMonthlyHoroscopeIt,
} from "@/paid-pdf-generated/it/HoroscopePdf/buildMonthlyHoroscope";

import {
  buildMonthlyHoroscope as buildMonthlyHoroscopePt,
} from "@/paid-pdf-generated/pt/HoroscopePdf/buildMonthlyHoroscope";

type HoroscopeLocale =
  | "fr"
  | "en"
  | "es"
  | "de"
  | "it"
  | "pt";

const SUPPORTED_LOCALES: HoroscopeLocale[] = [
  "fr",
  "en",
  "es",
  "de",
  "it",
  "pt",
];

const HOROSCOPE_BUILDERS = {
  fr: buildMonthlyHoroscopeFr,
  en: buildMonthlyHoroscopeEn,
  es: buildMonthlyHoroscopeEs,
  de: buildMonthlyHoroscopeDe,
  it: buildMonthlyHoroscopeIt,
  pt: buildMonthlyHoroscopePt,
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

type PdfHoroscopeMonthDevPageProps = {
  searchParams: Promise<{
    locale?:
      | string
      | string[];
  }>;
};

export default async function PdfHoroscopeMonthDevPage({
  searchParams,
}: PdfHoroscopeMonthDevPageProps) {
  const resolvedSearchParams =
    await searchParams;

  const locale =
    normalizeLocale(
      resolvedSearchParams.locale,
    );

  const buildMonthlyHoroscope =
    HOROSCOPE_BUILDERS[
      locale
    ];

  const horoscope =
    buildMonthlyHoroscope({
      firstName:
        "Martine",

      zodiacSign:
        "scorpion",

      month:
        "2026-07",

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
    <PdfHoroscopeMonthViewer
      horoscope={horoscope}
      locale={locale}
    />
  );
}
