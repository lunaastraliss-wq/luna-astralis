// app/[locale]/astrologie/venus/page.tsx

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
  VENUS_TRANSLATIONS,
} from "@/i18n/pages/astrologie/venus";

import "../../../astrologie/venus/page.css";

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
    VENUS_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/venus`;

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
          `${SITE_URL}/fr/astrologie/venus`,

        en:
          `${SITE_URL}/en/astrologie/venus`,

        es:
          `${SITE_URL}/es/astrologie/venus`,

        de:
          `${SITE_URL}/de/astrologie/venus`,

        it:
          `${SITE_URL}/it/astrologie/venus`,

        pt:
          `${SITE_URL}/pt/astrologie/venus`,

        "x-default":
          `${SITE_URL}/fr/astrologie/venus`,
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

export default function VenusAstrologiePage({
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
    VENUS_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/venus`;

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
    <div className="venus-page">
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

      <main className="venus-wrap">
        <section className="venus-hero">
          <div className="venus-badge">
            {
              text.hero
                .badge
            }
          </div>

          <h1>
            {
              text.hero
                .title
            }
          </h1>

          <p className="venus-hero-lead">
            {
              text.hero
                .lead
            }
          </p>

          <div className="venus-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="venus-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#venus-dans-les-signes"
              className="venus-secondary-button"
            >
              {
                text.hero
                  .viewSigns
              }
            </a>
          </div>
        </section>

        <article className="venus-content">
          <section>
            <span className="venus-kicker">
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
                text.loveAndValues
                  .title
              }
            </h2>

            <div className="venus-info-grid">
              {
                text.loveAndValues
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <div
                        className="venus-info-card"
                        key={
                          card.title
                        }
                      >
                        <span className="venus-card-icon">
                          {
                            card.symbol
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
                      </div>
                    )
                  )
              }
            </div>
          </section>

          <section>
            <h2>
              {
                text.functions
                  .title
              }
            </h2>

            <div className="venus-functions-grid">
              {
                text.functions
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <div
                        className="venus-function-card"
                        key={
                          card.number
                        }
                      >
                        <span>
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
                      </div>
                    )
                  )
              }
            </div>
          </section>

          <section>
            <h2>
              {
                text.planets
                  .title
              }
            </h2>

            <div className="venus-pillars">
              {
                text.planets
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <div
                        className="venus-pillar-card"
                        key={
                          card.title
                        }
                      >
                        <div className="venus-pillar-symbol">
                          {
                            card.symbol
                          }
                        </div>

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

                        {
                          card.link &&
                          card.linkLabel
                            ? (
                              <Link
                                href={localize(
                                  card.link
                                )}
                                className="venus-text-link"
                              >
                                {
                                  card.linkLabel
                                }
                              </Link>
                            )
                            : null
                        }
                      </div>
                    )
                  )
              }
            </div>
          </section>

          <section id="venus-dans-les-signes">
            <span className="venus-kicker">
              {
                text.signsSection
                  .kicker
              }
            </span>

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

            <div className="venus-sign-grid">
              {
                text.signs
                  .map(
                    (
                      item
                    ) => (
                      <article
                        className="venus-sign-card"
                        key={
                          item.sign
                        }
                      >
                        <div className="venus-sign-symbol">
                          {
                            item.symbol
                          }
                        </div>

                        <h3>
                          {
                            text.signsSection
                              .titlePrefix
                          }{" "}
                          {
                            item.sign
                          }
                        </h3>

                        <p>
                          {
                            item.text
                          }
                        </p>
                      </article>
                    )
                  )
              }
            </div>
          </section>

          <section id="venus-dans-les-maisons">
            <span className="venus-kicker">
              {
                text.housesSection
                  .kicker
              }
            </span>

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

            <div className="venus-house-grid">
              {
                text.houses
                  .map(
                    (
                      item,
                      index
                    ) => (
                      <article
                        className="venus-house-card"
                        key={
                          item.house
                        }
                      >
                        <div className="venus-house-number">
                          {
                            String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )
                          }
                        </div>

                        <h3>
                          {
                            text.housesSection
                              .titlePrefix
                          }{" "}
                          {
                            item.house
                          }
                        </h3>

                        <p>
                          {
                            item.text
                          }
                        </p>
                      </article>
                    )
                  )
              }
            </div>
          </section>

          <section>
            <span className="venus-kicker">
              {
                text.retrograde
                  .kicker
              }
            </span>

            <h2>
              {
                text.retrograde
                  .title
              }
            </h2>

            <div className="venus-retrograde-layout">
              <div>
                {
                  text.retrograde
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

              <aside className="venus-retrograde-card">
                <span className="venus-retrograde-symbol">
                  {
                    text.retrograde
                      .symbol
                  }
                </span>

                <h3>
                  {
                    text.retrograde
                      .cardTitle
                  }
                </h3>

                <ul>
                  {
                    text.retrograde
                      .points
                      .map(
                        (
                          point
                        ) => (
                          <li
                            key={
                              point
                            }
                          >
                            {
                              point
                            }
                          </li>
                        )
                      )
                  }
                </ul>
              </aside>
            </div>
          </section>

          <section>
            <h2>
              {
                text.strengths
                  .title
              }
            </h2>

            <div className="venus-strengths-grid">
              <div className="venus-strength-card">
                <span className="venus-kicker">
                  {
                    text.strengths
                      .strengthsKicker
                  }
                </span>

                <h3>
                  {
                    text.strengths
                      .strengthsTitle
                  }
                </h3>

                <ul>
                  {
                    text.strengths
                      .strengths
                      .map(
                        (
                          item
                        ) => (
                          <li
                            key={
                              item
                            }
                          >
                            {
                              item
                            }
                          </li>
                        )
                      )
                  }
                </ul>
              </div>

              <div className="venus-strength-card">
                <span className="venus-kicker">
                  {
                    text.strengths
                      .challengesKicker
                  }
                </span>

                <h3>
                  {
                    text.strengths
                      .challengesTitle
                  }
                </h3>

                <ul>
                  {
                    text.strengths
                      .challenges
                      .map(
                        (
                          item
                        ) => (
                          <li
                            key={
                              item
                            }
                          >
                            {
                              item
                            }
                          </li>
                        )
                      )
                  }
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              {
                text.aspectsSection
                  .title
              }
            </h2>

            <p>
              {
                text.aspectsSection
                  .introduction
              }
            </p>

            <div className="venus-aspect-grid">
              {
                text.aspects
                  .map(
                    (
                      aspect
                    ) => (
                      <article
                        className="venus-aspect-card"
                        key={
                          aspect.title
                        }
                      >
                        <span>
                          {
                            aspect.symbol
                          }
                        </span>

                        <h3>
                          {
                            aspect.title
                          }
                        </h3>

                        <p>
                          {
                            aspect.text
                          }
                        </p>
                      </article>
                    )
                  )
              }
            </div>
          </section>

          <section>
            <div className="venus-cta-card">
              <div>
                <span className="venus-kicker">
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
                className="venus-primary-button"
              >
                {
                  text.cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="venus-faq">
            <span className="venus-kicker">
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

            <div className="venus-faq-list">
              {
                text.faq
                  .items
                  .map(
                    (
                      item
                    ) => (
                      <details
                        className="venus-faq-item"
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

          <p className="venus-disclaimer">
            {
              text.disclaimer
            }
          </p>
        </article>
      </main>
    </div>
  );
}
