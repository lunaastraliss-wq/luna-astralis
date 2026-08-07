// app/[locale]/pricing/page.tsx

import { Suspense } from "react";
import { notFound } from "next/navigation";

import {
  isLocale,
  type Locale,
} from "@/i18n/config";

import fr from "@/i18n/migrated/fr/app/pricing/pricingclient.json";
import en from "@/i18n/migrated/en/app/pricing/pricingclient.json";
import es from "@/i18n/migrated/es/app/pricing/pricingclient.json";
import de from "@/i18n/migrated/de/app/pricing/pricingclient.json";
import it from "@/i18n/migrated/it/app/pricing/pricingclient.json";
import pt from "@/i18n/migrated/pt/app/pricing/pricingclient.json";

import PricingClient from "@/app/pricing/PricingClient";

const DICTIONARIES = {
  fr,
  en,
  es,
  de,
  it,
  pt,
} satisfies Record<Locale, Record<string, string>>;

type Props = {
  params: {
    locale: string;
  };
};

export default function PricingPage({
  params,
}: Props) {
  const { locale } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <Suspense fallback={null}>
      <PricingClient
        locale={locale}
        dictionary={DICTIONARIES[locale]}
      />
    </Suspense>
  );
}
