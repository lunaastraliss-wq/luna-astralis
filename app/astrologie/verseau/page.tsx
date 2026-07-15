import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/verseau";

export const metadata: Metadata = {
  title:
    "Verseau : personnalité, amour, travail et compatibilités | Luna Astralis",

  description:
    "Découvrez le signe du Verseau en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Uranus, Saturne, élément Air, Lune et Ascendant Verseau.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Le Verseau en astrologie : personnalité, amour et compatibilités",
    description:
      "Guide complet du signe du Verseau : caractère, forces, défis, relations, carrière, Uranus, Saturne et principales compatibilités astrologiques.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le signe du Verseau | Luna Astralis",
    description:
      "Découvrez la personnalité du Verseau, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const AQUARIUS_TRAITS = [
  {
    title: "L’indépendance",
    symbol: "♒",
    text:
      "Le Verseau possède un fort besoin de liberté et d’autonomie. Il cherche à penser par lui-même, à suivre sa propre voie et à ne pas se laisser enfermer dans des attentes trop rigides.",
  },
  {
    title: "L’originalité",
    symbol: "♅",
    text:
      "Ce signe est naturellement attiré par les idées nouvelles, les approches différentes et les solutions innovantes. Il peut percevoir des possibilités que les autres n’envisagent pas encore.",
  },
  {
    title: "La vision collective",
    symbol: "✦",
    text:
      "Le Verseau s’intéresse souvent à l’évolution de la société, aux communautés et aux projets qui peuvent améliorer la vie collective. Il cherche à relier l’individuel à une vision plus vaste.",
  },
];

const AQUARIUS_STRENGTHS = [
  "Originalité",
  "Indépendance",
  "Ouverture d’esprit",
  "Créativité",
  "Vision d’avenir",
  "Esprit humaniste",
];

const AQUARIUS_CHALLENGES = [
  "Détachement émotionnel",
  "Imprévisibilité",
  "Rigidité dans ses idées",
  "Besoin excessif d’indépendance",
  "Difficulté avec les contraintes",
  "Tendance à intellectualiser ses émotions",
];

