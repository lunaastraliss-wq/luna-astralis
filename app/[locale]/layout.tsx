// app/[locale]/layout.tsx

import type {
  ReactNode,
} from "react";

import {
  notFound,
} from "next/navigation";

import {
  isLocale,
  locales,
} from "@/i18n/config";

/*
|--------------------------------------------------------------------------
| Génération des langues
|--------------------------------------------------------------------------
*/

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

/*
|--------------------------------------------------------------------------
| Mise en page linguistique
|--------------------------------------------------------------------------
*/

type LocaleLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

export default function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return children;
}
