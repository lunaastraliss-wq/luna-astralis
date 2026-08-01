// app/[locale]/astrologie/mercure/page.tsx

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
  MERCURE_TRANSLATIONS,
} from "@/i18n/pages/astrologie/mercure";

import "../../../astrologie/mercure/page.css";

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
    MERCURE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/mercure`;

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
          `${SITE_URL}/fr/astrologie/mercure`,

        en:
          `${SITE_URL}/en/astrologie/mercure`,

        es:
          `${SITE_URL}/es/astrologie/mercure`,

        de:
          `${SITE_URL}/de/astrologie/mercure`,

        it:
          `${SITE_URL}/it/astrologie/mercure`,

        pt:
          `${SITE_URL}/pt/astrologie/mercure`,

        "x-default":
          `${SITE_URL}/fr/astrologie/mercure`,
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

export default function MercureAstrologiePage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    MERCURE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/mercure`;

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
    <div className="mercury-page">
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

      <main className="mercury-wrap">
        <section className="mercury-hero">
          <div className="mercury-badge">
            {text.hero.badge}
          </div>

          <h1>
            {text.hero.title}
          </h1>

          <p className="mercury-hero-lead">
            {text.hero.lead}
          </p>

          <div className="mercury-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="mercury-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#mercure-dans-les-signes"
              className="mercury-secondary-button"
            >
              {
                text.hero
                  .seeSigns
              }
            </a>
          </div>
        </section>

        <article className="mercury-content">
          <section>
            <span className="mercury-kicker">
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

            {text.introduction.paragraphs.map(
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
                text.thought
                  .title
              }
            </h2>

            <div className="mercury-info-grid">
              {text.thought.cards.map(
                (card) => (
                  <div
                    className="mercury-info-card"
                    key={
                      card.title
                    }
                  >
                    <span className="mercury-card-icon">
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
                      {card.text}
                    </p>
                  </div>
                )
              )}
            </div>
          </section>

          <section>
            <h2>
              {
                text.functions
                  .title
              }
            </h2>

            <div className="mercury-functions-grid">
              {text.functions.cards.map(
                (card) => (
                  <div
                    className="mercury-function-card"
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
                      {card.text}
                    </p>
                  </div>
                )
              )}
            </div>
          </section>

          <section>
            <h2>
              {
                text.planets
                  .title
              }
            </h2>

            <div className="mercury-pillars">
              {text.planets.cards.map(
                (
                  card,
                  index
                ) => (
                  <div
                    className="mercury-pillar-card"
                    key={
                      card.title
                    }
                  >
                    <div className="mercury-pillar-symbol">
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
                      {card.text}
                    </p>

                    {index === 0 &&
                      card.link && (
                        <Link
                          href={localize(
                            "/astrologie/soleil"
                          )}
                          className="mercury-text-link"
                        >
                          {
                            card.link
                          }
                        </Link>
                      )}

                    {index === 1 &&
                      card.link && (
                        <Link
                          href={localize(
                            "/astrologie/lune"
                          )}
                          className="mercury-text-link"
                        >
                          {
                            card.link
                          }
                        </Link>
                      )}
                  </div>
                )
              )}
            </div>
          </section>

          <section id="mercure-dans-les-signes">
            <span className="mercury-kicker">
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

            <div className="mercury-sign-grid">
              {text.signs.map(
                (item) => (
                  <article
                    className="mercury-sign-card"
                    key={
                      item.sign
                    }
                  >
                    <div className="mercury-sign-symbol">
                      {
                        item.symbol
                      }
                    </div>

                    <h3>
                      {
                        text.signsSection
                          .titlePrefix
                      }{" "}
                      {item.sign}
                    </h3>

                    <p>
                      {item.text}
                    </p>
                  </article>
                )
              )}
            </div>
          </section>

          <section id="mercure-dans-les-maisons">
            <span className="mercury-kicker">
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

            <div className="mercury-house-grid">
              {text.houses.map(
                (
                  item,
                  index
                ) => (
                  <article
                    className="mercury-house-card"
                    key={
                      item.house
                    }
                  >
                    <div className="mercury-house-number">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    <h3>
                      {
                        text.housesSection
                          .titlePrefix
                      }{" "}
                      {item.house}
                    </h3>

                    <p>
                      {item.text}
                    </p>
                  </article>
                )
              )}
            </div>
          </section>

          <section>
            <span className="mercury-kicker">
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

            <div className="mercury-retrograde-layout">
              <div>
                {text.retrograde.paragraphs.map(
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

              <aside className="mercury-retrograde-card">
                <span className="mercury-retrograde-symbol">
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
                  {text.retrograde.items.map(
                    (item) => (
                      <li key={item}>
                        {item}
                      </li>
                    )
                  )}
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

            <div className="mercury-strengths-grid">
              <div className="mercury-strength-card">
                <span className="mercury-kicker">
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
                  {text.strengths.strengths.map(
                    (item) => (
                      <li key={item}>
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="mercury-strength-card">
                <span className="mercury-kicker">
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
                  {text.strengths.challenges.map(
                    (item) => (
                      <li key={item}>
                        {item}
                      </li>
                    )
                  )}
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

            <div className="mercury-aspect-grid">
              {text.aspects.map(
                (aspect) => (
                  <article
                    className="mercury-aspect-card"
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
              )}
            </div>
          </section>

          <section>
            <div className="mercury-cta-card">
              <div>
                <span className="mercury-kicker">
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
                className="mercury-primary-button"
              >
                {
                  text.cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="mercury-faq">
            <span className="mercury-kicker">
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

            <div className="mercury-faq-list">
              {text.faq.items.map(
                (item) => (
                  <details
                    className="mercury-faq-item"
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

          <p className="mercury-disclaimer">
            {text.disclaimer}
          </p>
        </article>
      </main>
    </div>
  );
}
