import type {
  HoroscopePeriod,
  HoroscopePeriodData,
  HoroscopeZodiacSign,
} from "./HoroscopePdfTypes";

/*
|--------------------------------------------------------------------------
| Signes astrologiques
|--------------------------------------------------------------------------
*/

const ZODIAC_LABELS: Record<
  HoroscopeZodiacSign,
  string
> = {
  belier: "Bélier",
  taureau: "Taureau",
  gemeaux: "Gémeaux",
  cancer: "Cancer",
  lion: "Lion",
  vierge: "Vierge",
  balance: "Balance",
  scorpion: "Scorpion",
  sagittaire: "Sagittaire",
  capricorne: "Capricorne",
  verseau: "Verseau",
  poissons: "Poissons",
};

/*
 * Ordre zodiacal utilisé pour calculer un signe
 * à partir d’une longitude comprise entre 0° et 360°.
 */
const ZODIAC_SIGNS_FROM_LONGITUDE: HoroscopeZodiacSign[] = [
  "belier",
  "taureau",
  "gemeaux",
  "cancer",
  "lion",
  "vierge",
  "balance",
  "scorpion",
  "sagittaire",
  "capricorne",
  "verseau",
  "poissons",
];

/*
|--------------------------------------------------------------------------
| Périodes
|--------------------------------------------------------------------------
*/

const PERIOD_LABELS: Record<
  HoroscopePeriod,
  string
> = {
  day: "Horoscope du jour",
  month: "Horoscope du mois",
  year: "Horoscope de l’année",
};

/*
|--------------------------------------------------------------------------
| Mois français
|--------------------------------------------------------------------------
*/

const MONTHS_FR = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

/*
|--------------------------------------------------------------------------
| Nom français du signe
|--------------------------------------------------------------------------
*/

/*
 * Retourne le nom français du signe.
 *
 * Exemple :
 * belier -> Bélier
 */
export function getHoroscopeZodiacLabel(
  sign: HoroscopeZodiacSign,
): string {
  return ZODIAC_LABELS[sign];
}

/*
|--------------------------------------------------------------------------
| Icône du signe
|--------------------------------------------------------------------------
*/

/*
 * Retourne le chemin public du PNG du signe.
 *
 * Les fichiers doivent être placés directement dans :
 * public/astrology/
 *
 * Exemples :
 * public/astrology/belier.png
 * public/astrology/scorpion.png
 */
export function getHoroscopeZodiacIconPath(
  sign: HoroscopeZodiacSign,
): string {
  return `/astrology/${sign}.png`;
}

/*
 * Retourne l’URL complète du PNG du signe.
 *
 * React PDF fonctionne généralement mieux avec une URL absolue
 * lors de la génération côté serveur.
 */
export function getHoroscopeZodiacIconUrl(
  sign: HoroscopeZodiacSign,
): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(
      /\/$/,
      "",
    ) || "https://luna-astralis.app";

  return `${baseUrl}${getHoroscopeZodiacIconPath(
    sign,
  )}`;
}

/*
|--------------------------------------------------------------------------
| Titres des périodes
|--------------------------------------------------------------------------
*/

/*
 * Retourne le titre selon le type de rapport.
 */
export function getHoroscopePeriodTitle(
  period: HoroscopePeriod,
): string {
  return PERIOD_LABELS[period];
}

/*
|--------------------------------------------------------------------------
| Validation du signe
|--------------------------------------------------------------------------
*/

/*
 * Vérifie qu’une valeur correspond à un signe connu.
 */
export function isHoroscopeZodiacSign(
  value: unknown,
): value is HoroscopeZodiacSign {
  return (
    typeof value === "string" &&
    Object.prototype.hasOwnProperty.call(
      ZODIAC_LABELS,
      value,
    )
  );
}

/*
|--------------------------------------------------------------------------
| Normalisation du signe
|--------------------------------------------------------------------------
*/

/*
 * Normalise un signe reçu depuis un formulaire
 * ou une route serveur.
 *
 * Exemples :
 * "Bélier" -> "belier"
 * "GÉMEAUX" -> "gemeaux"
 * "  Scorpion  " -> "scorpion"
 */
