import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/maisons/maison-7";

export const metadata: Metadata = {
  title:
    "Maison 7 en astrologie : couple, relations et Descendant | Luna Astralis",

  description:
    "Découvrez la Maison 7 en astrologie : couple, mariage, relations, partenariats, contrats, Descendant, ennemis déclarés et planètes en Maison 7.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Maison 7 en astrologie : couple, relations, partenariats et Descendant",
    description:
      "Guide complet de la Maison 7 : couple, mariage, associations, contrats, projection, Descendant et planètes présentes dans cette maison.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "La Maison 7 en astrologie | Luna Astralis",
    description:
      "Découvrez ce que la Maison 7 révèle sur votre couple, vos relations, vos partenariats et votre manière de rencontrer l’autre.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const HOUSE_TRAITS = [
  {
    title: "Vos relations",
    symbol: "♡",
    text:
      "La Maison 7 décrit votre manière de créer des liens avec les autres. Elle représente les relations dans lesquelles vous cherchez l’équilibre, l’engagement et la réciprocité.",
  },
  {
    title: "Vos partenariats",
    symbol: "Ⅶ",
    text:
      "Cette maison concerne les couples, les associations professionnelles, les contrats et les alliances qui demandent une véritable coopération entre deux personnes.",
  },
  {
    title: "Votre Descendant",
    symbol: "DSC",
    text:
      "Le Descendant marque le début de la Maison 7. Il révèle les qualités que vous recherchez chez les autres et celles que vous apprenez à reconnaître en vous-même.",
  },
];

const HOUSE_STRENGTHS = [
  "Capacité à coopérer",
  "Sens du compromis",
  "Écoute de l’autre",
  "Engagement relationnel",
  "Diplomatie",
  "Construction de partenariats",
];

const HOUSE_CHALLENGES = [
  "Dépendance affective",
  "Peur de la solitude",
  "Projection sur l’autre",
  "Difficulté à poser des limites",
  "Recherche excessive d’approbation",
  "Tendance à éviter les conflits",
];

const PLANETS_IN_HOUSE = [
  {
    name: "Soleil",
    symbol: "☀",
    text:
      "Le Soleil en Maison 7 donne une grande importance aux relations et aux partenariats. La personne peut construire une partie de son identité à travers le couple, la coopération et la reconnaissance reçue des autres.",
  },
  {
    name: "Lune",
    symbol: "☽",
    text:
      "La Lune en Maison 7 crée un besoin émotionnel de relation, de soutien et de proximité. L’humeur peut être fortement influencée par l’état du couple ou par la qualité des échanges avec les autres.",
  },
  {
    name: "Mercure",
    symbol: "☿",
    text:
      "Mercure en Maison 7 favorise le dialogue, la négociation et les partenariats intellectuels. La personne a besoin de communiquer pour comprendre l’autre et peut rechercher un partenaire curieux et ouvert.",
  },
  {
    name: "Vénus",
    symbol: "♀",
    text:
      "Vénus en Maison 7 renforce le besoin d’harmonie, d’affection et de réciprocité. La personne peut attirer naturellement les relations, mais doit éviter de préserver la paix au détriment de ses propres besoins.",
  },
  {
    name: "Mars",
    symbol: "♂",
    text:
      "Mars en Maison 7 apporte passion, franchise et intensité dans les relations. Les partenariats peuvent être stimulants, mais aussi marqués par la compétition, les confrontations ou des réactions rapides.",
  },
  {
    name: "Jupiter",
    symbol: "♃",
    text:
      "Jupiter en Maison 7 peut favoriser les partenariats enrichissants, les alliances et les relations qui ouvrent de nouvelles perspectives. La personne doit toutefois éviter d’idéaliser excessivement l’autre.",
  },
  {
    name: "Saturne",
    symbol: "♄",
    text:
      "Saturne en Maison 7 peut rendre l’engagement sérieux, prudent ou tardif. Les relations deviennent souvent des lieux d’apprentissage, de responsabilité et de construction durable.",
  },
  {
    name: "Uranus",
    symbol: "♅",
    text:
      "Uranus en Maison 7 donne un besoin de liberté et d’originalité dans les relations. La personne peut attirer des partenaires indépendants et rechercher des unions différentes des modèles traditionnels.",
  },
  {
    name: "Neptune",
    symbol: "♆",
    text:
      "Neptune en Maison 7 apporte romantisme, intuition et idéalisation. La personne peut percevoir le meilleur chez l’autre, mais doit rester attentive aux projections, aux ambiguïtés et au manque de limites.",
  },
  {
    name: "Pluton",
    symbol: "♇",
    text:
      "Pluton en Maison 7 donne des relations intenses, profondes et transformatrices. Les partenariats peuvent révéler des enjeux de pouvoir, de confiance, de peur de perdre ou de régénération.",
  },
];

