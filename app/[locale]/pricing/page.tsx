import { Suspense } from "react";

import PricingShowcaseClient from "@/app/pricing/PricingShowcaseClient";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PricingShowcaseClient />
    </Suspense>
  );
}
