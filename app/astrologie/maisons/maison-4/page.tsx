import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/maisons/maison-4";

export const metadata: Metadata = {
  title:
    "Maison 4 en astrologie : foyer, famille et racines | Luna Astralis",

  description:
    "Découvrez la Maison 4 en astrologie : foyer, famille, racines, enfance, vie privée, sécurité émotionnelle, Fond du Ciel et planètes en Maison 4.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Maison 4 en astrologie : foyer, famille, enfance et racines",
    description:
      "Guide complet de la Maison 4 : famille, foyer, racines, enfance, sécurité émotionnelle, vie privée, Fond du Ciel et planètes présentes dans cette maison.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "La Maison 4 en astrologie | Luna Astralis",
    description:
      "Découvrez ce que la Maison 4 révèle sur votre foyer, votre famille, vos racines, votre enfance et votre sécurité intérieure.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const HOUSE_TRAITS = [
  {
    title: "Votre foyer",
    symbol: "⌂",
    text:
      "La Maison 4 décrit l’espace dans lequel vous cherchez à vous sentir protégé, libre et profondément chez vous. Elle concerne le logement, la vie privée et l’atmosphère du foyer.",
  },
  {
    title: "Vos racines",
    symbol: "Ⅳ",
    text:
      "Cette maison représente vos origines, votre histoire familiale, votre enfance et les expériences qui ont contribué à construire votre sécurité émotionnelle.",
  },
  {
    title: "Votre monde intérieur",
    symbol: "☾",
    text:
      "La Maison 4 révèle la partie la plus intime de votre personnalité. Elle montre ce dont vous avez besoin lorsque vous vous retirez du monde extérieur pour retrouver votre équilibre.",
  },
];

const HOUSE_STRENGTHS = [
  "Capacité à créer un foyer",
  "Profondeur émotionnelle",
  "Attachement aux racines",
  "Instinct protecteur",
  "Mémoire familiale",
  "Connaissance de son monde intérieur",
];

const HOUSE_CHALLENGES = [
  "Attachement excessif au passé",
  "Difficulté à quitter le foyer",
  "Insécurité émotionnelle",
  "Poids des attentes familiales",
  "Tendance à se replier",
  "Répétition de schémas hérités",
];

const PLANETS_IN_HOUSE = [
  {
    name: "Soleil",
    symbol: "☀",
    text:
      "Le Soleil en Maison 4 donne une grande importance au foyer, à la famille et à la vie privée. La personne construit souvent son identité autour de ses racines et cherche à créer une base intérieure solide.",
  },
  {
    name: "Lune",
    symbol: "☽",
    text:
      "La Lune en Maison 4 renforce le besoin de sécurité émotionnelle, de protection et d’intimité. La famille, les souvenirs et l’atmosphère du foyer occupent généralement une place centrale.",
  },
  {
    name: "Mercure",
    symbol: "☿",
    text:
      "Mercure en Maison 4 favorise les échanges familiaux, la mémoire et la réflexion sur le passé. Le foyer peut être un lieu d’apprentissage, d’écriture, de discussion ou de travail intellectuel.",
  },
  {
    name: "Vénus",
    symbol: "♀",
    text:
      "Vénus en Maison 4 apporte un besoin d’harmonie, de beauté et de douceur dans le foyer. La personne cherche souvent à créer un environnement accueillant et à préserver la paix familiale.",
  },
  {
    name: "Mars",
    symbol: "♂",
    text:
      "Mars en Maison 4 donne beaucoup d’énergie dans la vie privée. Il peut favoriser les rénovations, les déménagements ou la défense de la famille, mais aussi créer des tensions au sein du foyer.",
  },
  {
    name: "Jupiter",
    symbol: "♃",
    text:
      "Jupiter en Maison 4 peut apporter un foyer généreux, une famille nombreuse ou un besoin d’espace. La personne cherche à grandir intérieurement et peut bénéficier d’un fort soutien familial.",
  },
  {
    name: "Saturne",
    symbol: "♄",
    text:
      "Saturne en Maison 4 peut indiquer une enfance exigeante, des responsabilités familiales précoces ou une difficulté à se sentir pleinement en sécurité. Avec le temps, il favorise la construction d’une base solide.",
  },
  {
    name: "Uranus",
    symbol: "♅",
    text:
      "Uranus en Maison 4 peut créer une vie familiale originale, instable ou différente des modèles traditionnels. La personne a besoin de liberté et peut connaître plusieurs changements de foyer.",
  },
  {
    name: "Neptune",
    symbol: "♆",
    text:
      "Neptune en Maison 4 apporte une grande sensibilité à l’ambiance du foyer. Les souvenirs peuvent être idéalisés ou flous, et la personne a besoin d’un espace calme, inspirant et protecteur.",
  },
  {
    name: "Pluton",
    symbol: "♇",
    text:
      "Pluton en Maison 4 révèle des transformations profondes liées à la famille, aux racines ou au foyer. La personne peut devoir comprendre et transformer certains schémas familiaux anciens.",
  },
];

