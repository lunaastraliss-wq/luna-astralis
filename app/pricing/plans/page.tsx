import __i18n from "../../../i18n/migrated/fr/app/pricing/plans/page.json";
import React, { Suspense } from "react";
import PricingClient from "../PricingClient";

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>{__i18n["chargement"]}</div>}>
      <PricingClient />
    </Suspense>
  );
}
