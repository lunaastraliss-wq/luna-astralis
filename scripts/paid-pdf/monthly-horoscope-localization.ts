import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   BUILDERS MONTH
========================================================= */

import {
  localizeMonthlyHoroscopeBuilder,
} from "./monthly-horoscope-builder-localization";

import {
  localizeMonthlyPlanetaryInfluencesBuilder,
} from "./monthly-planetary-influences-localization";

/* =========================================================
   MONTH — LOVE DATA
========================================================= */

import {
  localizeMonthlyLoveBuilder,
  localizeMonthlyLoveTexts,
} from "./monthly-love-localization";

/* =========================================================
   MONTH — CALCULATIONS
========================================================= */

import {
  localizeMonthlyDominantsCalculation,
} from "./month-horoscope-dominants-calculation-localization";

/* =========================================================
   MONTH — OVERVIEW
========================================================= */

import {
  localizeHoroscopeMonthOverview,
} from "./month-horoscope-overview-localization";

/* =========================================================
   MONTH — MAJOR ENERGIES
========================================================= */

import {
  localizeHoroscopeMonthMajorEnergies,
} from "./month-horoscope-major-energies-localization";

/* =========================================================
   MONTH — MAJOR ASPECTS
========================================================= */

import {
  localizeHoroscopeMonthMajorAspects,
} from "./month-horoscope-major-aspects-localization";

/* =========================================================
   MONTH — DOMINANT PLANETS
========================================================= */

import {
  localizeHoroscopeMonthDominantPlanets,
} from "./month-horoscope-dominant-planets-localization";

/* =========================================================
   MONTH — ACTIVATED HOUSES
========================================================= */

import {
  localizeHoroscopeMonthActivatedHouses,
} from "./month-horoscope-activated-houses-localization";

/* =========================================================
   MONTH — MOON PHASES
========================================================= */

import {
  localizeHoroscopeMonthMoonPhases,
} from "./month-horoscope-moon-phases-localization";

/* =========================================================
   MONTH — ASTRO EVENTS
========================================================= */

import {
  localizeHoroscopeMonthAstroEvents,
} from "./month-horoscope-astro-events-localization";

/* =========================================================
   MONTH — BEST PERIODS
========================================================= */

import {
  localizeHoroscopeMonthBestPeriods,
} from "./month-horoscope-best-periods-localization";

/* =========================================================
   MONTH — DELICATE PERIODS
========================================================= */

import {
  localizeHoroscopeMonthDelicatePeriods,
} from "./month-horoscope-delicate-periods-localization";

/* =========================================================
   MONTH — WEEKS 1 → 4
========================================================= */

import {
  localizeHoroscopeMonthWeeks,
} from "./month-horoscope-weeks-localization";

/* =========================================================
   MONTH — MANTRA
========================================================= */

import {
  localizeHoroscopeMonthMantra,
} from "./month-horoscope-mantra-localization";

/* =========================================================
   TYPES
========================================================= */

type LocalizeMonthHoroscopeFileOptions = {
  source: string;
  locale: PaidPdfLocale;
  filePath: string;
  fileName: string;
};

/* =========================================================
   MAIN MONTH ROUTER
========================================================= */

