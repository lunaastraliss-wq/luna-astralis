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

const SOCIAL_TITLES = [
  "Vos relations prennent une nouvelle direction",
  "Un mois pour renforcer vos liens",
  "Votre vie sociale gagne en profondeur",
  "De nouvelles connexions peuvent émerger",
  "Les échanges occupent une place importante",
  "Votre entourage évolue avec vous",
  "Un climat favorable au rapprochement",
  "Vos relations deviennent plus claires",
];

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

  const score =
    58 + (Math.abs(seed + 173) % 37);

  const generalText = pickVariant(
    texts.general,
    seed,
    37,
  );

  const communicationText = pickVariant(
    texts.communication,
    seed,
    109,
  );

  return {
    title: pickVariant(
      SOCIAL_TITLES,
      seed,
      11,
    ),

    score,

    introduction: pickVariant(
      texts.introduction,
      seed,
      17,
    ),

    text: `${generalText} ${communicationText}`,

    highlights: [
      pickVariant(
        texts.friendships,
        seed,
        53,
      ),

      pickVariant(
        texts.family,
        seed,
        71,
      ),

      pickVariant(
        texts.newConnections,
        seed,
        89,
      ),

      pickVariant(
        texts.challenge,
        seed,
        131,
      ),
    ],

    advice: pickVariant(
      texts.advice,
      seed,
      157,
    ),
  };
}
