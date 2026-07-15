import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/capricorne";

export const metadata: Metadata = {
  title:
    "Capricorne : personnalité, amour, travail et compatibilités | Luna Astralis",

  description:
    "Découvrez le signe du Capricorne en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Saturne, élément Terre, Lune et Ascendant Capricorne.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Le Capricorne en astrologie : personnalité, amour et compatibilités",
    description:
      "Guide complet du signe du Capricorne : caractère, forces, défis, relations, carrière, planète Saturne et principales compatibilités astrologiques.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le signe du Capricorne | Luna Astralis",
    description:
      "Découvrez la personnalité du Capricorne, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const CAPRICORN_TRAITS = [
  {
    title: "L’ambition",
    symbol: "♑",
    text:
      "Le Capricorne cherche naturellement à construire quelque chose de durable. Il avance avec patience, fixe des objectifs précis et accepte souvent de fournir des efforts soutenus pour atteindre ce qu’il désire.",
  },
  {
    title: "La discipline",
    symbol: "♄",
    text:
      "Ce signe possède généralement une grande capacité à se structurer et à respecter ses engagements. Il sait que les résultats solides demandent du temps, de la constance et une méthode claire.",
  },
  {
    title: "Le sens des responsabilités",
    symbol: "◆",
    text:
      "Le Capricorne prend ses obligations au sérieux. Il cherche à être fiable, à protéger ce qu’il a construit et à assumer pleinement les conséquences de ses choix.",
  },
];

const CAPRICORN_STRENGTHS = [
  "Persévérance",
  "Discipline",
  "Fiabilité",
  "Patience",
  "Ambition",
  "Sens des responsabilités",
];

const CAPRICORN_CHALLENGES = [
  "Rigidité",
  "Pessimisme",
  "Difficulté à se détendre",
  "Besoin de contrôle",
  "Exigence envers soi",
  "Tendance à cacher sa vulnérabilité",
];

