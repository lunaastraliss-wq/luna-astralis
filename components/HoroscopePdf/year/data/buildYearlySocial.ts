import {
  buildYearlySeed,
  createYearlySocialTexts,
  pickVariant,
} from "./index";

import type {
  YearlyHoroscopeIdentity,
  YearlyHoroscopePeriod,
  YearlySocialResult,
} from "./types";

/*
|--------------------------------------------------------------------------
| Paramètres de la section Vie sociale et relations
|--------------------------------------------------------------------------
*/

export type BuildYearlySocialParams = {
  identity: YearlyHoroscopeIdentity;
  period: YearlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Titres possibles
|--------------------------------------------------------------------------
*/

const SOCIAL_TITLES = [
  "Une année pour enrichir vos relations",
  "Votre vie sociale entre dans une nouvelle phase",
  "Des liens plus sincères se construisent",
  "Une année de rencontres et de rapprochements",
  "Votre entourage évolue avec vous",
  "Une nouvelle dynamique relationnelle s’installe",
  "Vos relations gagnent en profondeur",
  "Une année pour mieux choisir votre entourage",
];

/*
|--------------------------------------------------------------------------
| Construction de la section Vie sociale et relations
|--------------------------------------------------------------------------
*/

export function buildYearlySocial({
  identity,
  period,
}: BuildYearlySocialParams): YearlySocialResult {
  /*
  |--------------------------------------------------------------------------
  | Banque de textes
  |--------------------------------------------------------------------------
  */

  const texts =
    createYearlySocialTexts();

  /*
  |--------------------------------------------------------------------------
  | Graine déterministe
  |--------------------------------------------------------------------------
  */

  const seed =
    buildYearlySeed({
      identity,
      period,
      section: "social",
    });

  /*
  |--------------------------------------------------------------------------
  | Score relationnel
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

  const generalText =
    pickVariant(
      texts.general,
      seed,
      29,
    );

  const communicationText =
    pickVariant(
      texts.communication,
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
    `${generalText} ${communicationText} ${keyPeriodText}`;

  /*
  |--------------------------------------------------------------------------
  | Points importants
  |--------------------------------------------------------------------------
  */

  const highlights = [
    pickVariant(
      texts.friendships,
      seed,
      41,
    ),

    pickVariant(
      texts.family,
      seed,
      59,
    ),

    pickVariant(
      texts.newConnections,
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
        SOCIAL_TITLES,
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
