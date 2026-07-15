import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/lion";

export const metadata: Metadata = {
  title:
    "Lion : personnalité, amour, travail et compatibilités | Luna Astralis",

  description:
    "Découvrez le signe du Lion en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Soleil, élément Feu, Lune et Ascendant Lion.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Le Lion en astrologie : personnalité, amour et compatibilités",
    description:
      "Guide complet du signe du Lion : caractère, forces, défis, relations, carrière, Soleil et principales compatibilités astrologiques.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le signe du Lion | Luna Astralis",
    description:
      "Découvrez la personnalité du Lion, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const LION_TRAITS = [
  {
    title: "Le rayonnement",
    symbol: "☀",
    text:
      "Le Lion possède une énergie naturellement expressive. Il cherche à affirmer son identité, à partager sa lumière et à laisser une empreinte personnelle dans ce qu’il accomplit.",
  },
  {
    title: "La créativité",
    symbol: "✦",
    text:
      "Ce signe aime créer, imaginer et donner vie à ce qui l’inspire. Son besoin d’expression peut se manifester dans l’art, les projets, les relations ou sa manière unique de se présenter.",
  },
  {
    title: "La générosité",
    symbol: "♡",
    text:
      "Le Lion donne souvent avec chaleur et loyauté. Lorsqu’il se sent apprécié, il peut offrir beaucoup de soutien, de protection et d’enthousiasme aux personnes qu’il aime.",
  },
];

const LION_STRENGTHS = [
  "Confiance",
  "Créativité",
  "Générosité",
  "Loyauté",
  "Courage",
  "Capacité à inspirer",
];

const LION_CHALLENGES = [
  "Besoin de reconnaissance",
  "Orgueil",
  "Difficulté à accepter la critique",
  "Tendance à vouloir diriger",
  "Dramatisation",
  "Peur de ne pas être apprécié",
];

