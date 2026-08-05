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
  ESSENTIAL_TRANSLATIONS,
} from "@/i18n/pages/carte-du-ciel/essentielle";

import "../../../carte-du-ciel/essentielle/page.css";

/*
|--------------------------------------------------------------------------
| Informations du rapport
|--------------------------------------------------------------------------
*/

const SITE_URL =
  "https://luna-astralis.app";

const REPORT_PREVIEW_URL =
  "/reports/apercu-rapport-carte-du-ciel-essentielle.pdf";

const REPORT_COVER_URL =
  "/reports/couverture-carte-du-ciel-essentielle.png";

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
    ESSENTIAL_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/carte-du-ciel/essentielle`;

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
          `${SITE_URL}/fr/carte-du-ciel/essentielle`,

        en:
          `${SITE_URL}/en/carte-du-ciel/essentielle`,

        es:
          `${SITE_URL}/es/carte-du-ciel/essentielle`,

        de:
          `${SITE_URL}/de/carte-du-ciel/essentielle`,

        it:
          `${SITE_URL}/it/carte-du-ciel/essentielle`,

        pt:
          `${SITE_URL}/pt/carte-du-ciel/essentielle`,

        "x-default":
          `${SITE_URL}/fr/carte-du-ciel/essentielle`,
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

export default function EssentiellePage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    ESSENTIAL_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/carte-du-ciel/essentielle`;

  const chartUrl =
    `/${locale}/carte-du-ciel`;

  /*
  |--------------------------------------------------------------------------
  | Données structurées
  |--------------------------------------------------------------------------
  */

  const jsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "Product",

    name:
      text.jsonLd.name,

    description:
      text.jsonLd.description,

    image:
      `${SITE_URL}${REPORT_COVER_URL}`,

    brand: {
      "@type":
        "Brand",

      name:
        "Luna Astralis",
    },

    url:
      pageUrl,

    inLanguage:
      text.metadata.language,

    offers: {
      "@type":
        "Offer",

      price:
        "24.99",

      priceCurrency:
        "USD",

      availability:
        "https://schema.org/InStock",

      url:
        pageUrl,
    },
  };

  return (
    <AuthProvider>
      <SiteHeader />

      <div className="essential-page">
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

        <main className="essential-main">
          {/*
          |--------------------------------------------------------------------------
          | Hero
          |--------------------------------------------------------------------------
          */}

          <section
            className="essential-hero"
            aria-labelledby="essential-title"
          >
            <div
              className="essential-hero-glow"
              aria-hidden="true"
            />

            <div
              className="essential-hero-stars"
              aria-hidden="true"
            />

            <div className="essential-hero-copy">
              <div className="essential-hero-badge">
                {text.hero.badge}
              </div>

              <p className="essential-hero-eyebrow">
                {text.hero.eyebrow}
              </p>

              <h1 id="essential-title">
                {text.hero.titleBefore}

                <span>
                  {" "}
                  {text.hero.titleHighlight}
                </span>
              </h1>

              <p className="essential-hero-description">
                {text.hero.description}
              </p>

              <div className="essential-hero-actions">
                <Link
                  href="#commande"
                  className="essential-button essential-button-primary"
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
                  className="essential-button essential-button-secondary"
                >
                  {text.hero.previewButton}
                </a>
              </div>

              <a
                href={REPORT_PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="essential-hero-preview-link"
              >
                {text.hero.previewLink}
              </a>

              <div className="essential-hero-trust">
                <span>
                  ✓ {text.reportPages}
                </span>

                <span>
                  ✓ {text.hero.personalizedPdf}
                </span>

                <span>
                  ✓ {text.hero.downloadAfterPayment}
                </span>
              </div>

              <div className="essential-hero-price">
                <div>
                  <span>
                    {text.hero.reportName}
                  </span>

                  <small>
                    {text.hero.uniquePayment}
                  </small>
                </div>

                <strong>
                  {text.reportPrice}
                </strong>
              </div>
            </div>

            <div className="essential-hero-visual">
              <div
                className="essential-cover-glow"
                aria-hidden="true"
              />

              <div className="essential-cover-frame">
                <Image
                  src={REPORT_COVER_URL}
                  alt={text.hero.coverAlt}
                  width={707}
                  height={1000}
                  priority
                  className="essential-cover-image"
                />
              </div>

              <div className="essential-cover-badge">
                <span aria-hidden="true">
                  ✦
                </span>

                {text.hero.createdForYou}
              </div>

              <div
                className="essential-hero-orbit essential-hero-orbit-one"
                aria-hidden="true"
              >
                <span>
                  ☉
                </span>
              </div>

              <div
                className="essential-hero-orbit essential-hero-orbit-two"
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

          <section className="essential-introduction">
            <div className="essential-section-heading">
              <span className="essential-section-label">
                {text.introduction.label}
              </span>

              <h2>
                {text.introduction.title}
              </h2>

              <p>
                {text.introduction.description}
              </p>
            </div>

            <div className="essential-introduction-grid">
              <article className="essential-introduction-card">
                <div className="essential-introduction-icon">
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
                  href={chartUrl}
                  className="essential-text-link"
                >
                  {text.introduction.freeChartLink}

                  <span aria-hidden="true">
                    {" "}
                    →
                  </span>
                </Link>
              </article>

              <article className="essential-introduction-card essential-introduction-card-featured">
                <div className="essential-introduction-card-label">
                  {text.introduction.featuredLabel}
                </div>

                <div className="essential-introduction-icon">
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
                  href="#commande"
                  className="essential-text-link"
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
          | Présentation du rapport
          |--------------------------------------------------------------------------
          */}

          <section
            id="apercu"
            className="essential-report-showcase"
          >
            <div className="essential-report-visual">
              <div className="essential-report-cover-wrapper">
                <Image
                  src={REPORT_COVER_URL}
                  alt={text.showcase.coverAlt}
                  width={566}
                  height={800}
                  className="essential-report-cover"
                />
              </div>

              <div
                className="essential-report-page essential-report-page-back"
                aria-hidden="true"
              >
                <span>
                  Luna Astralis
                </span>
              </div>

              <div
                className="essential-report-page essential-report-page-middle"
                aria-hidden="true"
              >
                <span>
                  {text.showcase.middlePageText}
                </span>
              </div>
            </div>

            <div className="essential-report-copy">
              <span className="essential-section-label">
                {text.showcase.label}
              </span>

              <h2>
                {text.showcase.title}
              </h2>

              <p>
                {text.showcase.description}
              </p>

              <div className="essential-report-statistics">
                <div>
                  <strong>
                    17
                  </strong>

                  <span>
                    {text.showcase.personalizedPages}
                  </span>
                </div>

                <div>
                  <strong>
                    3
                  </strong>

                  <span>
                    {text.showcase.mainPillars}
                  </span>
                </div>

                <div>
                  <strong>
                    1
                  </strong>

                  <span>
                    {text.showcase.uniqueChart}
                  </span>
                </div>
              </div>

              <ul className="essential-check-list">
                {text.showcase.checklist.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  )
                )}
              </ul>

              <div className="essential-report-actions">
                <a
                  href={REPORT_PREVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="essential-button essential-button-primary"
                >
                  {text.showcase.previewButton}
                </a>

                <Link
                  href="#commande"
                  className="essential-button essential-button-secondary"
                >
                  {text.showcase.createButton}
                </Link>
              </div>
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | Contenu du rapport
          |--------------------------------------------------------------------------
          */}

          <section className="essential-contents">
            <div className="essential-section-heading">
              <span className="essential-section-label">
                {text.contents.label}
              </span>

              <h2>
                {text.contents.title}
              </h2>

              <p>
                {text.contents.description}
              </p>
            </div>

            <div className="essential-feature-grid">
              {text.contents.features.map(
                (feature) => (
                  <article
                    className="essential-feature-card"
                    key={feature.title}
                  >
                    <div className="essential-feature-icon">
                      {feature.icon}
                    </div>

                    <h3>
                      {feature.title}
                    </h3>

                    <p>
                      {feature.description}
                    </p>
                  </article>
                )
              )}
            </div>

            <div className="essential-section-action">
              <Link
                href="#commande"
                className="essential-button essential-button-primary"
              >
                {text.contents.button}

                <span aria-hidden="true">
                  ✦
                </span>
              </Link>
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | Bénéfices
          |--------------------------------------------------------------------------
          */}

          <section className="essential-benefits">
            <div className="essential-benefits-copy">
              <span className="essential-section-label">
                {text.benefits.label}
              </span>

              <h2>
                {text.benefits.title}
              </h2>

              <p>
                {text.benefits.description}
              </p>

              <a
                href={REPORT_PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="essential-text-link"
              >
                {text.benefits.previewLink}

                <span aria-hidden="true">
                  {" "}
                  →
                </span>
              </a>
            </div>

            <div className="essential-benefit-grid">
              {text.benefits.items.map(
                (item) => (
                  <article
                    className="essential-benefit-card"
                    key={item.title}
                  >
                    <div className="essential-benefit-icon">
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

          <section className="essential-process">
            <div className="essential-section-heading">
              <span className="essential-section-label">
                {text.process.label}
              </span>

              <h2>
                {text.process.title}
              </h2>

              <p>
                {text.process.description}
              </p>
            </div>

            <div className="essential-process-grid">
              {text.process.steps.map(
                (step) => (
                  <article
                    className="essential-process-card"
                    key={step.number}
                  >
                    <span className="essential-process-number">
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

            <div className="essential-section-action">
              <Link
                href="#commande"
                className="essential-button essential-button-primary"
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
          | Formulaire de commande
          |--------------------------------------------------------------------------
          */}

          <section
            id="commande"
            className="essential-order"
          >
            <div
              className="essential-order-glow"
              aria-hidden="true"
            />

            <div className="essential-section-heading">
              <span className="essential-section-label">
                {text.order.label}
              </span>

              <h2>
                {text.order.title}
              </h2>

              <p>
                {text.order.description}
              </p>
            </div>

            <div className="essential-order-layout">
              <div className="essential-order-form">
                <ReportCheckoutForm
                  reportType="essential"
                  locale={locale}
                />
              </div>

              <aside className="essential-order-summary">
                <span className="essential-order-summary-label">
                  {text.order.summaryLabel}
                </span>

                <h3>
                  {text.order.reportName}
                </h3>

                <div className="essential-order-price">
                  <strong>
                    {text.reportPrice}
                  </strong>

                  <span>
                    {text.order.uniquePayment}
                  </span>
                </div>

                <ul>
                  {text.order.items.map(
                    (item) => (
                      <li key={item}>
                        {item}
                      </li>
                    )
                  )}
                </ul>

                <div className="essential-order-security">
                  <span aria-hidden="true">
                    🔒
                  </span>

                  <p>
                    {text.order.securePayment}

                    <small>
                      {text.order.noSubscription}
                    </small>
                  </p>
                </div>

                <a
                  href={REPORT_PREVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="essential-order-preview-link"
                >
                  {text.order.previewLink}

                  <span aria-hidden="true">
                    {" "}
                    →
                  </span>
                </a>
              </aside>
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | FAQ
          |--------------------------------------------------------------------------
          */}

          <section className="essential-faq">
            <div className="essential-section-heading">
              <span className="essential-section-label">
                {text.faq.label}
              </span>

              <h2>
                {text.faq.title}
              </h2>
            </div>

            <div className="essential-faq-list">
              {text.faq.items.map(
                (item) => (
                  <details
                    className="essential-faq-item"
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

          {/*
          |--------------------------------------------------------------------------
          | Comparaison des rapports
          |--------------------------------------------------------------------------
          */}

          <section className="essential-comparison">
            <div
              className="essential-comparison-glow"
              aria-hidden="true"
            />

            <span className="essential-section-label">
              {text.comparison.label}
            </span>

            <h2>
              {text.comparison.title}
            </h2>

            <p>
              {text.comparison.description}
            </p>

            <div className="essential-comparison-actions">
              <Link
                href={chartUrl}
                className="essential-button essential-button-primary"
              >
                {text.comparison.compareButton}

                <span aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="#commande"
                className="essential-button essential-button-secondary"
              >
                {text.comparison.chooseButton}
              </Link>
            </div>
          </section>

          <p className="essential-disclaimer">
            {text.disclaimer}
          </p>
        </main>
      </div>
    </AuthProvider>
  );
}
