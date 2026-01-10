// app/onboarding/sign/page.tsx
import { Suspense } from "react";
import SignOnboardingClient from "./SignOnboardingClient";

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Chargement…</div>}>
      <SignOnboardingClient />
    </Suspense>
  );
}
