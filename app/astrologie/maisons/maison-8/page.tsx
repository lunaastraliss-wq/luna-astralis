import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/maisons/maison-8";

export const metadata: Metadata = {
  title:
    "Maison 8 en astrologie : transformation, intimité et héritages | Luna Astralis",

  description:
    "Découvrez la Maison 8 en astrologie : transformation, intimité, sexualité, ressources partagées, héritages, crises, pouvoir personnel et renaissance.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Maison 8 en astrologie : transformation, intimité et renaissance",
    description:
      "Guide complet de la Maison 8 : intimité, ressources partagées, héritages, crises, psychologie, pouvoir personnel et transformations profondes.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "La Maison 8 en astrologie | Luna Astralis",
    description:
      "Découvrez ce que la Maison 8 révèle sur vos transformations, votre intimité, vos ressources partagées et votre capacité de renaissance.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const HOUSE_TRAITS = [
  {
    title: "Votre transformation",
    symbol: "Ⅷ",
    text:
      "La Maison 8 décrit les changements profonds qui vous obligent à abandonner une ancienne version de vous-même afin d’évoluer et de vous reconstruire.",
  },
  {
    title: "Votre intimité",
    symbol: "∞",
    text:
      "Cette maison représente la confiance, la vulnérabilité, la sexualité, les liens profonds et la manière dont vous partagez votre monde émotionnel avec une autre personne.",
  },
  {
    title: "Vos ressources partagées",
    symbol: "◇",
    text:
      "Elle concerne l’argent du couple, les dettes, les prêts, les assurances, les héritages, les investissements communs et les biens reçus des autres.",
  },
];

const HOUSE_STRENGTHS = [
  "Grande capacité de transformation",
  "Profondeur psychologique",
  "Intuition face aux motivations cachées",
  "Résilience dans les périodes difficiles",
  "Capacité à créer une intimité profonde",
  "Talent pour gérer les ressources partagées",
];

const HOUSE_CHALLENGES = [
  "Peur de perdre le contrôle",
  "Difficulté à faire confiance",
  "Jalousie ou possessivité",
  "Rapport complexe au pouvoir",
  "Tendance à retenir les blessures",
  "Difficulté à accepter les fins nécessaires",
];

const PLANETS_IN_HOUSE = [
  {
    name: "Soleil",
    symbol: "☀",
    text:
      "Le Soleil en Maison 8 donne une identité profonde, intense et tournée vers la transformation. La personne cherche souvent à comprendre ce qui se cache derrière les apparences et peut traverser plusieurs renaissances importantes au cours de sa vie.",
  },
  {
    name: "Lune",
    symbol: "☽",
    text:
      "La Lune en Maison 8 crée une grande sensibilité aux émotions cachées, aux secrets et aux changements affectifs. La personne peut ressentir intensément les liens, les pertes et les transformations familiales.",
  },
  {
    name: "Mercure",
    symbol: "☿",
    text:
      "Mercure en Maison 8 donne un esprit analytique, psychologique et investigateur. La personne cherche à comprendre les motivations profondes, les sujets tabous, les secrets et les mécanismes invisibles.",
  },
  {
    name: "Vénus",
    symbol: "♀",
    text:
      "Vénus en Maison 8 recherche des relations intenses, fusionnelles et profondément sincères. L’amour peut transformer la personne, mais les questions de confiance, de jalousie ou de dépendance doivent être équilibrées.",
  },
  {
    name: "Mars",
    symbol: "♂",
    text:
      "Mars en Maison 8 apporte une grande intensité, une forte volonté de survie et une énergie puissante dans les situations de crise. La personne doit apprendre à utiliser son pouvoir sans entrer dans des luttes de contrôle.",
  },
  {
    name: "Jupiter",
    symbol: "♃",
    text:
      "Jupiter en Maison 8 peut favoriser les ressources partagées, les héritages, les investissements ou les soutiens reçus des autres. La personne peut aussi développer une grande compréhension de la psychologie et de la transformation.",
  },
  {
    name: "Saturne",
    symbol: "♄",
    text:
      "Saturne en Maison 8 peut créer de la prudence concernant l’intimité, les dettes, les engagements financiers et la vulnérabilité. Avec le temps, cette position peut donner une grande maîtrise émotionnelle et une gestion responsable des ressources communes.",
  },
  {
    name: "Uranus",
    symbol: "♅",
    text:
      "Uranus en Maison 8 peut provoquer des changements soudains dans les finances partagées, l’intimité ou la manière de vivre les transformations. La personne cherche souvent une approche libre et non conventionnelle des liens profonds.",
  },
  {
    name: "Neptune",
    symbol: "♆",
    text:
      "Neptune en Maison 8 apporte intuition, sensibilité psychique et désir de fusion émotionnelle. La personne doit cependant rester attentive aux confusions, aux secrets, aux dépendances et au manque de clarté financière.",
  },
  {
    name: "Pluton",
    symbol: "♇",
    text:
      "Pluton en Maison 8 renforce considérablement les thèmes de transformation, de pouvoir, de crise et de renaissance. La personne possède souvent une grande capacité à traverser l’épreuve et à reconstruire sa vie en profondeur.",
  },
];

