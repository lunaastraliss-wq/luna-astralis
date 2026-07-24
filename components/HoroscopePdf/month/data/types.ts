/*
|--------------------------------------------------------------------------
| Identité utilisée pour personnaliser le rapport mensuel
|--------------------------------------------------------------------------
*/

export type MonthlyHoroscopeIdentity = {
  firstName?: string;
  birthDate: string;
  birthTime?: string;
  birthPlace?: string;
  zodiacSign: string;
};

/*
|--------------------------------------------------------------------------
| Période du rapport mensuel
|--------------------------------------------------------------------------
*/

export type MonthlyHoroscopePeriod = {
  month: number;
  year: number;
};

/*
|--------------------------------------------------------------------------
| Paramètres utilisés pour générer la graine personnalisée
|--------------------------------------------------------------------------
*/

export type BuildMonthlySeedParams = {
  identity: MonthlyHoroscopeIdentity;
  period: MonthlyHoroscopePeriod;
  section: string;
};

/*
|--------------------------------------------------------------------------
| Paramètres communs des générateurs mensuels
|--------------------------------------------------------------------------
*/

export type BuildMonthlySectionParams = {
  identity: MonthlyHoroscopeIdentity;
  period: MonthlyHoroscopePeriod;
};

/*
|--------------------------------------------------------------------------
| Structure commune des sections mensuelles
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
| Les banques de textes restent détaillées. Les générateurs assemblent
| ensuite ces textes pour produire cette structure commune.
|
*/

export type MonthlySectionResult = {
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

export type MonthlyLoveTexts = {
  introduction: string[];
  general: string[];
  couple: string[];
  single: string[];
  emotionalClimate: string[];
  challenge: string[];
  advice: string[];
  conclusion: string[];
};

export type MonthlyLoveResult =
  MonthlySectionResult;

/*
|--------------------------------------------------------------------------
| Travail et carrière
|--------------------------------------------------------------------------
*/

export type MonthlyCareerTexts = {
  introduction: string[];
  general: string[];
  projects: string[];
  relationships: string[];
  opportunities: string[];
  challenge: string[];
  advice: string[];
  conclusion: string[];
};

export type MonthlyCareerResult =
  MonthlySectionResult;

/*
|--------------------------------------------------------------------------
| Finances
|--------------------------------------------------------------------------
*/

export type MonthlyFinanceTexts = {
  introduction: string[];
  general: string[];
  income: string[];
  expenses: string[];
  opportunities: string[];
  risks: string[];
  advice: string[];
  conclusion: string[];
};

export type MonthlyFinanceResult =
  MonthlySectionResult;

/*
|--------------------------------------------------------------------------
| Bien-être et énergie
|--------------------------------------------------------------------------
*/

export type MonthlyHealthTexts = {
  introduction: string[];
  energy: string[];
  emotionalBalance: string[];
  rest: string[];
  habits: string[];
  challenge: string[];
  advice: string[];
  conclusion: string[];
};

export type MonthlyHealthResult =
  MonthlySectionResult;

/*
|--------------------------------------------------------------------------
| Vie sociale et relations
|--------------------------------------------------------------------------
*/

export type MonthlySocialTexts = {
  introduction: string[];
  general: string[];
  friendships: string[];
  family: string[];
  newConnections: string[];
  communication: string[];
  challenge: string[];
  advice: string[];
  conclusion: string[];
};

export type MonthlySocialResult =
  MonthlySectionResult;

/*
|--------------------------------------------------------------------------
| Défis du mois
|--------------------------------------------------------------------------
*/

export type MonthlyChallengeTexts = {
  introduction: string[];
  mainChallenge: string[];
  emotionalChallenge: string[];
  practicalChallenge: string[];
  relationshipChallenge: string[];
  hiddenLesson: string[];
  transformation: string[];
  advice: string[];
  conclusion: string[];
};

export type MonthlyChallengeResult =
  MonthlySectionResult;

/*
|--------------------------------------------------------------------------
| Opportunités du mois
|--------------------------------------------------------------------------
*/

export type MonthlyOpportunityTexts = {
  introduction: string[];
  mainOpportunity: string[];
  professionalOpportunity: string[];
  financialOpportunity: string[];
  relationshipOpportunity: string[];
  personalOpportunity: string[];
  timing: string[];
  action: string[];
  caution: string[];
  conclusion: string[];
};

export type MonthlyOpportunityResult =
  MonthlySectionResult;

/*
|--------------------------------------------------------------------------
| Transits planétaires
|--------------------------------------------------------------------------
|
| Les transits conservent une structure distincte parce qu’ils contiennent
| une lecture séparée pour chaque planète.
|
*/

export type MonthlyTransitTexts = {
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

export type MonthlyTransitResult = {
  introduction: string;
  sun: string;
  mercury: string;
  venus: string;
  mars: string;
  jupiter: string;
  saturn: string;
  outerPlanets: string;
  dominantInfluence: string;
  advice: string;
  conclusion: string;
};

/*
|--------------------------------------------------------------------------
| Résultat complet du moteur mensuel
|--------------------------------------------------------------------------
|
| Ce type regroupe toutes les sections produites par les générateurs.
|
*/

export type MonthlyHoroscopeGeneratedContent = {
  love: MonthlyLoveResult;
  career: MonthlyCareerResult;
  finance: MonthlyFinanceResult;
  health: MonthlyHealthResult;
  social: MonthlySocialResult;
  challenge: MonthlyChallengeResult;
  opportunity: MonthlyOpportunityResult;
  transit: MonthlyTransitResult;
};
