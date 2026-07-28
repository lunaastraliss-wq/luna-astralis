import {
  buildYearlySeed,
  pickVariant,
} from "../data";

import {
  createYearlyHiddenTalentsTexts,
} from "./createYearlyHiddenTalentsTexts";

import type {
  BuildYearlySectionParams,
} from "../data/types";

/*
|--------------------------------------------------------------------------
| Types temporaires
|--------------------------------------------------------------------------
|
| Nous les déplacerons ensuite dans :
| year/data/types.ts
|
*/

export type YearlyHiddenTalentItem = {
  title: string;
  text: string;
  activation: string;
  icon?: string;
};

export type YearlyHiddenTalentsResult = {
  title: string;

  introduction: string;

  dominantTalent: {
    title: string;
    text: string;
    activation: string;
  };

  talents: YearlyHiddenTalentItem[];

  revelationScore: number;

  favorableContext: string;

  innerBlock: string;

  conclusion: string;
};

/*
|--------------------------------------------------------------------------
| Construction
|--------------------------------------------------------------------------
*/

export function buildYearlyHiddenTalents({
  identity,
  period,
}: BuildYearlySectionParams): YearlyHiddenTalentsResult {
  const seed =
    buildYearlySeed({
      identity,
      period,
      section: "hidden-talents",
    });

  const texts =
    createYearlyHiddenTalentsTexts(
      identity.zodiacSign,
    );

  const talents =
    texts.talents.map(
      (
        talent,
        index,
      ): YearlyHiddenTalentItem => ({
        title:
          talent.title,

        text:
          pickVariant(
            talent.texts,
            seed + (index * 19) + 5,
          ),

        activation:
          pickVariant(
            talent.activations,
            seed + (index * 29) + 13,
          ),
      }),
    );

  return {
    title:
      "Vos talents cachés",

    introduction:
      pickVariant(
        texts.introduction,
        seed + 7,
      ),

    dominantTalent: {
      title:
        pickVariant(
          texts.dominantTalent.titles,
          seed + 11,
        ),

      text:
        pickVariant(
          texts.dominantTalent.texts,
          seed + 17,
        ),

      activation:
        pickVariant(
          texts.dominantTalent.activations,
          seed + 23,
        ),
    },

    talents,

    revelationScore:
      Math.min(
        100,
        texts.revelationBase +
          (seed % 7),
      ),

    favorableContext:
      pickVariant(
        texts.favorableContext,
        seed + 31,
      ),

    innerBlock:
      pickVariant(
        texts.innerBlock,
        seed + 41,
      ),

    conclusion:
      pickVariant(
        texts.conclusion,
        seed + 47,
      ),
  };
}
