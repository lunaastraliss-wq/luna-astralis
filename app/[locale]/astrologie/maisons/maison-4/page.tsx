// app/[locale]/astrologie/maisons/maison-4/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { MAISON_QUATRE_TRANSLATIONS } from "@/i18n/pages/astrologie/maisons/maison-4";
import "../../../../astrologie/maisons/maison-4/page.css";

const SITE_URL = "https://luna-astralis.app";
type Props = { params: { locale: string } };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = MAISON_QUATRE_TRANSLATIONS[params.locale];
  const url = `${SITE_URL}/${params.locale}/astrologie/maisons/maison-4`;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/astrologie/maisons/maison-4`,
        en: `${SITE_URL}/en/astrologie/maisons/maison-4`,
        es: `${SITE_URL}/es/astrologie/maisons/maison-4`,
        de: `${SITE_URL}/de/astrologie/maisons/maison-4`,
        it: `${SITE_URL}/it/astrologie/maisons/maison-4`,
        pt: `${SITE_URL}/pt/astrologie/maisons/maison-4`,
        "x-default": `${SITE_URL}/fr/astrologie/maisons/maison-4`,
      },
    },
    openGraph: { title:t.meta.ogTitle, description:t.meta.ogDescription, url, siteName:"Luna Astralis", locale:t.meta.locale, type:"article" },
    twitter: { card:"summary_large_image", title:t.meta.twitterTitle, description:t.meta.twitterDescription },
    robots: { index:true, follow:true },
  };
}

export default function MaisonQuatrePage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = MAISON_QUATRE_TRANSLATIONS[locale] as any;
  const url = `${SITE_URL}/${locale}/astrologie/maisons/maison-4`;

  const schemas = [
    {
      "@context":"https://schema.org","@type":"Article",
      headline:t.meta.ogTitle,description:t.meta.ogDescription,
      inLanguage:t.meta.language,mainEntityOfPage:url,
      publisher:{"@type":"Organization",name:"Luna Astralis",url:SITE_URL},
    },
    {
      "@context":"https://schema.org","@type":"BreadcrumbList",
      itemListElement:[
        {"@type":"ListItem",position:1,name:"Luna Astralis",item:`${SITE_URL}/${locale}`},
        {"@type":"ListItem",position:2,name:t.navKicker,item:`${SITE_URL}/${locale}/astrologie/maisons`},
        {"@type":"ListItem",position:3,name:t.title,item:url},
      ],
    },
    {
      "@context":"https://schema.org","@type":"FAQPage",
      mainEntity:t.faq.map(([q,a]:[string,string])=>({
        "@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a},
      })),
    },
  ];

  const ps=(items:string[])=>items.map((p)=><p key={p}>{p}</p>);

  return (
    <div className="house-four-page">
      {schemas.map((schema,index)=>(
        <script key={index} type="application/ld+json"
          dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
      ))}

      <main className="house-four-wrap">
        <section className="house-four-hero">
          <div className="house-four-badge">{t.badge}</div>
          <h1>{t.title}</h1>
          <p className="house-four-hero-lead">{t.lead}</p>
          <div className="house-four-hero-actions">
            <Link href="/carte-du-ciel" className="house-four-primary-button">{t.create}</Link>
            <a href="#signification-maison-4" className="house-four-secondary-button">{t.discover}</a>
          </div>
        </section>

        <article className="house-four-content">
          <section id="signification-maison-4">
            <span className="house-four-kicker">{t.meaningKicker}</span>
            <h2>{t.meaningTitle}</h2>{ps(t.meaning)}
          </section>

          <section>
            <h2>{t.domainsTitle}</h2>
            <div className="house-four-info-grid">
              {t.traits.map(([title,symbol,text]:[string,string,string])=>(
                <article className="house-four-info-card" key={title}>
                  <span className="house-four-card-icon">{symbol}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.icTitle}</h2>{ps(t.ic)}
            <div className="house-four-highlight-card">
              <div className="house-four-highlight-symbol">IC</div>
              <div><h3>{t.highlightTitle}</h3><p>{t.highlight}</p></div>
            </div>
          </section>

          <section><h2>{t.homeTitle}</h2>{ps(t.home)}</section>
          <section><h2>{t.familyTitle}</h2>{ps(t.family)}</section>
          <section><h2>{t.securityTitle}</h2>{ps(t.security)}</section>

          <section>
            <h2>{t.strengthsTitle}</h2>
            <div className="house-four-strengths-grid">
              <div className="house-four-list-card">
                <span className="house-four-kicker">{t.strengthsKicker}</span><h3>{t.strengthsSub}</h3>
                <ul>{t.strengths.map((x:string)=><li key={x}>{x}</li>)}</ul>
              </div>
              <div className="house-four-list-card">
                <span className="house-four-kicker">{t.challengesKicker}</span><h3>{t.challengesSub}</h3>
                <ul>{t.challenges.map((x:string)=><li key={x}>{x}</li>)}</ul>
              </div>
            </div>
          </section>

          <section>
            <h2>{t.planetsTitle}</h2>{ps(t.planetsIntro)}
            <div className="house-four-planets-grid">
              {t.planets.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-four-planet-card" key={name}>
                  <div className="house-four-planet-symbol">{symbol}</div>
                  <div><h3>{name} {t.planetLabel}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.signsTitle}</h2>{ps(t.signsIntro)}
            <div className="house-four-signs-grid">
              {t.signs.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-four-sign-card" key={name}>
                  <div className="house-four-sign-symbol">{symbol}</div>
                  <div><h3>{t.houseSignLabel} {name}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.emptyTitle}</h2>{ps(t.empty)}</section>

          <section>
            <h2>{t.rulerTitle}</h2>{ps(t.ruler)}
            <div className="house-four-rulers-grid">
              {t.rulers.map(([name,symbol,ruler]:[string,string,string])=>(
                <div className="house-four-ruler-card" key={name}><span>{symbol}</span><h3>{name}</h3><p>{ruler}</p></div>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.comparisonTitle}</h2>
            <div className="house-four-comparison-grid">
              {[t.comparison4,t.comparison10].map(([label,title,text]:[string,string,string])=>(
                <article className="house-four-comparison-card" key={label}>
                  <span className="house-four-kicker">{label}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.evolutionTitle}</h2>{ps(t.evolution)}</section>

          <section>
            <h2>{t.interpretTitle}</h2>
            <div className="house-four-steps">
              {t.steps.map(([number,title,text]:[string,string,string])=>(
                <article className="house-four-step-card" key={number}>
                  <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.natalTitle}</h2>{ps(t.natal)}
            <div className="house-four-cta-card">
              <div><span className="house-four-kicker">{t.ctaKicker}</span><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p></div>
              <Link href="/carte-du-ciel" className="house-four-primary-button">{t.ctaButton}</Link>
            </div>
          </section>

          <section className="house-four-navigation">
            <span className="house-four-kicker">{t.navKicker}</span><h2>{t.navTitle}</h2>
            <div className="house-four-navigation-grid">
              <Link href={`/${locale}/astrologie/maisons/maison-3`} className="house-four-navigation-card"><span>Ⅲ</span><div><h3>{t.nav3[0]}</h3><p>{t.nav3[1]}</p></div></Link>
              <Link href={`/${locale}/astrologie/maisons`} className="house-four-navigation-card"><span>☾</span><div><h3>{t.navAll[0]}</h3><p>{t.navAll[1]}</p></div></Link>
              <Link href={`/${locale}/astrologie/maisons/maison-5`} className="house-four-navigation-card"><span>Ⅴ</span><div><h3>{t.nav5[0]}</h3><p>{t.nav5[1]}</p></div></Link>
            </div>
          </section>

          <section className="house-four-faq">
            <span className="house-four-kicker">{t.faqKicker}</span><h2>{t.faqTitle}</h2>
            <div className="house-four-faq-list">
              {t.faq.map(([q,a]:[string,string])=>(
                <details className="house-four-faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>
              ))}
            </div>
          </section>

          <p className="house-four-disclaimer">{t.disclaimer}</p>
        </article>
      </main>
    </div>
  );
}
