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

  /*
   * =======================================================
   * DÉTECTION DES FICHIERS MONTH
   * =======================================================
   *
   * - Tous les fichiers du dossier HoroscopePdf/month/
   * - Le builder principal du mois
   * - Le builder des influences planétaires mensuelles
   */

  const isMonthlyHoroscope =
    normalizedPath.includes(
      "/HoroscopePdf/month/",
    ) ||
    fileName ===
      "buildMonthlyHoroscope.ts" ||
    fileName ===
      "buildMonthlyPlanetaryInfluences.ts";

  if (!isMonthlyHoroscope) {
    return source;
  }

  /*
   * Français = source originale.
   */
  if (locale === "fr") {
    return source;
  }

  /* =======================================================
     BUILDERS MONTH
  ======================================================= */

  /*
   * Builder principal du rapport mensuel.
   */
  if (
    fileName ===
    "buildMonthlyHoroscope.ts"
  ) {
    return localizeMonthlyHoroscopeBuilder(
      source,
      locale,
    );
  }

  /*
   * Builder spécifique des influences
   * planétaires mensuelles.
   *
   * Important :
   * celui-ci produit directement :
   *
   * - Influence dominante du mois
   * - Tendance mensuelle
   * - introduction mensuelle
   * - title
   * - description
   * - advice
   */
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

  /*
   * Fichier MONTH sans localizer spécifique :
   * on le laisse intact.
   */
  return source;
}
