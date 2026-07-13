export type SignaturePlanet = {
  name?: string;
  sign?: string;
  longitude?: number;
  degree?: number;
  house?: number;
  retrograde?: boolean;
};

export type SignatureAspect = {
  planet1?: string;
  planet2?: string;
  type?: string;
  orb?: number;
};

export type SignatureAngles = {
  ascendant?: number;
  midheaven?: number;
  descendant?: number;
  imumCoeli?: number;
  [key: string]: unknown;
};

export type SignaturePdfProps = {
  firstName?: string;
  birthDate?: string;
  birthTime?: string;
  birthCity?: string;

  planets?: SignaturePlanet[];
  aspects?: SignatureAspect[];
  angles?: SignatureAngles;

  wheelImage?: string;
};

export type SignaturePdfPlanetProps = {
  planets: SignaturePlanet[];
  aspects?: SignatureAspect[];
  planet: string;
};

export type SignaturePdfSummaryProps = {
  planets: SignaturePlanet[];
  angles: SignatureAngles;
};

export type SignaturePdfPlanetsProps = {
  planets: SignaturePlanet[];
  aspects?: SignatureAspect[];
};
