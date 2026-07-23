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
    "Rapport Carte du ciel Premium | Thème astral personnalisé de 40 pages",

  description:
    "Découvrez votre thème astral avec le rapport Premium Luna Astralis : 40 pages personnalisées sur votre personnalité, vos maisons, vos aspects, vos relations, votre carrière, vos forces et vos défis.",

  alternates: {
    canonical:
      "https://luna-astralis.app/carte-du-ciel/premium",
  },

  openGraph: {
    title:
      "Rapport Carte du ciel Premium | Luna Astralis",

    description:
      "Une analyse astrologique personnalisée et approfondie de 40 pages.",

    url:
      "https://luna-astralis.app/carte-du-ciel/premium",

    siteName:
      "Luna Astralis",

    type:
      "website",

    locale:
      "fr_CA",

    images: [
      {
        url:
          "/reports/couverture-carte-du-ciel-premium.png",

        width: 1414,
        height: 2000,

        alt:
          "Couverture du rapport Carte du ciel Premium",
      },
    ],
  },
};

/*
|--------------------------------------------------------------------------
| Contenu du rapport Premium
|--------------------------------------------------------------------------
*/

const premiumContents = [
  {
    icon: "☉",
    title: "Soleil, Lune et Ascendant",
    text:
      "Découvrez les trois piliers essentiels de votre personnalité astrologique et la façon dont ils interagissent.",
  },

  {
    icon: "✦",
    title: "Vos planètes",
    text:
      "Une interprétation personnalisée de vos principales positions planétaires dans les signes.",
  },

  {
    icon: "△",
    title: "Éléments et modalités",
    text:
      "Comprenez les énergies Feu, Terre, Air et Eau ainsi que votre manière d’agir et de vous adapter.",
  },

  {
    icon: "⌂",
    title: "Vos maisons astrologiques",
    text:
      "Explorez les domaines de votre vie activés par chaque planète dans votre thème natal.",
  },

  {
    icon: "◇",
    title: "Vos aspects planétaires",
    text:
      "Découvrez les liens harmonieux et les tensions entre les différentes forces de votre thème.",
  },

  {
    icon: "★",
    title: "Vos dominantes",
    text:
      "Identifiez les planètes, les signes et les énergies qui occupent une place majeure dans votre personnalité.",
  },

  {
    icon: "⚖",
    title: "Forces et défis",
    text:
      "Mettez en lumière vos aptitudes naturelles ainsi que les zones qui demandent davantage de conscience.",
  },

  {
    icon: "♡",
    title: "Relations et vie affective",
    text:
      "Comprenez vos besoins relationnels, votre manière d’aimer et les dynamiques qui influencent vos liens.",
  },

  {
    icon: "↗",
    title: "Carrière et potentiel",
    text:
      "Découvrez vos aptitudes professionnelles, vos motivations et les environnements qui favorisent votre épanouissement.",
  },
];

const premiumBenefits = [
  "40 pages d’analyse astrologique personnalisée",
  "Votre véritable carte du ciel intégrée au rapport",
  "Analyse du Soleil, de la Lune et de l’Ascendant",
  "Interprétation de vos principales planètes",
  "Analyse de vos maisons astrologiques",
  "Étude de vos aspects planétaires",
  "Vos dominantes astrologiques",
  "Vos forces, vos défis et votre potentiel",
  "Vos relations et votre vie affective",
  "Votre carrière et vos talents naturels",
  "Rapport numérique en format PDF",
  "Paiement unique sans abonnement",
];

const testimonials = [
  {
    text:
      "Le rapport Premium est très complet. J’ai compris des contradictions de ma personnalité que je n’arrivais pas à expliquer auparavant.",
    author: "Isabelle",
  },

  {
    text:
      "J’ai adoré les sections sur les maisons, les relations et la carrière. Le rapport est beau, clair et très agréable à lire.",
    author: "Nathalie",
  },

  {
    text:
      "Je me suis reconnue dans plusieurs passages. L’analyse va beaucoup plus loin que le simple signe astrologique.",
    author: "Caroline",
  },
];

