import { NextResponse } from "next/server";
import { calculateChart } from "celestine";
import tzlookup from "tz-lookup";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getTimezoneOffsetHours(
  timeZone: string,
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number
) {
  const utcDate = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(utcDate);
  const values: Record<string, string> = {};

  for (const part of parts) {
    if (part.type !== "literal") {
      values[part.type] = part.value;
    }
  }

  const asUTC = Date.UTC(
    Number(values.year),
    Number(values.month) - 1,
    Number(values.day),
    Number(values.hour),
    Number(values.minute),
    Number(values.second)
  );

  const offsetMinutes = (asUTC - utcDate.getTime()) / 60000;
  return offsetMinutes / 60;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { year, month, day, hour, minute, latitude, longitude } = body;

    if (
      typeof year !== "number" ||
      typeof month !== "number" ||
      typeof day !== "number" ||
      typeof latitude !== "number" ||
      typeof longitude !== "number"
    ) {
      return NextResponse.json(
        { ok: false, error: "Données manquantes ou invalides" },
        { status: 400 }
      );
    }

    const birthHour = typeof hour === "number" ? hour : 12;
    const birthMinute = typeof minute === "number" ? minute : 0;

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
      },
    });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? "Erreur inconnue" },
      { status: 500 }
    );
  }
}
