// app/api/billing-portal/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY ?? "";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";
const STRIPE_PORTAL_CONFIG_LUNA = process.env.STRIPE_PORTAL_CONFIG_LUNA ?? ""; // bpc_...

const stripe = STRIPE_SECRET_KEY
  ? new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" })
  : null;

function cleanUrl(url: string) {
  const s = (url || "").trim();
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

export async function POST() {
  try {
    if (!stripe) return NextResponse.json({ error: "Missing STRIPE_SECRET_KEY" }, { status: 500 });
    if (!STRIPE_PORTAL_CONFIG_LUNA)
      return NextResponse.json({ error: "Missing STRIPE_PORTAL_CONFIG_LUNA" }, { status: 500 });

    const site = cleanUrl(SITE_URL);
    if (!site) return NextResponse.json({ error: "Missing NEXT_PUBLIC_SITE_URL" }, { status: 500 });

    // user connecté obligatoire pour gérer abonnement
    const supabase = createRouteHandlerClient({ cookies });
    const { data: u } = await supabase.auth.getUser();
    const user = u?.user;
    if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

    // Récupérer stripe_customer_id depuis profiles
    const { data: profile, error: pErr } = await supabase
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", user.id)
      .single();

    if (pErr) return NextResponse.json({ error: pErr.message }, { status: 500 });

    const customerId = profile?.stripe_customer_id;
    if (!customerId) {
      return NextResponse.json(
        { error: "Aucun stripe_customer_id. L’utilisateur n’a pas encore de client Stripe." },
        { status: 400 }
      );
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${site}/account`,
      configuration: STRIPE_PORTAL_CONFIG_LUNA,
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Portal error" }, { status: 500 });
  }
}