const SIGNS_IN_HOUSE = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "La Maison 8 en Bélier affronte les crises avec courage, rapidité et instinct. La personne peut vivre les transformations de manière directe et doit apprendre à canaliser son intensité.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "La Maison 8 en Taureau recherche la stabilité dans les finances partagées et l’intimité. Les transformations peuvent être lentes, mais elles deviennent durables lorsque la personne accepte de lâcher prise.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "La Maison 8 en Gémeaux cherche à comprendre les secrets, les émotions complexes et les transformations par le dialogue. La communication devient essentielle dans les relations intimes.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "La Maison 8 en Cancer vit intensément les liens familiaux, les héritages émotionnels et les besoins de sécurité affective. Les transformations peuvent être profondément liées au passé et à la famille.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "La Maison 8 en Lion cherche à conserver sa dignité et son pouvoir dans les périodes de changement. La personne peut transformer les crises en occasion de retrouver sa force et sa créativité.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "La Maison 8 en Vierge analyse les crises, les ressources partagées et les émotions profondes avec précision. La personne peut chercher à contrôler les transformations en comprenant chaque détail.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "La Maison 8 en Balance recherche l’équité dans les finances communes, l’intimité et les engagements profonds. Les transformations passent souvent par le couple et les relations.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "La Maison 8 en Scorpion intensifie les thèmes de transformation, de sexualité, de pouvoir et de renaissance. La personne possède une grande capacité à comprendre les motivations cachées.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "La Maison 8 en Sagittaire cherche un sens aux crises et aux transformations. La personne peut grandir grâce aux épreuves et développer une vision philosophique de la perte et du changement.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "La Maison 8 en Capricorne aborde les finances partagées et les transformations avec sérieux, prudence et contrôle. La personne apprend progressivement à faire confiance et à partager les responsabilités.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "La Maison 8 en Verseau vit les transformations de manière imprévisible et indépendante. La personne peut avoir une approche originale de l’intimité, des ressources communes et de la psychologie.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "La Maison 8 en Poissons apporte une grande sensibilité aux émotions invisibles, aux pertes et aux liens profonds. La personne doit éviter la confusion et développer des limites claires.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente la Maison 8 en astrologie ?",
    answer:
      "La Maison 8 représente la transformation, l’intimité, la sexualité, les ressources partagées, les héritages, les dettes, les crises, les pertes, la psychologie et la renaissance personnelle.",
  },
  {
    question:
      "Pourquoi la Maison 8 est-elle associée à la transformation ?",
    answer:
      "La Maison 8 concerne les expériences qui demandent de laisser mourir symboliquement une ancienne manière de vivre afin de se reconstruire différemment.",
  },
  {
    question:
      "Que signifie une planète en Maison 8 ?",
    answer:
      "Une planète en Maison 8 influence la manière de vivre l’intimité, les transformations, les ressources partagées, les crises et les enjeux de confiance ou de pouvoir.",
  },
  {
    question:
      "Que signifie une Maison 8 vide ?",
    answer:
      "Une Maison 8 vide ne signifie pas une absence de transformation ou de ressources partagées. Il faut observer le signe situé sur sa cuspide, sa planète maîtresse et les aspects reçus.",
  },
  {
    question:
      "La Maison 8 représente-t-elle uniquement la mort ?",
    answer:
      "Non. La Maison 8 représente surtout les fins symboliques, les transitions, les transformations psychologiques et les renaissances. Elle ne permet pas de prédire la mort.",
  },
  {
    question:
      "Quelle différence existe entre la Maison 2 et la Maison 8 ?",
    answer:
      "La Maison 2 représente vos ressources personnelles, vos revenus et vos valeurs. La Maison 8 représente les ressources partagées, les dettes, les héritages et les biens liés aux autres.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Maison 8 en astrologie : transformation, intimité, ressources partagées et renaissance",
  description:
    "Guide complet consacré à la Maison 8, à la transformation, à l’intimité, aux ressources partagées, aux héritages, aux crises et à la renaissance personnelle.",
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
      name: "Maison 8",
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

export default function MaisonHuitAstrologiePage() {
  return (
    <div className="house-eight-page">
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

      <main className="house-eight-wrap">
        <section className="house-eight-hero">
          <div className="house-eight-badge">
            Ⅷ Huitième maison astrologique
          </div>

          <h1>
            La Maison 8 en astrologie
          </h1>

          <p className="house-eight-hero-lead">
            La Maison 8 représente la transformation,
            l’intimité, les ressources partagées, les
            héritages, les crises et votre capacité à renaître
            après une période de changement profond.
          </p>

          <div className="house-eight-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="house-eight-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification-maison-8"
              className="house-eight-secondary-button"
            >
              Découvrir la Maison 8
            </a>
          </div>
        </section>

        <article className="house-eight-content">
          <section id="signification-maison-8">
            <span className="house-eight-kicker">
              Signification de la Maison 8
            </span>

            <h2>
              Que représente la Maison 8 ?
            </h2>

            <p>
              La Maison 8 est la maison des transformations
              profondes, des crises, de l’intimité et des
              ressources partagées.
            </p>

            <p>
              Elle représente les expériences qui vous
              obligent à changer, à abandonner une ancienne
              manière de vivre et à reconstruire votre vie sur
              de nouvelles bases.
            </p>

            <p>
              Cette maison concerne également l’argent reçu ou
              partagé avec d’autres personnes : héritages,
              dettes, prêts, assurances, investissements,
              pensions, impôts et biens communs.
            </p>

            <p>
              Sur le plan psychologique, elle révèle votre
              rapport à la confiance, au pouvoir, à la
              vulnérabilité, à la sexualité et aux émotions que
              vous ne montrez pas facilement.
            </p>
          </section>

          <section>
            <h2>
              Les grands domaines de la Maison 8
            </h2>

            <div className="house-eight-info-grid">
              {HOUSE_TRAITS.map((item) => (
                <article
                  className="house-eight-info-card"
                  key={item.title}
                >
                  <span className="house-eight-card-icon">
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
              Transformation, fin et renaissance
            </h2>

            <p>
              La Maison 8 représente les moments où une étape
              de votre vie doit se terminer pour qu’une autre
              puisse commencer.
            </p>

            <p>
              Il peut s’agir d’une rupture, d’un changement
              financier, d’une perte, d’une crise personnelle
              ou d’une prise de conscience qui transforme
              profondément votre manière de voir la vie.
            </p>

            <p>
              Ces expériences peuvent être difficiles, mais
              elles possèdent aussi un potentiel de
              régénération. Elles vous apprennent à lâcher ce
              qui n’a plus sa place et à retrouver votre
              pouvoir personnel.
            </p>

            <div className="house-eight-highlight-card">
              <div className="house-eight-highlight-symbol">
                Ⅷ
              </div>

              <div>
                <h3>
                  La Maison 8 révèle votre capacité de renaissance
                </h3>

                <p>
                  Pour interpréter cette maison, observez le
                  signe placé sur sa cuspide, sa planète
                  maîtresse, les planètes présentes et les
                  aspects qu’elles reçoivent.
                </p>

                <Link
                  href="/astrologie/maisons"
                  className="house-eight-text-link"
                >
                  Comprendre les douze maisons astrologiques
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Intimité, confiance et vulnérabilité
            </h2>

            <p>
              La Maison 8 décrit les relations dans lesquelles
              vous ne pouvez pas rester entièrement en
              surface.
            </p>

            <p>
              Elle représente la capacité à partager vos
              émotions profondes, vos peurs, vos désirs et vos
              zones de vulnérabilité avec une autre personne.
            </p>

            <p>
              Une Maison 8 importante peut donner un grand
              besoin de fusion et de sincérité. Son défi est de
              construire une intimité profonde sans perdre son
              autonomie ni chercher à contrôler l’autre.
            </p>
          </section>

          <section>
            <h2>
              Sexualité et liens profonds
            </h2>

            <p>
              La Maison 8 est souvent associée à la sexualité
              parce qu’elle représente l’union émotionnelle,
              énergétique et psychologique entre deux
              personnes.
            </p>

            <p>
              Elle ne décrit pas seulement l’attirance
              physique. Elle parle surtout de confiance, de
              fusion, de partage, d’abandon et de la
              transformation créée par un lien intime.
            </p>

            <p>
              Le signe et les planètes présents dans cette
              maison peuvent préciser la manière dont vous
              vivez la proximité, la passion et la
              vulnérabilité.
            </p>
          </section>

          <section>
            <h2>
              Ressources partagées et argent des autres
            </h2>

            <p>
              La Maison 8 concerne les ressources financières
              qui ne proviennent pas uniquement de votre
              travail personnel.
            </p>

            <p>
              Elle représente l’argent du conjoint, les
              revenus communs, les prêts, les dettes, les
              assurances, les impôts, les investissements et
              les responsabilités financières partagées.
            </p>

            <p>
              Cette maison montre votre manière de gérer les
              engagements financiers, la dépendance
              matérielle, le partage des biens et les
              situations où plusieurs personnes possèdent un
              intérêt commun.
            </p>
          </section>

          <section>
            <h2>
              Héritages, legs et transmissions
            </h2>

            <p>
              La Maison 8 est associée aux héritages, aux legs,
              aux pensions, aux assurances-vie et aux biens
              transmis après une fin ou un changement
              important.
            </p>

            <p>
              Elle peut aussi représenter les héritages
              psychologiques et émotionnels reçus de la
              famille.
            </p>

            <p>
              Certaines peurs, habitudes, secrets ou mécanismes
              de survie peuvent être transmis d’une génération
              à l’autre et demander un travail de
              transformation.
            </p>
          </section>

          <section>
            <h2>
              Psychologie, secrets et inconscient
            </h2>

            <p>
              La Maison 8 cherche à comprendre ce qui se cache
              derrière les comportements, les émotions et les
              apparences.
            </p>

            <p>
              Elle est liée à la psychologie, à l’introspection,
              aux secrets, aux tabous et aux motivations
              profondes.
            </p>

            <p>
              Une forte Maison 8 peut donner un talent pour
              percevoir les non-dits, comprendre les blessures
              invisibles et accompagner les autres dans des
              périodes difficiles.
            </p>
          </section>

          <section>
            <h2>
              Pouvoir, contrôle et lâcher-prise
            </h2>

            <p>
              La Maison 8 peut révéler des enjeux liés au
              contrôle, à la dépendance, à la jalousie, à la
              possessivité ou à la peur de perdre.
            </p>

            <p>
              Elle montre les situations dans lesquelles vous
              pouvez chercher à protéger votre vulnérabilité en
              contrôlant vos émotions, les autres ou les
              ressources partagées.
            </p>

            <p>
              Son évolution consiste à développer une force
              intérieure qui ne dépend pas de la domination,
              mais de la confiance, de la lucidité et de la
              capacité à lâcher prise.
            </p>
          </section>

          <section>
            <h2>
              Crises et capacité de résilience
            </h2>

            <p>
              La Maison 8 est souvent activée lors des périodes
              de crise, de changement ou de perte.
            </p>

            <p>
              Elle révèle votre manière de réagir lorsque vos
              repères habituels disparaissent et que vous devez
              vous adapter à une nouvelle réalité.
            </p>

            <p>
              Une Maison 8 équilibrée peut donner une grande
              résilience, une force psychologique remarquable
              et la capacité de transformer une épreuve en
              source de croissance.
            </p>
          </section>

          <section>
            <h2>
              Les forces et les défis de la Maison 8
            </h2>

            <div className="house-eight-strengths-grid">
              <div className="house-eight-list-card">
                <span className="house-eight-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Une Maison 8 équilibrée
                </h3>

                <ul>
                  {HOUSE_STRENGTHS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="house-eight-list-card">
                <span className="house-eight-kicker">
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
              Les planètes en Maison 8
            </h2>

            <p>
              Une planète présente en Maison 8 influence la
              manière de vivre les transformations, l’intimité,
              les ressources partagées et les périodes de
              crise.
            </p>

            <p>
              Elle montre également quelle énergie devient
              particulièrement intense ou profonde dans votre
              vie intérieure.
            </p>

            <div className="house-eight-planets-grid">
              {PLANETS_IN_HOUSE.map((planet) => (
                <article
                  className="house-eight-planet-card"
                  key={planet.name}
                >
                  <div className="house-eight-planet-symbol">
                    {planet.symbol}
                  </div>

                  <div>
                    <h3>
                      {planet.name} en Maison 8
                    </h3>

                    <p>{planet.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Les douze signes dans la Maison 8
            </h2>

            <p>
              Le signe placé sur la cuspide de la Maison 8
              décrit votre manière d’aborder les
              transformations, l’intimité et les ressources
              partagées.
            </p>

            <p>
              Il montre également les qualités que vous
              développez lorsque vous traversez une période de
              crise, de changement ou de renaissance.
            </p>

            <div className="house-eight-signs-grid">
              {SIGNS_IN_HOUSE.map((item) => (
                <article
                  className="house-eight-sign-card"
                  key={item.sign}
                >
                  <div className="house-eight-sign-symbol">
                    {item.symbol}
                  </div>

                  <div>
                    <h3>
                      Maison 8 en {item.sign}
                    </h3>

                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Maison 8 vide : que signifie-t-elle ?
            </h2>

            <p>
              Une Maison 8 vide ne signifie pas que vous ne
              vivrez aucune transformation ou que vous ne
              partagerez jamais de ressources avec d’autres.
            </p>

            <p>
              Toutes les maisons restent actives. Il faut
              observer le signe situé sur la cuspide de la
              Maison 8 et la planète qui gouverne ce signe.
            </p>

            <p>
              La position de cette planète maîtresse montre
              comment et dans quel domaine les thèmes de
              l’intimité, de la transformation et du partage
              cherchent à s’exprimer.
            </p>
          </section>

          <section>
            <h2>
              La planète maîtresse de la Maison 8
            </h2>

            <p>
              La planète maîtresse de la Maison 8 est celle qui
              gouverne le signe situé au début de cette maison.
            </p>

            <p>
              Sa position par signe, par maison et par aspect
              apporte des informations importantes sur votre
              manière de vivre les transformations, les
              finances communes et la confiance.
            </p>

            <div className="house-eight-rulers-grid">
              <div className="house-eight-ruler-card">
                <span>♈</span>
                <h3>Bélier</h3>
                <p>Mars</p>
              </div>

              <div className="house-eight-ruler-card">
                <span>♉</span>
                <h3>Taureau</h3>
                <p>Vénus</p>
              </div>

              <div className="house-eight-ruler-card">
                <span>♊</span>
                <h3>Gémeaux</h3>
                <p>Mercure</p>
              </div>

              <div className="house-eight-ruler-card">
                <span>♋</span>
                <h3>Cancer</h3>
                <p>Lune</p>
              </div>

              <div className="house-eight-ruler-card">
                <span>♌</span>
                <h3>Lion</h3>
                <p>Soleil</p>
              </div>

              <div className="house-eight-ruler-card">
                <span>♍</span>
                <h3>Vierge</h3>
                <p>Mercure</p>
              </div>

              <div className="house-eight-ruler-card">
                <span>♎</span>
                <h3>Balance</h3>
                <p>Vénus</p>
              </div>

              <div className="house-eight-ruler-card">
                <span>♏</span>
                <h3>Scorpion</h3>
                <p>Pluton et Mars</p>
              </div>

              <div className="house-eight-ruler-card">
                <span>♐</span>
                <h3>Sagittaire</h3>
                <p>Jupiter</p>
              </div>

              <div className="house-eight-ruler-card">
                <span>♑</span>
                <h3>Capricorne</h3>
                <p>Saturne</p>
              </div>

              <div className="house-eight-ruler-card">
                <span>♒</span>
                <h3>Verseau</h3>
                <p>Uranus et Saturne</p>
              </div>

              <div className="house-eight-ruler-card">
                <span>♓</span>
                <h3>Poissons</h3>
                <p>Neptune et Jupiter</p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Maison 2 et Maison 8 : quelle différence ?
            </h2>

            <div className="house-eight-comparison-grid">
              <article className="house-eight-comparison-card">
                <span className="house-eight-kicker">
                  Maison 2
                </span>

                <h3>
                  Vos ressources personnelles
                </h3>

                <p>
                  La Maison 2 représente votre argent, vos
                  possessions, vos revenus, vos talents et
                  votre sentiment de sécurité personnelle.
                </p>
              </article>

              <article className="house-eight-comparison-card">
                <span className="house-eight-kicker">
                  Maison 8
                </span>

                <h3>
                  Vos ressources partagées
                </h3>

                <p>
                  La Maison 8 représente les biens communs, les
                  dettes, les héritages, les assurances et les
                  ressources reçues ou partagées avec les
                  autres.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              Maison 7 et Maison 8 : quelle différence ?
            </h2>

            <div className="house-eight-comparison-grid">
              <article className="house-eight-comparison-card">
                <span className="house-eight-kicker">
                  Maison 7
                </span>

                <h3>
                  Le partenariat
                </h3>

                <p>
                  La Maison 7 représente le couple, les
                  contrats, les partenariats et la relation
                  officielle entre deux personnes.
                </p>
              </article>

              <article className="house-eight-comparison-card">
                <span className="house-eight-kicker">
                  Maison 8
                </span>

                <h3>
                  La fusion et le partage
                </h3>

                <p>
                  La Maison 8 représente ce qui arrive lorsque
                  deux personnes partagent leurs émotions,
                  leurs ressources, leurs responsabilités et
                  leur intimité.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 8 dans votre évolution personnelle
            </h2>

            <p>
              La Maison 8 vous invite à reconnaître que
              certaines transformations sont nécessaires pour
              poursuivre votre évolution.
            </p>

            <p>
              Elle vous apprend à traverser les changements
              sans perdre votre force intérieure, à faire
              confiance sans vous abandonner et à partager sans
              perdre votre autonomie.
            </p>

            <p>
              Son évolution consiste à transformer la peur en
              lucidité, le contrôle en confiance et les crises
              en occasions de renaissance.
            </p>
          </section>

          <section>
            <h2>
              Comment interpréter votre Maison 8 ?
            </h2>

            <div className="house-eight-steps">
              <article className="house-eight-step-card">
                <span>1</span>

                <div>
                  <h3>
                    Identifiez le signe de la Maison 8
                  </h3>

                  <p>
                    Il décrit votre approche des
                    transformations, de l’intimité et des
                    ressources partagées.
                  </p>
                </div>
              </article>

              <article className="house-eight-step-card">
                <span>2</span>

                <div>
                  <h3>
                    Repérez sa planète maîtresse
                  </h3>

                  <p>
                    Sa position montre où les thèmes de la
                    transformation, du partage et de la
                    confiance cherchent à s’exprimer.
                  </p>
                </div>
              </article>

              <article className="house-eight-step-card">
                <span>3</span>

                <div>
                  <h3>
                    Observez les planètes présentes
                  </h3>

                  <p>
                    Chaque planète influence votre manière de
                    vivre l’intimité, les crises et les
                    ressources communes.
                  </p>
                </div>
              </article>

              <article className="house-eight-step-card">
                <span>4</span>

                <div>
                  <h3>
                    Analysez les aspects
                  </h3>

                  <p>
                    Les aspects précisent les forces, les
                    tensions et les apprentissages liés aux
                    transformations profondes.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 8 dans votre thème natal
            </h2>

            <p>
              La Maison 8 doit être interprétée avec l’ensemble
              du thème natal. Son signe, sa planète maîtresse,
              les planètes présentes et leurs aspects
              précisent sa signification.
            </p>

            <p>
              Cette analyse peut vous aider à mieux comprendre
              votre rapport à la confiance, à l’intimité, aux
              ressources partagées et aux transformations qui
              marquent votre parcours.
            </p>

            <div className="house-eight-cta-card">
              <div>
                <span className="house-eight-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Quel signe et quelles planètes se trouvent dans votre Maison 8 ?
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
                className="house-eight-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="house-eight-navigation">
            <span className="house-eight-kicker">
              Les maisons astrologiques
            </span>

            <h2>
              Continuer votre exploration
            </h2>

            <div className="house-eight-navigation-grid">
              <Link
                href="/astrologie/maisons/maison-7"
                className="house-eight-navigation-card"
              >
                <span>Ⅶ</span>

                <div>
                  <h3>Maison 7</h3>

                  <p>
                    Couple, partenariats, contrats,
                    engagement et relation à l’autre.
                  </p>
                </div>
              </Link>

              <Link
                href="/astrologie/maisons"
                className="house-eight-navigation-card"
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
                href="/astrologie/maisons/maison-9"
                className="house-eight-navigation-card"
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
            </div>
          </section>

          <section className="house-eight-faq">
            <span className="house-eight-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur la Maison 8
            </h2>

            <div className="house-eight-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="house-eight-faq-item"
                  key={item.question}
                >
                  <summary>{item.question}</summary>

                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="house-eight-disclaimer">
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
