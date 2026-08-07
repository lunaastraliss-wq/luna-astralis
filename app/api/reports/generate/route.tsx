import __i18n from "../../../../i18n/migrated/fr/app/api/reports/generate/route.json";
import React from "react";

import {
  NextResponse,
} from "next/server";

import {
  createClient,
} from "@supabase/supabase-js";

import {
  renderToBuffer,
} from "@react-pdf/renderer";

import {
  calculateChart,
} from "celestine";

import tzlookup from "tz-lookup";

/*
|--------------------------------------------------------------------------
| PDF payants localisés — générés automatiquement avant next build
|--------------------------------------------------------------------------
*/

import EssentialPdfDocumentFr
  from "@/paid-pdf-generated/fr/EssentialPdf/EssentialPdfDocument";

import PremiumPdfDocumentFr
  from "@/paid-pdf-generated/fr/PremiumPdf/PremiumPdfDocument";

import SignaturePdfDocumentFr
  from "@/paid-pdf-generated/fr/SignaturePdf/SignaturePdfDocument";

import CompatibilityPdfDocumentFr
  from "@/paid-pdf-generated/fr/CompatibilityPdf/CompatibilityPdfDocument";

import HoroscopePdfDocumentFr
  from "@/paid-pdf-generated/fr/HoroscopePdf/HoroscopePdf";

import HoroscopeMonthPdfFr
  from "@/paid-pdf-generated/fr/HoroscopePdf/HoroscopeMonthPdf";

import HoroscopeYearPdfFr
  from "@/paid-pdf-generated/fr/HoroscopePdf/HoroscopeYearPdf";

import {
  buildPremiumDailyHoroscope as buildPremiumDailyHoroscopeFr,
} from "@/paid-pdf-generated/fr/HoroscopePdf/buildPremiumDailyHoroscope";

import {
  buildMonthlyHoroscope as buildMonthlyHoroscopeFr,
} from "@/paid-pdf-generated/fr/HoroscopePdf/buildMonthlyHoroscope";

import {
  buildYearlyHoroscope as buildYearlyHoroscopeFr,
} from "@/paid-pdf-generated/fr/HoroscopePdf/buildYearlyHoroscope";

import EssentialPdfDocumentEn
  from "@/paid-pdf-generated/en/EssentialPdf/EssentialPdfDocument";

import PremiumPdfDocumentEn
  from "@/paid-pdf-generated/en/PremiumPdf/PremiumPdfDocument";

import SignaturePdfDocumentEn
  from "@/paid-pdf-generated/en/SignaturePdf/SignaturePdfDocument";

import CompatibilityPdfDocumentEn
  from "@/paid-pdf-generated/en/CompatibilityPdf/CompatibilityPdfDocument";

import HoroscopePdfDocumentEn
  from "@/paid-pdf-generated/en/HoroscopePdf/HoroscopePdf";

import HoroscopeMonthPdfEn
  from "@/paid-pdf-generated/en/HoroscopePdf/HoroscopeMonthPdf";

import HoroscopeYearPdfEn
  from "@/paid-pdf-generated/en/HoroscopePdf/HoroscopeYearPdf";

import {
  buildPremiumDailyHoroscope as buildPremiumDailyHoroscopeEn,
} from "@/paid-pdf-generated/en/HoroscopePdf/buildPremiumDailyHoroscope";

import {
  buildMonthlyHoroscope as buildMonthlyHoroscopeEn,
} from "@/paid-pdf-generated/en/HoroscopePdf/buildMonthlyHoroscope";

import {
  buildYearlyHoroscope as buildYearlyHoroscopeEn,
} from "@/paid-pdf-generated/en/HoroscopePdf/buildYearlyHoroscope";

import EssentialPdfDocumentEs
  from "@/paid-pdf-generated/es/EssentialPdf/EssentialPdfDocument";

import PremiumPdfDocumentEs
  from "@/paid-pdf-generated/es/PremiumPdf/PremiumPdfDocument";

import SignaturePdfDocumentEs
  from "@/paid-pdf-generated/es/SignaturePdf/SignaturePdfDocument";

import CompatibilityPdfDocumentEs
  from "@/paid-pdf-generated/es/CompatibilityPdf/CompatibilityPdfDocument";

import HoroscopePdfDocumentEs
  from "@/paid-pdf-generated/es/HoroscopePdf/HoroscopePdf";

import HoroscopeMonthPdfEs
  from "@/paid-pdf-generated/es/HoroscopePdf/HoroscopeMonthPdf";

import HoroscopeYearPdfEs
  from "@/paid-pdf-generated/es/HoroscopePdf/HoroscopeYearPdf";

import {
  buildPremiumDailyHoroscope as buildPremiumDailyHoroscopeEs,
} from "@/paid-pdf-generated/es/HoroscopePdf/buildPremiumDailyHoroscope";

import {
  buildMonthlyHoroscope as buildMonthlyHoroscopeEs,
} from "@/paid-pdf-generated/es/HoroscopePdf/buildMonthlyHoroscope";

import {
  buildYearlyHoroscope as buildYearlyHoroscopeEs,
} from "@/paid-pdf-generated/es/HoroscopePdf/buildYearlyHoroscope";

import EssentialPdfDocumentDe
  from "@/paid-pdf-generated/de/EssentialPdf/EssentialPdfDocument";

import PremiumPdfDocumentDe
  from "@/paid-pdf-generated/de/PremiumPdf/PremiumPdfDocument";

import SignaturePdfDocumentDe
  from "@/paid-pdf-generated/de/SignaturePdf/SignaturePdfDocument";

import CompatibilityPdfDocumentDe
  from "@/paid-pdf-generated/de/CompatibilityPdf/CompatibilityPdfDocument";

import HoroscopePdfDocumentDe
  from "@/paid-pdf-generated/de/HoroscopePdf/HoroscopePdf";

import HoroscopeMonthPdfDe
  from "@/paid-pdf-generated/de/HoroscopePdf/HoroscopeMonthPdf";

import HoroscopeYearPdfDe
  from "@/paid-pdf-generated/de/HoroscopePdf/HoroscopeYearPdf";

import {
  buildPremiumDailyHoroscope as buildPremiumDailyHoroscopeDe,
} from "@/paid-pdf-generated/de/HoroscopePdf/buildPremiumDailyHoroscope";

import {
  buildMonthlyHoroscope as buildMonthlyHoroscopeDe,
} from "@/paid-pdf-generated/de/HoroscopePdf/buildMonthlyHoroscope";

