import {
  buildYearlySeed,
  createYearlyLoveTexts,
  pickVariant,
} from "./index";

import type {
  YearlyHoroscopeIdentity,
  YearlyHoroscopePeriod,
  YearlyLoveResult,
} from "./types";

/*
|--------------------------------------------------------------------------
| Paramètres de la section Amour
|--------------------------------------------------------------------------
*/

export type BuildYearlyLoveParams = {
  identity: YearlyHoroscopeIdentity;
  period: YearlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Titres possibles
|--------------------------------------------------------------------------
*/

const LOVE_TITLES = [
  "Une année pour écouter votre cœur",
  "Votre vie affective prend une nouvelle direction",
  "Une année de rapprochement et de vérité",
  "Votre cœur recherche un nouvel équilibre",
  "Un nouveau cycle dans votre vie sentimentale",
  "L’amour vous invite à plus d’authenticité",
  "Une année riche en prises de conscience",
  "Vos sentiments deviennent plus clairs",
];

/*
|--------------------------------------------------------------------------
| Construction de la section Amour
|--------------------------------------------------------------------------
*/

export function buildYearlyLove({
  identity,
  period,
}: BuildYearlyLoveParams): YearlyLoveResult {
  /*
  |--------------------------------------------------------------------------
  | Banque de textes
  |--------------------------------------------------------------------------
  */

  const texts =
    createYearlyLoveTexts();

  /*
  |--------------------------------------------------------------------------
  | Graine déterministe
  |--------------------------------------------------------------------------
  |
  | La graine dépend de la personne, de l’année et de la section.
  | Le résultat demeure donc identique pour une même personne et une même
  | année.
  |
  */

  const seed =
    buildYearlySeed({
      identity,
      period,
      section: "love",
    });

  /*
  |--------------------------------------------------------------------------
  | Score amoureux
  |--------------------------------------------------------------------------
  |
  | Le score varie entre 58 et 94.
  |
  */

  const score =
    58 +
    (Math.abs(seed) % 37);

  /*
  |--------------------------------------------------------------------------
  | Texte principal
  |--------------------------------------------------------------------------
  |
  | La tendance générale, le climat émotionnel et la période importante
  | sont réunis afin de créer un texte annuel plus complet.
  |
  */

  const generalText =
    pickVariant(
      texts.general,
      seed,
      23,
    );

  const emotionalText =
    pickVariant(
      texts.emotionalClimate,
      seed,
      71,
    );

  const keyPeriodText =
    pickVariant(
      texts.keyPeriods,
      seed,
      97,
    );

  const text =
    `${generalText} ${emotionalText} ${keyPeriodText}`;

  /*
  |--------------------------------------------------------------------------
  | Points importants
  |--------------------------------------------------------------------------
  |
  | Les trois éléments peuvent être utilisés directement dans la page
  | commune HoroscopeLove.tsx.
  |
  */

  const highlights = [
    pickVariant(
      texts.couple,
      seed,
      37,
    ),

    pickVariant(
      texts.single,
      seed,
      53,
    ),

    pickVariant(
      texts.challenge,
      seed,
      89,
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
        LOVE_TITLES,
        seed,
        5,
      ),

    score,

    introduction:
      pickVariant(
        texts.introduction,
        seed,
        11,
      ),

    text,

    highlights,

    advice:
      pickVariant(
        texts.advice,
        seed,
        107,
      ),

    conclusion:
      pickVariant(
        texts.conclusion,
        seed,
        131,
      ),
  };
}
