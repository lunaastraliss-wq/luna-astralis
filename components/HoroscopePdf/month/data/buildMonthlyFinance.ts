import {
  buildMonthlySeed,
  pickVariant,
} from "./helpers";

import {
  createMonthlyFinanceTexts,
} from "./createMonthlyFinanceTexts";

import type {
  MonthlyFinanceResult,
  MonthlyHoroscopeIdentity,
  MonthlyHoroscopePeriod,
} from "./types";

type BuildMonthlyFinanceParams = {
  identity: MonthlyHoroscopeIdentity;
  period: MonthlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Génération personnalisée — Finances
|--------------------------------------------------------------------------
*/

export function buildMonthlyFinance({
  identity,
  period,
}: BuildMonthlyFinanceParams): MonthlyFinanceResult {
  const texts =
    createMonthlyFinanceTexts();

  const seed = buildMonthlySeed({
    identity,
    period,
    section: "finance",
  });

  return {
    introduction: pickVariant(
      texts.introduction,
      seed,
      19,
    ),

    general: pickVariant(
      texts.general,
      seed,
      41,
    ),

    income: pickVariant(
      texts.income,
      seed,
      61,
    ),

    expenses: pickVariant(
      texts.expenses,
      seed,
      79,
    ),

    opportunities: pickVariant(
      texts.opportunities,
      seed,
      103,
    ),

    risks: pickVariant(
      texts.risks,
      seed,
      127,
    ),

    advice: pickVariant(
      texts.advice,
      seed,
      151,
    ),

    conclusion: pickVariant(
      texts.conclusion,
      seed,
      179,
    ),
  };
}
