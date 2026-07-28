import {
  buildYearlySeed,
  pickVariant,
} from "../data";

import {
  createYearlyStrengthsTexts,
} from "./createYearlyStrengthsTexts";

import type {
  BuildYearlySectionParams,
} from "../data/types";

/*
|--------------------------------------------------------------------------
| Temporaire
|--------------------------------------------------------------------------
|
| Ces types seront déplacés ensuite dans year/data/types.ts
|
*/

export type YearlyStrengthItem = {
  title: string;
  text: string;
  advice: string;
  icon?: string;
};

export type YearlyStrengthsResult = {
  title: string;

  introduction: string;

  dominantStrength: YearlyStrengthItem;

  strengths: YearlyStrengthItem[];

  potentialScore: number;

  opportunity: string;

  vigilance: string;

  conclusion: string;
};

/*
|--------------------------------------------------------------------------
| Construction
|--------------------------------------------------------------------------
*/

export function buildYearlyStrengths({
  identity,
  period,
}: BuildYearlySectionParams): YearlyStrengthsResult {

  const seed =
    buildYearlySeed({
      identity,
      period,
      section: "strengths",
    });

  const texts =
    createYearlyStrengthsTexts(
      identity.zodiacSign,
    );

  const strengths =
    texts.strengths.map(
      (
        strength,
        index,
      ): YearlyStrengthItem => ({
        title:
          strength.title,

        text:
          pickVariant(
            strength.texts,
            seed + (index * 17) + 3,
          ),

        advice:
          pickVariant(
            strength.advice,
            seed + (index * 23) + 11,
          ),
      }),
    );

  return {

    title:
      "Vos plus grandes forces",

    introduction:
      pickVariant(
        texts.introduction,
        seed + 5,
      ),

    dominantStrength: {

      title:
        pickVariant(
          texts.dominantStrength.titles,
          seed + 7,
        ),

      text:
        pickVariant(
          texts.dominantStrength.texts,
          seed + 13,
        ),

      advice:
        pickVariant(
          texts.dominantStrength.advice,
          seed + 19,
        ),

    },

    strengths,

    potentialScore:
      Math.min(
        100,
        texts.potentialBase +
          (seed % 7),
      ),

    opportunity:
      pickVariant(
        texts.opportunity,
        seed + 29,
      ),

    vigilance:
      pickVariant(
        texts.vigilance,
        seed + 37,
      ),

    conclusion:
      pickVariant(
        texts.conclusion,
        seed + 43,
      ),

  };

}
