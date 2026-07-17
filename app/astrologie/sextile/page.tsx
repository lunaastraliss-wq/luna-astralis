import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/aspects/sextile";

export const metadata: Metadata = {
  title:
    "Le sextile en astrologie : signification dans le thème natal | Luna Astralis",

  description:
    "Découvrez la signification du sextile en astrologie, son angle de 60°, ses occasions favorables et son interprétation entre les planètes dans le thème natal.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Le sextile en astrologie : possibilités, coopération et potentiel",
    description:
      "Comprenez comment le sextile relie deux planètes de manière favorable et révèle des possibilités qui doivent être activées consciemment.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le sextile en astrologie | Luna Astralis",
    description:
      "Angle de 60°, possibilités, talents à développer et occasions favorables dans le thème natal.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const EXAMPLES = [
  {
    planets:
      "Soleil sextile Lune",
    symbol:
      "☀ ⚹ ☽",
    keywords:
      "Identité • émotions • coopération",
    text:
      "Le Soleil sextile à la Lune favorise une coopération naturelle entre l’identité consciente et les besoins émotionnels. La personne peut développer une plus grande cohérence intérieure par ses choix.",
  },
  {
    planets:
      "Mercure sextile Vénus",
    symbol:
      "☿ ⚹ ♀",
    keywords:
      "Communication • charme • diplomatie",
    text:
      "Mercure sextile à Vénus peut faciliter l’expression agréable, la diplomatie et la créativité verbale. La personne possède souvent un talent relationnel qui se renforce avec la pratique.",
  },
  {
    planets:
      "Vénus sextile Mars",
    symbol:
      "♀ ⚹ ♂",
    keywords:
      "Relations • désir • attraction",
    text:
      "Vénus sextile à Mars favorise une coopération entre l’affection et le désir. Cet aspect peut soutenir le charme, la créativité et la capacité à exprimer ses sentiments.",
  },
  {
    planets:
      "Mars sextile Jupiter",
    symbol:
      "♂ ⚹ ♃",
    keywords:
      "Action • confiance • expansion",
    text:
      "Mars sextile à Jupiter peut apporter enthousiasme, initiative et confiance dans l’action. Les possibilités deviennent plus importantes lorsque la personne ose agir.",
  },
  {
    planets:
      "Saturne sextile Uranus",
    symbol:
      "♄ ⚹ ♅",
    keywords:
      "Structure • innovation • adaptation",
    text:
      "Saturne sextile à Uranus permet de combiner stabilité et changement. La personne peut moderniser une structure sans perdre le sens des responsabilités.",
  },
  {
    planets:
      "Lune sextile Neptune",
    symbol:
      "☽ ⚹ ♆",
    keywords:
      "Émotions • intuition • imagination",
    text:
      "La Lune sextile à Neptune peut favoriser l’empathie, l’intuition et la sensibilité artistique. Ces qualités se développent lorsqu’elles sont exprimées concrètement.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Qu’est-ce qu’un sextile en astrologie ?",
    answer:
      "Un sextile se forme lorsque deux planètes sont séparées par un angle d’environ 60 degrés. Il représente une possibilité favorable de coopération entre les fonctions des deux planètes.",
  },
  {
    question:
      "Le sextile est-il un aspect positif ?",
    answer:
      "Oui, le sextile est généralement considéré comme harmonieux. Il offre des possibilités, mais celles-ci demandent souvent une initiative ou un choix conscient pour se développer.",
  },
  {
    question:
      "Quel orbe utiliser pour un sextile ?",
    answer:
      "L’orbe du sextile est généralement plus serré que celui des aspects majeurs plus puissants. Il est souvent interprété jusqu’à environ 5 degrés.",
  },
  {
    question:
      "Quelle est la différence entre un sextile et un trigone ?",
    answer:
      "Le trigone représente une facilité naturelle qui fonctionne presque spontanément. Le sextile indique plutôt une possibilité favorable qui devient plus forte lorsqu’elle est activée.",
  },
  {
    question:
      "Pourquoi le sextile relie-t-il des éléments compatibles ?",
    answer:
      "Les signes séparés de 60 degrés appartiennent généralement à des éléments complémentaires, comme le Feu et l’Air ou la Terre et l’Eau.",
  },
  {
    question:
      "Un sextile peut-il rester inutilisé ?",
    answer:
      "Oui. Comme il ne crée pas une forte tension, son potentiel peut rester discret si la personne ne prend pas l’initiative de le développer.",
  },
  {
    question:
      "Comment savoir si j’ai un sextile dans mon thème natal ?",
    answer:
      "Il faut générer votre carte du ciel et comparer la position de vos planètes. Deux planètes séparées par environ 60 degrés peuvent former un sextile.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Le sextile en astrologie : signification dans le thème natal",
  description:
    "Guide complet pour comprendre le sextile astrologique, son angle de 60 degrés, son orbe et son interprétation entre les planètes.",
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

export default function SextileAstrologiePage() {
  return (
    <div className="sextile-page">
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

      <main className="sextile-wrap">
        <nav
          className="sextile-breadcrumb"
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
            Sextile
          </span>
        </nav>

        <section className="sextile-hero">
          <div className="sextile-badge">
            ✦ Aspect astrologique majeur
          </div>

          <div
            className="sextile-main-symbol"
            aria-hidden="true"
          >
            ⚹
          </div>

          <h1>
            Le sextile en astrologie
          </h1>

          <p className="sextile-hero-lead">
            Le sextile se forme lorsque deux
            planètes sont séparées par un angle de
            60 degrés. Il révèle une possibilité de
            coopération, un talent à développer ou
            une occasion favorable qui demande une
            participation consciente.
          </p>

          <div className="sextile-hero-data">
            <div>
              <span>
                Angle
              </span>

              <strong>
                60°
              </strong>
            </div>

            <div>
              <span>
                Dynamique
              </span>

              <strong>
                Possibilité
              </strong>
            </div>

            <div>
              <span>
                Fonction
              </span>

              <strong>
                Activation
              </strong>
            </div>
          </div>

          <div className="sextile-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="sextile-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification"
              className="sextile-secondary-button"
            >
              Comprendre le sextile
            </a>
          </div>
        </section>

        <article className="sextile-content">
          <section id="signification">
            <span className="sextile-kicker">
              Une occasion à saisir
            </span>

            <h2>
              Que signifie un sextile en astrologie ?
            </h2>

            <p>
              Le sextile est un aspect qui se forme
              lorsque deux planètes sont séparées
              par un angle d’environ 60 degrés dans
              le cercle zodiacal.
            </p>

            <p>
              Les fonctions représentées par les
              deux planètes peuvent collaborer de
              manière favorable. Cette entente
              n’agit toutefois pas toujours
              automatiquement.
            </p>

            <p>
              Le sextile représente souvent une
              possibilité, un talent ou une
              ressource qui demande d’être activé
              par une décision, un effort ou une
              initiative personnelle.
            </p>
          </section>

          <section>
            <h2>
              Comment fonctionne le sextile ?
            </h2>

            <div className="sextile-reading-grid">
              <article className="sextile-reading-card">
                <span className="sextile-reading-number">
                  01
                </span>

                <h3>
                  Deux planètes peuvent coopérer
                </h3>

                <p>
                  Leurs fonctions sont compatibles
                  et peuvent se soutenir sans créer
                  une forte tension.
                </p>
              </article>

              <article className="sextile-reading-card">
                <span className="sextile-reading-number">
                  02
                </span>

                <h3>
                  Une possibilité apparaît
                </h3>

                <p>
                  L’aspect montre un talent, une
                  ouverture ou une occasion qui peut
                  être utilisée.
                </p>
              </article>

              <article className="sextile-reading-card">
                <span className="sextile-reading-number">
                  03
                </span>

                <h3>
                  Une initiative est nécessaire
                </h3>

                <p>
                  Le potentiel devient plus visible
                  lorsque la personne décide d’agir
                  ou de développer cette ressource.
                </p>
              </article>

              <article className="sextile-reading-card">
                <span className="sextile-reading-number">
                  04
                </span>

                <h3>
                  Une compétence se renforce
                </h3>

                <p>
                  Avec la pratique, le sextile peut
                  devenir un talent solide et un
                  appui important du thème natal.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="sextile-kicker">
              Un aspect favorable mais actif
            </span>

            <h2>
              Le sextile est-il toujours bénéfique ?
            </h2>

            <p>
              Le sextile est généralement classé
              parmi les aspects harmonieux. Il
              facilite la collaboration entre les
              planètes et peut ouvrir des chemins
              intéressants.
            </p>

            <div className="sextile-polarity-grid">
              <article className="sextile-polarity-card">
                <span className="sextile-polarity-icon">
                  ✦
                </span>

                <h3>
                  Les forces du sextile
                </h3>

                <p>
                  Le sextile favorise l’apprentissage,
                  la curiosité, l’adaptation, les
                  rencontres utiles et la capacité
                  à reconnaître les possibilités.
                </p>

                <p>
                  Il peut aussi faciliter la
                  coopération entre deux qualités
                  complémentaires de la personnalité.
                </p>
              </article>

              <article className="sextile-polarity-card">
                <span className="sextile-polarity-icon">
                  ◇
                </span>

                <h3>
                  Les limites du sextile
                </h3>

                <p>
                  Comme il ne produit pas une forte
                  pression, le sextile peut rester
                  discret ou ne jamais être utilisé
                  pleinement.
                </p>

                <p>
                  La personne peut reconnaître une
                  possibilité sans prendre les
                  mesures nécessaires pour la
                  transformer en résultat concret.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="sextile-kicker">
              Les éléments à observer
            </span>

            <h2>
              Comment interpréter un sextile dans un thème natal ?
            </h2>

            <div className="sextile-method-list">
              <article className="sextile-method-item">
                <span>
                  1
                </span>

                <div>
                  <h3>
                    Identifier les deux planètes
                  </h3>

                  <p>
                    Les planètes montrent les
                    fonctions qui peuvent collaborer
                    et créer une possibilité
                    favorable.
                  </p>
                </div>
              </article>

              <article className="sextile-method-item">
                <span>
                  2
                </span>

                <div>
                  <h3>
                    Observer les signes
                  </h3>

                  <p>
                    Les signes expliquent comment
                    les deux énergies s’expriment et
                    pourquoi elles peuvent se
                    compléter.
                  </p>
                </div>
              </article>

              <article className="sextile-method-item">
                <span>
                  3
                </span>

                <div>
                  <h3>
                    Étudier les maisons
                  </h3>

                  <p>
                    Les maisons révèlent les domaines
                    de vie dans lesquels les
                    occasions et les talents peuvent
                    apparaître.
                  </p>
                </div>
              </article>

              <article className="sextile-method-item">
                <span>
                  4
                </span>

                <div>
                  <h3>
                    Repérer les occasions
                  </h3>

                  <p>
                    Il faut observer les situations
                    où la personne reçoit une aide,
                    une ouverture ou une possibilité
                    de progression.
                  </p>
                </div>
              </article>

              <article className="sextile-method-item">
                <span>
                  5
                </span>

                <div>
                  <h3>
                    Vérifier l’initiative personnelle
                  </h3>

                  <p>
                    Le sextile produit ses meilleurs
                    résultats lorsque la personne
                    agit consciemment et transforme
                    le potentiel en expérience.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              L’orbe du sextile
            </h2>

            <p>
              L’orbe représente l’écart entre
              l’angle exact de 60 degrés et la
              position réelle des planètes. Comme
              le sextile est généralement moins
              puissant qu’une conjonction ou une
              opposition, son orbe est souvent plus
              serré.
            </p>

            <div className="sextile-orb-grid">
              <article className="sextile-orb-card">
                <span className="sextile-orb-value">
                  0° à 1°
                </span>

                <h3>
                  Sextile très serré
                </h3>

                <p>
                  La possibilité de coopération est
                  forte et peut devenir un talent
                  important lorsqu’elle est utilisée.
                </p>
              </article>

              <article className="sextile-orb-card">
                <span className="sextile-orb-value">
                  2° à 3°
                </span>

                <h3>
                  Sextile fort
                </h3>

                <p>
                  La relation entre les deux
                  planètes reste clairement visible
                  et peut soutenir plusieurs domaines
                  de vie.
                </p>
              </article>

              <article className="sextile-orb-card">
                <span className="sextile-orb-value">
                  4° à 5°
                </span>

                <h3>
                  Sextile plus large
                </h3>

                <p>
                  L’aspect peut encore être
                  significatif, surtout s’il implique
                  le Soleil, la Lune ou une planète
                  dominante.
                </p>
              </article>
            </div>

            <p>
              Plus le sextile est exact, plus sa
              coopération est facile à reconnaître.
              Sa véritable importance dépend
              toutefois de la place des planètes
              dans l’ensemble du thème natal.
            </p>
          </section>

          <section>
            <span className="sextile-kicker">
              Exemples d’interprétation
            </span>

            <h2>
              Les principaux sextiles entre les planètes
            </h2>

            <p>
              Chaque sextile s’exprime selon les
              signes, les maisons et les autres
              aspects du thème. Les exemples
              suivants présentent leur dynamique
              générale.
            </p>

            <div className="sextile-examples-grid">
              {EXAMPLES.map((example) => (
                <article
                  className="sextile-example-card"
                  key={example.planets}
                >
                  <div className="sextile-example-symbol">
                    {example.symbol}
                  </div>

                  <h3>
                    {example.planets}
                  </h3>

                  <p className="sextile-example-keywords">
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
              Le sextile et les éléments compatibles
            </h2>

            <p>
              Le sextile relie généralement des
              signes appartenant à des éléments
              différents mais compatibles. Cette
              complémentarité favorise l’échange et
              la coopération.
            </p>

            <div className="sextile-elements-grid">
              <article className="sextile-element-card">
                <div className="sextile-element-symbols">
                  🔥
                  <span>
                    ◌
                  </span>
                </div>

                <h3>
                  Feu et Air
                </h3>

                <strong>
                  Inspiration • idées • mouvement
                </strong>

                <p>
                  L’Air stimule les idées et la
                  réflexion, tandis que le Feu
                  apporte l’enthousiasme et le
                  courage de passer à l’action.
                </p>
              </article>

              <article className="sextile-element-card">
                <div className="sextile-element-symbols">
                  🌿
                  <span>
                    💧
                  </span>
                </div>

                <h3>
                  Terre et Eau
                </h3>

                <strong>
                  Sensibilité • stabilité • création
                </strong>

                <p>
                  L’Eau apporte l’intuition et la
                  profondeur émotionnelle, tandis
                  que la Terre donne une forme
                  concrète aux émotions et aux
                  inspirations.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              Le sextile dans les maisons astrologiques
            </h2>

            <p>
              Les maisons concernées indiquent les
              domaines de vie dans lesquels les
              occasions, les contacts favorables et
              les talents à développer sont les
              plus visibles.
            </p>

            <div className="sextile-houses-grid">
              <article className="sextile-house-card">
                <strong>
                  Maisons personnelles
                </strong>

                <p>
                  Les maisons 1 à 3 peuvent offrir
                  des occasions liées à l’identité,
                  aux ressources, aux apprentissages
                  et à la communication.
                </p>
              </article>

              <article className="sextile-house-card">
                <strong>
                  Maisons intimes
                </strong>

                <p>
                  Les maisons 4 à 6 peuvent soutenir
                  la famille, la créativité, le
                  travail, les habitudes et
                  l’organisation quotidienne.
                </p>
              </article>

              <article className="sextile-house-card">
                <strong>
                  Maisons relationnelles
                </strong>

                <p>
                  Les maisons 7 à 9 peuvent favoriser
                  les partenariats, les rencontres,
                  les transformations et les
                  découvertes.
                </p>
              </article>

              <article className="sextile-house-card">
                <strong>
                  Maisons collectives
                </strong>

                <p>
                  Les maisons 10 à 12 peuvent offrir
                  des possibilités liées à la
                  carrière, aux projets, aux réseaux
                  et à la vie intérieure.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="sextile-kicker">
              Trigone ou sextile
            </span>

            <h2>
              Quelle est la différence entre un sextile et un trigone ?
            </h2>

            <div className="sextile-comparison-grid">
              <article className="sextile-comparison-card">
                <div className="sextile-comparison-symbol">
                  △
                </div>

                <h3>
                  Le trigone
                </h3>

                <p>
                  Le trigone représente une facilité
                  naturelle. L’énergie circule
                  presque spontanément entre les
                  deux planètes.
                </p>

                <p>
                  Son talent peut être puissant,
                  mais il risque parfois d’être tenu
                  pour acquis ou insuffisamment
                  développé.
                </p>
              </article>

              <article className="sextile-comparison-card">
                <div className="sextile-comparison-symbol">
                  ⚹
                </div>

                <h3>
                  Le sextile
                </h3>

                <p>
                  Le sextile représente une
                  possibilité favorable qui demande
                  généralement une initiative ou une
                  participation consciente.
                </p>

                <p>
                  Son potentiel se développe par la
                  curiosité, l’apprentissage, les
                  décisions et les expériences.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="sextile-kicker">
              Une figure de possibilités
            </span>

            <h2>
              Le sextile dans les figures astrologiques
            </h2>

            <div className="sextile-pattern-card">
              <div className="sextile-pattern-symbol">
                ⚹
              </div>

              <div>
                <h3>
                  Un lien qui peut soutenir une configuration plus grande
                </h3>

                <p>
                  Plusieurs sextiles peuvent former
                  des structures astrologiques plus
                  complexes lorsqu’ils sont reliés à
                  des trigones, des oppositions ou
                  d’autres aspects.
                </p>

                <p>
                  Dans un cerf-volant astrologique,
                  par exemple, les sextiles peuvent
                  aider à transformer les talents
                  d’un grand trigone en possibilités
                  plus concrètes.
                </p>

                <p>
                  Le sextile agit alors comme un
                  passage entre un potentiel naturel
                  et une action consciente.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Le sextile dans les transits astrologiques
            </h2>

            <p>
              Un sextile peut également se former
              lorsqu’une planète en mouvement crée
              un angle de 60 degrés avec une planète
              de votre thème natal.
            </p>

            <p>
              Ce transit peut correspondre à une
              période favorable pour apprendre,
              communiquer, rencontrer une personne,
              développer une idée ou saisir une
              nouvelle possibilité.
            </p>

            <p>
              Le sextile n’impose généralement pas
              un événement. Il ouvre plutôt une
              porte qui demande d’être reconnue et
              franchie.
            </p>

            <div className="sextile-cta-card">
              <div>
                <span className="sextile-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Avez-vous un sextile important dans votre carte du ciel ?
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
                className="sextile-primary-button"
              >
                Voir ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="sextile-faq">
            <span className="sextile-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur le sextile en astrologie
            </h2>

            <div className="sextile-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="sextile-faq-item"
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
            className="sextile-aspects-nav"
            aria-label="Navigation entre les aspects astrologiques"
          >
            <Link
              href="/astrologie/aspects/trigone"
              className="sextile-back-link"
            >
              <span aria-hidden="true">
                ←
              </span>

              Aspect précédent : trigone
            </Link>

            <Link
              href="/astrologie/aspects/quinconce"
              className="sextile-next-link"
            >
              Aspect suivant : quinconce

              <span aria-hidden="true">
                →
              </span>
            </Link>
          </nav>

          <p className="sextile-disclaimer">
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
