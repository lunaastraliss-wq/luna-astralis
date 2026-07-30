import type {
  HoroscopeZodiacSign,
} from "../../HoroscopePdfTypes";

/*
|--------------------------------------------------------------------------
| Identité utilisée pour personnaliser le rapport annuel
|--------------------------------------------------------------------------
*/

export type YearlyHoroscopeIdentity = {
  firstName?: string;
  birthDate: string;
  birthTime?: string;
  birthPlace?: string;
  zodiacSign: HoroscopeZodiacSign;
};

/*
|--------------------------------------------------------------------------
| Période du rapport annuel
|--------------------------------------------------------------------------
*/

export type YearlyHoroscopePeriod = {
  year: number;
};

/*
|--------------------------------------------------------------------------
| Paramètres utilisés pour générer la graine personnalisée
|--------------------------------------------------------------------------
*/

export type BuildYearlySeedParams = {
  identity: YearlyHoroscopeIdentity;
  period: YearlyHoroscopePeriod;
  section: string;
};

/*
|--------------------------------------------------------------------------
| Paramètres communs des générateurs annuels
|--------------------------------------------------------------------------
*/

export type BuildYearlySectionParams = {
  identity: YearlyHoroscopeIdentity;
  period: YearlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Structure commune des sections annuelles
|--------------------------------------------------------------------------
*/

export type YearlySectionResult = {
  title: string;
  score: number;
  introduction: string;
  text: string;
  highlights: string[];
  advice: string;
  conclusion: string;
};

/*
|--------------------------------------------------------------------------
| Amour et relations
|--------------------------------------------------------------------------
*/

export type YearlyLoveTexts = {
  introduction: string[];
  general: string[];
  couple: string[];
  single: string[];
  emotionalClimate: string[];
  keyPeriods: string[];
  challenge: string[];
  advice: string[];
  conclusion: string[];
};

export type YearlyLoveResult =
  YearlySectionResult;

/*
|--------------------------------------------------------------------------
| Travail et carrière
|--------------------------------------------------------------------------
*/

export type YearlyCareerTexts = {
  introduction: string[];
  general: string[];
  projects: string[];
  professionalEvolution: string[];
  relationships: string[];
  opportunities: string[];
  keyPeriods: string[];
  challenge: string[];
  advice: string[];
  conclusion: string[];
};

export type YearlyCareerResult =
  YearlySectionResult;

/*
|--------------------------------------------------------------------------
| Finances
|--------------------------------------------------------------------------
*/

export type YearlyFinanceTexts = {
  introduction: string[];
  general: string[];
  income: string[];
  expenses: string[];
  investments: string[];
  opportunities: string[];
  risks: string[];
  keyPeriods: string[];
  advice: string[];
  conclusion: string[];
};

export type YearlyFinanceResult =
  YearlySectionResult;

/*
|--------------------------------------------------------------------------
| Bien-être et énergie
|--------------------------------------------------------------------------
*/

export type YearlyHealthTexts = {
  introduction: string[];
  energy: string[];
  emotionalBalance: string[];
  rest: string[];
  habits: string[];
  keyPeriods: string[];
  challenge: string[];
  advice: string[];
  conclusion: string[];
};

export type YearlyHealthResult =
  YearlySectionResult;

/*
|--------------------------------------------------------------------------
| Vie sociale et relations
|--------------------------------------------------------------------------
*/

export type YearlySocialTexts = {
  introduction: string[];
  general: string[];
  friendships: string[];
  family: string[];
  newConnections: string[];
  communication: string[];
  keyPeriods: string[];
  challenge: string[];
  advice: string[];
  conclusion: string[];
};

export type YearlySocialResult =
  YearlySectionResult;

/*
|--------------------------------------------------------------------------
| Défis de l’année
|--------------------------------------------------------------------------
*/

export type YearlyChallengeTexts = {
  introduction: string[];
  mainChallenge: string[];
  emotionalChallenge: string[];
  practicalChallenge: string[];
  relationshipChallenge: string[];
  keyPeriods: string[];
  hiddenLesson: string[];
  transformation: string[];
  advice: string[];
  conclusion: string[];
};

export type YearlyChallengeResult =
  YearlySectionResult;

/*
|--------------------------------------------------------------------------
| Opportunités de l’année
|--------------------------------------------------------------------------
*/

export type YearlyOpportunityTexts = {
  introduction: string[];
  mainOpportunity: string[];
  professionalOpportunity: string[];
  financialOpportunity: string[];
  relationshipOpportunity: string[];
  personalOpportunity: string[];
  keyPeriods: string[];
  action: string[];
  caution: string[];
  conclusion: string[];
};

export type YearlyOpportunityResult =
  YearlySectionResult;

/*
|--------------------------------------------------------------------------
| Influence planétaire annuelle
|--------------------------------------------------------------------------
*/

export type YearlyTransitPlanetInfluence = {
  planet: string;
  text: string;
};

/*
|--------------------------------------------------------------------------
| Textes des transits planétaires
|--------------------------------------------------------------------------
*/

export type YearlyTransitTexts = {
  introduction: string[];
  sun: string[];
  mercury: string[];
  venus: string[];
  mars: string[];
  jupiter: string[];
  saturn: string[];
  outerPlanets: string[];
  dominantInfluence: string[];
  advice: string[];
  conclusion: string[];
};

/*
|--------------------------------------------------------------------------
| Résultat des transits planétaires
|--------------------------------------------------------------------------
*/

export type YearlyTransitResult = {
  title: string;
  introduction: string;
  dominantInfluence: string;

  personalPlanets:
    YearlyTransitPlanetInfluence[];

  collectivePlanets:
    YearlyTransitPlanetInfluence[];

  advice: string;
  conclusion: string;
};

/*
|--------------------------------------------------------------------------
| Mantra de l’année
|--------------------------------------------------------------------------
*/

export type YearlyMantraTexts = {
  mantra: string[];
  intention: string[];
  affirmation: string[];
  message: string[];
};

export type YearlyMantraResult = {
  mantra: string;
  intention: string;
  affirmation: string;
  message: string;
};

/*
|--------------------------------------------------------------------------
| Page annuelle — Vue d’ensemble
|--------------------------------------------------------------------------
*/

export type YearOverviewAxis = {
  title: string;
  text: string;
};

export type YearOverviewResult = {
  title: string;
  score: number;
  introduction: string;
  summary: string;
  dominantTheme: string;
  axes: YearOverviewAxis[];
  advice: string;
  conclusion: string;
};

/*
|--------------------------------------------------------------------------
| Page annuelle — Énergies majeures
|--------------------------------------------------------------------------
*/

export type YearMajorEnergyItem = {
  title: string;
  subtitle?: string;
  intensity: number;
  text: string;
  advice: string;
};

export type YearMajorEnergiesResult = {
  title: string;
  introduction: string;
  globalIntensity: number;
  energies: YearMajorEnergyItem[];
  synthesis: string;
  advice: string;
  conclusion: string;
};

/*
|--------------------------------------------------------------------------
| Page annuelle — Aspects majeurs
|--------------------------------------------------------------------------
*/

export type YearMajorAspectItem = {
  planets: string;
  aspect: string;
  period: string;
  influence: string;
  opportunity: string;
  caution: string;
};

export type YearMajorAspectsResult = {
  title: string;
  introduction: string;
  aspects: YearMajorAspectItem[];
  dominantAspect: string;
  synthesis: string;
  advice: string;
  conclusion: string;
};

/*
|--------------------------------------------------------------------------
| Page annuelle — Planètes dominantes
|--------------------------------------------------------------------------
*/

export type YearDominantPlanetItem = {
  planet: string;
  influence: string;
  area: string;
  strength: number;
  message: string;
  advice: string;
};

export type YearDominantPlanetsResult = {
  title: string;
  introduction: string;
  planets: YearDominantPlanetItem[];
  dominantPlanet: string;
  synthesis: string;
  advice: string;
  conclusion: string;
};

/*
|--------------------------------------------------------------------------
| Page annuelle — Maisons activées
|--------------------------------------------------------------------------
*/

export type YearActivatedHouseItem = {
  house: number;
  title: string;
  area: string;
  intensity: number;
  influence: string;
  opportunity: string;
  advice: string;
};

export type YearActivatedHousesResult = {
  title: string;
  introduction: string;
  houses: YearActivatedHouseItem[];
  dominantHouse: number;
  synthesis: string;
  advice: string;
  conclusion: string;
};

/*
|--------------------------------------------------------------------------
| Regroupement des cinq pages principales d’analyse annuelle
|--------------------------------------------------------------------------
*/

export type YearAnnualPagesResult = {
  overview: YearOverviewResult;
  majorEnergies: YearMajorEnergiesResult;
  majorAspects: YearMajorAspectsResult;
  dominantPlanets: YearDominantPlanetsResult;
  activatedHouses: YearActivatedHousesResult;
};

/*
|--------------------------------------------------------------------------
| Résultat complet du moteur annuel
|--------------------------------------------------------------------------
*/

export type YearlyHoroscopeGeneratedContent = {
  overview: YearOverviewResult;
  majorEnergies: YearMajorEnergiesResult;
  majorAspects: YearMajorAspectsResult;
  dominantPlanets: YearDominantPlanetsResult;
  activatedHouses: YearActivatedHousesResult;

  love: YearlyLoveResult;
  career: YearlyCareerResult;
  finance: YearlyFinanceResult;
  health: YearlyHealthResult;
  social: YearlySocialResult;
  challenge: YearlyChallengeResult;
  opportunity: YearlyOpportunityResult;
  transit: YearlyTransitResult;
  mantra: YearlyMantraResult;
};