export function localizeMonthHoroscopeFile({
  source,
  locale,
  filePath,
  fileName,
}: LocalizeMonthHoroscopeFileOptions): string {
  const normalizedPath =
    filePath.replace(/\\/g, "/");

  /* =======================================================
     DÉTECTION DES FICHIERS MONTH
  ======================================================= */

  const isMonthlyHoroscope =
    normalizedPath.includes(
      "/HoroscopePdf/month/",
    ) ||
    fileName ===
      "buildMonthlyHoroscope.ts" ||
    fileName ===
      "buildMonthlyPlanetaryInfluences.ts" ||
    fileName ===
      "calculateMonthlyDominants.ts" ||
    fileName ===
      "buildMonthlyLove.ts" ||
    fileName ===
      "createMonthlyLoveTexts.ts";

  if (!isMonthlyHoroscope) {
    return source;
  }

  /* =======================================================
     FRANÇAIS = SOURCE ORIGINALE
  ======================================================= */

  if (locale === "fr") {
    return source;
  }

  /* =======================================================
     BUILDERS MONTH
  ======================================================= */

  if (
    fileName ===
    "buildMonthlyHoroscope.ts"
  ) {
    return localizeMonthlyHoroscopeBuilder(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "buildMonthlyPlanetaryInfluences.ts"
  ) {
    return localizeMonthlyPlanetaryInfluencesBuilder(
      source,
      locale,
    );
  }

  /* =======================================================
     MONTH DATA — LOVE
  ======================================================= */

  if (
    fileName ===
    "buildMonthlyLove.ts"
  ) {
    return localizeMonthlyLoveBuilder(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "createMonthlyLoveTexts.ts"
  ) {
    return localizeMonthlyLoveTexts(
      source,
      locale,
    );
  }

  /* =======================================================
     CALCULATIONS — DOMINANT PLANETS
  ======================================================= */

  if (
    fileName ===
    "calculateMonthlyDominants.ts"
  ) {
    return localizeMonthlyDominantsCalculation(
      source,
      locale,
    );
  }

  /* =======================================================
     PAGE — OVERVIEW
  ======================================================= */

  if (
    fileName ===
    "HoroscopeMonthOverview.tsx"
  ) {
    return localizeHoroscopeMonthOverview(
      source,
      locale,
    );
  }

  /* =======================================================
     PAGE — MAJOR ENERGIES
  ======================================================= */

  if (
    fileName ===
    "HoroscopeMonthMajorEnergies.tsx"
  ) {
    return localizeHoroscopeMonthMajorEnergies(
      source,
      locale,
    );
  }

  /* =======================================================
     PAGE — MAJOR ASPECTS
  ======================================================= */

  if (
    fileName ===
    "HoroscopeMonthMajorAspects.tsx"
  ) {
    return localizeHoroscopeMonthMajorAspects(
      source,
      locale,
    );
  }

  /* =======================================================
     PAGE — DOMINANT PLANETS
  ======================================================= */

  if (
    fileName ===
    "HoroscopeMonthDominantPlanets.tsx"
  ) {
    return localizeHoroscopeMonthDominantPlanets(
      source,
      locale,
    );
  }

  /* =======================================================
     PAGE — ACTIVATED HOUSES
  ======================================================= */

  if (
    fileName ===
    "HoroscopeMonthActivatedHouses.tsx"
  ) {
    return localizeHoroscopeMonthActivatedHouses(
      source,
      locale,
    );
  }

  /* =======================================================
     PAGE — MOON PHASES
  ======================================================= */

  if (
    fileName ===
    "HoroscopeMonthMoonPhases.tsx"
  ) {
    return localizeHoroscopeMonthMoonPhases(
      source,
      locale,
    );
  }

  /* =======================================================
     PAGE — ASTRO EVENTS
  ======================================================= */

  if (
    fileName ===
    "HoroscopeMonthAstroEvents.tsx"
  ) {
    return localizeHoroscopeMonthAstroEvents(
      source,
      locale,
    );
  }

  /* =======================================================
     PAGE — BEST PERIODS
  ======================================================= */

  if (
    fileName ===
    "HoroscopeMonthBestPeriods.tsx"
  ) {
    return localizeHoroscopeMonthBestPeriods(
      source,
      locale,
    );
  }

  /* =======================================================
     PAGE — DELICATE PERIODS
  ======================================================= */

  if (
    fileName ===
    "HoroscopeMonthDelicatePeriods.tsx"
  ) {
    return localizeHoroscopeMonthDelicatePeriods(
      source,
      locale,
    );
  }

  /* =======================================================
     PAGES — WEEK 1 → WEEK 4
  ======================================================= */

  if (
    fileName ===
      "HoroscopeMonthWeek1.tsx" ||
    fileName ===
      "HoroscopeMonthWeek2.tsx" ||
    fileName ===
      "HoroscopeMonthWeek3.tsx" ||
    fileName ===
      "HoroscopeMonthWeek4.tsx"
  ) {
    return localizeHoroscopeMonthWeeks(
      source,
      locale,
    );
  }

  /* =======================================================
     PAGE — MANTRA
  ======================================================= */

  if (
    fileName ===
    "HoroscopeMonthMantra.tsx"
  ) {
    return localizeHoroscopeMonthMantra(
      source,
      locale,
    );
  }

  return source;
}
