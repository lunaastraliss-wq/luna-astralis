import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/maisons/maison-3";

export const metadata: Metadata = {
  title:
    "Maison 3 en astrologie : communication et apprentissage | Luna Astralis",

  description:
    "Découvrez la Maison 3 en astrologie : communication, apprentissage, frères et sœurs, écriture, entourage proche, déplacements et planètes en Maison 3.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Maison 3 en astrologie : communication, apprentissage et entourage",
    description:
      "Guide complet de la Maison 3 : pensée, communication, études, écriture, frères et sœurs, voisinage, déplacements et planètes présentes dans cette maison.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "La Maison 3 en astrologie | Luna Astralis",
    description:
      "Découvrez ce que la Maison 3 révèle sur votre communication, votre manière d’apprendre, votre entourage et votre curiosité.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const HOUSE_TRAITS = [
  {
    title: "Votre communication",
    symbol: "✦",
    text:
      "La Maison 3 décrit votre manière de parler, d’écrire, d’écouter et de transmettre vos idées. Elle révèle le style que vous adoptez dans vos échanges quotidiens.",
  },
  {
    title: "Votre façon d’apprendre",
    symbol: "☿",
    text:
      "Cette maison représente la curiosité, l’apprentissage de base, l’observation et la manière dont vous rassemblez les informations nécessaires pour comprendre votre environnement.",
  },
  {
    title: "Votre environnement proche",
    symbol: "Ⅲ",
    text:
      "La Maison 3 concerne les frères et sœurs, les voisins, les connaissances, les déplacements de proximité et toutes les interactions qui composent votre quotidien.",
  },
];

const HOUSE_STRENGTHS = [
  "Curiosité intellectuelle",
  "Facilité à communiquer",
  "Capacité d’adaptation",
  "Goût de l’apprentissage",
  "Sens de l’observation",
  "Aptitude à créer des liens",
];

const HOUSE_CHALLENGES = [
  "Dispersion mentale",
  "Nervosité",
  "Communication impulsive",
  "Accumulation d’informations",
  "Difficulté à approfondir",
  "Tendance aux malentendus",
];

const PLANETS_IN_HOUSE = [
  {
    name: "Soleil",
    symbol: "☀",
    text:
      "Le Soleil en Maison 3 renforce le besoin de communiquer, d’apprendre et de transmettre ses idées. La personne construit une partie importante de son identité à travers les échanges, les connaissances et l’expression personnelle.",
  },
  {
    name: "Lune",
    symbol: "☽",
    text:
      "La Lune en Maison 3 relie les émotions à la parole et à l’apprentissage. La personne peut avoir besoin d’échanger régulièrement pour comprendre ce qu’elle ressent et se sentir émotionnellement rassurée.",
  },
  {
    name: "Mercure",
    symbol: "☿",
    text:
      "Mercure en Maison 3 favorise la curiosité, la mobilité mentale, l’écriture, l’enseignement et les échanges. L’esprit peut être rapide, souple et constamment stimulé par de nouvelles informations.",
  },
  {
    name: "Vénus",
    symbol: "♀",
    text:
      "Vénus en Maison 3 apporte douceur, diplomatie et charme dans la communication. La personne peut aimer écrire, créer, apprendre les langues ou entretenir des relations harmonieuses avec son entourage.",
  },
  {
    name: "Mars",
    symbol: "♂",
    text:
      "Mars en Maison 3 donne une parole directe, vive et parfois combative. La personne défend rapidement ses idées et possède souvent beaucoup d’énergie mentale, mais doit éviter les échanges trop brusques.",
  },
  {
    name: "Jupiter",
    symbol: "♃",
    text:
      "Jupiter en Maison 3 amplifie la curiosité et le désir d’apprendre. La personne peut aimer enseigner, voyager à proximité, partager ses connaissances et développer une vision large à partir de son environnement.",
  },
  {
    name: "Saturne",
    symbol: "♄",
    text:
      "Saturne en Maison 3 peut rendre la communication plus prudente, structurée ou réservée. Avec le temps, il favorise une pensée rigoureuse, une grande concentration et une parole particulièrement responsable.",
  },
  {
    name: "Uranus",
    symbol: "♅",
    text:
      "Uranus en Maison 3 donne un esprit original, rapide et indépendant. La personne peut avoir des idées inattendues, s’intéresser aux technologies et refuser les méthodes d’apprentissage trop conventionnelles.",
  },
  {
    name: "Neptune",
    symbol: "♆",
    text:
      "Neptune en Maison 3 apporte intuition, imagination et sensibilité dans la pensée. La personne peut communiquer par les images, l’art ou la poésie, mais doit vérifier les informations pour éviter la confusion.",
  },
  {
    name: "Pluton",
    symbol: "♇",
    text:
      "Pluton en Maison 3 donne une pensée profonde, stratégique et pénétrante. La personne cherche souvent ce qui se cache derrière les mots et peut transformer les autres par sa manière de communiquer.",
  },
];