const SIGNS_IN_HOUSE = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "La Maison 4 en Bélier donne un besoin d’indépendance dans la vie privée. Le foyer doit permettre l’action, l’autonomie et la liberté d’exprimer son énergie.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "La Maison 4 en Taureau recherche un foyer stable, confortable et durable. La personne accorde souvent beaucoup d’importance à la sécurité matérielle et aux habitudes familiales.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "La Maison 4 en Gémeaux crée un foyer vivant, mobile et communicatif. Les échanges, les livres, les déplacements ou les changements de résidence peuvent être importants.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "La Maison 4 en Cancer renforce l’attachement à la famille, aux souvenirs et au foyer. La personne possède souvent un grand besoin de protection et de continuité émotionnelle.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "La Maison 4 en Lion cherche un foyer chaleureux, fier et créatif. La personne aime recevoir, embellir son espace et jouer un rôle central dans la vie familiale.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "La Maison 4 en Vierge donne un besoin d’ordre, de calme et d’organisation dans le foyer. La personne peut exprimer son affection en aidant et en prenant soin des détails quotidiens.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "La Maison 4 en Balance recherche l’harmonie, la beauté et l’équilibre dans la vie privée. Le foyer devient un lieu de paix, de relations et de coopération.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "La Maison 4 en Scorpion donne une vie intérieure intense et profonde. Les liens familiaux peuvent être puissants, complexes ou transformateurs.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "La Maison 4 en Sagittaire cherche un foyer ouvert, libre et inspirant. La famille peut être liée aux voyages, à plusieurs cultures ou à une forte recherche de sens.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "La Maison 4 en Capricorne apporte sérieux, responsabilité et besoin de stabilité familiale. La personne cherche à construire un foyer durable et structuré.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "La Maison 4 en Verseau donne un rapport original à la famille et au foyer. La personne peut créer sa propre définition de la vie familiale et rechercher beaucoup de liberté privée.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "La Maison 4 en Poissons apporte sensibilité, imagination et réceptivité dans la vie privée. Le foyer doit devenir un refuge permettant de se protéger du bruit extérieur.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente la Maison 4 en astrologie ?",
    answer:
      "La Maison 4 représente le foyer, la famille, les racines, l’enfance, la vie privée, les origines, le patrimoine familial et la sécurité émotionnelle.",
  },
  {
    question:
      "Qu’est-ce que le Fond du Ciel ?",
    answer:
      "Le Fond du Ciel, souvent abrégé IC, correspond au point situé au début de la Maison 4. Il représente les racines, la vie intérieure, le foyer et les fondations émotionnelles.",
  },
  {
    question:
      "Que signifie une planète en Maison 4 ?",
    answer:
      "Une planète en Maison 4 influence la vie familiale, le foyer, les souvenirs, la sécurité émotionnelle et le rapport aux origines. Son énergie s’exprime souvent dans la sphère privée.",
  },
  {
    question:
      "Que signifie une Maison 4 vide ?",
    answer:
      "Une Maison 4 vide ne signifie pas une absence de famille ou de foyer. Il faut analyser le signe placé sur sa cuspide, sa planète maîtresse et les aspects reçus par cette planète.",
  },
  {
    question:
      "La Maison 4 représente-t-elle la mère ou le père ?",
    answer:
      "Les traditions astrologiques ne sont pas toutes d’accord sur le parent associé à la Maison 4. Il est plus prudent d’y voir le parent ou la figure qui a le plus influencé la sécurité intérieure et la vie familiale.",
  },
  {
    question:
      "Quelle différence existe entre la Maison 4 et la Maison 10 ?",
    answer:
      "La Maison 4 représente la vie privée, les racines et le foyer. La Maison 10 représente la carrière, la réputation, les responsabilités et la place occupée dans le monde extérieur.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Maison 4 en astrologie : foyer, famille, enfance et racines",
  description:
    "Guide complet consacré à la Maison 4, au foyer, à la famille, aux racines, à l’enfance, à la sécurité émotionnelle, au Fond du Ciel et aux planètes présentes dans cette maison.",
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
      name: "Maison 4",
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

export default function MaisonQuatreAstrologiePage() {
  return (
    <div className="house-four-page">
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

      <main className="house-four-wrap">
        <section className="house-four-hero">
          <div className="house-four-badge">
            Ⅳ Quatrième maison astrologique
          </div>

          <h1>
            La Maison 4 en astrologie
          </h1>

          <p className="house-four-hero-lead">
            La Maison 4 représente votre foyer, votre famille,
            vos racines, votre enfance et votre sécurité
            émotionnelle. Elle révèle les fondations intimes
            sur lesquelles vous construisez votre vie.
          </p>

          <div className="house-four-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="house-four-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification-maison-4"
              className="house-four-secondary-button"
            >
              Découvrir la Maison 4
            </a>
          </div>
        </section>

        <article className="house-four-content">
          <section id="signification-maison-4">
            <span className="house-four-kicker">
              Signification de la Maison 4
            </span>

            <h2>
              Que représente la Maison 4 ?
            </h2>

            <p>
              La Maison 4 représente les fondations de votre
              vie. Elle décrit votre foyer, votre famille, vos
              racines, votre enfance et les expériences qui
              ont contribué à construire votre sentiment de
              sécurité.
            </p>

            <p>
              Elle concerne la vie privée, les souvenirs, les
              traditions familiales et l’environnement dans
              lequel vous pouvez vous retirer pour retrouver
              votre équilibre.
            </p>

            <p>
              Cette maison révèle aussi votre monde intérieur.
              Elle montre qui vous êtes lorsque vous n’avez
              plus besoin de jouer un rôle social ou de
              répondre aux attentes du monde extérieur.
            </p>

            <p>
              Son point de départ est appelé le Fond du Ciel,
              ou IC. Il représente l’un des quatre angles
              principaux du thème natal.
            </p>
          </section>

          <section>
            <h2>
              Les grands domaines de la Maison 4
            </h2>

            <div className="house-four-info-grid">
              {HOUSE_TRAITS.map((item) => (
                <article
                  className="house-four-info-card"
                  key={item.title}
                >
                  <span className="house-four-card-icon">
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
              La Maison 4 et le Fond du Ciel
            </h2>

            <p>
              Le Fond du Ciel correspond au point le plus bas
              du thème natal. Il marque généralement le début
              de la Maison 4 et se trouve à l’opposé du Milieu
              du Ciel.
            </p>

            <p>
              Le signe placé sur le Fond du Ciel décrit la
              nature de vos racines, votre rapport au foyer et
              la manière dont vous construisez votre sécurité
              intérieure.
            </p>

            <p>
              Il peut également montrer les comportements que
              vous adoptez dans votre vie privée, lorsque vous
              êtes loin du regard des autres.
            </p>

            <div className="house-four-highlight-card">
              <div className="house-four-highlight-symbol">
                IC
              </div>

              <div>
                <h3>
                  Le Fond du Ciel représente vos fondations
                </h3>

                <p>
                  Pour comprendre votre Maison 4, observez le
                  signe situé sur le Fond du Ciel, sa planète
                  maîtresse, les planètes présentes dans cette
                  maison et les aspects qu’elles reçoivent.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Foyer, maison et vie privée
            </h2>

            <p>
              La Maison 4 décrit ce que signifie réellement
              l’idée de foyer pour vous. Certaines personnes
              ont besoin de stabilité, d’autres de liberté,
              de silence, de beauté, de mouvement ou d’un lien
              constant avec leur famille.
            </p>

            <p>
              Elle peut aussi influencer votre rapport au
              logement, aux déménagements, à l’immobilier et à
              la manière dont vous organisez votre espace
              personnel.
            </p>

            <p>
              Le foyer symbolisé par la Maison 4 n’est pas
              uniquement un lieu physique. Il représente aussi
              l’état intérieur dans lequel vous vous sentez
              accueilli, protégé et libre d’être vous-même.
            </p>
          </section>

          <section>
            <h2>
              Famille, enfance et héritage émotionnel
            </h2>

            <p>
              La Maison 4 parle de la famille d’origine et de
              l’atmosphère émotionnelle vécue pendant
              l’enfance. Elle peut montrer les règles, les
              habitudes et les croyances transmises par le
              milieu familial.
            </p>

            <p>
              Certaines de ces influences deviennent des
              ressources importantes. D’autres doivent être
              comprises et transformées afin de ne pas être
              répétées automatiquement.
            </p>

            <p>
              Cette maison décrit également la famille que vous
              créez vous-même et la manière dont vous souhaitez
              transmettre vos propres valeurs aux générations
              suivantes.
            </p>
          </section>

          <section>
            <h2>
              La sécurité émotionnelle
            </h2>

            <p>
              La Maison 4 révèle ce dont vous avez besoin pour
              vous sentir émotionnellement en sécurité. Elle
              montre les conditions qui vous permettent de
              relâcher les tensions et de retrouver votre
              stabilité intérieure.
            </p>

            <p>
              Une Maison 4 équilibrée favorise la capacité à
              se ressourcer, à reconnaître ses émotions et à
              créer des limites protectrices dans la vie
              privée.
            </p>

            <p>
              Lorsqu’elle est vécue de manière plus difficile,
              elle peut créer un sentiment d’instabilité, une
              peur de l’abandon ou une dépendance excessive au
              passé et aux habitudes familiales.
            </p>
          </section>

          <section>
            <h2>
              Les forces et les défis de la Maison 4
            </h2>

            <div className="house-four-strengths-grid">
              <div className="house-four-list-card">
                <span className="house-four-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Une Maison 4 équilibrée
                </h3>

                <ul>
                  {HOUSE_STRENGTHS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="house-four-list-card">
                <span className="house-four-kicker">
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
              Les planètes en Maison 4
            </h2>

            <p>
              Une planète présente en Maison 4 influence
              fortement la vie familiale, le foyer, les
              souvenirs et la sécurité émotionnelle.
            </p>

            <p>
              Son énergie s’exprime souvent dans la sphère
              privée et peut révéler des besoins profonds,
              parfois moins visibles dans la vie sociale.
            </p>

            <div className="house-four-planets-grid">
              {PLANETS_IN_HOUSE.map((planet) => (
                <article
                  className="house-four-planet-card"
                  key={planet.name}
                >
                  <div className="house-four-planet-symbol">
                    {planet.symbol}
                  </div>

                  <div>
                    <h3>
                      {planet.name} en Maison 4
                    </h3>

                    <p>{planet.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Les douze signes dans la Maison 4
            </h2>

            <p>
              Le signe situé au début de la Maison 4 décrit
              votre rapport au foyer, à la famille et à votre
              sécurité intérieure.
            </p>

            <p>
              Il montre aussi l’atmosphère que vous cherchez à
              créer dans votre vie privée et la manière dont
              vous réagissez lorsque vous avez besoin de vous
              protéger.
            </p>

            <div className="house-four-signs-grid">
              {SIGNS_IN_HOUSE.map((item) => (
                <article
                  className="house-four-sign-card"
                  key={item.sign}
                >
                  <div className="house-four-sign-symbol">
                    {item.symbol}
                  </div>

                  <div>
                    <h3>
                      Maison 4 en {item.sign}
                    </h3>

                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Maison 4 vide : que signifie-t-elle ?
            </h2>

            <p>
              Une Maison 4 vide ne signifie pas que la famille,
              le foyer ou l’enfance n’ont aucune importance
              dans votre vie.
            </p>

            <p>
              Toutes les maisons restent actives, même
              lorsqu’elles ne contiennent aucune planète. Il
              faut observer le signe placé sur le Fond du Ciel
              et sa planète maîtresse.
            </p>

            <p>
              La position de cette planète dans le thème montre
              comment et dans quel domaine vous construisez
              votre sécurité émotionnelle.
            </p>
          </section>

          <section>
            <h2>
              La planète maîtresse de la Maison 4
            </h2>

            <p>
              La planète maîtresse de la Maison 4 est celle
              qui gouverne le signe situé sur son point de
              départ.
            </p>

            <p>
              Sa position par signe, par maison et par aspect
              apporte des informations sur votre foyer, votre
              histoire familiale et votre manière de vous
              sentir en sécurité.
            </p>

            <div className="house-four-rulers-grid">
              <div className="house-four-ruler-card">
                <span>♈</span>
                <h3>Bélier</h3>
                <p>Mars</p>
              </div>

              <div className="house-four-ruler-card">
                <span>♉</span>
                <h3>Taureau</h3>
                <p>Vénus</p>
              </div>

              <div className="house-four-ruler-card">
                <span>♊</span>
                <h3>Gémeaux</h3>
                <p>Mercure</p>
              </div>

              <div className="house-four-ruler-card">
                <span>♋</span>
                <h3>Cancer</h3>
                <p>Lune</p>
              </div>

              <div className="house-four-ruler-card">
                <span>♌</span>
                <h3>Lion</h3>
                <p>Soleil</p>
              </div>

              <div className="house-four-ruler-card">
                <span>♍</span>
                <h3>Vierge</h3>
                <p>Mercure</p>
              </div>

              <div className="house-four-ruler-card">
                <span>♎</span>
                <h3>Balance</h3>
                <p>Vénus</p>
              </div>

              <div className="house-four-ruler-card">
                <span>♏</span>
                <h3>Scorpion</h3>
                <p>Pluton et Mars</p>
              </div>

              <div className="house-four-ruler-card">
                <span>♐</span>
                <h3>Sagittaire</h3>
                <p>Jupiter</p>
              </div>

              <div className="house-four-ruler-card">
                <span>♑</span>
                <h3>Capricorne</h3>
                <p>Saturne</p>
              </div>

              <div className="house-four-ruler-card">
                <span>♒</span>
                <h3>Verseau</h3>
                <p>Uranus et Saturne</p>
              </div>

              <div className="house-four-ruler-card">
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

            <div className="house-four-comparison-grid">
              <article className="house-four-comparison-card">
                <span className="house-four-kicker">
                  Maison 4
                </span>

                <h3>
                  Votre vie privée
                </h3>

                <p>
                  La Maison 4 représente le foyer, la famille,
                  les racines, l’enfance, l’intimité et les
                  fondations émotionnelles.
                </p>
              </article>

              <article className="house-four-comparison-card">
                <span className="house-four-kicker">
                  Maison 10
                </span>

                <h3>
                  Votre vie publique
                </h3>

                <p>
                  La Maison 10 représente la carrière, la
                  réputation, les responsabilités, l’ambition
                  et la place occupée dans la société.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 4 dans votre évolution personnelle
            </h2>

            <p>
              La Maison 4 vous invite à comprendre les
              influences familiales qui continuent d’agir dans
              votre vie actuelle.
            </p>

            <p>
              Elle vous encourage à conserver les héritages
              qui vous soutiennent et à transformer les
              comportements qui limitent votre liberté
              émotionnelle.
            </p>

            <p>
              Son évolution consiste à construire un sentiment
              de sécurité qui ne dépend pas uniquement d’un
              lieu, d’une personne ou d’une structure
              familiale extérieure.
            </p>
          </section>

          <section>
            <h2>
              Comment interpréter votre Maison 4 ?
            </h2>

            <div className="house-four-steps">
              <article className="house-four-step-card">
                <span>1</span>

                <div>
                  <h3>
                    Identifiez le signe du Fond du Ciel
                  </h3>

                  <p>
                    Il décrit votre rapport au foyer, aux
                    racines et à votre sécurité émotionnelle.
                  </p>
                </div>
              </article>

              <article className="house-four-step-card">
                <span>2</span>

                <div>
                  <h3>
                    Repérez sa planète maîtresse
                  </h3>

                  <p>
                    Sa position révèle où les thèmes familiaux
                    et intérieurs cherchent à s’exprimer.
                  </p>
                </div>
              </article>

              <article className="house-four-step-card">
                <span>3</span>

                <div>
                  <h3>
                    Observez les planètes présentes
                  </h3>

                  <p>
                    Chaque planète influence votre foyer,
                    votre enfance et votre manière de vous
                    protéger.
                  </p>
                </div>
              </article>

              <article className="house-four-step-card">
                <span>4</span>

                <div>
                  <h3>
                    Analysez les aspects
                  </h3>

                  <p>
                    Les aspects précisent les forces, les
                    tensions et les transformations liées à
                    votre histoire familiale.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 4 dans votre thème natal
            </h2>

            <p>
              La Maison 4 doit être analysée avec l’ensemble
              du thème natal. Son signe, sa planète maîtresse,
              les planètes présentes et leurs aspects précisent
              sa signification.
            </p>

            <p>
              Cette analyse peut vous aider à comprendre vos
              besoins émotionnels, votre rapport au foyer et
              les schémas familiaux qui influencent encore
              votre vie.
            </p>

            <div className="house-four-cta-card">
              <div>
                <span className="house-four-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Quel signe et quelles planètes se trouvent dans votre Maison 4 ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir vos maisons astrologiques, votre
                  Fond du Ciel, votre Ascendant et les
                  positions de vos planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="house-four-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="house-four-navigation">
            <span className="house-four-kicker">
              Les maisons astrologiques
            </span>

            <h2>
              Continuer votre exploration
            </h2>

            <div className="house-four-navigation-grid">
              <Link
                href="/astrologie/maisons/maison-3"
                className="house-four-navigation-card"
              >
                <span>Ⅲ</span>

                <div>
                  <h3>Maison 3</h3>

                  <p>
                    Communication, apprentissage, entourage et
                    déplacements quotidiens.
                  </p>
                </div>
              </Link>

              <Link
                href="/astrologie/maisons"
                className="house-four-navigation-card"
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
                href="/astrologie/maisons/maison-5"
                className="house-four-navigation-card"
              >
                <span>Ⅴ</span>

                <div>
                  <h3>Maison 5</h3>

                  <p>
                    Créativité, amour, plaisir, enfants et
                    expression personnelle.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <section className="house-four-faq">
            <span className="house-four-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur la Maison 4
            </h2>

            <div className="house-four-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="house-four-faq-item"
                  key={item.question}
                >
                  <summary>{item.question}</summary>

                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="house-four-disclaimer">
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
