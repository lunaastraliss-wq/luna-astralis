import PdfHoroscopeViewer from "./PdfHoroscopeViewer";

import {
  buildPremiumDailyHoroscope as buildPremiumDailyHoroscopeFr,
} from "@/paid-pdf-generated/fr/HoroscopePdf/buildPremiumDailyHoroscope";

import {
  buildPremiumDailyHoroscope as buildPremiumDailyHoroscopeEn,
} from "@/paid-pdf-generated/en/HoroscopePdf/buildPremiumDailyHoroscope";

import {
  buildPremiumDailyHoroscope as buildPremiumDailyHoroscopeEs,
} from "@/paid-pdf-generated/es/HoroscopePdf/buildPremiumDailyHoroscope";

import {
  buildPremiumDailyHoroscope as buildPremiumDailyHoroscopeDe,
} from "@/paid-pdf-generated/de/HoroscopePdf/buildPremiumDailyHoroscope";

import {
  buildPremiumDailyHoroscope as buildPremiumDailyHoroscopeIt,
} from "@/paid-pdf-generated/it/HoroscopePdf/buildPremiumDailyHoroscope";

import {
  buildPremiumDailyHoroscope as buildPremiumDailyHoroscopePt,
} from "@/paid-pdf-generated/pt/HoroscopePdf/buildPremiumDailyHoroscope";

import {
  calculateNatalChart,
} from "@/lib/astrology/calculateNatalChart";

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
  fr: buildPremiumDailyHoroscopeFr,
  en: buildPremiumDailyHoroscopeEn,
  es: buildPremiumDailyHoroscopeEs,
  de: buildPremiumDailyHoroscopeDe,
  it: buildPremiumDailyHoroscopeIt,
  pt: buildPremiumDailyHoroscopePt,
};

const ZODIAC_SIGN_LABELS:
  Record<
    HoroscopeLocale,
    string
  > = {
    fr: "Scorpion",
    en: "Scorpio",
    es: "Escorpio",
    de: "Skorpion",
    it: "Scorpione",
    pt: "Escorpião",
  };

const LATITUDE =
  46.8139;

const LONGITUDE =
  -71.208;

const TIME_ZONE =
  "America/Toronto";

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

type PdfHoroscopeDevPageProps = {
  searchParams: Promise<{
    locale?:
      | string
      | string[];
  }>;
};

export default async function PdfHoroscopeDevPage({
  searchParams,
}: PdfHoroscopeDevPageProps) {
  const resolvedSearchParams =
    await searchParams;

  const locale =
    normalizeLocale(
      resolvedSearchParams.locale,
    );

  const buildPremiumDailyHoroscope =
    HOROSCOPE_BUILDERS[
      locale
    ];

  const natalChart =
    calculateNatalChart({
      birthDate:
        "17/11/1970",

      birthTime:
        "21:36",

      latitude:
        LATITUDE,

      longitude:
        LONGITUDE,

      timeZone:
        TIME_ZONE,
    });

  const horoscope =
    buildPremiumDailyHoroscope({
      firstName:
        "Martine",

      zodiacSign:
        "scorpion",

      zodiacSignLabel:
        ZODIAC_SIGN_LABELS[
          locale
        ],

      date:
        "2026-07-21",

      birthDate:
        "17/11/1970",

      birthTime:
        "21:36",

      birthCity:
        "Québec",

      birthCountry:
        "Canada",

      latitude:
        natalChart.latitude,

      longitude:
        natalChart.longitude,

      timeZone:
        natalChart.timeZone,

      natalPlanets:
        natalChart.planets,
    });

  return (
    <PdfHoroscopeViewer
      horoscope={
        horoscope
      }
      locale={
        locale
      }
    />
  );
}
