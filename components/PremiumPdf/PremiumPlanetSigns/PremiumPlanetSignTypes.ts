export type PremiumPlanetSignContent = {
  energy: string;

  strengths?: string[];

  challenges?: string[];

  evolution?: string;

  quote?: string;
};

export type PremiumPlanetSignMap = Record<
  string,
  PremiumPlanetSignContent
>;

export type PremiumPlanetSignTexts = Record<
  string,
  PremiumPlanetSignMap
>;
