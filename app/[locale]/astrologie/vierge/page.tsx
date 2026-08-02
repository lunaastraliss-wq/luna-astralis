// app/[locale]/astrologie/vierge/page.tsx

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
  VIERGE_TRANSLATIONS,
} from "@/i18n/pages/astrologie/vierge";

import "../../../astrologie/vierge/page.css";

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
    VIERGE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/vierge`;

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
          `${SITE_URL}/fr/astrologie/vierge`,

        en:
          `${SITE_URL}/en/astrologie/vierge`,

        es:
          `${SITE_URL}/es/astrologie/vierge`,

        de:
          `${SITE_URL}/de/astrologie/vierge`,

        it:
          `${SITE_URL}/it/astrologie/vierge`,

        pt:
          `${SITE_URL}/pt/astrologie/vierge`,

        "x-default":
          `${SITE_URL}/fr/astrologie/vierge`,
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

export default function ViergeAstrologiePage({
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
    VIERGE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/vierge`;

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

  const foundationCards = [
    text.foundations
      .element,

    text.foundations
      .modality,

    text.foundations
      .ruler,
  ];

  const placementCards = [
    text.placements
      .sun,

    text.placements
      .moon,

    text.placements
      .ascendant,
  ];

  return (
    <div className="virgo-page">
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

      <main className="virgo-wrap">
        <section className="virgo-hero">
          <div className="virgo-badge">
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

          <p className="virgo-hero-lead">
            {
              text.hero
                .lead
            }
          </p>

          <div className="virgo-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="virgo-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#personnalite-vierge"
              className="virgo-secondary-button"
            >
              {
                text.hero
                  .discover
              }
            </a>
          </div>
        </section>

        <article className="virgo-content">
          <section id="personnalite-vierge">
            <span className="virgo-kicker">
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

            <div className="virgo-info-grid">
              {
                text.traits
                  .map(
                    (
                      item
                    ) => (
                      <article
                        className="virgo-info-card"
                        key={
                          item.title
                        }
                      >
                        <span className="virgo-card-icon">
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

            <div className="virgo-pillars">
              {
                foundationCards.map(
                  (
                    item
                  ) => (
                    <div
                      className="virgo-pillar-card"
                      key={
                        item.title
                      }
                    >
                      <div className="virgo-pillar-symbol">
                        {
                          item.symbol
                        }
                      </div>

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
                    </div>
                  )
                )
              }
            </div>
          </section>

          <section>
            <h2>
              {
                text.strengthsSection
                  .title
              }
            </h2>

            <div className="virgo-strengths-grid">
              <div className="virgo-list-card">
                <span className="virgo-kicker">
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

              <div className="virgo-list-card">
                <span className="virgo-kicker">
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

            <div className="virgo-pillars">
              {
                placementCards.map(
                  (
                    item
                  ) => (
                    <div
                      className="virgo-pillar-card"
                      key={
                        item.title
                      }
                    >
                      <div className="virgo-pillar-symbol">
                        {
                          item.symbol
                        }
                      </div>

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

                      {
                        item.link &&
                        item.linkLabel
                          ? (
                            <Link
                              href={localize(
                                item.link
                              )}
                              className="virgo-text-link"
                            >
                              {
                                item.linkLabel
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

            <div className="virgo-compatibility-grid">
              {
                text.compatibilities
                  .map(
                    (
                      item
                    ) => (
                      <article
                        className="virgo-compatibility-card"
                        key={
                          item.sign
                        }
                      >
                        <div className="virgo-sign-symbol">
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

            <div className="virgo-cta-card">
              <div>
                <span className="virgo-kicker">
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
                className="virgo-primary-button"
              >
                {
                  text.natalChart
                    .cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="virgo-faq">
            <span className="virgo-kicker">
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

            <div className="virgo-faq-list">
              {
                text.faq
                  .items
                  .map(
                    (
                      item
                    ) => (
                      <details
                        className="virgo-faq-item"
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

          <p className="virgo-disclaimer">
            {
              text.disclaimer
            }
          </p>
        </article>
      </main>
    </div>
  );
}
