import type { Metadata } from "next";
import Link from "next/link";

import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";

import "./page.css";
import "./horoscope.css";

export const metadata: Metadata = {
  title:
    "Horoscope du jour gratuit | Les 12 signes astrologiques | Luna Astralis",
  description:
    "Découvrez gratuitement votre horoscope du jour pour les 12 signes astrologiques : amour, travail, finances, bien-être et conseil astrologique.",
  alternates: {
    canonical: "https://luna-astralis.app/horoscope",
  },
  openGraph: {
    title:
      "Horoscope du jour gratuit | Luna Astralis",
    description:
      "Consultez gratuitement l’horoscope quotidien de votre signe astrologique.",
    url: "https://luna-astralis.app/horoscope",
    siteName: "Luna Astralis",
    type: "website",
    locale: "fr_CA",
  },
};

const signes = [
  {
    nom: "Bélier",
    slug: "belier",
    symbole: "♈",
    dates: "21 mars au 19 avril",
    element: "Feu",
  },
  {
    nom: "Taureau",
    slug: "taureau",
    symbole: "♉",
    dates: "20 avril au 20 mai",
    element: "Terre",
  },
  {
    nom: "Gémeaux",
    slug: "gemeaux",
    symbole: "♊",
    dates: "21 mai au 20 juin",
    element: "Air",
  },
  {
    nom: "Cancer",
    slug: "cancer",
    symbole: "♋",
    dates: "21 juin au 22 juillet",
    element: "Eau",
  },
  {
    nom: "Lion",
    slug: "lion",
    symbole: "♌",
    dates: "23 juillet au 22 août",
    element: "Feu",
  },
  {
    nom: "Vierge",
    slug: "vierge",
    symbole: "♍",
    dates: "23 août au 22 septembre",
    element: "Terre",
  },
  {
    nom: "Balance",
    slug: "balance",
    symbole: "♎",
    dates: "23 septembre au 22 octobre",
    element: "Air",
  },
  {
    nom: "Scorpion",
    slug: "scorpion",
    symbole: "♏",
    dates: "23 octobre au 21 novembre",
    element: "Eau",
  },
  {
    nom: "Sagittaire",
    slug: "sagittaire",
    symbole: "♐",
    dates: "22 novembre au 21 décembre",
    element: "Feu",
  },
  {
    nom: "Capricorne",
    slug: "capricorne",
    symbole: "♑",
    dates: "22 décembre au 19 janvier",
    element: "Terre",
  },
  {
    nom: "Verseau",
    slug: "verseau",
    symbole: "♒",
    dates: "20 janvier au 18 février",
    element: "Air",
  },
  {
    nom: "Poissons",
    slug: "poissons",
    symbole: "♓",
    dates: "19 février au 20 mars",
    element: "Eau",
  },
];

export default function HoroscopePage() {
  const dateDuJour = new Intl.DateTimeFormat(
    "fr-CA",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "America/Toronto",
    }
  ).format(new Date());

  return (
    <AuthProvider>
      <SiteHeader />

      <main className="horoscope-page">
        <section className="horoscope-hero">
          <div className="horoscope-hero-glow" />

          <div className="horoscope-hero-content">
            <span className="horoscope-eyebrow">
              ✦ Guidance astrologique quotidienne
            </span>

            <h1>
              Horoscope du jour gratuit
            </h1>

            <p className="horoscope-date">
              {dateDuJour}
            </p>

            <p className="horoscope-intro">
              Découvrez les grandes tendances
              astrologiques de votre journée.
              Sélectionnez votre signe pour consulter
              votre horoscope en amour, au travail,
              dans vos finances et votre bien-être.
            </p>
          </div>
        </section>

        <section
          className="horoscope-signs-section"
          aria-labelledby="horoscope-signs-title"
        >
          <div className="horoscope-section-heading">
            <span className="horoscope-section-kicker">
              Les douze signes du zodiaque
            </span>

            <h2 id="horoscope-signs-title">
              Choisissez votre signe astrologique
            </h2>

            <p>
              Consultez gratuitement les énergies
              qui pourraient influencer votre journée.
            </p>
          </div>

          <div className="horoscope-signs-grid">
            {signes.map((signe) => (
              <Link
                key={signe.slug}
                href={`/horoscope/${signe.slug}`}
                className="horoscope-sign-card"
                aria-label={`Consulter l’horoscope du jour du signe ${signe.nom}`}
              >
                <span
                  className="horoscope-sign-symbol"
                  aria-hidden="true"
                >
                  {signe.symbole}
                </span>

                <div className="horoscope-sign-content">
                  <h3>{signe.nom}</h3>

                  <p className="horoscope-sign-dates">
                    {signe.dates}
                  </p>

                  <span className="horoscope-sign-element">
                    Élément {signe.element}
                  </span>
                </div>

                <span
                  className="horoscope-sign-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="horoscope-info-section">
          <div className="horoscope-info-card">
            <span className="horoscope-info-icon">
              ☾
            </span>

            <div>
              <h2>
                Une lecture astrologique quotidienne
              </h2>

              <p>
                L’horoscope du jour présente une
                interprétation générale des influences
                astrologiques associées à chaque signe.
                Pour une analyse plus personnelle, votre
                date, votre heure et votre lieu de
                naissance sont nécessaires.
              </p>
            </div>
          </div>
        </section>

        <section className="horoscope-cta-section">
          <div className="horoscope-cta">
            <span className="horoscope-cta-kicker">
              Allez plus loin
            </span>

            <h2>
              Votre signe solaire ne raconte qu’une
              partie de votre histoire
            </h2>

            <p>
              Découvrez votre Soleil, votre Lune, votre
              ascendant, vos maisons astrologiques et
              les principales influences de votre carte
              du ciel.
            </p>

            <div className="horoscope-cta-actions">
              <Link
                href="/carte-du-ciel"
                className="horoscope-primary-button"
              >
                Créer ma carte du ciel gratuite
              </Link>

              <Link
                href="/compatibilite"
                className="horoscope-secondary-button"
              >
                Tester une compatibilité
              </Link>
            </div>
          </div>
        </section>

        <nav
          className="horoscope-bottom-nav"
          aria-label="Navigation astrologique"
        >
          <Link href="/astrologie">
            Découvrir l’astrologie
          </Link>

          <Link href="/astrologie/signes">
            Les signes astrologiques
          </Link>

          <Link href="/pricing">
            Voir les analyses complètes
          </Link>
        </nav>
      </main>
    </AuthProvider>
  );
}
