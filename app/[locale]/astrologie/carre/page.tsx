// app/[locale]/astrologie/carre/page.tsx

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
  CARRE_TRANSLATIONS,
} from "@/i18n/pages/astrologie/carre";

import "../../../astrologie/carre/page.css";

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
    CARRE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/carre`;

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
          `${SITE_URL}/fr/astrologie/carre`,

        en:
          `${SITE_URL}/en/astrologie/carre`,

        es:
          `${SITE_URL}/es/astrologie/carre`,

        de:
          `${SITE_URL}/de/astrologie/carre`,

        it:
          `${SITE_URL}/it/astrologie/carre`,

        pt:
          `${SITE_URL}/pt/astrologie/carre`,

        "x-default":
          `${SITE_URL}/fr/astrologie/carre`,
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
      index: true,
      follow: true,
    },
  };
}

export default function CarreAstrologiePage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    CARRE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/carre`;

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
    <div className="square-page">
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

      <main className="square-wrap">
        <nav
          className="square-breadcrumb"
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

          <span aria-hidden="true">
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

          <span aria-hidden="true">
            /
          </span>

          <span>
            {
              text.breadcrumb
                .current
            }
          </span>
        </nav>

        <section className="square-hero">
          <div className="square-badge">
            {text.hero.badge}
          </div>

          <div
            className="square-main-symbol"
            aria-hidden="true"
          >
            □
          </div>

          <h1>
            {text.hero.title}
          </h1>

          <p className="square-hero-lead">
            {text.hero.lead}
          </p>

          <div className="square-hero-data">
            <div>
              <span>
                {
                  text.hero
                    .angleLabel
                }
              </span>

              <strong>
                {
                  text.hero
                    .angleValue
                }
              </strong>
            </div>

            <div>
              <span>
                {
                  text.hero
                    .dynamicLabel
                }
              </span>

              <strong>
                {
                  text.hero
                    .dynamicValue
                }
              </strong>
            </div>

            <div>
              <span>
                {
                  text.hero
                    .functionLabel
                }
              </span>

              <strong>
                {
                  text.hero
                    .functionValue
                }
              </strong>
            </div>
          </div>

          <div className="square-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="square-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#signification"
              className="square-secondary-button"
            >
              {
                text.hero
                  .understandSquare
              }
            </a>
          </div>
        </section>

        <article className="square-content">
          <section id="signification">
            <span className="square-kicker">
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

            {text.meaning.paragraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}
          </section>

          <section>
            <h2>
              {
                text.functioning
                  .title
              }
            </h2>

            <div className="square-reading-grid">
              {text.functioning.steps.map(
                (step) => (
                  <article
                    className="square-reading-card"
                    key={
                      step.number
                    }
                  >
                    <span className="square-reading-number">
                      {
                        step.number
                      }
                    </span>

                    <h3>
                      {
                        step.title
                      }
                    </h3>

                    <p>
                      {step.text}
                    </p>
                  </article>
                )
              )}
            </div>
          </section>

          <section>
            <span className="square-kicker">
              {
                text.difficulty
                  .kicker
              }
            </span>

            <h2>
              {
                text.difficulty
                  .title
              }
            </h2>

            <p>
              {
                text.difficulty
                  .introduction
              }
            </p>

            <div className="square-polarity-grid">
              {text.difficulty.cards.map(
                (card) => (
                  <article
                    className="square-polarity-card"
                    key={
                      card.title
                    }
                  >
                    <span className="square-polarity-icon">
                      {
                        card.symbol
                      }
                    </span>

                    <h3>
                      {
                        card.title
                      }
                    </h3>

                    {card.paragraphs.map(
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
                    )}
                  </article>
                )
              )}
            </div>
          </section>

          <section>
            <span className="square-kicker">
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

            <div className="square-method-list">
              {text.interpretation.methods.map(
                (method) => (
                  <article
                    className="square-method-item"
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
              )}
            </div>
          </section>

          <section>
            <h2>
              {text.orb.title}
            </h2>

            <p>
              {
                text.orb
                  .introduction
              }
            </p>

            <div className="square-orb-grid">
              {text.orb.cards.map(
                (card) => (
                  <article
                    className="square-orb-card"
                    key={
                      card.value
                    }
                  >
                    <span className="square-orb-value">
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
                      {card.text}
                    </p>
                  </article>
                )
              )}
            </div>

            <p>
              {
                text.orb
                  .conclusion
              }
            </p>
          </section>

          <section>
            <span className="square-kicker">
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

            <div className="square-examples-grid">
              {text.examples.map(
                (example) => (
                  <article
                    className="square-example-card"
                    key={
                      example.planets
                    }
                  >
                    <div className="square-example-symbol">
                      {
                        example.symbol
                      }
                    </div>

                    <h3>
                      {
                        example.planets
                      }
                    </h3>

                    <p className="square-example-keywords">
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
              )}
            </div>
          </section>

          <section>
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

            <div className="square-modes-grid">
              {text.signsSection.modes.map(
                (mode) => (
                  <article
                    className="square-mode-card"
                    key={
                      mode.label
                    }
                  >
                    <span>
                      {
                        mode.label
                      }
                    </span>

                    <h3>
                      {
                        mode.signs
                      }
                    </h3>

                    <p>
                      {mode.text}
                    </p>
                  </article>
                )
              )}
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

            <div className="square-houses-grid">
              {text.housesSection.houses.map(
                (house) => (
                  <article
                    className="square-house-card"
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
                      {house.text}
                    </p>
                  </article>
                )
              )}
            </div>
          </section>

          <section>
            <span className="square-kicker">
              {
                text.grandSquare
                  .kicker
              }
            </span>

            <h2>
              {
                text.grandSquare
                  .title
              }
            </h2>

            <div className="square-grand-card">
              <div className="square-grand-symbol">
                □
              </div>

              <div>
                <h3>
                  {
                    text.grandSquare
                      .subtitle
                  }
                </h3>

                {text.grandSquare.paragraphs.map(
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
                )}
              </div>
            </div>
          </section>

          <section>
            <span className="square-kicker">
              {
                text.tSquare
                  .kicker
              }
            </span>

            <h2>
              {
                text.tSquare
                  .title
              }
            </h2>

            <div className="square-t-card">
              <div className="square-t-symbols">
                ☍

                <span>
                  □
                </span>
              </div>

              <div>
                <h3>
                  {
                    text.tSquare
                      .subtitle
                  }
                </h3>

                {text.tSquare.paragraphs.map(
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
                )}
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

            {text.transits.paragraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}

            <div className="square-cta-card">
              <div>
                <span className="square-kicker">
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
                  {text.cta.text}
                </p>
              </div>

              <Link
                href={localize(
                  "/carte-du-ciel"
                )}
                className="square-primary-button"
              >
                {
                  text.cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="square-faq">
            <span className="square-kicker">
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

            <div className="square-faq-list">
              {text.faq.items.map(
                (item) => (
                  <details
                    className="square-faq-item"
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
              )}
            </div>
          </section>

          <nav
            className="square-aspects-nav"
            aria-label={
              text.navigation
                .ariaLabel
            }
          >
            <Link
              href={localize(
                "/astrologie/opposition"
              )}
              className="square-back-link"
            >
              <span aria-hidden="true">
                ←
              </span>

              {
                text.navigation
                  .previous
              }
            </Link>

            <Link
              href={localize(
                "/astrologie/trigone"
              )}
              className="square-next-link"
            >
              {
                text.navigation
                  .next
              }

              <span aria-hidden="true">
                →
              </span>
            </Link>
          </nav>

          <p className="square-disclaimer">
            {text.disclaimer}
          </p>
        </article>
      </main>
    </div>
  );
}
