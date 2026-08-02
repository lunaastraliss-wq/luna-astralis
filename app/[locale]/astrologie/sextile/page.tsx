// app/[locale]/astrologie/sextile/page.tsx

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
  SEXTILE_TRANSLATIONS,
} from "@/i18n/pages/astrologie/sextile";

import "../../../astrologie/sextile/page.css";

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
    SEXTILE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/sextile`;

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
          `${SITE_URL}/fr/astrologie/sextile`,

        en:
          `${SITE_URL}/en/astrologie/sextile`,

        es:
          `${SITE_URL}/es/astrologie/sextile`,

        de:
          `${SITE_URL}/de/astrologie/sextile`,

        it:
          `${SITE_URL}/it/astrologie/sextile`,

        pt:
          `${SITE_URL}/pt/astrologie/sextile`,

        "x-default":
          `${SITE_URL}/fr/astrologie/sextile`,
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

export default function SextileAstrologiePage({
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
    SEXTILE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/sextile`;

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
    <div className="sextile-page">
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

      <main className="sextile-wrap">
        <nav
          className="sextile-breadcrumb"
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

        <section className="sextile-hero">
          <div className="sextile-badge">
            {
              text.hero
                .badge
            }
          </div>

          <div
            className="sextile-main-symbol"
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

          <p className="sextile-hero-lead">
            {
              text.hero
                .lead
            }
          </p>

          <div className="sextile-hero-data">
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

          <div className="sextile-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="sextile-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#signification"
              className="sextile-secondary-button"
            >
              {
                text.hero
                  .understand
              }
            </a>
          </div>
        </section>

        <article className="sextile-content">
          <section
            id="signification"
          >
            <span className="sextile-kicker">
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

            <div className="sextile-reading-grid">
              {
                text.functioning
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <article
                        className="sextile-reading-card"
                        key={
                          card.number
                        }
                      >
                        <span className="sextile-reading-number">
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
            <span className="sextile-kicker">
              {
                text.benefits
                  .kicker
              }
            </span>

            <h2>
              {
                text.benefits
                  .title
              }
            </h2>

            <p>
              {
                text.benefits
                  .introduction
              }
            </p>

            <div className="sextile-polarity-grid">
              {
                text.benefits
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <article
                        className="sextile-polarity-card"
                        key={
                          card.title
                        }
                      >
                        <span className="sextile-polarity-icon">
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
            <span className="sextile-kicker">
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

            <div className="sextile-method-list">
              {
                text.interpretation
                  .methods
                  .map(
                    (
                      method
                    ) => (
                      <article
                        className="sextile-method-item"
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

            <div className="sextile-orb-grid">
              {
                text.orb
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <article
                        className="sextile-orb-card"
                        key={
                          card.value
                        }
                      >
                        <span className="sextile-orb-value">
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
            <span className="sextile-kicker">
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

            <div className="sextile-examples-grid">
              {
                text.examples
                  .map(
                    (
                      example
                    ) => (
                      <article
                        className="sextile-example-card"
                        key={
                          example.planets
                        }
                      >
                        <div className="sextile-example-symbol">
                          {
                            example.symbol
                          }
                        </div>

                        <h3>
                          {
                            example.planets
                          }
                        </h3>

                        <p className="sextile-example-keywords">
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
                text.elementsSection
                  .title
              }
            </h2>

            <p>
              {
                text.elementsSection
                  .introduction
              }
            </p>

            <div className="sextile-elements-grid">
              {
                text.elements
                  .map(
                    (
                      element
                    ) => (
                      <article
                        className="sextile-element-card"
                        key={
                          element.title
                        }
                      >
                        <div className="sextile-element-symbols">
                          {
                            element.symbols
                              .map(
                                (
                                  symbol,
                                  index
                                ) => (
                                  <span
                                    key={
                                      `${symbol}-${index}`
                                    }
                                  >
                                    {
                                      symbol
                                    }
                                  </span>
                                )
                              )
                          }
                        </div>

                        <h3>
                          {
                            element.title
                          }
                        </h3>

                        <strong>
                          {
                            element.keywords
                          }
                        </strong>

                        <p>
                          {
                            element.text
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

            <div className="sextile-houses-grid">
              {
                text.houses
                  .map(
                    (
                      house
                    ) => (
                      <article
                        className="sextile-house-card"
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
            <span className="sextile-kicker">
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

            <div className="sextile-comparison-grid">
              {
                text.comparisonSection
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <article
                        className="sextile-comparison-card"
                        key={
                          card.title
                        }
                      >
                        <div className="sextile-comparison-symbol">
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
            <span className="sextile-kicker">
              {
                text.patterns
                  .kicker
              }
            </span>

            <h2>
              {
                text.patterns
                  .title
              }
            </h2>

            <div className="sextile-pattern-card">
              <div className="sextile-pattern-symbol">
                {
                  text.patterns
                    .symbol
                }
              </div>

              <div>
                <h3>
                  {
                    text.patterns
                      .subtitle
                  }
                </h3>

                {
                  text.patterns
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

            <div className="sextile-cta-card">
              <div>
                <span className="sextile-kicker">
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
                className="sextile-primary-button"
              >
                {
                  text.cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="sextile-faq">
            <span className="sextile-kicker">
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

            <div className="sextile-faq-list">
              {
                text.faq
                  .items
                  .map(
                    (
                      item
                    ) => (
                      <details
                        className="sextile-faq-item"
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
            className="sextile-aspects-nav"
            aria-label={
              text.navigation
                .ariaLabel
            }
          >
            <Link
              href={localize(
                "/astrologie/trigone"
              )}
              className="sextile-back-link"
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
                "/astrologie/quinconce"
              )}
              className="sextile-next-link"
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

          <p className="sextile-disclaimer">
            {
              text.disclaimer
            }
          </p>
        </article>
      </main>
    </div>
  );
}
