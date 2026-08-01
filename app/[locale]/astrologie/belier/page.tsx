// app/[locale]/astrologie/belier/page.tsx

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
  BELIER_TRANSLATIONS,
} from "@/i18n/pages/astrologie/belier";

import "../../../astrologie/belier/page.css";

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
    BELIER_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/belier`;

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
          `${SITE_URL}/fr/astrologie/belier`,

        en:
          `${SITE_URL}/en/astrologie/belier`,

        es:
          `${SITE_URL}/es/astrologie/belier`,

        de:
          `${SITE_URL}/de/astrologie/belier`,

        it:
          `${SITE_URL}/it/astrologie/belier`,

        pt:
          `${SITE_URL}/pt/astrologie/belier`,

        "x-default":
          `${SITE_URL}/fr/astrologie/belier`,
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

export default function BelierAstrologiePage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    BELIER_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/belier`;

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
    <div className="aries-page">
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

      <main className="aries-wrap">
        <section className="aries-hero">
          <div className="aries-badge">
            {text.badge}
          </div>

          <h1>
            {text.title}
          </h1>

          <p className="aries-hero-lead">
            {text.lead}
          </p>

          <div className="aries-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="aries-primary-button"
            >
              {text.createChart}
            </Link>

            <a
              href="#personnalite-belier"
              className="aries-secondary-button"
            >
              {
                text.discoverAries
              }
            </a>
          </div>
        </section>

        <article className="aries-content">
          <section id="personnalite-belier">
            <span className="aries-kicker">
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

            <div className="aries-info-grid">
              {text.traits.map(
                (item) => (
                  <article
                    className="aries-info-card"
                    key={
                      item.title
                    }
                  >
                    <span className="aries-card-icon">
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

            <div className="aries-pillars">
              {text.pillars.map(
                (pillar) => (
                  <div
                    className="aries-pillar-card"
                    key={
                      pillar.title
                    }
                  >
                    <div className="aries-pillar-symbol">
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

            <div className="aries-strengths-grid">
              <div className="aries-list-card">
                <span className="aries-kicker">
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

              <div className="aries-list-card">
                <span className="aries-kicker">
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

            <div className="aries-pillars">
              {text.placements.map(
                (
                  placement,
                  index
                ) => (
                  <div
                    className="aries-pillar-card"
                    key={
                      placement.title
                    }
                  >
                    <div className="aries-pillar-symbol">
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
                        className="aries-text-link"
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
                        className="aries-text-link"
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
                        className="aries-text-link"
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

            <div className="aries-compatibility-grid">
              {text.compatibilities.map(
                (item) => (
                  <article
                    className="aries-compatibility-card"
                    key={
                      item.sign
                    }
                  >
                    <div className="aries-sign-symbol">
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

            <div className="aries-cta-card">
              <div>
                <span className="aries-kicker">
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
                className="aries-primary-button"
              >
                {text.ctaButton}
              </Link>
            </div>
          </section>

          <section className="aries-faq">
            <span className="aries-kicker">
              {text.faqKicker}
            </span>

            <h2>
              {text.faqTitle}
            </h2>

            <div className="aries-faq-list">
              {text.faq.map(
                (item) => (
                  <details
                    className="aries-faq-item"
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

          <p className="aries-disclaimer">
            {text.disclaimer}
          </p>
        </article>
      </main>
    </div>
  );
}
