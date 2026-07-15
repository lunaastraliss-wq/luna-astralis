import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/sagittaire";

export const metadata: Metadata = {
  title:
    "Sagittaire : personnalité, amour, travail et compatibilités | Luna Astralis",

  description:
    "Découvrez le signe du Sagittaire en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Jupiter, élément Feu, Lune et Ascendant Sagittaire.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Le Sagittaire en astrologie : personnalité, amour et compatibilités",
    description:
      "Guide complet du signe du Sagittaire : caractère, forces, défis, relations, carrière, planète Jupiter et principales compatibilités astrologiques.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le signe du Sagittaire | Luna Astralis",
    description:
      "Découvrez la personnalité du Sagittaire, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const SAGITTARIUS_TRAITS = [
  {
    title: "La liberté",
    symbol: "♐",
    text:
      "Le Sagittaire possède un besoin profond d’espace, de mouvement et d’autonomie. Il cherche à suivre sa propre direction et à découvrir la vie au-delà des limites qui lui sont imposées.",
  },
  {
    title: "L’exploration",
    symbol: "✦",
    text:
      "Ce signe est attiré par les voyages, les idées nouvelles et les expériences qui élargissent sa compréhension du monde. Il apprend souvent en avançant et en expérimentant.",
  },
  {
    title: "L’optimisme",
    symbol: "♃",
    text:
      "Le Sagittaire possède généralement une capacité naturelle à voir les possibilités. Même après une difficulté, il cherche un sens, une leçon ou une nouvelle occasion de progresser.",
  },
];

const SAGITTARIUS_STRENGTHS = [
  "Optimisme",
  "Sincérité",
  "Enthousiasme",
  "Ouverture d’esprit",
  "Courage",
  "Goût de l’aventure",
];

const SAGITTARIUS_CHALLENGES = [
  "Impatience",
  "Manque de tact",
  "Difficulté avec les contraintes",
  "Tendance à se disperser",
  "Promesses parfois excessives",
  "Besoin constant de nouveauté",
];

