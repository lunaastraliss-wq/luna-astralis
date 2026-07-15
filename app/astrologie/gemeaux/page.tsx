import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/gemeaux";

export const metadata: Metadata = {
  title:
    "Gémeaux : personnalité, amour, travail et compatibilités | Luna Astralis",

  description:
    "Découvrez le signe des Gémeaux en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, planète Mercure, élément Air, Lune et Ascendant en Gémeaux.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Les Gémeaux en astrologie : personnalité, amour et compatibilités",
    description:
      "Guide complet du signe des Gémeaux : caractère, forces, défis, relations, carrière, planète maîtresse et principales compatibilités.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le signe des Gémeaux | Luna Astralis",
    description:
      "Découvrez la personnalité des Gémeaux, leurs qualités, leurs défis, leurs relations et leurs compatibilités astrologiques.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const GEMINI_TRAITS = [
  {
    title: "La curiosité",
    symbol: "✦",
    text:
      "Les Gémeaux cherchent naturellement à comprendre, observer et découvrir. Leur esprit mobile s’intéresse rapidement aux idées, aux personnes et aux situations nouvelles.",
  },
  {
    title: "La communication",
    symbol: "☿",
    text:
      "Ce signe possède souvent une grande facilité à transmettre, expliquer, questionner et créer des liens. Les mots occupent une place importante dans sa manière d’exister.",
  },
  {
    title: "L’adaptabilité",
    symbol: "◇",
    text:
      "Les Gémeaux peuvent changer rapidement de perspective et s’ajuster à leur environnement. Cette souplesse leur permet de naviguer entre plusieurs centres d’intérêt.",
  },
];

const GEMINI_STRENGTHS = [
  "Curiosité",
  "Adaptabilité",
  "Vivacité d’esprit",
  "Communication",
  "Polyvalence",
  "Ouverture aux idées",
];

const GEMINI_CHALLENGES = [
  "Dispersion",
  "Hésitation",
  "Difficulté à approfondir",
  "Nervosité mentale",
  "Tendance à changer rapidement d’intérêt",
  "Besoin constant de stimulation",
];

const COMPATIBILITIES = [
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "La Balance partage avec les Gémeaux un goût pour les échanges, les idées et la vie sociale. Cette relation peut être fluide, légère et stimulante.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "Le Verseau nourrit la curiosité des Gémeaux par son originalité et son indépendance. Ensemble, ils peuvent partager une grande liberté intellectuelle.",
  },
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "Le Bélier apporte mouvement, spontanéité et audace. Les Gémeaux offrent en retour souplesse, humour et variété.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "Le Lion peut apprécier l’intelligence vive et la créativité des Gémeaux. Cette combinaison favorise l’expression, le plaisir et les projets dynamiques.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Quelles sont les principales qualités des Gémeaux ?",
    answer:
      "Les Gémeaux sont souvent associés à la curiosité, à l’intelligence vive, à l’adaptabilité, à la communication et à la capacité de s’intéresser à plusieurs sujets.",
  },
  {
    question:
      "Quels sont les principaux défis des Gémeaux ?",
    answer:
      "Les Gémeaux peuvent parfois se disperser, changer rapidement d’intérêt ou avoir de la difficulté à approfondir. Leur évolution passe souvent par davantage de concentration et de continuité.",
  },
  {
    question:
      "Quelle planète gouverne les Gémeaux ?",
    answer:
      "Les Gémeaux sont gouvernés par Mercure, planète traditionnellement associée à la pensée, à la communication, aux apprentissages, aux déplacements et aux échanges.",
  },
  {
    question:
      "Quel est l’élément des Gémeaux ?",
    answer:
      "Les Gémeaux appartiennent à l’élément Air. Cet élément est lié aux idées, aux relations, à la communication, à la curiosité et à la circulation de l’information.",
  },
  {
    question:
      "Comment savoir si les Gémeaux sont importants dans mon thème natal ?",
    answer:
      "Les Gémeaux peuvent être importants si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet de le vérifier.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Les Gémeaux en astrologie : personnalité, amour, travail et compatibilités",
  description:
    "Guide complet consacré au signe des Gémeaux, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
  inLanguage: "fr-CA",
  mainEntityOfPage: PAGE_URL,
  publisher: {
    "@type": "Organization",
    name: "Luna Astralis",
    url: "https://luna-astralis.app",
  },
};

