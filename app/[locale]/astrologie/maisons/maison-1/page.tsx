// app/[locale]/astrologie/maisons/maison-1/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { MAISON_UN_TRANSLATIONS } from "@/i18n/pages/astrologie/maisons/maison-1";
import "../../../../astrologie/maisons/maison-1/page.css";

const SITE_URL = "https://luna-astralis.app";
type Props = { params: { locale: string } };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = MAISON_UN_TRANSLATIONS[params.locale];
  const url = `${SITE_URL}/${params.locale}/astrologie/maisons/maison-1`;
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/astrologie/maisons/maison-1`,
        en: `${SITE_URL}/en/astrologie/maisons/maison-1`,
        es: `${SITE_URL}/es/astrologie/maisons/maison-1`,
        de: `${SITE_URL}/de/astrologie/maisons/maison-1`,
        it: `${SITE_URL}/it/astrologie/maisons/maison-1`,
        pt: `${SITE_URL}/pt/astrologie/maisons/maison-1`,
        "x-default": `${SITE_URL}/fr/astrologie/maisons/maison-1`,
      },
    },
    openGraph: { title:t.meta.ogTitle, description:t.meta.ogDescription, url, siteName:"Luna Astralis", locale:t.meta.locale, type:"article" },
    twitter: { card:"summary_large_image", title:t.meta.twitterTitle, description:t.meta.twitterDescription },
    robots: { index:true, follow:true },
  };
}

export default function MaisonUnPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = MAISON_UN_TRANSLATIONS[locale] as any;
  const url = `${SITE_URL}/${locale}/astrologie/maisons/maison-1`;

  const schemas = [
    {
      "@context":"https://schema.org","@type":"Article",
      headline:t.meta.ogTitle,description:t.meta.ogDescription,
      inLanguage:t.meta.language,mainEntityOfPage:url,
      publisher:{"@type":"Organization",name:"Luna Astralis",url:SITE_URL},
    },
    {
      "@context":"https://schema.org","@type":"FAQPage",
      mainEntity:t.faq.map(([q,a]:[string,string])=>({
        "@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a},
      })),
    },
  ];

  const ps = (items:string[]) => items.map((p)=><p key={p}>{p}</p>);

  return (
    <div className="house-one-page">
      {schemas.map((schema,index)=>(
        <script key={index} type="application/ld+json"
          dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
      ))}

      <main className="house-one-wrap">
        <section className="house-one-hero">
          <div className="house-one-badge">{t.badge}</div>
          <h1>{t.title}</h1>
          <p className="house-one-hero-lead">{t.lead}</p>
          <div className="house-one-hero-actions">
            <Link href="/carte-du-ciel" className="house-one-primary-button">{t.create}</Link>
            <a href="#signification-maison-1" className="house-one-secondary-button">{t.discover}</a>
          </div>
        </section>

        <article className="house-one-content">
          <section id="signification-maison-1">
            <span className="house-one-kicker">{t.meaningKicker}</span>
            <h2>{t.meaningTitle}</h2>{ps(t.meaning)}
          </section>

          <section>
            <h2>{t.domainsTitle}</h2>
            <div className="house-one-info-grid">
              {t.traits.map(([title,symbol,text]:[string,string,string])=>(
                <article className="house-one-info-card" key={title}>
                  <span className="house-one-card-icon">{symbol}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.ascTitle}</h2>{ps(t.asc)}
            <div className="house-one-highlight-card">
              <div className="house-one-highlight-symbol">↑</div>
              <div><h3>{t.ascHighlightTitle}</h3><p>{t.ascHighlight}</p>
                <Link href={`/${locale}/astrologie/ascendant`} className="house-one-text-link">{t.ascLink}</Link>
              </div>
            </div>
          </section>

          <section>
            <h2>{t.strengthsTitle}</h2>
            <div className="house-one-strengths-grid">
              <div className="house-one-list-card"><span className="house-one-kicker">{t.strengthsKicker}</span><h3>{t.strengthsSub}</h3><ul>{t.strengths.map((x:string)=><li key={x}>{x}</li>)}</ul></div>
              <div className="house-one-list-card"><span className="house-one-kicker">{t.challengesKicker}</span><h3>{t.challengesSub}</h3><ul>{t.challenges.map((x:string)=><li key={x}>{x}</li>)}</ul></div>
            </div>
          </section>

          <section>
            <h2>{t.planetsTitle}</h2>{ps(t.planetsIntro)}
            <div className="house-one-planets-grid">
              {t.planets.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-one-planet-card" key={name}>
                  <div className="house-one-planet-symbol">{symbol}</div>
                  <div><h3>{name} {t.planetLabel}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.signsTitle}</h2><p>{t.signsIntro}</p>
            <div className="house-one-signs-grid">
              {t.signs.map(([name,symbol,text]:[string,string,string])=>(
                <article className="house-one-sign-card" key={name}>
                  <div className="house-one-sign-symbol">{symbol}</div>
                  <div><h3>{t.houseSignLabel} {name}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section><h2>{t.emptyTitle}</h2>{ps(t.empty)}</section>

          <section>
            <h2>{t.rulerTitle}</h2>{ps(t.ruler)}
            <div className="house-one-rulers-grid">
              {t.rulers.map(([name,symbol,ruler]:[string,string,string])=>(
                <div className="house-one-ruler-card" key={name}><span>{symbol}</span><h3>{name}</h3><p>{ruler}</p></div>
              ))}
            </div>
          </section>

          <section><h2>{t.evolutionTitle}</h2>{ps(t.evolution)}</section>

          <section>
            <h2>{t.interpretTitle}</h2>
            <div className="house-one-steps">
              {t.steps.map(([number,title,text]:[string,string,string])=>(
                <article className="house-one-step-card" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
              ))}
            </div>
          </section>

          <section>
            <h2>{t.natalTitle}</h2>{ps(t.natal)}
            <div className="house-one-cta-card">
              <div><span className="house-one-kicker">{t.ctaKicker}</span><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p></div>
              <Link href="/carte-du-ciel" className="house-one-primary-button">{t.ctaButton}</Link>
            </div>
          </section>

          <section className="house-one-navigation">
            <span className="house-one-kicker">{t.navKicker}</span><h2>{t.navTitle}</h2>
            <div className="house-one-navigation-grid">
              <Link href={`/${locale}/astrologie/maisons`} className="house-one-navigation-card"><span>☾</span><div><h3>{t.navAll[0]}</h3><p>{t.navAll[1]}</p></div></Link>
              <Link href={`/${locale}/astrologie/maisons/maison-2`} className="house-one-navigation-card"><span>Ⅱ</span><div><h3>{t.nav2[0]}</h3><p>{t.nav2[1]}</p></div></Link>
              <Link href={`/${locale}/astrologie/ascendant`} className="house-one-navigation-card"><span>↑</span><div><h3>{t.navAsc[0]}</h3><p>{t.navAsc[1]}</p></div></Link>
            </div>
          </section>

          <section className="house-one-faq">
            <span className="house-one-kicker">{t.faqKicker}</span><h2>{t.faqTitle}</h2>
            <div className="house-one-faq-list">
              {t.faq.map(([q,a]:[string,string])=><details className="house-one-faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>)}
            </div>
          </section>

          <p className="house-one-disclaimer">{t.disclaimer}</p>
        </article>
      </main>
    </div>
  );
}
