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

  return {
    introduction: pickVariant(
      texts.introduction,
      seed,
      13,
    ),

    energy: pickVariant(
      texts.energy,
      seed,
      29,
    ),

    emotionalBalance: pickVariant(
      texts.emotionalBalance,
      seed,
      43,
    ),

    rest: pickVariant(
      texts.rest,
      seed,
      59,
    ),

    habits: pickVariant(
      texts.habits,
      seed,
      73,
    ),

    challenge: pickVariant(
      texts.challenge,
      seed,
      97,
    ),

    advice: pickVariant(
      texts.advice,
      seed,
      113,
    ),

    conclusion: pickVariant(
      texts.conclusion,
      seed,
      137,
    ),
  };
}