const faqItems = [
  {
    question:
      "Combien de pages contient le rapport Premium ?",

    answer:
      "Le rapport Carte du ciel Premium contient 40 pages d’analyse astrologique personnalisée.",
  },

  {
    question:
      "Quelle est la différence entre Essentielle et Premium ?",

    answer:
      "Le rapport Essentielle présente les fondations de votre thème astral. Le rapport Premium va plus loin avec vos maisons astrologiques, vos aspects planétaires, vos dominantes, vos forces, vos défis, vos relations et votre potentiel professionnel.",
  },

  {
    question:
      "Quelles informations sont nécessaires ?",

    answer:
      "Vous devez indiquer votre date de naissance, votre heure de naissance et votre ville de naissance. Une heure précise est importante pour calculer correctement votre Ascendant et vos maisons astrologiques.",
  },

  {
    question:
      "Le rapport est-il vraiment personnalisé ?",

    answer:
      "Oui. Le rapport est généré à partir de vos propres positions planétaires et de votre véritable carte du ciel. Il ne s’agit pas d’un texte général associé uniquement à votre signe solaire.",
  },

  {
    question:
      "Puis-je consulter un aperçu avant de commander ?",

    answer:
      "Oui. Vous pouvez ouvrir un véritable aperçu PDF afin de découvrir la présentation, le style des pages et le niveau de détail du rapport.",
  },

  {
    question:
      "Est-ce un abonnement ?",

    answer:
      "Non. Le prix de 49,99 $ US correspond à un paiement unique. Aucun abonnement ne sera créé.",
  },

  {
    question:
      "Comment vais-je recevoir mon rapport ?",

    answer:
      "Après le paiement et la génération de votre analyse, votre rapport personnalisé sera disponible en format PDF numérique.",
  },
];

