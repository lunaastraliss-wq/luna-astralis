// app/[locale]/astrologie/maisons/maison-10/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { MAISON_DIX_TRANSLATIONS } from "@/i18n/pages/astrologie/maisons/maison-10";
import "../../../../astrologie/maisons/maison-10/page.css";

const SITE_URL = "https://luna-astralis.app";
type Props = { params: { locale: string } };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = MAISON_DIX_TRANSLATIONS[params.locale];
  const url = `${SITE_URL}/${params.locale}/astrologie/maisons/maison-10`;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/astrologie/maisons/maison-10`,
        en: `${SITE_URL}/en/astrologie/maisons/maison-10`,
        es: `${SITE_URL}/es/astrologie/maisons/maison-10`,
        de: `${SITE_URL}/de/astrologie/maisons/maison-10`,
        it: `${SITE_URL}/it/astrologie/maisons/maison-10`,
        pt: `${SITE_URL}/pt/astrologie/maisons/maison-10`,
        "x-default": `${SITE_URL}/fr/astrologie/maisons/maison-10`,
      },
    },
    openGraph: { title:t.meta.ogTitle, description:t.meta.ogDescription, url, siteName:"Luna Astralis", locale:t.meta.locale, type:"article" },
    twitter: { card:"summary_large_image", title:t.meta.twitterTitle, description:t.meta.twitterDescription },
    robots: { index:true, follow:true },
  };
}

export default function MaisonDixPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = MAISON_DIX_TRANSLATIONS[locale] as any;
  const url = `${SITE_URL}/${locale}/astrologie/maisons/maison-10`;

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
    <div className="house-ten-page">
      {schemas.map((schema,index)=>(
        <script key={index} type="application/ld+json"
          dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
      ))}

      <main className="house-ten-wrap">
        <section className="house-ten-hero">
          <div className="house-ten-badge">{t.badge}</div>
          <h1>{t.title}</h1>
          <p className="house-ten-hero-lead">{t.lead}</p>
          <div className="house-ten-hero-actions">
            <Link href="/carte-du-ciel" className="house-ten-primary-button">{t.create}</Link>
            <a href="#signification-maison-10" className="house-ten-secondary-button">{t.discover}</a>
          </div>
        </section>

        <article className="house-ten-content">
          <section id="signification-maison-10">
            <span className="house-ten-kicker">{t.meaningKicker}</span>
            <h2>{t.meaningTitle}</h2>{ps(t.meaning)}
          </section>

          <section>
            <h2>{t.domainsTitle}</h2>
            <div className="house-ten-info-grid">
              {t.traits.map(([title,symbol,text]:[string,string,string])=>(
                <article className="house-ten-info-card" key={title}>
                  <span className="house-ten-card-icon">{symbol}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.mcTitle}</h2>{ps(t.mc)}
            <div className="house-ten-highlight-card">
              <div className="house-ten-highlight-symbol">MC</div>
              <div><h3>{t.highlightTitle}</h3><p>{t.highlight}</p>
                <Link href={`/${locale}/astrologie/milieu-du-ciel`} className="house-ten-text-link">{t.highlightLink}</Link>
              </div>
            </div>
          </section>

          <section><h2>{t.careerTitle}</h2>{ps(t.career)}</section>
          <section><h2>{t.vocationTitle}</h2>{ps(t.vocation)}</section>
          <section><h2>{t.reputationTitle}</h2>{ps(t.reputation)}</section>
          <section><h2>{t.ambitionTitle}</h2>{ps(t.ambition)}</section>
          <section><h2>{t.authorityTitle}</h2>{ps(t.authority)}</section>
          <section><h2>{t.contributionTitle}</h2>{ps(t.contribution)}</section>
          <section><h2>{t.parentTitle}</h2>{ps(t.parent)}</section>

          <section>
            <h2>{t.strengthsTitle}</h2>
            <div className="house-ten-strengths-grid">
              <div className="house-ten-list-card">
                <span className="house-ten-kicker">{t.strengthsKicker}</span><h3>{t.strengthsSub}</h3>
                <ul>{t.strengths.map((x:string)=><li key={x}>{x}</li>)}</ul>
              </div>
              <div className="house-ten-list-card">
                <span className="house-ten-kicker">{t.challengesKicker}</span><h3>{t.challengesSub}</h3>
                <ul>{t.challenges.map((x:string)=><li key={x}>{x}</li>)}</ul>
              </div>
            </div>
          </section>

          <section>
            <h2>{t.planetsTitle}</h2>{ps(t.planetsIntro)}
            <div className="house-ten-planets-grid">
              {t.planets.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-ten-planet-card" key={name}>
                  <div className="house-ten-planet-symbol">{symbol}</div>
                  <div><h3>{name} {t.planetLabel}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.signsTitle}</h2>{ps(t.signsIntro)}
            <div className="house-ten-signs-grid">
              {t.signs.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-ten-sign-card" key={name}>
                  <div className="house-ten-sign-symbol">{symbol}</div>
                  <div><h3>{t.houseSignLabel} {name}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.emptyTitle}</h2>{ps(t.empty)}</section>

          <section>
            <h2>{t.rulerTitle}</h2>{ps(t.ruler)}
            <div className="house-ten-rulers-grid">
              {t.rulers.map(([name,symbol,ruler]:[string,string,string])=>(
                <div className="house-ten-ruler-card" key={name}><span>{symbol}</span><h3>{name}</h3><p>{ruler}</p></div>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.comparison410Title}</h2>
            <div className="house-ten-comparison-grid">
              {[t.comparison4,t.comparison10].map(([label,title,text]:[string,string,string])=>(
                <article className="house-ten-comparison-card" key={`${label}-${title}`}>
                  <span className="house-ten-kicker">{label}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.comparison610Title}</h2>
            <div className="house-ten-comparison-grid">
              {[t.comparison6,t.comparison10b].map(([label,title,text]:[string,string,string])=>(
                <article className="house-ten-comparison-card" key={`${label}-${title}`}>
                  <span className="house-ten-kicker">{label}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.comparison910Title}</h2>
            <div className="house-ten-comparison-grid">
              {[t.comparison9,t.comparison10c].map(([label,title,text]:[string,string,string])=>(
                <article className="house-ten-comparison-card" key={`${label}-${title}`}>
                  <span className="house-ten-kicker">{label}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.evolutionTitle}</h2>{ps(t.evolution)}</section>

          <section>
            <h2>{t.interpretTitle}</h2>
            <div className="house-ten-steps">
              {t.steps.map(([number,title,text]:[string,string,string])=>(
                <article className="house-ten-step-card" key={number}>
                  <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.natalTitle}</h2>{ps(t.natal)}
            <div className="house-ten-cta-card">
              <div><span className="house-ten-kicker">{t.ctaKicker}</span><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p></div>
              <Link href="/carte-du-ciel" className="house-ten-primary-button">{t.ctaButton}</Link>
            </div>
          </section>

          <section className="house-ten-navigation">
            <span className="house-ten-kicker">{t.navKicker}</span><h2>{t.navTitle}</h2>
            <div className="house-ten-navigation-grid">
              <Link href={`/${locale}/astrologie/maisons/maison-9`} className="house-ten-navigation-card"><span>Ⅸ</span><div><h3>{t.nav9[0]}</h3><p>{t.nav9[1]}</p></div></Link>
              <Link href={`/${locale}/astrologie/maisons`} className="house-ten-navigation-card"><span>☾</span><div><h3>{t.navAll[0]}</h3><p>{t.navAll[1]}</p></div></Link>
              <Link href={`/${locale}/astrologie/maisons/maison-11`} className="house-ten-navigation-card"><span>Ⅺ</span><div><h3>{t.nav11[0]}</h3><p>{t.nav11[1]}</p></div></Link>
            </div>
          </section>

          <section className="house-ten-faq">
            <span className="house-ten-kicker">{t.faqKicker}</span><h2>{t.faqTitle}</h2>
            <div className="house-ten-faq-list">
              {t.faq.map(([q,a]:[string,string])=>(
                <details className="house-ten-faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>
              ))}
            </div>
          </section>

          <p className="house-ten-disclaimer">{t.disclaimer}</p>
        </article>
      </main>
    </div>
  );
}
