// app/[locale]/astrologie/balance/page.tsx

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
  BALANCE_TRANSLATIONS,
} from "@/i18n/pages/astrologie/balance";

import "../../../astrologie/balance/page.css";

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
    BALANCE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/balance`;

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
          `${SITE_URL}/fr/astrologie/balance`,

        en:
          `${SITE_URL}/en/astrologie/balance`,

        es:
          `${SITE_URL}/es/astrologie/balance`,

        de:
          `${SITE_URL}/de/astrologie/balance`,

        it:
          `${SITE_URL}/it/astrologie/balance`,

        pt:
          `${SITE_URL}/pt/astrologie/balance`,

        "x-default":
          `${SITE_URL}/fr/astrologie/balance`,
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

export default function BalanceAstrologiePage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    BALANCE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/balance`;

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
    <div className="libra-page">
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

      <main className="libra-wrap">
        <section className="libra-hero">
          <div className="libra-badge">
            {text.badge}
          </div>

          <h1>
            {text.title}
          </h1>

          <p className="libra-hero-lead">
            {text.lead}
          </p>

          <div className="libra-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="libra-primary-button"
            >
              {text.createChart}
            </Link>

            <a
              href="#personnalite-balance"
              className="libra-secondary-button"
            >
              {
                text.discoverLibra
              }
            </a>
          </div>
        </section>

        <article className="libra-content">
          <section id="personnalite-balance">
            <span className="libra-kicker">
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

            <div className="libra-info-grid">
              {text.traits.map(
                (item) => (
                  <article
                    className="libra-info-card"
                    key={
                      item.title
                    }
                  >
                    <span className="libra-card-icon">
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

            <div className="libra-pillars">
              {text.pillars.map(
                (pillar) => (
                  <div
                    className="libra-pillar-card"
                    key={
                      pillar.title
                    }
                  >
                    <div className="libra-pillar-symbol">
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
                      {pillar.text}
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

            <div className="libra-strengths-grid">
              <div className="libra-list-card">
                <span className="libra-kicker">
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

              <div className="libra-list-card">
                <span className="libra-kicker">
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

            <div className="libra-pillars">
              {text.placements.map(
                (
                  placement,
                  index
                ) => (
                  <div
                    className="libra-pillar-card"
                    key={
                      placement.title
                    }
                  >
                    <div className="libra-pillar-symbol">
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
                        className="libra-text-link"
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
                        className="libra-text-link"
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
                        className="libra-text-link"
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

            <div className="libra-compatibility-grid">
              {text.compatibilities.map(
                (item) => (
                  <article
                    className="libra-compatibility-card"
                    key={
                      item.sign
                    }
                  >
                    <div className="libra-sign-symbol">
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

            <div className="libra-cta-card">
              <div>
                <span className="libra-kicker">
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
                className="libra-primary-button"
              >
                {text.ctaButton}
              </Link>
            </div>
          </section>

          <section className="libra-faq">
            <span className="libra-kicker">
              {text.faqKicker}
            </span>

            <h2>
              {text.faqTitle}
            </h2>

            <div className="libra-faq-list">
              {text.faq.map(
                (item) => (
                  <details
                    className="libra-faq-item"
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
                      {item.answer}
                    </p>
                  </details>
                )
              )}
            </div>
          </section>

          <p className="libra-disclaimer">
            {text.disclaimer}
          </p>
        </article>
      </main>
    </div>
  );
}
