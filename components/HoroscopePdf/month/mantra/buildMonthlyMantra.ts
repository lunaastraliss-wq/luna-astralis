import {
  buildMonthlySeed,
  pickVariant,
} from "../data";

import {
  createMonthlyMantraTexts,
} from "./createMonthlyMantraTexts";

import type {
  BuildMonthlySectionParams,
  MonthlyMantraResult,
} from "../data/types";

/*
|--------------------------------------------------------------------------
| Construction du mantra mensuel
|--------------------------------------------------------------------------
|
| La sélection reste déterministe :
|
| - même personne;
| - même mois;
| - même année;
| - même section;
|
| produisent toujours le même résultat.
|
*/

export function buildMonthlyMantra({
  identity,
  period,
}: BuildMonthlySectionParams): MonthlyMantraResult {
  const seed =
    buildMonthlySeed({
      identity,
      period,
      section: "mantra",
    });

  const texts =
    createMonthlyMantraTexts(
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
