import {
  buildYearlySeed,
  createYearlyOpportunityTexts,
  pickVariant,
} from "./index";

import type {
  YearlyHoroscopeIdentity,
  YearlyHoroscopePeriod,
  YearlyOpportunityResult,
} from "./types";

/*
|--------------------------------------------------------------------------
| Paramètres de la section Opportunités
|--------------------------------------------------------------------------
*/

export type BuildYearlyOpportunityParams = {
  identity: YearlyHoroscopeIdentity;
  period: YearlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Titres possibles
|--------------------------------------------------------------------------
*/

const OPPORTUNITY_TITLES = [
  "Les opportunités qui marqueront votre année",
  "Une année d’ouverture et de possibilités",
  "De nouvelles portes pourraient s’ouvrir",
  "Votre potentiel d’évolution prend de l’ampleur",
  "Une année pour saisir les bonnes occasions",
  "Des possibilités à reconnaître et à construire",
  "Votre année avance vers de nouvelles perspectives",
  "Les occasions porteuses de votre année",
];

/*
|--------------------------------------------------------------------------
| Construction de la section Opportunités
|--------------------------------------------------------------------------
*/

export function buildYearlyOpportunity({
  identity,
  period,
}: BuildYearlyOpportunityParams): YearlyOpportunityResult {
  /*
  |--------------------------------------------------------------------------
  | Banque de textes
  |--------------------------------------------------------------------------
  */

  const texts =
    createYearlyOpportunityTexts();

  /*
  |--------------------------------------------------------------------------
  | Graine déterministe
  |--------------------------------------------------------------------------
  */

  const seed =
    buildYearlySeed({
      identity,
      period,
      section: "opportunity",
    });

  /*
  |--------------------------------------------------------------------------
  | Score d’opportunités
  |--------------------------------------------------------------------------
  |
  | Le score varie entre 58 et 95.
  |
  */

  const score =
    58 +
    (Math.abs(seed) % 38);

  /*
  |--------------------------------------------------------------------------
  | Texte principal
  |--------------------------------------------------------------------------
  */

  const mainOpportunityText =
    pickVariant(
      texts.mainOpportunity,
      seed,
      29,
    );

  const keyPeriodText =
    pickVariant(
      texts.keyPeriods,
      seed,
      67,
    );

  const actionText =
    pickVariant(
      texts.action,
      seed,
      103,
    );

  const text =
    `${mainOpportunityText} ${keyPeriodText} ${actionText}`;

  /*
  |--------------------------------------------------------------------------
  | Points importants
  |--------------------------------------------------------------------------
  */

  const highlights = [
    pickVariant(
      texts.professionalOpportunity,
      seed,
      41,
    ),

    pickVariant(
      texts.financialOpportunity,
      seed,
      59,
    ),

    pickVariant(
      texts.relationshipOpportunity,
      seed,
      83,
    ),

    pickVariant(
      texts.personalOpportunity,
      seed,
      127,
    ),
  ];

  /*
  |--------------------------------------------------------------------------
  | Résultat final
  |--------------------------------------------------------------------------
  */

  return {
    title:
      pickVariant(
        OPPORTUNITY_TITLES,
        seed,
        7,
      ),

    score,

    introduction:
      pickVariant(
        texts.introduction,
        seed,
        13,
      ),

    text,

    highlights,

    advice:
      pickVariant(
        texts.caution,
        seed,
        149,
      ),

    conclusion:
      pickVariant(
        texts.conclusion,
        seed,
        173,
      ),
  };
}
