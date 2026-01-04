// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Luna Astralis – Checkout Stripe (Subscription)
 * - Lit les Price IDs depuis les ENV
 * - Fonctionne si utilisateur connecté ou invité
 * - Trial contrôlé par STRIPE_TRIAL_DAYS (ex: 3 en test, 0 en prod)
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

// ✅ next doit toujours être un chemin interne ABSOLU (commence par "/")
function safeNext(next: unknown) {
  const fallback = "/chat?signe=belier";
  if (typeof next !== "string") return fallback;

  const s = next.trim();
  if (!s) return fallback;

  // block external/open-redirect
  if (s.includes("http://") || s.includes("https://") || s.startsWith("//")) return fallback;

  return s.startsWith("/") ? s : `/${s}`;
}

function jsonError(message: string, status = 500) {
  return NextResponse.json({ error: message }, { status });
}

// =====================
// ENV
// =====================
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY ?? "";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

// Price IDs
const STRIPE_PRICE_MONTHLY_ESSENTIAL = process.env.STRIPE_PRICE_MONTHLY_ESSENTIAL ?? "";
const STRIPE_PRICE_MONTHLY_UNLIMITED = process.env.STRIPE_PRICE_MONTHLY_UNLIMITED ?? "";
const STRIPE_PRICE_YEARLY_ESSENTIAL = process.env.STRIPE_PRICE_YEARLY_ESSENTIAL ?? "";
const STRIPE_PRICE_YEARLY_UNLIMITED = process.env.STRIPE_PRICE_YEARLY_UNLIMITED ?? "";

// Trial
const STRIPE_TRIAL_DAYS_RAW = process.env.STRIPE_TRIAL_DAYS ?? "0";
const STRIPE_TRIAL_DAYS = Number.isFinite(Number(STRIPE_TRIAL_DAYS_RAW))
  ? Math.max(0, Math.floor(Number(STRIPE_TRIAL_DAYS_RAW)))
  : 0;

const stripe = STRIPE_SECRET_KEY
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
    default:
      return "";
  }
}

export async function POST(req: Request) {
  try {
    if (!stripe) return jsonError("Stripe non configuré: STRIPE_SECRET_KEY manquante.", 500);

    const site = cleanUrl(SITE_URL);
    if (!site) return jsonError("NEXT_PUBLIC_SITE_URL manquante.", 500);

    // Body
    const body = (await req.json().catch(() => ({}))) as {
      plan?: unknown;
      next?: unknown; // ex: "/chat?signe=belier"
    };

    if (!isPlan(body.plan)) return jsonError("Plan invalide.", 400);

    const plan = body.plan;
    const priceId = priceIdFromPlan(plan);

    if (!priceId) {
      return jsonError(
        `Price ID manquant en ENV pour le plan "${plan}". Vérifie STRIPE_PRICE_* dans Vercel.`,
        500
      );
    }

    const next = safeNext(body.next);

    // ✅ URLs correctes Next.js
    const successUrl =
      `${site}${next}` +
      `${next.includes("?") ? "&" : "?"}paid=1&session_id={CHECKOUT_SESSION_ID}`;

    const cancelUrl = `${site}/pricing?canceled=1&next=${encodeURIComponent(next)}`;

    // Auth (optionnel)
    const supabase = createRouteHandlerClient({ cookies });
    const { data } = await supabase.auth.getUser();

    const user_id = data?.user?.id ?? null;
    const user_email = data?.user?.email ?? null;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,

      success_url: successUrl,
      cancel_url: cancelUrl,

      ...(user_id ? { client_reference_id: user_id } : {}),
      ...(user_email ? { customer_email: user_email } : {}),

      metadata: {
        app: "luna-astralis",
        plan,
        user_id: user_id ?? "guest",
        next,
      },

      subscription_data: {
        metadata: {
          app: "luna-astralis",
          plan,
          user_id: user_id ?? "guest",
          next,
        },
        ...(STRIPE_TRIAL_DAYS > 0 ? { trial_period_days: STRIPE_TRIAL_DAYS } : {}),
      },

      // optionnel (Stripe peut le gérer tout seul)
      payment_method_collection: "always",
    });

    if (!session.url) return jsonError("Session Stripe créée, mais URL manquante.", 500);

    return NextResponse.json({ url: session.url, session_id: session.id }, { status: 200 });
  } catch (err: unknown) {
    console.error("[api/checkout] ERROR:", err);
    const msg = err instanceof Error ? err.message : "Erreur serveur checkout.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
