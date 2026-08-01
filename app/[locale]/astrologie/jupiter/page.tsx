// app/[locale]/astrologie/jupiter/page.tsx

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
  JUPITER_TRANSLATIONS,
} from "@/i18n/pages/astrologie/jupiter";

import "../../../astrologie/jupiter/page.css";

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
    JUPITER_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/jupiter`;

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
          `${SITE_URL}/fr/astrologie/jupiter`,

        en:
          `${SITE_URL}/en/astrologie/jupiter`,

        es:
          `${SITE_URL}/es/astrologie/jupiter`,

        de:
          `${SITE_URL}/de/astrologie/jupiter`,

        it:
          `${SITE_URL}/it/astrologie/jupiter`,

        pt:
          `${SITE_URL}/pt/astrologie/jupiter`,

        "x-default":
          `${SITE_URL}/fr/astrologie/jupiter`,
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

export default function JupiterAstrologiePage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    JUPITER_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/jupiter`;

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
    <div className="jupiter-page">
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

      <main className="jupiter-wrap">
        <section className="jupiter-hero">
          <div className="jupiter-badge">
            {text.hero.badge}
          </div>

          <h1>
            {text.hero.title}
          </h1>

          <p className="jupiter-hero-lead">
            {text.hero.lead}
          </p>

          <div className="jupiter-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="jupiter-primary-button"
            >
              {
                text.hero
                  .createChart
              }
            </Link>

            <a
              href="#jupiter-dans-les-signes"
              className="jupiter-secondary-button"
            >
              {
                text.hero
                  .seeSigns
              }
            </a>
          </div>
        </section>

        <article className="jupiter-content">
          <section>
            <span className="jupiter-kicker">
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
                text.growth
                  .title
              }
            </h2>

            <div className="jupiter-info-grid">
              {text.growth.cards.map(
                (card) => (
                  <div
                    className="jupiter-info-card"
                    key={
                      card.title
                    }
                  >
                    <span className="jupiter-card-icon">
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

            <div className="jupiter-functions-grid">
              {text.functions.cards.map(
                (card) => (
                  <div
                    className="jupiter-function-card"
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

            <div className="jupiter-pillars">
              {text.planets.cards.map(
                (
                  card,
                  index
                ) => (
                  <div
                    className="jupiter-pillar-card"
                    key={
                      card.title
                    }
                  >
                    <div className="jupiter-pillar-symbol">
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
                            "/astrologie/mars"
                          )}
                          className="jupiter-text-link"
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

          <section id="jupiter-dans-les-signes">
            <span className="jupiter-kicker">
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

            <div className="jupiter-sign-grid">
              {text.signs.map(
                (item) => (
                  <article
                    className="jupiter-sign-card"
                    key={
                      item.sign
                    }
                  >
                    <div className="jupiter-sign-symbol">
                      {
                        item.symbol
                      }
                    </div>

                    <h3>
                      Jupiter{" "}
                      {
                        locale === "fr"
                          ? "en"
                          : locale === "en"
                            ? "in"
                            : locale === "es"
                              ? "en"
                              : locale === "de"
                                ? "in"
                                : locale === "it"
                                  ? "in"
                                  : "em"
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

          <section id="jupiter-dans-les-maisons">
            <span className="jupiter-kicker">
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

            <div className="jupiter-house-grid">
              {text.houses.map(
                (
                  item,
                  index
                ) => (
                  <article
                    className="jupiter-house-card"
                    key={
                      item.house
                    }
                  >
                    <div className="jupiter-house-number">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    <h3>
                      Jupiter{" "}
                      {
                        locale === "fr"
                          ? "en"
                          : locale === "en"
                            ? "in"
                            : locale === "es"
                              ? "en la"
                              : locale === "de"
                                ? "im"
                                : locale === "it"
                                  ? "in"
                                  : "na"
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
            <span className="jupiter-kicker">
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

            <div className="jupiter-retrograde-layout">
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

              <aside className="jupiter-retrograde-card">
                <span className="jupiter-retrograde-symbol">
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

            <div className="jupiter-strengths-grid">
              <div className="jupiter-strength-card">
                <span className="jupiter-kicker">
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

              <div className="jupiter-strength-card">
                <span className="jupiter-kicker">
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

            <div className="jupiter-aspect-grid">
              {text.aspects.map(
                (aspect) => (
                  <article
                    className="jupiter-aspect-card"
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
            <div className="jupiter-cta-card">
              <div>
                <span className="jupiter-kicker">
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
                className="jupiter-primary-button"
              >
                {
                  text.cta
                    .button
                }
              </Link>
            </div>
          </section>

          <section className="jupiter-faq">
            <span className="jupiter-kicker">
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

            <div className="jupiter-faq-list">
              {text.faq.items.map(
                (item) => (
                  <details
                    className="jupiter-faq-item"
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

          <p className="jupiter-disclaimer">
            {text.disclaimer}
          </p>
        </article>
      </main>
    </div>
  );
}
