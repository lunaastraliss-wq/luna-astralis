import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/maisons/maison-5";

export const metadata: Metadata = {
  title:
    "Maison 5 en astrologie : amour, créativité et enfants | Luna Astralis",

  description:
    "Découvrez la Maison 5 en astrologie : créativité, amour, plaisir, enfants, loisirs, expression personnelle, romance et planètes en Maison 5.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Maison 5 en astrologie : créativité, amour, plaisir et enfants",
    description:
      "Guide complet de la Maison 5 : créativité, romance, passions, loisirs, enfants, expression personnelle et planètes présentes dans cette maison.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "La Maison 5 en astrologie | Luna Astralis",
    description:
      "Découvrez ce que la Maison 5 révèle sur votre créativité, votre vie amoureuse, vos passions, vos plaisirs et votre expression personnelle.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const HOUSE_TRAITS = [
  {
    title: "Votre créativité",
    symbol: "✦",
    text:
      "La Maison 5 décrit votre manière de créer, d’inventer et de donner une forme personnelle à ce qui vous inspire. Elle révèle les activités qui vous permettent d’exprimer votre individualité.",
  },
  {
    title: "Votre vie amoureuse",
    symbol: "♡",
    text:
      "Cette maison représente la romance, la séduction, les rencontres et le plaisir amoureux. Elle montre la manière dont vous exprimez votre désir et vivez les élans du cœur.",
  },
  {
    title: "Votre joie de vivre",
    symbol: "Ⅴ",
    text:
      "La Maison 5 concerne les loisirs, le jeu, les passions et les expériences qui réveillent votre enthousiasme. Elle indique ce qui vous aide à retrouver spontanéité et plaisir.",
  },
];

const HOUSE_STRENGTHS = [
  "Créativité",
  "Joie de vivre",
  "Confiance personnelle",
  "Capacité à inspirer",
  "Expression des talents",
  "Spontanéité",
];

const HOUSE_CHALLENGES = [
  "Besoin excessif d’attention",
  "Dramatisation",
  "Recherche constante de validation",
  "Difficulté à accepter les limites",
  "Prise de risques impulsive",
  "Tendance à confondre amour et admiration",
];

const PLANETS_IN_HOUSE = [
  {
    name: "Soleil",
    symbol: "☀",
    text:
      "Le Soleil en Maison 5 renforce le besoin de créer, de rayonner et d’exprimer son individualité. La personne peut posséder une présence chaleureuse, un grand désir d’être reconnue et un lien important avec les projets créatifs.",
  },
  {
    name: "Lune",
    symbol: "☽",
    text:
      "La Lune en Maison 5 relie les émotions au plaisir, à la créativité et à l’amour. La personne peut avoir besoin de créer, d’aimer ou de s’occuper d’enfants pour retrouver son équilibre émotionnel.",
  },
  {
    name: "Mercure",
    symbol: "☿",
    text:
      "Mercure en Maison 5 favorise l’écriture, les jeux intellectuels, l’humour, l’enseignement et la créativité verbale. La personne peut aimer raconter, inventer et partager ses idées avec enthousiasme.",
  },
  {
    name: "Vénus",
    symbol: "♀",
    text:
      "Vénus en Maison 5 accentue le romantisme, le charme, le plaisir et les talents artistiques. La personne recherche généralement des relations affectueuses, inspirantes et riches en beauté.",
  },
  {
    name: "Mars",
    symbol: "♂",
    text:
      "Mars en Maison 5 apporte passion, audace, énergie créative et goût de la compétition. La personne peut vivre ses amours intensément et prendre rapidement des initiatives dans ses loisirs ou ses projets.",
  },
  {
    name: "Jupiter",
    symbol: "♃",
    text:
      "Jupiter en Maison 5 amplifie la créativité, la générosité et la confiance. La personne peut aimer enseigner, divertir, voyager, créer ou partager sa joie avec les autres.",
  },
  {
    name: "Saturne",
    symbol: "♄",
    text:
      "Saturne en Maison 5 peut rendre l’expression personnelle plus prudente ou exigeante. Avec le temps, il favorise une créativité disciplinée, durable et capable de produire des résultats solides.",
  },
  {
    name: "Uranus",
    symbol: "♅",
    text:
      "Uranus en Maison 5 apporte originalité, indépendance et imprévisibilité dans la créativité et la vie amoureuse. La personne recherche des expériences différentes et refuse souvent les modèles conventionnels.",
  },
  {
    name: "Neptune",
    symbol: "♆",
    text:
      "Neptune en Maison 5 apporte imagination, romantisme et inspiration artistique. La personne peut idéaliser l’amour ou se perdre dans ses rêves, mais possède souvent une grande sensibilité créative.",
  },
  {
    name: "Pluton",
    symbol: "♇",
    text:
      "Pluton en Maison 5 donne une créativité intense et une vie affective profondément transformatrice. Les passions, les amours et les projets personnels peuvent provoquer d’importantes remises en question.",
  },
];

