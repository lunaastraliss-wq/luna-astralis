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
 * - Débit plus tard
 * - Sans login/signup forcé
 * - Envoie TOUT ce que le webhook attend
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

// Supabase pricing_plan_id (UUIDs)
// ⚠️ ceux de ta table pricing_plans
const PRICING_PLAN_MAP: Record<PlanId, string> = {
  monthly_essential: process.env.PRICING_PLAN_MONTHLY_ESSENTIAL ?? "",
  monthly_unlimited: process.env.PRICING_PLAN_MONTHLY_UNLIMITED ?? "",
  yearly_essential: process.env.PRICING_PLAN_YEARLY_ESSENTIAL ?? "",
  yearly_unlimited: process.env.PRICING_PLAN_YEARLY_UNLIMITED ?? "",
};

const stripe = STRIPE_SECRET_KEY
  ? new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" })
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
      return NextResponse.json({ error: "STRIPE_SECRET_KEY manquante." }, { status: 500 });
    }

    const site = cleanUrl(SITE_URL);
    if (!site) {
      return NextResponse.json({ error: "NEXT_PUBLIC_SITE_URL manquante." }, { status: 500 });
    }

    const body = (await req.json().catch(() => ({}))) as {
      plan?: unknown;
      next?: unknown;
    };

    if (!isPlan(body.plan)) {
      return NextResponse.json({ error: "Plan invalide." }, { status: 400 });
    }

    const plan = body.plan;
    const stripe_price_id = priceIdFromPlan(plan);
    const pricing_plan_id = PRICING_PLAN_MAP[plan];

    if (!stripe_price_id || !pricing_plan_id) {
      return NextResponse.json(
        { error: "Configuration Stripe/Supabase incomplète pour ce plan." },
        { status: 500 }
      );
    }

    const next = safeNext(body.next);

    const successUrl =
      `${site}${next}` +
      `${next.includes("?") ? "&" : "?"}paid=1&session_id={CHECKOUT_SESSION_ID}`;

    const cancelUrl = `${site}/pricing?canceled=1&next=${encodeURIComponent(next)}`;

    // Auth facultative
    const supabase = createRouteHandlerClient({ cookies });
    const { data } = await supabase.auth.getUser();

    const user_id = data?.user?.id ?? "guest";
    const user_email = data?.user?.email ?? undefined;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: stripe_price_id, quantity: 1 }],
      allow_promotion_codes: true,

      success_url: successUrl,
      cancel_url: cancelUrl,

      ...(user_id !== "guest" ? { client_reference_id: user_id } : {}),
      ...(user_email ? { customer_email: user_email } : {}),

      metadata: {
        app: "luna-astralis",
        plan,
        user_id,
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
          pricing_plan_id,
          stripe_price_id,
        },
      },

      payment_method_collection: "always",
    });

    return NextResponse.json(
      { url: session.url, session_id: session.id },
      { status: 200 }
    );
  } catch (err) {
    console.error("[checkout]", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erreur checkout." },
      { status: 500 }
    );
  }
}
