import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import AuthProvider from "@/components/AuthProvider";
import ReportCheckoutForm from "@/components/ReportCheckoutForm";
import SiteHeader from "@/components/SiteHeader";

import "./page.css";

/*
|--------------------------------------------------------------------------
| Métadonnées SEO
|--------------------------------------------------------------------------
*/

export const metadata: Metadata = {
  title:
    "Rapport Carte du ciel Essentielle | Thème astral personnalisé",

  description:
    "Découvrez votre Soleil, votre Lune, votre Ascendant et les principales énergies de votre thème astral dans un rapport PDF personnalisé.",

  alternates: {
    canonical:
      "https://luna-astralis.app/carte-du-ciel/essentielle",
  },

  openGraph: {
    title:
      "Rapport Carte du ciel Essentielle | Luna Astralis",

    description:
      "Une lecture claire et personnalisée des fondations de votre thème astral.",

    url:
      "https://luna-astralis.app/carte-du-ciel/essentielle",

    siteName:
      "Luna Astralis",

    type:
      "website",

    locale:
      "fr_CA",

    images: [
      {
        url:
          "/reports/couverture-carte-du-ciel-essentielle.png",

        width: 1414,
        height: 2000,

        alt:
          "Couverture du rapport Carte du ciel Essentielle",
      },
    ],
  },
};

/*
|--------------------------------------------------------------------------
| Contenu du rapport
|--------------------------------------------------------------------------
*/

