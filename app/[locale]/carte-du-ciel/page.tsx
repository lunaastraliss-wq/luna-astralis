import type {
  Metadata,
} from "next";

import Image from "next/image";
import Link from "next/link";
import {
  notFound,
} from "next/navigation";

import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";

import {
  isLocale,
  locales,
  type Locale,
} from "@/i18n/config";

import {
  REPORTS_TRANSLATIONS,
} from "@/i18n/pages/carte-du-ciel/reports";

import "../../carte-du-ciel/page.css";

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const SITE_URL =
  "https://luna-astralis.app";

const REPORT_COVER_URL =
  "/reports/couverture-carte-du-ciel-signature.png";

type ReportLevelText = {
  name: string;
  description: string;
  pages: string;
  price: string;
  linkLabel: string;
};

type ReportsLocalText = {
  reportsCount: string;
  chooseLabel: string;
  chooseTitle: string;
  chooseDescription: string;
  essential: ReportLevelText;
  premium: ReportLevelText;
  signature: ReportLevelText;
  compareLink: string;
  comparisonLabel: string;
  comparisonTitle: string;
  comparisonDescription: string;
};

const REPORTS_LOCAL_TEXTS: Record<
  Locale,
  ReportsLocalText
> = {
  fr: {
    reportsCount: "3 rapports",
    chooseLabel: "Choisissez votre niveau",
    chooseTitle: "Essentielle, Premium ou Signature",
    chooseDescription:
      "Trois niveaux d’analyse personnalisée pour découvrir votre thème natal selon la profondeur que vous recherchez.",
    essential: {
      name: "Essentielle",
      description:
        "Découvrez les fondations de votre thème : Soleil, Lune, Ascendant, planètes, éléments et modalités.",
      pages: "17 pages",
      price: "24,99 $ US",
      linkLabel: "Découvrir Essentielle",
    },
    premium: {
      name: "Premium",
      description:
        "Approfondissez votre thème avec vos maisons, vos aspects, vos dominantes, vos relations, vos forces et votre carrière.",
      pages: "40 pages",
      price: "49,99 $ US",
      linkLabel: "Découvrir Premium",
    },
    signature: {
      name: "Signature",
      description:
        "Profitez de l’analyse la plus complète avec votre évolution personnelle et une synthèse astrologique finale.",
      pages: "58 pages",
      price: "79,99 $ US",
      linkLabel: "Découvrir Signature",
    },
    compareLink: "Comparer les trois rapports",
    comparisonLabel: "Trois niveaux personnalisés",
    comparisonTitle:
      "Choisissez le rapport qui vous correspond",
    comparisonDescription:
      "Essentielle présente les fondations de votre thème, Premium approfondit vos principales dynamiques et Signature vous offre l’analyse astrologique la plus complète.",
  },

  en: {
    reportsCount: "3 reports",
    chooseLabel: "Choose your level",
    chooseTitle: "Essential, Premium or Signature",
    chooseDescription:
      "Three levels of personalized analysis to explore your birth chart at the depth that suits you.",
    essential: {
      name: "Essential",
      description:
        "Discover the foundations of your chart: Sun, Moon, Ascendant, planets, elements and modalities.",
      pages: "17 pages",
      price: "US$24.99",
      linkLabel: "Discover Essential",
    },
    premium: {
      name: "Premium",
      description:
        "Explore your chart more deeply through your houses, aspects, dominant energies, relationships, strengths and career.",
      pages: "40 pages",
      price: "US$49.99",
      linkLabel: "Discover Premium",
    },
    signature: {
      name: "Signature",
      description:
        "Enjoy the most complete analysis, including your personal growth and a final astrological synthesis.",
      pages: "58 pages",
      price: "US$79.99",
      linkLabel: "Discover Signature",
    },
    compareLink: "Compare the three reports",
    comparisonLabel: "Three personalized levels",
    comparisonTitle:
      "Choose the report that suits you",
    comparisonDescription:
      "Essential presents the foundations of your chart, Premium explores your main dynamics in greater depth, and Signature offers the most complete astrological analysis.",
  },

  es: {
    reportsCount: "3 informes",
    chooseLabel: "Elige tu nivel",
    chooseTitle: "Esencial, Premium o Signature",
    chooseDescription:
      "Tres niveles de análisis personalizado para descubrir tu carta natal con la profundidad que buscas.",
    essential: {
      name: "Esencial",
      description:
        "Descubre las bases de tu carta: Sol, Luna, Ascendente, planetas, elementos y modalidades.",
      pages: "17 páginas",
      price: "24,99 US$",
      linkLabel: "Descubrir Esencial",
    },
    premium: {
      name: "Premium",
      description:
        "Profundiza en tu carta con tus casas, aspectos, energías dominantes, relaciones, fortalezas y carrera.",
      pages: "40 páginas",
      price: "49,99 US$",
      linkLabel: "Descubrir Premium",
    },
    signature: {
      name: "Signature",
      description:
        "Disfruta del análisis más completo con tu evolución personal y una síntesis astrológica final.",
      pages: "58 páginas",
      price: "79,99 US$",
      linkLabel: "Descubrir Signature",
    },
    compareLink: "Comparar los tres informes",
    comparisonLabel: "Tres niveles personalizados",
    comparisonTitle:
      "Elige el informe que mejor se adapte a ti",
    comparisonDescription:
      "Esencial presenta las bases de tu carta, Premium profundiza en tus principales dinámicas y Signature ofrece el análisis astrológico más completo.",
  },

  de: {
    reportsCount: "3 Berichte",
    chooseLabel: "Wählen Sie Ihre Stufe",
    chooseTitle: "Essential, Premium oder Signature",
    chooseDescription:
      "Drei Stufen persönlicher Analyse, mit denen Sie Ihr Geburtshoroskop in der gewünschten Tiefe entdecken können.",
    essential: {
      name: "Essential",
      description:
        "Entdecken Sie die Grundlagen Ihres Horoskops: Sonne, Mond, Aszendent, Planeten, Elemente und Modalitäten.",
      pages: "17 Seiten",
      price: "24,99 US$",
      linkLabel: "Essential entdecken",
    },
    premium: {
      name: "Premium",
      description:
        "Vertiefen Sie Ihr Horoskop mit Häusern, Aspekten, dominanten Energien, Beziehungen, Stärken und Karriere.",
      pages: "40 Seiten",
      price: "49,99 US$",
      linkLabel: "Premium entdecken",
    },
    signature: {
      name: "Signature",
      description:
        "Erhalten Sie die umfassendste Analyse mit persönlicher Entwicklung und abschließender astrologischer Synthese.",
      pages: "58 Seiten",
      price: "79,99 US$",
      linkLabel: "Signature entdecken",
    },
    compareLink: "Die drei Berichte vergleichen",
    comparisonLabel: "Drei persönliche Stufen",
    comparisonTitle:
      "Wählen Sie den passenden Bericht",
    comparisonDescription:
      "Essential zeigt die Grundlagen Ihres Horoskops, Premium vertieft die wichtigsten Dynamiken und Signature bietet die umfassendste astrologische Analyse.",
  },

  it: {
    reportsCount: "3 rapporti",
    chooseLabel: "Scegli il tuo livello",
    chooseTitle: "Essenziale, Premium o Signature",
    chooseDescription:
      "Tre livelli di analisi personalizzata per scoprire il tuo tema natale con la profondità che desideri.",
    essential: {
      name: "Essenziale",
      description:
        "Scopri le basi del tuo tema: Sole, Luna, Ascendente, pianeti, elementi e modalità.",
      pages: "17 pagine",
      price: "24,99 USD",
      linkLabel: "Scopri Essenziale",
    },
    premium: {
      name: "Premium",
      description:
        "Approfondisci il tuo tema con case, aspetti, energie dominanti, relazioni, punti di forza e carriera.",
      pages: "40 pagine",
      price: "49,99 USD",
      linkLabel: "Scopri Premium",
    },
    signature: {
      name: "Signature",
      description:
        "Scegli l’analisi più completa con evoluzione personale e sintesi astrologica finale.",
      pages: "58 pagine",
      price: "79,99 USD",
      linkLabel: "Scopri Signature",
    },
    compareLink: "Confronta i tre rapporti",
    comparisonLabel: "Tre livelli personalizzati",
    comparisonTitle:
      "Scegli il rapporto più adatto a te",
    comparisonDescription:
      "Essenziale presenta le basi del tuo tema, Premium approfondisce le dinamiche principali e Signature offre l’analisi astrologica più completa.",
  },

  pt: {
    reportsCount: "3 relatórios",
    chooseLabel: "Escolha seu nível",
    chooseTitle: "Essencial, Premium ou Signature",
    chooseDescription:
      "Três níveis de análise personalizada para descobrir seu mapa astral com a profundidade que você procura.",
    essential: {
      name: "Essencial",
      description:
        "Descubra as bases do seu mapa: Sol, Lua, Ascendente, planetas, elementos e modalidades.",
      pages: "17 páginas",
      price: "US$ 24,99",
      linkLabel: "Descobrir Essencial",
    },
    premium: {
      name: "Premium",
      description:
        "Aprofunde seu mapa com casas, aspectos, energias dominantes, relacionamentos, forças e carreira.",
      pages: "40 páginas",
      price: "US$ 49,99",
      linkLabel: "Descobrir Premium",
    },
    signature: {
      name: "Signature",
      description:
        "Tenha a análise mais completa, incluindo evolução pessoal e uma síntese astrológica final.",
      pages: "58 páginas",
      price: "US$ 79,99",
      linkLabel: "Descobrir Signature",
    },
    compareLink: "Comparar os três relatórios",
    comparisonLabel: "Três níveis personalizados",
    comparisonTitle:
      "Escolha o relatório ideal para você",
    comparisonDescription:
      "Essencial apresenta as bases do seu mapa, Premium aprofunda suas principais dinâmicas e Signature oferece a análise astrológica mais completa.",
  },
};

