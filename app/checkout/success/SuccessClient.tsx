"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function SuccessClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const ran = useRef(false);

  const sessionId = sp.get("session_id");
  const next = sp.get("next") || "/chat";

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    (async () => {
      // ✅ Conversion Google Ads (seulement si gtag existe déjà)
      try {
        // @ts-ignore
        window.gtag?.("event", "conversion", {
          send_to: "AW-17878472225/YVPXCMjRqQcbEKGsj81C",
        });
      } catch {}

      const supabase = createClientComponentClient();

      // (optionnel) sync Stripe
      if (sessionId) {
        try {
          await fetch("/api/stripe/sync", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ session_id: sessionId }),
          });
        } catch {}
      }

      // redirect final
      const { data } = await supabase.auth.getSession();
      const isAuth = !!data.session;

      if (isAuth) {
        router.replace(next);
      } else {
        router.replace(`/login?next=${encodeURIComponent(next)}`);
      }
    })();
  }, [router, sessionId, next]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Paiement confirmé</h1>
      <p>Redirection en cours…</p>
    </div>
  );
}

