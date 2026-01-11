"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function CheckoutSuccessPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const sessionId = sp.get("session_id"); // Stripe mettra ça ici

  useEffect(() => {
    (async () => {
      const supabase = createClientComponentClient();

      // Optionnel mais utile: si tu as un endpoint serveur qui synchronise
      // Stripe -> user_subscriptions (sinon tu peux enlever ce bloc)
      if (sessionId) {
        try {
          await fetch("/api/stripe/sync", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ session_id: sessionId }),
          });
        } catch {
          // on ignore: le but principal est de rediriger
        }
      }

      const { data } = await supabase.auth.getSession();
      const isAuth = !!data.session;

      if (isAuth) router.replace("/chat");
      else router.replace("/login?next=/chat");
    })();
  }, [router, sessionId]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Paiement confirmé</h1>
      <p>Redirection en cours…</p>
    </div>
  );
}
