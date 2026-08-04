// app/[locale]/compatibilite/[signe1]/[signe2]/page.tsx

import frPage from "../../../../../i18n/migrated/fr/app/compatibilite/index/index/page.json";
import enPage from "../../../../../i18n/migrated/en/app/compatibilite/index/index/page.json";
import esPage from "../../../../../i18n/migrated/es/app/compatibilite/index/index/page.json";
import dePage from "../../../../../i18n/migrated/de/app/compatibilite/index/index/page.json";
import itPage from "../../../../../i18n/migrated/it/app/compatibilite/index/index/page.json";
import ptPage from "../../../../../i18n/migrated/pt/app/compatibilite/index/index/page.json";

import frCompatibility from "../../../../../i18n/migrated/fr/lib/compatibility-pages.json";
import enCompatibility from "../../../../../i18n/migrated/en/lib/compatibility-pages.json";
import esCompatibility from "../../../../../i18n/migrated/es/lib/compatibility-pages.json";
import deCompatibility from "../../../../../i18n/migrated/de/lib/compatibility-pages.json";
import itCompatibility from "../../../../../i18n/migrated/it/lib/compatibility-pages.json";
import ptCompatibility from "../../../../../i18n/migrated/pt/lib/compatibility-pages.json";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getCompatibility } from "@/lib/compatibility";

import {
  COMPATIBILITY_PAGES,
  getCompatibilityPage,
  getSignByKey,
  isSignKey,
} from "@/lib/compatibility-pages";

import {
  isLocale,
  type Locale,
} from "@/i18n/config";

import "./page.css";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type Dictionary = Record<
  string,
  string
>;

type CompatibilityDetailPageProps = {
  params: Promise<{
    locale: string;
    signe1: string;
    signe2: string;
  }>;
};

/*
|--------------------------------------------------------------------------
| Langues
|--------------------------------------------------------------------------
*/

const LOCALES: Locale[] = [
  "fr",
  "en",
  "es",
  "de",
  "it",
  "pt",
];

/*
|--------------------------------------------------------------------------
| Dictionnaires
|--------------------------------------------------------------------------
*/

const PAGE_DICTIONARIES: Record<
  Locale,
  Dictionary
> = {
  fr: frPage,
  en: enPage,
  es: esPage,
  de: dePage,
  it: itPage,
  pt: ptPage,
};

const COMPATIBILITY_DICTIONARIES: Record<
  Locale,
  Dictionary
> = {
  fr: frCompatibility,
  en: enCompatibility,
  es: esCompatibility,
  de: deCompatibility,
  it: itCompatibility,
  pt: ptCompatibility,
};

/*
|--------------------------------------------------------------------------
| Création des clés i18n
|--------------------------------------------------------------------------
|
| Reproduit les clés générées par le script de migration :
|
| "Compatibilité amoureuse"
| devient :
| "compatibilite_amoureuse"
|
*/

function createTranslationKey(
  value: string,
): string {
  return value
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      "",
    )
    .toLowerCase()
    .replace(
      /['’]/g,
      "_",
    )
    .replace(
      /[^a-z0-9]+/g,
      "_",
    )
    .replace(
      /^_+|_+$/g,
      "",
    )
    .replace(
      /_+/g,
      "_",
    )
    .slice(
      0,
      64,
    );
}

/*
|--------------------------------------------------------------------------
| Traduction
|--------------------------------------------------------------------------
*/

function createTranslator(
  locale: Locale,
) {
  const pageDictionary =
    PAGE_DICTIONARIES[locale];

  const compatibilityDictionary =
    COMPATIBILITY_DICTIONARIES[
      locale
    ];

  return (
    originalValue: string,
  ): string => {
    if (!originalValue) {
      return originalValue;
    }

    const key =
      createTranslationKey(
        originalValue,
      );

    return (
      compatibilityDictionary[
        key
      ] ??
      pageDictionary[key] ??
      originalValue
    );
  };
}

/*
|--------------------------------------------------------------------------
| URL
|--------------------------------------------------------------------------
*/

function getPageUrl(
  locale: Locale,
  signe1: string,
  signe2: string,
): string {
  return (
    `https://luna-astralis.app` +
    `/${locale}` +
    `/compatibilite` +
    `/${signe1}` +
    `/${signe2}`
  );
}

/*
|--------------------------------------------------------------------------
| Pages générées statiquement
|--------------------------------------------------------------------------
*/

