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

const CAREER_TITLES = [
  "Un mois pour faire avancer vos ambitions",
  "Votre carrière entre dans une phase d’évolution",
  "Des décisions importantes se précisent",
  "Vos efforts commencent à porter leurs fruits",
  "Une période favorable à la progression",
  "Votre vie professionnelle gagne en clarté",
  "Un nouveau cap professionnel se dessine",
  "Vos projets demandent structure et confiance",
];

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

  const score =
    58 + (Math.abs(seed + 41) % 37);

  const generalText = pickVariant(
    texts.general,
    seed,
    31,
  );

  const projectsText = pickVariant(
    texts.projects,
    seed,
    47,
  );

  return {
    title: pickVariant(
      CAREER_TITLES,
      seed,
      7,
    ),

    score,

    introduction: pickVariant(
      texts.introduction,
      seed,
      17,
    ),

    text: `${generalText} ${projectsText}`,

    highlights: [
      pickVariant(
        texts.relationships,
        seed,
        67,
      ),

      pickVariant(
        texts.opportunities,
        seed,
        83,
      ),

      pickVariant(
        texts.challenge,
        seed,
        101,
      ),

      pickVariant(
        texts.conclusion,
        seed,
        149,
      ),
    ],

    advice: pickVariant(
      texts.advice,
      seed,
      127,
    ),
  };
}
