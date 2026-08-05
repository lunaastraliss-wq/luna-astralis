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
  type Locale,
} from "@/i18n/config";

import "@/app/carte-du-ciel/page.css";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type Props = {
  params: {
    locale: string;
  };
};

type PageText = {
  badge: string;
  title: string;
  description: string;
};

/*
|--------------------------------------------------------------------------
| Textes
|--------------------------------------------------------------------------
*/

const PAGE_TEXTS: Record<
  Locale,
  PageText
> = {
  fr: {
    badge:
      "Carte du ciel gratuite",

    title:
      "Créez votre carte du ciel",

    description:
      "Découvrez votre Soleil, votre Lune, votre Ascendant et vos principales positions astrologiques.",
  },

  en: {
    badge:
      "Free birth chart",

    title:
      "Create your birth chart",

    description:
      "Discover your Sun, Moon, Ascendant and main astrological placements.",
  },

  es: {
    badge:
      "Carta natal gratis",

    title:
      "Crea tu carta natal",

    description:
      "Descubre tu Sol, tu Luna, tu Ascendente y tus principales posiciones astrológicas.",
  },

  de: {
    badge:
      "Kostenloses Geburtshoroskop",

    title:
      "Erstellen Sie Ihr Geburtshoroskop",

    description:
      "Entdecken Sie Sonne, Mond, Aszendent und Ihre wichtigsten astrologischen Positionen.",
  },

  it: {
    badge:
      "Tema natale gratuito",

    title:
      "Crea il tuo tema natale",

    description:
      "Scopri Sole, Luna, Ascendente e le principali posizioni astrologiche.",
  },

  pt: {
    badge:
      "Mapa astral grátis",

    title:
      "Crie seu mapa astral",

    description:
      "Descubra seu Sol, sua Lua, seu Ascendente e suas principais posições astrológicas.",
  },
};

/*
|--------------------------------------------------------------------------
| Routes statiques
|--------------------------------------------------------------------------
*/

export function generateStaticParams() {
  return locales.map(
    (locale) => ({
      locale,
    })
  );
}

/*
|--------------------------------------------------------------------------
| Métadonnées
|--------------------------------------------------------------------------
*/

export function generateMetadata({
  params,
}: Props): Metadata {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    return {};
  }

  const text =
    PAGE_TEXTS[
      locale
    ];

  const pageUrl =
    `https://luna-astralis.app/${locale}/carte-du-ciel/gratuite`;

  return {
    title:
      `${text.badge} | Luna Astralis`,

    description:
      text.description,

    alternates: {
      canonical:
        pageUrl,

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

    robots: {
      index:
        true,

      follow:
        true,
    },
  };
}

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default function FreeBirthChartPage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    PAGE_TEXTS[
      locale
    ];

  return (
    <AuthProvider>
      <SiteHeader />

      <main className="astro-chart-page">
        <section className="astro-hero">
          <span className="astro-badge">
            {text.badge}
          </span>

          <h1>
            {text.title}
          </h1>

          <p className="section-sub">
            {text.description}
          </p>
        </section>

        <NatalChartForm
          locale={locale}
        />
      </main>
    </AuthProvider>
  );
}