import {
  buildYearlyHoroscope as buildYearlyHoroscopeDe,
} from "@/paid-pdf-generated/de/HoroscopePdf/buildYearlyHoroscope";

import EssentialPdfDocumentIt
  from "@/paid-pdf-generated/it/EssentialPdf/EssentialPdfDocument";

import PremiumPdfDocumentIt
  from "@/paid-pdf-generated/it/PremiumPdf/PremiumPdfDocument";

import SignaturePdfDocumentIt
  from "@/paid-pdf-generated/it/SignaturePdf/SignaturePdfDocument";

import CompatibilityPdfDocumentIt
  from "@/paid-pdf-generated/it/CompatibilityPdf/CompatibilityPdfDocument";

import HoroscopePdfDocumentIt
  from "@/paid-pdf-generated/it/HoroscopePdf/HoroscopePdf";

import HoroscopeMonthPdfIt
  from "@/paid-pdf-generated/it/HoroscopePdf/HoroscopeMonthPdf";

import HoroscopeYearPdfIt
  from "@/paid-pdf-generated/it/HoroscopePdf/HoroscopeYearPdf";

import {
  buildPremiumDailyHoroscope as buildPremiumDailyHoroscopeIt,
} from "@/paid-pdf-generated/it/HoroscopePdf/buildPremiumDailyHoroscope";

import {
  buildMonthlyHoroscope as buildMonthlyHoroscopeIt,
} from "@/paid-pdf-generated/it/HoroscopePdf/buildMonthlyHoroscope";

import {
  buildYearlyHoroscope as buildYearlyHoroscopeIt,
} from "@/paid-pdf-generated/it/HoroscopePdf/buildYearlyHoroscope";

import EssentialPdfDocumentPt
  from "@/paid-pdf-generated/pt/EssentialPdf/EssentialPdfDocument";

import PremiumPdfDocumentPt
  from "@/paid-pdf-generated/pt/PremiumPdf/PremiumPdfDocument";

import SignaturePdfDocumentPt
  from "@/paid-pdf-generated/pt/SignaturePdf/SignaturePdfDocument";

import CompatibilityPdfDocumentPt
  from "@/paid-pdf-generated/pt/CompatibilityPdf/CompatibilityPdfDocument";

import HoroscopePdfDocumentPt
  from "@/paid-pdf-generated/pt/HoroscopePdf/HoroscopePdf";

import HoroscopeMonthPdfPt
  from "@/paid-pdf-generated/pt/HoroscopePdf/HoroscopeMonthPdf";

import HoroscopeYearPdfPt
  from "@/paid-pdf-generated/pt/HoroscopePdf/HoroscopeYearPdf";

import {
  buildPremiumDailyHoroscope as buildPremiumDailyHoroscopePt,
} from "@/paid-pdf-generated/pt/HoroscopePdf/buildPremiumDailyHoroscope";

import {
  buildMonthlyHoroscope as buildMonthlyHoroscopePt,
} from "@/paid-pdf-generated/pt/HoroscopePdf/buildMonthlyHoroscope";

import {
  buildYearlyHoroscope as buildYearlyHoroscopePt,
} from "@/paid-pdf-generated/pt/HoroscopePdf/buildYearlyHoroscope";

/*
|--------------------------------------------------------------------------
| Ressources et types — horoscopes
|--------------------------------------------------------------------------
*/

import {
  HOROSCOPE_LOGO_URL,
} from "@/components/HoroscopePdf/HoroscopePdfAssets";

import type {
  HoroscopeZodiacSign,
} from "@/components/HoroscopePdf/HoroscopePdfTypes";

import {
  getHoroscopeZodiacFromLongitude,
} from "@/components/HoroscopePdf/HoroscopePdfUtils";

/*
|--------------------------------------------------------------------------
| Types — compatibilité
|--------------------------------------------------------------------------
*/

import type {
  CompatibilityPerson,
} from "@/components/CompatibilityPdf/CompatibilityPdfTypes";


/*
|--------------------------------------------------------------------------
| Langue du rapport
|--------------------------------------------------------------------------
*/

type ReportLocale =
  | "fr"
  | "en"
  | "es"
  | "de"
  | "it"
  | "pt";

const REPORT_LOCALES =
  new Set<ReportLocale>([
    "fr",
    "en",
    "es",
    "de",
    "it",
    "pt",
  ]);

function normalizeReportLocale(
  value: unknown,
): ReportLocale | null {
  const raw =
    value == null
      ? ""
      : String(value)
          .trim()
          .toLowerCase()
          .replace("_", "-");

  if (!raw) {
    return null;
  }

  const base =
    raw.split("-")[0];

  if (
    REPORT_LOCALES.has(
      base as ReportLocale,
    )
  ) {
    return base as ReportLocale;
  }

  return null;
}

function resolveReportLocale(
  order: any,
  birthData: any,
  body: any,
): ReportLocale {
  const candidates = [
    order?.locale,
    order?.language,
    order?.lang,
    order?.report_locale,
    order?.report_language,

    birthData?.locale,
    birthData?.language,
    birthData?.lang,
    birthData?.reportLocale,
    birthData?.report_locale,

    body?.locale,
    body?.language,
    body?.lang,
  ];

  for (
    const candidate of candidates
  ) {
    const locale =
      normalizeReportLocale(
        candidate,
      );

    if (locale) {
      return locale;
    }
  }

  return "fr";
}

type PdfComponent =
  React.ComponentType<any>;

type DailyBuilder =
  (options: any) => any;

type MonthlyBuilder =
  (options: any) => any;

type YearlyBuilder =
  (options: any) => any;

const ESSENTIAL_PDF_DOCUMENTS:
  Record<ReportLocale, PdfComponent> = {
    fr: EssentialPdfDocumentFr,
    en: EssentialPdfDocumentEn,
    es: EssentialPdfDocumentEs,
    de: EssentialPdfDocumentDe,
    it: EssentialPdfDocumentIt,
    pt: EssentialPdfDocumentPt,
  };

const PREMIUM_PDF_DOCUMENTS:
  Record<ReportLocale, PdfComponent> = {
    fr: PremiumPdfDocumentFr,
    en: PremiumPdfDocumentEn,
    es: PremiumPdfDocumentEs,
    de: PremiumPdfDocumentDe,
    it: PremiumPdfDocumentIt,
    pt: PremiumPdfDocumentPt,
  };

