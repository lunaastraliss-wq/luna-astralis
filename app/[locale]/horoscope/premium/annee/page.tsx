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

import HoroscopeYearlyCheckoutForm from "../../../../horoscope/premium/HoroscopeYearlyCheckoutForm";

import {
  isLocale,
  locales,
} from "@/i18n/config";

import {
  HOROSCOPE_YEARLY_TRANSLATIONS,
} from "@/i18n/pages/horoscope/annee";

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
  fr: "/reports/apercu-rapport-horoscope-annee.pdf",
  en: "/reports/demo-yearly-horoscope-en.pdf",
  es: "/reports/demo-horoscopo-anual-es.pdf",
  de: "/reports/demo-jahreshoroskop-de.pdf",
  it: "/reports/demo-oroscopo-annuale-it.pdf",
  pt: "/reports/demo-horoscopo-anual-pt-br.pdf",
} as const;

const REPORT_COVER_URLS = {
  fr: "/reports/couverture-horoscope-annee.png",
  en: "/reports/cover-yearly-horoscope.png",
  es: "/reports/portada-horoscopo-anual.png",
  de: "/reports/titelseite-jahreshoroskop.png",
  it: "/reports/copertina-oroscopo-annuale.png",
  pt: "/reports/capa-horoscopo-anual.png",
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
    HOROSCOPE_YEARLY_TRANSLATIONS[
      locale
    ];

  const reportCoverUrl =
    REPORT_COVER_URLS[locale];

  const pageUrl =
    `${SITE_URL}/${locale}/horoscope/premium/annee`;

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
          `${SITE_URL}/fr/horoscope/premium/annee`,

        en:
          `${SITE_URL}/en/horoscope/premium/annee`,

        es:
          `${SITE_URL}/es/horoscope/premium/annee`,

        de:
          `${SITE_URL}/de/horoscope/premium/annee`,

        it:
          `${SITE_URL}/it/horoscope/premium/annee`,

        pt:
          `${SITE_URL}/pt/horoscope/premium/annee`,

        "x-default":
          `${SITE_URL}/fr/horoscope/premium/annee`,
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

export default function HoroscopePremiumAnneePage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    HOROSCOPE_YEARLY_TRANSLATIONS[
      locale
    ];

  const reportCoverUrl =
    REPORT_COVER_URLS[locale];

  const reportPreviewUrl =
    REPORT_PREVIEW_URLS[locale];

  const pageUrl =
    `${SITE_URL}/${locale}/horoscope/premium/annee`;

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
        "34.99",

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

        <section
          className="horoscope-daily-hero"
          aria-labelledby="horoscope-year-title"
        >
          <div className="horoscope-daily-hero-copy">
            <span className="premium-section-kicker">
              {text.hero.kicker}
            </span>

            <h1 id="horoscope-year-title">
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

        <section
          className="horoscope-daily-introduction"
          aria-labelledby="horoscope-year-introduction-title"
        >
          <span className="premium-section-kicker">
            {text.introduction.kicker}
          </span>

          <h2 id="horoscope-year-introduction-title">
            {text.introduction.title}
          </h2>

          {text.introduction.paragraphs.map(
            (
              paragraph,
            ) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ),
          )}

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

        <section
          id="commande"
          className="horoscope-daily-content"
          aria-labelledby="horoscope-year-order-title"
        >
          <div className="horoscope-daily-content-heading">
            <span className="premium-section-kicker">
              {text.order.kicker}
            </span>

            <h2 id="horoscope-year-order-title">
              {text.order.title}
            </h2>

            <p>
              {text.order.description}
            </p>
          </div>

          <HoroscopeYearlyCheckoutForm />
        </section>

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
