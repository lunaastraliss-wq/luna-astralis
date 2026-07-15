import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/taureau";

export const metadata: Metadata = {
  title:
    "Taureau : personnalité, amour, travail et compatibilités | Luna Astralis",

  description:
    "Découvrez le signe du Taureau en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, planète Vénus, élément Terre, Lune et Ascendant en Taureau.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Le Taureau en astrologie : personnalité, amour et compatibilités",
    description:
      "Guide complet du signe du Taureau : caractère, forces, défis, relations, carrière, planète maîtresse et principales compatibilités.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le signe du Taureau | Luna Astralis",
    description:
      "Découvrez la personnalité du Taureau, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const TAURUS_TRAITS = [
  {
    title: "La stabilité",
    symbol: "✦",
    text:
      "Le Taureau recherche des bases solides, des repères fiables et une progression durable. Il préfère généralement construire lentement plutôt que prendre des décisions précipitées.",
  },
  {
    title: "La persévérance",
    symbol: "◇",
    text:
      "Lorsqu’il s’engage dans une direction, le Taureau peut faire preuve d’une grande constance. Il avance avec patience et résiste aux obstacles grâce à sa détermination.",
  },
  {
    title: "Le sens des valeurs",
    symbol: "♢",
    text:
      "Le Taureau accorde de l’importance à ce qui possède une valeur réelle, qu’elle soit matérielle, affective ou symbolique. Il cherche à protéger ce qu’il considère comme essentiel.",
  },
];

const TAURUS_STRENGTHS = [
  "Patience",
  "Fiabilité",
  "Persévérance",
  "Loyauté",
  "Sens pratique",
  "Stabilité",
];

const TAURUS_CHALLENGES = [
  "Résistance au changement",
  "Entêtement",
  "Attachement aux habitudes",
  "Possessivité",
  "Difficulté à lâcher prise",
  "Tendance à rester dans sa zone de confort",
];

const COMPATIBILITIES = [
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "La Vierge partage avec le Taureau un besoin de stabilité, de réalisme et de confiance. Cette relation peut se construire progressivement sur des bases solides.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "Le Capricorne comprend la prudence et la persévérance du Taureau. Ensemble, ils peuvent créer une relation durable, structurée et orientée vers des objectifs communs.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "Le Cancer peut apporter chaleur, sensibilité et attachement au foyer. Le Taureau offre en retour stabilité, présence et sécurité concrète.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "Les Poissons apportent imagination, intuition et douceur. Le Taureau peut offrir une base rassurante qui aide cette relation à prendre une forme plus stable.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Quelles sont les principales qualités du Taureau ?",
    answer:
      "Le Taureau est souvent associé à la patience, à la loyauté, à la persévérance, au sens pratique et à la capacité de construire progressivement quelque chose de durable.",
  },
  {
    question:
      "Quels sont les principaux défis du Taureau ?",
    answer:
      "Le Taureau peut parfois résister au changement, s’attacher fortement à ses habitudes ou avoir de la difficulté à lâcher prise. Son évolution passe souvent par davantage de souplesse.",
  },
  {
    question:
      "Quelle planète gouverne le Taureau ?",
    answer:
      "Le Taureau est gouverné par Vénus, planète traditionnellement associée aux valeurs, aux relations, au plaisir, à la beauté, à l’harmonie et à l’attachement.",
  },
  {
    question:
      "Quel est l’élément du Taureau ?",
    answer:
      "Le Taureau appartient à l’élément Terre. Cet élément est associé au réalisme, à la stabilité, au concret, à la patience et au besoin de sécurité.",
  },
  {
    question:
      "Comment savoir si le Taureau est important dans mon thème natal ?",
    answer:
      "Le Taureau peut être important si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet de le vérifier.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Le Taureau en astrologie : personnalité, amour, travail et compatibilités",
  description:
    "Guide complet consacré au signe du Taureau, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
  inLanguage: "fr-CA",
  mainEntityOfPage: PAGE_URL,
  publisher: {
    "@type": "Organization",
    name: "Luna Astralis",
    url: "https://luna-astralis.app",
  },
};

