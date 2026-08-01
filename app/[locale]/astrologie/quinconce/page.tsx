// app/[locale]/astrologie/quinconce/page.tsx

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
  QUINCONCE_TRANSLATIONS,
} from "@/i18n/pages/astrologie/quinconce";

import "../../../astrologie/quinconce/page.css";

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
    QUINCONCE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/quinconce`;

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
          `${SITE_URL}/fr/astrologie/quinconce`,

        en:
          `${SITE_URL}/en/astrologie/quinconce`,

        es:
          `${SITE_URL}/es/astrologie/quinconce`,

        de:
          `${SITE_URL}/de/astrologie/quinconce`,

        it:
          `${SITE_URL}/it/astrologie/quinconce`,

        pt:
          `${SITE_URL}/pt/astrologie/quinconce`,

        "x-default":
          `${SITE_URL}/fr/astrologie/quinconce`,
      },
    },

    openGraph: {
      title:
        text.metadata
          .ogTitle,

      description:
        text.metadata
          .ogDescription,

      url:
        pageUrl,

      siteName:
        "Luna Astralis",

      locale:
        text.metadata
          .locale,

      type:
        "article",
    },

    twitter: {
      card:
        "summary_large_image",

      title:
        text.metadata
          .twitterTitle,

      description:
        text.metadata
          .twitterDescription,
    },

    robots: {
      index:
        true,

      follow:
        true,
    },
  };
}

export default function QuinconceAstrologiePage({
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
    QUINCONCE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/quinconce`;

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
      text.jsonLd
        .headline,

    description:
      text.jsonLd
        .description,

    inLanguage:
      text.metadata
        .language,

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
      text.faq
        .items
        .map(
          (
            item
          ) => ({
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
    <div className="quincunx-page">
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

      <main className="quincunx-wrap">
        <nav
          className="quincunx-breadcrumb"
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

          <span
            aria-hidden="true"
          >
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

          <span
            aria-hidden="true"
          >
            /
          </span>

          <span>
            {
              text.breadcrumb
                .current
            }
          </span>
        </nav>

        <section className="quincunx-hero">
          <div className="quincunx-badge">
            {
              text.hero
                .badge
            }
          </div>

          <div
            className="quincunx-main-symbol"
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

          <p className="quincunx-hero-lead">
            {
              text.hero
                .lead
            }
          </p>

          <div className="quincunx-hero-data">
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

          <div className="quincunx-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="quincunx-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#signification"
              className="quincunx-secondary-button"
            >
              {
                text.hero
                  .understand
              }
            </a>
          </div>
        </section>

        <article className="quincunx-content">
          <section
            id="signification"
          >
            <span className="quincunx-kicker">
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

            <div className="quincunx-reading-grid">
              {
                text.functioning
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <article
                        className="quincunx-reading-card"
                        key={
                          card.number
                        }
                      >
                        <span className="quincunx-reading-number">
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
            <span className="quincunx-kicker">
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

            <div className="quincunx-polarity-grid">
              {
                text.difficulty
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <article
                        className="quincunx-polarity-card"
                        key={
                          card.title
                        }
                      >
                        <span className="quincunx-polarity-icon">
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
                          card.paragraphs
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
                      </article>
                    )
                  )
              }
            </div>
          </section>

          <section>
            <span className="quincunx-kicker">
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

            <div className="quincunx-method-list">
              {
                text.interpretation
                  .methods
                  .map(
                    (
                      method
                    ) => (
                      <article
                        className="quincunx-method-item"
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

            <div className="quincunx-orb-grid">
              {
                text.orb
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <article
                        className="quincunx-orb-card"
                        key={
                          card.value
                        }
                      >
                        <span className="quincunx-orb-value">
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
            <span className="quincunx-kicker">
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

            <div className="quincunx-examples-grid">
              {
                text.examples
                  .map(
                    (
                      example
                    ) => (
                      <article
                        className="quincunx-example-card"
                        key={
                          example.planets
                        }
                      >
                        <div className="quincunx-example-symbol">
                          {
                            example.symbol
                          }
                        </div>

                        <h3>
                          {
                            example.planets
                          }
                        </h3>

                        <p className="quincunx-example-keywords">
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
                text.signsSection
                  .title
              }
            </h2>

            <p>
              {
                text.signsSection
                  .introduction
              }
            </p>

            <div className="quincunx-signs-grid">
              {
                text.signs
                  .map(
                    (
                      sign
                    ) => (
                      <article
                        className="quincunx-sign-card"
                        key={
                          sign.title
                        }
                      >
                        <span>
                          {
                            sign.symbol
                          }
                        </span>

                        <h3>
                          {
                            sign.title
                          }
                        </h3>

                        <p>
                          {
                            sign.text
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

            <div className="quincunx-houses-grid">
              {
                text.houses
                  .map(
                    (
                      house
                    ) => (
                      <article
                        className="quincunx-house-card"
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
            <span className="quincunx-kicker">
              {
                text.comparisonSection
                  .kicker
              }
            </span>

            <h2>
              {
                text.comparisonSection
                  .title
              }
            </h2>

            <div className="quincunx-comparison-grid">
              {
                text.comparisonSection
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <article
                        className="quincunx-comparison-card"
                        key={
                          card.title
                        }
                      >
                        <div className="quincunx-comparison-symbol">
                          {
                            card.symbol
                          }
                        </div>

                        <h3>
                          {
                            card.title
                          }
                        </h3>

                        {
                          card.paragraphs
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
                      </article>
                    )
                  )
              }
            </div>
          </section>

          <section>
            <span className="quincunx-kicker">
              {
                text.yod
                  .kicker
              }
            </span>

            <h2>
              {
                text.yod
                  .title
              }
            </h2>

            <div className="quincunx-yod-card">
              <div className="quincunx-yod-symbol">
                {
                  text.yod
                    .symbol
                }
              </div>

              <div>
                <h3>
                  {
                    text.yod
                      .subtitle
                  }
                </h3>

                {
                  text.yod
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

            <div className="quincunx-cta-card">
              <div>
                <span className="quincunx-kicker">
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
                className="quincunx-primary-button"
              >
                {
                  text.cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="quincunx-faq">
            <span className="quincunx-kicker">
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

            <div className="quincunx-faq-list">
              {
                text.faq
                  .items
                  .map(
                    (
                      item
                    ) => (
                      <details
                        className="quincunx-faq-item"
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
            className="quincunx-aspects-nav"
            aria-label={
              text.navigation
                .ariaLabel
            }
          >
            <Link
              href={localize(
                "/astrologie/sextile"
              )}
              className="quincunx-back-link"
            >
              <span
                aria-hidden="true"
              >
                ←
              </span>

              {
                text.navigation
                  .previous
              }
            </Link>

            <Link
              href={localize(
                "/astrologie/aspects"
              )}
              className="quincunx-next-link"
            >
              {
                text.navigation
                  .next
              }

              <span
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </nav>

          <p className="quincunx-disclaimer">
            {
              text.disclaimer
            }
          </p>
        </article>
      </main>
    </div>
  );
}
