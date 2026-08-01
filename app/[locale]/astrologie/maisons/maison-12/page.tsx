// app/[locale]/astrologie/maisons/maison-12/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { isLocale, locales } from "@/i18n/config";
import { MAISON_DOUZE_TRANSLATIONS } from "@/i18n/pages/astrologie/maisons/maison-12";

import "../../../../astrologie/maisons/maison-12/page.css";

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
  if (!isLocale(params.locale)) {
    return {};
  }

  const t = MAISON_DOUZE_TRANSLATIONS[params.locale];
  const url = `${SITE_URL}/${params.locale}/astrologie/maisons/maison-12`;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/astrologie/maisons/maison-12`,
        en: `${SITE_URL}/en/astrologie/maisons/maison-12`,
        es: `${SITE_URL}/es/astrologie/maisons/maison-12`,
        de: `${SITE_URL}/de/astrologie/maisons/maison-12`,
        it: `${SITE_URL}/it/astrologie/maisons/maison-12`,
        pt: `${SITE_URL}/pt/astrologie/maisons/maison-12`,
        "x-default": `${SITE_URL}/fr/astrologie/maisons/maison-12`,
      },
    },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url,
      siteName: "Luna Astralis",
      locale: t.locale,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: t.twitterTitle,
      description: t.twitterDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function MaisonDouzePage({ params }: Props) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const t = MAISON_DOUZE_TRANSLATIONS[locale] as any;
  const url = `${SITE_URL}/${locale}/astrologie/maisons/maison-12`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: t.ogTitle,
      description: t.ogDescription,
      inLanguage: t.language,
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
          name: t.navKicker,
          item: `${SITE_URL}/${locale}/astrologie/maisons`,
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
      mainEntity: t.faq.map(([question, answer]: [string, string]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ];

  const paragraphs = (items: string[]) =>
    items.map((item) => <p key={item}>{item}</p>);

  const comparison = (items: [string, string, string]) => (
    <article className="house-twelve-comparison-card">
      <span className="house-twelve-kicker">{items[0]}</span>
      <h3>{items[1]}</h3>
      <p>{items[2]}</p>
    </article>
  );

  return (
    <div className="house-twelve-page">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <main className="house-twelve-wrap">
        <section className="house-twelve-hero">
          <div className="house-twelve-badge">{t.badge}</div>
          <h1>{t.title}</h1>
          <p className="house-twelve-hero-lead">{t.lead}</p>

          <div className="house-twelve-hero-actions">
            <Link href="/carte-du-ciel" className="house-twelve-primary-button">
              {t.create}
            </Link>

            <a
              href="#signification-maison-12"
              className="house-twelve-secondary-button"
            >
              {t.discover}
            </a>
          </div>
        </section>

        <article className="house-twelve-content">
          <section id="signification-maison-12">
            <span className="house-twelve-kicker">{t.meaningKicker}</span>
            <h2>{t.meaningTitle}</h2>
            {paragraphs(t.meaning)}
          </section>

          <section>
            <h2>{t.domainsTitle}</h2>

            <div className="house-twelve-info-grid">
              {t.traits.map(
                ([title, symbol, text]: [string, string, string]) => (
                  <article className="house-twelve-info-card" key={title}>
                    <span className="house-twelve-card-icon">{symbol}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                )
              )}
            </div>
          </section>

          <section>
            <h2>{t.shadowTitle}</h2>
            {paragraphs(t.shadow)}

            <div className="house-twelve-highlight-card">
              <div className="house-twelve-highlight-symbol">Ⅻ</div>

              <div>
                <h3>{t.highlightTitle}</h3>
                <p>{t.highlight}</p>

                <Link
                  href={`/${locale}/astrologie/maisons`}
                  className="house-twelve-text-link"
                >
                  {t.highlightLink}
                </Link>
              </div>
            </div>
          </section>

          <section><h2>{t.dreamsTitle}</h2>{paragraphs(t.dreams)}</section>
          <section><h2>{t.solitudeTitle}</h2>{paragraphs(t.solitude)}</section>
          <section><h2>{t.spiritualityTitle}</h2>{paragraphs(t.spirituality)}</section>
          <section><h2>{t.compassionTitle}</h2>{paragraphs(t.compassion)}</section>
          <section><h2>{t.secretsTitle}</h2>{paragraphs(t.secrets)}</section>
          <section><h2>{t.sabotageTitle}</h2>{paragraphs(t.sabotage)}</section>
          <section><h2>{t.institutionsTitle}</h2>{paragraphs(t.institutions)}</section>
          <section><h2>{t.releaseTitle}</h2>{paragraphs(t.release)}</section>

          <section>
            <h2>{t.strengthsTitle}</h2>

            <div className="house-twelve-strengths-grid">
              <div className="house-twelve-list-card">
                <span className="house-twelve-kicker">
                  {t.strengthsKicker}
                </span>
                <h3>{t.strengthsSub}</h3>
                <ul>
                  {t.strengths.map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="house-twelve-list-card">
                <span className="house-twelve-kicker">
                  {t.challengesKicker}
                </span>
                <h3>{t.challengesSub}</h3>
                <ul>
                  {t.challenges.map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>{t.planetsTitle}</h2>

            <div className="house-twelve-planets-grid">
              {t.planets.map(
                ([name, symbol, text]: [string, string, string]) => (
                  <article className="house-twelve-planet-card" key={name}>
                    <div className="house-twelve-planet-symbol">{symbol}</div>
                    <div>
                      <h3>
                        {name} {t.planetLabel}
                      </h3>
                      <p>{text}</p>
                    </div>
                  </article>
                )
              )}
            </div>
          </section>

          <section>
            <h2>{t.signsTitle}</h2>

            <div className="house-twelve-signs-grid">
              {t.signs.map(
                ([name, symbol, text]: [string, string, string]) => (
                  <article className="house-twelve-sign-card" key={name}>
                    <div className="house-twelve-sign-symbol">{symbol}</div>
                    <div>
                      <h3>
                        {t.houseSignLabel} {name}
                      </h3>
                      <p>{text}</p>
                    </div>
                  </article>
                )
              )}
            </div>
          </section>

          <section>
            <h2>{t.emptyTitle}</h2>
            {paragraphs(t.empty)}
          </section>

          <section>
            <h2>{t.rulerTitle}</h2>
            {paragraphs(t.ruler)}

            <div className="house-twelve-rulers-grid">
              {t.rulers.map(
                ([name, symbol, ruler]: [string, string, string]) => (
                  <div className="house-twelve-ruler-card" key={name}>
                    <span>{symbol}</span>
                    <h3>{name}</h3>
                    <p>{ruler}</p>
                  </div>
                )
              )}
            </div>
          </section>

          <section>
            <h2>{t.comparison612Title}</h2>
            <div className="house-twelve-comparison-grid">
              {comparison(t.comparison6)}
              {comparison(t.comparison12)}
            </div>
          </section>

          <section>
            <h2>{t.comparison812Title}</h2>
            <div className="house-twelve-comparison-grid">
              {comparison(t.comparison8)}
              {comparison(t.comparison12b)}
            </div>
          </section>

          <section>
            <h2>{t.comparison112Title}</h2>
            <div className="house-twelve-comparison-grid">
              {comparison(t.comparison12c)}
              {comparison(t.comparison1)}
            </div>
          </section>

          <section>
            <h2>{t.evolutionTitle}</h2>
            {paragraphs(t.evolution)}
          </section>

          <section>
            <h2>{t.interpretTitle}</h2>

            <div className="house-twelve-steps">
              {t.steps.map(
                ([number, title, text]: [string, string, string]) => (
                  <article className="house-twelve-step-card" key={number}>
                    <span>{number}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                )
              )}
            </div>
          </section>

          <section>
            <h2>{t.natalTitle}</h2>
            {paragraphs(t.natal)}

            <div className="house-twelve-cta-card">
              <div>
                <span className="house-twelve-kicker">{t.ctaKicker}</span>
                <h2>{t.ctaTitle}</h2>
                <p>{t.ctaText}</p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="house-twelve-primary-button"
              >
                {t.ctaButton}
              </Link>
            </div>
          </section>

          <section className="house-twelve-navigation">
            <span className="house-twelve-kicker">{t.navKicker}</span>
            <h2>{t.navTitle}</h2>

            <div className="house-twelve-navigation-grid">
              <Link
                href={`/${locale}/astrologie/maisons/maison-11`}
                className="house-twelve-navigation-card"
              >
                <span>Ⅺ</span>
                <div>
                  <h3>{t.nav11[0]}</h3>
                  <p>{t.nav11[1]}</p>
                </div>
              </Link>

              <Link
                href={`/${locale}/astrologie/maisons`}
                className="house-twelve-navigation-card"
              >
                <span>☾</span>
                <div>
                  <h3>{t.navAll[0]}</h3>
                  <p>{t.navAll[1]}</p>
                </div>
              </Link>

              <Link
                href={`/${locale}/astrologie/maisons/maison-1`}
                className="house-twelve-navigation-card"
              >
                <span>Ⅰ</span>
                <div>
                  <h3>{t.nav1[0]}</h3>
                  <p>{t.nav1[1]}</p>
                </div>
              </Link>
            </div>
          </section>

          <section className="house-twelve-faq">
            <span className="house-twelve-kicker">{t.faqKicker}</span>
            <h2>{t.faqTitle}</h2>

            <div className="house-twelve-faq-list">
              {t.faq.map(([question, answer]: [string, string]) => (
                <details className="house-twelve-faq-item" key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="house-twelve-disclaimer">{t.disclaimer}</p>
        </article>
      </main>
    </div>
  );
}