const COMPATIBILITIES = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "Le Bélier et le Sagittaire partagent une énergie spontanée, courageuse et dynamique. Leur relation peut être passionnée, active et remplie de projets.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "Le Lion apprécie l’enthousiasme et la franchise du Sagittaire. Ensemble, ils peuvent partager une relation chaleureuse, créative et inspirante.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "La Balance apporte charme, diplomatie et sens de la relation. Le Sagittaire lui offre mouvement, optimisme et ouverture vers de nouvelles expériences.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "Le Verseau et le Sagittaire partagent un grand besoin de liberté, d’indépendance et de découverte. Leur lien peut être original, stimulant et peu conventionnel.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Quelles sont les principales qualités du Sagittaire ?",
    answer:
      "Le Sagittaire est souvent associé à l’optimisme, à l’enthousiasme, à la sincérité, à l’ouverture d’esprit, au courage et au goût de l’aventure.",
  },
  {
    question:
      "Quels sont les principaux défis du Sagittaire ?",
    answer:
      "Le Sagittaire peut parfois manquer de tact, devenir impatient ou avoir de la difficulté à respecter les contraintes. Son évolution passe par davantage de constance, d’écoute et de réalisme.",
  },
  {
    question:
      "Quelle planète gouverne le Sagittaire ?",
    answer:
      "Le Sagittaire est gouverné par Jupiter, planète traditionnellement associée à l’expansion, à la croissance, à la connaissance, aux voyages, à la confiance et à la recherche de sens.",
  },
  {
    question:
      "Quel est l’élément du Sagittaire ?",
    answer:
      "Le Sagittaire appartient à l’élément Feu. Cet élément est lié à l’action, à l’enthousiasme, à la créativité, à l’instinct et au désir d’avancer.",
  },
  {
    question:
      "Comment savoir si le Sagittaire est important dans mon thème natal ?",
    answer:
      "Le Sagittaire peut être important si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet aussi de découvrir la maison astrologique occupée par le Sagittaire.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Le Sagittaire en astrologie : personnalité, amour, travail et compatibilités",
  description:
    "Guide complet consacré au signe du Sagittaire, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
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

export default function SagittaireAstrologiePage() {
  return (
    <div className="sagittarius-page">
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

      <main className="sagittarius-wrap">
        <section className="sagittarius-hero">
          <div className="sagittarius-badge">
            ♐ Neuvième signe du zodiaque
          </div>

          <h1>
            Le Sagittaire en astrologie
          </h1>

          <p className="sagittarius-hero-lead">
            Le Sagittaire symbolise la liberté, l’exploration,
            l’optimisme et la recherche de sens. Ce signe de
            Feu cherche à élargir ses horizons, à découvrir le
            monde et à vivre selon une vision qui l’inspire.
          </p>

          <div className="sagittarius-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="sagittarius-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#personnalite-sagittaire"
              className="sagittarius-secondary-button"
            >
              Découvrir le Sagittaire
            </a>
          </div>
        </section>

        <article className="sagittarius-content">
          <section id="personnalite-sagittaire">
            <span className="sagittarius-kicker">
              Personnalité du Sagittaire
            </span>

            <h2>
              Que représente le signe du Sagittaire ?
            </h2>

            <p>
              Le Sagittaire est le neuvième signe du zodiaque.
              Il représente l’expansion, la liberté, les
              voyages, les grandes idées et la recherche d’un
              sens plus vaste à l’existence.
            </p>

            <p>
              Une personne marquée par le Sagittaire cherche
              généralement à comprendre le monde en vivant de
              nouvelles expériences. Elle apprécie les
              découvertes, les apprentissages et les rencontres
              qui lui permettent d’élargir sa vision.
            </p>

            <p>
              Cette énergie apporte enthousiasme, courage et
              confiance. Elle demande toutefois d’apprendre à
              tenir compte des détails, à mesurer ses paroles et
              à poursuivre ses engagements même lorsque la
              nouveauté disparaît.
            </p>
          </section>

          <section>
            <h2>
              Les grandes caractéristiques du Sagittaire
            </h2>

            <div className="sagittarius-info-grid">
              {SAGITTARIUS_TRAITS.map((item) => (
                <article
                  className="sagittarius-info-card"
                  key={item.title}
                >
                  <span className="sagittarius-card-icon">
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

            <div className="sagittarius-pillars">
              <div className="sagittarius-pillar-card">
                <div className="sagittarius-pillar-symbol">
                  🔥
                </div>

                <h3>Élément Feu</h3>

                <p>
                  Le Feu apporte enthousiasme, spontanéité,
                  courage et désir d’agir. Il pousse le
                  Sagittaire à avancer, à explorer et à
                  poursuivre ce qui l’inspire.
                </p>
              </div>

              <div className="sagittarius-pillar-card">
                <div className="sagittarius-pillar-symbol">
                  ◇
                </div>

                <h3>Modalité mutable</h3>

                <p>
                  La modalité mutable favorise l’adaptation,
                  l’ouverture et la capacité à changer de
                  direction. Elle renforce la souplesse et la
                  curiosité du Sagittaire.
                </p>
              </div>

              <div className="sagittarius-pillar-card">
                <div className="sagittarius-pillar-symbol">
                  ♃
                </div>

                <h3>Planète Jupiter</h3>

                <p>
                  Jupiter représente l’expansion, la confiance,
                  la connaissance et la recherche de sens. Elle
                  renforce le besoin du Sagittaire de grandir et
                  de dépasser ses limites.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis du Sagittaire
            </h2>

            <div className="sagittarius-strengths-grid">
              <div className="sagittarius-list-card">
                <span className="sagittarius-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Ce que le Sagittaire apporte
                </h3>

                <ul>
                  {SAGITTARIUS_STRENGTHS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="sagittarius-list-card">
                <span className="sagittarius-kicker">
                  Points d’attention
                </span>

                <h3>
                  Ce que le Sagittaire apprend
                </h3>

                <ul>
                  {SAGITTARIUS_CHALLENGES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Le Sagittaire en amour
            </h2>

            <p>
              En amour, le Sagittaire recherche généralement une
              relation vivante, sincère et ouverte. Il a besoin
              de sentir qu’il peut rester lui-même, explorer ses
              intérêts et conserver une certaine liberté.
            </p>

            <p>
              Il apprécie souvent les relations fondées sur
              l’humour, la complicité, les projets et les
              découvertes partagées. Lorsqu’il se sent libre et
              compris, il peut être généreux, enthousiaste et
              profondément encourageant.
            </p>

            <p>
              Son principal défi consiste à ne pas fuir lorsque
              la relation demande davantage de profondeur ou de
              constance. Une relation durable lui demande de
              concilier liberté personnelle et engagement
              émotionnel.
            </p>
          </section>

          <section>
            <h2>
              Le Sagittaire au travail
            </h2>

            <p>
              Dans la vie professionnelle, le Sagittaire se
              distingue souvent par son enthousiasme, sa vision
              globale et sa capacité à motiver les personnes qui
              l’entourent.
            </p>

            <p>
              Il peut être particulièrement efficace dans les
              domaines liés aux voyages, à l’enseignement, aux
              langues, à la communication, au droit, au sport,
              au tourisme, à l’entrepreneuriat ou à la
              transmission des connaissances.
            </p>

            <p>
              Les environnements trop rigides ou répétitifs
              peuvent rapidement réduire sa motivation. Il
              gagne à organiser ses idées, à respecter les
              échéances et à terminer les projets déjà
              commencés.
            </p>
          </section>

          <section>
            <h2>
              Soleil, Lune et Ascendant en Sagittaire
            </h2>

            <div className="sagittarius-pillars">
              <div className="sagittarius-pillar-card">
                <div className="sagittarius-pillar-symbol">
                  ☀️
                </div>

                <h3>Soleil en Sagittaire</h3>

                <p>
                  Le Soleil en Sagittaire construit son identité
                  par la liberté, l’exploration, l’optimisme et
                  la recherche d’une vision inspirante.
                </p>

                <Link
                  href="/astrologie/soleil"
                  className="sagittarius-text-link"
                >
                  Comprendre le Soleil
                </Link>
              </div>

              <div className="sagittarius-pillar-card">
                <div className="sagittarius-pillar-symbol">
                  🌙
                </div>

                <h3>Lune en Sagittaire</h3>

                <p>
                  La Lune en Sagittaire a besoin d’espace, de
                  mouvement, d’espoir et de nouvelles
                  perspectives pour retrouver son équilibre
                  émotionnel.
                </p>

                <Link
                  href="/astrologie/lune"
                  className="sagittarius-text-link"
                >
                  Comprendre la Lune
                </Link>
              </div>

              <div className="sagittarius-pillar-card">
                <div className="sagittarius-pillar-symbol">
                  ↑
                </div>

                <h3>Ascendant Sagittaire</h3>

                <p>
                  L’Ascendant Sagittaire donne une présence
                  spontanée, ouverte et enthousiaste. Il aborde
                  généralement la vie comme une aventure riche
                  en possibilités.
                </p>

                <Link
                  href="/astrologie/ascendant"
                  className="sagittarius-text-link"
                >
                  Comprendre l’Ascendant
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les compatibilités du Sagittaire
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
              un besoin de liberté, de mouvement, d’optimisme et
              de découvertes.
            </p>

            <div className="sagittarius-compatibility-grid">
              {COMPATIBILITIES.map((item) => (
                <article
                  className="sagittarius-compatibility-card"
                  key={item.sign}
                >
                  <div className="sagittarius-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Sagittaire et {item.sign}
                  </h3>

                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Le Sagittaire dans votre thème natal
            </h2>

            <p>
              Le Sagittaire ne concerne pas uniquement les
              personnes nées sous ce signe. Chaque thème natal
              contient le Sagittaire dans une maison
              astrologique particulière.
            </p>

            <p>
              Cette maison montre le domaine de vie dans lequel
              vous cherchez à explorer, à apprendre, à élargir
              vos horizons ou à trouver un sens plus profond.
              La présence de planètes en Sagittaire renforce
              également cette énergie.
            </p>

            <div className="sagittarius-cta-card">
              <div>
                <span className="sagittarius-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Où se trouve le Sagittaire dans votre carte du ciel ?
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
                className="sagittarius-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="sagittarius-faq">
            <span className="sagittarius-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur le Sagittaire
            </h2>

            <div className="sagittarius-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="sagittarius-faq-item"
                  key={item.question}
                >
                  <summary>{item.question}</summary>

                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="sagittarius-disclaimer">
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
