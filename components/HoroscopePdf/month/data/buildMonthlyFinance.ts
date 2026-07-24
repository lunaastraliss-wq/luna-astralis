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

const FINANCE_TITLES = [
  "Une période favorable à vos finances",
  "Vos ressources évoluent progressivement",
  "Le mois invite à une meilleure gestion",
  "Des occasions financières se présentent",
  "Votre équilibre matériel se renforce",
  "Un nouveau regard sur votre budget",
  "Une période propice aux décisions financières",
  "Vos priorités financières deviennent plus claires",
];

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

  const score =
    58 + (Math.abs(seed + 83) % 37);

  const generalText = pickVariant(
    texts.general,
    seed,
    41,
  );

  const incomeText = pickVariant(
    texts.income,
    seed,
    61,
  );

  return {
    title: pickVariant(
      FINANCE_TITLES,
      seed,
      13,
    ),

    score,

    introduction: pickVariant(
      texts.introduction,
      seed,
      19,
    ),

    text: `${generalText} ${incomeText}`,

    highlights: [
      pickVariant(
        texts.expenses,
        seed,
        79,
      ),

      pickVariant(
        texts.opportunities,
        seed,
        103,
      ),

      pickVariant(
        texts.risks,
        seed,
        127,
      ),

      pickVariant(
        texts.conclusion,
        seed,
        179,
      ),
    ],

    advice: pickVariant(
      texts.advice,
      seed,
      151,
    ),
  };
}
