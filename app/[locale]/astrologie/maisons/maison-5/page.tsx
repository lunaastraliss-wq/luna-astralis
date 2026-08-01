// app/[locale]/astrologie/maisons/maison-5/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { MAISON_CINQ_TRANSLATIONS } from "@/i18n/pages/astrologie/maisons/maison-5";
import "../../../../astrologie/maisons/maison-5/page.css";

const SITE_URL = "https://luna-astralis.app";
type Props = { params: { locale: string } };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = MAISON_CINQ_TRANSLATIONS[params.locale];
  const url = `${SITE_URL}/${params.locale}/astrologie/maisons/maison-5`;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/astrologie/maisons/maison-5`,
        en: `${SITE_URL}/en/astrologie/maisons/maison-5`,
        es: `${SITE_URL}/es/astrologie/maisons/maison-5`,
        de: `${SITE_URL}/de/astrologie/maisons/maison-5`,
        it: `${SITE_URL}/it/astrologie/maisons/maison-5`,
        pt: `${SITE_URL}/pt/astrologie/maisons/maison-5`,
        "x-default": `${SITE_URL}/fr/astrologie/maisons/maison-5`,
      },
    },
    openGraph: { title:t.meta.ogTitle, description:t.meta.ogDescription, url, siteName:"Luna Astralis", locale:t.meta.locale, type:"article" },
    twitter: { card:"summary_large_image", title:t.meta.twitterTitle, description:t.meta.twitterDescription },
    robots: { index:true, follow:true },
  };
}

export default function MaisonCinqPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = MAISON_CINQ_TRANSLATIONS[locale] as any;
  const url = `${SITE_URL}/${locale}/astrologie/maisons/maison-5`;

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
    <div className="house-five-page">
      {schemas.map((schema,index)=>(
        <script key={index} type="application/ld+json"
          dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
      ))}

      <main className="house-five-wrap">
        <section className="house-five-hero">
          <div className="house-five-badge">{t.badge}</div>
          <h1>{t.title}</h1>
          <p className="house-five-hero-lead">{t.lead}</p>
          <div className="house-five-hero-actions">
            <Link href="/carte-du-ciel" className="house-five-primary-button">{t.create}</Link>
            <a href="#signification-maison-5" className="house-five-secondary-button">{t.discover}</a>
          </div>
        </section>

        <article className="house-five-content">
          <section id="signification-maison-5">
            <span className="house-five-kicker">{t.meaningKicker}</span>
            <h2>{t.meaningTitle}</h2>{ps(t.meaning)}
          </section>

          <section>
            <h2>{t.domainsTitle}</h2>
            <div className="house-five-info-grid">
              {t.traits.map(([title,symbol,text]:[string,string,string])=>(
                <article className="house-five-info-card" key={title}>
                  <span className="house-five-card-icon">{symbol}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.creativityTitle}</h2>{ps(t.creativity)}
            <div className="house-five-highlight-card">
              <div className="house-five-highlight-symbol">✦</div>
              <div><h3>{t.highlightTitle}</h3><p>{t.highlight}</p></div>
            </div>
          </section>

          <section><h2>{t.loveTitle}</h2>{ps(t.love)}</section>
          <section><h2>{t.childrenTitle}</h2>{ps(t.children)}</section>
          <section><h2>{t.pleasureTitle}</h2>{ps(t.pleasure)}</section>
          <section><h2>{t.riskTitle}</h2>{ps(t.risk)}</section>

          <section>
            <h2>{t.strengthsTitle}</h2>
            <div className="house-five-strengths-grid">
              <div className="house-five-list-card">
                <span className="house-five-kicker">{t.strengthsKicker}</span><h3>{t.strengthsSub}</h3>
                <ul>{t.strengths.map((x:string)=><li key={x}>{x}</li>)}</ul>
              </div>
              <div className="house-five-list-card">
                <span className="house-five-kicker">{t.challengesKicker}</span><h3>{t.challengesSub}</h3>
                <ul>{t.challenges.map((x:string)=><li key={x}>{x}</li>)}</ul>
              </div>
            </div>
          </section>

          <section>
            <h2>{t.planetsTitle}</h2>{ps(t.planetsIntro)}
            <div className="house-five-planets-grid">
              {t.planets.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-five-planet-card" key={name}>
                  <div className="house-five-planet-symbol">{symbol}</div>
                  <div><h3>{name} {t.planetLabel}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.signsTitle}</h2>{ps(t.signsIntro)}
            <div className="house-five-signs-grid">
              {t.signs.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-five-sign-card" key={name}>
                  <div className="house-five-sign-symbol">{symbol}</div>
                  <div><h3>{t.houseSignLabel} {name}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.emptyTitle}</h2>{ps(t.empty)}</section>

          <section>
            <h2>{t.rulerTitle}</h2>{ps(t.ruler)}
            <div className="house-five-rulers-grid">
              {t.rulers.map(([name,symbol,ruler]:[string,string,string])=>(
                <div className="house-five-ruler-card" key={name}><span>{symbol}</span><h3>{name}</h3><p>{ruler}</p></div>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.comparisonTitle}</h2>
            <div className="house-five-comparison-grid">
              {[t.comparison5,t.comparison11].map(([label,title,text]:[string,string,string])=>(
                <article className="house-five-comparison-card" key={label}>
                  <span className="house-five-kicker">{label}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.evolutionTitle}</h2>{ps(t.evolution)}</section>

          <section>
            <h2>{t.interpretTitle}</h2>
            <div className="house-five-steps">
              {t.steps.map(([number,title,text]:[string,string,string])=>(
                <article className="house-five-step-card" key={number}>
                  <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.natalTitle}</h2>{ps(t.natal)}
            <div className="house-five-cta-card">
              <div><span className="house-five-kicker">{t.ctaKicker}</span><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p></div>
              <Link href="/carte-du-ciel" className="house-five-primary-button">{t.ctaButton}</Link>
            </div>
          </section>

          <section className="house-five-navigation">
            <span className="house-five-kicker">{t.navKicker}</span><h2>{t.navTitle}</h2>
            <div className="house-five-navigation-grid">
              <Link href={`/${locale}/astrologie/maisons/maison-4`} className="house-five-navigation-card"><span>Ⅳ</span><div><h3>{t.nav4[0]}</h3><p>{t.nav4[1]}</p></div></Link>
              <Link href={`/${locale}/astrologie/maisons`} className="house-five-navigation-card"><span>☾</span><div><h3>{t.navAll[0]}</h3><p>{t.navAll[1]}</p></div></Link>
              <Link href={`/${locale}/astrologie/maisons/maison-6`} className="house-five-navigation-card"><span>Ⅵ</span><div><h3>{t.nav6[0]}</h3><p>{t.nav6[1]}</p></div></Link>
            </div>
          </section>

          <section className="house-five-faq">
            <span className="house-five-kicker">{t.faqKicker}</span><h2>{t.faqTitle}</h2>
            <div className="house-five-faq-list">
              {t.faq.map(([q,a]:[string,string])=>(
                <details className="house-five-faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>
              ))}
            </div>
          </section>

          <p className="house-five-disclaimer">{t.disclaimer}</p>
        </article>
      </main>
    </div>
  );
}
