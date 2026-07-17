import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/aspects";

export const metadata: Metadata = {
  title:
    "Les aspects astrologiques : signification, angles et interprétation | Luna Astralis",

  description:
    "Découvrez la signification de la conjonction, de l’opposition, du carré, du trigone, du sextile et du quinconce dans un thème natal.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Les aspects astrologiques : comprendre les relations entre les planètes",
    description:
      "Explorez les principaux aspects astrologiques et découvrez comment les planètes coopèrent, se renforcent ou entrent en tension dans une carte du ciel.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Les aspects astrologiques | Luna Astralis",
    description:
      "Conjonction, opposition, carré, trigone, sextile et quinconce : découvrez leur signification dans le thème natal.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const ASPECTS = [
  {
    name: "Conjonction",
    symbol: "☌",
    degree: "0°",
    href: "/astrologie/aspects/conjonction",
    category: "Fusion",
    keywords:
      "Intensité • union • concentration",
    text:
      "La conjonction réunit deux planètes dans une même zone du thème natal. Leurs fonctions se mélangent, se renforcent et agissent comme une seule énergie.",
  },
  {
    name: "Opposition",
    symbol: "☍",
    degree: "180°",
    href: "/astrologie/aspects/opposition",
    category: "Polarité",
    keywords:
      "Équilibre • confrontation • projection",
    text:
      "L’opposition place deux planètes face à face. Elle met en lumière deux besoins complémentaires qu’il faut apprendre à reconnaître et à équilibrer.",
  },
  {
    name: "Carré",
    symbol: "□",
    degree: "90°",
    href: "/astrologie/aspects/carre",
    category: "Tension",
    keywords:
      "Défi • action • évolution",
    text:
      "Le carré crée une tension dynamique entre deux planètes. Il peut produire des blocages, mais il devient aussi un puissant moteur d’action et de transformation.",
  },
  {
    name: "Trigone",
    symbol: "△",
    degree: "120°",
    href: "/astrologie/aspects/trigone",
    category: "Harmonie",
    keywords:
      "Fluidité • talent • facilité",
    text:
      "Le trigone relie généralement des signes du même élément. Il indique une circulation naturelle de l’énergie, des talents spontanés et des ressources faciles à mobiliser.",
  },
  {
    name: "Sextile",
    symbol: "⚹",
    degree: "60°",
    href: "/astrologie/aspects/sextile",
    category: "Coopération",
    keywords:
      "Possibilité • échange • ouverture",
    text:
      "Le sextile favorise la coopération entre deux planètes. Il représente des possibilités constructives qui demandent souvent une initiative consciente pour se développer.",
  },
  {
    name: "Quinconce",
    symbol: "⚻",
    degree: "150°",
    href: "/astrologie/aspects/quinconce",
    category: "Ajustement",
    keywords:
      "Adaptation • décalage • réorganisation",
    text:
      "Le quinconce relie deux planètes qui fonctionnent de manière très différente. Il demande des ajustements réguliers, de la souplesse et une réorganisation intérieure.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Qu’est-ce qu’un aspect astrologique ?",
    answer:
      "Un aspect astrologique est un angle formé entre deux planètes ou points importants d’un thème natal. Cet angle décrit symboliquement la manière dont leurs fonctions interagissent.",
  },
  {
    question:
      "Quels sont les principaux aspects astrologiques ?",
    answer:
      "Les aspects les plus étudiés sont la conjonction à 0 degré, le sextile à 60 degrés, le carré à 90 degrés, le trigone à 120 degrés et l’opposition à 180 degrés. Le quinconce à 150 degrés est également souvent interprété.",
  },
  {
    question:
      "Quel est l’aspect astrologique le plus puissant ?",
    answer:
      "La puissance d’un aspect dépend de sa précision, des planètes concernées, de leur position et de l’ensemble du thème. Une conjonction exacte est souvent très intense, mais un carré ou une opposition peut également être dominant.",
  },
  {
    question:
      "Les aspects difficiles sont-ils négatifs ?",
    answer:
      "Non. Les carrés et les oppositions peuvent créer des tensions, mais ils favorisent aussi l’action, la prise de conscience, la résilience et le développement personnel.",
  },
  {
    question:
      "Que signifie l’orbe d’un aspect ?",
    answer:
      "L’orbe représente l’écart accepté entre l’angle exact d’un aspect et la position réelle des planètes. Plus l’orbe est petit, plus l’aspect est généralement considéré comme précis et perceptible.",
  },
  {
    question:
      "Un thème natal peut-il ne contenir aucun aspect ?",
    answer:
      "Un thème natal contient presque toujours plusieurs aspects. Certaines planètes peuvent toutefois être peu reliées aux autres ou ne former aucun aspect majeur très précis.",
  },
  {
    question:
      "Comment connaître les aspects de mon thème natal ?",
    answer:
      "Vous devez générer une carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance. Les lignes tracées au centre de la roue représentent généralement les principaux aspects.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name:
    "Les aspects astrologiques",
  headline:
    "Les aspects astrologiques : signification, angles et interprétation",
  description:
    "Guide des principaux aspects astrologiques utilisés pour interpréter les relations entre les planètes dans un thème natal.",
  inLanguage: "fr-CA",
  url: PAGE_URL,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: ASPECTS.map(
      (aspect, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: aspect.name,
        url:
          `https://luna-astralis.app${aspect.href}`,
      })
    ),
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

export default function AspectsAstrologiquesPage() {
  return (
    <div className="aspects-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
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

      <main className="aspects-wrap">
        <section className="aspects-hero">
          <div className="aspects-badge">
            ✦ Bibliothèque astrologique
          </div>

          <h1>
            Les aspects astrologiques
          </h1>

          <p className="aspects-hero-lead">
            Les aspects sont les angles formés
            entre les planètes dans votre thème
            natal. Ils révèlent comment vos
            différentes énergies intérieures
            coopèrent, se renforcent, se confrontent
            ou cherchent un nouvel équilibre.
          </p>

          <div className="aspects-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="aspects-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#liste-des-aspects"
              className="aspects-secondary-button"
            >
              Explorer les aspects
            </a>
          </div>

          <div
            className="aspects-orbit"
            aria-hidden="true"
          >
            <span>
              <strong>☌</strong>
              <small>0°</small>
            </span>

            <span>
              <strong>⚹</strong>
              <small>60°</small>
            </span>

            <span>
              <strong>□</strong>
              <small>90°</small>
            </span>

            <span>
              <strong>△</strong>
              <small>120°</small>
            </span>

            <span>
              <strong>⚻</strong>
              <small>150°</small>
            </span>

            <span>
              <strong>☍</strong>
              <small>180°</small>
            </span>
          </div>
        </section>

        <article className="aspects-content">
          <section>
            <span className="aspects-kicker">
              Le dialogue entre les planètes
            </span>

            <h2>
              Qu’est-ce qu’un aspect astrologique ?
            </h2>

            <p>
              Dans une carte du ciel, chaque
              planète occupe une position précise
              sur le cercle du zodiaque. La distance
              angulaire entre deux planètes peut
              former un aspect astrologique.
            </p>

            <p>
              Ces angles sont interprétés comme des
              relations entre différentes fonctions
              de la personnalité. Le Soleil
              représente par exemple l’identité,
              tandis que la Lune décrit le monde
              émotionnel. Un aspect entre ces deux
              luminaires indique donc la manière
              dont l’identité consciente et les
              besoins émotionnels interagissent.
            </p>

            <p>
              Certains aspects facilitent la
              circulation de l’énergie, tandis que
              d’autres créent davantage de tension
              ou demandent des ajustements. Aucun
              aspect ne doit toutefois être
              considéré isolément ou simplement
              classé comme positif ou négatif.
            </p>
          </section>

          <section>
            <h2>
              Comment interpréter un aspect dans un thème natal ?
            </h2>

            <div className="aspects-reading-grid">
              <article className="aspects-reading-card">
                <span className="aspects-reading-number">
                  01
                </span>

                <h3>
                  Les planètes
                </h3>

                <p>
                  Elles indiquent les fonctions
                  concernées : penser, ressentir,
                  aimer, agir, grandir, structurer
                  ou transformer.
                </p>
              </article>

              <article className="aspects-reading-card">
                <span className="aspects-reading-number">
                  02
                </span>

                <h3>
                  Le type d’aspect
                </h3>

                <p>
                  L’angle précise la nature de la
                  relation : fusion, coopération,
                  tension, fluidité, ajustement ou
                  polarité.
                </p>
              </article>

              <article className="aspects-reading-card">
                <span className="aspects-reading-number">
                  03
                </span>

                <h3>
                  Les signes
                </h3>

                <p>
                  Les signes décrivent la manière
                  dont chaque planète exprime son
                  énergie et réagit à l’autre.
                </p>
              </article>

              <article className="aspects-reading-card">
                <span className="aspects-reading-number">
                  04
                </span>

                <h3>
                  Les maisons
                </h3>

                <p>
                  Les maisons montrent les domaines
                  de vie dans lesquels l’aspect se
                  manifeste le plus directement.
                </p>
              </article>
            </div>
          </section>

          <section id="liste-des-aspects">
            <span className="aspects-kicker">
              Les principaux angles astrologiques
            </span>

            <h2>
              Signification des aspects astrologiques
            </h2>

            <p>
              Sélectionnez un aspect pour découvrir
              sa signification détaillée, son angle,
              son fonctionnement psychologique et
              des exemples d’interprétation entre
              différentes planètes.
            </p>

            <div className="aspects-grid">
              {ASPECTS.map((aspect) => (
                <article
                  className="aspect-card"
                  key={aspect.name}
                >
                  <div className="aspect-card-top">
                    <div className="aspect-symbol-wrap">
                      <span className="aspect-symbol">
                        {aspect.symbol}
                      </span>

                      <span className="aspect-degree">
                        {aspect.degree}
                      </span>
                    </div>

                    <span className="aspect-category">
                      {aspect.category}
                    </span>
                  </div>

                  <h3>
                    {aspect.name} en astrologie
                  </h3>

                  <p className="aspect-keywords">
                    {aspect.keywords}
                  </p>

                  <p>
                    {aspect.text}
                  </p>

                  <Link
                    href={aspect.href}
                    className="aspect-link"
                    aria-label={`Découvrir la signification de la ${aspect.name.toLowerCase()} en astrologie`}
                  >
                    Découvrir {aspect.name.toLowerCase()}
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section>
            <span className="aspects-kicker">
              Deux grandes dynamiques
            </span>

            <h2>
              Aspects harmonieux et aspects dynamiques
            </h2>

            <div className="aspects-groups-grid">
              <article className="aspects-group-card">
                <div className="aspects-group-icons">
                  △ ⚹
                </div>

                <h3>
                  Les aspects harmonieux
                </h3>

                <p>
                  Le trigone et le sextile
                  facilitent généralement la
                  coopération entre les planètes.
                  Ils peuvent représenter des
                  talents, des ressources, des
                  occasions et des qualités qui
                  s’expriment avec davantage de
                  naturel.
                </p>

                <p>
                  Ils ne garantissent toutefois pas
                  automatiquement le développement
                  de leur potentiel. Une facilité
                  peut rester peu utilisée si elle
                  n’est jamais reconnue ou cultivée.
                </p>
              </article>

              <article className="aspects-group-card">
                <div className="aspects-group-icons">
                  □ ☍
                </div>

                <h3>
                  Les aspects dynamiques
                </h3>

                <p>
                  Le carré et l’opposition mettent
                  en évidence des différences, des
                  contradictions ou des tensions
                  entre les planètes concernées.
                </p>

                <p>
                  Ces aspects demandent davantage
                  de conscience et d’effort, mais
                  ils peuvent devenir des moteurs
                  importants de décision,
                  d’évolution et de dépassement.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La conjonction est-elle harmonieuse ou difficile ?
            </h2>

            <div className="aspects-focus-card">
              <span className="aspects-focus-symbol">
                ☌
              </span>

              <div>
                <h3>
                  Une fusion d’énergies
                </h3>

                <p>
                  La conjonction ne fait pas partie
                  d’une catégorie strictement
                  harmonieuse ou dynamique. Elle
                  fusionne les fonctions des deux
                  planètes et augmente leur
                  intensité.
                </p>

                <p>
                  Son expression dépend beaucoup
                  des planètes concernées. Une
                  conjonction entre Vénus et
                  Jupiter peut favoriser
                  l’enthousiasme et la générosité,
                  tandis qu’une conjonction entre
                  Mars et Saturne peut produire une
                  combinaison plus exigeante entre
                  l’action et le contrôle.
                </p>

                <Link
                  href="/astrologie/aspects/conjonction"
                  className="aspects-text-link"
                >
                  Comprendre la conjonction
                </Link>
              </div>
            </div>
          </section>

          <section>
            <span className="aspects-kicker">
              La précision de l’angle
            </span>

            <h2>
              Qu’est-ce que l’orbe en astrologie ?
            </h2>

            <p>
              Un aspect n’a pas besoin d’être
              parfaitement exact pour être
              interprété. L’écart entre l’angle
              théorique et l’angle réel est appelé
              l’orbe.
            </p>

            <div className="aspects-orb-grid">
              <article className="aspects-orb-card">
                <span className="aspects-orb-value">
                  0°
                </span>

                <h3>
                  Aspect exact
                </h3>

                <p>
                  Les deux planètes forment
                  exactement l’angle associé à
                  l’aspect. Son influence est
                  généralement considérée comme
                  particulièrement forte.
                </p>
              </article>

              <article className="aspects-orb-card">
                <span className="aspects-orb-value">
                  1° à 3°
                </span>

                <h3>
                  Orbe serré
                </h3>

                <p>
                  L’aspect reste très précis. La
                  relation entre les planètes peut
                  être facilement perceptible dans
                  le caractère ou l’expérience.
                </p>
              </article>

              <article className="aspects-orb-card">
                <span className="aspects-orb-value">
                  4° à 8°
                </span>

                <h3>
                  Orbe plus large
                </h3>

                <p>
                  L’aspect peut encore être retenu
                  selon les planètes, le type
                  d’aspect et la méthode
                  astrologique utilisée.
                </p>
              </article>
            </div>

            <p>
              Les astrologues n’utilisent pas tous
              les mêmes orbes. Les luminaires
              reçoivent souvent des orbes plus
              larges, tandis que les aspects
              mineurs sont généralement étudiés
              avec des marges plus serrées.
            </p>
          </section>

          <section>
            <h2>
              Aspects appliquants et séparants
            </h2>

            <div className="aspects-movement-grid">
              <article className="aspects-movement-card">
                <span className="aspects-movement-icon">
                  →
                </span>

                <div>
                  <h3>
                    Aspect appliquant
                  </h3>

                  <p>
                    L’aspect est appliquant lorsque
                    les planètes se rapprochent de
                    l’angle exact. Cette dynamique
                    peut symboliser une énergie qui
                    se construit, gagne en
                    intensité ou cherche à
                    s’accomplir.
                  </p>
                </div>
              </article>

              <article className="aspects-movement-card">
                <span className="aspects-movement-icon">
                  ←
                </span>

                <div>
                  <h3>
                    Aspect séparant
                  </h3>

                  <p>
                    L’aspect est séparant lorsque
                    les planètes ont déjà dépassé
                    l’angle exact. Il peut
                    représenter une expérience déjà
                    intégrée, connue ou en cours
                    d’assimilation.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              Pourquoi les aspects sont-ils essentiels dans un thème natal ?
            </h2>

            <p>
              Les signes indiquent comment les
              planètes s’expriment et les maisons
              montrent dans quels domaines de vie
              elles agissent. Les aspects ajoutent
              une troisième dimension : ils
              expliquent comment toutes ces énergies
              fonctionnent ensemble.
            </p>

            <p>
              Une personne peut par exemple avoir
              une Vénus très relationnelle, mais un
              carré de Saturne à Vénus peut ajouter
              de la prudence, des exigences ou une
              peur du rejet. Un trigone de Jupiter
              à Vénus peut au contraire renforcer
              l’optimisme, la sociabilité ou la
              générosité.
            </p>

            <p>
              Les aspects permettent donc de
              dépasser une lecture isolée des
              planètes. Ils révèlent les
              contradictions, les complémentarités,
              les talents naturels et les
              mécanismes d’évolution propres à
              chaque thème natal.
            </p>

            <div className="aspects-cta-card">
              <div>
                <span className="aspects-kicker">
                  Découvrez vos aspects
                </span>

                <h2>
                  Quelles planètes sont reliées dans votre thème natal ?
                </h2>

                <p>
                  Générez gratuitement votre carte
                  du ciel pour découvrir vos
                  positions planétaires, vos
                  maisons et les principaux aspects
                  de votre naissance.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="aspects-primary-button"
              >
                Découvrir ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="aspects-faq">
            <span className="aspects-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur les aspects astrologiques
            </h2>

            <div className="aspects-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="aspects-faq-item"
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

          <p className="aspects-disclaimer">
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
