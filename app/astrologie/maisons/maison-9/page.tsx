import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/maisons/maison-9";

export const metadata: Metadata = {
  title:
    "Maison 9 en astrologie : voyages, études et philosophie | Luna Astralis",

  description:
    "Découvrez la Maison 9 en astrologie : voyages lointains, études supérieures, philosophie, croyances, spiritualité, enseignement et ouverture sur le monde.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Maison 9 en astrologie : voyages, études, croyances et philosophie",
    description:
      "Guide complet de la Maison 9 : voyages lointains, études supérieures, spiritualité, enseignement, publication, quête de sens et ouverture sur le monde.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "La Maison 9 en astrologie | Luna Astralis",
    description:
      "Découvrez ce que la Maison 9 révèle sur vos croyances, vos voyages, vos études et votre quête de sens.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const HOUSE_TRAITS = [
  {
    title: "Votre quête de sens",
    symbol: "Ⅸ",
    text:
      "La Maison 9 représente votre besoin de comprendre la vie, de construire une vision du monde et de donner une signification plus large à vos expériences.",
  },
  {
    title: "Votre ouverture sur le monde",
    symbol: "✧",
    text:
      "Cette maison concerne les voyages lointains, les cultures étrangères, les langues et les expériences qui élargissent votre manière de penser.",
  },
  {
    title: "Votre transmission",
    symbol: "⌘",
    text:
      "Elle représente les études supérieures, l’enseignement, la publication, la philosophie et la manière dont vous transmettez vos connaissances.",
  },
];

const HOUSE_STRENGTHS = [
  "Ouverture d’esprit",
  "Curiosité intellectuelle",
  "Goût de l’apprentissage",
  "Vision à long terme",
  "Capacité à transmettre",
  "Recherche de sens",
];

const HOUSE_CHALLENGES = [
  "Certitudes trop rigides",
  "Tendance à imposer ses croyances",
  "Difficulté avec les détails",
  "Fuite dans l’idéal ou l’ailleurs",
  "Promesses excessives",
  "Recherche constante de nouveauté",
];

const PLANETS_IN_HOUSE = [
  {
    name: "Soleil",
    symbol: "☀",
    text:
      "Le Soleil en Maison 9 donne une identité tournée vers l’apprentissage, les voyages, la philosophie et la découverte. La personne cherche souvent à élargir ses horizons et à construire une vision personnelle de la vie.",
  },
  {
    name: "Lune",
    symbol: "☽",
    text:
      "La Lune en Maison 9 crée un besoin émotionnel d’espace, de sens et d’ouverture. La personne peut se sentir nourrie par les voyages, les études, la spiritualité ou les contacts avec d’autres cultures.",
  },
  {
    name: "Mercure",
    symbol: "☿",
    text:
      "Mercure en Maison 9 favorise les études supérieures, les langues, l’écriture, l’enseignement et la réflexion philosophique. La personne aime relier les idées et comprendre les grands principes.",
  },
  {
    name: "Vénus",
    symbol: "♀",
    text:
      "Vénus en Maison 9 apporte un goût pour les voyages, les cultures étrangères, l’art et les relations qui ouvrent de nouvelles perspectives. L’amour peut être lié à l’apprentissage ou à l’étranger.",
  },
  {
    name: "Mars",
    symbol: "♂",
    text:
      "Mars en Maison 9 donne une énergie active dans la défense des idées, des croyances et des convictions. La personne peut aimer l’aventure, les défis intellectuels et les expériences qui demandent du courage.",
  },
  {
    name: "Jupiter",
    symbol: "♃",
    text:
      "Jupiter en Maison 9 renforce l’intérêt pour les voyages, les études, la philosophie, la spiritualité et l’enseignement. Cette position peut favoriser l’expansion intellectuelle et l’ouverture sur le monde.",
  },
  {
    name: "Saturne",
    symbol: "♄",
    text:
      "Saturne en Maison 9 peut rendre les croyances sérieuses, prudentes ou structurées. Les études supérieures et les voyages peuvent demander davantage d’efforts, mais conduire à une grande maîtrise.",
  },
  {
    name: "Uranus",
    symbol: "♅",
    text:
      "Uranus en Maison 9 donne une pensée originale, indépendante et parfois non conventionnelle. La personne peut remettre en question les croyances traditionnelles et rechercher des expériences inhabituelles.",
  },
  {
    name: "Neptune",
    symbol: "♆",
    text:
      "Neptune en Maison 9 apporte une grande sensibilité spirituelle, imaginative et intuitive. La personne peut rechercher une vérité universelle, mais doit rester attentive aux illusions et aux croyances floues.",
  },
  {
    name: "Pluton",
    symbol: "♇",
    text:
      "Pluton en Maison 9 donne des convictions profondes et une recherche intense de vérité. Les voyages, les études ou les expériences philosophiques peuvent transformer complètement la vision du monde.",
  },
];

