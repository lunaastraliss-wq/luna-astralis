// app/[locale]/carte-du-ciel/gratuite/page.tsx

import type {
  Metadata,
} from "next";

import {
  notFound,
} from "next/navigation";

import AuthProvider from "@/components/AuthProvider";
import NatalChartForm from "@/components/NatalChartForm";
import SiteHeader from "@/components/SiteHeader";

import {
  isLocale,
  locales,
} from "@/i18n/config";

type Props = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return locales.map(
    (locale) => ({
      locale,
    })
  );
}

export function generateMetadata({
  params,
}: Props): Metadata {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    return {};
  }

  const titles = {
    fr: "Carte du ciel gratuite | Luna Astralis",
    en: "Free Birth Chart | Luna Astralis",
    es: "Carta natal gratis | Luna Astralis",
    de: "Kostenloses Geburtshoroskop | Luna Astralis",
    it: "Tema natale gratuito | Luna Astralis",
    pt: "Mapa astral grátis | Luna Astralis",
  };

  const descriptions = {
    fr: "Créez gratuitement votre carte du ciel et découvrez votre Soleil, votre Lune, votre Ascendant et vos principales positions astrologiques.",
    en: "Create your free birth chart and discover your Sun, Moon, Ascendant and main astrological placements.",
    es: "Crea gratis tu carta natal y descubre tu Sol, tu Luna, tu Ascendente y tus principales posiciones astrológicas.",
    de: "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Sonne, Mond, Aszendent und Ihre wichtigsten astrologischen Positionen.",
    it: "Crea gratuitamente il tuo tema natale e scopri Sole, Luna, Ascendente e le principali posizioni astrologiche.",
    pt: "Crie gratuitamente seu mapa astral e descubra seu Sol, sua Lua, seu Ascendente e suas principais posições astrológicas.",
  };

  return {
    title:
      titles[locale],

    description:
      descriptions[locale],

    alternates: {
      canonical:
        `https://luna-astralis.app/${locale}/carte-du-ciel/gratuite`,

      languages: {
        fr:
          "https://luna-astralis.app/fr/carte-du-ciel/gratuite",

        en:
          "https://luna-astralis.app/en/carte-du-ciel/gratuite",

        es:
          "https://luna-astralis.app/es/carte-du-ciel/gratuite",

        de:
          "https://luna-astralis.app/de/carte-du-ciel/gratuite",

        it:
          "https://luna-astralis.app/it/carte-du-ciel/gratuite",

        pt:
          "https://luna-astralis.app/pt/carte-du-ciel/gratuite",

        "x-default":
          "https://luna-astralis.app/fr/carte-du-ciel/gratuite",
      },
    },
  };
}

export default function FreeBirthChartPage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <AuthProvider>
      <SiteHeader />

      <main>
        <NatalChartForm
          locale={locale}
        />
      </main>
    </AuthProvider>
  );
}
