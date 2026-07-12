export type PremiumPlanetHouseContent = {
  influence: string;
};

export type PremiumHousePlanetTexts = Record<
  string,
  PremiumPlanetHouseContent
>;

export type PremiumPlanetHouseTexts = Record<
  number,
  PremiumHousePlanetTexts
>;
