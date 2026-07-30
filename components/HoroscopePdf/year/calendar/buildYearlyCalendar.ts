import {
  buildYearlySeed,
  mixSeed,
  pickVariant,
} from "../data";

import {
  createYearlyCalendarTexts,
} from "./createYearlyCalendarTexts";

import type {
  BuildYearlySectionParams,
  YearCalendarResult,
  YearMonthForecastItem,
} from "../data/types";

/*
|--------------------------------------------------------------------------
| Mois de l’année
|--------------------------------------------------------------------------
*/

const YEAR_MONTHS = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
] as const;

/*
|--------------------------------------------------------------------------
| Limites des scores
|--------------------------------------------------------------------------
*/

const MINIMUM_MONTH_SCORE = 58;
const MAXIMUM_MONTH_SCORE = 94;

const FAVORABLE_SCORE = 81;
const CAUTION_SCORE = 67;

/*
|--------------------------------------------------------------------------
| Calcul d’un score mensuel stable
|--------------------------------------------------------------------------
*/

function calculateMonthScore(
  seed: number,
  monthIndex: number,
): number {
  const mixedSeed = mixSeed(
    seed,
    100 + monthIndex,
  );

  const scoreRange =
    MAXIMUM_MONTH_SCORE -
    MINIMUM_MONTH_SCORE +
    1;

  return (
    MINIMUM_MONTH_SCORE +
    (mixedSeed % scoreRange)
  );
}

/*
|--------------------------------------------------------------------------
| Création d’un ordre différent pour les douze thèmes
|--------------------------------------------------------------------------
|
| Les douze thèmes sont tous utilisés une seule fois.
| Leur ordre change selon la personne et l’année.
|
|--------------------------------------------------------------------------
*/

function createThemeOrder(
  quantity: number,
  seed: number,
): number[] {
  const availableIndexes =
    Array.from(
      {
        length: quantity,
      },
      (_, index) => index,
    );

  const selectedIndexes: number[] = [];

  for (
    let position = 0;
    position < quantity;
    position += 1
  ) {
    const mixedSeed = mixSeed(
      seed,
      200 + position,
    );

    const availablePosition =
      mixedSeed %
      availableIndexes.length;

    const selectedIndex =
      availableIndexes[
        availablePosition
      ];

    selectedIndexes.push(
      selectedIndex,
    );

    availableIndexes.splice(
      availablePosition,
      1,
    );
  }

  return selectedIndexes;
}

/*
|--------------------------------------------------------------------------
| Texte complémentaire selon le score
|--------------------------------------------------------------------------
*/

function getScoreText(
  score: number,
  favorableTexts: readonly string[],
  balancedTexts: readonly string[],
  cautionTexts: readonly string[],
  seed: number,
  monthIndex: number,
): string {
  if (score >= FAVORABLE_SCORE) {
    return pickVariant(
      favorableTexts,
      seed,
      300 + monthIndex,
    );
  }

  if (score <= CAUTION_SCORE) {
    return pickVariant(
      cautionTexts,
      seed,
      400 + monthIndex,
    );
  }

  return pickVariant(
    balancedTexts,
    seed,
    500 + monthIndex,
  );
}

/*
|--------------------------------------------------------------------------
| Recherche du meilleur mois
|--------------------------------------------------------------------------
*/

function findBestMonth(
  months: YearMonthForecastItem[],
): YearMonthForecastItem {
  if (months.length === 0) {
    throw new Error(
      "Le calendrier annuel ne contient aucun mois.",
    );
  }

  return months.reduce(
    (
      bestMonth,
      currentMonth,
    ) =>
      currentMonth.score >
      bestMonth.score
        ? currentMonth
        : bestMonth,
  );
}

/*
|--------------------------------------------------------------------------
| Recherche du mois le plus délicat
|--------------------------------------------------------------------------
*/

function findMostDelicateMonth(
  months: YearMonthForecastItem[],
): YearMonthForecastItem {
  if (months.length === 0) {
    throw new Error(
      "Le calendrier annuel ne contient aucun mois.",
    );
  }

  return months.reduce(
    (
      mostDelicateMonth,
      currentMonth,
    ) =>
      currentMonth.score <
      mostDelicateMonth.score
        ? currentMonth
        : mostDelicateMonth,
  );
}

/*
|--------------------------------------------------------------------------
| Calcul de la moyenne annuelle
|--------------------------------------------------------------------------
*/

function calculateAnnualAverageScore(
  months: YearMonthForecastItem[],
): number {
  if (months.length === 0) {
    return 0;
  }

  const totalScore =
    months.reduce(
      (
        total,
        month,
      ) =>
        total + month.score,
      0,
    );

  return Math.round(
    totalScore /
    months.length,
  );
}

/*
|--------------------------------------------------------------------------
| Construction du calendrier astrologique annuel
|--------------------------------------------------------------------------
*/

export function buildYearlyCalendar({
  identity,
  period,
}: BuildYearlySectionParams): YearCalendarResult {
  const seed =
    buildYearlySeed({
      identity,
      period,
      section: "year-calendar",
    });

  const texts =
    createYearlyCalendarTexts(
      identity.zodiacSign,
    );

  if (
    texts.themes.length <
    YEAR_MONTHS.length
  ) {
    throw new Error(
      "Le calendrier annuel doit contenir au moins douze thèmes.",
    );
  }

  const themeOrder =
    createThemeOrder(
      texts.themes.length,
      seed,
    );

  const months =
    YEAR_MONTHS.map(
      (
        month,
        monthIndex,
      ): YearMonthForecastItem => {
        const themeIndex =
          themeOrder[monthIndex];

        const selectedTheme =
          texts.themes[themeIndex];

        const score =
          calculateMonthScore(
            seed,
            monthIndex,
          );

        const themeText =
          pickVariant(
            selectedTheme.texts,
            seed,
            600 + monthIndex,
          );

        const scoreText =
          getScoreText(
            score,
            texts.favorableTexts,
            texts.balancedTexts,
            texts.cautionTexts,
            seed,
            monthIndex,
          );

        const advice =
          pickVariant(
            selectedTheme.advice,
            seed,
            700 + monthIndex,
          );

        return {
          month,
          monthNumber:
            monthIndex + 1,

          score,

          theme:
            selectedTheme.theme,

          text:
            `${themeText} ${scoreText}`,

          advice,

          isFavorable:
            score >= FAVORABLE_SCORE,

          requiresCaution:
            score <= CAUTION_SCORE,
        };
      },
    );

  const bestMonth =
    findBestMonth(months);

  const mostDelicateMonth =
    findMostDelicateMonth(months);

  const annualAverageScore =
    calculateAnnualAverageScore(
      months,
    );

  return {
    title:
      `Votre calendrier astrologique ${period.year}`,

    introduction:
      pickVariant(
        texts.introduction,
        seed,
        10,
      ),

    months,

    bestMonth,

    mostDelicateMonth,

    annualAverageScore,

    synthesis:
      pickVariant(
        texts.synthesis,
        seed,
        20,
      ),

    conclusion:
      pickVariant(
        texts.conclusion,
        seed,
        30,
      ),
  };
}
