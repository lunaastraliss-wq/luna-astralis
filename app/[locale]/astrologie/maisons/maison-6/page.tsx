// app/[locale]/astrologie/maisons/maison-6/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { MAISON_SIX_TRANSLATIONS } from "@/i18n/pages/astrologie/maisons/maison-6";
import "../../../../astrologie/maisons/maison-6/page.css";

const SITE_URL = "https://luna-astralis.app";
type Props = { params: { locale: string } };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = MAISON_SIX_TRANSLATIONS[params.locale];
  const url = `${SITE_URL}/${params.locale}/astrologie/maisons/maison-6`;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/astrologie/maisons/maison-6`,
        en: `${SITE_URL}/en/astrologie/maisons/maison-6`,
        es: `${SITE_URL}/es/astrologie/maisons/maison-6`,
        de: `${SITE_URL}/de/astrologie/maisons/maison-6`,
        it: `${SITE_URL}/it/astrologie/maisons/maison-6`,
        pt: `${SITE_URL}/pt/astrologie/maisons/maison-6`,
        "x-default": `${SITE_URL}/fr/astrologie/maisons/maison-6`,
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

export default function MaisonSixPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();

  const locale = params.locale;
  const t = MAISON_SIX_TRANSLATIONS[locale] as any;
  const url = `${SITE_URL}/${locale}/astrologie/maisons/maison-6`;

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
        { "@type":"ListItem", position:1, name:"Luna Astralis", item:`${SITE_URL}/${locale}` },
        { "@type":"ListItem", position:2, name:t.navKicker, item:`${SITE_URL}/${locale}/astrologie/maisons` },
        { "@type":"ListItem", position:3, name:t.title, item:url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faq.map(([q,a]:[string,string]) => ({
        "@type":"Question",
        name:q,
        acceptedAnswer:{ "@type":"Answer", text:a },
      })),
    },
  ];

  const ps = (items:string[]) => items.map((p)=><p key={p}>{p}</p>);

  return (
    <div className="house-six-page">
      {schemas.map((schema,index)=>(
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g,"\\u003c") }}
        />
      ))}

      <main className="house-six-wrap">
        <section className="house-six-hero">
          <div className="house-six-badge">{t.badge}</div>
          <h1>{t.title}</h1>
          <p className="house-six-hero-lead">{t.lead}</p>
          <div className="house-six-hero-actions">
            <Link href="/carte-du-ciel" className="house-six-primary-button">{t.create}</Link>
            <a href="#signification-maison-6" className="house-six-secondary-button">{t.discover}</a>
          </div>
        </section>

        <article className="house-six-content">
          <section id="signification-maison-6">
            <span className="house-six-kicker">{t.meaningKicker}</span>
            <h2>{t.meaningTitle}</h2>{ps(t.meaning)}
          </section>

          <section>
            <h2>{t.domainsTitle}</h2>
            <div className="house-six-info-grid">
              {t.traits.map(([title,symbol,text]:[string,string,string])=>(
                <article className="house-six-info-card" key={title}>
                  <span className="house-six-card-icon">{symbol}</span>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.workTitle}</h2>{ps(t.work)}
            <div className="house-six-highlight-card">
              <div className="house-six-highlight-symbol">Ⅵ</div>
              <div><h3>{t.highlightTitle}</h3><p>{t.highlight}</p></div>
            </div>
          </section>

          <section><h2>{t.organizationTitle}</h2>{ps(t.organization)}</section>
          <section><h2>{t.serviceTitle}</h2>{ps(t.service)}</section>
          <section><h2>{t.wellbeingTitle}</h2>{ps(t.wellbeing)}</section>
          <section><h2>{t.colleaguesTitle}</h2>{ps(t.colleagues)}</section>
          <section><h2>{t.animalsTitle}</h2>{ps(t.animals)}</section>

          <section>
            <h2>{t.strengthsTitle}</h2>
            <div className="house-six-strengths-grid">
              <div className="house-six-list-card">
                <span className="house-six-kicker">{t.strengthsKicker}</span>
                <h3>{t.strengthsSub}</h3>
                <ul>{t.strengths.map((x:string)=><li key={x}>{x}</li>)}</ul>
              </div>
              <div className="house-six-list-card">
                <span className="house-six-kicker">{t.challengesKicker}</span>
                <h3>{t.challengesSub}</h3>
                <ul>{t.challenges.map((x:string)=><li key={x}>{x}</li>)}</ul>
              </div>
            </div>
          </section>

          <section>
            <h2>{t.planetsTitle}</h2>{ps(t.planetsIntro)}
            <div className="house-six-planets-grid">
              {t.planets.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-six-planet-card" key={name}>
                  <div className="house-six-planet-symbol">{symbol}</div>
                  <div><h3>{name} {t.planetLabel}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.signsTitle}</h2>{ps(t.signsIntro)}
            <div className="house-six-signs-grid">
              {t.signs.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-six-sign-card" key={name}>
                  <div className="house-six-sign-symbol">{symbol}</div>
                  <div><h3>{t.houseSignLabel} {name}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.emptyTitle}</h2>{ps(t.empty)}</section>

          <section>
            <h2>{t.rulerTitle}</h2>{ps(t.ruler)}
            <div className="house-six-rulers-grid">
              {t.rulers.map(([name,symbol,ruler]:[string,string,string])=>(
                <div className="house-six-ruler-card" key={name}>
                  <span>{symbol}</span><h3>{name}</h3><p>{ruler}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.comparisonTitle}</h2>
            <div className="house-six-comparison-grid">
              {[t.comparison6,t.comparison12].map(([label,title,text]:[string,string,string])=>(
                <article className="house-six-comparison-card" key={label}>
                  <span className="house-six-kicker">{label}</span>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.evolutionTitle}</h2>{ps(t.evolution)}</section>

          <section>
            <h2>{t.interpretTitle}</h2>
            <div className="house-six-steps">
              {t.steps.map(([number,title,text]:[string,string,string])=>(
                <article className="house-six-step-card" key={number}>
                  <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.natalTitle}</h2>{ps(t.natal)}
            <div className="house-six-cta-card">
              <div>
                <span className="house-six-kicker">{t.ctaKicker}</span>
                <h2>{t.ctaTitle}</h2><p>{t.ctaText}</p>
              </div>
              <Link href="/carte-du-ciel" className="house-six-primary-button">{t.ctaButton}</Link>
            </div>
          </section>

          <section className="house-six-navigation">
            <span className="house-six-kicker">{t.navKicker}</span>
            <h2>{t.navTitle}</h2>
            <div className="house-six-navigation-grid">
              <Link href={`/${locale}/astrologie/maisons/maison-5`} className="house-six-navigation-card">
                <span>Ⅴ</span><div><h3>{t.nav5[0]}</h3><p>{t.nav5[1]}</p></div>
              </Link>
              <Link href={`/${locale}/astrologie/maisons`} className="house-six-navigation-card">
                <span>☾</span><div><h3>{t.navAll[0]}</h3><p>{t.navAll[1]}</p></div>
              </Link>
              <Link href={`/${locale}/astrologie/maisons/maison-7`} className="house-six-navigation-card">
                <span>Ⅶ</span><div><h3>{t.nav7[0]}</h3><p>{t.nav7[1]}</p></div>
              </Link>
            </div>
          </section>

          <section className="house-six-faq">
            <span className="house-six-kicker">{t.faqKicker}</span>
            <h2>{t.faqTitle}</h2>
            <div className="house-six-faq-list">
              {t.faq.map(([q,a]:[string,string])=>(
                <details className="house-six-faq-item" key={q}>
                  <summary>{q}</summary><p>{a}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="house-six-disclaimer">{t.disclaimer}</p>
        </article>
      </main>
    </div>
  );
}
