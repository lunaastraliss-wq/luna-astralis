import type {
  Metadata,
} from "next";

import Link from "next/link";
import {
  notFound,
} from "next/navigation";

import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";

import {
  isLocale,
  locales,
} from "@/i18n/config";

import {
  HOROSCOPE_PREMIUM_TRANSLATIONS,
} from "@/i18n/pages/horoscope/premium";

import "../../../horoscope/premium/horoscope-premium.css";

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const SITE_URL =
  "https://luna-astralis.app";

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
    HOROSCOPE_PREMIUM_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/horoscope/premium`;

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
          `${SITE_URL}/fr/horoscope/premium`,

        en:
          `${SITE_URL}/en/horoscope/premium`,

        es:
          `${SITE_URL}/es/horoscope/premium`,

        de:
          `${SITE_URL}/de/horoscope/premium`,

        it:
          `${SITE_URL}/it/horoscope/premium`,

        pt:
          `${SITE_URL}/pt/horoscope/premium`,

        "x-default":
          `${SITE_URL}/fr/horoscope/premium`,
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

      locale:
        text.metadata.locale,

      type:
        "website",
    },

    twitter: {
      card:
        "summary_large_image",

      title:
        text.metadata.ogTitle,

      description:
        text.metadata.ogDescription,
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

export default function HoroscopePremiumPage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    HOROSCOPE_PREMIUM_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/horoscope/premium`;

  const chartUrl =
    `/${locale}/carte-du-ciel`;

  const freeHoroscopeUrl =
    `/${locale}/horoscope`;

  const astrologyUrl =
    `/${locale}/astrologie`;

  const getLocalizedUrl = (
    path: string,
  ) =>
    `/${locale}${path}`;

  /*
  |--------------------------------------------------------------------------
  | Données structurées
  |--------------------------------------------------------------------------
  */

  const jsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "CollectionPage",

    name:
      text.metadata.ogTitle,

    description:
      text.metadata.description,

    url:
      pageUrl,

    inLanguage:
      text.metadata.language,

    mainEntity: {
      "@type":
        "ItemList",

      numberOfItems:
        text.formulas.items.length,

      itemListElement:
        text.formulas.items.map(
          (
            formula,
            index,
          ) => ({
            "@type":
              "ListItem",

            position:
              index + 1,

            name:
              formula.title,

            url:
              `${SITE_URL}${getLocalizedUrl(
                formula.href,
              )}`,
          }),
        ),
    },
  };

  return (
    <AuthProvider>
      <SiteHeader />

      <main className="premium-page">
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

        <section className="premium-hero">
          <div className="premium-hero-glow premium-hero-glow-one" />

          <div className="premium-hero-glow premium-hero-glow-two" />

          <div className="premium-hero-content">
            <span className="premium-eyebrow">
              {text.hero.eyebrow}
            </span>

            <h1>
              {text.hero.titleBefore}

              <span>
                {" "}
                {text.hero.titleHighlight}
              </span>
            </h1>

            <p className="premium-hero-text">
              {text.hero.description}
            </p>

            <div className="premium-hero-actions">
              <a
                href="#formules"
                className="premium-primary-button"
              >
                {text.hero.formulasButton}
              </a>

              <Link
                href={chartUrl}
                className="premium-secondary-button"
              >
                {text.hero.chartButton}
              </Link>
            </div>

            <div className="premium-hero-features">
              {text.hero.features.map(
                (feature) => (
                  <span key={feature}>
                    ✓ {feature}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Introduction
        |--------------------------------------------------------------------------
        */}

        <section className="premium-intro-section">
          <div className="premium-intro-card">
            <span className="premium-section-kicker">
              {text.intro.kicker}
            </span>

            <h2>
              {text.intro.title}
            </h2>

            {text.intro.paragraphs.map(
              (
                paragraph,
              ) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ),
            )}
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Formules
        |--------------------------------------------------------------------------
        */}

        <section
          id="formules"
          className="premium-formulas-section"
        >
          <div className="premium-section-heading">
            <span className="premium-section-kicker">
              {text.formulas.kicker}
            </span>

            <h2>
              {text.formulas.title}
            </h2>

            <p>
              {text.formulas.description}
            </p>
          </div>

          <div className="premium-formulas-grid">
            {text.formulas.items.map(
              (
                formula,
              ) => (
                <article
                  key={formula.title}
                  className="premium-formula-card"
                >
                  <span
                    className="premium-formula-icon"
                    aria-hidden="true"
                  >
                    {formula.icon}
                  </span>

                  <h3>
                    {formula.title}
                  </h3>

                  <p className="premium-formula-description">
                    {formula.description}
                  </p>

                  <ul>
                    {formula.items.map(
                      (
                        item,
                      ) => (
                        <li key={item}>
                          <span aria-hidden="true">
                            ✓
                          </span>

                          <span>
                            {item}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>

                  <div className="premium-formula-action">
                    <div className="premium-formula-price">
                      {formula.price}
                    </div>

                    <Link
                      href={getLocalizedUrl(
                        formula.href,
                      )}
                      className="premium-primary-button"
                    >
                      {formula.buttonLabel}
                    </Link>
                  </div>
                </article>
              ),
            )}
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Fonctionnement
        |--------------------------------------------------------------------------
        */}

        <section className="premium-process-section">
          <div className="premium-section-heading">
            <span className="premium-section-kicker">
              {text.process.kicker}
            </span>

            <h2>
              {text.process.title}
            </h2>

            <p>
              {text.process.description}
            </p>
          </div>

          <div className="premium-process-grid">
            {text.process.steps.map(
              (
                step,
              ) => (
                <article
                  key={step.number}
                  className="premium-process-card"
                >
                  <span className="premium-process-number">
                    {step.number}
                  </span>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>
                </article>
              ),
            )}
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Informations utilisées
        |--------------------------------------------------------------------------
        */}

        <section className="premium-data-section">
          <div className="premium-data-card">
            <div className="premium-data-content">
              <span className="premium-section-kicker">
                {text.data.kicker}
              </span>

              <h2>
                {text.data.title}
              </h2>

              <p>
                {text.data.description}
              </p>
            </div>

            <div className="premium-data-grid">
              {text.data.items.map(
                (
                  item,
                ) => (
                  <div key={item.title}>
                    <span aria-hidden="true">
                      {item.icon}
                    </span>

                    <strong>
                      {item.title}
                    </strong>

                    <p>
                      {item.description}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Disponibilité
        |--------------------------------------------------------------------------
        */}

        <section className="premium-waiting-section">
          <div className="premium-waiting-card">
            <span className="premium-waiting-icon">
              🌙
            </span>

            <span className="premium-section-kicker">
              {text.waiting.kicker}
            </span>

            <h2>
              {text.waiting.title}
            </h2>

            <p>
              {text.waiting.description}
            </p>

            <div className="premium-waiting-actions">
              <Link
                href={`/${locale}/horoscope/premium/jour`}
                className="premium-primary-button"
              >
                {text.waiting.dayButton}
              </Link>

              <Link
                href={freeHoroscopeUrl}
                className="premium-secondary-button"
              >
                {text.waiting.freeButton}
              </Link>
            </div>
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Navigation
        |--------------------------------------------------------------------------
        */}

        <nav
          className="premium-bottom-navigation"
          aria-label={
            text.navigation
              .ariaLabel
          }
        >
          <Link href={freeHoroscopeUrl}>
            {text.navigation.free}
          </Link>

          <Link href={astrologyUrl}>
            {
              text.navigation
                .astrology
            }
          </Link>

          <Link href={chartUrl}>
            {text.navigation.chart}
          </Link>
        </nav>
      </main>
    </AuthProvider>
  );
}
