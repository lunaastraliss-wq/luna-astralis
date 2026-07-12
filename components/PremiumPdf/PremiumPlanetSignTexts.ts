import {
  JUPITER_SIGN_TEXTS,
} from "./PremiumPlanetSigns/PremiumPlanetSignJupiter";

import {
  MARS_SIGN_TEXTS,
} from "./PremiumPlanetSigns/PremiumPlanetSignMars";

import {
  MERCURY_SIGN_TEXTS,
} from "./PremiumPlanetSigns/PremiumPlanetSignMercury";

import {
  MOON_SIGN_TEXTS,
} from "./PremiumPlanetSigns/PremiumPlanetSignMoon";

import {
  NEPTUNE_SIGN_TEXTS,
} from "./PremiumPlanetSigns/PremiumPlanetSignNeptune";

import {
  PLUTO_SIGN_TEXTS,
} from "./PremiumPlanetSigns/PremiumPlanetSignPluto";

import {
  SATURN_SIGN_TEXTS,
} from "./PremiumPlanetSigns/PremiumPlanetSignSaturn";

import {
  SUN_SIGN_TEXTS,
} from "./PremiumPlanetSigns/PremiumPlanetSignSun";

import {
  URANUS_SIGN_TEXTS,
} from "./PremiumPlanetSigns/PremiumPlanetSignUranus";

import {
  VENUS_SIGN_TEXTS,
} from "./PremiumPlanetSigns/PremiumPlanetSignVenus";

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
  Mercury: MERCURY_SIGN_TEXTS,
  Venus: VENUS_SIGN_TEXTS,
  Mars: MARS_SIGN_TEXTS,
  Jupiter: JUPITER_SIGN_TEXTS,
  Saturn: SATURN_SIGN_TEXTS,
  Uranus: URANUS_SIGN_TEXTS,
  Neptune: NEPTUNE_SIGN_TEXTS,
  Pluto: PLUTO_SIGN_TEXTS,
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
