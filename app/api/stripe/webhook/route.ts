// app/api/stripe-webhook/route.ts
import Stripe from "stripe";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* =====================
   ENV
===================== */
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY ?? "";
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET ?? "";

const SUPABASE_URL =
  process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

function clean(v: unknown): string {
  return (v == null ? "" : String(v)).trim();
}

/* =====================
   Clients
===================== */
const stripe = STRIPE_SECRET_KEY
  ? new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" })
  : null;

const supabase =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: { persistSession: false },
      })
    : null;

/* =====================
   Helpers
===================== */
function toIsoFromUnixSeconds(n: unknown): string | null {
  const num = typeof n === "number" ? n : Number(n);
  if (!Number.isFinite(num) || num <= 0) return null;
  return new Date(num * 1000).toISOString();
}

function pickCustomerId(x: any): string {
  const c = x?.customer;
  if (typeof c === "string") return clean(c);
  if (c && typeof c === "object" && typeof c.id === "string") return clean(c.id);
  return "";
}

function pickPriceIdFromSub(sub: Stripe.Subscription): string {
  const item = (sub as any)?.items?.data?.[0];
  return clean(item?.price?.id);
}

function pickUserIdFromCheckoutSession(session: Stripe.Checkout.Session): string {
  const fromClientRef = clean(session.client_reference_id);
  const fromMeta = clean((session as any)?.metadata?.user_id);
  return fromClientRef || fromMeta;
}

function pickUserIdFromSubscription(sub: Stripe.Subscription): string {
  return clean((sub as any)?.metadata?.user_id);
}

/* =====================
   DB helpers
===================== */
async function upsertByUserId(userId: string, payload: Record<string, any>) {
  if (!supabase) throw new Error("Supabase non configuré.");

  const row = {
    user_id: userId,
    ...payload,
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase
    .from("user_subscriptions")
    .upsert(row, { onConflict: "user_id" });

  if (error) throw new Error("Supabase upsert failed: " + error.message);
}

async function upsertByCustomerId(customerId: string, payload: Record<string, any>) {
  if (!supabase) throw new Error("Supabase non configuré.");

  const { data: existing, error: readErr } = await supabase
    .from("user_subscriptions")
    .select("user_id")
    .eq("stripe_customer_id", customerId)
    .maybeSingle();

  if (readErr) throw new Error("Supabase read failed: " + readErr.message);

  if (existing?.user_id) {
    const { error: updErr } = await supabase
      .from("user_subscriptions")
      .update({ ...payload, updated_at: new Date().toISOString() })
      .eq("stripe_customer_id", customerId);

    if (updErr) throw new Error("Supabase update failed: " + updErr.message);
    return;
  }

  const { error: insErr } = await supabase.from("user_subscriptions").insert({
    stripe_customer_id: customerId,
    ...payload,
    updated_at: new Date().toISOString(),
  });

  if (insErr) throw new Error("Supabase insert failed: " + insErr.message);
}

/**
 * Translate stripe_price_id -> plans.slug (+ name)
 * Table plans doit contenir stripe_price_id, slug, name
 */
async function getPlanFromPriceId(priceId: string): Promise<{
  slug: string | null;
  name: string | null;
}> {
  if (!supabase) return { slug: null, name: null };

  const pid = clean(priceId);
  if (!pid) return { slug: null, name: null };

  const { data, error } = await supabase
    .from("plans")
    .select("slug,name")
    .eq("stripe_price_id", pid)
    .maybeSingle();

  if (error || !data) return { slug: null, name: null };

  return {
    slug: clean((data as any).slug) || null,
    name: clean((data as any).name) || null,
  };
}

/* =====================
   GET (avoid 405 in browser)
===================== */
export async function GET() {
  return NextResponse.json(
    { ok: true, message: "Stripe webhook endpoint. Use POST from Stripe only." },
    { status: 200 }
  );
}

/* =====================
   POST (Stripe webhook)
===================== */
export async function POST(req: Request) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { ok: false, error: "Missing STRIPE_SECRET_KEY" },
        { status: 500 }
      );
    }
    if (!STRIPE_WEBHOOK_SECRET) {
      return NextResponse.json(
        { ok: false, error: "Missing STRIPE_WEBHOOK_SECRET" },
        { status: 500 }
      );
    }
    if (!supabase) {
      return NextResponse.json(
        { ok: false, error: "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY" },
        { status: 500 }
      );
    }

    const sig = req.headers.get("stripe-signature");
    if (!sig) {
      return NextResponse.json(
        { ok: false, error: "Missing stripe-signature" },
        { status: 400 }
      );
    }

    const rawBody = await req.text();

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, STRIPE_WEBHOOK_SECRET);
    } catch (err: any) {
      return NextResponse.json(
        { ok: false, error: "Invalid signature", details: err?.message || String(err) },
        { status: 400 }
      );
    }

    // =========================
    // checkout.session.completed
    // =========================
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      const userId = pickUserIdFromCheckoutSession(session);
      const customerId = pickCustomerId(session);
      const checkoutSessionId = clean((session as any)?.id);

      if (!userId || userId === "guest") {
        return NextResponse.json(
          {
            received: true,
            warning: "missing user_id (should not happen if login required)",
          },
          { status: 200 }
        );
      }

      await upsertByUserId(userId, {
        stripe_customer_id: customerId || null,
        stripe_checkout_session_id: checkoutSessionId || null,
      });

      return NextResponse.json({ received: true }, { status: 200 });
    }

    // =========================
    // subscription created/updated
    // =========================
    if (
      event.type === "customer.subscription.created" ||
      event.type === "customer.subscription.updated"
    ) {
      const sub = event.data.object as Stripe.Subscription;

      const userId = pickUserIdFromSubscription(sub);
      const customerId = pickCustomerId(sub);
      const status = clean((sub as any)?.status).toLowerCase();
      const subId = clean((sub as any)?.id);

      const priceId = pickPriceIdFromSub(sub);

      // plan slug/name
      const plan = await getPlanFromPriceId(priceId);

      const currentPeriodEnd = toIsoFromUnixSeconds((sub as any)?.current_period_end);
      const canceledAt = toIsoFromUnixSeconds((sub as any)?.canceled_at);

      const payload = {
        stripe_customer_id: customerId || null,
        stripe_subscription_id: subId || null,
        stripe_price_id: priceId || null,

        plan_slug: plan.slug,
        plan_name: plan.name,

        status: status || null,
        current_period_end: currentPeriodEnd,
        canceled_at: canceledAt,

        current: status === "active" || status === "trialing",
      };

      if (userId) {
        await upsertByUserId(userId, payload);
        return NextResponse.json({ received: true }, { status: 200 });
      }

      if (customerId) {
        await upsertByCustomerId(customerId, payload);
      }

      return NextResponse.json({ received: true }, { status: 200 });
    }

    // =========================
    // subscription deleted
    // =========================
    if (event.type === "customer.subscription.deleted") {
      const sub = event.data.object as Stripe.Subscription;

      const userId = pickUserIdFromSubscription(sub);
      const customerId = pickCustomerId(sub);

      const payload = {
        status: "canceled",
        current: false,
        canceled_at: new Date().toISOString(),
        current_period_end: null,
      };

      if (userId) {
        await upsertByUserId(userId, payload);
        return NextResponse.json({ received: true }, { status: 200 });
      }

      if (customerId) {
        await upsertByCustomerId(customerId, payload);
      }

      return NextResponse.json({ received: true }, { status: 200 });
    }

    // other events ignored
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Webhook error" },
      { status: 500 }
    );
  }
}
