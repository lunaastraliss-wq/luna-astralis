import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/maisons/maison-1";

export const metadata: Metadata = {
  title:
    "Maison 1 en astrologie : Ascendant, personnalité et identité | Luna Astralis",

  description:
    "Découvrez la signification de la Maison 1 en astrologie : Ascendant, personnalité, apparence, comportement, identité, premières impressions et planètes en Maison 1.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Maison 1 en astrologie : identité, personnalité et Ascendant",
    description:
      "Guide complet de la Maison 1 : Ascendant, personnalité, apparence, manière d’agir, signes et planètes présents dans la première maison astrologique.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "La Maison 1 en astrologie | Luna Astralis",
    description:
      "Découvrez ce que la Maison 1 révèle sur votre identité, votre personnalité, votre apparence et votre manière d’aborder la vie.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const HOUSE_TRAITS = [
  {
    title: "Votre identité visible",
    symbol: "Ⅰ",
    text:
      "La Maison 1 décrit la manière dont vous vous présentez naturellement au monde. Elle influence votre attitude, votre comportement spontané et l’image que vous projetez dès les premières rencontres.",
  },
  {
    title: "Votre manière d’agir",
    symbol: "↑",
    text:
      "Cette maison révèle votre façon d’aborder les situations nouvelles, de prendre des initiatives et de réagir instinctivement lorsque vous devez avancer ou vous adapter.",
  },
  {
    title: "Votre présence personnelle",
    symbol: "✦",
    text:
      "La Maison 1 colore votre présence, votre énergie extérieure et parfois certains traits de votre apparence. Elle montre comment votre personnalité prend forme dans le monde concret.",
  },
];

const HOUSE_STRENGTHS = [
  "Affirmation de soi",
  "Autonomie",
  "Capacité d’initiative",
  "Présence personnelle",
  "Instinct de survie",
  "Conscience de son identité",
];

const HOUSE_CHALLENGES = [
  "Égocentrisme",
  "Impulsivité",
  "Réactions trop rapides",
  "Difficulté à considérer les autres",
  "Besoin excessif de se prouver",
  "Identification à l’apparence",
];

const PLANETS_IN_HOUSE = [
  {
    name: "Soleil",
    symbol: "☀",
    text:
      "Le Soleil en Maison 1 renforce le besoin d’exprimer son identité, de rayonner et de prendre sa place. La personne peut dégager une présence forte et chercher à vivre de manière authentique.",
  },
  {
    name: "Lune",
    symbol: "☽",
    text:
      "La Lune en Maison 1 rend les émotions visibles et colore fortement la personnalité. Les réactions sont souvent instinctives, sensibles et influencées par l’ambiance environnante.",
  },
  {
    name: "Mercure",
    symbol: "☿",
    text:
      "Mercure en Maison 1 favorise la curiosité, la mobilité, la communication et une identité construite autour des idées, des échanges et de l’apprentissage.",
  },
  {
    name: "Vénus",
    symbol: "♀",
    text:
      "Vénus en Maison 1 apporte charme, sociabilité, sens esthétique et besoin d’harmonie. La personne cherche souvent à créer une impression agréable et accueillante.",
  },
  {
    name: "Mars",
    symbol: "♂",
    text:
      "Mars en Maison 1 apporte énergie, volonté, courage et esprit d’initiative. La personne agit rapidement et peut parfois réagir avec impatience ou combativité.",
  },
  {
    name: "Jupiter",
    symbol: "♃",
    text:
      "Jupiter en Maison 1 amplifie la confiance, l’optimisme et le désir d’expansion. La personne peut dégager une présence généreuse, enthousiaste et inspirante.",
  },
  {
    name: "Saturne",
    symbol: "♄",
    text:
      "Saturne en Maison 1 peut rendre la personnalité plus réservée, sérieuse ou prudente. Avec le temps, il favorise une grande solidité intérieure et une identité bien structurée.",
  },
  {
    name: "Uranus",
    symbol: "♅",
    text:
      "Uranus en Maison 1 souligne l’originalité, l’indépendance et le refus des étiquettes. La personne cherche à vivre selon ses propres règles et peut surprendre par son comportement.",
  },
  {
    name: "Neptune",
    symbol: "♆",
    text:
      "Neptune en Maison 1 apporte intuition, sensibilité et imagination. L’identité peut sembler changeante ou difficile à définir, particulièrement lorsque les limites personnelles manquent de clarté.",
  },
  {
    name: "Pluton",
    symbol: "♇",
    text:
      "Pluton en Maison 1 donne une présence intense, profonde et magnétique. La personne traverse souvent d’importantes transformations dans sa manière de se définir et de s’affirmer.",
  },
];

