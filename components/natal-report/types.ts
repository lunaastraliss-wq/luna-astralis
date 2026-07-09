export type NatalOffer = "essential" | "premium" | "signature";

export type PlanetData = {
  name: string;
  sign?: string;
  house?: number;
  degree?: number;
  retrograde?: boolean;
};

export type AngleData = {
  ascendant?: string;
  midheaven?: string;
  descendant?: string;
  imumCoeli?: string;
};

export type NatalReportData = {
  firstName: string;
  birthDate: string;
  birthTime: string;
  birthCity: string;

  planets: PlanetData[];

  angles?: AngleData;

  houses?: any[];
  aspects?: any[];

  dominantElement?: string;
  dominantMode?: string;
};
