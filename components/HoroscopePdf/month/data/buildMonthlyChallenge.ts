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

const CHALLENGE_TITLES = [
  "Le défi principal de votre mois",
  "Une période de transformation intérieure",
  "Les obstacles deviennent des apprentissages",
  "Un mois pour dépasser vos limites",
  "Votre évolution passe par un défi important",
  "Une occasion de grandir se présente",
  "Le changement demande de l'adaptation",
  "Chaque défi prépare votre prochaine réussite",
];

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

  const score =
    58 + (Math.abs(seed + 211) % 37);

  const mainText = pickVariant(
    texts.mainChallenge,
    seed,
    41,
  );

  const emotionalText = pickVariant(
    texts.emotionalChallenge,
    seed,
    59,
  );

  return {
    title: pickVariant(
      CHALLENGE_TITLES,
      seed,
      13,
    ),

    score,

    introduction: pickVariant(
      texts.introduction,
      seed,
      23,
    ),

    text: `${mainText} ${emotionalText}`,

    highlights: [
      pickVariant(
        texts.practicalChallenge,
        seed,
        79,
      ),

      pickVariant(
        texts.relationshipChallenge,
        seed,
        101,
      ),

      pickVariant(
        texts.hiddenLesson,
        seed,
        127,
      ),

      pickVariant(
        texts.transformation,
        seed,
        149,
      ),
    ],

    advice: pickVariant(
      texts.advice,
      seed,
      173,
    ),
  };
}
