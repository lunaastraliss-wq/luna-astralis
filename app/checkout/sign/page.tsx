// app/checkout/sign/page.tsx
import { Suspense } from "react";
import CheckoutSignClient from "./CheckoutSignClient";

export default function Page() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#07070b" }} />}>
      <CheckoutSignClient />
    </Suspense>
  );
}