export default function TaureauAstrologiePage() {
  return (
    <div className="taurus-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="taurus-wrap">
        <section className="taurus-hero">
          <div className="taurus-badge">
            ♉ Deuxième signe du zodiaque
          </div>

          <h1>
            Le Taureau en astrologie
          </h1>

          <p className="taurus-hero-lead">
            Le Taureau symbolise la stabilité, la patience,
            l’enracinement et le besoin de construire quelque
            chose de solide. Ce signe de Terre avance avec
            constance et fidélité à ses valeurs.
          </p>

          <div className="taurus-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="taurus-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#personnalite-taureau"
              className="taurus-secondary-button"
            >
              Découvrir le Taureau
            </a>
          </div>
        </section>

        <article className="taurus-content">
          <section id="personnalite-taureau">
            <span className="taurus-kicker">
              Personnalité du Taureau
            </span>

            <h2>
              Que représente le signe du Taureau ?
            </h2>

            <p>
              Le Taureau est le deuxième signe du zodiaque. Il
              représente la construction, la continuité et le
              développement de bases suffisamment solides pour
              soutenir la croissance.
            </p>

            <p>
              Une personne marquée par le Taureau recherche
              généralement la sécurité, la stabilité et la
              cohérence. Elle préfère prendre le temps
              d’observer, d’évaluer et de progresser à son propre
              rythme plutôt que de se précipiter.
            </p>

            <p>
              Cette énergie apporte souvent de la patience, du
              réalisme et une forte capacité de persévérance.
              Elle demande toutefois d’apprendre à accueillir le
              changement et à ne pas confondre stabilité et
              immobilité.
            </p>
          </section>

          <section>
            <h2>
              Les grandes caractéristiques du Taureau
            </h2>

            <div className="taurus-info-grid">
              {TAURUS_TRAITS.map((item) => (
                <article
                  className="taurus-info-card"
                  key={item.title}
                >
                  <span className="taurus-card-icon">
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

            <div className="taurus-pillars">
              <div className="taurus-pillar-card">
                <div className="taurus-pillar-symbol">
                  🌿
                </div>

                <h3>
                  Élément Terre
                </h3>

                <p>
                  La Terre apporte réalisme, patience, sens
                  pratique et besoin de sécurité. Elle pousse le
                  Taureau à bâtir de manière concrète et durable.
                </p>
              </div>

              <div className="taurus-pillar-card">
                <div className="taurus-pillar-symbol">
                  ◇
                </div>

                <h3>
                  Modalité fixe
                </h3>

                <p>
                  La modalité fixe renforce la constance, la
                  stabilité et la capacité à maintenir un effort
                  dans le temps.
                </p>
              </div>

              <div className="taurus-pillar-card">
                <div className="taurus-pillar-symbol">
                  ♀
                </div>

                <h3>
                  Planète Vénus
                </h3>

                <p>
                  Vénus représente les valeurs, les liens, le
                  plaisir, la beauté et l’harmonie. Elle nourrit
                  le besoin de confort et d’attachement du
                  Taureau.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis du Taureau
            </h2>

            <div className="taurus-strengths-grid">
              <div className="taurus-list-card">
                <span className="taurus-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Ce que le Taureau apporte
                </h3>

                <ul>
                  {TAURUS_STRENGTHS.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="taurus-list-card">
                <span className="taurus-kicker">
                  Points d’attention
                </span>

                <h3>
                  Ce que le Taureau apprend
                </h3>

                <ul>
                  {TAURUS_CHALLENGES.map((item) => (
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
              Le Taureau en amour
            </h2>

            <p>
              En amour, le Taureau recherche généralement une
              relation stable, sincère et sécurisante. Il
              apprécie la constance, la fidélité et les gestes
              concrets qui témoignent d’un engagement réel.
            </p>

            <p>
              Il peut prendre du temps avant de s’ouvrir
              complètement, mais son attachement devient souvent
              profond lorsqu’il se sent en confiance. Il accorde
              une grande valeur à la présence, au contact, au
              confort et aux habitudes partagées.
            </p>

            <p>
              Son principal défi consiste à éviter la
              possessivité ou la peur du changement. Une
              relation saine lui demande de préserver la
              sécurité sans limiter la liberté de l’autre.
            </p>
          </section>

          <section>
            <h2>
              Le Taureau au travail
            </h2>

            <p>
              Dans la vie professionnelle, le Taureau se
              distingue souvent par sa fiabilité, sa patience et
              sa capacité à maintenir un effort sur une longue
              période.
            </p>

            <p>
              Il peut être particulièrement efficace dans les
              environnements où la rigueur, la stabilité, le
              sens pratique et la gestion des ressources sont
              valorisés.
            </p>

            <p>
              Il préfère généralement savoir où il va et
              comprendre la valeur concrète de son travail. Les
              changements brusques ou les décisions
              imprévisibles peuvent réduire son sentiment de
              sécurité.
            </p>
          </section>

          <section>
            <h2>
              Soleil, Lune et Ascendant en Taureau
            </h2>

            <div className="taurus-pillars">
              <div className="taurus-pillar-card">
                <div className="taurus-pillar-symbol">
                  ☀️
                </div>

                <h3>
                  Soleil en Taureau
                </h3>

                <p>
                  Le Soleil en Taureau construit son identité
                  par la stabilité, la fidélité à ses valeurs et
                  la recherche d’une progression durable.
                </p>

                <Link
                  href="/astrologie/soleil"
                  className="taurus-text-link"
                >
                  Comprendre le Soleil
                </Link>
              </div>

              <div className="taurus-pillar-card">
                <div className="taurus-pillar-symbol">
                  🌙
                </div>

                <h3>
                  Lune en Taureau
                </h3>

                <p>
                  La Lune en Taureau a besoin de calme, de
                  repères et de sécurité concrète pour retrouver
                  son équilibre émotionnel.
                </p>

                <Link
                  href="/astrologie/lune"
                  className="taurus-text-link"
                >
                  Comprendre la Lune
                </Link>
              </div>

              <div className="taurus-pillar-card">
                <div className="taurus-pillar-symbol">
                  ↑
                </div>

                <h3>
                  Ascendant Taureau
                </h3>

                <p>
                  L’Ascendant Taureau donne une présence calme,
                  stable et rassurante. Il aborde généralement la
                  vie avec prudence et constance.
                </p>

                <Link
                  href="/astrologie/ascendant"
                  className="taurus-text-link"
                >
                  Comprendre l’Ascendant
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les compatibilités du Taureau
            </h2>

            <p>
              Les compatibilités astrologiques ne reposent jamais
              uniquement sur le signe solaire. La Lune, Vénus,
              Mars, l’Ascendant et les aspects entre les deux
              thèmes apportent des informations essentielles.
            </p>

            <p>
              Certaines associations peuvent néanmoins sembler
              plus naturelles lorsqu’elles partagent un besoin
              de sécurité, de constance ou de profondeur
              émotionnelle.
            </p>

            <div className="taurus-compatibility-grid">
              {COMPATIBILITIES.map((item) => (
                <article
                  className="taurus-compatibility-card"
                  key={item.sign}
                >
                  <div className="taurus-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Taureau et {item.sign}
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
              Le Taureau dans votre thème natal
            </h2>

            <p>
              Le Taureau ne concerne pas uniquement les personnes
              nées sous ce signe. Chaque thème natal contient le
              Taureau dans une maison astrologique particulière.
            </p>

            <p>
              Cette maison montre le domaine de vie dans lequel
              vous recherchez davantage de stabilité, de
              continuité et de sécurité. La présence de planètes
              en Taureau renforce également cette énergie.
            </p>

            <div className="taurus-cta-card">
              <div>
                <span className="taurus-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Où se trouve le Taureau dans votre carte du ciel ?
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
                className="taurus-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="taurus-faq">
            <span className="taurus-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur le Taureau
            </h2>

            <div className="taurus-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="taurus-faq-item"
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

          <p className="taurus-disclaimer">
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
