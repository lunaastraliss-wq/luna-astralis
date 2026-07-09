import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PRICES = {
  essential: {
    name: "Carte du ciel Essentielle",
    amount: 2499,
  },
  premium: {
    name: "Carte du ciel Premium",
    amount: 4999,
  },
  signature: {
    name: "Carte du ciel Signature",
    amount: 7999,
  },
} as const;

type Plan = keyof typeof PRICES;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const plan = body.plan as Plan;

    if (!plan || !PRICES[plan]) {
      return NextResponse.json(
        { error: "Plan invalide." },
        { status: 400 }
      );
    }

    const selected = PRICES[plan];

    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://luna-astralis.app";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: selected.name,
            },
            unit_amount: selected.amount,
          },
          quantity: 1,
        },
      ],
      metadata: {
        plan,
      },
      success_url: `${origin}/natal-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/natal-report`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Natal checkout error:", error);

    return NextResponse.json(
      { error: "Erreur lors de la création du paiement." },
      { status: 500 }
    );
  }
}
