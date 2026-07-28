import {
  buildYearlySeed,
  createYearlyFinanceTexts,
  pickVariant,
} from "./index";

import type {
  YearlyFinanceResult,
  YearlyHoroscopeIdentity,
  YearlyHoroscopePeriod,
} from "./types";

/*
|--------------------------------------------------------------------------
| Paramètres de la section Finances
|--------------------------------------------------------------------------
*/

export type BuildYearlyFinanceParams = {
  identity: YearlyHoroscopeIdentity;
  period: YearlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Titres possibles
|--------------------------------------------------------------------------
*/

const FINANCE_TITLES = [
  "Une année pour renforcer votre sécurité financière",
  "Vos finances entrent dans une phase plus structurée",
  "Une gestion plus consciente de vos ressources",
  "Une année de stabilité et de décisions réfléchies",
  "Votre rapport à l’argent évolue",
  "De nouvelles bases financières se construisent",
  "Une année pour mieux protéger vos ressources",
  "Votre équilibre financier gagne en clarté",
];

/*
|--------------------------------------------------------------------------
| Construction de la section Finances
|--------------------------------------------------------------------------
*/

export function buildYearlyFinance({
  identity,
  period,
}: BuildYearlyFinanceParams): YearlyFinanceResult {
  /*
  |--------------------------------------------------------------------------
  | Banque de textes
  |--------------------------------------------------------------------------
  */

  const texts =
    createYearlyFinanceTexts();

  /*
  |--------------------------------------------------------------------------
  | Graine déterministe
  |--------------------------------------------------------------------------
  */

  const seed =
    buildYearlySeed({
      identity,
      period,
      section: "finance",
    });

  /*
  |--------------------------------------------------------------------------
  | Score financier
  |--------------------------------------------------------------------------
  |
  | Le score varie entre 56 et 94.
  |
  */

  const score =
    56 +
    (Math.abs(seed) % 39);

  /*
  |--------------------------------------------------------------------------
  | Texte principal
  |--------------------------------------------------------------------------
  */

  const generalText =
    pickVariant(
      texts.general,
      seed,
      23,
    );

  const investmentText =
    pickVariant(
      texts.investments,
      seed,
      61,
    );

  const keyPeriodText =
    pickVariant(
      texts.keyPeriods,
      seed,
      101,
    );

  const text =
    `${generalText} ${investmentText} ${keyPeriodText}`;

  /*
  |--------------------------------------------------------------------------
  | Points importants
  |--------------------------------------------------------------------------
  */

  const highlights = [
    pickVariant(
      texts.income,
      seed,
      37,
    ),

    pickVariant(
      texts.expenses,
      seed,
      53,
    ),

    pickVariant(
      texts.opportunities,
      seed,
      79,
    ),

    pickVariant(
      texts.risks,
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
        FINANCE_TITLES,
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
