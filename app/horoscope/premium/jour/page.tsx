import type { Metadata } from "next";
import Link from "next/link";

import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";
import HoroscopeDailyCheckoutForm from "./HoroscopeDailyCheckoutForm";

import "../horoscope-premium.css";
import "./horoscope-daily-form.css";

export const metadata: Metadata = {
  title: "Horoscope Premium du jour personnalisé | Luna Astralis",
  description:
    "Créez votre horoscope Premium du jour à partir de votre date, votre heure et votre lieu de naissance.",
  alternates: {
    canonical: "https://luna-astralis.app/horoscope/premium/jour",
  },
};

export default function HoroscopePremiumJourPage() {
  return (
    <AuthProvider>
      <SiteHeader />

      <main className="premium-page horoscope-daily-page">
        <section className="horoscope-daily-hero">
          <span className="premium-section-kicker">
            🌙 Horoscope Premium du jour
          </span>

          <h1>Votre journée, interprétée selon votre ciel personnel</h1>

          <p>
            Entrez vos informations de naissance pour calculer vos transits
            astrologiques et créer votre rapport personnalisé de 17 pages.
          </p>

          <div className="horoscope-daily-price">9,99 $ US</div>
        </section>

        <section className="horoscope-daily-content">
          <HoroscopeDailyCheckoutForm />
        </section>

        <nav
          className="premium-bottom-navigation"
          aria-label="Navigation Horoscope Premium"
        >
          <Link href="/horoscope/premium">← Toutes les formules</Link>
          <Link href="/horoscope">Horoscope gratuit →</Link>
        </nav>
      </main>
    </AuthProvider>
  );
}