const ASCENDANT_SIGNS = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "Une Maison 1 en Bélier donne une approche directe, dynamique et spontanée. La personne agit rapidement et cherche à ouvrir sa propre voie.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "Une Maison 1 en Taureau apporte calme, stabilité et persévérance. La personne avance à son rythme et recherche la sécurité avant de s’engager.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "Une Maison 1 en Gémeaux donne une présence curieuse, vive et communicative. La personne s’adapte rapidement et aime explorer plusieurs idées.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "Une Maison 1 en Cancer rend la présence plus sensible, protectrice et intuitive. La personne observe l’ambiance avant de s’ouvrir pleinement.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "Une Maison 1 en Lion donne une présence chaleureuse, expressive et créative. La personne cherche naturellement à rayonner et à affirmer son individualité.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "Une Maison 1 en Vierge apporte discrétion, observation et sens pratique. La personne analyse son environnement avant d’agir.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "Une Maison 1 en Balance donne une présence sociable, diplomate et élégante. La personne cherche à créer un climat harmonieux dès les premiers échanges.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "Une Maison 1 en Scorpion apporte intensité, profondeur et réserve. La personne observe attentivement avant de révéler sa véritable personnalité.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "Une Maison 1 en Sagittaire donne une présence optimiste, franche et aventureuse. La personne cherche à élargir ses horizons et à vivre librement.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "Une Maison 1 en Capricorne apporte sérieux, maîtrise et ambition. La personne avance avec prudence et cherche à construire une identité solide.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "Une Maison 1 en Verseau donne une présence indépendante, originale et imprévisible. La personne refuse souvent de se conformer aux attentes traditionnelles.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "Une Maison 1 en Poissons apporte douceur, intuition et réceptivité. La personnalité peut sembler mystérieuse, sensible ou très influencée par l’environnement.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente la Maison 1 en astrologie ?",
    answer:
      "La Maison 1 représente l’identité, la personnalité visible, l’apparence, le comportement spontané, la manière d’agir et la façon dont une personne aborde les nouvelles expériences.",
  },
  {
    question:
      "Quelle est la différence entre la Maison 1 et l’Ascendant ?",
    answer:
      "L’Ascendant est le signe qui se levait à l’horizon au moment exact de la naissance. Il marque le début de la Maison 1. La Maison 1 comprend l’Ascendant, mais également les éventuelles planètes présentes dans cette maison.",
  },
  {
    question:
      "Que signifie une planète en Maison 1 ?",
    answer:
      "Une planète en Maison 1 influence fortement la personnalité, la présence et la manière d’agir. Son énergie devient généralement visible dans le comportement et dans les premières impressions données aux autres.",
  },
  {
    question:
      "La Maison 1 influence-t-elle l’apparence physique ?",
    answer:
      "En astrologie, la Maison 1 et l’Ascendant sont traditionnellement associés à la présence physique, à l’allure, aux expressions et à la manière d’occuper l’espace. Ils ne déterminent toutefois pas seuls l’apparence.",
  },
  {
    question:
      "Comment connaître le signe de ma Maison 1 ?",
    answer:
      "Le signe situé au début de votre Maison 1 correspond à votre Ascendant. Pour le calculer correctement, il faut connaître votre date, votre heure précise et votre lieu de naissance.",
  },
  {
    question:
      "Peut-on avoir plusieurs planètes en Maison 1 ?",
    answer:
      "Oui. Lorsque plusieurs planètes se trouvent en Maison 1, cette maison devient particulièrement importante. La personnalité, l’identité et l’affirmation de soi occupent alors une place centrale dans le thème natal.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Maison 1 en astrologie : Ascendant, personnalité, identité et apparence",
  description:
    "Guide complet consacré à la Maison 1, à l’Ascendant, à la personnalité, à l’identité, à l’apparence et aux planètes présentes dans la première maison astrologique.",
  inLanguage: "fr-CA",
  mainEntityOfPage: PAGE_URL,
  publisher: {
    "@type": "Organization",
    name: "Luna Astralis",
    url: "https://luna-astralis.app",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://luna-astralis.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Astrologie",
      item: "https://luna-astralis.app/astrologie",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Maisons astrologiques",
      item:
        "https://luna-astralis.app/astrologie/maisons",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Maison 1",
      item: PAGE_URL,
    },
  ],
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

