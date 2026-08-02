// app/[locale]/astrologie/trigone/page.tsx

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
  TRIGONE_TRANSLATIONS,
} from "@/i18n/pages/astrologie/trigone";

import "../../../astrologie/trigone/page.css";

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
    TRIGONE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/trigone`;

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
          `${SITE_URL}/fr/astrologie/trigone`,

        en:
          `${SITE_URL}/en/astrologie/trigone`,

        es:
          `${SITE_URL}/es/astrologie/trigone`,

        de:
          `${SITE_URL}/de/astrologie/trigone`,

        it:
          `${SITE_URL}/it/astrologie/trigone`,

        pt:
          `${SITE_URL}/pt/astrologie/trigone`,

        "x-default":
          `${SITE_URL}/fr/astrologie/trigone`,
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

export default function TrigoneAstrologiePage({
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
    TRIGONE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/trigone`;

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
    <div className="trine-page">
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

      <main className="trine-wrap">
        <nav
          className="trine-breadcrumb"
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

        <section className="trine-hero">
          <div className="trine-badge">
            {
              text.hero
                .badge
            }
          </div>

          <div
            className="trine-main-symbol"
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

          <p className="trine-hero-lead">
            {
              text.hero
                .lead
            }
          </p>

          <div className="trine-hero-data">
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

          <div className="trine-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="trine-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#signification"
              className="trine-secondary-button"
            >
              {
                text.hero
                  .understand
              }
            </a>
          </div>
        </section>

        <article className="trine-content">
          <section
            id="signification"
          >
            <span className="trine-kicker">
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

            <div className="trine-reading-grid">
              {
                text.functioning
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <article
                        className="trine-reading-card"
                        key={
                          card.number
                        }
                      >
                        <span className="trine-reading-number">
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
            <span className="trine-kicker">
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

            <div className="trine-polarity-grid">
              {
                text.benefits
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <article
                        className="trine-polarity-card"
                        key={
                          card.title
                        }
                      >
                        <span className="trine-polarity-icon">
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
            <span className="trine-kicker">
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

            <div className="trine-method-list">
              {
                text.interpretation
                  .methods
                  .map(
                    (
                      method
                    ) => (
                      <article
                        className="trine-method-item"
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

            <div className="trine-orb-grid">
              {
                text.orb
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <article
                        className="trine-orb-card"
                        key={
                          card.value
                        }
                      >
                        <span className="trine-orb-value">
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
            <span className="trine-kicker">
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

            <div className="trine-examples-grid">
              {
                text.examples
                  .map(
                    (
                      example
                    ) => (
                      <article
                        className="trine-example-card"
                        key={
                          example.planets
                        }
                      >
                        <div className="trine-example-symbol">
                          {
                            example.symbol
                          }
                        </div>

                        <h3>
                          {
                            example.planets
                          }
                        </h3>

                        <p className="trine-example-keywords">
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

            <div className="trine-elements-grid">
              {
                text.elements
                  .map(
                    (
                      element
                    ) => (
                      <article
                        className="trine-element-card"
                        key={
                          element.title
                        }
                      >
                        <span>
                          {
                            element.symbol
                          }
                        </span>

                        <h3>
                          {
                            element.title
                          }
                        </h3>

                        <strong>
                          {
                            element.signs
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

            <div className="trine-houses-grid">
              {
                text.houses
                  .map(
                    (
                      house
                    ) => (
                      <article
                        className="trine-house-card"
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
            <span className="trine-kicker">
              {
                text.grandTrine
                  .kicker
              }
            </span>

            <h2>
              {
                text.grandTrine
                  .title
              }
            </h2>

            <div className="trine-grand-card">
              <div className="trine-grand-symbol">
                {
                  text.grandTrine
                    .symbol
                }
              </div>

              <div>
                <h3>
                  {
                    text.grandTrine
                      .subtitle
                  }
                </h3>

                {
                  text.grandTrine
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
            <span className="trine-kicker">
              {
                text.dynamicAspects
                  .kicker
              }
            </span>

            <h2>
              {
                text.dynamicAspects
                  .title
              }
            </h2>

            <div className="trine-balance-card">
              <div className="trine-balance-symbols">
                {
                  text.dynamicAspects
                    .trineSymbol
                }

                <span>
                  {
                    text.dynamicAspects
                      .dynamicSymbol
                  }
                </span>
              </div>

              <div>
                <h3>
                  {
                    text.dynamicAspects
                      .subtitle
                  }
                </h3>

                {
                  text.dynamicAspects
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

            <div className="trine-cta-card">
              <div>
                <span className="trine-kicker">
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
                className="trine-primary-button"
              >
                {
                  text.cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="trine-faq">
            <span className="trine-kicker">
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

            <div className="trine-faq-list">
              {
                text.faq
                  .items
                  .map(
                    (
                      item
                    ) => (
                      <details
                        className="trine-faq-item"
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
            className="trine-aspects-nav"
            aria-label={
              text.navigation
                .ariaLabel
            }
          >
            <Link
              href={localize(
                "/astrologie/carre"
              )}
              className="trine-back-link"
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
                "/astrologie/sextile"
              )}
              className="trine-next-link"
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

          <p className="trine-disclaimer">
            {
              text.disclaimer
            }
          </p>
        </article>
      </main>
    </div>
  );
}
