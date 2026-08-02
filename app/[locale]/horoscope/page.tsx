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
  HOROSCOPE_TRANSLATIONS,
} from "@/i18n/pages/horoscope";

import "../../horoscope/page.css";
import "../../horoscope/horoscope.css";

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const SITE_URL =
  "https://luna-astralis.app";

/*
|--------------------------------------------------------------------------
| Forcer la mise à jour de la page
|--------------------------------------------------------------------------
*/

export const dynamic =
  "force-dynamic";

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
    HOROSCOPE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/horoscope`;

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
          `${SITE_URL}/fr/horoscope`,

        en:
          `${SITE_URL}/en/horoscope`,

        es:
          `${SITE_URL}/es/horoscope`,

        de:
          `${SITE_URL}/de/horoscope`,

        it:
          `${SITE_URL}/it/horoscope`,

        pt:
          `${SITE_URL}/pt/horoscope`,

        "x-default":
          `${SITE_URL}/fr/horoscope`,
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
| Page Horoscope
|--------------------------------------------------------------------------
*/

export default function HoroscopePage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    HOROSCOPE_TRANSLATIONS[
      locale
    ];

  const maintenant =
    new Date();

  const dateDuJour =
    new Intl.DateTimeFormat(
      text.dateLocale,
      {
        weekday:
          "long",

        day:
          "numeric",

        month:
          "long",

        year:
          "numeric",

        timeZone:
          "America/Toronto",
      },
    ).format(
      maintenant,
    );

  const homeUrl =
    `/${locale}`;

  const astrologyUrl =
    `/${locale}/astrologie`;

  const astrologySignsUrl =
    `/${locale}/astrologie/signes`;

  const chartUrl =
    `/${locale}/carte-du-ciel`;

  const compatibilityUrl =
    `/${locale}/compatibilite`;

  /*
  |--------------------------------------------------------------------------
  | Données structurées
  |--------------------------------------------------------------------------
  */

  const pageUrl =
    `${SITE_URL}/${locale}/horoscope`;

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
        text.signs.length,

      itemListElement:
        text.signs.map(
          (
            sign,
            index,
          ) => ({
            "@type":
              "ListItem",

            position:
              index + 1,

            name:
              sign.name,

            url:
              `${SITE_URL}/${locale}/horoscope/${sign.slug}`,
          }),
        ),
    },
  };

  return (
    <AuthProvider>
      <SiteHeader />

      <main className="horoscope-page">
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
        | Présentation
        |--------------------------------------------------------------------------
        */}

        <section
          className="horoscope-hero"
          aria-labelledby="horoscope-main-title"
        >
          <div
            className="horoscope-hero-glow"
            aria-hidden="true"
          />

          <div className="horoscope-hero-content">
            <span className="horoscope-eyebrow">
              {text.hero.eyebrow}
            </span>

            <h1 id="horoscope-main-title">
              {text.hero.title}
            </h1>

            <p className="horoscope-date">
              {dateDuJour}
            </p>

            <p className="horoscope-intro">
              {text.hero.intro}
            </p>
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Liste des signes
        |--------------------------------------------------------------------------
        */}

        <section
          className="horoscope-signs-section"
          aria-labelledby="horoscope-signs-title"
        >
          <div className="horoscope-section-heading">
            <span className="horoscope-section-kicker">
              {
                text.signsSection
                  .kicker
              }
            </span>

            <h2 id="horoscope-signs-title">
              {
                text.signsSection
                  .title
              }
            </h2>

            <p>
              {
                text.signsSection
                  .description
              }
            </p>
          </div>

          <div className="horoscope-signs-grid">
            {text.signs.map(
              (
                signe,
              ) => (
                <Link
                  key={
                    signe.slug
                  }
                  href={`/${locale}/horoscope/${signe.slug}`}
                  className="horoscope-sign-card"
                  aria-label={
                    signe.ariaLabel
                  }
                >
                  <span
                    className="horoscope-sign-symbol"
                    aria-hidden="true"
                  >
                    {
                      signe.symbol
                    }
                  </span>

                  <div className="horoscope-sign-content">
                    <h3>
                      {
                        signe.name
                      }
                    </h3>

                    <p className="horoscope-sign-dates">
                      {
                        signe.dates
                      }
                    </p>

                    <span className="horoscope-sign-element">
                      {
                        text
                          .signsSection
                          .elementLabel
                      }{" "}
                      {
                        signe.element
                      }
                    </span>
                  </div>

                  <span
                    className="horoscope-sign-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ),
            )}
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Information
        |--------------------------------------------------------------------------
        */}

        <section
          className="horoscope-info-section"
          aria-labelledby="horoscope-info-title"
        >
          <div className="horoscope-info-card">
            <span
              className="horoscope-info-icon"
              aria-hidden="true"
            >
              ☾
            </span>

            <div>
              <h2 id="horoscope-info-title">
                {text.info.title}
              </h2>

              <p>
                {
                  text.info
                    .description
                }
              </p>
            </div>
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Carte du ciel et compatibilité
        |--------------------------------------------------------------------------
        */}

        <section
          className="horoscope-cta-section"
          aria-labelledby="horoscope-cta-title"
        >
          <div className="horoscope-cta">
            <span className="horoscope-cta-kicker">
              {text.cta.kicker}
            </span>

            <h2 id="horoscope-cta-title">
              {text.cta.title}
            </h2>

            <p>
              {
                text.cta
                  .description
              }
            </p>

            <div className="horoscope-cta-actions">
              <Link
                href={chartUrl}
                className="horoscope-primary-button"
              >
                {
                  text.cta
                    .chartButton
                }
              </Link>

              <Link
                href={
                  compatibilityUrl
                }
                className="horoscope-secondary-button"
              >
                {
                  text.cta
                    .compatibilityButton
                }
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
          className="horoscope-bottom-nav"
          aria-label={
            text.navigation
              .ariaLabel
          }
        >
          <Link href={homeUrl}>
            {
              text.navigation
                .home
            }
          </Link>

          <Link href={astrologyUrl}>
            {
              text.navigation
                .astrology
            }
          </Link>

          <Link
            href={
              astrologySignsUrl
            }
          >
            {
              text.navigation
                .signs
            }
          </Link>

          <Link
            href={`/${locale}/pricing`}
          >
            {
              text.navigation
                .pricing
            }
          </Link>
        </nav>
      </main>
    </AuthProvider>
  );
}
