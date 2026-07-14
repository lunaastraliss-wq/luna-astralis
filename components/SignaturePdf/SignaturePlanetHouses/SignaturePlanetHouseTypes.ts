export type SignaturePlanetHouseContent = {
  influence: string;
};

export type SignatureHousePlanetTexts = Record<
  string,
  SignaturePlanetHouseContent
>;

export type SignaturePlanetHouseTexts = Record<
  number,
  SignatureHousePlanetTexts
>;