export function normalizeHoroscopeZodiacSign(
  value?: string | null,
): HoroscopeZodiacSign | null {
  if (typeof value !== "string") {
    return null;
  }

  const normalized = value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return isHoroscopeZodiacSign(normalized)
    ? normalized
    : null;
}

/*
|--------------------------------------------------------------------------
| Signe depuis la longitude
|--------------------------------------------------------------------------
*/

/*
 * Calcule le signe astrologique à partir
 * d’une longitude zodiacale.
 *
 * Exemples :
 * 0° à 29,999° -> Bélier
 * 30° à 59,999° -> Taureau
 * 210° à 239,999° -> Scorpion
 */
export function getHoroscopeZodiacFromLongitude(
  longitude?: number | null,
): HoroscopeZodiacSign | null {
  if (
    typeof longitude !== "number" ||
    !Number.isFinite(longitude)
  ) {
    return null;
  }

  /*
   * Sécurise les valeurs négatives
   * ou supérieures à 360°.
   */
  const normalizedLongitude =
    ((longitude % 360) + 360) % 360;

  const signIndex = Math.floor(
    normalizedLongitude / 30,
  );

  return (
    ZODIAC_SIGNS_FROM_LONGITUDE[signIndex] ??
    null
  );
}

/*
|--------------------------------------------------------------------------
| Formatage des dates
|--------------------------------------------------------------------------
*/

/*
 * Formate une date ISO en français.
 *
 * Exemple :
 * 2026-07-20 -> 20 juillet 2026
 */
export function formatHoroscopeDate(
  dateValue?: string | null,
): string {
  if (
    typeof dateValue !== "string" ||
    !dateValue.trim()
  ) {
    return "";
  }

  const match = dateValue.match(
    /^(\d{4})-(\d{2})-(\d{2})$/,
  );

  if (!match) {
    return dateValue;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  if (
    !Number.isInteger(year) ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31
  ) {
    return dateValue;
  }

  return `${day} ${
    MONTHS_FR[month - 1]
  } ${year}`;
}

/*
|--------------------------------------------------------------------------
| Formatage de la période
|--------------------------------------------------------------------------
*/

/*
 * Formate une période selon le type de rapport.
 */
export function formatHoroscopePeriodLabel(
  period: HoroscopePeriodData,
): string {
  if (period.label?.trim()) {
    return period.label.trim();
  }

  if (period.type === "day") {
    return formatHoroscopeDate(
      period.startDate,
    );
  }

  const match = period.startDate.match(
    /^(\d{4})-(\d{2})-(\d{2})$/,
  );

  if (!match) {
    return period.startDate;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);

  if (period.type === "month") {
    return `${
      MONTHS_FR[month - 1]
    } ${year}`;
  }

  return String(year);
}

/*
|--------------------------------------------------------------------------
| Titre complet du rapport
|--------------------------------------------------------------------------
*/

/*
 * Génère le titre principal complet du rapport.
 *
 * Exemple :
 * Horoscope du jour — Scorpion
 */
export function buildHoroscopeReportTitle(
  period: HoroscopePeriod,
  sign: HoroscopeZodiacSign,
): string {
  return `${getHoroscopePeriodTitle(
    period,
  )} — ${getHoroscopeZodiacLabel(sign)}`;
}

/*
|--------------------------------------------------------------------------
| Scores
|--------------------------------------------------------------------------
*/

/*
 * Sécurise un score pour qu’il reste entre 0 et 100.
 */
export function normalizeHoroscopeScore(
  value?: number | null,
): number {
  if (
    typeof value !== "number" ||
    !Number.isFinite(value)
  ) {
    return 0;
  }

  return Math.max(
    0,
    Math.min(
      100,
      Math.round(value),
    ),
  );
}

/*
|--------------------------------------------------------------------------
| Nettoyage des textes
|--------------------------------------------------------------------------
*/

/*
 * Retourne un texte propre sans espaces inutiles.
 */
export function cleanHoroscopeText(
  value?: string | null,
): string {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(/\s+/g, " ")
    .trim();
}

/*
|--------------------------------------------------------------------------
| Prénom
|--------------------------------------------------------------------------
*/

/*
 * Retourne le prénom ou un texte générique.
 */
export function getHoroscopeFirstName(
  firstName?: string | null,
): string {
  const cleaned =
    cleanHoroscopeText(firstName);

  return cleaned || "Vous";
}
