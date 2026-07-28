/*
|--------------------------------------------------------------------------
| Types communs de l’horoscope annuel
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
| Page 31 — Forces dominantes
|--------------------------------------------------------------------------
|
| Cette page demeure indépendante du générateur commun.
|
| Fichiers :
|
| year/
| └── advanced/
|     ├── createYearlyStrengthsTexts.ts
|     └── buildYearlyStrengths.ts
|
|--------------------------------------------------------------------------
*/

export {
  createYearlyStrengthsTexts,
} from "../advanced/createYearlyStrengthsTexts";

export {
  buildYearlyStrengths,
} from "../advanced/buildYearlyStrengths";

/*
|--------------------------------------------------------------------------
| Page 32 — Talents cachés
|--------------------------------------------------------------------------
|
| Cette page demeure indépendante du générateur commun.
|
| Fichiers :
|
| year/
| └── advanced/
|     ├── createYearlyHiddenTalentsTexts.ts
|     └── buildYearlyHiddenTalents.ts
|
|--------------------------------------------------------------------------
*/

export {
  createYearlyHiddenTalentsTexts,
} from "../advanced/createYearlyHiddenTalentsTexts";

export {
  buildYearlyHiddenTalents,
} from "../advanced/buildYearlyHiddenTalents";

/*
|--------------------------------------------------------------------------
| Pages Premium 33 à 60
|--------------------------------------------------------------------------
|
| Ces pages sont générées automatiquement à partir de la configuration
| centrale et des modèles Premium réutilisables.
|
|--------------------------------------------------------------------------
*/

export {
  buildYearPremiumPages,
  buildYearPremiumPageByKey,
} from "../advanced/buildYearPremiumPages";

/*
|--------------------------------------------------------------------------
| Configuration des pages Premium 33 à 60
|--------------------------------------------------------------------------
*/

export {
  YEAR_PREMIUM_PAGES_CONFIG,
  getYearPremiumPageConfig,
} from "../advanced/config/yearPremiumPagesConfig";

/*
|--------------------------------------------------------------------------
| Types des pages Premium 33 à 60
|--------------------------------------------------------------------------
*/

export type {
  YearPremiumPageType,
  YearPremiumCardItem,
  YearPremiumTimelineItem,
  YearPremiumBalanceColumn,
  YearPremiumPageData,
  YearPremiumPageConfig,
} from "../advanced/templates/YearPremiumPageTypes";

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
| │
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
