import type { Metadata } from "next";
import Link from "next/link";

import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";

import "./horoscope-premium.css";

export const metadata: Metadata = {
  title:
    "Horoscope Premium personnalisé | Luna Astralis",

  description:
    "Découvrez votre horoscope Premium personnalisé selon votre date, votre heure et votre lieu de naissance : prévisions du jour, du mois et de l’année.",

  alternates: {
    canonical:
      "https://luna-astralis.app/horoscope/premium",
  },

  openGraph: {
    title:
      "Horoscope Premium personnalisé | Luna Astralis",

    description:
      "Des prévisions astrologiques personnalisées selon votre carte du ciel, vos transits et votre naissance.",

    url:
      "https://luna-astralis.app/horoscope/premium",

    siteName:
      "Luna Astralis",

    locale:
      "fr_CA",

    type:
      "website",
  },
};

const FORMULES = [
  {
    icon: "✨",
    title: "Horoscope Premium du jour",
    href: "/horoscope/premium/jour",
    price: "9,99 $ US",
    buttonLabel: "Créer mon horoscope du jour",
    description:
      "Une lecture personnalisée des énergies, des opportunités et des défis qui influencent votre journée.",
    items: [
      "Amour et relations",
      "Travail et décisions",
      "Finances et opportunités",
      "Bien-être et énergie",
      "Conseil astrologique personnalisé",
    ],
  },

  {
    icon: "📅",
    title: "Horoscope Premium du mois",
    href: "/horoscope/premium/mois",
    price: "19,99 $ US",
    buttonLabel: "Découvrir l’horoscope du mois",
    description:
      "Une vision plus large des périodes importantes, des changements et des possibilités du mois.",
    items: [
      "Grandes tendances du mois",
      "Dates et périodes importantes",
      "Vie affective",
      "Carrière et projets",
      "Évolution personnelle",
    ],
  },

  {
    icon: "🌟",
    title: "Horoscope Premium de l’année",
    href: "/horoscope/premium/annee",
    price: "34,99 $ US",
    buttonLabel: "Découvrir l’horoscope de l’année",
    description:
      "Une analyse complète des grandes étapes de votre année astrologique et des domaines les plus influencés.",
    items: [
      "Cycles astrologiques annuels",
      "Amour et relations",
      "Travail et finances",
      "Défis et transformations",
      "Périodes favorables",
    ],
  },
];

const ETAPES = [
  {
    number: "01",
    title: "Vos informations de naissance",
    description:
      "Vous indiquez votre date, votre heure et votre lieu de naissance.",
  },

  {
    number: "02",
    title: "Votre carte du ciel",
    description:
      "Luna Astralis calcule vos positions planétaires, vos maisons et vos principaux aspects.",
  },

  {
    number: "03",
    title: "Vos transits astrologiques",
    description:
      "Les mouvements actuels des planètes sont comparés à votre thème natal.",
  },

  {
    number: "04",
    title: "Votre horoscope personnalisé",
    description:
      "Vous obtenez une lecture adaptée à votre propre configuration astrologique.",
  },
];

