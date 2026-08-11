import type {
  PaidPdfLocale,
} from "./premium-localization";

import {
  localizeSignaturePlanet,
} from "./signature-planet-localization";

import {
  localizeSignatureElements,
} from "./signature-elements-localization";

import {
  localizeSignatureModalities,
} from "./signature-modalities-localization";

type LocalizeSignatureFileOptions = {
  source: string;
  locale: PaidPdfLocale;
  filePath: string;
  fileName: string;
};

/*
|--------------------------------------------------------------------------
| Signature PDF localizer
|--------------------------------------------------------------------------
|
| Routeur principal pour les fichiers Signature.
|
| L’objectif est de reproduire la même architecture que Premium :
|
| - signature-summary-localization.ts
| - signature-planet-localization.ts
| - signature-elements-localization.ts
| - signature-modalities-localization.ts
| - signature-houses-localization.ts
| - signature-aspects-localization.ts
| - signature-dominants-localization.ts
| - signature-strengths-localization.ts
| - signature-challenges-localization.ts
| - signature-relationships-localization.ts
| - signature-career-localization.ts
| - signature-life-purpose-localization.ts
| - signature-soul-path-localization.ts
| - signature-inner-world-localization.ts
| - signature-life-blocks-localization.ts
| - signature-hidden-talents-localization.ts
| - signature-integration-guide-localization.ts
| - signature-synthesis-localization.ts
| - signature-conclusion-localization.ts
|
|--------------------------------------------------------------------------
*/

export function localizeSignatureFile({
  source,
  locale,
  filePath,
  fileName,
}: LocalizeSignatureFileOptions): string {
  const normalizedPath =
    filePath.replace(/\\/g, "/");

  /*
  |--------------------------------------------------------------------------
  | Sécurité
  |--------------------------------------------------------------------------
  |
  | Ce module ne doit jamais toucher
  | aux autres familles de PDF.
  |
  |--------------------------------------------------------------------------
  */

  if (
    !normalizedPath.includes(
      "/SignaturePdf/",
    )
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Français
  |--------------------------------------------------------------------------
  |
  | Le français reste le fichier source.
  |
  |--------------------------------------------------------------------------
  */

  if (locale === "fr") {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Couverture Signature
  |--------------------------------------------------------------------------
  |
  | Déjà gérée directement par les dictionnaires i18n.
  |
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureCover.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Roue astrologique Signature
  |--------------------------------------------------------------------------
  |
  | Déjà gérée directement par les dictionnaires i18n.
  |
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureWheel.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Introduction Signature
  |--------------------------------------------------------------------------
  |
  | Déjà branchée sur les dictionnaires FR / EN / ES / DE / IT / PT.
  |
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureWelcome.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Synthèse des trois grands piliers
  |--------------------------------------------------------------------------
  |
  | Le composant est maintenant directement multilingue.
  |
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureSummary.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Pages des planètes
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignaturePlanet.tsx"
  ) {
    return localizeSignaturePlanet(
      source,
      locale,
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Éléments
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureElements.tsx"
  ) {
    return localizeSignatureElements(
      source,
      locale,
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Modalités
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureModalities.tsx"
  ) {
    return localizeSignatureModalities(
      source,
      locale,
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Maisons
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureHouses.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Aspects
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureAspects.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Dominantes
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureDominants.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Forces
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureStrengths.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Défis
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureChallenges.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Relations
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureRelationships.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Carrière
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureCareer.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Mission de vie
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureLifePurpose.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Chemin de l’âme
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureSoulPath.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Monde intérieur
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureInnerWorld.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Blocages de vie
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureLifeBlocks.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Talents cachés
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureHiddenTalents.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Guide d’intégration
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureIntegrationGuide.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Synthèse finale
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureSynthesis.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Conclusion
  |--------------------------------------------------------------------------
  */

  if (
    fileName ===
    "PdfSignatureConclusion.tsx"
  ) {
    return source;
  }

  /*
  |--------------------------------------------------------------------------
  | Autres fichiers Signature
  |--------------------------------------------------------------------------
  */

  return source;
}
