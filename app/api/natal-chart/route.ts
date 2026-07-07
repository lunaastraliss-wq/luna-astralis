import { NextResponse } from "next/server";
import { calculateChart } from "celestine";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { year, month, day, hour, minute, latitude, longitude, timezoneOffset } = body;

    if (
      typeof year !== "number" ||
      typeof month !== "number" ||
      typeof day !== "number" ||
      typeof latitude !== "number" ||
      typeof longitude !== "number"
    ) {
      return NextResponse.json(
        { ok: false, error: "Donnees manquantes ou invalides" },
        { status: 400 }
      );
    }

    const chart = calculateChart({
      year: year,
      month: month,
      day: day,
      hour: hour ?? 12,
      minute: minute ?? 0,
      second: 0,
      timezone: timezoneOffset ?? 0,
      latitude: latitude,
      longitude: longitude,
    });

    return NextResponse.json({ ok: true, chart: chart });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? "Erreur inconnue" },
      { status: 500 }
    );
  }
}
