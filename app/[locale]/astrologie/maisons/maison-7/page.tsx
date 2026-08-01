// app/[locale]/astrologie/maisons/maison-7/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { MAISON_SEPT_TRANSLATIONS } from "@/i18n/pages/astrologie/maisons/maison-7";
import "../../../../astrologie/maisons/maison-7/page.css";

const SITE_URL = "https://luna-astralis.app";
type Props = { params: { locale: string } };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = MAISON_SEPT_TRANSLATIONS[params.locale];
  const url = `${SITE_URL}/${params.locale}/astrologie/maisons/maison-7`;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/astrologie/maisons/maison-7`,
        en: `${SITE_URL}/en/astrologie/maisons/maison-7`,
        es: `${SITE_URL}/es/astrologie/maisons/maison-7`,
        de: `${SITE_URL}/de/astrologie/maisons/maison-7`,
        it: `${SITE_URL}/it/astrologie/maisons/maison-7`,
        pt: `${SITE_URL}/pt/astrologie/maisons/maison-7`,
        "x-default": `${SITE_URL}/fr/astrologie/maisons/maison-7`,
      },
    },
    openGraph: { title:t.meta.ogTitle, description:t.meta.ogDescription, url, siteName:"Luna Astralis", locale:t.meta.locale, type:"article" },
    twitter: { card:"summary_large_image", title:t.meta.twitterTitle, description:t.meta.twitterDescription },
    robots: { index:true, follow:true },
  };
}

export default function MaisonSeptPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = MAISON_SEPT_TRANSLATIONS[locale] as any;
  const url = `${SITE_URL}/${locale}/astrologie/maisons/maison-7`;

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
    <div className="house-seven-page">
      {schemas.map((schema,index)=>(
        <script key={index} type="application/ld+json"
          dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
      ))}

      <main className="house-seven-wrap">
        <section className="house-seven-hero">
          <div className="house-seven-badge">{t.badge}</div>
          <h1>{t.title}</h1>
          <p className="house-seven-hero-lead">{t.lead}</p>
          <div className="house-seven-hero-actions">
            <Link href="/carte-du-ciel" className="house-seven-primary-button">{t.create}</Link>
            <a href="#signification-maison-7" className="house-seven-secondary-button">{t.discover}</a>
          </div>
        </section>

        <article className="house-seven-content">
          <section id="signification-maison-7">
            <span className="house-seven-kicker">{t.meaningKicker}</span>
            <h2>{t.meaningTitle}</h2>{ps(t.meaning)}
          </section>

          <section>
            <h2>{t.domainsTitle}</h2>
            <div className="house-seven-info-grid">
              {t.traits.map(([title,symbol,text]:[string,string,string])=>(
                <article className="house-seven-info-card" key={title}>
                  <span className="house-seven-card-icon">{symbol}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.descTitle}</h2>{ps(t.desc)}
            <div className="house-seven-highlight-card">
              <div className="house-seven-highlight-symbol">DSC</div>
              <div><h3>{t.highlightTitle}</h3><p>{t.highlight}</p>
                <Link href={`/${locale}/astrologie/ascendant`} className="house-seven-text-link">{t.highlightLink}</Link>
              </div>
            </div>
          </section>

          <section><h2>{t.coupleTitle}</h2>{ps(t.couple)}</section>
          <section><h2>{t.businessTitle}</h2>{ps(t.business)}</section>
          <section><h2>{t.projectionTitle}</h2>{ps(t.projection)}</section>
          <section><h2>{t.conflictTitle}</h2>{ps(t.conflict)}</section>
          <section><h2>{t.balanceTitle}</h2>{ps(t.balance)}</section>

          <section>
            <h2>{t.strengthsTitle}</h2>
            <div className="house-seven-strengths-grid">
              <div className="house-seven-list-card">
                <span className="house-seven-kicker">{t.strengthsKicker}</span><h3>{t.strengthsSub}</h3>
                <ul>{t.strengths.map((x:string)=><li key={x}>{x}</li>)}</ul>
              </div>
              <div className="house-seven-list-card">
                <span className="house-seven-kicker">{t.challengesKicker}</span><h3>{t.challengesSub}</h3>
                <ul>{t.challenges.map((x:string)=><li key={x}>{x}</li>)}</ul>
              </div>
            </div>
          </section>

          <section>
            <h2>{t.planetsTitle}</h2>{ps(t.planetsIntro)}
            <div className="house-seven-planets-grid">
              {t.planets.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-seven-planet-card" key={name}>
                  <div className="house-seven-planet-symbol">{symbol}</div>
                  <div><h3>{name} {t.planetLabel}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.signsTitle}</h2>{ps(t.signsIntro)}
            <div className="house-seven-signs-grid">
              {t.signs.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-seven-sign-card" key={name}>
                  <div className="house-seven-sign-symbol">{symbol}</div>
                  <div><h3>{t.houseSignLabel} {name}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.emptyTitle}</h2>{ps(t.empty)}</section>

          <section>
            <h2>{t.rulerTitle}</h2>{ps(t.ruler)}
            <div className="house-seven-rulers-grid">
              {t.rulers.map(([name,symbol,ruler]:[string,string,string])=>(
                <div className="house-seven-ruler-card" key={name}><span>{symbol}</span><h3>{name}</h3><p>{ruler}</p></div>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.comparison17Title}</h2>
            <div className="house-seven-comparison-grid">
              {[t.comparison1,t.comparison7].map(([label,title,text]:[string,string,string])=>(
                <article className="house-seven-comparison-card" key={label}>
                  <span className="house-seven-kicker">{label}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.comparison57Title}</h2>
            <div className="house-seven-comparison-grid">
              {[t.comparison5,t.comparison7b].map(([label,title,text]:[string,string,string])=>(
                <article className="house-seven-comparison-card" key={`${label}-${title}`}>
                  <span className="house-seven-kicker">{label}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.evolutionTitle}</h2>{ps(t.evolution)}</section>

          <section>
            <h2>{t.interpretTitle}</h2>
            <div className="house-seven-steps">
              {t.steps.map(([number,title,text]:[string,string,string])=>(
                <article className="house-seven-step-card" key={number}>
                  <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.natalTitle}</h2>{ps(t.natal)}
            <div className="house-seven-cta-card">
              <div><span className="house-seven-kicker">{t.ctaKicker}</span><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p></div>
              <Link href="/carte-du-ciel" className="house-seven-primary-button">{t.ctaButton}</Link>
            </div>
          </section>

          <section className="house-seven-navigation">
            <span className="house-seven-kicker">{t.navKicker}</span><h2>{t.navTitle}</h2>
            <div className="house-seven-navigation-grid">
              <Link href={`/${locale}/astrologie/maisons/maison-6`} className="house-seven-navigation-card"><span>Ⅵ</span><div><h3>{t.nav6[0]}</h3><p>{t.nav6[1]}</p></div></Link>
              <Link href={`/${locale}/astrologie/maisons`} className="house-seven-navigation-card"><span>☾</span><div><h3>{t.navAll[0]}</h3><p>{t.navAll[1]}</p></div></Link>
              <Link href={`/${locale}/astrologie/maisons/maison-8`} className="house-seven-navigation-card"><span>Ⅷ</span><div><h3>{t.nav8[0]}</h3><p>{t.nav8[1]}</p></div></Link>
            </div>
          </section>

          <section className="house-seven-faq">
            <span className="house-seven-kicker">{t.faqKicker}</span><h2>{t.faqTitle}</h2>
            <div className="house-seven-faq-list">
              {t.faq.map(([q,a]:[string,string])=>(
                <details className="house-seven-faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>
              ))}
            </div>
          </section>

          <p className="house-seven-disclaimer">{t.disclaimer}</p>
        </article>
      </main>
    </div>
  );
}
