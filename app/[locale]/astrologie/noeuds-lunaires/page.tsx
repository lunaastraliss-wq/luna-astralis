import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { isLocale, locales } from "@/i18n/config";
import { NOEUDS_LUNAIRES_TRANSLATIONS } from "@/i18n/pages/astrologie/noeuds-lunaires";

import "./page.css";

const SITE_URL = "https://luna-astralis.app";

type Props = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};

  const t = NOEUDS_LUNAIRES_TRANSLATIONS[params.locale];
  const url = `${SITE_URL}/${params.locale}/astrologie/noeuds-lunaires`;

  return {
    title: t.meta.title,
    description: t.meta.description,

    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/astrologie/noeuds-lunaires`,
        en: `${SITE_URL}/en/astrologie/noeuds-lunaires`,
        es: `${SITE_URL}/es/astrologie/noeuds-lunaires`,
        de: `${SITE_URL}/de/astrologie/noeuds-lunaires`,
        it: `${SITE_URL}/it/astrologie/noeuds-lunaires`,
        pt: `${SITE_URL}/pt/astrologie/noeuds-lunaires`,
        "x-default": `${SITE_URL}/fr/astrologie/noeuds-lunaires`,
      },
    },

    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      url,
      siteName: "Luna Astralis",
      locale: t.meta.locale,
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: t.meta.twitterTitle,
      description: t.meta.twitterDescription,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function NoeudsLunairesPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();

  const locale = params.locale;
  const t = NOEUDS_LUNAIRES_TRANSLATIONS[locale];
  const url = `${SITE_URL}/${locale}/astrologie/noeuds-lunaires`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: t.meta.ogTitle,
      description: t.meta.ogDescription,
      inLanguage: t.meta.language,
      mainEntityOfPage: url,
      publisher: {
        "@type": "Organization",
        name: "Luna Astralis",
        url: SITE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Luna Astralis",
          item: `${SITE_URL}/${locale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: t.astrologyLabel,
          item: `${SITE_URL}/${locale}/astrologie`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: t.title,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ];

  return (
    <div className="nodes-page">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <main>
        <section className="nodes-hero">
          <div className="nodes-stars nodes-stars-one" />
          <div className="nodes-stars nodes-stars-two" />

          <div className="nodes-hero-inner">
            <div className="nodes-badge">☊ &nbsp; {t.badge} &nbsp; ☋</div>

            <p className="nodes-eyebrow">{t.eyebrow}</p>

            <h1>{t.title}</h1>

            <p className="nodes-lead">{t.lead}</p>

            <div className="nodes-axis">
              <div className="nodes-orbit" />

              <div className="nodes-point nodes-point-north">
                <span className="nodes-symbol">☊</span>
                <strong>{t.northTitle}</strong>
                <small>{t.northShort}</small>
              </div>

              <div className="nodes-center">
                <span>✦</span>
              </div>

              <div className="nodes-point nodes-point-south">
                <span className="nodes-symbol">☋</span>
                <strong>{t.southTitle}</strong>
                <small>{t.southShort}</small>
              </div>
            </div>

            <div className="nodes-actions">
              <Link
                href={`/${locale}/carte-du-ciel`}
                className="nodes-button nodes-button-primary"
              >
                {t.createChart}
              </Link>

              <a
                href="#comprendre-les-noeuds"
                className="nodes-button nodes-button-secondary"
              >
                {t.discover}
              </a>
            </div>
          </div>
        </section>

        <div className="nodes-content">
          <section id="comprendre-les-noeuds" className="nodes-intro">
            <span className="nodes-kicker">{t.introKicker}</span>
            <h2>{t.introTitle}</h2>

            {t.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="nodes-dual-grid">
            <article className="nodes-node-card north">
              <div className="nodes-card-symbol">☊</div>
              <span className="nodes-kicker">{t.northKicker}</span>
              <h2>{t.northTitle}</h2>
              <p>{t.northText}</p>

              <ul>
                {t.northPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="nodes-node-card south">
              <div className="nodes-card-symbol">☋</div>
              <span className="nodes-kicker">{t.southKicker}</span>
              <h2>{t.southTitle}</h2>
              <p>{t.southText}</p>

              <ul>
                {t.southPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </section>

          <section className="nodes-section">
            <span className="nodes-kicker">{t.axisKicker}</span>
            <h2>{t.axisTitle}</h2>

            <p>{t.axisIntro}</p>

            <div className="nodes-feature-grid">
              {t.axisCards.map(([symbol, title, text]) => (
                <article className="nodes-feature-card" key={title}>
                  <span>{symbol}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="nodes-section nodes-glass-section">
            <div className="nodes-glass-copy">
              <span className="nodes-kicker">{t.signKicker}</span>
              <h2>{t.signTitle}</h2>

              {t.signText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="nodes-zodiac-wheel">
              <span>♈</span>
              <span>♉</span>
              <span>♊</span>
              <span>♋</span>
              <span>♌</span>
              <span>♍</span>
              <span>♎</span>
              <span>♏</span>
              <span>♐</span>
              <span>♑</span>
              <span>♒</span>
              <span>♓</span>

              <div className="nodes-zodiac-center">
                ☊
                <small>•</small>
                ☋
              </div>
            </div>
          </section>

          <section className="nodes-section">
            <span className="nodes-kicker">{t.houseKicker}</span>
            <h2>{t.houseTitle}</h2>

            {t.houseText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="nodes-house-grid">
              {t.houseCards.map(([number, title, text]) => (
                <article className="nodes-house-card" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="nodes-section">
            <span className="nodes-kicker">{t.interpretKicker}</span>
            <h2>{t.interpretTitle}</h2>

            <div className="nodes-steps">
              {t.steps.map(([number, title, text]) => (
                <article className="nodes-step" key={number}>
                  <div>{number}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="nodes-quote">
            <span>☾</span>
            <p>{t.quote}</p>
          </section>

          <section className="nodes-section nodes-cta">
            <div>
              <span className="nodes-kicker">{t.ctaKicker}</span>
              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaText}</p>
            </div>

            <Link
              href={`/${locale}/carte-du-ciel`}
              className="nodes-button nodes-button-primary"
            >
              {t.ctaButton}
            </Link>
          </section>

          <section className="nodes-section nodes-faq">
            <span className="nodes-kicker">{t.faqKicker}</span>
            <h2>{t.faqTitle}</h2>

            <div className="nodes-faq-list">
              {t.faq.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="nodes-disclaimer">{t.disclaimer}</p>
        </div>
      </main>
    </div>
  );
}
