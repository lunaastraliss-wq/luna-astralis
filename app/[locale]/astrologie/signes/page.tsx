// app/[locale]/astrologie/signes/page.tsx

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
  SIGNES_TRANSLATIONS,
} from "@/i18n/pages/astrologie/signes";

import "../../../astrologie/signes/signes.css";

const SITE_URL =
  "https://luna-astralis.app";

type Props = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return locales.map(
    (
      locale
    ) => ({
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

  if (
    !isLocale(
      locale
    )
  ) {
    return {};
  }

  const text =
    SIGNES_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/signes`;

  return {
    title:
      text.metadata
        .title,

    description:
      text.metadata
        .description,

    alternates: {
      canonical:
        pageUrl,

      languages: {
        fr:
          `${SITE_URL}/fr/astrologie/signes`,

        en:
          `${SITE_URL}/en/astrologie/signes`,

        es:
          `${SITE_URL}/es/astrologie/signes`,

        de:
          `${SITE_URL}/de/astrologie/signes`,

        it:
          `${SITE_URL}/it/astrologie/signes`,

        pt:
          `${SITE_URL}/pt/astrologie/signes`,

        "x-default":
          `${SITE_URL}/fr/astrologie/signes`,
      },
    },

    openGraph: {
      title:
        text.metadata
          .title,

      description:
        text.metadata
          .description,

      url:
        pageUrl,

      siteName:
        "Luna Astralis",

      locale:
        locale,

      type:
        "website",
    },

    twitter: {
      card:
        "summary_large_image",

      title:
        text.metadata
          .title,

      description:
        text.metadata
          .description,
    },

    robots: {
      index:
        true,

      follow:
        true,
    },
  };
}

export default function SignesPage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (
    !isLocale(
      locale
    )
  ) {
    notFound();
  }

  const text =
    SIGNES_TRANSLATIONS[
      locale
    ];

  const localize = (
    path: string
  ) =>
    `/${locale}${path}`;

  return (
    <div className="signs-page">
      <AuthProvider>
        <SiteHeader />

        <main className="signs-wrap">
          <section className="signs-hero">
            <span className="signs-badge">
              {
                text.hero
                  .badge
              }
            </span>

            <h1>
              {
                text.hero
                  .title
              }
            </h1>

            <p>
              {
                text.hero
                  .description
              }
            </p>

            <div className="signs-hero-actions">
              <Link
                href={localize(
                  "/carte-du-ciel"
                )}
                className="signs-primary-button"
              >
                {
                  text.hero
                    .chartButton
                }
              </Link>

              <Link
                href={localize(
                  "/astrologie"
                )}
                className="signs-secondary-button"
              >
                {
                  text.hero
                    .guidesButton
                }
              </Link>
            </div>
          </section>

          <section
            className="signs-library"
            aria-labelledby="signs-title"
          >
            <div className="signs-heading">
              <span>
                {
                  text.library
                    .kicker
                }
              </span>

              <h2 id="signs-title">
                {
                  text.library
                    .title
                }
              </h2>

              <p>
                {
                  text.library
                    .description
                }
              </p>
            </div>

            <div className="signs-grid">
              {
                text.signs
                  .map(
                    (
                      sign
                    ) => (
                      <Link
                        href={localize(
                          `/astrologie/${sign.slug}`
                        )}
                        className="sign-card"
                        key={
                          sign.slug
                        }
                      >
                        <div className="sign-card-top">
                          <div className="sign-symbol">
                            {
                              sign.symbol
                            }
                          </div>

                          <span className="sign-element">
                            {
                              sign.element
                            }
                          </span>
                        </div>

                        <h2>
                          {
                            sign.name
                          }
                        </h2>

                        <div className="sign-dates">
                          {
                            sign.dates
                          }
                        </div>

                        <p>
                          {
                            sign.description
                          }
                        </p>

                        <span className="sign-card-link">
                          {
                            text.library
                              .discoverLabel
                          }
                        </span>
                      </Link>
                    )
                  )
              }
            </div>
          </section>

          <section className="signs-callout">
            <div>
              <span className="signs-badge">
                {
                  text.callout
                    .badge
                }
              </span>

              <h2>
                {
                  text.callout
                    .title
                }
              </h2>

              <p>
                {
                  text.callout
                    .description
                }
              </p>
            </div>

            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="signs-primary-button"
            >
              {
                text.callout
                  .button
              }
            </Link>
          </section>
        </main>
      </AuthProvider>
    </div>
  );
}
