import __i18n from "../../../i18n/migrated/fr/app/checkout/success/page.json";
import { Suspense } from "react";
import SuccessClient from "./SuccessClient";

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<p style={{ padding: 24 }}>{__i18n["chargement"]}</p>}>
      <SuccessClient />
    </Suspense>
  );
}
