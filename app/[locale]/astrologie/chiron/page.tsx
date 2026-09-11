// app/[locale]/astrologie/chiron/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  isLocale,
  locales,
} from "@/i18n/config";

import {
  CHIRON_TRANSLATIONS,
} from "@/i18n/pages/astrologie/chiron";

import "../../../astrologie/chiron/page.css";

const SITE_URL = "https://luna-astralis.app";

type Props = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export function generateMetadata({
  params,
}: Props): Metadata {
  const { locale } = params;

  if (!isLocale(locale)) {
    return {};
  }

  const text = CHIRON_TRANSLATIONS[locale];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/chiron`;

  return {
    title: text.metadata.title,
    description: text.metadata.description,

    alternates: {
      canonical: pageUrl,

      languages: {
        fr: `${SITE_URL}/fr/astrologie/chiron`,
        en: `${SITE_URL}/en/astrologie/chiron`,
        es: `${SITE_URL}/es/astrologie/chiron`,
        de: `${SITE_URL}/de/astrologie/chiron`,
        it: `${SITE_URL}/it/astrologie/chiron`,
        pt: `${SITE_URL}/pt/astrologie/chiron`,
        "x-default":
          `${SITE_URL}/fr/astrologie/chiron`,
      },
    },

    openGraph: {
      title: text.metadata.ogTitle,
      description: text.metadata.ogDescription,
      url: pageUrl,
      siteName: "Luna Astralis",
      locale: text.metadata.locale,
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: text.metadata.twitterTitle,
      description: text.metadata.twitterDescription,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ChironAstrologiePage({
  params,
}: Props) {
  const { locale } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text = CHIRON_TRANSLATIONS[locale];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/chiron`;

  const localize = (path: string) =>
    `/${locale}${path}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: text.jsonLd.headline,
    description: text.jsonLd.description,
    inLanguage: text.metadata.language,
    url: pageUrl,
    mainEntityOfPage: pageUrl,

    author: {
      "@type": "Organization",
      name: "Luna Astralis",
      url: SITE_URL,
    },

    publisher: {
      "@type": "Organization",
      name: "Luna Astralis",
      url: SITE_URL,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: text.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="chiron-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="chiron-wrap">
        <section className="chiron-hero">
          <div className="chiron-badge">
            {text.hero.badge}
          </div>

          <h1>{text.hero.title}</h1>

          <p className="chiron-hero-lead">
            {text.hero.lead}
          </p>

          <div className="chiron-hero-actions">
            <Link
              href={localize("/carte-du-ciel")}
              className="chiron-primary-button"
            >
              {text.hero.createChart}
            </Link>

            <a
              href="#chiron-dans-les-signes"
              className="chiron-secondary-button"
            >
              {text.hero.seeSigns}
            </a>
          </div>
        </section>

        <article className="chiron-content">
          <section>
            <span className="chiron-kicker">
              {text.introduction.kicker}
            </span>

            <h2>{text.introduction.title}</h2>

            {text.introduction.paragraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}
          </section>

          <section>
            <h2>{text.structure.title}</h2>

            <div className="chiron-info-grid">
              {text.structure.cards.map((card) => (
                <div
                  className="chiron-info-card"
                  key={card.title}
                >
                  <span className="chiron-card-icon">
                    {card.symbol}
                  </span>

                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>{text.functions.title}</h2>

            <div className="chiron-functions-grid">
              {text.functions.cards.map((card) => (
                <div
                  className="chiron-function-card"
                  key={card.number}
                >
                  <span>{card.number}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>{text.planets.title}</h2>

            <div className="chiron-pillars">
              {text.planets.cards.map((card) => (
                <div
                  className="chiron-pillar-card"
                  key={card.title}
                >
                  <div className="chiron-pillar-symbol">
                    {card.symbol}
                  </div>

                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="chiron-dans-les-signes">
            <span className="chiron-kicker">
              {text.signsSection.kicker}
            </span>

            <h2>{text.signsSection.title}</h2>

            <p>{text.signsSection.introduction}</p>

            <div className="chiron-sign-grid">
              {text.signs.map((item) => (
                <article
                  className="chiron-sign-card"
                  key={item.sign}
                >
                  <div className="chiron-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    {text.signsSection.titlePrefix}{" "}
                    {item.sign}
                  </h3>

                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="chiron-dans-les-maisons">
            <span className="chiron-kicker">
              {text.housesSection.kicker}
            </span>

            <h2>{text.housesSection.title}</h2>

            <p>{text.housesSection.introduction}</p>

            <div className="chiron-house-grid">
              {text.houses.map((item, index) => (
                <article
                  className="chiron-house-card"
                  key={item.house}
                >
                  <div className="chiron-house-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>
                    {text.housesSection.titlePrefix}{" "}
                    {item.house}
                  </h3>

                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <span className="chiron-kicker">
              {text.retrograde.kicker}
            </span>

            <h2>{text.retrograde.title}</h2>

            <div className="chiron-retrograde-layout">
              <div>
                {text.retrograde.paragraphs.map(
                  (paragraph) => (
                    <p key={paragraph}>
                      {paragraph}
                    </p>
                  )
                )}
              </div>

              <aside className="chiron-retrograde-card">
                <span className="chiron-retrograde-symbol">
                  {text.retrograde.cardSymbol}
                </span>

                <h3>{text.retrograde.cardTitle}</h3>

                <ul>
                  {text.retrograde.items.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </section>

          <section>
            <h2>{text.strengths.title}</h2>

            <div className="chiron-strengths-grid">
              <div className="chiron-strength-card">
                <span className="chiron-kicker">
                  {text.strengths.strengthsKicker}
                </span>

                <h3>
                  {text.strengths.strengthsTitle}
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

              <div className="chiron-strength-card">
                <span className="chiron-kicker">
                  {text.strengths.challengesKicker}
                </span>

                <h3>
                  {text.strengths.challengesTitle}
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
            <h2>{text.aspectsSection.title}</h2>

            <p>
              {text.aspectsSection.introduction}
            </p>

            <div className="chiron-aspect-grid">
              {text.aspects.map((aspect) => (
                <article
                  className="chiron-aspect-card"
                  key={aspect.title}
                >
                  <span>{aspect.symbol}</span>
                  <h3>{aspect.title}</h3>
                  <p>{aspect.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <div className="chiron-cta-card">
              <div>
                <span className="chiron-kicker">
                  {text.cta.kicker}
                </span>

                <h2>{text.cta.title}</h2>
                <p>{text.cta.text}</p>
              </div>

              <Link
                href={localize("/carte-du-ciel")}
                className="chiron-primary-button"
              >
                {text.cta.button}
              </Link>
            </div>
          </section>

          <section className="chiron-faq">
            <span className="chiron-kicker">
              {text.faq.kicker}
            </span>

            <h2>{text.faq.title}</h2>

            <div className="chiron-faq-list">
              {text.faq.items.map((item) => (
                <details
                  className="chiron-faq-item"
                  key={item.question}
                >
                  <summary>
                    {item.question}
                  </summary>

                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="chiron-disclaimer">
            {text.disclaimer}
          </p>
        </article>
      </main>
    </div>
  );
}
