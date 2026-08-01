// app/[locale]/page.tsx

import HomePage
  from "../page";

import {
  isLocale,
} from "@/i18n/config";

import {
  notFound,
} from "next/navigation";

type LocalizedHomePageProps = {
  params: {
    locale: string;
  };
};

export default function LocalizedHomePage({
  params,
}: LocalizedHomePageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return <HomePage />;
}
