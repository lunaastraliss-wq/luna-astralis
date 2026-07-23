import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";

import "./page.css";

export const metadata: Metadata = {
  title:
    "Rapport Carte du ciel Signature | Thème astral personnalisé de 58 pages",

  description:
    "Découvrez votre thème astral avec le rapport Signature Luna Astralis : 58 pages personnalisées consacrées à votre personnalité, vos planètes, vos maisons, vos aspects, vos relations, votre carrière et votre évolution.",

  alternates: {
    canonical:
      "https://luna-astralis.app/carte-du-ciel/signature",
  },

  openGraph: {
    title:
      "Rapport Carte du ciel Signature | Luna Astralis",

    description:
      "L’analyse astrologique la plus complète de Luna Astralis, personnalisée sur 58 pages.",

    url:
      "https://luna-astralis.app/carte-du-ciel/signature",

    siteName:
      "Luna Astralis",

    type:
      "website",

    locale:
      "fr_CA",

    images: [
      {
        url:
          "/reports/couverture-carte-du-ciel-signature.png",

        width: 1414,
        height: 2000,

        alt:
          "Couverture du rapport Carte du ciel Signature",
      },
    ],
  },
};

const signatureContents = [
  {
    icon: "☉",
    title: "Votre Soleil",
    text:
      "Votre identité profonde, votre volonté, vos aspirations et votre manière naturelle de rayonner.",
  },

  {
    icon: "☾",
    title: "Votre Lune",
    text:
      "Votre monde émotionnel, vos besoins intérieurs, vos réactions instinctives et votre sécurité affective.",
  },

  {
    icon: "↑",
    title: "Votre Ascendant",
    text:
      "Votre manière d’entrer en relation avec le monde, votre présence et la première impression que vous dégagez.",
  },

  {
    icon: "✦",
    title: "Vos planètes",
    text:
      "Une interprétation personnalisée de vos principales positions planétaires dans les signes.",
  },

  {
    icon: "△",
    title: "Vos éléments",
    text:
      "Découvrez l’équilibre entre le Feu, la Terre, l’Air et l’Eau dans votre personnalité.",
  },

  {
    icon: "◇",
    title: "Vos modalités",
    text:
      "Comprenez votre manière d’initier, de maintenir et de transformer les situations.",
  },

  {
    icon: "⌂",
    title: "Vos maisons astrologiques",
    text:
      "Explorez les domaines de votre vie dans lesquels s’expriment vos différentes énergies planétaires.",
  },

  {
    icon: "☍",
    title: "Vos aspects planétaires",
    text:
      "Analysez les relations harmonieuses, les tensions et les dynamiques entre vos planètes.",
  },

  {
    icon: "★",
    title: "Vos dominantes",
    text:
      "Identifiez les forces astrologiques les plus importantes de votre thème natal.",
  },

  {
    icon: "⚖",
    title: "Vos forces et vos défis",
    text:
      "Mettez en lumière vos aptitudes naturelles, vos contradictions et vos principaux axes de progression.",
  },

  {
    icon: "♡",
    title: "Votre vie relationnelle",
    text:
      "Comprenez vos besoins affectifs, votre manière d’aimer et les mécanismes qui influencent vos relations.",
  },

  {
    icon: "↗",
    title: "Votre carrière",
    text:
      "Découvrez vos talents, vos motivations professionnelles et les environnements qui favorisent votre épanouissement.",
  },
];

const signatureBenefits = [
  "58 pages d’analyse astrologique personnalisée",
  "Votre véritable carte du ciel intégrée au rapport",
  "Analyse détaillée du Soleil, de la Lune et de l’Ascendant",
  "Interprétation complète de vos principales planètes",
  "Analyse de vos éléments et de vos modalités",
  "Étude approfondie de vos maisons astrologiques",
  "Analyse de vos aspects planétaires",
  "Identification de vos dominantes astrologiques",
  "Lecture de vos forces et de vos défis",
  "Analyse de votre vie relationnelle",
  "Analyse de votre carrière et de vos talents",
  "Synthèse complète de votre thème natal",
  "Guide de lecture inclus",
  "Rapport numérique en format PDF",
  "Paiement unique sans abonnement",
];

