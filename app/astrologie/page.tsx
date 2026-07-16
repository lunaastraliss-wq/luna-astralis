import Link from "next/link";

import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";

import "./astrologie.css";

const CATEGORIES = [
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
];

export default function AstrologiePage() {
  return (
    <div className="astrology-page">
      <AuthProvider>
        <SiteHeader />

        <main className="astrology-wrap">
          <section className="astrology-hero">
            <span className="astrology-badge">
              Guides astrologiques gratuits
            </span>

            <h1>
              Explorez l’univers de l’astrologie
            </h1>

            <p>
              Comprenez votre thème natal, vos planètes, vos
              maisons astrologiques et les grandes énergies
              qui façonnent votre personnalité.
            </p>

            <Link
              href="/carte-du-ciel"
              className="astrology-main-button"
            >
              ✨ Créer ma carte du ciel gratuite
            </Link>
          </section>

          <section
            className="astrology-categories"
            aria-labelledby="astrology-categories-title"
          >
            <div className="astrology-section-heading">
              <span>Bibliothèque Luna Astralis</span>

              <h2 id="astrology-categories-title">
                Découvrez les grands thèmes astrologiques
              </h2>

              <p>
                Choisissez une catégorie pour accéder aux
                guides détaillés et approfondir vos
                connaissances.
              </p>
            </div>

            <div className="astrology-grid">
              {CATEGORIES.map((category) => (
                <Link
                  href={category.href}
                  className="astrology-card"
                  key={category.title}
                >
                  <div className="astrology-card-icon">
                    {category.icon}
                  </div>

                  <h2>{category.title}</h2>

                  <p>{category.description}</p>

                  <span className="astrology-card-link">
                    Explorer les guides →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="astrology-chart-callout">
            <div>
              <span className="astrology-badge">
                Votre thème natal
              </span>

              <h2>
                Votre carte du ciel est unique
              </h2>

              <p>
                Découvrez gratuitement votre Soleil, votre
                Lune, votre Ascendant et votre roue
                astrologique personnalisée.
              </p>
            </div>

            <Link
              href="/carte-du-ciel"
              className="astrology-main-button"
            >
              Découvrir mon thème natal
            </Link>
          </section>
        </main>
      </AuthProvider>
    </div>
  );
}
