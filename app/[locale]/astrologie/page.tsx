// app/[locale]/astrologie/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";

import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";

import {
  isLocale,
  type Locale,
} from "@/i18n/config";

import "../../astrologie/astrologie.css";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type Category = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

type AstrologyPageText = {
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroButton: string;

  libraryLabel: string;
  categoriesTitle: string;
  categoriesDescription: string;
  exploreGuides: string;

  chartBadge: string;
  chartTitle: string;
  chartDescription: string;
  chartButton: string;

  categories: Category[];
};

/*
|--------------------------------------------------------------------------
| Traductions
|--------------------------------------------------------------------------
*/

const TRANSLATIONS: Record<
  Locale,
  AstrologyPageText
> = {
  fr: {
    heroBadge:
      "Guides astrologiques gratuits",

    heroTitle:
      "Explorez l’univers de l’astrologie",

    heroDescription:
      "Comprenez votre thème natal, vos planètes, vos maisons astrologiques et les grandes énergies qui façonnent votre personnalité.",

    heroButton:
      "✨ Créer ma carte du ciel gratuite",

    libraryLabel:
      "Bibliothèque Luna Astralis",

    categoriesTitle:
      "Découvrez les grands thèmes astrologiques",

    categoriesDescription:
      "Choisissez une catégorie pour accéder aux guides détaillés et approfondir vos connaissances.",

    exploreGuides:
      "Explorer les guides →",

    chartBadge:
      "Votre thème natal",

    chartTitle:
      "Votre carte du ciel est unique",

    chartDescription:
      "Découvrez gratuitement votre Soleil, votre Lune, votre Ascendant et votre roue astrologique personnalisée.",

    chartButton:
      "Découvrir mon thème natal",

    categories: [
      {
        icon: "☀️",
        title: "Le Soleil",
        description:
          "Découvrez votre identité profonde, votre vitalité et la façon dont vous exprimez votre énergie.",
        href: "/astrologie/soleil",
      },
      {
        icon: "🌙",
        title: "La Lune",
        description:
          "Explorez vos émotions, votre sensibilité, votre intuition et votre monde intérieur.",
        href: "/astrologie/lune",
      },
      {
        icon: "⬆️",
        title: "L’Ascendant",
        description:
          "Comprenez votre manière d’entrer en relation avec le monde et l’image que vous projetez.",
        href: "/astrologie/ascendant",
      },
      {
        icon: "🪐",
        title: "Les planètes",
        description:
          "Mercure, Vénus, Mars, Jupiter, Saturne et les autres forces de votre thème natal.",
        href: "/astrologie/planetes",
      },
      {
        icon: "🏠",
        title: "Les maisons",
        description:
          "Découvrez les douze domaines de vie représentés dans une carte du ciel.",
        href: "/astrologie/maisons",
      },
      {
        icon: "♈",
        title: "Les signes astrologiques",
        description:
          "Explorez la personnalité, les forces et les défis des douze signes du zodiaque.",
        href: "/astrologie/signes",
      },
      {
        icon: "✨",
        title: "Les aspects astrologiques",
        description:
          "Comprenez les relations entre les planètes et les dynamiques qu’elles créent.",
        href: "/astrologie/aspects",
      },
    ],
  },

  en: {
    heroBadge:
      "Free astrology guides",

    heroTitle:
      "Explore the world of astrology",

    heroDescription:
      "Understand your birth chart, planets, astrological houses and the major energies that shape your personality.",

    heroButton:
      "✨ Create my free birth chart",

    libraryLabel:
      "Luna Astralis Library",

    categoriesTitle:
      "Discover the major astrology topics",

    categoriesDescription:
      "Choose a category to access detailed guides and deepen your knowledge.",

    exploreGuides:
      "Explore the guides →",

    chartBadge:
      "Your birth chart",

    chartTitle:
      "Your birth chart is unique",

    chartDescription:
      "Discover your Sun, Moon, Ascendant and personalized astrological wheel for free.",

    chartButton:
      "Discover my birth chart",

    categories: [
      {
        icon: "☀️",
        title: "The Sun",
        description:
          "Discover your core identity, vitality and the way you express your energy.",
        href: "/astrologie/soleil",
      },
      {
        icon: "🌙",
        title: "The Moon",
        description:
          "Explore your emotions, sensitivity, intuition and inner world.",
        href: "/astrologie/lune",
      },
      {
        icon: "⬆️",
        title: "The Ascendant",
        description:
          "Understand how you interact with the world and the image you project.",
        href: "/astrologie/ascendant",
      },
      {
        icon: "🪐",
        title: "The planets",
        description:
          "Mercury, Venus, Mars, Jupiter, Saturn and the other forces in your birth chart.",
        href: "/astrologie/planetes",
      },
      {
        icon: "🏠",
        title: "The houses",
        description:
          "Discover the twelve areas of life represented in a birth chart.",
        href: "/astrologie/maisons",
      },
      {
        icon: "♈",
        title: "The zodiac signs",
        description:
          "Explore the personality, strengths and challenges of the twelve zodiac signs.",
        href: "/astrologie/signes",
      },
      {
        icon: "✨",
        title: "Astrological aspects",
        description:
          "Understand the relationships between the planets and the dynamics they create.",
        href: "/astrologie/aspects",
      },
    ],
  },

  es: {
    heroBadge:
      "Guías astrológicas gratuitas",

    heroTitle:
      "Explora el universo de la astrología",

    heroDescription:
      "Comprende tu carta natal, tus planetas, tus casas astrológicas y las grandes energías que moldean tu personalidad.",

    heroButton:
      "✨ Crear mi carta natal gratis",

    libraryLabel:
      "Biblioteca Luna Astralis",

    categoriesTitle:
      "Descubre los grandes temas astrológicos",

    categoriesDescription:
      "Elige una categoría para acceder a guías detalladas y profundizar tus conocimientos.",

    exploreGuides:
      "Explorar las guías →",

    chartBadge:
      "Tu carta natal",

    chartTitle:
      "Tu carta natal es única",

    chartDescription:
      "Descubre gratis tu Sol, tu Luna, tu Ascendente y tu rueda astrológica personalizada.",

    chartButton:
      "Descubrir mi carta natal",

    categories: [
      {
        icon: "☀️",
        title: "El Sol",
        description:
          "Descubre tu identidad profunda, tu vitalidad y la manera en que expresas tu energía.",
        href: "/astrologie/soleil",
      },
      {
        icon: "🌙",
        title: "La Luna",
        description:
          "Explora tus emociones, tu sensibilidad, tu intuición y tu mundo interior.",
        href: "/astrologie/lune",
      },
      {
        icon: "⬆️",
        title: "El Ascendente",
        description:
          "Comprende cómo te relacionas con el mundo y la imagen que proyectas.",
        href: "/astrologie/ascendant",
      },
      {
        icon: "🪐",
        title: "Los planetas",
        description:
          "Mercurio, Venus, Marte, Júpiter, Saturno y las demás fuerzas de tu carta natal.",
        href: "/astrologie/planetes",
      },
      {
        icon: "🏠",
        title: "Las casas",
        description:
          "Descubre las doce áreas de la vida representadas en una carta natal.",
        href: "/astrologie/maisons",
      },
      {
        icon: "♈",
        title: "Los signos zodiacales",
        description:
          "Explora la personalidad, las fortalezas y los desafíos de los doce signos del zodiaco.",
        href: "/astrologie/signes",
      },
      {
        icon: "✨",
        title: "Los aspectos astrológicos",
        description:
          "Comprende las relaciones entre los planetas y las dinámicas que crean.",
        href: "/astrologie/aspects",
      },
    ],
  },

  de: {
    heroBadge:
      "Kostenlose Astrologie-Ratgeber",

    heroTitle:
      "Entdecken Sie die Welt der Astrologie",

    heroDescription:
      "Verstehen Sie Ihr Geburtshoroskop, Ihre Planeten, astrologischen Häuser und die großen Energien, die Ihre Persönlichkeit prägen.",

    heroButton:
      "✨ Kostenloses Geburtshoroskop erstellen",

    libraryLabel:
      "Luna-Astralis-Bibliothek",

    categoriesTitle:
      "Entdecken Sie die wichtigsten astrologischen Themen",

    categoriesDescription:
      "Wählen Sie eine Kategorie, um ausführliche Ratgeber aufzurufen und Ihr Wissen zu vertiefen.",

    exploreGuides:
      "Ratgeber entdecken →",

    chartBadge:
      "Ihr Geburtshoroskop",

    chartTitle:
      "Ihr Geburtshoroskop ist einzigartig",

    chartDescription:
      "Entdecken Sie kostenlos Ihre Sonne, Ihren Mond, Ihren Aszendenten und Ihr persönliches astrologisches Rad.",

    chartButton:
      "Mein Geburtshoroskop entdecken",

    categories: [
      {
        icon: "☀️",
        title: "Die Sonne",
        description:
          "Entdecken Sie Ihre zentrale Identität, Vitalität und die Art, wie Sie Ihre Energie ausdrücken.",
        href: "/astrologie/soleil",
      },
      {
        icon: "🌙",
        title: "Der Mond",
        description:
          "Erkunden Sie Ihre Gefühle, Sensibilität, Intuition und innere Welt.",
        href: "/astrologie/lune",
      },
      {
        icon: "⬆️",
        title: "Der Aszendent",
        description:
          "Verstehen Sie, wie Sie der Welt begegnen und welches Bild Sie vermitteln.",
        href: "/astrologie/ascendant",
      },
      {
        icon: "🪐",
        title: "Die Planeten",
        description:
          "Merkur, Venus, Mars, Jupiter, Saturn und die weiteren Kräfte Ihres Geburtshoroskops.",
        href: "/astrologie/planetes",
      },
      {
        icon: "🏠",
        title: "Die Häuser",
        description:
          "Entdecken Sie die zwölf Lebensbereiche eines Geburtshoroskops.",
        href: "/astrologie/maisons",
      },
      {
        icon: "♈",
        title: "Die Tierkreiszeichen",
        description:
          "Erkunden Sie Persönlichkeit, Stärken und Herausforderungen der zwölf Tierkreiszeichen.",
        href: "/astrologie/signes",
      },
      {
        icon: "✨",
        title: "Astrologische Aspekte",
        description:
          "Verstehen Sie die Beziehungen zwischen den Planeten und die daraus entstehenden Dynamiken.",
        href: "/astrologie/aspects",
      },
    ],
  },

  it: {
    heroBadge:
      "Guide astrologiche gratuite",

    heroTitle:
      "Esplora l’universo dell’astrologia",

    heroDescription:
      "Comprendi il tuo tema natale, i pianeti, le case astrologiche e le grandi energie che modellano la tua personalità.",

    heroButton:
      "✨ Crea il mio tema natale gratuito",

    libraryLabel:
      "Biblioteca Luna Astralis",

    categoriesTitle:
      "Scopri i grandi temi astrologici",

    categoriesDescription:
      "Scegli una categoria per accedere alle guide dettagliate e approfondire le tue conoscenze.",

    exploreGuides:
      "Esplora le guide →",

    chartBadge:
      "Il tuo tema natale",

    chartTitle:
      "Il tuo tema natale è unico",

    chartDescription:
      "Scopri gratuitamente il tuo Sole, la tua Luna, il tuo Ascendente e la tua ruota astrologica personalizzata.",

    chartButton:
      "Scopri il mio tema natale",

    categories: [
      {
        icon: "☀️",
        title: "Il Sole",
        description:
          "Scopri la tua identità profonda, la vitalità e il modo in cui esprimi la tua energia.",
        href: "/astrologie/soleil",
      },
      {
        icon: "🌙",
        title: "La Luna",
        description:
          "Esplora le tue emozioni, la sensibilità, l’intuizione e il mondo interiore.",
        href: "/astrologie/lune",
      },
      {
        icon: "⬆️",
        title: "L’Ascendente",
        description:
          "Comprendi il tuo modo di entrare in relazione con il mondo e l’immagine che proietti.",
        href: "/astrologie/ascendant",
      },
      {
        icon: "🪐",
        title: "I pianeti",
        description:
          "Mercurio, Venere, Marte, Giove, Saturno e le altre forze del tuo tema natale.",
        href: "/astrologie/planetes",
      },
      {
        icon: "🏠",
        title: "Le case",
        description:
          "Scopri i dodici ambiti della vita rappresentati in un tema natale.",
        href: "/astrologie/maisons",
      },
      {
        icon: "♈",
        title: "I segni zodiacali",
        description:
          "Esplora la personalità, i punti di forza e le sfide dei dodici segni zodiacali.",
        href: "/astrologie/signes",
      },
      {
        icon: "✨",
        title: "Gli aspetti astrologici",
        description:
          "Comprendi le relazioni tra i pianeti e le dinamiche che creano.",
        href: "/astrologie/aspects",
      },
    ],
  },

  pt: {
    heroBadge:
      "Guias astrológicos gratuitos",

    heroTitle:
      "Explore o universo da astrologia",

    heroDescription:
      "Compreenda seu mapa astral, seus planetas, suas casas astrológicas e as grandes energias que moldam sua personalidade.",

    heroButton:
      "✨ Criar meu mapa astral grátis",

    libraryLabel:
      "Biblioteca Luna Astralis",

    categoriesTitle:
      "Descubra os grandes temas astrológicos",

    categoriesDescription:
      "Escolha uma categoria para acessar guias detalhados e aprofundar seus conhecimentos.",

    exploreGuides:
      "Explorar os guias →",

    chartBadge:
      "Seu mapa astral",

    chartTitle:
      "Seu mapa astral é único",

    chartDescription:
      "Descubra gratuitamente seu Sol, sua Lua, seu Ascendente e sua roda astrológica personalizada.",

    chartButton:
      "Descobrir meu mapa astral",

    categories: [
      {
        icon: "☀️",
        title: "O Sol",
        description:
          "Descubra sua identidade profunda, sua vitalidade e a maneira como você expressa sua energia.",
        href: "/astrologie/soleil",
      },
      {
        icon: "🌙",
        title: "A Lua",
        description:
          "Explore suas emoções, sua sensibilidade, sua intuição e seu mundo interior.",
        href: "/astrologie/lune",
      },
      {
        icon: "⬆️",
        title: "O Ascendente",
        description:
          "Compreenda sua maneira de se relacionar com o mundo e a imagem que você projeta.",
        href: "/astrologie/ascendant",
      },
      {
        icon: "🪐",
        title: "Os planetas",
        description:
          "Mercúrio, Vênus, Marte, Júpiter, Saturno e as outras forças do seu mapa astral.",
        href: "/astrologie/planetes",
      },
      {
        icon: "🏠",
        title: "As casas",
        description:
          "Descubra as doze áreas da vida representadas em um mapa astral.",
        href: "/astrologie/maisons",
      },
      {
        icon: "♈",
        title: "Os signos do zodíaco",
        description:
          "Explore a personalidade, as forças e os desafios dos doze signos do zodíaco.",
        href: "/astrologie/signes",
      },
      {
        icon: "✨",
        title: "Os aspectos astrológicos",
        description:
          "Compreenda as relações entre os planetas e as dinâmicas que elas criam.",
        href: "/astrologie/aspects",
      },
    ],
  },
};