export function generateStaticParams() {
  return LOCALES.flatMap(
    (locale) =>
      COMPATIBILITY_PAGES.map(
        (compatibility) => ({
          locale,

          signe1:
            compatibility.signA,

          signe2:
            compatibility.signB,
        }),
      ),
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
    locale,
    signe1,
    signe2,
  } = await params;

  if (
    !isLocale(locale) ||
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

  const t =
    createTranslator(locale);

  const title =
    t(compatibility.title);

  const description =
    t(
      compatibility.metaDescription,
    );

  const canonicalUrl =
    getPageUrl(
      locale,
      signe1,
      signe2,
    );

  return {
    title:
      `${title} | Luna Astralis`,

    description,

    alternates: {
      canonical:
        canonicalUrl,

      languages: {
        fr:
          getPageUrl(
            "fr",
            signe1,
            signe2,
          ),

        en:
          getPageUrl(
            "en",
            signe1,
            signe2,
          ),

        es:
          getPageUrl(
            "es",
            signe1,
            signe2,
          ),

        de:
          getPageUrl(
            "de",
            signe1,
            signe2,
          ),

        it:
          getPageUrl(
            "it",
            signe1,
            signe2,
          ),

        pt:
          getPageUrl(
            "pt",
            signe1,
            signe2,
          ),

        "x-default":
          getPageUrl(
            "fr",
            signe1,
            signe2,
          ),
      },
    },

    openGraph: {
      title,
      description,

      url:
        canonicalUrl,

      siteName:
        "Luna Astralis",

      type:
        "article",

      locale:
        locale === "fr"
          ? "fr_CA"
          : locale,
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
    locale,
    signe1,
    signe2,
  } = await params;

  if (
    !isLocale(locale) ||
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

  const __i18n =
    PAGE_DICTIONARIES[locale];

  const t =
    createTranslator(locale);

  const compatibilityResult =
    getCompatibility(
      signA.key,
      signB.key,
    );

  const localizedHome =
    `/${locale}`;

  const localizedCompatibility =
    `/${locale}/compatibilite`;

  const localizedPremium =
    `/${locale}/compatibilite/premium`;

  const pageUrl =
    getPageUrl(
      locale,
      signA.key,
      signB.key,
    );

  const translatedTitle =
    t(compatibility.title);

  const translatedDescription =
    t(
      compatibility.metaDescription,
    );

  const translatedSignA =
    t(signA.label);

  const translatedSignB =
    t(signB.label);

  const jsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "Article",

    headline:
      translatedTitle,

    description:
      translatedDescription,

    url:
      pageUrl,

    inLanguage:
      locale,

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
          aria-label={
            __i18n[
              "fil_d_ariane"
            ] ??
            "Breadcrumb"
          }
        >
          <Link
            href={
              localizedHome
            }
          >
            {
              __i18n[
                "accueil"
              ] ??
              t("Accueil")
            }
          </Link>

          <span aria-hidden="true">
            /
          </span>

          <Link
            href={
              localizedCompatibility
            }
          >
            {
              __i18n[
                "compatibilite"
              ] ??
              t("Compatibilité")
            }
          </Link>

          <span aria-hidden="true">
            /
          </span>

          <span>
            {translatedSignA}
            {" "}
            {
              __i18n["et"] ??
              t("et")
            }
            {" "}
            {translatedSignB}
          </span>
        </nav>

        <section className="compat-detail-hero">
          <span className="compat-detail-label">
            {
              __i18n[
                "compatibilite_amoureuse"
              ] ??
              t(
                "Compatibilité amoureuse",
              )
            }
          </span>

          <div className="compat-detail-signs">
            <div className="compat-detail-sign">
              <span aria-hidden="true">
                {signA.symbol}
              </span>

              <strong>
                {translatedSignA}
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
                {translatedSignB}
              </strong>
            </div>
          </div>

          <h1>
            {translatedTitle}
          </h1>

          <p>
            {
              t(
                compatibility.introduction,
              )
            }
          </p>

          <div className="compat-detail-score">
            <span>
              {
                __i18n[
                  "compatibilite_generale"
                ] ??
                t(
                  "Compatibilité générale",
                )
              }
            </span>

            <strong>
              {
                compatibilityResult.score
              }
              {" %"}
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
                {
                  __i18n[
                    "compatibilite_amoureuse_2"
                  ] ??
                  t(
                    "Compatibilité amoureuse",
                  )
                }
              </h2>

              <p>
                {
                  t(
                    compatibility.love,
                  )
                }
              </p>
            </div>
          </article>

          <article className="compat-detail-section">
            <span aria-hidden="true">
              ☿
            </span>

            <div>
              <h2>
                {
                  __i18n[
                    "communication"
                  ] ??
                  t("Communication")
                }
              </h2>

              <p>
                {
                  t(
                    compatibility.communication,
                  )
                }
              </p>
            </div>
          </article>

          <article className="compat-detail-section">
            <span aria-hidden="true">
              ♀
            </span>

            <div>
              <h2>
                {
                  __i18n[
                    "attraction_et_alchimie"
                  ] ??
                  t(
                    "Attraction et alchimie",
                  )
                }
              </h2>

              <p>
                {
                  t(
                    compatibility.attraction,
                  )
                }
              </p>
            </div>
          </article>

          <article className="compat-detail-section">
            <span aria-hidden="true">
              ✦
            </span>

            <div>
              <h2>
                {
                  __i18n[
                    "confiance"
                  ] ??
                  t("Confiance")
                }
              </h2>

              <p>
                {
                  t(
                    compatibility.trust,
                  )
                }
              </p>
            </div>
          </article>

          <article className="compat-detail-section">
            <span aria-hidden="true">
              ☾
            </span>

            <div>
              <h2>
                {
                  __i18n[
                    "vie_quotidienne"
                  ] ??
                  t(
                    "Vie quotidienne",
                  )
                }
              </h2>

              <p>
                {
                  t(
                    compatibility.dailyLife,
                  )
                }
              </p>
            </div>
          </article>

          <article className="compat-detail-section">
            <span aria-hidden="true">
              △
            </span>

            <div>
              <h2>
                {
                  __i18n[
                    "forces_de_la_relation"
                  ] ??
                  t(
                    "Forces de la relation",
                  )
                }
              </h2>

              <p>
                {
                  t(
                    compatibility.strengths,
                  )
                }
              </p>
            </div>
          </article>

          <article className="compat-detail-section">
            <span aria-hidden="true">
              ⚖
            </span>

            <div>
              <h2>
                {
                  __i18n[
                    "defis_a_surmonter"
                  ] ??
                  t(
                    "Défis à surmonter",
                  )
                }
              </h2>

              <p>
                {
                  t(
                    compatibility.challenges,
                  )
                }
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
                {
                  __i18n[
                    "conseil_astrologique"
                  ] ??
                  t(
                    "Conseil astrologique",
                  )
                }
              </h2>

              <p>
                {
                  t(
                    compatibility.advice,
                  )
                }
              </p>
            </div>
          </article>
        </section>

        <section className="compat-detail-conclusion">
          <span className="compat-detail-label">
            {
              __i18n[
                "en_resume"
              ] ??
              t("En résumé")
            }
          </span>

          <h2>
            {
              __i18n[
                "ce_que_cette_relation_peut_devenir"
              ] ??
              t(
                "Ce que cette relation peut devenir",
              )
            }
          </h2>

          <p>
            {
              t(
                compatibility.conclusion,
              )
            }
          </p>
        </section>

        <section className="compat-detail-premium">
          <div>
            <span className="compat-detail-label">
              {
                __i18n[
                  "analyse_personnalisee"
                ] ??
                t(
                  "Analyse personnalisée",
                )
              }
            </span>

            <h2>
              {
                __i18n[
                  "vos_signes_ne_revelent_qu_une_partie_de_votre_histoire"
                ] ??
                t(
                  "Vos signes ne révèlent qu’une partie de votre histoire",
                )
              }
            </h2>

            <p>
              {
                __i18n[
                  "decouvrez_votre_veritable_dynamique_amoureuse_grace_a_la_com"
                ] ??
                t(
                  "Découvrez votre véritable dynamique amoureuse grâce à la comparaison de vos cartes du ciel.",
                )
              }
            </p>
          </div>

          <Link
            href={
              localizedPremium
            }
            className="compat-detail-button"
          >
            {
              __i18n[
                "decouvrir_votre_compatibilite_premium"
              ] ??
              t(
                "Découvrir votre compatibilité Premium",
              )
            }
          </Link>
        </section>

        <div className="compat-detail-back">
          <Link
            href={
              localizedCompatibility
            }
          >
            {
              __i18n[
                "tester_une_autre_combinaison"
              ] ??
              t(
                "Tester une autre combinaison",
              )
            }
          </Link>
        </div>

        <p className="compat-detail-disclaimer">
          {
            __i18n[
              "l_astrologie_est_proposee_comme_un_outil_symbolique_d_explor"
            ] ??
            t(
              "L’astrologie est proposée comme un outil symbolique d’exploration personnelle.",
            )
          }
        </p>
      </main>
    </div>
  );
}