const SIGNS_IN_HOUSE = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "La Maison 3 en Bélier donne une communication directe, rapide et spontanée. La personne exprime ses idées avec énergie et peut apprendre efficacement par l’action et l’expérience.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "La Maison 3 en Taureau apporte une pensée concrète, stable et méthodique. La personne prend le temps d’assimiler les informations et préfère les connaissances utiles et applicables.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "La Maison 3 en Gémeaux renforce la curiosité, la mobilité et le goût des échanges. La personne peut s’intéresser à plusieurs sujets à la fois et posséder une grande facilité à communiquer.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "La Maison 3 en Cancer donne une communication sensible, intuitive et influencée par les souvenirs. La personne accorde de l’importance aux échanges familiaux et aux liens émotionnels.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "La Maison 3 en Lion apporte une parole expressive, chaleureuse et créative. La personne aime partager ses idées avec assurance et peut posséder un talent naturel pour raconter ou enseigner.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "La Maison 3 en Vierge favorise l’analyse, la précision et le sens du détail. La personne apprend en classant les informations et cherche généralement à communiquer de manière claire et utile.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "La Maison 3 en Balance apporte diplomatie, élégance et recherche d’équilibre dans les échanges. La personne cherche à comprendre plusieurs points de vue avant de prendre position.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "La Maison 3 en Scorpion donne une pensée intense, profonde et observatrice. La personne communique avec précision et cherche souvent à découvrir les motivations cachées.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "La Maison 3 en Sagittaire favorise une pensée expansive, optimiste et tournée vers les grandes idées. La personne aime partager ses convictions et apprendre à travers les expériences.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "La Maison 3 en Capricorne apporte sérieux, structure et prudence dans la communication. La personne privilégie les informations fiables et développe ses connaissances avec discipline.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "La Maison 3 en Verseau donne une pensée inventive, indépendante et tournée vers l’avenir. La personne aime explorer des idées nouvelles et communiquer avec des groupes variés.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "La Maison 3 en Poissons apporte imagination, intuition et sensibilité dans les échanges. La personne peut comprendre les autres sans mots, mais doit parfois clarifier sa pensée.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente la Maison 3 en astrologie ?",
    answer:
      "La Maison 3 représente la communication, la pensée, l’apprentissage, l’écriture, les frères et sœurs, les voisins, l’entourage proche et les déplacements quotidiens.",
  },
  {
    question:
      "Quelle planète est associée à la Maison 3 ?",
    answer:
      "La Maison 3 est traditionnellement associée à Mercure, planète de la pensée, de la communication, de l’apprentissage, des échanges et des déplacements.",
  },
  {
    question:
      "Que signifie une planète en Maison 3 ?",
    answer:
      "Une planète en Maison 3 influence la manière de penser, d’apprendre et de communiquer. Elle peut également jouer un rôle important dans les relations avec l’entourage proche.",
  },
  {
    question:
      "Que signifie une Maison 3 vide ?",
    answer:
      "Une Maison 3 vide ne signifie pas une absence de communication ou de curiosité. Il faut observer le signe placé sur sa cuspide, sa planète maîtresse et les aspects reçus par cette planète.",
  },
  {
    question:
      "La Maison 3 représente-t-elle les frères et sœurs ?",
    answer:
      "Oui. La Maison 3 est traditionnellement associée aux frères et sœurs, mais aussi aux cousins, aux voisins, aux camarades et aux personnes rencontrées dans l’environnement quotidien.",
  },
  {
    question:
      "Quelle différence existe entre la Maison 3 et la Maison 9 ?",
    answer:
      "La Maison 3 concerne l’apprentissage quotidien, les informations concrètes et l’environnement proche. La Maison 9 représente les études supérieures, les voyages lointains, les croyances et la recherche de sens.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Maison 3 en astrologie : communication, apprentissage et entourage",
  description:
    "Guide complet consacré à la Maison 3, à la communication, à la pensée, aux études, aux frères et sœurs, aux déplacements et aux planètes présentes dans cette maison.",
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
      name: "Maison 3",
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

export default function MaisonTroisAstrologiePage() {
  return (
    <div className="house-three-page">
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

      <main className="house-three-wrap">
        <section className="house-three-hero">
          <div className="house-three-badge">
            Ⅲ Troisième maison astrologique
          </div>

          <h1>
            La Maison 3 en astrologie
          </h1>

          <p className="house-three-hero-lead">
            La Maison 3 représente votre manière de penser,
            d’apprendre, de communiquer et d’interagir avec
            votre environnement proche. Elle concerne aussi
            l’écriture, les frères et sœurs et les déplacements
            quotidiens.
          </p>

          <div className="house-three-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="house-three-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification-maison-3"
              className="house-three-secondary-button"
            >
              Découvrir la Maison 3
            </a>
          </div>
        </section>

        <article className="house-three-content">
          <section id="signification-maison-3">
            <span className="house-three-kicker">
              Signification de la Maison 3
            </span>

            <h2>
              Que représente la Maison 3 ?
            </h2>

            <p>
              La Maison 3 est la maison de la communication,
              de l’apprentissage et des échanges quotidiens.
              Elle décrit la manière dont vous observez,
              comprenez et interprétez votre environnement.
            </p>

            <p>
              Elle représente votre façon de parler, d’écrire,
              d’écouter et de transmettre vos idées. Elle peut
              montrer si votre communication est directe,
              prudente, émotionnelle, créative ou analytique.
            </p>

            <p>
              Cette maison concerne également l’apprentissage
              de base, les études primaires, la curiosité, les
              habitudes mentales et la manière dont vous
              rassemblez les informations.
            </p>

            <p>
              Elle est aussi associée aux frères et sœurs, aux
              voisins, aux cousins, aux camarades, aux
              connaissances et aux personnes qui font partie
              de votre environnement proche.
            </p>
          </section>

          <section>
            <h2>
              Les grands domaines de la Maison 3
            </h2>

            <div className="house-three-info-grid">
              {HOUSE_TRAITS.map((item) => (
                <article
                  className="house-three-info-card"
                  key={item.title}
                >
                  <span className="house-three-card-icon">
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
              La Maison 3 et votre manière de communiquer
            </h2>

            <p>
              La Maison 3 révèle le style que vous utilisez
              dans les conversations ordinaires. Elle indique
              la manière dont vous exprimez vos opinions,
              racontez vos expériences et partagez vos
              connaissances.
            </p>

            <p>
              Le signe placé au début de cette maison donne
              une couleur particulière à votre parole. Les
              planètes présentes peuvent rendre votre
              communication plus rapide, sensible, sérieuse,
              persuasive ou originale.
            </p>

            <p>
              Cette maison montre aussi votre manière d’écouter.
              Communiquer ne signifie pas uniquement parler :
              cela demande également de recevoir les
              informations et de comprendre les besoins des
              autres.
            </p>

            <div className="house-three-highlight-card">
              <div className="house-three-highlight-symbol">
                ☿
              </div>

              <div>
                <h3>
                  La communication construit votre réalité
                </h3>

                <p>
                  Les mots que vous choisissez influencent vos
                  relations, vos décisions et votre manière de
                  comprendre le monde. La Maison 3 vous invite
                  à développer une communication plus claire,
                  consciente et adaptée à votre environnement.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Apprentissage, curiosité et pensée quotidienne
            </h2>

            <p>
              La Maison 3 décrit la manière dont vous apprenez
              les informations concrètes nécessaires à votre
              vie quotidienne. Certaines personnes apprennent
              en lisant, d’autres en observant, en discutant,
              en répétant ou en expérimentant.
            </p>

            <p>
              Elle indique également votre niveau de curiosité
              et votre manière de relier les idées entre elles.
              Une Maison 3 très active peut créer un besoin
              constant d’apprendre, de poser des questions et
              de découvrir de nouveaux sujets.
            </p>

            <p>
              Son défi consiste parfois à ralentir suffisamment
              pour approfondir les informations plutôt que de
              passer rapidement d’un sujet à l’autre.
            </p>
          </section>

          <section>
            <h2>
              Frères, sœurs et entourage proche
            </h2>

            <p>
              La Maison 3 est traditionnellement associée aux
              frères et sœurs. Elle peut décrire la dynamique
              générale de ces relations, la manière dont elles
              influencent la pensée et les apprentissages de
              l’enfance.
            </p>

            <p>
              Elle concerne aussi les voisins, les cousins,
              les camarades de classe et les personnes
              rencontrées régulièrement. Ces relations forment
              le premier environnement social à l’extérieur du
              foyer.
            </p>

            <p>
              Les planètes présentes dans cette maison peuvent
              montrer que les relations avec l’entourage sont
              particulièrement importantes, stimulantes,
              exigeantes ou transformatrices.
            </p>
          </section>

          <section>
            <h2>
              Déplacements et environnement quotidien
            </h2>

            <p>
              La Maison 3 gouverne les déplacements courts :
              trajets vers le travail, visites locales,
              commissions, promenades, transports et
              déplacements réalisés dans l’environnement
              habituel.
            </p>

            <p>
              Contrairement à la Maison 9, qui représente les
              voyages lointains et les changements de
              perspective, la Maison 3 concerne les mouvements
              qui structurent la vie quotidienne.
            </p>

            <p>
              Elle montre aussi votre capacité à vous orienter,
              à vous adapter aux changements immédiats et à
              rester en contact avec les personnes et les
              informations qui vous entourent.
            </p>
          </section>

          <section>
            <h2>
              Écriture, médias et transmission
            </h2>

            <p>
              La Maison 3 est fortement liée à l’écriture, à
              la lecture, aux messages, aux appels, aux réseaux
              sociaux et aux médias utilisés dans la vie
              quotidienne.
            </p>

            <p>
              Elle peut révéler un talent pour raconter,
              expliquer, enseigner, traduire, vendre, informer
              ou créer du contenu. Les planètes présentes
              précisent la manière dont cette capacité peut
              s’exprimer.
            </p>

            <p>
              Une Maison 3 développée ne signifie pas
              nécessairement parler beaucoup. Elle peut aussi
              se manifester par une grande capacité à observer,
              à synthétiser et à transmettre l’essentiel.
            </p>
          </section>

          <section>
            <h2>
              Les forces et les défis de la Maison 3
            </h2>

            <div className="house-three-strengths-grid">
              <div className="house-three-list-card">
                <span className="house-three-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Une Maison 3 équilibrée
                </h3>

                <ul>
                  {HOUSE_STRENGTHS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="house-three-list-card">
                <span className="house-three-kicker">
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
              Les planètes en Maison 3
            </h2>

            <p>
              Une planète présente en Maison 3 influence
              directement votre manière de penser, de
              communiquer et d’apprendre.
            </p>

            <p>
              Elle peut également jouer un rôle important dans
              les relations avec les frères et sœurs,
              l’entourage proche ou dans les déplacements
              quotidiens.
            </p>

            <div className="house-three-planets-grid">
              {PLANETS_IN_HOUSE.map((planet) => (
                <article
                  className="house-three-planet-card"
                  key={planet.name}
                >
                  <div className="house-three-planet-symbol">
                    {planet.symbol}
                  </div>

                  <div>
                    <h3>
                      {planet.name} en Maison 3
                    </h3>

                    <p>{planet.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Les douze signes dans la Maison 3
            </h2>

            <p>
              Le signe placé sur la cuspide de la Maison 3
              décrit votre style de pensée, votre manière
              d’apprendre et votre façon de communiquer avec
              l’environnement proche.
            </p>

            <div className="house-three-signs-grid">
              {SIGNS_IN_HOUSE.map((item) => (
                <article
                  className="house-three-sign-card"
                  key={item.sign}
                >
                  <div className="house-three-sign-symbol">
                    {item.symbol}
                  </div>

                  <div>
                    <h3>
                      Maison 3 en {item.sign}
                    </h3>

                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Maison 3 vide : que signifie-t-elle ?
            </h2>

            <p>
              Une Maison 3 vide ne signifie pas que vous avez
              des difficultés à communiquer ou que vous
              manquez de curiosité. Toutes les maisons restent
              actives, même lorsqu’elles ne contiennent aucune
              planète.
            </p>

            <p>
              Pour interpréter une Maison 3 vide, observez le
              signe situé sur sa cuspide, puis identifiez la
              planète qui gouverne ce signe.
            </p>

            <p>
              La position de cette planète maîtresse indique
              où et comment vos capacités de communication,
              d’apprentissage et d’adaptation cherchent à se
              développer.
            </p>
          </section>

          <section>
            <h2>
              La planète maîtresse de la Maison 3
            </h2>

            <p>
              La planète maîtresse de la Maison 3 est celle
              qui gouverne le signe placé au début de cette
              maison.
            </p>

            <p>
              Sa position par signe, par maison et par aspect
              apporte des informations importantes sur votre
              manière de penser, d’apprendre et de transmettre
              vos idées.
            </p>

            <div className="house-three-rulers-grid">
              <div className="house-three-ruler-card">
                <span>♈</span>
                <h3>Bélier</h3>
                <p>Mars</p>
              </div>

              <div className="house-three-ruler-card">
                <span>♉</span>
                <h3>Taureau</h3>
                <p>Vénus</p>
              </div>

              <div className="house-three-ruler-card">
                <span>♊</span>
                <h3>Gémeaux</h3>
                <p>Mercure</p>
              </div>

              <div className="house-three-ruler-card">
                <span>♋</span>
                <h3>Cancer</h3>
                <p>Lune</p>
              </div>

              <div className="house-three-ruler-card">
                <span>♌</span>
                <h3>Lion</h3>
                <p>Soleil</p>
              </div>

              <div className="house-three-ruler-card">
                <span>♍</span>
                <h3>Vierge</h3>
                <p>Mercure</p>
              </div>

              <div className="house-three-ruler-card">
                <span>♎</span>
                <h3>Balance</h3>
                <p>Vénus</p>
              </div>

              <div className="house-three-ruler-card">
                <span>♏</span>
                <h3>Scorpion</h3>
                <p>Pluton et Mars</p>
              </div>

              <div className="house-three-ruler-card">
                <span>♐</span>
                <h3>Sagittaire</h3>
                <p>Jupiter</p>
              </div>

              <div className="house-three-ruler-card">
                <span>♑</span>
                <h3>Capricorne</h3>
                <p>Saturne</p>
              </div>

              <div className="house-three-ruler-card">
                <span>♒</span>
                <h3>Verseau</h3>
                <p>Uranus et Saturne</p>
              </div>

              <div className="house-three-ruler-card">
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

            <div className="house-three-comparison-grid">
              <article className="house-three-comparison-card">
                <span className="house-three-kicker">
                  Maison 3
                </span>

                <h3>
                  Les informations quotidiennes
                </h3>

                <p>
                  La Maison 3 représente l’apprentissage de
                  base, les faits, les échanges, l’entourage
                  proche et les déplacements courts.
                </p>
              </article>

              <article className="house-three-comparison-card">
                <span className="house-three-kicker">
                  Maison 9
                </span>

                <h3>
                  La compréhension globale
                </h3>

                <p>
                  La Maison 9 représente les études
                  supérieures, les croyances, la philosophie,
                  les voyages lointains et la recherche de
                  sens.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 3 dans votre évolution personnelle
            </h2>

            <p>
              La Maison 3 vous invite à développer une pensée
              souple, curieuse et consciente. Elle vous apprend
              à observer votre environnement sans accepter
              automatiquement toutes les informations reçues.
            </p>

            <p>
              Elle vous encourage également à exprimer vos
              idées avec clarté, à écouter les autres et à
              adapter votre communication selon les situations.
            </p>

            <p>
              Son évolution consiste souvent à trouver un
              équilibre entre la curiosité et l’approfondissement,
              entre la rapidité mentale et la réflexion.
            </p>
          </section>

          <section>
            <h2>
              Comment interpréter votre Maison 3 ?
            </h2>

            <div className="house-three-steps">
              <article className="house-three-step-card">
                <span>1</span>

                <div>
                  <h3>
                    Identifiez le signe de la Maison 3
                  </h3>

                  <p>
                    Il décrit votre style naturel de pensée,
                    d’apprentissage et de communication.
                  </p>
                </div>
              </article>

              <article className="house-three-step-card">
                <span>2</span>

                <div>
                  <h3>
                    Repérez sa planète maîtresse
                  </h3>

                  <p>
                    Sa position révèle où votre curiosité et
                    vos capacités de transmission cherchent à
                    s’exprimer.
                  </p>
                </div>
              </article>

              <article className="house-three-step-card">
                <span>3</span>

                <div>
                  <h3>
                    Observez les planètes présentes
                  </h3>

                  <p>
                    Chaque planète modifie votre manière de
                    parler, de penser, d’apprendre et
                    d’interagir avec l’entourage.
                  </p>
                </div>
              </article>

              <article className="house-three-step-card">
                <span>4</span>

                <div>
                  <h3>
                    Analysez les aspects
                  </h3>

                  <p>
                    Les aspects précisent les facilités, les
                    tensions et les apprentissages liés à la
                    communication.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 3 dans votre thème natal
            </h2>

            <p>
              La Maison 3 doit être analysée avec l’ensemble
              du thème natal. Son signe, les planètes qu’elle
              contient, sa planète maîtresse et ses aspects
              permettent d’en préciser la signification.
            </p>

            <p>
              Cette analyse peut vous aider à comprendre votre
              façon d’apprendre, vos habitudes mentales, votre
              style de communication et la place de votre
              entourage dans votre parcours.
            </p>

            <div className="house-three-cta-card">
              <div>
                <span className="house-three-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Quel signe et quelles planètes se trouvent dans votre Maison 3 ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir vos maisons astrologiques, votre
                  Ascendant et les positions de vos planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="house-three-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="house-three-navigation">
            <span className="house-three-kicker">
              Les maisons astrologiques
            </span>

            <h2>
              Continuer votre exploration
            </h2>

            <div className="house-three-navigation-grid">
              <Link
                href="/astrologie/maisons/maison-2"
                className="house-three-navigation-card"
              >
                <span>Ⅱ</span>

                <div>
                  <h3>Maison 2</h3>

                  <p>
                    Argent, ressources, talents, valeurs et
                    sécurité personnelle.
                  </p>
                </div>
              </Link>

              <Link
                href="/astrologie/maisons"
                className="house-three-navigation-card"
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
                href="/astrologie/maisons/maison-4"
                className="house-three-navigation-card"
              >
                <span>Ⅳ</span>

                <div>
                  <h3>Maison 4</h3>

                  <p>
                    Foyer, famille, racines, enfance et
                    sécurité émotionnelle.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <section className="house-three-faq">
            <span className="house-three-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur la Maison 3
            </h2>

            <div className="house-three-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="house-three-faq-item"
                  key={item.question}
                >
                  <summary>{item.question}</summary>

                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="house-three-disclaimer">
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
