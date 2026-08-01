// app/[locale]/astrologie/soleil/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { isLocale, locales } from "@/i18n/config";
import { SOLEIL_TRANSLATIONS } from "@/i18n/pages/astrologie/soleil";

import "../../../astrologie/soleil/page.css";

const SITE_URL = "https://luna-astralis.app";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  params: {
    locale: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const { locale } = params;

  if (!isLocale(locale)) {
    return {};
  }

  const text = SOLEIL_TRANSLATIONS[locale];
  const pageUrl = `${SITE_URL}/${locale}/astrologie/soleil`;

  return {
    title: text.metadata.title,
    description: text.metadata.description,
    alternates: {
      canonical: pageUrl,
      languages: {
        fr: `${SITE_URL}/fr/astrologie/soleil`,
        en: `${SITE_URL}/en/astrologie/soleil`,
        es: `${SITE_URL}/es/astrologie/soleil`,
        de: `${SITE_URL}/de/astrologie/soleil`,
        it: `${SITE_URL}/it/astrologie/soleil`,
        pt: `${SITE_URL}/pt/astrologie/soleil`,
        "x-default": `${SITE_URL}/fr/astrologie/soleil`,
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

export default function SoleilAstrologiePage({ params }: Props) {
  const { locale } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text = SOLEIL_TRANSLATIONS[locale];
  const pageUrl = `${SITE_URL}/${locale}/astrologie/soleil`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: text.jsonLd.headline,
    description: text.jsonLd.description,
    inLanguage: text.metadata.language,
    mainEntityOfPage: pageUrl,
    publisher: {
      "@type": "Organization",
      name: "Luna Astralis",
      url: SITE_URL,
    },
  };

  return (
    <div className="sun-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="sun-wrap">
        <section className="sun-hero">
          <div className="sun-badge">{text.badge}</div>

          <h1>{text.title}</h1>

          <p className="sun-hero-lead">{text.lead}</p>

          <div className="sun-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="sun-primary-button"
            >
              {text.createChart}
            </Link>

            <a
              href="#soleil-dans-les-signes"
              className="sun-secondary-button"
            >
              {text.viewSigns}
            </a>
          </div>
        </section>

        <article className="sun-content">
          <section>
            <span className="sun-kicker">{text.introKicker}</span>
            <h2>{text.introTitle}</h2>

            {text.introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section>
            <h2>{text.identityTitle}</h2>

            <div className="sun-info-grid">
              {text.identityCards.map((card) => (
                <div className="sun-info-card" key={card.title}>
                  <span className="sun-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>{text.pillarsTitle}</h2>

            <div className="sun-pillars">
              {text.pillars.map((pillar) => (
                <div className="sun-pillar-card" key={pillar.title}>
                  <div className="sun-pillar-symbol">{pillar.symbol}</div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="soleil-dans-les-signes">
            <span className="sun-kicker">{text.signsKicker}</span>
            <h2>{text.signsTitle}</h2>
            <p>{text.signsIntro}</p>

            <div className="sun-sign-grid">
              {text.signs.map((item) => (
                <article className="sun-sign-card" key={item.sign}>
                  <div className="sun-sign-symbol">{item.symbol}</div>
                  <h3>
                    {text.sunInLabel} {item.sign}
                  </h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{text.houseTitle}</h2>

            {text.houseParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="sun-cta-card">
              <div>
                <span className="sun-kicker">{text.ctaKicker}</span>
                <h2>{text.ctaTitle}</h2>
                <p>{text.ctaText}</p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="sun-primary-button"
              >
                {text.ctaButton}
              </Link>
            </div>
          </section>

          <section className="sun-faq">
            <span className="sun-kicker">{text.faqKicker}</span>
            <h2>{text.faqTitle}</h2>

            <div className="sun-faq-list">
              {text.faq.map((item) => (
                <details className="sun-faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="sun-disclaimer">{text.disclaimer}</p>
        </article>
      </main>
    </div>
  );
}