export default function PremiumPage() {
  return (
    <AuthProvider>
      <SiteHeader />

      <main className="premium-report-page">
        {/* ===================================== */}
        {/* Bannière principale                  */}
        {/* ===================================== */}

        <section className="premium-report-hero">
          <div
            className="premium-report-stars"
            aria-hidden="true"
          />

          <div
            className="premium-report-orbit"
            aria-hidden="true"
          />

          <div className="premium-report-hero-copy">
            <div className="premium-report-eyebrow">
              <span aria-hidden="true">
                ★
              </span>

              Analyse astrologique approfondie
            </div>

            <h1>
              Rapport Carte du ciel
              <span>Premium</span>
            </h1>

            <p className="premium-report-lead">
              Explorez votre personnalité, vos
              maisons astrologiques, vos aspects,
              vos dominantes, vos relations, vos
              forces et votre potentiel dans une
              analyse personnalisée de 40 pages.
            </p>

            <div className="premium-report-facts">
              <div>
                <strong>
                  40 pages
                </strong>

                <span>
                  d’analyse personnalisée
                </span>
              </div>

              <div>
                <strong>
                  Thème complet
                </strong>

                <span>
                  maisons et aspects inclus
                </span>
              </div>

              <div>
                <strong>
                  PDF numérique
                </strong>

                <span>
                  à conserver
                </span>
              </div>
            </div>

            <div className="premium-report-hero-actions">
              <Link
                href="/carte-du-ciel#rapports-astrologiques"
                className="premium-report-primary-button"
              >
                Commander le rapport Premium

                <span aria-hidden="true">
                  →
                </span>
              </Link>

              <a
                href="/reports/apercu-rapport-carte-du-ciel-premium.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="premium-report-secondary-button"
              >
                <span aria-hidden="true">
                  📖
                </span>

                Voir l’aperçu réel
              </a>
            </div>

            <div className="premium-report-price">
              <span>
                Paiement unique
              </span>

              <strong>
                49,99 $ US
              </strong>

              <small>
                Aucun abonnement
              </small>
            </div>
          </div>

          <div className="premium-report-cover-column">
            <div
              className="premium-report-cover-glow"
              aria-hidden="true"
            />

            <div className="premium-report-cover-shell">
              <Image
                src="/reports/couverture-carte-du-ciel-premium.png"
                alt="Couverture du rapport Carte du ciel Premium"
                width={707}
                height={1000}
                priority
                className="premium-report-cover"
              />
            </div>

            <div className="premium-report-cover-label">
              <span aria-hidden="true">
                ★
              </span>

              Le choix le plus populaire
            </div>
          </div>
        </section>

        {/* ===================================== */}
        {/* Bande de confiance                   */}
        {/* ===================================== */}

        <section className="premium-report-trust">
          <div>
            <span aria-hidden="true">
              ✦
            </span>

            <strong>
              Personnalisé
            </strong>

            <small>
              Selon votre naissance
            </small>
          </div>

          <div>
            <span aria-hidden="true">
              ☾
            </span>

            <strong>
              Approfondi
            </strong>

            <small>
              40 pages d’analyse
            </small>
          </div>

          <div>
            <span aria-hidden="true">
              📖
            </span>

            <strong>
              Consultable
            </strong>

            <small>
              Aperçu réel disponible
            </small>
          </div>

          <div>
            <span aria-hidden="true">
              🔒
            </span>

            <strong>
              Sécurisé
            </strong>

            <small>
              Paiement unique
            </small>
          </div>
        </section>

        {/* ===================================== */}
        {/* Présentation                         */}
        {/* ===================================== */}

        <section className="premium-report-intro">
          <div className="premium-report-heading">
            <span className="premium-report-kicker">
              Comprendre votre ciel
            </span>

            <h2>
              Une analyse qui va bien au-delà de
              votre signe astrologique
            </h2>
          </div>

          <div className="premium-report-intro-grid">
            <div className="premium-report-intro-copy">
              <p>
                Votre signe solaire ne représente
                qu’une partie de votre personnalité.
                Votre thème natal contient aussi
                votre Lune, votre Ascendant, vos
                planètes, vos maisons et les
                relations entre toutes ces énergies.
              </p>

              <p>
                Le rapport Premium rassemble ces
                informations dans une lecture
                structurée, claire et profondément
                personnelle. Il vous aide à mieux
                comprendre vos réactions, vos
                besoins, vos relations, vos talents
                et certaines tensions intérieures.
              </p>

              <div className="premium-report-quote">
                <span aria-hidden="true">
                  “
                </span>

                <p>
                  Votre thème astral ne vous enferme
                  pas dans une définition. Il vous
                  offre une carte pour mieux
                  comprendre votre fonctionnement.
                </p>
              </div>
            </div>

            <aside className="premium-report-who">
              <span className="premium-report-who-icon">
                ★
              </span>

              <h3>
                Le rapport Premium est idéal si…
              </h3>

              <ul>
                <li>
                  Vous connaissez déjà votre signe
                  et souhaitez aller plus loin.
                </li>

                <li>
                  Vous voulez comprendre vos
                  maisons et vos aspects.
                </li>

                <li>
                  Vous cherchez une analyse de vos
                  relations et de votre carrière.
                </li>

                <li>
                  Vous souhaitez identifier vos
                  forces, vos défis et vos
                  dominantes.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* ===================================== */}
        {/* Contenu détaillé                     */}
        {/* ===================================== */}

        <section className="premium-report-content-section">
          <div className="premium-report-heading premium-report-heading--center">
            <span className="premium-report-kicker">
              40 pages personnalisées
            </span>

            <h2>
              Tout ce que contient votre rapport
              Premium
            </h2>

            <p>
              Chaque section révèle une facette
              différente de votre personnalité et
              de votre parcours astrologique.
            </p>
          </div>

          <div className="premium-report-content-grid">
            {premiumContents.map(
              (item, index) => (
                <article
                  className="premium-report-content-card"
                  key={item.title}
                >
                  <span className="premium-report-card-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <div className="premium-report-content-icon">
                    {item.icon}
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              )
            )}
          </div>
        </section>

        {/* ===================================== */}
        {/* Avantages                            */}
        {/* ===================================== */}

        <section className="premium-report-benefits">
          <div className="premium-report-benefits-heading">
            <span className="premium-report-kicker">
              Une lecture complète
            </span>

            <h2>
              Ce que vous recevez
            </h2>

            <p>
              Un document astrologique conçu pour
              être beau, clair, personnel et facile
              à consulter.
            </p>

            <div className="premium-report-benefits-price">
              <span>
                Rapport Premium
              </span>

              <strong>
                49,99 $ US
              </strong>
            </div>

            <Link
              href="/carte-du-ciel#rapports-astrologiques"
              className="premium-report-primary-button"
            >
              Commander maintenant

              <span aria-hidden="true">
                ✦
              </span>
            </Link>
          </div>

          <div className="premium-report-benefits-list">
            {premiumBenefits.map(
              (benefit) => (
                <div
                  className="premium-report-benefit"
                  key={benefit}
                >
                  <span aria-hidden="true">
                    ✓
                  </span>

                  <p>
                    {benefit}
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* ===================================== */}
        {/* Aperçu PDF                           */}
        {/* ===================================== */}

        <section className="premium-report-preview">
          <div className="premium-report-preview-cover">
            <Image
              src="/reports/couverture-carte-du-ciel-premium.png"
              alt="Aperçu de la couverture du rapport Premium"
              width={424}
              height={600}
              className="premium-report-preview-image"
            />

            <div
              className="premium-report-preview-page premium-report-preview-page--one"
              aria-hidden="true"
            />

            <div
              className="premium-report-preview-page premium-report-preview-page--two"
              aria-hidden="true"
            />
          </div>

          <div className="premium-report-preview-copy">
            <span className="premium-report-kicker">
              Voyez avant de commander
            </span>

            <h2>
              Consultez un véritable aperçu PDF
            </h2>

            <p>
              Ouvrez un exemple réel du rapport
              Premium pour découvrir la qualité de
              la présentation, les différentes
              sections et le style des
              interprétations.
            </p>

            <ul>
              <li>
                Véritable mise en page du rapport.
              </li>

              <li>
                Exemple des sections
                personnalisées.
              </li>

              <li>
                Aperçu accessible gratuitement.
              </li>
            </ul>

            <a
              href="/reports/apercu-rapport-carte-du-ciel-premium.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-report-primary-button"
            >
              <span aria-hidden="true">
                📖
              </span>

              Ouvrir l’aperçu Premium
            </a>

            <small>
              Le document s’ouvrira dans un nouvel
              onglet.
            </small>
          </div>
        </section>

        {/* ===================================== */}
        {/* Fonctionnement                       */}
        {/* ===================================== */}

        <section className="premium-report-process">
          <div className="premium-report-heading premium-report-heading--center">
            <span className="premium-report-kicker">
              Trois étapes
            </span>

            <h2>
              Comment obtenir votre rapport
            </h2>
          </div>

          <div className="premium-report-process-grid">
            <article>
              <span>
                01
              </span>

              <h3>
                Vos informations
              </h3>

              <p>
                Indiquez votre date, votre heure et
                votre ville de naissance.
              </p>
            </article>

            <article>
              <span>
                02
              </span>

              <h3>
                Votre paiement
              </h3>

              <p>
                Réglez votre commande dans un
                environnement de paiement sécurisé.
              </p>
            </article>

            <article>
              <span>
                03
              </span>

              <h3>
                Votre rapport
              </h3>

              <p>
                Votre thème et vos interprétations
                sont réunis dans un PDF
                personnalisé de 40 pages.
              </p>
            </article>
          </div>
        </section>

        {/* ===================================== */}
        {/* Témoignages                          */}
        {/* ===================================== */}

        <section className="premium-report-testimonials">
          <div className="premium-report-heading premium-report-heading--center">
            <span className="premium-report-kicker">
              Elles ont découvert leur thème
            </span>

            <h2>
              Une lecture dans laquelle on se
              reconnaît
            </h2>
          </div>

          <div className="premium-report-testimonial-grid">
            {testimonials.map(
              (testimonial) => (
                <article
                  key={testimonial.author}
                >
                  <div
                    className="premium-report-stars-rating"
                    aria-label="5 étoiles sur 5"
                  >
                    ★★★★★
                  </div>

                  <blockquote>
                    « {testimonial.text} »
                  </blockquote>

                  <p>
                    — {testimonial.author}
                  </p>
                </article>
              )
            )}
          </div>
        </section>

        {/* ===================================== */}
        {/* FAQ                                  */}
        {/* ===================================== */}

        <section className="premium-report-faq">
          <div className="premium-report-faq-heading">
            <span className="premium-report-kicker">
              Questions fréquentes
            </span>

            <h2>
              Tout savoir avant votre commande
            </h2>

            <p>
              Voici les réponses aux principales
              questions concernant le rapport
              Carte du ciel Premium.
            </p>
          </div>

          <div className="premium-report-faq-list">
            {faqItems.map(
              (item) => (
                <details
                  className="premium-report-faq-item"
                  key={item.question}
                >
                  <summary>
                    {item.question}
                  </summary>

                  <p>
                    {item.answer}
                  </p>
                </details>
              )
            )}
          </div>
        </section>

        {/* ===================================== */}
        {/* Appel final                          */}
        {/* ===================================== */}

        <section className="premium-report-final">
          <div
            className="premium-report-final-glow"
            aria-hidden="true"
          />

          <span className="premium-report-final-icon">
            ★
          </span>

          <span className="premium-report-kicker">
            Votre thème mérite une vraie lecture
          </span>

          <h2>
            Découvrez les 40 pages de votre rapport
            Premium
          </h2>

          <p>
            Comprenez votre personnalité, vos
            relations, vos talents, vos défis et
            les grandes dynamiques de votre thème
            astral.
          </p>

          <div className="premium-report-final-price">
            <span>
              Paiement unique
            </span>

            <strong>
              49,99 $ US
            </strong>
          </div>

          <Link
            href="/carte-du-ciel#rapports-astrologiques"
            className="premium-report-primary-button premium-report-primary-button--large"
          >
            Commander mon rapport Premium

            <span aria-hidden="true">
              ✦
            </span>
          </Link>

          <div className="premium-report-security">
            <span aria-hidden="true">
              🔒
            </span>

            Paiement sécurisé · Aucun abonnement ·
            Rapport personnalisé
          </div>
          <ReportCheckoutForm reportType="premium" />
        </section>

        {/* ===================================== */}
        {/* Autres rapports                      */}
        {/* ===================================== */}

        <section className="premium-report-others">
          <h2>
            Comparez les autres rapports
          </h2>

          <div className="premium-report-other-grid">
            <Link href="/carte-du-ciel/essentielle">
              <span>
                ✦
              </span>

              <div>
                <strong>
                  Rapport Essentielle
                </strong>

                <small>
                  17 pages · 24,99 $ US
                </small>
              </div>
            </Link>

            <Link href="/carte-du-ciel/signature">
              <span>
                👑
              </span>

              <div>
                <strong>
                  Rapport Signature
                </strong>

                <small>
                  L’expérience la plus complète
                </small>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </AuthProvider>
  );
}
