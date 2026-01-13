import { Suspense } from "react";
import PricingShowcaseClient from "./PricingShowcaseClient";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PricingShowcaseClient />
    </Suspense>
  );
}
