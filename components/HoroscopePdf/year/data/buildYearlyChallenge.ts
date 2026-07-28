import {
  buildYearlySeed,
  createYearlyChallengeTexts,
  pickVariant,
} from "./index";

import type {
  YearlyChallengeResult,
  YearlyHoroscopeIdentity,
  YearlyHoroscopePeriod,
} from "./types";

/*
|--------------------------------------------------------------------------
| Paramètres de la section Défis
|--------------------------------------------------------------------------
*/

export type BuildYearlyChallengeParams = {
  identity: YearlyHoroscopeIdentity;
  period: YearlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Titres possibles
|--------------------------------------------------------------------------
*/

const CHALLENGE_TITLES = [
  "Les défis qui feront évoluer votre année",
  "Une année de dépassement et de transformation",
  "Vos principaux défis de l’année",
  "Des obstacles porteurs d’évolution",
  "Une année pour dépasser vos anciennes limites",
  "Les leçons cachées derrière vos défis",
  "Votre force se construit dans l’adaptation",
  "Une année pour transformer les tensions",
];

/*
|--------------------------------------------------------------------------
| Construction de la section Défis
|--------------------------------------------------------------------------
*/

export function buildYearlyChallenge({
  identity,
  period,
}: BuildYearlyChallengeParams): YearlyChallengeResult {
  /*
  |--------------------------------------------------------------------------
  | Banque de textes
  |--------------------------------------------------------------------------
  */

  const texts =
    createYearlyChallengeTexts();

  /*
  |--------------------------------------------------------------------------
  | Graine déterministe
  |--------------------------------------------------------------------------
  */

  const seed =
    buildYearlySeed({
      identity,
      period,
      section: "challenge",
    });

  /*
  |--------------------------------------------------------------------------
  | Score de maîtrise des défis
  |--------------------------------------------------------------------------
  |
  | Le score varie entre 55 et 94.
  |
  */

  const score =
    55 +
    (Math.abs(seed) % 40);

  /*
  |--------------------------------------------------------------------------
  | Texte principal
  |--------------------------------------------------------------------------
  */

  const mainChallengeText =
    pickVariant(
      texts.mainChallenge,
      seed,
      29,
    );

  const hiddenLessonText =
    pickVariant(
      texts.hiddenLesson,
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
    `${mainChallengeText} ${hiddenLessonText} ${keyPeriodText}`;

  /*
  |--------------------------------------------------------------------------
  | Points importants
  |--------------------------------------------------------------------------
  */

  const highlights = [
    pickVariant(
      texts.emotionalChallenge,
      seed,
      41,
    ),

    pickVariant(
      texts.practicalChallenge,
      seed,
      59,
    ),

    pickVariant(
      texts.relationshipChallenge,
      seed,
      83,
    ),

    pickVariant(
      texts.transformation,
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
        CHALLENGE_TITLES,
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
