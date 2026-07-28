import {
  buildYearlySeed,
  createYearlyHealthTexts,
  pickVariant,
} from "./index";

import type {
  YearlyHealthResult,
  YearlyHoroscopeIdentity,
  YearlyHoroscopePeriod,
} from "./types";

/*
|--------------------------------------------------------------------------
| Paramètres de la section Bien-être et énergie
|--------------------------------------------------------------------------
*/

export type BuildYearlyHealthParams = {
  identity: YearlyHoroscopeIdentity;
  period: YearlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Titres possibles
|--------------------------------------------------------------------------
*/

const HEALTH_TITLES = [
  "Une année pour retrouver votre équilibre",
  "Votre énergie demande une attention plus consciente",
  "Une année de recentrage et de récupération",
  "Votre bien-être se construit dans la régularité",
  "Un nouvel équilibre entre action et repos",
  "Votre vitalité évolue au fil des saisons",
  "Une année pour mieux respecter votre rythme",
  "Votre énergie retrouve des bases plus solides",
];

/*
|--------------------------------------------------------------------------
| Construction de la section Bien-être et énergie
|--------------------------------------------------------------------------
*/

export function buildYearlyHealth({
  identity,
  period,
}: BuildYearlyHealthParams): YearlyHealthResult {
  /*
  |--------------------------------------------------------------------------
  | Banque de textes
  |--------------------------------------------------------------------------
  */

  const texts =
    createYearlyHealthTexts();

  /*
  |--------------------------------------------------------------------------
  | Graine déterministe
  |--------------------------------------------------------------------------
  */

  const seed =
    buildYearlySeed({
      identity,
      period,
      section: "health",
    });

  /*
  |--------------------------------------------------------------------------
  | Score de bien-être
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
  */

  const energyText =
    pickVariant(
      texts.energy,
      seed,
      29,
    );

  const emotionalText =
    pickVariant(
      texts.emotionalBalance,
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
    `${energyText} ${emotionalText} ${keyPeriodText}`;

  /*
  |--------------------------------------------------------------------------
  | Points importants
  |--------------------------------------------------------------------------
  */

  const highlights = [
    pickVariant(
      texts.rest,
      seed,
      41,
    ),

    pickVariant(
      texts.habits,
      seed,
      59,
    ),

    pickVariant(
      texts.challenge,
      seed,
      83,
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
        HEALTH_TITLES,
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
