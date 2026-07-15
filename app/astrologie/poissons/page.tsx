import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/poissons";

export const metadata: Metadata = {
  title:
    "Poissons : personnalité, amour, travail et compatibilités | Luna Astralis",

  description:
    "Découvrez le signe des Poissons en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Neptune, Jupiter, élément Eau, Lune et Ascendant Poissons.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Les Poissons en astrologie : personnalité, amour et compatibilités",
    description:
      "Guide complet du signe des Poissons : caractère, forces, défis, relations, carrière, Neptune, Jupiter et principales compatibilités astrologiques.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le signe des Poissons | Luna Astralis",
    description:
      "Découvrez la personnalité des Poissons, leurs qualités, leurs défis, leurs relations et leurs compatibilités astrologiques.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const PISCES_TRAITS = [
  {
    title: "La sensibilité",
    symbol: "♓",
    text:
      "Les Poissons ressentent profondément les ambiances, les émotions et les besoins de leur entourage. Leur grande réceptivité leur permet souvent de comprendre ce qui n’est pas exprimé directement.",
  },
  {
    title: "L’imagination",
    symbol: "♆",
    text:
      "Ce signe possède un univers intérieur riche et créatif. Il peut transformer ses émotions, ses rêves et ses perceptions en musique, en images, en récits ou en projets inspirants.",
  },
  {
    title: "La compassion",
    symbol: "♡",
    text:
      "Les Poissons cherchent naturellement à soulager, accompagner et comprendre. Leur empathie peut créer des liens profonds, à condition qu’ils apprennent aussi à protéger leur propre énergie.",
  },
];

const PISCES_STRENGTHS = [
  "Intuition",
  "Empathie",
  "Imagination",
  "Compassion",
  "Créativité",
  "Capacité d’adaptation",
];

const PISCES_CHALLENGES = [
  "Hypersensibilité",
  "Difficulté à poser des limites",
  "Tendance à idéaliser",
  "Fuite devant la réalité",
  "Indécision",
  "Absorption des émotions des autres",
];

