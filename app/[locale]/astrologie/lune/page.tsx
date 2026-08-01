// app/[locale]/astrologie/lune/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  isLocale,
  locales,
} from "@/i18n/config";

import {
  LUNE_TRANSLATIONS,
} from "@/i18n/pages/astrologie/lune";

import "../../../astrologie/lune/page.css";

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
    LUNE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/lune`;

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
          `${SITE_URL}/fr/astrologie/lune`,
        en:
          `${SITE_URL}/en/astrologie/lune`,
        es:
          `${SITE_URL}/es/astrologie/lune`,
        de:
          `${SITE_URL}/de/astrologie/lune`,
        it:
          `${SITE_URL}/it/astrologie/lune`,
        pt:
          `${SITE_URL}/pt/astrologie/lune`,
        "x-default":
          `${SITE_URL}/fr/astrologie/lune`,
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

export default function LuneAstrologiePage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    LUNE_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/lune`;

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
    <div className="moon-page">
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

      <main className="moon-wrap">
        <section className="moon-hero">
          <div className="moon-badge">
            {text.badge}
          </div>

          <h1>
            {text.title}
          </h1>

          <p className="moon-hero-lead">
            {text.lead}
          </p>

          <div className="moon-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="moon-primary-button"
            >
              {text.createChart}
            </Link>

            <a
              href="#lune-dans-les-signes"
              className="moon-secondary-button"
            >
              {text.viewSigns}
            </a>
          </div>
        </section>

        <article className="moon-content">
          <section>
            <span className="moon-kicker">
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
                text.emotionsTitle
              }
            </h2>

            <div className="moon-info-grid">
              {text.emotionCards.map(
                (card) => (
                  <div
                    className="moon-info-card"
                    key={
                      card.title
                    }
                  >
                    <span className="moon-card-icon">
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
                text.pillarsTitle
              }
            </h2>

            <div className="moon-pillars">
              {text.pillars.map(
                (pillar) => (
                  <div
                    className="moon-pillar-card"
                    key={
                      pillar.title
                    }
                  >
                    <div className="moon-pillar-symbol">
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
              {text.needsTitle}
            </h2>

            {text.needsParagraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}
          </section>

          <section id="lune-dans-les-signes">
            <span className="moon-kicker">
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

            <div className="moon-sign-grid">
              {text.signs.map(
                (item) => (
                  <article
                    className="moon-sign-card"
                    key={
                      item.sign
                    }
                  >
                    <div className="moon-sign-symbol">
                      {
                        item.symbol
                      }
                    </div>

                    <h3>
                      {
                        text.moonInLabel
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

            <div className="moon-cta-card">
              <div>
                <span className="moon-kicker">
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
                className="moon-primary-button"
              >
                {text.ctaButton}
              </Link>
            </div>
          </section>

          <section>
            <h2>
              {
                text.relationshipsTitle
              }
            </h2>

            {text.relationshipsParagraphs.map(
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
                text.intuitionTitle
              }
            </h2>

            {text.intuitionParagraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}
          </section>

          <section className="moon-faq">
            <span className="moon-kicker">
              {text.faqKicker}
            </span>

            <h2>
              {text.faqTitle}
            </h2>

            <div className="moon-faq-list">
              {text.faq.map(
                (item) => (
                  <details
                    className="moon-faq-item"
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

          <p className="moon-disclaimer">
            {text.disclaimer}
          </p>
        </article>
      </main>
    </div>
  );
}
