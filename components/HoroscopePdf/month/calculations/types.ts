import type {
  HoroscopeZodiacSign,
} from "../../HoroscopePdfTypes";

/*
|--------------------------------------------------------------------------
| Paramètres généraux du calcul mensuel
|--------------------------------------------------------------------------
*/

export type MonthlyAstrologyIdentity = {
  firstName?: string;
  birthDate?: string;
  birthTime?: string;
  birthPlace?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  zodiacSign: HoroscopeZodiacSign;
};

export type MonthlyAstrologyPeriod = {
  month: number;
  year: number;
};

export type CalculateMonthlyAstrologyParams = {
  identity: MonthlyAstrologyIdentity;
  period: MonthlyAstrologyPeriod;
};

/*
|--------------------------------------------------------------------------
| Planètes
|--------------------------------------------------------------------------
*/

export type MonthlyPlanetName =
  | "Soleil"
  | "Lune"
  | "Mercure"
  | "Vénus"
  | "Mars"
  | "Jupiter"
  | "Saturne"
  | "Uranus"
  | "Neptune"
  | "Pluton"
  | "Chiron"
  | "Nœud Nord"
  | "Nœud Sud";

export type MonthlyPlanetPosition = {
  planet: MonthlyPlanetName;

  /*
  |--------------------------------------------------------------------------
  | Date exacte de la position calculée
  |--------------------------------------------------------------------------
  */

  date: string;

  /*
  |--------------------------------------------------------------------------
  | Longitude zodiacale absolue : 0° à moins de 360°
  |--------------------------------------------------------------------------
  */

  longitude: number;

  /*
  |--------------------------------------------------------------------------
  | Position dans le signe : 0° à moins de 30°
  |--------------------------------------------------------------------------
  */

  degree: number;

  sign: HoroscopeZodiacSign;
  signLabel: string;

  retrograde: boolean;

  /*
  |--------------------------------------------------------------------------
  | Vitesse quotidienne si disponible
  |--------------------------------------------------------------------------
  */

  speed?: number;
};

/*
|--------------------------------------------------------------------------
| Échantillon du ciel pour une journée
|--------------------------------------------------------------------------
*/

export type MonthlySkySnapshot = {
  date: string;
  positions: MonthlyPlanetPosition[];
};

/*
|--------------------------------------------------------------------------
| Aspects
|--------------------------------------------------------------------------
*/

export type MonthlyAspectType =
  | "conjunction"
  | "sextile"
  | "square"
  | "trine"
  | "opposition";

export type MonthlyAspect = {
  id: string;

  date: string;

  planet1: MonthlyPlanetName;
  planet2: MonthlyPlanetName;

  type: MonthlyAspectType;
  label: string;

  exactAngle: number;
  actualAngle: number;
  orb: number;

  applying?: boolean;

  importance: number;

  interpretation?: string;
};

/*
|--------------------------------------------------------------------------
| Transits vers le thème natal
|--------------------------------------------------------------------------
*/

export type MonthlyTransit = {
  id: string;

  date: string;

  transitPlanet: MonthlyPlanetName;
  natalPlanet?: MonthlyPlanetName;

  transitSign: HoroscopeZodiacSign;
  transitSignLabel: string;

  aspect?: MonthlyAspectType;
  aspectLabel?: string;

  orb?: number;

  natalHouse?: number;

  importance: number;

  title?: string;
  description?: string;
  advice?: string;
};

/*
|--------------------------------------------------------------------------
| Planètes dominantes
|--------------------------------------------------------------------------
*/

export type MonthlyDominantPlanet = {
  planet: MonthlyPlanetName;

  score: number;
  rank: number;

  reasons: string[];

  sign?: HoroscopeZodiacSign;
  signLabel?: string;

  retrograde?: boolean;

  title?: string;
  description?: string;
  advice?: string;
};

/*
|--------------------------------------------------------------------------
| Périodes favorables et délicates
|--------------------------------------------------------------------------
*/

export type MonthlyPeriodCategory =
  | "love"
  | "career"
  | "money"
  | "communication"
  | "energy"
  | "wellbeing"
  | "general";

export type MonthlyPeriodStrength =
  | "moderate"
  | "strong"
  | "very-strong";

export type MonthlyAstrologyPeriodResult = {
  id: string;

  startDate: string;
  endDate: string;

  category: MonthlyPeriodCategory;
  strength: MonthlyPeriodStrength;

  score: number;

  title: string;
  description: string;
  advice: string;

  relatedPlanets: MonthlyPlanetName[];
  relatedAspectIds: string[];
};

/*
|--------------------------------------------------------------------------
| Maisons astrologiques activées
|--------------------------------------------------------------------------
*/

export type MonthlyActivatedHouse = {
  house: number;

  score: number;
  rank: number;

  reasons: string[];

  title: string;
  lifeArea: string;

  activatingPlanets: MonthlyPlanetName[];

  dates: string[];

  description: string;
  advice: string;
};

/*
|--------------------------------------------------------------------------
| Phases de la Lune
|--------------------------------------------------------------------------
*/

export type MonthlyMoonPhaseName =
  | "Nouvelle Lune"
  | "Premier quartier"
  | "Pleine Lune"
  | "Dernier quartier";

export type MonthlyMoonPhase = {
  phase: MonthlyMoonPhaseName;

  date: string;

  sign: HoroscopeZodiacSign;
  signLabel: string;

  longitude: number;

  title?: string;
  description?: string;
  advice?: string;
};

/*
|--------------------------------------------------------------------------
| Événements astrologiques
|--------------------------------------------------------------------------
*/

export type MonthlyAstroEventType =
  | "sign-ingress"
  | "retrograde-start"
  | "retrograde-end"
  | "station"
  | "conjunction"
  | "eclipse"
  | "moon-phase"
  | "major-aspect";

export type MonthlyAstroEvent = {
  id: string;

  date: string;

  type: MonthlyAstroEventType;

  title: string;
  description: string;

  planets: MonthlyPlanetName[];

  sign?: HoroscopeZodiacSign;
  signLabel?: string;

  importance: number;

  advice?: string;
};

/*
|--------------------------------------------------------------------------
| Résultat central utilisé par les 8 pages
|--------------------------------------------------------------------------
*/

export type MonthlyAstrologyResult = {
  isoMonth: string;

  startDate: string;
  endDate: string;

  /*
  |--------------------------------------------------------------------------
  | Positions calculées à plusieurs moments du mois
  |--------------------------------------------------------------------------
  */

  skySnapshots: MonthlySkySnapshot[];

  /*
  |--------------------------------------------------------------------------
  | Résultats astrologiques interprétables
  |--------------------------------------------------------------------------
  */

  transits: MonthlyTransit[];
  aspects: MonthlyAspect[];

  dominantPlanets: MonthlyDominantPlanet[];

  favorablePeriods: MonthlyAstrologyPeriodResult[];
  delicatePeriods: MonthlyAstrologyPeriodResult[];

  activatedHouses: MonthlyActivatedHouse[];

  moonPhases: MonthlyMoonPhase[];

  astroEvents: MonthlyAstroEvent[];
};
