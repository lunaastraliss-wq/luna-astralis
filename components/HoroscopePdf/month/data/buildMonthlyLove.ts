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

type BuildMonthlyLoveParams = {
  identity: MonthlyHoroscopeIdentity;
  period: MonthlyHoroscopePeriod;
};

export function buildMonthlyLove({
  identity,
  period,
}: BuildMonthlyLoveParams): MonthlyLoveResult {
  const texts =
    createMonthlyLoveTexts();

  const seed = buildMonthlySeed({
    identity,
    period,
    section: "love",
  });

  return {
    introduction: pickVariant(
      texts.introduction,
      seed,
      11,
    ),

    general: pickVariant(
      texts.general,
      seed,
      23,
    ),

    couple: pickVariant(
      texts.couple,
      seed,
      37,
    ),

    single: pickVariant(
      texts.single,
      seed,
      53,
    ),

    emotionalClimate: pickVariant(
      texts.emotionalClimate,
      seed,
      71,
    ),

    challenge: pickVariant(
      texts.challenge,
      seed,
      89,
    ),

    advice: pickVariant(
      texts.advice,
      seed,
      107,
    ),

    conclusion: pickVariant(
      texts.conclusion,
      seed,
      131,
    ),
  };
}
