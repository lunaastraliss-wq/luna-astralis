// app/[locale]/astrologie/gemeaux/page.tsx

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
  GEMEAUX_TRANSLATIONS,
} from "@/i18n/pages/astrologie/gemeaux";

import "../../../astrologie/gemeaux/page.css";

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
    GEMEAUX_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/gemeaux`;

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
          `${SITE_URL}/fr/astrologie/gemeaux`,

        en:
          `${SITE_URL}/en/astrologie/gemeaux`,

        es:
          `${SITE_URL}/es/astrologie/gemeaux`,

        de:
          `${SITE_URL}/de/astrologie/gemeaux`,

        it:
          `${SITE_URL}/it/astrologie/gemeaux`,

        pt:
          `${SITE_URL}/pt/astrologie/gemeaux`,

        "x-default":
          `${SITE_URL}/fr/astrologie/gemeaux`,
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

export default function GemeauxAstrologiePage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    GEMEAUX_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/gemeaux`;

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
      text.faq.map(
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
    <div className="gemini-page">
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

      <main className="gemini-wrap">
        <section className="gemini-hero">
          <div className="gemini-badge">
            {text.badge}
          </div>

          <h1>
            {text.title}
          </h1>

          <p className="gemini-hero-lead">
            {text.lead}
          </p>

          <div className="gemini-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="gemini-primary-button"
            >
              {text.createChart}
            </Link>

            <a
              href="#personnalite-gemeaux"
              className="gemini-secondary-button"
            >
              {
                text.discoverGemini
              }
            </a>
          </div>
        </section>

        <article className="gemini-content">
          <section id="personnalite-gemeaux">
            <span className="gemini-kicker">
              {
                text.personalityKicker
              }
            </span>

            <h2>
              {
                text.personalityTitle
              }
            </h2>

            {text.personalityParagraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}
          </section>

          <section>
            <h2>
              {text.traitsTitle}
            </h2>

            <div className="gemini-info-grid">
              {text.traits.map(
                (item) => (
                  <article
                    className="gemini-info-card"
                    key={
                      item.title
                    }
                  >
                    <span className="gemini-card-icon">
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
                      {item.text}
                    </p>
                  </article>
                )
              )}
            </div>
          </section>

          <section>
            <h2>
              {
                text.pillarsTitle
              }
            </h2>

            <div className="gemini-pillars">
              {text.pillars.map(
                (pillar) => (
                  <div
                    className="gemini-pillar-card"
                    key={
                      pillar.title
                    }
                  >
                    <div className="gemini-pillar-symbol">
                      {
                        pillar.symbol
                      }
                    </div>

                    <h3>
                      {
                        pillar.title
                      }
                    </h3>

                    <p>
                      {
                        pillar.text
                      }
                    </p>
                  </div>
                )
              )}
            </div>
          </section>

          <section>
            <h2>
              {
                text.strengthsTitle
              }
            </h2>

            <div className="gemini-strengths-grid">
              <div className="gemini-list-card">
                <span className="gemini-kicker">
                  {
                    text.strengthsKicker
                  }
                </span>

                <h3>
                  {
                    text.strengthsSubtitle
                  }
                </h3>

                <ul>
                  {text.strengths.map(
                    (item) => (
                      <li key={item}>
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="gemini-list-card">
                <span className="gemini-kicker">
                  {
                    text.challengesKicker
                  }
                </span>

                <h3>
                  {
                    text.challengesSubtitle
                  }
                </h3>

                <ul>
                  {text.challenges.map(
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
              {text.loveTitle}
            </h2>

            {text.loveParagraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}
          </section>

          <section>
            <h2>
              {text.workTitle}
            </h2>

            {text.workParagraphs.map(
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
                text.placementsTitle
              }
            </h2>

            <div className="gemini-pillars">
              {text.placements.map(
                (
                  placement,
                  index
                ) => (
                  <div
                    className="gemini-pillar-card"
                    key={
                      placement.title
                    }
                  >
                    <div className="gemini-pillar-symbol">
                      {
                        placement.symbol
                      }
                    </div>

                    <h3>
                      {
                        placement.title
                      }
                    </h3>

                    <p>
                      {
                        placement.text
                      }
                    </p>

                    {index === 0 && (
                      <Link
                        href={localize(
                          "/astrologie/soleil"
                        )}
                        className="gemini-text-link"
                      >
                        {
                          placement.link
                        }
                      </Link>
                    )}

                    {index === 1 && (
                      <Link
                        href={localize(
                          "/astrologie/lune"
                        )}
                        className="gemini-text-link"
                      >
                        {
                          placement.link
                        }
                      </Link>
                    )}

                    {index === 2 && (
                      <Link
                        href={localize(
                          "/astrologie/ascendant"
                        )}
                        className="gemini-text-link"
                      >
                        {
                          placement.link
                        }
                      </Link>
                    )}
                  </div>
                )
              )}
            </div>
          </section>

          <section>
            <h2>
              {
                text.compatibilityTitle
              }
            </h2>

            {text.compatibilityParagraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}

            <div className="gemini-compatibility-grid">
              {text.compatibilities.map(
                (item) => (
                  <article
                    className="gemini-compatibility-card"
                    key={
                      item.sign
                    }
                  >
                    <div className="gemini-sign-symbol">
                      {
                        item.symbol
                      }
                    </div>

                    <h3>
                      {
                        text.compatibilityLabel
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

          <section>
            <h2>
              {text.natalTitle}
            </h2>

            {text.natalParagraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}

            <div className="gemini-cta-card">
              <div>
                <span className="gemini-kicker">
                  {
                    text.ctaKicker
                  }
                </span>

                <h2>
                  {text.ctaTitle}
                </h2>

                <p>
                  {text.ctaText}
                </p>
              </div>

              <Link
                href={localize(
                  "/carte-du-ciel"
                )}
                className="gemini-primary-button"
              >
                {text.ctaButton}
              </Link>
            </div>
          </section>

          <section className="gemini-faq">
            <span className="gemini-kicker">
              {text.faqKicker}
            </span>

            <h2>
              {text.faqTitle}
            </h2>

            <div className="gemini-faq-list">
              {text.faq.map(
                (item) => (
                  <details
                    className="gemini-faq-item"
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

          <p className="gemini-disclaimer">
            {text.disclaimer}
          </p>
        </article>
      </main>
    </div>
  );
}