export default function GemeauxAstrologiePage() {
  return (
    <div className="gemini-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="gemini-wrap">
        <section className="gemini-hero">
          <div className="gemini-badge">
            ♊ Troisième signe du zodiaque
          </div>

          <h1>
            Les Gémeaux en astrologie
          </h1>

          <p className="gemini-hero-lead">
            Les Gémeaux symbolisent la curiosité, la
            communication, le mouvement et la découverte. Ce
            signe d’Air cherche à comprendre le monde par les
            idées, les échanges et les expériences variées.
          </p>

          <div className="gemini-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="gemini-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#personnalite-gemeaux"
              className="gemini-secondary-button"
            >
              Découvrir les Gémeaux
            </a>
          </div>
        </section>

        <article className="gemini-content">
          <section id="personnalite-gemeaux">
            <span className="gemini-kicker">
              Personnalité des Gémeaux
            </span>

            <h2>
              Que représente le signe des Gémeaux ?
            </h2>

            <p>
              Les Gémeaux sont le troisième signe du zodiaque.
              Ils représentent l’éveil de la pensée, la
              communication, la curiosité et la capacité de
              relier plusieurs idées entre elles.
            </p>

            <p>
              Une personne marquée par les Gémeaux cherche
              généralement à comprendre ce qui l’entoure. Elle
              apprend par les échanges, les questions, les
              déplacements et les expériences qui stimulent son
              esprit.
            </p>

            <p>
              Cette énergie apporte souplesse, vivacité et
              polyvalence. Elle demande toutefois d’apprendre à
              approfondir, à ralentir le flot mental et à
              maintenir une direction suffisamment longtemps.
            </p>
          </section>

          <section>
            <h2>
              Les grandes caractéristiques des Gémeaux
            </h2>

            <div className="gemini-info-grid">
              {GEMINI_TRAITS.map((item) => (
                <article
                  className="gemini-info-card"
                  key={item.title}
                >
                  <span className="gemini-card-icon">
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

            <div className="gemini-pillars">
              <div className="gemini-pillar-card">
                <div className="gemini-pillar-symbol">
                  🌬️
                </div>

                <h3>
                  Élément Air
                </h3>

                <p>
                  L’Air apporte réflexion, communication,
                  curiosité et besoin d’échanges. Il pousse les
                  Gémeaux à comprendre le monde par les idées.
                </p>
              </div>

              <div className="gemini-pillar-card">
                <div className="gemini-pillar-symbol">
                  ◇
                </div>

                <h3>
                  Modalité mutable
                </h3>

                <p>
                  La modalité mutable favorise l’adaptation, la
                  souplesse et la capacité de changer de point de
                  vue selon les circonstances.
                </p>
              </div>

              <div className="gemini-pillar-card">
                <div className="gemini-pillar-symbol">
                  ☿
                </div>

                <h3>
                  Planète Mercure
                </h3>

                <p>
                  Mercure représente la pensée, les mots, les
                  apprentissages et les déplacements. Elle
                  renforce la vivacité mentale des Gémeaux.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis des Gémeaux
            </h2>

            <div className="gemini-strengths-grid">
              <div className="gemini-list-card">
                <span className="gemini-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Ce que les Gémeaux apportent
                </h3>

                <ul>
                  {GEMINI_STRENGTHS.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="gemini-list-card">
                <span className="gemini-kicker">
                  Points d’attention
                </span>

                <h3>
                  Ce que les Gémeaux apprennent
                </h3>

                <ul>
                  {GEMINI_CHALLENGES.map((item) => (
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
              Les Gémeaux en amour
            </h2>

            <p>
              En amour, les Gémeaux recherchent généralement une
              relation vivante, stimulante et ouverte au
              dialogue. Ils ont besoin de sentir qu’ils peuvent
              échanger, apprendre et partager des idées avec
              l’autre.
            </p>

            <p>
              L’humour, la complicité intellectuelle et la
              légèreté peuvent jouer un rôle important dans leur
              manière de créer un lien. Ils apprécient souvent
              les relations qui conservent une certaine
              spontanéité.
            </p>

            <p>
              Leur principal défi consiste à rester présents
              lorsque la nouveauté diminue. Une relation durable
              leur demande d’approfondir les émotions et de ne
              pas éviter les conversations plus exigeantes.
            </p>
          </section>

          <section>
            <h2>
              Les Gémeaux au travail
            </h2>

            <p>
              Dans la vie professionnelle, les Gémeaux se
              distinguent souvent par leur rapidité d’esprit,
              leur curiosité et leur capacité à gérer plusieurs
              informations en même temps.
            </p>

            <p>
              Ils peuvent être particulièrement efficaces dans
              les domaines liés à la communication, à
              l’enseignement, à l’écriture, aux médias, au
              commerce, aux langues ou aux nouvelles technologies.
            </p>

            <p>
              Les environnements trop répétitifs peuvent réduire
              leur motivation. Ils gagnent à organiser leurs
              priorités et à terminer leurs projets avant de
              multiplier les nouvelles idées.
            </p>
          </section>

          <section>
            <h2>
              Soleil, Lune et Ascendant en Gémeaux
            </h2>

            <div className="gemini-pillars">
              <div className="gemini-pillar-card">
                <div className="gemini-pillar-symbol">
                  ☀️
                </div>

                <h3>
                  Soleil en Gémeaux
                </h3>

                <p>
                  Le Soleil en Gémeaux construit son identité par
                  la curiosité, la communication et la découverte
                  constante de nouvelles idées.
                </p>

                <Link
                  href="/astrologie/soleil"
                  className="gemini-text-link"
                >
                  Comprendre le Soleil
                </Link>
              </div>

              <div className="gemini-pillar-card">
                <div className="gemini-pillar-symbol">
                  🌙
                </div>

                <h3>
                  Lune en Gémeaux
                </h3>

                <p>
                  La Lune en Gémeaux a besoin de parler, de
                  comprendre et de stimuler son esprit pour
                  retrouver son équilibre émotionnel.
                </p>

                <Link
                  href="/astrologie/lune"
                  className="gemini-text-link"
                >
                  Comprendre la Lune
                </Link>
              </div>

              <div className="gemini-pillar-card">
                <div className="gemini-pillar-symbol">
                  ↑
                </div>

                <h3>
                  Ascendant Gémeaux
                </h3>

                <p>
                  L’Ascendant Gémeaux donne une présence vive,
                  sociable et mobile. Il aborde généralement la
                  vie avec curiosité et souplesse.
                </p>

                <Link
                  href="/astrologie/ascendant"
                  className="gemini-text-link"
                >
                  Comprendre l’Ascendant
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les compatibilités des Gémeaux
            </h2>

            <p>
              Les compatibilités astrologiques ne reposent jamais
              uniquement sur le signe solaire. La Lune, Vénus,
              Mars, l’Ascendant et les aspects entre les deux
              thèmes apportent des informations essentielles.
            </p>

            <p>
              Certaines associations peuvent néanmoins sembler
              naturellement plus fluides lorsqu’elles partagent
              un besoin de liberté, de dialogue et de stimulation
              intellectuelle.
            </p>

            <div className="gemini-compatibility-grid">
              {COMPATIBILITIES.map((item) => (
                <article
                  className="gemini-compatibility-card"
                  key={item.sign}
                >
                  <div className="gemini-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Gémeaux et {item.sign}
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
              Les Gémeaux dans votre thème natal
            </h2>

            <p>
              Les Gémeaux ne concernent pas uniquement les
              personnes nées sous ce signe. Chaque thème natal
              contient les Gémeaux dans une maison astrologique
              particulière.
            </p>

            <p>
              Cette maison montre le domaine de vie dans lequel
              vous cherchez à comprendre, communiquer, apprendre
              ou multiplier les expériences. La présence de
              planètes en Gémeaux renforce également cette
              énergie.
            </p>

            <div className="gemini-cta-card">
              <div>
                <span className="gemini-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Où se trouvent les Gémeaux dans votre carte du ciel ?
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
                className="gemini-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="gemini-faq">
            <span className="gemini-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur les Gémeaux
            </h2>

            <div className="gemini-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="gemini-faq-item"
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

          <p className="gemini-disclaimer">
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
