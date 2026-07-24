import type { Metadata } from "next";
import Link from "next/link";

import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";

import HoroscopeDailyCheckoutForm from "../HoroscopeDailyCheckoutForm";

import "../horoscope-premium.css";
import "../horoscope-daily-form.css";

export const metadata: Metadata = {
  title:
    "Horoscope Premium du jour personnalisé | Luna Astralis",

  description:
    "Créez votre horoscope Premium du jour à partir de votre date, votre heure et votre lieu de naissance.",

  alternates: {
    canonical:
      "https://luna-astralis.app/horoscope/premium/jour",
  },

  openGraph: {
    title:
      "Horoscope Premium du jour personnalisé | Luna Astralis",

    description:
      "Découvrez les influences astrologiques de votre journée grâce à un horoscope personnalisé selon vos informations de naissance.",

    url:
      "https://luna-astralis.app/horoscope/premium/jour",

    siteName:
      "Luna Astralis",

    type:
      "website",

    locale:
      "fr_CA",
  },
};

const BENEFITS = [
  "Analyse personnalisée selon votre thème natal",
  "Transits astrologiques de votre journée",
  "Amour, travail, énergie et décisions",
  "Rapport PDF détaillé de 17 pages",
];

export default function HoroscopePremiumJourPage() {
  return (
    <AuthProvider>
      <SiteHeader />

      <main className="premium-page horoscope-daily-page">
        <section
          className="horoscope-daily-hero"
          aria-labelledby="horoscope-daily-title"
        >
          <div className="horoscope-daily-hero-copy">
            <span className="premium-section-kicker">
              🌙 Horoscope Premium du jour
            </span>

            <h1 id="horoscope-daily-title">
              Comprenez les influences de votre journée grâce à votre
              ciel personnel
            </h1>

            <p className="horoscope-daily-hero-description">
              Recevez une lecture astrologique personnalisée à partir
              de votre date, votre heure et votre lieu de naissance.
              Vos transits du jour sont analysés pour vous aider à
              mieux comprendre vos émotions, vos relations et vos
              décisions.
            </p>

            <div className="horoscope-daily-hero-actions">
              <a
                href="#commande"
                className="premium-button premium-button-primary"
              >
                Créer mon horoscope
                <span aria-hidden="true">✦</span>
              </a>

              <Link
                href="/horoscope/premium"
                className="premium-button premium-button-secondary"
              >
                Voir toutes les formules
              </Link>
            </div>

            <div className="horoscope-daily-trust">
              <span>✓ 17 pages personnalisées</span>
              <span>✓ Paiement unique</span>
              <span>✓ Téléchargement après paiement</span>
            </div>
          </div>

          <aside className="horoscope-daily-offer">
            <span className="horoscope-daily-offer-label">
              Votre rapport du jour
            </span>

            <div className="horoscope-daily-price">
              9,99&nbsp;$ US
            </div>

            <span className="horoscope-daily-payment">
              Paiement unique
            </span>

            <ul>
              {BENEFITS.map((benefit) => (
                <li key={benefit}>
                  <span aria-hidden="true">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section
          className="horoscope-daily-introduction"
          aria-labelledby="horoscope-daily-introduction-title"
        >
          <span className="premium-section-kicker">
            Une lecture créée pour vous
          </span>

          <h2 id="horoscope-daily-introduction-title">
            Bien plus qu’un horoscope général
          </h2>

          <p>
            Un horoscope classique se base uniquement sur votre signe
            solaire. Votre horoscope Premium tient également compte de
            votre heure et de votre lieu de naissance afin de proposer
            une lecture beaucoup plus personnelle et nuancée.
          </p>
        </section>

        <section
          id="commande"
          className="horoscope-daily-content"
          aria-labelledby="horoscope-daily-order-title"
        >
          <div className="horoscope-daily-content-heading">
            <span className="premium-section-kicker">
              Votre horoscope personnalisé
            </span>

            <h2 id="horoscope-daily-order-title">
              Entrez vos informations de naissance
            </h2>

            <p>
              Ces renseignements permettent de calculer votre thème
              natal et les transits astrologiques actifs aujourd’hui.
            </p>
          </div>

          <HoroscopeDailyCheckoutForm />
        </section>

        <nav
          className="premium-bottom-navigation"
          aria-label="Navigation Horoscope Premium"
        >
          <Link href="/horoscope/premium">
            ← Toutes les formules
          </Link>

          <Link href="/horoscope">
            Horoscope gratuit →
          </Link>
        </nav>
      </main>
    </AuthProvider>
  );
}
