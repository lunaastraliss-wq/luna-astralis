import {
  buildYearlySeed,
  pickVariant,
} from "../data";

import {
  buildYearlyCalendar,
} from "../calendar/buildYearlyCalendar";

import {
  createYearlyBestPeriodsTexts,
} from "./createYearlyBestPeriodsTexts";

import type {
  BuildYearlySectionParams,
  YearBestPeriodCategory,
  YearBestPeriodItem,
  YearBestPeriodsResult,
  YearMonthForecastItem,
} from "../data/types";

/*
|--------------------------------------------------------------------------
| Nombre de périodes sélectionnées
|--------------------------------------------------------------------------
*/

const BEST_MONTHS_COUNT = 3;
const CAUTION_MONTHS_COUNT = 3;

/*
|--------------------------------------------------------------------------
| Tri des mois
|--------------------------------------------------------------------------
*/

function sortMonthsByScoreDescending(
  months: YearMonthForecastItem[],
): YearMonthForecastItem[] {
  return [...months].sort(
    (
      firstMonth,
      secondMonth,
    ) =>
      secondMonth.score -
      firstMonth.score,
  );
}

function sortMonthsByScoreAscending(
  months: YearMonthForecastItem[],
): YearMonthForecastItem[] {
  return [...months].sort(
    (
      firstMonth,
      secondMonth,
    ) =>
      firstMonth.score -
      secondMonth.score,
  );
}

/*
|--------------------------------------------------------------------------
| Sélection des meilleurs mois
|--------------------------------------------------------------------------
*/

function getBestMonths(
  months: YearMonthForecastItem[],
): YearMonthForecastItem[] {
  return sortMonthsByScoreDescending(
    months,
  ).slice(
    0,
    BEST_MONTHS_COUNT,
  );
}

/*
|--------------------------------------------------------------------------
| Sélection des mois plus délicats
|--------------------------------------------------------------------------
*/

function getCautionMonths(
  months: YearMonthForecastItem[],
): YearMonthForecastItem[] {
  return sortMonthsByScoreAscending(
    months,
  ).slice(
    0,
    CAUTION_MONTHS_COUNT,
  );
}

/*
|--------------------------------------------------------------------------
| Détermination stable d’un mois selon une catégorie
|--------------------------------------------------------------------------
|
| Les quatre catégories doivent idéalement utiliser des mois différents.
| Elles choisissent parmi les meilleurs mois du calendrier.
|
|--------------------------------------------------------------------------
*/

function selectCategoryMonth(
  rankedMonths: YearMonthForecastItem[],
  categoryIndex: number,
): YearMonthForecastItem {
  if (rankedMonths.length === 0) {
    throw new Error(
      "Aucun mois n’est disponible pour déterminer les meilleures périodes.",
    );
  }

  return rankedMonths[
    categoryIndex %
    rankedMonths.length
  ];
}

/*
|--------------------------------------------------------------------------
| Construction d’une période favorable
|--------------------------------------------------------------------------
*/

function buildBestPeriodItem({
  category,
  month,
  seed,
  categoryIndex,
  title,
  texts,
  advice,
}: {
  category: YearBestPeriodCategory;
  month: YearMonthForecastItem;
  seed: number;
  categoryIndex: number;
  title: string;
  texts: readonly string[];
  advice: readonly string[];
}): YearBestPeriodItem {
  return {
    category,

    title,

    month:
      month.month,

    monthNumber:
      month.monthNumber,

    score:
      month.score,

    text:
      pickVariant(
        texts,
        seed,
        100 + categoryIndex,
      ),

    advice:
      pickVariant(
        advice,
        seed,
        200 + categoryIndex,
      ),
  };
}

/*
|--------------------------------------------------------------------------
| Construction des meilleurs moments de l’année
|--------------------------------------------------------------------------
*/

export function buildYearlyBestPeriods({
  identity,
  period,
}: BuildYearlySectionParams): YearBestPeriodsResult {
  const seed =
    buildYearlySeed({
      identity,
      period,
      section: "year-best-periods",
    });

  const calendar =
    buildYearlyCalendar({
      identity,
      period,
    });

  const texts =
    createYearlyBestPeriodsTexts(
      identity.zodiacSign,
    );

  const rankedMonths =
    sortMonthsByScoreDescending(
      calendar.months,
    );

  const bestMonths =
    getBestMonths(
      calendar.months,
    );

  const cautionMonths =
    getCautionMonths(
      calendar.months,
    );

  const loveMonth =
    selectCategoryMonth(
      rankedMonths,
      0,
    );

  const careerMonth =
    selectCategoryMonth(
      rankedMonths,
      1,
    );

  const financeMonth =
    selectCategoryMonth(
      rankedMonths,
      2,
    );

  const projectMonth =
    selectCategoryMonth(
      rankedMonths,
      3,
    );

  const love =
    buildBestPeriodItem({
      category: "love",
      month: loveMonth,
      seed,
      categoryIndex: 0,
      title:
        texts.categories.love.title,
      texts:
        texts.categories.love.texts,
      advice:
        texts.categories.love.advice,
    });

  const career =
    buildBestPeriodItem({
      category: "career",
      month: careerMonth,
      seed,
      categoryIndex: 1,
      title:
        texts.categories.career.title,
      texts:
        texts.categories.career.texts,
      advice:
        texts.categories.career.advice,
    });

  const finance =
    buildBestPeriodItem({
      category: "finance",
      month: financeMonth,
      seed,
      categoryIndex: 2,
      title:
        texts.categories.finance.title,
      texts:
        texts.categories.finance.texts,
      advice:
        texts.categories.finance.advice,
    });

  const project =
    buildBestPeriodItem({
      category: "project",
      month: projectMonth,
      seed,
      categoryIndex: 3,
      title:
        texts.categories.project.title,
      texts:
        texts.categories.project.texts,
      advice:
        texts.categories.project.advice,
    });

  return {
    title:
      `Les meilleurs moments de votre année ${period.year}`,

    introduction:
      pickVariant(
        texts.introduction,
        seed,
        10,
      ),

    bestMonths,

    cautionMonths,

    love,

    career,

    finance,

    project,

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
