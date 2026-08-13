import type {
  PaidPdfLocale,
} from "./premium-localization";

import {
  localizeCompatibilityCover,
} from "./compatibility-cover-localization";

import {
  localizeCompatibilityWheels,
} from "./compatibility-wheels-localization";

import {
  localizeCompatibilityWelcome,
} from "./compatibility-welcome-localization";

import {
  localizeCompatibilityProfiles,
} from "./compatibility-profiles-localization";

import {
  localizeCompatibilityScores,
} from "./compatibility-scores-localization";

import {
  localizeCompatibilityPillars,
} from "./compatibility-pillars-localization";

import {
  localizeCompatibilityEmotional,
} from "./compatibility-emotional-localization";

import {
  localizeCompatibilityCommunication,
} from "./compatibility-communication-localization";

import {
  localizeCompatibilityLove,
} from "./compatibility-love-localization";

import {
  localizeCompatibilityCouple,
} from "./compatibility-couple-localization";

import {
  localizeCompatibilityPlanets,
} from "./compatibility-planets-localization";

import {
  localizeCompatibilityPlanetConnections,
} from "./compatibility-planet-connections-localization";

import {
  localizeCompatibilityAspects,
} from "./compatibility-aspects-localization";

import {
  localizeCompatibilityLife,
} from "./compatibility-life-localization";

import {
  localizeCompatibilitySummary,
} from "./compatibility-summary-localization";

import {
  localizeCompatibilityDocument,
} from "./compatibility-document-localization";

type LocalizeCompatibilityFileOptions = {
  source: string;
  locale: PaidPdfLocale;
  filePath: string;
  fileName: string;
};

export function localizeCompatibilityFile({
  source,
  locale,
  filePath,
  fileName,
}: LocalizeCompatibilityFileOptions): string {
  const normalizedPath =
    filePath.replace(/\\/g, "/");

  /*
   * Ce module ne doit jamais toucher
   * aux autres familles de PDF.
   */
  if (
    !normalizedPath.includes(
      "/CompatibilityPdf/",
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

  /*
   * Document principal.
   */
  if (
    fileName ===
    "CompatibilityPdfDocument.tsx"
  ) {
    return localizeCompatibilityDocument(
      source,
      locale,
    );
  }

  /*
   * Page 1 — Couverture.
   */
  if (
    fileName ===
    "CompatibilityCover.tsx"
  ) {
    return localizeCompatibilityCover(
      source,
      locale,
    );
  }

  /*
   * Page 2 — Roues astrologiques.
   */
  if (
    fileName ===
    "CompatibilityWheels.tsx"
  ) {
    return localizeCompatibilityWheels(
      source,
      locale,
    );
  }

  /*
   * Page 3 — Introduction.
   */
  if (
    fileName ===
    "CompatibilityWelcome.tsx"
  ) {
    return localizeCompatibilityWelcome(
      source,
      locale,
    );
  }

  /*
   * Page 4 — Profils astrologiques.
   */
  if (
    fileName ===
    "CompatibilityProfiles.tsx"
  ) {
    return localizeCompatibilityProfiles(
      source,
      locale,
    );
  }

  /*
   * Page 5 — Scores de compatibilité.
   */
  if (
    fileName ===
    "CompatibilityScores.tsx"
  ) {
    return localizeCompatibilityScores(
      source,
      locale,
    );
  }

  /*
   * Page 6 — Piliers de la relation.
   */
  if (
    fileName ===
    "CompatibilityPillars.tsx"
  ) {
    return localizeCompatibilityPillars(
      source,
      locale,
    );
  }

  /*
   * Page 7 — Compatibilité émotionnelle.
   */
  if (
    fileName ===
    "CompatibilityEmotional.tsx"
  ) {
    return localizeCompatibilityEmotional(
      source,
      locale,
    );
  }

  /*
   * Page 8 — Communication.
   */
  if (
    fileName ===
    "CompatibilityCommunication.tsx"
  ) {
    return localizeCompatibilityCommunication(
      source,
      locale,
    );
  }

  /*
   * Pages 9 à 12 — Amour.
   */
  if (
    fileName ===
    "CompatibilityLove.tsx"
  ) {
    return localizeCompatibilityLove(
      source,
      locale,
    );
  }

  /*
   * Pages 13 à 16 — Dynamique du couple.
   */
  if (
    fileName ===
    "CompatibilityCouple.tsx"
  ) {
    return localizeCompatibilityCouple(
      source,
      locale,
    );
  }

  /*
   * Pages 17 à 21 — Planètes.
   */
  if (
    fileName ===
    "CompatibilityPlanets.tsx"
  ) {
    return localizeCompatibilityPlanets(
      source,
      locale,
    );
  }

  /*
   * Pages 22 à 28 — Connexions planétaires.
   */
  if (
    fileName ===
    "CompatibilityPlanetConnections.tsx"
  ) {
    return localizeCompatibilityPlanetConnections(
      source,
      locale,
    );
  }

  /*
   * Pages 29 à 36 — Aspects.
   */
  if (
    fileName ===
    "CompatibilityAspects.tsx"
  ) {
    return localizeCompatibilityAspects(
      source,
      locale,
    );
  }

  /*
   * Pages 37 à 44 — Vie commune.
   */
  if (
    fileName ===
    "CompatibilityLife.tsx"
  ) {
    return localizeCompatibilityLife(
      source,
      locale,
    );
  }

  /*
   * Pages 45 à 50 — Synthèse.
   */
  if (
    fileName ===
    "CompatibilitySummary.tsx"
  ) {
    return localizeCompatibilitySummary({
      source,
      locale,
    });
  }

  /*
   * Tout autre fichier Compatibility
   * reste inchangé.
   */
  return source;
}
