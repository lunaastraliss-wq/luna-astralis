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
    "Rapport Carte du ciel Essentielle | Analyse astrologique personnalisée",

  description:
    "Découvrez le rapport Carte du ciel Essentielle de Luna Astralis : une analyse astrologique personnalisée de votre Soleil, votre Lune, votre Ascendant, vos planètes, vos éléments et vos modalités.",

  alternates: {
    canonical:
      "https://luna-astralis.app/carte-du-ciel/essentielle",
  },

  openGraph: {
    title:
      "Rapport Carte du ciel Essentielle | Luna Astralis",

    description:
      "Une première lecture complète et personnalisée de votre thème astral.",

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
| Contenu de la page
|--------------------------------------------------------------------------
*/

const reportContents = [
  {
    icon: "☉",
    title: "Votre Soleil",
    text:
      "Votre identité profonde, votre énergie centrale et la manière dont vous exprimez votre personnalité.",
  },

  {
    icon: "☾",
    title: "Votre Lune",
    text:
      "Votre monde émotionnel, vos besoins intérieurs et votre façon instinctive de réagir.",
  },

  {
    icon: "↑",
    title: "Votre Ascendant",
    text:
      "L’image que vous projetez, votre manière d’aborder la vie et votre première impression.",
  },

  {
    icon: "✦",
    title: "Vos planètes",
    text:
      "Une interprétation personnalisée de vos principales positions planétaires.",
  },

  {
    icon: "△",
    title: "Vos éléments",
    text:
      "Feu, Terre, Air et Eau : découvrez les énergies dominantes de votre personnalité.",
  },

  {
    icon: "◇",
    title: "Vos modalités",
    text:
      "Cardinal, Fixe et Mutable : comprenez votre façon d’agir, de persévérer et de vous adapter.",
  },
];

const benefits = [
  "Rapport entièrement personnalisé à partir de vos informations de naissance",
  "Interprétation claire, accessible et agréable à lire",
  "17 pages consacrées à votre thème astral",
  "Votre véritable carte du ciel intégrée au rapport",
  "Téléchargement numérique après la génération",
  "Paiement unique, sans abonnement",
];

const testimonials = [
  {
    text:
      "Le rapport m’a permis de mieux comprendre certaines facettes de ma personnalité que je ressentais sans réussir à les expliquer.",
    author: "Sophie",
  },

  {
    text:
      "La présentation est magnifique et les explications sont faciles à comprendre, même lorsqu’on connaît peu l’astrologie.",
    author: "Julie",
  },

  {
    text:
      "J’ai particulièrement aimé l’analyse de ma Lune et de mon Ascendant. Je me suis vraiment reconnue.",
    author: "Mélanie",
  },
];

const faqItems = [
  {
    question:
      "De quelles informations ai-je besoin ?",

    answer:
      "Vous aurez besoin de votre date de naissance, de votre heure de naissance et de votre ville de naissance. Une heure précise permet d’obtenir un Ascendant et des maisons astrologiques plus fiables.",
  },

  {
    question:
      "Le rapport est-il vraiment personnalisé ?",

    answer:
      "Oui. Le rapport est généré à partir de vos propres données de naissance et de vos positions astrologiques personnelles. Il ne s’agit pas d’un document général associé uniquement à votre signe solaire.",
  },

  {
    question:
      "Combien de pages contient le rapport Essentielle ?",

    answer:
      "Le rapport Essentielle contient environ 27 pages. Le nombre exact peut légèrement varier selon les informations astrologiques calculées.",
  },

  {
    question:
      "Puis-je consulter un exemple avant de commander ?",

    answer:
      "Oui. Un aperçu réel du rapport est disponible directement sur cette page. Il vous permet de découvrir la présentation et le niveau de détail avant votre achat.",
  },

  {
    question:
      "Est-ce un abonnement ?",

    answer:
      "Non. Le prix de 24,99 $ US correspond à un paiement unique pour votre rapport personnalisé.",
  },

  {
    question:
      "Comment vais-je recevoir mon rapport ?",

    answer:
      "Après le paiement et la génération, votre rapport personnalisé sera disponible en format PDF numérique.",
  },
];

export default function EssentiellePage() {
  return (
    <AuthProvider>
      <SiteHeader />

      <main className="essential-report-page">
        {/* ===================================== */}
        {/* Bannière principale                  */}
        {/* ===================================== */}

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
              <span>Essentielle</span>
            </h1>

            <p className="essential-hero-description">
              Découvrez les fondations de votre
              personnalité astrologique grâce à une
              analyse claire de votre Soleil, votre
              Lune, votre Ascendant et vos principales
              énergies planétaires.
            </p>

            <div className="essential-hero-details">
              <span>
                <strong>≈ 27 pages</strong>
                d’analyse
              </span>

              <span>
                <strong>PDF personnalisé</strong>
                à télécharger
              </span>

              <span>
                <strong>Paiement unique</strong>
                sans abonnement
              </span>
            </div>

            <div className="essential-hero-actions">
              <Link
                href="/carte-du-ciel#rapports-astrologiques"
                className="essential-primary-button"
              >
                Commander maintenant
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
                <span aria-hidden="true">
                  📖
                </span>

                Voir l’aperçu réel
              </a>
            </div>

            <div className="essential-price">
              <span>
                Rapport Essentielle
              </span>

              <strong>
                24,99 $ US
              </strong>
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

        {/* ===================================== */}
        {/* Introduction                         */}
        {/* ===================================== */}

        <section className="essential-introduction">
          <div className="essential-section-heading">
            <span className="essential-kicker">
              Votre première exploration
            </span>

            <h2>
              Une lecture essentielle de votre
              thème astral
            </h2>

            <p>
              Votre carte du ciel représente la
              position des planètes au moment précis
              de votre naissance. Le rapport
              Essentielle transforme ces informations
              en une analyse structurée et facile à
              comprendre.
            </p>
          </div>

          <div className="essential-intro-layout">
            <div className="essential-intro-text">
              <p>
                Ce rapport vous aide à comprendre
                les grandes bases de votre
                personnalité astrologique, vos
                réactions émotionnelles, votre
                manière de vous présenter aux autres
                et les énergies qui occupent une
                place importante dans votre thème.
              </p>

              <p>
                Il convient parfaitement aux
                personnes qui souhaitent découvrir
                leur thème natal sans être
                submergées par des notions trop
                techniques.
              </p>

              <div className="essential-highlight-box">
                <span aria-hidden="true">
                  ☾
                </span>

                <div>
                  <strong>
                    Un rapport accessible et
                    personnel
                  </strong>

                  <p>
                    Une interprétation pensée pour
                    vous aider à mieux vous
                    comprendre, dans un langage
                    humain et bienveillant.
                  </p>
                </div>
              </div>
            </div>

            <div className="essential-profile-card">
              <div className="essential-profile-icon">
                ✦
              </div>

              <h3>
                Le rapport Essentielle est idéal si…
              </h3>

              <ul>
                <li>
                  Vous découvrez l’astrologie
                  personnalisée.
                </li>

                <li>
                  Vous voulez comprendre votre
                  Soleil, votre Lune et votre
                  Ascendant.
                </li>

                <li>
                  Vous recherchez une analyse
                  claire et agréable à lire.
                </li>

                <li>
                  Vous souhaitez conserver votre
                  thème astral dans un beau PDF.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================================== */}
        {/* Contenu du rapport                   */}
        {/* ===================================== */}

        <section className="essential-contents-section">
          <div className="essential-section-heading essential-section-heading--center">
            <span className="essential-kicker">
              À l’intérieur du rapport
            </span>

            <h2>
              Ce que vous allez découvrir
            </h2>

            <p>
              Chaque partie du rapport vous révèle
              une dimension différente de votre
              personnalité astrologique.
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
              )
            )}
          </div>
        </section>

        {/* ===================================== */}
        {/* Avantages                            */}
        {/* ===================================== */}

        <section className="essential-benefits-section">
          <div className="essential-benefits-copy">
            <span className="essential-kicker">
              Une expérience complète
            </span>

            <h2>
              Bien plus qu’une simple liste de
              positions astrologiques
            </h2>

            <p>
              Votre rapport transforme les données
              techniques de votre thème astral en
              une lecture personnelle, structurée
              et visuellement soignée.
            </p>

            <Link
              href="/carte-du-ciel#rapports-astrologiques"
              className="essential-inline-order"
            >
              Commander mon rapport
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          <div className="essential-benefits-list">
            {benefits.map(
              (benefit) => (
                <div
                  className="essential-benefit-item"
                  key={benefit}
                >
                  <span
                    className="essential-benefit-check"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <span>
                    {benefit}
                  </span>
                </div>
              )
            )}
          </div>
        </section>

        {/* ===================================== */}
        {/* Aperçu PDF                           */}
        {/* ===================================== */}

        <section className="essential-preview-section">
          <div className="essential-preview-decoration">
            ✦
          </div>

          <div className="essential-preview-content">
            <span className="essential-kicker">
              Regardez avant de commander
            </span>

            <h2>
              Consultez un véritable aperçu du
              rapport
            </h2>

            <p>
              Découvrez la qualité de la
              présentation, l’univers visuel de
              Luna Astralis et le style des
              interprétations avant de choisir
              votre rapport.
            </p>

            <div className="essential-preview-actions">
              <a
                href="/reports/apercu-rapport-carte-du-ciel-essentielle.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="essential-primary-button"
              >
                <span aria-hidden="true">
                  📖
                </span>

                Ouvrir l’aperçu PDF
              </a>

              <span className="essential-preview-note">
                L’aperçu s’ouvre dans un nouvel
                onglet.
              </span>
            </div>
          </div>

          <div className="essential-preview-pages">
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
                Une analyse conçue pour vous
              </strong>
            </div>
          </div>
        </section>

        {/* ===================================== */}
        {/* Fonctionnement                       */}
        {/* ===================================== */}

        <section className="essential-process-section">
          <div className="essential-section-heading essential-section-heading--center">
            <span className="essential-kicker">
              Simple et rapide
            </span>

            <h2>
              Comment obtenir votre rapport
            </h2>
          </div>

          <div className="essential-process-grid">
            <article>
              <span className="essential-process-number">
                01
              </span>

              <h3>
                Entrez vos informations
              </h3>

              <p>
                Indiquez votre date, votre heure et
                votre ville de naissance.
              </p>
            </article>

            <article>
              <span className="essential-process-number">
                02
              </span>

              <h3>
                Effectuez le paiement
              </h3>

              <p>
                Le paiement unique est effectué
                dans un environnement sécurisé.
              </p>
            </article>

            <article>
              <span className="essential-process-number">
                03
              </span>

              <h3>
                Recevez votre rapport
              </h3>

              <p>
                Votre carte et vos interprétations
                sont réunies dans un PDF
                personnalisé.
              </p>
            </article>
          </div>
        </section>

        {/* ===================================== */}
        {/* Témoignages                          */}
        {/* ===================================== */}

        <section className="essential-testimonials-section">
          <div className="essential-section-heading essential-section-heading--center">
            <span className="essential-kicker">
              Elles se sont reconnues
            </span>

            <h2>
              Ce que les lectrices apprécient
            </h2>
          </div>

          <div className="essential-testimonials-grid">
            {testimonials.map(
              (testimonial) => (
                <article
                  className="essential-testimonial-card"
                  key={testimonial.author}
                >
                  <div
                    className="essential-stars"
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

        <section className="essential-faq-section">
          <div className="essential-section-heading">
            <span className="essential-kicker">
              Questions fréquentes
            </span>

            <h2>
              Avant de commander
            </h2>

            <p>
              Retrouvez les réponses aux questions
              les plus fréquentes concernant le
              rapport Essentielle.
            </p>
          </div>

          <div className="essential-faq-list">
            {faqItems.map(
              (item) => (
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
              )
            )}
          </div>
        </section>

        {/* ===================================== */}
        {/* Appel final                          */}
        {/* ===================================== */}

        <section className="essential-final-cta">
          <div
            className="essential-final-cta-glow"
            aria-hidden="true"
          />

          <span className="essential-final-symbol">
            ☾
          </span>

          <span className="essential-kicker">
            Votre ciel vous appartient
          </span>

          <h2>
            Commencez à découvrir votre thème
            astral
          </h2>

          <p>
            Recevez une première analyse
            personnalisée de vos principales
            énergies astrologiques dans un rapport
            élégant et facile à consulter.
          </p>

          <div className="essential-final-price">
            <span>
              Rapport Essentielle
            </span>

            <strong>
              24,99 $ US
            </strong>
          </div>

          <Link
            href="/carte-du-ciel#rapports-astrologiques"
            className="essential-primary-button essential-primary-button--large"
          >
            Commander maintenant
            <span aria-hidden="true">
              ✦
            </span>
          </Link>

          <div className="essential-security-note">
            <span aria-hidden="true">
              🔒
            </span>

            Paiement sécurisé · Paiement unique ·
            Aucun abonnement
          </div>
          <ReportCheckoutForm
  reportType="essential"
/>
  </section>

        {/* ===================================== */}
        {/* Navigation vers les autres offres    */}
        {/* ===================================== */}

        <section className="essential-other-reports">
          <h2>
            Vous recherchez une analyse plus
            approfondie ?
          </h2>

          <p>
            Découvrez également les rapports
            Premium et Signature.
          </p>

          <div className="essential-other-report-links">
            <Link href="/carte-du-ciel/premium">
              <span>
                ★
              </span>

              <div>
                <strong>
                  Rapport Premium
                </strong>

                <small>
                  Analyse approfondie
                </small>
              </div>
            </Link>

            <Link href="/carte-du-ciel/signature">
              <span>
                ✦
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
