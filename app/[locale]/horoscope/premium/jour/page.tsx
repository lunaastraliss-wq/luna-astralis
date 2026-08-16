import type {
  Metadata,
} from "next";

import Image from "next/image";
import Link from "next/link";
import {
  notFound,
} from "next/navigation";

import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";

import HoroscopeDailyCheckoutForm from "../../../../horoscope/premium/HoroscopeDailyCheckoutForm";

import {
  isLocale,
  locales,
} from "@/i18n/config";

import {
  HOROSCOPE_DAILY_TRANSLATIONS,
} from "@/i18n/pages/horoscope/jour";

import "../../../../horoscope/premium/horoscope-premium.css";
import "../../../../horoscope/premium/horoscope-daily-form.css";

/*
|--------------------------------------------------------------------------
| Informations du rapport
|--------------------------------------------------------------------------
*/

const SITE_URL =
  "https://luna-astralis.app";

const REPORT_PREVIEW_URLS = {
  fr: "/reports/apercu-rapport-horoscope-jour.pdf",

  en:
    "/reports/Luna-Astralis-Daily-Horoscope-English-Demo.pdf",

  es:
    "/reports/Luna-Astralis-Horoscopo-Diario-Espanol-Demo.pdf",

  de:
    "/reports/Luna-Astralis-Tageshoroskop-Deutsch-Demo.pdf",

  it:
    "/reports/Luna-Astralis-Oroscopo-Giornaliero-Italiano-Demo.pdf",

  pt:
    "/reports/Luna-Astralis-Horoscopo-Diario-Portugues-Demo.pdf",
} as const;

const REPORT_COVER_URLS = {
  fr:
    "/reports/couverture-horoscope-jour.png",

  en:
    "/reports/premium-daily-horoscope-cover.png",

  es:
    "/reports/portada-horoscopo-premium-diario.png",

  de:
    "/reports/premium-taegliches-horoskop-titelblatt.png",

  it:
    "/reports/copertina-oroscopo-premium-quotidiano.png",

  pt:
    "/reports/capa-horoscopo-premium-diario.png",
} as const;

/*
|--------------------------------------------------------------------------
| Routes statiques
|--------------------------------------------------------------------------
*/

export function generateStaticParams() {
  return locales.map(
    (locale) => ({
      locale,
    }),
  );
}

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

