import type { Metadata } from "next";
import Link from "next/link";

import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";

import "./maisons.css";

export const metadata: Metadata = {
  title:
    "Les 12 maisons astrologiques | Luna Astralis",
  description:
    "Découvrez la signification des douze maisons astrologiques : identité, argent, communication, famille, amour, travail, relations, transformation, voyages, carrière, amitiés et spiritualité.",
};

const HOUSES = [
  {
    symbol: "Ⅰ",
    name: "Maison 1",
    theme: "Identité",
    description:
      "Personnalité, apparence, comportement, affirmation de soi et première impression.",
    href: "/astrologie/maisons/maison-1",
  },
  {
    symbol: "Ⅱ",
    name: "Maison 2",
    theme: "Argent et valeurs",
    description:
      "Revenus, possessions, talents, sécurité matérielle, estime personnelle et valeurs.",
    href: "/astrologie/maisons/maison-2",
  },
  {
    symbol: "Ⅲ",
    name: "Maison 3",
    theme: "Communication",
    description:
      "Apprentissage, échanges, entourage proche, déplacements, frères et sœurs.",
    href: "/astrologie/maisons/maison-3",
  },
  {
    symbol: "Ⅳ",
    name: "Maison 4",
    theme: "Foyer et racines",
    description:
      "Famille, enfance, maison, sécurité émotionnelle, racines et monde intérieur.",
    href: "/astrologie/maisons/maison-4",
  },
  {
    symbol: "Ⅴ",
    name: "Maison 5",
    theme: "Créativité et amour",
    description:
      "Romance, plaisir, créativité, enfants, loisirs, passions et expression personnelle.",
    href: "/astrologie/maisons/maison-5",
  },
  {
    symbol: "Ⅵ",
    name: "Maison 6",
    theme: "Travail et habitudes",
    description:
      "Organisation, travail quotidien, service, habitudes, responsabilités et équilibre.",
    href: "/astrologie/maisons/maison-6",
  },
  {
    symbol: "Ⅶ",
    name: "Maison 7",
    theme: "Couple et partenariats",
    description:
      "Relations engagées, mariage, contrats, associations, coopération et Descendant.",
    href: "/astrologie/maisons/maison-7",
  },
  {
    symbol: "Ⅷ",
    name: "Maison 8",
    theme: "Transformation",
    description:
      "Intimité, ressources partagées, héritages, crises, pouvoir et renaissance.",
    href: "/astrologie/maisons/maison-8",
  },
  {
    symbol: "Ⅸ",
    name: "Maison 9",
    theme: "Voyages et philosophie",
    description:
      "Études supérieures, voyages lointains, croyances, spiritualité et quête de sens.",
    href: "/astrologie/maisons/maison-9",
  },
  {
    symbol: "Ⅹ",
    name: "Maison 10",
    theme: "Carrière et vocation",
    description:
      "Réputation, ambitions, réussite, responsabilités, vocation et Milieu du Ciel.",
    href: "/astrologie/maisons/maison-10",
  },
  {
    symbol: "Ⅺ",
    name: "Maison 11",
    theme: "Amitiés et projets",
    description:
      "Réseaux, communautés, projets collectifs, espoirs, collaborations et avenir.",
    href: "/astrologie/maisons/maison-11",
  },
  {
    symbol: "Ⅻ",
    name: "Maison 12",
    theme: "Inconscient et spiritualité",
    description:
      "Rêves, intuition, solitude, secrets, guérison intérieure et fins de cycle.",
    href: "/astrologie/maisons/maison-12",
  },
];

export default function MaisonsPage() {
  return (
    <div className="houses-page">
      <AuthProvider>
        <SiteHeader />

        <main className="houses-wrap">
          <section className="houses-hero">
            <span className="houses-badge">
              Les douze domaines du thème natal
            </span>

            <h1>
              Découvrez les maisons astrologiques
            </h1>

            <p>
              Les douze maisons astrologiques représentent les
              grands domaines de votre vie. Elles montrent où
              s’expriment vos planètes, vos signes et les
              principales dynamiques de votre thème natal.
            </p>

            <div className="houses-hero-actions">
              <Link
                href="/carte-du-ciel"
                className="houses-primary-button"
              >
                ✨ Créer ma carte du ciel
              </Link>

              <Link
                href="/astrologie"
                className="houses-secondary-button"
              >
                Retour aux guides
              </Link>
            </div>
          </section>

          <section
            className="houses-library"
            aria-labelledby="houses-title"
          >
            <div className="houses-heading">
              <span>
                Bibliothèque astrologique
              </span>

              <h2 id="houses-title">
                Les 12 maisons astrologiques
              </h2>

              <p>
                Sélectionnez une maison pour découvrir sa
                signification complète, ses forces, ses défis,
                les planètes qu’elle contient et l’influence
                des douze signes.
              </p>
            </div>

            <div className="houses-grid">
              {HOUSES.map((house) => (
                <Link
                  href={house.href}
                  className="house-card"
                  key={house.name}
                >
                  <div className="house-card-top">
                    <div className="house-symbol">
                      {house.symbol}
                    </div>

                    <span className="house-theme">
                      {house.theme}
                    </span>
                  </div>

                  <h2>{house.name}</h2>

                  <p>{house.description}</p>

                  <span className="house-card-link">
                    Découvrir la maison →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="houses-callout">
            <div>
              <span className="houses-badge">
                Votre thème natal
              </span>

              <h2>
                Découvrez dans quelles maisons se trouvent vos
                planètes
              </h2>

              <p>
                Votre heure et votre lieu de naissance
                permettent de calculer votre Ascendant, vos
                douze maisons astrologiques et la position de
                vos planètes.
              </p>
            </div>

            <Link
              href="/carte-du-ciel"
              className="houses-primary-button"
            >
              Découvrir mon thème natal
            </Link>
          </section>
        </main>
      </AuthProvider>
    </div>
  );
}
