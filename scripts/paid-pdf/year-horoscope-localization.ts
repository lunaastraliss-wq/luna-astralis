import type {
  PaidPdfLocale,
} from "./premium-localization";

import {
  localizeYearlyHoroscopeBuilder,
} from "./yearly-horoscope-builder-localization";

import {
  localizeYearHoroscopeOverview,
} from "./year-horoscope-overview-localization";

import {
  localizeYearHoroscopeMajorEnergies,
} from "./year-horoscope-major-energies-localization";

/* =========================================================
   TYPES
========================================================= */

type LocalizeYearHoroscopeFileOptions = {
  source: string;
  locale: PaidPdfLocale;
  filePath: string;
  fileName: string;
};

/* =========================================================
   MAIN YEAR ROUTER
========================================================= */

export function localizeYearHoroscopeFile({
  source,
  locale,
  filePath,
  fileName,
}: LocalizeYearHoroscopeFileOptions): string {
  const normalizedPath =
    filePath.replace(/\\/g, "/");

  const isYearHoroscope =
    normalizedPath.includes(
      "/HoroscopePdf/year/",
    ) ||
    fileName ===
      "buildYearlyHoroscope.ts" ||
    fileName ===
      "HoroscopeYearPdf.tsx";

  if (!isYearHoroscope) {
    return source;
  }

  if (locale === "fr") {
    return source;
  }

  /* =======================================================
     YEAR — BUILDER PRINCIPAL / COVER
  ======================================================= */

  if (
    fileName ===
    "buildYearlyHoroscope.ts"
  ) {
    return localizeYearlyHoroscopeBuilder(
      source,
      locale,
    );
  }

  /* =======================================================
     YEAR — OVERVIEW
  ======================================================= */

  if (
    fileName ===
    "HoroscopeYearOverview.tsx"
  ) {
    return localizeYearHoroscopeOverview(
      source,
      locale,
    );
  }

  /* =======================================================
     YEAR — MAJOR ENERGIES
  ======================================================= */

  if (
    fileName ===
    "HoroscopeYearMajorEnergies.tsx"
  ) {
    return localizeYearHoroscopeMajorEnergies(
      source,
      locale,
    );
  }

  return source;
}
