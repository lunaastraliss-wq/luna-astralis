import type {
  PaidPdfLocale,
} from "./premium-localization";

import {
  localizeMonthlyHoroscopeBuilder,
} from "./monthly-horoscope-builder-localization";

import {
  localizeHoroscopeMonthOverview,
} from "./month-horoscope-overview-localization";

import {
  localizeHoroscopeMonthMajorEnergies,
} from "./month-horoscope-major-energies-localization";

import {
  localizeHoroscopeMonthMajorAspects,
} from "./month-horoscope-major-aspects-localization";

import {
  localizeHoroscopeMonthDominantPlanets,
} from "./month-horoscope-dominant-planets-localization";

import {
  localizeHoroscopeMonthActivatedHouses,
} from "./month-horoscope-activated-houses-localization";

import {
  localizeHoroscopeMonthMoonPhases,
} from "./month-horoscope-moon-phases-localization";

import {
  localizeHoroscopeMonthAstroEvents,
} from "./month-horoscope-astro-events-localization";

type LocalizeMonthHoroscopeFileOptions = {
  source: string;
  locale: PaidPdfLocale;
  filePath: string;
  fileName: string;
};

export function localizeMonthHoroscopeFile({
  source,
  locale,
  filePath,
  fileName,
}: LocalizeMonthHoroscopeFileOptions): string {
  const normalizedPath =
    filePath.replace(/\\/g, "/");

  const isMonthlyHoroscope =
    normalizedPath.includes(
      "/HoroscopePdf/month/",
    ) ||
    fileName ===
      "buildMonthlyHoroscope.ts";

  if (!isMonthlyHoroscope) {
    return source;
  }

  if (locale === "fr") {
    return source;
  }

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
    "HoroscopeMonthOverview.tsx"
  ) {
    return localizeHoroscopeMonthOverview(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeMonthMajorEnergies.tsx"
  ) {
    return localizeHoroscopeMonthMajorEnergies(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeMonthMajorAspects.tsx"
  ) {
    return localizeHoroscopeMonthMajorAspects(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeMonthDominantPlanets.tsx"
  ) {
    return localizeHoroscopeMonthDominantPlanets(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeMonthActivatedHouses.tsx"
  ) {
    return localizeHoroscopeMonthActivatedHouses(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeMonthMoonPhases.tsx"
  ) {
    return localizeHoroscopeMonthMoonPhases(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeMonthAstroEvents.tsx"
  ) {
    return localizeHoroscopeMonthAstroEvents(
      source,
      locale,
    );
  }

  return source;
}