export default function HoroscopePremiumPage() {
  return (
    <AuthProvider>
      <SiteHeader />

      <main className="premium-page">
        {/* HERO */}

        <section className="premium-hero">
          <div className="premium-hero-glow premium-hero-glow-one" />
          <div className="premium-hero-glow premium-hero-glow-two" />

          <div className="premium-hero-content">
            <span className="premium-eyebrow">
              🌙 Luna Astralis Premium
            </span>

            <h1>
              Votre horoscope,
              <span> réellement personnalisé</span>
            </h1>

            <p className="premium-hero-text">
              Votre signe solaire ne raconte qu’une partie
              de votre histoire. L’Horoscope Premium tient
              compte de votre date, de votre heure et de votre
              lieu de naissance afin d’analyser votre carte
              du ciel et les transits astrologiques qui vous
              influencent.
            </p>

            <div className="premium-hero-actions">
              <a
                href="#formules"
                className="premium-primary-button"
              >
                Découvrir les formules
              </a>

              <Link
                href="/carte-du-ciel"
                className="premium-secondary-button"
              >
                Créer ma carte du ciel gratuite
              </Link>
            </div>

            <div className="premium-hero-features">
              <span>✓ Analyse personnelle</span>
              <span>✓ Carte du ciel</span>
              <span>✓ Transits astrologiques</span>
              <span>✓ Conseils approfondis</span>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}

        <section className="premium-intro-section">
          <div className="premium-intro-card">
            <span className="premium-section-kicker">
              Au-delà du signe solaire
            </span>

            <h2>
              Pourquoi un horoscope personnalisé est-il
              différent?
            </h2>

            <p>
              Un horoscope général est rédigé pour toutes les
              personnes d’un même signe astrologique. Il peut
              révéler une tendance collective, mais il ne
              connaît ni votre Ascendant, ni votre Lune, ni
              vos maisons astrologiques.
            </p>

            <p>
              L’Horoscope Premium de Luna Astralis est basé
              sur votre propre carte du ciel. Les transits
              actuels sont comparés à vos positions de
              naissance afin de produire une lecture plus
              précise et plus personnelle.
            </p>
          </div>
        </section>

        {/* FORMULES */}

        <section
          id="formules"
          className="premium-formulas-section"
        >
          <div className="premium-section-heading">
            <span className="premium-section-kicker">
              Trois niveaux de prévisions
            </span>

            <h2>
              Choisissez la période qui vous intéresse
            </h2>

            <p>
              Chaque formule est construite à partir de votre
              carte du ciel et des mouvements planétaires de
              la période analysée.
            </p>
          </div>

          <div className="premium-formulas-grid">
            {FORMULES.map((formule) => (
              <article
                key={formule.title}
                className="premium-formula-card"
              >
                <span
                  className="premium-formula-icon"
                  aria-hidden="true"
                >
                  {formule.icon}
                </span>

                <h3>{formule.title}</h3>

                <p className="premium-formula-description">
                  {formule.description}
                </p>

                <ul>
                  {formule.items.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="premium-formula-action">
                  <div className="premium-formula-price">
                    {formule.price}
                  </div>

                  <Link
                    href={formule.href}
                    className="premium-primary-button"
                  >
                    {formule.buttonLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FONCTIONNEMENT */}

        <section className="premium-process-section">
          <div className="premium-section-heading">
            <span className="premium-section-kicker">
              Une analyse en quatre étapes
            </span>

            <h2>
              Comment votre horoscope est-il calculé?
            </h2>

            <p>
              Luna Astralis utilise les mêmes informations
              fondamentales que pour une véritable analyse de
              carte du ciel.
            </p>
          </div>

          <div className="premium-process-grid">
            {ETAPES.map((etape) => (
              <article
                key={etape.number}
                className="premium-process-card"
              >
                <span className="premium-process-number">
                  {etape.number}
                </span>

                <h3>{etape.title}</h3>

                <p>{etape.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* INFORMATIONS UTILISÉES */}

        <section className="premium-data-section">
          <div className="premium-data-card">
            <div className="premium-data-content">
              <span className="premium-section-kicker">
                Votre ciel personnel
              </span>

              <h2>
                Les éléments utilisés dans votre analyse
              </h2>

              <p>
                Votre horoscope ne repose pas uniquement sur
                votre signe du zodiaque. Plusieurs données
                astrologiques sont combinées afin de créer
                une lecture cohérente.
              </p>
            </div>

            <div className="premium-data-grid">
              <div>
                <span aria-hidden="true">☉</span>
                <strong>Soleil</strong>
                <p>
                  Votre identité, votre volonté et votre
                  direction générale.
                </p>
              </div>

              <div>
                <span aria-hidden="true">☾</span>
                <strong>Lune</strong>
                <p>
                  Vos émotions, vos besoins et votre monde
                  intérieur.
                </p>
              </div>

              <div>
                <span aria-hidden="true">↑</span>
                <strong>Ascendant</strong>
                <p>
                  Votre manière d’avancer et de réagir au
                  monde.
                </p>
              </div>

              <div>
                <span aria-hidden="true">⌂</span>
                <strong>Maisons</strong>
                <p>
                  Les domaines de vie concernés par les
                  mouvements planétaires.
                </p>
              </div>

              <div>
                <span aria-hidden="true">✦</span>
                <strong>Aspects</strong>
                <p>
                  Les liens et tensions entre les planètes de
                  votre thème.
                </p>
              </div>

              <div>
                <span aria-hidden="true">◎</span>
                <strong>Transits</strong>
                <p>
                  Les influences actuelles comparées à vos
                  positions natales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DISPONIBILITÉ */}

        <section className="premium-waiting-section">
          <div className="premium-waiting-card">
            <span className="premium-waiting-icon">
              🌙
            </span>

            <span className="premium-section-kicker">
              Horoscope personnalisé
            </span>

            <h2>
              Commencez avec l’Horoscope Premium du jour
            </h2>

            <p>
              Entrez vos informations de naissance pour créer
              une lecture personnalisée fondée sur votre carte
              du ciel et les transits astrologiques du jour.
            </p>

            <div className="premium-waiting-actions">
              <Link
                href="/horoscope/premium/jour"
                className="premium-primary-button"
              >
                Créer mon horoscope du jour
              </Link>

              <Link
                href="/horoscope"
                className="premium-secondary-button"
              >
                Voir les horoscopes gratuits
              </Link>
            </div>
          </div>
        </section>

        {/* NAVIGATION */}

        <nav
          className="premium-bottom-navigation"
          aria-label="Navigation astrologique"
        >
          <Link href="/horoscope">
            ← Horoscope gratuit
          </Link>

          <Link href="/astrologie">
            Découvrir l’astrologie
          </Link>

          <Link href="/carte-du-ciel">
            Carte du ciel →
          </Link>
        </nav>
      </main>
    </AuthProvider>
  );
}
