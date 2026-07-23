import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import AuthProvider from "@/components/AuthProvider";
import ReportCheckoutForm from "@/components/ReportCheckoutForm";
import SiteHeader from "@/components/SiteHeader";

import "./page.css";

/*
|--------------------------------------------------------------------------
| Informations du rapport
|--------------------------------------------------------------------------
*/

const PAGE_URL =
  "https://luna-astralis.app/carte-du-ciel/premium";

const REPORT_PRICE =
  "49,99 $ US";

const REPORT_PAGES =
  "40 pages";

const REPORT_PREVIEW_URL =
  "/reports/apercu-rapport-carte-du-ciel-premium.pdf";

const REPORT_COVER_URL =
  "/reports/couverture-carte-du-ciel-premium.png";

/*
|--------------------------------------------------------------------------
| Métadonnées SEO
|--------------------------------------------------------------------------
*/

export const metadata: Metadata = {
  title:
    "Rapport Carte du ciel Premium | Thème astral personnalisé de 40 pages",

  description:
    "Découvrez votre thème astral avec le rapport Premium Luna Astralis : 40 pages personnalisées sur votre personnalité, vos maisons, vos aspects, vos relations, votre carrière, vos forces et vos défis.",

  alternates: {
    canonical:
      PAGE_URL,
  },

  openGraph: {
    title:
      "Rapport Carte du ciel Premium | Luna Astralis",

    description:
      "Une analyse astrologique approfondie et personnalisée de 40 pages.",

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
          "Couverture du rapport Carte du ciel Premium",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Rapport Carte du ciel Premium | Luna Astralis",

    description:
      "Explorez votre thème natal en profondeur dans un rapport PDF personnalisé de 40 pages.",

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
| Contenu principal du rapport
|--------------------------------------------------------------------------
*/

const REPORT_FEATURES = [
  {
    icon:
      "☉",

    title:
      "Soleil, Lune et Ascendant",

    description:
      "Découvrez les trois piliers de votre personnalité astrologique et la manière dont ils interagissent dans votre thème.",
  },

  {
    icon:
      "☿",

    title:
      "Vos planètes",

    description:
      "Explorez les approfondies positions planétaires qui influencent votre pensée, vos émotions, vos désirs et vos actions.",
  },

  {
    icon:
      "△",

    title:
      "Éléments et modalités",

    description:
      "Comprenez l’équilibre entre le Feu, la Terre, l’Air et l’Eau ainsi que votre manière d’agir, de persévérer et de vous adapter.",
  },

  {
    icon:
      "⌂",

    title:
      "Vos maisons astrologiques",

    description:
      "Découvrez dans quels domaines de votre vie les différentes énergies de votre thème s’expriment avec le plus de force.",
  },

  {
    icon:
      "◇",

    title:
      "Vos aspects planétaires",

    description:
      "Analysez les liens harmonieux et les tensions entre vos planètes afin de mieux comprendre vos dynamiques intérieures.",
  },

  {
    icon:
      "★",

    title:
      "Vos dominantes",

    description:
      "Identifiez les planètes, les signes et les énergies qui occupent une place centrale dans votre personnalité.",
  },

  {
    icon:
      "⚖",

    title:
      "Forces et défis",

    description:
      "Mettez en lumière vos aptitudes naturelles, vos zones de tension et les défis qui favorisent votre évolution.",
  },

  {
    icon:
      "♡",

    title:
      "Relations et vie affective",

    description:
      "Comprenez vos besoins relationnels, votre manière d’aimer et les dynamiques qui influencent vos liens.",
  },

  {
    icon:
      "↗",

    title:
      "Carrière et potentiel",

    description:
      "Découvrez vos talents, vos motivations professionnelles et les environnements qui soutiennent votre épanouissement.",
  },
];

/*
|--------------------------------------------------------------------------
| Principaux bénéfices
|--------------------------------------------------------------------------
*/

const BENEFIT_ITEMS = [
  {
    icon:
      "✦",

    title:
      "Comprendre vos contradictions",

    text:
      "Reliez les différentes facettes de votre personnalité afin de mieux comprendre les tensions que vous ressentez parfois.",
  },

  {
    icon:
      "⌂",

    title:
      "Explorer vos domaines de vie",

    text:
      "Découvrez comment vos planètes s’expriment dans vos relations, votre carrière, votre foyer et votre évolution personnelle.",
  },

  {
    icon:
      "◇",

    title:
      "Décoder vos dynamiques intérieures",

    text:
      "Observez les accords et les tensions entre vos planètes pour mieux comprendre vos réactions et vos décisions.",
  },

  {
    icon:
      "★",

    title:
      "Reconnaître votre potentiel",

    text:
      "Identifiez vos dominantes, vos forces naturelles et les défis qui peuvent devenir de véritables leviers de croissance.",
  },
];

/*
|--------------------------------------------------------------------------
| Étapes
|--------------------------------------------------------------------------
*/

const PROCESS_STEPS = [
  {
    number:
      "01",

    title:
      "Indiquez votre naissance",

    description:
      "Entrez votre prénom, votre date, votre heure ainsi que votre ville et votre pays de naissance.",
  },

  {
    number:
      "02",

    title:
      "Votre thème complet est calculé",

    description:
      "Vos planètes, votre Ascendant, vos maisons, vos aspects et vos dominantes sont calculés automatiquement.",
  },

  {
    number:
      "03",

    title:
      "Téléchargez votre rapport",

    description:
      "Après le paiement, votre rapport Premium personnalisé de 40 pages est généré et offert en téléchargement.",
  },
];

/*
|--------------------------------------------------------------------------
| Questions fréquentes
|--------------------------------------------------------------------------
*/

const FAQ_ITEMS = [
  {
    question:
      "Quelle est la différence entre Essentielle et Premium ?",

    answer:
      "Le rapport Essentielle présente les fondations de votre thème astral. Le rapport Premium va plus loin avec vos maisons astrologiques, vos aspects planétaires, vos dominantes, vos forces, vos défis, vos relations et votre potentiel professionnel.",
  },

  {
    question:
      "Quelles informations dois-je fournir ?",

    answer:
      "Vous devez fournir votre prénom, votre date de naissance, votre heure de naissance ainsi que votre ville et votre pays de naissance.",
  },

  {
    question:
      "Pourquoi l’heure de naissance est-elle importante ?",

    answer:
      "Une heure précise permet de calculer correctement votre Ascendant et vos maisons astrologiques. Sans heure fiable, certaines sections du rapport pourraient être inexactes.",
  },

  {
    question:
      "Le rapport est-il réellement personnalisé ?",

    answer:
      "Oui. Le rapport est généré à partir de vos propres positions planétaires, de vos maisons, de vos aspects et de votre véritable carte du ciel.",
  },

  {
    question:
      "Comment vais-je recevoir mon rapport ?",

    answer:
      "Votre rapport personnalisé est généré au format PDF après le paiement. Vous pourrez le télécharger directement depuis la page de confirmation.",
  },

  {
    question:
      "Le paiement est-il récurrent ?",

    answer:
      "Non. Il s’agit d’un paiement unique de 49,99 $ US. Aucun abonnement n’est associé à votre commande.",
  },
];

/*
|--------------------------------------------------------------------------
| Données structurées
|--------------------------------------------------------------------------
*/

const jsonLd = {
  "@context":
    "https://schema.org",

  "@type":
    "Product",

  name:
    "Rapport Carte du ciel Premium",

  description:
    "Rapport astrologique personnalisé de 40 pages comprenant les planètes, les maisons, les aspects, les dominantes, les relations, la carrière, les forces et les défis.",

  image:
    `https://luna-astralis.app${REPORT_COVER_URL}`,

  brand: {
    "@type":
      "Brand",

    name:
      "Luna Astralis",
  },

  url:
    PAGE_URL,

  offers: {
    "@type":
      "Offer",

    price:
      "49.99",

    priceCurrency:
      "USD",

    availability:
      "https://schema.org/InStock",

    url:
      PAGE_URL,
  },
};

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default function PremiumPage() {
  return (
    <AuthProvider>
      <SiteHeader />

      <div className="premium-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                jsonLd,
              ).replace(
                /</g,
                "\\u003c",
              ),
          }}
        />

        <main className="premium-main">
          {/*
          |--------------------------------------------------------------------------
          | Hero
          |--------------------------------------------------------------------------
          */}

          <section
            className="premium-hero"
            aria-labelledby="premium-title"
          >
            <div
              className="premium-hero-glow"
              aria-hidden="true"
            />

            <div
              className="premium-hero-stars"
              aria-hidden="true"
            />

            <div className="premium-hero-copy">
              <div className="premium-hero-badge">
                ✨ Rapport astrologique personnalisé
              </div>

              <p className="premium-hero-eyebrow">
                Votre thème natal • Une analyse approfondie
              </p>

              <h1 id="premium-title">
                Explorez en profondeur votre
                <span>
                  {" "}
                  carte du ciel
                </span>
              </h1>

              <p className="premium-hero-description">
                Explorez votre personnalité, vos maisons, vos
                aspects, vos dominantes, vos relations, vos
                forces et votre potentiel dans un rapport de
                40 pages entièrement personnalisé.
              </p>

              <div className="premium-hero-actions">
                <Link
                  href="#commande"
                  className="premium-button premium-button-primary"
                >
                  Créer mon rapport
                  <span aria-hidden="true">
                    ✦
                  </span>
                </Link>

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

              <div className="premium-hero-trust">
                <span>
                  ✓ {REPORT_PAGES}
                </span>

                <span>
                  ✓ PDF personnalisé
                </span>

                <span>
                  ✓ Téléchargement après paiement
                </span>
              </div>

              <div className="premium-hero-price">
                <div>
                  <span>
                    Rapport Premium
                  </span>

                  <small>
                    Paiement unique
                  </small>
                </div>

                <strong>
                  {REPORT_PRICE}
                </strong>
              </div>
            </div>

            <div className="premium-hero-visual">
              <div
                className="premium-cover-glow"
                aria-hidden="true"
              />

              <div className="premium-cover-frame">
                <Image
                  src={REPORT_COVER_URL}
                  alt="Couverture du rapport Carte du ciel Premium"
                  width={707}
                  height={1000}
                  priority
                  className="premium-cover-image"
                />
              </div>

              <div className="premium-cover-badge">
                <span aria-hidden="true">
                  ✦
                </span>

                Créé pour vous
              </div>

              <div
                className="premium-hero-orbit premium-hero-orbit-one"
                aria-hidden="true"
              >
                <span>
                  ☉
                </span>
              </div>

              <div
                className="premium-hero-orbit premium-hero-orbit-two"
                aria-hidden="true"
              >
                <span>
                  ☾
                </span>
              </div>
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | Au-delà du signe solaire
          |--------------------------------------------------------------------------
          */}

          <section className="premium-introduction">
            <div className="premium-section-heading">
              <span className="premium-section-label">
                Au-delà de votre signe
              </span>

              <h2>
                Vous êtes bien plus que votre signe solaire
              </h2>

              <p>
                Votre signe astrologique représente une partie
                importante de votre personnalité, mais il ne
                raconte pas toute votre histoire. Votre Lune, votre Ascendant, vos planètes, vos
                maisons et vos aspects permettent d’obtenir une
                lecture beaucoup plus riche et nuancée de votre
                fonctionnement.
              </p>
            </div>

            <div className="premium-introduction-grid">
              <article className="premium-introduction-card">
                <div className="premium-introduction-icon">
                  ☉
                </div>

                <span>
                  Votre signe solaire
                </span>

                <h3>
                  Une première facette
                </h3>

                <p>
                  Il représente votre identité centrale, votre
                  vitalité et votre manière naturelle de
                  rayonner.
                </p>

                <Link
                  href="/carte-du-ciel"
                  className="premium-text-link"
                >
                  Découvrir la carte gratuite
                  <span aria-hidden="true">
                    {" "}
                    →
                  </span>
                </Link>
              </article>

              <article className="premium-introduction-card premium-introduction-card-featured">
                <div className="premium-introduction-card-label">
                  Analyse personnalisée
                </div>

                <div className="premium-introduction-icon">
                  ✦
                </div>

                <span>
                  Votre thème natal
                </span>

                <h3>
                  Une personnalité complète
                </h3>

                <p>
                  Le rapport Premium réunit vos planètes, vos
                  maisons, vos aspects et vos dominantes pour
                  vous offrir une lecture complète, précise et
                  profondément personnelle.
                </p>

                <Link
                  href="#commande"
                  className="premium-text-link"
                >
                  Commencer mon analyse
                  <span aria-hidden="true">
                    {" "}
                    →
                  </span>
                </Link>
              </article>
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | Présentation du rapport
          |--------------------------------------------------------------------------
          */}

          <section
            id="apercu"
            className="premium-report-showcase"
          >
            <div className="premium-report-visual">
              <div className="premium-report-cover-wrapper">
                <Image
                  src={REPORT_COVER_URL}
                  alt="Aperçu de la couverture du rapport Premium"
                  width={566}
                  height={800}
                  className="premium-report-cover"
                />
              </div>

              <div
                className="premium-report-page premium-report-page-back"
                aria-hidden="true"
              >
                <span>
                  Luna Astralis
                </span>
              </div>

              <div
                className="premium-report-page premium-report-page-middle"
                aria-hidden="true"
              >
                <span>
                  Votre thème astral
                </span>
              </div>
            </div>

            <div className="premium-report-copy">
              <span className="premium-section-label">
                Votre rapport personnalisé
              </span>

              <h2>
                Une lecture approfondie des grandes
                dynamiques de votre thème
              </h2>

              <p>
                Le rapport Premium vous offre un portrait
                astrologique structuré, détaillé et facile à
                comprendre. Il relie vos placements, vos
                maisons, vos aspects et vos dominantes afin de
                révéler les grandes dynamiques de votre thème.
              </p>

              <div className="premium-report-statistics">
                <div>
                  <strong>
                    40
                  </strong>

                  <span>
                    pages personnalisées
                  </span>
                </div>

                <div>
                  <strong>
                    3
                  </strong>

                  <span>
                    piliers principaux
                  </span>
                </div>

                <div>
                  <strong>
                    1
                  </strong>

                  <span>
                    thème unique
                  </span>
                </div>
              </div>

              <ul className="premium-check-list">
                <li>
                  Votre Soleil, votre Lune et votre Ascendant
                </li>

                <li>
                  Les principales planètes de votre thème
                </li>

                <li>
                  Votre équilibre élémentaire
                </li>

                <li>
                  Vos modalités dominantes
                </li>

                <li>
                  Une synthèse claire de vos principales
                  énergies
                </li>
              </ul>

              <div className="premium-report-actions">
                <a
                  href={REPORT_PREVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button premium-button-primary"
                >
                  📖 Voir l’aperçu du rapport
                </a>

                <Link
                  href="#commande"
                  className="premium-button premium-button-secondary"
                >
                  Créer mon rapport
                </Link>
              </div>
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | Contenu du rapport
          |--------------------------------------------------------------------------
          */}

          <section className="premium-contents">
            <div className="premium-section-heading">
              <span className="premium-section-label">
                Dans votre rapport
              </span>

              <h2>
                Les fondations de votre personnalité
                astrologique
              </h2>

              <p>
                Chaque partie du rapport vous aide à mieux
                comprendre une dimension précise de votre
                fonctionnement intérieur.
              </p>
            </div>

            <div className="premium-feature-grid">
              {REPORT_FEATURES.map(
                (
                  feature,
                ) => (
                  <article
                    className="premium-feature-card"
                    key={feature.title}
                  >
                    <div className="premium-feature-icon">
                      {feature.icon}
                    </div>

                    <h3>
                      {feature.title}
                    </h3>

                    <p>
                      {feature.description}
                    </p>
                  </article>
                ),
              )}
            </div>

            <div className="premium-section-action">
              <Link
                href="#commande"
                className="premium-button premium-button-primary"
              >
                Obtenir mon rapport Premium
                <span aria-hidden="true">
                  ✦
                </span>
              </Link>
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | Bénéfices
          |--------------------------------------------------------------------------
          */}

          <section className="premium-benefits">
            <div className="premium-benefits-copy">
              <span className="premium-section-label">
                Une lecture approfondie de soi
              </span>

              <h2>
                Comprenez les dynamiques qui façonnent votre parcours
              </h2>

              <p>
                L’astrologie ne vous enferme pas dans une
                définition. Elle vous offre un langage
                symbolique pour observer vos tendances, vos
                besoins et vos forces avec davantage de
                recul.
              </p>

              <a
                href={REPORT_PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-text-link"
              >
                Consulter l’aperçu réel
                <span aria-hidden="true">
                  {" "}
                  →
                </span>
              </a>
            </div>

            <div className="premium-benefit-grid">
              {BENEFIT_ITEMS.map(
                (
                  item,
                ) => (
                  <article
                    className="premium-benefit-card"
                    key={item.title}
                  >
                    <div className="premium-benefit-icon">
                      {item.icon}
                    </div>

                    <div>
                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>
                    </div>
                  </article>
                ),
              )}
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | Fonctionnement
          |--------------------------------------------------------------------------
          */}

          <section className="premium-process">
            <div className="premium-section-heading">
              <span className="premium-section-label">
                Simple et immédiat
              </span>

              <h2>
                Comment obtenir votre rapport ?
              </h2>

              <p>
                Quelques minutes suffisent pour transmettre vos
                informations et lancer la création de votre
                analyse personnalisée.
              </p>
            </div>

            <div className="premium-process-grid">
              {PROCESS_STEPS.map(
                (
                  step,
                ) => (
                  <article
                    className="premium-process-card"
                    key={step.number}
                  >
                    <span className="premium-process-number">
                      {step.number}
                    </span>

                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.description}
                    </p>
                  </article>
                ),
              )}
            </div>

            <div className="premium-section-action">
              <Link
                href="#commande"
                className="premium-button premium-button-primary"
              >
                Commencer maintenant
                <span aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | Formulaire de commande
          |--------------------------------------------------------------------------
          */}

          <section
            id="commande"
            className="premium-order"
          >
            <div
              className="premium-order-glow"
              aria-hidden="true"
            />

            <div className="premium-section-heading">
              <span className="premium-section-label">
                Votre rapport personnalisé
              </span>

              <h2>
                Créez votre rapport Carte du ciel Premium
              </h2>

              <p>
                Entrez vos informations de naissance afin de
                calculer votre thème natal et de préparer votre
                rapport astrologique personnalisé.
              </p>
            </div>

            <div className="premium-order-layout">
              <div className="premium-order-form">
                <ReportCheckoutForm
                  reportType="premium"
                />
              </div>

              <aside className="premium-order-summary">
                <span className="premium-order-summary-label">
                  Votre commande
                </span>

                <h3>
                  Rapport Premium
                </h3>

                <div className="premium-order-price">
                  <strong>
                    {REPORT_PRICE}
                  </strong>

                  <span>
                    Paiement unique
                  </span>
                </div>

                <ul>
                  <li>
                    Rapport PDF personnalisé
                  </li>

                  <li>
                    40 pages d’analyse
                  </li>

                  <li>
                    Soleil, Lune et Ascendant
                  </li>

                  <li>
                    Planètes principales
                  </li>

                  <li>
                    Éléments et modalités
                  </li>

                  <li>
                    Maisons et aspects
                  </li>

                  <li>
                    Dominantes, forces et défis
                  </li>

                  <li>
                    Relations et carrière
                  </li>

                  <li>
                    Téléchargement après le paiement
                  </li>
                </ul>

                <div className="premium-order-security">
                  <span aria-hidden="true">
                    🔒
                  </span>

                  <p>
                    Paiement sécurisé
                    <small>
                      Aucun abonnement
                    </small>
                  </p>
                </div>

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
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | FAQ
          |--------------------------------------------------------------------------
          */}

          <section className="premium-faq">
            <div className="premium-section-heading">
              <span className="premium-section-label">
                Questions fréquentes
              </span>

              <h2>
                Tout savoir avant de commencer
              </h2>
            </div>

            <div className="premium-faq-list">
              {FAQ_ITEMS.map(
                (
                  item,
                ) => (
                  <details
                    className="premium-faq-item"
                    key={item.question}
                  >
                    <summary>
                      {item.question}
                    </summary>

                    <p>
                      {item.answer}
                    </p>
                  </details>
                ),
              )}
            </div>
          </section>

          {/*
          |--------------------------------------------------------------------------
          | Comparaison des rapports
          |--------------------------------------------------------------------------
          */}

          <section className="premium-comparison">
            <div
              className="premium-comparison-glow"
              aria-hidden="true"
            />

            <span className="premium-section-label">
              Vous souhaitez comparer les trois niveaux ?
            </span>

            <h2>
              Comparez les trois rapports Carte du ciel
            </h2>

            <p>
              Découvrez les différences entre les rapports
              Premium, Premium et Signature afin de choisir
              le niveau d’analyse qui vous convient.
            </p>

            <div className="premium-comparison-actions">
              <Link
                href="/carte-du-ciel"
                className="premium-button premium-button-primary"
              >
                Comparer les trois rapports
                <span aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="#commande"
                className="premium-button premium-button-secondary"
              >
                Choisir Premium
              </Link>
            </div>
          </section>

          <p className="premium-disclaimer">
            L’astrologie est proposée comme un outil symbolique
            d’exploration personnelle. Elle ne remplace pas un
            avis médical, psychologique, juridique ou
            financier.
          </p>
        </main>
      </div>
    </AuthProvider>
  );
}
