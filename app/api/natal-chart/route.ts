import __i18n from "../../../i18n/migrated/fr/app/api/natal-chart/route.json";
import { NextResponse } from "next/server";
import { calculateChart } from "celestine";
import tzlookup from "tz-lookup";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type NatalChartRequest = {
  year?: unknown;
  month?: unknown;
  day?: unknown;
  hour?: unknown;
  minute?: unknown;
  latitude?: unknown;
  longitude?: unknown;
};

function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function getTimeZoneOffsetMinutes(
  date: Date,
  timeZone: string
): number {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });

  const parts = formatter.formatToParts(date);
  const values: Record<string, string> = {};

  for (const part of parts) {
    if (part.type !== "literal") {
      values[part.type] = part.value;
    }
  }

  const formattedAsUtc = Date.UTC(
    Number(values.year),
    Number(values.month) - 1,
    Number(values.day),
    Number(values.hour),
    Number(values.minute),
    Number(values.second)
  );

  return (formattedAsUtc - date.getTime()) / 60000;
}

/**
 * Trouve le décalage UTC correspondant à une heure locale précise.
 *
 * Une seconde passe est nécessaire parce que le décalage peut changer
 * selon l'heure d'été ou l'heure standard.
 */
function getTimezoneOffsetHours(
  timeZone: string,
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number
): number {
  const localTimeAsUtc = Date.UTC(
    year,
    month - 1,
    day,
    hour,
    minute,
    0
  );

  let offsetMinutes = getTimeZoneOffsetMinutes(
    new Date(localTimeAsUtc),
    timeZone
  );

  const correctedUtcTime =
    localTimeAsUtc - offsetMinutes * 60_000;

  offsetMinutes = getTimeZoneOffsetMinutes(
    new Date(correctedUtcTime),
    timeZone
  );

  return offsetMinutes / 60;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as NatalChartRequest;

    const {
      year,
      month,
      day,
      hour,
      minute,
      latitude,
      longitude,
    } = body;

    if (
      !isFiniteNumber(year) ||
      !isFiniteNumber(month) ||
      !isFiniteNumber(day) ||
      !isFiniteNumber(latitude) ||
      !isFiniteNumber(longitude)
    ) {
      return NextResponse.json(
        {
          ok: false,
          error: __i18n["donnees_manquantes_ou_invalides"],
        },
        { status: 400 }
      );
    }

    const birthHour = isFiniteNumber(hour) ? hour : 12;
    const birthMinute = isFiniteNumber(minute) ? minute : 0;

    if (
      !Number.isInteger(year) ||
      !Number.isInteger(month) ||
      !Number.isInteger(day) ||
      !Number.isInteger(birthHour) ||
      !Number.isInteger(birthMinute) ||
      month < 1 ||
      month > 12 ||
      day < 1 ||
      day > 31 ||
      birthHour < 0 ||
      birthHour > 23 ||
      birthMinute < 0 ||
      birthMinute > 59 ||
      latitude < -90 ||
      latitude > 90 ||
      longitude < -180 ||
      longitude > 180
    ) {
      return NextResponse.json(
        {
          ok: false,
          error: __i18n["date_heure_ou_coordonnees_invalides"],
        },
        { status: 400 }
      );
    }

    const testDate = new Date(
      Date.UTC(year, month - 1, day)
    );

    if (
      testDate.getUTCFullYear() !== year ||
      testDate.getUTCMonth() !== month - 1 ||
      testDate.getUTCDate() !== day
    ) {
      return NextResponse.json(
        {
          ok: false,
          error: __i18n["la_date_de_naissance_est_invalide"],
        },
        { status: 400 }
      );
    }

    const timeZone = tzlookup(latitude, longitude);

    const timezoneOffset = getTimezoneOffsetHours(
      timeZone,
      year,
      month,
      day,
      birthHour,
      birthMinute
    );

    const chart = calculateChart({
      year,
      month,
      day,
      hour: birthHour,
      minute: birthMinute,
      second: 0,
      timezone: timezoneOffset,
      latitude,
      longitude,
    });

    return NextResponse.json({
      ok: true,
      chart,
      debug: {
        timeZone,
        timezoneOffset,
        birthHour,
        birthMinute,
      },
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : "Erreur inconnue";

    console.error("Erreur natal-chart :", error);

    return NextResponse.json(
      {
        ok: false,
        error: message,
      },
      { status: 500 }
    );
  }
}
