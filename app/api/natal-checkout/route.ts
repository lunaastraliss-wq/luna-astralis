import __i18n from "../../../i18n/migrated/fr/app/api/natal-checkout/route.json";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PRICES = {
  essential: process.env.STRIPE_PRICE_ESSENTIAL!,
  premium: process.env.STRIPE_PRICE_PREMIUM!,
  signature: process.env.STRIPE_PRICE_SIGNATURE!,
} as const;

type Plan = keyof typeof PRICES;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const plan = body.plan as Plan;

    const price = PRICES[plan];

    if (!price) {
      return NextResponse.json(
        { error: __i18n["plan_invalide"] },
        { status: 400 }
      );
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://luna-astralis.app";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price,
          quantity: 1,
        },
      ],
      metadata: {
        plan,
      },
      success_url: `${siteUrl}/natal-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/carte-du-ciel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Natal checkout error:", error);

    return NextResponse.json(
      { error: __i18n["erreur_lors_de_la_creation_du_paiement"] },
      { status: 500 }
    );
  }
}
