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
  PREMIUM_TRANSLATIONS,
} from "@/i18n/pages/carte-du-ciel/premium";

import "../../../carte-du-ciel/premium/page.css";

/*
|--------------------------------------------------------------------------
| Informations du rapport
|--------------------------------------------------------------------------
*/

const SITE_URL =
  "https://luna-astralis.app";

const REPORT_PREVIEW_URL =
  "/reports/apercu-rapport-carte-du-ciel-premium.pdf";

const REPORT_COVER_URL =
  "/reports/couverture-carte-du-ciel-premium.png";

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
    PREMIUM_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/carte-du-ciel/premium`;

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
          `${SITE_URL}/fr/carte-du-ciel/premium`,

        en:
          `${SITE_URL}/en/carte-du-ciel/premium`,

        es:
          `${SITE_URL}/es/carte-du-ciel/premium`,

        de:
          `${SITE_URL}/de/carte-du-ciel/premium`,

        it:
          `${SITE_URL}/it/carte-du-ciel/premium`,

        pt:
          `${SITE_URL}/pt/carte-du-ciel/premium`,

        "x-default":
          `${SITE_URL}/fr/carte-du-ciel/premium`,
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

export default function PremiumPage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    PREMIUM_TRANSLATIONS[
      locale
    ];

  const pageUrl =
    `${SITE_URL}/${locale}/carte-du-ciel/premium`;

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
        "49.99",

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

      <div className="premium-page">
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

        <main className="premium-main">
          {/*
          |--------------------------------------------------------------------------
          | Hero
          |--------------------------------------------------------------------------
          */}

          <section
            className="premium-hero"
            aria-labelledby="premium-title"
          >
            <div
              className="premium-hero-glow"
              aria-hidden="true"
            />

            <div
              className="premium-hero-stars"
              aria-hidden="true"
            />

            <div className="premium-hero-copy">
              <div className="premium-hero-badge">
                {text.hero.badge}
              </div>

              <p className="premium-hero-eyebrow">
                {text.hero.eyebrow}
              </p>

              <h1 id="premium-title">
                {text.hero.titleBefore}

                <span>
                  {" "}
                  {text.hero.titleHighlight}
                </span>
              </h1>

              <p className="premium-hero-description">
                {text.hero.description}
              </p>

              <div className="premium-hero-actions">
                <Link
                  href="#commande"
                  className="premium-button premium-button-primary"
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
                  className="premium-button premium-button-secondary"
                >
                  {text.hero.previewButton}
                </a>
              </div>

              <a
                href={REPORT_PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-hero-preview-link"
              >
                {text.hero.previewLink}
              </a>

              <div className="premium-hero-trust">
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

              <div className="premium-hero-price">
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

            <div className="premium-hero-visual">
              <div
                className="premium-cover-glow"
                aria-hidden="true"
              />

              <div className="premium-cover-frame">
                <Image
                  src={REPORT_COVER_URL}
                  alt={text.hero.coverAlt}
                  width={707}
                  height={1000}
                  priority
                  className="premium-cover-image"
                />
              </div>

              <div className="premium-cover-badge">
                <span aria-hidden="true">
                  ✦
                </span>

                {text.hero.createdForYou}
              </div>

              <div
                className="premium-hero-orbit premium-hero-orbit-one"
                aria-hidden="true"
              >
                <span>
                  ☉
                </span>
              </div>

              <div
                className="premium-hero-orbit premium-hero-orbit-two"
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

          <section className="premium-introduction">
            <div className="premium-section-heading">
              <span className="premium-section-label">
                {text.introduction.label}
              </span>

              <h2>
                {text.introduction.title}
              </h2>

              <p>
                {text.introduction.description}
              </p>
            </div>

            <div className="premium-introduction-grid">
              <article className="premium-introduction-card">
                <div className="premium-introduction-icon">
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
                  className="premium-text-link"
                >
                  {text.introduction.freeChartLink}

                  <span aria-hidden="true">
                    {" "}
                    →
                  </span>
                </Link>
              </article>

              <article className="premium-introduction-card premium-introduction-card-featured">
                <div className="premium-introduction-card-label">
                  {text.introduction.featuredLabel}
                </div>

                <div className="premium-introduction-icon">
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
                  className="premium-text-link"
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
            className="premium-report-showcase"
          >
            <div className="premium-report-visual">
              <div className="premium-report-cover-wrapper">
                <Image
                  src={REPORT_COVER_URL}
                  alt={text.showcase.coverAlt}
                  width={566}
                  height={800}
                  className="premium-report-cover"
                />
              </div>

              <div
                className="premium-report-page premium-report-page-back"
                aria-hidden="true"
              >
                <span>
                  Luna Astralis
                </span>
              </div>

              <div
                className="premium-report-page premium-report-page-middle"
                aria-hidden="true"
              >
                <span>
                  {text.showcase.middlePageText}
                </span>
              </div>
            </div>

            <div className="premium-report-copy">
              <span className="premium-section-label">
                {text.showcase.label}
              </span>

              <h2>
                {text.showcase.title}
              </h2>

              <p>
                {text.showcase.description}
              </p>

              <div className="premium-report-statistics">
                <div>
                  <strong>
                    40
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

              <ul className="premium-check-list">
                {text.showcase.checklist.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  )
                )}
              </ul>

              <div className="premium-report-actions">
                <a
                  href={REPORT_PREVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button premium-button-primary"
                >
                  {text.showcase.previewButton}
                </a>

                <Link
                  href="#commande"
                  className="premium-button premium-button-secondary"
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

          <section className="premium-contents">
            <div className="premium-section-heading">
              <span className="premium-section-label">
                {text.contents.label}
              </span>

              <h2>
                {text.contents.title}
              </h2>

              <p>
                {text.contents.description}
              </p>
            </div>

            <div className="premium-feature-grid">
              {text.contents.features.map(
                (feature) => (
                  <article
                    className="premium-feature-card"
                    key={feature.title}
                  >
                    <div className="premium-feature-icon">
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

            <div className="premium-section-action">
              <Link
                href="#commande"
                className="premium-button premium-button-primary"
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

          <section className="premium-benefits">
            <div className="premium-benefits-copy">
              <span className="premium-section-label">
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
                className="premium-text-link"
              >
                {text.benefits.previewLink}

                <span aria-hidden="true">
                  {" "}
                  →
                </span>
              </a>
            </div>

            <div className="premium-benefit-grid">
              {text.benefits.items.map(
                (item) => (
                  <article
                    className="premium-benefit-card"
                    key={item.title}
                  >
                    <div className="premium-benefit-icon">
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

          <section className="premium-process">
            <div className="premium-section-heading">
              <span className="premium-section-label">
                {text.process.label}
              </span>

              <h2>
                {text.process.title}
              </h2>

              <p>
                {text.process.description}
              </p>
            </div>

            <div className="premium-process-grid">
              {text.process.steps.map(
                (step) => (
                  <article
                    className="premium-process-card"
                    key={step.number}
                  >
                    <span className="premium-process-number">
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

            <div className="premium-section-action">
              <Link
                href="#commande"
                className="premium-button premium-button-primary"
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
            className="premium-order"
          >
            <div
              className="premium-order-glow"
              aria-hidden="true"
            />

            <div className="premium-section-heading">
              <span className="premium-section-label">
                {text.order.label}
              </span>

              <h2>
                {text.order.title}
              </h2>

              <p>
                {text.order.description}
              </p>
            </div>

            <div className="premium-order-layout">
              <div className="premium-order-form">
                <ReportCheckoutForm
                  reportType="premium"
                />
              </div>

              <aside className="premium-order-summary">
                <span className="premium-order-summary-label">
                  {text.order.summaryLabel}
                </span>

                <h3>
                  {text.order.reportName}
                </h3>

                <div className="premium-order-price">
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

                <div className="premium-order-security">
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
                  className="premium-order-preview-link"
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

          <section className="premium-faq">
            <div className="premium-section-heading">
              <span className="premium-section-label">
                {text.faq.label}
              </span>

              <h2>
                {text.faq.title}
              </h2>
            </div>

            <div className="premium-faq-list">
              {text.faq.items.map(
                (item) => (
                  <details
                    className="premium-faq-item"
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

          <section className="premium-comparison">
            <div
              className="premium-comparison-glow"
              aria-hidden="true"
            />

            <span className="premium-section-label">
              {text.comparison.label}
            </span>

            <h2>
              {text.comparison.title}
            </h2>

            <p>
              {text.comparison.description}
            </p>

            <div className="premium-comparison-actions">
              <Link
                href={chartUrl}
                className="premium-button premium-button-primary"
              >
                {text.comparison.compareButton}

                <span aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="#commande"
                className="premium-button premium-button-secondary"
              >
                {text.comparison.chooseButton}
              </Link>
            </div>
          </section>

          <p className="premium-disclaimer">
            {text.disclaimer}
          </p>
        </main>
      </div>
    </AuthProvider>
  );
}
