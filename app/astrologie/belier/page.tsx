import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/belier";

export const metadata: Metadata = {
  title:
    "Bélier : personnalité, amour, travail et compatibilités | Luna Astralis",

  description:
    "Découvrez le signe du Bélier en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, planète Mars, élément Feu, Lune et Ascendant en Bélier.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Le Bélier en astrologie : personnalité, amour et compatibilités",
    description:
      "Guide complet du signe du Bélier : caractère, forces, défis, relations, carrière, planète maîtresse et principales compatibilités.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le signe du Bélier | Luna Astralis",
    description:
      "Découvrez la personnalité du Bélier, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const ARIES_TRAITS = [
  {
    title: "L’initiative",
    symbol: "✦",
    text:
      "Le Bélier possède un instinct naturel pour commencer, agir et ouvrir la voie. Il préfère généralement avancer plutôt que d’attendre que les circonstances changent.",
  },
  {
    title: "Le courage",
    symbol: "⚡",
    text:
      "Ce signe affronte souvent les difficultés avec franchise et énergie. Il peut prendre des risques lorsqu’il estime qu’une action est nécessaire.",
  },
  {
    title: "L’indépendance",
    symbol: "↑",
    text:
      "Le Bélier a besoin de conserver une certaine liberté de décision. Il se sent plus vivant lorsqu’il peut suivre son propre mouvement et défendre ses choix.",
  },
];

const ARIES_STRENGTHS = [
  "Courage",
  "Spontanéité",
  "Initiative",
  "Franchise",
  "Énergie",
  "Détermination",
];

const ARIES_CHALLENGES = [
  "Impatience",
  "Impulsivité",
  "Réactions rapides",
  "Difficulté à ralentir",
  "Compétitivité",
  "Tendance à agir avant de réfléchir",
];

const COMPATIBILITIES = [
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "Le Lion partage avec le Bélier une énergie chaleureuse, créative et expressive. Cette relation peut être dynamique, passionnée et stimulante.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "Le Sagittaire comprend le besoin de liberté et de mouvement du Bélier. Ensemble, ils peuvent partager enthousiasme, projets et goût de l’aventure.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "Le Gémeaux apporte curiosité, humour et souplesse. Il peut stimuler le Bélier intellectuellement et accompagner son besoin de nouveauté.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "Le Verseau valorise l’indépendance et les idées nouvelles. Cette combinaison peut favoriser une relation vivante, libre et tournée vers l’avenir.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Quelles sont les principales qualités du Bélier ?",
    answer:
      "Le Bélier est souvent associé au courage, à l’initiative, à la spontanéité, à la franchise et à la capacité de commencer rapidement de nouveaux projets.",
  },
  {
    question:
      "Quels sont les principaux défis du Bélier ?",
    answer:
      "Le Bélier peut parfois agir trop rapidement, manquer de patience ou réagir avec intensité. Son évolution passe souvent par l’apprentissage du recul et de la constance.",
  },
  {
    question:
      "Quelle planète gouverne le Bélier ?",
    answer:
      "Le Bélier est gouverné par Mars, planète traditionnellement associée à l’action, au désir, à l’affirmation, au courage et à l’énergie combative.",
  },
  {
    question:
      "Quel est l’élément du Bélier ?",
    answer:
      "Le Bélier appartient à l’élément Feu. Cet élément est lié à l’élan, à l’enthousiasme, à la créativité, à la volonté et au besoin d’expression.",
  },
  {
    question:
      "Comment savoir si le Bélier est important dans mon thème natal ?",
    answer:
      "Le Bélier peut être important si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet de le vérifier.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Le Bélier en astrologie : personnalité, amour, travail et compatibilités",
  description:
    "Guide complet consacré au signe du Bélier, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
  inLanguage: "fr-CA",
  mainEntityOfPage: PAGE_URL,
  publisher: {
    "@type": "Organization",
    name: "Luna Astralis",
    url: "https://luna-astralis.app",
  },
};

