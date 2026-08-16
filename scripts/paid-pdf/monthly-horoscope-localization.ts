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

  return source;
}