const SIGNATURE_PDF_DOCUMENTS:
  Record<ReportLocale, PdfComponent> = {
    fr: SignaturePdfDocumentFr,
    en: SignaturePdfDocumentEn,
    es: SignaturePdfDocumentEs,
    de: SignaturePdfDocumentDe,
    it: SignaturePdfDocumentIt,
    pt: SignaturePdfDocumentPt,
  };

const COMPATIBILITY_PDF_DOCUMENTS:
  Record<ReportLocale, PdfComponent> = {
    fr: CompatibilityPdfDocumentFr,
    en: CompatibilityPdfDocumentEn,
    es: CompatibilityPdfDocumentEs,
    de: CompatibilityPdfDocumentDe,
    it: CompatibilityPdfDocumentIt,
    pt: CompatibilityPdfDocumentPt,
  };

const DAILY_PDF_DOCUMENTS:
  Record<ReportLocale, PdfComponent> = {
    fr: HoroscopePdfDocumentFr,
    en: HoroscopePdfDocumentEn,
    es: HoroscopePdfDocumentEs,
    de: HoroscopePdfDocumentDe,
    it: HoroscopePdfDocumentIt,
    pt: HoroscopePdfDocumentPt,
  };

const MONTHLY_PDF_DOCUMENTS:
  Record<ReportLocale, PdfComponent> = {
    fr: HoroscopeMonthPdfFr,
    en: HoroscopeMonthPdfEn,
    es: HoroscopeMonthPdfEs,
    de: HoroscopeMonthPdfDe,
    it: HoroscopeMonthPdfIt,
    pt: HoroscopeMonthPdfPt,
  };

const YEARLY_PDF_DOCUMENTS:
  Record<ReportLocale, PdfComponent> = {
    fr: HoroscopeYearPdfFr,
    en: HoroscopeYearPdfEn,
    es: HoroscopeYearPdfEs,
    de: HoroscopeYearPdfDe,
    it: HoroscopeYearPdfIt,
    pt: HoroscopeYearPdfPt,
  };

const DAILY_BUILDERS:
  Record<ReportLocale, DailyBuilder> = {
    fr: buildPremiumDailyHoroscopeFr,
    en: buildPremiumDailyHoroscopeEn,
    es: buildPremiumDailyHoroscopeEs,
    de: buildPremiumDailyHoroscopeDe,
    it: buildPremiumDailyHoroscopeIt,
    pt: buildPremiumDailyHoroscopePt,
  };

const MONTHLY_BUILDERS:
  Record<ReportLocale, MonthlyBuilder> = {
    fr: buildMonthlyHoroscopeFr,
    en: buildMonthlyHoroscopeEn,
    es: buildMonthlyHoroscopeEs,
    de: buildMonthlyHoroscopeDe,
    it: buildMonthlyHoroscopeIt,
    pt: buildMonthlyHoroscopePt,
  };

const YEARLY_BUILDERS:
  Record<ReportLocale, YearlyBuilder> = {
    fr: buildYearlyHoroscopeFr,
    en: buildYearlyHoroscopeEn,
    es: buildYearlyHoroscopeEs,
    de: buildYearlyHoroscopeDe,
    it: buildYearlyHoroscopeIt,
    pt: buildYearlyHoroscopePt,
  };

const ZODIAC_LABELS:
  Record<
    ReportLocale,
    Record<
      HoroscopeZodiacSign,
      string
    >
  > = {
    fr: {
      belier: "Bélier",
      taureau: "Taureau",
      gemeaux: "Gémeaux",
      cancer: "Cancer",
      lion: "Lion",
      vierge: "Vierge",
      balance: "Balance",
      scorpion: "Scorpion",
      sagittaire: "Sagittaire",
      capricorne: "Capricorne",
      verseau: "Verseau",
      poissons: "Poissons",
    },
    en: {
      belier: "Aries",
      taureau: "Taurus",
      gemeaux: "Gemini",
      cancer: "Cancer",
      lion: "Leo",
      vierge: "Virgo",
      balance: "Libra",
      scorpion: "Scorpio",
      sagittaire: "Sagittarius",
      capricorne: "Capricorn",
      verseau: "Aquarius",
      poissons: "Pisces",
    },
    es: {
      belier: "Aries",
      taureau: "Tauro",
      gemeaux: "Géminis",
      cancer: "Cáncer",
      lion: "Leo",
      vierge: "Virgo",
      balance: "Libra",
      scorpion: "Escorpio",
      sagittaire: "Sagitario",
      capricorne: "Capricornio",
      verseau: "Acuario",
      poissons: "Piscis",
    },
    de: {
      belier: "Widder",
      taureau: "Stier",
      gemeaux: "Zwillinge",
      cancer: "Krebs",
      lion: "Löwe",
      vierge: "Jungfrau",
      balance: "Waage",
      scorpion: "Skorpion",
      sagittaire: "Schütze",
      capricorne: "Steinbock",
      verseau: "Wassermann",
      poissons: "Fische",
    },
    it: {
      belier: "Ariete",
      taureau: "Toro",
      gemeaux: "Gemelli",
      cancer: "Cancro",
      lion: "Leone",
      vierge: "Vergine",
      balance: "Bilancia",
      scorpion: "Scorpione",
      sagittaire: "Sagittario",
      capricorne: "Capricorno",
      verseau: "Acquario",
      poissons: "Pesci",
    },
    pt: {
      belier: "Áries",
      taureau: "Touro",
      gemeaux: "Gêmeos",
      cancer: "Câncer",
      lion: "Leão",
      vierge: "Virgem",
      balance: "Libra",
      scorpion: "Escorpião",
      sagittaire: "Sagitário",
      capricorne: "Capricórnio",
      verseau: "Aquário",
      poissons: "Peixes",
    },
  };

function getLocalizedZodiacLabel(
  sign: HoroscopeZodiacSign,
  locale: ReportLocale,
): string {
  return (
    ZODIAC_LABELS[locale][sign] ||
    ZODIAC_LABELS.fr[sign]
  );
}

/*
|--------------------------------------------------------------------------
| Configuration Next.js
|--------------------------------------------------------------------------
*/

export const runtime =
  "nodejs";

export const dynamic =
  "force-dynamic";

/*
|--------------------------------------------------------------------------
| Nettoyage des valeurs
|--------------------------------------------------------------------------
*/

function clean(
  value: unknown,
): string {
  return value == null
    ? ""
    : String(value).trim();
}

