import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/aspects/carre";

export const metadata: Metadata = {
  title:
    "Le carré en astrologie : signification dans le thème natal | Luna Astralis",

  description:
    "Découvrez la signification du carré en astrologie, son angle de 90°, ses tensions entre les planètes et son interprétation dans un thème natal.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Le carré en astrologie : tension, action et dépassement",
    description:
      "Comprenez comment le carré crée une tension entre deux planètes et pousse à agir, évoluer et développer de nouvelles forces.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le carré en astrologie | Luna Astralis",
    description:
      "Angle de 90°, tensions intérieures, défis et potentiel d’évolution dans le thème natal.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const EXAMPLES = [
  {
    planets:
      "Soleil carré Lune",
    symbol:
      "☀ □ ☽",
    keywords:
      "Identité • émotions • conflit intérieur",
    text:
      "Le Soleil carré à la Lune peut créer une tension entre l’identité consciente et les besoins émotionnels. La personne doit apprendre à agir sans ignorer ce qu’elle ressent réellement.",
  },
  {
    planets:
      "Mercure carré Saturne",
    symbol:
      "☿ □ ♄",
    keywords:
      "Pensée • retenue • discipline mentale",
    text:
      "Mercure carré à Saturne peut produire une pensée prudente, exigeante ou critique. Cet aspect peut compliquer l’expression spontanée, mais il favorise aussi la concentration et la rigueur.",
  },
  {
    planets:
      "Vénus carrée Pluton",
    symbol:
      "♀ □ ♇",
    keywords:
      "Relations • intensité • transformation",
    text:
      "Vénus carrée à Pluton peut intensifier les sentiments, l’attachement et les rapports de pouvoir. Elle demande d’apprendre à aimer sans chercher à contrôler ou à posséder.",
  },
  {
    planets:
      "Mars carré Saturne",
    symbol:
      "♂ □ ♄",
    keywords:
      "Action • frustration • endurance",
    text:
      "Mars carré à Saturne peut donner l’impression d’avancer avec le frein serré. La frustration peut être forte, mais cet aspect développe souvent une grande persévérance.",
  },
  {
    planets:
      "Jupiter carré Neptune",
    symbol:
      "♃ □ ♆",
    keywords:
      "Expansion • idéal • discernement",
    text:
      "Jupiter carré à Neptune peut favoriser de grandes aspirations, mais aussi des attentes irréalistes. La personne doit apprendre à unir inspiration et discernement.",
  },
  {
    planets:
      "Lune carrée Uranus",
    symbol:
      "☽ □ ♅",
    keywords:
      "Émotions • liberté • imprévisibilité",
    text:
      "La Lune carrée à Uranus peut rendre les réactions émotionnelles rapides et changeantes. Le besoin de sécurité entre souvent en conflit avec le désir de liberté.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Qu’est-ce qu’un carré en astrologie ?",
    answer:
      "Un carré se forme lorsque deux planètes sont séparées par un angle d’environ 90 degrés. Il représente une tension dynamique qui pousse la personne à agir, à s’adapter et à développer de nouvelles capacités.",
  },
  {
    question:
      "Le carré est-il toujours négatif ?",
    answer:
      "Non. Le carré peut créer de la frustration ou des obstacles, mais il apporte aussi de l’énergie, de la motivation et un fort potentiel de dépassement.",
  },
  {
    question:
      "Quel orbe utiliser pour un carré ?",
    answer:
      "L’orbe varie selon les méthodes astrologiques. Un carré est souvent interprété jusqu’à environ 7 degrés, avec une marge parfois plus large lorsque le Soleil ou la Lune est impliqué.",
  },
  {
    question:
      "Pourquoi le carré pousse-t-il à agir ?",
    answer:
      "Les fonctions des deux planètes ne s’accordent pas naturellement. La tension ressentie devient difficile à ignorer et pousse la personne à chercher des solutions concrètes.",
  },
  {
    question:
      "Quelle est la différence entre un carré et une opposition ?",
    answer:
      "L’opposition met deux forces face à face et demande un équilibre. Le carré crée davantage de friction intérieure et pousse directement à l’action et au changement.",
  },
  {
    question:
      "Un carré peut-il devenir une force ?",
    answer:
      "Oui. Avec le temps, les carrés peuvent devenir des sources de courage, de persévérance, de compétence et de maîtrise personnelle.",
  },
  {
    question:
      "Comment savoir si j’ai un carré dans mon thème natal ?",
    answer:
      "Il faut générer votre carte du ciel et comparer la position de vos planètes. Deux planètes séparées par environ 90 degrés peuvent former un carré.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Le carré en astrologie : signification dans le thème natal",
  description:
    "Guide complet pour comprendre le carré astrologique, son angle de 90 degrés, son orbe et son interprétation entre les planètes.",
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

export default function CarreAstrologiePage() {
  return (
    <div className="square-page">
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

      <main className="square-wrap">
        <nav
          className="square-breadcrumb"
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
            Carré
          </span>
        </nav>

        <section className="square-hero">
          <div className="square-badge">
            ✦ Aspect astrologique majeur
          </div>

          <div
            className="square-main-symbol"
            aria-hidden="true"
          >
            □
          </div>

          <h1>
            Le carré en astrologie
          </h1>

          <p className="square-hero-lead">
            Le carré se forme lorsque deux planètes
            sont séparées par un angle de 90 degrés.
            Il crée une tension dynamique qui pousse
            à agir, à surmonter les obstacles et à
            développer de nouvelles forces.
          </p>

          <div className="square-hero-data">
            <div>
              <span>
                Angle
              </span>

              <strong>
                90°
              </strong>
            </div>

            <div>
              <span>
                Dynamique
              </span>

              <strong>
                Tension
              </strong>
            </div>

            <div>
              <span>
                Fonction
              </span>

              <strong>
                Évolution
              </strong>
            </div>
          </div>

          <div className="square-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="square-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification"
              className="square-secondary-button"
            >
              Comprendre le carré
            </a>
          </div>
        </section>

        <article className="square-content">
          <section id="signification">
            <span className="square-kicker">
              Une tension qui pousse à évoluer
            </span>

            <h2>
              Que signifie un carré en astrologie ?
            </h2>

            <p>
              Le carré est un aspect qui se forme
              lorsque deux planètes sont séparées
              par un angle d’environ 90 degrés dans
              le cercle zodiacal.
            </p>

            <p>
              Les fonctions représentées par les
              deux planètes cherchent toutes les
              deux à s’exprimer, mais elles ne
              fonctionnent pas naturellement
              ensemble. Cette friction peut créer
              des frustrations, des obstacles ou
              des réactions répétitives.
            </p>

            <p>
              Le carré est toutefois un aspect
              profondément actif. Il empêche la
              personne de rester passive et
              l’oblige à chercher des solutions,
              à se dépasser et à développer une
              plus grande maîtrise d’elle-même.
            </p>
          </section>

          <section>
            <h2>
              Comment fonctionne le carré ?
            </h2>

            <div className="square-reading-grid">
              <article className="square-reading-card">
                <span className="square-reading-number">
                  01
                </span>

                <h3>
                  Deux fonctions se heurtent
                </h3>

                <p>
                  Les planètes expriment des besoins
                  différents qui ne s’accordent pas
                  spontanément.
                </p>
              </article>

              <article className="square-reading-card">
                <span className="square-reading-number">
                  02
                </span>

                <h3>
                  Une tension s’accumule
                </h3>

                <p>
                  La friction peut devenir visible
                  dans les réactions, les décisions
                  ou les situations répétitives.
                </p>
              </article>

              <article className="square-reading-card">
                <span className="square-reading-number">
                  03
                </span>

                <h3>
                  L’action devient nécessaire
                </h3>

                <p>
                  Le carré demande de modifier une
                  attitude, une habitude ou une
                  manière de répondre aux défis.
                </p>
              </article>

              <article className="square-reading-card">
                <span className="square-reading-number">
                  04
                </span>

                <h3>
                  Une force se construit
                </h3>

                <p>
                  Les efforts répétés peuvent
                  développer une compétence, une
                  endurance ou une grande maturité.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="square-kicker">
              Un aspect dynamique
            </span>

            <h2>
              Le carré est-il un aspect difficile ?
            </h2>

            <p>
              Le carré est généralement classé
              parmi les aspects dynamiques ou
              dissonants. Il peut créer une tension
              intérieure importante, surtout
              lorsque les planètes concernées
              représentent des besoins très
              différents.
            </p>

            <div className="square-polarity-grid">
              <article className="square-polarity-card">
                <span className="square-polarity-icon">
                  ⚡
                </span>

                <h3>
                  Les défis du carré
                </h3>

                <p>
                  Le carré peut produire de la
                  frustration, de l’impatience, des
                  blocages ou l’impression de
                  rencontrer toujours le même type
                  d’obstacle.
                </p>

                <p>
                  La personne peut également
                  compenser excessivement l’une des
                  planètes ou passer d’un extrême à
                  l’autre.
                </p>
              </article>

              <article className="square-polarity-card">
                <span className="square-polarity-icon">
                  ✦
                </span>

                <h3>
                  Le potentiel du carré
                </h3>

                <p>
                  Le carré apporte une grande
                  quantité d’énergie disponible
                  pour évoluer, entreprendre et
                  apprendre par l’expérience.
                </p>

                <p>
                  Lorsqu’il est mieux maîtrisé, il
                  peut devenir une source de
                  courage, de discipline, de
                  créativité et de persévérance.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="square-kicker">
              Les éléments à observer
            </span>

            <h2>
              Comment interpréter un carré dans un thème natal ?
            </h2>

            <div className="square-method-list">
              <article className="square-method-item">
                <span>
                  1
                </span>

                <div>
                  <h3>
                    Identifier les deux planètes
                  </h3>

                  <p>
                    Il faut comprendre les fonctions
                    symboliques de chaque planète et
                    observer pourquoi elles ont de
                    la difficulté à collaborer.
                  </p>
                </div>
              </article>

              <article className="square-method-item">
                <span>
                  2
                </span>

                <div>
                  <h3>
                    Observer les signes
                  </h3>

                  <p>
                    Les signes montrent les
                    attitudes, les besoins et les
                    styles d’expression qui entrent
                    en tension.
                  </p>
                </div>
              </article>

              <article className="square-method-item">
                <span>
                  3
                </span>

                <div>
                  <h3>
                    Étudier les maisons
                  </h3>

                  <p>
                    Les maisons révèlent les domaines
                    de vie dans lesquels les défis
                    du carré se manifestent le plus
                    souvent.
                  </p>
                </div>
              </article>

              <article className="square-method-item">
                <span>
                  4
                </span>

                <div>
                  <h3>
                    Repérer les répétitions
                  </h3>

                  <p>
                    Les carrés apparaissent souvent
                    sous la forme de situations qui
                    se répètent jusqu’à ce qu’une
                    nouvelle réponse soit développée.
                  </p>
                </div>
              </article>

              <article className="square-method-item">
                <span>
                  5
                </span>

                <div>
                  <h3>
                    Chercher une action constructive
                  </h3>

                  <p>
                    Le carré demande généralement
                    une réponse active, concrète et
                    consciente plutôt qu’un simple
                    compromis intérieur.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              L’orbe du carré
            </h2>

            <p>
              L’orbe représente l’écart entre
              l’angle exact de 90 degrés et la
              position réelle des planètes. Selon
              les méthodes utilisées, un carré peut
              souvent être interprété jusqu’à
              environ 7 degrés.
            </p>

            <div className="square-orb-grid">
              <article className="square-orb-card">
                <span className="square-orb-value">
                  0° à 2°
                </span>

                <h3>
                  Carré très serré
                </h3>

                <p>
                  La tension est très intense et
                  peut devenir l’un des principaux
                  moteurs d’évolution du thème natal.
                </p>
              </article>

              <article className="square-orb-card">
                <span className="square-orb-value">
                  3° à 5°
                </span>

                <h3>
                  Carré fort
                </h3>

                <p>
                  La friction entre les deux
                  planètes demeure clairement
                  perceptible dans la personnalité
                  et les expériences.
                </p>
              </article>

              <article className="square-orb-card">
                <span className="square-orb-value">
                  6° à 7°
                </span>

                <h3>
                  Carré plus large
                </h3>

                <p>
                  L’aspect peut encore être
                  significatif, particulièrement
                  lorsque le Soleil ou la Lune est
                  concerné.
                </p>
              </article>
            </div>

            <p>
              Un carré très exact est souvent plus
              visible, mais son importance dépend
              également du rôle des planètes dans
              l’ensemble du thème natal.
            </p>
          </section>

          <section>
            <span className="square-kicker">
              Exemples d’interprétation
            </span>

            <h2>
              Les principaux carrés entre les planètes
            </h2>

            <p>
              Chaque carré s’exprime différemment
              selon les signes, les maisons et les
              autres aspects du thème. Les exemples
              suivants présentent leur dynamique
              générale.
            </p>

            <div className="square-examples-grid">
              {EXAMPLES.map((example) => (
                <article
                  className="square-example-card"
                  key={example.planets}
                >
                  <div className="square-example-symbol">
                    {example.symbol}
                  </div>

                  <h3>
                    {example.planets}
                  </h3>

                  <p className="square-example-keywords">
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
              Le carré dans les signes astrologiques
            </h2>

            <p>
              Les carrés se forment souvent entre
              des signes appartenant au même mode.
              Ils partagent une manière semblable
              d’agir, mais expriment des éléments
              et des besoins différents.
            </p>

            <div className="square-modes-grid">
              <article className="square-mode-card">
                <span>
                  Signes cardinaux
                </span>

                <h3>
                  Bélier, Cancer, Balance, Capricorne
                </h3>

                <p>
                  Les tensions concernent souvent
                  l’initiative, les décisions, les
                  relations, la sécurité et les
                  responsabilités.
                </p>
              </article>

              <article className="square-mode-card">
                <span>
                  Signes fixes
                </span>

                <h3>
                  Taureau, Lion, Scorpion, Verseau
                </h3>

                <p>
                  Les défis touchent la stabilité,
                  la volonté, l’attachement, le
                  contrôle et la difficulté à
                  changer de direction.
                </p>
              </article>

              <article className="square-mode-card">
                <span>
                  Signes mutables
                </span>

                <h3>
                  Gémeaux, Vierge, Sagittaire, Poissons
                </h3>

                <p>
                  Les tensions se manifestent dans
                  les idées, l’adaptation, les
                  croyances, l’organisation et le
                  besoin de lâcher-prise.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              Le carré dans les maisons astrologiques
            </h2>

            <p>
              Les maisons concernées indiquent les
              domaines de vie dans lesquels la
              friction et le besoin d’évolution se
              manifestent le plus fortement.
            </p>

            <div className="square-houses-grid">
              <article className="square-house-card">
                <strong>
                  Maisons personnelles
                </strong>

                <p>
                  Les maisons 1 à 3 peuvent mettre
                  l’accent sur l’identité, les
                  ressources, la confiance et la
                  communication.
                </p>
              </article>

              <article className="square-house-card">
                <strong>
                  Maisons intimes
                </strong>

                <p>
                  Les maisons 4 à 6 peuvent créer
                  des défis liés à la famille, aux
                  émotions, à la créativité, au
                  travail ou à la santé.
                </p>
              </article>

              <article className="square-house-card">
                <strong>
                  Maisons relationnelles
                </strong>

                <p>
                  Les maisons 7 à 9 peuvent mettre
                  en tension les relations,
                  l’intimité, les croyances et la
                  recherche de sens.
                </p>
              </article>

              <article className="square-house-card">
                <strong>
                  Maisons collectives
                </strong>

                <p>
                  Les maisons 10 à 12 peuvent
                  concerner la carrière, les projets,
                  la vie sociale, les rêves et la
                  vie intérieure.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="square-kicker">
              Une structure de tension
            </span>

            <h2>
              Qu’est-ce qu’un grand carré en astrologie ?
            </h2>

            <div className="square-grand-card">
              <div className="square-grand-symbol">
                □
              </div>

              <div>
                <h3>
                  Quatre planètes reliées par des carrés
                </h3>

                <p>
                  Un grand carré est une figure
                  astrologique formée lorsque quatre
                  planètes créent plusieurs carrés
                  et deux oppositions dans le thème
                  natal.
                </p>

                <p>
                  Cette configuration concentre une
                  forte tension dans plusieurs
                  domaines de vie. La personne peut
                  se sentir poussée dans différentes
                  directions et devoir constamment
                  agir pour maintenir un équilibre.
                </p>

                <p>
                  Malgré ses défis, le grand carré
                  peut donner une grande énergie,
                  une forte capacité de résistance
                  et un potentiel important de
                  réalisation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <span className="square-kicker">
              Une figure d’évolution
            </span>

            <h2>
              Qu’est-ce qu’un carré en T ?
            </h2>

            <div className="square-t-card">
              <div className="square-t-symbols">
                ☍
                <span>
                  □
                </span>
              </div>

              <div>
                <h3>
                  Une opposition activée par une troisième planète
                </h3>

                <p>
                  Un carré en T se forme lorsqu’une
                  planète est en carré avec les
                  deux planètes d’une opposition.
                </p>

                <p>
                  La planète située au sommet du
                  carré en T concentre une grande
                  partie de la tension. Elle devient
                  souvent un point d’action, de
                  défi et de développement essentiel
                  dans le thème natal.
                </p>

                <p>
                  Cette configuration pousse la
                  personne à agir et à trouver une
                  manière plus constructive
                  d’utiliser son énergie.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Le carré dans les transits astrologiques
            </h2>

            <p>
              Un carré peut également se former
              lorsqu’une planète en mouvement crée
              un angle de 90 degrés avec une planète
              de votre thème natal.
            </p>

            <p>
              Ce transit peut correspondre à une
              période de pression, de décision,
              d’effort ou de changement. Il met
              souvent en évidence une situation qui
              ne peut plus être ignorée.
            </p>

            <p>
              Les carrés de Saturne peuvent demander
              davantage de discipline et de
              responsabilité, tandis que ceux
              d’Uranus peuvent pousser à rompre avec
              une structure devenue trop rigide.
            </p>

            <div className="square-cta-card">
              <div>
                <span className="square-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Avez-vous un carré important dans votre carte du ciel ?
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
                className="square-primary-button"
              >
                Voir ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="square-faq">
            <span className="square-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur le carré en astrologie
            </h2>

            <div className="square-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="square-faq-item"
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
            className="square-aspects-nav"
            aria-label="Navigation entre les aspects astrologiques"
          >
            <Link
              href="/astrologie/aspects/opposition"
              className="square-back-link"
            >
              <span aria-hidden="true">
                ←
              </span>

              Aspect précédent : opposition
            </Link>

            <Link
              href="/astrologie/aspects/trigone"
              className="square-next-link"
            >
              Aspect suivant : trigone

              <span aria-hidden="true">
                →
              </span>
            </Link>
          </nav>

          <p className="square-disclaimer">
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
