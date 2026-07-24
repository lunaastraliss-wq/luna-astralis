import type {
  CalculateMonthlyAstrologyParams,
  MonthlyAstrologyResult,
} from "./types";

/*
|--------------------------------------------------------------------------
| Utilitaires de période
|--------------------------------------------------------------------------
*/

function padNumber(
  value: number,
): string {
  return String(value).padStart(
    2,
    "0",
  );
}

function buildIsoMonth(
  year: number,
  month: number,
): string {
  return `${year}-${padNumber(month)}`;
}

function getMonthDateRange(
  year: number,
  month: number,
): {
  startDate: string;
  endDate: string;
} {
  const lastDay = new Date(
    year,
    month,
    0,
  ).getDate();

  return {
    startDate:
      `${year}-${padNumber(month)}-01`,

    endDate:
      `${year}-${padNumber(month)}-${padNumber(
        lastDay,
      )}`,
  };
}

/*
|--------------------------------------------------------------------------
| Moteur astrologique mensuel
|--------------------------------------------------------------------------
|
| Ce fichier sera le seul point d’entrée pour les huit pages calculées.
|
| On ajoutera progressivement :
|
| 1. calculateMonthlyPlanetPositions
| 2. calculateMonthlyAspects
| 3. calculateMonthlyTransits
| 4. calculateMonthlyDominants
| 5. calculateMonthlyPeriods
| 6. calculateMonthlyActivatedHouses
| 7. calculateMonthlyMoonPhases
| 8. calculateMonthlyAstroEvents
|
*/

export function calculateMonthlyAstrology({
  identity,
  period,
}: CalculateMonthlyAstrologyParams): MonthlyAstrologyResult {
  const {
    month,
    year,
  } = period;

  if (
    !Number.isInteger(month) ||
    month < 1 ||
    month > 12
  ) {
    throw new Error(
      `Mois astrologique invalide : ${String(
        month,
      )}`,
    );
  }

  if (
    !Number.isInteger(year) ||
    year < 1900 ||
    year > 2200
  ) {
    throw new Error(
      `Année astrologique invalide : ${String(
        year,
      )}`,
    );
  }

  if (!identity.zodiacSign) {
    throw new Error(
      "Le signe astrologique est requis pour le calcul mensuel.",
    );
  }

  const isoMonth =
    buildIsoMonth(
      year,
      month,
    );

  const {
    startDate,
    endDate,
  } = getMonthDateRange(
    year,
    month,
  );

  /*
  |--------------------------------------------------------------------------
  | Résultat temporaire
  |--------------------------------------------------------------------------
  |
  | Il est volontairement vide tant que le moteur astronomique réel
  | n’est pas branché. On ne génère aucune fausse position planétaire.
  |
  */

  return {
    isoMonth,
    startDate,
    endDate,

    skySnapshots: [],

    transits: [],
    aspects: [],

    dominantPlanets: [],

    favorablePeriods: [],
    delicatePeriods: [],

    activatedHouses: [],

    moonPhases: [],

    astroEvents: [],
  };
}
