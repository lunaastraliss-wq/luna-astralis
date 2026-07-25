import { calculateChart } from "celestine";
import tzlookup from "tz-lookup";

import type {
  HoroscopeZodiacSign,
} from "../../HoroscopePdfTypes";

import {
  getHoroscopeZodiacFromLongitude,
  getHoroscopeZodiacLabel,
  normalizeHoroscopeZodiacSign,
} from "../../HoroscopePdfUtils";

import type {
  MonthlyAstrologyIdentity,
  MonthlyPlanetName,
  MonthlyPlanetPosition,
  MonthlySkySnapshot,
} from "./types";

/*
|--------------------------------------------------------------------------
| Types internes
|--------------------------------------------------------------------------
*/

type CelestinePlanet = {
  name?: unknown;
  sign?: unknown;
  longitude?: unknown;
  degree?: unknown;
  house?: unknown;
  retrograde?: unknown;
  speed?: unknown;
};

type CelestineChart = {
  planets?: unknown;
  positions?: unknown;
  chart?: {
    planets?: unknown;
  };
};

/*
|--------------------------------------------------------------------------
| Noms des planètes
|--------------------------------------------------------------------------
*/

const PLANET_NAMES: Record<
  string,
  MonthlyPlanetName
> = {
  Sun: "Soleil",
  Moon: "Lune",
  Mercury: "Mercure",
  Venus: "Vénus",
  Mars: "Mars",
  Jupiter: "Jupiter",
  Saturn: "Saturne",
  Uranus: "Uranus",
  Neptune: "Neptune",
  Pluto: "Pluton",
  Chiron: "Chiron",

  "North Node": "Nœud Nord",
  NorthNode: "Nœud Nord",
  TrueNode: "Nœud Nord",

  "South Node": "Nœud Sud",
  SouthNode: "Nœud Sud",
};

const ACCEPTED_PLANETS =
  new Set<MonthlyPlanetName>([
    "Soleil",
    "Lune",
    "Mercure",
    "Vénus",
    "Mars",
    "Jupiter",
    "Saturne",
    "Uranus",
    "Neptune",
    "Pluton",
    "Chiron",
    "Nœud Nord",
    "Nœud Sud",
  ]);

/*
|--------------------------------------------------------------------------
| Utilitaires généraux
|--------------------------------------------------------------------------
*/

function padNumber(
  value: number,
): string {
  return String(value).padStart(
    2,
    "0",
  );
}

function normalizeLongitude(
  value: number,
): number {
  return (
    ((value % 360) + 360) %
    360
  );
}

function isFiniteNumber(
  value: unknown,
): value is number {
  return (
    typeof value === "number" &&
    Number.isFinite(value)
  );
}

function isRecord(
  value: unknown,
): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null
  );
}

function getDaysInMonth(
  year: number,
  month: number,
): number {
  return new Date(
    year,
    month,
    0,
  ).getDate();
}

function buildIsoDate(
  year: number,
  month: number,
  day: number,
): string {
  return (
    `${year}-` +
    `${padNumber(month)}-` +
    `${padNumber(day)}`
  );
}

/*
|--------------------------------------------------------------------------
| Fuseau horaire
|--------------------------------------------------------------------------
*/

function getTimeZoneOffsetMinutes(
  date: Date,
  timeZone: string,
): number {
  const formatter =
    new Intl.DateTimeFormat(
      "en-CA",
      {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
      },
    );

  const parts =
    formatter.formatToParts(date);

  const values: Record<
    string,
    string
  > = {};

  for (const part of parts) {
    if (part.type !== "literal") {
      values[part.type] =
        part.value;
    }
  }

  const formattedAsUtc =
    Date.UTC(
      Number(values.year),
      Number(values.month) - 1,
      Number(values.day),
      Number(values.hour),
      Number(values.minute),
      Number(values.second),
    );

  return (
    formattedAsUtc -
    date.getTime()
  ) / 60_000;
}

