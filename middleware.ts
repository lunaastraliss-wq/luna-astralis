"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function CheckoutSuccessPage() {
  const router = useRouter();
  const sp = useSearchParams();

  const next = sp.get("next") || "/chat";
  const sessionId = sp.get("session_id") || "";

  useEffect(() => {
    (async () => {
      const supabase = createClientComponentClient();

      // Vérifie session
      const { data } = await supabase.auth.getSession();
      const isAuth = !!data.session;

      // Si pas auth, on envoie au login (avec next)
      if (!isAuth) {
        router.replace(`/login?next=${encodeURIComponent(next)}`);
        return;
      }

      // Si tu n'as pas /api/stripe/sync, enlève ce bloc
      if (sessionId) {
        try {
          await fetch("/api/stripe/sync", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ session_id: sessionId }),
          });
        } catch {}
      }

      router.replace(next);
    })();
  }, [router, next, sessionId]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Paiement confirmé</h1>
      <p>Redirection en cours…</p>
    </div>
  );
}
