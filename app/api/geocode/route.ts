import __i18n from "../../../i18n/migrated/fr/app/api/geocode/route.json";
import { NextResponse } from "next/server";
import { geocodeCity } from "@/lib/geocoding";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");

    if (!city) {
      return NextResponse.json(
        { ok: false, error: __i18n["ville_manquante"] },
        { status: 400 }
      );
    }

    const result = await geocodeCity(city);

    if (!result) {
      return NextResponse.json(
        { ok: false, error: __i18n["ville_introuvable"] },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true, result: result });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? "Erreur inconnue" },
      { status: 500 }
    );
  }
}
