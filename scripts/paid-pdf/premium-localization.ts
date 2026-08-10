import {
  localizePremiumAspects,
} from "./premium-aspects-localization";

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
   * Les autres sections Premium
   * seront ajoutées ici progressivement :
   *
   * PdfElements.tsx
   * PdfModalities.tsx
   * PdfHouses.tsx
   * PdfDominants.tsx
   * PdfRelationships.tsx
   * PdfCareer.tsx
   * PdfPremiumSynthesis.tsx
   */

  return source;
}