const SIGNS_IN_HOUSE = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "La Maison 5 en Bélier donne une créativité spontanée, audacieuse et dynamique. La personne recherche l’excitation, les défis et les expériences qui lui permettent d’agir librement.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "La Maison 5 en Taureau favorise une créativité sensuelle, patiente et concrète. La personne apprécie les plaisirs simples, l’art, la nature, la musique et les relations stables.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "La Maison 5 en Gémeaux stimule l’humour, l’écriture, la parole et la curiosité. La personne aime varier ses loisirs, découvrir de nouvelles idées et vivre des échanges stimulants.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "La Maison 5 en Cancer donne une créativité sensible, intuitive et nourrie par les émotions. La famille, les enfants, les souvenirs et le foyer peuvent devenir de grandes sources d’inspiration.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "La Maison 5 en Lion renforce le besoin de rayonner, de créer et d’être reconnu. La personne possède souvent une expression chaleureuse, théâtrale et généreuse.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "La Maison 5 en Vierge donne une créativité précise, utile et travaillée. La personne peut développer ses talents grâce à la pratique, à la discipline et au souci du détail.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "La Maison 5 en Balance favorise le romantisme, la beauté, l’art et la séduction. La personne aime créer dans un climat harmonieux et partager ses plaisirs avec les autres.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "La Maison 5 en Scorpion donne une créativité intense, passionnée et profonde. Les amours, les plaisirs et les projets personnels sont vécus avec beaucoup d’engagement.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "La Maison 5 en Sagittaire favorise l’aventure, la spontanéité et l’enthousiasme. La personne aime explorer, voyager, apprendre et transmettre sa vision avec générosité.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "La Maison 5 en Capricorne donne une expression plus maîtrisée, ambitieuse et structurée. La personne développe souvent ses talents avec patience et sérieux.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "La Maison 5 en Verseau apporte originalité, liberté et créativité non conventionnelle. La personne recherche des loisirs différents et des relations laissant beaucoup d’espace.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "La Maison 5 en Poissons donne une grande imagination, une sensibilité artistique et un romantisme profond. La musique, l’image, l’écriture et les rêves peuvent devenir des sources majeures d’expression.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente la Maison 5 en astrologie ?",
    answer:
      "La Maison 5 représente la créativité, l’expression personnelle, les loisirs, le plaisir, la romance, la séduction, les enfants, les passions et les projets du cœur.",
  },
  {
    question:
      "La Maison 5 représente-t-elle les relations amoureuses ?",
    answer:
      "La Maison 5 représente surtout la romance, la séduction, les rencontres et le plaisir amoureux. Les relations engagées et les partenariats durables sont davantage associés à la Maison 7.",
  },
  {
    question:
      "Que signifie une planète en Maison 5 ?",
    answer:
      "Une planète en Maison 5 influence la créativité, les plaisirs, la vie amoureuse, les loisirs et la manière d’exprimer ses talents. Son énergie devient importante dans les projets personnels.",
  },
  {
    question:
      "Que signifie une Maison 5 vide ?",
    answer:
      "Une Maison 5 vide ne signifie pas une absence de créativité, d’amour ou d’enfants. Il faut analyser le signe placé sur sa cuspide, sa planète maîtresse et les aspects reçus par cette planète.",
  },
  {
    question:
      "Quelle différence existe entre la Maison 5 et la Maison 11 ?",
    answer:
      "La Maison 5 concerne l’expression personnelle, les créations et les plaisirs individuels. La Maison 11 concerne les groupes, les amitiés, les projets collectifs et les objectifs tournés vers l’avenir.",
  },
  {
    question:
      "La Maison 5 parle-t-elle des enfants ?",
    answer:
      "Oui. En astrologie traditionnelle, la Maison 5 est associée aux enfants, à la parentalité créative et à la manière de transmettre sa joie, ses talents et son individualité.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Maison 5 en astrologie : créativité, amour, plaisir et enfants",
  description:
    "Guide complet consacré à la Maison 5, à la créativité, à l’amour, aux loisirs, aux passions, aux enfants et aux planètes présentes dans cette maison.",
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
      name: "Maison 5",
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

export default function MaisonCinqAstrologiePage() {
  return (
    <div className="house-five-page">
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

      <main className="house-five-wrap">
        <section className="house-five-hero">
          <div className="house-five-badge">
            Ⅴ Cinquième maison astrologique
          </div>

          <h1>
            La Maison 5 en astrologie
          </h1>

          <p className="house-five-hero-lead">
            La Maison 5 représente votre créativité, votre
            expression personnelle, vos amours, vos passions,
            vos loisirs, vos enfants et tout ce qui réveille
            votre joie de vivre.
          </p>

          <div className="house-five-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="house-five-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification-maison-5"
              className="house-five-secondary-button"
            >
              Découvrir la Maison 5
            </a>
          </div>
        </section>

        <article className="house-five-content">
          <section id="signification-maison-5">
            <span className="house-five-kicker">
              Signification de la Maison 5
            </span>

            <h2>
              Que représente la Maison 5 ?
            </h2>

            <p>
              La Maison 5 est la maison de la créativité, du
              plaisir et de l’expression personnelle. Elle
              décrit ce que vous créez lorsque vous vous
              sentez libre d’être pleinement vous-même.
            </p>

            <p>
              Elle concerne les loisirs, les passions, les
              talents, le jeu, la romance, la séduction et
              toutes les expériences qui réveillent votre
              enthousiasme.
            </p>

            <p>
              Cette maison montre également la manière dont
              vous cherchez à être reconnu pour ce que vous
              avez d’unique. Elle révèle les activités qui
              renforcent votre confiance et votre joie de
              vivre.
            </p>

            <p>
              La Maison 5 est aussi traditionnellement
              associée aux enfants, à la parentalité, aux
              projets créatifs et à ce que vous transmettez
              de vous-même au monde.
            </p>
          </section>

          <section>
            <h2>
              Les grands domaines de la Maison 5
            </h2>

            <div className="house-five-info-grid">
              {HOUSE_TRAITS.map((item) => (
                <article
                  className="house-five-info-card"
                  key={item.title}
                >
                  <span className="house-five-card-icon">
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
              Créativité et expression personnelle
            </h2>

            <p>
              La Maison 5 montre la manière dont vous exprimez
              votre créativité. Elle ne concerne pas seulement
              les arts : elle peut aussi représenter la façon
              dont vous inventez, entreprenez, enseignez,
              jouez, racontez ou transformez une idée en projet.
            </p>

            <p>
              Le signe situé au début de cette maison donne
              une couleur particulière à votre expression.
              Les planètes présentes indiquent les énergies
              que vous cherchez naturellement à partager.
            </p>

            <p>
              Une Maison 5 active peut donner un fort besoin
              de créer, de se produire, de transmettre ou de
              laisser une trace personnelle.
            </p>

            <div className="house-five-highlight-card">
              <div className="house-five-highlight-symbol">
                ✦
              </div>

              <div>
                <h3>
                  Créer, c’est révéler une partie de soi
                </h3>

                <p>
                  La Maison 5 vous invite à développer vos
                  talents sans attendre une validation
                  parfaite. Elle montre ce qui peut naître
                  lorsque vous vous autorisez à expérimenter,
                  à jouer et à exprimer votre personnalité.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              La Maison 5 en amour
            </h2>

            <p>
              La Maison 5 représente les débuts amoureux, la
              séduction, les rencontres, l’attirance et le
              plaisir de découvrir une autre personne.
            </p>

            <p>
              Elle décrit la manière dont vous flirtez, ce qui
              réveille votre désir et le type d’expériences
              romantiques qui stimulent votre enthousiasme.
            </p>

            <p>
              Contrairement à la Maison 7, qui concerne
              davantage l’engagement et les partenariats
              durables, la Maison 5 représente la spontanéité,
              le jeu et l’expression du désir amoureux.
            </p>
          </section>

          <section>
            <h2>
              Les enfants et la transmission
            </h2>

            <p>
              La Maison 5 est traditionnellement associée aux
              enfants. Elle peut décrire la manière dont vous
              vivez la parentalité, transmettez votre
              créativité et encouragez l’expression
              individuelle.
            </p>

            <p>
              Elle ne permet pas à elle seule de prédire le
              nombre d’enfants ou les événements liés à la
              parentalité. Son interprétation reste symbolique
              et dépend de l’ensemble du thème natal.
            </p>

            <p>
              Les enfants peuvent aussi symboliser les projets
              que vous créez, protégez et accompagnez jusqu’à
              ce qu’ils puissent se développer par eux-mêmes.
            </p>
          </section>

          <section>
            <h2>
              Loisirs, plaisir et joie de vivre
            </h2>

            <p>
              La Maison 5 révèle les activités qui vous
              permettent de retrouver votre enthousiasme et
              votre spontanéité.
            </p>

            <p>
              Elle concerne les loisirs, le sport, les jeux,
              les spectacles, les fêtes, les passions et les
              expériences vécues pour le plaisir plutôt que
              par obligation.
            </p>

            <p>
              Lorsque cette maison est négligée, la vie peut
              devenir trop sérieuse ou uniquement centrée sur
              les responsabilités. Elle rappelle l’importance
              de réserver une place à la joie et à la création.
            </p>
          </section>

          <section>
            <h2>
              Prise de risque et confiance personnelle
            </h2>

            <p>
              La Maison 5 peut également représenter la prise
              de risque, la compétition, les jeux de hasard et
              le désir de tenter sa chance.
            </p>

            <p>
              Une expression équilibrée favorise l’audace, la
              confiance et la capacité à suivre une inspiration.
              Une expression plus excessive peut conduire à
              rechercher constamment l’excitation ou la
              reconnaissance.
            </p>

            <p>
              Cette maison vous invite à distinguer les risques
              créatifs qui vous font grandir des décisions
              impulsives qui cherchent seulement une
              gratification immédiate.
            </p>
          </section>

          <section>
            <h2>
              Les forces et les défis de la Maison 5
            </h2>

            <div className="house-five-strengths-grid">
              <div className="house-five-list-card">
                <span className="house-five-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Une Maison 5 équilibrée
                </h3>

                <ul>
                  {HOUSE_STRENGTHS.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="house-five-list-card">
                <span className="house-five-kicker">
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
              Les planètes en Maison 5
            </h2>

            <p>
              Une planète présente en Maison 5 influence la
              créativité, la vie amoureuse, les plaisirs, les
              enfants et la manière d’exprimer ses talents.
            </p>

            <p>
              Son énergie devient souvent visible dans les
              projets personnels et les activités choisies
              librement.
            </p>

            <div className="house-five-planets-grid">
              {PLANETS_IN_HOUSE.map((planet) => (
                <article
                  className="house-five-planet-card"
                  key={planet.name}
                >
                  <div className="house-five-planet-symbol">
                    {planet.symbol}
                  </div>

                  <div>
                    <h3>
                      {planet.name} en Maison 5
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
              Les douze signes dans la Maison 5
            </h2>

            <p>
              Le signe placé au début de la Maison 5 décrit
              votre style créatif, votre manière de vivre le
              plaisir et votre approche des relations
              romantiques.
            </p>

            <p>
              Il révèle également les qualités que vous pouvez
              développer pour renforcer votre confiance et
              exprimer vos talents.
            </p>

            <div className="house-five-signs-grid">
              {SIGNS_IN_HOUSE.map((item) => (
                <article
                  className="house-five-sign-card"
                  key={item.sign}
                >
                  <div className="house-five-sign-symbol">
                    {item.symbol}
                  </div>

                  <div>
                    <h3>
                      Maison 5 en {item.sign}
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
              Maison 5 vide : que signifie-t-elle ?
            </h2>

            <p>
              Une Maison 5 vide ne signifie pas une absence de
              créativité, de plaisir, d’amour ou d’enfants.
            </p>

            <p>
              Une maison reste active même lorsqu’elle ne
              contient aucune planète. Il faut observer le
              signe placé sur sa cuspide et sa planète
              maîtresse.
            </p>

            <p>
              La position de cette planète montre comment vos
              talents, vos passions et votre expression
              personnelle cherchent à se manifester.
            </p>
          </section>

          <section>
            <h2>
              La planète maîtresse de la Maison 5
            </h2>

            <p>
              La planète maîtresse de la Maison 5 est celle
              qui gouverne le signe placé sur son point de
              départ.
            </p>

            <p>
              Sa position par signe, par maison et par aspect
              indique où vous cherchez à créer, à aimer et à
              développer vos talents.
            </p>

            <div className="house-five-rulers-grid">
              <div className="house-five-ruler-card">
                <span>♈</span>
                <h3>Bélier</h3>
                <p>Mars</p>
              </div>

              <div className="house-five-ruler-card">
                <span>♉</span>
                <h3>Taureau</h3>
                <p>Vénus</p>
              </div>

              <div className="house-five-ruler-card">
                <span>♊</span>
                <h3>Gémeaux</h3>
                <p>Mercure</p>
              </div>

              <div className="house-five-ruler-card">
                <span>♋</span>
                <h3>Cancer</h3>
                <p>Lune</p>
              </div>

              <div className="house-five-ruler-card">
                <span>♌</span>
                <h3>Lion</h3>
                <p>Soleil</p>
              </div>

              <div className="house-five-ruler-card">
                <span>♍</span>
                <h3>Vierge</h3>
                <p>Mercure</p>
              </div>

              <div className="house-five-ruler-card">
                <span>♎</span>
                <h3>Balance</h3>
                <p>Vénus</p>
              </div>

              <div className="house-five-ruler-card">
                <span>♏</span>
                <h3>Scorpion</h3>
                <p>Pluton et Mars</p>
              </div>

              <div className="house-five-ruler-card">
                <span>♐</span>
                <h3>Sagittaire</h3>
                <p>Jupiter</p>
              </div>

              <div className="house-five-ruler-card">
                <span>♑</span>
                <h3>Capricorne</h3>
                <p>Saturne</p>
              </div>

              <div className="house-five-ruler-card">
                <span>♒</span>
                <h3>Verseau</h3>
                <p>Uranus et Saturne</p>
              </div>

              <div className="house-five-ruler-card">
                <span>♓</span>
                <h3>Poissons</h3>
                <p>Neptune et Jupiter</p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Maison 5 et Maison 11 : quelle différence ?
            </h2>

            <div className="house-five-comparison-grid">
              <article className="house-five-comparison-card">
                <span className="house-five-kicker">
                  Maison 5
                </span>

                <h3>
                  Votre expression personnelle
                </h3>

                <p>
                  La Maison 5 représente vos créations, vos
                  plaisirs, vos talents, vos amours et les
                  projets qui portent votre signature.
                </p>
              </article>

              <article className="house-five-comparison-card">
                <span className="house-five-kicker">
                  Maison 11
                </span>

                <h3>
                  Votre contribution collective
                </h3>

                <p>
                  La Maison 11 représente les groupes, les
                  amitiés, les projets collectifs, les réseaux
                  et les objectifs tournés vers l’avenir.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 5 dans votre évolution personnelle
            </h2>

            <p>
              La Maison 5 vous invite à reconnaître que la
              créativité et le plaisir ne sont pas inutiles.
              Ils participent à votre équilibre et à votre
              développement personnel.
            </p>

            <p>
              Elle vous encourage à exprimer vos talents sans
              dépendre entièrement du regard ou de
              l’admiration des autres.
            </p>

            <p>
              Son évolution consiste à créer avec sincérité, à
              aimer avec générosité et à retrouver une joie
              qui vient de l’intérieur.
            </p>
          </section>

          <section>
            <h2>
              Comment interpréter votre Maison 5 ?
            </h2>

            <div className="house-five-steps">
              <article className="house-five-step-card">
                <span>1</span>

                <div>
                  <h3>
                    Identifiez le signe de la Maison 5
                  </h3>

                  <p>
                    Il décrit votre style créatif, vos plaisirs
                    et votre manière de vivre la romance.
                  </p>
                </div>
              </article>

              <article className="house-five-step-card">
                <span>2</span>

                <div>
                  <h3>
                    Repérez sa planète maîtresse
                  </h3>

                  <p>
                    Sa position montre où vos talents et vos
                    passions cherchent à s’exprimer.
                  </p>
                </div>
              </article>

              <article className="house-five-step-card">
                <span>3</span>

                <div>
                  <h3>
                    Observez les planètes présentes
                  </h3>

                  <p>
                    Chaque planète influence la créativité, les
                    amours, les plaisirs et les projets
                    personnels.
                  </p>
                </div>
              </article>

              <article className="house-five-step-card">
                <span>4</span>

                <div>
                  <h3>
                    Analysez les aspects
                  </h3>

                  <p>
                    Les aspects précisent les forces, les
                    tensions et les apprentissages liés à votre
                    expression personnelle.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 5 dans votre thème natal
            </h2>

            <p>
              La Maison 5 doit être interprétée avec
              l’ensemble du thème natal. Son signe, sa planète
              maîtresse, les planètes présentes et leurs
              aspects précisent sa signification.
            </p>

            <p>
              Cette analyse peut vous aider à comprendre votre
              style créatif, vos besoins amoureux, vos passions
              et les activités qui renforcent votre confiance.
            </p>

            <div className="house-five-cta-card">
              <div>
                <span className="house-five-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Quel signe et quelles planètes se trouvent dans votre Maison 5 ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir vos maisons astrologiques, votre
                  Ascendant et les positions de vos planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="house-five-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="house-five-navigation">
            <span className="house-five-kicker">
              Les maisons astrologiques
            </span>

            <h2>
              Continuer votre exploration
            </h2>

            <div className="house-five-navigation-grid">
              <Link
                href="/astrologie/maisons/maison-4"
                className="house-five-navigation-card"
              >
                <span>Ⅳ</span>

                <div>
                  <h3>
                    Maison 4
                  </h3>

                  <p>
                    Foyer, famille, racines, enfance et
                    sécurité émotionnelle.
                  </p>
                </div>
              </Link>

              <Link
                href="/astrologie/maisons"
                className="house-five-navigation-card"
              >
                <span>☾</span>

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
                href="/astrologie/maisons/maison-6"
                className="house-five-navigation-card"
              >
                <span>Ⅵ</span>

                <div>
                  <h3>
                    Maison 6
                  </h3>

                  <p>
                    Travail quotidien, habitudes, service,
                    organisation et santé.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <section className="house-five-faq">
            <span className="house-five-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur la Maison 5
            </h2>

            <div className="house-five-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="house-five-faq-item"
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

          <p className="house-five-disclaimer">
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
