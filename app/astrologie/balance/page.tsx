import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/balance";

export const metadata: Metadata = {
  title:
    "Balance : personnalité, amour, travail et compatibilités | Luna Astralis",

  description:
    "Découvrez le signe de la Balance en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Vénus, élément Air, Lune et Ascendant Balance.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "La Balance en astrologie : personnalité, amour et compatibilités",
    description:
      "Guide complet du signe de la Balance : caractère, forces, défis, relations, carrière, planète Vénus et principales compatibilités astrologiques.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le signe de la Balance | Luna Astralis",
    description:
      "Découvrez la personnalité de la Balance, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const LIBRA_TRAITS = [
  {
    title: "La recherche d’harmonie",
    symbol: "♎",
    text:
      "La Balance cherche naturellement à créer un équilibre entre les personnes, les idées et les situations. Elle remarque rapidement les tensions et tente souvent de rétablir une atmosphère plus paisible.",
  },
  {
    title: "Le sens de la relation",
    symbol: "♡",
    text:
      "Ce signe se construit beaucoup à travers les échanges et les liens. Il possède souvent une grande capacité à écouter, à comprendre plusieurs points de vue et à favoriser la coopération.",
  },
  {
    title: "Le sens de la beauté",
    symbol: "♀",
    text:
      "La Balance est sensible à l’esthétique, à l’élégance et à l’harmonie des formes. Elle cherche généralement à créer un environnement agréable, équilibré et inspirant.",
  },
];

const LIBRA_STRENGTHS = [
  "Diplomatie",
  "Élégance",
  "Écoute",
  "Sens de la justice",
  "Sociabilité",
  "Capacité à coopérer",
];

const LIBRA_CHALLENGES = [
  "Indécision",
  "Peur du conflit",
  "Dépendance au regard des autres",
  "Difficulté à choisir",
  "Tendance à vouloir plaire",
  "Évitement des désaccords",
];

