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
        { ok: false, error: "Ville manquante" },
        { status: 400 }
      );
    }

    const result = await geocodeCity(city);

    if (!result) {
      return NextResponse.json(
        { ok: false, error: "Ville introuvable" },
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
