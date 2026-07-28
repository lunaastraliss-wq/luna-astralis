import {
  buildYearlySeed,
  pickVariant,
} from "../data";

import {
  createYearlyMantraTexts,
} from "./createYearlyMantraTexts";

import type {
  BuildYearlySectionParams,
  YearlyMantraResult,
} from "../data/types";

/*
|--------------------------------------------------------------------------
| Construction du mantra annuel
|--------------------------------------------------------------------------
|
| La sélection reste déterministe :
|
| - même personne;
| - même année;
| - même section;
|
| produisent toujours le même résultat.
|
*/

export function buildYearlyMantra({
  identity,
  period,
}: BuildYearlySectionParams): YearlyMantraResult {
  const seed =
    buildYearlySeed({
      identity,
      period,
      section: "mantra",
    });

  const texts =
    createYearlyMantraTexts(
      identity.zodiacSign,
    );

  return {
    mantra:
      pickVariant(
        texts.mantra,
        seed + 11,
      ),

    intention:
      pickVariant(
        texts.intention,
        seed + 23,
      ),

    affirmation:
      pickVariant(
        texts.affirmation,
        seed + 37,
      ),

    message:
      pickVariant(
        texts.message,
        seed + 53,
      ),
  };
}
