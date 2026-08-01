// app/[locale]/astrologie/opposition/page.tsx

import type {
  Metadata,
} from "next";

import Link from "next/link";

import {
  notFound,
} from "next/navigation";

import {
  isLocale,
  locales,
} from "@/i18n/config";

import {
  OPPOSITION_TRANSLATIONS,
} from "@/i18n/pages/astrologie/opposition";

import "../../../astrologie/opposition/page.css";

const SITE_URL =
  "https://luna-astralis.app";

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

  const text =
    OPPOSITION_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/opposition`;

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
          `${SITE_URL}/fr/astrologie/opposition`,

        en:
          `${SITE_URL}/en/astrologie/opposition`,

        es:
          `${SITE_URL}/es/astrologie/opposition`,

        de:
          `${SITE_URL}/de/astrologie/opposition`,

        it:
          `${SITE_URL}/it/astrologie/opposition`,

        pt:
          `${SITE_URL}/pt/astrologie/opposition`,

        "x-default":
          `${SITE_URL}/fr/astrologie/opposition`,
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
        "article",
    },

    twitter: {
      card:
        "summary_large_image",

      title:
        text.metadata.twitterTitle,

      description:
        text.metadata.twitterDescription,
    },

    robots: {
      index:
        true,

      follow:
        true,
    },
  };
}

export default function OppositionAstrologiePage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    OPPOSITION_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/opposition`;

  const localize = (
    path: string
  ) =>
    `/${locale}${path}`;

  const articleJsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "Article",

    headline:
      text.jsonLd.headline,

    description:
      text.jsonLd.description,

    inLanguage:
      text.metadata.language,

    url:
      pageUrl,

    mainEntityOfPage:
      pageUrl,

    author: {
      "@type":
        "Organization",

      name:
        "Luna Astralis",

      url:
        SITE_URL,
    },

    publisher: {
      "@type":
        "Organization",

      name:
        "Luna Astralis",

      url:
        SITE_URL,
    },
  };

  const faqJsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "FAQPage",

    mainEntity:
      text.faq.items.map(
        (item) => ({
          "@type":
            "Question",

          name:
            item.question,

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              item.answer,
          },
        })
      ),
  };

  return (
    <div className="opposition-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              articleJsonLd
            ).replace(
              /</g,
              "\\u003c"
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              faqJsonLd
            ).replace(
              /</g,
              "\\u003c"
            ),
        }}
      />

      <main className="opposition-wrap">
        <nav
          className="opposition-breadcrumb"
          aria-label={
            text.breadcrumb
              .ariaLabel
          }
        >
          <Link
            href={`/${locale}`}
          >
            {
              text.breadcrumb
                .home
            }
          </Link>

          <span aria-hidden="true">
            /
          </span>

          <Link
            href={localize(
              "/astrologie/aspects"
            )}
          >
            {
              text.breadcrumb
                .aspects
            }
          </Link>

          <span aria-hidden="true">
            /
          </span>

          <span>
            {
              text.breadcrumb
                .current
            }
          </span>
        </nav>

        <section className="opposition-hero">
          <div className="opposition-badge">
            {
              text.hero
                .badge
            }
          </div>

          <div
            className="opposition-main-symbol"
            aria-hidden="true"
          >
            {
              text.hero
                .symbol
            }
          </div>

          <h1>
            {
              text.hero
                .title
            }
          </h1>

          <p className="opposition-hero-lead">
            {
              text.hero
                .lead
            }
          </p>

          <div className="opposition-hero-data">
            <div>
              <span>
                {
                  text.hero
                    .data
                    .angleLabel
                }
              </span>

              <strong>
                {
                  text.hero
                    .data
                    .angleValue
                }
              </strong>
            </div>

            <div>
              <span>
                {
                  text.hero
                    .data
                    .dynamicLabel
                }
              </span>

              <strong>
                {
                  text.hero
                    .data
                    .dynamicValue
                }
              </strong>
            </div>

            <div>
              <span>
                {
                  text.hero
                    .data
                    .functionLabel
                }
              </span>

              <strong>
                {
                  text.hero
                    .data
                    .functionValue
                }
              </strong>
            </div>
          </div>

          <div className="opposition-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="opposition-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#signification"
              className="opposition-secondary-button"
            >
              {
                text.hero
                  .understand
              }
            </a>
          </div>
        </section>

        <article className="opposition-content">
          <section id="signification">
            <span className="opposition-kicker">
              {
                text.meaning
                  .kicker
              }
            </span>

            <h2>
              {
                text.meaning
                  .title
              }
            </h2>

            {
              text.meaning
                .paragraphs
                .map(
                  (
                    paragraph
                  ) => (
                    <p
                      key={
                        paragraph
                      }
                    >
                      {
                        paragraph
                      }
                    </p>
                  )
                )
            }
          </section>

          <section>
            <h2>
              {
                text.functioning
                  .title
              }
            </h2>

            <div className="opposition-reading-grid">
              {
                text.functioning
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <article
                        className="opposition-reading-card"
                        key={
                          card.number
                        }
                      >
                        <span className="opposition-reading-number">
                          {
                            card.number
                          }
                        </span>

                        <h3>
                          {
                            card.title
                          }
                        </h3>

                        <p>
                          {
                            card.text
                          }
                        </p>
                      </article>
                    )
                  )
              }
            </div>
          </section>

          <section>
            <span className="opposition-kicker">
              {
                text.difficulty
                  .kicker
              }
            </span>

            <h2>
              {
                text.difficulty
                  .title
              }
            </h2>

            <p>
              {
                text.difficulty
                  .introduction
              }
            </p>

            <div className="opposition-polarity-grid">
              {
                text.difficulty
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <article
                        className="opposition-polarity-card"
                        key={
                          card.title
                        }
                      >
                        <span className="opposition-polarity-icon">
                          {
                            card.symbol
                          }
                        </span>

                        <h3>
                          {
                            card.title
                          }
                        </h3>

                        {
                          card.paragraphs.map(
                            (
                              paragraph
                            ) => (
                              <p
                                key={
                                  paragraph
                                }
                              >
                                {
                                  paragraph
                                }
                              </p>
                            )
                          )
                        }
                      </article>
                    )
                  )
              }
            </div>
          </section>

          <section>
            <span className="opposition-kicker">
              {
                text.interpretation
                  .kicker
              }
            </span>

            <h2>
              {
                text.interpretation
                  .title
              }
            </h2>

            <div className="opposition-method-list">
              {
                text.interpretation
                  .methods
                  .map(
                    (
                      method
                    ) => (
                      <article
                        className="opposition-method-item"
                        key={
                          method.number
                        }
                      >
                        <span>
                          {
                            method.number
                          }
                        </span>

                        <div>
                          <h3>
                            {
                              method.title
                            }
                          </h3>

                          <p>
                            {
                              method.text
                            }
                          </p>
                        </div>
                      </article>
                    )
                  )
              }
            </div>
          </section>

          <section>
            <h2>
              {
                text.orb
                  .title
              }
            </h2>

            <p>
              {
                text.orb
                  .introduction
              }
            </p>

            <div className="opposition-orb-grid">
              {
                text.orb
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <article
                        className="opposition-orb-card"
                        key={
                          card.value
                        }
                      >
                        <span className="opposition-orb-value">
                          {
                            card.value
                          }
                        </span>

                        <h3>
                          {
                            card.title
                          }
                        </h3>

                        <p>
                          {
                            card.text
                          }
                        </p>
                      </article>
                    )
                  )
              }
            </div>

            <p>
              {
                text.orb
                  .conclusion
              }
            </p>
          </section>
                    <section>
            <span className="opposition-kicker">
              {
                text.examplesSection
                  .kicker
              }
            </span>

            <h2>
              {
                text.examplesSection
                  .title
              }
            </h2>

            <p>
              {
                text.examplesSection
                  .introduction
              }
            </p>

            <div className="opposition-examples-grid">
              {
                text.examples.map(
                  (
                    example
                  ) => (
                    <article
                      className="opposition-example-card"
                      key={
                        example.planets
                      }
                    >
                      <div className="opposition-example-symbol">
                        {
                          example.symbol
                        }
                      </div>

                      <h3>
                        {
                          example.planets
                        }
                      </h3>

                      <p className="opposition-example-keywords">
                        {
                          example.keywords
                        }
                      </p>

                      <p>
                        {
                          example.text
                        }
                      </p>
                    </article>
                  )
                )
              }
            </div>
          </section>

          <section>
            <h2>
              {
                text.axesSection
                  .title
              }
            </h2>

            <p>
              {
                text.axesSection
                  .introduction
              }
            </p>

            <div className="opposition-axes-grid">
              {
                text.axes.map(
                  (
                    axis
                  ) => (
                    <article
                      className="opposition-axis-card"
                      key={
                        axis.title
                      }
                    >
                      <span>
                        {
                          axis.symbol
                        }
                      </span>

                      <h3>
                        {
                          axis.title
                        }
                      </h3>

                      <p>
                        {
                          axis.text
                        }
                      </p>
                    </article>
                  )
                )
              }
            </div>
          </section>

          <section>
            <h2>
              {
                text.housesSection
                  .title
              }
            </h2>

            <p>
              {
                text.housesSection
                  .introduction
              }
            </p>

            <div className="opposition-houses-grid">
              {
                text.houses.map(
                  (
                    house
                  ) => (
                    <article
                      className="opposition-house-card"
                      key={
                        house.title
                      }
                    >
                      <strong>
                        {
                          house.title
                        }
                      </strong>

                      <p>
                        {
                          house.text
                        }
                      </p>
                    </article>
                  )
                )
              }
            </div>
          </section>

          <section>
            <span className="opposition-kicker">
              {
                text.projection
                  .kicker
              }
            </span>

            <h2>
              {
                text.projection
                  .title
              }
            </h2>

            <div className="opposition-projection-card">
              <div className="opposition-projection-symbol">
                {
                  text.projection
                    .symbol
                }
              </div>

              <div>
                <h3>
                  {
                    text.projection
                      .subtitle
                  }
                </h3>

                {
                  text.projection
                    .paragraphs
                    .map(
                      (
                        paragraph
                      ) => (
                        <p
                          key={
                            paragraph
                          }
                        >
                          {
                            paragraph
                          }
                        </p>
                      )
                    )
                }
              </div>
            </div>
          </section>

          <section>
            <h2>
              {
                text.transits
                  .title
              }
            </h2>

            {
              text.transits
                .paragraphs
                .map(
                  (
                    paragraph
                  ) => (
                    <p
                      key={
                        paragraph
                      }
                    >
                      {
                        paragraph
                      }
                    </p>
                  )
                )
            }

            <div className="opposition-cta-card">
              <div>
                <span className="opposition-kicker">
                  {
                    text.cta
                      .kicker
                  }
                </span>

                <h2>
                  {
                    text.cta
                      .title
                  }
                </h2>

                <p>
                  {
                    text.cta
                      .text
                  }
                </p>
              </div>

              <Link
                href={localize(
                  "/carte-du-ciel"
                )}
                className="opposition-primary-button"
              >
                {
                  text.cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="opposition-faq">
            <span className="opposition-kicker">
              {
                text.faq
                  .kicker
              }
            </span>

            <h2>
              {
                text.faq
                  .title
              }
            </h2>

            <div className="opposition-faq-list">
              {
                text.faq
                  .items
                  .map(
                    (
                      item
                    ) => (
                      <details
                        className="opposition-faq-item"
                        key={
                          item.question
                        }
                      >
                        <summary>
                          {
                            item.question
                          }
                        </summary>

                        <p>
                          {
                            item.answer
                          }
                        </p>
                      </details>
                    )
                  )
              }
            </div>
          </section>

          <nav
            className="opposition-aspects-nav"
            aria-label={
              text.navigation
                .ariaLabel
            }
          >
            <Link
              href={localize(
                "/astrologie/conjonction"
              )}
              className="opposition-back-link"
            >
              <span aria-hidden="true">
                ←
              </span>

              {
                text.navigation
                  .previous
              }
            </Link>

            <Link
              href={localize(
                "/astrologie/carre"
              )}
              className="opposition-next-link"
            >
              {
                text.navigation
                  .next
              }

              <span aria-hidden="true">
                →
              </span>
            </Link>
          </nav>

          <p className="opposition-disclaimer">
            {
              text.disclaimer
            }
          </p>
        </article>
      </main>
    </div>
  );
}
