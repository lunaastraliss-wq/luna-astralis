import type { HoroscopeZodiacSign } from "./HoroscopePdfTypes";

/*
 * Domaine public utilisé par React PDF pour charger les images.
 *
 * En production, les fichiers sont chargés directement depuis le site.
 * Cela évite les problèmes liés aux chemins relatifs dans les PDF générés
 * côté serveur.
 */
export const HOROSCOPE_BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://luna-astralis.app";

/*
 * Logo principal Luna Astralis.
 *
 * Le fichier doit être placé dans :
 * public/images/logo-luna-astralis.png
 */
export const HOROSCOPE_LOGO_URL =
  `${HOROSCOPE_BASE_URL}/images/logo-luna-astralis.png`;

/*
 * Image utilisée comme arrière-plan de la couverture.
 *
 * Le fichier doit être placé dans :
 * public/images/horoscope/horoscope-cover.png
 */
export const HOROSCOPE_COVER_URL =
  `${HOROSCOPE_BASE_URL}/images/horoscope/horoscope-cover.png`;

/*
 * Image décorative utilisée à l’intérieur du rapport.
 *
 * Le fichier doit être placé dans :
 * public/images/horoscope/horoscope-moon.png
 */
export const HOROSCOPE_MOON_URL =
  `${HOROSCOPE_BASE_URL}/images/horoscope/horoscope-moon.png`;

/*
 * Petite décoration astrologique facultative.
 *
 * Le fichier doit être placé dans :
 * public/images/horoscope/horoscope-stars.png
 */
export const HOROSCOPE_STARS_URL =
  `${HOROSCOPE_BASE_URL}/images/horoscope/horoscope-stars.png`;

/*
 * Icônes des douze signes.
 *
 * Les fichiers doivent être placés dans :
 *
 * public/images/zodiac/belier.png
 * public/images/zodiac/taureau.png
 * public/images/zodiac/gemeaux.png
 * etc.
 */
export const HOROSCOPE_ZODIAC_ICONS: Record<
  HoroscopeZodiacSign,
  string
> = {
  belier: `${HOROSCOPE_BASE_URL}/images/zodiac/belier.png`,
  taureau: `${HOROSCOPE_BASE_URL}/images/zodiac/taureau.png`,
  gemeaux: `${HOROSCOPE_BASE_URL}/images/zodiac/gemeaux.png`,
  cancer: `${HOROSCOPE_BASE_URL}/images/zodiac/cancer.png`,
  lion: `${HOROSCOPE_BASE_URL}/images/zodiac/lion.png`,
  vierge: `${HOROSCOPE_BASE_URL}/images/zodiac/vierge.png`,
  balance: `${HOROSCOPE_BASE_URL}/images/zodiac/balance.png`,
  scorpion: `${HOROSCOPE_BASE_URL}/images/zodiac/scorpion.png`,
  sagittaire: `${HOROSCOPE_BASE_URL}/images/zodiac/sagittaire.png`,
  capricorne: `${HOROSCOPE_BASE_URL}/images/zodiac/capricorne.png`,
  verseau: `${HOROSCOPE_BASE_URL}/images/zodiac/verseau.png`,
  poissons: `${HOROSCOPE_BASE_URL}/images/zodiac/poissons.png`,
};

/*
 * Icônes des planètes.
 *
 * Les clés sont volontairement en minuscules pour rester compatibles
 * avec les données utilisées dans les autres PDF Luna Astralis.
 */
export const HOROSCOPE_PLANET_ICONS: Record<string, string> = {
  soleil: `${HOROSCOPE_BASE_URL}/images/planets/sun.png`,
  lune: `${HOROSCOPE_BASE_URL}/images/planets/moon.png`,
  mercure: `${HOROSCOPE_BASE_URL}/images/planets/mercury.png`,
  venus: `${HOROSCOPE_BASE_URL}/images/planets/venus.png`,
  mars: `${HOROSCOPE_BASE_URL}/images/planets/mars.png`,
  jupiter: `${HOROSCOPE_BASE_URL}/images/planets/jupiter.png`,
  saturne: `${HOROSCOPE_BASE_URL}/images/planets/saturn.png`,
  uranus: `${HOROSCOPE_BASE_URL}/images/planets/uranus.png`,
  neptune: `${HOROSCOPE_BASE_URL}/images/planets/neptune.png`,
  pluton: `${HOROSCOPE_BASE_URL}/images/planets/pluto.png`,
  chiron: `${HOROSCOPE_BASE_URL}/images/planets/chiron.png`,
  noeud_nord: `${HOROSCOPE_BASE_URL}/images/planets/north-node.png`,
  noeud_sud: `${HOROSCOPE_BASE_URL}/images/planets/south-node.png`,
};

/*
 * Retourne l’icône d’un signe.
 */
export function getHoroscopeZodiacIcon(
  sign: HoroscopeZodiacSign,
): string {
  return HOROSCOPE_ZODIAC_ICONS[sign];
}

/*
 * Normalise le nom d’une planète pour éviter les erreurs provoquées
 * par les majuscules, les espaces ou les accents.
 */
export function normalizeHoroscopePlanetKey(
  planet?: string | null,
): string {
  if (typeof planet !== "string") {
    return "";
  }

  return planet
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-\s]+/g, "_");
}

/*
 * Retourne l’icône d’une planète lorsqu’elle existe.
 */
export function getHoroscopePlanetIcon(
  planet?: string | null,
): string | undefined {
  const key = normalizeHoroscopePlanetKey(planet);

  return HOROSCOPE_PLANET_ICONS[key];
}