const testimonials = [
  {
    text:
      "Le rapport Signature est impressionnant. J’ai eu l’impression de lire un portrait très profond de ma personnalité.",
    author: "Véronique",
  },

  {
    text:
      "La lecture des maisons, des aspects et des relations m’a aidée à comprendre plusieurs périodes importantes de ma vie.",
    author: "Annie",
  },

  {
    text:
      "C’est un rapport magnifique, très détaillé et vraiment personnel. Je vais le relire plusieurs fois.",
    author: "Marie-Claude",
  },
];

const faqItems = [
  {
    question:
      "Combien de pages contient le rapport Signature ?",

    answer:
      "Le rapport Carte du ciel Signature contient exactement 58 pages d’analyse astrologique personnalisée.",
  },

  {
    question:
      "Quelle est la différence entre Premium et Signature ?",

    answer:
      "Le rapport Premium offre une analyse approfondie de 40 pages. Le rapport Signature va encore plus loin avec 58 pages, un guide de lecture, une analyse plus développée des différentes dimensions du thème natal et une synthèse plus complète.",
  },

  {
    question:
      "Quelles informations dois-je fournir ?",

    answer:
      "Vous devez fournir votre date de naissance, votre heure de naissance et votre ville de naissance. Une heure précise permet de calculer correctement votre Ascendant et vos maisons astrologiques.",
  },

  {
    question:
      "Le rapport est-il entièrement personnalisé ?",

    answer:
      "Oui. Le rapport est généré à partir de vos propres données de naissance et de vos positions astrologiques personnelles.",
  },

  {
    question:
      "Puis-je voir un aperçu avant de commander ?",

    answer:
      "Oui. Un aperçu réel du rapport Signature est disponible gratuitement sur cette page.",
  },

  {
    question:
      "Est-ce un abonnement ?",

    answer:
      "Non. Le prix de 79,99 $ US correspond à un paiement unique. Aucun abonnement ne sera créé.",
  },

  {
    question:
      "Comment vais-je recevoir mon rapport ?",

    answer:
      "Après le paiement et la génération, votre rapport personnalisé sera disponible en format PDF numérique.",
  },
];

