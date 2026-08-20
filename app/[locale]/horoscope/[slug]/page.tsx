import type {
  Metadata,
} from "next";

import Link from "next/link";

import {
  notFound,
} from "next/navigation";

import AuthProvider from "@/components/AuthProvider";
import DailyHoroscopeShareCard from "@/components/DailyHoroscopeShareCard";
import SiteHeader from "@/components/SiteHeader";

import {
  isLocale,
  locales,
} from "@/i18n/config";

import {
  HOROSCOPE_TRANSLATIONS,
} from "@/i18n/pages/horoscope";

import "../../../horoscope/page.css";
import "../../../horoscope/horoscope.css";

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const SITE_URL =
  "https://luna-astralis.app";

/*
|--------------------------------------------------------------------------
| Mise à jour dynamique
|--------------------------------------------------------------------------
*/

export const dynamic =
  "force-dynamic";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

type DailyText = {
  eyebrow: string;
  titlePrefix: string;
  introduction: string;

  loveTitle: string;
  loveText: string;

  workTitle: string;
  workText: string;

  moneyTitle: string;
  moneyText: string;

  wellBeingTitle: string;
  wellBeingText: string;

  adviceTitle: string;
  adviceText: string;

  backButton: string;
  premiumButton: string;

  elementLabel: string;
};

/*
|--------------------------------------------------------------------------
| Textes des 6 langues
|--------------------------------------------------------------------------
*/

const DAILY_TEXTS: Record<
  string,
  DailyText
