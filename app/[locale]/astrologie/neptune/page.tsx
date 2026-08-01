// app/[locale]/astrologie/neptune/page.tsx

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
  NEPTUNE_TRANSLATIONS,
} from "@/i18n/pages/astrologie/neptune";

import "../../../astrologie/neptune/page.css";

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
    NEPTUNE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/neptune`;

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
          `${SITE_URL}/fr/astrologie/neptune`,

        en:
          `${SITE_URL}/en/astrologie/neptune`,

        es:
          `${SITE_URL}/es/astrologie/neptune`,

        de:
          `${SITE_URL}/de/astrologie/neptune`,

        it:
          `${SITE_URL}/it/astrologie/neptune`,

        pt:
          `${SITE_URL}/pt/astrologie/neptune`,

        "x-default":
          `${SITE_URL}/fr/astrologie/neptune`,
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

export default function NeptuneAstrologiePage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    NEPTUNE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/neptune`;

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

    mainEntityOfPage:
      pageUrl,

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
    <div className="neptune-page">
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

      <main className="neptune-wrap">
        <section className="neptune-hero">
          <div className="neptune-badge">
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

          <p className="neptune-hero-lead">
            {
              text.hero
                .lead
            }
          </p>

          <div className="neptune-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="neptune-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#neptune-dans-les-signes"
              className="neptune-secondary-button"
            >
              {
                text.hero
                  .seeSigns
              }
            </a>
          </div>
        </section>

        <article className="neptune-content">
          <section>
            <span className="neptune-kicker">
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
                text.intuition
                  .title
              }
            </h2>

            <div className="neptune-info-grid">
              {
                text.intuition
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <div
                        className="neptune-info-card"
                        key={
                          card.title
                        }
                      >
                        <span className="neptune-card-icon">
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

            <div className="neptune-functions-grid">
              {
                text.functions
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <div
                        className="neptune-function-card"
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

            <div className="neptune-pillars">
              {
                text.planets
                  .cards
                  .map(
                    (
                      card,
                      index
                    ) => (
                      <div
                        className="neptune-pillar-card"
                        key={
                          card.title
                        }
                      >
                        <div className="neptune-pillar-symbol">
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
                                "/astrologie/uranus"
                              )}
                              className="neptune-text-link"
                            >
                              {
                                card.link
                              }
                            </Link>
                          )
                        }

                        {
                          index ===
                            2 &&
                          card.link && (
                            <Link
                              href={localize(
                                "/astrologie/pluton"
                              )}
                              className="neptune-text-link"
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

          <section id="neptune-dans-les-signes">
            <span className="neptune-kicker">
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

            <div className="neptune-sign-grid">
              {
                text.signs.map(
                  (
                    item
                  ) => (
                    <article
                      className="neptune-sign-card"
                      key={
                        item.sign
                      }
                    >
                      <div className="neptune-sign-symbol">
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

          <section id="neptune-dans-les-maisons">
            <span className="neptune-kicker">
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

            <div className="neptune-house-grid">
              {
                text.houses.map(
                  (
                    item,
                    index
                  ) => (
                    <article
                      className="neptune-house-card"
                      key={
                        item.house
                      }
                    >
                      <div className="neptune-house-number">
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
            <span className="neptune-kicker">
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

            <div className="neptune-retrograde-layout">
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

              <aside className="neptune-retrograde-card">
                <span className="neptune-retrograde-symbol">
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

            <div className="neptune-strengths-grid">
              <div className="neptune-strength-card">
                <span className="neptune-kicker">
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

              <div className="neptune-strength-card">
                <span className="neptune-kicker">
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

            <div className="neptune-aspect-grid">
              {
                text.aspects.map(
                  (
                    aspect
                  ) => (
                    <article
                      className="neptune-aspect-card"
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
            <div className="neptune-cta-card">
              <div>
                <span className="neptune-kicker">
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
                className="neptune-primary-button"
              >
                {
                  text.cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="neptune-faq">
            <span className="neptune-kicker">
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

            <div className="neptune-faq-list">
              {
                text.faq
                  .items
                  .map(
                    (
                      item
                    ) => (
                      <details
                        className="neptune-faq-item"
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

          <p className="neptune-disclaimer">
            {
              text.disclaimer
            }
          </p>
        </article>
      </main>
    </div>
  );
}
