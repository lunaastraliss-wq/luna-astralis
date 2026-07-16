import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/maisons/maison-6";

export const metadata: Metadata = {
  title:
    "Maison 6 en astrologie : travail, habitudes et santé | Luna Astralis",

  description:
    "Découvrez la Maison 6 en astrologie : travail quotidien, habitudes, organisation, service, santé symbolique, collègues, animaux et planètes en Maison 6.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Maison 6 en astrologie : travail, habitudes, service et santé",
    description:
      "Guide complet de la Maison 6 : travail quotidien, routines, organisation, responsabilités, collègues, bien-être, animaux et planètes présentes dans cette maison.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "La Maison 6 en astrologie | Luna Astralis",
    description:
      "Découvrez ce que la Maison 6 révèle sur votre travail quotidien, vos habitudes, votre organisation, votre service et votre équilibre de vie.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const HOUSE_TRAITS = [
  {
    title: "Votre quotidien",
    symbol: "Ⅵ",
    text:
      "La Maison 6 décrit les habitudes, les tâches et les responsabilités qui structurent votre vie de tous les jours. Elle montre comment vous organisez votre temps et entretenez votre équilibre.",
  },
  {
    title: "Votre manière de travailler",
    symbol: "✦",
    text:
      "Cette maison représente le travail quotidien, les méthodes, les collègues et la manière dont vous rendez vos compétences utiles dans un environnement concret.",
  },
  {
    title: "Votre hygiène de vie",
    symbol: "☿",
    text:
      "La Maison 6 concerne symboliquement les routines liées au bien-être, au repos, à l’alimentation, au mouvement et à la capacité d’écouter les besoins du corps.",
  },
];

const HOUSE_STRENGTHS = [
  "Sens de l’organisation",
  "Discipline quotidienne",
  "Capacité à rendre service",
  "Fiabilité",
  "Souci du détail",
  "Amélioration continue",
];

const HOUSE_CHALLENGES = [
  "Perfectionnisme",
  "Surcharge de travail",
  "Difficulté à déléguer",
  "Critique excessive",
  "Rigidité dans les habitudes",
  "Tendance à négliger le repos",
];

const PLANETS_IN_HOUSE = [
  {
    name: "Soleil",
    symbol: "☀",
    text:
      "Le Soleil en Maison 6 donne un fort besoin de se sentir utile, compétent et reconnu dans le travail quotidien. L’identité peut se construire autour du service, de l’organisation et de l’amélioration des méthodes.",
  },
  {
    name: "Lune",
    symbol: "☽",
    text:
      "La Lune en Maison 6 relie les émotions aux habitudes et à l’environnement de travail. La personne peut avoir besoin de routines rassurantes et d’un climat professionnel humain pour préserver son équilibre.",
  },
  {
    name: "Mercure",
    symbol: "☿",
    text:
      "Mercure en Maison 6 favorise l’analyse, l’organisation, la communication professionnelle et la gestion de plusieurs tâches. L’esprit cherche constamment à améliorer les systèmes et les méthodes.",
  },
  {
    name: "Vénus",
    symbol: "♀",
    text:
      "Vénus en Maison 6 apporte diplomatie, sens esthétique et recherche d’harmonie dans le quotidien. La personne peut apprécier un environnement de travail agréable et des relations respectueuses avec ses collègues.",
  },
  {
    name: "Mars",
    symbol: "♂",
    text:
      "Mars en Maison 6 donne beaucoup d’énergie dans le travail et les activités quotidiennes. La personne agit rapidement, mais doit éviter la précipitation, la fatigue excessive ou les tensions professionnelles.",
  },
  {
    name: "Jupiter",
    symbol: "♃",
    text:
      "Jupiter en Maison 6 peut amplifier les possibilités professionnelles, le désir d’aider et la confiance dans ses compétences. Il faut toutefois éviter d’accepter trop de responsabilités à la fois.",
  },
  {
    name: "Saturne",
    symbol: "♄",
    text:
      "Saturne en Maison 6 favorise la discipline, la patience et la maîtrise des méthodes. Il peut aussi créer un sentiment de lourdeur ou d’exigence, mais permet de construire des habitudes durables.",
  },
  {
    name: "Uranus",
    symbol: "♅",
    text:
      "Uranus en Maison 6 donne un besoin de liberté, d’innovation et de variété dans le travail quotidien. La personne supporte difficilement les routines trop rigides et cherche des méthodes originales.",
  },
  {
    name: "Neptune",
    symbol: "♆",
    text:
      "Neptune en Maison 6 apporte intuition, sensibilité et compassion dans le service. Une organisation claire devient importante afin d’éviter la confusion, la dispersion ou la difficulté à poser des limites.",
  },
  {
    name: "Pluton",
    symbol: "♇",
    text:
      "Pluton en Maison 6 transforme profondément le rapport au travail, aux habitudes et au contrôle. La personne peut développer une grande capacité à analyser, réparer et réorganiser les situations complexes.",
  },
];

