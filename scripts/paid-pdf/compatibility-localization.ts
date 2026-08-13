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
   * Page 1 — Couverture.
   */
  if (
    fileName === "CompatibilityCover.tsx"
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
    fileName === "CompatibilityWheels.tsx"
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
    fileName === "CompatibilityWelcome.tsx"
  ) {
    return localizeCompatibilityWelcome(
      source,
      locale,
    );
  }

  return source;
}