/*
|--------------------------------------------------------------------------
| Normalisation des signes astrologiques
|--------------------------------------------------------------------------
*/

type NormalizedZodiac = {
  key: HoroscopeZodiacSign;
  label: string;
};

const ZODIAC_SIGNS: Record<
  string,
  NormalizedZodiac
> = {
  aries: {
    key: "belier",
    label: __i18n["belier"],
  },

  belier: {
    key: "belier",
    label: __i18n["belier_2"],
  },

  taurus: {
    key: "taureau",
    label: "Taureau",
  },

  taureau: {
    key: "taureau",
    label: "Taureau",
  },

  gemini: {
    key: "gemeaux",
    label: __i18n["gemeaux"],
  },

  gemeaux: {
    key: "gemeaux",
    label: __i18n["gemeaux_2"],
  },

  cancer: {
    key: "cancer",
    label: "Cancer",
  },

  leo: {
    key: "lion",
    label: "Lion",
  },

  lion: {
    key: "lion",
    label: "Lion",
  },

  virgo: {
    key: "vierge",
    label: "Vierge",
  },

  vierge: {
    key: "vierge",
    label: "Vierge",
  },

  libra: {
    key: "balance",
    label: "Balance",
  },

  balance: {
    key: "balance",
    label: "Balance",
  },

  scorpio: {
    key: "scorpion",
    label: "Scorpion",
  },

  scorpion: {
    key: "scorpion",
    label: "Scorpion",
  },

  sagittarius: {
    key: "sagittaire",
    label: "Sagittaire",
  },

  sagittaire: {
    key: "sagittaire",
    label: "Sagittaire",
  },

  capricorn: {
    key: "capricorne",
    label: "Capricorne",
  },

  capricorne: {
    key: "capricorne",
    label: "Capricorne",
  },

  aquarius: {
    key: "verseau",
    label: "Verseau",
  },

  verseau: {
    key: "verseau",
    label: "Verseau",
  },

  pisces: {
    key: "poissons",
    label: "Poissons",
  },

  poissons: {
    key: "poissons",
    label: "Poissons",
  },
};

function normalizeLookupKey(
  value: unknown,
): string {
  return clean(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      "",
    )
    .replace(
      /[^a-z]/g,
      "",
    );
}

function resolveZodiacSign(
  planets: any[],
  birthData: any,
  order: any,
  locale: ReportLocale,
): NormalizedZodiac {
  const sunPlanet =
    Array.isArray(planets)
      ? planets.find(
          (
            planet: any,
          ) => {
            const planetName =
              normalizeLookupKey(
                planet?.name ||
                  planet?.planet ||
                  planet?.key ||
                  planet?.id,
              );

            return (
              planetName === "sun" ||
              planetName === "soleil"
            );
          },
        )
      : undefined;

  const candidates = [
    sunPlanet?.sign?.name,
    sunPlanet?.sign?.label,
    sunPlanet?.sign,

    sunPlanet?.zodiacSign?.name,
    sunPlanet?.zodiacSign?.label,
    sunPlanet?.zodiacSign,

    sunPlanet?.zodiac_sign?.name,
    sunPlanet?.zodiac_sign?.label,
    sunPlanet?.zodiac_sign,

    birthData?.zodiacSign?.name,
    birthData?.zodiacSign?.label,
    birthData?.zodiacSign,

    birthData?.zodiac_sign?.name,
    birthData?.zodiac_sign?.label,
    birthData?.zodiac_sign,

    birthData?.sunSign?.name,
    birthData?.sunSign?.label,
    birthData?.sunSign,

    birthData?.sun_sign?.name,
    birthData?.sun_sign?.label,
    birthData?.sun_sign,

    order?.zodiac_sign?.name,
    order?.zodiac_sign?.label,
    order?.zodiac_sign,

    order?.sun_sign?.name,
    order?.sun_sign?.label,
    order?.sun_sign,
  ];

  for (
    const candidate
    of candidates
  ) {
    const zodiac =
      ZODIAC_SIGNS[
        normalizeLookupKey(
          candidate,
        )
      ];

    if (zodiac) {
      return {
        key:
          zodiac.key,

        label:
          getLocalizedZodiacLabel(
            zodiac.key,
            locale,
          ),
      };
    }
  }

  const zodiacFromLongitude =
    getHoroscopeZodiacFromLongitude(
      sunPlanet?.longitude,
    );

  if (zodiacFromLongitude) {
    return {
      key:
        zodiacFromLongitude,

      label:
        getLocalizedZodiacLabel(
          zodiacFromLongitude,
          locale,
        ),
    };
  }

  throw new Error(
    "INVALID_ZODIAC_SIGN",
  );
}

/*
|--------------------------------------------------------------------------
| Configuration Supabase
|--------------------------------------------------------------------------
*/

const SUPABASE_URL =
  clean(
    process.env.SUPABASE_URL ||
      process.env
        .NEXT_PUBLIC_SUPABASE_URL,
  );

const SUPABASE_SERVICE_ROLE_KEY =
  clean(
    process.env
      .SUPABASE_SERVICE_ROLE_KEY,
  );

const supabase =
  SUPABASE_URL &&
  SUPABASE_SERVICE_ROLE_KEY
    ? createClient(
        SUPABASE_URL,
        SUPABASE_SERVICE_ROLE_KEY,
        {
          auth: {
            persistSession:
              false,

            autoRefreshToken:
              false,
          },
        },
      )
    : null;

/*
|--------------------------------------------------------------------------
| Fuseau horaire
|--------------------------------------------------------------------------
*/

function getTimezoneOffsetHours(
  timeZone: string,
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
): number {
  const utcDate =
    new Date(
      Date.UTC(
        year,
        month - 1,
        day,
        hour,
        minute,
        0,
      ),
    );

  const formatter =
    new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      },
    );

  const values:
    Record<string, string> =
      {};

  for (
    const part
    of formatter.formatToParts(
      utcDate,
    )
  ) {
    if (
      part.type !==
      "literal"
    ) {
      values[
        part.type
      ] = part.value;
    }
  }

  let formattedHour =
    Number(
      values.hour,
    );

  if (
    formattedHour === 24
  ) {
    formattedHour = 0;
  }

  const asUTC =
    Date.UTC(
      Number(
        values.year,
      ),

      Number(
        values.month,
      ) - 1,

      Number(
        values.day,
      ),

      formattedHour,

      Number(
        values.minute,
      ),

      Number(
        values.second,
      ),
    );

  return (
    asUTC -
    utcDate.getTime()
  ) / 3_600_000;
}

