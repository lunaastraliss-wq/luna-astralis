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
  "https://luna-astralis.app/carte-du-ciel/essentielle";

const REPORT_PRICE =
  "24,99 $ US";

const REPORT_PAGES =
  "17 pages";

const REPORT_PREVIEW_URL =
  "/reports/apercu-rapport-carte-du-ciel-essentielle.pdf";

const REPORT_COVER_URL =
  "/reports/couverture-carte-du-ciel-essentielle.png";

/*
|--------------------------------------------------------------------------
| Métadonnées SEO
|--------------------------------------------------------------------------
*/

export const metadata: Metadata = {
  title:
    "Rapport Carte du ciel Essentielle | Thème astral personnalisé",

  description:
    "Découvrez votre Soleil, votre Lune, votre Ascendant, vos planètes, vos éléments et vos modalités dans un rapport astrologique personnalisé de 17 pages.",

  alternates: {
    canonical:
      PAGE_URL,
  },

  openGraph: {
    title:
      "Rapport Carte du ciel Essentielle | Luna Astralis",

    description:
      "Une lecture claire et personnalisée des principales énergies de votre thème astral.",

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
          "Couverture du rapport Carte du ciel Essentielle",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Rapport Carte du ciel Essentielle | Luna Astralis",

    description:
      "Découvrez les fondations de votre thème astral dans un rapport PDF personnalisé de 17 pages.",

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
      "Votre Soleil",

    description:
      "Découvrez votre identité profonde, votre volonté, votre vitalité et la manière dont vous cherchez naturellement à rayonner.",
  },

  {
    icon:
      "☾",

    title:
      "Votre Lune",

    description:
      "Comprenez vos émotions, vos besoins affectifs, vos réactions instinctives et ce qui vous procure un sentiment de sécurité.",
  },

  {
    icon:
      "↑",

    title:
      "Votre Ascendant",

    description:
      "Explorez votre manière d’aborder la vie, votre tempérament visible et l’impression que vous donnez spontanément aux autres.",
  },

  {
    icon:
      "☿",

    title:
      "Vos planètes",

    description:
      "Découvrez les principales influences planétaires qui façonnent votre pensée, vos sentiments, vos désirs et votre manière d’agir.",
  },

  {
    icon:
      "△",

    title:
      "Vos éléments",

    description:
      "Analysez l’équilibre entre le Feu, la Terre, l’Air et l’Eau afin de mieux comprendre votre énergie dominante.",
  },

  {
    icon:
      "◇",

    title:
      "Vos modalités",

    description:
      "Comprenez votre façon de commencer, de poursuivre et d’adapter vos actions grâce aux modes Cardinal, Fixe et Mutable.",
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
      "Mieux vous comprendre",

    text:
      "Mettez des mots sur les principales facettes de votre personnalité et sur les contradictions que vous ressentez parfois.",
  },

  {
    icon:
      "☾",

    title:
      "Comprendre vos émotions",

    text:
      "Identifiez ce dont vous avez besoin pour vous sentir en sécurité, compris et émotionnellement équilibré.",
  },

  {
    icon:
      "☉",

    title:
      "Reconnaître vos forces",

    text:
      "Découvrez les qualités naturelles sur lesquelles vous pouvez vous appuyer dans votre vie personnelle et professionnelle.",
  },

  {
    icon:
      "△",

    title:
      "Observer votre équilibre",

    text:
      "Comprenez quelles énergies sont dominantes dans votre thème et lesquelles demandent davantage d’attention.",
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
      "Entrez votre prénom, votre date, votre heure et votre lieu de naissance dans le formulaire.",
  },

  {
    number:
      "02",

    title:
      "Votre thème est calculé",

    description:
      "Les positions de vos planètes, votre Ascendant, vos éléments et vos modalités sont calculés automatiquement.",
  },

  {
    number:
      "03",

    title:
      "Téléchargez votre rapport",

    description:
      "Après le paiement, votre rapport PDF personnalisé est généré et offert en téléchargement.",
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
      "Quelle est la différence avec la carte du ciel gratuite ?",

    answer:
      "La carte du ciel gratuite présente principalement votre roue astrologique et vos placements. Le rapport Essentielle ajoute une interprétation personnalisée de votre Soleil, de votre Lune, de votre Ascendant, de vos planètes, de vos éléments et de vos modalités.",
  },

  {
    question:
      "Quelles informations dois-je fournir ?",

    answer:
      "Vous devez fournir votre prénom, votre date de naissance, votre heure de naissance ainsi que votre ville et votre pays de naissance.",
  },

  {
    question:
      "Que se passe-t-il si je ne connais pas mon heure de naissance ?",

    answer:
      "Une heure précise est recommandée, car elle permet de calculer correctement votre Ascendant. Sans heure fiable, certaines parties du rapport pourraient être inexactes.",
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
      "Non. Il s’agit d’un paiement unique de 24,99 $ US. Aucun abonnement n’est associé à votre commande.",
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
    "Rapport Carte du ciel Essentielle",

  description:
    "Rapport astrologique personnalisé de 17 pages présentant le Soleil, la Lune, l’Ascendant, les planètes, les éléments et les modalités du thème natal.",

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
      "24.99",

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

export default function EssentiellePage() {
  return (
    <AuthProvider>
      <SiteHeader />

      <div className="essential-page">
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

        <main className="essential-main">
          {/*
          |--------------------------------------------------------------------------
          | Hero
          |--------------------------------------------------------------------------
          */}

          <section
            className="essential-hero"
            aria-labelledby="essential-title"
          >
            <div
              className="essential-hero-glow"
              aria-hidden="true"
            />

            <div
              className="essential-hero-stars"
              aria-hidden="true"
            />

            <div className="essential-hero-copy">
              <div className="essential-hero-badge">
                ✨ Rapport astrologique personnalisé
              </div>

              <p className="essential-hero-eyebrow">
                Votre thème natal • Vos énergies essentielles
              </p>

              <h1 id="essential-title">
                Découvrez les fondations de votre
                <span>
                  {" "}
                  carte du ciel
                </span>
              </h1>

              <p className="essential-hero-description">
                Explorez votre Soleil, votre Lune, votre
                Ascendant et les principales influences de
                votre thème astral dans un rapport clair,
                élégant et entièrement personnalisé.
              </p>

              <div className="essential-hero-actions">
                <Link
                  href="#commande"
                  className="essential-button essential-button-primary"
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
                  className="essential-button essential-button-secondary"
                >
                  Voir l’aperçu PDF
                </a>
              </div>

              <a
                href={REPORT_PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="essential-hero-preview-link"
              >
                📖 Consulter un véritable aperçu du rapport
              </a>

              <div className="essential-hero-trust">
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

              <div className="essential-hero-price">
                <div>
                  <span>
                    Rapport Essentielle
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

            <div className="essential-hero-visual">
              <div
                className="essential-cover-glow"
                aria-hidden="true"
              />

              <div className="essential-cover-frame">
                <Image
                  src={REPORT_COVER_URL}
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

              <div
                className="essential-hero-orbit essential-hero-orbit-one"
                aria-hidden="true"
              >
                <span>
                  ☉
                </span>
              </div>

              <div
                className="essential-hero-orbit essential-hero-orbit-two"
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

          <section className="essential-introduction">
            <div className="essential-section-heading">
              <span className="essential-section-label">
                Au-delà de votre signe
              </span>

              <h2>
                Vous êtes bien plus que votre signe solaire
              </h2>

              <p>
                Votre signe astrologique représente une partie
                importante de votre personnalité, mais il ne
                raconte pas toute votre histoire. Votre Lune,
                votre Ascendant, vos planètes et l’équilibre de
                vos énergies permettent d’obtenir une lecture
                beaucoup plus nuancée de votre nature.
              </p>
            </div>

            <div className="essential-introduction-grid">
              <article className="essential-introduction-card">
                <div className="essential-introduction-icon">
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
                  className="essential-text-link"
                >
                  Découvrir la carte gratuite
                  <span aria-hidden="true">
                    {" "}
                    →
                  </span>
                </Link>
              </article>

              <article className="essential-introduction-card essential-introduction-card-featured">
                <div className="essential-introduction-card-label">
                  Analyse personnalisée
                </div>

                <div className="essential-introduction-icon">
                  ✦
                </div>

                <span>
                  Votre thème natal
                </span>

                <h3>
                  Une personnalité complète
                </h3>

                <p>
                  Le rapport Essentielle réunit vos principaux
                  placements pour vous offrir une lecture plus
                  précise et plus personnelle.
                </p>

                <Link
                  href="#commande"
                  className="essential-text-link"
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
            className="essential-report-showcase"
          >
            <div className="essential-report-visual">
              <div className="essential-report-cover-wrapper">
                <Image
                  src={REPORT_COVER_URL}
                  alt="Aperçu de la couverture du rapport Essentielle"
                  width={566}
                  height={800}
                  className="essential-report-cover"
                />
              </div>

              <div
                className="essential-report-page essential-report-page-back"
                aria-hidden="true"
              >
                <span>
                  Luna Astralis
                </span>
              </div>

              <div
                className="essential-report-page essential-report-page-middle"
                aria-hidden="true"
              >
                <span>
                  Votre thème astral
                </span>
              </div>
            </div>

            <div className="essential-report-copy">
              <span className="essential-section-label">
                Votre rapport personnalisé
              </span>

              <h2>
                Une lecture accessible des principales
                énergies de votre thème
              </h2>

              <p>
                Le rapport Essentielle vous offre un premier
                portrait astrologique structuré, personnalisé
                et facile à comprendre. Il vous permet de
                découvrir les grandes fondations de votre
                personnalité sans vous perdre dans des notions
                trop complexes.
              </p>

              <div className="essential-report-statistics">
                <div>
                  <strong>
                    17
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

              <ul className="essential-check-list">
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

              <div className="essential-report-actions">
                <a
                  href={REPORT_PREVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="essential-button essential-button-primary"
                >
                  📖 Voir l’aperçu du rapport
                </a>

                <Link
                  href="#commande"
                  className="essential-button essential-button-secondary"
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

          <section className="essential-contents">
            <div className="essential-section-heading">
              <span className="essential-section-label">
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

            <div className="essential-feature-grid">
              {REPORT_FEATURES.map(
                (
                  feature,
                ) => (
                  <article
                    className="essential-feature-card"
                    key={feature.title}
                  >
                    <div className="essential-feature-icon">
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

            <div className="essential-section-action">
              <Link
                href="#commande"
                className="essential-button essential-button-primary"
              >
                Obtenir mon rapport Essentielle
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

          <section className="essential-benefits">
            <div className="essential-benefits-copy">
              <span className="essential-section-label">
                Une première exploration de soi
              </span>

              <h2>
                Comprenez ce qui vous anime naturellement
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
                className="essential-text-link"
              >
                Consulter l’aperçu réel
                <span aria-hidden="true">
                  {" "}
                  →
                </span>
              </a>
            </div>

            <div className="essential-benefit-grid">
              {BENEFIT_ITEMS.map(
                (
                  item,
                ) => (
                  <article
                    className="essential-benefit-card"
                    key={item.title}
                  >
                    <div className="essential-benefit-icon">
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

          <section className="essential-process">
            <div className="essential-section-heading">
              <span className="essential-section-label">
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

            <div className="essential-process-grid">
              {PROCESS_STEPS.map(
                (
                  step,
                ) => (
                  <article
                    className="essential-process-card"
                    key={step.number}
                  >
                    <span className="essential-process-number">
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

            <div className="essential-section-action">
              <Link
                href="#commande"
                className="essential-button essential-button-primary"
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
            className="essential-order"
          >
            <div
              className="essential-order-glow"
              aria-hidden="true"
            />

            <div className="essential-section-heading">
              <span className="essential-section-label">
                Votre rapport personnalisé
              </span>

              <h2>
                Créez votre rapport Carte du ciel Essentielle
              </h2>

              <p>
                Entrez vos informations de naissance afin de
                calculer votre thème natal et de préparer votre
                rapport astrologique personnalisé.
              </p>
            </div>

            <div className="essential-order-layout">
              <div className="essential-order-form">
                <ReportCheckoutForm
                  reportType="essential"
                />
              </div>

              <aside className="essential-order-summary">
                <span className="essential-order-summary-label">
                  Votre commande
                </span>

                <h3>
                  Rapport Essentielle
                </h3>

                <div className="essential-order-price">
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
                    17 pages d’analyse
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
                    Téléchargement après le paiement
                  </li>
                </ul>

                <div className="essential-order-security">
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
                  className="essential-order-preview-link"
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

          <section className="essential-faq">
            <div className="essential-section-heading">
              <span className="essential-section-label">
                Questions fréquentes
              </span>

              <h2>
                Tout savoir avant de commencer
              </h2>
            </div>

            <div className="essential-faq-list">
              {FAQ_ITEMS.map(
                (
                  item,
                ) => (
                  <details
                    className="essential-faq-item"
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

          <section className="essential-comparison">
            <div
              className="essential-comparison-glow"
              aria-hidden="true"
            />

            <span className="essential-section-label">
              Besoin d’une analyse plus complète ?
            </span>

            <h2>
              Comparez les trois rapports Carte du ciel
            </h2>

            <p>
              Découvrez les différences entre les rapports
              Essentielle, Premium et Signature afin de choisir
              le niveau d’analyse qui vous convient.
            </p>

            <div className="essential-comparison-actions">
              <Link
                href="/carte-du-ciel"
                className="essential-button essential-button-primary"
              >
                Comparer les trois rapports
                <span aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="#commande"
                className="essential-button essential-button-secondary"
              >
                Choisir Essentielle
              </Link>
            </div>
          </section>

          <p className="essential-disclaimer">
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