/*
|--------------------------------------------------------------------------
| Routes statiques
|--------------------------------------------------------------------------
*/

export function generateStaticParams() {
  return locales.map(
    (locale) => ({
      locale,
    })
  );
}

type Props = {
  params: {
    locale: string;
  };
};

/*
|--------------------------------------------------------------------------
| Métadonnées SEO
|--------------------------------------------------------------------------
*/

export function generateMetadata({
  params,
}: Props): Metadata {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    return {};
  }

  const text =
    REPORTS_TRANSLATIONS[
      locale
    ];

  const localText =
    REPORTS_LOCAL_TEXTS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/carte-du-ciel`;

  return {
    title:
      text.metadata.title,

    description:
      text.metadata.description,

    alternates: {
      canonical:
        pageUrl,

      languages: {
        fr:
          `${SITE_URL}/fr/carte-du-ciel`,

        en:
          `${SITE_URL}/en/carte-du-ciel`,

        es:
          `${SITE_URL}/es/carte-du-ciel`,

        de:
          `${SITE_URL}/de/carte-du-ciel`,

        it:
          `${SITE_URL}/it/carte-du-ciel`,

        pt:
          `${SITE_URL}/pt/carte-du-ciel`,

        "x-default":
          `${SITE_URL}/fr/carte-du-ciel`,
      },
    },

    openGraph: {
      title:
        text.metadata.ogTitle,

      description:
        text.metadata.ogDescription,

      url:
        pageUrl,

      siteName:
        "Luna Astralis",

      type:
        "website",

      locale:
        text.metadata.locale,

      images: [
        {
          url:
            REPORT_COVER_URL,

          width:
            1414,

          height:
            2000,

          alt:
            text.metadata.imageAlt,
        },
      ],
    },

    twitter: {
      card:
        "summary_large_image",

      title:
        text.metadata.twitterTitle,

      description:
        text.metadata.twitterDescription,

      images: [
        REPORT_COVER_URL,
      ],
    },

    robots: {
      index:
        true,

      follow:
        true,
    },
  };
}

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default function ReportsPage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    REPORTS_TRANSLATIONS[
      locale
    ];

  const localText =
    REPORTS_LOCAL_TEXTS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/carte-du-ciel`;

  const freeChartUrl =
    `/${locale}/carte-du-ciel/gratuite`;

  const essentialUrl =
    `/${locale}/carte-du-ciel/essentielle`;

  const premiumUrl =
    `/${locale}/carte-du-ciel/premium`;

  const signatureUrl =
    `/${locale}/carte-du-ciel/signature`;

  /*
  |--------------------------------------------------------------------------
  | Données structurées
  |--------------------------------------------------------------------------
  */

  const jsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "CollectionPage",

    name:
      text.jsonLd.name,

    description:
      text.jsonLd.description,

    url:
      pageUrl,

    inLanguage:
      text.metadata.language,

    mainEntity: {
      "@type":
        "ItemList",

      numberOfItems:
        3,

      itemListElement: [
        {
          "@type":
            "ListItem",

          position:
            1,

          name:
            localText.essential.name,

          url:
            `${SITE_URL}${essentialUrl}`,
        },

        {
          "@type":
            "ListItem",

          position:
            2,

          name:
            localText.premium.name,

          url:
            `${SITE_URL}${premiumUrl}`,
        },

        {
          "@type":
            "ListItem",

          position:
            3,

          name:
            localText.signature.name,

          url:
            `${SITE_URL}${signatureUrl}`,
        },
      ],
    },
  };

  return (
    <AuthProvider>
      <SiteHeader />

      <div className="signature-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                jsonLd
              ).replace(
                /</g,
                "\\u003c"
              ),
          }}
        />

        <main className="signature-main">
          {/*
          |--------------------------------------------------------------------------
          | Hero
          |--------------------------------------------------------------------------
          */}

          <section
            className="signature-hero"
            aria-labelledby="reports-title"
          >
            <div
              className="signature-hero-glow"
              aria-hidden="true"
            />

            <div
              className="signature-hero-stars"
              aria-hidden="true"
            />

            <div className="signature-hero-copy">
              <div className="signature-hero-badge">
                {text.hero.badge}
              </div>

              <p className="signature-hero-eyebrow">
                {text.hero.eyebrow}
              </p>

              <h1 id="reports-title">
                {text.hero.titleBefore}

                <span>
                  {" "}
                  {text.hero.titleHighlight}
                </span>
              </h1>

              <p className="signature-hero-description">
                {text.hero.description}
              </p>

              <div className="signature-hero-actions">
                <Link
                  href="#rapports"
                  className="signature-button signature-button-primary"
                >
                  {text.hero.createButton}

                  <span aria-hidden="true">
                    ✦
                  </span>
                </Link>

                <Link
                  href={freeChartUrl}
                  className="signature-button signature-button-secondary"
                >
                  {text.introduction.freeChartLink}
                </Link>
              </div>

              <div className="signature-hero-trust">
                <span>
                  ✓ {localText.reportsCount}
                </span>

                <span>
                  ✓ {text.hero.personalizedPdf}
                </span>

                <span>
                  ✓ {text.hero.downloadAfterPayment}
                </span>
              </div>
            </div>

            <div className="signature-hero-visual">
              <div
                className="signature-cover-glow"
                aria-hidden="true"
              />

              <div className="signature-cover-frame">
                <Image
                  src={REPORT_COVER_URL}
                  alt={text.hero.coverAlt}
                  width={707}
                  height={1000}
                  priority
                  className="signature-cover-image"
                />
              </div>

              <div className="signature-cover-badge">
                <span aria-hidden="true">
                  ✦
                </span>

                {text.hero.createdForYou}
              </div>

              <div
                className="signature-hero-orbit signature-hero-orbit-one"
                aria-hidden="true"
              >
                <span>
                  ☉
                </span>
              </div>

              <div
                className="signature-hero-orbit signature-hero-orbit-two"
                aria-hidden="true"
              >
                <span>
                  ☾
                </span>
              </div>
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | Introduction
          |--------------------------------------------------------------------------
          */}

          <section className="signature-introduction">
            <div className="signature-section-heading">
              <span className="signature-section-label">
                {text.introduction.label}
              </span>

              <h2>
                {text.introduction.title}
              </h2>

              <p>
                {text.introduction.description}
              </p>
            </div>

            <div className="signature-introduction-grid">
              <article className="signature-introduction-card">
                <div className="signature-introduction-icon">
                  ☉
                </div>

                <span>
                  {text.introduction.solarSignLabel}
                </span>

                <h3>
                  {text.introduction.solarSignTitle}
                </h3>

                <p>
                  {text.introduction.solarSignText}
                </p>

                <Link
                  href={freeChartUrl}
                  className="signature-text-link"
                >
                  {text.introduction.freeChartLink}

                  <span aria-hidden="true">
                    {" "}
                    →
                  </span>
                </Link>
              </article>

              <article className="signature-introduction-card signature-introduction-card-featured">
                <div className="signature-introduction-card-label">
                  {text.introduction.featuredLabel}
                </div>

                <div className="signature-introduction-icon">
                  ✦
                </div>

                <span>
                  {text.introduction.natalChartLabel}
                </span>

                <h3>
                  {text.introduction.natalChartTitle}
                </h3>

                <p>
                  {text.introduction.natalChartText}
                </p>

                <Link
                  href="#rapports"
                  className="signature-text-link"
                >
                  {text.introduction.startAnalysisLink}

                  <span aria-hidden="true">
                    {" "}
                    →
                  </span>
                </Link>
              </article>
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | Les trois rapports
          |--------------------------------------------------------------------------
          */}

          <section
            id="rapports"
            className="signature-contents"
          >
            <div className="signature-section-heading">
              <span className="signature-section-label">
                {localText.chooseLabel}
              </span>

              <h2>
                {localText.chooseTitle}
              </h2>

              <p>
                {localText.chooseDescription}
              </p>
            </div>

            <div className="signature-feature-grid">
              <article className="signature-feature-card">
                <div className="signature-feature-icon">
                  ✦
                </div>

                <h3>
                  {localText.essential.name}
                </h3>

                <p>
                  {localText.essential.description}
                </p>

                <p>
                  <strong>
                    {localText.essential.pages}
                  </strong>
                </p>

                <p>
                  <strong>
                    {localText.essential.price}
                  </strong>
                </p>

                <Link
                  href={essentialUrl}
                  className="signature-text-link"
                >
                  {localText.essential.linkLabel}

                  <span aria-hidden="true">
                    {" "}
                    →
                  </span>
                </Link>
              </article>

              <article className="signature-feature-card">
                <div className="signature-feature-icon">
                  ★
                </div>

                <h3>
                  {localText.premium.name}
                </h3>

                <p>
                  {localText.premium.description}
                </p>

                <p>
                  <strong>
                    {localText.premium.pages}
                  </strong>
                </p>

                <p>
                  <strong>
                    {localText.premium.price}
                  </strong>
                </p>

                <Link
                  href={premiumUrl}
                  className="signature-text-link"
                >
                  {localText.premium.linkLabel}

                  <span aria-hidden="true">
                    {" "}
                    →
                  </span>
                </Link>
              </article>

              <article className="signature-feature-card">
                <div className="signature-feature-icon">
                  ✧
                </div>

                <h3>
                  {localText.signature.name}
                </h3>

                <p>
                  {localText.signature.description}
                </p>

                <p>
                  <strong>
                    {localText.signature.pages}
                  </strong>
                </p>

                <p>
                  <strong>
                    {localText.signature.price}
                  </strong>
                </p>

                <Link
                  href={signatureUrl}
                  className="signature-text-link"
                >
                  {localText.signature.linkLabel}

                  <span aria-hidden="true">
                    {" "}
                    →
                  </span>
                </Link>
              </article>
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | Contenu astrologique
          |--------------------------------------------------------------------------
          */}

          <section className="signature-benefits">
            <div className="signature-benefits-copy">
              <span className="signature-section-label">
                {text.benefits.label}
              </span>

              <h2>
                {text.benefits.title}
              </h2>

              <p>
                {text.benefits.description}
              </p>

              <Link
                href="#rapports"
                className="signature-text-link"
              >
                {localText.compareLink}

                <span aria-hidden="true">
                  {" "}
                  →
                </span>
              </Link>
            </div>

            <div className="signature-benefit-grid">
              {text.benefits.items.map(
                (item) => (
                  <article
                    className="signature-benefit-card"
                    key={item.title}
                  >
                    <div className="signature-benefit-icon">
                      {item.icon}
                    </div>

                    <div>
                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>
                    </div>
                  </article>
                )
              )}
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | Fonctionnement
          |--------------------------------------------------------------------------
          */}

          <section className="signature-process">
            <div className="signature-section-heading">
              <span className="signature-section-label">
                {text.process.label}
              </span>

              <h2>
                {text.process.title}
              </h2>

              <p>
                {text.process.description}
              </p>
            </div>

            <div className="signature-process-grid">
              {text.process.steps.map(
                (step) => (
                  <article
                    className="signature-process-card"
                    key={step.number}
                  >
                    <span className="signature-process-number">
                      {step.number}
                    </span>

                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.description}
                    </p>
                  </article>
                )
              )}
            </div>

            <div className="signature-section-action">
              <Link
                href="#rapports"
                className="signature-button signature-button-primary"
              >
                {text.process.button}

                <span aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | Comparaison finale
          |--------------------------------------------------------------------------
          */}

          <section className="signature-comparison">
            <div
              className="signature-comparison-glow"
              aria-hidden="true"
            />

            <span className="signature-section-label">
              {localText.comparisonLabel}
            </span>

            <h2>
              {localText.comparisonTitle}
            </h2>

            <p>
              {localText.comparisonDescription}
            </p>

            <div className="signature-comparison-actions">
              <Link
                href={essentialUrl}
                className="signature-button signature-button-secondary"
              >
                {localText.essential.name}
              </Link>

              <Link
                href={premiumUrl}
                className="signature-button signature-button-secondary"
              >
                {localText.premium.name}
              </Link>

              <Link
                href={signatureUrl}
                className="signature-button signature-button-primary"
              >
                {localText.signature.name}

                <span aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | FAQ
          |--------------------------------------------------------------------------
          */}

          <section className="signature-faq">
            <div className="signature-section-heading">
              <span className="signature-section-label">
                {text.faq.label}
              </span>

              <h2>
                {text.faq.title}
              </h2>
            </div>

            <div className="signature-faq-list">
              {text.faq.items.map(
                (item) => (
                  <details
                    className="signature-faq-item"
                    key={item.question}
                  >
                    <summary>
                      {item.question}
                    </summary>

                    <p>
                      {item.answer}
                    </p>
                  </details>
                )
              )}
            </div>
          </section>

          <p className="signature-disclaimer">
            {text.disclaimer}
          </p>
        </main>
      </div>
    </AuthProvider>
  );
}