export default function BelierAstrologiePage() {
  return (
    <div className="aries-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="aries-wrap">
        <section className="aries-hero">
          <div className="aries-badge">
            ♈ Premier signe du zodiaque
          </div>

          <h1>
            Le Bélier en astrologie
          </h1>

          <p className="aries-hero-lead">
            Le Bélier symbolise l’élan initial, le courage,
            l’action et la volonté d’avancer. Ce signe de Feu
            cherche à expérimenter directement la vie et à
            ouvrir de nouveaux chemins.
          </p>

          <div className="aries-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="aries-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#personnalite-belier"
              className="aries-secondary-button"
            >
              Découvrir le Bélier
            </a>
          </div>
        </section>

        <article className="aries-content">
          <section id="personnalite-belier">
            <span className="aries-kicker">
              Personnalité du Bélier
            </span>

            <h2>
              Que représente le signe du Bélier ?
            </h2>

            <p>
              Le Bélier est le premier signe du zodiaque. Il
              symbolise le commencement, l’impulsion, la
              naissance d’un désir et la volonté de passer à
              l’action. Son énergie est directe, spontanée et
              orientée vers l’expérience.
            </p>

            <p>
              Une personne marquée par le Bélier cherche
              généralement à avancer avec autonomie. Elle préfère
              souvent apprendre par l’action, tester ses propres
              limites et prendre rapidement des décisions.
            </p>

            <p>
              Cette énergie peut donner beaucoup de courage et
              d’initiative. Elle demande cependant d’apprendre à
              canaliser l’impatience, à tenir compte du rythme des
              autres et à poursuivre les projets après l’enthousiasme
              du départ.
            </p>
          </section>

          <section>
            <h2>
              Les grandes caractéristiques du Bélier
            </h2>

            <div className="aries-info-grid">
              {ARIES_TRAITS.map((item) => (
                <article
                  className="aries-info-card"
                  key={item.title}
                >
                  <span className="aries-card-icon">
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

            <div className="aries-pillars">
              <div className="aries-pillar-card">
                <div className="aries-pillar-symbol">
                  🔥
                </div>

                <h3>
                  Élément Feu
                </h3>

                <p>
                  Le Feu apporte enthousiasme, inspiration,
                  spontanéité et besoin d’expression. Il pousse le
                  Bélier à agir selon son instinct et sa volonté.
                </p>
              </div>

              <div className="aries-pillar-card">
                <div className="aries-pillar-symbol">
                  ✦
                </div>

                <h3>
                  Modalité cardinale
                </h3>

                <p>
                  La modalité cardinale favorise le commencement,
                  l’initiative et la capacité de lancer un mouvement
                  ou un nouveau projet.
                </p>
              </div>

              <div className="aries-pillar-card">
                <div className="aries-pillar-symbol">
                  ♂
                </div>

                <h3>
                  Planète Mars
                </h3>

                <p>
                  Mars représente l’action, le désir, l’affirmation
                  et l’énergie combative. Elle renforce le caractère
                  direct et volontaire du Bélier.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis du Bélier
            </h2>

            <div className="aries-strengths-grid">
              <div className="aries-list-card">
                <span className="aries-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Ce que le Bélier apporte
                </h3>

                <ul>
                  {ARIES_STRENGTHS.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="aries-list-card">
                <span className="aries-kicker">
                  Points d’attention
                </span>

                <h3>
                  Ce que le Bélier apprend
                </h3>

                <ul>
                  {ARIES_CHALLENGES.map((item) => (
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
              Le Bélier en amour
            </h2>

            <p>
              En amour, le Bélier recherche souvent une relation
              vivante, sincère et stimulante. Il apprécie la
              spontanéité, la franchise et le sentiment que la
              relation continue d’avancer.
            </p>

            <p>
              Il peut exprimer son intérêt de manière directe et
              intense. Lorsqu’il se sent attiré, il préfère
              généralement agir plutôt que cacher longtemps ses
              sentiments.
            </p>

            <p>
              Le principal défi consiste à préserver l’écoute et
              la patience. Le Bélier peut avoir besoin d’apprendre
              que l’intensité du début doit ensuite être soutenue
              par la présence, la constance et le respect du rythme
              de l’autre.
            </p>
          </section>

          <section>
            <h2>
              Le Bélier au travail
            </h2>

            <p>
              Dans la vie professionnelle, le Bélier se distingue
              souvent par son sens de l’initiative. Il aime les
              environnements où il peut agir, décider, résoudre des
              problèmes et relever des défis.
            </p>

            <p>
              Il peut être particulièrement efficace dans les
              projets qui demandent du courage, de la rapidité, de
              l’autonomie ou une capacité à démarrer quelque chose
              de nouveau.
            </p>

            <p>
              Les tâches très répétitives ou les structures trop
              rigides peuvent toutefois réduire sa motivation. Il
              gagne à développer la planification, la patience et
              la continuité afin de transformer ses idées en
              réalisations durables.
            </p>
          </section>

          <section>
            <h2>
              Soleil, Lune et Ascendant en Bélier
            </h2>

            <div className="aries-pillars">
              <div className="aries-pillar-card">
                <div className="aries-pillar-symbol">
                  ☀️
                </div>

                <h3>
                  Soleil en Bélier
                </h3>

                <p>
                  Le Soleil en Bélier construit son identité par
                  l’action, l’indépendance et le courage d’affirmer
                  ses propres choix.
                </p>

                <Link
                  href="/astrologie/soleil"
                  className="aries-text-link"
                >
                  Comprendre le Soleil
                </Link>
              </div>

              <div className="aries-pillar-card">
                <div className="aries-pillar-symbol">
                  🌙
                </div>

                <h3>
                  Lune en Bélier
                </h3>

                <p>
                  La Lune en Bélier ressent rapidement et réagit
                  spontanément. Elle a besoin de mouvement et
                  d’autonomie pour retrouver son équilibre.
                </p>

                <Link
                  href="/astrologie/lune"
                  className="aries-text-link"
                >
                  Comprendre la Lune
                </Link>
              </div>

              <div className="aries-pillar-card">
                <div className="aries-pillar-symbol">
                  ↑
                </div>

                <h3>
                  Ascendant Bélier
                </h3>

                <p>
                  L’Ascendant Bélier donne une présence énergique,
                  directe et volontaire. Il aborde souvent la vie
                  avec rapidité et audace.
                </p>

                <Link
                  href="/astrologie/ascendant"
                  className="aries-text-link"
                >
                  Comprendre l’Ascendant
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les compatibilités du Bélier
            </h2>

            <p>
              Les compatibilités astrologiques ne reposent jamais
              uniquement sur le signe solaire. La Lune, Vénus,
              Mars, l’Ascendant et les aspects entre les deux
              thèmes apportent des informations essentielles.
            </p>

            <p>
              Certaines associations peuvent néanmoins sembler
              naturellement plus fluides en raison d’un rythme,
              d’un élément ou d’un besoin de liberté partagé.
            </p>

            <div className="aries-compatibility-grid">
              {COMPATIBILITIES.map((item) => (
                <article
                  className="aries-compatibility-card"
                  key={item.sign}
                >
                  <div className="aries-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Bélier et {item.sign}
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
              Le Bélier dans votre thème natal
            </h2>

            <p>
              Le Bélier ne concerne pas uniquement les personnes
              nées sous ce signe. Chaque thème natal contient le
              Bélier dans une maison astrologique particulière.
              Cette maison montre le domaine de vie où vous pouvez
              agir avec davantage de spontanéité, d’audace ou
              d’initiative.
            </p>

            <p>
              La présence de planètes en Bélier renforce également
              cette énergie. Mars, Vénus, Mercure ou la Lune en
              Bélier ne s’expriment pas de la même manière, mais
              chacune adopte une qualité plus directe, active et
              volontaire.
            </p>

            <div className="aries-cta-card">
              <div>
                <span className="aries-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Où se trouve le Bélier dans votre carte du ciel ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir vos signes, vos maisons astrologiques,
                  votre Ascendant et les positions de vos planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="aries-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="aries-faq">
            <span className="aries-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur le Bélier
            </h2>

            <div className="aries-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="aries-faq-item"
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

          <p className="aries-disclaimer">
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
