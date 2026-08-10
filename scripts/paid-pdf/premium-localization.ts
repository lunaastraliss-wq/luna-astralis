import {
  localizePremiumAspects,
} from "./premium-aspects-localization";

import {
  localizePremiumCover,
} from "./premium-cover-localization";

import {
  localizePremiumDominants,
} from "./premium-dominants-localization";

import {
  localizePremiumElements,
} from "./premium-elements-localization";

import {
  localizePremiumModalities,
} from "./premium-modalities-localization";

export type PaidPdfLocale =
  | "fr"
  | "en"
  | "es"
  | "de"
  | "it"
  | "pt";

type LocalizePremiumFileOptions = {
  source: string;
  locale: PaidPdfLocale;
  filePath: string;
  fileName: string;
};

export function localizePremiumFile({
  source,
  locale,
  filePath,
  fileName,
}: LocalizePremiumFileOptions): string {
  const normalizedPath =
    filePath.replace(/\\/g, "/");

  /*
   * Ce module ne doit jamais toucher
   * aux autres familles de PDF.
   */
  if (
    !normalizedPath.includes(
      "/PremiumPdf/",
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
   * Couverture Premium.
   */
  if (
    fileName === "PdfCover.tsx"
  ) {
    return localizePremiumCover(
      source,
      locale,
    );
  }

  /*
   * Pages des aspects Premium.
   */
  if (
    fileName === "PdfAspects.tsx"
  ) {
    return localizePremiumAspects(
      source,
      locale,
    );
  }

  /*
   * Pages des dominantes Premium.
   */
  if (
    fileName === "PdfDominants.tsx"
  ) {
    return localizePremiumDominants(
      source,
      locale,
    );
  }

  /*
   * Page des quatre éléments Premium.
   */
  if (
    fileName === "PdfElements.tsx"
  ) {
    return localizePremiumElements(
      source,
      locale,
    );
  }

  /*
   * Page des modalités Premium.
   */
  if (
    fileName === "PdfModalities.tsx"
  ) {
    return localizePremiumModalities(
      source,
      locale,
    );
  }

  /*
   * Les autres sections Premium
   * seront ajoutées ici progressivement :
   *
   * PdfHouses.tsx
   * PdfRelationships.tsx
   * PdfCareer.tsx
   * PdfPremiumSynthesis.tsx
   */

  return source;
}
