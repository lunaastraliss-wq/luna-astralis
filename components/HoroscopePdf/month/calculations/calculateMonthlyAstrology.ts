import { calculateActivatedHouses } from "./calculateActivatedHouses";
import { calculateAstroEvents } from "./calculateAstroEvents";
import { calculateMonthlyAspects } from "./calculateMonthlyAspects";
import { calculateMonthlyDominants } from "./calculateMonthlyDominants";
import { calculateMonthlyPeriods } from "./calculateMonthlyPeriods";
import { calculateMonthlySkySnapshots } from "./calculateMonthlySkySnapshots";
import { calculateMonthlyTransits } from "./calculateMonthlyTransits";
import { calculateMoonPhases } from "./calculateMoonPhases";

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
  return `${year}-${padNumber(
    month,
  )}`;
}

function getMonthDateRange(
  year: number,
  month: number,
): {
  startDate: string;
  endDate: string;
} {
  const lastDay =
    new Date(
      year,
      month,
      0,
    ).getDate();

  return {
    startDate:
      `${year}-` +
      `${padNumber(month)}-01`,

    endDate:
      `${year}-` +
      `${padNumber(month)}-` +
      `${padNumber(lastDay)}`,
  };
}

/*
|--------------------------------------------------------------------------
| Validation des paramètres
|--------------------------------------------------------------------------
*/

function validateMonth(
  month: number,
): void {
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
}

function validateYear(
  year: number,
): void {
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
}

/*
|--------------------------------------------------------------------------
| Moteur astrologique mensuel
|--------------------------------------------------------------------------
|
| Ce fichier est le point d’entrée unique des huit pages astrologiques
| calculées du rapport mensuel.
|
| Ordre des calculs :
|
| 1. Positions planétaires quotidiennes
| 2. Transits personnalisés
| 3. Aspects planétaires du mois
| 4. Planètes dominantes
| 5. Périodes favorables et délicates
| 6. Maisons astrologiques activées
| 7. Phases de la Lune
| 8. Événements astrologiques
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

  /*
  |--------------------------------------------------------------------------
  | Validation
  |--------------------------------------------------------------------------
  */

  validateMonth(month);
  validateYear(year);

  if (!identity.zodiacSign) {
    throw new Error(
      "Le signe astrologique est requis pour le calcul mensuel.",
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Informations générales du mois
  |--------------------------------------------------------------------------
  */

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
  | 1. Positions planétaires quotidiennes
  |--------------------------------------------------------------------------
  */

  const skySnapshots =
    calculateMonthlySkySnapshots({
      identity,
      month,
      year,
    });

  /*
  |--------------------------------------------------------------------------
  | 2. Transits personnalisés
  |--------------------------------------------------------------------------
  */

  const transits =
    calculateMonthlyTransits({
      identity,
      skySnapshots,
    });

  /*
  |--------------------------------------------------------------------------
  | 3. Aspects planétaires du mois
  |--------------------------------------------------------------------------
  */

  const aspects =
    calculateMonthlyAspects(
      skySnapshots,
    );

  /*
  |--------------------------------------------------------------------------
  | 4. Planètes dominantes
  |--------------------------------------------------------------------------
  */

  const dominantPlanets =
    calculateMonthlyDominants({
      aspects,
      transits,
    });

  /*
  |--------------------------------------------------------------------------
  | 5. Périodes favorables et délicates
  |--------------------------------------------------------------------------
  */

  const {
    favorablePeriods,
    delicatePeriods,
  } = calculateMonthlyPeriods({
    aspects,
    transits,
    startDate,
    endDate,
  });

  /*
  |--------------------------------------------------------------------------
  | 6. Maisons astrologiques activées
  |--------------------------------------------------------------------------
  */

  const activatedHouses =
    calculateActivatedHouses({
      transits,
    });

  /*
  |--------------------------------------------------------------------------
  | 7. Phases de la Lune
  |--------------------------------------------------------------------------
  */

  const moonPhases =
    calculateMoonPhases(
      skySnapshots,
    );

  /*
  |--------------------------------------------------------------------------
  | 8. Événements astrologiques
  |--------------------------------------------------------------------------
  */

  const astroEvents =
    calculateAstroEvents(
      skySnapshots,
    );

  /*
  |--------------------------------------------------------------------------
  | Résultat final
  |--------------------------------------------------------------------------
  */

  return {
    isoMonth,
    startDate,
    endDate,

    skySnapshots,

    transits,
    aspects,

    dominantPlanets,

    favorablePeriods,
    delicatePeriods,

    activatedHouses,

    moonPhases,

    astroEvents,
  };
}
