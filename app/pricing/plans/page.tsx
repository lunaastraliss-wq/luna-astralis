// app/pricing/plans/page.tsx
import React, { Suspense } from "react";
import PlansClient from "./PlansClient";

export default function PlansPage() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Chargement…</div>}>
      <PlansClient />
    </Suspense>
  );
}
