// app/[locale]/astrologie/ascendant/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  isLocale,
  locales,
} from "@/i18n/config";

import {
  ASCENDANT_TRANSLATIONS,
} from "@/i18n/pages/astrologie/ascendant";

import "../../../astrologie/ascendant/page.css";

const SITE_URL =
  "https://luna-astralis.app";

export function generateStaticParams() {
  return locales.map(
    (locale) => ({
      locale,
    })
  );
}

type Props = {
  params: {
    locale: string;
  };
};

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
    ASCENDANT_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/ascendant`;

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
          `${SITE_URL}/fr/astrologie/ascendant`,
        en:
          `${SITE_URL}/en/astrologie/ascendant`,
        es:
          `${SITE_URL}/es/astrologie/ascendant`,
        de:
          `${SITE_URL}/de/astrologie/ascendant`,
        it:
          `${SITE_URL}/it/astrologie/ascendant`,
        pt:
          `${SITE_URL}/pt/astrologie/ascendant`,
        "x-default":
          `${SITE_URL}/fr/astrologie/ascendant`,
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

export default function AscendantAstrologiePage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    ASCENDANT_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/ascendant`;

  const jsonLd = {
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

  return (
    <div className="rising-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              jsonLd
            ).replace(
              /</g,
              "\\u003c"
            ),
        }}
      />

      <main className="rising-wrap">
        <section className="rising-hero">
          <div className="rising-badge">
            {text.badge}
          </div>

          <h1>
            {text.title}
          </h1>

          <p className="rising-hero-lead">
            {text.lead}
          </p>

          <div className="rising-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="rising-primary-button"
            >
              {
                text.calculateButton
              }
            </Link>

            <a
              href="#ascendant-dans-les-signes"
              className="rising-secondary-button"
            >
              {
                text.viewSigns
              }
            </a>
          </div>
        </section>

        <article className="rising-content">
          <section>
            <span className="rising-kicker">
              {
                text.introKicker
              }
            </span>

            <h2>
              {text.introTitle}
            </h2>

            {text.introParagraphs.map(
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
                text.personalityTitle
              }
            </h2>

            <div className="rising-info-grid">
              {text.personalityCards.map(
                (card) => (
                  <div
                    className="rising-info-card"
                    key={
                      card.title
                    }
                  >
                    <span className="rising-card-icon">
                      {
                        card.icon
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
                text.calculationTitle
              }
            </h2>

            {text.calculationParagraphs.map(
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
                text.precisionTitle
              }
            </h2>

            {text.precisionParagraphs.map(
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
                text.pillarsTitle
              }
            </h2>

            <div className="rising-pillars">
              {text.pillars.map(
                (
                  pillar,
                  index
                ) => (
                  <div
                    className="rising-pillar-card"
                    key={
                      pillar.title
                    }
                  >
                    <div className="rising-pillar-symbol">
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

                    {index === 0 && (
                      <Link
                        href={`/${locale}/astrologie/soleil`}
                        className="rising-text-link"
                      >
                        {
                          text.sunLink
                        }
                      </Link>
                    )}

                    {index === 1 && (
                      <Link
                        href={`/${locale}/astrologie/lune`}
                        className="rising-text-link"
                      >
                        {
                          text.moonLink
                        }
                      </Link>
                    )}
                  </div>
                )
              )}
            </div>
          </section>

          <section id="ascendant-dans-les-signes">
            <span className="rising-kicker">
              {
                text.signsKicker
              }
            </span>

            <h2>
              {text.signsTitle}
            </h2>

            <p>
              {text.signsIntro}
            </p>

            <div className="rising-sign-grid">
              {text.signs.map(
                (item) => (
                  <article
                    className="rising-sign-card"
                    key={
                      item.sign
                    }
                  >
                    <div className="rising-sign-symbol">
                      {
                        item.symbol
                      }
                    </div>

                    <h3>
                      {
                        text.risingLabel
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
              {text.houseTitle}
            </h2>

            {text.houseParagraphs.map(
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
                text.appearanceTitle
              }
            </h2>

            {text.appearanceParagraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}
          </section>

          <section>
            <h2>
              {text.whyTitle}
            </h2>

            {text.whyParagraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}

            <div className="rising-cta-card">
              <div>
                <span className="rising-kicker">
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
                href="/carte-du-ciel"
                className="rising-primary-button"
              >
                {text.ctaButton}
              </Link>
            </div>
          </section>

          <section className="rising-faq">
            <span className="rising-kicker">
              {text.faqKicker}
            </span>

            <h2>
              {text.faqTitle}
            </h2>

            <div className="rising-faq-list">
              {text.faq.map(
                (item) => (
                  <details
                    className="rising-faq-item"
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

          <p className="rising-disclaimer">
            {text.disclaimer}
          </p>
        </article>
      </main>
    </div>
  );
}
