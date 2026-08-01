// app/[locale]/astrologie/pluton/page.tsx

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
  PLUTON_TRANSLATIONS,
} from "@/i18n/pages/astrologie/pluton";

import "../../../astrologie/pluton/page.css";

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
    PLUTON_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/pluton`;

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
          `${SITE_URL}/fr/astrologie/pluton`,

        en:
          `${SITE_URL}/en/astrologie/pluton`,

        es:
          `${SITE_URL}/es/astrologie/pluton`,

        de:
          `${SITE_URL}/de/astrologie/pluton`,

        it:
          `${SITE_URL}/it/astrologie/pluton`,

        pt:
          `${SITE_URL}/pt/astrologie/pluton`,

        "x-default":
          `${SITE_URL}/fr/astrologie/pluton`,
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

export default function PlutonAstrologiePage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    PLUTON_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/pluton`;

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
    <div className="pluto-page">
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

      <main className="pluto-wrap">
        <section className="pluto-hero">
          <div className="pluto-badge">
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

          <p className="pluto-hero-lead">
            {
              text.hero
                .lead
            }
          </p>

          <div className="pluto-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="pluto-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#pluton-dans-les-signes"
              className="pluto-secondary-button"
            >
              {
                text.hero
                  .seeSigns
              }
            </a>
          </div>
        </section>

        <article className="pluto-content">
          <section>
            <span className="pluto-kicker">
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
                text.transformation
                  .title
              }
            </h2>

            <div className="pluto-info-grid">
              {
                text.transformation
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <div
                        className="pluto-info-card"
                        key={
                          card.title
                        }
                      >
                        <span className="pluto-card-icon">
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

            <div className="pluto-functions-grid">
              {
                text.functions
                  .cards
                  .map(
                    (
                      card
                    ) => (
                      <div
                        className="pluto-function-card"
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

            <div className="pluto-pillars">
              {
                text.planets
                  .cards
                  .map(
                    (
                      card,
                      index
                    ) => (
                      <div
                        className="pluto-pillar-card"
                        key={
                          card.title
                        }
                      >
                        <div className="pluto-pillar-symbol">
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
                                "/astrologie/saturne"
                              )}
                              className="pluto-text-link"
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
                                "/astrologie/neptune"
                              )}
                              className="pluto-text-link"
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

          <section id="pluton-dans-les-signes">
            <span className="pluto-kicker">
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

            <div className="pluto-sign-grid">
              {
                text.signs.map(
                  (
                    item
                  ) => (
                    <article
                      className="pluto-sign-card"
                      key={
                        item.sign
                      }
                    >
                      <div className="pluto-sign-symbol">
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

          <section id="pluton-dans-les-maisons">
            <span className="pluto-kicker">
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

            <div className="pluto-house-grid">
              {
                text.houses.map(
                  (
                    item,
                    index
                  ) => (
                    <article
                      className="pluto-house-card"
                      key={
                        item.house
                      }
                    >
                      <div className="pluto-house-number">
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
            <span className="pluto-kicker">
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

            <div className="pluto-retrograde-layout">
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

              <aside className="pluto-retrograde-card">
                <span className="pluto-retrograde-symbol">
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

            <div className="pluto-strengths-grid">
              <div className="pluto-strength-card">
                <span className="pluto-kicker">
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

              <div className="pluto-strength-card">
                <span className="pluto-kicker">
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

            <div className="pluto-aspect-grid">
              {
                text.aspects.map(
                  (
                    aspect
                  ) => (
                    <article
                      className="pluto-aspect-card"
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
            <div className="pluto-cta-card">
              <div>
                <span className="pluto-kicker">
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
                className="pluto-primary-button"
              >
                {
                  text.cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="pluto-faq">
            <span className="pluto-kicker">
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

            <div className="pluto-faq-list">
              {
                text.faq
                  .items
                  .map(
                    (
                      item
                    ) => (
                      <details
                        className="pluto-faq-item"
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

          <p className="pluto-disclaimer">
            {
              text.disclaimer
            }
          </p>
        </article>
      </main>
    </div>
  );
}