const COMPATIBILITIES = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "Le Bélier et le Lion partagent une énergie dynamique, courageuse et passionnée. Cette relation peut favoriser l’action, l’enthousiasme et les projets ambitieux.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "Le Sagittaire nourrit le Lion par son optimisme, sa liberté et son désir d’aventure. Ensemble, ils peuvent créer une relation chaleureuse et inspirante.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "La Balance apprécie le charisme et la créativité du Lion. Le Lion peut être séduit par son élégance, son sens de l’harmonie et sa douceur relationnelle.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "Les Gémeaux stimulent le Lion par leur curiosité, leur humour et leur vivacité. Cette combinaison favorise la communication, les sorties et les projets créatifs.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Quelles sont les principales qualités du Lion ?",
    answer:
      "Le Lion est souvent associé à la confiance, à la créativité, à la générosité, à la loyauté, au courage et à la capacité d’inspirer les autres.",
  },
  {
    question:
      "Quels sont les principaux défis du Lion ?",
    answer:
      "Le Lion peut parfois rechercher fortement la reconnaissance, avoir de la difficulté à accepter la critique ou vouloir contrôler certaines situations. Son évolution passe par une confiance intérieure moins dépendante du regard extérieur.",
  },
  {
    question:
      "Quelle planète gouverne le Lion ?",
    answer:
      "Le Lion est gouverné par le Soleil, astre traditionnellement associé à l’identité, à la vitalité, à la créativité, à la volonté et au rayonnement personnel.",
  },
  {
    question:
      "Quel est l’élément du Lion ?",
    answer:
      "Le Lion appartient à l’élément Feu. Cet élément est associé à l’enthousiasme, à l’action, à la passion, à la créativité et au désir d’exprimer pleinement son identité.",
  },
  {
    question:
      "Comment savoir si le Lion est important dans mon thème natal ?",
    answer:
      "Le Lion peut être important si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet également de découvrir la maison astrologique occupée par le Lion.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Le Lion en astrologie : personnalité, amour, travail et compatibilités",
  description:
    "Guide complet consacré au signe du Lion, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
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

export default function LionAstrologiePage() {
  return (
    <div className="lion-page">
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

      <main className="lion-wrap">
        <section className="lion-hero">
          <div className="lion-badge">
            ♌ Cinquième signe du zodiaque
          </div>

          <h1>
            Le Lion en astrologie
          </h1>

          <p className="lion-hero-lead">
            Le Lion symbolise le rayonnement, la créativité,
            la confiance et l’expression personnelle. Ce signe
            de Feu cherche à vivre avec intensité, à partager
            sa lumière et à créer une existence dont il peut
            être fier.
          </p>

          <div className="lion-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="lion-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#personnalite-lion"
              className="lion-secondary-button"
            >
              Découvrir le Lion
            </a>
          </div>
        </section>

        <article className="lion-content">
          <section id="personnalite-lion">
            <span className="lion-kicker">
              Personnalité du Lion
            </span>

            <h2>
              Que représente le signe du Lion ?
            </h2>

            <p>
              Le Lion est le cinquième signe du zodiaque. Il
              représente l’affirmation de soi, la créativité,
              la confiance, la joie de vivre et le besoin
              d’exprimer son identité avec authenticité.
            </p>

            <p>
              Une personne marquée par le Lion cherche
              généralement à prendre pleinement sa place. Elle
              souhaite développer ses talents, partager ce qui
              l’anime et être reconnue pour ce qu’elle apporte
              de personnel au monde.
            </p>

            <p>
              Cette énergie apporte chaleur, courage et
              générosité. Elle demande toutefois d’apprendre à
              rayonner sans dominer, à recevoir la critique
              avec maturité et à construire une confiance qui
              ne dépend pas uniquement de l’approbation des
              autres.
            </p>
          </section>

          <section>
            <h2>
              Les grandes caractéristiques du Lion
            </h2>

            <div className="lion-info-grid">
              {LION_TRAITS.map((item) => (
                <article
                  className="lion-info-card"
                  key={item.title}
                >
                  <span className="lion-card-icon">
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
              Élément, modalité et astre maître
            </h2>

            <div className="lion-pillars">
              <div className="lion-pillar-card">
                <div className="lion-pillar-symbol">
                  🔥
                </div>

                <h3>
                  Élément Feu
                </h3>

                <p>
                  Le Feu apporte passion, enthousiasme,
                  spontanéité et désir d’agir. Il nourrit chez
                  le Lion la volonté de créer, d’aimer et de
                  vivre pleinement.
                </p>
              </div>

              <div className="lion-pillar-card">
                <div className="lion-pillar-symbol">
                  ◆
                </div>

                <h3>
                  Modalité fixe
                </h3>

                <p>
                  La modalité fixe favorise la persévérance, la
                  fidélité et la capacité à maintenir une
                  direction. Elle peut aussi renforcer
                  l’entêtement et la résistance au changement.
                </p>
              </div>

              <div className="lion-pillar-card">
                <div className="lion-pillar-symbol">
                  ☀
                </div>

                <h3>
                  Astre maître : le Soleil
                </h3>

                <p>
                  Le Soleil représente l’identité, la volonté,
                  la vitalité et le rayonnement personnel. Il
                  invite le Lion à développer une expression
                  authentique de lui-même.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis du Lion
            </h2>

            <div className="lion-strengths-grid">
              <div className="lion-list-card">
                <span className="lion-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Ce que le Lion apporte
                </h3>

                <ul>
                  {LION_STRENGTHS.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lion-list-card">
                <span className="lion-kicker">
                  Points d’attention
                </span>

                <h3>
                  Ce que le Lion apprend
                </h3>

                <ul>
                  {LION_CHALLENGES.map((item) => (
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
              Le Lion en amour
            </h2>

            <p>
              En amour, le Lion recherche généralement une
              relation chaleureuse, passionnée et sincère. Il a
              besoin de sentir que ses sentiments sont
              reconnus, que sa présence est appréciée et que
              la relation possède une véritable intensité.
            </p>

            <p>
              Lorsqu’il aime, le Lion peut être généreux,
              protecteur et profondément loyal. Il apprécie les
              gestes d’affection, les moments romantiques et la
              fierté de construire quelque chose de beau avec
              la personne qu’il aime.
            </p>

            <p>
              Son principal défi consiste à ne pas confondre
              amour et admiration constante. Une relation
              durable lui demande de laisser également de
              l’espace à l’autre, d’écouter ses besoins et
              d’accepter de montrer sa vulnérabilité.
            </p>
          </section>

          <section>
            <h2>
              Le Lion au travail
            </h2>

            <p>
              Dans la vie professionnelle, le Lion se distingue
              souvent par sa confiance, sa créativité et sa
              capacité à mobiliser les autres autour d’une
              vision ou d’un projet.
            </p>

            <p>
              Il peut être particulièrement à l’aise dans les
              domaines liés à la direction, à l’entrepreneuriat,
              à la création, à l’enseignement, au spectacle, à
              la communication, aux événements ou à toute
              fonction qui permet de prendre des initiatives.
            </p>

            <p>
              Le Lion a besoin de sentir que son travail possède
              une valeur et que ses efforts sont reconnus. Il
              gagne toutefois à collaborer sans chercher à tout
              contrôler et à valoriser également les
              contributions de son entourage.
            </p>
          </section>

          <section>
            <h2>
              Soleil, Lune et Ascendant en Lion
            </h2>

            <div className="lion-pillars">
              <div className="lion-pillar-card">
                <div className="lion-pillar-symbol">
                  ☀️
                </div>

                <h3>
                  Soleil en Lion
                </h3>

                <p>
                  Le Soleil en Lion construit son identité par
                  la créativité, la confiance, la générosité et
                  le désir de rayonner avec authenticité.
                </p>

                <Link
                  href="/astrologie/soleil"
                  className="lion-text-link"
                >
                  Comprendre le Soleil
                </Link>
              </div>

              <div className="lion-pillar-card">
                <div className="lion-pillar-symbol">
                  🌙
                </div>

                <h3>
                  Lune en Lion
                </h3>

                <p>
                  La Lune en Lion a besoin de chaleur,
                  d’affection, de reconnaissance et de liberté
                  créative pour retrouver son équilibre
                  émotionnel.
                </p>

                <Link
                  href="/astrologie/lune"
                  className="lion-text-link"
                >
                  Comprendre la Lune
                </Link>
              </div>

              <div className="lion-pillar-card">
                <div className="lion-pillar-symbol">
                  ↑
                </div>

                <h3>
                  Ascendant Lion
                </h3>

                <p>
                  L’Ascendant Lion donne une présence
                  expressive, chaleureuse et charismatique. Il
                  aborde généralement la vie avec confiance et
                  créativité.
                </p>

                <Link
                  href="/astrologie/ascendant"
                  className="lion-text-link"
                >
                  Comprendre l’Ascendant
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les compatibilités du Lion
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
              partagent un besoin de passion, de créativité, de
              mouvement et d’expression personnelle.
            </p>

            <div className="lion-compatibility-grid">
              {COMPATIBILITIES.map((item) => (
                <article
                  className="lion-compatibility-card"
                  key={item.sign}
                >
                  <div className="lion-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Lion et {item.sign}
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
              Le Lion dans votre thème natal
            </h2>

            <p>
              Le Lion ne concerne pas uniquement les personnes
              nées sous ce signe. Chaque thème natal contient
              le Lion dans une maison astrologique
              particulière.
            </p>

            <p>
              Cette maison montre le domaine de vie dans lequel
              vous cherchez à créer, à rayonner, à développer
              votre confiance et à exprimer votre identité. La
              présence de planètes en Lion renforce également
              cette énergie.
            </p>

            <div className="lion-cta-card">
              <div>
                <span className="lion-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Où se trouve le Lion dans votre carte du ciel ?
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
                className="lion-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="lion-faq">
            <span className="lion-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur le Lion
            </h2>

            <div className="lion-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="lion-faq-item"
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

          <p className="lion-disclaimer">
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
