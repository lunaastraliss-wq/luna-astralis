import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import AuthProvider from "@/components/AuthProvider";
import CompatibilityPremiumForm from "@/components/CompatibilityPremiumForm";
import SiteHeader from "@/components/SiteHeader";

import "./page.css";

/*
|--------------------------------------------------------------------------
| Informations du rapport
|--------------------------------------------------------------------------
*/

const PAGE_URL =
  "https://luna-astralis.app/compatibilite/premium";

const REPORT_PRICE =
  "49,99 $ US";

const REPORT_PAGES =
  "Environ 50 pages";

const REPORT_PREVIEW_URL =
  "/reports/apercu-rapport-compatibilite-premium.pdf";

const REPORT_COVER_URL =
  "/reports/couverture-compatibilite-premium.png";

/*
|--------------------------------------------------------------------------
| Métadonnées SEO
|--------------------------------------------------------------------------
*/

export const metadata: Metadata = {
  title:
    "Compatibilité amoureuse Premium et synastrie | Luna Astralis",

  description:
    "Comparez deux thèmes astraux complets et recevez un rapport PDF personnalisé sur votre compatibilité émotionnelle, amoureuse, mentale et relationnelle.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Compatibilité Premium et rapport de synastrie | Luna Astralis",

    description:
      "Découvrez les forces, les défis et le potentiel de votre relation grâce à l’analyse personnalisée de deux thèmes astraux complets.",

    url: PAGE_URL,
    siteName: "Luna Astralis",
    type: "website",
    locale: "fr_CA",

    images: [
      {
        url: REPORT_COVER_URL,
        width: 1414,
        height: 2000,
        alt: "Couverture du rapport Compatibilité Premium",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Compatibilité Premium et synastrie | Luna Astralis",

    description:
      "Une analyse approfondie de la rencontre entre deux thèmes astraux.",

    images: [REPORT_COVER_URL],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/*
|--------------------------------------------------------------------------
| Contenu du rapport
|--------------------------------------------------------------------------
*/

const REPORT_FEATURES = [
  {
    icon: "✦",
    title: "Compatibilité globale",
    description:
      "Découvrez votre indice général ainsi que les grandes tendances qui structurent votre relation.",
  },
  {
    icon: "☾",
    title: "Lien émotionnel",
    description:
      "Comprenez vos besoins affectifs, vos sensibilités et votre façon de créer un climat de sécurité.",
  },
  {
    icon: "☿",
    title: "Communication",
    description:
      "Analysez votre manière d’échanger, de vous comprendre et de traverser les désaccords.",
  },
  {
    icon: "♀",
    title: "Affinité amoureuse",
    description:
      "Explorez vos langages amoureux, vos valeurs, vos attentes et votre manière de donner de l’affection.",
  },
  {
    icon: "♂",
    title: "Attirance et passion",
    description:
      "Découvrez votre alchimie, votre rythme de désir et les dynamiques qui nourrissent l’attirance.",
  },
  {
    icon: "♄",
    title: "Stabilité et durée",
    description:
      "Identifiez les forces qui soutiennent le lien et les défis pouvant influencer son évolution.",
  },
  {
    icon: "△",
    title: "Aspects de synastrie",
    description:
      "Comprenez les harmonies, les tensions et les complémentarités entre les planètes de vos deux thèmes.",
  },
  {
    icon: "☉",
    title: "Vos deux profils",
    description:
      "Découvrez les principales énergies relationnelles que chaque personne apporte naturellement au lien.",
  },
  {
    icon: "⚖",
    title: "Forces et défis",
    description:
      "Repérez ce qui vous rapproche, ce qui demande davantage d’ajustement et les points de vigilance.",
  },
  {
    icon: "♃",
    title: "Potentiel d’évolution",
    description:
      "Explorez les apprentissages, les possibilités de croissance et les mouvements de transformation du couple.",
  },
  {
    icon: "♡",
    title: "Conseils relationnels",
    description:
      "Recevez des pistes concrètes pour mieux accueillir vos différences et soutenir vos forces communes.",
  },
];

const BENEFIT_ITEMS = [
  {
    icon: "☾",
    title: "Comprendre vos besoins affectifs",
    text:
      "Observez comment chacun recherche la sécurité, l’écoute et la proximité émotionnelle.",
  },
  {
    icon: "☿",
    title: "Améliorer votre communication",
    text:
      "Identifiez vos façons naturelles d’échanger ainsi que les malentendus qui peuvent se répéter.",
  },
  {
    icon: "♀",
    title: "Décoder votre façon d’aimer",
    text:
      "Comprenez vos attentes, vos gestes d’affection et ce qui vous fait réellement sentir aimé.",
  },
  {
    icon: "♂",
    title: "Explorer votre attraction",
    text:
      "Mettez en lumière les dynamiques de désir, d’action, de passion et de rapprochement.",
  },
  {
    icon: "♄",
    title: "Évaluer votre solidité",
    text:
      "Repérez les facteurs d’engagement, de continuité et les défis qui demandent de la maturité.",
  },
  {
    icon: "✧",
    title: "Relier toutes les dimensions",
    text:
      "Recevez une synthèse claire qui rassemble les principales forces et tensions de votre relation.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Indiquez vos naissances",
    description:
      "Entrez le prénom, la date, l’heure, la ville et le pays de naissance des deux personnes.",
  },
  {
    number: "02",
    title: "Vos deux thèmes sont comparés",
    description:
      "Les positions planétaires, les maisons et les aspects de synastrie sont calculés et analysés.",
  },
  {
    number: "03",
    title: "Téléchargez votre rapport",
    description:
      "Après le paiement, votre rapport personnalisé est généré et offert en téléchargement.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Quelle est la différence avec la compatibilité gratuite ?",
    answer:
      "La compatibilité gratuite compare deux signes astrologiques. Le rapport Premium utilise la date, l’heure et le lieu de naissance des deux personnes afin de comparer leurs thèmes astraux complets.",
  },
  {
    question:
      "Quelles informations dois-je fournir ?",
    answer:
      "Vous devez fournir le prénom, la date de naissance, l’heure de naissance, la ville et le pays de naissance des deux personnes.",
  },
  {
    question:
      "Que contient le rapport ?",
    answer:
      "Le rapport présente les deux profils astrologiques, la compatibilité globale, le lien émotionnel, la communication, l’amour, l’attirance, la stabilité, les aspects de synastrie, les forces, les défis et une synthèse personnalisée.",
  },
  {
    question:
      "Que faire si je ne connais pas une heure de naissance ?",
    answer:
      "Certaines positions peuvent être calculées sans heure précise, mais l’Ascendant et les maisons astrologiques risquent d’être inexacts ou indisponibles.",
  },
  {
    question:
      "Le score détermine-t-il si une relation va fonctionner ?",
    answer:
      "Non. Les scores présentent de grandes tendances astrologiques. Ils ne constituent pas un verdict et ne remplacent pas les choix, l’expérience et le libre arbitre des deux personnes.",
  },
  {
    question:
      "Comment vais-je recevoir mon rapport ?",
    answer:
      "Votre rapport est généré au format PDF après le paiement. Vous devez le télécharger et le conserver immédiatement, puisqu’aucun compte client n’est créé et qu’aucune copie récupérable n’est conservée.",
  },
  {
    question:
      "Mes informations sont-elles conservées ?",
    answer:
      "Non. Vos informations de naissance servent uniquement à calculer et générer votre rapport personnalisé. Elles ne sont pas conservées après la génération du PDF.",
  },
];

/*
|--------------------------------------------------------------------------
| Données structurées
|--------------------------------------------------------------------------
*/

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",

  name:
    "Rapport de compatibilité astrologique Premium",

  description:
    "Rapport PDF personnalisé comparant deux thèmes astraux complets et leurs principales dynamiques relationnelles.",

  image:
    `https://luna-astralis.app${REPORT_COVER_URL}`,

  brand: {
    "@type": "Brand",
    name: "Luna Astralis",
  },

  url: PAGE_URL,

  offers: {
    "@type": "Offer",
    price: "49.99",
    priceCurrency: "USD",
    availability:
      "https://schema.org/InStock",
    url: PAGE_URL,
  },
};

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default function CompatibilityPremiumPage() {
  return (
    <AuthProvider>
      <SiteHeader />

      <div className="compat-premium-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(jsonLd).replace(
                /</g,
                "\\u003c",
              ),
          }}
        />

        <main className="compat-premium-main">
          <section
            className="compat-premium-hero"
            aria-labelledby="compat-premium-title"
          >
            <div
              className="compat-premium-hero-glow"
              aria-hidden="true"
            />

            <div
              className="compat-premium-hero-stars"
              aria-hidden="true"
            />

            <div className="compat-premium-hero-copy">
              <div className="compat-premium-hero-badge">
                ✨ Rapport astrologique personnalisé
              </div>

              <p className="compat-premium-hero-eyebrow">
                Deux thèmes natals • Une rencontre unique
              </p>

              <h1 id="compat-premium-title">
                Découvrez en profondeur votre
                <span>
                  {" "}
                  compatibilité amoureuse
                </span>
              </h1>

              <p className="compat-premium-hero-description">
                Explorez vos affinités naturelles, votre
                communication, votre lien émotionnel, votre
                attirance, vos défis et le potentiel d’évolution
                de votre relation.
              </p>

              <div className="compat-premium-hero-actions">
                <Link
                  href="#commande"
                  className="compat-premium-button compat-premium-button-primary"
                >
                  Créer notre rapport
                  <span aria-hidden="true">
                    ♡
                  </span>
                </Link>

                <a
                  href={REPORT_PREVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="compat-premium-button compat-premium-button-secondary"
                >
                  Voir l’aperçu PDF
                </a>
              </div>

              <a
                href={REPORT_PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="compat-premium-hero-preview-link"
              >
                📖 Consulter un véritable aperçu du rapport
              </a>

              <div className="compat-premium-hero-trust">
                <span>✓ Deux thèmes astraux</span>
                <span>✓ {REPORT_PAGES}</span>
                <span>✓ Téléchargement après paiement</span>
              </div>

              <div className="compat-premium-hero-price">
                <div>
                  <span>Compatibilité Premium</span>
                  <small>Paiement unique</small>
                </div>

                <strong>{REPORT_PRICE}</strong>
              </div>
            </div>

            <div className="compat-premium-hero-visual">
              <div
                className="compat-premium-cover-glow"
                aria-hidden="true"
              />

              <div className="compat-premium-cover-frame">
                <Image
                  src={REPORT_COVER_URL}
                  alt="Couverture du rapport Compatibilité Premium"
                  width={707}
                  height={1000}
                  priority
                  className="compat-premium-cover-image"
                />
              </div>

              <div className="compat-premium-cover-badge">
                <span aria-hidden="true">♡</span>
                Créé pour votre relation
              </div>

              <div
                className="compat-premium-hero-orbit compat-premium-hero-orbit-one"
                aria-hidden="true"
              >
                <span>☾</span>
              </div>

              <div
                className="compat-premium-hero-orbit compat-premium-hero-orbit-two"
                aria-hidden="true"
              >
                <span>♀</span>
              </div>
            </div>
          </section>

          <section className="compat-premium-introduction">
            <div className="compat-premium-section-heading">
              <span className="compat-premium-section-label">
                Au-delà des signes
              </span>

              <h2>
                Une relation est bien plus que deux signes
                astrologiques
              </h2>

              <p>
                La synastrie compare deux thèmes natals complets.
                Elle révèle la manière dont vos émotions, vos
                pensées, vos désirs et vos besoins relationnels
                se rencontrent.
              </p>
            </div>

            <div className="compat-premium-introduction-grid">
              <article className="compat-premium-introduction-card">
                <div className="compat-premium-introduction-icon">
                  ♡
                </div>

                <span>Compatibilité gratuite</span>

                <h3>Une première impression</h3>

                <p>
                  Une lecture simple fondée sur vos deux signes
                  solaires, avec un score général et une courte
                  interprétation.
                </p>

                <Link
                  href="/compatibilite"
                  className="compat-premium-text-link"
                >
                  Faire le test gratuit
                  <span aria-hidden="true"> →</span>
                </Link>
              </article>

              <article className="compat-premium-introduction-card compat-premium-introduction-card-featured">
                <div className="compat-premium-introduction-card-label">
                  Analyse approfondie
                </div>

                <div className="compat-premium-introduction-icon">
                  ✦
                </div>

                <span>Synastrie Premium</span>

                <h3>Une relation complète</h3>

                <p>
                  Le rapport Premium compare vos deux thèmes,
                  vos planètes, vos maisons et vos aspects pour
                  offrir une lecture riche, nuancée et réellement
                  personnalisée.
                </p>

                <Link
                  href="#commande"
                  className="compat-premium-text-link"
                >
                  Commencer notre analyse
                  <span aria-hidden="true"> →</span>
                </Link>
              </article>
            </div>
          </section>

          <section
            id="apercu"
            className="compat-premium-report-showcase"
          >
            <div className="compat-premium-report-visual">
              <div className="compat-premium-report-cover-wrapper">
                <Image
                  src={REPORT_COVER_URL}
                  alt="Aperçu de la couverture du rapport Compatibilité Premium"
                  width={566}
                  height={800}
                  className="compat-premium-report-cover"
                />
              </div>

              <div
                className="compat-premium-report-page compat-premium-report-page-back"
                aria-hidden="true"
              >
                <span>Luna Astralis</span>
              </div>

              <div
                className="compat-premium-report-page compat-premium-report-page-middle"
                aria-hidden="true"
              >
                <span>Votre synastrie personnalisée</span>
              </div>
            </div>

            <div className="compat-premium-report-copy">
              <span className="compat-premium-section-label">
                Votre rapport personnalisé
              </span>

              <h2>
                Bien plus qu’un simple pourcentage
              </h2>

              <p>
                Votre rapport explique le fonctionnement profond
                de votre relation. Il relie les deux profils,
                les scores et les interactions planétaires afin
                de présenter une vision complète de votre lien.
              </p>

              <div className="compat-premium-report-statistics">
                <div>
                  <strong>2</strong>
                  <span>thèmes astraux</span>
                </div>

                <div>
                  <strong>6</strong>
                  <span>dimensions principales</span>
                </div>

                <div>
                  <strong>50</strong>
                  <span>pages environ</span>
                </div>
              </div>

              <ul className="compat-premium-check-list">
                <li>Vos deux profils relationnels</li>
                <li>Votre indice général de compatibilité</li>
                <li>Vos interactions planétaires principales</li>
                <li>Vos forces naturelles et vos défis</li>
                <li>Une synthèse et des conseils personnalisés</li>
              </ul>

              <div className="compat-premium-report-actions">
                <a
                  href={REPORT_PREVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="compat-premium-button compat-premium-button-primary"
                >
                  📖 Voir l’aperçu du rapport
                </a>

                <Link
                  href="#commande"
                  className="compat-premium-button compat-premium-button-secondary"
                >
                  Créer notre rapport
                </Link>
              </div>
            </div>
          </section>

          <section className="compat-premium-contents">
            <div className="compat-premium-section-heading">
              <span className="compat-premium-section-label">
                Dans votre rapport
              </span>

              <h2>
                Tout ce que votre synastrie vous révèle
              </h2>

              <p>
                Chaque section éclaire une dimension précise de
                votre relation et aide à comprendre ce qui vous
                rapproche ou demande davantage d’ajustement.
              </p>
            </div>

            <div className="compat-premium-feature-grid">
              {REPORT_FEATURES.map((feature) => (
                <article
                  className="compat-premium-feature-card"
                  key={feature.title}
                >
                  <div className="compat-premium-feature-icon">
                    {feature.icon}
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>

            <div className="compat-premium-section-action">
              <Link
                href="#commande"
                className="compat-premium-button compat-premium-button-primary"
              >
                Obtenir notre rapport Premium
                <span aria-hidden="true">♡</span>
              </Link>
            </div>
          </section>

          <section className="compat-premium-benefits">
            <div className="compat-premium-benefits-copy">
              <span className="compat-premium-section-label">
                Une lecture profonde du lien
              </span>

              <h2>
                Comprenez ce qui vous rapproche, vous stimule
                ou vous déstabilise
              </h2>

              <p>
                La synastrie ne décide pas de l’avenir d’une
                relation. Elle offre un langage symbolique pour
                mieux comprendre vos besoins, vos réactions et
                vos différences.
              </p>

              <a
                href={REPORT_PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="compat-premium-text-link"
              >
                Consulter l’aperçu réel
                <span aria-hidden="true"> →</span>
              </a>
            </div>

            <div className="compat-premium-benefit-grid">
              {BENEFIT_ITEMS.map((item) => (
                <article
                  className="compat-premium-benefit-card"
                  key={item.title}
                >
                  <div className="compat-premium-benefit-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="compat-premium-process">
            <div className="compat-premium-section-heading">
              <span className="compat-premium-section-label">
                Simple et immédiat
              </span>

              <h2>Comment obtenir votre rapport ?</h2>

              <p>
                Quelques minutes suffisent pour transmettre vos
                informations et lancer la création de votre
                analyse personnalisée.
              </p>
            </div>

            <div className="compat-premium-process-grid">
              {PROCESS_STEPS.map((step) => (
                <article
                  className="compat-premium-process-card"
                  key={step.number}
                >
                  <span className="compat-premium-process-number">
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="commande"
            className="compat-premium-order"
          >
            <div
              className="compat-premium-order-glow"
              aria-hidden="true"
            />

            <div className="compat-premium-section-heading">
              <span className="compat-premium-section-label">
                Votre rapport personnalisé
              </span>

              <h2>
                Créez votre rapport Compatibilité Premium
              </h2>

              <p>
                Entrez les informations de naissance des deux
                personnes afin de calculer vos thèmes et de
                préparer votre analyse relationnelle.
              </p>
            </div>

            <div className="compat-premium-order-layout">
              <div className="compat-premium-order-form">
                <CompatibilityPremiumForm />
              </div>

              <aside className="compat-premium-order-summary">
                <span className="compat-premium-order-summary-label">
                  Votre commande
                </span>

                <h3>Compatibilité Premium</h3>

                <div className="compat-premium-order-price">
                  <strong>{REPORT_PRICE}</strong>
                  <span>Paiement unique</span>
                </div>

                <ul>
                  <li>Rapport PDF personnalisé</li>
                  <li>Deux thèmes astraux complets</li>
                  <li>Environ 50 pages</li>
                  <li>Scores relationnels détaillés</li>
                  <li>Aspects de synastrie</li>
                  <li>Forces, défis et conseils</li>
                  <li>Téléchargement après le paiement</li>
                </ul>

                <div className="compat-premium-order-security">
                  <span aria-hidden="true">🔒</span>

                  <p>
                    Paiement sécurisé
                    <small>Aucun abonnement</small>
                  </p>
                </div>

                <div className="compat-premium-order-download">
                  <span aria-hidden="true">⬇</span>

                  <p>
                    Téléchargez et conservez votre PDF
                    <small>
                      Aucun compte client n’est créé et le
                      rapport ne pourra pas être récupéré plus
                      tard.
                    </small>
                  </p>
                </div>

                <div className="compat-premium-order-privacy">
                  <span aria-hidden="true">✓</span>

                  <p>
                    Vos données ne sont pas conservées
                    <small>
                      Elles servent uniquement à générer votre
                      rapport personnalisé.
                    </small>
                  </p>
                </div>

                <a
                  href={REPORT_PREVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="compat-premium-order-preview-link"
                >
                  Voir l’aperçu avant de commander
                  <span aria-hidden="true"> →</span>
                </a>
              </aside>
            </div>
          </section>

          <section className="compat-premium-faq">
            <div className="compat-premium-section-heading">
              <span className="compat-premium-section-label">
                Questions fréquentes
              </span>

              <h2>Tout savoir avant de commencer</h2>
            </div>

            <div className="compat-premium-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="compat-premium-faq-item"
                  key={item.question}
                >
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="compat-premium-final">
            <div
              className="compat-premium-final-glow"
              aria-hidden="true"
            />

            <span className="compat-premium-section-label">
              Une première découverte gratuite
            </span>

            <h2>
              Commencez par comparer vos deux signes
            </h2>

            <p>
              Essayez gratuitement la compatibilité par signes,
              puis passez à la synastrie Premium pour explorer
              vos deux thèmes astraux complets.
            </p>

            <div className="compat-premium-final-actions">
              <Link
                href="/compatibilite"
                className="compat-premium-button compat-premium-button-primary"
              >
                Faire le test gratuit
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="#commande"
                className="compat-premium-button compat-premium-button-secondary"
              >
                Choisir Premium
              </Link>
            </div>
          </section>

          <p className="compat-premium-disclaimer">
            L’astrologie est proposée comme un outil symbolique
            d’exploration personnelle et relationnelle. Elle ne
            remplace pas un avis médical, psychologique,
            juridique ou financier.
          </p>
        </main>
      </div>
    </AuthProvider>
  );
}
