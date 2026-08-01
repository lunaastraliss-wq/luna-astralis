// app/[locale]/astrologie/maisons/maison-2/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { MAISON_DEUX_TRANSLATIONS } from "@/i18n/pages/astrologie/maisons/maison-2";
import "../../../../astrologie/maisons/maison-2/page.css";

const SITE_URL = "https://luna-astralis.app";
type Props = { params: { locale: string } };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = MAISON_DEUX_TRANSLATIONS[params.locale];
  const url = `${SITE_URL}/${params.locale}/astrologie/maisons/maison-2`;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/astrologie/maisons/maison-2`,
        en: `${SITE_URL}/en/astrologie/maisons/maison-2`,
        es: `${SITE_URL}/es/astrologie/maisons/maison-2`,
        de: `${SITE_URL}/de/astrologie/maisons/maison-2`,
        it: `${SITE_URL}/it/astrologie/maisons/maison-2`,
        pt: `${SITE_URL}/pt/astrologie/maisons/maison-2`,
        "x-default": `${SITE_URL}/fr/astrologie/maisons/maison-2`,
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

export default function MaisonDeuxPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();

  const locale = params.locale;
  const t = MAISON_DEUX_TRANSLATIONS[locale] as any;
  const url = `${SITE_URL}/${locale}/astrologie/maisons/maison-2`;

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
    <div className="house-two-page">
      {schemas.map((schema,index)=>(
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g,"\\u003c") }}
        />
      ))}

      <main className="house-two-wrap">
        <section className="house-two-hero">
          <div className="house-two-badge">{t.badge}</div>
          <h1>{t.title}</h1>
          <p className="house-two-hero-lead">{t.lead}</p>
          <div className="house-two-hero-actions">
            <Link href="/carte-du-ciel" className="house-two-primary-button">{t.create}</Link>
            <a href="#signification-maison-2" className="house-two-secondary-button">{t.discover}</a>
          </div>
        </section>

        <article className="house-two-content">
          <section id="signification-maison-2">
            <span className="house-two-kicker">{t.meaningKicker}</span>
            <h2>{t.meaningTitle}</h2>{ps(t.meaning)}
          </section>

          <section>
            <h2>{t.domainsTitle}</h2>
            <div className="house-two-info-grid">
              {t.traits.map(([title,symbol,text]:[string,string,string])=>(
                <article className="house-two-info-card" key={title}>
                  <span className="house-two-card-icon">{symbol}</span>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.moneyTitle}</h2>{ps(t.money)}
            <div className="house-two-highlight-card">
              <div className="house-two-highlight-symbol">◆</div>
              <div><h3>{t.highlightTitle}</h3><p>{t.highlight}</p></div>
            </div>
          </section>

          <section><h2>{t.valuesTitle}</h2>{ps(t.values)}</section>
          <section><h2>{t.talentsTitle}</h2>{ps(t.talents)}</section>

          <section>
            <h2>{t.strengthsTitle}</h2>
            <div className="house-two-strengths-grid">
              <div className="house-two-list-card">
                <span className="house-two-kicker">{t.strengthsKicker}</span>
                <h3>{t.strengthsSub}</h3>
                <ul>{t.strengths.map((x:string)=><li key={x}>{x}</li>)}</ul>
              </div>
              <div className="house-two-list-card">
                <span className="house-two-kicker">{t.challengesKicker}</span>
                <h3>{t.challengesSub}</h3>
                <ul>{t.challenges.map((x:string)=><li key={x}>{x}</li>)}</ul>
              </div>
            </div>
          </section>

          <section>
            <h2>{t.planetsTitle}</h2>{ps(t.planetsIntro)}
            <div className="house-two-planets-grid">
              {t.planets.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-two-planet-card" key={name}>
                  <div className="house-two-planet-symbol">{symbol}</div>
                  <div><h3>{name} {t.planetLabel}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.signsTitle}</h2>{ps(t.signsIntro)}
            <div className="house-two-signs-grid">
              {t.signs.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-two-sign-card" key={name}>
                  <div className="house-two-sign-symbol">{symbol}</div>
                  <div><h3>{t.houseSignLabel} {name}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.emptyTitle}</h2>{ps(t.empty)}</section>

          <section>
            <h2>{t.rulerTitle}</h2>{ps(t.ruler)}
            <div className="house-two-rulers-grid">
              {t.rulers.map(([name,symbol,ruler]:[string,string,string])=>(
                <div className="house-two-ruler-card" key={name}>
                  <span>{symbol}</span><h3>{name}</h3><p>{ruler}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.comparisonTitle}</h2>
            <div className="house-two-comparison-grid">
              {[t.comparison2,t.comparison8].map(([label,title,text]:[string,string,string])=>(
                <article className="house-two-comparison-card" key={label}>
                  <span className="house-two-kicker">{label}</span>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.evolutionTitle}</h2>{ps(t.evolution)}</section>

          <section>
            <h2>{t.interpretTitle}</h2>
            <div className="house-two-steps">
              {t.steps.map(([number,title,text]:[string,string,string])=>(
                <article className="house-two-step-card" key={number}>
                  <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.natalTitle}</h2>{ps(t.natal)}
            <div className="house-two-cta-card">
              <div>
                <span className="house-two-kicker">{t.ctaKicker}</span>
                <h2>{t.ctaTitle}</h2><p>{t.ctaText}</p>
              </div>
              <Link href="/carte-du-ciel" className="house-two-primary-button">{t.ctaButton}</Link>
            </div>
          </section>

          <section className="house-two-navigation">
            <span className="house-two-kicker">{t.navKicker}</span>
            <h2>{t.navTitle}</h2>
            <div className="house-two-navigation-grid">
              <Link href={`/${locale}/astrologie/maisons/maison-1`} className="house-two-navigation-card">
                <span>Ⅰ</span><div><h3>{t.nav1[0]}</h3><p>{t.nav1[1]}</p></div>
              </Link>
              <Link href={`/${locale}/astrologie/maisons`} className="house-two-navigation-card">
                <span>☾</span><div><h3>{t.navAll[0]}</h3><p>{t.navAll[1]}</p></div>
              </Link>
              <Link href={`/${locale}/astrologie/maisons/maison-3`} className="house-two-navigation-card">
                <span>Ⅲ</span><div><h3>{t.nav3[0]}</h3><p>{t.nav3[1]}</p></div>
              </Link>
            </div>
          </section>

          <section className="house-two-faq">
            <span className="house-two-kicker">{t.faqKicker}</span>
            <h2>{t.faqTitle}</h2>
            <div className="house-two-faq-list">
              {t.faq.map(([q,a]:[string,string])=>(
                <details className="house-two-faq-item" key={q}>
                  <summary>{q}</summary><p>{a}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="house-two-disclaimer">{t.disclaimer}</p>
        </article>
      </main>
    </div>
  );
}
