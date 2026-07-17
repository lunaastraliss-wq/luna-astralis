import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/aspects/quinconce";

export const metadata: Metadata = {
  title:
    "Le quinconce en astrologie : signification dans le thème natal | Luna Astralis",

  description:
    "Découvrez la signification du quinconce en astrologie, son angle de 150°, ses ajustements nécessaires et son interprétation entre les planètes dans le thème natal.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Le quinconce en astrologie : ajustement, inconfort et transformation",
    description:
      "Comprenez comment le quinconce relie deux planètes difficiles à harmoniser et révèle des ajustements nécessaires dans le thème natal.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le quinconce en astrologie | Luna Astralis",
    description:
      "Angle de 150°, ajustements, adaptation et recherche d’un nouvel équilibre dans le thème natal.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const EXAMPLES = [
  {
    planets:
      "Soleil quinconce Lune",
    symbol:
      "☀ ⚻ ☽",
    keywords:
      "Identité • émotions • adaptation",
    text:
      "Le Soleil quinconce à la Lune peut créer un décalage entre l’identité consciente et les besoins émotionnels. La personne doit régulièrement ajuster ses choix afin de respecter ces deux dimensions.",
  },
  {
    planets:
      "Mercure quinconce Saturne",
    symbol:
      "☿ ⚻ ♄",
    keywords:
      "Pensée • contrôle • confiance",
    text:
      "Mercure quinconce à Saturne peut produire une hésitation entre le besoin de s’exprimer et la peur de se tromper. La confiance intellectuelle se développe progressivement.",
  },
  {
    planets:
      "Vénus quinconce Uranus",
    symbol:
      "♀ ⚻ ♅",
    keywords:
      "Relations • liberté • instabilité",
    text:
      "Vénus quinconce à Uranus peut rendre difficile l’équilibre entre proximité affective et besoin d’indépendance. Les relations demandent des ajustements fréquents.",
  },
  {
    planets:
      "Mars quinconce Neptune",
    symbol:
      "♂ ⚻ ♆",
    keywords:
      "Action • intuition • direction",
    text:
      "Mars quinconce à Neptune peut créer une difficulté à savoir quand agir ou dans quelle direction avancer. La personne doit apprendre à relier intuition et action concrète.",
  },
  {
    planets:
      "Jupiter quinconce Pluton",
    symbol:
      "♃ ⚻ ♇",
    keywords:
      "Expansion • pouvoir • transformation",
    text:
      "Jupiter quinconce à Pluton peut produire une tension entre désir de croissance et besoin de contrôle. L’ambition doit être réajustée pour éviter les excès.",
  },
  {
    planets:
      "Lune quinconce Saturne",
    symbol:
      "☽ ⚻ ♄",
    keywords:
      "Émotions • responsabilité • sécurité",
    text:
      "La Lune quinconce à Saturne peut compliquer l’expression des besoins émotionnels. La personne apprend à construire une sécurité intérieure sans nier sa sensibilité.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Qu’est-ce qu’un quinconce en astrologie ?",
    answer:
      "Un quinconce se forme lorsque deux planètes sont séparées par un angle d’environ 150 degrés. Il représente un décalage entre deux fonctions qui doivent être régulièrement ajustées.",
  },
  {
    question:
      "Le quinconce est-il un aspect difficile ?",
    answer:
      "Le quinconce peut être inconfortable, car les deux planètes ont souvent du mal à se comprendre. Il ne crée pas toujours un conflit direct, mais plutôt une sensation persistante de déséquilibre.",
  },
  {
    question:
      "Quel orbe utiliser pour un quinconce ?",
    answer:
      "Le quinconce est généralement interprété avec un orbe serré, souvent autour de 2 à 3 degrés. Certains astrologues utilisent une marge légèrement plus grande avec le Soleil ou la Lune.",
  },
  {
    question:
      "Quelle est la différence entre un quinconce et un carré ?",
    answer:
      "Le carré crée une tension directe qui pousse à agir. Le quinconce produit plutôt un décalage difficile à identifier, qui demande des ajustements répétés.",
  },
  {
    question:
      "Pourquoi le quinconce est-il difficile à comprendre ?",
    answer:
      "Les signes reliés par un quinconce ne partagent généralement ni le même élément ni la même modalité. Ils fonctionnent donc selon des logiques très différentes.",
  },
  {
    question:
      "Le quinconce peut-il devenir une force ?",
    answer:
      "Oui. Avec le temps, les ajustements demandés par le quinconce peuvent développer une grande capacité d’adaptation, de conscience et de transformation personnelle.",
  },
  {
    question:
      "Comment savoir si j’ai un quinconce dans mon thème natal ?",
    answer:
      "Il faut générer votre carte du ciel et comparer la position des planètes. Deux planètes séparées par environ 150 degrés peuvent former un quinconce.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Le quinconce en astrologie : signification dans le thème natal",
  description:
    "Guide complet pour comprendre le quinconce astrologique, son angle de 150 degrés, son orbe et son interprétation entre les planètes.",
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

export default function QuinconceAstrologiePage() {
  return (
    <div className="quincunx-page">
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

      <main className="quincunx-wrap">
        <nav
          className="quincunx-breadcrumb"
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
            Quinconce
          </span>
        </nav>

        <section className="quincunx-hero">
          <div className="quincunx-badge">
            ✦ Aspect astrologique d’ajustement
          </div>

          <div
            className="quincunx-main-symbol"
            aria-hidden="true"
          >
            ⚻
          </div>

          <h1>
            Le quinconce en astrologie
          </h1>

          <p className="quincunx-hero-lead">
            Le quinconce se forme lorsque deux
            planètes sont séparées par un angle de
            150 degrés. Il révèle un décalage
            persistant, une difficulté d’adaptation
            et la nécessité de réajuster certaines
            parties de la personnalité.
          </p>

          <div className="quincunx-hero-data">
            <div>
              <span>
                Angle
              </span>

              <strong>
                150°
              </strong>
            </div>

            <div>
              <span>
                Dynamique
              </span>

              <strong>
                Ajustement
              </strong>
            </div>

            <div>
              <span>
                Fonction
              </span>

              <strong>
                Adaptation
              </strong>
            </div>
          </div>

          <div className="quincunx-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="quincunx-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification"
              className="quincunx-secondary-button"
            >
              Comprendre le quinconce
            </a>
          </div>
        </section>

        <article className="quincunx-content">
          <section id="signification">
            <span className="quincunx-kicker">
              Un équilibre difficile à maintenir
            </span>

            <h2>
              Que signifie un quinconce en astrologie ?
            </h2>

            <p>
              Le quinconce est un aspect qui se
              forme lorsque deux planètes sont
              séparées par un angle d’environ
              150 degrés dans le cercle zodiacal.
            </p>

            <p>
              Les fonctions représentées par les
              deux planètes n’entrent pas
              nécessairement en conflit ouvert.
              Elles semblent plutôt fonctionner
              selon des logiques qui ne se
              comprennent pas facilement.
            </p>

            <p>
              La personne peut avoir l’impression
              qu’une partie de sa vie doit être
              continuellement réorganisée afin de
              répondre aux besoins des deux
              planètes.
            </p>
          </section>

          <section>
            <h2>
              Comment fonctionne le quinconce ?
            </h2>

            <div className="quincunx-reading-grid">
              <article className="quincunx-reading-card">
                <span className="quincunx-reading-number">
                  01
                </span>

                <h3>
                  Deux fonctions se comprennent mal
                </h3>

                <p>
                  Les planètes n’utilisent pas les
                  mêmes méthodes et peuvent sembler
                  difficiles à coordonner.
                </p>
              </article>

              <article className="quincunx-reading-card">
                <span className="quincunx-reading-number">
                  02
                </span>

                <h3>
                  Un inconfort diffus apparaît
                </h3>

                <p>
                  La tension n’est pas toujours
                  évidente, mais elle peut produire
                  une insatisfaction persistante.
                </p>
              </article>

              <article className="quincunx-reading-card">
                <span className="quincunx-reading-number">
                  03
                </span>

                <h3>
                  Des ajustements deviennent nécessaires
                </h3>

                <p>
                  La personne doit modifier ses
                  habitudes, ses attentes ou sa
                  manière de réagir.
                </p>
              </article>

              <article className="quincunx-reading-card">
                <span className="quincunx-reading-number">
                  04
                </span>

                <h3>
                  Une nouvelle adaptation se construit
                </h3>

                <p>
                  Avec le temps, l’aspect peut
                  développer souplesse, conscience
                  et capacité de transformation.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="quincunx-kicker">
              Une tension subtile
            </span>

            <h2>
              Le quinconce est-il un aspect difficile ?
            </h2>

            <p>
              Le quinconce est souvent considéré
              comme un aspect inconfortable. Sa
              difficulté vient du fait qu’il ne
              produit pas toujours une tension
              directe et facile à identifier.
            </p>

            <div className="quincunx-polarity-grid">
              <article className="quincunx-polarity-card">
                <span className="quincunx-polarity-icon">
                  ⚠
                </span>

                <h3>
                  Les défis du quinconce
                </h3>

                <p>
                  Le quinconce peut produire une
                  sensation de décalage, de fatigue,
                  d’insatisfaction ou d’adaptation
                  permanente.
                </p>

                <p>
                  La personne peut avoir du mal à
                  comprendre pourquoi certaines
                  situations reviennent malgré ses
                  efforts.
                </p>
              </article>

              <article className="quincunx-polarity-card">
                <span className="quincunx-polarity-icon">
                  ✦
                </span>

                <h3>
                  Le potentiel du quinconce
                </h3>

                <p>
                  L’aspect peut développer une grande
                  capacité à observer, à corriger et
                  à trouver des solutions originales.
                </p>

                <p>
                  Les ajustements répétés peuvent
                  devenir une véritable force
                  d’adaptation et de transformation.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="quincunx-kicker">
              Les éléments à observer
            </span>

            <h2>
              Comment interpréter un quinconce dans un thème natal ?
            </h2>

            <div className="quincunx-method-list">
              <article className="quincunx-method-item">
                <span>
                  1
                </span>

                <div>
                  <h3>
                    Identifier les deux planètes
                  </h3>

                  <p>
                    Les planètes indiquent les
                    fonctions qui ont du mal à se
                    coordonner ou à répondre
                    simultanément à leurs besoins.
                  </p>
                </div>
              </article>

              <article className="quincunx-method-item">
                <span>
                  2
                </span>

                <div>
                  <h3>
                    Observer les signes
                  </h3>

                  <p>
                    Les signes montrent les méthodes
                    très différentes utilisées par
                    les deux planètes pour agir ou
                    réagir.
                  </p>
                </div>
              </article>

              <article className="quincunx-method-item">
                <span>
                  3
                </span>

                <div>
                  <h3>
                    Étudier les maisons
                  </h3>

                  <p>
                    Les maisons révèlent les domaines
                    de vie entre lesquels les
                    ajustements doivent être réalisés.
                  </p>
                </div>
              </article>

              <article className="quincunx-method-item">
                <span>
                  4
                </span>

                <div>
                  <h3>
                    Repérer les répétitions
                  </h3>

                  <p>
                    Le quinconce se manifeste souvent
                    par des situations récurrentes
                    qui indiquent qu’un nouvel
                    équilibre doit être trouvé.
                  </p>
                </div>
              </article>

              <article className="quincunx-method-item">
                <span>
                  5
                </span>

                <div>
                  <h3>
                    Chercher un compromis évolutif
                  </h3>

                  <p>
                    Il ne s’agit pas de choisir une
                    planète contre l’autre, mais de
                    créer une manière plus souple de
                    répondre aux deux.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              L’orbe du quinconce
            </h2>

            <p>
              L’orbe représente l’écart entre
              l’angle exact de 150 degrés et la
              position réelle des planètes. Le
              quinconce est généralement interprété
              avec une marge plus serrée que les
              aspects majeurs.
            </p>

            <div className="quincunx-orb-grid">
              <article className="quincunx-orb-card">
                <span className="quincunx-orb-value">
                  0° à 1°
                </span>

                <h3>
                  Quinconce très serré
                </h3>

                <p>
                  Le décalage entre les deux
                  planètes est très visible et peut
                  devenir un thème important de la
                  personnalité.
                </p>
              </article>

              <article className="quincunx-orb-card">
                <span className="quincunx-orb-value">
                  1° à 2°
                </span>

                <h3>
                  Quinconce fort
                </h3>

                <p>
                  Les ajustements sont clairement
                  perceptibles et reviennent souvent
                  dans plusieurs situations.
                </p>
              </article>

              <article className="quincunx-orb-card">
                <span className="quincunx-orb-value">
                  2° à 3°
                </span>

                <h3>
                  Quinconce plus large
                </h3>

                <p>
                  L’aspect peut encore être
                  significatif, surtout lorsqu’il
                  implique le Soleil, la Lune ou
                  l’Ascendant.
                </p>
              </article>
            </div>

            <p>
              Plus le quinconce est exact, plus son
              besoin d’ajustement est facile à
              reconnaître. Son importance dépend
              également de la place des planètes
              dans l’ensemble du thème.
            </p>
          </section>

          <section>
            <span className="quincunx-kicker">
              Exemples d’interprétation
            </span>

            <h2>
              Les principaux quinconces entre les planètes
            </h2>

            <p>
              Chaque quinconce s’exprime selon les
              signes, les maisons et les autres
              aspects du thème. Les exemples
              suivants présentent leur dynamique
              générale.
            </p>

            <div className="quincunx-examples-grid">
              {EXAMPLES.map((example) => (
                <article
                  className="quincunx-example-card"
                  key={example.planets}
                >
                  <div className="quincunx-example-symbol">
                    {example.symbol}
                  </div>

                  <h3>
                    {example.planets}
                  </h3>

                  <p className="quincunx-example-keywords">
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
              Pourquoi les signes en quinconce se comprennent-ils mal ?
            </h2>

            <p>
              Les signes séparés par 150 degrés ne
              partagent généralement ni le même
              élément ni la même modalité. Ils
              possèdent donc des rythmes, des besoins
              et des méthodes très différents.
            </p>

            <div className="quincunx-signs-grid">
              <article className="quincunx-sign-card">
                <span>
                  ♈ ⚻ ♍
                </span>

                <h3>
                  Bélier et Vierge
                </h3>

                <p>
                  Le Bélier agit rapidement et
                  instinctivement, tandis que la
                  Vierge analyse, organise et
                  corrige avant d’avancer.
                </p>
              </article>

              <article className="quincunx-sign-card">
                <span>
                  ♉ ⚻ ♎
                </span>

                <h3>
                  Taureau et Balance
                </h3>

                <p>
                  Le Taureau cherche une sécurité
                  stable et concrète, tandis que la
                  Balance ajuste constamment ses
                  choix selon les relations.
                </p>
              </article>

              <article className="quincunx-sign-card">
                <span>
                  ♊ ⚻ ♏
                </span>

                <h3>
                  Gémeaux et Scorpion
                </h3>

                <p>
                  Les Gémeaux explorent plusieurs
                  idées avec légèreté, tandis que le
                  Scorpion cherche la profondeur,
                  l’intensité et la vérité cachée.
                </p>
              </article>

              <article className="quincunx-sign-card">
                <span>
                  ♋ ⚻ ♐
                </span>

                <h3>
                  Cancer et Sagittaire
                </h3>

                <p>
                  Le Cancer protège ses repères
                  émotionnels, tandis que le
                  Sagittaire recherche l’expansion,
                  la liberté et les découvertes.
                </p>
              </article>

              <article className="quincunx-sign-card">
                <span>
                  ♌ ⚻ ♑
                </span>

                <h3>
                  Lion et Capricorne
                </h3>

                <p>
                  Le Lion veut exprimer sa créativité
                  et être reconnu, tandis que le
                  Capricorne privilégie la maîtrise,
                  la structure et les résultats.
                </p>
              </article>

              <article className="quincunx-sign-card">
                <span>
                  ♍ ⚻ ♒
                </span>

                <h3>
                  Vierge et Verseau
                </h3>

                <p>
                  La Vierge améliore les détails du
                  quotidien, tandis que le Verseau
                  s’intéresse aux idées nouvelles et
                  aux transformations collectives.
                </p>
              </article>

              <article className="quincunx-sign-card">
                <span>
                  ♎ ⚻ ♓
                </span>

                <h3>
                  Balance et Poissons
                </h3>

                <p>
                  La Balance cherche un équilibre
                  relationnel clair, tandis que les
                  Poissons fonctionnent davantage
                  par intuition, compassion et
                  fusion émotionnelle.
                </p>
              </article>

              <article className="quincunx-sign-card">
                <span>
                  ♏ ⚻ ♈
                </span>

                <h3>
                  Scorpion et Bélier
                </h3>

                <p>
                  Le Scorpion transforme lentement
                  et profondément, tandis que le
                  Bélier agit immédiatement selon
                  son instinct.
                </p>
              </article>

              <article className="quincunx-sign-card">
                <span>
                  ♐ ⚻ ♉
                </span>

                <h3>
                  Sagittaire et Taureau
                </h3>

                <p>
                  Le Sagittaire veut explorer et
                  élargir ses horizons, tandis que
                  le Taureau préfère la stabilité,
                  la prévisibilité et la continuité.
                </p>
              </article>

              <article className="quincunx-sign-card">
                <span>
                  ♑ ⚻ ♊
                </span>

                <h3>
                  Capricorne et Gémeaux
                </h3>

                <p>
                  Le Capricorne avance avec une
                  stratégie structurée, tandis que
                  les Gémeaux changent rapidement de
                  perspective et d’intérêt.
                </p>
              </article>

              <article className="quincunx-sign-card">
                <span>
                  ♒ ⚻ ♋
                </span>

                <h3>
                  Verseau et Cancer
                </h3>

                <p>
                  Le Verseau recherche l’autonomie
                  et une vision collective, tandis
                  que le Cancer protège les liens
                  personnels et la sécurité
                  affective.
                </p>
              </article>

              <article className="quincunx-sign-card">
                <span>
                  ♓ ⚻ ♌
                </span>

                <h3>
                  Poissons et Lion
                </h3>

                <p>
                  Les Poissons dissolvent les
                  frontières individuelles, tandis
                  que le Lion cherche à affirmer une
                  identité créative et personnelle.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              Le quinconce dans les maisons astrologiques
            </h2>

            <p>
              Les maisons concernées indiquent les
              domaines de vie entre lesquels un
              ajustement permanent peut être
              nécessaire.
            </p>

            <div className="quincunx-houses-grid">
              <article className="quincunx-house-card">
                <strong>
                  Maisons personnelles
                </strong>

                <p>
                  Les maisons 1 à 3 peuvent demander
                  des ajustements liés à l’identité,
                  aux ressources, à la pensée et à
                  la communication.
                </p>
              </article>

              <article className="quincunx-house-card">
                <strong>
                  Maisons intimes
                </strong>

                <p>
                  Les maisons 4 à 6 peuvent créer un
                  décalage entre la famille, la
                  créativité, les responsabilités et
                  les habitudes quotidiennes.
                </p>
              </article>

              <article className="quincunx-house-card">
                <strong>
                  Maisons relationnelles
                </strong>

                <p>
                  Les maisons 7 à 9 peuvent demander
                  des ajustements entre les
                  relations, les transformations,
                  les croyances et l’ouverture au
                  monde.
                </p>
              </article>

              <article className="quincunx-house-card">
                <strong>
                  Maisons collectives
                </strong>

                <p>
                  Les maisons 10 à 12 peuvent
                  produire un décalage entre la
                  carrière, les projets sociaux et
                  la vie intérieure.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="quincunx-kicker">
              Carré ou quinconce
            </span>

            <h2>
              Quelle est la différence entre un quinconce et un carré ?
            </h2>

            <div className="quincunx-comparison-grid">
              <article className="quincunx-comparison-card">
                <div className="quincunx-comparison-symbol">
                  □
                </div>

                <h3>
                  Le carré
                </h3>

                <p>
                  Le carré crée une tension directe
                  et visible. Les deux planètes
                  semblent se confronter et obligent
                  la personne à agir.
                </p>

                <p>
                  Sa pression peut être difficile,
                  mais elle produit souvent une forte
                  motivation et un désir de
                  dépassement.
                </p>
              </article>

              <article className="quincunx-comparison-card">
                <div className="quincunx-comparison-symbol">
                  ⚻
                </div>

                <h3>
                  Le quinconce
                </h3>

                <p>
                  Le quinconce crée un décalage plus
                  subtil. Les deux planètes ne se
                  confrontent pas directement, mais
                  elles ont du mal à coopérer.
                </p>

                <p>
                  Son inconfort demande des
                  ajustements répétés plutôt qu’une
                  résolution unique et définitive.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="quincunx-kicker">
              Une figure astrologique majeure
            </span>

            <h2>
              Qu’est-ce qu’un Yod en astrologie ?
            </h2>

            <div className="quincunx-yod-card">
              <div className="quincunx-yod-symbol">
                Y
              </div>

              <div>
                <h3>
                  Deux quinconces dirigés vers une planète
                </h3>

                <p>
                  Un Yod se forme lorsqu’une planète
                  reçoit deux quinconces provenant de
                  deux autres planètes reliées entre
                  elles par un sextile.
                </p>

                <p>
                  La planète située au sommet du Yod
                  devient un point central
                  d’ajustement. Elle peut représenter
                  une fonction qui exige une grande
                  attention et plusieurs
                  transformations.
                </p>

                <p>
                  Cette configuration est parfois
                  appelée le doigt de Dieu. Elle ne
                  représente pas nécessairement un
                  destin prédéterminé, mais elle peut
                  indiquer un chemin particulièrement
                  exigeant et évolutif.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Le quinconce dans les transits astrologiques
            </h2>

            <p>
              Un quinconce peut également se former
              lorsqu’une planète en mouvement crée
              un angle de 150 degrés avec une
              planète de votre thème natal.
            </p>

            <p>
              Ce transit peut correspondre à une
              période où une organisation, une
              relation, une habitude ou une direction
              de vie doit être réajustée.
            </p>

            <p>
              Les événements peuvent sembler
              imprévus ou difficiles à comprendre,
              mais ils attirent souvent l’attention
              sur un déséquilibre qui ne peut plus
              être ignoré.
            </p>

            <div className="quincunx-cta-card">
              <div>
                <span className="quincunx-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Avez-vous un quinconce important dans votre carte du ciel ?
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
                className="quincunx-primary-button"
              >
                Voir ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="quincunx-faq">
            <span className="quincunx-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur le quinconce en astrologie
            </h2>

            <div className="quincunx-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="quincunx-faq-item"
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
            className="quincunx-aspects-nav"
            aria-label="Navigation entre les aspects astrologiques"
          >
            <Link
              href="/astrologie/aspects/sextile"
              className="quincunx-back-link"
            >
              <span aria-hidden="true">
                ←
              </span>

              Aspect précédent : sextile
            </Link>

            <Link
              href="/astrologie/aspects"
              className="quincunx-next-link"
            >
              Voir tous les aspects

              <span aria-hidden="true">
                →
              </span>
            </Link>
          </nav>

          <p className="quincunx-disclaimer">
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
