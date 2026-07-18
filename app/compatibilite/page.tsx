import type { Metadata } from "next";
import Link from "next/link";

import CompatibilityCard from "@/components/CompatibilityCard";

import "./page.css";

export const metadata: Metadata = {
  title: "Compatibilité amoureuse gratuite | Luna Astralis",
  description:
    "Calculez gratuitement la compatibilité amoureuse entre deux signes du zodiaque et découvrez les analyses premium de Luna Astralis.",
  alternates: {
    canonical: "https://luna-astralis.app/compatibilite",
  },
  openGraph: {
    title: "Compatibilité amoureuse gratuite | Luna Astralis",
    description:
      "Découvrez gratuitement la compatibilité entre deux signes astrologiques.",
    url: "https://luna-astralis.app/compatibilite",
    siteName: "Luna Astralis",
    type: "website",
    locale: "fr_CA",
  },
};

export default function CompatibilitePage() {
  return (
    <div className="compat-page">
      <main className="compat-main">
        <section className="compat-hero">
          <div className="compat-badge">✨ Test gratuit</div>

          <h1>Compatibilité amoureuse</h1>

          <p>
            Découvrez gratuitement l’alchimie entre deux signes astrologiques,
            obtenez votre score amoureux et partagez votre résultat en quelques
            secondes.
          </p>
        </section>

        <section
          className="compat-card"
          aria-label="Calculateur de compatibilité amoureuse"
        >
          <CompatibilityCard />
        </section>

        <section className="compat-services">
          <div className="compat-services-heading">
            <span className="compat-services-label">
              ✨ Analyses personnalisées
            </span>

            <h2>Allez encore plus loin</h2>

            <p className="compat-services-intro">
              Explorez votre personnalité, vos relations et votre avenir grâce
              aux analyses astrologiques personnalisées de Luna Astralis.
            </p>
          </div>

          <div className="compat-services-grid">
            <article className="premium-card premium-card-featured">
              <div className="premium-card-label">Le plus populaire</div>

              <div className="premium-icon" aria-hidden="true">
                🌙
              </div>

              <h3>Carte du ciel Premium</h3>

              <p>
                Recevez une analyse astrologique complète basée sur votre date,
                votre heure et votre lieu de naissance.
              </p>

              <ul className="premium-features">
                <li>Votre Soleil, votre Lune et votre ascendant</li>
                <li>Vos planètes, maisons et aspects</li>
                <li>Vos forces, vos défis et votre potentiel</li>
                <li>Rapport PDF personnalisé</li>
              </ul>

              <Link href="/pricing" className="premium-button">
                Découvrir les cartes du ciel
              </Link>
            </article>

            <article className="premium-card">
              <div className="premium-icon" aria-hidden="true">
                ❤️
              </div>

              <h3>Compatibilité Premium</h3>

              <p>
                Comparez deux cartes du ciel complètes et découvrez les forces,
                les défis et le potentiel réel de votre relation.
              </p>

              <ul className="premium-features">
                <li>Compatibilité émotionnelle et amoureuse</li>
                <li>Communication et attirance</li>
                <li>Forces et tensions de la relation</li>
                <li>Rapport PDF personnalisé</li>
              </ul>

              <Link
                href="/compatibilite/premium"
                className="premium-button premium-button-secondary"
              >
                Découvrir la compatibilité
              </Link>
            </article>

            <article className="premium-card">
              <div className="premium-icon" aria-hidden="true">
                🔮
              </div>

              <h3>Horoscope Premium</h3>

              <p>
                Recevez des prévisions astrologiques personnalisées selon votre
                signe et votre thème astral.
              </p>

              <ul className="premium-features">
                <li>Horoscope du jour</li>
                <li>Prévisions mensuelles</li>
                <li>Prévisions annuelles</li>
                <li>Conseils personnalisés</li>
              </ul>

              <Link
                href="/horoscope/premium"
                className="premium-button premium-button-secondary"
              >
                Découvrir les horoscopes
              </Link>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
