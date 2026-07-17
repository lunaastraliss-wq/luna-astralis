import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/aspects/opposition";

export const metadata: Metadata = {
  title:
    "L’opposition en astrologie : signification dans le thème natal | Luna Astralis",

  description:
    "Découvrez la signification de l’opposition en astrologie, son angle de 180°, ses effets entre les planètes et son interprétation dans un thème natal.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "L’opposition en astrologie : polarité, tension et équilibre",
    description:
      "Comprenez comment l’opposition place deux planètes face à face et invite à équilibrer deux besoins complémentaires dans le thème natal.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "L’opposition en astrologie | Luna Astralis",
    description:
      "Angle de 180°, polarité, projection et recherche d’équilibre dans le thème natal.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const EXAMPLES = [
  {
    planets:
      "Soleil opposé Lune",
    symbol:
      "☀ ☍ ☽",
    keywords:
      "Identité • émotions • équilibre intérieur",
    text:
      "Le Soleil opposé à la Lune peut créer une tension entre l’identité consciente et les besoins émotionnels. La personne cherche souvent à concilier ce qu’elle veut devenir avec ce dont elle a besoin pour se sentir en sécurité.",
  },
  {
    planets:
      "Mercure opposé Jupiter",
    symbol:
      "☿ ☍ ♃",
    keywords:
      "Détails • vision globale • jugement",
    text:
      "Mercure opposé à Jupiter peut opposer la pensée précise à une vision plus large. Cette configuration favorise les grandes idées, mais demande d’éviter les conclusions rapides ou les exagérations.",
  },
  {
    planets:
      "Vénus opposée Mars",
    symbol:
      "♀ ☍ ♂",
    keywords:
      "Attirance • désir • dynamique relationnelle",
    text:
      "Vénus opposée à Mars peut produire une forte attraction et une vie relationnelle intense. Le désir d’harmonie et le besoin d’agir peuvent toutefois entrer régulièrement en conflit.",
  },
  {
    planets:
      "Mars opposé Saturne",
    symbol:
      "♂ ☍ ♄",
    keywords:
      "Action • blocage • persévérance",
    text:
      "Mars opposé à Saturne peut créer une alternance entre l’impulsion d’avancer et la sensation d’être freiné. Avec le temps, cet aspect peut développer une grande endurance et une meilleure maîtrise de l’effort.",
  },
  {
    planets:
      "Jupiter opposé Saturne",
    symbol:
      "♃ ☍ ♄",
    keywords:
      "Expansion • prudence • maturité",
    text:
      "Jupiter opposé à Saturne met en tension le désir de croissance et le besoin de sécurité. La personne doit apprendre à avancer sans négliger les limites ni abandonner ses ambitions.",
  },
  {
    planets:
      "Lune opposée Pluton",
    symbol:
      "☽ ☍ ♇",
    keywords:
      "Émotions • contrôle • transformation",
    text:
      "La Lune opposée à Pluton peut intensifier les réactions émotionnelles et les rapports de pouvoir. Cet aspect invite à reconnaître les peurs profondes et à transformer les mécanismes de contrôle.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Qu’est-ce qu’une opposition en astrologie ?",
    answer:
      "Une opposition se forme lorsque deux planètes sont séparées par un angle d’environ 180 degrés. Elles se trouvent symboliquement face à face et représentent deux besoins qu’il faut apprendre à équilibrer.",
  },
  {
    question:
      "L’opposition est-elle un aspect négatif ?",
    answer:
      "Non. L’opposition peut créer des tensions, des projections ou des contradictions, mais elle favorise aussi la conscience, la complémentarité et la recherche d’un meilleur équilibre.",
  },
  {
    question:
      "Quel orbe utiliser pour une opposition ?",
    answer:
      "L’orbe varie selon les méthodes. Une opposition est souvent interprétée jusqu’à environ 8 degrés, avec une marge parfois plus large lorsque le Soleil ou la Lune est concerné.",
  },
  {
    question:
      "Que signifie une opposition entre deux signes ?",
    answer:
      "Les signes opposés appartiennent généralement au même mode et à des éléments complémentaires. Ils représentent deux manières différentes mais liées d’aborder une même dynamique.",
  },
  {
    question:
      "Pourquoi l’opposition crée-t-elle de la projection ?",
    answer:
      "Une personne peut reconnaître plus facilement l’une des planètes et attribuer l’autre à son entourage. Elle rencontre alors cette énergie à travers ses relations avant de parvenir à l’intégrer intérieurement.",
  },
  {
    question:
      "Une opposition peut-elle devenir une force ?",
    answer:
      "Oui. Lorsqu’elle est comprise et équilibrée, l’opposition peut développer la capacité de voir plusieurs points de vue, de négocier, de créer des ponts et de réunir des besoins complémentaires.",
  },
  {
    question:
      "Comment savoir si j’ai une opposition dans mon thème natal ?",
    answer:
      "Il faut générer votre carte du ciel et comparer la position de vos planètes. Deux planètes situées presque à 180 degrés l’une de l’autre peuvent former une opposition.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "L’opposition en astrologie : signification dans le thème natal",
  description:
    "Guide complet pour comprendre l’opposition astrologique, son angle de 180 degrés, son orbe et son interprétation entre les planètes.",
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

export default function OppositionAstrologiePage() {
  return (
    <div className="opposition-page">
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

      <main className="opposition-wrap">
        <nav
          className="opposition-breadcrumb"
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
            Opposition
          </span>
        </nav>

        <section className="opposition-hero">
          <div className="opposition-badge">
            ✦ Aspect astrologique majeur
          </div>

          <div
            className="opposition-main-symbol"
            aria-hidden="true"
          >
            ☍
          </div>

          <h1>
            L’opposition en astrologie
          </h1>

          <p className="opposition-hero-lead">
            L’opposition se forme lorsque deux
            planètes se trouvent face à face dans
            le zodiaque. Elle met en lumière une
            polarité intérieure et invite à réunir
            deux besoins qui semblent d’abord
            contradictoires.
          </p>

          <div className="opposition-hero-data">
            <div>
              <span>
                Angle
              </span>

              <strong>
                180°
              </strong>
            </div>

            <div>
              <span>
                Dynamique
              </span>

              <strong>
                Polarité
              </strong>
            </div>

            <div>
              <span>
                Fonction
              </span>

              <strong>
                Équilibre
              </strong>
            </div>
          </div>

          <div className="opposition-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="opposition-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification"
              className="opposition-secondary-button"
            >
              Comprendre l’opposition
            </a>
          </div>
        </section>

        <article className="opposition-content">
          <section id="signification">
            <span className="opposition-kicker">
              Deux forces face à face
            </span>

            <h2>
              Que signifie une opposition en astrologie ?
            </h2>

            <p>
              L’opposition est un aspect qui se
              forme lorsque deux planètes sont
              séparées par un angle d’environ
              180 degrés. Elles occupent alors des
              positions opposées sur le cercle du
              zodiaque.
            </p>

            <p>
              Les deux planètes représentent des
              fonctions différentes qui cherchent
              toutes les deux à s’exprimer. La
              personne peut toutefois avoir
              l’impression qu’elle doit choisir
              l’une au détriment de l’autre.
            </p>

            <p>
              Le véritable travail de l’opposition
              consiste à reconnaître la valeur des
              deux pôles et à construire un
              équilibre. Elle ne demande pas
              d’éliminer une énergie, mais
              d’apprendre à les faire collaborer.
            </p>
          </section>

          <section>
            <h2>
              Comment fonctionne l’opposition ?
            </h2>

            <div className="opposition-reading-grid">
              <article className="opposition-reading-card">
                <span className="opposition-reading-number">
                  01
                </span>

                <h3>
                  Deux besoins s’opposent
                </h3>

                <p>
                  Les planètes semblent tirer la
                  personne dans deux directions
                  différentes.
                </p>
              </article>

              <article className="opposition-reading-card">
                <span className="opposition-reading-number">
                  02
                </span>

                <h3>
                  La tension devient visible
                </h3>

                <p>
                  L’opposition se manifeste souvent
                  dans les relations, les choix ou
                  les situations extérieures.
                </p>
              </article>

              <article className="opposition-reading-card">
                <span className="opposition-reading-number">
                  03
                </span>

                <h3>
                  Une projection peut apparaître
                </h3>

                <p>
                  Une partie de l’aspect peut être
                  attribuée aux autres avant d’être
                  reconnue intérieurement.
                </p>
              </article>

              <article className="opposition-reading-card">
                <span className="opposition-reading-number">
                  04
                </span>

                <h3>
                  Un équilibre devient possible
                </h3>

                <p>
                  Avec le temps, les deux planètes
                  peuvent devenir complémentaires
                  plutôt qu’adversaires.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="opposition-kicker">
              Une tension qui crée la conscience
            </span>

            <h2>
              L’opposition est-elle un aspect difficile ?
            </h2>

            <p>
              L’opposition est généralement classée
              parmi les aspects dynamiques. Elle
              met en lumière des contradictions et
              peut créer une alternance entre deux
              comportements ou deux besoins.
            </p>

            <div className="opposition-polarity-grid">
              <article className="opposition-polarity-card">
                <span className="opposition-polarity-icon">
                  ⚡
                </span>

                <h3>
                  Le défi de l’opposition
                </h3>

                <p>
                  La personne peut passer d’un pôle
                  à l’autre sans parvenir à les
                  réunir. Elle peut également vivre
                  la tension à travers ses relations
                  ou son environnement.
                </p>

                <p>
                  L’impression de devoir choisir
                  entre deux besoins peut produire
                  de l’hésitation, de la frustration
                  ou des réactions extrêmes.
                </p>
              </article>

              <article className="opposition-polarity-card">
                <span className="opposition-polarity-icon">
                  ✦
                </span>

                <h3>
                  Le potentiel de l’opposition
                </h3>

                <p>
                  Une opposition intégrée permet de
                  comprendre plusieurs perspectives
                  et de développer une meilleure
                  capacité d’adaptation.
                </p>

                <p>
                  Elle peut favoriser la médiation,
                  la négociation, la conscience de
                  soi et la capacité de réunir des
                  qualités complémentaires.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="opposition-kicker">
              Les éléments à observer
            </span>

            <h2>
              Comment interpréter une opposition dans un thème natal ?
            </h2>

            <div className="opposition-method-list">
              <article className="opposition-method-item">
                <span>
                  1
                </span>

                <div>
                  <h3>
                    Identifier les deux planètes
                  </h3>

                  <p>
                    Il faut d’abord comprendre les
                    fonctions représentées par
                    chaque planète et la manière
                    dont elles peuvent entrer en
                    tension.
                  </p>
                </div>
              </article>

              <article className="opposition-method-item">
                <span>
                  2
                </span>

                <div>
                  <h3>
                    Observer les signes opposés
                  </h3>

                  <p>
                    Les signes indiquent deux
                    manières différentes mais
                    complémentaires d’exprimer la
                    même polarité.
                  </p>
                </div>
              </article>

              <article className="opposition-method-item">
                <span>
                  3
                </span>

                <div>
                  <h3>
                    Étudier l’axe des maisons
                  </h3>

                  <p>
                    Les maisons concernées révèlent
                    les deux domaines de vie qui
                    cherchent à trouver un meilleur
                    équilibre.
                  </p>
                </div>
              </article>

              <article className="opposition-method-item">
                <span>
                  4
                </span>

                <div>
                  <h3>
                    Repérer les projections
                  </h3>

                  <p>
                    Il est utile d’observer si l’une
                    des planètes semble toujours
                    être vécue à travers les autres
                    ou les circonstances.
                  </p>
                </div>
              </article>

              <article className="opposition-method-item">
                <span>
                  5
                </span>

                <div>
                  <h3>
                    Chercher une voie d’intégration
                  </h3>

                  <p>
                    L’objectif est de permettre aux
                    deux planètes de s’exprimer sans
                    que l’une domine constamment
                    l’autre.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              L’orbe de l’opposition
            </h2>

            <p>
              L’orbe représente l’écart entre
              l’angle exact de 180 degrés et la
              position réelle des planètes. Une
              opposition peut souvent être
              interprétée jusqu’à environ
              8 degrés.
            </p>

            <div className="opposition-orb-grid">
              <article className="opposition-orb-card">
                <span className="opposition-orb-value">
                  0° à 2°
                </span>

                <h3>
                  Opposition très serrée
                </h3>

                <p>
                  La polarité est très intense et
                  peut devenir l’un des thèmes
                  centraux de la personnalité.
                </p>
              </article>

              <article className="opposition-orb-card">
                <span className="opposition-orb-value">
                  3° à 5°
                </span>

                <h3>
                  Opposition forte
                </h3>

                <p>
                  La tension entre les deux planètes
                  reste clairement perceptible dans
                  les décisions et les relations.
                </p>
              </article>

              <article className="opposition-orb-card">
                <span className="opposition-orb-value">
                  6° à 8°
                </span>

                <h3>
                  Opposition plus large
                </h3>

                <p>
                  L’aspect peut encore être
                  significatif, surtout lorsqu’il
                  implique le Soleil ou la Lune.
                </p>
              </article>
            </div>

            <p>
              Plus l’opposition est exacte, plus
              elle peut être visible. Toutefois,
              la force d’un aspect dépend également
              de la place des planètes dans
              l’ensemble du thème natal.
            </p>
          </section>

          <section>
            <span className="opposition-kicker">
              Exemples d’interprétation
            </span>

            <h2>
              Les principales oppositions entre les planètes
            </h2>

            <p>
              Une opposition s’exprime toujours
              selon le signe, les maisons et les
              autres aspects du thème. Les exemples
              suivants présentent leur dynamique
              générale.
            </p>

            <div className="opposition-examples-grid">
              {EXAMPLES.map((example) => (
                <article
                  className="opposition-example-card"
                  key={example.planets}
                >
                  <div className="opposition-example-symbol">
                    {example.symbol}
                  </div>

                  <h3>
                    {example.planets}
                  </h3>

                  <p className="opposition-example-keywords">
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
              Les six axes de signes opposés
            </h2>

            <p>
              Les signes opposés appartiennent au
              même mode, mais à des éléments
              différents. Ils représentent deux
              expressions complémentaires d’une
              même grande dynamique.
            </p>

            <div className="opposition-axes-grid">
              <article className="opposition-axis-card">
                <span>
                  ♈ — ♎
                </span>

                <h3>
                  Bélier et Balance
                </h3>

                <p>
                  Trouver l’équilibre entre
                  l’affirmation personnelle et la
                  coopération avec les autres.
                </p>
              </article>

              <article className="opposition-axis-card">
                <span>
                  ♉ — ♏
                </span>

                <h3>
                  Taureau et Scorpion
                </h3>

                <p>
                  Concilier la stabilité, la
                  sécurité et le lâcher-prise
                  nécessaire à la transformation.
                </p>
              </article>

              <article className="opposition-axis-card">
                <span>
                  ♊ — ♐
                </span>

                <h3>
                  Gémeaux et Sagittaire
                </h3>

                <p>
                  Réunir les faits, les questions,
                  les connaissances et une vision
                  plus globale de l’existence.
                </p>
              </article>

              <article className="opposition-axis-card">
                <span>
                  ♋ — ♑
                </span>

                <h3>
                  Cancer et Capricorne
                </h3>

                <p>
                  Équilibrer la vie émotionnelle,
                  la famille, les responsabilités
                  et les ambitions extérieures.
                </p>
              </article>

              <article className="opposition-axis-card">
                <span>
                  ♌ — ♒
                </span>

                <h3>
                  Lion et Verseau
                </h3>

                <p>
                  Concilier l’expression
                  individuelle, la créativité et la
                  contribution à une vision
                  collective.
                </p>
              </article>

              <article className="opposition-axis-card">
                <span>
                  ♍ — ♓
                </span>

                <h3>
                  Vierge et Poissons
                </h3>

                <p>
                  Trouver un équilibre entre
                  l’organisation concrète,
                  l’intuition, la sensibilité et le
                  lâcher-prise.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              L’opposition dans les maisons astrologiques
            </h2>

            <p>
              Une opposition relie toujours deux
              maisons situées face à face. Elle
              met donc en tension deux domaines de
              vie qui doivent apprendre à
              fonctionner ensemble.
            </p>

            <div className="opposition-houses-grid">
              <article className="opposition-house-card">
                <strong>
                  Maisons 1 et 7
                </strong>

                <p>
                  Équilibre entre l’identité
                  personnelle, l’autonomie, les
                  relations et les engagements.
                </p>
              </article>

              <article className="opposition-house-card">
                <strong>
                  Maisons 2 et 8
                </strong>

                <p>
                  Tension entre les ressources
                  personnelles, le partage,
                  l’intimité et les transformations.
                </p>
              </article>

              <article className="opposition-house-card">
                <strong>
                  Maisons 3 et 9
                </strong>

                <p>
                  Recherche d’équilibre entre les
                  informations concrètes, les
                  apprentissages et les grandes
                  convictions.
                </p>
              </article>

              <article className="opposition-house-card">
                <strong>
                  Maisons 4 et 10
                </strong>

                <p>
                  Conciliation de la vie privée, des
                  racines, de la carrière et de la
                  place occupée dans le monde.
                </p>
              </article>

              <article className="opposition-house-card">
                <strong>
                  Maisons 5 et 11
                </strong>

                <p>
                  Équilibre entre l’expression
                  personnelle, la créativité, les
                  projets collectifs et les groupes.
                </p>
              </article>

              <article className="opposition-house-card">
                <strong>
                  Maisons 6 et 12
                </strong>

                <p>
                  Relation entre le quotidien, les
                  responsabilités, le repos, la vie
                  intérieure et le lâcher-prise.
                </p>
              </article>
            </div>
          </section>

          <section>
            <span className="opposition-kicker">
              Le mécanisme de projection
            </span>

            <h2>
              Pourquoi l’opposition se manifeste-t-elle souvent dans les relations ?
            </h2>

            <div className="opposition-projection-card">
              <div className="opposition-projection-symbol">
                ☍
              </div>

              <div>
                <h3>
                  Reconnaître l’autre pôle en soi
                </h3>

                <p>
                  Dans une opposition, il est
                  fréquent de s’identifier davantage
                  à l’une des planètes. L’autre
                  énergie peut alors sembler venir
                  uniquement des partenaires, des
                  proches ou des circonstances.
                </p>

                <p>
                  Une personne ayant Vénus opposée
                  à Saturne peut par exemple se
                  percevoir comme affectueuse tout
                  en rencontrant régulièrement des
                  partenaires plus réservés ou
                  exigeants.
                </p>

                <p>
                  L’évolution commence lorsque la
                  personne reconnaît que les deux
                  planètes appartiennent à son
                  propre fonctionnement intérieur.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              L’opposition dans les transits astrologiques
            </h2>

            <p>
              Une opposition peut également se
              produire lorsqu’une planète en
              mouvement se place face à une planète
              de votre thème natal.
            </p>

            <p>
              Ce transit peut mettre en lumière une
              tension déjà présente, provoquer une
              prise de conscience ou demander un
              rééquilibrage dans un domaine précis
              de votre vie.
            </p>

            <p>
              Les oppositions de Saturne peuvent
              souligner des responsabilités ou des
              limites, tandis que celles de Jupiter
              peuvent exagérer une situation afin
              de révéler ce qui manque d’équilibre.
            </p>

            <div className="opposition-cta-card">
              <div>
                <span className="opposition-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Avez-vous une opposition importante dans votre carte du ciel ?
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
                className="opposition-primary-button"
              >
                Voir ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="opposition-faq">
            <span className="opposition-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur l’opposition en astrologie
            </h2>

            <div className="opposition-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="opposition-faq-item"
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
            className="opposition-aspects-nav"
            aria-label="Navigation entre les aspects astrologiques"
          >
            <Link
              href="/astrologie/aspects/conjonction"
              className="opposition-back-link"
            >
              <span aria-hidden="true">
                ←
              </span>

              Aspect précédent : conjonction
            </Link>

            <Link
              href="/astrologie/aspects/carre"
              className="opposition-next-link"
            >
              Aspect suivant : carré

              <span aria-hidden="true">
                →
              </span>
            </Link>
          </nav>

          <p className="opposition-disclaimer">
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