const COMPATIBILITIES = [
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "Les Gémeaux et la Balance partagent un goût prononcé pour les échanges, les idées et la vie sociale. Cette relation peut être légère, stimulante et très communicative.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "Le Verseau stimule la Balance par son originalité et son indépendance. Ensemble, ils peuvent construire une relation basée sur la liberté, le dialogue et une vision commune.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "Le Lion peut apprécier l’élégance et la douceur relationnelle de la Balance. La Balance est souvent attirée par son charisme, sa créativité et sa chaleur.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "Le Sagittaire apporte mouvement, optimisme et spontanéité. La Balance offre en retour diplomatie, charme et capacité à créer un climat harmonieux.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Quelles sont les principales qualités de la Balance ?",
    answer:
      "La Balance est souvent associée à la diplomatie, à l’élégance, à la sociabilité, au sens de la justice, à l’écoute et à la capacité de créer de l’harmonie.",
  },
  {
    question:
      "Quels sont les principaux défis de la Balance ?",
    answer:
      "La Balance peut parfois hésiter longtemps avant de choisir, éviter les conflits ou accorder trop d’importance au regard des autres. Son évolution passe par une plus grande affirmation de ses besoins et de ses décisions.",
  },
  {
    question:
      "Quelle planète gouverne la Balance ?",
    answer:
      "La Balance est gouvernée par Vénus, planète traditionnellement associée à l’amour, aux relations, au plaisir, à l’harmonie, aux valeurs et à la beauté.",
  },
  {
    question:
      "Quel est l’élément de la Balance ?",
    answer:
      "La Balance appartient à l’élément Air. Cet élément est lié à la pensée, à la communication, aux relations, aux idées et au besoin d’échanger avec les autres.",
  },
  {
    question:
      "Comment savoir si la Balance est importante dans mon thème natal ?",
    answer:
      "La Balance peut être importante si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet aussi de découvrir la maison astrologique occupée par la Balance.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "La Balance en astrologie : personnalité, amour, travail et compatibilités",
  description:
    "Guide complet consacré au signe de la Balance, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
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

export default function BalanceAstrologiePage() {
  return (
    <div className="libra-page">
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

      <main className="libra-wrap">
        <section className="libra-hero">
          <div className="libra-badge">
            ♎ Septième signe du zodiaque
          </div>

          <h1>
            La Balance en astrologie
          </h1>

          <p className="libra-hero-lead">
            La Balance symbolise l’harmonie, les relations,
            la justice et la recherche d’équilibre. Ce signe
            d’Air cherche à créer des liens, à comprendre
            plusieurs points de vue et à construire des
            relations plus justes et plus harmonieuses.
          </p>

          <div className="libra-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="libra-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#personnalite-balance"
              className="libra-secondary-button"
            >
              Découvrir la Balance
            </a>
          </div>
        </section>

        <article className="libra-content">
          <section id="personnalite-balance">
            <span className="libra-kicker">
              Personnalité de la Balance
            </span>

            <h2>
              Que représente le signe de la Balance ?
            </h2>

            <p>
              La Balance est le septième signe du zodiaque.
              Elle représente la rencontre avec l’autre,
              l’équilibre, la coopération, la justice et la
              recherche d’harmonie dans les relations.
            </p>

            <p>
              Une personne marquée par la Balance cherche
              généralement à comprendre les différents points
              de vue avant de prendre position. Elle possède
              souvent une grande sensibilité aux ambiances,
              aux comportements et aux déséquilibres présents
              dans une relation.
            </p>

            <p>
              Cette énergie apporte diplomatie, élégance et
              ouverture. Elle demande toutefois d’apprendre à
              choisir, à affirmer ses besoins et à accepter
              qu’un désaccord ne détruit pas nécessairement
              une relation.
            </p>
          </section>

          <section>
            <h2>
              Les grandes caractéristiques de la Balance
            </h2>

            <div className="libra-info-grid">
              {LIBRA_TRAITS.map((item) => (
                <article
                  className="libra-info-card"
                  key={item.title}
                >
                  <span className="libra-card-icon">
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

            <div className="libra-pillars">
              <div className="libra-pillar-card">
                <div className="libra-pillar-symbol">
                  🌬️
                </div>

                <h3>
                  Élément Air
                </h3>

                <p>
                  L’Air apporte réflexion, communication,
                  sociabilité et besoin d’échanges. Il pousse
                  la Balance à comprendre le monde à travers
                  les relations et les idées.
                </p>
              </div>

              <div className="libra-pillar-card">
                <div className="libra-pillar-symbol">
                  ◇
                </div>

                <h3>
                  Modalité cardinale
                </h3>

                <p>
                  La modalité cardinale favorise l’initiative
                  et le mouvement. Chez la Balance, elle se
                  manifeste souvent par le désir d’établir un
                  nouvel équilibre ou d’améliorer une relation.
                </p>
              </div>

              <div className="libra-pillar-card">
                <div className="libra-pillar-symbol">
                  ♀
                </div>

                <h3>
                  Planète Vénus
                </h3>

                <p>
                  Vénus représente l’amour, les valeurs, le
                  plaisir, la beauté et les relations. Elle
                  renforce chez la Balance le besoin de
                  douceur, d’harmonie et de réciprocité.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis de la Balance
            </h2>

            <div className="libra-strengths-grid">
              <div className="libra-list-card">
                <span className="libra-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Ce que la Balance apporte
                </h3>

                <ul>
                  {LIBRA_STRENGTHS.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="libra-list-card">
                <span className="libra-kicker">
                  Points d’attention
                </span>

                <h3>
                  Ce que la Balance apprend
                </h3>

                <ul>
                  {LIBRA_CHALLENGES.map((item) => (
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
              La Balance en amour
            </h2>

            <p>
              En amour, la Balance recherche généralement une
              relation fondée sur le respect, la complicité et
              l’harmonie. Elle apprécie les échanges, les
              attentions et le sentiment de construire une
              véritable équipe avec l’autre.
            </p>

            <p>
              Elle possède souvent un grand sens du romantisme
              et accorde beaucoup d’importance à la qualité de
              la relation. Elle peut être attentive, douce et
              très investie lorsqu’elle se sent respectée et
              considérée.
            </p>

            <p>
              Son principal défi consiste à ne pas oublier ses
              propres besoins pour préserver la paix. Une
              relation durable lui demande d’exprimer clairement
              ce qu’elle souhaite et d’accepter les conversations
              plus difficiles.
            </p>
          </section>

          <section>
            <h2>
              La Balance au travail
            </h2>

            <p>
              Dans la vie professionnelle, la Balance se
              distingue souvent par sa diplomatie, son sens du
              contact et sa capacité à travailler avec des
              personnalités différentes.
            </p>

            <p>
              Elle peut être particulièrement efficace dans les
              domaines liés aux relations humaines, au droit, à
              la médiation, à la communication, au design, à la
              mode, à l’art, à la vente ou au service-conseil.
            </p>

            <p>
              Elle apprécie généralement les environnements
              harmonieux et collaboratifs. Elle gagne toutefois
              à prendre des décisions plus rapidement et à ne
              pas attendre l’accord de tout le monde avant
              d’avancer.
            </p>
          </section>

          <section>
            <h2>
              Soleil, Lune et Ascendant en Balance
            </h2>

            <div className="libra-pillars">
              <div className="libra-pillar-card">
                <div className="libra-pillar-symbol">
                  ☀️
                </div>

                <h3>
                  Soleil en Balance
                </h3>

                <p>
                  Le Soleil en Balance construit son identité
                  par les relations, la recherche de justice,
                  la coopération et le désir de créer de
                  l’harmonie.
                </p>

                <Link
                  href="/astrologie/soleil"
                  className="libra-text-link"
                >
                  Comprendre le Soleil
                </Link>
              </div>

              <div className="libra-pillar-card">
                <div className="libra-pillar-symbol">
                  🌙
                </div>

                <h3>
                  Lune en Balance
                </h3>

                <p>
                  La Lune en Balance a besoin de calme, de
                  beauté, de dialogue et de relations
                  équilibrées pour retrouver son bien-être
                  émotionnel.
                </p>

                <Link
                  href="/astrologie/lune"
                  className="libra-text-link"
                >
                  Comprendre la Lune
                </Link>
              </div>

              <div className="libra-pillar-card">
                <div className="libra-pillar-symbol">
                  ↑
                </div>

                <h3>
                  Ascendant Balance
                </h3>

                <p>
                  L’Ascendant Balance donne une présence
                  sociable, élégante et diplomate. Il aborde
                  généralement la vie avec charme, écoute et
                  recherche d’équilibre.
                </p>

                <Link
                  href="/astrologie/ascendant"
                  className="libra-text-link"
                >
                  Comprendre l’Ascendant
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les compatibilités de la Balance
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
              un besoin de dialogue, de liberté, d’harmonie et
              de stimulation intellectuelle.
            </p>

            <div className="libra-compatibility-grid">
              {COMPATIBILITIES.map((item) => (
                <article
                  className="libra-compatibility-card"
                  key={item.sign}
                >
                  <div className="libra-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Balance et {item.sign}
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
              La Balance dans votre thème natal
            </h2>

            <p>
              La Balance ne concerne pas uniquement les
              personnes nées sous ce signe. Chaque thème natal
              contient la Balance dans une maison astrologique
              particulière.
            </p>

            <p>
              Cette maison montre le domaine de vie dans lequel
              vous cherchez à coopérer, à établir un équilibre,
              à créer des liens ou à développer votre sens de
              la justice. La présence de planètes en Balance
              renforce également cette énergie.
            </p>

            <div className="libra-cta-card">
              <div>
                <span className="libra-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Où se trouve la Balance dans votre carte du ciel ?
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
                className="libra-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="libra-faq">
            <span className="libra-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur la Balance
            </h2>

            <div className="libra-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="libra-faq-item"
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

          <p className="libra-disclaimer">
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
