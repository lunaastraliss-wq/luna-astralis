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
  buildYearlySeed,
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
  createYearlyLoveTexts,
} from "./createYearlyLoveTexts";

export {
  buildYearlyLove,
} from "./buildYearlyLove";

export type {
  BuildYearlyLoveParams,
} from "./buildYearlyLove";

/*
|--------------------------------------------------------------------------
| Travail et carrière
|--------------------------------------------------------------------------
*/

export {
  createYearlyCareerTexts,
} from "./createYearlyCareerTexts";

export {
  buildYearlyCareer,
} from "./buildYearlyCareer";

export type {
  BuildYearlyCareerParams,
} from "./buildYearlyCareer";

/*
|--------------------------------------------------------------------------
| Finances
|--------------------------------------------------------------------------
*/

export {
  createYearlyFinanceTexts,
} from "./createYearlyFinanceTexts";

export {
  buildYearlyFinance,
} from "./buildYearlyFinance";

export type {
  BuildYearlyFinanceParams,
} from "./buildYearlyFinance";

/*
|--------------------------------------------------------------------------
| Bien-être et énergie
|--------------------------------------------------------------------------
*/

export {
  createYearlyHealthTexts,
} from "./createYearlyHealthTexts";

export {
  buildYearlyHealth,
} from "./buildYearlyHealth";

export type {
  BuildYearlyHealthParams,
} from "./buildYearlyHealth";

/*
|--------------------------------------------------------------------------
| Vie sociale et relations
|--------------------------------------------------------------------------
*/

export {
  createYearlySocialTexts,
} from "./createYearlySocialTexts";

export {
  buildYearlySocial,
} from "./buildYearlySocial";

export type {
  BuildYearlySocialParams,
} from "./buildYearlySocial";

/*
|--------------------------------------------------------------------------
| Défis de l’année
|--------------------------------------------------------------------------
*/

export {
  createYearlyChallengeTexts,
} from "./createYearlyChallengeTexts";

export {
  buildYearlyChallenge,
} from "./buildYearlyChallenge";

export type {
  BuildYearlyChallengeParams,
} from "./buildYearlyChallenge";

/*
|--------------------------------------------------------------------------
| Opportunités de l’année
|--------------------------------------------------------------------------
*/

export {
  createYearlyOpportunityTexts,
} from "./createYearlyOpportunityTexts";

export {
  buildYearlyOpportunity,
} from "./buildYearlyOpportunity";

export type {
  BuildYearlyOpportunityParams,
} from "./buildYearlyOpportunity";

/*
|--------------------------------------------------------------------------
| Transits planétaires annuels
|--------------------------------------------------------------------------
*/

export {
  createYearlyTransitTexts,
} from "./createYearlyTransitTexts";

export {
  buildYearlyTransit,
} from "./buildYearlyTransit";

export type {
  BuildYearlyTransitParams,
} from "./buildYearlyTransit";

/*
|--------------------------------------------------------------------------
| Trimestres de l’année
|--------------------------------------------------------------------------
*/

export {
  buildYearlyQuarters,
} from "./buildYearlyQuarters";

/*
|--------------------------------------------------------------------------
| Résumés des douze mois
|--------------------------------------------------------------------------
*/

export {
  buildYearlyMonths,
} from "./buildYearlyMonths";

/*
|--------------------------------------------------------------------------
| Mantra de l’année
|--------------------------------------------------------------------------
|
| Le dossier mantra se trouve au même niveau que le dossier data :
|
| year/
| ├── data/
| │   └── index.ts
| └── mantra/
|     ├── createYearlyMantraTexts.ts
|     └── buildYearlyMantra.ts
|
|--------------------------------------------------------------------------
*/

export {
  createYearlyMantraTexts,
} from "../mantra/createYearlyMantraTexts";

export {
  buildYearlyMantra,
} from "../mantra/buildYearlyMantra";
