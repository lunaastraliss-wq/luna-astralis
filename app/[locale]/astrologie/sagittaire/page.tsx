// app/[locale]/astrologie/sagittaire/page.tsx

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
  SAGITTAIRE_TRANSLATIONS,
} from "@/i18n/pages/astrologie/sagittaire";

import "../../../astrologie/sagittaire/page.css";

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
    SAGITTAIRE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/sagittaire`;

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
          `${SITE_URL}/fr/astrologie/sagittaire`,

        en:
          `${SITE_URL}/en/astrologie/sagittaire`,

        es:
          `${SITE_URL}/es/astrologie/sagittaire`,

        de:
          `${SITE_URL}/de/astrologie/sagittaire`,

        it:
          `${SITE_URL}/it/astrologie/sagittaire`,

        pt:
          `${SITE_URL}/pt/astrologie/sagittaire`,

        "x-default":
          `${SITE_URL}/fr/astrologie/sagittaire`,
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

export default function SagittaireAstrologiePage({
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
    SAGITTAIRE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/sagittaire`;

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
    <div className="sagittarius-page">
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

      <main className="sagittarius-wrap">
        <section className="sagittarius-hero">
          <div className="sagittarius-badge">
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

          <p className="sagittarius-hero-lead">
            {
              text.hero
                .lead
            }
          </p>

          <div className="sagittarius-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="sagittarius-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#personnalite-sagittaire"
              className="sagittarius-secondary-button"
            >
              {
                text.hero
                  .discover
              }
            </a>
          </div>
        </section>

        <article className="sagittarius-content">
          <section
            id="personnalite-sagittaire"
          >
            <span className="sagittarius-kicker">
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

            <div className="sagittarius-info-grid">
              {
                text.traits
                  .map(
                    (
                      item
                    ) => (
                      <article
                        className="sagittarius-info-card"
                        key={
                          item.title
                        }
                      >
                        <span className="sagittarius-card-icon">
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

            <div className="sagittarius-pillars">
              <div className="sagittarius-pillar-card">
                <div className="sagittarius-pillar-symbol">
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

              <div className="sagittarius-pillar-card">
                <div className="sagittarius-pillar-symbol">
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

              <div className="sagittarius-pillar-card">
                <div className="sagittarius-pillar-symbol">
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

            <div className="sagittarius-strengths-grid">
              <div className="sagittarius-list-card">
                <span className="sagittarius-kicker">
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

              <div className="sagittarius-list-card">
                <span className="sagittarius-kicker">
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

            <div className="sagittarius-pillars">
              <div className="sagittarius-pillar-card">
                <div className="sagittarius-pillar-symbol">
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
                  className="sagittarius-text-link"
                >
                  {
                    text.placements
                      .sun
                      .link
                  }
                </Link>
              </div>

              <div className="sagittarius-pillar-card">
                <div className="sagittarius-pillar-symbol">
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
                  className="sagittarius-text-link"
                >
                  {
                    text.placements
                      .moon
                      .link
                  }
                </Link>
              </div>

              <div className="sagittarius-pillar-card">
                <div className="sagittarius-pillar-symbol">
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
                  className="sagittarius-text-link"
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

            <div className="sagittarius-compatibility-grid">
              {
                text.compatibilities
                  .map(
                    (
                      item
                    ) => (
                      <article
                        className="sagittarius-compatibility-card"
                        key={
                          item.sign
                        }
                      >
                        <div className="sagittarius-sign-symbol">
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

            <div className="sagittarius-cta-card">
              <div>
                <span className="sagittarius-kicker">
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
                className="sagittarius-primary-button"
              >
                {
                  text.natalChart
                    .cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="sagittarius-faq">
            <span className="sagittarius-kicker">
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

            <div className="sagittarius-faq-list">
              {
                text.faq
                  .items
                  .map(
                    (
                      item
                    ) => (
                      <details
                        className="sagittarius-faq-item"
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

          <p className="sagittarius-disclaimer">
            {
              text.disclaimer
            }
          </p>
        </article>
      </main>
    </div>
  );
}
