import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

const prices = {
  essential: process.env.STRIPE_PRICE_ESSENTIAL!,
  premium: process.env.STRIPE_PRICE_PREMIUM!,
  signature: process.env.STRIPE_PRICE_SIGNATURE!,
};

export async function POST(req: Request) {
  try {
    const { offer } = await req.json();

    const price = prices[offer as keyof typeof prices];

    if (!price) {
      return NextResponse.json(
        { error: "Offre invalide." },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price,
          quantity: 1,
        },
      ],
      success_url:
        `${process.env.NEXT_PUBLIC_SITE_URL}/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:
        `${process.env.NEXT_PUBLIC_SITE_URL}/carte-du-ciel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Erreur Stripe." },
      { status: 500 }
    );
  }
}
