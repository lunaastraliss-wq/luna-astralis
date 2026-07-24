import {
  buildMonthlySeed,
  createMonthlyLoveTexts,
  pickDistinctVariants,
  pickVariant,
} from "./index";

import type {
  MonthlyHoroscopeIdentity,
  MonthlyHoroscopePeriod,
  MonthlyLoveResult,
} from "./types";

type BuildMonthlyLoveParams = {
  identity: MonthlyHoroscopeIdentity;
  period: MonthlyHoroscopePeriod;
};

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

export function buildMonthlyLove({
  identity,
  period,
}: BuildMonthlyLoveParams): MonthlyLoveResult {
  const texts = createMonthlyLoveTexts();

  const seed = buildMonthlySeed({
    identity,
    period,
    section: "love",
  });

  /*
  |--------------------------------------------------------------------------
  | Score amoureux déterministe
  |--------------------------------------------------------------------------
  |
  | Le score reste identique pour une même personne et une même période.
  | Il varie entre 58 et 94 afin de conserver une lecture réaliste.
  |
  */

  const score =
    58 + (Math.abs(seed) % 37);

  /*
  |--------------------------------------------------------------------------
  | Texte principal
  |--------------------------------------------------------------------------
  |
  | On réunit la tendance générale et le climat émotionnel afin de produire
  | une lecture complète sans surcharger la page PDF.
  |
  */

  const generalText = pickVariant(
    texts.general,
    seed,
    23,
  );

  const emotionalText = pickVariant(
    texts.emotionalClimate,
    seed,
    71,
  );

  const text = `${generalText} ${emotionalText}`;

  /*
  |--------------------------------------------------------------------------
  | Points importants
  |--------------------------------------------------------------------------
  |
  | Les anciennes sections couple, célibataire, défi et conclusion deviennent
  | les quatre points importants affichés dans HoroscopeLove.tsx.
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

  return {
    title: pickVariant(
      LOVE_TITLES,
      seed,
      5,
    ),

    score,

    introduction: pickVariant(
      texts.introduction,
      seed,
      11,
    ),

    text,

    highlights,

    advice: pickVariant(
      texts.advice,
      seed,
      107,
    ),
  };
}
