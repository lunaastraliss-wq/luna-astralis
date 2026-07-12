export type PremiumPlanet = {
  name?: string;
  sign?: string;
  longitude?: number;
  degree?: number;
  house?: number;
  retrograde?: boolean;
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
  angles?: PremiumAngles;

  wheelImage?: string;
};

export type PremiumPdfPlanetProps = {
  planets: PremiumPlanet[];
  planet: string;
};

export type PremiumPdfSummaryProps = {
  planets: PremiumPlanet[];
  angles: PremiumAngles;
};

export type PremiumPdfPlanetsProps = {
  planets: PremiumPlanet[];
};