const SIGNS_IN_HOUSE = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "La Maison 7 en Bélier attire des partenaires directs, actifs et indépendants. La relation demande de trouver un équilibre entre coopération et affirmation personnelle.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "La Maison 7 en Taureau recherche stabilité, loyauté et sécurité dans les relations. La personne valorise les engagements durables et les partenaires constants.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "La Maison 7 en Gémeaux donne un besoin de dialogue, de curiosité et de mouvement dans le couple. La communication devient essentielle pour maintenir la relation vivante.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "La Maison 7 en Cancer recherche protection, sensibilité et sécurité émotionnelle. La personne peut être attirée par des partenaires attentionnés, familiaux ou très réceptifs.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "La Maison 7 en Lion attire des partenaires chaleureux, créatifs et expressifs. La relation a besoin de reconnaissance, de générosité et d’une place pour chacun.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "La Maison 7 en Vierge recherche fiabilité, organisation et sens du service. La personne peut analyser beaucoup ses relations et apprendre à ne pas confondre exigence et perfection.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "La Maison 7 en Balance renforce le besoin d’harmonie, d’équité et de partenariat. La personne cherche généralement des relations fondées sur le respect et la coopération.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "La Maison 7 en Scorpion donne des relations profondes, passionnées et transformatrices. La confiance, l’intimité et les enjeux de pouvoir peuvent devenir centraux.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "La Maison 7 en Sagittaire recherche liberté, ouverture et croissance dans les relations. La personne peut être attirée par des partenaires aventuriers, étrangers ou philosophes.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "La Maison 7 en Capricorne donne une approche sérieuse, responsable et durable de l’engagement. La personne privilégie souvent la stabilité et les projets construits à long terme.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "La Maison 7 en Verseau recherche des relations libres, originales et égalitaires. L’amitié, l’indépendance et le respect de l’espace personnel sont essentiels.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "La Maison 7 en Poissons apporte romantisme, compassion et grande sensibilité. La personne doit toutefois veiller à ne pas idéaliser l’autre ou oublier ses propres limites.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente la Maison 7 en astrologie ?",
    answer:
      "La Maison 7 représente le couple, le mariage, les partenariats, les associations, les contrats, les alliances, les relations engagées et les ennemis déclarés.",
  },
  {
    question:
      "Qu’est-ce que le Descendant en astrologie ?",
    answer:
      "Le Descendant est le point opposé à l’Ascendant. Il marque le début de la Maison 7 et représente la manière de rencontrer l’autre ainsi que les qualités recherchées dans les relations.",
  },
  {
    question:
      "Que signifie une planète en Maison 7 ?",
    answer:
      "Une planète en Maison 7 influence fortement les relations, les partenariats et les engagements. Son énergie peut être vécue à travers le couple ou projetée sur les autres.",
  },
  {
    question:
      "Que signifie une Maison 7 vide ?",
    answer:
      "Une Maison 7 vide ne signifie pas une absence de couple ou de relations. Il faut analyser le signe placé sur le Descendant, sa planète maîtresse et les aspects reçus par cette planète.",
  },
  {
    question:
      "Quelle différence existe entre la Maison 5 et la Maison 7 ?",
    answer:
      "La Maison 5 représente la romance, la séduction et le plaisir amoureux. La Maison 7 concerne davantage l’engagement, le couple, les contrats et les partenariats durables.",
  },
  {
    question:
      "Pourquoi la Maison 7 représente-t-elle aussi les ennemis déclarés ?",
    answer:
      "La Maison 7 représente les personnes qui se tiennent face à nous. Cela inclut les partenaires, mais aussi les adversaires connus, les concurrents et les conflits ouverts.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Maison 7 en astrologie : couple, relations, partenariats et Descendant",
  description:
    "Guide complet consacré à la Maison 7, au couple, au mariage, aux partenariats, aux contrats, au Descendant et aux planètes présentes dans cette maison.",
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
      name: "Maison 7",
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

export default function MaisonSeptAstrologiePage() {
  return (
    <div className="house-seven-page">
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

      <main className="house-seven-wrap">
        <section className="house-seven-hero">
          <div className="house-seven-badge">
            Ⅶ Septième maison astrologique
          </div>

          <h1>
            La Maison 7 en astrologie
          </h1>

          <p className="house-seven-hero-lead">
            La Maison 7 représente le couple, les relations,
            les partenariats, les contrats et la manière dont
            vous rencontrez l’autre. Son point de départ
            correspond au Descendant.
          </p>

          <div className="house-seven-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="house-seven-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification-maison-7"
              className="house-seven-secondary-button"
            >
              Découvrir la Maison 7
            </a>
          </div>
        </section>

        <article className="house-seven-content">
          <section id="signification-maison-7">
            <span className="house-seven-kicker">
              Signification de la Maison 7
            </span>

            <h2>
              Que représente la Maison 7 ?
            </h2>

            <p>
              La Maison 7 est la maison des relations
              engagées, du couple et des partenariats. Elle
              décrit la manière dont vous vous associez à une
              autre personne sur un pied d’égalité.
            </p>

            <p>
              Elle concerne le mariage, les unions durables,
              les collaborations professionnelles, les
              associations et les contrats qui demandent une
              véritable coopération.
            </p>

            <p>
              Cette maison révèle aussi les qualités que vous
              recherchez chez les autres et les comportements
              que vous pouvez projeter sur eux sans toujours
              les reconnaître en vous-même.
            </p>

            <p>
              Son point de départ est appelé le Descendant. Il
              se trouve exactement à l’opposé de l’Ascendant
              dans le thème natal.
            </p>
          </section>

          <section>
            <h2>
              Les grands domaines de la Maison 7
            </h2>

            <div className="house-seven-info-grid">
              {HOUSE_TRAITS.map((item) => (
                <article
                  className="house-seven-info-card"
                  key={item.title}
                >
                  <span className="house-seven-card-icon">
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
              La Maison 7 et le Descendant
            </h2>

            <p>
              Le Descendant représente le signe qui se couchait
              à l’horizon au moment de votre naissance. Il
              marque le début de la Maison 7.
            </p>

            <p>
              Alors que l’Ascendant décrit votre manière
              instinctive d’aborder la vie, le Descendant
              montre les qualités que vous recherchez,
              admirez, critiquez ou rencontrez chez les autres.
            </p>

            <p>
              Le signe du Descendant peut ainsi révéler le type
              de partenaire qui vous attire, mais aussi une
              partie de vous-même que vous apprenez à intégrer
              à travers les relations.
            </p>

            <div className="house-seven-highlight-card">
              <div className="house-seven-highlight-symbol">
                DSC
              </div>

              <div>
                <h3>
                  Le Descendant révèle votre rencontre avec l’autre
                </h3>

                <p>
                  Pour interpréter votre Maison 7, observez le
                  signe du Descendant, sa planète maîtresse,
                  les planètes présentes dans la maison et les
                  aspects qu’elles reçoivent.
                </p>

                <Link
                  href="/astrologie/ascendant"
                  className="house-seven-text-link"
                >
                  Comprendre l’axe Ascendant–Descendant
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Couple, mariage et engagement
            </h2>

            <p>
              La Maison 7 représente les relations dans
              lesquelles deux personnes choisissent de
              construire quelque chose ensemble.
            </p>

            <p>
              Elle parle moins de la séduction ou du début de
              l’histoire que de l’engagement, des attentes
              mutuelles, des compromis et de la capacité à
              maintenir une relation dans le temps.
            </p>

            <p>
              Une Maison 7 importante peut donner un grand
              besoin de partenariat. Son défi consiste à
              préserver son identité tout en construisant un
              véritable « nous ».
            </p>
          </section>

          <section>
            <h2>
              Partenariats professionnels et contrats
            </h2>

            <p>
              La Maison 7 ne concerne pas uniquement les
              relations amoureuses. Elle représente aussi les
              associations professionnelles, les clients, les
              partenaires d’affaires et les engagements
              contractuels.
            </p>

            <p>
              Elle montre votre manière de négocier, de
              collaborer et de partager les responsabilités
              avec une autre personne.
            </p>

            <p>
              Le signe et les planètes présents dans cette
              maison peuvent révéler les forces et les défis
              liés aux contrats, aux alliances et à la
              coopération professionnelle.
            </p>
          </section>

          <section>
            <h2>
              Projection et effet miroir
            </h2>

            <p>
              La Maison 7 fonctionne souvent comme un miroir.
              Elle représente les qualités que vous remarquez
              rapidement chez les autres, qu’elles vous
              attirent ou vous dérangent.
            </p>

            <p>
              Certaines de ces qualités peuvent être peu
              développées ou difficilement reconnues dans
              votre propre personnalité.
            </p>

            <p>
              Les relations deviennent alors un moyen de mieux
              comprendre vos besoins, vos limites et les
              parties de vous-même que vous cherchez à
              intégrer.
            </p>
          </section>

          <section>
            <h2>
              Conflits ouverts et ennemis déclarés
            </h2>

            <p>
              En astrologie traditionnelle, la Maison 7
              représente également les adversaires connus, les
              concurrents et les conflits ouverts.
            </p>

            <p>
              Contrairement aux tensions cachées ou
              inconscientes, les enjeux de la Maison 7 sont
              visibles et se jouent directement dans la
              relation avec une autre personne.
            </p>

            <p>
              Cette maison montre donc aussi votre manière de
              négocier, de défendre votre position et de
              rechercher une résolution lorsqu’un désaccord
              devient explicite.
            </p>
          </section>

          <section>
            <h2>
              Équilibre entre soi et l’autre
            </h2>

            <p>
              La Maison 7 se trouve à l’opposé de la Maison 1.
              Ensemble, elles forment l’axe de l’identité et de
              la relation.
            </p>

            <p>
              La Maison 1 demande de savoir qui vous êtes. La
              Maison 7 vous apprend à tenir compte de l’autre
              sans disparaître dans la relation.
            </p>

            <p>
              Son équilibre consiste à créer des liens fondés
              sur la réciprocité, le respect, la communication
              et la capacité à poser des limites claires.
            </p>
          </section>

          <section>
            <h2>
              Les forces et les défis de la Maison 7
            </h2>

            <div className="house-seven-strengths-grid">
              <div className="house-seven-list-card">
                <span className="house-seven-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Une Maison 7 équilibrée
                </h3>

                <ul>
                  {HOUSE_STRENGTHS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="house-seven-list-card">
                <span className="house-seven-kicker">
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
              Les planètes en Maison 7
            </h2>

            <p>
              Une planète présente en Maison 7 influence
              fortement le couple, les partenariats et les
              relations engagées.
            </p>

            <p>
              Son énergie peut être exprimée directement dans
              la relation ou projetée sur les personnes que
              vous attirez.
            </p>

            <div className="house-seven-planets-grid">
              {PLANETS_IN_HOUSE.map((planet) => (
                <article
                  className="house-seven-planet-card"
                  key={planet.name}
                >
                  <div className="house-seven-planet-symbol">
                    {planet.symbol}
                  </div>

                  <div>
                    <h3>
                      {planet.name} en Maison 7
                    </h3>

                    <p>{planet.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Les douze signes dans la Maison 7
            </h2>

            <p>
              Le signe placé sur le Descendant décrit votre
              approche des relations et les qualités que vous
              recherchez chez les partenaires.
            </p>

            <p>
              Il montre également les comportements que vous
              apprenez à développer grâce au couple, aux
              associations et aux contrats.
            </p>

            <div className="house-seven-signs-grid">
              {SIGNS_IN_HOUSE.map((item) => (
                <article
                  className="house-seven-sign-card"
                  key={item.sign}
                >
                  <div className="house-seven-sign-symbol">
                    {item.symbol}
                  </div>

                  <div>
                    <h3>
                      Maison 7 en {item.sign}
                    </h3>

                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Maison 7 vide : que signifie-t-elle ?
            </h2>

            <p>
              Une Maison 7 vide ne signifie pas une absence de
              couple, de mariage ou de partenariats.
            </p>

            <p>
              Toutes les maisons restent actives. Il faut
              observer le signe du Descendant et la planète
              qui gouverne ce signe.
            </p>

            <p>
              La position de cette planète maîtresse montre
              comment et dans quel domaine les thèmes de la
              relation, de l’engagement et de la coopération
              cherchent à s’exprimer.
            </p>
          </section>

          <section>
            <h2>
              La planète maîtresse de la Maison 7
            </h2>

            <p>
              La planète maîtresse de la Maison 7 est celle qui
              gouverne le signe situé sur le Descendant.
            </p>

            <p>
              Sa position par signe, par maison et par aspect
              apporte des informations essentielles sur vos
              relations, vos attentes et votre manière de vous
              engager.
            </p>

            <div className="house-seven-rulers-grid">
              <div className="house-seven-ruler-card">
                <span>♈</span>
                <h3>Bélier</h3>
                <p>Mars</p>
              </div>

              <div className="house-seven-ruler-card">
                <span>♉</span>
                <h3>Taureau</h3>
                <p>Vénus</p>
              </div>

              <div className="house-seven-ruler-card">
                <span>♊</span>
                <h3>Gémeaux</h3>
                <p>Mercure</p>
              </div>

              <div className="house-seven-ruler-card">
                <span>♋</span>
                <h3>Cancer</h3>
                <p>Lune</p>
              </div>

              <div className="house-seven-ruler-card">
                <span>♌</span>
                <h3>Lion</h3>
                <p>Soleil</p>
              </div>

              <div className="house-seven-ruler-card">
                <span>♍</span>
                <h3>Vierge</h3>
                <p>Mercure</p>
              </div>

              <div className="house-seven-ruler-card">
                <span>♎</span>
                <h3>Balance</h3>
                <p>Vénus</p>
              </div>

              <div className="house-seven-ruler-card">
                <span>♏</span>
                <h3>Scorpion</h3>
                <p>Pluton et Mars</p>
              </div>

              <div className="house-seven-ruler-card">
                <span>♐</span>
                <h3>Sagittaire</h3>
                <p>Jupiter</p>
              </div>

              <div className="house-seven-ruler-card">
                <span>♑</span>
                <h3>Capricorne</h3>
                <p>Saturne</p>
              </div>

              <div className="house-seven-ruler-card">
                <span>♒</span>
                <h3>Verseau</h3>
                <p>Uranus et Saturne</p>
              </div>

              <div className="house-seven-ruler-card">
                <span>♓</span>
                <h3>Poissons</h3>
                <p>Neptune et Jupiter</p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Maison 1 et Maison 7 : quelle différence ?
            </h2>

            <div className="house-seven-comparison-grid">
              <article className="house-seven-comparison-card">
                <span className="house-seven-kicker">
                  Maison 1
                </span>

                <h3>
                  Votre identité
                </h3>

                <p>
                  La Maison 1 représente votre personnalité,
                  votre manière d’agir, votre apparence et
                  votre affirmation individuelle.
                </p>
              </article>

              <article className="house-seven-comparison-card">
                <span className="house-seven-kicker">
                  Maison 7
                </span>

                <h3>
                  Votre relation à l’autre
                </h3>

                <p>
                  La Maison 7 représente le couple, les
                  partenariats, les contrats, la coopération
                  et la recherche d’équilibre dans la relation.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              Maison 5 et Maison 7 : quelle différence ?
            </h2>

            <div className="house-seven-comparison-grid">
              <article className="house-seven-comparison-card">
                <span className="house-seven-kicker">
                  Maison 5
                </span>

                <h3>
                  La romance
                </h3>

                <p>
                  La Maison 5 représente la séduction, les
                  rencontres, les plaisirs amoureux et
                  l’expression spontanée du désir.
                </p>
              </article>

              <article className="house-seven-comparison-card">
                <span className="house-seven-kicker">
                  Maison 7
                </span>

                <h3>
                  L’engagement
                </h3>

                <p>
                  La Maison 7 représente les relations
                  officielles, les partenariats durables, les
                  contrats et les responsabilités partagées.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 7 dans votre évolution personnelle
            </h2>

            <p>
              La Maison 7 vous invite à rencontrer l’autre
              sans abandonner votre propre identité.
            </p>

            <p>
              Elle vous apprend à reconnaître vos projections,
              à exprimer vos besoins et à construire des
              relations fondées sur la réciprocité.
            </p>

            <p>
              Son évolution consiste à trouver un équilibre
              entre autonomie et engagement, affirmation et
              compromis, liberté et coopération.
            </p>
          </section>

          <section>
            <h2>
              Comment interpréter votre Maison 7 ?
            </h2>

            <div className="house-seven-steps">
              <article className="house-seven-step-card">
                <span>1</span>

                <div>
                  <h3>
                    Identifiez le signe du Descendant
                  </h3>

                  <p>
                    Il décrit votre approche des relations et
                    les qualités que vous recherchez chez les
                    autres.
                  </p>
                </div>
              </article>

              <article className="house-seven-step-card">
                <span>2</span>

                <div>
                  <h3>
                    Repérez sa planète maîtresse
                  </h3>

                  <p>
                    Sa position montre où les thèmes du couple,
                    du partenariat et de l’engagement cherchent
                    à s’exprimer.
                  </p>
                </div>
              </article>

              <article className="house-seven-step-card">
                <span>3</span>

                <div>
                  <h3>
                    Observez les planètes présentes
                  </h3>

                  <p>
                    Chaque planète influence vos relations,
                    vos partenariats et les personnes que vous
                    attirez.
                  </p>
                </div>
              </article>

              <article className="house-seven-step-card">
                <span>4</span>

                <div>
                  <h3>
                    Analysez les aspects
                  </h3>

                  <p>
                    Les aspects précisent les forces, les
                    tensions et les apprentissages liés aux
                    relations engagées.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 7 dans votre thème natal
            </h2>

            <p>
              La Maison 7 doit être interprétée avec
              l’ensemble du thème natal. Son signe, sa planète
              maîtresse, les planètes présentes et leurs
              aspects précisent sa signification.
            </p>

            <p>
              Cette analyse peut vous aider à mieux comprendre
              vos attentes relationnelles, vos besoins dans le
              couple et les dynamiques que vous rencontrez dans
              vos partenariats.
            </p>

            <div className="house-seven-cta-card">
              <div>
                <span className="house-seven-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Quel signe et quelles planètes se trouvent dans votre Maison 7 ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir votre Descendant, vos maisons
                  astrologiques et les positions de vos
                  planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="house-seven-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="house-seven-navigation">
            <span className="house-seven-kicker">
              Les maisons astrologiques
            </span>

            <h2>
              Continuer votre exploration
            </h2>

            <div className="house-seven-navigation-grid">
              <Link
                href="/astrologie/maisons/maison-6"
                className="house-seven-navigation-card"
              >
                <span>Ⅵ</span>

                <div>
                  <h3>Maison 6</h3>

                  <p>
                    Travail quotidien, habitudes,
                    organisation, service et équilibre.
                  </p>
                </div>
              </Link>

              <Link
                href="/astrologie/maisons"
                className="house-seven-navigation-card"
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
                href="/astrologie/maisons/maison-8"
                className="house-seven-navigation-card"
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
            </div>
          </section>

          <section className="house-seven-faq">
            <span className="house-seven-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur la Maison 7
            </h2>

            <div className="house-seven-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="house-seven-faq-item"
                  key={item.question}
                >
                  <summary>{item.question}</summary>

                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="house-seven-disclaimer">
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
