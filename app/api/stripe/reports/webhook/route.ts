import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function s(v: unknown) {
  return v == null ? "" : String(v).trim();
}

const STRIPE_SECRET_KEY = s(process.env.STRIPE_SECRET_KEY);
const STRIPE_WEBHOOK_SECRET = s(process.env.STRIPE_WEBHOOK_SECRET);

const SUPABASE_URL = s(
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
);

const SUPABASE_SERVICE_ROLE_KEY = s(process.env.SUPABASE_SERVICE_ROLE_KEY);

const stripe = STRIPE_SECRET_KEY
  ? new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" })
  : null;

const supabase =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: { persistSession: false },
      })
    : null;

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "Reports Stripe webhook. Use POST from Stripe only.",
  });
}

export async function POST(req: Request) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: "STRIPE_SECRET_KEY_MISSING" },
        { status: 500 }
      );
    }

    if (!STRIPE_WEBHOOK_SECRET) {
      return NextResponse.json(
        { error: "STRIPE_WEBHOOK_SECRET_MISSING" },
        { status: 500 }
      );
    }

    if (!supabase) {
      return NextResponse.json(
        { error: "SUPABASE_CONFIG_MISSING" },
        { status: 500 }
      );
    }

    const sig = req.headers.get("stripe-signature");

    if (!sig) {
      return NextResponse.json(
        { error: "MISSING_STRIPE_SIGNATURE" },
        { status: 400 }
      );
    }

    const rawBody = await req.text();

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        rawBody,
        sig,
        STRIPE_WEBHOOK_SECRET
      );
    } catch (err: any) {
      return NextResponse.json(
        {
          error: "INVALID_STRIPE_SIGNATURE",
          detail: err?.message || String(err),
        },
        { status: 400 }
      );
    }

    if (event.type !== "checkout.session.completed") {
      return NextResponse.json({ received: true });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status !== "paid") {
      return NextResponse.json({
        received: true,
        warning: "PAYMENT_NOT_PAID",
      });
    }

    const metadata = session.metadata || {};

    if (metadata.product !== "astrology_report") {
      return NextResponse.json({
        received: true,
        ignored: "NOT_ASTROLOGY_REPORT",
      });
    }

    let birthData: any = {};

    try {
      birthData = JSON.parse(metadata.birth_data || "{}");
    } catch {
      birthData = {};
    }

    const reportType = s(metadata.report_type);

    if (!reportType) {
      return NextResponse.json({
        received: true,
        warning: "MISSING_REPORT_TYPE",
      });
    }

    const { error } = await supabase.from("orders").upsert(
      {
        stripe_session_id: session.id,
        customer_email:
          session.customer_details?.email || session.customer_email || null,
        product_type: reportType,
        status: "paid",
        birth_data: birthData,
        pdf_path: null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "stripe_session_id" }
    );

    if (error) {
      return NextResponse.json(
        {
          received: true,
          warning: "ORDER_SAVE_FAILED",
          detail: error.message,
        },
        { status: 200 }
      );
    }

    return NextResponse.json({
      received: true,
      saved: true,
      session_id: session.id,
      report_type: reportType,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "REPORTS_WEBHOOK_ERROR" },
      { status: 500 }
    );
  }
}
