import {
  buildYearlySeed,
  createYearlyTransitTexts,
  pickVariant,
} from "./index";

import type {
  YearlyHoroscopeIdentity,
  YearlyHoroscopePeriod,
  YearlyTransitResult,
} from "./types";

/*
|--------------------------------------------------------------------------
| Paramètres de la section Transits
|--------------------------------------------------------------------------
*/

export type BuildYearlyTransitParams = {
  identity: YearlyHoroscopeIdentity;
  period: YearlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Titres possibles
|--------------------------------------------------------------------------
*/

const TRANSIT_TITLES = [
  "Les grands transits planétaires de votre année",
  "Les influences célestes qui guideront votre année",
  "Le climat planétaire de votre année",
  "Une année façonnée par les mouvements du ciel",
  "Les planètes qui marqueront votre évolution",
  "Les grandes influences astrologiques de l’année",
  "Votre année au rythme des planètes",
  "Les mouvements célestes de votre année",
];

/*
|--------------------------------------------------------------------------
| Construction de la section Transits
|--------------------------------------------------------------------------
*/

export function buildYearlyTransit({
  identity,
  period,
}: BuildYearlyTransitParams): YearlyTransitResult {
  /*
  |--------------------------------------------------------------------------
  | Banque de textes
  |--------------------------------------------------------------------------
  */

  const texts =
    createYearlyTransitTexts();

  /*
  |--------------------------------------------------------------------------
  | Graine déterministe
  |--------------------------------------------------------------------------
  */

  const seed =
    buildYearlySeed({
      identity,
      period,
      section: "transit",
    });

  /*
  |--------------------------------------------------------------------------
  | Influences des planètes personnelles
  |--------------------------------------------------------------------------
  */

  const personalPlanets = [
    {
      planet: "Soleil",
      text:
        pickVariant(
          texts.sun,
          seed,
          29,
        ),
    },

    {
      planet: "Mercure",
      text:
        pickVariant(
          texts.mercury,
          seed,
          43,
        ),
    },

    {
      planet: "Vénus",
      text:
        pickVariant(
          texts.venus,
          seed,
          61,
        ),
    },

    {
      planet: "Mars",
      text:
        pickVariant(
          texts.mars,
          seed,
          79,
        ),
    },
  ];

  /*
  |--------------------------------------------------------------------------
  | Influences des planètes collectives
  |--------------------------------------------------------------------------
  */

  const collectivePlanets = [
    {
      planet: "Jupiter",
      text:
        pickVariant(
          texts.jupiter,
          seed,
          97,
        ),
    },

    {
      planet: "Saturne",
      text:
        pickVariant(
          texts.saturn,
          seed,
          113,
        ),
    },

    {
      planet: "Planètes lentes",
      text:
        pickVariant(
          texts.outerPlanets,
          seed,
          131,
        ),
    },
  ];

  /*
  |--------------------------------------------------------------------------
  | Influence dominante
  |--------------------------------------------------------------------------
  */

  const dominantInfluence =
    pickVariant(
      texts.dominantInfluence,
      seed,
      149,
    );

  /*
  |--------------------------------------------------------------------------
  | Résultat final
  |--------------------------------------------------------------------------
  */

  return {
    title:
      pickVariant(
        TRANSIT_TITLES,
        seed,
        7,
      ),

    introduction:
      pickVariant(
        texts.introduction,
        seed,
        13,
      ),

    dominantInfluence,

    personalPlanets,

    collectivePlanets,

    advice:
      pickVariant(
        texts.advice,
        seed,
        167,
      ),

    conclusion:
      pickVariant(
        texts.conclusion,
        seed,
        191,
      ),
  };
}
