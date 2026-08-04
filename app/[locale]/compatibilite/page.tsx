// app/[locale]/compatibilite/page.tsx

import type {
  Metadata,
} from "next";

import Link from "next/link";
import { notFound } from "next/navigation";

import AuthProvider from "@/components/AuthProvider";
import CompatibilityCard from "@/components/CompatibilityCard";
import SiteHeader from "@/components/SiteHeader";

import {
  isLocale,
  type Locale,
} from "@/i18n/config";

import "../../compatibilite/page.css";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type CompatibilityPageText = {
  metadataTitle: string;
  metadataDescription: string;

  badge: string;
  title: string;
  description: string;
  calculatorAria: string;

  servicesLabel: string;
  servicesTitle: string;
  servicesDescription: string;

  popular: string;

  birthChartTitle: string;
  birthChartDescription: string;
  birthChartFeatures: string[];
  birthChartButton: string;

  premiumTitle: string;
  premiumDescription: string;
  premiumFeatures: string[];
  premiumButton: string;

  horoscopeTitle: string;
  horoscopeDescription: string;
  horoscopeFeatures: string[];
  horoscopeButton: string;
};

/*
|--------------------------------------------------------------------------
| Traductions
|--------------------------------------------------------------------------
*/

const TRANSLATIONS: Record<
  Locale,
  CompatibilityPageText
