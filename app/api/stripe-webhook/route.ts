// app/api/stripe-webhook/route.ts
import Stripe from "stripe";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Stripe
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY ?? "";
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET ?? "";

// Supabase (Service Role)
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

function clean(v: unknown) {
  return (v == null ? "" : String(v)).trim();
}

function hasEnv(name: string) {
  return Boolean(clean(process.env[name]));
}

const stripe = STRIPE_SECRET_KEY
  ? new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" })
  : null;

const supabase =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: { persistSession: false },
      })
    : null;

function pickPlan(session: Stripe.Checkout.Session) {
  // 1) metadata.plan (le plus fiable)
  const metaPlan = clean((session as any)?.metadata?.plan);
  if (metaPlan) return metaPlan;

  // 2) fallback
  return "free";
}

async function upgradeByUserId(userId: string, payload: Record<string, any>) {
  if (!supabase) throw new Error("Supabase non configuré (URL ou SERVICE_ROLE_KEY manquante).");

  const { error } = await supabase.from("profiles").update(payload).eq("id", userId);
  if (error) throw new Error("Supabase update failed: " + error.message);
}

async function downgradeByCustomerId(customerId: string, payload: Record<string, any>) {
  if (!supabase) throw new Error("Supabase non configuré (URL ou SERVICE_ROLE_KEY manquante).");

  const { error } = await supabase.from("profiles").update(payload).eq("stripe_customer_id", customerId);
  if (error) throw new Error("Supabase downgrade failed: " + error.message);
}

export async function POST(req: Request) {
  try {
    // ENV checks
    if (!stripe) return NextResponse.json({ error: "Missing STRIPE_SECRET_KEY" }, { status: 500 });
    if (!STRIPE_WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Missing STRIPE_WEBHOOK_SECRET" }, { status: 500 });
    }
    if (!supabase) {
      return NextResponse.json(
        { error: "Missing SUPABASE_URL / NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY" },
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

      const userId = clean(session.client_reference_id) || clean((session.metadata as any)?.user_id);
      const customerId = clean(session.customer);
      const plan = pickPlan(session);

      if (!userId || userId === "guest") {
        // Invité: on ne peut pas lier à un user Supabase
        return NextResponse.json(
          {
            received: true,
            warning: "guest checkout: no user_id to link. (client_reference_id/metadata.user_id missing)",
          },
          { status: 200 }
        );
      }

      const payload = {
        is_premium: true,
        plan,
        stripe_customer_id: customerId || null,
        updated_at: new Date().toISOString(),
      };

      await upgradeByUserId(userId, payload);
      return NextResponse.json({ received: true }, { status: 200 });
    }

    // =========================
    // customer.subscription.updated
    // (utile pour statut / cancel_at_period_end)
    // =========================
    if (event.type === "customer.subscription.updated") {
      const sub = event.data.object as Stripe.Subscription;

      const customerId = clean(sub.customer);
      const status = clean(sub.status); // active, trialing, canceled, unpaid, etc.

      // Si tu veux refléter l'état réel:
      // active/trialing => premium true
      // canceled/unpaid/incomplete_expired => premium false
      const isActive = status === "active" || status === "trialing";

      if (customerId) {
        const payload = {
          is_premium: isActive,
          updated_at: new Date().toISOString(),
        };
        await downgradeByCustomerId(customerId, payload);
      }

      return NextResponse.json({ received: true }, { status: 200 });
    }

    // =========================
    // customer.subscription.deleted
    // =========================
    if (event.type === "customer.subscription.deleted") {
      const sub = event.data.object as Stripe.Subscription;
      const customerId = clean(sub.customer);

      if (customerId) {
        const payload = {
          is_premium: false,
          plan: "free",
          updated_at: new Date().toISOString(),
        };
        await downgradeByCustomerId(customerId, payload);
      }

      return NextResponse.json({ received: true }, { status: 200 });
    }

    // autres events ignorés
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
