import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/maisons/maison-10";

export const metadata: Metadata = {
  title:
    "Maison 10 en astrologie : carrière, vocation et Milieu du Ciel | Luna Astralis",

  description:
    "Découvrez la Maison 10 en astrologie : carrière, vocation, réputation, ambitions, réussite, autorité, responsabilités et Milieu du Ciel.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Maison 10 en astrologie : carrière, vocation, réputation et Milieu du Ciel",
    description:
      "Guide complet de la Maison 10 : carrière, ambitions, réussite, responsabilités, image publique, autorité et Milieu du Ciel.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "La Maison 10 en astrologie | Luna Astralis",
    description:
      "Découvrez ce que la Maison 10 révèle sur votre carrière, votre vocation, votre réputation et vos ambitions.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const HOUSE_TRAITS = [
  {
    title: "Votre vocation",
    symbol: "Ⅹ",
    text:
      "La Maison 10 décrit la direction que vous souhaitez donner à votre vie professionnelle et la contribution que vous cherchez à apporter au monde.",
  },
  {
    title: "Votre réputation",
    symbol: "MC",
    text:
      "Cette maison représente votre image publique, la manière dont la société vous perçoit et la reconnaissance que vous construisez avec le temps.",
  },
  {
    title: "Vos ambitions",
    symbol: "▲",
    text:
      "Elle concerne vos objectifs à long terme, votre besoin de réussite, votre sens des responsabilités et votre capacité à occuper une position d’autorité.",
  },
];

const HOUSE_STRENGTHS = [
  "Sens des responsabilités",
  "Ambition et persévérance",
  "Capacité à diriger",
  "Vision professionnelle",
  "Construction d’une réputation",
  "Volonté de contribuer",
];

const HOUSE_CHALLENGES = [
  "Pression de réussir",
  "Peur de l’échec",
  "Dépendance au regard des autres",
  "Rigidité professionnelle",
  "Difficulté à ralentir",
  "Confusion entre valeur et statut",
];

const PLANETS_IN_HOUSE = [
  {
    name: "Soleil",
    symbol: "☀",
    text:
      "Le Soleil en Maison 10 donne un fort besoin d’accomplissement, de reconnaissance et de visibilité. La personne cherche souvent à construire une carrière qui reflète son identité et à occuper une place importante dans la société.",
  },
  {
    name: "Lune",
    symbol: "☽",
    text:
      "La Lune en Maison 10 rend la vie professionnelle importante pour la sécurité émotionnelle. La réputation peut évoluer avec le temps, et la personne peut être très sensible à la manière dont elle est perçue publiquement.",
  },
  {
    name: "Mercure",
    symbol: "☿",
    text:
      "Mercure en Maison 10 favorise les carrières liées à la communication, à l’écriture, au commerce, à l’analyse ou à l’enseignement. La personne peut être reconnue pour ses idées, son intelligence ou sa capacité à transmettre.",
  },
  {
    name: "Vénus",
    symbol: "♀",
    text:
      "Vénus en Maison 10 favorise une image publique agréable, diplomate ou créative. La personne peut réussir dans les domaines artistiques, relationnels, esthétiques ou dans les professions demandant du tact.",
  },
  {
    name: "Mars",
    symbol: "♂",
    text:
      "Mars en Maison 10 donne ambition, énergie et volonté de progresser. La personne peut être très compétitive et doit apprendre à utiliser sa force sans créer de conflits inutiles avec l’autorité.",
  },
  {
    name: "Jupiter",
    symbol: "♃",
    text:
      "Jupiter en Maison 10 peut favoriser l’expansion professionnelle, la reconnaissance et les occasions de progression. La personne peut être attirée par l’enseignement, le droit, la gestion, les voyages ou les fonctions de direction.",
  },
  {
    name: "Saturne",
    symbol: "♄",
    text:
      "Saturne en Maison 10 renforce le sens du devoir, la discipline et l’ambition à long terme. La réussite peut demander du temps, mais elle repose généralement sur une structure solide et une grande persévérance.",
  },
  {
    name: "Uranus",
    symbol: "♅",
    text:
      "Uranus en Maison 10 donne une carrière originale, indépendante ou marquée par des changements soudains. La personne cherche souvent à suivre une voie différente des modèles traditionnels.",
  },
  {
    name: "Neptune",
    symbol: "♆",
    text:
      "Neptune en Maison 10 peut orienter la vocation vers l’art, la spiritualité, l’aide, l’imagination ou la compassion. La personne doit cependant clarifier ses objectifs afin d’éviter les incertitudes professionnelles.",
  },
  {
    name: "Pluton",
    symbol: "♇",
    text:
      "Pluton en Maison 10 donne une grande intensité professionnelle et un fort besoin d’influence. La carrière peut traverser plusieurs transformations profondes et conduire à des responsabilités importantes.",
  },
];

