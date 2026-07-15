import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/vierge";

export const metadata: Metadata = {
  title:
    "Vierge : personnalité, amour, travail et compatibilités | Luna Astralis",

  description:
    "Découvrez le signe de la Vierge en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Mercure, élément Terre, Lune et Ascendant Vierge.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "La Vierge en astrologie : personnalité, amour et compatibilités",
    description:
      "Guide complet du signe de la Vierge : caractère, forces, défis, relations, carrière, planète Mercure et principales compatibilités astrologiques.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le signe de la Vierge | Luna Astralis",
    description:
      "Découvrez la personnalité de la Vierge, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const VIRGO_TRAITS = [
  {
    title: "Le sens de l’analyse",
    symbol: "☿",
    text:
      "La Vierge observe attentivement les détails et cherche à comprendre comment les choses fonctionnent. Son esprit analytique lui permet de repérer rapidement ce qui peut être amélioré.",
  },
  {
    title: "Le sens du service",
    symbol: "✦",
    text:
      "Ce signe aime se rendre utile et apporter des solutions concrètes. Il exprime souvent son affection en aidant, en organisant ou en facilitant la vie des personnes qui l’entourent.",
  },
  {
    title: "La recherche de précision",
    symbol: "◇",
    text:
      "La Vierge apprécie la clarté, l’ordre et le travail bien fait. Elle cherche généralement à progresser par la méthode, la discipline et l’attention portée aux petites choses.",
  },
];

const VIRGO_STRENGTHS = [
  "Sens de l’analyse",
  "Fiabilité",
  "Organisation",
  "Précision",
  "Discrétion",
  "Sens du service",
];

const VIRGO_CHALLENGES = [
  "Perfectionnisme",
  "Autocritique",
  "Anxiété",
  "Difficulté à lâcher prise",
  "Tendance à trop analyser",
  "Exigence envers soi et les autres",
];