/*
|--------------------------------------------------------------------------
| Date et heure de naissance
|--------------------------------------------------------------------------
*/

function parseBirthDate(
  date: string,
) {
  const normalizedDate =
    clean(date);

  if (
    normalizedDate.includes(
      "/",
    )
  ) {
    const [
      day,
      month,
      year,
    ] =
      normalizedDate
        .split("/")
        .map(Number);

    return {
      year,
      month,
      day,
    };
  }

  const [
    year,
    month,
    day,
  ] =
    normalizedDate
      .split("-")
      .map(Number);

  return {
    year,
    month,
    day,
  };
}

function parseBirthTime(
  time: string,
) {
  const [
    hour,
    minute,
  ] =
    clean(time)
      .split(":")
      .map(Number);

  return {
    hour:
      Number.isFinite(
        hour,
      )
        ? hour
        : 12,

    minute:
      Number.isFinite(
        minute,
      )
        ? minute
        : 0,
  };
}

function isValidDateParts(
  year: number,
  month: number,
  day: number,
): boolean {
  if (
    !Number.isInteger(
      year,
    ) ||
    !Number.isInteger(
      month,
    ) ||
    !Number.isInteger(
      day,
    )
  ) {
    return false;
  }

  if (
    year < 1800 ||
    year > 2200
  ) {
    return false;
  }

  if (
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31
  ) {
    return false;
  }

  const testDate =
    new Date(
      Date.UTC(
        year,
        month - 1,
        day,
      ),
    );

  return (
    testDate.getUTCFullYear() ===
      year &&
    testDate.getUTCMonth() ===
      month - 1 &&
    testDate.getUTCDate() ===
      day
  );
}

function isValidTimeParts(
  hour: number,
  minute: number,
): boolean {
  return (
    Number.isInteger(
      hour,
    ) &&
    Number.isInteger(
      minute,
    ) &&
    hour >= 0 &&
    hour <= 23 &&
    minute >= 0 &&
    minute <= 59
  );
}

/*
|--------------------------------------------------------------------------
| Mois demandé pour l’horoscope mensuel
|--------------------------------------------------------------------------
*/

function getMonthlyReportIsoMonth(
  order: any,
  birthData: any,
): string {
  const directIsoMonth =
    clean(
      order?.report_month_iso ||
        order?.reportMonthIso ||
        birthData?.reportMonthIso ||
        birthData?.report_month_iso ||
        birthData?.isoMonth ||
        birthData?.iso_month,
    );

  if (
    /^\d{4}-\d{2}$/.test(
      directIsoMonth,
    )
  ) {
    const monthNumber =
      Number(
        directIsoMonth.slice(
          5,
          7,
        ),
      );

    if (
      monthNumber >= 1 &&
      monthNumber <= 12
    ) {
      return directIsoMonth;
    }
  }

  const reportMonth =
    Number(
      order?.report_month ??
        order?.reportMonth ??
        birthData?.reportMonth ??
        birthData?.report_month ??
        birthData?.month,
    );

  const reportYear =
    Number(
      order?.report_year ??
        order?.reportYear ??
        birthData?.reportYear ??
        birthData?.report_year ??
        birthData?.year,
    );

  if (
    !Number.isInteger(
      reportMonth,
    ) ||
    reportMonth < 1 ||
    reportMonth > 12
  ) {
    throw new Error(
      "INVALID_REPORT_MONTH",
    );
  }

  if (
    !Number.isInteger(
      reportYear,
    ) ||
    reportYear < 2020 ||
    reportYear > 2200
  ) {
    throw new Error(
      "INVALID_REPORT_YEAR",
    );
  }

  return (
    `${reportYear}-${String(
      reportMonth,
    ).padStart(
      2,
      "0",
    )}`
  );
}

/*
|--------------------------------------------------------------------------
| Année demandée pour l’horoscope annuel
|--------------------------------------------------------------------------
*/

function getYearlyReportYear(
  order: any,
  birthData: any,
): number {
  const reportYear =
    Number(
      order?.report_year ??
        order?.reportYear ??
        birthData?.reportYear ??
        birthData?.report_year ??
        birthData?.year,
    );

  if (
    !Number.isInteger(
      reportYear,
    ) ||
    reportYear < 2020 ||
    reportYear > 2200
  ) {
    throw new Error(
      "INVALID_REPORT_YEAR",
    );
  }

  return reportYear;
}

/*
|--------------------------------------------------------------------------
| Images
|--------------------------------------------------------------------------
*/

function isImageDataUrl(
  value: string,
): boolean {
  return (
    /^data:image\/(png|jpeg|jpg|webp);base64,/i
      .test(value)
  );
}

function getImageMimeType(
  fileName: string,
  fileType?: string,
): string {
  const normalizedType =
    clean(fileType)
      .toLowerCase();

  if (
    normalizedType.startsWith(
      "image/",
    )
  ) {
    return normalizedType;
  }

  const normalizedName =
    fileName.toLowerCase();

  if (
    normalizedName.endsWith(
      ".jpg",
    ) ||
    normalizedName.endsWith(
      ".jpeg",
    )
  ) {
    return "image/jpeg";
  }

  if (
    normalizedName.endsWith(
      ".webp",
    )
  ) {
    return "image/webp";
  }

  return "image/png";
}

async function downloadWheelImageFromStorage(
  wheelPath: string,
): Promise<string> {
  if (
    !supabase ||
    !wheelPath
  ) {
    return "";
  }

  const buckets = [
    "rapport-images",
    "rapport-pdf",
  ] as const;

  for (
    const bucket
    of buckets
  ) {
    const result =
      await supabase
        .storage
        .from(bucket)
        .download(
          wheelPath,
        );

    if (
      !result.error &&
      result.data
    ) {
      const arrayBuffer =
        await result.data
          .arrayBuffer();

      const buffer =
        Buffer.from(
          arrayBuffer,
        );

      const mimeType =
        getImageMimeType(
          wheelPath,
          result.data.type,
        );

      return (
        `data:${mimeType};base64,` +
        buffer.toString(
          "base64",
        )
      );
    }
  }

  console.warn(
    "WHEEL_IMAGE_DOWNLOAD_FAILED",
    {
      wheelPath,
    },
  );

  return "";
}

