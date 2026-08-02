// app/[locale]/astrologie/uranus/page.tsx

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
  URANUS_TRANSLATIONS,
} from "@/i18n/pages/astrologie/uranus";

import "../../../astrologie/uranus/page.css";

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
    URANUS_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/uranus`;

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
          `${SITE_URL}/fr/astrologie/uranus`,

        en:
          `${SITE_URL}/en/astrologie/uranus`,

        es:
          `${SITE_URL}/es/astrologie/uranus`,

        de:
          `${SITE_URL}/de/astrologie/uranus`,

        it:
          `${SITE_URL}/it/astrologie/uranus`,

        pt:
          `${SITE_URL}/pt/astrologie/uranus`,

        "x-default":
          `${SITE_URL}/fr/astrologie/uranus`,
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

export default function UranusAstrologiePage({
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
    URANUS_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/uranus`;

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
    <div className="uranus-page">
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

      <main className="uranus-wrap">
        <section className="uranus-hero">
          <div className="uranus-badge">
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

          <p className="uranus-hero-lead">
            {
              text.hero
                .lead
            }
          </p>

          <div className="uranus-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="uranus-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#uranus-dans-les-signes"
              className="uranus-secondary-button"
            >
              {
                text.hero
                  .viewSigns
              }
            </a>
          </div>
        </section>

        <article className="uranus-content">
          <section>
            <span className="uranus-kicker">
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
                text.innovation
                  .title
              }
            </h2>

            <div className="uranus-info-grid">
              {
                text.innovation
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <div
                        className="uranus-info-card"
                        key={
                          card.title
                        }
                      >
                        <span className="uranus-card-icon">
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

            <div className="uranus-functions-grid">
              {
                text.functions
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <div
                        className="uranus-function-card"
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

            <div className="uranus-pillars">
              {
                text.planets
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <div
                        className="uranus-pillar-card"
                        key={
                          card.title
                        }
                      >
                        <div className="uranus-pillar-symbol">
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
                                className="uranus-text-link"
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

          <section id="uranus-dans-les-signes">
            <span className="uranus-kicker">
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

            <div className="uranus-sign-grid">
              {
                text.signs
                  .map(
                    (
                      item
                    ) => (
                      <article
                        className="uranus-sign-card"
                        key={
                          item.sign
                        }
                      >
                        <div className="uranus-sign-symbol">
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

          <section id="uranus-dans-les-maisons">
            <span className="uranus-kicker">
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

            <div className="uranus-house-grid">
              {
                text.houses
                  .map(
                    (
                      item,
                      index
                    ) => (
                      <article
                        className="uranus-house-card"
                        key={
                          item.house
                        }
                      >
                        <div className="uranus-house-number">
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
            <span className="uranus-kicker">
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

            <div className="uranus-retrograde-layout">
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

              <aside className="uranus-retrograde-card">
                <span className="uranus-retrograde-symbol">
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

            <div className="uranus-strengths-grid">
              <div className="uranus-strength-card">
                <span className="uranus-kicker">
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

              <div className="uranus-strength-card">
                <span className="uranus-kicker">
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

            <div className="uranus-aspect-grid">
              {
                text.aspects
                  .map(
                    (
                      aspect
                    ) => (
                      <article
                        className="uranus-aspect-card"
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
            <div className="uranus-cta-card">
              <div>
                <span className="uranus-kicker">
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
                className="uranus-primary-button"
              >
                {
                  text.cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="uranus-faq">
            <span className="uranus-kicker">
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

            <div className="uranus-faq-list">
              {
                text.faq
                  .items
                  .map(
                    (
                      item
                    ) => (
                      <details
                        className="uranus-faq-item"
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

          <p className="uranus-disclaimer">
            {
              text.disclaimer
            }
          </p>
        </article>
      </main>
    </div>
  );
}
