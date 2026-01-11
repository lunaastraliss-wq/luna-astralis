import { Suspense } from "react";
import SuccessClient from "./SuccessClient";

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<p style={{ padding: 24 }}>Chargement…</p>}>
      <SuccessClient />
    </Suspense>
  );
}
