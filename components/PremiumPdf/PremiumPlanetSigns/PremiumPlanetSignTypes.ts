export type PremiumPlanetSignContent = {
  energy: string;
};

export type PremiumPlanetSignMap = Record<
  string,
  PremiumPlanetSignContent
>;

export type PremiumPlanetSignTexts = Record<
  string,
  PremiumPlanetSignMap
>;
