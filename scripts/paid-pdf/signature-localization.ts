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

import {
  localizeSignatureHouses,
} from "./signature-houses-localization";

import {
  localizeSignatureAspects,
} from "./signature-aspects-localization";

import {
  localizeSignatureDominants,
} from "./signature-dominants-localization";

import {
  localizeSignatureStrengths,
} from "./signature-strengths-localization";

import {
  localizeSignatureChallenges,
} from "./signature-challenges-localization";

import {
  localizeSignatureRelationships,
} from "./signature-relationships-localization";

import {
  localizeSignatureCareer,
} from "./signature-career-localization";

import {
  localizeSignatureLifePurpose,
} from "./signature-life-purpose-localization";

import {
  localizeSignatureSoulPath,
} from "./signature-soul-path-localization";

import {
  localizeSignatureInnerWorld,
} from "./signature-inner-world-localization";

import {
  localizeSignatureLifeBlocks,
} from "./signature-life-blocks-localization";

import {
  localizeSignatureHiddenTalents,
} from "./signature-hidden-talents-localization";

import {
  localizeSignatureIntegrationGuide,
} from "./signature-integration-guide-localization";

import {
  localizeSignatureSynthesis,
} from "./signature-synthesis-localization";

import {
  localizeSignatureConclusion,
} from "./signature-conclusion-localization";

type LocalizeSignatureFileOptions = {
  source: string;
  locale: PaidPdfLocale;
  filePath: string;
  fileName: string;
};

function normalizeColonSpacing(
  text: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return text;
  }

  return text.replace(/\s+:/g, ":");
}


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
    return normalizeColonSpacing(
      localizeSignaturePlanet(
      source,
      locale,
      ),
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
    return normalizeColonSpacing(
      localizeSignatureElements(
      source,
      locale,
      ),
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
    return normalizeColonSpacing(
      localizeSignatureModalities(
      source,
      locale,
      ),
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
    return normalizeColonSpacing(
      localizeSignatureHouses(
      source,
      locale,
      ),
      locale,
    );
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
    return normalizeColonSpacing(
      localizeSignatureAspects(
      source,
      locale,
      ),
      locale,
    );
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
    return normalizeColonSpacing(
      localizeSignatureDominants(
      source,
      locale,
      ),
      locale,
    );
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
    return normalizeColonSpacing(
      localizeSignatureStrengths(
      source,
      locale,
      ),
      locale,
    );
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
    return normalizeColonSpacing(
      localizeSignatureChallenges(
      source,
      locale,
      ),
      locale,
    );
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
    return normalizeColonSpacing(
      localizeSignatureRelationships(
      source,
      locale,
      ),
      locale,
    );
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
    return normalizeColonSpacing(
      localizeSignatureCareer(
      source,
      locale,
      ),
      locale,
    );
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
    return normalizeColonSpacing(
      localizeSignatureLifePurpose(
      source,
      locale,
      ),
      locale,
    );
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
    return normalizeColonSpacing(
      localizeSignatureSoulPath(
      source,
      locale,
      ),
      locale,
    );
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
    return normalizeColonSpacing(
      localizeSignatureInnerWorld(
      source,
      locale,
      ),
      locale,
    );
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
    return normalizeColonSpacing(
      localizeSignatureLifeBlocks(
      source,
      locale,
      ),
      locale,
    );
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
    return normalizeColonSpacing(
      localizeSignatureHiddenTalents(
      source,
      locale,
      ),
      locale,
    );
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
    return normalizeColonSpacing(
      localizeSignatureIntegrationGuide(
      source,
      locale,
      ),
      locale,
    );
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
    return normalizeColonSpacing(
      localizeSignatureSynthesis(
      source,
      locale,
      ),
      locale,
    );
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
    return normalizeColonSpacing(
      localizeSignatureConclusion(
      source,
      locale,
      ),
      locale,
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Autres fichiers Signature
  |--------------------------------------------------------------------------
  */

  return source;
}
