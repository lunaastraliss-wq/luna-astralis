import {
  buildMonthlySeed,
  pickVariant,
} from "./helpers";

import {
  createMonthlyCareerTexts,
} from "./createMonthlyCareerTexts";

import type {
  MonthlyCareerResult,
  MonthlyHoroscopeIdentity,
  MonthlyHoroscopePeriod,
} from "./types";

type BuildMonthlyCareerParams = {
  identity: MonthlyHoroscopeIdentity;
  period: MonthlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Génération personnalisée — Travail et carrière
|--------------------------------------------------------------------------
*/

export function buildMonthlyCareer({
  identity,
  period,
}: BuildMonthlyCareerParams): MonthlyCareerResult {
  const texts =
    createMonthlyCareerTexts();

  const seed = buildMonthlySeed({
    identity,
    period,
    section: "career",
  });

  return {
    introduction: pickVariant(
      texts.introduction,
      seed,
      17,
    ),

    general: pickVariant(
      texts.general,
      seed,
      31,
    ),

    projects: pickVariant(
      texts.projects,
      seed,
      47,
    ),

    relationships: pickVariant(
      texts.relationships,
      seed,
      67,
    ),

    opportunities: pickVariant(
      texts.opportunities,
      seed,
      83,
    ),

    challenge: pickVariant(
      texts.challenge,
      seed,
      101,
    ),

    advice: pickVariant(
      texts.advice,
      seed,
      127,
    ),

    conclusion: pickVariant(
      texts.conclusion,
      seed,
      149,
    ),
  };
}
