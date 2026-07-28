import {
  buildYearlySeed,
  createYearlyCareerTexts,
  pickVariant,
} from "./index";

import type {
  YearlyCareerResult,
  YearlyHoroscopeIdentity,
  YearlyHoroscopePeriod,
} from "./types";

/*
|--------------------------------------------------------------------------
| Paramètres de la section Travail et carrière
|--------------------------------------------------------------------------
*/

export type BuildYearlyCareerParams = {
  identity: YearlyHoroscopeIdentity;
  period: YearlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Titres possibles
|--------------------------------------------------------------------------
*/

const CAREER_TITLES = [
  "Une année pour construire votre avenir professionnel",
  "Votre carrière entre dans une nouvelle phase",
  "Une progression fondée sur la constance",
  "Vos ambitions prennent une direction plus claire",
  "Une année de consolidation et d’évolution",
  "Votre potentiel professionnel gagne en visibilité",
  "De nouvelles perspectives se dessinent",
  "Une année pour affirmer vos compétences",
];

/*
|--------------------------------------------------------------------------
| Construction de la section Travail et carrière
|--------------------------------------------------------------------------
*/

export function buildYearlyCareer({
  identity,
  period,
}: BuildYearlyCareerParams): YearlyCareerResult {
  /*
  |--------------------------------------------------------------------------
  | Banque de textes
  |--------------------------------------------------------------------------
  */

  const texts =
    createYearlyCareerTexts();

  /*
  |--------------------------------------------------------------------------
  | Graine déterministe
  |--------------------------------------------------------------------------
  */

  const seed =
    buildYearlySeed({
      identity,
      period,
      section: "career",
    });

  /*
  |--------------------------------------------------------------------------
  | Score professionnel
  |--------------------------------------------------------------------------
  |
  | Le score varie entre 57 et 94.
  |
  */

  const score =
    57 +
    (Math.abs(seed) % 38);

  /*
  |--------------------------------------------------------------------------
  | Texte principal
  |--------------------------------------------------------------------------
  |
  | La tendance générale, l’évolution professionnelle et la période
  | importante sont réunies pour créer une lecture annuelle complète.
  |
  */

  const generalText =
    pickVariant(
      texts.general,
      seed,
      29,
    );

  const evolutionText =
    pickVariant(
      texts.professionalEvolution,
      seed,
      67,
    );

  const keyPeriodText =
    pickVariant(
      texts.keyPeriods,
      seed,
      103,
    );

  const text =
    `${generalText} ${evolutionText} ${keyPeriodText}`;

  /*
  |--------------------------------------------------------------------------
  | Points importants
  |--------------------------------------------------------------------------
  */

  const highlights = [
    pickVariant(
      texts.projects,
      seed,
      41,
    ),

    pickVariant(
      texts.relationships,
      seed,
      59,
    ),

    pickVariant(
      texts.opportunities,
      seed,
      83,
    ),

    pickVariant(
      texts.challenge,
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
        CAREER_TITLES,
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
        texts.advice,
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
