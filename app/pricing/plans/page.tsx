import React, { Suspense } from "react";
import PricingClient from "../PricingClient";

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Chargement…</div>}>
      <PricingClient />
    </Suspense>
  );
}
