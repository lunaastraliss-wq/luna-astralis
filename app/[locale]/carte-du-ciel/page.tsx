import type {
  Metadata,
} from "next";

import Image from "next/image";
import Link from "next/link";
import {
  notFound,
} from "next/navigation";

import AuthProvider from "@/components/AuthProvider";
import ReportCheckoutForm from "@/components/ReportCheckoutForm";
import SiteHeader from "@/components/SiteHeader";

import {
  isLocale,
  locales,
} from "@/i18n/config";

import {
  REPORTS_TRANSLATIONS,
} from "@/i18n/pages/carte-du-ciel/reports";

import "../../carte-du-ciel/signature/page.css";

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const SITE_URL =
  "https://luna-astralis.app";

const REPORT_PREVIEW_URL =
  "/reports/apercu-rapport-carte-du-ciel-signature.pdf";

const REPORT_COVER_URL =
  "/reports/couverture-carte-du-ciel-signature.png";

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
| Métadonnées
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

  const pageUrl =
    `${SITE_URL}/${locale}/carte-du-ciel`;

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
            "Rapport Essentielle",

          url:
            `${SITE_URL}${essentialUrl}`,
        },

        {
          "@type":
            "ListItem",

          position:
            2,

          name:
            "Rapport Premium",

          url:
            `${SITE_URL}${premiumUrl}`,
        },

        {
          "@type":
            "ListItem",

          position:
            3,

          name:
            "Rapport Signature",

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

                <a
                  href={REPORT_PREVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="signature-button signature-button-secondary"
                >
                  {text.hero.previewButton}
                </a>
              </div>

              <a
                href={REPORT_PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="signature-hero-preview-link"
              >
                {text.hero.previewLink}
              </a>

              <div className="signature-hero-trust">
                <span>
                  ✓ 3 niveaux
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
                  href={`/${locale}/carte-du-ciel/gratuite`}
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
                Choisissez votre niveau
              </span>

              <h2>
                Essentielle, Premium ou Signature
              </h2>

              <p>
                Choisissez le niveau d’analyse qui correspond à
                vos besoins et à la profondeur de lecture que
                vous recherchez.
              </p>
            </div>

            <div className="signature-feature-grid">
              <article className="signature-feature-card">
                <div className="signature-feature-icon">
                  ✦
                </div>

                <h3>
                  Essentielle
                </h3>

                <p>
                  Un premier portrait clair de votre Soleil,
                  votre Lune, votre Ascendant, vos planètes,
                  vos éléments et vos modalités.
                </p>

                <p>
                  <strong>
                    17 pages · 24,99 $ US
                  </strong>
                </p>

                <Link
                  href={essentialUrl}
                  className="signature-text-link"
                >
                  Découvrir Essentielle
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
                  Premium
                </h3>

                <p>
                  Une analyse approfondie de vos maisons,
                  aspects, dominantes, relations, forces,
                  défis et potentiel professionnel.
                </p>

                <p>
                  <strong>
                    40 pages · 49,99 $ US
                  </strong>
                </p>

                <Link
                  href={premiumUrl}
                  className="signature-text-link"
                >
                  Découvrir Premium
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
                  Signature
                </h3>

                <p>
                  L’analyse la plus complète, avec votre
                  évolution personnelle et une synthèse
                  astrologique finale.
                </p>

                <p>
                  <strong>
                    58 pages · 79,99 $ US
                  </strong>
                </p>

                <Link
                  href={signatureUrl}
                  className="signature-text-link"
                >
                  Découvrir Signature
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
                Comparer les trois rapports

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
          | Comparaison
          |--------------------------------------------------------------------------
          */}

          <section className="signature-comparison">
            <div
              className="signature-comparison-glow"
              aria-hidden="true"
            />

            <span className="signature-section-label">
              Trois niveaux personnalisés
            </span>

            <h2>
              Choisissez le rapport qui vous correspond
            </h2>

            <p>
              Essentielle vous présente les fondations de votre
              thème, Premium approfondit vos grandes dynamiques
              et Signature offre l’expérience astrologique la
              plus complète.
            </p>

            <div className="signature-comparison-actions">
              <Link
                href={essentialUrl}
                className="signature-button signature-button-secondary"
              >
                Essentielle
              </Link>

              <Link
                href={premiumUrl}
                className="signature-button signature-button-secondary"
              >
                Premium
              </Link>

              <Link
                href={signatureUrl}
                className="signature-button signature-button-primary"
              >
                Signature

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
