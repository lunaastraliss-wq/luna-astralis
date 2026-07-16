import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/maisons/maison-11";

export const metadata: Metadata = {
  title:
    "Maison 11 en astrologie : amitiés, réseaux et projets | Luna Astralis",

  description:
    "Découvrez la Maison 11 en astrologie : amitiés, réseaux, communautés, projets collectifs, espoirs, causes, collaborations et vision de l’avenir.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Maison 11 en astrologie : amitiés, réseaux, projets et avenir",
    description:
      "Guide complet de la Maison 11 : amitiés, groupes, réseaux, communautés, projets collectifs, causes, espoirs et contribution au futur.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "La Maison 11 en astrologie | Luna Astralis",
    description:
      "Découvrez ce que la Maison 11 révèle sur vos amitiés, vos réseaux, vos projets collectifs et votre vision de l’avenir.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const HOUSE_TRAITS = [
  {
    title: "Vos amitiés",
    symbol: "Ⅺ",
    text:
      "La Maison 11 décrit votre manière de créer des liens amicaux, de choisir votre entourage et de participer à des relations fondées sur des intérêts communs.",
  },
  {
    title: "Vos réseaux",
    symbol: "◎",
    text:
      "Cette maison représente les groupes, les communautés, les associations, les réseaux professionnels et les personnes qui soutiennent vos projets.",
  },
  {
    title: "Votre vision de l’avenir",
    symbol: "✦",
    text:
      "Elle concerne vos espoirs, vos objectifs à long terme, vos idéaux et la contribution que vous souhaitez apporter à un projet plus grand que vous.",
  },
];

const HOUSE_STRENGTHS = [
  "Capacité à créer des réseaux",
  "Esprit de collaboration",
  "Ouverture aux idées nouvelles",
  "Vision tournée vers l’avenir",
  "Engagement collectif",
  "Fidélité en amitié",
];

const HOUSE_CHALLENGES = [
  "Difficulté à se sentir intégré",
  "Dépendance au groupe",
  "Relations amicales instables",
  "Idéalisation des communautés",
  "Tendance à négliger l’individu",
  "Projets trop nombreux ou dispersés",
];

const PLANETS_IN_HOUSE = [
  {
    name: "Soleil",
    symbol: "☀",
    text:
      "Le Soleil en Maison 11 donne un fort besoin de participer à des groupes, de développer des projets et de contribuer à une vision collective. La personne peut se distinguer dans les réseaux, les associations ou les communautés.",
  },
  {
    name: "Lune",
    symbol: "☽",
    text:
      "La Lune en Maison 11 crée un besoin émotionnel d’appartenance, d’amitié et de soutien collectif. La personne peut considérer ses amis comme une famille choisie et être très sensible à l’ambiance des groupes.",
  },
  {
    name: "Mercure",
    symbol: "☿",
    text:
      "Mercure en Maison 11 favorise les échanges, les réseaux, les collaborations intellectuelles et les projets fondés sur la communication. La personne aime partager ses idées et créer des connexions.",
  },
  {
    name: "Vénus",
    symbol: "♀",
    text:
      "Vénus en Maison 11 favorise les amitiés harmonieuses, les relations sociales et les collaborations agréables. L’amour peut parfois naître d’une amitié ou d’un groupe partageant les mêmes intérêts.",
  },
  {
    name: "Mars",
    symbol: "♂",
    text:
      "Mars en Maison 11 donne de l’énergie pour défendre une cause, lancer des projets ou mobiliser un groupe. La personne peut toutefois rencontrer des tensions, de la compétition ou des désaccords dans ses réseaux.",
  },
  {
    name: "Jupiter",
    symbol: "♃",
    text:
      "Jupiter en Maison 11 peut favoriser les amitiés, les réseaux étendus et les projets collectifs ambitieux. La personne peut recevoir du soutien grâce à ses relations et attirer des occasions par sa communauté.",
  },
  {
    name: "Saturne",
    symbol: "♄",
    text:
      "Saturne en Maison 11 peut rendre les amitiés sélectives, sérieuses ou peu nombreuses. Avec le temps, la personne peut bâtir des relations solides et jouer un rôle de responsabilité dans un groupe.",
  },
  {
    name: "Uranus",
    symbol: "♅",
    text:
      "Uranus en Maison 11 renforce le besoin de liberté, d’originalité et de nouveauté dans les amitiés. La personne peut attirer des groupes atypiques et participer à des projets innovants ou technologiques.",
  },
  {
    name: "Neptune",
    symbol: "♆",
    text:
      "Neptune en Maison 11 apporte de grands idéaux, de la compassion et un désir de contribuer à une cause. La personne doit cependant éviter les déceptions, les attentes floues et les groupes mal définis.",
  },
  {
    name: "Pluton",
    symbol: "♇",
    text:
      "Pluton en Maison 11 donne des expériences sociales intenses et transformatrices. La personne peut exercer une influence importante dans un groupe, mais doit rester attentive aux enjeux de pouvoir.",
  },
];

