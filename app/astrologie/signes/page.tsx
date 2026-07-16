import type { Metadata } from "next";
import Link from "next/link";

import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";

import "./signes.css";

export const metadata: Metadata = {
  title:
    "Les 12 signes astrologiques | Luna Astralis",
  description:
    "Découvrez la personnalité, les forces, les défis et les grandes caractéristiques des douze signes astrologiques.",
};

const SIGNS = [
  {
    symbol: "♈",
    name: "Bélier",
    dates: "21 mars au 19 avril",
    element: "Feu",
    description:
      "Énergie, courage, spontanéité et désir d’avancer.",
    href: "/astrologie/belier",
  },
  {
    symbol: "♉",
    name: "Taureau",
    dates: "20 avril au 20 mai",
    element: "Terre",
    description:
      "Stabilité, persévérance, sensualité et attachement aux valeurs sûres.",
    href: "/astrologie/taureau",
  },
  {
    symbol: "♊",
    name: "Gémeaux",
    dates: "21 mai au 20 juin",
    element: "Air",
    description:
      "Curiosité, communication, mouvement et vivacité intellectuelle.",
    href: "/astrologie/gemeaux",
  },
  {
    symbol: "♋",
    name: "Cancer",
    dates: "21 juin au 22 juillet",
    element: "Eau",
    description:
      "Sensibilité, intuition, protection et attachement aux racines.",
    href: "/astrologie/cancer",
  },
  {
    symbol: "♌",
    name: "Lion",
    dates: "23 juillet au 22 août",
    element: "Feu",
    description:
      "Créativité, générosité, rayonnement et besoin d’expression.",
    href: "/astrologie/lion",
  },
  {
    symbol: "♍",
    name: "Vierge",
    dates: "23 août au 22 septembre",
    element: "Terre",
    description:
      "Analyse, précision, sens du service et recherche d’amélioration.",
    href: "/astrologie/vierge",
  },
  {
    symbol: "♎",
    name: "Balance",
    dates: "23 septembre au 22 octobre",
    element: "Air",
    description:
      "Harmonie, diplomatie, équilibre et importance des relations.",
    href: "/astrologie/balance",
  },
  {
    symbol: "♏",
    name: "Scorpion",
    dates: "23 octobre au 21 novembre",
    element: "Eau",
    description:
      "Intensité, profondeur, transformation et puissance émotionnelle.",
    href: "/astrologie/scorpion",
  },
  {
    symbol: "♐",
    name: "Sagittaire",
    dates: "22 novembre au 21 décembre",
    element: "Feu",
    description:
      "Liberté, enthousiasme, exploration et recherche de sens.",
    href: "/astrologie/sagittaire",
  },
  {
    symbol: "♑",
    name: "Capricorne",
    dates: "22 décembre au 19 janvier",
    element: "Terre",
    description:
      "Ambition, discipline, responsabilité et vision à long terme.",
    href: "/astrologie/capricorne",
  },
  {
    symbol: "♒",
    name: "Verseau",
    dates: "20 janvier au 18 février",
    element: "Air",
    description:
      "Indépendance, originalité, innovation et ouverture collective.",
    href: "/astrologie/verseau",
  },
  {
    symbol: "♓",
    name: "Poissons",
    dates: "19 février au 20 mars",
    element: "Eau",
    description:
      "Intuition, compassion, imagination et grande réceptivité.",
    href: "/astrologie/poissons",
  },
];

export default function SignesPage() {
  return (
    <div className="signs-page">
      <AuthProvider>
        <SiteHeader />

        <main className="signs-wrap">
          <section className="signs-hero">
            <span className="signs-badge">
              Les douze signes du zodiaque
            </span>

            <h1>
              Découvrez votre signe astrologique
            </h1>

            <p>
              Explorez la personnalité, les forces, les
              défis, les émotions et les grandes énergies
              associées à chacun des douze signes
              astrologiques.
            </p>

            <div className="signs-hero-actions">
              <Link
                href="/carte-du-ciel"
                className="signs-primary-button"
              >
                ✨ Créer ma carte du ciel
              </Link>

              <Link
                href="/astrologie"
                className="signs-secondary-button"
              >
                Retour aux guides
              </Link>
            </div>
          </section>

          <section
            className="signs-library"
            aria-labelledby="signs-title"
          >
            <div className="signs-heading">
              <span>
                Bibliothèque astrologique
              </span>

              <h2 id="signs-title">
                Les 12 signes astrologiques
              </h2>

              <p>
                Sélectionnez un signe pour découvrir son
                portrait astrologique complet.
              </p>
            </div>

            <div className="signs-grid">
              {SIGNS.map((sign) => (
                <Link
                  href={sign.href}
                  className="sign-card"
                  key={sign.name}
                >
                  <div className="sign-card-top">
                    <div className="sign-symbol">
                      {sign.symbol}
                    </div>

                    <span className="sign-element">
                      {sign.element}
                    </span>
                  </div>

                  <h2>{sign.name}</h2>

                  <div className="sign-dates">
                    {sign.dates}
                  </div>

                  <p>{sign.description}</p>

                  <span className="sign-card-link">
                    Découvrir le signe →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="signs-callout">
            <div>
              <span className="signs-badge">
                Au-delà de votre signe solaire
              </span>

              <h2>
                Votre thème natal raconte toute votre
                histoire
              </h2>

              <p>
                Votre Soleil n’est qu’une partie de votre
                personnalité. Découvrez également votre
                Lune, votre Ascendant et votre roue
                astrologique.
              </p>
            </div>

            <Link
              href="/carte-du-ciel"
              className="signs-primary-button"
            >
              Découvrir mon thème natal
            </Link>
          </section>
        </main>
      </AuthProvider>
    </div>
  );
}
