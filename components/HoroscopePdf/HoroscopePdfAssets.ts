export const HOROSCOPE_BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://luna-astralis.app";

export const HOROSCOPE_LOGO_URL =
  `${HOROSCOPE_BASE_URL}/images/logo-luna-astralis.png`;

export const HOROSCOPE_ASTROLOGY_URL =
  `${HOROSCOPE_BASE_URL}/astrology`;

export const HOROSCOPE_ICONS = {
  guidance: `${HOROSCOPE_ASTROLOGY_URL}/integration-guide.png?v=2`,
  energy: `${HOROSCOPE_ASTROLOGY_URL}/sun.png?v=2`,
  love: `${HOROSCOPE_ASTROLOGY_URL}/heart.png?v=2`,
  money: `${HOROSCOPE_ASTROLOGY_URL}/money.png?v=2`,
  career: `${HOROSCOPE_ASTROLOGY_URL}/life-purpose.png?v=2`,
  wellbeing: `${HOROSCOPE_ASTROLOGY_URL}/inner-world.png?v=2`,
  quote: `${HOROSCOPE_ASTROLOGY_URL}/moon.png?v=2`,
};

export const HOROSCOPE_PLANET_ICONS = {
  sun: `${HOROSCOPE_ASTROLOGY_URL}/sun.png?v=2`,
  moon: `${HOROSCOPE_ASTROLOGY_URL}/moon.png?v=2`,
  mercury: `${HOROSCOPE_ASTROLOGY_URL}/mercury.png?v=2`,
  venus: `${HOROSCOPE_ASTROLOGY_URL}/venus.png?v=2`,
  mars: `${HOROSCOPE_ASTROLOGY_URL}/mars.png?v=2`,
  jupiter: `${HOROSCOPE_ASTROLOGY_URL}/jupiter.png?v=2`,
  saturn: `${HOROSCOPE_ASTROLOGY_URL}/saturn.png?v=2`,
  uranus: `${HOROSCOPE_ASTROLOGY_URL}/uranus.png?v=2`,
  neptune: `${HOROSCOPE_ASTROLOGY_URL}/neptune.png?v=2`,
  pluto: `${HOROSCOPE_ASTROLOGY_URL}/pluto.png?v=2`,
};

export const HOROSCOPE_ELEMENT_ICONS = {
  fire: `${HOROSCOPE_ASTROLOGY_URL}/element-fire.png?v=2`,
  earth: `${HOROSCOPE_ASTROLOGY_URL}/element-earth.png?v=2`,
  air: `${HOROSCOPE_ASTROLOGY_URL}/element-air.png?v=2`,
  water: `${HOROSCOPE_ASTROLOGY_URL}/element-water.png?v=2`,
  fourElements: `${HOROSCOPE_ASTROLOGY_URL}/four-elements.png?v=2`,
};

export const HOROSCOPE_MODALITY_ICONS = {
  cardinal: `${HOROSCOPE_ASTROLOGY_URL}/modality-cardinal.png?v=2`,
  fixed: `${HOROSCOPE_ASTROLOGY_URL}/modality-fixed.png?v=2`,
  mutable: `${HOROSCOPE_ASTROLOGY_URL}/modality-mutable.png?v=2`,
};
