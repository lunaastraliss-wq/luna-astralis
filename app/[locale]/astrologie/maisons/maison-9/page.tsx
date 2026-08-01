// app/[locale]/astrologie/maisons/maison-9/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { MAISON_NEUF_TRANSLATIONS } from "@/i18n/pages/astrologie/maisons/maison-9";
import "../../../../astrologie/maisons/maison-9/page.css";

const SITE_URL = "https://luna-astralis.app";
type Props = { params: { locale: string } };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = MAISON_NEUF_TRANSLATIONS[params.locale];
  const url = `${SITE_URL}/${params.locale}/astrologie/maisons/maison-9`;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/astrologie/maisons/maison-9`,
        en: `${SITE_URL}/en/astrologie/maisons/maison-9`,
        es: `${SITE_URL}/es/astrologie/maisons/maison-9`,
        de: `${SITE_URL}/de/astrologie/maisons/maison-9`,
        it: `${SITE_URL}/it/astrologie/maisons/maison-9`,
        pt: `${SITE_URL}/pt/astrologie/maisons/maison-9`,
        "x-default": `${SITE_URL}/fr/astrologie/maisons/maison-9`,
      },
    },
    openGraph: { title:t.meta.ogTitle, description:t.meta.ogDescription, url, siteName:"Luna Astralis", locale:t.meta.locale, type:"article" },
    twitter: { card:"summary_large_image", title:t.meta.twitterTitle, description:t.meta.twitterDescription },
    robots: { index:true, follow:true },
  };
}

export default function MaisonNeufPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = MAISON_NEUF_TRANSLATIONS[locale] as any;
  const url = `${SITE_URL}/${locale}/astrologie/maisons/maison-9`;

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
    <div className="house-nine-page">
      {schemas.map((schema,index)=>(
        <script key={index} type="application/ld+json"
          dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
      ))}

      <main className="house-nine-wrap">
        <section className="house-nine-hero">
          <div className="house-nine-badge">{t.badge}</div>
          <h1>{t.title}</h1>
          <p className="house-nine-hero-lead">{t.lead}</p>
          <div className="house-nine-hero-actions">
            <Link href="/carte-du-ciel" className="house-nine-primary-button">{t.create}</Link>
            <a href="#signification-maison-9" className="house-nine-secondary-button">{t.discover}</a>
          </div>
        </section>

        <article className="house-nine-content">
          <section id="signification-maison-9">
            <span className="house-nine-kicker">{t.meaningKicker}</span>
            <h2>{t.meaningTitle}</h2>{ps(t.meaning)}
          </section>

          <section>
            <h2>{t.domainsTitle}</h2>
            <div className="house-nine-info-grid">
              {t.traits.map(([title,symbol,text]:[string,string,string])=>(
                <article className="house-nine-info-card" key={title}>
                  <span className="house-nine-card-icon">{symbol}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.travelTitle}</h2>{ps(t.travel)}
            <div className="house-nine-highlight-card">
              <div className="house-nine-highlight-symbol">Ⅸ</div>
              <div><h3>{t.highlightTitle}</h3><p>{t.highlight}</p>
                <Link href={`/${locale}/astrologie/maisons`} className="house-nine-text-link">{t.highlightLink}</Link>
              </div>
            </div>
          </section>

          <section><h2>{t.studyTitle}</h2>{ps(t.study)}</section>
          <section><h2>{t.philosophyTitle}</h2>{ps(t.philosophy)}</section>
          <section><h2>{t.beliefTitle}</h2>{ps(t.belief)}</section>
          <section><h2>{t.teachingTitle}</h2>{ps(t.teaching)}</section>
          <section><h2>{t.publishingTitle}</h2>{ps(t.publishing)}</section>
          <section><h2>{t.languagesTitle}</h2>{ps(t.languages)}</section>
          <section><h2>{t.lawTitle}</h2>{ps(t.law)}</section>

          <section>
            <h2>{t.strengthsTitle}</h2>
            <div className="house-nine-strengths-grid">
              <div className="house-nine-list-card">
                <span className="house-nine-kicker">{t.strengthsKicker}</span><h3>{t.strengthsSub}</h3>
                <ul>{t.strengths.map((x:string)=><li key={x}>{x}</li>)}</ul>
              </div>
              <div className="house-nine-list-card">
                <span className="house-nine-kicker">{t.challengesKicker}</span><h3>{t.challengesSub}</h3>
                <ul>{t.challenges.map((x:string)=><li key={x}>{x}</li>)}</ul>
              </div>
            </div>
          </section>

          <section>
            <h2>{t.planetsTitle}</h2>{ps(t.planetsIntro)}
            <div className="house-nine-planets-grid">
              {t.planets.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-nine-planet-card" key={name}>
                  <div className="house-nine-planet-symbol">{symbol}</div>
                  <div><h3>{name} {t.planetLabel}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.signsTitle}</h2>{ps(t.signsIntro)}
            <div className="house-nine-signs-grid">
              {t.signs.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-nine-sign-card" key={name}>
                  <div className="house-nine-sign-symbol">{symbol}</div>
                  <div><h3>{t.houseSignLabel} {name}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.emptyTitle}</h2>{ps(t.empty)}</section>

          <section>
            <h2>{t.rulerTitle}</h2>{ps(t.ruler)}
            <div className="house-nine-rulers-grid">
              {t.rulers.map(([name,symbol,ruler]:[string,string,string])=>(
                <div className="house-nine-ruler-card" key={name}><span>{symbol}</span><h3>{name}</h3><p>{ruler}</p></div>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.comparison39Title}</h2>
            <div className="house-nine-comparison-grid">
              {[t.comparison3,t.comparison9].map(([label,title,text]:[string,string,string])=>(
                <article className="house-nine-comparison-card" key={label}>
                  <span className="house-nine-kicker">{label}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.comparison89Title}</h2>
            <div className="house-nine-comparison-grid">
              {[t.comparison8,t.comparison9b].map(([label,title,text]:[string,string,string])=>(
                <article className="house-nine-comparison-card" key={`${label}-${title}`}>
                  <span className="house-nine-kicker">{label}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.evolutionTitle}</h2>{ps(t.evolution)}</section>

          <section>
            <h2>{t.interpretTitle}</h2>
            <div className="house-nine-steps">
              {t.steps.map(([number,title,text]:[string,string,string])=>(
                <article className="house-nine-step-card" key={number}>
                  <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.natalTitle}</h2>{ps(t.natal)}
            <div className="house-nine-cta-card">
              <div><span className="house-nine-kicker">{t.ctaKicker}</span><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p></div>
              <Link href="/carte-du-ciel" className="house-nine-primary-button">{t.ctaButton}</Link>
            </div>
          </section>

          <section className="house-nine-navigation">
            <span className="house-nine-kicker">{t.navKicker}</span><h2>{t.navTitle}</h2>
            <div className="house-nine-navigation-grid">
              <Link href={`/${locale}/astrologie/maisons/maison-8`} className="house-nine-navigation-card"><span>Ⅷ</span><div><h3>{t.nav8[0]}</h3><p>{t.nav8[1]}</p></div></Link>
              <Link href={`/${locale}/astrologie/maisons`} className="house-nine-navigation-card"><span>☾</span><div><h3>{t.navAll[0]}</h3><p>{t.navAll[1]}</p></div></Link>
              <Link href={`/${locale}/astrologie/maisons/maison-10`} className="house-nine-navigation-card"><span>Ⅹ</span><div><h3>{t.nav10[0]}</h3><p>{t.nav10[1]}</p></div></Link>
            </div>
          </section>

          <section className="house-nine-faq">
            <span className="house-nine-kicker">{t.faqKicker}</span><h2>{t.faqTitle}</h2>
            <div className="house-nine-faq-list">
              {t.faq.map(([q,a]:[string,string])=>(
                <details className="house-nine-faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>
              ))}
            </div>
          </section>

          <p className="house-nine-disclaimer">{t.disclaimer}</p>
        </article>
      </main>
    </div>
  );
}