const reportContents = [
  {
    icon: "☉",
    title: "Votre Soleil",
    text:
      "Votre identité profonde et votre énergie centrale.",
  },

  {
    icon: "☾",
    title: "Votre Lune",
    text:
      "Vos émotions, vos besoins et vos réactions instinctives.",
  },

  {
    icon: "↑",
    title: "Votre Ascendant",
    text:
      "Votre manière d’aborder la vie et l’image que vous projetez.",
  },

  {
    icon: "✦",
    title: "Vos planètes",
    text:
      "Les principales forces planétaires de votre thème.",
  },

  {
    icon: "△",
    title: "Vos éléments",
    text:
      "L’équilibre entre le Feu, la Terre, l’Air et l’Eau.",
  },

  {
    icon: "◇",
    title: "Vos modalités",
    text:
      "Votre façon d’agir, de persévérer et de vous adapter.",
  },
];

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default function EssentiellePage() {
  return (
    <AuthProvider>
      <SiteHeader />

      <main className="essential-report-page">
        {/*
        |--------------------------------------------------------------------------
        | Hero
        |--------------------------------------------------------------------------
        */}

        <section className="essential-hero">
          <div
            className="essential-hero-stars"
            aria-hidden="true"
          />

          <div className="essential-hero-content">
            <div className="essential-eyebrow">
              <span aria-hidden="true">
                ✦
              </span>

              Rapport astrologique personnalisé
            </div>

            <h1>
              Rapport Carte du ciel

              <span>
                Essentielle
              </span>
            </h1>

            <p className="essential-hero-description">
              Découvrez votre Soleil, votre Lune,
              votre Ascendant et les principales
              énergies de votre thème dans un rapport
              élégant créé à partir de vos informations
              de naissance.
            </p>

            <div className="essential-hero-details">
              <span>
                <strong>
                  17 pages
                </strong>

                d’analyse
              </span>

              <span>
                <strong>
                  PDF personnalisé
                </strong>

                à télécharger
              </span>

              <span>
                <strong>
                  Paiement unique
                </strong>

                sans abonnement
              </span>
            </div>

            <div className="essential-price">
              <span>
                Rapport Essentielle
              </span>

              <strong>
                24,99 $ US
              </strong>
            </div>

            <div className="essential-hero-actions">
              <Link
                href="#commander-essentielle"
                className="essential-primary-button"
              >
                Créer mon rapport

                <span aria-hidden="true">
                  ✦
                </span>
              </Link>

              <a
                href="/reports/apercu-rapport-carte-du-ciel-essentielle.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="essential-secondary-button"
              >
                Voir l’aperçu PDF
              </a>
            </div>

            <div className="essential-security-note">
              <span aria-hidden="true">
                🔒
              </span>

              Paiement sécurisé · Aucun abonnement
            </div>
          </div>

          <div className="essential-cover-area">
            <div className="essential-cover-glow" />

            <div className="essential-cover-frame">
              <Image
                src="/reports/couverture-carte-du-ciel-essentielle.png"
                alt="Couverture du rapport Carte du ciel Essentielle"
                width={707}
                height={1000}
                priority
                className="essential-cover-image"
              />
            </div>

            <div className="essential-cover-badge">
              <span aria-hidden="true">
                ✦
              </span>

              Créé pour vous
            </div>
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Contenu du rapport
        |--------------------------------------------------------------------------
        */}

        <section className="essential-contents-section">
          <div className="essential-section-heading essential-section-heading--center">
            <span className="essential-kicker">
              Dans votre rapport
            </span>

            <h2>
              Les fondations de votre thème astral
            </h2>

            <p>
              Une lecture claire des principales
              énergies qui composent votre personnalité.
            </p>
          </div>

          <div className="essential-contents-grid">
            {reportContents.map(
              (item) => (
                <article
                  className="essential-content-card"
                  key={item.title}
                >
                  <div className="essential-content-icon">
                    {item.icon}
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ),
            )}
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Aperçu du rapport
        |--------------------------------------------------------------------------
        */}

        <section className="essential-preview-section">
          <div
            className="essential-preview-decoration"
            aria-hidden="true"
          >
            ✦
          </div>

          <div className="essential-preview-content">
            <span className="essential-kicker">
              Aperçu réel
            </span>

            <h2>
              Découvrez le rapport avant de commander
            </h2>

            <p>
              Consultez quelques pages pour voir le
              design, la présentation et le style des
              interprétations.
            </p>

            <a
              href="/reports/apercu-rapport-carte-du-ciel-essentielle.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="essential-primary-button"
            >
              Ouvrir l’aperçu PDF

              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <div
            className="essential-preview-pages"
            aria-hidden="true"
          >
            <div className="essential-preview-page essential-preview-page--back">
              <span>
                Luna Astralis
              </span>
            </div>

            <div className="essential-preview-page essential-preview-page--middle">
              <span>
                Votre thème
              </span>
            </div>

            <div className="essential-preview-page essential-preview-page--front">
              <span className="essential-preview-symbol">
                ☾
              </span>

              <strong>
                Une analyse créée pour vous
              </strong>
            </div>
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Commande
        |--------------------------------------------------------------------------
        */}

        <section
          id="commander-essentielle"
          className="essential-final-cta"
        >
          <div
            className="essential-final-cta-glow"
            aria-hidden="true"
          />

          <span
            className="essential-final-symbol"
            aria-hidden="true"
          >
            ☾
          </span>

          <span className="essential-kicker">
            Votre rapport personnalisé
          </span>

          <h2>
            Créez votre rapport Essentielle
          </h2>

          <p>
            Entrez vos informations de naissance pour
            générer votre carte du ciel et votre analyse
            astrologique personnalisée.
          </p>

          <div className="essential-final-price">
            <span>
              Paiement unique
            </span>

            <strong>
              24,99 $ US
            </strong>
          </div>

          <div className="essential-checkout-area">
            <ReportCheckoutForm
              reportType="essential"
            />
          </div>

          <div className="essential-security-note">
            <span aria-hidden="true">
              🔒
            </span>

            Paiement sécurisé · Aucun abonnement
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Comparaison des rapports
        |--------------------------------------------------------------------------
        */}

        <section className="essential-other-reports">
          <span className="essential-kicker">
            Besoin de plus de détails ?
          </span>

          <h2>
            Comparez les trois rapports
          </h2>

          <p>
            Découvrez les différences entre les rapports
            Essentielle, Premium et Signature.
          </p>

          <Link
            href="/carte-du-ciel"
            className="essential-primary-button"
          >
            Comparer les rapports

            <span aria-hidden="true">
              →
            </span>
          </Link>
        </section>
      </main>
    </AuthProvider>
  );
}
