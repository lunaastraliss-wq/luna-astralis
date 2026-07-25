import { calculateChart } from "celestine";
import tzlookup from "tz-lookup";

import type {
  PremiumPlanet,
} from "@/components/PremiumPdf/PremiumPdfTypes";

import {
  normalizePlanets,
} from "@/components/PremiumPdf/PremiumPdfUtils";

import type {
  MonthlyAstrologyIdentity,
} from "./types";

/*
|--------------------------------------------------------------------------
| Types internes
|--------------------------------------------------------------------------
*/

type UnknownRecord =
  Record<string, unknown>;

type CelestineChartShape = {
  planets?: unknown;

  chart?: {
    planets?: unknown;
  };

  data?: {
    planets?: unknown;
  };
};

/*
|--------------------------------------------------------------------------
| Vérifications
|--------------------------------------------------------------------------
*/

export function isFiniteNumber(
  value: unknown,
): value is number {
  return (
    typeof value === "number" &&
    Number.isFinite(value)
  );
}

function isRecord(
  value: unknown,
): value is UnknownRecord {
  return (
    typeof value === "object" &&
    value !== null
  );
}

/*
|--------------------------------------------------------------------------
| Date et heure de naissance
|--------------------------------------------------------------------------
*/

export function parseBirthDate(
  value?: string,
): {
  year: number;
  month: number;
  day: number;
} | null {
  if (
    typeof value !== "string" ||
    !value.trim()
  ) {
    return null;
  }

  const cleanValue =
    value.trim();

  /*
   * Format ISO :
   * 1970-11-17
   */
  const isoMatch =
    cleanValue.match(
      /^(\d{4})-(\d{2})-(\d{2})$/,
    );

  if (isoMatch) {
    const year =
      Number(isoMatch[1]);

    const month =
      Number(isoMatch[2]);

    const day =
      Number(isoMatch[3]);

    return validateDateParts({
      year,
      month,
      day,
    });
  }

  /*
   * Format français :
   * 17/11/1970
   */
  const frenchMatch =
    cleanValue.match(
      /^(\d{2})\/(\d{2})\/(\d{4})$/,
    );

  if (frenchMatch) {
    const day =
      Number(frenchMatch[1]);

    const month =
      Number(frenchMatch[2]);

    const year =
      Number(frenchMatch[3]);

    return validateDateParts({
      year,
      month,
      day,
    });
  }

  return null;
}

function validateDateParts({
  year,
  month,
  day,
}: {
  year: number;
  month: number;
  day: number;
}): {
  year: number;
  month: number;
  day: number;
} | null {
  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day) ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31
  ) {
    return null;
  }

  const testDate =
    new Date(
      Date.UTC(
        year,
        month - 1,
        day,
      ),
    );

  if (
    testDate.getUTCFullYear() !==
      year ||
    testDate.getUTCMonth() !==
      month - 1 ||
    testDate.getUTCDate() !==
      day
  ) {
    return null;
  }

  return {
    year,
    month,
    day,
  };
}

export function parseBirthTime(
  value?: string,
): {
  hour: number;
  minute: number;
} {
  if (
    typeof value !== "string" ||
    !value.trim()
  ) {
    return {
      hour: 12,
      minute: 0,
    };
  }

  const match =
    value
      .trim()
      .match(
        /^(\d{1,2}):(\d{2})$/,
      );

  if (!match) {
    return {
      hour: 12,
      minute: 0,
    };
  }

  const hour =
    Number(match[1]);

  const minute =
    Number(match[2]);

  if (
    !Number.isInteger(hour) ||
    !Number.isInteger(minute) ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59
  ) {
    return {
      hour: 12,
      minute: 0,
    };
  }

  return {
    hour,
    minute,
  };
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
    formatter.formatToParts(
      date,
    );

  const values:
    Record<string, string> = {};

  for (const part of parts) {
    if (
      part.type !== "literal"
    ) {
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

export function getTimezoneOffsetHours({
  timeZone,
  year,
  month,
  day,
  hour,
  minute,
}: {
  timeZone: string;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}): number {
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
      new Date(
        localTimeAsUtc,
      ),
      timeZone,
    );

  const correctedUtcTime =
    localTimeAsUtc -
    offsetMinutes * 60_000;

  offsetMinutes =
    getTimeZoneOffsetMinutes(
      new Date(
        correctedUtcTime,
      ),
      timeZone,
    );

  return offsetMinutes / 60;
}

export function resolveTimeZone(
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
| Extraction des planètes
|--------------------------------------------------------------------------
*/

function collectionToPlanets(
  value: unknown,
): PremiumPlanet[] {
  if (Array.isArray(value)) {
    return normalizePlanets(
      value,
    );
  }

  if (!isRecord(value)) {
    return [];
  }

  const planets =
    Object.entries(value).map(
      ([name, planet]) => {
        if (!isRecord(planet)) {
          return {
            name,
          };
        }

        return {
          ...planet,
          name:
            typeof planet.name ===
            "string"
              ? planet.name
              : name,
        };
      },
    );

  return normalizePlanets(
    planets,
  );
}

export function extractCelestinePlanets(
  chartValue: unknown,
): PremiumPlanet[] {
  if (!isRecord(chartValue)) {
    return [];
  }

  const chart =
    chartValue as CelestineChartShape;

  const possibleCollections = [
    chart.planets,
    chart.chart?.planets,
    chart.data?.planets,
  ];

  for (
    const collection
    of possibleCollections
  ) {
    const planets =
      collectionToPlanets(
        collection,
      );

    if (planets.length > 0) {
      return planets;
    }
  }

  return [];
}

/*
|--------------------------------------------------------------------------
| Calcul Celestine générique
|--------------------------------------------------------------------------
*/

export function calculateCelestinePlanets({
  year,
  month,
  day,
  hour,
  minute,
  latitude,
  longitude,
  timeZone,
}: {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  latitude: number;
  longitude: number;
  timeZone: string;
}): PremiumPlanet[] {
  const timezoneOffset =
    getTimezoneOffsetHours({
      timeZone,
      year,
      month,
      day,
      hour,
      minute,
    });

  const chart =
    calculateChart({
      year,
      month,
      day,
      hour,
      minute,
      second: 0,
      timezone:
        timezoneOffset,
      latitude,
      longitude,
    });

  const planets =
    extractCelestinePlanets(
      chart,
    );

  if (planets.length === 0) {
    throw new Error(
      `Celestine n’a retourné aucune planète pour ${year}-${month}-${day}.`,
    );
  }

  return planets;
}

/*
|--------------------------------------------------------------------------
| Calcul du thème natal
|--------------------------------------------------------------------------
*/

export function calculateNatalPlanets(
  identity: MonthlyAstrologyIdentity,
): PremiumPlanet[] {
  const birthDate =
    parseBirthDate(
      identity.birthDate,
    );

  if (!birthDate) {
    return [];
  }

  if (
    !isFiniteNumber(
      identity.latitude,
    ) ||
    !isFiniteNumber(
      identity.longitude,
    )
  ) {
    return [];
  }

  const {
    hour,
    minute,
  } = parseBirthTime(
    identity.birthTime,
  );

  const timeZone =
    resolveTimeZone(
      identity,
    );

  return calculateCelestinePlanets({
    ...birthDate,
    hour,
    minute,
    latitude:
      identity.latitude,
    longitude:
      identity.longitude,
    timeZone,
  });
}
