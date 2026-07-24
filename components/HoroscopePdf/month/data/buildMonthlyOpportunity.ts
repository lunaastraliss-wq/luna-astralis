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

const OPPORTUNITY_TITLES = [
  "Les opportunités de votre mois",
  "Une période riche en possibilités",
  "Le moment d'avancer avec confiance",
  "De nouvelles portes peuvent s'ouvrir",
  "Votre potentiel se révèle davantage",
  "Des occasions méritent votre attention",
  "Le mois favorise les initiatives",
  "Un nouvel horizon se dessine",
];

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

  const score =
    58 + (Math.abs(seed + 257) % 37);

  const mainText = pickVariant(
    texts.mainOpportunity,
    seed,
    47,
  );

  const professionalText = pickVariant(
    texts.professionalOpportunity,
    seed,
    67,
  );

  return {
    title: pickVariant(
      OPPORTUNITY_TITLES,
      seed,
      19,
    ),

    score,

    introduction: pickVariant(
      texts.introduction,
      seed,
      29,
    ),

    text: `${mainText} ${professionalText}`,

    highlights: [
      pickVariant(
        texts.financialOpportunity,
        seed,
        89,
      ),

      pickVariant(
        texts.relationshipOpportunity,
        seed,
        113,
      ),

      pickVariant(
        texts.personalOpportunity,
        seed,
        137,
      ),

      pickVariant(
        texts.timing,
        seed,
        163,
      ),
    ],

    advice: `${pickVariant(
      texts.action,
      seed,
      191,
    )} ${pickVariant(
      texts.caution,
      seed,
      223,
    )}`,
  };
}
