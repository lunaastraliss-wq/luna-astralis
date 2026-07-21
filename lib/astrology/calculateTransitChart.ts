import { calculateChart } from "celestine";

import type {
  PremiumPlanet,
} from "@/components/PremiumPdf/PremiumPdfTypes";

type CalculateTransitChartParams = {
  latitude: number;
  longitude: number;
  timeZone: string;
  date?: Date;
};

export type TransitChartResult = {
  date: Date;
  timezoneOffset: number;
  planets: PremiumPlanet[];
  angles: Record<string, unknown>;
};

function getTimezoneOffsetHours(
  timeZone: string,
  date: Date,
): number {
  const utcDate = new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
    ),
  );

  const formatter =
    new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      },
    );

  const values:
    Record<string, string> = {};

  for (
    const part of formatter.formatToParts(
      utcDate,
    )
  ) {
    if (part.type !== "literal") {
      values[part.type] =
        part.value;
    }
  }

  let formattedHour =
    Number(values.hour);

  if (formattedHour === 24) {
    formattedHour = 0;
  }

  const localTimeAsUtc =
    Date.UTC(
      Number(values.year),
      Number(values.month) - 1,
      Number(values.day),
      formattedHour,
      Number(values.minute),
      Number(values.second),
    );

  return (
    localTimeAsUtc -
    utcDate.getTime()
  ) / 3_600_000;
}

function getDatePartsInTimezone(
  date: Date,
  timeZone: string,
) {
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
        hour12: false,
      },
    );

  const values:
    Record<string, string> = {};

  for (
    const part of formatter.formatToParts(
      date,
    )
  ) {
    if (part.type !== "literal") {
      values[part.type] =
        part.value;
    }
  }

  let hour =
    Number(values.hour);

  if (hour === 24) {
    hour = 0;
  }

  return {
    year: Number(values.year),
    month: Number(values.month),
    day: Number(values.day),
    hour,
    minute: Number(values.minute),
    second: Number(values.second),
  };
}

export function calculateTransitChart({
  latitude,
  longitude,
  timeZone,
  date = new Date(),
}: CalculateTransitChartParams): TransitChartResult {
  if (
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude)
  ) {
    throw new Error(
      "INVALID_TRANSIT_COORDINATES",
    );
  }

  if (
    typeof timeZone !== "string" ||
    !timeZone.trim()
  ) {
    throw new Error(
      "INVALID_TRANSIT_TIMEZONE",
    );
  }

  const safeTimeZone =
    timeZone.trim();

  const {
    year,
    month,
    day,
    hour,
    minute,
    second,
  } = getDatePartsInTimezone(
    date,
    safeTimeZone,
  );

  const timezoneOffset =
    getTimezoneOffsetHours(
      safeTimeZone,
      date,
    );

  const chart = calculateChart({
    year,
    month,
    day,
    hour,
    minute,
    second,
    timezone: timezoneOffset,
    latitude,
    longitude,
  });

  return {
    date,
    timezoneOffset,

    planets:
      Array.isArray(
        (chart as any)?.planets,
      )
        ? (
            chart as any
          ).planets
        : [],

    angles:
      (chart as any)?.angles &&
      typeof (chart as any).angles ===
        "object"
        ? (chart as any).angles
        : {},
  };
}
