// app/[locale]/astrologie/maisons/maison-8/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { MAISON_HUIT_TRANSLATIONS } from "@/i18n/pages/astrologie/maisons/maison-8";
import "../../../../astrologie/maisons/maison-8/page.css";

const SITE_URL = "https://luna-astralis.app";
type Props = { params: { locale: string } };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = MAISON_HUIT_TRANSLATIONS[params.locale];
  const url = `${SITE_URL}/${params.locale}/astrologie/maisons/maison-8`;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/astrologie/maisons/maison-8`,
        en: `${SITE_URL}/en/astrologie/maisons/maison-8`,
        es: `${SITE_URL}/es/astrologie/maisons/maison-8`,
        de: `${SITE_URL}/de/astrologie/maisons/maison-8`,
        it: `${SITE_URL}/it/astrologie/maisons/maison-8`,
        pt: `${SITE_URL}/pt/astrologie/maisons/maison-8`,
        "x-default": `${SITE_URL}/fr/astrologie/maisons/maison-8`,
      },
    },
    openGraph: { title:t.meta.ogTitle, description:t.meta.ogDescription, url, siteName:"Luna Astralis", locale:t.meta.locale, type:"article" },
    twitter: { card:"summary_large_image", title:t.meta.twitterTitle, description:t.meta.twitterDescription },
    robots: { index:true, follow:true },
  };
}

export default function MaisonHuitPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = MAISON_HUIT_TRANSLATIONS[locale] as any;
  const url = `${SITE_URL}/${locale}/astrologie/maisons/maison-8`;

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
    <div className="house-eight-page">
      {schemas.map((schema,index)=>(
        <script key={index} type="application/ld+json"
          dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
      ))}

      <main className="house-eight-wrap">
        <section className="house-eight-hero">
          <div className="house-eight-badge">{t.badge}</div>
          <h1>{t.title}</h1>
          <p className="house-eight-hero-lead">{t.lead}</p>
          <div className="house-eight-hero-actions">
            <Link href="/carte-du-ciel" className="house-eight-primary-button">{t.create}</Link>
            <a href="#signification-maison-8" className="house-eight-secondary-button">{t.discover}</a>
          </div>
        </section>

        <article className="house-eight-content">
          <section id="signification-maison-8">
            <span className="house-eight-kicker">{t.meaningKicker}</span>
            <h2>{t.meaningTitle}</h2>{ps(t.meaning)}
          </section>

          <section>
            <h2>{t.domainsTitle}</h2>
            <div className="house-eight-info-grid">
              {t.traits.map(([title,symbol,text]:[string,string,string])=>(
                <article className="house-eight-info-card" key={title}>
                  <span className="house-eight-card-icon">{symbol}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.rebirthTitle}</h2>{ps(t.rebirth)}
            <div className="house-eight-highlight-card">
              <div className="house-eight-highlight-symbol">Ⅷ</div>
              <div><h3>{t.highlightTitle}</h3><p>{t.highlight}</p>
                <Link href={`/${locale}/astrologie/maisons`} className="house-eight-text-link">{t.highlightLink}</Link>
              </div>
            </div>
          </section>

          <section><h2>{t.intimacyTitle}</h2>{ps(t.intimacy)}</section>
          <section><h2>{t.sexualityTitle}</h2>{ps(t.sexuality)}</section>
          <section><h2>{t.resourcesTitle}</h2>{ps(t.resources)}</section>
          <section><h2>{t.inheritanceTitle}</h2>{ps(t.inheritance)}</section>
          <section><h2>{t.psychologyTitle}</h2>{ps(t.psychology)}</section>
          <section><h2>{t.powerTitle}</h2>{ps(t.power)}</section>
          <section><h2>{t.resilienceTitle}</h2>{ps(t.resilience)}</section>

          <section>
            <h2>{t.strengthsTitle}</h2>
            <div className="house-eight-strengths-grid">
              <div className="house-eight-list-card">
                <span className="house-eight-kicker">{t.strengthsKicker}</span><h3>{t.strengthsSub}</h3>
                <ul>{t.strengths.map((x:string)=><li key={x}>{x}</li>)}</ul>
              </div>
              <div className="house-eight-list-card">
                <span className="house-eight-kicker">{t.challengesKicker}</span><h3>{t.challengesSub}</h3>
                <ul>{t.challenges.map((x:string)=><li key={x}>{x}</li>)}</ul>
              </div>
            </div>
          </section>

          <section>
            <h2>{t.planetsTitle}</h2>{ps(t.planetsIntro)}
            <div className="house-eight-planets-grid">
              {t.planets.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-eight-planet-card" key={name}>
                  <div className="house-eight-planet-symbol">{symbol}</div>
                  <div><h3>{name} {t.planetLabel}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.signsTitle}</h2>{ps(t.signsIntro)}
            <div className="house-eight-signs-grid">
              {t.signs.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-eight-sign-card" key={name}>
                  <div className="house-eight-sign-symbol">{symbol}</div>
                  <div><h3>{t.houseSignLabel} {name}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.emptyTitle}</h2>{ps(t.empty)}</section>

          <section>
            <h2>{t.rulerTitle}</h2>{ps(t.ruler)}
            <div className="house-eight-rulers-grid">
              {t.rulers.map(([name,symbol,ruler]:[string,string,string])=>(
                <div className="house-eight-ruler-card" key={name}><span>{symbol}</span><h3>{name}</h3><p>{ruler}</p></div>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.comparison28Title}</h2>
            <div className="house-eight-comparison-grid">
              {[t.comparison2,t.comparison8].map(([label,title,text]:[string,string,string])=>(
                <article className="house-eight-comparison-card" key={label}>
                  <span className="house-eight-kicker">{label}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.comparison78Title}</h2>
            <div className="house-eight-comparison-grid">
              {[t.comparison7,t.comparison8b].map(([label,title,text]:[string,string,string])=>(
                <article className="house-eight-comparison-card" key={`${label}-${title}`}>
                  <span className="house-eight-kicker">{label}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.evolutionTitle}</h2>{ps(t.evolution)}</section>

          <section>
            <h2>{t.interpretTitle}</h2>
            <div className="house-eight-steps">
              {t.steps.map(([number,title,text]:[string,string,string])=>(
                <article className="house-eight-step-card" key={number}>
                  <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.natalTitle}</h2>{ps(t.natal)}
            <div className="house-eight-cta-card">
              <div><span className="house-eight-kicker">{t.ctaKicker}</span><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p></div>
              <Link href="/carte-du-ciel" className="house-eight-primary-button">{t.ctaButton}</Link>
            </div>
          </section>

          <section className="house-eight-navigation">
            <span className="house-eight-kicker">{t.navKicker}</span><h2>{t.navTitle}</h2>
            <div className="house-eight-navigation-grid">
              <Link href={`/${locale}/astrologie/maisons/maison-7`} className="house-eight-navigation-card"><span>Ⅶ</span><div><h3>{t.nav7[0]}</h3><p>{t.nav7[1]}</p></div></Link>
              <Link href={`/${locale}/astrologie/maisons`} className="house-eight-navigation-card"><span>☾</span><div><h3>{t.navAll[0]}</h3><p>{t.navAll[1]}</p></div></Link>
              <Link href={`/${locale}/astrologie/maisons/maison-9`} className="house-eight-navigation-card"><span>Ⅸ</span><div><h3>{t.nav9[0]}</h3><p>{t.nav9[1]}</p></div></Link>
            </div>
          </section>

          <section className="house-eight-faq">
            <span className="house-eight-kicker">{t.faqKicker}</span><h2>{t.faqTitle}</h2>
            <div className="house-eight-faq-list">
              {t.faq.map(([q,a]:[string,string])=>(
                <details className="house-eight-faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>
              ))}
            </div>
          </section>

          <p className="house-eight-disclaimer">{t.disclaimer}</p>
        </article>
      </main>
    </div>
  );
}
