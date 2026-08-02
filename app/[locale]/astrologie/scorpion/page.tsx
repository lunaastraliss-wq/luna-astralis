// app/[locale]/astrologie/scorpion/page.tsx

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
  SCORPION_TRANSLATIONS,
} from "@/i18n/pages/astrologie/scorpion";

import "../../../astrologie/scorpion/page.css";

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
    SCORPION_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/scorpion`;

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
          `${SITE_URL}/fr/astrologie/scorpion`,

        en:
          `${SITE_URL}/en/astrologie/scorpion`,

        es:
          `${SITE_URL}/es/astrologie/scorpion`,

        de:
          `${SITE_URL}/de/astrologie/scorpion`,

        it:
          `${SITE_URL}/it/astrologie/scorpion`,

        pt:
          `${SITE_URL}/pt/astrologie/scorpion`,

        "x-default":
          `${SITE_URL}/fr/astrologie/scorpion`,
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

export default function ScorpionAstrologiePage({
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
    SCORPION_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/scorpion`;

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
    <div className="scorpio-page">
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

      <main className="scorpio-wrap">
        <section className="scorpio-hero">
          <div className="scorpio-badge">
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

          <p className="scorpio-hero-lead">
            {
              text.hero
                .lead
            }
          </p>

          <div className="scorpio-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="scorpio-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#personnalite-scorpion"
              className="scorpio-secondary-button"
            >
              {
                text.hero
                  .discover
              }
            </a>
          </div>
        </section>

        <article className="scorpio-content">
          <section
            id="personnalite-scorpion"
          >
            <span className="scorpio-kicker">
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

            <div className="scorpio-info-grid">
              {
                text.traits
                  .map(
                    (
                      item
                    ) => (
                      <article
                        className="scorpio-info-card"
                        key={
                          item.title
                        }
                      >
                        <span className="scorpio-card-icon">
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

            <div className="scorpio-pillars">
              <div className="scorpio-pillar-card">
                <div className="scorpio-pillar-symbol">
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

              <div className="scorpio-pillar-card">
                <div className="scorpio-pillar-symbol">
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

              <div className="scorpio-pillar-card">
                <div className="scorpio-pillar-symbol">
                  {
                    text.foundations
                      .rulers
                      .symbol
                  }
                </div>

                <h3>
                  {
                    text.foundations
                      .rulers
                      .title
                  }
                </h3>

                <p>
                  {
                    text.foundations
                      .rulers
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

            <div className="scorpio-strengths-grid">
              <div className="scorpio-list-card">
                <span className="scorpio-kicker">
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

              <div className="scorpio-list-card">
                <span className="scorpio-kicker">
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

            <div className="scorpio-pillars">
              <div className="scorpio-pillar-card">
                <div className="scorpio-pillar-symbol">
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
                  className="scorpio-text-link"
                >
                  {
                    text.placements
                      .sun
                      .link
                  }
                </Link>
              </div>

              <div className="scorpio-pillar-card">
                <div className="scorpio-pillar-symbol">
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
                  className="scorpio-text-link"
                >
                  {
                    text.placements
                      .moon
                      .link
                  }
                </Link>
              </div>

              <div className="scorpio-pillar-card">
                <div className="scorpio-pillar-symbol">
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
                  className="scorpio-text-link"
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

            <div className="scorpio-compatibility-grid">
              {
                text.compatibilities
                  .map(
                    (
                      item
                    ) => (
                      <article
                        className="scorpio-compatibility-card"
                        key={
                          item.sign
                        }
                      >
                        <div className="scorpio-sign-symbol">
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

            <div className="scorpio-cta-card">
              <div>
                <span className="scorpio-kicker">
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
                className="scorpio-primary-button"
              >
                {
                  text.natalChart
                    .cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="scorpio-faq">
            <span className="scorpio-kicker">
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

            <div className="scorpio-faq-list">
              {
                text.faq
                  .items
                  .map(
                    (
                      item
                    ) => (
                      <details
                        className="scorpio-faq-item"
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

          <p className="scorpio-disclaimer">
            {
              text.disclaimer
            }
          </p>
        </article>
      </main>
    </div>
  );
}