function getTimezoneOffsetHours(
  timeZone: string,
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
): number {
  const localTimeAsUtc =
    Date.UTC(
      year,
      month - 1,
      day,
      hour,
      minute,
      0,
    );

  let offsetMinutes =
    getTimeZoneOffsetMinutes(
      new Date(localTimeAsUtc),
      timeZone,
    );

  const correctedUtcTime =
    localTimeAsUtc -
    offsetMinutes * 60_000;

  offsetMinutes =
    getTimeZoneOffsetMinutes(
      new Date(correctedUtcTime),
      timeZone,
    );

  return offsetMinutes / 60;
}

function resolveTimeZone(
  identity: MonthlyAstrologyIdentity,
): string {
  if (
    typeof identity.timezone ===
      "string" &&
    identity.timezone.trim()
  ) {
    return identity.timezone.trim();
  }

  if (
    isFiniteNumber(
      identity.latitude,
    ) &&
    isFiniteNumber(
      identity.longitude,
    )
  ) {
    return tzlookup(
      identity.latitude,
      identity.longitude,
    );
  }

  return "UTC";
}

/*
|--------------------------------------------------------------------------
| Lecture sécurisée du résultat Celestine
|--------------------------------------------------------------------------
*/

function extractPlanets(
  chartValue: unknown,
): CelestinePlanet[] {
  if (!isRecord(chartValue)) {
    return [];
  }

  const chart =
    chartValue as CelestineChart;

  const possibleCollections = [
    chart.planets,
    chart.positions,
    chart.chart?.planets,
  ];

  for (
    const collection
    of possibleCollections
  ) {
    if (Array.isArray(collection)) {
      return collection.filter(
        (
          planet,
        ): planet is CelestinePlanet =>
          isRecord(planet),
      );
    }

    /*
     * Certains moteurs retournent les planètes
     * sous forme d’objet :
     *
     * {
     *   Sun: {...},
     *   Moon: {...}
     * }
     */
    if (isRecord(collection)) {
      return Object.entries(
        collection,
      ).map(
        ([name, planet]) => {
          if (!isRecord(planet)) {
            return {
              name,
            };
          }

          return {
            name:
              typeof planet.name ===
              "string"
                ? planet.name
                : name,

            ...planet,
          };
        },
      );
    }
  }

  return [];
}

/*
|--------------------------------------------------------------------------
| Conversion du signe
|--------------------------------------------------------------------------
*/

function convertSignToInternalValue(
  signValue: unknown,
  longitude: number,
): HoroscopeZodiacSign | null {
  if (
    typeof signValue === "string"
  ) {
    const normalized =
      normalizeHoroscopeZodiacSign(
        signValue,
      );

    if (normalized) {
      return normalized;
    }

    const englishToFrench: Record<
      string,
      HoroscopeZodiacSign
    > = {
      Aries: "belier",
      Taurus: "taureau",
      Gemini: "gemeaux",
      Cancer: "cancer",
      Leo: "lion",
      Virgo: "vierge",
      Libra: "balance",
      Scorpio: "scorpion",
      Sagittarius: "sagittaire",
      Capricorn: "capricorne",
      Aquarius: "verseau",
      Pisces: "poissons",
    };

    const translated =
      englishToFrench[
        signValue.trim()
      ];

    if (translated) {
      return translated;
    }
  }

  return (
    getHoroscopeZodiacFromLongitude(
      longitude,
    )
  );
}

/*
|--------------------------------------------------------------------------
| Conversion d’une planète Celestine
|--------------------------------------------------------------------------
*/