> = {
  /*
  |--------------------------------------------------------------------------
  | Français
  |--------------------------------------------------------------------------
  */

  fr: {
    eyebrow:
      "Horoscope du jour",

    titlePrefix:
      "Horoscope",

    introduction:
      "Découvrez les énergies qui peuvent influencer votre journée.",

    loveTitle:
      "Amour",

    loveText:
      "Prenez le temps d’écouter vos émotions et de communiquer avec sincérité.",

    workTitle:
      "Travail",

    workText:
      "Avancez avec méthode et concentrez-vous sur vos priorités essentielles.",

    moneyTitle:
      "Finances",

    moneyText:
      "Réfléchissez avant de prendre une décision financière importante.",

    wellBeingTitle:
      "Bien-être",

    wellBeingText:
      "Accordez-vous un moment pour ralentir et retrouver votre équilibre.",

    adviceTitle:
      "Conseil du jour",

    adviceText:
      "Faites confiance à votre intuition, tout en gardant les pieds sur terre.",

    backButton:
      "Voir les 12 signes",

    premiumButton:
      "Découvrir l’horoscope premium",

    elementLabel:
      "Élément",
  },

  /*
  |--------------------------------------------------------------------------
  | Anglais
  |--------------------------------------------------------------------------
  */

  en: {
    eyebrow:
      "Daily horoscope",

    titlePrefix:
      "Horoscope",

    introduction:
      "Discover the energies that may influence your day.",

    loveTitle:
      "Love",

    loveText:
      "Take time to understand your emotions and communicate sincerely.",

    workTitle:
      "Work",

    workText:
      "Move forward methodically and focus on your most important priorities.",

    moneyTitle:
      "Finances",

    moneyText:
      "Think carefully before making an important financial decision.",

    wellBeingTitle:
      "Well-being",

    wellBeingText:
      "Give yourself time to slow down and restore your balance.",

    adviceTitle:
      "Advice of the day",

    adviceText:
      "Trust your intuition while keeping your feet firmly on the ground.",

    backButton:
      "View all 12 signs",

    premiumButton:
      "Discover the premium horoscope",

    elementLabel:
      "Element",
  },

  /*
  |--------------------------------------------------------------------------
  | Espagnol
  |--------------------------------------------------------------------------
  */

  es: {
    eyebrow:
      "Horóscopo diario",

    titlePrefix:
      "Horóscopo",

    introduction:
      "Descubre las energías que pueden influir en tu día.",

    loveTitle:
      "Amor",

    loveText:
      "Tómate el tiempo para comprender tus emociones y comunicarte con sinceridad.",

    workTitle:
      "Trabajo",

    workText:
      "Avanza con método y concéntrate en tus prioridades esenciales.",

    moneyTitle:
      "Finanzas",

    moneyText:
      "Reflexiona antes de tomar una decisión financiera importante.",

    wellBeingTitle:
      "Bienestar",

    wellBeingText:
      "Date un momento para reducir el ritmo y recuperar tu equilibrio.",

    adviceTitle:
      "Consejo del día",

    adviceText:
      "Confía en tu intuición sin perder el sentido de la realidad.",

    backButton:
      "Ver los 12 signos",

    premiumButton:
      "Descubrir el horóscopo premium",

    elementLabel:
      "Elemento",
  },

  /*
  |--------------------------------------------------------------------------
  | Allemand
  |--------------------------------------------------------------------------
  */

  de: {
    eyebrow:
      "Tageshoroskop",

    titlePrefix:
      "Horoskop",

    introduction:
      "Entdecke die Energien, die deinen Tag beeinflussen können.",

    loveTitle:
      "Liebe",

    loveText:
      "Nimm dir Zeit, deine Gefühle zu verstehen und ehrlich zu kommunizieren.",

    workTitle:
      "Arbeit",

    workText:
      "Gehe strukturiert vor und konzentriere dich auf deine wichtigsten Prioritäten.",

    moneyTitle:
      "Finanzen",

    moneyText:
      "Denke sorgfältig nach, bevor du eine wichtige finanzielle Entscheidung triffst.",

    wellBeingTitle:
      "Wohlbefinden",

    wellBeingText:
      "Nimm dir einen Moment, um langsamer zu werden und dein Gleichgewicht wiederzufinden.",

    adviceTitle:
      "Tipp des Tages",

    adviceText:
      "Vertraue deiner Intuition und bleibe gleichzeitig realistisch.",

    backButton:
      "Alle 12 Zeichen ansehen",

    premiumButton:
      "Premium-Horoskop entdecken",

    elementLabel:
      "Element",
  },

  /*
  |--------------------------------------------------------------------------
  | Italien
  |--------------------------------------------------------------------------
  */

  it: {
    eyebrow:
      "Oroscopo del giorno",

    titlePrefix:
      "Oroscopo",

    introduction:
      "Scopri le energie che possono influenzare la tua giornata.",

    loveTitle:
      "Amore",

    loveText:
      "Prenditi il tempo per comprendere le tue emozioni e comunicare con sincerità.",

    workTitle:
      "Lavoro",

    workText:
      "Procedi con metodo e concentrati sulle tue priorità essenziali.",

    moneyTitle:
      "Finanze",

    moneyText:
      "Rifletti attentamente prima di prendere una decisione finanziaria importante.",

    wellBeingTitle:
      "Benessere",

    wellBeingText:
      "Concediti un momento per rallentare e ritrovare il tuo equilibrio.",

    adviceTitle:
      "Consiglio del giorno",

    adviceText:
      "Fidati del tuo intuito, mantenendo però i piedi per terra.",

    backButton:
      "Vedi tutti i 12 segni",

    premiumButton:
      "Scopri l’oroscopo premium",

    elementLabel:
      "Elemento",
  },

  /*
  |--------------------------------------------------------------------------
  | Portugais
  |--------------------------------------------------------------------------
  */

  pt: {
    eyebrow:
      "Horóscopo diário",

    titlePrefix:
      "Horóscopo",

    introduction:
      "Descubra as energias que podem influenciar o seu dia.",

    loveTitle:
      "Amor",

    loveText:
      "Reserve um tempo para compreender suas emoções e se comunicar com sinceridade.",

    workTitle:
      "Trabalho",

    workText:
      "Avance com organização e concentre-se nas suas prioridades essenciais.",

    moneyTitle:
      "Finanças",

    moneyText:
      "Pense com cuidado antes de tomar uma decisão financeira importante.",

    wellBeingTitle:
      "Bem-estar",

    wellBeingText:
      "Reserve um momento para desacelerar e recuperar seu equilíbrio.",

    adviceTitle:
      "Conselho do dia",

    adviceText:
      "Confie na sua intuição, mantendo os pés firmes no chão.",

    backButton:
      "Ver os 12 signos",

    premiumButton:
      "Descobrir o horóscopo premium",

    elementLabel:
      "Elemento",
  },
};

/*
|--------------------------------------------------------------------------
| Routes statiques
|--------------------------------------------------------------------------
*/

export function generateStaticParams() {
  return locales.flatMap(
    (
      locale,
    ) => {
      const translation =
        HOROSCOPE_TRANSLATIONS[
          locale
        ];

      return translation.signs.map(
        (
          sign,
        ) => ({
          locale,

          slug:
            sign.slug,
        }),
      );
    },
  );
}

