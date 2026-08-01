// app/[locale]/astrologie/maisons/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";

import {
  isLocale,
  locales,
} from "@/i18n/config";

import {
  MAISONS_TRANSLATIONS,
} from "@/i18n/pages/astrologie/maisons";

import "../../../astrologie/maisons/maisons.css";

const SITE_URL =
  "https://luna-astralis.app";

export function generateStaticParams() {
  return locales.map(
    (locale) => ({
      locale,
    })
  );
}

type Props = {
  params: {
    locale: string;
  };
};

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
    MAISONS_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/maisons`;

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
          `${SITE_URL}/fr/astrologie/maisons`,
        en:
          `${SITE_URL}/en/astrologie/maisons`,
        es:
          `${SITE_URL}/es/astrologie/maisons`,
        de:
          `${SITE_URL}/de/astrologie/maisons`,
        it:
          `${SITE_URL}/it/astrologie/maisons`,
        pt:
          `${SITE_URL}/pt/astrologie/maisons`,
        "x-default":
          `${SITE_URL}/fr/astrologie/maisons`,
      },
    },

    openGraph: {
      title:
        text.metadata.title,

      description:
        text.metadata.description,

      url:
        pageUrl,

      siteName:
        "Luna Astralis",

      locale:
        locale === "fr"
          ? "fr_CA"
          : locale === "en"
          ? "en_US"
          : locale === "es"
          ? "es_ES"
          : locale === "de"
          ? "de_DE"
          : locale === "it"
          ? "it_IT"
          : "pt_BR",

      type:
        "website",
    },

    twitter: {
      card:
        "summary_large_image",

      title:
        text.metadata.title,

      description:
        text.metadata.description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function MaisonsPage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    MAISONS_TRANSLATIONS[
      locale
    ];

  function localize(
    path: string
  ) {
    return `/${locale}${path}`;
  }

  return (
    <div className="houses-page">
      <AuthProvider>
        <SiteHeader />

        <main className="houses-wrap">
          <section className="houses-hero">
            <span className="houses-badge">
              {
                text.heroBadge
              }
            </span>

            <h1>
              {text.heroTitle}
            </h1>

            <p>
              {
                text.heroDescription
              }
            </p>

            <div className="houses-hero-actions">
              <Link
                href="/carte-du-ciel"
                className="houses-primary-button"
              >
                {
                  text.createChart
                }
              </Link>

              <Link
                href={`/${locale}/astrologie`}
                className="houses-secondary-button"
              >
                {
                  text.backToGuides
                }
              </Link>
            </div>
          </section>

          <section
            className="houses-library"
            aria-labelledby="houses-title"
          >
            <div className="houses-heading">
              <span>
                {
                  text.libraryLabel
                }
              </span>

              <h2 id="houses-title">
                {
                  text.libraryTitle
                }
              </h2>

              <p>
                {
                  text.libraryDescription
                }
              </p>
            </div>

            <div className="houses-grid">
              {text.houses.map(
                (house) => (
                  <Link
                    href={localize(
                      house.href
                    )}
                    className="house-card"
                    key={
                      house.href
                    }
                  >
                    <div className="house-card-top">
                      <div className="house-symbol">
                        {
                          house.symbol
                        }
                      </div>

                      <span className="house-theme">
                        {
                          house.theme
                        }
                      </span>
                    </div>

                    <h2>
                      {house.name}
                    </h2>

                    <p>
                      {
                        house.description
                      }
                    </p>

                    <span className="house-card-link">
                      {
                        text.discoverHouse
                      }
                    </span>
                  </Link>
                )
              )}
            </div>
          </section>

          <section className="houses-callout">
            <div>
              <span className="houses-badge">
                {
                  text.calloutBadge
                }
              </span>

              <h2>
                {
                  text.calloutTitle
                }
              </h2>

              <p>
                {
                  text.calloutDescription
                }
              </p>
            </div>

            <Link
              href="/carte-du-ciel"
              className="houses-primary-button"
            >
              {
                text.calloutButton
              }
            </Link>
          </section>
        </main>
      </AuthProvider>
    </div>
  );
}