> = {
  fr: {
    metadataTitle:
      "Compatibilité amoureuse gratuite | Luna Astralis",

    metadataDescription:
      "Calculez gratuitement la compatibilité amoureuse entre deux signes astrologiques.",

    badge:
      "Test gratuit",

    title:
      "Compatibilité amoureuse",

    description:
      "Découvrez gratuitement l’alchimie entre deux signes astrologiques.",

    calculatorAria:
      "Calculateur de compatibilité amoureuse",

    servicesLabel:
      "Analyses personnalisées",

    servicesTitle:
      "Allez encore plus loin",

    servicesDescription:
      "Explorez votre personnalité, vos relations et votre avenir grâce à nos analyses astrologiques personnalisées.",

    popular:
      "Le plus populaire",

    birthChartTitle:
      "Carte du ciel Premium",

    birthChartDescription:
      "Recevez une analyse astrologique complète basée sur votre date, votre heure et votre lieu de naissance.",

    birthChartFeatures: [
      "Votre Soleil, votre Lune et votre Ascendant",
      "Vos planètes, maisons et aspects",
      "Vos forces, vos défis et votre potentiel",
      "Rapport PDF personnalisé",
    ],

    birthChartButton:
      "Découvrir les cartes du ciel",

    premiumTitle:
      "Compatibilité Premium",

    premiumDescription:
      "Comparez deux cartes du ciel complètes et découvrez les forces profondes de votre relation.",

    premiumFeatures: [
      "Compatibilité émotionnelle et amoureuse",
      "Communication et attirance",
      "Forces et tensions de la relation",
      "Rapport PDF personnalisé",
    ],

    premiumButton:
      "Découvrir la compatibilité",

    horoscopeTitle:
      "Horoscope Premium",

    horoscopeDescription:
      "Recevez des prévisions astrologiques personnalisées selon votre carte du ciel.",

    horoscopeFeatures: [
      "Horoscope du jour",
      "Prévisions mensuelles",
      "Prévisions annuelles",
      "Conseils personnalisés",
    ],

    horoscopeButton:
      "Découvrir les horoscopes",
  },

  en: {
    metadataTitle:
      "Free Love Compatibility | Luna Astralis",

    metadataDescription:
      "Calculate the love compatibility between two zodiac signs for free.",

    badge:
      "Free test",

    title:
      "Love compatibility",

    description:
      "Discover the chemistry between two zodiac signs for free.",

    calculatorAria:
      "Love compatibility calculator",

    servicesLabel:
      "Personalized readings",

    servicesTitle:
      "Go even further",

    servicesDescription:
      "Explore your personality, relationships and future with our personalized astrology readings.",

    popular:
      "Most popular",

    birthChartTitle:
      "Premium Birth Chart",

    birthChartDescription:
      "Receive a complete astrology reading based on your date, time and place of birth.",

    birthChartFeatures: [
      "Your Sun, Moon and Ascendant",
      "Your planets, houses and aspects",
      "Your strengths, challenges and potential",
      "Personalized PDF report",
    ],

    birthChartButton:
      "Discover birth charts",

    premiumTitle:
      "Premium Compatibility",

    premiumDescription:
      "Compare two complete birth charts and discover the deeper strengths of your relationship.",

    premiumFeatures: [
      "Emotional and romantic compatibility",
      "Communication and attraction",
      "Strengths and tensions in the relationship",
      "Personalized PDF report",
    ],

    premiumButton:
      "Discover compatibility",

    horoscopeTitle:
      "Premium Horoscope",

    horoscopeDescription:
      "Receive personalized astrology forecasts based on your birth chart.",

    horoscopeFeatures: [
      "Daily horoscope",
      "Monthly forecasts",
      "Yearly forecasts",
      "Personalized guidance",
    ],

    horoscopeButton:
      "Discover horoscopes",
  },

  es: {
    metadataTitle:
      "Compatibilidad amorosa gratis | Luna Astralis",

    metadataDescription:
      "Calcula gratis la compatibilidad amorosa entre dos signos del zodiaco.",

    badge:
      "Prueba gratis",

    title:
      "Compatibilidad amorosa",

    description:
      "Descubre gratis la química entre dos signos astrológicos.",

    calculatorAria:
      "Calculadora de compatibilidad amorosa",

    servicesLabel:
      "Análisis personalizados",

    servicesTitle:
      "Ve aún más lejos",

    servicesDescription:
      "Explora tu personalidad, tus relaciones y tu futuro con nuestros análisis astrológicos personalizados.",

    popular:
      "El más popular",

    birthChartTitle:
      "Carta natal Premium",

    birthChartDescription:
      "Recibe un análisis astrológico completo basado en tu fecha, hora y lugar de nacimiento.",

    birthChartFeatures: [
      "Tu Sol, tu Luna y tu Ascendente",
      "Tus planetas, casas y aspectos",
      "Tus fortalezas, desafíos y potencial",
      "Informe PDF personalizado",
    ],

    birthChartButton:
      "Descubrir las cartas natales",

    premiumTitle:
      "Compatibilidad Premium",

    premiumDescription:
      "Compara dos cartas natales completas y descubre las fuerzas profundas de tu relación.",

    premiumFeatures: [
      "Compatibilidad emocional y amorosa",
      "Comunicación y atracción",
      "Fortalezas y tensiones de la relación",
      "Informe PDF personalizado",
    ],

    premiumButton:
      "Descubrir la compatibilidad",

    horoscopeTitle:
      "Horóscopo Premium",

    horoscopeDescription:
      "Recibe predicciones astrológicas personalizadas según tu carta natal.",

    horoscopeFeatures: [
      "Horóscopo diario",
      "Predicciones mensuales",
      "Predicciones anuales",
      "Consejos personalizados",
    ],

    horoscopeButton:
      "Descubrir los horóscopos",
  },

  de: {
    metadataTitle:
      "Kostenlose Liebeskompatibilität | Luna Astralis",

    metadataDescription:
      "Berechnen Sie kostenlos die Liebeskompatibilität zwischen zwei Tierkreiszeichen.",

    badge:
      "Kostenloser Test",

    title:
      "Liebeskompatibilität",

    description:
      "Entdecken Sie kostenlos die Verbindung zwischen zwei Tierkreiszeichen.",

    calculatorAria:
      "Rechner für Liebeskompatibilität",

    servicesLabel:
      "Personalisierte Analysen",

    servicesTitle:
      "Gehen Sie noch weiter",

    servicesDescription:
      "Entdecken Sie Ihre Persönlichkeit, Beziehungen und Zukunft mit unseren personalisierten astrologischen Analysen.",

    popular:
      "Am beliebtesten",

    birthChartTitle:
      "Premium-Geburtshoroskop",

    birthChartDescription:
      "Erhalten Sie eine vollständige astrologische Analyse auf Grundlage Ihres Geburtsdatums, Ihrer Geburtszeit und Ihres Geburtsortes.",

    birthChartFeatures: [
      "Ihre Sonne, Ihr Mond und Ihr Aszendent",
      "Ihre Planeten, Häuser und Aspekte",
      "Ihre Stärken, Herausforderungen und Ihr Potenzial",
      "Personalisierter PDF-Bericht",
    ],

    birthChartButton:
      "Geburtshoroskope entdecken",

    premiumTitle:
      "Premium-Kompatibilität",

    premiumDescription:
      "Vergleichen Sie zwei vollständige Geburtshoroskope und entdecken Sie die tieferen Stärken Ihrer Beziehung.",

    premiumFeatures: [
      "Emotionale und romantische Kompatibilität",
      "Kommunikation und Anziehung",
      "Stärken und Spannungen der Beziehung",
      "Personalisierter PDF-Bericht",
    ],

    premiumButton:
      "Kompatibilität entdecken",

    horoscopeTitle:
      "Premium-Horoskop",

    horoscopeDescription:
      "Erhalten Sie personalisierte astrologische Prognosen auf Grundlage Ihres Geburtshoroskops.",

    horoscopeFeatures: [
      "Tageshoroskop",
      "Monatliche Prognosen",
      "Jährliche Prognosen",
      "Personalisierte Empfehlungen",
    ],

    horoscopeButton:
      "Horoskope entdecken",
  },

  it: {
    metadataTitle:
      "Compatibilità amorosa gratuita | Luna Astralis",

    metadataDescription:
      "Calcola gratuitamente la compatibilità amorosa tra due segni zodiacali.",

    badge:
      "Test gratuito",

    title:
      "Compatibilità amorosa",

    description:
      "Scopri gratuitamente l’alchimia tra due segni astrologici.",

    calculatorAria:
      "Calcolatore di compatibilità amorosa",

    servicesLabel:
      "Analisi personalizzate",

    servicesTitle:
      "Vai ancora più lontano",

    servicesDescription:
      "Esplora la tua personalità, le tue relazioni e il tuo futuro con le nostre analisi astrologiche personalizzate.",

    popular:
      "Il più popolare",

    birthChartTitle:
      "Tema natale Premium",

    birthChartDescription:
      "Ricevi un’analisi astrologica completa basata sulla tua data, ora e luogo di nascita.",

    birthChartFeatures: [
      "Il tuo Sole, la tua Luna e il tuo Ascendente",
      "I tuoi pianeti, le case e gli aspetti",
      "I tuoi punti di forza, le sfide e il potenziale",
      "Rapporto PDF personalizzato",
    ],

    birthChartButton:
      "Scopri i temi natali",

    premiumTitle:
      "Compatibilità Premium",

    premiumDescription:
      "Confronta due temi natali completi e scopri i punti di forza profondi della tua relazione.",

    premiumFeatures: [
      "Compatibilità emotiva e amorosa",
      "Comunicazione e attrazione",
      "Punti di forza e tensioni della relazione",
      "Rapporto PDF personalizzato",
    ],

    premiumButton:
      "Scopri la compatibilità",

    horoscopeTitle:
      "Oroscopo Premium",

    horoscopeDescription:
      "Ricevi previsioni astrologiche personalizzate in base al tuo tema natale.",

    horoscopeFeatures: [
      "Oroscopo del giorno",
      "Previsioni mensili",
      "Previsioni annuali",
      "Consigli personalizzati",
    ],

    horoscopeButton:
      "Scopri gli oroscopi",
  },

  pt: {
    metadataTitle:
      "Compatibilidade amorosa grátis | Luna Astralis",

    metadataDescription:
      "Calcule gratuitamente a compatibilidade amorosa entre dois signos do zodíaco.",

    badge:
      "Teste grátis",

    title:
      "Compatibilidade amorosa",

    description:
      "Descubra gratuitamente a química entre dois signos astrológicos.",

    calculatorAria:
      "Calculadora de compatibilidade amorosa",

    servicesLabel:
      "Análises personalizadas",

    servicesTitle:
      "Vá ainda mais longe",

    servicesDescription:
      "Explore sua personalidade, seus relacionamentos e seu futuro com nossas análises astrológicas personalizadas.",

    popular:
      "O mais popular",

    birthChartTitle:
      "Mapa astral Premium",

    birthChartDescription:
      "Receba uma análise astrológica completa baseada na sua data, hora e local de nascimento.",

    birthChartFeatures: [
      "Seu Sol, sua Lua e seu Ascendente",
      "Seus planetas, casas e aspectos",
      "Seus pontos fortes, desafios e potencial",
      "Relatório PDF personalizado",
    ],

    birthChartButton:
      "Descobrir os mapas astrais",

    premiumTitle:
      "Compatibilidade Premium",

    premiumDescription:
      "Compare dois mapas astrais completos e descubra as forças profundas do seu relacionamento.",

    premiumFeatures: [
      "Compatibilidade emocional e amorosa",
      "Comunicação e atração",
      "Forças e tensões do relacionamento",
      "Relatório PDF personalizado",
    ],

    premiumButton:
      "Descobrir a compatibilidade",

    horoscopeTitle:
      "Horóscopo Premium",

    horoscopeDescription:
      "Receba previsões astrológicas personalizadas com base no seu mapa astral.",

    horoscopeFeatures: [
      "Horóscopo do dia",
      "Previsões mensais",
      "Previsões anuais",
      "Conselhos personalizados",
    ],

    horoscopeButton:
      "Descobrir os horóscopos",
  },
};

