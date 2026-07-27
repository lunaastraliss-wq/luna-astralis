import type {
  Metadata,
} from "next";

import Link from "next/link";
import {
  notFound,
} from "next/navigation";

import {
  COMPATIBILITY_PAGES,
  getCompatibilityPage,
  getSignByKey,
  isSignKey,
} from "@/lib/compatibility-pages";

import "./page.css";

/*
|--------------------------------------------------------------------------
| Propriétés
|--------------------------------------------------------------------------
*/

type CompatibilityDetailPageProps = {
  params: Promise<{
    signe1: string;
    signe2: string;
  }>;
};

/*
|--------------------------------------------------------------------------
| Pages générées statiquement
|--------------------------------------------------------------------------
*/

export function generateStaticParams() {
  return COMPATIBILITY_PAGES.map(
    (compatibility) => ({
      signe1: compatibility.signA,
      signe2: compatibility.signB,
    }),
  );
}

/*
|--------------------------------------------------------------------------
| Métadonnées SEO
|--------------------------------------------------------------------------
*/

export async function generateMetadata({
  params,
}: CompatibilityDetailPageProps): Promise<Metadata> {
  const {
    signe1,
    signe2,
  } = await params;

  if (
    !isSignKey(signe1) ||
    !isSignKey(signe2)
  ) {
    return {};
  }

  const compatibility =
    getCompatibilityPage(
      signe1,
      signe2,
    );

  if (!compatibility) {
    return {};
  }

  const canonicalUrl =
    `https://luna-astralis.app/compatibilite/${signe1}/${signe2}`;

  return {
    title:
      `${compatibility.title} | Luna Astralis`,

    description:
      compatibility.metaDescription,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: compatibility.title,
      description:
        compatibility.metaDescription,
      url: canonicalUrl,
      siteName: "Luna Astralis",
      type: "article",
      locale: "fr_CA",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default async function CompatibilityDetailPage({
  params,
}: CompatibilityDetailPageProps) {
  const {
    signe1,
    signe2,
  } = await params;

  if (
    !isSignKey(signe1) ||
    !isSignKey(signe2)
  ) {
    notFound();
  }

  const compatibility =
    getCompatibilityPage(
      signe1,
      signe2,
    );

  if (!compatibility) {
    notFound();
  }

  const signA =
    getSignByKey(
      compatibility.signA,
    );

  const signB =
    getSignByKey(
      compatibility.signB,
    );

  if (!signA || !signB) {
    notFound();
  }

  const pageUrl =
    `https://luna-astralis.app/compatibilite/${signA.key}/${signB.key}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline:
      compatibility.title,

    description:
      compatibility.metaDescription,

    url: pageUrl,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },

    author: {
      "@type": "Organization",
      name: "Luna Astralis",
    },

    publisher: {
      "@type": "Organization",
      name: "Luna Astralis",
    },
  };

  return (
    <div className="compat-detail-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              jsonLd,
            ).replace(
              /</g,
              "\\u003c",
            ),
        }}
      />

      <main className="compat-detail-main">
        <nav
          className="compat-detail-breadcrumb"
          aria-label="Fil d’Ariane"
        >
          <Link href="/">
            Accueil
          </Link>

          <span aria-hidden="true">
            /
          </span>

          <Link href="/compatibilite">
            Compatibilité
          </Link>

          <span aria-hidden="true">
            /
          </span>

          <span>
            {signA.label} et {signB.label}
          </span>
        </nav>

        <section className="compat-detail-hero">
          <span className="compat-detail-label">
            Compatibilité amoureuse
          </span>

          <div className="compat-detail-signs">
            <div className="compat-detail-sign">
              <span aria-hidden="true">
                {signA.symbol}
              </span>

              <strong>
                {signA.label}
              </strong>
            </div>

            <span
              className="compat-detail-heart"
              aria-hidden="true"
            >
              ♡
            </span>

            <div className="compat-detail-sign">
              <span aria-hidden="true">
                {signB.symbol}
              </span>

              <strong>
                {signB.label}
              </strong>
            </div>
          </div>

          <h1>
            {compatibility.title}
          </h1>

          <p>
            {compatibility.introduction}
          </p>

          <div className="compat-detail-score">
            <span>
              Compatibilité générale
            </span>

            <strong>
              {compatibility.score} %
            </strong>
          </div>
        </section>

        <section className="compat-detail-content">
          <article className="compat-detail-section">
            <span aria-hidden="true">
              ♡
            </span>

            <div>
              <h2>
                Compatibilité amoureuse
              </h2>

              <p>
                {compatibility.love}
              </p>
            </div>
          </article>

          <article className="compat-detail-section">
            <span aria-hidden="true">
              ☿
            </span>

            <div>
              <h2>
                Communication
              </h2>

              <p>
                {compatibility.communication}
              </p>
            </div>
          </article>

          <article className="compat-detail-section">
            <span aria-hidden="true">
              ♀
            </span>

            <div>
              <h2>
                Attraction et alchimie
              </h2>

              <p>
                {compatibility.attraction}
              </p>
            </div>
          </article>

          <article className="compat-detail-section">
            <span aria-hidden="true">
              ✦
            </span>

            <div>
              <h2>
                Confiance
              </h2>

              <p>
                {compatibility.trust}
              </p>
            </div>
          </article>

          <article className="compat-detail-section">
            <span aria-hidden="true">
              ☾
            </span>

            <div>
              <h2>
                Vie quotidienne
              </h2>

              <p>
                {compatibility.dailyLife}
              </p>
            </div>
          </article>

          <article className="compat-detail-section">
            <span aria-hidden="true">
              △
            </span>

            <div>
              <h2>
                Forces de la relation
              </h2>

              <p>
                {compatibility.strengths}
              </p>
            </div>
          </article>

          <article className="compat-detail-section">
            <span aria-hidden="true">
              ⚖
            </span>

            <div>
              <h2>
                Défis à surmonter
              </h2>

              <p>
                {compatibility.challenges}
              </p>
            </div>
          </article>

          <article className="compat-detail-section compat-detail-section-advice">
            <span aria-hidden="true">
              ✧
            </span>

            <div>
              <h2>
                Conseil astrologique
              </h2>

              <p>
                {compatibility.advice}
              </p>
            </div>
          </article>
        </section>

        <section className="compat-detail-conclusion">
          <span className="compat-detail-label">
            En résumé
          </span>

          <h2>
            Une relation intense à construire ensemble
          </h2>

          <p>
            {compatibility.conclusion}
          </p>
        </section>

        <section className="compat-detail-premium">
          <div>
            <span className="compat-detail-label">
              Analyse personnalisée
            </span>

            <h2>
              Vos signes ne racontent qu’une partie de votre histoire
            </h2>

            <p>
              Découvrez votre compatibilité réelle grâce à la
              comparaison de vos deux thèmes astraux complets,
              incluant vos planètes, vos maisons et vos aspects
              de synastrie.
            </p>
          </div>

          <Link
            href="/compatibilite/premium"
            className="compat-detail-button"
          >
            Découvrir la compatibilité Premium
          </Link>
        </section>

        <div className="compat-detail-back">
          <Link href="/compatibilite">
            ← Faire un autre test gratuit
          </Link>
        </div>

        <p className="compat-detail-disclaimer">
          L’astrologie est proposée comme un outil symbolique
          d’exploration personnelle et relationnelle. Elle ne
          détermine pas à elle seule la réussite d’une relation.
        </p>
      </main>
    </div>
  );
}