/*
|--------------------------------------------------------------------------
| Trouver le signe
|--------------------------------------------------------------------------
*/

function getSign(
  locale: string,
  slug: string,
) {
  if (
    !isLocale(
      locale,
    )
  ) {
    return null;
  }

  return (
    HOROSCOPE_TRANSLATIONS[
      locale
    ].signs.find(
      (
        sign,
      ) =>
        sign.slug ===
        slug,
    ) ??
    null
  );
}

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
    slug,
  } =
    params;

  if (
    !isLocale(
      locale,
    )
  ) {
    return {};
  }

  const sign =
    getSign(
      locale,
      slug,
    );

  if (
    !sign
  ) {
    return {};
  }

  const pageText =
    DAILY_TEXTS[
      locale
    ] ??
    DAILY_TEXTS.fr;

  const pageUrl =
    `${SITE_URL}/${locale}/horoscope/${slug}`;

  const title =
    `${pageText.titlePrefix} ${sign.name} aujourd’hui | Luna Astralis`;

  const description =
    `${pageText.introduction} ${sign.name} : amour, travail, finances et bien-être.`;

  return {
    title,

    description,

    alternates: {
      canonical:
        pageUrl,
    },

    openGraph: {
      title,

      description,

      url:
        pageUrl,

      siteName:
        "Luna Astralis",

      type:
        "article",
    },

    twitter: {
      card:
        "summary_large_image",

      title,

      description,
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
| Page Horoscope du jour
|--------------------------------------------------------------------------
*/

export default function DailySignHoroscopePage({
  params,
}: Props) {
  const {
    locale,
    slug,
  } =
    params;

  /*
  |--------------------------------------------------------------------------
  | Validation locale
  |--------------------------------------------------------------------------
  */

  if (
    !isLocale(
      locale,
    )
  ) {
    notFound();
  }

  /*
  |--------------------------------------------------------------------------
  | Signe
  |--------------------------------------------------------------------------
  */

  const sign =
    getSign(
      locale,
      slug,
    );

  if (
    !sign
  ) {
    notFound();
  }

  /*
  |--------------------------------------------------------------------------
  | Textes
  |--------------------------------------------------------------------------
  */

  const pageText =
    DAILY_TEXTS[
      locale
    ] ??
    DAILY_TEXTS.fr;

  /*
  |--------------------------------------------------------------------------
  | Date du jour
  |--------------------------------------------------------------------------
  */

  const now =
    new Date();

  const dateDuJour =
    new Intl.DateTimeFormat(
      HOROSCOPE_TRANSLATIONS[
        locale
      ].dateLocale,
      {
        weekday:
          "long",

        day:
          "numeric",

        month:
          "long",

        year:
          "numeric",

        timeZone:
          "America/Toronto",
      },
    ).format(
      now,
    );

  /*
  |--------------------------------------------------------------------------
  | URL
  |--------------------------------------------------------------------------
  */

  const pageUrl =
    `${SITE_URL}/${locale}/horoscope/${slug}`;

  /*
  |--------------------------------------------------------------------------
  | Données structurées
  |--------------------------------------------------------------------------
  */

  const jsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "Article",

    headline:
      `${pageText.titlePrefix} ${sign.name}`,

    description:
      pageText.introduction,

    url:
      pageUrl,

    inLanguage:
      locale,

    datePublished:
      now.toISOString(),

    dateModified:
      now.toISOString(),

    publisher: {
      "@type":
        "Organization",

      name:
        "Luna Astralis",

      url:
        SITE_URL,
    },
  };

  /*
  |--------------------------------------------------------------------------
  | Affichage
  |--------------------------------------------------------------------------
  */

  return (
    <AuthProvider>
      <SiteHeader />

      <main className="horoscope-page">
        {/*
        |--------------------------------------------------------------------------
        | Données structurées
        |--------------------------------------------------------------------------
        */}

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

        {/*
        |--------------------------------------------------------------------------
        | Hero
        |--------------------------------------------------------------------------
        */}

        <section
          className="horoscope-hero"
          aria-labelledby="daily-horoscope-title"
        >
          <div
            className="horoscope-hero-glow"
            aria-hidden="true"
          />

          <div className="horoscope-hero-content">
            <span className="horoscope-eyebrow">
              {
                pageText.eyebrow
              }
            </span>

            <span
              className="horoscope-sign-symbol"
              aria-hidden="true"
            >
              {
                sign.symbol
              }
            </span>

            <h1 id="daily-horoscope-title">
              {
                pageText.titlePrefix
              }{" "}
              {
                sign.name
              }
            </h1>

            <p className="horoscope-date">
              {
                dateDuJour
              }
            </p>

            <p className="horoscope-intro">
              {
                pageText.introduction
              }
            </p>

            <p className="horoscope-sign-dates">
              {
                sign.dates
              }
            </p>

            <span className="horoscope-sign-element">
              {
                pageText.elementLabel
              }{" "}
              {
                sign.element
              }
            </span>
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Horoscope du jour
        |--------------------------------------------------------------------------
        */}

        <section
          className="horoscope-signs-section"
          aria-label={`${pageText.titlePrefix} ${sign.name}`}
        >
          <div className="horoscope-signs-grid">
            {/*
            |--------------------------------------------------------------------------
            | Amour
            |--------------------------------------------------------------------------
            */}

            <article className="horoscope-info-card">
              <div>
                <h2>
                  {
                    pageText.loveTitle
                  }
                </h2>

                <p>
                  {
                    pageText.loveText
                  }
                </p>
              </div>
            </article>

            {/*
            |--------------------------------------------------------------------------
            | Travail
            |--------------------------------------------------------------------------
            */}

            <article className="horoscope-info-card">
              <div>
                <h2>
                  {
                    pageText.workTitle
                  }
                </h2>

                <p>
                  {
                    pageText.workText
                  }
                </p>
              </div>
            </article>

            {/*
            |--------------------------------------------------------------------------
            | Finances
            |--------------------------------------------------------------------------
            */}

            <article className="horoscope-info-card">
              <div>
                <h2>
                  {
                    pageText.moneyTitle
                  }
                </h2>

                <p>
                  {
                    pageText.moneyText
                  }
                </p>
              </div>
            </article>

            {/*
            |--------------------------------------------------------------------------
            | Bien-être
            |--------------------------------------------------------------------------
            */}

            <article className="horoscope-info-card">
              <div>
                <h2>
                  {
                    pageText.wellBeingTitle
                  }
                </h2>

                <p>
                  {
                    pageText.wellBeingText
                  }
                </p>
              </div>
            </article>
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Conseil du jour
        |--------------------------------------------------------------------------
        */}

        <section
          className="horoscope-info-section"
          aria-labelledby="daily-advice-title"
        >
          <div className="horoscope-info-card">
            <span
              className="horoscope-info-icon"
              aria-hidden="true"
            >
              ☾
            </span>

            <div>
              <h2 id="daily-advice-title">
                {
                  pageText.adviceTitle
                }
              </h2>

              <p>
                {
                  pageText.adviceText
                }
              </p>
            </div>
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Carte partageable
        |--------------------------------------------------------------------------
        */}

        <DailyHoroscopeShareCard
          locale={
            locale
          }
          signName={
            sign.name
          }
          signSymbol={
            sign.symbol
          }
          date={
            dateDuJour
          }
          loveTitle={
            pageText.loveTitle
          }
          loveText={
            pageText.loveText
          }
          workTitle={
            pageText.workTitle
          }
          workText={
            pageText.workText
          }
          moneyTitle={
            pageText.moneyTitle
          }
          moneyText={
            pageText.moneyText
          }
          wellBeingTitle={
            pageText.wellBeingTitle
          }
          wellBeingText={
            pageText.wellBeingText
          }
          adviceTitle={
            pageText.adviceTitle
          }
          adviceText={
            pageText.adviceText
          }
        />

        {/*
        |--------------------------------------------------------------------------
        | CTA
        |--------------------------------------------------------------------------
        */}

        <section className="horoscope-cta-section">
          <div className="horoscope-cta">
            <div className="horoscope-cta-actions">
              <Link
                href={`/${locale}/horoscope`}
                className="horoscope-secondary-button"
              >
                {
                  pageText.backButton
                }
              </Link>

              <Link
                href={`/${locale}/horoscope/premium`}
                className="horoscope-primary-button"
              >
                {
                  pageText.premiumButton
                }
              </Link>
            </div>
          </div>
        </section>
      </main>
    </AuthProvider>
  );
}