/*
|--------------------------------------------------------------------------
| Métadonnées
|--------------------------------------------------------------------------
*/

type CompatibilityPageProps = {
  params: {
    locale: string;
  };
};

export function generateMetadata({
  params,
}: CompatibilityPageProps): Metadata {
  const { locale } = params;

  if (!isLocale(locale)) {
    return {};
  }

  const text =
    TRANSLATIONS[locale];

  const canonical =
    `https://luna-astralis.app/${locale}/compatibilite`;

  return {
    title:
      text.metadataTitle,

    description:
      text.metadataDescription,

    alternates: {
      canonical,
      languages: {
        fr:
          "https://luna-astralis.app/fr/compatibilite",
        en:
          "https://luna-astralis.app/en/compatibilite",
        es:
          "https://luna-astralis.app/es/compatibilite",
        de:
          "https://luna-astralis.app/de/compatibilite",
        it:
          "https://luna-astralis.app/it/compatibilite",
        pt:
          "https://luna-astralis.app/pt/compatibilite",
        "x-default":
          "https://luna-astralis.app/fr/compatibilite",
      },
    },

    openGraph: {
      title:
        text.metadataTitle,

      description:
        text.metadataDescription,

      url:
        canonical,

      siteName:
        "Luna Astralis",

      type:
        "website",

      locale:
        locale === "fr"
          ? "fr_CA"
          : locale,
    },
  };
}

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default function CompatibilitePage({
  params,
}: CompatibilityPageProps) {
  const { locale } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const text =
    TRANSLATIONS[locale];

  function localizedPath(
    path: string
  ) {
    return `/${locale}${path}`;
  }

  return (
    <AuthProvider>
      <SiteHeader />

      <div className="compat-page">
        <main className="compat-main">
          <section className="compat-hero">
            <div className="compat-badge">
              {text.badge}
            </div>

            <h1>
              {text.title}
            </h1>

            <p>
              {text.description}
            </p>
          </section>

          <section
            className="compat-card"
            aria-label={
              text.calculatorAria
            }
          >
           <CompatibilityCard locale={locale} />
          </section>

          <section className="compat-services">
            <div className="compat-services-heading">
              <span className="compat-services-label">
                {text.servicesLabel}
              </span>

              <h2>
                {text.servicesTitle}
              </h2>

              <p className="compat-services-intro">
                {
                  text.servicesDescription
                }
              </p>
            </div>

            <div className="compat-services-grid">
              <article className="premium-card premium-card-featured">
                <div className="premium-card-label">
                  {text.popular}
                </div>

                <div
                  className="premium-icon"
                  aria-hidden="true"
                >
                  🌙
                </div>

                <h3>
                  {text.birthChartTitle}
                </h3>

                <p>
                  {
                    text.birthChartDescription
                  }
                </p>

                <ul className="premium-features">
                  {
                    text.birthChartFeatures.map(
                      (feature) => (
                        <li key={feature}>
                          {feature}
                        </li>
                      )
                    )
                  }
                </ul>

                <Link
                  href={localizedPath(
                    "/pricing"
                  )}
                  className="premium-button"
                >
                  {
                    text.birthChartButton
                  }
                </Link>
              </article>

              <article className="premium-card">
                <div
                  className="premium-icon"
                  aria-hidden="true"
                >
                  ❤️
                </div>

                <h3>
                  {text.premiumTitle}
                </h3>

                <p>
                  {
                    text.premiumDescription
                  }
                </p>

                <ul className="premium-features">
                  {
                    text.premiumFeatures.map(
                      (feature) => (
                        <li key={feature}>
                          {feature}
                        </li>
                      )
                    )
                  }
                </ul>

                <Link
                  href={localizedPath(
                    "/compatibilite/premium"
                  )}
                  className="premium-button premium-button-secondary"
                >
                  {
                    text.premiumButton
                  }
                </Link>
              </article>

              <article className="premium-card">
                <div
                  className="premium-icon"
                  aria-hidden="true"
                >
                  🔮
                </div>

                <h3>
                  {text.horoscopeTitle}
                </h3>

                <p>
                  {
                    text.horoscopeDescription
                  }
                </p>

                <ul className="premium-features">
                  {
                    text.horoscopeFeatures.map(
                      (feature) => (
                        <li key={feature}>
                          {feature}
                        </li>
                      )
                    )
                  }
                </ul>

                <Link
                  href={localizedPath(
                    "/horoscope/premium"
                  )}
                  className="premium-button premium-button-secondary"
                >
                  {
                    text.horoscopeButton
                  }
                </Link>
              </article>
            </div>
          </section>
        </main>
      </div>
    </AuthProvider>
  );
}
