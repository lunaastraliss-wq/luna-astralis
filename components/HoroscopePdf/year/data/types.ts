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
  zodiacSign: string;
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
|
| Cette structure correspond aux données attendues par les pages PDF :
|
| - title
| - score
| - introduction
| - text
| - highlights
| - advice
|
*/

export type YearlySectionResult = {
  title: string;
  score: number;
  introduction: string;
  text: string;
  highlights: string[];
  advice: string;
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
  seasonalRhythm: string[];
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
  socialEvolution: string[];
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
  professionalChallenge: string[];
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
  spiritualOpportunity: string[];
  timing: string[];
  action: string[];
  caution: string[];
  conclusion: string[];
};

export type YearlyOpportunityResult =
  YearlySectionResult;

/*
|--------------------------------------------------------------------------
| Transits planétaires annuels
|--------------------------------------------------------------------------
|
| Les transits conservent une structure distincte parce qu’ils contiennent
| une lecture séparée pour chaque planète et pour les grandes périodes.
|
*/

export type YearlyTransitTexts = {
  introduction: string[];
  sun: string[];
  mercury: string[];
  venus: string[];
  mars: string[];
  jupiter: string[];
  saturn: string[];
  uranus: string[];
  neptune: string[];
  pluto: string[];
  outerPlanets: string[];
  dominantInfluence: string[];
  retrogrades: string[];
  eclipses: string[];
  advice: string[];
  conclusion: string[];
};

export type YearlyTransitResult = {
  introduction: string;
  sun: string;
  mercury: string;
  venus: string;
  mars: string;
  jupiter: string;
  saturn: string;
  uranus: string;
  neptune: string;
  pluto: string;
  outerPlanets: string;
  dominantInfluence: string;
  retrogrades: string;
  eclipses: string;
  advice: string;
  conclusion: string;
};

/*
|--------------------------------------------------------------------------
| Scores d’un trimestre
|--------------------------------------------------------------------------
*/

export type YearlyQuarterScores = {
  energy: number;
  love: number;
  career: number;
  money: number;
  health: number;
};

/*
|--------------------------------------------------------------------------
| Contenu d’un trimestre
|--------------------------------------------------------------------------
*/

export type YearlyQuarterContent = {
  title: string;
  dateLabel: string;
  introduction: string;
  text: string;
  opportunity: string;
  vigilance: string;
  advice: string;
  scores: YearlyQuarterScores;
};

/*
|--------------------------------------------------------------------------
| Les quatre trimestres de l’année
|--------------------------------------------------------------------------
*/

export type YearlyHoroscopeQuarters = {
  quarter1: YearlyQuarterContent;
  quarter2: YearlyQuarterContent;
  quarter3: YearlyQuarterContent;
  quarter4: YearlyQuarterContent;
};

/*
|--------------------------------------------------------------------------
| Résumé mensuel de l’année
|--------------------------------------------------------------------------
*/

export type YearlyMonthContent = {
  month: number;
  label: string;
  title: string;
  introduction: string;
  text: string;
  opportunity: string;
  vigilance: string;
  advice: string;
  score: number;
};

export type YearlyHoroscopeMonths = {
  january: YearlyMonthContent;
  february: YearlyMonthContent;
  march: YearlyMonthContent;
  april: YearlyMonthContent;
  may: YearlyMonthContent;
  june: YearlyMonthContent;
  july: YearlyMonthContent;
  august: YearlyMonthContent;
  september: YearlyMonthContent;
  october: YearlyMonthContent;
  november: YearlyMonthContent;
  december: YearlyMonthContent;
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
| Résultat complet du moteur annuel
|--------------------------------------------------------------------------
|
| Ce type regroupe toutes les sections produites par les générateurs.
|
*/

export type YearlyHoroscopeGeneratedContent = {
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