const SIGNS_IN_HOUSE = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "La Maison 11 en Bélier crée des amitiés dynamiques et encourage à prendre l’initiative dans les projets collectifs. La personne peut naturellement devenir un moteur dans ses groupes.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "La Maison 11 en Taureau recherche des amitiés stables, fidèles et durables. Les projets se développent progressivement et doivent apporter sécurité ou résultats concrets.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "La Maison 11 en Gémeaux favorise les réseaux nombreux, les échanges d’idées et les collaborations variées. La personne peut appartenir à plusieurs groupes différents.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "La Maison 11 en Cancer recherche des amitiés protectrices, chaleureuses et émotionnellement sécurisantes. Les groupes peuvent devenir une véritable famille choisie.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "La Maison 11 en Lion cherche à rayonner dans les groupes et à participer à des projets créatifs. La personne peut être reconnue pour son enthousiasme, sa générosité ou son leadership.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "La Maison 11 en Vierge privilégie les groupes utiles, organisés et tournés vers un objectif précis. La personne peut apporter méthode, analyse et sens du service aux projets collectifs.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "La Maison 11 en Balance recherche des relations amicales harmonieuses et des collaborations équitables. La personne peut jouer un rôle de médiateur dans les groupes.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "La Maison 11 en Scorpion crée des amitiés profondes, loyales et parfois très sélectives. Les groupes peuvent devenir des lieux de transformation, d’influence et d’engagement intense.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "La Maison 11 en Sagittaire favorise les réseaux internationaux, les amitiés ouvertes et les projets fondés sur la découverte, l’enseignement ou une vision commune.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "La Maison 11 en Capricorne construit des relations sérieuses et stratégiques. La personne peut développer des réseaux professionnels solides et poursuivre des objectifs à long terme.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "La Maison 11 en Verseau renforce l’indépendance, l’innovation et l’engagement collectif. La personne recherche des groupes ouverts, progressistes et respectueux des différences.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "La Maison 11 en Poissons apporte compassion, intuition et idéalisme dans les amitiés. La personne peut être attirée par les causes humanitaires, artistiques ou spirituelles.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente la Maison 11 en astrologie ?",
    answer:
      "La Maison 11 représente les amitiés, les groupes, les réseaux, les communautés, les projets collectifs, les causes, les espoirs et la vision de l’avenir.",
  },
  {
    question:
      "Que signifie une planète en Maison 11 ?",
    answer:
      "Une planète en Maison 11 influence la manière de vivre les amitiés, de participer aux groupes, de créer des réseaux et de poursuivre des projets à long terme.",
  },
  {
    question:
      "Que signifie une Maison 11 vide ?",
    answer:
      "Une Maison 11 vide ne signifie pas une absence d’amis ou de projets. Il faut analyser le signe placé sur sa cuspide, sa planète maîtresse et les aspects reçus par cette planète.",
  },
  {
    question:
      "La Maison 11 représente-t-elle les réseaux sociaux ?",
    answer:
      "Symboliquement, elle peut être associée aux réseaux sociaux, aux communautés numériques et aux plateformes qui permettent de créer des liens autour d’intérêts communs.",
  },
  {
    question:
      "Quelle différence existe entre la Maison 5 et la Maison 11 ?",
    answer:
      "La Maison 5 représente l’expression personnelle, la créativité et les plaisirs individuels. La Maison 11 représente les projets collectifs, les groupes et la contribution à une communauté.",
  },
  {
    question:
      "Pourquoi la Maison 11 représente-t-elle les espoirs ?",
    answer:
      "Elle concerne les objectifs à long terme, les projets tournés vers l’avenir et les aspirations que vous cherchez à réaliser avec l’aide de vos réseaux ou de votre communauté.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Maison 11 en astrologie : amitiés, réseaux, projets collectifs et avenir",
  description:
    "Guide complet consacré à la Maison 11, aux amitiés, aux réseaux, aux communautés, aux projets collectifs, aux espoirs et à la vision de l’avenir.",
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
      name: "Maison 11",
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

export default function MaisonOnzeAstrologiePage() {
  return (
    <div className="house-eleven-page">
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

      <main className="house-eleven-wrap">
        <section className="house-eleven-hero">
          <div className="house-eleven-badge">
            Ⅺ Onzième maison astrologique
          </div>

          <h1>
            La Maison 11 en astrologie
          </h1>

          <p className="house-eleven-hero-lead">
            La Maison 11 représente les amitiés, les réseaux,
            les communautés, les projets collectifs, les
            espoirs et votre manière de participer à la
            construction de l’avenir.
          </p>

          <div className="house-eleven-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="house-eleven-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification-maison-11"
              className="house-eleven-secondary-button"
            >
              Découvrir la Maison 11
            </a>
          </div>
        </section>

        <article className="house-eleven-content">
          <section id="signification-maison-11">
            <span className="house-eleven-kicker">
              Signification de la Maison 11
            </span>

            <h2>
              Que représente la Maison 11 ?
            </h2>

            <p>
              La Maison 11 est la maison des amitiés, des
              groupes, des réseaux et des projets collectifs.
            </p>

            <p>
              Elle décrit la manière dont vous vous reliez aux
              personnes qui partagent vos intérêts, vos idées
              ou vos objectifs.
            </p>

            <p>
              Cette maison concerne également les associations,
              les communautés, les réseaux professionnels, les
              causes sociales et les collaborations tournées
              vers un résultat commun.
            </p>

            <p>
              Elle révèle enfin vos espoirs, vos objectifs à
              long terme et votre vision de ce que l’avenir
              pourrait devenir.
            </p>
          </section>

          <section>
            <h2>
              Les grands domaines de la Maison 11
            </h2>

            <div className="house-eleven-info-grid">
              {HOUSE_TRAITS.map((item) => (
                <article
                  className="house-eleven-info-card"
                  key={item.title}
                >
                  <span className="house-eleven-card-icon">
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
              Amitiés et relations choisies
            </h2>

            <p>
              La Maison 11 représente les relations amicales,
              les personnes que vous choisissez librement et
              les liens fondés sur des intérêts communs.
            </p>

            <p>
              Contrairement aux relations familiales, ces liens
              reposent généralement sur une affinité, une
              vision partagée ou une volonté de progresser
              ensemble.
            </p>

            <p>
              Le signe et les planètes présents dans cette
              maison décrivent le type d’amis que vous attirez
              et la manière dont vous vous comportez dans une
              relation amicale.
            </p>

            <div className="house-eleven-highlight-card">
              <div className="house-eleven-highlight-symbol">
                Ⅺ
              </div>

              <div>
                <h3>
                  La Maison 11 révèle votre place dans le collectif
                </h3>

                <p>
                  Pour interpréter cette maison, observez le
                  signe placé sur sa cuspide, sa planète
                  maîtresse, les planètes présentes et les
                  aspects qu’elles reçoivent.
                </p>

                <Link
                  href="/astrologie/maisons"
                  className="house-eleven-text-link"
                >
                  Comprendre les douze maisons astrologiques
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Groupes, communautés et sentiment d’appartenance
            </h2>

            <p>
              La Maison 11 montre votre manière de participer à
              une communauté et de trouver votre place parmi
              des personnes différentes.
            </p>

            <p>
              Elle concerne les clubs, les associations, les
              équipes, les mouvements sociaux, les
              organisations et les communautés numériques.
            </p>

            <p>
              Une Maison 11 importante peut donner un grand
              besoin d’appartenance, de collaboration ou de
              participation à un projet collectif.
            </p>
          </section>

          <section>
            <h2>
              Réseaux professionnels et occasions
            </h2>

            <p>
              La Maison 11 représente aussi les réseaux
              professionnels, les contacts et les personnes qui
              peuvent soutenir vos projets.
            </p>

            <p>
              Elle montre votre manière de créer des liens, de
              collaborer et de développer des relations utiles
              à long terme.
            </p>

            <p>
              Une Maison 11 harmonieuse peut faciliter les
              recommandations, les partenariats, les
              introductions et les occasions provenant de
              votre entourage.
            </p>
          </section>

          <section>
            <h2>
              Projets collectifs et collaborations
            </h2>

            <p>
              La Maison 11 concerne les projets qui ne peuvent
              pas être réalisés seul.
            </p>

            <p>
              Elle représente la capacité à réunir plusieurs
              talents, à partager des responsabilités et à
              travailler vers un objectif commun.
            </p>

            <p>
              Elle montre également la manière dont vous
              contribuez à un groupe sans perdre votre
              individualité.
            </p>
          </section>

          <section>
            <h2>
              Espoirs, rêves et objectifs à long terme
            </h2>

            <p>
              La Maison 11 est traditionnellement associée aux
              espoirs, aux souhaits et aux projets tournés vers
              l’avenir.
            </p>

            <p>
              Elle représente ce que vous cherchez à construire
              au-delà de vos besoins immédiats et les objectifs
              qui demandent du temps, des relations et une
              vision claire.
            </p>

            <p>
              Elle peut révéler les rêves que vous poursuivez,
              mais aussi les personnes et les communautés qui
              peuvent vous aider à les réaliser.
            </p>
          </section>

          <section>
            <h2>
              Causes sociales et engagement collectif
            </h2>

            <p>
              La Maison 11 représente les causes, les idéaux et
              les projets qui cherchent à améliorer la société.
            </p>

            <p>
              Elle peut montrer un intérêt pour l’humanitaire,
              l’environnement, l’égalité, les droits, les
              sciences, l’éducation ou les innovations
              sociales.
            </p>

            <p>
              Une forte Maison 11 peut donner le désir de
              contribuer à un changement qui dépasse les
              intérêts personnels.
            </p>
          </section>

          <section>
            <h2>
              Innovation, technologie et avenir
            </h2>

            <p>
              La Maison 11 est souvent associée à l’innovation,
              aux nouvelles technologies et aux idées tournées
              vers le futur.
            </p>

            <p>
              Elle représente la capacité à imaginer de
              nouvelles solutions, à remettre en question les
              modèles existants et à connecter les personnes
              autrement.
            </p>

            <p>
              Les projets numériques, les communautés en ligne,
              les réseaux sociaux et les plateformes
              collaboratives peuvent ainsi être liés à cette
              maison.
            </p>
          </section>

          <section>
            <h2>
              Individualité et participation au groupe
            </h2>

            <p>
              La Maison 11 demande de trouver un équilibre entre
              votre identité personnelle et votre appartenance
              à un collectif.
            </p>

            <p>
              Elle vous apprend à contribuer sans vous effacer,
              à collaborer sans suivre aveuglément et à
              respecter la diversité des personnes présentes.
            </p>

            <p>
              Son défi consiste à rester fidèle à vos valeurs
              tout en créant des liens avec des personnes qui
              ne pensent pas toujours comme vous.
            </p>
          </section>

          <section>
            <h2>
              Popularité et reconnaissance sociale
            </h2>

            <p>
              La Maison 11 peut montrer la manière dont vous
              êtes accueilli dans les groupes et la place que
              vous occupez dans vos réseaux.
            </p>

            <p>
              Elle peut indiquer une capacité à rassembler, à
              influencer une communauté ou à devenir une
              personne de référence dans un milieu.
            </p>

            <p>
              Cette reconnaissance dépend toutefois de la
              qualité des liens créés, de la contribution
              apportée et de la confiance construite avec le
              temps.
            </p>
          </section>

          <section>
            <h2>
              Les forces et les défis de la Maison 11
            </h2>

            <div className="house-eleven-strengths-grid">
              <div className="house-eleven-list-card">
                <span className="house-eleven-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Une Maison 11 équilibrée
                </h3>

                <ul>
                  {HOUSE_STRENGTHS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="house-eleven-list-card">
                <span className="house-eleven-kicker">
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
              Les planètes en Maison 11
            </h2>

            <p>
              Une planète présente en Maison 11 influence les
              amitiés, les réseaux, les projets collectifs et
              les objectifs à long terme.
            </p>

            <p>
              Son énergie peut devenir particulièrement visible
              dans les groupes ou dans la manière de participer
              à une communauté.
            </p>

            <div className="house-eleven-planets-grid">
              {PLANETS_IN_HOUSE.map((planet) => (
                <article
                  className="house-eleven-planet-card"
                  key={planet.name}
                >
                  <div className="house-eleven-planet-symbol">
                    {planet.symbol}
                  </div>

                  <div>
                    <h3>
                      {planet.name} en Maison 11
                    </h3>

                    <p>{planet.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Les douze signes dans la Maison 11
            </h2>

            <p>
              Le signe placé sur la cuspide de la Maison 11
              décrit votre manière de créer des amitiés, de
              rejoindre un groupe et de poursuivre vos projets.
            </p>

            <p>
              Il montre également les qualités que vous
              développez lorsque vous collaborez avec d’autres
              personnes.
            </p>

            <div className="house-eleven-signs-grid">
              {SIGNS_IN_HOUSE.map((item) => (
                <article
                  className="house-eleven-sign-card"
                  key={item.sign}
                >
                  <div className="house-eleven-sign-symbol">
                    {item.symbol}
                  </div>

                  <div>
                    <h3>
                      Maison 11 en {item.sign}
                    </h3>

                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Maison 11 vide : que signifie-t-elle ?
            </h2>

            <p>
              Une Maison 11 vide ne signifie pas une absence
              d’amis, de réseaux ou de projets collectifs.
            </p>

            <p>
              Toutes les maisons restent actives. Il faut
              observer le signe situé sur la cuspide de la
              Maison 11 et la planète qui gouverne ce signe.
            </p>

            <p>
              La position de cette planète maîtresse montre
              comment et dans quel domaine les thèmes de
              l’amitié, des projets et de l’avenir cherchent à
              s’exprimer.
            </p>
          </section>

          <section>
            <h2>
              La planète maîtresse de la Maison 11
            </h2>

            <p>
              La planète maîtresse de la Maison 11 est celle
              qui gouverne le signe situé au début de cette
              maison.
            </p>

            <p>
              Sa position par signe, par maison et par aspect
              apporte des informations importantes sur vos
              amitiés, vos réseaux et vos objectifs à long
              terme.
            </p>

            <div className="house-eleven-rulers-grid">
              <div className="house-eleven-ruler-card">
                <span>♈</span>
                <h3>Bélier</h3>
                <p>Mars</p>
              </div>

              <div className="house-eleven-ruler-card">
                <span>♉</span>
                <h3>Taureau</h3>
                <p>Vénus</p>
              </div>

              <div className="house-eleven-ruler-card">
                <span>♊</span>
                <h3>Gémeaux</h3>
                <p>Mercure</p>
              </div>

              <div className="house-eleven-ruler-card">
                <span>♋</span>
                <h3>Cancer</h3>
                <p>Lune</p>
              </div>

              <div className="house-eleven-ruler-card">
                <span>♌</span>
                <h3>Lion</h3>
                <p>Soleil</p>
              </div>

              <div className="house-eleven-ruler-card">
                <span>♍</span>
                <h3>Vierge</h3>
                <p>Mercure</p>
              </div>

              <div className="house-eleven-ruler-card">
                <span>♎</span>
                <h3>Balance</h3>
                <p>Vénus</p>
              </div>

              <div className="house-eleven-ruler-card">
                <span>♏</span>
                <h3>Scorpion</h3>
                <p>Pluton et Mars</p>
              </div>

              <div className="house-eleven-ruler-card">
                <span>♐</span>
                <h3>Sagittaire</h3>
                <p>Jupiter</p>
              </div>

              <div className="house-eleven-ruler-card">
                <span>♑</span>
                <h3>Capricorne</h3>
                <p>Saturne</p>
              </div>

              <div className="house-eleven-ruler-card">
                <span>♒</span>
                <h3>Verseau</h3>
                <p>Uranus et Saturne</p>
              </div>

              <div className="house-eleven-ruler-card">
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

            <div className="house-eleven-comparison-grid">
              <article className="house-eleven-comparison-card">
                <span className="house-eleven-kicker">
                  Maison 5
                </span>

                <h3>
                  Votre expression personnelle
                </h3>

                <p>
                  La Maison 5 représente la créativité, les
                  loisirs, la romance, le plaisir et les
                  projets qui expriment votre individualité.
                </p>
              </article>

              <article className="house-eleven-comparison-card">
                <span className="house-eleven-kicker">
                  Maison 11
                </span>

                <h3>
                  Votre contribution collective
                </h3>

                <p>
                  La Maison 11 représente les groupes, les
                  projets collectifs, les réseaux et les
                  objectifs réalisés avec d’autres personnes.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              Maison 10 et Maison 11 : quelle différence ?
            </h2>

            <div className="house-eleven-comparison-grid">
              <article className="house-eleven-comparison-card">
                <span className="house-eleven-kicker">
                  Maison 10
                </span>

                <h3>
                  Votre réussite personnelle
                </h3>

                <p>
                  La Maison 10 représente la carrière, la
                  réputation, l’autorité et la place que vous
                  construisez dans la société.
                </p>
              </article>

              <article className="house-eleven-comparison-card">
                <span className="house-eleven-kicker">
                  Maison 11
                </span>

                <h3>
                  Votre participation au futur
                </h3>

                <p>
                  La Maison 11 représente la manière dont vous
                  utilisez vos réseaux, vos idées et vos
                  projets pour contribuer à un objectif
                  collectif.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              Amitié et amour : Maison 11 ou Maison 7 ?
            </h2>

            <div className="house-eleven-comparison-grid">
              <article className="house-eleven-comparison-card">
                <span className="house-eleven-kicker">
                  Maison 7
                </span>

                <h3>
                  La relation engagée
                </h3>

                <p>
                  La Maison 7 représente le couple, les
                  contrats, les partenariats et les relations
                  construites entre deux personnes.
                </p>
              </article>

              <article className="house-eleven-comparison-card">
                <span className="house-eleven-kicker">
                  Maison 11
                </span>

                <h3>
                  La relation amicale
                </h3>

                <p>
                  La Maison 11 représente les amitiés, les
                  groupes, les réseaux et les relations fondées
                  sur des intérêts ou des idéaux communs.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 11 dans votre évolution personnelle
            </h2>

            <p>
              La Maison 11 vous invite à comprendre que
              certains objectifs deviennent possibles grâce à
              la collaboration.
            </p>

            <p>
              Elle vous apprend à créer des liens, à partager
              vos idées et à participer à un projet plus grand
              que vos ambitions personnelles.
            </p>

            <p>
              Son évolution consiste à contribuer au collectif
              sans renoncer à votre individualité, à vos
              limites et à vos valeurs.
            </p>
          </section>

          <section>
            <h2>
              Comment interpréter votre Maison 11 ?
            </h2>

            <div className="house-eleven-steps">
              <article className="house-eleven-step-card">
                <span>1</span>

                <div>
                  <h3>
                    Identifiez le signe de la Maison 11
                  </h3>

                  <p>
                    Il décrit votre manière de créer des
                    amitiés, de participer à un groupe et de
                    poursuivre vos objectifs.
                  </p>
                </div>
              </article>

              <article className="house-eleven-step-card">
                <span>2</span>

                <div>
                  <h3>
                    Repérez sa planète maîtresse
                  </h3>

                  <p>
                    Sa position montre où les thèmes de
                    l’amitié, des réseaux et des projets
                    collectifs cherchent à s’exprimer.
                  </p>
                </div>
              </article>

              <article className="house-eleven-step-card">
                <span>3</span>

                <div>
                  <h3>
                    Observez les planètes présentes
                  </h3>

                  <p>
                    Chaque planète influence vos groupes, vos
                    collaborations, vos espoirs et votre
                    manière de créer des liens.
                  </p>
                </div>
              </article>

              <article className="house-eleven-step-card">
                <span>4</span>

                <div>
                  <h3>
                    Analysez les aspects
                  </h3>

                  <p>
                    Les aspects précisent les forces, les
                    tensions et les apprentissages liés aux
                    amitiés et aux projets collectifs.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 11 dans votre thème natal
            </h2>

            <p>
              La Maison 11 doit être interprétée avec
              l’ensemble du thème natal. Son signe, sa planète
              maîtresse, les planètes présentes et leurs
              aspects précisent sa signification.
            </p>

            <p>
              Cette analyse peut vous aider à mieux comprendre
              vos amitiés, votre rapport aux groupes, les
              réseaux qui vous soutiennent et les projets que
              vous souhaitez réaliser.
            </p>

            <div className="house-eleven-cta-card">
              <div>
                <span className="house-eleven-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Quel signe et quelles planètes se trouvent dans votre Maison 11 ?
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
                className="house-eleven-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="house-eleven-navigation">
            <span className="house-eleven-kicker">
              Les maisons astrologiques
            </span>

            <h2>
              Continuer votre exploration
            </h2>

            <div className="house-eleven-navigation-grid">
              <Link
                href="/astrologie/maisons/maison-10"
                className="house-eleven-navigation-card"
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

              <Link
                href="/astrologie/maisons"
                className="house-eleven-navigation-card"
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
                href="/astrologie/maisons/maison-12"
                className="house-eleven-navigation-card"
              >
                <span>Ⅻ</span>

                <div>
                  <h3>Maison 12</h3>

                  <p>
                    Inconscient, solitude, spiritualité,
                    guérison intérieure et monde invisible.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <section className="house-eleven-faq">
            <span className="house-eleven-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur la Maison 11
            </h2>

            <div className="house-eleven-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="house-eleven-faq-item"
                  key={item.question}
                >
                  <summary>{item.question}</summary>

                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="house-eleven-disclaimer">
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
