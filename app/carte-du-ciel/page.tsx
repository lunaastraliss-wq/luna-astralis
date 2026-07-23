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
  "https://luna-astralis.app/carte-du-ciel/signature";

const REPORT_PRICE =
  "79,99 $ US";

const REPORT_PAGES =
  "58 pages";

const REPORT_PREVIEW_URL =
  "/reports/apercu-rapport-carte-du-ciel-signature.pdf";

const REPORT_COVER_URL =
  "/reports/couverture-carte-du-ciel-signature.png";

/*
|--------------------------------------------------------------------------
| Métadonnées SEO
|--------------------------------------------------------------------------
*/

export const metadata: Metadata = {
  title:
    "Rapport Carte du ciel Signature | Thème astral personnalisé de 58 pages",

  description:
    "Découvrez votre thème astral avec le rapport Signature Luna Astralis : 58 pages personnalisées consacrées à votre personnalité, vos planètes, vos maisons, vos aspects, vos relations, votre carrière, votre évolution et votre synthèse astrologique.",

  alternates: {
    canonical:
      PAGE_URL,
  },

  openGraph: {
    title:
      "Rapport Carte du ciel Signature | Luna Astralis",

    description:
      "L’expérience astrologique la plus complète de Luna Astralis, dans un rapport personnalisé de 58 pages.",

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
          "Couverture du rapport Carte du ciel Signature",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Rapport Carte du ciel Signature | Luna Astralis",

    description:
      "Découvrez une lecture complète, structurée et profondément personnelle de votre thème natal dans un rapport PDF de 58 pages.",

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
      "Découvrez les trois piliers de votre personnalité et la manière dont ils façonnent votre identité, vos émotions et votre présence.",
  },

  {
    icon:
      "☿",

    title:
      "Vos planètes",

    description:
      "Explorez les principales fonctions astrologiques qui influencent votre pensée, vos désirs, vos relations et votre manière d’agir.",
  },

  {
    icon:
      "△",

    title:
      "Éléments et modalités",

    description:
      "Comprenez l’équilibre de vos énergies, votre tempérament et votre manière naturelle d’initier, de stabiliser ou d’adapter vos actions.",
  },

  {
    icon:
      "⌂",

    title:
      "Vos maisons astrologiques",

    description:
      "Découvrez les domaines de vie dans lesquels vos différentes énergies se manifestent avec le plus d’intensité.",
  },

  {
    icon:
      "◇",

    title:
      "Vos aspects planétaires",

    description:
      "Analysez les accords, les tensions et les interactions qui donnent à votre thème sa dynamique unique.",
  },

  {
    icon:
      "★",

    title:
      "Vos dominantes",

    description:
      "Identifiez les planètes, les signes, les éléments et les tendances qui occupent une place centrale dans votre fonctionnement.",
  },

  {
    icon:
      "⚖",

    title:
      "Forces et défis",

    description:
      "Mettez en lumière vos ressources naturelles, vos zones de tension et les défis qui soutiennent votre évolution.",
  },

  {
    icon:
      "♡",

    title:
      "Relations et vie affective",

    description:
      "Comprenez vos besoins relationnels, votre manière d’aimer, vos attentes et les dynamiques qui influencent vos liens.",
  },

  {
    icon:
      "↗",

    title:
      "Carrière et potentiel",

    description:
      "Découvrez vos talents, vos motivations, votre manière de contribuer et les environnements qui favorisent votre accomplissement.",
  },

  {
    icon:
      "☊",

    title:
      "Évolution personnelle",

    description:
      "Explorez les grands axes de croissance de votre thème et les mouvements intérieurs qui vous invitent à évoluer.",
  },

  {
    icon:
      "✧",

    title:
      "Synthèse astrologique",

    description:
      "Reliez toutes les dimensions de votre thème dans une lecture finale cohérente, personnelle et profondément révélatrice.",
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
      "Relier toutes vos facettes",

    text:
      "Comprenez comment vos différentes énergies se complètent, s’opposent et créent la richesse de votre personnalité.",
  },

  {
    icon:
      "⌂",

    title:
      "Explorer tous vos domaines de vie",

    text:
      "Observez comment votre thème s’exprime dans vos relations, votre carrière, votre foyer, vos ambitions et votre évolution.",
  },

  {
    icon:
      "◇",

    title:
      "Comprendre vos dynamiques profondes",

    text:
      "Décodez les liens entre vos planètes, vos maisons et vos aspects afin de mieux comprendre vos réactions et vos choix.",
  },

  {
    icon:
      "☊",

    title:
      "Identifier vos axes d’évolution",

    text:
      "Repérez les défis, les ressources et les mouvements de croissance qui peuvent vous aider à avancer avec plus de conscience.",
  },

  {
    icon:
      "♡",

    title:
      "Éclairer vos relations",

    text:
      "Approfondissez votre manière d’aimer, vos besoins affectifs, vos attentes et les dynamiques qui influencent vos liens.",
  },

  {
    icon:
      "✧",

    title:
      "Recevoir une véritable synthèse",

    text:
      "Terminez votre lecture avec une vision d’ensemble qui relie les principales dimensions de votre thème natal.",
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
      "Votre thème complet est analysé",

    description:
      "Vos planètes, votre Ascendant, vos maisons, vos aspects, vos dominantes et vos axes d’évolution sont calculés.",
  },

  {
    number:
      "03",

    title:
      "Téléchargez votre rapport Signature",

    description:
      "Après le paiement, votre rapport personnalisé de 58 pages est généré et offert en téléchargement.",
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
      "Quelle est la différence entre Premium et Signature ?",

    answer:
      "Le rapport Premium offre une analyse approfondie de votre thème. Le rapport Signature ajoute une lecture encore plus complète avec des sections d’évolution personnelle, une mise en relation plus poussée des différentes énergies et une synthèse astrologique finale.",
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
      "Oui. Le rapport est généré à partir de vos propres positions planétaires, de vos maisons, de vos aspects, de vos dominantes et de votre véritable carte du ciel.",
  },

  {
    question:
      "Comment vais-je recevoir mon rapport ?",

    answer:
      "Votre rapport Signature est généré au format PDF après le paiement. Vous pourrez le télécharger directement depuis la page de confirmation.",
  },

  {
    question:
      "Le paiement est-il récurrent ?",

    answer:
      "Non. Il s’agit d’un paiement unique de 79,99 $ US. Aucun abonnement n’est associé à votre commande.",
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
    "Rapport Carte du ciel Signature",

  description:
    "Rapport astrologique personnalisé de 58 pages comprenant les planètes, les maisons, les aspects, les dominantes, les relations, la carrière, les forces et les défis.",

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
      "79.99",

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

export default function SignaturePage() {
  return (
    <AuthProvider>
      <SiteHeader />

      <div className="signature-page">
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

        <main className="signature-main">
          {/*
          |--------------------------------------------------------------------------
          | Hero
          |--------------------------------------------------------------------------
          */}

          <section
            className="signature-hero"
            aria-labelledby="signature-title"
          >
            <div
              className="signature-hero-glow"
              aria-hidden="true"
            />

            <div
              className="signature-hero-stars"
              aria-hidden="true"
            />

            <div className="signature-hero-copy">
              <div className="signature-hero-badge">
                ✨ Rapport astrologique personnalisé
              </div>

              <p className="signature-hero-eyebrow">
                Votre thème natal • Une analyse approfondie
              </p>

              <h1 id="signature-title">
                Explorez en profondeur votre
                <span>
                  {" "}
                  carte du ciel
                </span>
              </h1>

              <p className="signature-hero-description">
                Explorez votre personnalité, vos maisons, vos
                aspects, vos dominantes, vos relations, vos
                forces et votre potentiel dans un rapport de
                58 pages entièrement personnalisé.
              </p>

              <div className="signature-hero-actions">
                <Link
                  href="#commande"
                  className="signature-button signature-button-primary"
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
                  className="signature-button signature-button-secondary"
                >
                  Voir l’aperçu PDF
                </a>
              </div>

              <a
                href={REPORT_PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="signature-hero-preview-link"
              >
                📖 Consulter un véritable aperçu du rapport
              </a>

              <div className="signature-hero-trust">
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

              <div className="signature-hero-price">
                <div>
                  <span>
                    Rapport Signature
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

            <div className="signature-hero-visual">
              <div
                className="signature-cover-glow"
                aria-hidden="true"
              />

              <div className="signature-cover-frame">
                <Image
                  src={REPORT_COVER_URL}
                  alt="Couverture du rapport Carte du ciel Signature"
                  width={707}
                  height={1000}
                  priority
                  className="signature-cover-image"
                />
              </div>

              <div className="signature-cover-badge">
                <span aria-hidden="true">
                  ✦
                </span>

                Créé pour vous
              </div>

              <div
                className="signature-hero-orbit signature-hero-orbit-one"
                aria-hidden="true"
              >
                <span>
                  ☉
                </span>
              </div>

              <div
                className="signature-hero-orbit signature-hero-orbit-two"
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

          <section className="signature-introduction">
            <div className="signature-section-heading">
              <span className="signature-section-label">
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

            <div className="signature-introduction-grid">
              <article className="signature-introduction-card">
                <div className="signature-introduction-icon">
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
                  className="signature-text-link"
                >
                  Découvrir la carte gratuite
                  <span aria-hidden="true">
                    {" "}
                    →
                  </span>
                </Link>
              </article>

              <article className="signature-introduction-card signature-introduction-card-featured">
                <div className="signature-introduction-card-label">
                  Analyse personnalisée
                </div>

                <div className="signature-introduction-icon">
                  ✦
                </div>

                <span>
                  Votre thème natal
                </span>

                <h3>
                  Une personnalité complète
                </h3>

                <p>
                  Le rapport Signature réunit vos planètes, vos
                  maisons, vos aspects et vos dominantes pour
                  vous offrir une lecture complète, précise et
                  profondément personnelle.
                </p>

                <Link
                  href="#commande"
                  className="signature-text-link"
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
            className="signature-report-showcase"
          >
            <div className="signature-report-visual">
              <div className="signature-report-cover-wrapper">
                <Image
                  src={REPORT_COVER_URL}
                  alt="Aperçu de la couverture du rapport Signature"
                  width={566}
                  height={800}
                  className="signature-report-cover"
                />
              </div>

              <div
                className="signature-report-page signature-report-page-back"
                aria-hidden="true"
              >
                <span>
                  Luna Astralis
                </span>
              </div>

              <div
                className="signature-report-page signature-report-page-middle"
                aria-hidden="true"
              >
                <span>
                  Votre thème astral
                </span>
              </div>
            </div>

            <div className="signature-report-copy">
              <span className="signature-section-label">
                Votre rapport personnalisé
              </span>

              <h2>
                Une lecture d’exception des grandes
                dynamiques de votre thème
              </h2>

              <p>
                Le rapport Signature vous offre un portrait
                astrologique structuré, détaillé et facile à
                comprendre. Il relie vos placements, vos
                maisons, vos aspects et vos dominantes afin de
                révéler les grandes dynamiques de votre thème.
              </p>

              <div className="signature-report-statistics">
                <div>
                  <strong>
                    58
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

              <ul className="signature-check-list">
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

              <div className="signature-report-actions">
                <a
                  href={REPORT_PREVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="signature-button signature-button-primary"
                >
                  📖 Voir l’aperçu du rapport
                </a>

                <Link
                  href="#commande"
                  className="signature-button signature-button-secondary"
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

          <section className="signature-contents">
            <div className="signature-section-heading">
              <span className="signature-section-label">
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

            <div className="signature-feature-grid">
              {REPORT_FEATURES.map(
                (
                  feature,
                ) => (
                  <article
                    className="signature-feature-card"
                    key={feature.title}
                  >
                    <div className="signature-feature-icon">
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

            <div className="signature-section-action">
              <Link
                href="#commande"
                className="signature-button signature-button-primary"
              >
                Obtenir mon rapport Signature
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

          <section className="signature-benefits">
            <div className="signature-benefits-copy">
              <span className="signature-section-label">
                Une lecture d’exception de soi
              </span>

              <h2>
                Reliez les différentes forces qui façonnent votre parcours
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
                className="signature-text-link"
              >
                Consulter l’aperçu réel
                <span aria-hidden="true">
                  {" "}
                  →
                </span>
              </a>
            </div>

            <div className="signature-benefit-grid">
              {BENEFIT_ITEMS.map(
                (
                  item,
                ) => (
                  <article
                    className="signature-benefit-card"
                    key={item.title}
                  >
                    <div className="signature-benefit-icon">
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

          <section className="signature-process">
            <div className="signature-section-heading">
              <span className="signature-section-label">
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

            <div className="signature-process-grid">
              {PROCESS_STEPS.map(
                (
                  step,
                ) => (
                  <article
                    className="signature-process-card"
                    key={step.number}
                  >
                    <span className="signature-process-number">
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

            <div className="signature-section-action">
              <Link
                href="#commande"
                className="signature-button signature-button-primary"
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
            className="signature-order"
          >
            <div
              className="signature-order-glow"
              aria-hidden="true"
            />

            <div className="signature-section-heading">
              <span className="signature-section-label">
                Votre rapport personnalisé
              </span>

              <h2>
                Créez votre rapport Carte du ciel Signature
              </h2>

              <p>
                Entrez vos informations de naissance afin de
                calculer votre thème natal et de préparer votre
                rapport astrologique personnalisé.
              </p>
            </div>

            <div className="signature-order-layout">
              <div className="signature-order-form">
                <ReportCheckoutForm
                  reportType="signature"
                />
              </div>

              <aside className="signature-order-summary">
                <span className="signature-order-summary-label">
                  Votre commande
                </span>

                <h3>
                  Rapport Signature
                </h3>

                <div className="signature-order-price">
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
                    58 pages d’analyse
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

                <div className="signature-order-security">
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
                  className="signature-order-preview-link"
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

          <section className="signature-faq">
            <div className="signature-section-heading">
              <span className="signature-section-label">
                Questions fréquentes
              </span>

              <h2>
                Tout savoir avant de commencer
              </h2>
            </div>

            <div className="signature-faq-list">
              {FAQ_ITEMS.map(
                (
                  item,
                ) => (
                  <details
                    className="signature-faq-item"
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

          <section className="signature-comparison">
            <div
              className="signature-comparison-glow"
              aria-hidden="true"
            />

            <span className="signature-section-label">
              Vous souhaitez comparer les trois niveaux ?
            </span>

            <h2>
              Comparez les trois rapports Carte du ciel
            </h2>

            <p>
              Découvrez les différences entre les rapports
              Signature, Signature et Signature afin de choisir
              le niveau d’analyse qui vous convient.
            </p>

            <div className="signature-comparison-actions">
              <Link
                href="/carte-du-ciel"
                className="signature-button signature-button-primary"
              >
                Comparer les trois rapports
                <span aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="#commande"
                className="signature-button signature-button-secondary"
              >
                Choisir Signature
              </Link>
            </div>
          </section>

          <p className="signature-disclaimer">
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