/*
|--------------------------------------------------------------------------
| Propriétés
|--------------------------------------------------------------------------
*/

type AstrologiePageProps = {
  params: {
    locale: string;
  };
};

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default function AstrologiePage({
  params,
}: AstrologiePageProps) {
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
    <div className="astrology-page">
      <AuthProvider>
        <SiteHeader />

        <main className="astrology-wrap">
          <section className="astrology-hero">
            <span className="astrology-badge">
              {text.heroBadge}
            </span>

            <h1>
              {text.heroTitle}
            </h1>

            <p>
              {
                text.heroDescription
              }
            </p>

            <Link
              href={localizedPath(
                "/carte-du-ciel"
              )}
              className="astrology-main-button"
            >
              {text.heroButton}
            </Link>
          </section>

          <section
            className="astrology-categories"
            aria-labelledby="astrology-categories-title"
          >
            <div className="astrology-section-heading">
              <span>
                {text.libraryLabel}
              </span>

              <h2 id="astrology-categories-title">
                {
                  text.categoriesTitle
                }
              </h2>

              <p>
                {
                  text.categoriesDescription
                }
              </p>
            </div>

            <div className="astrology-grid">
              {text.categories.map(
                (category) => (
                  <Link
                    href={localizedPath(
                      category.href
                    )}
                    className="astrology-card"
                    key={
                      category.href
                    }
                  >
                    <div className="astrology-card-icon">
                      {
                        category.icon
                      }
                    </div>

                    <h2>
                      {
                        category.title
                      }
                    </h2>

                    <p>
                      {
                        category.description
                      }
                    </p>

                    <span className="astrology-card-link">
                      {
                        text.exploreGuides
                      }
                    </span>
                  </Link>
                )
              )}
            </div>
          </section>

          <section className="astrology-chart-callout">
            <div>
              <span className="astrology-badge">
                {
                  text.chartBadge
                }
              </span>

              <h2>
                {text.chartTitle}
              </h2>

              <p>
                {
                  text.chartDescription
                }
              </p>
            </div>

            <Link
              href={localizedPath(
                "/carte-du-ciel"
              )}
              className="astrology-main-button"
            >
              {text.chartButton}
            </Link>
          </section>
        </main>
      </AuthProvider>
    </div>
  );
}
