import type {
  Metadata,
} from "next";

import Image
  from "next/image";

import Link
  from "next/link";

import AuthProvider
  from "@/components/AuthProvider";

import SiteHeader
  from "@/components/SiteHeader";

import HoroscopeMonthlyCheckoutForm
  from "../HoroscopeMonthlyCheckoutForm";

import "../horoscope-premium.css";
import "../horoscope-daily-form.css";

/*
|--------------------------------------------------------------------------
| Informations du rapport
|--------------------------------------------------------------------------
*/

const PAGE_URL =
  "https://luna-astralis.app/horoscope/premium/mois";

const REPORT_PRICE =
  "19,99 $ US";

const REPORT_PAGES =
  "30 pages";

const REPORT_PREVIEW_URL =
  "/reports/apercu-rapport-horoscope-mois.pdf";

const REPORT_COVER_URL =
  "/reports/couverture-horoscope-mois.png";

/*
|--------------------------------------------------------------------------
| Métadonnées SEO
|--------------------------------------------------------------------------
*/

export const metadata: Metadata = {
  title:
    "Horoscope Premium du mois personnalisé | Luna Astralis",

  description:
    "Découvrez les grandes influences astrologiques de votre mois grâce à un horoscope personnalisé selon votre date, votre heure et votre lieu de naissance.",

  alternates: {
    canonical:
      PAGE_URL,
  },

  openGraph: {
    title:
      "Horoscope Premium du mois personnalisé | Luna Astralis",

    description:
      "Recevez une lecture astrologique personnalisée de votre mois avec vos transits, vos périodes clés, vos défis et vos opportunités.",

    url:
      PAGE_URL,

    siteName:
      "Luna Astralis",

    type:
      "website",

    locale:
      "fr_CA",

    images: [
      {
        url:
          REPORT_COVER_URL,

        width:
          1414,

        height:
          2000,

        alt:
          "Couverture du rapport Horoscope Premium du mois",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Horoscope Premium du mois personnalisé | Luna Astralis",

    description:
      "Découvrez les influences astrologiques, les périodes clés et les grandes tendances de votre mois.",

    images: [
      REPORT_COVER_URL,
    ],
  },

  robots: {
    index:
      true,

    follow:
      true,
  },
};

/*
|--------------------------------------------------------------------------
| Contenu du rapport
|--------------------------------------------------------------------------
*/

const BENEFITS = [
  "Analyse personnalisée selon votre thème natal",
  "Grandes influences astrologiques du mois",
  "Amour, travail, finances, énergie et relations",
  "Périodes favorables et moments plus délicats",
  "Rapport PDF détaillé d’environ 30 pages",
];

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default function HoroscopePremiumMoisPage() {
  return (
    <AuthProvider>
      <SiteHeader />

      <main className="premium-page horoscope-daily-page">
        {/*
        |--------------------------------------------------------------------------
        | Hero
        |--------------------------------------------------------------------------
        */}

        <section
          className="horoscope-daily-hero"
          aria-labelledby="horoscope-month-title"
        >
          <div className="horoscope-daily-hero-copy">
            <span className="premium-section-kicker">
              🌙 Horoscope Premium du mois
            </span>

            <h1 id="horoscope-month-title">
              Comprenez les grandes influences de votre mois grâce à votre
              ciel personnel
            </h1>

            <p className="horoscope-daily-hero-description">
              Recevez une lecture astrologique personnalisée à partir de votre
              date, votre heure et votre lieu de naissance. Découvrez les
              énergies dominantes, les périodes importantes et les tendances
              qui pourraient influencer votre mois.
            </p>

            <div className="horoscope-daily-hero-actions">
              <a
                href="#commande"
                className="premium-button premium-button-primary"
              >
                Créer mon horoscope mensuel

                <span aria-hidden="true">
                  ✦
                </span>
              </a>

              <a
                href={REPORT_PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button premium-button-secondary"
              >
                Voir l’aperçu PDF
              </a>
            </div>

            <a
              href={REPORT_PREVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-hero-preview-link"
            >
              📖 Consulter un véritable aperçu du rapport
            </a>

            <div className="horoscope-daily-trust">
              <span>
                ✓ {REPORT_PAGES} personnalisées
              </span>

              <span>
                ✓ Paiement unique
              </span>

              <span>
                ✓ Téléchargement après paiement
              </span>
            </div>
          </div>

          {/*
          |--------------------------------------------------------------------------
          | Offre et couverture
          |--------------------------------------------------------------------------
          */}

          <aside className="horoscope-daily-offer">
            <div className="horoscope-daily-cover">
              <Image
                src={REPORT_COVER_URL}
                alt="Couverture du rapport Horoscope Premium du mois"
                width={566}
                height={800}
                priority
                className="horoscope-daily-cover-image"
              />
            </div>

            <span className="horoscope-daily-offer-label">
              Votre rapport du mois
            </span>

            <div className="horoscope-daily-price">
              {REPORT_PRICE}
            </div>

            <span className="horoscope-daily-payment">
              Paiement unique
            </span>

            <ul>
              {BENEFITS.map(
                (
                  benefit,
                ) => (
                  <li key={benefit}>
                    <span aria-hidden="true">
                      ✓
                    </span>

                    {benefit}
                  </li>
                ),
              )}
            </ul>

            <a
              href={REPORT_PREVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-order-preview-link"
            >
              Voir l’aperçu avant de commander

              <span aria-hidden="true">
                {" "}
                →
              </span>
            </a>
          </aside>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Introduction
        |--------------------------------------------------------------------------
        */}

        <section
          className="horoscope-daily-introduction"
          aria-labelledby="horoscope-month-introduction-title"
        >
          <span className="premium-section-kicker">
            Une vision complète de votre mois
          </span>

          <h2 id="horoscope-month-introduction-title">
            Bien plus qu’un horoscope mensuel général
          </h2>

          <p>
            Un horoscope mensuel classique se base uniquement sur votre signe
            solaire. Votre rapport Premium tient également compte de votre
            heure et de votre lieu de naissance afin de proposer une lecture
            plus personnelle, plus nuancée et mieux adaptée à votre situation.
          </p>

          <div className="horoscope-daily-introduction-actions">
            <a
              href={REPORT_PREVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button premium-button-secondary"
            >
              Découvrir l’aperçu du rapport
            </a>
          </div>
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Formulaire de commande
        |--------------------------------------------------------------------------
        */}

        <section
          id="commande"
          className="horoscope-daily-content"
          aria-labelledby="horoscope-month-order-title"
        >
          <div className="horoscope-daily-content-heading">
            <span className="premium-section-kicker">
              Votre horoscope mensuel personnalisé
            </span>

            <h2 id="horoscope-month-order-title">
              Entrez vos informations de naissance
            </h2>

            <p>
              Ces renseignements permettent de calculer votre thème natal et
              les transits astrologiques actifs pendant le mois sélectionné.
            </p>
          </div>

          <HoroscopeMonthlyCheckoutForm />
        </section>

        {/*
        |--------------------------------------------------------------------------
        | Navigation du bas
        |--------------------------------------------------------------------------
        */}

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
