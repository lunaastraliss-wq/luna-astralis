import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/planetes";

export const metadata: Metadata = {
  title:
    "Les planètes en astrologie : signification et rôle dans le thème natal | Luna Astralis",

  description:
    "Découvrez la signification du Soleil, de la Lune, de Mercure, Vénus, Mars, Jupiter, Saturne, Uranus, Neptune et Pluton dans votre thème natal.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Les planètes en astrologie : comprendre votre thème natal",
    description:
      "Explorez le rôle des dix principales planètes astrologiques et découvrez ce qu’elles représentent dans une carte du ciel.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Les planètes en astrologie | Luna Astralis",
    description:
      "Soleil, Lune, Mercure, Vénus, Mars, Jupiter, Saturne, Uranus, Neptune et Pluton : découvrez leur signification.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const PLANETS = [
  {
    name: "Soleil",
    symbol: "☀",
    href: "/astrologie/soleil",
    category: "Luminaire",
    keywords:
      "Identité • volonté • vitalité",
    text:
      "Le Soleil représente l’identité consciente, la volonté, le rayonnement personnel et la direction que vous cherchez progressivement à donner à votre vie.",
  },
  {
    name: "Lune",
    symbol: "☽",
    href: "/astrologie/lune",
    category: "Luminaire",
    keywords:
      "Émotions • besoins • sécurité",
    text:
      "La Lune décrit le monde émotionnel, les réactions instinctives, les habitudes et les conditions nécessaires pour ressentir une sécurité intérieure.",
  },
  {
    name: "Mercure",
    symbol: "☿",
    href: "/astrologie/mercure",
    category: "Planète personnelle",
    keywords:
      "Pensée • communication • apprentissage",
    text:
      "Mercure symbolise la manière de penser, de communiquer, d’apprendre, d’analyser les informations et de comprendre l’environnement.",
  },
  {
    name: "Vénus",
    symbol: "♀",
    href: "/astrologie/venus",
    category: "Planète personnelle",
    keywords:
      "Amour • valeurs • attirance",
    text:
      "Vénus représente la manière d’aimer, les goûts, les valeurs, l’attirance, le plaisir et la recherche d’harmonie dans les relations.",
  },
  {
    name: "Mars",
    symbol: "♂",
    href: "/astrologie/mars",
    category: "Planète personnelle",
    keywords:
      "Action • désir • courage",
    text:
      "Mars décrit l’énergie, l’initiative, le désir, le courage et la manière de s’affirmer, de défendre ses limites et de poursuivre ses objectifs.",
  },
  {
    name: "Jupiter",
    symbol: "♃",
    href: "/astrologie/jupiter",
    category: "Planète sociale",
    keywords:
      "Expansion • confiance • croissance",
    text:
      "Jupiter symbolise la croissance, les croyances, la confiance, l’ouverture, les possibilités et la recherche d’un sens plus vaste.",
  },
  {
    name: "Saturne",
    symbol: "♄",
    href: "/astrologie/saturne",
    category: "Planète sociale",
    keywords:
      "Structure • limites • maturité",
    text:
      "Saturne représente les responsabilités, les limites, la discipline, le temps et la construction progressive d’une force durable.",
  },
  {
    name: "Uranus",
    symbol: "♅",
    href: "/astrologie/uranus",
    category: "Planète transpersonnelle",
    keywords:
      "Liberté • changement • innovation",
    text:
      "Uranus symbolise l’indépendance, l’innovation, l’éveil, l’originalité et les changements qui libèrent des structures devenues trop rigides.",
  },
  {
    name: "Neptune",
    symbol: "♆",
    href: "/astrologie/neptune",
    category: "Planète transpersonnelle",
    keywords:
      "Intuition • imagination • idéal",
    text:
      "Neptune représente l’intuition, les rêves, l’imagination, la compassion, les idéaux et les perceptions qui dépassent la logique immédiate.",
  },
  {
    name: "Pluton",
    symbol: "♇",
    href: "/astrologie/pluton",
    category: "Planète transpersonnelle",
    keywords:
      "Transformation • pouvoir • renaissance",
    text:
      "Pluton symbolise les transformations profondes, les crises, le pouvoir intérieur, les vérités cachées et la capacité de régénération.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représentent les planètes en astrologie ?",
    answer:
      "Dans le langage astrologique, chaque planète représente une fonction particulière de la personnalité ou de l’expérience : identité, émotions, pensée, relations, action, croissance, limites, changement, intuition ou transformation.",
  },
  {
    question:
      "Quelle est la planète la plus importante dans un thème natal ?",
    answer:
      "Il n’existe pas une seule planète importante pour tous les thèmes. Le Soleil, la Lune et l’Ascendant constituent des repères centraux, mais les autres planètes, leurs maisons et leurs aspects apportent des informations essentielles.",
  },
  {
    question:
      "Pourquoi le Soleil et la Lune sont-ils appelés planètes en astrologie ?",
    answer:
      "En astrologie traditionnelle et moderne, le mot planète est souvent utilisé de manière symbolique pour regrouper les astres interprétés dans le thème natal. Astronomiquement, le Soleil est une étoile et la Lune est un satellite naturel.",
  },
  {
    question:
      "Que signifie une planète dans un signe astrologique ?",
    answer:
      "La planète représente une fonction, tandis que le signe décrit la manière dont cette fonction s’exprime. Par exemple, Mars représente l’action et son signe précise le style d’action.",
  },
  {
    question:
      "Que signifie une planète dans une maison astrologique ?",
    answer:
      "La maison indique le domaine de vie dans lequel l’énergie symbolique de la planète s’exprime le plus directement : identité, ressources, relations, carrière, famille ou projets.",
  },
  {
    question:
      "Que sont les aspects entre les planètes ?",
    answer:
      "Les aspects sont des angles formés entre les planètes dans la carte du ciel. Ils sont interprétés comme des relations de fluidité, de tension, de coopération ou d’intensification entre leurs fonctions symboliques.",
  },
  {
    question:
      "Comment connaître la position de mes planètes ?",
    answer:
      "Vous devez générer une carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance afin de connaître les signes, les maisons et les aspects de vos planètes.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name:
    "Les planètes en astrologie",
  headline:
    "Les planètes en astrologie : signification et rôle dans le thème natal",
  description:
    "Guide des principales planètes utilisées dans l’interprétation astrologique d’un thème natal.",
  inLanguage: "fr-CA",
  url: PAGE_URL,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: PLANETS.map(
      (planet, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: planet.name,
        url:
          `https://luna-astralis.app${planet.href}`,
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

export default function PlanetesAstrologiePage() {
  return (
    <div className="planets-page">
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

      <main className="planets-wrap">
        <section className="planets-hero">
          <div className="planets-badge">
            ✦ Bibliothèque astrologique
          </div>

          <h1>
            Les planètes en astrologie
          </h1>

          <p className="planets-hero-lead">
            Les planètes représentent les
            différentes fonctions symboliques de
            votre thème natal : votre identité,
            vos émotions, votre pensée, vos
            relations, votre énergie et vos
            grandes transformations.
          </p>

          <div className="planets-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="planets-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#liste-des-planetes"
              className="planets-secondary-button"
            >
              Explorer les planètes
            </a>
          </div>

          <div
            className="planets-orbit"
            aria-hidden="true"
          >
            <span>☀</span>
            <span>☽</span>
            <span>☿</span>
            <span>♀</span>
            <span>♂</span>
            <span>♃</span>
            <span>♄</span>
            <span>♅</span>
            <span>♆</span>
            <span>♇</span>
          </div>
        </section>

        <article className="planets-content">
          <section>
            <span className="planets-kicker">
              Les forces de votre thème natal
            </span>

            <h2>
              Quel est le rôle des planètes dans une carte du ciel ?
            </h2>

            <p>
              Dans l’interprétation astrologique,
              les planètes représentent des
              fonctions différentes. Le Soleil
              concerne l’identité consciente, la
              Lune décrit les besoins émotionnels,
              Mercure la pensée, Vénus les valeurs
              relationnelles et Mars la manière
              d’agir.
            </p>

            <p>
              Jupiter et Saturne décrivent des
              processus plus sociaux : le
              développement, les croyances, les
              responsabilités et la construction
              dans le temps. Uranus, Neptune et
              Pluton sont associés à des mouvements
              plus collectifs et à des
              transformations qui dépassent la
              seule personnalité individuelle.
            </p>

            <p>
              Pour interpréter une planète, il faut
              observer son signe, sa maison et les
              aspects qu’elle forme avec les autres
              planètes. Ces trois niveaux permettent
              de comprendre sa fonction, son mode
              d’expression et le domaine de vie
              principalement concerné.
            </p>
          </section>

          <section>
            <h2>
              Comment lire une planète dans votre thème natal ?
            </h2>

            <div className="planets-reading-grid">
              <article className="planets-reading-card">
                <span className="planets-reading-number">
                  01
                </span>

                <h3>
                  La planète
                </h3>

                <p>
                  Elle représente la fonction
                  astrologique étudiée : penser,
                  aimer, agir, grandir, structurer
                  ou transformer.
                </p>
              </article>

              <article className="planets-reading-card">
                <span className="planets-reading-number">
                  02
                </span>

                <h3>
                  Le signe
                </h3>

                <p>
                  Il décrit la manière dont
                  l’énergie de la planète s’exprime,
                  avec ses qualités, son rythme et
                  ses besoins particuliers.
                </p>
              </article>

              <article className="planets-reading-card">
                <span className="planets-reading-number">
                  03
                </span>

                <h3>
                  La maison
                </h3>

                <p>
                  Elle indique le domaine de vie
                  dans lequel cette énergie prend
                  une importance particulière.
                </p>
              </article>

              <article className="planets-reading-card">
                <span className="planets-reading-number">
                  04
                </span>

                <h3>
                  Les aspects
                </h3>

                <p>
                  Ils révèlent comment la planète
                  coopère, dialogue ou entre en
                  tension avec les autres fonctions
                  du thème natal.
                </p>
              </article>
            </div>
          </section>

          <section id="liste-des-planetes">
            <span className="planets-kicker">
              Les dix grandes fonctions astrologiques
            </span>

            <h2>
              Signification des planètes en astrologie
            </h2>

            <p>
              Sélectionnez une planète pour
              découvrir son rôle détaillé, son
              expression dans les douze signes, son
              influence dans les douze maisons et
              ses principaux aspects.
            </p>

            <div className="planets-grid">
              {PLANETS.map((planet) => (
                <article
                  className="planet-card"
                  key={planet.name}
                >
                  <div className="planet-card-top">
                    <span className="planet-symbol">
                      {planet.symbol}
                    </span>

                    <span className="planet-category">
                      {planet.category}
                    </span>
                  </div>

                  <h3>
                    {planet.name} en astrologie
                  </h3>

                  <p className="planet-keywords">
                    {planet.keywords}
                  </p>

                  <p>
                    {planet.text}
                  </p>

                  <Link
                    href={planet.href}
                    className="planet-link"
                    aria-label={`Découvrir ${planet.name} en astrologie`}
                  >
                    Découvrir {planet.name}
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section>
            <span className="planets-kicker">
              Trois niveaux de lecture
            </span>

            <h2>
              Planètes personnelles, sociales et transpersonnelles
            </h2>

            <div className="planets-groups-grid">
              <article className="planets-group-card">
                <div className="planets-group-icons">
                  ☀ ☽ ☿ ♀ ♂
                </div>

                <h3>
                  Les planètes personnelles
                </h3>

                <p>
                  Le Soleil, la Lune, Mercure,
                  Vénus et Mars sont directement
                  liés à l’identité, aux émotions,
                  à la pensée, aux relations et à
                  l’action individuelle.
                </p>
              </article>

              <article className="planets-group-card">
                <div className="planets-group-icons">
                  ♃ ♄
                </div>

                <h3>
                  Les planètes sociales
                </h3>

                <p>
                  Jupiter et Saturne décrivent la
                  manière de grandir, de se situer
                  dans la société, d’assumer des
                  responsabilités et de construire
                  dans le temps.
                </p>
              </article>

              <article className="planets-group-card">
                <div className="planets-group-icons">
                  ♅ ♆ ♇
                </div>

                <h3>
                  Les planètes transpersonnelles
                </h3>

                <p>
                  Uranus, Neptune et Pluton se
                  déplacent lentement. Leur signe
                  concerne souvent une génération,
                  tandis que leur maison précise
                  leur expression personnelle.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              Les luminaires : le Soleil et la Lune
            </h2>

            <div className="planets-luminaries">
              <article className="planets-luminary-card">
                <span className="planets-luminary-symbol">
                  ☀
                </span>

                <div>
                  <h3>
                    Le Soleil
                  </h3>

                  <p>
                    Astronomiquement, le Soleil est
                    une étoile. Dans le langage
                    astrologique, il est regroupé
                    avec les planètes et représente
                    l’identité consciente, la
                    vitalité et la volonté.
                  </p>

                  <Link
                    href="/astrologie/soleil"
                    className="planets-text-link"
                  >
                    Lire le guide du Soleil
                  </Link>
                </div>
              </article>

              <article className="planets-luminary-card">
                <span className="planets-luminary-symbol">
                  ☽
                </span>

                <div>
                  <h3>
                    La Lune
                  </h3>

                  <p>
                    Astronomiquement, la Lune est
                    le satellite naturel de la
                    Terre. En astrologie, elle
                    décrit les émotions, les
                    habitudes, les besoins et la
                    sécurité intérieure.
                  </p>

                  <Link
                    href="/astrologie/lune"
                    className="planets-text-link"
                  >
                    Lire le guide de la Lune
                  </Link>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              Pourquoi plusieurs personnes du même signe sont-elles différentes ?
            </h2>

            <p>
              Le signe solaire ne représente qu’une
              partie du thème natal. Deux personnes
              nées sous le même signe peuvent avoir
              une Lune, un Ascendant, un Mercure, une
              Vénus ou un Mars très différents.
            </p>

            <p>
              Les maisons astrologiques changent
              également selon l’heure et le lieu de
              naissance. Les aspects entre les
              planètes ajoutent enfin des
              combinaisons particulières. C’est
              l’ensemble de ces éléments qui rend
              chaque carte du ciel différente.
            </p>

            <div className="planets-cta-card">
              <div>
                <span className="planets-kicker">
                  Découvrez vos positions
                </span>

                <h2>
                  Où se trouvent vos planètes dans votre thème natal ?
                </h2>

                <p>
                  Générez gratuitement votre carte
                  du ciel pour découvrir les signes,
                  les maisons et les principales
                  positions astrologiques de votre
                  naissance.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="planets-primary-button"
              >
                Découvrir ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="planets-faq">
            <span className="planets-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur les planètes en astrologie
            </h2>

            <div className="planets-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="planets-faq-item"
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

          <p className="planets-disclaimer">
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
