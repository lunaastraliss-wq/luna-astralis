// app/[locale]/astrologie/maisons/maison-11/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { MAISON_ONZE_TRANSLATIONS } from "@/i18n/pages/astrologie/maisons/maison-11";
import "../../../../astrologie/maisons/maison-11/page.css";

const SITE_URL = "https://luna-astralis.app";
type Props = { params: { locale: string } };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = MAISON_ONZE_TRANSLATIONS[params.locale];
  const url = `${SITE_URL}/${params.locale}/astrologie/maisons/maison-11`;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/astrologie/maisons/maison-11`,
        en: `${SITE_URL}/en/astrologie/maisons/maison-11`,
        es: `${SITE_URL}/es/astrologie/maisons/maison-11`,
        de: `${SITE_URL}/de/astrologie/maisons/maison-11`,
        it: `${SITE_URL}/it/astrologie/maisons/maison-11`,
        pt: `${SITE_URL}/pt/astrologie/maisons/maison-11`,
        "x-default": `${SITE_URL}/fr/astrologie/maisons/maison-11`,
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
    robots: { index: true, follow: true },
  };
}

export default function MaisonOnzePage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();

  const locale = params.locale;
  const t = MAISON_ONZE_TRANSLATIONS[locale] as any;
  const url = `${SITE_URL}/${locale}/astrologie/maisons/maison-11`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: t.meta.ogTitle,
      description: t.meta.ogDescription,
      inLanguage: t.meta.language,
      mainEntityOfPage: url,
      publisher: { "@type": "Organization", name: "Luna Astralis", url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Luna Astralis", item: `${SITE_URL}/${locale}` },
        { "@type": "ListItem", position: 2, name: t.navKicker, item: `${SITE_URL}/${locale}/astrologie/maisons` },
        { "@type": "ListItem", position: 3, name: t.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faq.map(([q, a]: [string, string]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ];

  const ps = (items: string[]) => items.map((p) => <p key={p}>{p}</p>);

  return (
    <div className="house-eleven-page">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <main className="house-eleven-wrap">
        <section className="house-eleven-hero">
          <div className="house-eleven-badge">{t.badge}</div>
          <h1>{t.title}</h1>
          <p className="house-eleven-hero-lead">{t.lead}</p>

          <div className="house-eleven-hero-actions">
            <Link href="/carte-du-ciel" className="house-eleven-primary-button">
              {t.create}
            </Link>

            <a href="#signification-maison-11" className="house-eleven-secondary-button">
              {t.discover}
            </a>
          </div>
        </section>

        <article className="house-eleven-content">
          <section id="signification-maison-11">
            <span className="house-eleven-kicker">{t.meaningKicker}</span>
            <h2>{t.meaningTitle}</h2>
            {ps(t.meaning)}
          </section>

          <section>
            <h2>{t.domainsTitle}</h2>
            <div className="house-eleven-info-grid">
              {t.traits.map(([title, symbol, text]: [string, string, string]) => (
                <article className="house-eleven-info-card" key={title}>
                  <span className="house-eleven-card-icon">{symbol}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.friendshipTitle}</h2>
            {ps(t.friendship)}

            <div className="house-eleven-highlight-card">
              <div className="house-eleven-highlight-symbol">Ⅺ</div>
              <div>
                <h3>{t.highlightTitle}</h3>
                <p>{t.highlight}</p>
                <Link href={`/${locale}/astrologie/maisons`} className="house-eleven-text-link">
                  {t.highlightLink}
                </Link>
              </div>
            </div>
          </section>

          <section><h2>{t.groupsTitle}</h2>{ps(t.groups)}</section>
          <section><h2>{t.networksTitle}</h2>{ps(t.networks)}</section>
          <section><h2>{t.projectsTitle}</h2>{ps(t.projects)}</section>
          <section><h2>{t.hopesTitle}</h2>{ps(t.hopes)}</section>
          <section><h2>{t.causesTitle}</h2>{ps(t.causes)}</section>
          <section><h2>{t.innovationTitle}</h2>{ps(t.innovation)}</section>
          <section><h2>{t.individualityTitle}</h2>{ps(t.individuality)}</section>
          <section><h2>{t.popularityTitle}</h2>{ps(t.popularity)}</section>

          <section>
            <h2>{t.strengthsTitle}</h2>
            <div className="house-eleven-strengths-grid">
              <div className="house-eleven-list-card">
                <span className="house-eleven-kicker">{t.strengthsKicker}</span>
                <h3>{t.strengthsSub}</h3>
                <ul>{t.strengths.map((x: string) => <li key={x}>{x}</li>)}</ul>
              </div>

              <div className="house-eleven-list-card">
                <span className="house-eleven-kicker">{t.challengesKicker}</span>
                <h3>{t.challengesSub}</h3>
                <ul>{t.challenges.map((x: string) => <li key={x}>{x}</li>)}</ul>
              </div>
            </div>
          </section>

          <section>
            <h2>{t.planetsTitle}</h2>
            {ps(t.planetsIntro)}

            <div className="house-eleven-planets-grid">
              {t.planets.map(([name, symbol, text]: [string, string, string]) => (
                <article className="house-eleven-planet-card" key={name}>
                  <div className="house-eleven-planet-symbol">{symbol}</div>
                  <div>
                    <h3>{name} {t.planetLabel}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.signsTitle}</h2>
            {ps(t.signsIntro)}

            <div className="house-eleven-signs-grid">
              {t.signs.map(([name, symbol, text]: [string, string, string]) => (
                <article className="house-eleven-sign-card" key={name}>
                  <div className="house-eleven-sign-symbol">{symbol}</div>
                  <div>
                    <h3>{t.houseSignLabel} {name}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.emptyTitle}</h2>
            {ps(t.empty)}
          </section>

          <section>
            <h2>{t.rulerTitle}</h2>
            {ps(t.ruler)}

            <div className="house-eleven-rulers-grid">
              {t.rulers.map(([name, symbol, ruler]: [string, string, string]) => (
                <div className="house-eleven-ruler-card" key={name}>
                  <span>{symbol}</span>
                  <h3>{name}</h3>
                  <p>{ruler}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.comparison511Title}</h2>
            <div className="house-eleven-comparison-grid">
              {[t.comparison5, t.comparison11].map(([label, title, text]: [string, string, string]) => (
                <article className="house-eleven-comparison-card" key={`${label}-${title}`}>
                  <span className="house-eleven-kicker">{label}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.comparison1011Title}</h2>
            <div className="house-eleven-comparison-grid">
              {[t.comparison10, t.comparison11b].map(([label, title, text]: [string, string, string]) => (
                <article className="house-eleven-comparison-card" key={`${label}-${title}`}>
                  <span className="house-eleven-kicker">{label}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.comparison711Title}</h2>
            <div className="house-eleven-comparison-grid">
              {[t.comparison7, t.comparison11c].map(([label, title, text]: [string, string, string]) => (
                <article className="house-eleven-comparison-card" key={`${label}-${title}`}>
                  <span className="house-eleven-kicker">{label}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.evolutionTitle}</h2>
            {ps(t.evolution)}
          </section>

          <section>
            <h2>{t.interpretTitle}</h2>
            <div className="house-eleven-steps">
              {t.steps.map(([number, title, text]: [string, string, string]) => (
                <article className="house-eleven-step-card" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.natalTitle}</h2>
            {ps(t.natal)}

            <div className="house-eleven-cta-card">
              <div>
                <span className="house-eleven-kicker">{t.ctaKicker}</span>
                <h2>{t.ctaTitle}</h2>
                <p>{t.ctaText}</p>
              </div>

              <Link href="/carte-du-ciel" className="house-eleven-primary-button">
                {t.ctaButton}
              </Link>
            </div>
          </section>

          <section className="house-eleven-navigation">
            <span className="house-eleven-kicker">{t.navKicker}</span>
            <h2>{t.navTitle}</h2>

            <div className="house-eleven-navigation-grid">
              <Link href={`/${locale}/astrologie/maisons/maison-10`} className="house-eleven-navigation-card">
                <span>Ⅹ</span>
                <div><h3>{t.nav10[0]}</h3><p>{t.nav10[1]}</p></div>
              </Link>

              <Link href={`/${locale}/astrologie/maisons`} className="house-eleven-navigation-card">
                <span>☾</span>
                <div><h3>{t.navAll[0]}</h3><p>{t.navAll[1]}</p></div>
              </Link>

              <Link href={`/${locale}/astrologie/maisons/maison-12`} className="house-eleven-navigation-card">
                <span>Ⅻ</span>
                <div><h3>{t.nav12[0]}</h3><p>{t.nav12[1]}</p></div>
              </Link>
            </div>
          </section>

          <section className="house-eleven-faq">
            <span className="house-eleven-kicker">{t.faqKicker}</span>
            <h2>{t.faqTitle}</h2>

            <div className="house-eleven-faq-list">
              {t.faq.map(([q, a]: [string, string]) => (
                <details className="house-eleven-faq-item" key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="house-eleven-disclaimer">{t.disclaimer}</p>
        </article>
      </main>
    </div>
  );
}