const SIGNS_IN_HOUSE = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "La Maison 9 en Bélier explore le monde avec courage, spontanéité et indépendance. La personne apprend par l’expérience directe et défend ses convictions avec énergie.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "La Maison 9 en Taureau construit ses croyances lentement et recherche des connaissances concrètes. Les voyages et les études doivent apporter stabilité, plaisir ou résultats durables.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "La Maison 9 en Gémeaux donne une grande curiosité pour les langues, les idées, les cultures et les systèmes de pensée. La personne peut multiplier les apprentissages et les intérêts.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "La Maison 9 en Cancer relie les croyances aux émotions, à la famille et aux racines. Les voyages ou les études peuvent permettre de mieux comprendre son histoire personnelle.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "La Maison 9 en Lion cherche à exprimer une vision personnelle et inspirante. La personne peut aimer enseigner, transmettre, créer ou devenir une figure de référence dans son domaine.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "La Maison 9 en Vierge aborde les études, les croyances et les voyages avec méthode et précision. La personne cherche des connaissances utiles, cohérentes et applicables.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "La Maison 9 en Balance recherche l’équité, l’harmonie et la compréhension entre les cultures. La personne peut être attirée par le droit, les arts, la diplomatie ou les relations internationales.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "La Maison 9 en Scorpion cherche des vérités profondes et transforme ses convictions à travers des expériences intenses. La personne peut s’intéresser à la psychologie, aux mystères et aux sujets cachés.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "La Maison 9 en Sagittaire renforce le besoin de liberté, d’aventure, de voyages et de découverte. La personne cherche naturellement à élargir ses horizons et à partager ses connaissances.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "La Maison 9 en Capricorne construit une vision du monde sérieuse, structurée et responsable. Les études et les projets internationaux peuvent s’inscrire dans des objectifs à long terme.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "La Maison 9 en Verseau développe des idées originales, progressistes et indépendantes. La personne peut s’intéresser aux sciences, aux nouvelles technologies ou aux mouvements collectifs.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "La Maison 9 en Poissons recherche une compréhension intuitive, spirituelle et universelle de la vie. La personne peut être attirée par la méditation, l’art, la compassion et les traditions mystiques.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente la Maison 9 en astrologie ?",
    answer:
      "La Maison 9 représente les voyages lointains, les études supérieures, les croyances, la philosophie, la spiritualité, l’enseignement, la publication, les langues et l’ouverture sur le monde.",
  },
  {
    question:
      "Que signifie une planète en Maison 9 ?",
    answer:
      "Une planète en Maison 9 influence la manière d’apprendre, de voyager, de transmettre ses connaissances et de construire une vision du monde.",
  },
  {
    question:
      "Que signifie une Maison 9 vide ?",
    answer:
      "Une Maison 9 vide ne signifie pas une absence de voyages ou d’études. Il faut analyser le signe placé sur sa cuspide, sa planète maîtresse et les aspects reçus par cette planète.",
  },
  {
    question:
      "La Maison 9 représente-t-elle les voyages ?",
    answer:
      "Oui. Elle est traditionnellement associée aux voyages lointains, aux pays étrangers et aux expériences qui élargissent la vision du monde.",
  },
  {
    question:
      "Quelle différence existe entre la Maison 3 et la Maison 9 ?",
    answer:
      "La Maison 3 représente l’apprentissage quotidien, les déplacements courts et l’information concrète. La Maison 9 représente les études supérieures, les voyages lointains et les grandes idées.",
  },
  {
    question:
      "La Maison 9 est-elle liée à la spiritualité ?",
    answer:
      "Oui. Elle concerne les croyances, la philosophie, la religion, la spiritualité et les systèmes qui permettent de donner un sens plus large à l’existence.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Maison 9 en astrologie : voyages, études, croyances et philosophie",
  description:
    "Guide complet consacré à la Maison 9, aux voyages lointains, aux études supérieures, aux croyances, à la spiritualité, à l’enseignement et à la quête de sens.",
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
      name: "Maison 9",
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

export default function MaisonNeufAstrologiePage() {
  return (
    <div className="house-nine-page">
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

      <main className="house-nine-wrap">
        <section className="house-nine-hero">
          <div className="house-nine-badge">
            Ⅸ Neuvième maison astrologique
          </div>

          <h1>
            La Maison 9 en astrologie
          </h1>

          <p className="house-nine-hero-lead">
            La Maison 9 représente les voyages lointains, les
            études supérieures, les croyances, la philosophie,
            la spiritualité et votre manière d’élargir votre
            vision du monde.
          </p>

          <div className="house-nine-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="house-nine-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification-maison-9"
              className="house-nine-secondary-button"
            >
              Découvrir la Maison 9
            </a>
          </div>
        </section>

        <article className="house-nine-content">
          <section id="signification-maison-9">
            <span className="house-nine-kicker">
              Signification de la Maison 9
            </span>

            <h2>
              Que représente la Maison 9 ?
            </h2>

            <p>
              La Maison 9 est la maison de l’expansion
              intellectuelle, de la quête de sens et de
              l’ouverture sur le monde.
            </p>

            <p>
              Elle représente les expériences qui vous
              permettent de dépasser votre environnement
              habituel et de découvrir de nouvelles cultures,
              de nouvelles idées et de nouvelles façons de
              penser.
            </p>

            <p>
              Cette maison concerne les voyages lointains, les
              études supérieures, la philosophie, la religion,
              la spiritualité, les langues étrangères et
              l’enseignement.
            </p>

            <p>
              Elle révèle aussi votre manière de construire
              vos convictions et de transmettre votre vision
              du monde aux autres.
            </p>
          </section>

          <section>
            <h2>
              Les grands domaines de la Maison 9
            </h2>

            <div className="house-nine-info-grid">
              {HOUSE_TRAITS.map((item) => (
                <article
                  className="house-nine-info-card"
                  key={item.title}
                >
                  <span className="house-nine-card-icon">
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
              Voyages lointains et découverte du monde
            </h2>

            <p>
              La Maison 9 représente les voyages qui vous
              éloignent de votre environnement habituel et
              transforment votre manière de voir la vie.
            </p>

            <p>
              Ces voyages peuvent être physiques, mais aussi
              intellectuels ou spirituels. Ils vous mettent en
              contact avec des cultures, des valeurs et des
              traditions différentes.
            </p>

            <p>
              Le but symbolique de cette maison n’est pas
              seulement de changer de lieu, mais d’élargir
              votre compréhension du monde.
            </p>

            <div className="house-nine-highlight-card">
              <div className="house-nine-highlight-symbol">
                Ⅸ
              </div>

              <div>
                <h3>
                  La Maison 9 élargit votre horizon
                </h3>

                <p>
                  Pour interpréter cette maison, observez le
                  signe placé sur sa cuspide, sa planète
                  maîtresse, les planètes présentes et les
                  aspects qu’elles reçoivent.
                </p>

                <Link
                  href="/astrologie/maisons"
                  className="house-nine-text-link"
                >
                  Comprendre les douze maisons astrologiques
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Études supérieures et spécialisation
            </h2>

            <p>
              La Maison 9 concerne les études universitaires,
              les formations avancées et les connaissances qui
              permettent de développer une expertise.
            </p>

            <p>
              Elle montre votre manière d’étudier les grands
              principes, de relier plusieurs idées et de
              construire une compréhension globale d’un
              sujet.
            </p>

            <p>
              Une Maison 9 importante peut donner un besoin
              permanent d’apprendre, d’explorer et de dépasser
              les limites de ce que vous connaissez déjà.
            </p>
          </section>

          <section>
            <h2>
              Philosophie et quête de sens
            </h2>

            <p>
              La Maison 9 cherche à répondre aux grandes
              questions de l’existence.
            </p>

            <p>
              Elle représente la philosophie personnelle, les
              valeurs, les principes et les idées qui donnent
              une direction à votre vie.
            </p>

            <p>
              Elle montre comment vous organisez vos
              expériences pour construire une vision cohérente
              du monde et comprendre votre place dans celui-ci.
            </p>
          </section>

          <section>
            <h2>
              Religion, spiritualité et croyances
            </h2>

            <p>
              La Maison 9 est associée aux croyances, aux
              traditions religieuses, aux systèmes spirituels
              et aux pratiques qui donnent un sens plus vaste à
              l’existence.
            </p>

            <p>
              Elle ne décrit pas nécessairement une religion
              précise. Elle révèle plutôt votre besoin de
              croire, de comprendre et de relier votre vie à
              quelque chose de plus grand.
            </p>

            <p>
              Le signe et les planètes présents dans cette
              maison montrent si votre approche est
              rationnelle, intuitive, traditionnelle,
              indépendante ou expérimentale.
            </p>
          </section>

          <section>
            <h2>
              Enseignement et transmission du savoir
            </h2>

            <p>
              La Maison 9 représente la capacité à transmettre
              des connaissances, une expérience ou une vision
              du monde.
            </p>

            <p>
              Elle concerne les enseignants, les professeurs,
              les mentors, les conférenciers et toutes les
              personnes qui partagent un savoir approfondi.
            </p>

            <p>
              Une Maison 9 importante peut donner le désir
              d’inspirer, de guider ou d’aider les autres à
              élargir leur propre compréhension.
            </p>
          </section>

          <section>
            <h2>
              Écriture, publication et diffusion
            </h2>

            <p>
              La Maison 9 est liée aux publications, aux livres
              et à la diffusion d’idées auprès d’un large
              public.
            </p>

            <p>
              Elle représente les connaissances qui dépassent
              le cercle personnel et qui peuvent être
              transmises à travers l’enseignement, l’écriture,
              les médias ou les plateformes numériques.
            </p>

            <p>
              Elle peut ainsi être importante dans le thème
              des auteurs, des éditeurs, des chercheurs et des
              créateurs de contenu éducatif.
            </p>
          </section>

          <section>
            <h2>
              Langues et cultures étrangères
            </h2>

            <p>
              La Maison 9 représente l’apprentissage des
              langues étrangères et la capacité à comprendre
              des cultures différentes de la vôtre.
            </p>

            <p>
              Elle encourage à dépasser les préjugés, à
              comparer plusieurs visions du monde et à
              développer une pensée plus ouverte.
            </p>

            <p>
              Les contacts internationaux peuvent jouer un
              rôle important dans l’évolution personnelle,
              professionnelle ou intellectuelle.
            </p>
          </section>

          <section>
            <h2>
              Justice, droit et principes collectifs
            </h2>

            <p>
              En astrologie traditionnelle, la Maison 9 est
              également associée au droit, aux tribunaux
              supérieurs et aux grands principes de justice.
            </p>

            <p>
              Elle représente les règles et les idées qui
              organisent la société au-delà des échanges
              individuels.
            </p>

            <p>
              Une forte Maison 9 peut donner un intérêt pour
              le droit, l’éthique, les questions sociales ou
              la défense de principes considérés comme
              universels.
            </p>
          </section>

          <section>
            <h2>
              Les forces et les défis de la Maison 9
            </h2>

            <div className="house-nine-strengths-grid">
              <div className="house-nine-list-card">
                <span className="house-nine-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Une Maison 9 équilibrée
                </h3>

                <ul>
                  {HOUSE_STRENGTHS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="house-nine-list-card">
                <span className="house-nine-kicker">
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
              Les planètes en Maison 9
            </h2>

            <p>
              Une planète présente en Maison 9 influence votre
              manière d’apprendre, de voyager, de transmettre
              vos connaissances et de construire vos
              croyances.
            </p>

            <p>
              Elle montre également quelle énergie vous pousse
              à dépasser vos limites et à élargir votre vision
              du monde.
            </p>

            <div className="house-nine-planets-grid">
              {PLANETS_IN_HOUSE.map((planet) => (
                <article
                  className="house-nine-planet-card"
                  key={planet.name}
                >
                  <div className="house-nine-planet-symbol">
                    {planet.symbol}
                  </div>

                  <div>
                    <h3>
                      {planet.name} en Maison 9
                    </h3>

                    <p>{planet.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Les douze signes dans la Maison 9
            </h2>

            <p>
              Le signe placé sur la cuspide de la Maison 9
              décrit votre manière d’explorer le monde, de
              construire vos croyances et de rechercher du
              sens.
            </p>

            <p>
              Il montre également votre approche des voyages,
              des études supérieures et de la transmission des
              connaissances.
            </p>

            <div className="house-nine-signs-grid">
              {SIGNS_IN_HOUSE.map((item) => (
                <article
                  className="house-nine-sign-card"
                  key={item.sign}
                >
                  <div className="house-nine-sign-symbol">
                    {item.symbol}
                  </div>

                  <div>
                    <h3>
                      Maison 9 en {item.sign}
                    </h3>

                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Maison 9 vide : que signifie-t-elle ?
            </h2>

            <p>
              Une Maison 9 vide ne signifie pas une absence de
              voyages, d’études, de croyances ou de
              spiritualité.
            </p>

            <p>
              Toutes les maisons restent actives. Il faut
              observer le signe situé sur la cuspide de la
              Maison 9 et la planète qui gouverne ce signe.
            </p>

            <p>
              La position de cette planète maîtresse montre
              comment et dans quel domaine les thèmes de
              l’apprentissage, de l’expansion et de la quête de
              sens cherchent à s’exprimer.
            </p>
          </section>

          <section>
            <h2>
              La planète maîtresse de la Maison 9
            </h2>

            <p>
              La planète maîtresse de la Maison 9 est celle qui
              gouverne le signe situé au début de cette maison.
            </p>

            <p>
              Sa position par signe, par maison et par aspect
              apporte des informations importantes sur votre
              manière de voyager, d’étudier, de croire et de
              transmettre.
            </p>

            <div className="house-nine-rulers-grid">
              <div className="house-nine-ruler-card">
                <span>♈</span>
                <h3>Bélier</h3>
                <p>Mars</p>
              </div>

              <div className="house-nine-ruler-card">
                <span>♉</span>
                <h3>Taureau</h3>
                <p>Vénus</p>
              </div>

              <div className="house-nine-ruler-card">
                <span>♊</span>
                <h3>Gémeaux</h3>
                <p>Mercure</p>
              </div>

              <div className="house-nine-ruler-card">
                <span>♋</span>
                <h3>Cancer</h3>
                <p>Lune</p>
              </div>

              <div className="house-nine-ruler-card">
                <span>♌</span>
                <h3>Lion</h3>
                <p>Soleil</p>
              </div>

              <div className="house-nine-ruler-card">
                <span>♍</span>
                <h3>Vierge</h3>
                <p>Mercure</p>
              </div>

              <div className="house-nine-ruler-card">
                <span>♎</span>
                <h3>Balance</h3>
                <p>Vénus</p>
              </div>

              <div className="house-nine-ruler-card">
                <span>♏</span>
                <h3>Scorpion</h3>
                <p>Pluton et Mars</p>
              </div>

              <div className="house-nine-ruler-card">
                <span>♐</span>
                <h3>Sagittaire</h3>
                <p>Jupiter</p>
              </div>

              <div className="house-nine-ruler-card">
                <span>♑</span>
                <h3>Capricorne</h3>
                <p>Saturne</p>
              </div>

              <div className="house-nine-ruler-card">
                <span>♒</span>
                <h3>Verseau</h3>
                <p>Uranus et Saturne</p>
              </div>

              <div className="house-nine-ruler-card">
                <span>♓</span>
                <h3>Poissons</h3>
                <p>Neptune et Jupiter</p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Maison 3 et Maison 9 : quelle différence ?
            </h2>

            <div className="house-nine-comparison-grid">
              <article className="house-nine-comparison-card">
                <span className="house-nine-kicker">
                  Maison 3
                </span>

                <h3>
                  L’apprentissage quotidien
                </h3>

                <p>
                  La Maison 3 représente la communication, les
                  études de base, les informations concrètes,
                  les déplacements courts et l’environnement
                  proche.
                </p>
              </article>

              <article className="house-nine-comparison-card">
                <span className="house-nine-kicker">
                  Maison 9
                </span>

                <h3>
                  La vision globale
                </h3>

                <p>
                  La Maison 9 représente les études
                  supérieures, les voyages lointains, la
                  philosophie et les connaissances qui
                  élargissent votre vision du monde.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              Maison 8 et Maison 9 : quelle différence ?
            </h2>

            <div className="house-nine-comparison-grid">
              <article className="house-nine-comparison-card">
                <span className="house-nine-kicker">
                  Maison 8
                </span>

                <h3>
                  La transformation intérieure
                </h3>

                <p>
                  La Maison 8 représente les crises, les
                  transformations, l’intimité, la psychologie
                  et les ressources partagées.
                </p>
              </article>

              <article className="house-nine-comparison-card">
                <span className="house-nine-kicker">
                  Maison 9
                </span>

                <h3>
                  L’expansion de la conscience
                </h3>

                <p>
                  La Maison 9 représente les idées, les
                  voyages, les études, les croyances et la
                  recherche d’une compréhension plus large de
                  l’existence.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 9 dans votre évolution personnelle
            </h2>

            <p>
              La Maison 9 vous invite à dépasser ce que vous
              connaissez déjà et à explorer de nouvelles
              perspectives.
            </p>

            <p>
              Elle vous apprend à remettre vos croyances en
              question, à développer votre propre philosophie
              et à respecter les visions différentes de la
              vôtre.
            </p>

            <p>
              Son évolution consiste à transformer les
              connaissances en sagesse et les expériences en
              compréhension.
            </p>
          </section>

          <section>
            <h2>
              Comment interpréter votre Maison 9 ?
            </h2>

            <div className="house-nine-steps">
              <article className="house-nine-step-card">
                <span>1</span>

                <div>
                  <h3>
                    Identifiez le signe de la Maison 9
                  </h3>

                  <p>
                    Il décrit votre manière d’apprendre,
                    d’explorer, de voyager et de construire vos
                    convictions.
                  </p>
                </div>
              </article>

              <article className="house-nine-step-card">
                <span>2</span>

                <div>
                  <h3>
                    Repérez sa planète maîtresse
                  </h3>

                  <p>
                    Sa position montre où les thèmes de
                    l’apprentissage, de l’expansion et de la
                    quête de sens cherchent à s’exprimer.
                  </p>
                </div>
              </article>

              <article className="house-nine-step-card">
                <span>3</span>

                <div>
                  <h3>
                    Observez les planètes présentes
                  </h3>

                  <p>
                    Chaque planète influence vos croyances,
                    vos études, vos voyages et votre manière de
                    transmettre.
                  </p>
                </div>
              </article>

              <article className="house-nine-step-card">
                <span>4</span>

                <div>
                  <h3>
                    Analysez les aspects
                  </h3>

                  <p>
                    Les aspects précisent les forces, les
                    tensions et les apprentissages liés à votre
                    vision du monde.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 9 dans votre thème natal
            </h2>

            <p>
              La Maison 9 doit être interprétée avec l’ensemble
              du thème natal. Son signe, sa planète maîtresse,
              les planètes présentes et leurs aspects
              précisent sa signification.
            </p>

            <p>
              Cette analyse peut vous aider à mieux comprendre
              votre rapport aux études, aux voyages, aux
              croyances et aux expériences qui donnent un sens
              plus large à votre parcours.
            </p>

            <div className="house-nine-cta-card">
              <div>
                <span className="house-nine-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Quel signe et quelles planètes se trouvent dans votre Maison 9 ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir vos maisons astrologiques, vos
                  planètes et les grandes dynamiques de votre
                  thème natal.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="house-nine-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="house-nine-navigation">
            <span className="house-nine-kicker">
              Les maisons astrologiques
            </span>

            <h2>
              Continuer votre exploration
            </h2>

            <div className="house-nine-navigation-grid">
              <Link
                href="/astrologie/maisons/maison-8"
                className="house-nine-navigation-card"
              >
                <span>Ⅷ</span>

                <div>
                  <h3>Maison 8</h3>

                  <p>
                    Transformation, intimité, ressources
                    partagées, héritages et renaissance.
                  </p>
                </div>
              </Link>

              <Link
                href="/astrologie/maisons"
                className="house-nine-navigation-card"
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
                href="/astrologie/maisons/maison-10"
                className="house-nine-navigation-card"
              >
                <span>Ⅹ</span>

                <div>
                  <h3>Maison 10</h3>

                  <p>
                    Carrière, vocation, réputation, ambitions
                    et place dans la société.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <section className="house-nine-faq">
            <span className="house-nine-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur la Maison 9
            </h2>

            <div className="house-nine-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="house-nine-faq-item"
                  key={item.question}
                >
                  <summary>{item.question}</summary>

                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="house-nine-disclaimer">
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
