import {
  JUPITER_SIGN_TEXTS,
} from "./SignaturePlanetSigns/SignaturePlanetSignJupiter";

import {
  MARS_SIGN_TEXTS,
} from "./SignaturePlanetSigns/SignaturePlanetSignMars";

import {
  MERCURY_SIGN_TEXTS,
} from "./SignaturePlanetSigns/SignaturePlanetSignMercury";

import {
  MOON_SIGN_TEXTS,
} from "./SignaturePlanetSigns/SignaturePlanetSignMoon";

import {
  NEPTUNE_SIGN_TEXTS,
} from "./SignaturePlanetSigns/SignaturePlanetSignNeptune";

import {
  PLUTO_SIGN_TEXTS,
} from "./SignaturePlanetSigns/SignaturePlanetSignPluto";

import {
  SATURN_SIGN_TEXTS,
} from "./SignaturePlanetSigns/SignaturePlanetSignSaturn";

import {
  SUN_SIGN_TEXTS,
} from "./SignaturePlanetSigns/SignaturePlanetSignSun";

import {
  URANUS_SIGN_TEXTS,
} from "./SignaturePlanetSigns/SignaturePlanetSignUranus";

import {
  VENUS_SIGN_TEXTS,
} from "./SignaturePlanetSigns/SignaturePlanetSignVenus";

import type {
  SignaturePlanetSignContent,
  SignaturePlanetSignTexts,
} from "./SignaturePlanetSigns/SignaturePlanetSignTypes";

export type {
  SignaturePlanetSignContent,
  SignaturePlanetSignTexts,
};

export const SIGNATURE_PLANET_SIGN_TEXTS: SignaturePlanetSignTexts = {
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

export function getSignaturePlanetSignContent(
  planet: string,
  sign: string
): SignaturePlanetSignContent | null {
  const planetContent =
    SIGNATURE_PLANET_SIGN_TEXTS[planet];

  if (!planetContent) {
    return null;
  }

  return planetContent[sign] || null;
}
