export type PremiumPlanet = {
  name?: string;
  sign?: string;
  longitude?: number;
  degree?: number;
  house?: number;
  retrograde?: boolean;
};

export type PremiumAspect = {
  planet1?: string;
  planet2?: string;
  type?: string;
  orb?: number;
};

export type PremiumAngles = {
  ascendant?: number;
  midheaven?: number;
  descendant?: number;
  imumCoeli?: number;
  [key: string]: unknown;
};

export type PremiumPdfProps = {
  firstName?: string;
  birthDate?: string;
  birthTime?: string;
  birthCity?: string;

  planets?: PremiumPlanet[];
  aspects?: PremiumAspect[];
  angles?: PremiumAngles;

  wheelImage?: string;
};

export type PremiumPdfPlanetProps = {
  planets: PremiumPlanet[];
  aspects?: PremiumAspect[];
  planet: string;
};

export type PremiumPdfSummaryProps = {
  planets: PremiumPlanet[];
  angles: PremiumAngles;
};

export type PremiumPdfPlanetsProps = {
  planets: PremiumPlanet[];
  aspects?: PremiumAspect[];
};