const COMPATIBILITIES = [
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "Les Gémeaux stimulent le Verseau par leur curiosité, leur souplesse et leur goût pour les échanges. Leur relation peut être légère, intellectuelle et très vivante.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "La Balance partage avec le Verseau un besoin de dialogue, d’ouverture et de coopération. Ensemble, ils peuvent créer un lien harmonieux et tourné vers l’avenir.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "Le Sagittaire et le Verseau partagent un grand besoin de liberté, de découverte et d’indépendance. Leur relation peut être stimulante, originale et peu conventionnelle.",
  },
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "Le Bélier apporte énergie, audace et spontanéité. Le Verseau lui offre en retour créativité, vision et capacité à explorer de nouvelles directions.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Quelles sont les principales qualités du Verseau ?",
    answer:
      "Le Verseau est souvent associé à l’originalité, à l’indépendance, à l’ouverture d’esprit, à la créativité, à la vision d’avenir et à l’intérêt pour les projets collectifs.",
  },
  {
    question:
      "Quels sont les principaux défis du Verseau ?",
    answer:
      "Le Verseau peut parfois sembler distant, imprévisible ou très attaché à ses propres idées. Son évolution passe par une plus grande présence émotionnelle, davantage de souplesse et une meilleure écoute des besoins relationnels.",
  },
  {
    question:
      "Quelle planète gouverne le Verseau ?",
    answer:
      "Le Verseau est traditionnellement associé à Saturne et, dans l’astrologie moderne, à Uranus. Saturne représente la structure et la responsabilité, tandis qu’Uranus symbolise l’innovation, la liberté et le changement.",
  },
  {
    question:
      "Quel est l’élément du Verseau ?",
    answer:
      "Le Verseau appartient à l’élément Air. Cet élément est lié à la pensée, à la communication, aux idées, aux relations et à la circulation des connaissances.",
  },
  {
    question:
      "Comment savoir si le Verseau est important dans mon thème natal ?",
    answer:
      "Le Verseau peut être important si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet aussi de découvrir la maison astrologique occupée par le Verseau.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Le Verseau en astrologie : personnalité, amour, travail et compatibilités",
  description:
    "Guide complet consacré au signe du Verseau, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
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

export default function VerseauAstrologiePage() {
  return (
    <div className="aquarius-page">
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

      <main className="aquarius-wrap">
        <section className="aquarius-hero">
          <div className="aquarius-badge">
            ♒ Onzième signe du zodiaque
          </div>

          <h1>
            Le Verseau en astrologie
          </h1>

          <p className="aquarius-hero-lead">
            Le Verseau symbolise la liberté, l’innovation,
            l’originalité et la vision collective. Ce signe
            d’Air cherche à penser autrement, à dépasser les
            conventions et à imaginer de nouvelles façons de
            construire l’avenir.
          </p>

          <div className="aquarius-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="aquarius-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#personnalite-verseau"
              className="aquarius-secondary-button"
            >
              Découvrir le Verseau
            </a>
          </div>
        </section>

        <article className="aquarius-content">
          <section id="personnalite-verseau">
            <span className="aquarius-kicker">
              Personnalité du Verseau
            </span>

            <h2>
              Que représente le signe du Verseau ?
            </h2>

            <p>
              Le Verseau est le onzième signe du zodiaque. Il
              représente l’indépendance, l’innovation, les
              idées collectives, les changements et la capacité
              à envisager un avenir différent.
            </p>

            <p>
              Une personne marquée par le Verseau cherche
              généralement à préserver sa liberté de pensée.
              Elle aime comprendre les systèmes, remettre en
              question les habitudes et explorer des solutions
              nouvelles.
            </p>

            <p>
              Cette énergie apporte originalité, intelligence
              et ouverture. Elle demande toutefois d’apprendre
              à rester présente dans les liens, à écouter les
              émotions et à ne pas confondre indépendance et
              éloignement affectif.
            </p>
          </section>

          <section>
            <h2>
              Les grandes caractéristiques du Verseau
            </h2>

            <div className="aquarius-info-grid">
              {AQUARIUS_TRAITS.map((item) => (
                <article
                  className="aquarius-info-card"
                  key={item.title}
                >
                  <span className="aquarius-card-icon">
                    {item.symbol}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Élément, modalité et planètes maîtresses
            </h2>

            <div className="aquarius-pillars">
              <div className="aquarius-pillar-card">
                <div className="aquarius-pillar-symbol">
                  🌬️
                </div>

                <h3>Élément Air</h3>

                <p>
                  L’Air apporte réflexion, communication,
                  curiosité et besoin d’échanges. Il pousse le
                  Verseau à comprendre le monde par les idées
                  et les réseaux.
                </p>
              </div>

              <div className="aquarius-pillar-card">
                <div className="aquarius-pillar-symbol">
                  ◆
                </div>

                <h3>Modalité fixe</h3>

                <p>
                  La modalité fixe favorise la persévérance,
                  la fidélité aux convictions et la capacité à
                  soutenir une vision. Elle peut aussi renforcer
                  l’entêtement intellectuel.
                </p>
              </div>

              <div className="aquarius-pillar-card">
                <div className="aquarius-pillar-symbol">
                  ♅
                </div>

                <h3>Uranus et Saturne</h3>

                <p>
                  Uranus représente l’innovation et la liberté.
                  Saturne apporte structure et responsabilité.
                  Ensemble, ils relient changement et
                  construction durable.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis du Verseau
            </h2>

            <div className="aquarius-strengths-grid">
              <div className="aquarius-list-card">
                <span className="aquarius-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Ce que le Verseau apporte
                </h3>

                <ul>
                  {AQUARIUS_STRENGTHS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="aquarius-list-card">
                <span className="aquarius-kicker">
                  Points d’attention
                </span>

                <h3>
                  Ce que le Verseau apprend
                </h3>

                <ul>
                  {AQUARIUS_CHALLENGES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Le Verseau en amour
            </h2>

            <p>
              En amour, le Verseau recherche généralement une
              relation fondée sur la liberté, l’amitié, le
              dialogue et le respect de l’individualité. Il a
              besoin de sentir qu’il peut rester lui-même.
            </p>

            <p>
              Il apprécie souvent les partenaires curieux,
              ouverts et capables de partager des idées, des
              projets ou une vision commune. Il peut créer des
              relations originales qui ne suivent pas toujours
              les modèles traditionnels.
            </p>

            <p>
              Son principal défi consiste à ne pas rester
              uniquement dans l’analyse ou la distance. Une
              relation durable lui demande de montrer ses
              émotions, de rassurer l’autre et d’accepter une
              certaine forme de vulnérabilité.
            </p>
          </section>

          <section>
            <h2>
              Le Verseau au travail
            </h2>

            <p>
              Dans la vie professionnelle, le Verseau se
              distingue souvent par son originalité, sa vision
              globale et sa capacité à proposer des solutions
              différentes.
            </p>

            <p>
              Il peut être particulièrement efficace dans les
              domaines liés aux technologies, à la recherche,
              aux sciences, à l’innovation, aux communications,
              aux réseaux, aux organismes sociaux ou aux
              projets collectifs.
            </p>

            <p>
              Les environnements trop rigides ou hiérarchiques
              peuvent réduire sa motivation. Il gagne toutefois
              à structurer ses idées, à respecter les étapes et
              à maintenir une continuité dans ses projets.
            </p>
          </section>

          <section>
            <h2>
              Soleil, Lune et Ascendant en Verseau
            </h2>

            <div className="aquarius-pillars">
              <div className="aquarius-pillar-card">
                <div className="aquarius-pillar-symbol">
                  ☀️
                </div>

                <h3>Soleil en Verseau</h3>

                <p>
                  Le Soleil en Verseau construit son identité
                  par l’indépendance, l’originalité, les idées
                  nouvelles et le désir de contribuer à une
                  vision collective.
                </p>

                <Link
                  href="/astrologie/soleil"
                  className="aquarius-text-link"
                >
                  Comprendre le Soleil
                </Link>
              </div>

              <div className="aquarius-pillar-card">
                <div className="aquarius-pillar-symbol">
                  🌙
                </div>

                <h3>Lune en Verseau</h3>

                <p>
                  La Lune en Verseau a besoin d’espace, de
                  liberté et de stimulation intellectuelle pour
                  retrouver son équilibre émotionnel.
                </p>

                <Link
                  href="/astrologie/lune"
                  className="aquarius-text-link"
                >
                  Comprendre la Lune
                </Link>
              </div>

              <div className="aquarius-pillar-card">
                <div className="aquarius-pillar-symbol">
                  ↑
                </div>

                <h3>Ascendant Verseau</h3>

                <p>
                  L’Ascendant Verseau donne une présence
                  originale, indépendante et parfois
                  imprévisible. Il aborde généralement la vie
                  avec curiosité et liberté.
                </p>

                <Link
                  href="/astrologie/ascendant"
                  className="aquarius-text-link"
                >
                  Comprendre l’Ascendant
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les compatibilités du Verseau
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
              naturellement plus fluides lorsqu’elles partagent
              un besoin de liberté, de dialogue, d’innovation
              et de stimulation intellectuelle.
            </p>

            <div className="aquarius-compatibility-grid">
              {COMPATIBILITIES.map((item) => (
                <article
                  className="aquarius-compatibility-card"
                  key={item.sign}
                >
                  <div className="aquarius-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Verseau et {item.sign}
                  </h3>

                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Le Verseau dans votre thème natal
            </h2>

            <p>
              Le Verseau ne concerne pas uniquement les
              personnes nées sous ce signe. Chaque thème natal
              contient le Verseau dans une maison astrologique
              particulière.
            </p>

            <p>
              Cette maison montre le domaine de vie dans lequel
              vous cherchez à vous libérer, à innover, à penser
              autrement ou à contribuer à une vision collective.
              La présence de planètes en Verseau renforce
              également cette énergie.
            </p>

            <div className="aquarius-cta-card">
              <div>
                <span className="aquarius-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Où se trouve le Verseau dans votre carte du ciel ?
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
                className="aquarius-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="aquarius-faq">
            <span className="aquarius-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur le Verseau
            </h2>

            <div className="aquarius-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="aquarius-faq-item"
                  key={item.question}
                >
                  <summary>{item.question}</summary>

                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="aquarius-disclaimer">
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
