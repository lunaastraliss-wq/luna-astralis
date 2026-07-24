import {
  buildMonthlySeed,
  pickVariant,
} from "./helpers";

import {
  createMonthlyOpportunityTexts,
} from "./createMonthlyOpportunityTexts";

import type {
  MonthlyHoroscopeIdentity,
  MonthlyHoroscopePeriod,
  MonthlyOpportunityResult,
} from "./types";

type BuildMonthlyOpportunityParams = {
  identity: MonthlyHoroscopeIdentity;
  period: MonthlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Génération personnalisée — Opportunités du mois
|--------------------------------------------------------------------------
*/

export function buildMonthlyOpportunity({
  identity,
  period,
}: BuildMonthlyOpportunityParams): MonthlyOpportunityResult {
  const texts =
    createMonthlyOpportunityTexts();

  const seed = buildMonthlySeed({
    identity,
    period,
    section: "opportunity",
  });

  return {
    introduction: pickVariant(
      texts.introduction,
      seed,
      29,
    ),

    mainOpportunity: pickVariant(
      texts.mainOpportunity,
      seed,
      47,
    ),

    professionalOpportunity: pickVariant(
      texts.professionalOpportunity,
      seed,
      67,
    ),

    financialOpportunity: pickVariant(
      texts.financialOpportunity,
      seed,
      89,
    ),

    relationshipOpportunity: pickVariant(
      texts.relationshipOpportunity,
      seed,
      113,
    ),

    personalOpportunity: pickVariant(
      texts.personalOpportunity,
      seed,
      137,
    ),

    timing: pickVariant(
      texts.timing,
      seed,
      163,
    ),

    action: pickVariant(
      texts.action,
      seed,
      191,
    ),

    caution: pickVariant(
      texts.caution,
      seed,
      223,
    ),

    conclusion: pickVariant(
      texts.conclusion,
      seed,
      257,
    ),
  };
}
