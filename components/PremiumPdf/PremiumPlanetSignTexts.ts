import {
  MOON_SIGN_TEXTS,
} from "./PremiumPlanetSigns/PremiumPlanetSignMoon";

import {
  SUN_SIGN_TEXTS,
} from "./PremiumPlanetSigns/PremiumPlanetSignSun";

import type {
  PremiumPlanetSignContent,
  PremiumPlanetSignTexts,
} from "./PremiumPlanetSigns/PremiumPlanetSignTypes";

export type {
  PremiumPlanetSignContent,
  PremiumPlanetSignTexts,
};

export const PREMIUM_PLANET_SIGN_TEXTS: PremiumPlanetSignTexts = {
  Sun: SUN_SIGN_TEXTS,
  Moon: MOON_SIGN_TEXTS,
};

export function getPremiumPlanetSignContent(
  planet: string,
  sign: string
): PremiumPlanetSignContent | null {
  const planetContent =
    PREMIUM_PLANET_SIGN_TEXTS[planet];

  if (!planetContent) {
    return null;
  }

  return planetContent[sign] || null;
}
