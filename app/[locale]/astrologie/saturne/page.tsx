// app/[locale]/astrologie/saturne/page.tsx

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
  SATURNE_TRANSLATIONS,
} from "@/i18n/pages/astrologie/saturne";

import "../../../astrologie/saturne/page.css";

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
    SATURNE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/saturne`;

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
          `${SITE_URL}/fr/astrologie/saturne`,

        en:
          `${SITE_URL}/en/astrologie/saturne`,

        es:
          `${SITE_URL}/es/astrologie/saturne`,

        de:
          `${SITE_URL}/de/astrologie/saturne`,

        it:
          `${SITE_URL}/it/astrologie/saturne`,

        pt:
          `${SITE_URL}/pt/astrologie/saturne`,

        "x-default":
          `${SITE_URL}/fr/astrologie/saturne`,
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

export default function SaturneAstrologiePage({
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
    SATURNE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/saturne`;

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
    <div className="saturn-page">
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

      <main className="saturn-wrap">
        <section className="saturn-hero">
          <div className="saturn-badge">
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

          <p className="saturn-hero-lead">
            {
              text.hero
                .lead
            }
          </p>

          <div className="saturn-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="saturn-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#saturne-dans-les-signes"
              className="saturn-secondary-button"
            >
              {
                text.hero
                  .seeSigns
              }
            </a>
          </div>
        </section>

        <article className="saturn-content">
          <section>
            <span className="saturn-kicker">
              {
                text.introduction
                  .kicker
              }
            </span>

            <h2>
              {
                text.introduction
                  .title
              }
            </h2>

            {
              text.introduction
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
                text.structure
                  .title
              }
            </h2>

            <div className="saturn-info-grid">
              {
                text.structure
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <div
                        className="saturn-info-card"
                        key={
                          card.title
                        }
                      >
                        <span className="saturn-card-icon">
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

            <div className="saturn-functions-grid">
              {
                text.functions
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <div
                        className="saturn-function-card"
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

            <div className="saturn-pillars">
              {
                text.planets
                  .cards
                  .map(
                    (
                      card,
                      index
                    ) => (
                      <div
                        className="saturn-pillar-card"
                        key={
                          card.title
                        }
                      >
                        <div className="saturn-pillar-symbol">
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
                          index ===
                            0 &&
                          card.link && (
                            <Link
                              href={localize(
                                "/astrologie/soleil"
                              )}
                              className="saturn-text-link"
                            >
                              {
                                card.link
                              }
                            </Link>
                          )
                        }

                        {
                          index ===
                            1 &&
                          card.link && (
                            <Link
                              href={localize(
                                "/astrologie/jupiter"
                              )}
                              className="saturn-text-link"
                            >
                              {
                                card.link
                              }
                            </Link>
                          )
                        }
                      </div>
                    )
                  )
              }
            </div>
          </section>

          <section id="saturne-dans-les-signes">
            <span className="saturn-kicker">
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

            <div className="saturn-sign-grid">
              {
                text.signs
                  .map(
                    (
                      item
                    ) => (
                      <article
                        className="saturn-sign-card"
                        key={
                          item.sign
                        }
                      >
                        <div className="saturn-sign-symbol">
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

          <section id="saturne-dans-les-maisons">
            <span className="saturn-kicker">
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

            <div className="saturn-house-grid">
              {
                text.houses
                  .map(
                    (
                      item,
                      index
                    ) => (
                      <article
                        className="saturn-house-card"
                        key={
                          item.house
                        }
                      >
                        <div className="saturn-house-number">
                          {
                            String(
                              index +
                                1
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
            <span className="saturn-kicker">
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

            <div className="saturn-retrograde-layout">
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

              <aside className="saturn-retrograde-card">
                <span className="saturn-retrograde-symbol">
                  {
                    text.retrograde
                      .cardSymbol
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
                      .items
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

            <div className="saturn-strengths-grid">
              <div className="saturn-strength-card">
                <span className="saturn-kicker">
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

              <div className="saturn-strength-card">
                <span className="saturn-kicker">
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

            <div className="saturn-aspect-grid">
              {
                text.aspects
                  .map(
                    (
                      aspect
                    ) => (
                      <article
                        className="saturn-aspect-card"
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
            <div className="saturn-cta-card">
              <div>
                <span className="saturn-kicker">
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
                className="saturn-primary-button"
              >
                {
                  text.cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="saturn-faq">
            <span className="saturn-kicker">
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

            <div className="saturn-faq-list">
              {
                text.faq
                  .items
                  .map(
                    (
                      item
                    ) => (
                      <details
                        className="saturn-faq-item"
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

          <p className="saturn-disclaimer">
            {
              text.disclaimer
            }
          </p>
        </article>
      </main>
    </div>
  );
}
