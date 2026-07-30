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

import HoroscopeYearlyCheckoutForm
  from "../HoroscopeYearlyCheckoutForm";

import "../horoscope-premium.css";
import "../horoscope-daily-form.css";

/*
|--------------------------------------------------------------------------
| Informations du rapport
|--------------------------------------------------------------------------
*/

const PAGE_URL =
  "https://luna-astralis.app/horoscope/premium/annee";

const REPORT_PRICE =
  "34,99 $ US";

const REPORT_PAGES =
  "54 pages";

const REPORT_PREVIEW_URL =
  "/reports/apercu-rapport-horoscope-annee.pdf";

const REPORT_COVER_URL =
  "/reports/couverture-horoscope-annee.png";

/*
|--------------------------------------------------------------------------
| Métadonnées SEO
|--------------------------------------------------------------------------
*/

export const metadata: Metadata = {
  title:
    "Horoscope annuel personnalisé 2027 | Luna Astralis",

  description:
    "Découvrez les grandes tendances astrologiques de votre année grâce à un horoscope annuel personnalisé selon votre date, votre heure et votre lieu de naissance.",

  alternates: {
    canonical:
      PAGE_URL,
  },

  openGraph: {
    title:
      "Horoscope annuel personnalisé | Luna Astralis",

    description:
      "Recevez une lecture astrologique complète de votre année avec vos périodes clés, vos influences planétaires, vos défis et vos opportunités.",

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
          "Couverture du rapport Horoscope annuel personnalisé",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Horoscope annuel personnalisé | Luna Astralis",

    description:
      "Découvrez les influences astrologiques, les périodes clés et les grandes tendances de votre année.",

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
  "Grandes tendances et énergies dominantes de votre année",
  "Amour, travail, finances, santé et relations",
  "Planètes dominantes et maisons astrologiques activées",
  "Périodes favorables, défis et occasions importantes",
  "Calendrier astrologique et meilleures périodes de l’année",
  "Rapport PDF détaillé d’environ 54 pages",
];

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default function HoroscopePremiumAnneePage() {
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
          aria-labelledby="horoscope-year-title"
        >
          <div className="horoscope-daily-hero-copy">
            <span className="premium-section-kicker">
              ✨ Horoscope Premium de l’année
            </span>

            <h1 id="horoscope-year-title">
              Découvrez les grandes tendances de votre année grâce à votre ciel
              personnel
            </h1>

            <p className="horoscope-daily-hero-description">
              Recevez une lecture astrologique personnalisée à partir de votre
              date, votre heure et votre lieu de naissance. Découvrez les
              influences dominantes, les périodes importantes et les grands
              mouvements qui pourraient accompagner votre année.
            </p>

            <div className="horoscope-daily-hero-actions">
              <a
                href="#commande"
                className="premium-button premium-button-primary"
              >
                Créer mon horoscope annuel

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
                alt="Couverture du rapport Horoscope annuel personnalisé"
                width={566}
                height={800}
                priority
                className="horoscope-daily-cover-image"
              />
            </div>

            <span className="horoscope-daily-offer-label">
              Votre rapport de l’année
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
          aria-labelledby="horoscope-year-introduction-title"
        >
          <span className="premium-section-kicker">
            Une vision complète de votre année
          </span>

          <h2 id="horoscope-year-introduction-title">
            Bien plus qu’un horoscope annuel général
          </h2>

          <p>
            Un horoscope annuel classique se base principalement sur votre
            signe solaire. Votre rapport Premium tient également compte de
            votre date, de votre heure et de votre lieu de naissance afin de
            proposer une lecture plus personnelle, plus nuancée et mieux
            adaptée à votre ciel astrologique.
          </p>

          <p>
            Il vous permet de découvrir les domaines les plus actifs de votre
            année, les périodes favorables, les moments plus délicats ainsi que
            les grandes occasions d’évolution qui pourraient se présenter.
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
          aria-labelledby="horoscope-year-order-title"
        >
          <div className="horoscope-daily-content-heading">
            <span className="premium-section-kicker">
              Votre horoscope annuel personnalisé
            </span>

            <h2 id="horoscope-year-order-title">
              Entrez vos informations de naissance
            </h2>

            <p>
              Ces renseignements permettent de calculer votre thème natal et
              les influences astrologiques actives pendant l’année
              sélectionnée.
            </p>
          </div>

          <HoroscopeYearlyCheckoutForm />
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
