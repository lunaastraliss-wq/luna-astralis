import { calculateChart } from "celestine";
import tzlookup from "tz-lookup";

export type CalculateNatalChartParams = {
  birthDate: string;
  birthTime: string;

  latitude: number;
  longitude: number;

  timeZone?: string;
};

export type NatalChartResult = {
  birthDate: string;
  birthTime: string;

  latitude: number;
  longitude: number;

  timeZone: string;
  timezoneOffset: number;

  planets: any[];
  angles: Record<string, unknown>;
};

function clean(value: unknown): string {
  return value == null
    ? ""
    : String(value).trim();
}

function parseBirthDate(date: string) {
  const normalizedDate = clean(date);

  if (normalizedDate.includes("/")) {
    const [day, month, year] =
      normalizedDate
        .split("/")
        .map(Number);

    return {
      year,
      month,
      day,
    };
  }

  const [year, month, day] =
    normalizedDate
      .split("-")
      .map(Number);

  return {
    year,
    month,
    day,
  };
}

function parseBirthTime(time: string) {
  const [hour, minute] =
    clean(time)
      .split(":")
      .map(Number);

  return {
    hour:
      Number.isFinite(hour)
        ? hour
        : 12,

    minute:
      Number.isFinite(minute)
        ? minute
        : 0,
  };
}

function isValidDateParts(
  year: number,
  month: number,
  day: number,
): boolean {
  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day)
  ) {
    return false;
  }

  if (
    year < 1800 ||
    year > 2200
  ) {
    return false;
  }

  if (
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31
  ) {
    return false;
  }

  const testDate = new Date(
    Date.UTC(
      year,
      month - 1,
      day,
    ),
  );

  return (
    testDate.getUTCFullYear() === year &&
    testDate.getUTCMonth() === month - 1 &&
    testDate.getUTCDate() === day
  );
}

function isValidTimeParts(
  hour: number,
  minute: number,
): boolean {
  return (
    Number.isInteger(hour) &&
    Number.isInteger(minute) &&
    hour >= 0 &&
    hour <= 23 &&
    minute >= 0 &&
    minute <= 59
  );
}

function getTimezoneOffsetHours(
  timeZone: string,
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
): number {
  const utcDate = new Date(
    Date.UTC(
      year,
      month - 1,
      day,
      hour,
      minute,
      0,
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

export function calculateNatalChart({
  birthDate,
  birthTime,
  latitude,
  longitude,
  timeZone,
}: CalculateNatalChartParams): NatalChartResult {
  if (
    !birthDate ||
    !birthTime ||
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude)
  ) {
    throw new Error(
      "INVALID_BIRTH_DATA",
    );
  }

  const {
    year,
    month,
    day,
  } = parseBirthDate(
    birthDate,
  );

  const {
    hour,
    minute,
  } = parseBirthTime(
    birthTime,
  );

  if (
    !isValidDateParts(
      year,
      month,
      day,
    )
  ) {
    throw new Error(
      "INVALID_BIRTH_DATE",
    );
  }

  if (
    !isValidTimeParts(
      hour,
      minute,
    )
  ) {
    throw new Error(
      "INVALID_BIRTH_TIME",
    );
  }

  let resolvedTimeZone =
    clean(timeZone);

  if (!resolvedTimeZone) {
    try {
      resolvedTimeZone =
        tzlookup(
          latitude,
          longitude,
        );
    } catch (error: any) {
      throw new Error(
        error?.message ||
          "TIMEZONE_LOOKUP_FAILED",
      );
    }
  }

  const timezoneOffset =
    getTimezoneOffsetHours(
      resolvedTimeZone,
      year,
      month,
      day,
      hour,
      minute,
    );

  const chart = calculateChart({
    year,
    month,
    day,
    hour,
    minute,
    second: 0,
    timezone: timezoneOffset,
    latitude,
    longitude,
  });

  return {
    birthDate,
    birthTime,

    latitude,
    longitude,

    timeZone:
      resolvedTimeZone,

    timezoneOffset,

    planets:
      Array.isArray(
        (chart as any)?.planets,
      )
        ? (chart as any).planets
        : [],

    angles:
      (chart as any)?.angles &&
      typeof (chart as any).angles ===
        "object"
        ? (chart as any).angles
        : {},
  };
}
