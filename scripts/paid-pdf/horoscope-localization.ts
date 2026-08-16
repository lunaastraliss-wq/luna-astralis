import type {
  PaidPdfLocale,
} from "./premium-localization";

import {
  localizeDailyHoroscopeBuilder,
  localizeHoroscopePdfUtils,
} from "./daily-horoscope-localization";

import {
  localizeHoroscopeCover,
} from "./horoscope-cover-localization";

import {
  localizeHoroscopeWelcome,
} from "./horoscope-welcome-localization";

import {
  localizeHoroscopeSummary,
} from "./horoscope-summary-localization";

import {
  localizeHoroscopeEnergy,
} from "./horoscope-energy-localization";

import {
  localizeHoroscopePlanets,
} from "./horoscope-planets-localization";

import {
  localizeHoroscopeLove,
} from "./horoscope-love-localization";

import {
  localizeHoroscopeCareer,
} from "./horoscope-career-localization";

import {
  localizeHoroscopeMoney,
} from "./horoscope-money-localization";

type LocalizeHoroscopeFileOptions = {
  source: string;
  locale: PaidPdfLocale;
  filePath: string;
  fileName: string;
};

export function localizeHoroscopeFile({
  source,
  locale,
  filePath,
  fileName,
}: LocalizeHoroscopeFileOptions): string {
  const normalizedPath =
    filePath.replace(/\\/g, "/");

  /*
   * Ce module ne doit jamais toucher
   * aux autres familles de PDF.
   */
  if (
    !normalizedPath.includes(
      "/HoroscopePdf/",
    )
  ) {
    return source;
  }

  /*
   * Français = fichier source.
   * Aucun traitement supplémentaire.
   */
  if (locale === "fr") {
    return source;
  }

  /*
   * Builder de l'horoscope du jour.
   */
  if (
    fileName === "buildDailyHoroscope.ts"
  ) {
    return localizeDailyHoroscopeBuilder(
      source,
      locale,
    );
  }

  /*
   * Utilitaires Horoscope.
   */
  if (
    fileName === "HoroscopePdfUtils.ts"
  ) {
    return localizeHoroscopePdfUtils(
      source,
      locale,
    );
  }

  /*
   * Couverture Horoscope.
   */
  if (
    fileName === "HoroscopeCover.tsx"
  ) {
    return localizeHoroscopeCover(
      source,
      locale,
    );
  }

  /*
   * Page d'introduction Horoscope.
   */
  if (
    fileName === "HoroscopeWelcome.tsx"
  ) {
    return localizeHoroscopeWelcome(
      source,
      locale,
    );
  }

  /*
   * Page de résumé Horoscope.
   */
  if (
    fileName === "HoroscopeSummary.tsx"
  ) {
    return localizeHoroscopeSummary(
      source,
      locale,
    );
  }

  /*
   * Page énergie Horoscope.
   */
  if (
    fileName === "HoroscopeEnergy.tsx"
  ) {
    return localizeHoroscopeEnergy(
      source,
      locale,
    );
  }

  /*
   * Page influences planétaires Horoscope.
   */
  if (
    fileName === "HoroscopePlanets.tsx"
  ) {
    return localizeHoroscopePlanets(
      source,
      locale,
    );
  }

  /*
   * Page amour et relations Horoscope.
   */
  if (
    fileName === "HoroscopeLove.tsx"
  ) {
    return localizeHoroscopeLove(
      source,
      locale,
    );
  }

  /*
   * Page carrière Horoscope.
   */
  if (
    fileName === "HoroscopeCareer.tsx"
  ) {
    return localizeHoroscopeCareer(
      source,
      locale,
    );
  }

  /*
   * Page finances Horoscope.
   */
  if (
    fileName === "HoroscopeMoney.tsx"
  ) {
    return localizeHoroscopeMoney(
      source,
      locale,
    );
  }

  return source;
}
