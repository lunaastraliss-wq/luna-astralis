// app/[locale]/astrologie/aspects/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  isLocale,
  locales,
} from "@/i18n/config";

import {
  ASPECTS_TRANSLATIONS,
} from "@/i18n/pages/astrologie/aspects";

import "../../../astrologie/aspects/page.css";

const SITE_URL =
  "https://luna-astralis.app";

type Props = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

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
    ASPECTS_TRANSLATIONS[locale];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/aspects`;

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
          `${SITE_URL}/fr/astrologie/aspects`,

        en:
          `${SITE_URL}/en/astrologie/aspects`,

        es:
          `${SITE_URL}/es/astrologie/aspects`,

        de:
          `${SITE_URL}/de/astrologie/aspects`,

        it:
          `${SITE_URL}/it/astrologie/aspects`,

        pt:
          `${SITE_URL}/pt/astrologie/aspects`,

        "x-default":
          `${SITE_URL}/fr/astrologie/aspects`,
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

      locale:
        text.metadata.locale,

      type:
        "article",
    },

    twitter: {
      card:
        "summary_large_image",

      title:
        text.metadata.twitterTitle,

      description:
        text.metadata.twitterDescription,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function AspectsAstrologiquesPage({
  params,
}: Props) {
  const {
    locale,
  } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    ASPECTS_TRANSLATIONS[locale];

  const pageUrl =
    `${SITE_URL}/${locale}/astrologie/aspects`;

  const localize = (
    path: string
  ) =>
    `/${locale}${path}`;

  const jsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "CollectionPage",

    name:
      text.jsonLd.name,

    headline:
      text.jsonLd.headline,

    description:
      text.jsonLd.description,

    inLanguage:
      text.metadata.language,

    url:
      pageUrl,

    mainEntity: {
      "@type":
        "ItemList",

      itemListElement:
        text.aspects.map(
          (
            aspect,
            index
          ) => ({
            "@type":
              "ListItem",

            position:
              index + 1,

            name:
              aspect.name,

            url:
              `${SITE_URL}${localize(
                `/astrologie/aspects/${aspect.slug}`
              )}`,
          })
        ),
    },

    publisher: {
      "@type":
        "Organization",

      name:
        "Luna Astralis",

      url:
        SITE_URL,
    },
  };

  const faqJsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "FAQPage",

    mainEntity:
      text.faq.map(
        (item) => ({
          "@type":
            "Question",

          name:
            item.question,

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              item.answer,
          },
        })
      ),
  };

  return (
    <div className="aspects-page">
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              faqJsonLd
            ).replace(
              /</g,
              "\\u003c"
            ),
        }}
      />

      <main className="aspects-wrap">
        <section className="aspects-hero">
          <div className="aspects-badge">
            {text.badge}
          </div>

          <h1>
            {text.title}
          </h1>

          <p className="aspects-hero-lead">
            {text.lead}
          </p>

          <div className="aspects-hero-actions">
            <Link
              href={localize(
                "/carte-du-ciel"
              )}
              className="aspects-primary-button"
            >
              {text.createChart}
            </Link>

            <a
              href="#liste-des-aspects"
              className="aspects-secondary-button"
            >
              {text.exploreAspects}
            </a>
          </div>

          <div
            className="aspects-orbit"
            aria-hidden="true"
          >
            {text.aspects.map(
              (aspect) => (
                <span key={aspect.slug}>
                  <strong>
                    {aspect.symbol}
                  </strong>

                  <small>
                    {aspect.degree}
                  </small>
                </span>
              )
            )}
          </div>
        </section>

        <article className="aspects-content">
          <section>
            <span className="aspects-kicker">
              {text.introduction.kicker}
            </span>

            <h2>
              {text.introduction.title}
            </h2>

            {text.introduction.paragraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}
          </section>

          <section>
            <h2>
              {text.interpretationTitle}
            </h2>

            <div className="aspects-reading-grid">
              {text.interpretationSteps.map(
                (step) => (
                  <article
                    className="aspects-reading-card"
                    key={step.number}
                  >
                    <span className="aspects-reading-number">
                      {step.number}
                    </span>

                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.text}
                    </p>
                  </article>
                )
              )}
            </div>
          </section>

          <section id="liste-des-aspects">
            <span className="aspects-kicker">
              {text.aspectsSection.kicker}
            </span>

            <h2>
              {text.aspectsSection.title}
            </h2>

            <p>
              {text.aspectsSection.description}
            </p>

            <div className="aspects-grid">
              {text.aspects.map(
                (aspect) => (
                  <article
                    className="aspect-card"
                    key={aspect.slug}
                  >
                    <div className="aspect-card-top">
                      <div className="aspect-symbol-wrap">
                        <span className="aspect-symbol">
                          {aspect.symbol}
                        </span>

                        <span className="aspect-degree">
                          {aspect.degree}
                        </span>
                      </div>

                      <span className="aspect-category">
                        {aspect.category}
                      </span>
                    </div>

                    <h3>
                      {aspect.title}
                    </h3>

                    <p className="aspect-keywords">
                      {aspect.keywords}
                    </p>

                    <p>
                      {aspect.text}
                    </p>

                    <Link
                      href={localize(
                        `/astrologie/aspects/${aspect.slug}`
                      )}
                      className="aspect-link"
                      aria-label={`${text.discoverAria} ${aspect.name}`}
                    >
                      {text.discoverLabel}{" "}
                      {aspect.name.toLowerCase()}

                      <span aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </article>
                )
              )}
            </div>
          </section>

          <section>
            <span className="aspects-kicker">
              {text.groups.kicker}
            </span>

            <h2>
              {text.groups.title}
            </h2>

            <div className="aspects-groups-grid">
              <article className="aspects-group-card">
                <div className="aspects-group-icons">
                  △ ⚹
                </div>

                <h3>
                  {
                    text.groups
                      .harmoniousTitle
                  }
                </h3>

                {text.groups.harmoniousParagraphs.map(
                  (paragraph) => (
                    <p key={paragraph}>
                      {paragraph}
                    </p>
                  )
                )}
              </article>

              <article className="aspects-group-card">
                <div className="aspects-group-icons">
                  □ ☍
                </div>

                <h3>
                  {
                    text.groups
                      .dynamicTitle
                  }
                </h3>

                {text.groups.dynamicParagraphs.map(
                  (paragraph) => (
                    <p key={paragraph}>
                      {paragraph}
                    </p>
                  )
                )}
              </article>
            </div>
          </section>

          <section>
            <h2>
              {text.conjunction.title}
            </h2>

            <div className="aspects-focus-card">
              <span className="aspects-focus-symbol">
                ☌
              </span>

              <div>
                <h3>
                  {text.conjunction.subtitle}
                </h3>

                {text.conjunction.paragraphs.map(
                  (paragraph) => (
                    <p key={paragraph}>
                      {paragraph}
                    </p>
                  )
                )}

                <Link
                  href={localize(
                    "/astrologie/aspects/conjonction"
                  )}
                  className="aspects-text-link"
                >
                  {text.conjunction.link}
                </Link>
              </div>
            </div>
          </section>

          <section>
            <span className="aspects-kicker">
              {text.orb.kicker}
            </span>

            <h2>
              {text.orb.title}
            </h2>

            <p>
              {text.orb.introduction}
            </p>

            <div className="aspects-orb-grid">
              {text.orb.cards.map(
                (card) => (
                  <article
                    className="aspects-orb-card"
                    key={card.value}
                  >
                    <span className="aspects-orb-value">
                      {card.value}
                    </span>

                    <h3>
                      {card.title}
                    </h3>

                    <p>
                      {card.text}
                    </p>
                  </article>
                )
              )}
            </div>

            <p>
              {text.orb.conclusion}
            </p>
          </section>

          <section>
            <h2>
              {text.movement.title}
            </h2>

            <div className="aspects-movement-grid">
              {text.movement.cards.map(
                (card) => (
                  <article
                    className="aspects-movement-card"
                    key={card.title}
                  >
                    <span className="aspects-movement-icon">
                      {card.icon}
                    </span>

                    <div>
                      <h3>
                        {card.title}
                      </h3>

                      <p>
                        {card.text}
                      </p>
                    </div>
                  </article>
                )
              )}
            </div>
          </section>

          <section>
            <h2>
              {text.importance.title}
            </h2>

            {text.importance.paragraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}

            <div className="aspects-cta-card">
              <div>
                <span className="aspects-kicker">
                  {text.cta.kicker}
                </span>

                <h2>
                  {text.cta.title}
                </h2>

                <p>
                  {text.cta.text}
                </p>
              </div>

              <Link
                href={localize(
                  "/carte-du-ciel"
                )}
                className="aspects-primary-button"
              >
                {text.cta.button}
              </Link>
            </div>
          </section>

          <section className="aspects-faq">
            <span className="aspects-kicker">
              {text.faqKicker}
            </span>

            <h2>
              {text.faqTitle}
            </h2>

            <div className="aspects-faq-list">
              {text.faq.map(
                (item) => (
                  <details
                    className="aspects-faq-item"
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

          <p className="aspects-disclaimer">
            {text.disclaimer}
          </p>
        </article>
      </main>
    </div>
  );
}
