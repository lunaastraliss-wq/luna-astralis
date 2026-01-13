// app/pricing/plans/page.tsx
import React, { Suspense } from "react";
import PricingClient from "./PricingClient";

export default function PlansPage() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Chargement…</div>}>
      <PricingClient />
    </Suspense>
  );
}