const COMPATIBILITIES = [
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "Le Taureau et le Capricorne partagent un besoin de stabilité, de sécurité et de constance. Leur relation peut se construire lentement sur des bases solides.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "La Vierge apprécie le sérieux et la fiabilité du Capricorne. Ensemble, ils peuvent organiser leur vie avec méthode et bâtir des projets durables.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "Le Scorpion et le Capricorne partagent une grande détermination et un goût pour les liens profonds. Leur relation peut être loyale, intense et résistante.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "Les Poissons apportent douceur, intuition et imagination. Le Capricorne offre en retour structure, stabilité et sécurité concrète.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Quelles sont les principales qualités du Capricorne ?",
    answer:
      "Le Capricorne est souvent associé à la discipline, à la persévérance, à la fiabilité, à la patience, à l’ambition et au sens des responsabilités.",
  },
  {
    question:
      "Quels sont les principaux défis du Capricorne ?",
    answer:
      "Le Capricorne peut parfois devenir rigide, trop exigeant envers lui-même ou avoir de la difficulté à se détendre. Son évolution passe par davantage de souplesse, de confiance et d’ouverture émotionnelle.",
  },
  {
    question:
      "Quelle planète gouverne le Capricorne ?",
    answer:
      "Le Capricorne est gouverné par Saturne, planète traditionnellement associée au temps, aux responsabilités, aux limites, à la discipline, à la maturité et à la construction durable.",
  },
  {
    question:
      "Quel est l’élément du Capricorne ?",
    answer:
      "Le Capricorne appartient à l’élément Terre. Cet élément est lié au réalisme, à la stabilité, au sens pratique, à la patience et à la capacité de construire des résultats concrets.",
  },
  {
    question:
      "Comment savoir si le Capricorne est important dans mon thème natal ?",
    answer:
      "Le Capricorne peut être important si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet aussi de découvrir la maison astrologique occupée par le Capricorne.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Le Capricorne en astrologie : personnalité, amour, travail et compatibilités",
  description:
    "Guide complet consacré au signe du Capricorne, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
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

export default function CapricorneAstrologiePage() {
  return (
    <div className="capricorn-page">
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

      <main className="capricorn-wrap">
        <section className="capricorn-hero">
          <div className="capricorn-badge">
            ♑ Dixième signe du zodiaque
          </div>

          <h1>
            Le Capricorne en astrologie
          </h1>

          <p className="capricorn-hero-lead">
            Le Capricorne symbolise l’ambition, la discipline,
            la maturité et la construction. Ce signe de Terre
            cherche à bâtir une vie solide, à assumer ses
            responsabilités et à progresser avec patience vers
            des objectifs durables.
          </p>

          <div className="capricorn-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="capricorn-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#personnalite-capricorne"
              className="capricorn-secondary-button"
            >
              Découvrir le Capricorne
            </a>
          </div>
        </section>

        <article className="capricorn-content">
          <section id="personnalite-capricorne">
            <span className="capricorn-kicker">
              Personnalité du Capricorne
            </span>

            <h2>
              Que représente le signe du Capricorne ?
            </h2>

            <p>
              Le Capricorne est le dixième signe du zodiaque.
              Il représente la structure, la responsabilité,
              l’ambition, le temps et la capacité à construire
              progressivement quelque chose de durable.
            </p>

            <p>
              Une personne marquée par le Capricorne cherche
              généralement à maîtriser sa trajectoire. Elle
              préfère avancer avec prudence, prévoir les étapes
              nécessaires et consolider ses acquis avant de
              prendre de nouveaux risques.
            </p>

            <p>
              Cette énergie apporte endurance, maturité et
              fiabilité. Elle demande toutefois d’apprendre à
              se détendre, à accueillir l’imprévu et à ne pas
              mesurer sa valeur uniquement à travers ses
              résultats ou ses responsabilités.
            </p>
          </section>

          <section>
            <h2>
              Les grandes caractéristiques du Capricorne
            </h2>

            <div className="capricorn-info-grid">
              {CAPRICORN_TRAITS.map((item) => (
                <article
                  className="capricorn-info-card"
                  key={item.title}
                >
                  <span className="capricorn-card-icon">
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
              Élément, modalité et planète maîtresse
            </h2>

            <div className="capricorn-pillars">
              <div className="capricorn-pillar-card">
                <div className="capricorn-pillar-symbol">
                  ⛰️
                </div>

                <h3>Élément Terre</h3>

                <p>
                  La Terre apporte stabilité, réalisme,
                  patience et sens pratique. Elle pousse le
                  Capricorne à transformer ses ambitions en
                  réalisations concrètes.
                </p>
              </div>

              <div className="capricorn-pillar-card">
                <div className="capricorn-pillar-symbol">
                  ◇
                </div>

                <h3>Modalité cardinale</h3>

                <p>
                  La modalité cardinale favorise l’initiative,
                  l’organisation et le passage à l’action. Elle
                  donne au Capricorne la volonté de diriger et
                  de structurer.
                </p>
              </div>

              <div className="capricorn-pillar-card">
                <div className="capricorn-pillar-symbol">
                  ♄
                </div>

                <h3>Planète Saturne</h3>

                <p>
                  Saturne représente le temps, les limites, la
                  discipline et la maturité. Elle enseigne au
                  Capricorne la patience et la construction à
                  long terme.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis du Capricorne
            </h2>

            <div className="capricorn-strengths-grid">
              <div className="capricorn-list-card">
                <span className="capricorn-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Ce que le Capricorne apporte
                </h3>

                <ul>
                  {CAPRICORN_STRENGTHS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="capricorn-list-card">
                <span className="capricorn-kicker">
                  Points d’attention
                </span>

                <h3>
                  Ce que le Capricorne apprend
                </h3>

                <ul>
                  {CAPRICORN_CHALLENGES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Le Capricorne en amour
            </h2>

            <p>
              En amour, le Capricorne recherche généralement
              une relation stable, fiable et construite dans
              le temps. Il peut prendre du temps avant de se
              livrer, car il préfère observer la solidité du
              lien avant de s’engager pleinement.
            </p>

            <p>
              Lorsqu’il accorde sa confiance, il peut être
              loyal, protecteur et profondément constant. Il
              exprime souvent ses sentiments par sa présence,
              son soutien concret et sa volonté de bâtir un
              avenir durable.
            </p>

            <p>
              Son principal défi consiste à montrer davantage
              sa sensibilité et à ne pas laisser le travail ou
              les responsabilités prendre toute la place. Une
              relation durable lui demande de partager ses
              émotions et de créer aussi des moments de
              légèreté.
            </p>
          </section>

          <section>
            <h2>
              Le Capricorne au travail
            </h2>

            <p>
              Dans la vie professionnelle, le Capricorne se
              distingue souvent par son sérieux, son endurance
              et sa capacité à travailler avec méthode sur des
              objectifs à long terme.
            </p>

            <p>
              Il peut être particulièrement efficace dans les
              domaines liés à la gestion, à l’administration,
              aux finances, à l’immobilier, au droit, à
              l’ingénierie, à la direction, à la construction
              ou à l’entrepreneuriat.
            </p>

            <p>
              Il apprécie généralement les environnements où
              les responsabilités sont clairement définies et
              où les efforts sont reconnus. Il gagne toutefois
              à déléguer, à préserver son énergie et à ne pas
              transformer chaque objectif en obligation.
            </p>
          </section>

          <section>
            <h2>
              Soleil, Lune et Ascendant en Capricorne
            </h2>

            <div className="capricorn-pillars">
              <div className="capricorn-pillar-card">
                <div className="capricorn-pillar-symbol">
                  ☀️
                </div>

                <h3>Soleil en Capricorne</h3>

                <p>
                  Le Soleil en Capricorne construit son identité
                  par la discipline, l’ambition, la maturité et
                  la création de résultats durables.
                </p>

                <Link
                  href="/astrologie/soleil"
                  className="capricorn-text-link"
                >
                  Comprendre le Soleil
                </Link>
              </div>

              <div className="capricorn-pillar-card">
                <div className="capricorn-pillar-symbol">
                  🌙
                </div>

                <h3>Lune en Capricorne</h3>

                <p>
                  La Lune en Capricorne a besoin de stabilité,
                  de maîtrise et de repères concrets pour se
                  sentir émotionnellement en sécurité.
                </p>

                <Link
                  href="/astrologie/lune"
                  className="capricorn-text-link"
                >
                  Comprendre la Lune
                </Link>
              </div>

              <div className="capricorn-pillar-card">
                <div className="capricorn-pillar-symbol">
                  ↑
                </div>

                <h3>Ascendant Capricorne</h3>

                <p>
                  L’Ascendant Capricorne donne une présence
                  sérieuse, réservée et déterminée. Il aborde
                  généralement la vie avec prudence, méthode et
                  sens des responsabilités.
                </p>

                <Link
                  href="/astrologie/ascendant"
                  className="capricorn-text-link"
                >
                  Comprendre l’Ascendant
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les compatibilités du Capricorne
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
              partagent un besoin de stabilité, de loyauté, de
              constance et de sécurité.
            </p>

            <div className="capricorn-compatibility-grid">
              {COMPATIBILITIES.map((item) => (
                <article
                  className="capricorn-compatibility-card"
                  key={item.sign}
                >
                  <div className="capricorn-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Capricorne et {item.sign}
                  </h3>

                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Le Capricorne dans votre thème natal
            </h2>

            <p>
              Le Capricorne ne concerne pas uniquement les
              personnes nées sous ce signe. Chaque thème natal
              contient le Capricorne dans une maison
              astrologique particulière.
            </p>

            <p>
              Cette maison montre le domaine de vie dans lequel
              vous cherchez à structurer, à assumer des
              responsabilités, à progresser avec patience ou à
              construire quelque chose de durable. La présence
              de planètes en Capricorne renforce également
              cette énergie.
            </p>

            <div className="capricorn-cta-card">
              <div>
                <span className="capricorn-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Où se trouve le Capricorne dans votre carte du ciel ?
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
                className="capricorn-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="capricorn-faq">
            <span className="capricorn-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur le Capricorne
            </h2>

            <div className="capricorn-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="capricorn-faq-item"
                  key={item.question}
                >
                  <summary>{item.question}</summary>

                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="capricorn-disclaimer">
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
