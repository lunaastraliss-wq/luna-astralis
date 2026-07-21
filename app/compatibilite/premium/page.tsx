import type { Metadata } from "next";
import Link from "next/link";

import CompatibilityPremiumForm from "@/components/CompatibilityPremiumForm";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/compatibilite/premium";

const REPORT_PRICE = "49,99 $ US";

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
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Compatibilité Premium et synastrie | Luna Astralis",

    description:
      "Une analyse approfondie de la rencontre entre deux thèmes astraux.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const REPORT_FEATURES = [
  {
    icon: "✦",
    title: "Compatibilité globale",
    description:
      "Découvrez votre indice général ainsi que vos scores émotionnels, amoureux, mentaux et relationnels.",
  },
  {
    icon: "☾",
    title: "Lien émotionnel",
    description:
      "Comprenez vos besoins affectifs, vos sensibilités et la manière dont vous créez un climat de sécurité.",
  },
  {
    icon: "☿",
    title: "Communication",
    description:
      "Analysez votre façon de penser, d’échanger, de gérer les désaccords et de vous comprendre.",
  },
  {
    icon: "♀",
    title: "Compatibilité amoureuse",
    description:
      "Explorez vos langages amoureux, vos valeurs, vos attentes et votre manière de donner de l’affection.",
  },
  {
    icon: "♂",
    title: "Attirance et passion",
    description:
      "Découvrez votre alchimie, votre rythme de désir et les dynamiques qui nourrissent votre attirance.",
  },
  {
    icon: "♄",
    title: "Stabilité et durée",
    description:
      "Identifiez les forces qui soutiennent la relation et les défis pouvant influencer son évolution.",
  },
  {
    icon: "☉",
    title: "Vos deux profils",
    description:
      "Découvrez les principales énergies relationnelles que chaque personne apporte naturellement au lien.",
  },
  {
    icon: "△",
    title: "Aspects de synastrie",
    description:
      "Comprenez les interactions entre vos planètes, leurs harmonies, leurs tensions et leurs complémentarités.",
  },
];

