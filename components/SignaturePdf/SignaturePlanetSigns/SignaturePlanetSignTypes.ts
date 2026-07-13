export type SignaturePlanetSignContent = {
  energy: string;

  strengths?: string[];

  challenges?: string[];

  evolution?: string;

  quote?: string;
};

export type SignaturePlanetSignMap = Record<
  string,
  SignaturePlanetSignContent
>;

export type SignaturePlanetSignTexts = Record<
  string,
  SignaturePlanetSignMap
>;
