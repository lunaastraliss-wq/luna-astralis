/*
|--------------------------------------------------------------------------
| Données personnelles utilisées pour personnaliser le rapport mensuel
|--------------------------------------------------------------------------
*/

export type MonthlyHoroscopeIdentity = {
  firstName?: string;
  birthDate?: string;
  birthTime?: string;
  birthPlace?: string;
  zodiacSign: string;
};

/*
|--------------------------------------------------------------------------
| Période du rapport
|--------------------------------------------------------------------------
*/

export type MonthlyHoroscopePeriod = {
  month: number;
  year: number;
};

/*
|--------------------------------------------------------------------------
| Paramètres utilisés pour construire le seed
|--------------------------------------------------------------------------
*/

export type BuildMonthlySeedParams = {
  identity: MonthlyHoroscopeIdentity;
  period: MonthlyHoroscopePeriod;
  section?: string;
};

/*
|--------------------------------------------------------------------------
| Banque de textes — Amour
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

/*
|--------------------------------------------------------------------------
| Résultat personnalisé — Amour
|--------------------------------------------------------------------------
*/

export type MonthlyLoveResult = {
  introduction: string;
  general: string;
  couple: string;
  single: string;
  emotionalClimate: string;
  challenge: string;
  advice: string;
  conclusion: string;
};
