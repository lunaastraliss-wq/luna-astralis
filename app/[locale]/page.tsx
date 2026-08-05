// app/[locale]/page.tsx

import {
  notFound,
} from "next/navigation";

import HomePage from "../page";

import {
  isLocale,
} from "@/i18n/config";

type LocalizedHomePageProps = {
  params: {
    locale: string;
  };
};

export default function LocalizedHomePage({
  params,
}: LocalizedHomePageProps) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <HomePage
      locale={locale}
    />
  );
}
