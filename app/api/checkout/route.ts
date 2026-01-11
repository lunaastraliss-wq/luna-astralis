// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Luna Astralis – Checkout Stripe (Subscription)
 * - Trial 3 jours
 * - Retour au chat après paiement
 * - LOGIN REQUIS (sinon impossible de lier l’abonnement au user_id Supabase)
 * - Metadata complète pour le webhook
 */

type PlanId =
  | "monthly_essential"
  | "monthly_unlimited"
  | "yearly_essential"
  | "yearly_unlimited";

function isPlan(v: unknown): v is PlanId {
  return (
    v === "monthly_essential" ||
    v === "monthly_unlimited" ||
    v === "yearly_essential" ||
    v === "yearly_unlimited"
  );
}

function cleanUrl(url: string) {
  const s = (url || "").trim();
  if (!s) return "";
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

function safeNext(next: unknown) {
  const fallback = "/chat?signe=belier";
  if (typeof next !== "string") return fallback;

  const s = next.trim();
  if (!s) return fallback;

  // bloque toute tentative d’URL externe
  if (s.includes("http://") || s.includes("https://") || s.startsWith("//")) return fallback;

  return s.startsWith("/") ? s : `/${s}`;
}

// =====================
// ENV
// =====================
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY ?? "";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

// Stripe price IDs
const STRIPE_PRICE_MONTHLY_ESSENTIAL = process.env.STRIPE_PRICE_MONTHLY_ESSENTIAL ?? "";
const STRIPE_PRICE_MONTHLY_UNLIMITED = process.env.STRIPE_PRICE_MONTHLY_UNLIMITED ?? "";
const STRIPE_PRICE_YEARLY_ESSENTIAL = process.env.STRIPE_PRICE_YEARLY_ESSENTIAL ?? "";
const STRIPE_PRICE_YEARLY_UNLIMITED = process.env.STRIPE_PRICE_YEARLY_UNLIMITED ?? "";

// Supabase pricing_plan_id (UUIDs) dans ta table pricing_plans
const PRICING_PLAN_MAP: Record<PlanId, string> = {
  monthly_essential: process.env.PRICING_PLAN_MONTHLY_ESSENTIAL ?? "",
  monthly_unlimited: process.env.PRICING_PLAN_MONTHLY_UNLIMITED ?? "",
  yearly_essential: process.env.PRICING_PLAN_YEARLY_ESSENTIAL ?? "",
  yearly_unlimited: process.env.PRICING_PLAN_YEARLY_UNLIMITED ?? "",
};

const stripe =
  STRIPE_SECRET_KEY
    ? new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" })
    : null;

function priceIdFromPlan(plan: PlanId) {
  switch (plan) {
    case "monthly_essential":
      return STRIPE_PRICE_MONTHLY_ESSENTIAL;
    case "monthly_unlimited":
      return STRIPE_PRICE_MONTHLY_UNLIMITED;
    case "yearly_essential":
      return STRIPE_PRICE_YEARLY_ESSENTIAL;
    case "yearly_unlimited":
      return STRIPE_PRICE_YEARLY_UNLIMITED;
  }
}

export async function POST(req: Request) {
  try {
    if (!stripe) {
      return NextResponse.json({ error: "STRIPE_SECRET_KEY_MISSING" }, { status: 500 });
    }

    const site = cleanUrl(SITE_URL);
    if (!site) {
      return NextResponse.json({ error: "NEXT_PUBLIC_SITE_URL_MISSING" }, { status: 500 });
    }

    const body = (await req.json().catch(() => ({}))) as {
      plan?: unknown;
      next?: unknown;
    };

    if (!isPlan(body.plan)) {
      return NextResponse.json({ error: "INVALID_PLAN" }, { status: 400 });
    }

    const plan = body.plan;
    const stripe_price_id = priceIdFromPlan(plan);
    const pricing_plan_id = PRICING_PLAN_MAP[plan];

    if (!stripe_price_id || !pricing_plan_id) {
      return NextResponse.json(
        { error: "PLAN_CONFIG_MISSING" },
        { status: 500 }
      );
    }

    const next = safeNext(body.next);

    // ✅ Retour au chat direct (tu peux garder ça)
    // (option meilleure: passer par /pricing/success, mais je respecte ta demande “retour chat”)
    const success_url =
      `${site}${next}` +
      `${next.includes("?") ? "&" : "?"}paid=1&session_id={CHECKOUT_SESSION_ID}`;

    const cancel_url = `${site}/pricing?canceled=1&next=${encodeURIComponent(next)}`;

    // ✅ LOGIN REQUIS
    const supabase = createRouteHandlerClient({ cookies });
    const { data: userData, error: userErr } = await supabase.auth.getUser();

    if (userErr) {
      return NextResponse.json(
        { error: "AUTH_ERROR", detail: userErr.message },
        { status: 401 }
      );
    }

    const user_id = userData?.user?.id;
    const user_email = userData?.user?.email;

    if (!user_id || !user_email) {
      return NextResponse.json(
        { error: "AUTH_REQUIRED", next },
        { status: 401 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: stripe_price_id, quantity: 1 }],
      allow_promotion_codes: true,

      success_url,
      cancel_url,

      // ✅ lien solide webhook -> Supabase user
      client_reference_id: user_id,
      customer_email: user_email,

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
        trial_period_days: 3,
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
  } catch (err) {
    console.error("[checkout]", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "CHECKOUT_ERROR" },
      { status: 500 }
    );
  }
}