async function resolveWheelImage(
  order: any,
  birthData: any,
): Promise<string> {
  const directWheelImage =
    clean(
      birthData?.wheelImage ||
        birthData?.wheel_image ||
        order?.wheel_image,
    );

  if (
    directWheelImage
  ) {
    if (
      isImageDataUrl(
        directWheelImage,
      )
    ) {
      return directWheelImage;
    }

    if (
      directWheelImage.length >
        500 &&
      !directWheelImage
        .startsWith(
          "http",
        )
    ) {
      return (
        "data:image/png;base64," +
        directWheelImage
      );
    }
  }

  const wheelImagePath =
    clean(
      order?.wheel_image_path ||
        birthData
          ?.wheelImagePath ||
        birthData
          ?.wheel_image_path,
    );

  return wheelImagePath
    ? downloadWheelImageFromStorage(
        wheelImagePath,
      )
    : "";
}

/*
|--------------------------------------------------------------------------
| Construction de la carte du ciel
|--------------------------------------------------------------------------
*/

type BuiltChart = {
  firstName: string;
  birthDate: string;
  birthTime: string;
  birthCity: string;
  birthCountry: string;
  latitude: number;
  longitude: number;
  timeZone: string;
  timezoneOffset: number;
  planets: any[];
  angles: any;
  wheelImage: string;
};

async function buildChartData(
  personData: any,
  orderFallback: any = {},
): Promise<BuiltChart> {
  const firstName =
    clean(
      personData?.firstName ||
        personData?.first_name ||
        orderFallback?.first_name,
    );

  const birthDate =
    clean(
      personData?.birthDate ||
        personData?.birth_date ||
        orderFallback?.birth_date,
    );

  const birthTime =
    clean(
      personData?.birthTime ||
        personData?.birth_time ||
        orderFallback?.birth_time,
    );

  const birthCity =
    clean(
      personData?.birthCity ||
        personData?.birth_city ||
        orderFallback?.birth_city,
    );

  const birthCountry =
    clean(
      personData
        ?.birthCountry ||
        personData
          ?.birth_country ||
        orderFallback
          ?.birth_country,
    );

  const latitude =
    Number(
      personData?.latitude ??
        orderFallback?.latitude,
    );

  const longitude =
    Number(
      personData?.longitude ??
        orderFallback?.longitude,
    );

  if (
    !birthDate ||
    !birthTime ||
    !Number.isFinite(
      latitude,
    ) ||
    !Number.isFinite(
      longitude,
    )
  ) {
    throw new Error(
      "INVALID_BIRTH_DATA",
    );
  }

  const {
    year,
    month,
    day,
  } =
    parseBirthDate(
      birthDate,
    );

  const {
    hour,
    minute,
  } =
    parseBirthTime(
      birthTime,
    );

  if (
    !isValidDateParts(
      year,
      month,
      day,
    )
  ) {
    throw new Error(
      "INVALID_BIRTH_DATE",
    );
  }

  if (
    !isValidTimeParts(
      hour,
      minute,
    )
  ) {
    throw new Error(
      "INVALID_BIRTH_TIME",
    );
  }

  let timeZone =
    clean(
      personData?.timezone ||
        personData?.timeZone ||
        orderFallback?.timezone,
    );

  if (
    !timeZone
  ) {
    try {
      timeZone =
        tzlookup(
          latitude,
          longitude,
        );
    } catch (
      error: any
    ) {
      throw new Error(
        error?.message ||
          "TIMEZONE_LOOKUP_FAILED",
      );
    }
  }

  const timezoneOffset =
    getTimezoneOffsetHours(
      timeZone,
      year,
      month,
      day,
      hour,
      minute,
    );

  const chart =
    calculateChart({
      year,
      month,
      day,
      hour,
      minute,
      second: 0,
      timezone:
        timezoneOffset,
      latitude,
      longitude,
    });

  const planets =
    (
      chart as any
    )?.planets || [];

  const angles =
    (
      chart as any
    )?.angles || {};

  const wheelImage =
    await resolveWheelImage(
      orderFallback,
      personData,
    );

  return {
    firstName,
    birthDate,
    birthTime,
    birthCity,
    birthCountry,
    latitude,
    longitude,
    timeZone,
    timezoneOffset,
    planets,
    angles,
    wheelImage,
  };
}

/*
|--------------------------------------------------------------------------
| Sauvegarde du PDF
|--------------------------------------------------------------------------
*/

async function saveGeneratedPdf(
  sessionId: string,
  productType: string,
  pdfDocument:
    React.ReactElement,
) {
  if (
    !supabase
  ) {
    throw new Error(
      "SUPABASE_CONFIG_MISSING",
    );
  }

  const pdfBuffer =
    await renderToBuffer(
      pdfDocument,
    );

  const safeProductType =
    productType.replace(
      /[^a-zA-Z0-9-_]/g,
      "-",
    );

  const filePath =
    `${sessionId}/rapport-${safeProductType}.pdf`;

  const {
    error: uploadError,
  } =
    await supabase
      .storage
      .from(
        "rapport-pdf",
      )
      .upload(
        filePath,
        pdfBuffer,
        {
          contentType:
            "application/pdf",

          upsert:
            true,
        },
      );

  if (
    uploadError
  ) {
    throw new Error(
      `PDF_UPLOAD_FAILED: ${uploadError.message}`,
    );
  }

  const {
    error: updateError,
  } =
    await supabase
      .from(
        "orders",
      )
      .update({
        status:
          "generated",

        pdf_path:
          filePath,

        updated_at:
          new Date()
            .toISOString(),
      })
      .eq(
        "stripe_session_id",
        sessionId,
      );

  if (
    updateError
  ) {
    throw new Error(
      `ORDER_UPDATE_FAILED: ${updateError.message}`,
    );
  }

  const {
    data: signed,
    error: signedError,
  } =
    await supabase
      .storage
      .from(
        "rapport-pdf",
      )
      .createSignedUrl(
        filePath,
        60 * 60,
      );

  if (
    signedError
  ) {
    throw new Error(
      `SIGNED_URL_FAILED: ${signedError.message}`,
    );
  }

  return {
    filePath,

    signedUrl:
      signed?.signedUrl ||
      null,
  };
}

/*
|--------------------------------------------------------------------------
| Génération principale
|--------------------------------------------------------------------------
*/