export default function SignaturePage() {
  return (
    <AuthProvider>
      <SiteHeader />

      <main className="signature-report-page">
        <section className="signature-report-hero">
          <div
            className="signature-report-stars"
            aria-hidden="true"
          />

          <div
            className="signature-report-crown-glow"
            aria-hidden="true"
          />

          <div className="signature-report-cover-column">
            <div className="signature-report-cover-frame">
              <Image
                src="/reports/couverture-carte-du-ciel-signature.png"
                alt="Couverture du rapport Carte du ciel Signature"
                width={707}
                height={1000}
                priority
                className="signature-report-cover"
              />
            </div>

            <div className="signature-report-cover-badge">
              <span aria-hidden="true">
                ✦
              </span>

              Expérience Signature
            </div>
          </div>

          <div className="signature-report-hero-copy">
            <div className="signature-report-eyebrow">
              <span aria-hidden="true">
                ✦
              </span>

              L’analyse la plus complète
            </div>

            <h1>
              Rapport Carte du ciel
              <span>Signature</span>
            </h1>

            <p className="signature-report-lead">
              Entrez au cœur de votre thème natal
              grâce à une analyse astrologique
              personnalisée de 58 pages consacrée à
              votre personnalité, vos relations, vos
              forces, vos défis et votre évolution.
            </p>

            <div className="signature-report-facts">
              <div>
                <strong>
                  58 pages
                </strong>

                <span>
                  d’analyse personnalisée
                </span>
              </div>

              <div>
                <strong>
                  Lecture complète
                </strong>

                <span>
                  planètes, maisons et aspects
                </span>
              </div>

              <div>
                <strong>
                  PDF Signature
                </strong>

                <span>
                  à conserver
                </span>
              </div>
            </div>

            <div className="signature-report-hero-actions">
              <Link
                href="/carte-du-ciel#rapports-astrologiques"
                className="signature-report-primary-button"
              >
                Commander le rapport Signature

                <span aria-hidden="true">
                  ✦
                </span>
              </Link>

              <a
                href="/reports/apercu-rapport-carte-du-ciel-signature.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="signature-report-secondary-button"
              >
                <span aria-hidden="true">
                  📖
                </span>

                Voir l’aperçu réel
              </a>
            </div>

            <div className="signature-report-price">
              <span>
                Paiement unique
              </span>

              <strong>
                79,99 $ US
              </strong>

              <small>
                Aucun abonnement
              </small>
            </div>
          </div>
        </section>

        <section className="signature-report-trust">
          <div>
            <span aria-hidden="true">
              ✦
            </span>

            <strong>
              58 pages
            </strong>

            <small>
              Analyse complète
            </small>
          </div>

          <div>
            <span aria-hidden="true">
              ☾
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
              📖
            </span>

            <strong>
              Aperçu réel
            </strong>

            <small>
              Disponible gratuitement
            </small>
          </div>

          <div>
            <span aria-hidden="true">
              🔒
            </span>

            <strong>
              Paiement unique
            </strong>

            <small>
              Aucun abonnement
            </small>
          </div>
        </section>

        <section className="signature-report-intro">
          <div className="signature-report-heading">
            <span className="signature-report-kicker">
              Votre portrait astrologique
            </span>

            <h2>
              Une exploration profonde de votre
              thème natal
            </h2>

            <p>
              Le rapport Signature rassemble les
              principales dimensions de votre carte
              du ciel dans une lecture structurée,
              détaillée et personnalisée.
            </p>
          </div>

          <div className="signature-report-intro-grid">
            <div className="signature-report-intro-copy">
              <p>
                Votre thème natal est une carte
                complexe composée de signes, de
                planètes, de maisons et d’aspects.
                Chacun de ces éléments révèle une
                facette différente de votre manière
                de penser, de ressentir, d’aimer,
                d’agir et d’évoluer.
              </p>

              <p>
                Le rapport Signature relie ces
                informations afin de vous offrir
                une lecture plus profonde et plus
                cohérente de votre personnalité.
              </p>

              <div className="signature-report-quote">
                <span aria-hidden="true">
                  “
                </span>

                <p>
                  Votre carte du ciel ne raconte pas
                  seulement qui vous êtes. Elle
                  révèle aussi les forces qui vous
                  accompagnent tout au long de votre
                  évolution.
                </p>
              </div>
            </div>

            <aside className="signature-report-who">
              <span className="signature-report-who-icon">
                ✦
              </span>

              <h3>
                Le rapport Signature est idéal si…
              </h3>

              <ul>
                <li>
                  Vous souhaitez l’analyse la plus
                  complète de votre thème natal.
                </li>

                <li>
                  Vous voulez comprendre vos
                  contradictions intérieures.
                </li>

                <li>
                  Vous cherchez une lecture détaillée
                  de vos relations et de votre
                  carrière.
                </li>

                <li>
                  Vous souhaitez conserver un
                  véritable portrait astrologique
                  personnel.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="signature-report-content-section">
          <div className="signature-report-heading signature-report-heading--center">
            <span className="signature-report-kicker">
              58 pages personnalisées
            </span>

            <h2>
              Une lecture complète de votre ciel de
              naissance
            </h2>

            <p>
              Chaque section explore une dimension
              particulière de votre personnalité et
              de votre parcours.
            </p>
          </div>

          <div className="signature-report-content-grid">
            {signatureContents.map(
              (item, index) => (
                <article
                  className="signature-report-content-card"
                  key={item.title}
                >
                  <span className="signature-report-card-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <div className="signature-report-content-icon">
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

        <section className="signature-report-benefits">
          <div className="signature-report-benefits-copy">
            <span className="signature-report-kicker">
              L’expérience complète
            </span>

            <h2>
              Tout ce que vous recevez
            </h2>

            <p>
              Un rapport astrologique détaillé,
              élégant et entièrement personnalisé
              à partir de vos informations de
              naissance.
            </p>

            <div className="signature-report-benefits-price">
              <span>
                Rapport Signature
              </span>

              <strong>
                79,99 $ US
              </strong>
            </div>

            <Link
              href="/carte-du-ciel#rapports-astrologiques"
              className="signature-report-primary-button"
            >
              Commander maintenant

              <span aria-hidden="true">
                ✦
              </span>
            </Link>
          </div>

          <div className="signature-report-benefits-list">
            {signatureBenefits.map(
              (benefit) => (
                <div
                  className="signature-report-benefit"
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

        <section className="signature-report-preview">
          <div className="signature-report-preview-copy">
            <span className="signature-report-kicker">
              Découvrez le rapport
            </span>

            <h2>
              Consultez un véritable aperçu PDF
            </h2>

            <p>
              Découvrez l’univers visuel du rapport
              Signature, la présentation des pages
              et le niveau de détail des
              interprétations.
            </p>

            <ul>
              <li>
                Véritable présentation du rapport.
              </li>

              <li>
                Exemple des sections
                personnalisées.
              </li>

              <li>
                Consultation gratuite avant achat.
              </li>
            </ul>

            <a
              href="/reports/apercu-rapport-carte-du-ciel-signature.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="signature-report-primary-button"
            >
              <span aria-hidden="true">
                📖
              </span>

              Ouvrir l’aperçu Signature
            </a>

            <small>
              Le document s’ouvrira dans un nouvel
              onglet.
            </small>
          </div>

          <div className="signature-report-preview-visual">
            <div
              className="signature-report-preview-page signature-report-preview-page--back"
              aria-hidden="true"
            />

            <div
              className="signature-report-preview-page signature-report-preview-page--middle"
              aria-hidden="true"
            />

            <Image
              src="/reports/couverture-carte-du-ciel-signature.png"
              alt="Aperçu de la couverture du rapport Signature"
              width={424}
              height={600}
              className="signature-report-preview-cover"
            />
          </div>
        </section>

        <section className="signature-report-process">
          <div className="signature-report-heading signature-report-heading--center">
            <span className="signature-report-kicker">
              Simple et sécurisé
            </span>

            <h2>
              Comment obtenir votre rapport
            </h2>
          </div>

          <div className="signature-report-process-grid">
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
                Effectuez un paiement unique dans un
                environnement sécurisé.
              </p>
            </article>

            <article>
              <span>
                03
              </span>

              <h3>
                Votre rapport Signature
              </h3>

              <p>
                Recevez votre analyse astrologique
                personnalisée de 58 pages en format
                PDF.
              </p>
            </article>
          </div>
        </section>

        <section className="signature-report-testimonials">
          <div className="signature-report-heading signature-report-heading--center">
            <span className="signature-report-kicker">
              Une lecture personnelle
            </span>

            <h2>
              Un rapport à lire et à relire
            </h2>
          </div>

          <div className="signature-report-testimonial-grid">
            {testimonials.map(
              (testimonial) => (
                <article
                  key={testimonial.author}
                >
                  <div
                    className="signature-report-stars-rating"
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

        <section className="signature-report-faq">
          <div className="signature-report-faq-heading">
            <span className="signature-report-kicker">
              Questions fréquentes
            </span>

            <h2>
              Avant de commander votre rapport
            </h2>

            <p>
              Retrouvez les réponses aux principales
              questions concernant le rapport Carte
              du ciel Signature.
            </p>
          </div>

          <div className="signature-report-faq-list">
            {faqItems.map(
              (item) => (
                <details
                  className="signature-report-faq-item"
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

        <section className="signature-report-final">
          <div
            className="signature-report-final-glow"
            aria-hidden="true"
          />

          <span className="signature-report-final-icon">
            ✦
          </span>

          <span className="signature-report-kicker">
            Votre histoire est inscrite dans votre ciel
          </span>

          <h2>
            Découvrez les 58 pages de votre rapport
            Signature
          </h2>

          <p>
            Recevez l’analyse astrologique la plus
            complète de Luna Astralis et explorez
            les grandes dynamiques de votre thème
            natal.
          </p>

          <div className="signature-report-final-price">
            <span>
              Paiement unique
            </span>

            <strong>
              79,99 $ US
            </strong>
          </div>

          <Link
            href="/carte-du-ciel#rapports-astrologiques"
            className="signature-report-primary-button signature-report-primary-button--large"
          >
            Commander mon rapport Signature

            <span aria-hidden="true">
              ✦
            </span>
          </Link>

          <div className="signature-report-security">
            <span aria-hidden="true">
              🔒
            </span>

            Paiement sécurisé · Aucun abonnement ·
            Rapport personnalisé
          </div>
        </section>

        <section className="signature-report-others">
          <h2>
            Comparez les autres rapports
          </h2>

          <div className="signature-report-other-grid">
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

            <Link href="/carte-du-ciel/premium">
              <span>
                ★
              </span>

              <div>
                <strong>
                  Rapport Premium
                </strong>

                <small>
                  40 pages · 49,99 $ US
                </small>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </AuthProvider>
  );
}
