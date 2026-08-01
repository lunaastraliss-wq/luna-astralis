// app/[locale]/astrologie/conjonction/page.tsx

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
  CONJONCTION_TRANSLATIONS,
} from "@/i18n/pages/astrologie/conjonction";

import "../../../astrologie/conjonction/page.css";

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
    CONJONCTION_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/conjonction`;

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
          `${SITE_URL}/fr/astrologie/conjonction`,

        en:
          `${SITE_URL}/en/astrologie/conjonction`,

        es:
          `${SITE_URL}/es/astrologie/conjonction`,

        de:
          `${SITE_URL}/de/astrologie/conjonction`,

        it:
          `${SITE_URL}/it/astrologie/conjonction`,

        pt:
          `${SITE_URL}/pt/astrologie/conjonction`,

        "x-default":
          `${SITE_URL}/fr/astrologie/conjonction`,
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

export default function ConjonctionAstrologiePage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    CONJONCTION_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/conjonction`;

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
    <div className="conjunction-page">
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

      <main className="conjunction-wrap">
        <nav
          className="conjunction-breadcrumb"
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

        <section className="conjunction-hero">
          <div className="conjunction-badge">
            {text.hero.badge}
          </div>

          <div
            className="conjunction-main-symbol"
            aria-hidden="true"
          >
            ☌
          </div>

          <h1>
            {text.hero.title}
          </h1>

          <p className="conjunction-hero-lead">
            {text.hero.lead}
          </p>

          <div className="conjunction-hero-data">
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

          <div className="conjunction-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="conjunction-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#signification"
              className="conjunction-secondary-button"
            >
              {
                text.hero
                  .understandConjunction
              }
            </a>
          </div>
        </section>

        <article className="conjunction-content">
          <section id="signification">
            <span className="conjunction-kicker">
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

            <div className="conjunction-reading-grid">
              {text.functioning.steps.map(
                (step) => (
                  <article
                    className="conjunction-reading-card"
                    key={
                      step.number
                    }
                  >
                    <span className="conjunction-reading-number">
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
            <span className="conjunction-kicker">
              {
                text.polarity
                  .kicker
              }
            </span>

            <h2>
              {
                text.polarity
                  .title
              }
            </h2>

            <p>
              {
                text.polarity
                  .introduction
              }
            </p>

            <div className="conjunction-polarity-grid">
              {text.polarity.cards.map(
                (card) => (
                  <article
                    className="conjunction-polarity-card"
                    key={
                      card.title
                    }
                  >
                    <span className="conjunction-polarity-icon">
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
            <span className="conjunction-kicker">
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

            <div className="conjunction-method-list">
              {text.interpretation.methods.map(
                (method) => (
                  <article
                    className="conjunction-method-item"
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

            <div className="conjunction-orb-grid">
              {text.orb.cards.map(
                (card) => (
                  <article
                    className="conjunction-orb-card"
                    key={
                      card.value
                    }
                  >
                    <span className="conjunction-orb-value">
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
            <span className="conjunction-kicker">
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

            <div className="conjunction-examples-grid">
              {text.examples.map(
                (example) => (
                  <article
                    className="conjunction-example-card"
                    key={
                      example.planets
                    }
                  >
                    <div className="conjunction-example-symbol">
                      {
                        example.symbol
                      }
                    </div>

                    <h3>
                      {
                        example.planets
                      }
                    </h3>

                    <p className="conjunction-example-keywords">
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

            <div className="conjunction-signs-grid">
              {text.signsSection.signs.map(
                (sign) => (
                  <article
                    className="conjunction-sign-card"
                    key={
                      sign.label
                    }
                  >
                    <span>
                      {
                        sign.label
                      }
                    </span>

                    <h3>
                      {
                        sign.signs
                      }
                    </h3>

                    <p>
                      {sign.text}
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

            <div className="conjunction-houses-grid">
              {text.housesSection.houses.map(
                (house) => (
                  <article
                    className="conjunction-house-card"
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
            <span className="conjunction-kicker">
              {
                text.stellium
                  .kicker
              }
            </span>

            <h2>
              {
                text.stellium
                  .title
              }
            </h2>

            <div className="conjunction-stellium-card">
              <div className="conjunction-stellium-symbols">
                ☉ ☿ ♀
              </div>

              <div>
                <h3>
                  {
                    text.stellium
                      .subtitle
                  }
                </h3>

                {text.stellium.paragraphs.map(
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

            <div className="conjunction-cta-card">
              <div>
                <span className="conjunction-kicker">
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
                className="conjunction-primary-button"
              >
                {
                  text.cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="conjunction-faq">
            <span className="conjunction-kicker">
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

            <div className="conjunction-faq-list">
              {text.faq.items.map(
                (item) => (
                  <details
                    className="conjunction-faq-item"
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
            className="conjunction-aspects-nav"
            aria-label={
              text.navigation
                .ariaLabel
            }
          >
            <Link
              href={localize(
                "/astrologie/aspects"
              )}
              className="conjunction-back-link"
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
                "/astrologie/opposition"
              )}
              className="conjunction-next-link"
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

          <p className="conjunction-disclaimer">
            {text.disclaimer}
          </p>
        </article>
      </main>
    </div>
  );
}
