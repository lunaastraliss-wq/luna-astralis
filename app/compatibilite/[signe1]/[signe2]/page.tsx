import __i18n from "../../../../i18n/migrated/fr/app/compatibilite/index/index/page.json";
import type {
  Metadata,
} from "next";

import Link from "next/link";

import {
  notFound,
} from "next/navigation";

import {
  getCompatibility,
} from "@/lib/compatibility";

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
      signe1:
        compatibility.signA,

      signe2:
        compatibility.signB,
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
      canonical:
        canonicalUrl,
    },

    openGraph: {
      title:
        compatibility.title,

      description:
        compatibility.metaDescription,

      url:
        canonicalUrl,

      siteName:
        __i18n["luna_astralis"],

      type:
        "article",

      locale:
        "fr_CA",
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

  /*
  |--------------------------------------------------------------------------
  | Score identique au calculateur gratuit
  |--------------------------------------------------------------------------
  */

  const compatibilityResult =
    getCompatibility(
      signA.key,
      signB.key,
    );

  /*
  |--------------------------------------------------------------------------
  | Données structurées
  |--------------------------------------------------------------------------
  */

  const pageUrl =
    `https://luna-astralis.app/compatibilite/${signA.key}/${signB.key}`;

  const jsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "Article",

    headline:
      compatibility.title,

    description:
      compatibility.metaDescription,

    url:
      pageUrl,

    mainEntityOfPage: {
      "@type":
        "WebPage",

      "@id":
        pageUrl,
    },

    author: {
      "@type":
        "Organization",

      name:
        "Luna Astralis",
    },

    publisher: {
      "@type":
        "Organization",

      name:
        "Luna Astralis",
    },
  };

  /*
  |--------------------------------------------------------------------------
  | Affichage
  |--------------------------------------------------------------------------
  */

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
          aria-label={__i18n["fil_d_ariane"]}
        >
          <Link href="/">
            Accueil
          </Link>

          <span aria-hidden="true">
            /
          </span>

          <Link href="/compatibilite">
            {__i18n["compatibilite"]}</Link>

          <span aria-hidden="true">
            /
          </span>

          <span>
            {signA.label} et{" "}
            {signB.label}
          </span>
        </nav>

        {/*
        |--------------------------------------------------------------------------
        | Présentation
        |--------------------------------------------------------------------------
        */}

        <section className="compat-detail-hero">
          <span className="compat-detail-label">
            {__i18n["compatibilite_amoureuse"]}</span>

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
              {__i18n["compatibilite_generale"]}</span>

            <strong>
              {compatibilityResult.score} %
            </strong>
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Analyse détaillée
        |--------------------------------------------------------------------------
        */}

        <section className="compat-detail-content">
          <article className="compat-detail-section">
            <span aria-hidden="true">
              ♡
            </span>

            <div>
              <h2>
                {__i18n["compatibilite_amoureuse_2"]}</h2>

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
                {__i18n["attraction_et_alchimie"]}</h2>

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
                {__i18n["vie_quotidienne"]}</h2>

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
                {__i18n["forces_de_la_relation"]}</h2>

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
                {__i18n["defis_a_surmonter"]}</h2>

              <p>
                {compatibility.challenges}
              </p>
            </div>
          </article>

          <article
            className="
              compat-detail-section
              compat-detail-section-advice
            "
          >
            <span aria-hidden="true">
              ✧
            </span>

            <div>
              <h2>
                {__i18n["conseil_astrologique"]}</h2>

              <p>
                {compatibility.advice}
              </p>
            </div>
          </article>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Résumé
        |--------------------------------------------------------------------------
        */}

        <section className="compat-detail-conclusion">
          <span className="compat-detail-label">
            {__i18n["en_resume"]}</span>

          <h2>
            {__i18n["ce_que_cette_relation_peut_devenir"]}</h2>

          <p>
            {compatibility.conclusion}
          </p>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Compatibilité Premium
        |--------------------------------------------------------------------------
        */}

        <section className="compat-detail-premium">
          <div>
            <span className="compat-detail-label">
              {__i18n["analyse_personnalisee"]}</span>

            <h2>
              {__i18n["vos_signes_ne_revelent_qu_une_partie_de_votre_histoire"]}</h2>

            <p>
              {__i18n["decouvrez_votre_veritable_dynamique_amoureuse_grace_a_la_com"]}</p>
          </div>

          <Link
            href="/compatibilite/premium"
            className="compat-detail-button"
          >
            {__i18n["decouvrir_votre_compatibilite_premium"]}</Link>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Retour
        |--------------------------------------------------------------------------
        */}

        <div className="compat-detail-back">
          <Link href="/compatibilite">
            {__i18n["tester_une_autre_combinaison"]}</Link>
        </div>

        <p className="compat-detail-disclaimer">
          {__i18n["l_astrologie_est_proposee_comme_un_outil_symbolique_d_explor"]}</p>
      </main>
    </div>
  );
}
