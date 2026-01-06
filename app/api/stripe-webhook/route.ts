// app/api/stripe-webhook/route.ts
import Stripe from "stripe";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// =====================
// ENV
// =====================
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY ?? "";
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET ?? "";

const SUPABASE_URL =
  process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";

const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

function clean(v: unknown): string {
  return (v == null ? "" : String(v)).trim();
}

function hasEnv(name: string): boolean {
  return Boolean(clean(process.env[name]));
}

const stripe = STRIPE_SECRET_KEY
  ? new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" })
  : null;

const supabase =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: { persistSession: false },
      })
    : null;

// =====================
// Helpers (Stripe)
// =====================
function pickUserIdFromSession(session: Stripe.Checkout.Session): string {
  const fromClientRef = clean(session.client_reference_id);
  const fromMeta = clean((session as any)?.metadata?.user_id);
  return fromClientRef || fromMeta;
}

function pickCustomerIdFromSession(session: Stripe.Checkout.Session): string {
  const c = (session as any)?.customer;
  if (typeof c === "string") return clean(c);
  if (c && typeof c === "object" && typeof (c as any).id === "string") return clean((c as any).id);
  return "";
}

function pickCustomerIdFromSub(sub: Stripe.Subscription): string {
  const c = (sub as any)?.customer;
  if (typeof c === "string") return clean(c);
  if (c && typeof c === "object" && typeof (c as any).id === "string") return clean((c as any).id);
  return "";
}

function toIsoFromUnixSeconds(n: unknown): string | null {
  const num = typeof n === "number" ? n : Number(n);
  if (!Number.isFinite(num) || num <= 0) return null;
  return new Date(num * 1000).toISOString();
}

function pickPriceIdFromSub(sub: Stripe.Subscription): string {
  const item = (sub as any)?.items?.data?.[0];
  const priceId = item?.price?.id;
  return clean(priceId);
}

// =====================
// DB helpers (Supabase)
// =====================
async function upsertUserSubscriptionByUserId(userId: string, payload: Record<string, any>) {
  if (!supabase) throw new Error("Supabase non configuré (URL ou SERVICE_ROLE_KEY manquante).");

  // On upsert par user_id (suppose une contrainte unique sur user_id,
  // sinon ça insère des doublons; si tu as déjà une seule ligne par user, c'est OK)
  const row = {
    user_id: userId,
    ...payload,
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase
    .from("user_subscriptions")
    .upsert(row, { onConflict: "user_id" });

  if (error) throw new Error("Supabase upsert user_subscriptions failed: " + error.message);
}

async function updateUserSubscriptionByCustomerId(customerId: string, payload: Record<string, any>) {
  if (!supabase) throw new Error("Supabase non configuré (URL ou SERVICE_ROLE_KEY manquante).");

  const { error } = await supabase
    .from("user_subscriptions")
    .update({ ...payload, updated_at: new Date().toISOString() })
    .eq("stripe_customer_id", customerId);

  if (error) throw new Error("Supabase update user_subscriptions failed: " + error.message);
}

// =====================
// Route
// =====================
export async function POST(req: Request) {
  try {
    if (!stripe) return NextResponse.json({ error: "Missing STRIPE_SECRET_KEY" }, { status: 500 });
    if (!STRIPE_WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Missing STRIPE_WEBHOOK_SECRET" }, { status: 500 });
    }
    if (!supabase) {
      return NextResponse.json(
        { error: "Missing SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) or SUPABASE_SERVICE_ROLE_KEY" },
        { status: 500 }
      );
    }

    const sig = req.headers.get("stripe-signature");
    if (!sig) return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });

    // IMPORTANT: raw body
    const rawBody = await req.text();

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, STRIPE_WEBHOOK_SECRET);
    } catch (err: any) {
      return NextResponse.json(
        { error: "Invalid signature", details: err?.message || String(err) },
        { status: 400 }
      );
    }

    // =========================
    // checkout.session.completed
    // =========================
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      const userId = pickUserIdFromSession(session);
      const customerId = pickCustomerIdFromSession(session);
      const checkoutSessionId = clean((session as any)?.id);

      // Sans user_id, on ne peut pas lier à user_subscriptions.user_id
      if (!userId || userId === "guest") {
        return NextResponse.json(
          { received: true, warning: "guest checkout: missing user_id" },
          { status: 200 }
        );
      }

      await upsertUserSubscriptionByUserId(userId, {
        current: true,
        stripe_customer_id: customerId || null,
        stripe_checkout_session_id: checkoutSessionId || null,
      });

      return NextResponse.json({ received: true }, { status: 200 });
    }

    // =========================
    // customer.subscription.created / updated
    // =========================
    if (
      event.type === "customer.subscription.created" ||
      event.type === "customer.subscription.updated"
    ) {
      const sub = event.data.object as Stripe.Subscription;

      const customerId = pickCustomerIdFromSub(sub);
      const status = clean((sub as any)?.status); // trialing / active / canceled / ...
      const subId = clean((sub as any)?.id);
      const priceId = pickPriceIdFromSub(sub);

      const currentPeriodEnd = toIsoFromUnixSeconds((sub as any)?.current_period_end);
      const canceledAt = toIsoFromUnixSeconds((sub as any)?.canceled_at);

      if (customerId) {
        await updateUserSubscriptionByCustomerId(customerId, {
          stripe_subscription_id: subId || null,
          stripe_status: status || null,
          stripe_price_id: priceId || null,
          current_period_end: currentPeriodEnd,
          canceled_at: canceledAt,
          current: status === "active" || status === "trialing",
        });
      }

      return NextResponse.json({ received: true }, { status: 200 });
    }

    // =========================
    // customer.subscription.deleted
    // =========================
    if (event.type === "customer.subscription.deleted") {
      const sub = event.data.object as Stripe.Subscription;

      const customerId = pickCustomerIdFromSub(sub);
      const canceledAt = new Date().toISOString();

      if (customerId) {
        await updateUserSubscriptionByCustomerId(customerId, {
          current: false,
          stripe_status: "canceled",
          canceled_at: canceledAt,
          current_period_end: null,
        });
      }

      return NextResponse.json({ received: true }, { status: 200 });
    }

    // Other events: acknowledge
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err?.message || "Webhook error",
        debug: {
          hasStripeSecretKey: hasEnv("STRIPE_SECRET_KEY"),
          hasStripeWebhookSecret: hasEnv("STRIPE_WEBHOOK_SECRET"),
          hasSupabaseUrl: hasEnv("SUPABASE_URL") || hasEnv("NEXT_PUBLIC_SUPABASE_URL"),
          hasServiceRole: hasEnv("SUPABASE_SERVICE_ROLE_KEY"),
        },
      },
      { status: 500 }
    );
  }
}
