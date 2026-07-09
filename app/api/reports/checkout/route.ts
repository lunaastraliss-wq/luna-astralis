import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ReportType = "essential" | "premium" | "signature";

function s(v: unknown) {
  return v == null ? "" : String(v).trim();
}

function cleanUrl(url: string) {
  const x = s(url);
  return x.endsWith("/") ? x.slice(0, -1) : x;
}

function isReportType(v: unknown): v is ReportType {
  return v === "essential" || v === "premium" || v === "signature";
}

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" })
  : null;

const SITE_URL = cleanUrl(process.env.NEXT_PUBLIC_SITE_URL || "");

const REPORT_PRICE: Record<ReportType, string> = {
  essential: s(process.env.STRIPE_PRICE_ESSENTIAL),
  premium: s(process.env.STRIPE_PRICE_PREMIUM),
  signature: s(process.env.STRIPE_PRICE_SIGNATURE),
};

export async function POST(req: Request) {
  try {
    if (!stripe) {
      return NextResponse.json({ error: "STRIPE_SECRET_KEY_MISSING" }, { status: 500 });
    }

    if (!SITE_URL) {
      return NextResponse.json({ error: "NEXT_PUBLIC_SITE_URL_MISSING" }, { status: 500 });
    }

    const body = await req.json().catch(() => null);
    if (!body) return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 });

    const reportType = s(body.reportType);
    if (!isReportType(reportType)) {
      return NextResponse.json({ error: "INVALID_REPORT_TYPE" }, { status: 400 });
    }

    const priceId = REPORT_PRICE[reportType];
    if (!priceId) {
      return NextResponse.json({ error: "REPORT_PRICE_MISSING" }, { status: 500 });
    }

    const birthData = {
      firstName: s(body.firstName),
      birthDate: s(body.birthDate),
      birthTime: s(body.birthTime),
      birthCity: s(body.birthCity),
      birthCountry: s(body.birthCountry),
      latitude: s(body.latitude),
      longitude: s(body.longitude),
      timezone: s(body.timezone),
    };

    if (!birthData.firstName || !birthData.birthDate || !birthData.birthTime || !birthData.birthCity) {
      return NextResponse.json({ error: "MISSING_BIRTH_DATA" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],

      // TEMPORAIRE POUR TESTS : coupon 100 %
      discounts: [{ coupon: "GIsj9JR0" }],

      customer_email: s(body.email) || undefined,

      success_url: `${SITE_URL}/report-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/carte-du-ciel?canceled=1`,

      metadata: {
        app: "luna-astralis",
        product: "astrology_report",
        report_type: reportType,
        birth_data: JSON.stringify(birthData),
      },
    });

    return NextResponse.json({ url: session.url, session_id: session.id });
  } catch (err: any) {
    console.error("[reports checkout]", err);
    return NextResponse.json(
      { error: err?.message || "REPORT_CHECKOUT_ERROR" },
      { status: 500 }
    );
  }
}