export async function POST(
  req: Request,
) {
  try {
    if (
      !supabase
    ) {
      return NextResponse.json(
        {
          error:
            "SUPABASE_CONFIG_MISSING",

          detail:
            __i18n["supabase_url_ou_supabase_service_role_key_est_absent"],
        },
        {
          status: 500,
        },
      );
    }

    const body =
      await req
        .json()
        .catch(
          () => null,
        );

    const sessionId =
      clean(
        body?.session_id,
      );

    if (
      !sessionId
    ) {
      return NextResponse.json(
        {
          error:
            "MISSING_SESSION_ID",
        },
        {
          status: 400,
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Recherche de la commande
    |--------------------------------------------------------------------------
    */

    const {
      data: order,
      error: orderError,
    } =
      await supabase
        .from(
          "orders",
        )
        .select("*")
        .eq(
          "stripe_session_id",
          sessionId,
        )
        .single();

    if (
      orderError ||
      !order
    ) {
      return NextResponse.json(
        {
          error:
            "ORDER_NOT_FOUND",

          detail:
            orderError?.message ||
            null,
        },
        {
          status: 404,
        },
      );
    }

    const birthData =
      order.birth_data &&
      typeof order.birth_data ===
        "object"
        ? order.birth_data
        : {};

    const productType =
      clean(
        order.product_type ||
          order.report_type ||
          "essential",
      ).toLowerCase();

    const locale =
      resolveReportLocale(
        order,
        birthData,
        body,
      );

    let pdfDocument:
      React.ReactElement;

    let wheelIncluded =
      false;

    let wheelsIncluded:
      | {
          person1: boolean;
          person2: boolean;
        }
      | undefined;

    /*
    |--------------------------------------------------------------------------
    | Rapport de compatibilité
    |--------------------------------------------------------------------------
    */

    if (
      productType ===
      "compatibility"
    ) {
      const person1Data =
        birthData.person1 &&
        typeof birthData.person1 ===
          "object"
          ? birthData.person1
          : {};

      const person2Data =
        birthData.person2 &&
        typeof birthData.person2 ===
          "object"
          ? birthData.person2
          : {};

      if (
        Object.keys(
          person1Data,
        ).length === 0 ||
        Object.keys(
          person2Data,
        ).length === 0
      ) {
        return NextResponse.json(
          {
            error:
              "INVALID_COMPATIBILITY_DATA",

            detail:
              __i18n["les_donnees_des_deux_personnes_sont_absentes"],

            birth_data:
              birthData,
          },
          {
            status: 400,
          },
        );
      }

      const [
        chart1,
        chart2,
      ] =
        await Promise.all([
          buildChartData(
            person1Data,
          ),

          buildChartData(
            person2Data,
          ),
        ]);

      const person1:
        CompatibilityPerson = {
        firstName:
          chart1.firstName,

        birthDate:
          chart1.birthDate,

        birthTime:
          chart1.birthTime,

        birthCity:
          chart1.birthCity,

        birthCountry:
          chart1.birthCountry,

        planets:
          chart1.planets,

        angles:
          chart1.angles,

        wheelImage:
          chart1.wheelImage,
      };

      const person2:
        CompatibilityPerson = {
        firstName:
          chart2.firstName,

        birthDate:
          chart2.birthDate,

        birthTime:
          chart2.birthTime,

        birthCity:
          chart2.birthCity,

        birthCountry:
          chart2.birthCountry,

        planets:
          chart2.planets,

        angles:
          chart2.angles,

        wheelImage:
          chart2.wheelImage,
      };

      wheelsIncluded = {
        person1:
          Boolean(
            chart1.wheelImage,
          ),

        person2:
          Boolean(
            chart2.wheelImage,
          ),
      };

      wheelIncluded =
        wheelsIncluded.person1 &&
        wheelsIncluded.person2;

      console.log(
        "COMPATIBILITY_REPORT_GENERATION",
        {
          sessionId,
          productType,

          person1:
            chart1.firstName,

          person2:
            chart2.firstName,

          person1PlanetsCount:
            chart1.planets.length,

          person2PlanetsCount:
            chart2.planets.length,

          wheelsIncluded,
        },
      );

      const CompatibilityDocument =
        COMPATIBILITY_PDF_DOCUMENTS[
          locale
        ];

      pdfDocument =
        React.createElement(
          CompatibilityDocument,
          {
            person1,
            person2,
            locale,
          },
        );
    } else {
      /*
      |--------------------------------------------------------------------------
      | Carte du ciel de la personne
      |--------------------------------------------------------------------------
      */

      const chart =
        await buildChartData(
          birthData,
          order,
        );

      wheelIncluded =
        Boolean(
          chart.wheelImage,
        );

      const commonProps = {
        locale,

        firstName:
          chart.firstName,

        birthDate:
          chart.birthDate,

        birthTime:
          chart.birthTime,

        birthCity:
          chart.birthCity,

        planets:
          chart.planets,

        angles:
          chart.angles,

        wheelImage:
          chart.wheelImage,
      };

      console.log(
        "REPORT_GENERATION",
        {
          sessionId,
          productType,

          firstName:
            chart.firstName,

          birthDate:
            chart.birthDate,

          birthTime:
            chart.birthTime,

          birthCity:
            chart.birthCity,

          timeZone:
            chart.timeZone,

          timezoneOffset:
            chart.timezoneOffset,

          planetsCount:
            chart.planets.length,

          hasAngles:
            Boolean(
              chart.angles &&
                Object.keys(
                  chart.angles,
                ).length,
            ),

          hasWheelImage:
            wheelIncluded,
        },
      );

      /*
      |--------------------------------------------------------------------------
      | Horoscope du jour
      |--------------------------------------------------------------------------
      */

      if (
        productType ===
        "horoscope-daily"
      ) {
        const zodiac =
          resolveZodiacSign(
              chart.planets,
              birthData,
              order,
              locale,
            );

        const buildDailyHoroscope =
          DAILY_BUILDERS[
            locale
          ];

        const DailyPdfDocument =
          DAILY_PDF_DOCUMENTS[
            locale
          ];

        const horoscopeData =
          buildDailyHoroscope({
            firstName:
              chart.firstName,

            zodiacSign:
              zodiac.key,

            zodiacSignLabel:
              zodiac.label,

            birthDate:
              chart.birthDate,

            birthTime:
              chart.birthTime,

            birthCity:
              chart.birthCity,

            birthCountry:
              chart.birthCountry,

            latitude:
              chart.latitude,

            longitude:
              chart.longitude,

            timeZone:
              chart.timeZone,

            natalPlanets:
              chart.planets,
          });

        console.log(
          "HOROSCOPE_DAILY_GENERATION",
          {
            sessionId,
            productType,

            firstName:
              chart.firstName,

            zodiacSign:
              zodiac.key,

            zodiacSignLabel:
              zodiac.label,

            date:
              horoscopeData
                .period
                .startDate,

            planetaryInfluences:
              horoscopeData
                .content
                .planetaryInfluences
                .length,
          },
        );

        pdfDocument =
          React.createElement(
            DailyPdfDocument,
            {
              ...horoscopeData,

              locale,

              logoUrl:
                HOROSCOPE_LOGO_URL,
            },
          );
      }

      /*
      |--------------------------------------------------------------------------
      | Horoscope du mois
      |--------------------------------------------------------------------------
      */

      else if (
        productType ===
        "horoscope-month"
      ) {
        const zodiac =
          resolveZodiacSign(
              chart.planets,
              birthData,
              order,
              locale,
            );

        const isoMonth =
          getMonthlyReportIsoMonth(
            order,
            birthData,
          );

        const buildMonthHoroscope =
          MONTHLY_BUILDERS[
            locale
          ];

        const MonthPdfDocument =
          MONTHLY_PDF_DOCUMENTS[
            locale
          ];

        const horoscopeData =
          buildMonthHoroscope({
            firstName:
              chart.firstName,

            zodiacSign:
              zodiac.key,

            month:
              isoMonth,

            birthDate:
              chart.birthDate,

            birthTime:
              chart.birthTime,

            birthCity:
              chart.birthCity,

            birthCountry:
              chart.birthCountry,
          });

        console.log(
          "HOROSCOPE_MONTH_GENERATION",
          {
            sessionId,
            productType,

            firstName:
              chart.firstName,

            zodiacSign:
              zodiac.key,

            zodiacSignLabel:
              zodiac.label,

            month:
              isoMonth,

            periodLabel:
              horoscopeData
                .period
                .label,

            aspectsCount:
              horoscopeData
                .astrology
                .aspects
                .length,

            moonPhasesCount:
              horoscopeData
                .astrology
                .moonPhases
                .length,

            astroEventsCount:
              horoscopeData
                .astrology
                .astroEvents
                .length,
          },
        );

        pdfDocument =
          React.createElement(
            MonthPdfDocument,
            {
              ...horoscopeData,

              locale,

              logoUrl:
                HOROSCOPE_LOGO_URL,
            },
          );
      }

      /*
      |--------------------------------------------------------------------------
      | Horoscope de l’année
      |--------------------------------------------------------------------------
      */

      else if (
        productType ===
        "horoscope-year"
      ) {
        const zodiac =
          resolveZodiacSign(
              chart.planets,
              birthData,
              order,
              locale,
            );

        const reportYear =
          getYearlyReportYear(
            order,
            birthData,
          );

        const buildYearHoroscope =
          YEARLY_BUILDERS[
            locale
          ];

        const YearPdfDocument =
          YEARLY_PDF_DOCUMENTS[
            locale
          ];

        const horoscopeData =
          buildYearHoroscope({
            firstName:
              chart.firstName,

            zodiacSign:
              zodiac.key,

            year:
              reportYear,

            birthDate:
              chart.birthDate,

            birthTime:
              chart.birthTime,

            birthCity:
              chart.birthCity,

            birthCountry:
              chart.birthCountry,
          });

        console.log(
          "HOROSCOPE_YEAR_GENERATION",
          {
            sessionId,
            productType,

            firstName:
              chart.firstName,

            zodiacSign:
              zodiac.key,

            zodiacSignLabel:
              zodiac.label,

            year:
              reportYear,

            periodLabel:
              horoscopeData
                .period
                .label,
          },
        );

        pdfDocument =
          React.createElement(
            YearPdfDocument,
            {
              ...horoscopeData,

              locale,
            },
          );
      }

      /*
      |--------------------------------------------------------------------------
      | Carte du ciel Signature
      |--------------------------------------------------------------------------
      */

      else if (
        productType ===
        "signature"
      ) {
        const SignatureDocument =
          SIGNATURE_PDF_DOCUMENTS[
            locale
          ];

        pdfDocument =
          React.createElement(
            SignatureDocument,
            commonProps,
          );
      }

      /*
      |--------------------------------------------------------------------------
      | Carte du ciel Premium
      |--------------------------------------------------------------------------
      */

      else if (
        productType ===
        "premium"
      ) {
        const PremiumDocument =
          PREMIUM_PDF_DOCUMENTS[
            locale
          ];

        pdfDocument =
          React.createElement(
            PremiumDocument,
            commonProps,
          );
      }

      /*
      |--------------------------------------------------------------------------
      | Carte du ciel Essentielle
      |--------------------------------------------------------------------------
      */

      else if (
        productType ===
        "essential"
      ) {
        const EssentialDocument =
          ESSENTIAL_PDF_DOCUMENTS[
            locale
          ];

        pdfDocument =
          React.createElement(
            EssentialDocument,
            commonProps,
          );
      }

      /*
      |--------------------------------------------------------------------------
      | Type de rapport inconnu
      |--------------------------------------------------------------------------
      */

      else {
        throw new Error(
          `INVALID_PRODUCT_TYPE: ${productType}`,
        );
      }
    }

    /*
    |--------------------------------------------------------------------------
    | Création et sauvegarde du PDF
    |--------------------------------------------------------------------------
    */

    const {
      filePath,
      signedUrl,
    } =
      await saveGeneratedPdf(
        sessionId,
        productType,
        pdfDocument,
      );

    return NextResponse.json({
      ok:
        true,

      generated:
        true,

      product_type:
        productType,

      locale,

      pdf_path:
        filePath,

      pdf_url:
        signedUrl,

      wheel_included:
        wheelIncluded,

      ...(
        wheelsIncluded
          ? {
              wheels_included:
                wheelsIncluded,
            }
          : {}
      ),
    });
  } catch (
    err: any
  ) {
    console.error(
      "REPORT_GENERATE_ERROR",
    );

    console.error(
      "Message:",
      err?.message,
    );

    console.error(
      "Stack:",
      err?.stack,
    );

    console.error(
      "Erreur complète:",
      err,
    );

    const message =
      err?.message ||
      "REPORT_GENERATE_ERROR";

    const isClientError =
      message.startsWith(
        "INVALID_",
      ) ||
      message.startsWith(
        "TIMEZONE_",
      );

    return NextResponse.json(
      {
        error:
          message,
      },
      {
        status:
          isClientError
            ? 400
            : 500,
      },
    );
  }
}