export default function MaisonUnAstrologiePage() {
  return (
    <div className="house-one-page">
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
          __html: JSON.stringify(
            breadcrumbJsonLd
          ).replace(/</g, "\\u003c"),
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

      <main className="house-one-wrap">
        <section className="house-one-hero">
          <div className="house-one-badge">
            Ⅰ Première maison astrologique
          </div>

          <h1>
            La Maison 1 en astrologie
          </h1>

          <p className="house-one-hero-lead">
            La Maison 1 représente votre identité, votre
            personnalité visible, votre apparence et votre
            manière instinctive d’aborder la vie. Son point
            de départ correspond à votre Ascendant.
          </p>

          <div className="house-one-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="house-one-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification-maison-1"
              className="house-one-secondary-button"
            >
              Découvrir la Maison 1
            </a>
          </div>
        </section>

        <article className="house-one-content">
          <section id="signification-maison-1">
            <span className="house-one-kicker">
              Signification de la Maison 1
            </span>

            <h2>
              Que représente la Maison 1 ?
            </h2>

            <p>
              La Maison 1 est la première des douze maisons
              astrologiques. Elle marque le commencement du
              thème natal et représente la manière dont une
              personne entre en relation avec le monde.
            </p>

            <p>
              Elle décrit l’identité visible, le comportement
              spontané, les premières réactions et la manière
              d’aborder les situations nouvelles. Elle
              influence également la première impression que
              vous donnez aux autres.
            </p>

            <p>
              La Maison 1 est étroitement liée à l’affirmation
              de soi. Elle montre comment vous prenez votre
              place, comment vous démarrez une action et
              comment votre énergie personnelle s’exprime
              naturellement.
            </p>

            <p>
              Son point de départ correspond à l’Ascendant,
              c’est-à-dire au signe qui se levait à l’est au
              moment précis de votre naissance.
            </p>
          </section>

          <section>
            <h2>
              Les grands domaines de la Maison 1
            </h2>

            <div className="house-one-info-grid">
              {HOUSE_TRAITS.map((item) => (
                <article
                  className="house-one-info-card"
                  key={item.title}
                >
                  <span className="house-one-card-icon">
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
              Maison 1, Ascendant et personnalité
            </h2>

            <p>
              L’Ascendant est le signe situé sur la cuspide,
              c’est-à-dire au début de la Maison 1. Il change
              environ toutes les deux heures, ce qui explique
              pourquoi l’heure exacte de naissance est
              essentielle pour calculer une carte du ciel.
            </p>

            <p>
              Le signe de l’Ascendant donne une couleur
              particulière à la Maison 1. Il influence la
              façon dont une personne se présente, agit,
              communique et réagit instinctivement.
            </p>

            <p>
              Deux personnes ayant le même signe solaire
              peuvent donc sembler très différentes si leurs
              Ascendants ne sont pas les mêmes. Le Soleil
              décrit l’identité centrale, tandis que
              l’Ascendant montre la manière dont cette identité
              se manifeste dans la vie quotidienne.
            </p>

            <div className="house-one-highlight-card">
              <div className="house-one-highlight-symbol">
                ↑
              </div>

              <div>
                <h3>
                  L’Ascendant ouvre la Maison 1
                </h3>

                <p>
                  Pour comprendre pleinement votre Maison 1,
                  il faut analyser le signe de votre
                  Ascendant, sa planète maîtresse, les aspects
                  qu’elle reçoit et les planètes éventuellement
                  présentes dans cette maison.
                </p>

                <Link
                  href="/astrologie/ascendant"
                  className="house-one-text-link"
                >
                  Comprendre votre Ascendant
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis de la Maison 1
            </h2>

            <div className="house-one-strengths-grid">
              <div className="house-one-list-card">
                <span className="house-one-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Une Maison 1 équilibrée
                </h3>

                <ul>
                  {HOUSE_STRENGTHS.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="house-one-list-card">
                <span className="house-one-kicker">
                  Points d’attention
                </span>

                <h3>
                  Les défis possibles
                </h3>

                <ul>
                  {HOUSE_CHALLENGES.map((item) => (
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
              Les planètes en Maison 1
            </h2>

            <p>
              Une planète présente en Maison 1 devient
              particulièrement visible dans la personnalité.
              Son énergie influence directement le
              comportement, l’apparence, les réactions et la
              façon d’entrer en relation avec le monde.
            </p>

            <p>
              Plus une planète se trouve près de l’Ascendant,
              plus son influence peut sembler forte dans la
              présence et dans les premières impressions.
            </p>

            <div className="house-one-planets-grid">
              {PLANETS_IN_HOUSE.map((planet) => (
                <article
                  className="house-one-planet-card"
                  key={planet.name}
                >
                  <div className="house-one-planet-symbol">
                    {planet.symbol}
                  </div>

                  <div>
                    <h3>
                      {planet.name} en Maison 1
                    </h3>

                    <p>
                      {planet.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Les douze signes dans la Maison 1
            </h2>

            <p>
              Le signe présent au début de la Maison 1 est
              votre Ascendant. Il décrit votre manière
              spontanée d’agir, votre style personnel et la
              façon dont vous vous adaptez aux situations
              nouvelles.
            </p>

            <div className="house-one-signs-grid">
              {ASCENDANT_SIGNS.map((item) => (
                <article
                  className="house-one-sign-card"
                  key={item.sign}
                >
                  <div className="house-one-sign-symbol">
                    {item.symbol}
                  </div>

                  <div>
                    <h3>
                      Maison 1 en {item.sign}
                    </h3>

                    <p>
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Maison 1 vide : que signifie-t-elle ?
            </h2>

            <p>
              Une Maison 1 vide ne signifie pas que vous
              manquez de personnalité ou que cette maison n’a
              aucune importance. Toutes les maisons d’un thème
              natal restent actives, même lorsqu’elles ne
              contiennent aucune planète.
            </p>

            <p>
              Pour interpréter une Maison 1 vide, il faut
              observer son signe de départ, donc l’Ascendant,
              puis la planète qui gouverne ce signe.
            </p>

            <p>
              Par exemple, si votre Ascendant se trouve en
              Balance, Vénus devient la planète maîtresse de
              votre Maison 1. Sa position dans votre thème
              apporte alors des informations importantes sur
              votre identité et votre manière d’agir.
            </p>
          </section>

          <section>
            <h2>
              La planète maîtresse de la Maison 1
            </h2>

            <p>
              Chaque signe astrologique possède une planète
              maîtresse. La planète qui gouverne le signe de
              votre Ascendant joue un rôle majeur dans
              l’interprétation de votre Maison 1.
            </p>

            <p>
              Sa position par signe et par maison montre où
              votre énergie personnelle cherche à s’exprimer.
              Ses aspects avec les autres planètes précisent
              les facilités, les tensions et les apprentissages
              liés à votre identité.
            </p>

            <div className="house-one-rulers-grid">
              <div className="house-one-ruler-card">
                <span>
                  ♈
                </span>
                <h3>
                  Bélier
                </h3>
                <p>
                  Mars
                </p>
              </div>

              <div className="house-one-ruler-card">
                <span>
                  ♉
                </span>
                <h3>
                  Taureau
                </h3>
                <p>
                  Vénus
                </p>
              </div>

              <div className="house-one-ruler-card">
                <span>
                  ♊
                </span>
                <h3>
                  Gémeaux
                </h3>
                <p>
                  Mercure
                </p>
              </div>

              <div className="house-one-ruler-card">
                <span>
                  ♋
                </span>
                <h3>
                  Cancer
                </h3>
                <p>
                  Lune
                </p>
              </div>

              <div className="house-one-ruler-card">
                <span>
                  ♌
                </span>
                <h3>
                  Lion
                </h3>
                <p>
                  Soleil
                </p>
              </div>

              <div className="house-one-ruler-card">
                <span>
                  ♍
                </span>
                <h3>
                  Vierge
                </h3>
                <p>
                  Mercure
                </p>
              </div>

              <div className="house-one-ruler-card">
                <span>
                  ♎
                </span>
                <h3>
                  Balance
                </h3>
                <p>
                  Vénus
                </p>
              </div>

              <div className="house-one-ruler-card">
                <span>
                  ♏
                </span>
                <h3>
                  Scorpion
                </h3>
                <p>
                  Pluton et Mars
                </p>
              </div>

              <div className="house-one-ruler-card">
                <span>
                  ♐
                </span>
                <h3>
                  Sagittaire
                </h3>
                <p>
                  Jupiter
                </p>
              </div>

              <div className="house-one-ruler-card">
                <span>
                  ♑
                </span>
                <h3>
                  Capricorne
                </h3>
                <p>
                  Saturne
                </p>
              </div>

              <div className="house-one-ruler-card">
                <span>
                  ♒
                </span>
                <h3>
                  Verseau
                </h3>
                <p>
                  Uranus et Saturne
                </p>
              </div>

              <div className="house-one-ruler-card">
                <span>
                  ♓
                </span>
                <h3>
                  Poissons
                </h3>
                <p>
                  Neptune et Jupiter
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              La Maison 1 dans votre évolution personnelle
            </h2>

            <p>
              La Maison 1 vous invite à développer une identité
              authentique. Elle montre comment vous pouvez
              apprendre à vous affirmer sans écraser les autres
              et à exprimer votre personnalité sans dépendre
              uniquement de leur regard.
            </p>

            <p>
              Une Maison 1 équilibrée permet de reconnaître ses
              besoins, de prendre des initiatives et de faire
              confiance à ses réactions tout en restant
              consciente de leur impact.
            </p>

            <p>
              Son évolution consiste souvent à dépasser une
              image imposée ou protectrice pour construire une
              présence plus libre, consciente et fidèle à sa
              véritable nature.
            </p>
          </section>

          <section>
            <h2>
              Comment interpréter votre Maison 1 ?
            </h2>

            <div className="house-one-steps">
              <article className="house-one-step-card">
                <span>
                  1
                </span>

                <div>
                  <h3>
                    Identifiez votre Ascendant
                  </h3>

                  <p>
                    Observez le signe situé au début de la
                    Maison 1. Il décrit votre manière
                    instinctive d’aborder la vie.
                  </p>
                </div>
              </article>

              <article className="house-one-step-card">
                <span>
                  2
                </span>

                <div>
                  <h3>
                    Repérez sa planète maîtresse
                  </h3>

                  <p>
                    Analysez le signe et la maison occupés par
                    la planète qui gouverne votre Ascendant.
                  </p>
                </div>
              </article>

              <article className="house-one-step-card">
                <span>
                  3
                </span>

                <div>
                  <h3>
                    Observez les planètes présentes
                  </h3>

                  <p>
                    Chaque planète en Maison 1 ajoute une
                    énergie visible à votre personnalité et à
                    votre comportement.
                  </p>
                </div>
              </article>

              <article className="house-one-step-card">
                <span>
                  4
                </span>

                <div>
                  <h3>
                    Analysez les aspects
                  </h3>

                  <p>
                    Les aspects reçus par l’Ascendant et par sa
                    planète maîtresse précisent les forces et
                    les tensions de votre identité.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 1 dans votre thème natal
            </h2>

            <p>
              La Maison 1 ne doit jamais être analysée
              isolément. Sa signification dépend du signe de
              l’Ascendant, des planètes qu’elle contient, de
              sa planète maîtresse et des aspects présents dans
              le thème.
            </p>

            <p>
              L’ensemble de ces éléments révèle comment votre
              identité intérieure prend forme dans le monde,
              comment vous réagissez aux expériences et quelle
              impression vous laissez naturellement.
            </p>

            <div className="house-one-cta-card">
              <div>
                <span className="house-one-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Quel signe et quelles planètes se trouvent dans votre Maison 1 ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir votre Ascendant, vos maisons
                  astrologiques et les positions de vos
                  planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="house-one-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="house-one-navigation">
            <span className="house-one-kicker">
              Les maisons astrologiques
            </span>

            <h2>
              Continuer votre exploration
            </h2>

            <div className="house-one-navigation-grid">
              <Link
                href="/astrologie/maisons"
                className="house-one-navigation-card"
              >
                <span>
                  ☾
                </span>

                <div>
                  <h3>
                    Les 12 maisons
                  </h3>

                  <p>
                    Découvrez la signification de toutes les
                    maisons astrologiques.
                  </p>
                </div>
              </Link>

              <Link
                href="/astrologie/maisons/maison-2"
                className="house-one-navigation-card"
              >
                <span>
                  Ⅱ
                </span>

                <div>
                  <h3>
                    Maison 2
                  </h3>

                  <p>
                    Valeurs, ressources, argent et sécurité
                    personnelle.
                  </p>
                </div>
              </Link>

              <Link
                href="/astrologie/ascendant"
                className="house-one-navigation-card"
              >
                <span>
                  ↑
                </span>

                <div>
                  <h3>
                    L’Ascendant
                  </h3>

                  <p>
                    Comprendre son influence sur votre
                    personnalité et votre comportement.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <section className="house-one-faq">
            <span className="house-one-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur la Maison 1
            </h2>

            <div className="house-one-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="house-one-faq-item"
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

          <p className="house-one-disclaimer">
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
