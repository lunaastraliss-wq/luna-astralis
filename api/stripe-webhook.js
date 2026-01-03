// /api/stripe-webhook.js
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const config = {
  api: {
    bodyParser: false, // IMPORTANT pour Stripe signature (raw body)
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
);

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.setEncoding("utf8");
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

function clean(v) {
  return (v == null ? "" : String(v)).trim();
}

function pickPlanFromSession(session) {
  // 1) metadata.plan (si tu l’envoies)
  const metaPlan = clean(session?.metadata?.plan);
  if (metaPlan) return metaPlan;

  // 2) lookup_key sur price (si tu utilises Stripe Prices)
  // (optionnel — ne casse pas si absent)
  const line = session?.line_items?.data?.[0];
  const lookup = clean(line?.price?.lookup_key);
  if (lookup) return lookup;

  // 3) fallback
  return "premium";
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const sig = req.headers["stripe-signature"];
    if (!sig) return res.status(400).json({ error: "Missing stripe-signature" });

    const rawBody = await getRawBody(req);

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        rawBody,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      return res.status(400).json({ error: "Invalid signature", details: err.message });
    }

    // ✅ Événements importants
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // client_reference_id = user.id Supabase (id uuid)
      const userId = clean(session.client_reference_id);

      // customer Stripe (cus_xxx)
      const customerId = clean(session.customer);

      if (!userId) {
        // Sans ça, on ne peut pas lier au user Supabase
        return res.status(200).json({ received: true, warning: "Missing client_reference_id" });
      }

      // Pour récupérer plan via line_items, il faut l’expand (optionnel)
      // Ici on refait un retrieve expand si nécessaire
      let fullSession = session;
      try {
        fullSession = await stripe.checkout.sessions.retrieve(session.id, {
          expand: ["line_items.data.price"],
        });
      } catch (_) {}

      const plan = pickPlanFromSession(fullSession);

      // ✅ MAJ Supabase (profiles)
      const { error } = await supabase
        .from("profiles")
        .update({
          is_premium: true,
          plan,
          stripe_customer_id: customerId || null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", userId);

      if (error) {
        return res.status(500).json({ error: "Supabase update failed", details: error.message });
      }
    }

    // (Optionnel) si abonnement annulé => retirer premium
    if (event.type === "customer.subscription.deleted") {
      const sub = event.data.object;
      const customerId = clean(sub.customer);

      if (customerId) {
        await supabase
          .from("profiles")
          .update({
            is_premium: false,
            plan: "free",
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_customer_id", customerId);
      }
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    return res.status(500).json({ error: err?.message || "Webhook error" });
  }
}