const SIGNS_IN_HOUSE = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "La Maison 6 en Bélier donne une approche énergique, rapide et indépendante du travail. La personne aime agir immédiatement et préfère les tâches qui demandent initiative et mouvement.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "La Maison 6 en Taureau recherche des habitudes stables, un rythme régulier et un environnement professionnel sécurisant. La personne travaille avec patience et constance.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "La Maison 6 en Gémeaux favorise la polyvalence, la communication et la variété dans le quotidien. La personne peut avoir besoin de plusieurs tâches ou projets pour rester stimulée.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "La Maison 6 en Cancer apporte sensibilité et besoin de sécurité dans le travail. La personne peut prendre soin des autres et accorder une grande importance à l’ambiance de son environnement.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "La Maison 6 en Lion cherche à exprimer créativité, leadership et fierté dans le travail quotidien. La personne a besoin de sentir que ses efforts sont reconnus.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "La Maison 6 en Vierge renforce l’organisation, l’analyse et le sens du détail. La personne cherche à améliorer les méthodes et à produire un travail précis et utile.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "La Maison 6 en Balance favorise la coopération, la diplomatie et la recherche d’un environnement harmonieux. La personne travaille mieux lorsque les relations sont équilibrées.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "La Maison 6 en Scorpion donne une grande intensité dans le travail et les habitudes. La personne peut exceller dans l’analyse, la recherche et la résolution de problèmes complexes.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "La Maison 6 en Sagittaire recherche mouvement, liberté et sens dans le quotidien. La personne peut apprécier les métiers liés à l’enseignement, au voyage ou à l’expansion des connaissances.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "La Maison 6 en Capricorne donne discipline, responsabilité et endurance. La personne travaille avec sérieux et cherche à construire des habitudes solides et efficaces.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "La Maison 6 en Verseau favorise l’innovation, la technologie et les méthodes non conventionnelles. La personne a besoin d’autonomie et de liberté dans l’organisation de son travail.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "La Maison 6 en Poissons apporte intuition, compassion et souplesse dans le service. La personne doit toutefois établir des limites et des routines suffisamment claires.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente la Maison 6 en astrologie ?",
    answer:
      "La Maison 6 représente le travail quotidien, les habitudes, les routines, l’organisation, le service, les collègues, les responsabilités, les animaux domestiques et l’équilibre de vie.",
  },
  {
    question:
      "La Maison 6 représente-t-elle la santé ?",
    answer:
      "La Maison 6 est traditionnellement associée aux habitudes de vie et au rapport au corps. Son interprétation reste symbolique et ne remplace jamais une évaluation ou un conseil médical.",
  },
  {
    question:
      "Que signifie une planète en Maison 6 ?",
    answer:
      "Une planète en Maison 6 influence la manière de travailler, de s’organiser, de rendre service et de gérer les habitudes quotidiennes. Elle peut aussi montrer une énergie importante dans l’environnement professionnel.",
  },
  {
    question:
      "Que signifie une Maison 6 vide ?",
    answer:
      "Une Maison 6 vide ne signifie pas une absence de travail, de routines ou de responsabilités. Il faut observer le signe placé sur sa cuspide, sa planète maîtresse et les aspects reçus par cette planète.",
  },
  {
    question:
      "Quelle différence existe entre la Maison 6 et la Maison 10 ?",
    answer:
      "La Maison 6 représente les tâches, les méthodes et le travail quotidien. La Maison 10 représente la carrière, la réputation, les ambitions et la place occupée dans la société.",
  },
  {
    question:
      "Pourquoi les animaux sont-ils associés à la Maison 6 ?",
    answer:
      "La Maison 6 est traditionnellement reliée aux petits animaux et aux animaux domestiques, notamment parce qu’elle concerne les soins, les responsabilités quotidiennes et les êtres dont on s’occupe.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Maison 6 en astrologie : travail, habitudes, service et équilibre",
  description:
    "Guide complet consacré à la Maison 6, au travail quotidien, aux routines, à l’organisation, au service, aux animaux et aux planètes présentes dans cette maison.",
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
      name: "Maison 6",
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

export default function MaisonSixAstrologiePage() {
  return (
    <div className="house-six-page">
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

      <main className="house-six-wrap">
        <section className="house-six-hero">
          <div className="house-six-badge">
            Ⅵ Sixième maison astrologique
          </div>

          <h1>
            La Maison 6 en astrologie
          </h1>

          <p className="house-six-hero-lead">
            La Maison 6 représente votre travail quotidien,
            vos habitudes, votre organisation, votre sens du
            service et la manière dont vous entretenez votre
            équilibre au fil des jours.
          </p>

          <div className="house-six-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="house-six-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification-maison-6"
              className="house-six-secondary-button"
            >
              Découvrir la Maison 6
            </a>
          </div>
        </section>

        <article className="house-six-content">
          <section id="signification-maison-6">
            <span className="house-six-kicker">
              Signification de la Maison 6
            </span>

            <h2>
              Que représente la Maison 6 ?
            </h2>

            <p>
              La Maison 6 représente les habitudes, les
              responsabilités et les tâches qui structurent
              votre vie quotidienne.
            </p>

            <p>
              Elle décrit votre manière de travailler, de
              vous organiser, de résoudre les problèmes et de
              rendre vos compétences utiles.
            </p>

            <p>
              Cette maison concerne aussi les collègues, les
              méthodes de travail, le service, les petites
              obligations et les gestes répétés qui permettent
              de maintenir un équilibre.
            </p>

            <p>
              Elle rappelle qu’une vie stable se construit
              souvent par des actions simples, régulières et
              adaptées aux besoins réels.
            </p>
          </section>

          <section>
            <h2>
              Les grands domaines de la Maison 6
            </h2>

            <div className="house-six-info-grid">
              {HOUSE_TRAITS.map((item) => (
                <article
                  className="house-six-info-card"
                  key={item.title}
                >
                  <span className="house-six-card-icon">
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
              Travail quotidien et responsabilités
            </h2>

            <p>
              La Maison 6 décrit moins la carrière publique
              que le travail concret accompli chaque jour.
              Elle montre votre manière d’exécuter les tâches,
              de respecter les échéances et de collaborer.
            </p>

            <p>
              Le signe situé sur sa cuspide révèle le style
              que vous adoptez dans cet environnement. Les
              planètes présentes montrent les énergies qui
              deviennent particulièrement importantes dans le
              quotidien professionnel.
            </p>

            <p>
              Une Maison 6 active peut donner un grand besoin
              d’être productif, utile ou constamment occupé.
              Son défi consiste alors à ne pas confondre
              valeur personnelle et quantité de travail.
            </p>

            <div className="house-six-highlight-card">
              <div className="house-six-highlight-symbol">
                Ⅵ
              </div>

              <div>
                <h3>
                  Les petites habitudes créent les grands résultats
                </h3>

                <p>
                  La Maison 6 vous invite à observer les gestes
                  répétés qui soutiennent réellement votre vie.
                  Une routine simple et cohérente peut parfois
                  être plus efficace qu’un effort intense mais
                  impossible à maintenir.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Organisation, méthodes et efficacité
            </h2>

            <p>
              La Maison 6 décrit votre manière d’organiser le
              temps, les tâches et les responsabilités.
            </p>

            <p>
              Certaines personnes ont besoin de règles
              précises, d’autres préfèrent une structure plus
              flexible. Le thème natal permet d’identifier les
              méthodes qui correspondent le mieux à votre
              fonctionnement.
            </p>

            <p>
              Cette maison vous invite à améliorer vos
              systèmes sans tomber dans une recherche de
              perfection impossible à atteindre.
            </p>
          </section>

          <section>
            <h2>
              Service, utilité et contribution
            </h2>

            <p>
              La Maison 6 est associée au service, c’est-à-dire
              à la manière dont vous utilisez vos compétences
              pour répondre à un besoin concret.
            </p>

            <p>
              Servir ne signifie pas s’effacer ou accepter
              toutes les demandes. Une expression équilibrée
              de cette maison consiste à aider tout en
              respectant ses limites.
            </p>

            <p>
              Elle montre aussi les domaines dans lesquels vous
              pouvez développer une expertise grâce à la
              pratique et à l’attention portée aux détails.
            </p>
          </section>

          <section>
            <h2>
              Habitudes de vie et équilibre du corps
            </h2>

            <p>
              En astrologie, la Maison 6 est reliée
              symboliquement aux habitudes qui influencent le
              bien-être : repos, alimentation, mouvement,
              rythme de travail et gestion du stress.
            </p>

            <p>
              Elle ne permet pas d’établir un diagnostic. Elle
              peut plutôt servir à réfléchir aux comportements
              quotidiens qui soutiennent ou déséquilibrent
              votre énergie.
            </p>

            <p>
              Son message principal consiste à écouter les
              signaux du corps et à construire des routines
              réalistes, adaptées et durables.
            </p>
          </section>

          <section>
            <h2>
              Collègues et environnement professionnel
            </h2>

            <p>
              La Maison 6 représente les collègues, les équipes
              de proximité et les relations créées dans le
              travail quotidien.
            </p>

            <p>
              Elle montre la manière dont vous coopérez,
              communiquez et réagissez aux attentes d’un
              environnement professionnel.
            </p>

            <p>
              Les planètes présentes peuvent révéler que ces
              relations sont harmonieuses, exigeantes,
              stimulantes ou particulièrement transformatrices.
            </p>
          </section>

          <section>
            <h2>
              Les animaux domestiques
            </h2>

            <p>
              La Maison 6 est traditionnellement associée aux
              petits animaux et aux animaux domestiques.
            </p>

            <p>
              Ce lien peut représenter les soins quotidiens,
              les responsabilités et la relation avec les êtres
              qui dépendent de votre attention.
            </p>

            <p>
              Une Maison 6 importante peut parfois montrer une
              place particulière accordée aux animaux dans la
              vie quotidienne ou professionnelle.
            </p>
          </section>

          <section>
            <h2>
              Les forces et les défis de la Maison 6
            </h2>

            <div className="house-six-strengths-grid">
              <div className="house-six-list-card">
                <span className="house-six-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Une Maison 6 équilibrée
                </h3>

                <ul>
                  {HOUSE_STRENGTHS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="house-six-list-card">
                <span className="house-six-kicker">
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
              Les planètes en Maison 6
            </h2>

            <p>
              Une planète présente en Maison 6 influence le
              travail quotidien, les routines, l’organisation
              et la manière de rendre service.
            </p>

            <p>
              Son énergie peut devenir très visible dans les
              méthodes, les relations professionnelles et les
              habitudes répétées.
            </p>

            <div className="house-six-planets-grid">
              {PLANETS_IN_HOUSE.map((planet) => (
                <article
                  className="house-six-planet-card"
                  key={planet.name}
                >
                  <div className="house-six-planet-symbol">
                    {planet.symbol}
                  </div>

                  <div>
                    <h3>
                      {planet.name} en Maison 6
                    </h3>

                    <p>{planet.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Les douze signes dans la Maison 6
            </h2>

            <p>
              Le signe placé au début de la Maison 6 décrit
              votre approche du travail, des responsabilités,
              des habitudes et de l’organisation.
            </p>

            <p>
              Il montre aussi les qualités que vous pouvez
              développer pour créer un quotidien plus stable
              et mieux adapté à vos besoins.
            </p>

            <div className="house-six-signs-grid">
              {SIGNS_IN_HOUSE.map((item) => (
                <article
                  className="house-six-sign-card"
                  key={item.sign}
                >
                  <div className="house-six-sign-symbol">
                    {item.symbol}
                  </div>

                  <div>
                    <h3>
                      Maison 6 en {item.sign}
                    </h3>

                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Maison 6 vide : que signifie-t-elle ?
            </h2>

            <p>
              Une Maison 6 vide ne signifie pas une absence de
              travail, d’habitudes, de collègues ou de
              responsabilités.
            </p>

            <p>
              Toutes les maisons restent actives. Il faut
              observer le signe placé sur la cuspide de la
              Maison 6 et sa planète maîtresse.
            </p>

            <p>
              La position de cette planète indique comment et
              dans quel domaine les thèmes du quotidien, du
              service et de l’organisation cherchent à
              s’exprimer.
            </p>
          </section>

          <section>
            <h2>
              La planète maîtresse de la Maison 6
            </h2>

            <p>
              La planète maîtresse de la Maison 6 est celle qui
              gouverne le signe placé au début de cette maison.
            </p>

            <p>
              Sa position par signe, par maison et par aspect
              apporte des informations sur vos méthodes, vos
              habitudes, vos responsabilités et votre manière
              de travailler.
            </p>

            <div className="house-six-rulers-grid">
              <div className="house-six-ruler-card">
                <span>♈</span>
                <h3>Bélier</h3>
                <p>Mars</p>
              </div>

              <div className="house-six-ruler-card">
                <span>♉</span>
                <h3>Taureau</h3>
                <p>Vénus</p>
              </div>

              <div className="house-six-ruler-card">
                <span>♊</span>
                <h3>Gémeaux</h3>
                <p>Mercure</p>
              </div>

              <div className="house-six-ruler-card">
                <span>♋</span>
                <h3>Cancer</h3>
                <p>Lune</p>
              </div>

              <div className="house-six-ruler-card">
                <span>♌</span>
                <h3>Lion</h3>
                <p>Soleil</p>
              </div>

              <div className="house-six-ruler-card">
                <span>♍</span>
                <h3>Vierge</h3>
                <p>Mercure</p>
              </div>

              <div className="house-six-ruler-card">
                <span>♎</span>
                <h3>Balance</h3>
                <p>Vénus</p>
              </div>

              <div className="house-six-ruler-card">
                <span>♏</span>
                <h3>Scorpion</h3>
                <p>Pluton et Mars</p>
              </div>

              <div className="house-six-ruler-card">
                <span>♐</span>
                <h3>Sagittaire</h3>
                <p>Jupiter</p>
              </div>

              <div className="house-six-ruler-card">
                <span>♑</span>
                <h3>Capricorne</h3>
                <p>Saturne</p>
              </div>

              <div className="house-six-ruler-card">
                <span>♒</span>
                <h3>Verseau</h3>
                <p>Uranus et Saturne</p>
              </div>

              <div className="house-six-ruler-card">
                <span>♓</span>
                <h3>Poissons</h3>
                <p>Neptune et Jupiter</p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Maison 6 et Maison 12 : quelle différence ?
            </h2>

            <div className="house-six-comparison-grid">
              <article className="house-six-comparison-card">
                <span className="house-six-kicker">
                  Maison 6
                </span>

                <h3>
                  Le quotidien visible
                </h3>

                <p>
                  La Maison 6 représente les tâches, les
                  habitudes, l’organisation, le service et le
                  travail concret.
                </p>
              </article>

              <article className="house-six-comparison-card">
                <span className="house-six-kicker">
                  Maison 12
                </span>

                <h3>
                  Le monde intérieur invisible
                </h3>

                <p>
                  La Maison 12 représente le retrait,
                  l’inconscient, la solitude, les fins de cycle
                  et les réalités plus difficiles à saisir.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 6 dans votre évolution personnelle
            </h2>

            <p>
              La Maison 6 vous invite à transformer vos bonnes
              intentions en actions régulières.
            </p>

            <p>
              Elle vous encourage à développer des méthodes
              efficaces sans tomber dans le perfectionnisme ou
              l’épuisement.
            </p>

            <p>
              Son évolution consiste à servir, travailler et
              progresser tout en respectant vos limites et
              votre besoin de récupération.
            </p>
          </section>

          <section>
            <h2>
              Comment interpréter votre Maison 6 ?
            </h2>

            <div className="house-six-steps">
              <article className="house-six-step-card">
                <span>1</span>

                <div>
                  <h3>
                    Identifiez le signe de la Maison 6
                  </h3>

                  <p>
                    Il décrit votre style de travail, vos
                    habitudes et votre approche de
                    l’organisation.
                  </p>
                </div>
              </article>

              <article className="house-six-step-card">
                <span>2</span>

                <div>
                  <h3>
                    Repérez sa planète maîtresse
                  </h3>

                  <p>
                    Sa position montre où les thèmes du
                    service, du travail et des routines
                    cherchent à s’exprimer.
                  </p>
                </div>
              </article>

              <article className="house-six-step-card">
                <span>3</span>

                <div>
                  <h3>
                    Observez les planètes présentes
                  </h3>

                  <p>
                    Chaque planète influence les méthodes, les
                    responsabilités et l’environnement
                    professionnel.
                  </p>
                </div>
              </article>

              <article className="house-six-step-card">
                <span>4</span>

                <div>
                  <h3>
                    Analysez les aspects
                  </h3>

                  <p>
                    Les aspects précisent les forces, les
                    tensions et les apprentissages liés au
                    quotidien.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 6 dans votre thème natal
            </h2>

            <p>
              La Maison 6 doit être interprétée avec
              l’ensemble du thème natal. Son signe, sa planète
              maîtresse, les planètes présentes et leurs
              aspects précisent sa signification.
            </p>

            <p>
              Cette analyse peut vous aider à comprendre vos
              habitudes, vos méthodes de travail, votre rapport
              aux responsabilités et les routines qui vous
              conviennent le mieux.
            </p>

            <div className="house-six-cta-card">
              <div>
                <span className="house-six-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Quel signe et quelles planètes se trouvent dans votre Maison 6 ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir vos maisons astrologiques, votre
                  Ascendant et les positions de vos planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="house-six-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="house-six-navigation">
            <span className="house-six-kicker">
              Les maisons astrologiques
            </span>

            <h2>
              Continuer votre exploration
            </h2>

            <div className="house-six-navigation-grid">
              <Link
                href="/astrologie/maisons/maison-5"
                className="house-six-navigation-card"
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

              <Link
                href="/astrologie/maisons"
                className="house-six-navigation-card"
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
                href="/astrologie/maisons/maison-7"
                className="house-six-navigation-card"
              >
                <span>Ⅶ</span>

                <div>
                  <h3>Maison 7</h3>

                  <p>
                    Relations, couple, partenariats, contrats
                    et Descendant.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <section className="house-six-faq">
            <span className="house-six-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur la Maison 6
            </h2>

            <div className="house-six-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="house-six-faq-item"
                  key={item.question}
                >
                  <summary>{item.question}</summary>

                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="house-six-disclaimer">
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