const SIGNS_IN_HOUSE = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "La Maison 10 en Bélier recherche l’indépendance, l’action et le leadership. La personne préfère souvent ouvrir sa propre voie et prendre rapidement des initiatives.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "La Maison 10 en Taureau construit sa carrière avec patience, stabilité et persévérance. La personne recherche une réussite durable et une sécurité matérielle solide.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "La Maison 10 en Gémeaux favorise les carrières liées à la communication, à l’information, à l’écriture, au commerce ou à la polyvalence. La personne peut exercer plusieurs activités.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "La Maison 10 en Cancer recherche une carrière qui apporte sécurité, protection et utilité émotionnelle. La famille, le soin, l’immobilier ou l’accompagnement peuvent jouer un rôle important.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "La Maison 10 en Lion cherche la visibilité, la créativité et la reconnaissance. La personne peut être attirée par les fonctions de direction, l’art, la scène ou l’entrepreneuriat.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "La Maison 10 en Vierge recherche l’efficacité, la précision et l’utilité. La personne peut réussir dans les métiers d’analyse, de service, de santé, d’organisation ou de gestion.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "La Maison 10 en Balance favorise les carrières liées aux relations, à la diplomatie, au droit, à l’esthétique ou à la collaboration. L’image publique repose souvent sur l’élégance et l’équité.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "La Maison 10 en Scorpion donne une ambition profonde, une grande capacité stratégique et un besoin de transformation. La personne peut être attirée par la psychologie, la finance, la recherche ou les situations complexes.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "La Maison 10 en Sagittaire recherche une carrière qui offre liberté, expansion et ouverture. L’enseignement, les voyages, les langues, le droit ou la publication peuvent être favorisés.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "La Maison 10 en Capricorne renforce l’ambition, la discipline et le sens des responsabilités. La personne construit généralement sa réussite progressivement et vise des résultats durables.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "La Maison 10 en Verseau recherche une carrière libre, innovante et tournée vers le collectif. La technologie, les sciences, les réseaux ou les projets sociaux peuvent être importants.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "La Maison 10 en Poissons recherche une vocation inspirante, créative ou humanitaire. La personne peut être attirée par l’art, la spiritualité, l’aide ou les professions fondées sur l’intuition.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente la Maison 10 en astrologie ?",
    answer:
      "La Maison 10 représente la carrière, la vocation, la réputation, les ambitions, les responsabilités, l’autorité, la réussite sociale et la place occupée dans le monde.",
  },
  {
    question:
      "Qu’est-ce que le Milieu du Ciel ?",
    answer:
      "Le Milieu du Ciel, souvent abrégé MC, est le point le plus élevé du thème natal. Il est généralement associé à la Maison 10, à la vocation, à la réputation et à l’image publique.",
  },
  {
    question:
      "Que signifie une planète en Maison 10 ?",
    answer:
      "Une planète en Maison 10 influence fortement la carrière, les ambitions, la réputation et la manière dont une personne cherche à accomplir quelque chose dans la société.",
  },
  {
    question:
      "Que signifie une Maison 10 vide ?",
    answer:
      "Une Maison 10 vide ne signifie pas une absence de carrière ou de réussite. Il faut observer le signe du Milieu du Ciel, sa planète maîtresse et les aspects reçus par cette planète.",
  },
  {
    question:
      "Quelle différence existe entre la Maison 6 et la Maison 10 ?",
    answer:
      "La Maison 6 représente le travail quotidien, les habitudes et les tâches. La Maison 10 représente la carrière, la vocation, la réputation et les objectifs professionnels à long terme.",
  },
  {
    question:
      "La Maison 10 permet-elle de connaître son métier ?",
    answer:
      "Elle peut donner des indications sur la direction professionnelle, les ambitions et l’image publique, mais elle doit être interprétée avec l’ensemble du thème natal.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Maison 10 en astrologie : carrière, vocation, réputation et Milieu du Ciel",
  description:
    "Guide complet consacré à la Maison 10, à la carrière, à la vocation, aux ambitions, à la réputation, aux responsabilités et au Milieu du Ciel.",
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
      name: "Maison 10",
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

export default function MaisonDixAstrologiePage() {
  return (
    <div className="house-ten-page">
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

      <main className="house-ten-wrap">
        <section className="house-ten-hero">
          <div className="house-ten-badge">
            Ⅹ Dixième maison astrologique
          </div>

          <h1>
            La Maison 10 en astrologie
          </h1>

          <p className="house-ten-hero-lead">
            La Maison 10 représente la carrière, la vocation,
            les ambitions, la réputation et la place que vous
            cherchez à construire dans la société. Elle est
            étroitement liée au Milieu du Ciel.
          </p>

          <div className="house-ten-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="house-ten-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification-maison-10"
              className="house-ten-secondary-button"
            >
              Découvrir la Maison 10
            </a>
          </div>
        </section>

        <article className="house-ten-content">
          <section id="signification-maison-10">
            <span className="house-ten-kicker">
              Signification de la Maison 10
            </span>

            <h2>
              Que représente la Maison 10 ?
            </h2>

            <p>
              La Maison 10 est la maison de la carrière, de la
              vocation, de la réputation et des ambitions à
              long terme.
            </p>

            <p>
              Elle décrit la place que vous souhaitez occuper
              dans la société et la manière dont vous cherchez
              à être reconnu pour votre travail, vos
              responsabilités ou votre contribution.
            </p>

            <p>
              Cette maison concerne également l’autorité, les
              fonctions de direction, les objectifs
              professionnels et les réalisations qui demandent
              du temps, de la discipline et de la persévérance.
            </p>

            <p>
              Son point le plus connu est le Milieu du Ciel,
              qui symbolise la direction publique et
              professionnelle de votre thème natal.
            </p>
          </section>

          <section>
            <h2>
              Les grands domaines de la Maison 10
            </h2>

            <div className="house-ten-info-grid">
              {HOUSE_TRAITS.map((item) => (
                <article
                  className="house-ten-info-card"
                  key={item.title}
                >
                  <span className="house-ten-card-icon">
                    {item.symbol}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              La Maison 10 et le Milieu du Ciel
            </h2>

            <p>
              Le Milieu du Ciel est l’un des quatre angles
              principaux du thème natal. Il correspond au point
              le plus élevé de la carte.
            </p>

            <p>
              Il représente la direction vers laquelle vous
              cherchez à évoluer dans le monde, votre image
              publique et la manière dont vous souhaitez être
              reconnu.
            </p>

            <p>
              Le signe du Milieu du Ciel peut révéler votre
              style professionnel, vos ambitions et les
              qualités que vous développez pour atteindre vos
              objectifs.
            </p>

            <div className="house-ten-highlight-card">
              <div className="house-ten-highlight-symbol">
                MC
              </div>

              <div>
                <h3>
                  Le Milieu du Ciel révèle votre direction publique
                </h3>

                <p>
                  Pour interpréter votre Maison 10, observez le
                  signe du Milieu du Ciel, sa planète
                  maîtresse, les planètes présentes dans cette
                  maison et les aspects qu’elles reçoivent.
                </p>

                <Link
                  href="/astrologie/milieu-du-ciel"
                  className="house-ten-text-link"
                >
                  Comprendre le Milieu du Ciel
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Carrière et orientation professionnelle
            </h2>

            <p>
              La Maison 10 décrit le type de contribution que
              vous cherchez à apporter par votre travail.
            </p>

            <p>
              Elle ne donne pas toujours un métier précis, mais
              elle révèle votre manière de poursuivre vos
              objectifs, les responsabilités que vous êtes
              prêt à assumer et le rôle que vous souhaitez
              occuper.
            </p>

            <p>
              Une Maison 10 importante peut donner un grand
              besoin de progression, de reconnaissance et de
              réalisation professionnelle.
            </p>
          </section>

          <section>
            <h2>
              Vocation et sentiment d’accomplissement
            </h2>

            <p>
              La vocation représente une direction qui donne
              du sens à votre parcours et qui dépasse la simple
              recherche d’un revenu.
            </p>

            <p>
              La Maison 10 peut montrer les domaines dans
              lesquels vous souhaitez construire quelque chose
              de durable, développer une expertise ou laisser
              une trace.
            </p>

            <p>
              Elle révèle aussi les qualités que vous devez
              développer pour vous sentir pleinement accompli
              dans votre vie professionnelle.
            </p>
          </section>

          <section>
            <h2>
              Réputation et image publique
            </h2>

            <p>
              La Maison 10 représente la manière dont vous êtes
              perçu dans les contextes professionnels,
              sociaux ou publics.
            </p>

            <p>
              Cette image peut être différente de votre
              personnalité privée. Elle correspond davantage
              au rôle que vous occupez et aux qualités que les
              autres associent à votre travail.
            </p>

            <p>
              Le signe et les planètes présents dans cette
              maison peuvent montrer ce qui attire
              l’attention, la confiance ou la reconnaissance
              du public.
            </p>
          </section>

          <section>
            <h2>
              Ambition, réussite et objectifs à long terme
            </h2>

            <p>
              La Maison 10 concerne les ambitions qui demandent
              du temps, des efforts et une vision à long terme.
            </p>

            <p>
              Elle représente votre capacité à progresser,
              prendre des responsabilités et construire une
              position solide.
            </p>

            <p>
              Son défi consiste à poursuivre la réussite sans
              mesurer toute votre valeur personnelle à votre
              statut, votre titre ou votre niveau de
              reconnaissance.
            </p>
          </section>

          <section>
            <h2>
              Autorité et responsabilités
            </h2>

            <p>
              La Maison 10 représente votre rapport aux figures
              d’autorité, aux institutions, aux dirigeants et
              aux responsabilités publiques.
            </p>

            <p>
              Elle montre la manière dont vous réagissez aux
              règles, aux attentes professionnelles et aux
              structures hiérarchiques.
            </p>

            <p>
              Avec le temps, elle peut aussi décrire votre
              propre capacité à devenir une figure d’autorité,
              à diriger ou à servir de référence.
            </p>
          </section>

          <section>
            <h2>
              Reconnaissance et contribution sociale
            </h2>

            <p>
              La Maison 10 ne concerne pas uniquement le succès
              individuel. Elle représente aussi ce que vous
              souhaitez offrir à la société.
            </p>

            <p>
              Elle montre la manière dont vos compétences, vos
              responsabilités et vos réalisations peuvent être
              mises au service d’un objectif plus large.
            </p>

            <p>
              Une Maison 10 équilibrée permet de construire une
              réputation fondée sur la cohérence, la compétence
              et la contribution réelle.
            </p>
          </section>

          <section>
            <h2>
              Parent, modèle et autorité familiale
            </h2>

            <p>
              En astrologie, la Maison 10 peut également
              représenter une figure parentale ou une personne
              qui incarne l’autorité, les attentes et les
              responsabilités.
            </p>

            <p>
              Les expériences vécues avec cette figure peuvent
              influencer votre rapport à la réussite, à
              l’ambition et au jugement social.
            </p>

            <p>
              Cette maison montre parfois les modèles que vous
              cherchez à suivre, à dépasser ou à transformer
              dans votre propre vie.
            </p>
          </section>

          <section>
            <h2>
              Les forces et les défis de la Maison 10
            </h2>

            <div className="house-ten-strengths-grid">
              <div className="house-ten-list-card">
                <span className="house-ten-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Une Maison 10 équilibrée
                </h3>

                <ul>
                  {HOUSE_STRENGTHS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="house-ten-list-card">
                <span className="house-ten-kicker">
                  Points d’attention
                </span>

                <h3>
                  Les défis possibles
                </h3>

                <ul>
                  {HOUSE_CHALLENGES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les planètes en Maison 10
            </h2>

            <p>
              Une planète présente en Maison 10 influence
              fortement la carrière, la réputation, les
              ambitions et la manière de rechercher la
              reconnaissance.
            </p>

            <p>
              Son énergie peut devenir particulièrement
              visible dans la vie professionnelle ou dans le
              rôle social occupé par la personne.
            </p>

            <div className="house-ten-planets-grid">
              {PLANETS_IN_HOUSE.map((planet) => (
                <article
                  className="house-ten-planet-card"
                  key={planet.name}
                >
                  <div className="house-ten-planet-symbol">
                    {planet.symbol}
                  </div>

                  <div>
                    <h3>
                      {planet.name} en Maison 10
                    </h3>

                    <p>{planet.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Les douze signes dans la Maison 10
            </h2>

            <p>
              Le signe placé sur le Milieu du Ciel décrit votre
              manière de poursuivre vos ambitions et de
              construire votre réputation.
            </p>

            <p>
              Il montre également les qualités que vous devez
              développer pour progresser dans votre carrière et
              occuper votre place dans la société.
            </p>

            <div className="house-ten-signs-grid">
              {SIGNS_IN_HOUSE.map((item) => (
                <article
                  className="house-ten-sign-card"
                  key={item.sign}
                >
                  <div className="house-ten-sign-symbol">
                    {item.symbol}
                  </div>

                  <div>
                    <h3>
                      Maison 10 en {item.sign}
                    </h3>

                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Maison 10 vide : que signifie-t-elle ?
            </h2>

            <p>
              Une Maison 10 vide ne signifie pas une absence de
              carrière, de vocation ou de réussite.
            </p>

            <p>
              Toutes les maisons restent actives. Il faut
              observer le signe du Milieu du Ciel et la planète
              qui gouverne ce signe.
            </p>

            <p>
              La position de cette planète maîtresse montre
              comment et dans quel domaine les thèmes de la
              carrière, de l’ambition et de la reconnaissance
              cherchent à s’exprimer.
            </p>
          </section>

          <section>
            <h2>
              La planète maîtresse de la Maison 10
            </h2>

            <p>
              La planète maîtresse de la Maison 10 est celle
              qui gouverne le signe situé sur le Milieu du
              Ciel.
            </p>

            <p>
              Sa position par signe, par maison et par aspect
              apporte des informations essentielles sur votre
              carrière, vos objectifs et votre manière de
              construire votre réputation.
            </p>

            <div className="house-ten-rulers-grid">
              <div className="house-ten-ruler-card">
                <span>♈</span>
                <h3>Bélier</h3>
                <p>Mars</p>
              </div>

              <div className="house-ten-ruler-card">
                <span>♉</span>
                <h3>Taureau</h3>
                <p>Vénus</p>
              </div>

              <div className="house-ten-ruler-card">
                <span>♊</span>
                <h3>Gémeaux</h3>
                <p>Mercure</p>
              </div>

              <div className="house-ten-ruler-card">
                <span>♋</span>
                <h3>Cancer</h3>
                <p>Lune</p>
              </div>

              <div className="house-ten-ruler-card">
                <span>♌</span>
                <h3>Lion</h3>
                <p>Soleil</p>
              </div>

              <div className="house-ten-ruler-card">
                <span>♍</span>
                <h3>Vierge</h3>
                <p>Mercure</p>
              </div>

              <div className="house-ten-ruler-card">
                <span>♎</span>
                <h3>Balance</h3>
                <p>Vénus</p>
              </div>

              <div className="house-ten-ruler-card">
                <span>♏</span>
                <h3>Scorpion</h3>
                <p>Pluton et Mars</p>
              </div>

              <div className="house-ten-ruler-card">
                <span>♐</span>
                <h3>Sagittaire</h3>
                <p>Jupiter</p>
              </div>

              <div className="house-ten-ruler-card">
                <span>♑</span>
                <h3>Capricorne</h3>
                <p>Saturne</p>
              </div>

              <div className="house-ten-ruler-card">
                <span>♒</span>
                <h3>Verseau</h3>
                <p>Uranus et Saturne</p>
              </div>

              <div className="house-ten-ruler-card">
                <span>♓</span>
                <h3>Poissons</h3>
                <p>Neptune et Jupiter</p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Maison 4 et Maison 10 : quelle différence ?
            </h2>

            <div className="house-ten-comparison-grid">
              <article className="house-ten-comparison-card">
                <span className="house-ten-kicker">
                  Maison 4
                </span>

                <h3>
                  Votre vie privée
                </h3>

                <p>
                  La Maison 4 représente le foyer, les racines,
                  la famille, la sécurité intérieure et votre
                  monde personnel.
                </p>
              </article>

              <article className="house-ten-comparison-card">
                <span className="house-ten-kicker">
                  Maison 10
                </span>

                <h3>
                  Votre vie publique
                </h3>

                <p>
                  La Maison 10 représente la carrière, la
                  réputation, les responsabilités, les
                  ambitions et votre place dans la société.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              Maison 6 et Maison 10 : quelle différence ?
            </h2>

            <div className="house-ten-comparison-grid">
              <article className="house-ten-comparison-card">
                <span className="house-ten-kicker">
                  Maison 6
                </span>

                <h3>
                  Le travail quotidien
                </h3>

                <p>
                  La Maison 6 représente les tâches, les
                  habitudes, l’organisation, le service et les
                  responsabilités quotidiennes.
                </p>
              </article>

              <article className="house-ten-comparison-card">
                <span className="house-ten-kicker">
                  Maison 10
                </span>

                <h3>
                  La carrière
                </h3>

                <p>
                  La Maison 10 représente la direction
                  professionnelle globale, la vocation, les
                  ambitions et la reconnaissance construite à
                  long terme.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              Maison 9 et Maison 10 : quelle différence ?
            </h2>

            <div className="house-ten-comparison-grid">
              <article className="house-ten-comparison-card">
                <span className="house-ten-kicker">
                  Maison 9
                </span>

                <h3>
                  L’expansion des connaissances
                </h3>

                <p>
                  La Maison 9 représente les études, les
                  voyages, les croyances, la philosophie et la
                  construction d’une vision du monde.
                </p>
              </article>

              <article className="house-ten-comparison-card">
                <span className="house-ten-kicker">
                  Maison 10
                </span>

                <h3>
                  La réalisation concrète
                </h3>

                <p>
                  La Maison 10 représente la manière dont vous
                  utilisez vos connaissances, vos compétences
                  et vos ambitions pour bâtir une place dans la
                  société.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 10 dans votre évolution personnelle
            </h2>

            <p>
              La Maison 10 vous invite à construire une
              direction claire et à prendre la responsabilité
              de vos ambitions.
            </p>

            <p>
              Elle vous apprend à développer la discipline, la
              persévérance et la confiance nécessaires pour
              créer une œuvre ou une carrière durable.
            </p>

            <p>
              Son évolution consiste à rechercher la réussite
              sans perdre le contact avec vos valeurs, votre
              équilibre intérieur et votre véritable
              motivation.
            </p>
          </section>

          <section>
            <h2>
              Comment interpréter votre Maison 10 ?
            </h2>

            <div className="house-ten-steps">
              <article className="house-ten-step-card">
                <span>1</span>

                <div>
                  <h3>
                    Identifiez le signe du Milieu du Ciel
                  </h3>

                  <p>
                    Il décrit votre style professionnel, votre
                    direction publique et les qualités que vous
                    développez dans votre carrière.
                  </p>
                </div>
              </article>

              <article className="house-ten-step-card">
                <span>2</span>

                <div>
                  <h3>
                    Repérez sa planète maîtresse
                  </h3>

                  <p>
                    Sa position montre où les thèmes de la
                    carrière, de la réussite et de la
                    reconnaissance cherchent à s’exprimer.
                  </p>
                </div>
              </article>

              <article className="house-ten-step-card">
                <span>3</span>

                <div>
                  <h3>
                    Observez les planètes présentes
                  </h3>

                  <p>
                    Chaque planète influence vos ambitions,
                    votre réputation et votre manière
                    d’assumer des responsabilités.
                  </p>
                </div>
              </article>

              <article className="house-ten-step-card">
                <span>4</span>

                <div>
                  <h3>
                    Analysez les aspects
                  </h3>

                  <p>
                    Les aspects précisent les forces, les
                    tensions et les apprentissages liés à votre
                    carrière et à votre image publique.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 10 dans votre thème natal
            </h2>

            <p>
              La Maison 10 doit être interprétée avec
              l’ensemble du thème natal. Son signe, sa planète
              maîtresse, les planètes présentes et leurs
              aspects précisent sa signification.
            </p>

            <p>
              Cette analyse peut vous aider à mieux comprendre
              votre vocation, vos ambitions, votre rapport à
              l’autorité et la réputation que vous souhaitez
              construire.
            </p>

            <div className="house-ten-cta-card">
              <div>
                <span className="house-ten-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Quel signe et quelles planètes se trouvent dans votre Maison 10 ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir votre Milieu du Ciel, vos maisons
                  astrologiques et les grandes dynamiques de
                  votre thème natal.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="house-ten-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="house-ten-navigation">
            <span className="house-ten-kicker">
              Les maisons astrologiques
            </span>

            <h2>
              Continuer votre exploration
            </h2>

            <div className="house-ten-navigation-grid">
              <Link
                href="/astrologie/maisons/maison-9"
                className="house-ten-navigation-card"
              >
                <span>Ⅸ</span>

                <div>
                  <h3>Maison 9</h3>

                  <p>
                    Voyages, études supérieures, philosophie,
                    croyances et ouverture sur le monde.
                  </p>
                </div>
              </Link>

              <Link
                href="/astrologie/maisons"
                className="house-ten-navigation-card"
              >
                <span>☾</span>

                <div>
                  <h3>Les 12 maisons</h3>

                  <p>
                    Découvrez la signification de toutes les
                    maisons astrologiques.
                  </p>
                </div>
              </Link>

              <Link
                href="/astrologie/maisons/maison-11"
                className="house-ten-navigation-card"
              >
                <span>Ⅺ</span>

                <div>
                  <h3>Maison 11</h3>

                  <p>
                    Amitiés, réseaux, projets collectifs,
                    communauté, espoirs et avenir.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <section className="house-ten-faq">
            <span className="house-ten-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur la Maison 10
            </h2>

            <div className="house-ten-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="house-ten-faq-item"
                  key={item.question}
                >
                  <summary>{item.question}</summary>

                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="house-ten-disclaimer">
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