const COMPATIBILITIES = [
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "Le Cancer et les Poissons partagent une grande sensibilité et un besoin de sécurité émotionnelle. Leur relation peut être douce, intuitive et profondément affective.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "Le Scorpion apporte intensité, profondeur et protection. Les Poissons offrent en retour douceur, compréhension et ouverture émotionnelle.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "Le Taureau peut offrir aux Poissons stabilité, présence et sécurité concrète. Les Poissons enrichissent la relation par leur imagination et leur sensibilité.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "Le Capricorne apporte structure, réalisme et fiabilité. Les Poissons l’aident à se connecter davantage à son intuition, à ses émotions et à son imagination.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Quelles sont les principales qualités des Poissons ?",
    answer:
      "Les Poissons sont souvent associés à l’intuition, à l’empathie, à la compassion, à l’imagination, à la créativité et à une grande sensibilité émotionnelle.",
  },
  {
    question:
      "Quels sont les principaux défis des Poissons ?",
    answer:
      "Les Poissons peuvent parfois idéaliser les situations, absorber les émotions de leur entourage ou avoir de la difficulté à poser des limites. Leur évolution passe par davantage d’ancrage, de discernement et de protection émotionnelle.",
  },
  {
    question:
      "Quelle planète gouverne les Poissons ?",
    answer:
      "Les Poissons sont traditionnellement associés à Jupiter et, dans l’astrologie moderne, à Neptune. Neptune représente l’intuition, l’imagination et les rêves, tandis que Jupiter symbolise l’expansion, la foi et la recherche de sens.",
  },
  {
    question:
      "Quel est l’élément des Poissons ?",
    answer:
      "Les Poissons appartiennent à l’élément Eau. Cet élément est lié aux émotions, à l’intuition, à la réceptivité, à la sensibilité et aux liens affectifs.",
  },
  {
    question:
      "Comment savoir si les Poissons sont importants dans mon thème natal ?",
    answer:
      "Les Poissons peuvent être importants si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet également de découvrir la maison astrologique occupée par les Poissons.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Les Poissons en astrologie : personnalité, amour, travail et compatibilités",
  description:
    "Guide complet consacré au signe des Poissons, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
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

export default function PoissonsAstrologiePage() {
  return (
    <div className="pisces-page">
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

      <main className="pisces-wrap">
        <section className="pisces-hero">
          <div className="pisces-badge">
            ♓ Douzième signe du zodiaque
          </div>

          <h1>
            Les Poissons en astrologie
          </h1>

          <p className="pisces-hero-lead">
            Les Poissons symbolisent l’intuition, la
            sensibilité, l’imagination et la compassion. Ce
            signe d’Eau cherche à comprendre le monde par les
            émotions, les rêves et les liens invisibles qui
            unissent les êtres.
          </p>

          <div className="pisces-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="pisces-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#personnalite-poissons"
              className="pisces-secondary-button"
            >
              Découvrir les Poissons
            </a>
          </div>
        </section>

        <article className="pisces-content">
          <section id="personnalite-poissons">
            <span className="pisces-kicker">
              Personnalité des Poissons
            </span>

            <h2>
              Que représente le signe des Poissons ?
            </h2>

            <p>
              Les Poissons sont le douzième et dernier signe du
              zodiaque. Ils représentent l’intuition,
              l’imagination, la compassion, la sensibilité et
              la capacité à percevoir ce qui dépasse parfois
              les mots ou la logique.
            </p>

            <p>
              Une personne marquée par les Poissons cherche
              généralement à comprendre la vie à travers ses
              ressentis. Elle peut percevoir très rapidement les
              émotions, les besoins et les changements
              d’atmosphère présents autour d’elle.
            </p>

            <p>
              Cette énergie apporte douceur, créativité et
              profondeur émotionnelle. Elle demande toutefois
              d’apprendre à poser des limites, à rester ancré
              dans la réalité et à distinguer ses propres
              émotions de celles de son entourage.
            </p>
          </section>

          <section>
            <h2>
              Les grandes caractéristiques des Poissons
            </h2>

            <div className="pisces-info-grid">
              {PISCES_TRAITS.map((item) => (
                <article
                  className="pisces-info-card"
                  key={item.title}
                >
                  <span className="pisces-card-icon">
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

            <div className="pisces-pillars">
              <div className="pisces-pillar-card">
                <div className="pisces-pillar-symbol">
                  🌊
                </div>

                <h3>Élément Eau</h3>

                <p>
                  L’Eau apporte sensibilité, intuition,
                  réceptivité et profondeur émotionnelle. Elle
                  pousse les Poissons à ressentir intensément
                  les personnes et les situations.
                </p>
              </div>

              <div className="pisces-pillar-card">
                <div className="pisces-pillar-symbol">
                  ◇
                </div>

                <h3>Modalité mutable</h3>

                <p>
                  La modalité mutable favorise l’adaptation, la
                  souplesse et la capacité à suivre les
                  changements. Elle renforce la réceptivité et
                  la fluidité des Poissons.
                </p>
              </div>

              <div className="pisces-pillar-card">
                <div className="pisces-pillar-symbol">
                  ♆
                </div>

                <h3>Neptune et Jupiter</h3>

                <p>
                  Neptune représente l’intuition, les rêves et
                  l’imagination. Jupiter apporte foi, expansion
                  et recherche de sens. Ensemble, ils nourrissent
                  la vision intérieure des Poissons.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis des Poissons
            </h2>

            <div className="pisces-strengths-grid">
              <div className="pisces-list-card">
                <span className="pisces-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Ce que les Poissons apportent
                </h3>

                <ul>
                  {PISCES_STRENGTHS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="pisces-list-card">
                <span className="pisces-kicker">
                  Points d’attention
                </span>

                <h3>
                  Ce que les Poissons apprennent
                </h3>

                <ul>
                  {PISCES_CHALLENGES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les Poissons en amour
            </h2>

            <p>
              En amour, les Poissons recherchent généralement
              une relation profonde, tendre et émotionnellement
              significative. Ils ont besoin de sentir qu’un
              lien sincère et intuitif existe avec l’autre.
            </p>

            <p>
              Ils peuvent être romantiques, attentionnés et
              extrêmement réceptifs aux besoins de leur
              partenaire. Leur imagination nourrit souvent une
              vision très inspirante de l’amour et de la vie à
              deux.
            </p>

            <p>
              Leur principal défi consiste à ne pas idéaliser la
              relation ou à se sacrifier pour préserver le lien.
              Une relation durable leur demande de poser des
              limites claires, d’exprimer leurs besoins et de
              maintenir leur propre identité.
            </p>
          </section>

          <section>
            <h2>
              Les Poissons au travail
            </h2>

            <p>
              Dans la vie professionnelle, les Poissons se
              distinguent souvent par leur intuition, leur
              créativité et leur capacité à comprendre les
              émotions ou les besoins des autres.
            </p>

            <p>
              Ils peuvent être particulièrement à l’aise dans
              les domaines liés à l’art, à la musique, à
              l’écriture, à la photographie, au cinéma, à
              l’accompagnement, à la santé, au bien-être ou aux
              professions d’aide.
            </p>

            <p>
              Les environnements trop froids, compétitifs ou
              rigides peuvent réduire leur motivation. Ils
              gagnent à structurer leur travail, à définir des
              priorités et à protéger leur énergie émotionnelle.
            </p>
          </section>

          <section>
            <h2>
              Soleil, Lune et Ascendant en Poissons
            </h2>

            <div className="pisces-pillars">
              <div className="pisces-pillar-card">
                <div className="pisces-pillar-symbol">
                  ☀️
                </div>

                <h3>Soleil en Poissons</h3>

                <p>
                  Le Soleil en Poissons construit son identité
                  par l’intuition, la compassion, l’imagination
                  et la recherche d’un lien profond avec la vie.
                </p>

                <Link
                  href="/astrologie/soleil"
                  className="pisces-text-link"
                >
                  Comprendre le Soleil
                </Link>
              </div>

              <div className="pisces-pillar-card">
                <div className="pisces-pillar-symbol">
                  🌙
                </div>

                <h3>Lune en Poissons</h3>

                <p>
                  La Lune en Poissons ressent les émotions avec
                  une grande intensité. Elle a besoin de douceur,
                  de calme et d’un espace créatif pour retrouver
                  son équilibre.
                </p>

                <Link
                  href="/astrologie/lune"
                  className="pisces-text-link"
                >
                  Comprendre la Lune
                </Link>
              </div>

              <div className="pisces-pillar-card">
                <div className="pisces-pillar-symbol">
                  ↑
                </div>

                <h3>Ascendant Poissons</h3>

                <p>
                  L’Ascendant Poissons donne une présence douce,
                  intuitive et réceptive. Il aborde généralement
                  la vie avec sensibilité, imagination et
                  compassion.
                </p>

                <Link
                  href="/astrologie/ascendant"
                  className="pisces-text-link"
                >
                  Comprendre l’Ascendant
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les compatibilités des Poissons
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
              partagent un besoin de sensibilité, de sécurité,
              de profondeur et de compréhension émotionnelle.
            </p>

            <div className="pisces-compatibility-grid">
              {COMPATIBILITIES.map((item) => (
                <article
                  className="pisces-compatibility-card"
                  key={item.sign}
                >
                  <div className="pisces-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Poissons et {item.sign}
                  </h3>

                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Les Poissons dans votre thème natal
            </h2>

            <p>
              Les Poissons ne concernent pas uniquement les
              personnes nées sous ce signe. Chaque thème natal
              contient les Poissons dans une maison
              astrologique particulière.
            </p>

            <p>
              Cette maison montre le domaine de vie dans lequel
              vous cherchez à ressentir, à imaginer, à aider ou
              à vous connecter à une réalité plus subtile. La
              présence de planètes en Poissons renforce
              également cette énergie.
            </p>

            <div className="pisces-cta-card">
              <div>
                <span className="pisces-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Où se trouvent les Poissons dans votre carte du ciel ?
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
                className="pisces-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="pisces-faq">
            <span className="pisces-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur les Poissons
            </h2>

            <div className="pisces-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="pisces-faq-item"
                  key={item.question}
                >
                  <summary>{item.question}</summary>

                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="pisces-disclaimer">
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
