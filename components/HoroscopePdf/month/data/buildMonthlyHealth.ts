import {
  buildMonthlySeed,
  pickVariant,
} from "./helpers";

import {
  createMonthlyHealthTexts,
} from "./createMonthlyHealthTexts";

import type {
  MonthlyHealthResult,
  MonthlyHoroscopeIdentity,
  MonthlyHoroscopePeriod,
} from "./types";

type BuildMonthlyHealthParams = {
  identity: MonthlyHoroscopeIdentity;
  period: MonthlyHoroscopePeriod;
};

const HEALTH_TITLES = [
  "Votre équilibre intérieur évolue",
  "Une période favorable au bien-être",
  "Votre énergie retrouve son rythme",
  "Le mois invite à prendre soin de vous",
  "Un nouvel équilibre se met en place",
  "Votre vitalité demande de l'attention",
  "Un mois pour retrouver votre harmonie",
  "Votre bien-être devient une priorité",
];

/*
|--------------------------------------------------------------------------
| Génération personnalisée — Bien-être et énergie
|--------------------------------------------------------------------------
*/

export function buildMonthlyHealth({
  identity,
  period,
}: BuildMonthlyHealthParams): MonthlyHealthResult {
  const texts =
    createMonthlyHealthTexts();

  const seed = buildMonthlySeed({
    identity,
    period,
    section: "health",
  });

  const score =
    58 + (Math.abs(seed + 127) % 37);

  const energyText = pickVariant(
    texts.energy,
    seed,
    29,
  );

  const emotionalText = pickVariant(
    texts.emotionalBalance,
    seed,
    43,
  );

  return {
    title: pickVariant(
      HEALTH_TITLES,
      seed,
      17,
    ),

    score,

    introduction: pickVariant(
      texts.introduction,
      seed,
      13,
    ),

    text: `${energyText} ${emotionalText}`,

    highlights: [
      pickVariant(
        texts.rest,
        seed,
        59,
      ),

      pickVariant(
        texts.habits,
        seed,
        73,
      ),

      pickVariant(
        texts.challenge,
        seed,
        97,
      ),

      pickVariant(
        texts.conclusion,
        seed,
        137,
      ),
    ],

    advice: pickVariant(
      texts.advice,
      seed,
      113,
    ),
  };
}