const COMPATIBILITIES = [
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "Le Taureau partage avec la Vierge un besoin de stabilité, de réalisme et de sécurité. Cette relation peut se construire lentement sur des bases solides et durables.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "Le Capricorne apprécie le sérieux, l’organisation et la fiabilité de la Vierge. Ensemble, ils peuvent bâtir des projets structurés et une relation fondée sur la confiance.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "Le Cancer apporte sensibilité, douceur et profondeur émotionnelle. La Vierge peut offrir en retour soutien, stabilité et attention aux besoins du quotidien.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "Le Scorpion peut apprécier la discrétion et la loyauté de la Vierge. Leur relation peut favoriser la confiance, l’engagement et une compréhension profonde des besoins de l’autre.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Quelles sont les principales qualités de la Vierge ?",
    answer:
      "La Vierge est souvent associée à l’intelligence pratique, à l’organisation, à la précision, à la fiabilité, à la discrétion et au désir de se rendre utile.",
  },
  {
    question:
      "Quels sont les principaux défis de la Vierge ?",
    answer:
      "La Vierge peut parfois devenir perfectionniste, trop critique envers elle-même ou préoccupée par les détails. Son évolution passe souvent par davantage de souplesse, de confiance et de bienveillance envers elle-même.",
  },
  {
    question:
      "Quelle planète gouverne la Vierge ?",
    answer:
      "La Vierge est gouvernée par Mercure, planète traditionnellement associée à la pensée, à l’analyse, à la communication, aux apprentissages et à la capacité d’organiser l’information.",
  },
  {
    question:
      "Quel est l’élément de la Vierge ?",
    answer:
      "La Vierge appartient à l’élément Terre. Cet élément est lié au réalisme, à la stabilité, au sens pratique, à l’organisation et à la construction de résultats concrets.",
  },
  {
    question:
      "Comment savoir si la Vierge est importante dans mon thème natal ?",
    answer:
      "La Vierge peut être importante si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet également de découvrir la maison astrologique occupée par la Vierge.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "La Vierge en astrologie : personnalité, amour, travail et compatibilités",
  description:
    "Guide complet consacré au signe de la Vierge, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
  inLanguage: "fr-CA",
  mainEntityOfPage: PAGE_URL,
  publisher: {
    "@type": "Organization",
    name: "Luna Astralis",
    url: "https://luna-astralis.app",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ViergeAstrologiePage() {
  return (
    <div className="virgo-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="virgo-wrap">
        <section className="virgo-hero">
          <div className="virgo-badge">
            ♍ Sixième signe du zodiaque
          </div>

          <h1>
            La Vierge en astrologie
          </h1>

          <p className="virgo-hero-lead">
            La Vierge symbolise l’analyse, l’organisation,
            l’amélioration et le sens du service. Ce signe de
            Terre cherche à comprendre les détails, à créer de
            l’ordre et à rendre les choses plus utiles,
            efficaces et harmonieuses.
          </p>

          <div className="virgo-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="virgo-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#personnalite-vierge"
              className="virgo-secondary-button"
            >
              Découvrir la Vierge
            </a>
          </div>
        </section>

        <article className="virgo-content">
          <section id="personnalite-vierge">
            <span className="virgo-kicker">
              Personnalité de la Vierge
            </span>

            <h2>
              Que représente le signe de la Vierge ?
            </h2>

            <p>
              La Vierge est le sixième signe du zodiaque. Elle
              représente l’analyse, la méthode, le sens du
              détail, l’organisation et la volonté de rendre
              les choses plus claires et plus efficaces.
            </p>

            <p>
              Une personne marquée par la Vierge cherche
              généralement à comprendre ce qui peut être
              amélioré. Elle observe, compare et organise afin
              de trouver des solutions concrètes aux problèmes
              du quotidien.
            </p>

            <p>
              Cette énergie apporte précision, fiabilité et
              discernement. Elle demande toutefois d’apprendre
              à accepter l’imperfection, à moins se juger et à
              reconnaître que tout ne peut pas toujours être
              contrôlé ou corrigé.
            </p>
          </section>

          <section>
            <h2>
              Les grandes caractéristiques de la Vierge
            </h2>

            <div className="virgo-info-grid">
              {VIRGO_TRAITS.map((item) => (
                <article
                  className="virgo-info-card"
                  key={item.title}
                >
                  <span className="virgo-card-icon">
                    {item.symbol}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Élément, modalité et planète maîtresse
            </h2>

            <div className="virgo-pillars">
              <div className="virgo-pillar-card">
                <div className="virgo-pillar-symbol">
                  🌿
                </div>

                <h3>
                  Élément Terre
                </h3>

                <p>
                  La Terre apporte réalisme, patience,
                  stabilité et sens pratique. Elle pousse la
                  Vierge à transformer ses idées en solutions
                  concrètes et utiles.
                </p>
              </div>

              <div className="virgo-pillar-card">
                <div className="virgo-pillar-symbol">
                  ◇
                </div>

                <h3>
                  Modalité mutable
                </h3>

                <p>
                  La modalité mutable favorise l’adaptation, la
                  souplesse et la capacité d’ajuster une méthode
                  lorsque les circonstances évoluent.
                </p>
              </div>

              <div className="virgo-pillar-card">
                <div className="virgo-pillar-symbol">
                  ☿
                </div>

                <h3>
                  Planète Mercure
                </h3>

                <p>
                  Mercure représente la pensée, l’analyse, les
                  apprentissages et la communication. Elle
                  renforce la capacité de la Vierge à observer,
                  classer et comprendre.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis de la Vierge
            </h2>

            <div className="virgo-strengths-grid">
              <div className="virgo-list-card">
                <span className="virgo-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Ce que la Vierge apporte
                </h3>

                <ul>
                  {VIRGO_STRENGTHS.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="virgo-list-card">
                <span className="virgo-kicker">
                  Points d’attention
                </span>

                <h3>
                  Ce que la Vierge apprend
                </h3>

                <ul>
                  {VIRGO_CHALLENGES.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              La Vierge en amour
            </h2>

            <p>
              En amour, la Vierge recherche généralement une
              relation stable, sincère et construite sur la
              confiance. Elle peut être discrète dans
              l’expression de ses sentiments, mais elle montre
              souvent son affection par des gestes concrets.
            </p>

            <p>
              Elle remarque les détails, se souvient des besoins
              de l’autre et cherche naturellement à rendre la
              relation plus fluide. Sa loyauté se manifeste
              souvent par sa présence, son écoute et son désir
              d’aider.
            </p>

            <p>
              Son principal défi consiste à ne pas analyser
              constamment la relation ou chercher à corriger
              l’autre. Une relation durable lui demande
              d’accepter davantage la vulnérabilité,
              l’imprévu et les imperfections humaines.
            </p>
          </section>

          <section>
            <h2>
              La Vierge au travail
            </h2>

            <p>
              Dans la vie professionnelle, la Vierge se
              distingue souvent par sa rigueur, son sens de
              l’organisation et sa capacité à traiter des
              informations complexes avec précision.
            </p>

            <p>
              Elle peut être particulièrement efficace dans les
              domaines liés à l’analyse, à la santé, à
              l’administration, à la comptabilité, à la
              recherche, à la rédaction, à l’enseignement, à
              l’organisation ou au soutien technique.
            </p>

            <p>
              Elle apprécie généralement les environnements où
              son travail possède une utilité réelle. Elle gagne
              toutefois à reconnaître ses réussites et à ne pas
              retarder inutilement un projet par peur qu’il ne
              soit pas parfaitement terminé.
            </p>
          </section>

          <section>
            <h2>
              Soleil, Lune et Ascendant en Vierge
            </h2>

            <div className="virgo-pillars">
              <div className="virgo-pillar-card">
                <div className="virgo-pillar-symbol">
                  ☀️
                </div>

                <h3>
                  Soleil en Vierge
                </h3>

                <p>
                  Le Soleil en Vierge construit son identité par
                  l’analyse, la recherche d’amélioration, le
                  travail précis et le désir de se rendre utile.
                </p>

                <Link
                  href="/astrologie/soleil"
                  className="virgo-text-link"
                >
                  Comprendre le Soleil
                </Link>
              </div>

              <div className="virgo-pillar-card">
                <div className="virgo-pillar-symbol">
                  🌙
                </div>

                <h3>
                  Lune en Vierge
                </h3>

                <p>
                  La Lune en Vierge a besoin d’ordre, de clarté
                  et de repères concrets pour retrouver son
                  équilibre émotionnel et calmer ses
                  préoccupations.
                </p>

                <Link
                  href="/astrologie/lune"
                  className="virgo-text-link"
                >
                  Comprendre la Lune
                </Link>
              </div>

              <div className="virgo-pillar-card">
                <div className="virgo-pillar-symbol">
                  ↑
                </div>

                <h3>
                  Ascendant Vierge
                </h3>

                <p>
                  L’Ascendant Vierge donne une présence
                  discrète, attentive et observatrice. Il
                  aborde généralement la vie avec prudence,
                  méthode et sens pratique.
                </p>

                <Link
                  href="/astrologie/ascendant"
                  className="virgo-text-link"
                >
                  Comprendre l’Ascendant
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les compatibilités de la Vierge
            </h2>

            <p>
              Les compatibilités astrologiques ne reposent
              jamais uniquement sur le signe solaire. La Lune,
              Vénus, Mars, l’Ascendant et les aspects entre les
              deux thèmes apportent des informations
              essentielles.
            </p>

            <p>
              Certaines associations peuvent néanmoins sembler
              naturellement plus harmonieuses lorsqu’elles
              partagent un besoin de stabilité, de fidélité,
              d’organisation et de sécurité émotionnelle.
            </p>

            <div className="virgo-compatibility-grid">
              {COMPATIBILITIES.map((item) => (
                <article
                  className="virgo-compatibility-card"
                  key={item.sign}
                >
                  <div className="virgo-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Vierge et {item.sign}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              La Vierge dans votre thème natal
            </h2>

            <p>
              La Vierge ne concerne pas uniquement les
              personnes nées sous ce signe. Chaque thème natal
              contient la Vierge dans une maison astrologique
              particulière.
            </p>

            <p>
              Cette maison montre le domaine de vie dans lequel
              vous cherchez à organiser, analyser, améliorer ou
              vous rendre utile. La présence de planètes en
              Vierge renforce également cette énergie.
            </p>

            <div className="virgo-cta-card">
              <div>
                <span className="virgo-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Où se trouve la Vierge dans votre carte du ciel ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir vos signes, vos maisons
                  astrologiques, votre Ascendant et les
                  positions de vos planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="virgo-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="virgo-faq">
            <span className="virgo-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur la Vierge
            </h2>

            <div className="virgo-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="virgo-faq-item"
                  key={item.question}
                >
                  <summary>
                    {item.question}
                  </summary>

                  <p>
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <p className="virgo-disclaimer">
            L’astrologie est présentée comme un langage
            symbolique d’exploration personnelle. Elle ne
            remplace pas un avis médical, psychologique,
            juridique ou financier.
          </p>
        </article>
      </main>
    </div>
  );
}
