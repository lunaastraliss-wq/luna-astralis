import {
  buildMonthlySeed,
  createMonthlyLoveTexts,
  pickVariant,
} from "./index";

import type {
  MonthlyHoroscopeIdentity,
  MonthlyHoroscopePeriod,
  MonthlyLoveResult,
} from "./types";

/*
|--------------------------------------------------------------------------
| Paramètres de la section Amour
|--------------------------------------------------------------------------
*/

export type BuildMonthlyLoveParams = {
  identity: MonthlyHoroscopeIdentity;
  period: MonthlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Titres possibles
|--------------------------------------------------------------------------
*/

const LOVE_TITLES = [
  "Un mois pour écouter votre cœur",
  "Vos émotions prennent une nouvelle direction",
  "Une période de rapprochement et de vérité",
  "Votre vie affective cherche son équilibre",
  "Un nouveau souffle dans votre vie sentimentale",
  "Le cœur vous invite à plus d’authenticité",
  "Une période riche en prises de conscience",
  "Vos sentiments deviennent plus clairs",
];

/*
|--------------------------------------------------------------------------
| Construction de la section Amour
|--------------------------------------------------------------------------
*/

export function buildMonthlyLove({
  identity,
  period,
}: BuildMonthlyLoveParams): MonthlyLoveResult {
  /*
  |--------------------------------------------------------------------------
  | Banque de textes
  |--------------------------------------------------------------------------
  */

  const texts =
    createMonthlyLoveTexts();

  /*
  |--------------------------------------------------------------------------
  | Graine déterministe
  |--------------------------------------------------------------------------
  |
  | La graine dépend de la personne, de la période et de la section.
  | Le résultat demeure donc identique pour une même personne et un même mois.
  |
  */

  const seed =
    buildMonthlySeed({
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
  | La tendance générale et le climat émotionnel sont réunis afin de créer
  | un texte principal complet.
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

  const text =
    `${generalText} ${emotionalText}`;

  /*
  |--------------------------------------------------------------------------
  | Points importants
  |--------------------------------------------------------------------------
  |
  | Les quatre éléments sont utilisés dans HoroscopeLove.tsx.
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

    pickVariant(
      texts.conclusion,
      seed,
      131,
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
  };
}
