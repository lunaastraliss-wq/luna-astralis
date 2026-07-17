import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/conjonction";

export const metadata: Metadata = {
  title:
    "La conjonction en astrologie : signification dans le thème natal | Luna Astralis",

  description:
    "Découvrez la signification de la conjonction en astrologie, son angle de 0°, ses effets entre les planètes et son interprétation dans un thème natal.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "La conjonction en astrologie : fusion et intensité planétaire",
    description:
      "Comprenez comment la conjonction fusionne les énergies de deux planètes et influence leur expression dans une carte du ciel.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "La conjonction en astrologie | Luna Astralis",
    description:
      "Angle de 0°, fusion des planètes, intensité et exemples d’interprétation dans le thème natal.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const EXAMPLES = [
  {
    planets:
      "Soleil conjoint Lune",
    symbol:
      "☀ ☌ ☽",
    keywords:
      "Identité • émotions • unité intérieure",
    text:
      "Le Soleil conjoint à la Lune rapproche fortement l’identité consciente et les besoins émotionnels. La personne peut agir de manière très cohérente avec ce qu’elle ressent, mais elle peut aussi avoir plus de difficulté à prendre du recul sur ses réactions.",
  },
  {
    planets:
      "Mercure conjoint Vénus",
    symbol:
      "☿ ☌ ♀",
    keywords:
      "Communication • charme • créativité",
    text:
      "Mercure conjoint à Vénus peut favoriser une expression agréable, diplomatique ou artistique. Les idées, les valeurs et la manière de communiquer fonctionnent ensemble avec beaucoup de naturel.",
  },
  {
    planets:
      "Vénus conjointe Mars",
    symbol:
      "♀ ☌ ♂",
    keywords:
      "Attirance • désir • intensité relationnelle",
    text:
      "Vénus conjointe à Mars unit le désir d’harmonie et l’énergie d’action. Cette combinaison peut renforcer l’attirance, le magnétisme, la créativité et l’intensité dans les relations.",
  },
  {
    planets:
      "Mars conjoint Saturne",
    symbol:
      "♂ ☌ ♄",
    keywords:
      "Effort • contrôle • endurance",
    text:
      "Mars conjoint à Saturne réunit l’impulsion d’agir et le besoin de contrôle. Cette conjonction peut créer de la frustration, mais aussi une grande capacité d’endurance, de discipline et de concentration.",
  },
  {
    planets:
      "Jupiter conjoint Saturne",
    symbol:
      "♃ ☌ ♄",
    keywords:
      "Expansion • structure • construction",
    text:
      "Jupiter conjoint à Saturne cherche à équilibrer la croissance et la prudence. Cette combinaison peut aider à transformer de grandes ambitions en projets solides et durables.",
  },
  {
    planets:
      "Lune conjointe Pluton",
    symbol:
      "☽ ☌ ♇",
    keywords:
      "Profondeur • instinct • transformation",
    text:
      "La Lune conjointe à Pluton intensifie le monde émotionnel. Les sentiments peuvent être profonds, puissants et parfois difficiles à contrôler, avec une grande capacité de transformation intérieure.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Qu’est-ce qu’une conjonction en astrologie ?",
    answer:
      "Une conjonction se forme lorsque deux planètes sont très proches l’une de l’autre dans le zodiaque, autour d’un angle de 0 degré. Leurs fonctions symboliques se mélangent et agissent avec une grande intensité.",
  },
  {
    question:
      "La conjonction est-elle un aspect positif ?",
    answer:
      "La conjonction n’est ni automatiquement positive ni négative. Son expression dépend des planètes concernées, des signes, des maisons et des autres aspects du thème natal.",
  },
  {
    question:
      "Quel orbe utiliser pour une conjonction ?",
    answer:
      "L’orbe dépend de la méthode astrologique utilisée. Une conjonction est souvent interprétée jusqu’à environ 8 degrés, avec une marge parfois plus large lorsque le Soleil ou la Lune est impliqué.",
  },
  {
    question:
      "Une conjonction rend-elle les planètes plus fortes ?",
    answer:
      "Elle augmente généralement leur présence dans le thème natal. Les deux planètes deviennent étroitement liées et leur combinaison peut jouer un rôle central dans la personnalité ou l’expérience.",
  },
  {
    question:
      "Que signifie une conjonction dans la même maison ?",
    answer:
      "Lorsque deux planètes sont conjointes dans une maison, leurs fonctions se concentrent dans le domaine de vie représenté par cette maison, comme les relations, la carrière, la famille ou les ressources.",
  },
  {
    question:
      "Peut-on avoir plusieurs conjonctions dans un thème natal ?",
    answer:
      "Oui. Un thème natal peut contenir plusieurs conjonctions et même un regroupement de trois planètes ou plus, parfois appelé amas planétaire ou stellium.",
  },
  {
    question:
      "Comment savoir si j’ai une conjonction dans mon thème ?",
    answer:
      "Il faut générer votre carte du ciel et comparer la position en degrés de vos planètes. Deux planètes très proches peuvent former une conjonction selon l’orbe retenu.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "La conjonction en astrologie : signification dans le thème natal",
  description:
    "Guide complet pour comprendre la conjonction astrologique, son angle de 0 degré, son orbe et son interprétation entre les planètes.",
  inLanguage: "fr-CA",
  url: PAGE_URL,
  mainEntityOfPage: PAGE_URL,
  author: {
    "@type": "Organization",
    name: "Luna Astralis",
    url: "https://luna-astralis.app",
  },
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

export default function ConjonctionAstrologiePage() {
  return (
    <div className="conjunction-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd
          ).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqJsonLd
          ).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="conjunction-wrap">
        <nav
          className="conjunction-breadcrumb"
          aria-label="Fil d’Ariane"
        >
          <Link href="/">
            Accueil
          </Link>

          <span aria-hidden="true">
            /
          </span>

          <Link href="/astrologie/aspects">
            Aspects
          </Link>

          <span aria-hidden="true">
            /
          </span>

          <span>
            Conjonction
          </span>
        </nav>

        <section className="conjunction-hero">
          <div className="conjunction-badge">
            ✦ Aspect astrologique majeur
          </div>

          <div
            className="conjunction-main-symbol"
            aria-hidden="true"
          >
            ☌
          </div>

          <h1>
            La conjonction en astrologie
          </h1>

          <p className="conjunction-hero-lead">
            La conjonction se forme lorsque deux
            planètes occupent presque le même degré
            du zodiaque. Leurs énergies fusionnent,
            se renforcent et deviennent
            profondément liées dans le thème natal.
          </p>

          <div className="conjunction-hero-data">
            <div>
              <span>
                Angle
              </span>

              <strong>
                0°
              </strong>
            </div>

            <div>
              <span>
                Dynamique
              </span>

              <strong>
                Fusion
              </strong>
            </div>

            <div>
              <span>
                Fonction
              </span>

              <strong>
                Intensification
              </strong>
            </div>
          </div>

          <div className="conjunction-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="conjunction-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification"
              className="conjunction-secondary-button"
            >
              Comprendre la conjonction
            </a>
          </div>
        </section>

        <article className="conjunction-content">
          <section id="signification">
            <span className="conjunction-kicker">
              Une fusion planétaire
            </span>

            <h2>
              Que signifie une conjonction en astrologie ?
            </h2>

            <p>
              La conjonction est un aspect qui se
              forme lorsque deux planètes sont
              situées très près l’une de l’autre
              dans le cercle zodiacal. L’angle
              exact de la conjonction est de
              0 degré, mais une certaine marge,
              appelée orbe, est généralement
              acceptée.
            </p>

            <p>
              Dans une conjonction, les fonctions
              symboliques des deux planètes se
              mélangent. Elles ne fonctionnent plus
              de manière totalement séparée. Elles
              forment une combinaison unique qui
              peut devenir très visible dans le
              caractère, les décisions ou les
              expériences de la personne.
            </p>

            <p>
              Une conjonction peut être fluide,
              intense, exigeante ou ambivalente.
              Son interprétation dépend surtout de
              la nature des planètes impliquées,
              du signe dans lequel elles se
              trouvent, de la maison concernée et
              des autres aspects qui les touchent.
            </p>
          </section>

          <section>
            <h2>
              Comment fonctionne la conjonction ?
            </h2>

            <div className="conjunction-reading-grid">
              <article className="conjunction-reading-card">
                <span className="conjunction-reading-number">
                  01
                </span>

                <h3>
                  Les énergies fusionnent
                </h3>

                <p>
                  Les deux planètes agissent
                  ensemble et deviennent difficiles
                  à séparer dans l’interprétation.
                </p>
              </article>

              <article className="conjunction-reading-card">
                <span className="conjunction-reading-number">
                  02
                </span>

                <h3>
                  Leur intensité augmente
                </h3>

                <p>
                  La zone du thème occupée par la
                  conjonction reçoit une forte
                  concentration d’énergie.
                </p>
              </article>

              <article className="conjunction-reading-card">
                <span className="conjunction-reading-number">
                  03
                </span>

                <h3>
                  Les fonctions se colorent
                </h3>

                <p>
                  Chaque planète influence la
                  manière dont l’autre se manifeste
                  et exprime sa fonction.
                </p>
              </article>

              <article className="conjunction-reading-card">
                <span className="conjunction-reading-number">
                  04
                </span>

                <h3>
                  Le thème devient plus concentré
                </h3>

                <p>
                  La maison et le signe de la
                  conjonction peuvent devenir des
                  éléments dominants du thème natal.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="conjunction-kicker">
              Une énergie neutre à l’origine
            </span>

            <h2>
              La conjonction est-elle harmonieuse ou difficile ?
            </h2>

            <p>
              Contrairement au trigone, au sextile,
              au carré ou à l’opposition, la
              conjonction n’est pas automatiquement
              classée comme harmonieuse ou
              dynamique. Elle agit principalement
              comme un amplificateur.
            </p>

            <div className="conjunction-polarity-grid">
              <article className="conjunction-polarity-card">
                <span className="conjunction-polarity-icon">
                  ✦
                </span>

                <h3>
                  Une conjonction fluide
                </h3>

                <p>
                  Lorsque les fonctions des
                  planètes s’accordent facilement,
                  la conjonction peut créer une
                  force naturelle, cohérente et
                  productive.
                </p>

                <p>
                  Par exemple, Mercure conjoint à
                  Vénus peut relier la pensée, la
                  communication, l’esthétique et la
                  diplomatie.
                </p>
              </article>

              <article className="conjunction-polarity-card">
                <span className="conjunction-polarity-icon">
                  ⚡
                </span>

                <h3>
                  Une conjonction exigeante
                </h3>

                <p>
                  Lorsque les planètes ont des
                  fonctions très différentes, leur
                  fusion peut produire une tension
                  intérieure ou une énergie plus
                  difficile à contrôler.
                </p>

                <p>
                  Mars conjoint à Saturne peut par
                  exemple créer un conflit entre
                  l’impulsion d’agir et le besoin
                  de ralentir ou de se contrôler.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="conjunction-kicker">
              Les éléments à observer
            </span>

            <h2>
              Comment interpréter une conjonction dans un thème natal ?
            </h2>

            <div className="conjunction-method-list">
              <article className="conjunction-method-item">
                <span>
                  1
                </span>

                <div>
                  <h3>
                    Identifier les deux planètes
                  </h3>

                  <p>
                    Chaque planète représente une
                    fonction particulière. Il faut
                    d’abord comprendre ce que
                    chacune symbolise avant
                    d’étudier leur combinaison.
                  </p>
                </div>
              </article>

              <article className="conjunction-method-item">
                <span>
                  2
                </span>

                <div>
                  <h3>
                    Observer leur signe
                  </h3>

                  <p>
                    Le signe décrit la manière dont
                    les deux planètes conjointes
                    expriment leur énergie commune.
                  </p>
                </div>
              </article>

              <article className="conjunction-method-item">
                <span>
                  3
                </span>

                <div>
                  <h3>
                    Étudier leur maison
                  </h3>

                  <p>
                    La maison révèle le domaine de
                    vie dans lequel la conjonction
                    se manifeste avec le plus de
                    force.
                  </p>
                </div>
              </article>

              <article className="conjunction-method-item">
                <span>
                  4
                </span>

                <div>
                  <h3>
                    Vérifier la précision
                  </h3>

                  <p>
                    Plus les planètes sont proches
                    de l’angle exact de 0 degré,
                    plus leur fusion est
                    généralement considérée comme
                    intense.
                  </p>
                </div>
              </article>

              <article className="conjunction-method-item">
                <span>
                  5
                </span>

                <div>
                  <h3>
                    Examiner les autres aspects
                  </h3>

                  <p>
                    Un carré, un trigone ou une
                    opposition formé avec une autre
                    planète peut modifier la façon
                    dont la conjonction s’exprime.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              L’orbe de la conjonction
            </h2>

            <p>
              L’orbe est l’écart entre la position
              réelle des planètes et l’angle exact
              de 0 degré. Les pratiques varient,
              mais une conjonction peut souvent
              être étudiée jusqu’à environ
              8 degrés.
            </p>

            <div className="conjunction-orb-grid">
              <article className="conjunction-orb-card">
                <span className="conjunction-orb-value">
                  0° à 2°
                </span>

                <h3>
                  Conjonction très serrée
                </h3>

                <p>
                  La fusion est très forte. Les
                  planètes fonctionnent presque
                  comme une seule unité dans le
                  thème natal.
                </p>
              </article>

              <article className="conjunction-orb-card">
                <span className="conjunction-orb-value">
                  3° à 5°
                </span>

                <h3>
                  Conjonction forte
                </h3>

                <p>
                  L’aspect reste clairement
                  perceptible et peut occuper une
                  place importante dans la
                  personnalité.
                </p>
              </article>

              <article className="conjunction-orb-card">
                <span className="conjunction-orb-value">
                  6° à 8°
                </span>

                <h3>
                  Conjonction plus large
                </h3>

                <p>
                  L’aspect peut encore être retenu,
                  particulièrement lorsque le
                  Soleil ou la Lune est impliqué.
                </p>
              </article>
            </div>

            <p>
              Une conjonction très précise est
              souvent plus visible, mais l’orbe ne
              doit jamais être étudié seul. La
              nature des planètes et leur rôle dans
              l’ensemble du thème restent
              essentiels.
            </p>
          </section>

          <section>
            <span className="conjunction-kicker">
              Exemples d’interprétation
            </span>

            <h2>
              Les principales conjonctions entre les planètes
            </h2>

            <p>
              Une même conjonction peut s’exprimer
              différemment selon le signe, la
              maison et les autres aspects. Les
              exemples suivants présentent leur
              dynamique générale.
            </p>

            <div className="conjunction-examples-grid">
              {EXAMPLES.map((example) => (
                <article
                  className="conjunction-example-card"
                  key={example.planets}
                >
                  <div className="conjunction-example-symbol">
                    {example.symbol}
                  </div>

                  <h3>
                    {example.planets}
                  </h3>

                  <p className="conjunction-example-keywords">
                    {example.keywords}
                  </p>

                  <p>
                    {example.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              La conjonction dans les signes astrologiques
            </h2>

            <p>
              Le signe donne une couleur particulière
              à la conjonction. Il décrit la manière
              dont les planètes conjointes expriment
              leur énergie commune.
            </p>

            <div className="conjunction-signs-grid">
              <article className="conjunction-sign-card">
                <span>
                  Feu
                </span>

                <h3>
                  Bélier, Lion, Sagittaire
                </h3>

                <p>
                  La conjonction tend à s’exprimer
                  avec dynamisme, spontanéité,
                  enthousiasme et besoin d’action.
                </p>
              </article>

              <article className="conjunction-sign-card">
                <span>
                  Terre
                </span>

                <h3>
                  Taureau, Vierge, Capricorne
                </h3>

                <p>
                  L’énergie devient plus concrète,
                  structurée, prudente et orientée
                  vers les résultats durables.
                </p>
              </article>

              <article className="conjunction-sign-card">
                <span>
                  Air
                </span>

                <h3>
                  Gémeaux, Balance, Verseau
                </h3>

                <p>
                  La conjonction s’exprime davantage
                  par les idées, les échanges, les
                  relations et la compréhension.
                </p>
              </article>

              <article className="conjunction-sign-card">
                <span>
                  Eau
                </span>

                <h3>
                  Cancer, Scorpion, Poissons
                </h3>

                <p>
                  La fusion planétaire devient plus
                  émotionnelle, intuitive, sensible
                  et profondément intérieure.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La conjonction dans les maisons astrologiques
            </h2>

            <p>
              La maison occupée par la conjonction
              montre le domaine de vie où cette
              énergie combinée cherche à se
              manifester.
            </p>

            <div className="conjunction-houses-grid">
              <article className="conjunction-house-card">
                <strong>
                  Maisons 1 à 3
                </strong>

                <p>
                  Identité, apparence, ressources,
                  valeurs, pensée, apprentissage et
                  communication.
                </p>
              </article>

              <article className="conjunction-house-card">
                <strong>
                  Maisons 4 à 6
                </strong>

                <p>
                  Famille, vie intérieure,
                  créativité, amour, travail,
                  habitudes et santé quotidienne.
                </p>
              </article>

              <article className="conjunction-house-card">
                <strong>
                  Maisons 7 à 9
                </strong>

                <p>
                  Relations, engagements,
                  transformations, croyances,
                  voyages et recherche de sens.
                </p>
              </article>

              <article className="conjunction-house-card">
                <strong>
                  Maisons 10 à 12
                </strong>

                <p>
                  Carrière, réputation, projets,
                  groupes, vie intérieure,
                  spiritualité et inconscient.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="conjunction-kicker">
              Concentration planétaire
            </span>

            <h2>
              Quelle est la différence entre une conjonction et un stellium ?
            </h2>

            <div className="conjunction-stellium-card">
              <div className="conjunction-stellium-symbols">
                ☉ ☿ ♀
              </div>

              <div>
                <h3>
                  Plusieurs planètes regroupées
                </h3>

                <p>
                  Une conjonction concerne
                  généralement deux planètes. Un
                  stellium désigne un regroupement
                  de trois planètes ou plus dans un
                  même signe ou une même maison.
                </p>

                <p>
                  Un stellium concentre une grande
                  partie de l’énergie du thème
                  natal dans une zone précise. Le
                  signe et la maison concernés
                  peuvent alors devenir
                  particulièrement importants dans
                  la vie de la personne.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              La conjonction dans les transits astrologiques
            </h2>

            <p>
              Une conjonction peut également se
              produire lorsqu’une planète en
              mouvement passe sur une planète ou un
              point de votre thème natal. On parle
              alors de transit.
            </p>

            <p>
              Un transit de conjonction peut
              annoncer une période de
              concentration, de commencement,
              d’intensification ou de transformation
              dans le domaine représenté par la
              planète et la maison concernées.
            </p>

            <p>
              L’interprétation dépend de la planète
              en transit. Jupiter peut amplifier et
              ouvrir de nouvelles possibilités,
              tandis que Saturne peut demander
              davantage de structure, de patience
              ou de responsabilité.
            </p>

            <div className="conjunction-cta-card">
              <div>
                <span className="conjunction-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Avez-vous une conjonction importante dans votre carte du ciel ?
                </h2>

                <p>
                  Générez gratuitement votre carte
                  du ciel pour découvrir vos
                  planètes, vos maisons et les
                  principaux aspects de votre
                  naissance.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="conjunction-primary-button"
              >
                Voir ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="conjunction-faq">
            <span className="conjunction-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur la conjonction en astrologie
            </h2>

            <div className="conjunction-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="conjunction-faq-item"
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

          <nav
            className="conjunction-aspects-nav"
            aria-label="Navigation entre les aspects astrologiques"
          >
            <Link
              href="/astrologie/aspects"
              className="conjunction-back-link"
            >
              <span aria-hidden="true">
                ←
              </span>

              Tous les aspects
            </Link>

            <Link
              href="/astrologie/opposition"
              className="conjunction-next-link"
            >
              Aspect suivant : opposition

              <span aria-hidden="true">
                →
              </span>
            </Link>
          </nav>

          <p className="conjunction-disclaimer">
            L’astrologie est présentée comme un
            langage symbolique d’exploration
            personnelle. Elle ne remplace pas un
            avis médical, psychologique, juridique
            ou financier.
          </p>
        </article>
      </main>
    </div>
  );
}
