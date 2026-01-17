"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function SuccessPage() {
  useEffect(() => {
    // Conversion Google Ads (Achat)
    // IMPORTANT: déclenchée seulement ici (après paiement réussi)
    // @ts-ignore
    if (typeof window !== "undefined" && window.gtag) {
      // @ts-ignore
      window.gtag("event", "conversion", {
        send_to: "AW-17878472225/YVPXCMjRqOcbEKGsj81C",
        transaction_id: "",
      });
    }
  }, []);

  return (
    <div style={{ padding: 28 }}>
      <h1>Paiement confirmé ✅</h1>
      <p>Merci ! Ton accès est activé.</p>

      <div style={{ marginTop: 18 }}>
        <Link href="/chat">Aller au chat</Link>
      </div>
    </div>
  );
}
