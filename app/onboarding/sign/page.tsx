import __i18n from "../../../i18n/migrated/fr/app/onboarding/sign/page.json";
// app/onboarding/sign/page.tsx
import { Suspense } from "react";
import SignOnboardingClient from "./SignOnboardingClient";

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>{__i18n["chargement"]}</div>}>
      <SignOnboardingClient />
    </Suspense>
  );
}