const SCORE_ITEMS = [
  {
    icon: "☾",
    title: "Lien émotionnel",
    text: "Besoins affectifs, compréhension et sécurité.",
  },
  {
    icon: "☿",
    title: "Communication",
    text: "Dialogue, écoute et gestion des différences.",
  },
  {
    icon: "♀",
    title: "Affinité amoureuse",
    text: "Tendresse, valeurs et langages affectifs.",
  },
  {
    icon: "♂",
    title: "Attirance",
    text: "Désir, passion et dynamique physique.",
  },
  {
    icon: "♄",
    title: "Stabilité",
    text: "Engagement, continuité et construction.",
  },
  {
    icon: "♃",
    title: "Évolution",
    text: "Apprentissage et croissance commune.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Indiquez vos naissances",
    description:
      "Entrez le prénom, la date, l’heure et le lieu de naissance des deux personnes.",
  },
  {
    number: "02",
    title: "Nous calculons vos thèmes",
    description:
      "Les positions planétaires, les maisons et les aspects des deux thèmes sont calculés.",
  },
  {
    number: "03",
    title: "Recevez votre rapport",
    description:
      "Votre rapport PDF personnalisé est généré et offert en téléchargement après le paiement.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Quelle est la différence avec la compatibilité gratuite ?",

    answer:
      "La compatibilité gratuite compare deux signes astrologiques. La compatibilité Premium utilise la date, l’heure et le lieu de naissance des deux personnes afin de comparer leurs thèmes astraux complets.",
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
      "Certaines positions planétaires peuvent être calculées sans heure précise, mais l’Ascendant et les maisons astrologiques risquent d’être inexacts ou indisponibles.",
  },
  {
    question:
      "Le score détermine-t-il si une relation va fonctionner ?",

    answer:
      "Non. Les scores servent à présenter les grandes tendances astrologiques. Ils ne constituent pas un verdict et ne remplacent pas l’expérience, les choix et le libre arbitre des deux personnes.",
  },
  {
    question:
      "Comment vais-je recevoir mon rapport ?",

    answer:
      "Le rapport personnalisé sera généré au format PDF après le paiement et pourra être téléchargé directement.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",

  name:
    "Rapport de compatibilité astrologique Premium",

  description:
    "Rapport PDF personnalisé comparant deux thèmes astraux complets et leurs principales dynamiques relationnelles.",

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

export default function CompatibilityPremiumPage() {
  return (
    <div className="compat-premium-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="compat-premium-main">
        <section
          className="compat-premium-hero"
          aria-labelledby="compat-premium-title"
        >
          <div className="compat-premium-hero-glow" />

          <div className="compat-premium-badge">
            ✨ Rapport astrologique personnalisé
          </div>

          <p className="compat-premium-eyebrow">
            Deux thèmes natals • Une rencontre unique
          </p>

          <h1 id="compat-premium-title">
            Découvrez votre
            <span> compatibilité Premium</span>
          </h1>

          <p className="compat-premium-hero-text">
            Explorez en profondeur la rencontre entre
            vos deux thèmes astraux, vos affinités
            naturelles, vos défis et votre potentiel
            d’évolution.
          </p>

          <div className="compat-premium-hero-actions">
            <Link
              href="#apercu"
              className="compat-premium-button compat-premium-button-primary"
            >
              Voir le contenu du rapport
            </Link>

            <Link
              href="#commande"
              className="compat-premium-button compat-premium-button-secondary"
            >
              Commencer mon analyse
            </Link>
          </div>

          <div className="compat-premium-hero-trust">
            <span>✓ Deux thèmes astraux</span>
            <span>✓ Rapport PDF personnalisé</span>
            <span>✓ Téléchargement immédiat</span>
          </div>

          <div
            className="compat-premium-orbits"
            aria-hidden="true"
          >
            <div className="compat-premium-orbit compat-premium-orbit-left">
              <span>☾</span>
            </div>

            <div className="compat-premium-orbit-center">
              <span>♥</span>
            </div>

            <div className="compat-premium-orbit compat-premium-orbit-right">
              <span>☾</span>
            </div>
          </div>
        </section>

        <section className="compat-premium-intro">
          <div className="compat-premium-section-heading">
            <span className="compat-premium-section-label">
              Au-delà des signes
            </span>

            <h2>
              Une relation ne se résume jamais à deux
              signes astrologiques
            </h2>

            <p>
              Deux personnes partageant les mêmes signes
              peuvent vivre une dynamique complètement
              différente. La synastrie compare les
              planètes, les émotions, les besoins
              relationnels et les interactions présentes
              entre deux thèmes natals.
            </p>
          </div>

          <div className="compat-premium-comparison">
            <article className="compat-premium-comparison-card">
              <div className="compat-premium-comparison-icon">
                ❤️
              </div>

              <span className="compat-premium-comparison-kicker">
                Test gratuit
              </span>

              <h3>Compatibilité par signes</h3>

              <p>
                Une première lecture simple et rapide
                basée sur les deux signes solaires.
              </p>

              <ul>
                <li>Deux signes astrologiques</li>
                <li>Un score général</li>
                <li>Une interprétation courte</li>
                <li>Résultat gratuit et partageable</li>
              </ul>

              <Link
                href="/compatibilite"
                className="compat-premium-text-link"
              >
                Faire le test gratuit
                <span aria-hidden="true"> →</span>
              </Link>
            </article>

            <article className="compat-premium-comparison-card compat-premium-comparison-featured">
              <div className="compat-premium-comparison-label">
                Analyse approfondie
              </div>

              <div className="compat-premium-comparison-icon">
                🌙
              </div>

              <span className="compat-premium-comparison-kicker">
                Rapport Premium
              </span>

              <h3>Synastrie personnalisée</h3>

              <p>
                Une comparaison complète calculée à partir
                des informations de naissance des deux
                personnes.
              </p>

              <ul>
                <li>Deux thèmes astraux complets</li>
                <li>Planètes et aspects de synastrie</li>
                <li>Scores relationnels détaillés</li>
                <li>Rapport PDF d’environ 50 pages</li>
              </ul>

              <Link
                href="#commande"
                className="compat-premium-text-link"
              >
                Découvrir votre relation
                <span aria-hidden="true"> →</span>
              </Link>
            </article>
          </div>
        </section>

        <section
          id="apercu"
          className="compat-premium-report"
        >
          <div className="compat-premium-section-heading">
            <span className="compat-premium-section-label">
              Votre rapport personnalisé
            </span>

            <h2>
              Une exploration complète de votre relation
            </h2>

            <p>
              Chaque section vous aide à comprendre
              pourquoi certaines énergies s’harmonisent
              spontanément, tandis que d’autres demandent
              davantage d’écoute, d’adaptation et de
              conscience.
            </p>
          </div>

          <div className="compat-premium-report-showcase">
            <div className="compat-premium-report-preview">
              <div className="compat-premium-preview-top">
                <span>Compatibilité Premium</span>
                <span>Rapport personnalisé</span>
              </div>

              <div className="compat-premium-preview-content">
                <p className="compat-premium-preview-kicker">
                  Votre rapport de
                </p>

                <h3>Synastrie</h3>

                <p>
                  Deux cartes du ciel, une rencontre
                  unique.
                </p>

                <div className="compat-premium-preview-orbits">
                  <div>
                    <span>☾</span>
                  </div>

                  <strong>&amp;</strong>

                  <div>
                    <span>☾</span>
                  </div>
                </div>

                <div className="compat-premium-preview-names">
                  <span>Première personne</span>
                  <span>Deuxième personne</span>
                </div>

                <div className="compat-premium-preview-footer">
                  Luna Astralis
                </div>
              </div>
            </div>

            <div className="compat-premium-report-copy">
              <span className="compat-premium-report-badge">
                Environ 50 pages
              </span>

              <h3>
                Bien plus qu’un simple pourcentage
              </h3>

              <p>
                Votre rapport ne se limite pas à annoncer
                un résultat. Il explique le fonctionnement
                profond de votre relation et présente des
                clés concrètes pour mieux comprendre vos
                différences.
              </p>

              <div className="compat-premium-report-highlights">
                <div>
                  <strong>2</strong>
                  <span>thèmes astraux</span>
                </div>

                <div>
                  <strong>6</strong>
                  <span>scores principaux</span>
                </div>

                <div>
                  <strong>50</strong>
                  <span>pages environ</span>
                </div>
              </div>

              <ul className="compat-premium-check-list">
                <li>Vos deux profils relationnels</li>
                <li>Votre indice général de compatibilité</li>
                <li>Vos principales interactions planétaires</li>
                <li>Vos forces naturelles et vos défis</li>
                <li>Des conseils personnalisés pour votre relation</li>
              </ul>

              <div className="compat-premium-hero-actions">
                <a
                  href="/reports/apercu-rapport-compatibilite-premium.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="compat-premium-button compat-premium-button-primary"
                >
                  📖 Voir un aperçu du rapport
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="compat-premium-scores">
          <div className="compat-premium-section-heading">
            <span className="compat-premium-section-label">
              Vue d’ensemble
            </span>

            <h2>
              Six dimensions essentielles de votre lien
            </h2>

            <p>
              Votre indice général est accompagné de
              plusieurs scores permettant de distinguer
              les différentes facettes de votre relation.
            </p>
          </div>

          <div className="compat-premium-score-panel">
            <div className="compat-premium-score-main">
              <span>
                Indice général de compatibilité
              </span>

              <strong>Votre score</strong>

              <p>
                Une lecture synthétique avant d’explorer
                chaque connexion en profondeur.
              </p>

              <div className="compat-premium-score-line">
                <span />
              </div>
            </div>

            <div className="compat-premium-score-grid">
              {SCORE_ITEMS.map((item) => (
                <article
                  className="compat-premium-score-card"
                  key={item.title}
                >
                  <div className="compat-premium-score-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="compat-premium-contents">
          <div className="compat-premium-section-heading">
            <span className="compat-premium-section-label">
              Analyse détaillée
            </span>

            <h2>
              Tout ce que votre synastrie vous révèle
            </h2>

            <p>
              Le rapport relie vos placements personnels
              aux interactions astrologiques qui
              influencent concrètement votre relation.
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
        </section>

        <section className="compat-premium-planets">
          <div className="compat-premium-planets-content">
            <span className="compat-premium-section-label">
              Vos planètes en relation
            </span>

            <h2>
              Comprenez ce qui vous rapproche, vous
              stimule ou vous déstabilise
            </h2>

            <p>
              Chaque planète révèle une dimension
              particulière de votre dynamique. Leur
              rencontre montre comment vos personnalités,
              vos émotions et vos besoins se répondent.
            </p>

            <div className="compat-premium-planet-list">
              <div>
                <span>☉</span>
                <strong>Soleil</strong>
                <p>Identité et expression personnelle</p>
              </div>

              <div>
                <span>☾</span>
                <strong>Lune</strong>
                <p>Émotions et sécurité affective</p>
              </div>

              <div>
                <span>☿</span>
                <strong>Mercure</strong>
                <p>Communication et compréhension</p>
              </div>

              <div>
                <span>♀</span>
                <strong>Vénus</strong>
                <p>Amour, harmonie et séduction</p>
              </div>

              <div>
                <span>♂</span>
                <strong>Mars</strong>
                <p>Désir, action et attraction</p>
              </div>

              <div>
                <span>♄</span>
                <strong>Saturne</strong>
                <p>Stabilité, limites et engagement</p>
              </div>
            </div>
          </div>

          <div
            className="compat-premium-planets-visual"
            aria-hidden="true"
          >
            <div className="compat-premium-planet-orbit compat-premium-planet-orbit-one">
              <span>☾</span>
            </div>

            <div className="compat-premium-planet-orbit compat-premium-planet-orbit-two">
              <span>♀</span>
            </div>

            <div className="compat-premium-planet-center">
              <span>✦</span>
            </div>
          </div>
        </section>

        <section className="compat-premium-process">
          <div className="compat-premium-section-heading">
            <span className="compat-premium-section-label">
              Simple et immédiat
            </span>

            <h2>Comment obtenir votre rapport ?</h2>

            <p>
              Quelques minutes suffisent pour transmettre
              vos informations et lancer la création de
              votre analyse personnalisée.
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
  className="compat-premium-form-section"
>
  <div className="compat-premium-section-heading">
    <span className="compat-premium-section-label">
      Commencer votre analyse
    </span>

    <h2>
      Deux personnes, deux thèmes astraux, une relation
      unique
    </h2>

    <p>
      Remplissez les informations de naissance des deux
      personnes afin de préparer votre rapport de
      compatibilité Premium.
    </p>
  </div>

  <CompatibilityPremiumForm />

  <div className="compatibility-premium-price-summary">
    <div className="compatibility-premium-price-main">
      <span>Compatibilité Premium</span>

      <strong>{REPORT_PRICE}</strong>

      <small>Paiement unique</small>
    </div>

    <ul>
      <li>Rapport PDF personnalisé</li>
      <li>Deux thèmes astraux complets</li>
      <li>Environ 50 pages</li>
      <li>Scores relationnels détaillés</li>
      <li>Aspects de synastrie</li>
      <li>Téléchargement après le paiement</li>
    </ul>
  </div>
</section>

        <section className="compat-premium-faq">
          <div className="compat-premium-section-heading">
            <span className="compat-premium-section-label">
              Questions fréquentes
            </span>

            <h2>
              Tout savoir avant de commencer
            </h2>
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

        <p className="compat-premium-disclaimer">
          L’astrologie est proposée comme un outil
          symbolique d’exploration personnelle et
          relationnelle. Elle ne remplace pas un avis
          médical, psychologique, juridique ou financier.
        </p>
      </main>
    </div>
  );
}
