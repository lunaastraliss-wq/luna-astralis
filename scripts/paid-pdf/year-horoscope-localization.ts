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

import {
  localizeYearHoroscopeMajorAspects,
} from "./year-horoscope-major-aspects-localization";

import {
  localizeYearHoroscopeDominantPlanets,
} from "./year-horoscope-dominant-planets-localization";

import {
  localizeYearHoroscopeActivatedHouses,
} from "./year-horoscope-activated-houses-localization";

import {
  localizeYearAnnualPages,
} from "./year-annual-pages-localization";

import {
  localizeYearHoroscopeCareer,
} from "./year-horoscope-career-localization";

import {
  localizeYearHoroscopeChallenge,
} from "./year-horoscope-challenge-localization";

import {
  localizeYearHoroscopeFinance,
} from "./year-horoscope-finance-localization";

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

  /* =======================================================
     YEAR — MAJOR ASPECTS
  ======================================================= */

  if (
    fileName ===
    "HoroscopeYearMajorAspects.tsx"
  ) {
    return localizeYearHoroscopeMajorAspects(
      source,
      locale,
    );
  }

  /* =======================================================
     YEAR — DOMINANT PLANETS
  ======================================================= */

  if (
    fileName ===
    "HoroscopeYearDominantPlanets.tsx"
  ) {
    return localizeYearHoroscopeDominantPlanets(
      source,
      locale,
    );
  }

  /* =======================================================
     YEAR — ACTIVATED HOUSES
  ======================================================= */

  if (
    fileName ===
    "HoroscopeYearActivatedHouses.tsx"
  ) {
    return localizeYearHoroscopeActivatedHouses(
      source,
      locale,
    );
  }

  /* =======================================================
     YEAR — ANNUAL PAGES DATA
  ======================================================= */

  if (
    fileName ===
    "buildYearAnnualPages.ts"
  ) {
    return localizeYearAnnualPages(
      source,
      locale,
    );
  }

  /* =======================================================
     YEAR — CAREER / TRAVAIL ET CARRIÈRE
  ======================================================= */

  if (
    fileName ===
    "buildYearlyCareer.ts"
  ) {
    return localizeYearHoroscopeCareer(
      source,
      locale,
    );
  }

  /* =======================================================
     YEAR — CHALLENGE / DÉFIS
  ======================================================= */

  if (
    fileName ===
    "buildYearlyChallenge.ts"
  ) {
    return localizeYearHoroscopeChallenge(
      source,
      locale,
    );
  }

  /* =======================================================
     YEAR — FINANCE / FINANCES
  ======================================================= */

  if (
    fileName ===
    "buildYearlyFinance.ts"
  ) {
    return localizeYearHoroscopeFinance(
      source,
      locale,
    );
  }

  return source;
}
