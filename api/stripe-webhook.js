// /api/stripe-webhook.js
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const config = {
  api: { bodyParser: false }, // IMPORTANT: Stripe exige le RAW body
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
);

/* =========================
   Utils
========================= */
function clean(v) {
  return (v == null ? "" : String(v)).trim();
}

// ✅ RAW body en Buffer (NE PAS setEncoding utf8)
function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function pickPlanFromSession(session) {
  // 1) metadata.plan (le plus fiable si tu l’envoies)
  const metaPlan = clean(session?.metadata?.plan);
  if (metaPlan) return metaPlan;

  // 2) lookup_key sur price (si expand line_items.data.price)
  const line = session?.line_items?.data?.[0];
  const lookup = clean(line?.price?.lookup_key);
  if (lookup) return lookup;

  // 3) fallback
  return "premium";
}

function hasEnv(name) {
  return Boolean(clean(process.env[name]));
}

/* =========================
   Handler
========================= */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Vérifs env (utile pour debug)
    if (!hasEnv("STRIPE_SECRET_KEY")) {
      return res.status(500).json({ error: "Missing STRIPE_SECRET_KEY" });
    }
    if (!hasEnv("STRIPE_WEBHOOK_SECRET")) {
      return res.status(500).json({ error: "Missing STRIPE_WEBHOOK_SECRET" });
    }
    if (!hasEnv("SUPABASE_URL")) {
      return res.status(500).json({ error: "Missing SUPABASE_URL" });
    }
    if (!hasEnv("SUPABASE_SERVICE_ROLE_KEY")) {
      return res.status(500).json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY" });
    }

    const sig = req.headers["stripe-signature"];
    if (!sig) {
      return res.status(400).json({ error: "Missing stripe-signature" });
    }

    const rawBody = await getRawBody(req);

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        rawBody,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      return res
        .status(400)
        .json({ error: "Invalid signature", details: err?.message || String(err) });
    }

    // =========================
    // 1) Paiement Checkout terminé
    // =========================
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // ✅ IMPORTANT: tu dois avoir mis client_reference_id = user.id au moment du checkout
      // sinon userId sera vide et tu ne peux pas relier au profil.
      const userId = clean(session?.client_reference_id);

      // Stripe customer id: cus_xxx
      const customerId = clean(session?.customer);

      // Si tu préfères: fallback metadata.user_id (si tu l’envoies)
      const metaUserId = clean(session?.metadata?.user_id);
      const finalUserId = userId || metaUserId;

      if (!finalUserId) {
        return res.status(200).json({
          received: true,
          warning:
            "Missing client_reference_id (and metadata.user_id). Cannot link payment to Supabase user.",
        });
      }

      // Optionnel: récupérer line_items avec expand
      let fullSession = session;
      try {
        fullSession = await stripe.checkout.sessions.retrieve(session.id, {
          expand: ["line_items.data.price"],
        });
      } catch (_) {}

      const plan = pickPlanFromSession(fullSession);

      // ✅ Update profiles
      // ⚠️ Si ta table profiles n'a pas updated_at, enlève ce champ.
      const payload = {
        is_premium: true,
        plan,
        stripe_customer_id: customerId || null,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from("profiles")
        .update(payload)
        .eq("id", finalUserId);

      if (error) {
        return res
          .status(500)
          .json({ error: "Supabase update failed", details: error.message });
      }
    }

    // =========================
    // 2) Abonnement annulé
    // =========================
    if (event.type === "customer.subscription.deleted") {
      const sub = event.data.object;
      const customerId = clean(sub?.customer);

      if (customerId) {
        const payload = {
          is_premium: false,
          plan: "free",
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabase
          .from("profiles")
          .update(payload)
          .eq("stripe_customer_id", customerId);

        // Ici on ne casse pas le webhook si ça échoue, mais on loguerait en prod
        if (error) {
          return res.status(500).json({
            error: "Supabase downgrade failed",
            details: error.message,
          });
        }
      }
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    return res.status(500).json({
      error: err?.message || "Webhook error",
      debug: {
        hasStripeSecretKey: hasEnv("STRIPE_SECRET_KEY"),
        hasStripeWebhookSecret: hasEnv("STRIPE_WEBHOOK_SECRET"),
        hasSupabaseUrl: hasEnv("SUPABASE_URL"),
        hasServiceRole: hasEnv("SUPABASE_SERVICE_ROLE_KEY"),
      },
    });
  }
}
