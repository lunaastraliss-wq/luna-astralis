// app/[locale]/layout.tsx

import type {
  ReactNode,
} from "react";

import {
  notFound,
} from "next/navigation";

import {
  getDictionary,
} from "@/i18n/getDictionary";

import {
  isLocale,
  locales,
} from "@/i18n/config";

import TranslationProvider
  from "@/i18n/TranslationProvider";

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
| Propriétés
|--------------------------------------------------------------------------
*/

type LocaleLayoutProps = {
  children: ReactNode;

  params: {
    locale: string;
  };
};

/*
|--------------------------------------------------------------------------
| Mise en page linguistique
|--------------------------------------------------------------------------
*/

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary =
    await getDictionary(locale);

  return (
    <TranslationProvider
      locale={locale}
      dictionary={dictionary}
    >
      {children}
    </TranslationProvider>
  );
}
