import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/aspects/trigone";

export const metadata: Metadata = {
  title:
    "Le trigone en astrologie : signification dans le thème natal | Luna Astralis",

  description:
    "Découvrez la signification du trigone en astrologie, son angle de 120°, ses facilités naturelles et son interprétation entre les planètes dans le thème natal.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Le trigone en astrologie : harmonie, talents et fluidité",
    description:
      "Comprenez comment le trigone relie deux planètes avec fluidité et révèle des talents naturels, des ressources et des facilités dans le thème natal.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le trigone en astrologie | Luna Astralis",
    description:
      "Angle de 120°, harmonie, talents naturels et potentiel d’épanouissement dans le thème natal.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const EXAMPLES = [
  {
    planets:
      "Soleil trigone Lune",
    symbol:
      "☀ △ ☽",
    keywords:
      "Identité • émotions • cohérence intérieure",
    text:
      "Le Soleil trigone à la Lune favorise une bonne entente entre l’identité consciente et les besoins émotionnels. La personne peut agir avec davantage de cohérence et de stabilité intérieure.",
  },
  {
    planets:
      "Mercure trigone Uranus",
    symbol:
      "☿ △ ♅",
    keywords:
      "Intelligence • intuition • innovation",
    text:
      "Mercure trigone à Uranus peut favoriser une pensée rapide, originale et intuitive. La personne comprend facilement les idées nouvelles et peut trouver des solutions inhabituelles.",
  },
  {
    planets:
      "Vénus trigone Jupiter",
    symbol:
      "♀ △ ♃",
    keywords:
      "Relations • générosité • confiance",
    text:
      "Vénus trigone à Jupiter apporte souvent chaleur, optimisme et générosité dans les relations. Cet aspect peut faciliter les liens sociaux, la créativité et le plaisir.",
  },
  {
    planets:
      "Mars trigone Saturne",
    symbol:
      "♂ △ ♄",
    keywords:
      "Action • discipline • endurance",
    text:
      "Mars trigone à Saturne permet de combiner énergie et maîtrise. La personne peut agir avec patience, structure et constance afin d’atteindre ses objectifs.",
  },
  {
    planets:
      "Jupiter trigone Neptune",
    symbol:
      "♃ △ ♆",
    keywords:
      "Foi • inspiration • compassion",
    text:
      "Jupiter trigone à Neptune peut soutenir l’intuition, l’imagination et une vision généreuse de la vie. Il favorise souvent la confiance dans un idéal ou une vocation.",
  },
  {
    planets:
      "Lune trigone Pluton",
    symbol:
      "☽ △ ♇",
    keywords:
      "Émotions • profondeur • régénération",
    text:
      "La Lune trigone à Pluton peut donner une grande profondeur émotionnelle et une capacité naturelle à comprendre les mécanismes intérieurs. La personne peut se reconstruire après les épreuves.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Qu’est-ce qu’un trigone en astrologie ?",
    answer:
      "Un trigone se forme lorsque deux planètes sont séparées par un angle d’environ 120 degrés. Il représente une circulation fluide entre les fonctions des deux planètes.",
  },
  {
    question:
      "Le trigone est-il toujours positif ?",
    answer:
      "Le trigone est généralement considéré comme harmonieux, mais il peut rendre certaines qualités tellement naturelles qu’elles sont peu développées ou tenues pour acquises.",
  },
  {
    question:
      "Quel orbe utiliser pour un trigone ?",
    answer:
      "L’orbe varie selon les méthodes. Un trigone est souvent interprété jusqu’à environ 7 degrés, avec une marge parfois plus large lorsque le Soleil ou la Lune est impliqué.",
  },
  {
    question:
      "Quelle est la différence entre un trigone et un sextile ?",
    answer:
      "Le trigone représente une facilité naturelle et spontanée. Le sextile offre plutôt une possibilité favorable qui doit être activée par l’initiative et les choix.",
  },
  {
    question:
      "Pourquoi les trigones relient-ils souvent les mêmes éléments ?",
    answer:
      "Les signes séparés de 120 degrés appartiennent généralement au même élément. Ils partagent donc une manière semblable de percevoir et d’exprimer l’énergie.",
  },
  {
    question:
      "Un trigone peut-il rendre passif ?",
    answer:
      "Oui. Une facilité très naturelle peut réduire la motivation à faire des efforts. Le potentiel du trigone devient plus puissant lorsqu’il est consciemment cultivé.",
  },
  {
    question:
      "Comment savoir si j’ai un trigone dans mon thème natal ?",
    answer:
      "Il faut générer votre carte du ciel et comparer la position des planètes. Deux planètes séparées par environ 120 degrés peuvent former un trigone.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Le trigone en astrologie : signification dans le thème natal",
  description:
    "Guide complet pour comprendre le trigone astrologique, son angle de 120 degrés, son orbe et son interprétation entre les planètes.",
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

export default function TrigoneAstrologiePage() {
  return (
    <div className="trine-page">
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

      <main className="trine-wrap">
        <nav
          className="trine-breadcrumb"
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
            Trigone
          </span>
        </nav>

        <section className="trine-hero">
          <div className="trine-badge">
            ✦ Aspect astrologique majeur
          </div>

          <div
            className="trine-main-symbol"
            aria-hidden="true"
          >
            △
          </div>

          <h1>
            Le trigone en astrologie
          </h1>

          <p className="trine-hero-lead">
            Le trigone se forme lorsque deux
            planètes sont séparées par un angle de
            120 degrés. Il révèle une circulation
            fluide de l’énergie, des talents
            naturels et des ressources qui peuvent
            s’exprimer avec facilité.
          </p>

          <div className="trine-hero-data">
            <div>
              <span>
                Angle
              </span>

              <strong>
                120°
              </strong>
            </div>

            <div>
              <span>
                Dynamique
              </span>

              <strong>
                Harmonie
              </strong>
            </div>

            <div>
              <span>
                Fonction
              </span>

              <strong>
                Fluidité
              </strong>
            </div>
          </div>

          <div className="trine-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="trine-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification"
              className="trine-secondary-button"
            >
              Comprendre le trigone
            </a>
          </div>
        </section>

        <article className="trine-content">
          <section id="signification">
            <span className="trine-kicker">
              Une énergie qui circule naturellement
            </span>

            <h2>
              Que signifie un trigone en astrologie ?
            </h2>

            <p>
              Le trigone est un aspect qui se forme
              lorsque deux planètes sont séparées
              par un angle d’environ 120 degrés
              dans le cercle zodiacal.
            </p>

            <p>
              Les fonctions représentées par les
              deux planètes s’accordent facilement.
              Elles peuvent collaborer sans produire
              une tension importante ni exiger un
              effort constant.
            </p>

            <p>
              Le trigone indique souvent des
              talents, des qualités ou des
              ressources déjà accessibles. Son
              potentiel devient toutefois plus
              puissant lorsque la personne choisit
              de l’utiliser consciemment.
            </p>
          </section>

          <section>
            <h2>
              Comment fonctionne le trigone ?
            </h2>

            <div className="trine-reading-grid">
              <article className="trine-reading-card">
                <span className="trine-reading-number">
                  01
                </span>

                <h3>
                  Les planètes se comprennent
                </h3>

                <p>
                  Leurs fonctions symboliques
                  peuvent collaborer naturellement
                  et se renforcer mutuellement.
                </p>
              </article>

              <article className="trine-reading-card">
                <span className="trine-reading-number">
                  02
                </span>

                <h3>
                  L’énergie circule facilement
                </h3>

                <p>
                  La personne peut exprimer ces
                  qualités sans ressentir de conflit
                  intérieur important.
                </p>
              </article>

              <article className="trine-reading-card">
                <span className="trine-reading-number">
                  03
                </span>

                <h3>
                  Un talent devient accessible
                </h3>

                <p>
                  L’aspect peut révéler une capacité,
                  une attitude ou une ressource
                  naturelle.
                </p>
              </article>

              <article className="trine-reading-card">
                <span className="trine-reading-number">
                  04
                </span>

                <h3>
                  Le potentiel doit être cultivé
                </h3>

                <p>
                  Une facilité peut rester sous-
                  utilisée lorsqu’elle ne demande
                  aucun effort particulier.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="trine-kicker">
              Une harmonie à développer
            </span>

            <h2>
              Le trigone est-il toujours bénéfique ?
            </h2>

            <p>
              Le trigone est généralement classé
              parmi les aspects harmonieux. Il
              favorise la coopération entre les
              planètes et peut apporter une sensation
              de confiance, de fluidité ou de
              stabilité.
            </p>

            <div className="trine-polarity-grid">
              <article className="trine-polarity-card">
                <span className="trine-polarity-icon">
                  ✦
                </span>

                <h3>
                  Les forces du trigone
                </h3>

                <p>
                  Le trigone peut faciliter
                  l’expression des talents, la
                  confiance en soi, la créativité,
                  les relations ou l’adaptation aux
                  circonstances.
                </p>

                <p>
                  Il permet souvent d’utiliser deux
                  fonctions planétaires de manière
                  cohérente et complémentaire.
                </p>
              </article>

              <article className="trine-polarity-card">
                <span className="trine-polarity-icon">
                  ◇
                </span>

                <h3>
                  Les limites du trigone
                </h3>

                <p>
                  Une qualité très naturelle peut
                  être tenue pour acquise. La
                  personne peut manquer de motivation
                  pour la développer davantage.
                </p>

                <p>
                  Le trigone peut aussi favoriser la
                  facilité excessive, la passivité
                  ou le refus de sortir de sa zone
                  de confort.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="trine-kicker">
              Les éléments à observer
            </span>

            <h2>
              Comment interpréter un trigone dans un thème natal ?
            </h2>

            <div className="trine-method-list">
              <article className="trine-method-item">
                <span>
                  1
                </span>

                <div>
                  <h3>
                    Identifier les deux planètes
                  </h3>

                  <p>
                    Les planètes indiquent les
                    fonctions qui se soutiennent et
                    peuvent agir avec fluidité.
                  </p>
                </div>
              </article>

              <article className="trine-method-item">
                <span>
                  2
                </span>

                <div>
                  <h3>
                    Observer les signes
                  </h3>

                  <p>
                    Les signes montrent la manière
                    dont les qualités du trigone
                    s’expriment dans la personnalité.
                  </p>
                </div>
              </article>

              <article className="trine-method-item">
                <span>
                  3
                </span>

                <div>
                  <h3>
                    Étudier les maisons
                  </h3>

                  <p>
                    Les maisons révèlent les domaines
                    de vie dans lesquels la facilité
                    et le talent sont les plus
                    visibles.
                  </p>
                </div>
              </article>

              <article className="trine-method-item">
                <span>
                  4
                </span>

                <div>
                  <h3>
                    Repérer les talents naturels
                  </h3>

                  <p>
                    Il est utile d’identifier ce que
                    la personne accomplit facilement
                    ou comprend intuitivement.
                  </p>
                </div>
              </article>

              <article className="trine-method-item">
                <span>
                  5
                </span>

                <div>
                  <h3>
                    Vérifier si le potentiel est utilisé
                  </h3>

                  <p>
                    Un trigone devient plus puissant
                    lorsqu’il est soutenu par des
                    décisions, des efforts et des
                    objectifs concrets.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              L’orbe du trigone
            </h2>

            <p>
              L’orbe représente l’écart entre
              l’angle exact de 120 degrés et la
              position réelle des planètes. Selon
              les méthodes astrologiques, un trigone
              peut souvent être interprété jusqu’à
              environ 7 degrés.
            </p>

            <div className="trine-orb-grid">
              <article className="trine-orb-card">
                <span className="trine-orb-value">
                  0° à 2°
                </span>

                <h3>
                  Trigone très serré
                </h3>

                <p>
                  L’harmonie entre les deux planètes
                  est particulièrement forte et peut
                  constituer un talent majeur du
                  thème natal.
                </p>
              </article>

              <article className="trine-orb-card">
                <span className="trine-orb-value">
                  3° à 5°
                </span>

                <h3>
                  Trigone fort
                </h3>

                <p>
                  La facilité reste clairement
                  perceptible dans la personnalité,
                  les comportements et les
                  expériences.
                </p>
              </article>

              <article className="trine-orb-card">
                <span className="trine-orb-value">
                  6° à 7°
                </span>

                <h3>
                  Trigone plus large
                </h3>

                <p>
                  L’aspect peut encore être
                  significatif, surtout lorsqu’il
                  implique le Soleil ou la Lune.
                </p>
              </article>
            </div>

            <p>
              Un trigone exact est souvent plus
              visible. Son importance dépend
              néanmoins de la place occupée par les
              planètes dans l’ensemble du thème.
            </p>
          </section>

          <section>
            <span className="trine-kicker">
              Exemples d’interprétation
            </span>

            <h2>
              Les principaux trigones entre les planètes
            </h2>

            <p>
              Chaque trigone s’exprime selon les
              signes, les maisons et les autres
              aspects du thème. Les exemples
              suivants présentent leur dynamique
              générale.
            </p>

            <div className="trine-examples-grid">
              {EXAMPLES.map((example) => (
                <article
                  className="trine-example-card"
                  key={example.planets}
                >
                  <div className="trine-example-symbol">
                    {example.symbol}
                  </div>

                  <h3>
                    {example.planets}
                  </h3>

                  <p className="trine-example-keywords">
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
              Le trigone et les quatre éléments
            </h2>

            <p>
              Les trigones relient généralement des
              signes appartenant au même élément.
              Ils partagent donc une manière
              semblable de percevoir, de ressentir
              ou d’utiliser l’énergie.
            </p>

            <div className="trine-elements-grid">
              <article className="trine-element-card">
                <span>
                  🔥
                </span>

                <h3>
                  Trigones de Feu
                </h3>

                <strong>
                  Bélier • Lion • Sagittaire
                </strong>

                <p>
                  Ils favorisent l’enthousiasme,
                  l’audace, la créativité,
                  l’inspiration et la confiance en
                  l’action.
                </p>
              </article>

              <article className="trine-element-card">
                <span>
                  🌿
                </span>

                <h3>
                  Trigones de Terre
                </h3>

                <strong>
                  Taureau • Vierge • Capricorne
                </strong>

                <p>
                  Ils apportent réalisme, stabilité,
                  patience, sens pratique et capacité
                  à construire dans le temps.
                </p>
              </article>

              <article className="trine-element-card">
                <span>
                  ◌
                </span>

                <h3>
                  Trigones d’Air
                </h3>

                <strong>
                  Gémeaux • Balance • Verseau
                </strong>

                <p>
                  Ils favorisent la communication,
                  les idées, la sociabilité, la
                  compréhension et la circulation
                  des connaissances.
                </p>
              </article>

              <article className="trine-element-card">
                <span>
                  💧
                </span>

                <h3>
                  Trigones d’Eau
                </h3>

                <strong>
                  Cancer • Scorpion • Poissons
                </strong>

                <p>
                  Ils développent l’intuition, la
                  sensibilité, l’empathie, la
                  profondeur émotionnelle et
                  l’imagination.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              Le trigone dans les maisons astrologiques
            </h2>

            <p>
              Les maisons concernées indiquent les
              domaines de vie dans lesquels les
              talents naturels et la circulation
              harmonieuse de l’énergie sont les
              plus visibles.
            </p>

            <div className="trine-houses-grid">
              <article className="trine-house-card">
                <strong>
                  Maisons personnelles
                </strong>

                <p>
                  Les maisons 1 à 3 peuvent faciliter
                  l’expression de soi, la confiance,
                  les apprentissages et la
                  communication.
                </p>
              </article>

              <article className="trine-house-card">
                <strong>
                  Maisons intimes
                </strong>

                <p>
                  Les maisons 4 à 6 peuvent soutenir
                  la vie familiale, la créativité,
                  l’organisation et les habitudes
                  quotidiennes.
                </p>
              </article>

              <article className="trine-house-card">
                <strong>
                  Maisons relationnelles
                </strong>

                <p>
                  Les maisons 7 à 9 peuvent favoriser
                  les relations, les partenariats,
                  les transformations et la
                  recherche de sens.
                </p>
              </article>

              <article className="trine-house-card">
                <strong>
                  Maisons collectives
                </strong>

                <p>
                  Les maisons 10 à 12 peuvent
                  faciliter la carrière, les projets,
                  les liens sociaux, l’intuition et
                  la vie intérieure.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="trine-kicker">
              Une figure astrologique harmonieuse
            </span>

            <h2>
              Qu’est-ce qu’un grand trigone en astrologie ?
            </h2>

            <div className="trine-grand-card">
              <div className="trine-grand-symbol">
                △
              </div>

              <div>
                <h3>
                  Trois planètes reliées par trois trigones
                </h3>

                <p>
                  Un grand trigone se forme lorsque
                  trois planètes sont reliées par
                  trois aspects de 120 degrés. Elles
                  dessinent un grand triangle dans
                  la carte du ciel.
                </p>

                <p>
                  Les trois planètes appartiennent
                  généralement à des signes du même
                  élément. L’énergie circule donc
                  avec une grande fluidité entre
                  plusieurs fonctions du thème.
                </p>

                <p>
                  Cette configuration peut révéler
                  un talent important, une grande
                  stabilité ou une ressource
                  intérieure naturelle. Elle doit
                  cependant être activée pour éviter
                  l’inertie ou la facilité excessive.
                </p>
              </div>
            </div>
          </section>

          <section>
            <span className="trine-kicker">
              Harmonie et motivation
            </span>

            <h2>
              Le trigone a-t-il besoin des aspects dynamiques ?
            </h2>

            <div className="trine-balance-card">
              <div className="trine-balance-symbols">
                △
                <span>
                  □
                </span>
              </div>

              <div>
                <h3>
                  Les talents deviennent plus puissants lorsqu’ils sont activés
                </h3>

                <p>
                  Un thème natal composé uniquement
                  d’aspects harmonieux pourrait
                  manquer de tension, de motivation
                  ou de volonté de changement.
                </p>

                <p>
                  Les carrés et les oppositions
                  peuvent pousser la personne à
                  utiliser les ressources indiquées
                  par ses trigones.
                </p>

                <p>
                  Les aspects harmonieux et
                  dynamiques ne s’annulent donc pas.
                  Ils travaillent ensemble pour
                  créer un potentiel plus complet.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Le trigone dans les transits astrologiques
            </h2>

            <p>
              Un trigone peut également se former
              lorsqu’une planète en mouvement crée
              un angle de 120 degrés avec une
              planète de votre thème natal.
            </p>

            <p>
              Ce transit peut correspondre à une
              période plus fluide, à une occasion
              naturelle ou à une meilleure
              circulation de l’énergie dans un
              domaine précis.
            </p>

            <p>
              Les trigones de Jupiter peuvent
              soutenir la confiance et l’expansion,
              tandis que ceux de Saturne peuvent
              consolider les efforts et rendre une
              situation plus stable.
            </p>

            <div className="trine-cta-card">
              <div>
                <span className="trine-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Avez-vous un trigone important dans votre carte du ciel ?
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
                className="trine-primary-button"
              >
                Voir ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="trine-faq">
            <span className="trine-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur le trigone en astrologie
            </h2>

            <div className="trine-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="trine-faq-item"
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
            className="trine-aspects-nav"
            aria-label="Navigation entre les aspects astrologiques"
          >
            <Link
              href="/astrologie/aspects/carre"
              className="trine-back-link"
            >
              <span aria-hidden="true">
                ←
              </span>

              Aspect précédent : carré
            </Link>

            <Link
              href="/astrologie/aspects/sextile"
              className="trine-next-link"
            >
              Aspect suivant : sextile

              <span aria-hidden="true">
                →
              </span>
            </Link>
          </nav>

          <p className="trine-disclaimer">
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