/*
|--------------------------------------------------------------------------
| Métadonnées SEO
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
    HOROSCOPE_DAILY_TRANSLATIONS[
      locale
    ];

  const reportCoverUrl =
    REPORT_COVER_URLS[locale];

  const pageUrl =
    `${SITE_URL}/${locale}/horoscope/premium/jour`;

  return {
    title:
      text.metadata.title,

    description:
      text.metadata.description,

    alternates: {
      canonical:
        pageUrl,

      languages: {
        fr:
          `${SITE_URL}/fr/horoscope/premium/jour`,

        en:
          `${SITE_URL}/en/horoscope/premium/jour`,

        es:
          `${SITE_URL}/es/horoscope/premium/jour`,

        de:
          `${SITE_URL}/de/horoscope/premium/jour`,

        it:
          `${SITE_URL}/it/horoscope/premium/jour`,

        pt:
          `${SITE_URL}/pt/horoscope/premium/jour`,

        "x-default":
          `${SITE_URL}/fr/horoscope/premium/jour`,
      },
    },

    openGraph: {
      title:
        text.metadata.ogTitle,

      description:
        text.metadata.ogDescription,

      url:
        pageUrl,

      siteName:
        "Luna Astralis",

      type:
        "website",

      locale:
        text.metadata.locale,

      images: [
        {
          url:
            reportCoverUrl,

          width:
            1414,

          height:
            2000,

          alt:
            text.metadata.imageAlt,
        },
      ],
    },

    twitter: {
      card:
        "summary_large_image",

      title:
        text.metadata.twitterTitle,

      description:
        text.metadata.twitterDescription,

      images: [
        reportCoverUrl,
      ],
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

export default function HoroscopePremiumJourPage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    HOROSCOPE_DAILY_TRANSLATIONS[
      locale
    ];

  const reportCoverUrl =
    REPORT_COVER_URLS[locale];

  const reportPreviewUrl =
    REPORT_PREVIEW_URLS[locale];

  const pageUrl =
    `${SITE_URL}/${locale}/horoscope/premium/jour`;

  const premiumUrl =
    `/${locale}/horoscope/premium`;

  const freeHoroscopeUrl =
    `/${locale}/horoscope`;

  /*
  |--------------------------------------------------------------------------
  | Données structurées
  |--------------------------------------------------------------------------
  */

  const jsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "Product",

    name:
      text.metadata.ogTitle,

    description:
      text.metadata.description,

    image:
      `${SITE_URL}${reportCoverUrl}`,

    brand: {
      "@type":
        "Brand",

      name:
        "Luna Astralis",
    },

    url:
      pageUrl,

    inLanguage:
      text.metadata.language,

    offers: {
      "@type":
        "Offer",

      price:
        "9.99",

      priceCurrency:
        "USD",

      availability:
        "https://schema.org/InStock",

      url:
        pageUrl,
    },
  };

  return (
    <AuthProvider>
      <SiteHeader />

      <main className="premium-page horoscope-daily-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                jsonLd,
              ).replace(
                /</g,
                "\\u003c",
              ),
          }}
        />

        {/*
        |--------------------------------------------------------------------------
        | Hero
        |--------------------------------------------------------------------------
        */}

        <section
          className="horoscope-daily-hero"
          aria-labelledby="horoscope-daily-title"
        >
          <div className="horoscope-daily-hero-copy">
            <span className="premium-section-kicker">
              {text.hero.kicker}
            </span>

            <h1 id="horoscope-daily-title">
              {text.hero.title}
            </h1>

            <p className="horoscope-daily-hero-description">
              {text.hero.description}
            </p>

            <div className="horoscope-daily-hero-actions">
              <a
                href="#commande"
                className="premium-button premium-button-primary"
              >
                {text.hero.createButton}

                <span aria-hidden="true">
                  ✦
                </span>
              </a>

              <a
                href={reportPreviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button premium-button-secondary"
              >
                {text.hero.previewButton}
              </a>
            </div>

            <a
              href={reportPreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-hero-preview-link"
            >
              {text.hero.previewLink}
            </a>

            <div className="horoscope-daily-trust">
              <span>
                ✓ {text.reportPages}{" "}
                {text.hero.personalizedPages}
              </span>

              <span>
                ✓ {text.hero.uniquePayment}
              </span>

              <span>
                ✓ {text.hero.downloadAfterPayment}
              </span>
            </div>
          </div>

          {/*
          |--------------------------------------------------------------------------
          | Offre et couverture
          |--------------------------------------------------------------------------
          */}

          <aside className="horoscope-daily-offer">
            <div className="horoscope-daily-cover">
              <Image
                src={reportCoverUrl}
                alt={text.hero.coverAlt}
                width={566}
                height={800}
                priority
                className="horoscope-daily-cover-image"
              />
            </div>

            <span className="horoscope-daily-offer-label">
              {text.hero.offerLabel}
            </span>

            <div className="horoscope-daily-price">
              {text.reportPrice}
            </div>

            <span className="horoscope-daily-payment">
              {text.hero.uniquePayment}
            </span>

            <ul>
              {text.benefits.map(
                (
                  benefit,
                ) => (
                  <li key={benefit}>
                    <span aria-hidden="true">
                      ✓
                    </span>

                    {benefit}
                  </li>
                ),
              )}
            </ul>

            <a
              href={reportPreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-order-preview-link"
            >
              {text.hero.previewBeforeOrder}

              <span aria-hidden="true">
                {" "}
                →
              </span>
            </a>
          </aside>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Introduction
        |--------------------------------------------------------------------------
        */}

        <section
          className="horoscope-daily-introduction"
          aria-labelledby="horoscope-daily-introduction-title"
        >
          <span className="premium-section-kicker">
            {text.introduction.kicker}
          </span>

          <h2 id="horoscope-daily-introduction-title">
            {text.introduction.title}
          </h2>

          <p>
            {text.introduction.description}
          </p>

          <div className="horoscope-daily-introduction-actions">
            <a
              href={reportPreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button premium-button-secondary"
            >
              {text.introduction.previewButton}
            </a>
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Formulaire de commande
        |--------------------------------------------------------------------------
        */}

        <section
          id="commande"
          className="horoscope-daily-content"
          aria-labelledby="horoscope-daily-order-title"
        >
          <div className="horoscope-daily-content-heading">
            <span className="premium-section-kicker">
              {text.order.kicker}
            </span>

            <h2 id="horoscope-daily-order-title">
              {text.order.title}
            </h2>

            <p>
              {text.order.description}
            </p>
          </div>

          <HoroscopeDailyCheckoutForm />
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Navigation du bas
        |--------------------------------------------------------------------------
        */}

        <nav
          className="premium-bottom-navigation"
          aria-label={
            text.navigation
              .ariaLabel
          }
        >
          <Link href={premiumUrl}>
            {
              text.navigation
                .allFormulas
            }
          </Link>

          <Link href={freeHoroscopeUrl}>
            {
              text.navigation
                .freeHoroscope
            }
          </Link>
        </nav>
      </main>
    </AuthProvider>
  );
}
