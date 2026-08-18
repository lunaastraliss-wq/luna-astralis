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

import {
  localizeHoroscopeHealth,
} from "./horoscope-health-localization";

import {
  localizeHoroscopeSocial,
} from "./horoscope-social-localization";

import {
  localizeHoroscopeChallenges,
} from "./horoscope-challenges-localization";

import {
  localizeHoroscopeOpportunities,
} from "./horoscope-opportunities-localization";

import {
  localizeHoroscopeLucky,
} from "./horoscope-lucky-localization";

import {
  localizeHoroscopeConclusion,
} from "./horoscope-conclusion-localization";

import {
  localizeHoroscopeExplore,
} from "./horoscope-explore-localization";

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
   * Ce module traite l'horoscope du JOUR
   * ainsi que les composants communs Horoscope.
   *
   * Les fichiers spécifiques au MONTH sont
   * gérés séparément par :
   *
   * monthly-horoscope-localization.ts
   */

  /*
   * IMPORTANT :
   * Ne jamais appliquer le localizer JOUR
   * aux fichiers spécifiques du MONTH.
   */
  if (
    normalizedPath.includes(
      "/HoroscopePdf/month/",
    )
  ) {
    return source;
  }

  /*
   * Ce module ne traite que HoroscopePdf.
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
   */
  if (locale === "fr") {
    return source;
  }

  /* =======================================================
     HOROSCOPE DU JOUR
  ======================================================= */

  if (
    fileName ===
    "buildDailyHoroscope.ts"
  ) {
    return localizeDailyHoroscopeBuilder(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopePdfUtils.ts"
  ) {
    return localizeHoroscopePdfUtils(
      source,
      locale,
    );
  }

  /* =======================================================
     PAGES COMMUNES HOROSCOPE
  ======================================================= */

  if (
    fileName ===
    "HoroscopeCover.tsx"
  ) {
    return localizeHoroscopeCover(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeWelcome.tsx"
  ) {
    return localizeHoroscopeWelcome(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeSummary.tsx"
  ) {
    return localizeHoroscopeSummary(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeEnergy.tsx"
  ) {
    return localizeHoroscopeEnergy(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopePlanets.tsx"
  ) {
    return localizeHoroscopePlanets(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeLove.tsx"
  ) {
    return localizeHoroscopeLove(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeCareer.tsx"
  ) {
    return localizeHoroscopeCareer(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeMoney.tsx"
  ) {
    return localizeHoroscopeMoney(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeHealth.tsx"
  ) {
    return localizeHoroscopeHealth(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeSocial.tsx"
  ) {
    return localizeHoroscopeSocial(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeChallenges.tsx"
  ) {
    return localizeHoroscopeChallenges(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeOpportunities.tsx"
  ) {
    return localizeHoroscopeOpportunities(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeLucky.tsx"
  ) {
    return localizeHoroscopeLucky(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeConclusion.tsx"
  ) {
    return localizeHoroscopeConclusion(
      source,
      locale,
    );
  }

  if (
    fileName ===
    "HoroscopeExplore.tsx"
  ) {
    return localizeHoroscopeExplore(
      source,
      locale,
    );
  }

  return source;
}
