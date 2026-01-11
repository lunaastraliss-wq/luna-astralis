"use client";

import { useEffect, useMemo, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

function safeNext(raw: string | null): string {
  const fallback = "/chat";
  if (!raw) return fallback;

  // seulement des chemins internes
  if (!raw.startsWith("/")) return fallback;

  // empêche boucles
  if (raw === "/login" || raw.startsWith("/login?")) return fallback;
  if (raw === "/checkout/success" || raw.startsWith("/checkout/success?"))
    return fallback;

  return raw;
}

export default function CheckoutSuccessPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const ran = useRef(false);

  const sessionId = useMemo(() => sp.get("session_id") || "", [sp]);
  const next = useMemo(() => safeNext(sp.get("next")), [sp]);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    (async () => {
      const supabase = createClientComponentClient();

      // 1) (optionnel) sync Stripe -> DB, sans bloquer
      if (sessionId) {
        try {
          await fetch("/api/stripe/sync", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ session_id: sessionId }),
          });
        } catch {
          // ignore
        }
      }

      // 2) Vérifie session
      const { data, error } = await supabase.auth.getSession();
      const isAuth = !!data?.session && !error;

      // 3) Redirect final
      if (isAuth) router.replace(next);
      else router.replace(`/login?next=${encodeURIComponent(next)}`);
    })();
  }, [router, sessionId, next]);

  return (
    <main style={{ padding: 24 }}>
      <h1>Paiement confirmé</h1>
      <p>Redirection en cours…</p>
    </main>
  );
}
