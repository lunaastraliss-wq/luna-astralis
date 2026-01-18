// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type PlanId =
  | "monthly_essential"
  | "monthly_unlimited"
  | "yearly_essential"
  | "yearly_unlimited";

function s(v: unknown) {
  return (v == null ? "" : String(v)).trim();
}

function cleanUrl(url: string) {
  const x = s(url);
  return x.endsWith("/") ? x.slice(0, -1) : x;
}

function isPlan(v: unknown): v is PlanId {
  return (
    v === "monthly_essential" ||
    v === "monthly_unlimited" ||
    v === "yearly_essential" ||
    v === "yearly_unlimited"
  );
}

function safeNext(next: unknown) {
  const fallback = "/chat?sign=belier";
  const x = s(next);
  if (!x) return fallback;
  if (x.startsWith("http://") || x.startsWith("https://") || x.startsWith("//")) return fallback;
  if (x.includes("http://") || x.includes("https://")) return fallback;
  return x.startsWith("/") ? x : `/${x}`;
}

// ENV
const STRIPE_SECRET_KEY = s(process.env.STRIPE_SECRET_KEY);
const SITE_URL = s(process.env.NEXT_PUBLIC_SITE_URL);

const PRICE: Record<PlanId, string> = {
  monthly_essential: s(process.env.STRIPE_PRICE_MONTHLY_ESSENTIAL),
  monthly_unlimited: s(process.env.STRIPE_PRICE_MONTHLY_UNLIMITED),
  yearly_essential: s(process.env.STRIPE_PRICE_YEARLY_ESSENTIAL),
  yearly_unlimited: s(process.env.STRIPE_PRICE_YEARLY_UNLIMITED),
};

const PRICING_PLAN_ID: Record<PlanId, string> = {
  monthly_essential: s(process.env.PRICING_PLAN_MONTHLY_ESSENTIAL),
  monthly_unlimited: s(process.env.PRICING_PLAN_MONTHLY_UNLIMITED),
  yearly_essential: s(process.env.PRICING_PLAN_YEARLY_ESSENTIAL),
  yearly_unlimited: s(process.env.PRICING_PLAN_YEARLY_UNLIMITED),
};

const stripe = STRIPE_SECRET_KEY
  ? new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" })
  : null;

export async function POST(req: Request) {
  try {
    if (!stripe) {
      return NextResponse.json({ error: "STRIPE_SECRET_KEY_MISSING" }, { status: 500 });
    }

    const site = cleanUrl(SITE_URL);
    if (!site) {
      return NextResponse.json({ error: "NEXT_PUBLIC_SITE_URL_MISSING" }, { status: 500 });
    }

    const body = (await req.json().catch(() => null)) as { plan?: unknown; next?: unknown } | null;
    if (!body) return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 });

    if (!isPlan(body.plan)) {
      return NextResponse.json({ error: "INVALID_PLAN" }, { status: 400 });
    }

    const plan = body.plan;
    const stripe_price_id = PRICE[plan];
    const pricing_plan_id = PRICING_PLAN_ID[plan];

    if (!stripe_price_id || !pricing_plan_id) {
      return NextResponse.json({ error: "PLAN_CONFIG_MISSING" }, { status: 500 });
    }

    const next = safeNext(body.next);

    const success_url =
      `${site}/checkout/success` +
      `?next=${encodeURIComponent(next)}` +
      `&session_id={CHECKOUT_SESSION_ID}`;

    const cancel_url = `${site}/pricing?canceled=1&next=${encodeURIComponent(next)}`;

    // Auth requis
    const supabase = createRouteHandlerClient({ cookies });
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      return NextResponse.json(
        { error: "SESSION_ERROR", detail: error.message, require_auth: true, next },
        { status: 401 }
      );
    }

    const user = data?.session?.user;
    const user_id = user?.id || "";
    const user_email = user?.email || "";
    if (!user_id || !user_email) {
      return NextResponse.json({ error: "AUTH_REQUIRED", require_auth: true, next }, { status: 401 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: stripe_price_id, quantity: 1 }],
      allow_promotion_codes: true,
      success_url,
      cancel_url,

      // ✅ important: aide le webhook à relier au user
      client_reference_id: user_id,
      customer_email: user_email, // ✅ utile si pas de customer existant

      metadata: {
        app: "luna-astralis",
        plan,
        user_id,
        user_email,
        pricing_plan_id,
        stripe_price_id,
        next,
      },

      subscription_data: {
        metadata: {
          app: "luna-astralis",
          plan,
          user_id,
          user_email,
          pricing_plan_id,
          stripe_price_id,
        },
      },

      payment_method_collection: "always",
    });

    return NextResponse.json({ url: session.url, session_id: session.id }, { status: 200 });
  } catch (err: any) {
    console.error("[checkout]", err);
    return NextResponse.json({ error: err?.message || "CHECKOUT_ERROR" }, { status: 500 });
  }
}
