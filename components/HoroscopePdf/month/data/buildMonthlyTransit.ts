import {
  buildMonthlySeed,
  pickVariant,
} from "./helpers";

import {
  createMonthlyTransitTexts,
} from "./createMonthlyTransitTexts";

import type {
  MonthlyHoroscopeIdentity,
  MonthlyHoroscopePeriod,
  MonthlyTransitResult,
} from "./types";

type BuildMonthlyTransitParams = {
  identity: MonthlyHoroscopeIdentity;
  period: MonthlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Génération personnalisée — Transits planétaires
|--------------------------------------------------------------------------
*/

export function buildMonthlyTransit({
  identity,
  period,
}: BuildMonthlyTransitParams): MonthlyTransitResult {
  const texts =
    createMonthlyTransitTexts();

  const seed = buildMonthlySeed({
    identity,
    period,
    section: "transit",
  });

  return {
    introduction: pickVariant(
      texts.introduction,
      seed,
      31,
    ),

    sun: pickVariant(
      texts.sun,
      seed,
      53,
    ),

    mercury: pickVariant(
      texts.mercury,
      seed,
      79,
    ),

    venus: pickVariant(
      texts.venus,
      seed,
      107,
    ),

    mars: pickVariant(
      texts.mars,
      seed,
      137,
    ),

    jupiter: pickVariant(
      texts.jupiter,
      seed,
      167,
    ),

    saturn: pickVariant(
      texts.saturn,
      seed,
      199,
    ),

    outerPlanets: pickVariant(
      texts.outerPlanets,
      seed,
      233,
    ),

    dominantInfluence: pickVariant(
      texts.dominantInfluence,
      seed,
      269,
    ),

    advice: pickVariant(
      texts.advice,
      seed,
      307,
    ),

    conclusion: pickVariant(
      texts.conclusion,
      seed,
      347,
    ),
  };
}
