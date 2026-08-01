// app/[locale]/astrologie/planetes/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  isLocale,
  locales,
} from "@/i18n/config";

import {
  PLANETES_TRANSLATIONS,
} from "@/i18n/pages/astrologie/planetes";

import "../../../astrologie/planetes/page.css";

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
    PLANETES_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/planetes`;

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
          `${SITE_URL}/fr/astrologie/planetes`,
        en:
          `${SITE_URL}/en/astrologie/planetes`,
        es:
          `${SITE_URL}/es/astrologie/planetes`,
        de:
          `${SITE_URL}/de/astrologie/planetes`,
        it:
          `${SITE_URL}/it/astrologie/planetes`,
        pt:
          `${SITE_URL}/pt/astrologie/planetes`,
        "x-default":
          `${SITE_URL}/fr/astrologie/planetes`,
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

export default function PlanetesAstrologiePage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    PLANETES_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/planetes`;

  const localize =
    (
      path: string
    ) =>
      `/${locale}${path}`;

  const jsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "CollectionPage",

    name:
      text.jsonLd.name,

    headline:
      text.jsonLd.headline,

    description:
      text.jsonLd.description,

    inLanguage:
      text.metadata.language,

    url:
      pageUrl,

    mainEntity: {
      "@type":
        "ItemList",

      itemListElement:
        text.planets.map(
          (
            planet,
            index
          ) => ({
            "@type":
              "ListItem",

            position:
              index + 1,

            name:
              planet.name,

            url:
              `${SITE_URL}${localize(
                planet.href
              )}`,
          })
        ),
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
    <div className="planets-page">
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

      <main className="planets-wrap">
        <section className="planets-hero">
          <div className="planets-badge">
            {text.badge}
          </div>

          <h1>
            {text.title}
          </h1>

          <p className="planets-hero-lead">
            {text.lead}
          </p>

          <div className="planets-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="planets-primary-button"
            >
              {
                text.createChart
              }
            </Link>

            <a
              href="#liste-des-planetes"
              className="planets-secondary-button"
            >
              {
                text.explorePlanets
              }
            </a>
          </div>

          <div
            className="planets-orbit"
            aria-hidden="true"
          >
            <span>☀</span>
            <span>☽</span>
            <span>☿</span>
            <span>♀</span>
            <span>♂</span>
            <span>♃</span>
            <span>♄</span>
            <span>♅</span>
            <span>♆</span>
            <span>♇</span>
          </div>
        </section>

        <article className="planets-content">
          <section>
            <span className="planets-kicker">
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
                text.readingTitle
              }
            </h2>

            <div className="planets-reading-grid">
              {text.readingCards.map(
                (card) => (
                  <article
                    className="planets-reading-card"
                    key={
                      card.number
                    }
                  >
                    <span className="planets-reading-number">
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
                  </article>
                )
              )}
            </div>
          </section>

          <section id="liste-des-planetes">
            <span className="planets-kicker">
              {
                text.listKicker
              }
            </span>

            <h2>
              {text.listTitle}
            </h2>

            <p>
              {text.listIntro}
            </p>

            <div className="planets-grid">
              {text.planets.map(
                (planet) => {
                  const localizedHref =
                    localize(
                      planet.href
                    );

                  const ariaLabel =
                    text.discoverAria.replace(
                      "{planet}",
                      planet.name
                    );

                  return (
                    <article
                      className="planet-card"
                      key={
                        planet.href
                      }
                    >
                      <div className="planet-card-top">
                        <span className="planet-symbol">
                          {
                            planet.symbol
                          }
                        </span>

                        <span className="planet-category">
                          {
                            planet.category
                          }
                        </span>
                      </div>

                      <h3>
                        {
                          planet.name
                        }{" "}
                        {
                          text.planetTitleSuffix
                        }
                      </h3>

                      <p className="planet-keywords">
                        {
                          planet.keywords
                        }
                      </p>

                      <p>
                        {planet.text}
                      </p>

                      <Link
                        href={
                          localizedHref
                        }
                        className="planet-link"
                        aria-label={
                          ariaLabel
                        }
                      >
                        {
                          text.discoverLabel
                        }{" "}
                        {
                          planet.name
                        }

                        <span aria-hidden="true">
                          →
                        </span>
                      </Link>
                    </article>
                  );
                }
              )}
            </div>
          </section>

          <section>
            <span className="planets-kicker">
              {
                text.groupsKicker
              }
            </span>

            <h2>
              {text.groupsTitle}
            </h2>

            <div className="planets-groups-grid">
              {text.groups.map(
                (group) => (
                  <article
                    className="planets-group-card"
                    key={
                      group.title
                    }
                  >
                    <div className="planets-group-icons">
                      {
                        group.icons
                      }
                    </div>

                    <h3>
                      {
                        group.title
                      }
                    </h3>

                    <p>
                      {group.text}
                    </p>
                  </article>
                )
              )}
            </div>
          </section>

          <section>
            <h2>
              {
                text.luminariesTitle
              }
            </h2>

            <div className="planets-luminaries">
              <article className="planets-luminary-card">
                <span className="planets-luminary-symbol">
                  ☀
                </span>

                <div>
                  <h3>
                    {text.sunTitle}
                  </h3>

                  <p>
                    {text.sunText}
                  </p>

                  <Link
                    href={`/${locale}/astrologie/soleil`}
                    className="planets-text-link"
                  >
                    {text.sunLink}
                  </Link>
                </div>
              </article>

              <article className="planets-luminary-card">
                <span className="planets-luminary-symbol">
                  ☽
                </span>

                <div>
                  <h3>
                    {text.moonTitle}
                  </h3>

                  <p>
                    {text.moonText}
                  </p>

                  <Link
                    href={`/${locale}/astrologie/lune`}
                    className="planets-text-link"
                  >
                    {text.moonLink}
                  </Link>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              {
                text.differencesTitle
              }
            </h2>

            {text.differencesParagraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}

            <div className="planets-cta-card">
              <div>
                <span className="planets-kicker">
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
                className="planets-primary-button"
              >
                {text.ctaButton}
              </Link>
            </div>
          </section>

          <section className="planets-faq">
            <span className="planets-kicker">
              {text.faqKicker}
            </span>

            <h2>
              {text.faqTitle}
            </h2>

            <div className="planets-faq-list">
              {text.faq.map(
                (item) => (
                  <details
                    className="planets-faq-item"
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

          <p className="planets-disclaimer">
            {text.disclaimer}
          </p>
        </article>
      </main>
    </div>
  );
}
