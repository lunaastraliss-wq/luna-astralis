import {
  buildMonthlySeed,
  pickVariant,
} from "./helpers";

import {
  createMonthlyChallengeTexts,
} from "./createMonthlyChallengeTexts";

import type {
  MonthlyChallengeResult,
  MonthlyHoroscopeIdentity,
  MonthlyHoroscopePeriod,
} from "./types";

type BuildMonthlyChallengeParams = {
  identity: MonthlyHoroscopeIdentity;
  period: MonthlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Génération personnalisée — Défis du mois
|--------------------------------------------------------------------------
*/

export function buildMonthlyChallenge({
  identity,
  period,
}: BuildMonthlyChallengeParams): MonthlyChallengeResult {
  const texts =
    createMonthlyChallengeTexts();

  const seed = buildMonthlySeed({
    identity,
    period,
    section: "challenge",
  });

  return {
    introduction: pickVariant(
      texts.introduction,
      seed,
      23,
    ),

    mainChallenge: pickVariant(
      texts.mainChallenge,
      seed,
      41,
    ),

    emotionalChallenge: pickVariant(
      texts.emotionalChallenge,
      seed,
      59,
    ),

    practicalChallenge: pickVariant(
      texts.practicalChallenge,
      seed,
      79,
    ),

    relationshipChallenge: pickVariant(
      texts.relationshipChallenge,
      seed,
      101,
    ),

    hiddenLesson: pickVariant(
      texts.hiddenLesson,
      seed,
      127,
    ),

    transformation: pickVariant(
      texts.transformation,
      seed,
      149,
    ),

    advice: pickVariant(
      texts.advice,
      seed,
      173,
    ),

    conclusion: pickVariant(
      texts.conclusion,
      seed,
      199,
    ),
  };
}
