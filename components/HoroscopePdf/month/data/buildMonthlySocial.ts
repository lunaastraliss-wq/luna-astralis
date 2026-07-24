import {
  buildMonthlySeed,
  pickVariant,
} from "./helpers";

import {
  createMonthlySocialTexts,
} from "./createMonthlySocialTexts";

import type {
  MonthlyHoroscopeIdentity,
  MonthlyHoroscopePeriod,
  MonthlySocialResult,
} from "./types";

type BuildMonthlySocialParams = {
  identity: MonthlyHoroscopeIdentity;
  period: MonthlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Génération personnalisée — Vie sociale et relations
|--------------------------------------------------------------------------
*/

export function buildMonthlySocial({
  identity,
  period,
}: BuildMonthlySocialParams): MonthlySocialResult {
  const texts =
    createMonthlySocialTexts();

  const seed = buildMonthlySeed({
    identity,
    period,
    section: "social",
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
      37,
    ),

    friendships: pickVariant(
      texts.friendships,
      seed,
      53,
    ),

    family: pickVariant(
      texts.family,
      seed,
      71,
    ),

    newConnections: pickVariant(
      texts.newConnections,
      seed,
      89,
    ),

    communication: pickVariant(
      texts.communication,
      seed,
      109,
    ),

    challenge: pickVariant(
      texts.challenge,
      seed,
      131,
    ),

    advice: pickVariant(
      texts.advice,
      seed,
      157,
    ),

    conclusion: pickVariant(
      texts.conclusion,
      seed,
      181,
    ),
  };
}