function convertPlanet(
  rawPlanet: CelestinePlanet,
  date: string,
): MonthlyPlanetPosition | null {
  if (
    typeof rawPlanet.name !==
      "string" ||
    !isFiniteNumber(
      rawPlanet.longitude,
    )
  ) {
    return null;
  }

  const translatedName =
    PLANET_NAMES[
      rawPlanet.name.trim()
    ];

  if (
    !translatedName ||
    !ACCEPTED_PLANETS.has(
      translatedName,
    )
  ) {
    return null;
  }

  const longitude =
    normalizeLongitude(
      rawPlanet.longitude,
    );

  const sign =
    convertSignToInternalValue(
      rawPlanet.sign,
      longitude,
    );

  if (!sign) {
    return null;
  }

  const calculatedDegree =
    longitude % 30;

  const degree =
    isFiniteNumber(rawPlanet.degree)
      ? Math.max(
          0,
          Math.min(
            29.999999,
            rawPlanet.degree,
          ),
        )
      : calculatedDegree;

  return {
    planet: translatedName,
    date,

    longitude,
    degree,

    sign,
    signLabel:
      getHoroscopeZodiacLabel(
        sign,
      ),

    retrograde:
      rawPlanet.retrograde ===
      true,

    speed:
      isFiniteNumber(
        rawPlanet.speed,
      )
        ? rawPlanet.speed
        : undefined,
  };
}

/*
|--------------------------------------------------------------------------
| Calcul d’une journée
|--------------------------------------------------------------------------
*/

function calculateDailySnapshot({
  identity,
  year,
  month,
  day,
  timeZone,
}: {
  identity: MonthlyAstrologyIdentity;
  year: number;
  month: number;
  day: number;
  timeZone: string;
}): MonthlySkySnapshot {
  /*
   * Midi local est utilisé pour stabiliser
   * les calculs quotidiens et éviter qu’un
   * changement de fuseau fasse basculer la date.
   */
  const calculationHour = 12;
  const calculationMinute = 0;

  const latitude =
    isFiniteNumber(
      identity.latitude,
    )
      ? identity.latitude
      : 0;

  const longitude =
    isFiniteNumber(
      identity.longitude,
    )
      ? identity.longitude
      : 0;

  const timezoneOffset =
    getTimezoneOffsetHours(
      timeZone,
      year,
      month,
      day,
      calculationHour,
      calculationMinute,
    );

  const chart =
    calculateChart({
      year,
      month,
      day,

      hour: calculationHour,
      minute:
        calculationMinute,
      second: 0,

      timezone:
        timezoneOffset,

      latitude,
      longitude,
    });

  const date =
    buildIsoDate(
      year,
      month,
      day,
    );

  const positions =
    extractPlanets(chart)
      .map(
        (planet) =>
          convertPlanet(
            planet,
            date,
          ),
      )
      .filter(
        (
          planet,
        ): planet is MonthlyPlanetPosition =>
          planet !== null,
      );

  if (positions.length === 0) {
    throw new Error(
      `Aucune position planétaire trouvée pour le ${date}.`,
    );
  }

  return {
    date,
    positions,
  };
}

/*
|--------------------------------------------------------------------------
| Fonction principale
|--------------------------------------------------------------------------
*/

export function calculateMonthlySkySnapshots({
  identity,
  month,
  year,
}: {
  identity: MonthlyAstrologyIdentity;
  month: number;
  year: number;
}): MonthlySkySnapshot[] {
  if (
    !Number.isInteger(month) ||
    month < 1 ||
    month > 12
  ) {
    throw new Error(
      `Mois invalide : ${String(
        month,
      )}`,
    );
  }

  if (
    !Number.isInteger(year)
  ) {
    throw new Error(
      `Année invalide : ${String(
        year,
      )}`,
    );
  }

  const timeZone =
    resolveTimeZone(identity);

  const daysInMonth =
    getDaysInMonth(
      year,
      month,
    );

  const snapshots:
    MonthlySkySnapshot[] = [];

  for (
    let day = 1;
    day <= daysInMonth;
    day += 1
  ) {
    snapshots.push(
      calculateDailySnapshot({
        identity,
        year,
        month,
        day,
        timeZone,
      }),
    );
  }

  return snapshots;
}
