/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

export * from "./types";

/*
|--------------------------------------------------------------------------
| Outils de personnalisation
|--------------------------------------------------------------------------
*/

export {
  buildMonthlySeed,
  hashString,
  mixSeed,
  normalizeSeedValue,
  pickDistinctVariants,
  pickVariant,
} from "./helpers";

/*
|--------------------------------------------------------------------------
| Amour et relations
|--------------------------------------------------------------------------
*/

export {
  createMonthlyLoveTexts,
} from "./createMonthlyLoveTexts";

export {
  buildMonthlyLove,
} from "./buildMonthlyLove";

/*
|--------------------------------------------------------------------------
| Travail et carrière
|--------------------------------------------------------------------------
*/

export {
  createMonthlyCareerTexts,
} from "./createMonthlyCareerTexts";

export {
  buildMonthlyCareer,
} from "./buildMonthlyCareer";

/*
|--------------------------------------------------------------------------
| Finances
|--------------------------------------------------------------------------
*/

export {
  createMonthlyFinanceTexts,
} from "./createMonthlyFinanceTexts";

export {
  buildMonthlyFinance,
} from "./buildMonthlyFinance";

/*
|--------------------------------------------------------------------------
| Bien-être et énergie
|--------------------------------------------------------------------------
*/

export {
  createMonthlyHealthTexts,
} from "./createMonthlyHealthTexts";

export {
  buildMonthlyHealth,
} from "./buildMonthlyHealth";

/*
|--------------------------------------------------------------------------
| Vie sociale et relations
|--------------------------------------------------------------------------
*/

export {
  createMonthlySocialTexts,
} from "./createMonthlySocialTexts";

export {
  buildMonthlySocial,
} from "./buildMonthlySocial";

/*
|--------------------------------------------------------------------------
| Défis du mois
|--------------------------------------------------------------------------
*/

export {
  createMonthlyChallengeTexts,
} from "./createMonthlyChallengeTexts";

export {
  buildMonthlyChallenge,
} from "./buildMonthlyChallenge";

/*
|--------------------------------------------------------------------------
| Opportunités du mois
|--------------------------------------------------------------------------
*/

export {
  createMonthlyOpportunityTexts,
} from "./createMonthlyOpportunityTexts";

export {
  buildMonthlyOpportunity,
} from "./buildMonthlyOpportunity";

/*
|--------------------------------------------------------------------------
| Transits planétaires
|--------------------------------------------------------------------------
*/

export {
  createMonthlyTransitTexts,
} from "./createMonthlyTransitTexts";

export {
  buildMonthlyTransit,
} from "./buildMonthlyTransit";
