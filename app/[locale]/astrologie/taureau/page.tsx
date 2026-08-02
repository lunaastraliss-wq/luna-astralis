// app/[locale]/astrologie/taureau/page.tsx

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
  TAUREAU_TRANSLATIONS,
} from "@/i18n/pages/astrologie/taureau";

import "../../../astrologie/taureau/page.css";

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
    TAUREAU_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/taureau`;

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
          `${SITE_URL}/fr/astrologie/taureau`,

        en:
          `${SITE_URL}/en/astrologie/taureau`,

        es:
          `${SITE_URL}/es/astrologie/taureau`,

        de:
          `${SITE_URL}/de/astrologie/taureau`,

        it:
          `${SITE_URL}/it/astrologie/taureau`,

        pt:
          `${SITE_URL}/pt/astrologie/taureau`,

        "x-default":
          `${SITE_URL}/fr/astrologie/taureau`,
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

export default function TaureauAstrologiePage({
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
    TAUREAU_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/taureau`;

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
    <div className="taurus-page">
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

      <main className="taurus-wrap">
        <section className="taurus-hero">
          <div className="taurus-badge">
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

          <p className="taurus-hero-lead">
            {
              text.hero
                .lead
            }
          </p>

          <div className="taurus-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="taurus-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#personnalite-taureau"
              className="taurus-secondary-button"
            >
              {
                text.hero
                  .discover
              }
            </a>
          </div>
        </section>

        <article className="taurus-content">
          <section
            id="personnalite-taureau"
          >
            <span className="taurus-kicker">
              {
                text.personality
                  .kicker
              }
            </span>

            <h2>
              {
                text.personality
                  .title
              }
            </h2>

            {
              text.personality
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
                text.traitsSection
                  .title
              }
            </h2>

            <div className="taurus-info-grid">
              {
                text.traits
                  .map(
                    (
                      item
                    ) => (
                      <article
                        className="taurus-info-card"
                        key={
                          item.title
                        }
                      >
                        <span className="taurus-card-icon">
                          {
                            item.symbol
                          }
                        </span>

                        <h3>
                          {
                            item.title
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
            <h2>
              {
                text.foundations
                  .title
              }
            </h2>

            <div className="taurus-pillars">
              <div className="taurus-pillar-card">
                <div className="taurus-pillar-symbol">
                  {
                    text.foundations
                      .element
                      .symbol
                  }
                </div>

                <h3>
                  {
                    text.foundations
                      .element
                      .title
                  }
                </h3>

                <p>
                  {
                    text.foundations
                      .element
                      .text
                  }
                </p>
              </div>

              <div className="taurus-pillar-card">
                <div className="taurus-pillar-symbol">
                  {
                    text.foundations
                      .modality
                      .symbol
                  }
                </div>

                <h3>
                  {
                    text.foundations
                      .modality
                      .title
                  }
                </h3>

                <p>
                  {
                    text.foundations
                      .modality
                      .text
                  }
                </p>
              </div>

              <div className="taurus-pillar-card">
                <div className="taurus-pillar-symbol">
                  {
                    text.foundations
                      .ruler
                      .symbol
                  }
                </div>

                <h3>
                  {
                    text.foundations
                      .ruler
                      .title
                  }
                </h3>

                <p>
                  {
                    text.foundations
                      .ruler
                      .text
                  }
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              {
                text.strengthsSection
                  .title
              }
            </h2>

            <div className="taurus-strengths-grid">
              <div className="taurus-list-card">
                <span className="taurus-kicker">
                  {
                    text.strengthsSection
                      .strengthsKicker
                  }
                </span>

                <h3>
                  {
                    text.strengthsSection
                      .strengthsTitle
                  }
                </h3>

                <ul>
                  {
                    text.strengthsSection
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

              <div className="taurus-list-card">
                <span className="taurus-kicker">
                  {
                    text.strengthsSection
                      .challengesKicker
                  }
                </span>

                <h3>
                  {
                    text.strengthsSection
                      .challengesTitle
                  }
                </h3>

                <ul>
                  {
                    text.strengthsSection
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
                text.love
                  .title
              }
            </h2>

            {
              text.love
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
                text.work
                  .title
              }
            </h2>

            {
              text.work
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
                text.placements
                  .title
              }
            </h2>

            <div className="taurus-pillars">
              <div className="taurus-pillar-card">
                <div className="taurus-pillar-symbol">
                  {
                    text.placements
                      .sun
                      .symbol
                  }
                </div>

                <h3>
                  {
                    text.placements
                      .sun
                      .title
                  }
                </h3>

                <p>
                  {
                    text.placements
                      .sun
                      .text
                  }
                </p>

                <Link
                  href={localize(
                    "/astrologie/soleil"
                  )}
                  className="taurus-text-link"
                >
                  {
                    text.placements
                      .sun
                      .link
                  }
                </Link>
              </div>

              <div className="taurus-pillar-card">
                <div className="taurus-pillar-symbol">
                  {
                    text.placements
                      .moon
                      .symbol
                  }
                </div>

                <h3>
                  {
                    text.placements
                      .moon
                      .title
                  }
                </h3>

                <p>
                  {
                    text.placements
                      .moon
                      .text
                  }
                </p>

                <Link
                  href={localize(
                    "/astrologie/lune"
                  )}
                  className="taurus-text-link"
                >
                  {
                    text.placements
                      .moon
                      .link
                  }
                </Link>
              </div>

              <div className="taurus-pillar-card">
                <div className="taurus-pillar-symbol">
                  {
                    text.placements
                      .ascendant
                      .symbol
                  }
                </div>

                <h3>
                  {
                    text.placements
                      .ascendant
                      .title
                  }
                </h3>

                <p>
                  {
                    text.placements
                      .ascendant
                      .text
                  }
                </p>

                <Link
                  href={localize(
                    "/astrologie/ascendant"
                  )}
                  className="taurus-text-link"
                >
                  {
                    text.placements
                      .ascendant
                      .link
                  }
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              {
                text.compatibilitySection
                  .title
              }
            </h2>

            {
              text.compatibilitySection
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

            <div className="taurus-compatibility-grid">
              {
                text.compatibilities
                  .map(
                    (
                      item
                    ) => (
                      <article
                        className="taurus-compatibility-card"
                        key={
                          item.sign
                        }
                      >
                        <div className="taurus-sign-symbol">
                          {
                            item.symbol
                          }
                        </div>

                        <h3>
                          {
                            text.compatibilitySection
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

          <section>
            <h2>
              {
                text.natalChart
                  .title
              }
            </h2>

            {
              text.natalChart
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

            <div className="taurus-cta-card">
              <div>
                <span className="taurus-kicker">
                  {
                    text.natalChart
                      .cta
                      .kicker
                  }
                </span>

                <h2>
                  {
                    text.natalChart
                      .cta
                      .title
                  }
                </h2>

                <p>
                  {
                    text.natalChart
                      .cta
                      .text
                  }
                </p>
              </div>

              <Link
                href={localize(
                  "/carte-du-ciel"
                )}
                className="taurus-primary-button"
              >
                {
                  text.natalChart
                    .cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="taurus-faq">
            <span className="taurus-kicker">
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

            <div className="taurus-faq-list">
              {
                text.faq
                  .items
                  .map(
                    (
                      item
                    ) => (
                      <details
                        className="taurus-faq-item"
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

          <p className="taurus-disclaimer">
            {
              text.disclaimer
            }
          </p>
        </article>
      </main>
    </div>
  );
}
