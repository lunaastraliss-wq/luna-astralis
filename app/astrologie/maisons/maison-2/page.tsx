import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/maisons/maison-2";

export const metadata: Metadata = {
  title:
    "Maison 2 en astrologie : argent, valeurs et ressources | Luna Astralis",

  description:
    "Découvrez la signification de la Maison 2 en astrologie : argent, revenus, possessions, valeurs personnelles, talents, sécurité et planètes en Maison 2.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Maison 2 en astrologie : argent, valeurs, talents et sécurité",
    description:
      "Guide complet de la Maison 2 : rapport à l’argent, ressources, possessions, valeurs personnelles, talents et planètes présentes dans la deuxième maison astrologique.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "La Maison 2 en astrologie | Luna Astralis",
    description:
      "Découvrez ce que la Maison 2 révèle sur votre argent, vos ressources, vos talents, vos valeurs et votre besoin de sécurité.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const HOUSE_TRAITS = [
  {
    title: "Vos ressources",
    symbol: "◆",
    text:
      "La Maison 2 représente les ressources matérielles et personnelles que vous pouvez utiliser pour construire votre stabilité. Elle concerne notamment l’argent, les biens, les compétences et les moyens dont vous disposez.",
  },
  {
    title: "Vos valeurs",
    symbol: "♡",
    text:
      "Cette maison décrit ce qui compte réellement pour vous. Elle révèle les principes, les besoins et les priorités sur lesquels vous construisez votre sentiment de sécurité et votre estime personnelle.",
  },
  {
    title: "Votre sentiment de sécurité",
    symbol: "Ⅱ",
    text:
      "La Maison 2 montre ce dont vous avez besoin pour vous sentir stable et en confiance. Cette sécurité peut être matérielle, émotionnelle, financière ou liée à la conscience de votre propre valeur.",
  },
];

const HOUSE_STRENGTHS = [
  "Capacité à créer de la stabilité",
  "Gestion des ressources",
  "Persévérance",
  "Conscience de ses talents",
  "Sens des priorités",
  "Construction de l’estime personnelle",
];

const HOUSE_CHALLENGES = [
  "Attachement excessif aux possessions",
  "Peur du manque",
  "Difficulté à partager",
  "Confusion entre valeur et richesse",
  "Rigidité face au changement",
  "Dépendance à la sécurité matérielle",
];

const PLANETS_IN_HOUSE = [
  {
    name: "Soleil",
    symbol: "☀",
    text:
      "Le Soleil en Maison 2 pousse à construire une identité fondée sur les talents, les valeurs et la capacité à créer ses propres ressources. La reconnaissance personnelle peut être étroitement liée au sentiment d’être utile et autonome.",
  },
  {
    name: "Lune",
    symbol: "☽",
    text:
      "La Lune en Maison 2 crée un besoin émotionnel de stabilité et de sécurité. Les finances ou les possessions peuvent fluctuer selon l’humeur, les besoins familiaux ou le désir de se sentir protégé.",
  },
  {
    name: "Mercure",
    symbol: "☿",
    text:
      "Mercure en Maison 2 favorise les revenus liés à la communication, au commerce, à l’écriture, à l’apprentissage ou aux échanges. La personne réfléchit beaucoup à la gestion de ses ressources.",
  },
  {
    name: "Vénus",
    symbol: "♀",
    text:
      "Vénus en Maison 2 peut faciliter l’attraction de ressources, le sens de la valeur et l’appréciation du confort. Les talents artistiques, relationnels ou esthétiques peuvent devenir une source de revenus.",
  },
  {
    name: "Mars",
    symbol: "♂",
    text:
      "Mars en Maison 2 donne une grande énergie pour gagner de l’argent et défendre ses intérêts. Il peut toutefois favoriser les dépenses impulsives, la compétition financière ou les décisions rapides.",
  },
  {
    name: "Jupiter",
    symbol: "♃",
    text:
      "Jupiter en Maison 2 peut amplifier les possibilités financières, les talents et le sentiment d’abondance. La personne doit néanmoins éviter les excès, les dépenses trop optimistes ou la surestimation de ses ressources.",
  },
  {
    name: "Saturne",
    symbol: "♄",
    text:
      "Saturne en Maison 2 peut créer une peur du manque ou une approche prudente de l’argent. Avec le temps, il favorise une gestion solide, responsable et durable des ressources.",
  },
  {
    name: "Uranus",
    symbol: "♅",
    text:
      "Uranus en Maison 2 peut produire des revenus irréguliers, des méthodes originales pour gagner sa vie ou un rapport indépendant aux possessions. La sécurité se construit autrement que par les modèles traditionnels.",
  },
  {
    name: "Neptune",
    symbol: "♆",
    text:
      "Neptune en Maison 2 apporte intuition et imagination dans la manière de créer des ressources. Une grande clarté est toutefois nécessaire pour éviter les dépenses floues, les illusions financières ou le manque de limites.",
  },
  {
    name: "Pluton",
    symbol: "♇",
    text:
      "Pluton en Maison 2 transforme profondément le rapport à l’argent, au pouvoir et à la sécurité. La personne peut traverser plusieurs périodes de perte, de reconstruction ou de maîtrise de ses ressources.",
  },
];

const SIGNS_IN_HOUSE = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "La Maison 2 en Bélier favorise une approche directe et active des finances. La personne cherche à gagner par ses propres initiatives, mais peut dépenser rapidement ou prendre des risques.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "La Maison 2 en Taureau renforce le besoin de sécurité, de stabilité et de confort. La personne construit généralement ses ressources avec patience et apprécie les biens durables.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "La Maison 2 en Gémeaux peut multiplier les sources de revenus. La communication, le commerce, l’écriture, l’enseignement ou les activités variées peuvent devenir particulièrement importants.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "La Maison 2 en Cancer relie la sécurité financière aux émotions, à la famille et au foyer. La personne cherche souvent à accumuler pour protéger ses proches ou créer un environnement rassurant.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "La Maison 2 en Lion encourage l’utilisation de la créativité, du leadership et de l’expression personnelle pour produire des ressources. Les dépenses peuvent aussi servir à affirmer un statut ou une image.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "La Maison 2 en Vierge apporte prudence, organisation et sens du détail dans la gestion financière. Les compétences pratiques et le service peuvent devenir des sources de revenus importantes.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "La Maison 2 en Balance peut relier les ressources aux relations, à l’art, à la beauté, au droit ou à la médiation. La personne recherche généralement un équilibre entre plaisir et stabilité.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "La Maison 2 en Scorpion donne un rapport intense à l’argent et à la sécurité. La personne peut développer une grande capacité à reconstruire ses ressources après une période de transformation.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "La Maison 2 en Sagittaire favorise la générosité, l’expansion et la confiance. Les revenus peuvent être liés aux voyages, à l’enseignement, à l’international ou à la transmission des connaissances.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "La Maison 2 en Capricorne construit la sécurité lentement et méthodiquement. La personne valorise le travail, la discipline, la responsabilité et les résultats durables.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "La Maison 2 en Verseau favorise des sources de revenus originales, technologiques ou indépendantes. La personne souhaite conserver sa liberté et peut avoir une relation non conventionnelle aux possessions.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "La Maison 2 en Poissons apporte intuition, créativité et générosité, mais demande de la clarté. Les ressources peuvent provenir de domaines artistiques, spirituels ou liés à l’aide aux autres.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente la Maison 2 en astrologie ?",
    answer:
      "La Maison 2 représente l’argent, les revenus, les possessions, les ressources, les talents, les valeurs personnelles, l’estime de soi et le besoin de sécurité matérielle.",
  },
  {
    question:
      "La Maison 2 représente-t-elle uniquement l’argent ?",
    answer:
      "Non. L’argent est un thème important de la Maison 2, mais cette maison représente aussi les talents, les compétences, les possessions, les priorités, les valeurs et la conscience de sa propre valeur.",
  },
  {
    question:
      "Que signifie une planète en Maison 2 ?",
    answer:
      "Une planète en Maison 2 influence la manière de gagner, de gérer et d’utiliser les ressources. Elle peut aussi modifier le rapport à la sécurité, aux possessions et à l’estime personnelle.",
  },
  {
    question:
      "Que signifie une Maison 2 vide ?",
    answer:
      "Une Maison 2 vide ne signifie pas une absence d’argent ou de talents. Il faut analyser le signe situé sur sa cuspide, sa planète maîtresse et les aspects reçus par cette planète.",
  },
  {
    question:
      "Quelle différence existe entre la Maison 2 et la Maison 8 ?",
    answer:
      "La Maison 2 concerne principalement les ressources personnelles, les revenus et les possessions. La Maison 8 concerne davantage les ressources partagées, les dettes, les héritages, les investissements communs et les transformations.",
  },
  {
    question:
      "Comment connaître le signe de ma Maison 2 ?",
    answer:
      "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure précise et de votre lieu de naissance. Le signe situé au début de la Maison 2 influence votre rapport aux ressources et à la sécurité.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Maison 2 en astrologie : argent, valeurs, talents et ressources",
  description:
    "Guide complet consacré à la Maison 2, à l’argent, aux possessions, aux ressources, aux talents, aux valeurs personnelles et aux planètes présentes dans cette maison.",
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
      name: "Maison 2",
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

export default function MaisonDeuxAstrologiePage() {
  return (
    <div className="house-two-page">
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

      <main className="house-two-wrap">
        <section className="house-two-hero">
          <div className="house-two-badge">
            Ⅱ Deuxième maison astrologique
          </div>

          <h1>
            La Maison 2 en astrologie
          </h1>

          <p className="house-two-hero-lead">
            La Maison 2 représente vos ressources, votre
            rapport à l’argent, vos possessions, vos talents,
            vos valeurs personnelles et ce dont vous avez
            besoin pour vous sentir en sécurité.
          </p>

          <div className="house-two-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="house-two-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification-maison-2"
              className="house-two-secondary-button"
            >
              Découvrir la Maison 2
            </a>
          </div>
        </section>

        <article className="house-two-content">
          <section id="signification-maison-2">
            <span className="house-two-kicker">
              Signification de la Maison 2
            </span>

            <h2>
              Que représente la Maison 2 ?
            </h2>

            <p>
              La Maison 2 est la maison des ressources
              personnelles. Elle décrit ce que vous possédez,
              ce que vous pouvez développer et la manière dont
              vous créez votre stabilité.
            </p>

            <p>
              Elle concerne notamment l’argent gagné par vos
              propres moyens, les biens matériels, les talents,
              les compétences et les ressources que vous
              pouvez utiliser dans votre vie quotidienne.
            </p>

            <p>
              Cette maison ne parle toutefois pas seulement
              d’argent. Elle représente aussi vos valeurs,
              c’est-à-dire les principes, les priorités et les
              éléments que vous considérez comme importants.
            </p>

            <p>
              La Maison 2 est également liée à l’estime
              personnelle. Elle montre comment vous reconnaissez
              votre propre valeur et comment vous développez un
              sentiment de sécurité intérieure.
            </p>
          </section>

          <section>
            <h2>
              Les grands domaines de la Maison 2
            </h2>

            <div className="house-two-info-grid">
              {HOUSE_TRAITS.map((item) => (
                <article
                  className="house-two-info-card"
                  key={item.title}
                >
                  <span className="house-two-card-icon">
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
              La Maison 2 et votre rapport à l’argent
            </h2>

            <p>
              La Maison 2 décrit votre manière de gagner, de
              conserver, de dépenser et d’utiliser l’argent.
              Elle peut montrer si vous recherchez avant tout
              la sécurité, la liberté, le confort, le prestige
              ou la possibilité de vivre selon vos propres
              valeurs.
            </p>

            <p>
              Le signe situé sur la cuspide de cette maison
              influence votre approche financière. Les
              planètes présentes ajoutent également leurs
              besoins, leurs qualités et leurs défis.
            </p>

            <p>
              Une Maison 2 fortement occupée peut donner une
              grande conscience des ressources et de la
              sécurité. Elle peut aussi rendre les questions
              financières particulièrement importantes dans
              le parcours personnel.
            </p>

            <div className="house-two-highlight-card">
              <div className="house-two-highlight-symbol">
                ◆
              </div>

              <div>
                <h3>
                  Votre argent reflète souvent vos priorités
                </h3>

                <p>
                  La manière dont vous utilisez vos ressources
                  révèle généralement ce que vous valorisez.
                  Certaines personnes investissent dans le
                  confort, d’autres dans la liberté, les
                  expériences, la famille, la connaissance ou
                  la création.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Valeurs personnelles et estime de soi
            </h2>

            <p>
              La Maison 2 décrit ce que vous estimez précieux.
              Elle peut représenter des valeurs matérielles,
              mais aussi des valeurs morales, affectives,
              intellectuelles ou spirituelles.
            </p>

            <p>
              Lorsque votre vie respecte vos valeurs, vous
              pouvez ressentir davantage de stabilité et de
              cohérence. Lorsque vous agissez constamment
              contre elles, un sentiment d’insécurité ou de
              perte de sens peut apparaître.
            </p>

            <p>
              Cette maison est aussi associée à l’estime de
              soi. Elle vous invite à reconnaître que votre
              valeur ne dépend pas uniquement de vos revenus,
              de vos possessions ou de votre productivité.
            </p>
          </section>

          <section>
            <h2>
              Les talents et les ressources naturelles
            </h2>

            <p>
              La Maison 2 peut révéler les talents qui vous
              permettent de construire une stabilité. Ces
              talents ne sont pas toujours spectaculaires :
              il peut s’agir de patience, d’organisation, de
              créativité, de communication, de sens pratique
              ou de capacité relationnelle.
            </p>

            <p>
              Le signe de la Maison 2 indique souvent la
              manière dont vous utilisez ces capacités. Une
              planète présente dans cette maison peut devenir
              une ressource importante lorsqu’elle est
              développée consciemment.
            </p>

            <p>
              L’un des apprentissages de la Maison 2 consiste
              à reconnaître ses compétences et à leur donner
              une valeur concrète, sans les minimiser ni les
              comparer constamment à celles des autres.
            </p>
          </section>

          <section>
            <h2>
              Les forces et les défis de la Maison 2
            </h2>

            <div className="house-two-strengths-grid">
              <div className="house-two-list-card">
                <span className="house-two-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Une Maison 2 équilibrée
                </h3>

                <ul>
                  {HOUSE_STRENGTHS.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="house-two-list-card">
                <span className="house-two-kicker">
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
              Les planètes en Maison 2
            </h2>

            <p>
              Une planète présente en Maison 2 influence votre
              rapport aux ressources, à l’argent, aux talents,
              aux possessions et à la sécurité.
            </p>

            <p>
              Elle peut montrer une capacité naturelle à
              développer certaines ressources, mais aussi une
              zone dans laquelle vous devez apprendre à créer
              davantage de stabilité et de conscience.
            </p>

            <div className="house-two-planets-grid">
              {PLANETS_IN_HOUSE.map((planet) => (
                <article
                  className="house-two-planet-card"
                  key={planet.name}
                >
                  <div className="house-two-planet-symbol">
                    {planet.symbol}
                  </div>

                  <div>
                    <h3>
                      {planet.name} en Maison 2
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
              Les douze signes dans la Maison 2
            </h2>

            <p>
              Le signe placé au début de la Maison 2 décrit
              votre manière de construire vos ressources, de
              gérer vos finances et de rechercher la sécurité.
            </p>

            <p>
              Il montre aussi les qualités que vous pouvez
              développer pour reconnaître vos talents et
              renforcer votre sentiment de valeur personnelle.
            </p>

            <div className="house-two-signs-grid">
              {SIGNS_IN_HOUSE.map((item) => (
                <article
                  className="house-two-sign-card"
                  key={item.sign}
                >
                  <div className="house-two-sign-symbol">
                    {item.symbol}
                  </div>

                  <div>
                    <h3>
                      Maison 2 en {item.sign}
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
              Maison 2 vide : que signifie-t-elle ?
            </h2>

            <p>
              Une Maison 2 vide ne signifie pas que vous
              n’aurez pas d’argent, de ressources ou de
              talents. Une maison reste active même lorsqu’elle
              ne contient aucune planète.
            </p>

            <p>
              Pour interpréter une Maison 2 vide, observez le
              signe placé sur sa cuspide, puis identifiez la
              planète qui gouverne ce signe.
            </p>

            <p>
              La maison et le signe occupés par cette planète
              maîtresse montrent où et comment les thèmes de
              la Maison 2 cherchent à se développer dans votre
              vie.
            </p>
          </section>

          <section>
            <h2>
              La planète maîtresse de la Maison 2
            </h2>

            <p>
              La planète maîtresse de la Maison 2 est celle
              qui gouverne le signe situé au début de cette
              maison. Elle apporte des informations essentielles
              sur la manière dont vous développez vos
              ressources.
            </p>

            <p>
              Sa position par signe, par maison et par aspect
              précise vos stratégies financières, vos talents
              et les expériences qui influencent votre besoin
              de sécurité.
            </p>

            <div className="house-two-rulers-grid">
              <div className="house-two-ruler-card">
                <span>♈</span>
                <h3>Bélier</h3>
                <p>Mars</p>
              </div>

              <div className="house-two-ruler-card">
                <span>♉</span>
                <h3>Taureau</h3>
                <p>Vénus</p>
              </div>

              <div className="house-two-ruler-card">
                <span>♊</span>
                <h3>Gémeaux</h3>
                <p>Mercure</p>
              </div>

              <div className="house-two-ruler-card">
                <span>♋</span>
                <h3>Cancer</h3>
                <p>Lune</p>
              </div>

              <div className="house-two-ruler-card">
                <span>♌</span>
                <h3>Lion</h3>
                <p>Soleil</p>
              </div>

              <div className="house-two-ruler-card">
                <span>♍</span>
                <h3>Vierge</h3>
                <p>Mercure</p>
              </div>

              <div className="house-two-ruler-card">
                <span>♎</span>
                <h3>Balance</h3>
                <p>Vénus</p>
              </div>

              <div className="house-two-ruler-card">
                <span>♏</span>
                <h3>Scorpion</h3>
                <p>Pluton et Mars</p>
              </div>

              <div className="house-two-ruler-card">
                <span>♐</span>
                <h3>Sagittaire</h3>
                <p>Jupiter</p>
              </div>

              <div className="house-two-ruler-card">
                <span>♑</span>
                <h3>Capricorne</h3>
                <p>Saturne</p>
              </div>

              <div className="house-two-ruler-card">
                <span>♒</span>
                <h3>Verseau</h3>
                <p>Uranus et Saturne</p>
              </div>

              <div className="house-two-ruler-card">
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

            <div className="house-two-comparison-grid">
              <article className="house-two-comparison-card">
                <span className="house-two-kicker">
                  Maison 2
                </span>

                <h3>
                  Vos ressources personnelles
                </h3>

                <p>
                  La Maison 2 représente principalement
                  l’argent que vous gagnez, les biens que vous
                  possédez, vos talents, vos valeurs et votre
                  sentiment de sécurité personnelle.
                </p>
              </article>

              <article className="house-two-comparison-card">
                <span className="house-two-kicker">
                  Maison 8
                </span>

                <h3>
                  Les ressources partagées
                </h3>

                <p>
                  La Maison 8 représente davantage l’argent
                  partagé avec d’autres : dettes, prêts,
                  héritages, impôts, investissements communs
                  et ressources du couple.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 2 dans votre évolution personnelle
            </h2>

            <p>
              La Maison 2 vous invite à construire une sécurité
              qui ne repose pas uniquement sur la peur du
              manque ou l’accumulation de possessions.
            </p>

            <p>
              Elle vous apprend à reconnaître vos talents, à
              valoriser vos compétences et à utiliser vos
              ressources d’une manière cohérente avec vos
              véritables priorités.
            </p>

            <p>
              Son évolution consiste souvent à comprendre que
              la stabilité matérielle est importante, mais
              qu’elle devient plus solide lorsqu’elle
              s’accompagne d’une estime personnelle et d’un
              sentiment de valeur intérieure.
            </p>
          </section>

          <section>
            <h2>
              Comment interpréter votre Maison 2 ?
            </h2>

            <div className="house-two-steps">
              <article className="house-two-step-card">
                <span>1</span>

                <div>
                  <h3>
                    Identifiez le signe de la Maison 2
                  </h3>

                  <p>
                    Le signe situé sur sa cuspide décrit votre
                    approche naturelle des ressources, de
                    l’argent et de la sécurité.
                  </p>
                </div>
              </article>

              <article className="house-two-step-card">
                <span>2</span>

                <div>
                  <h3>
                    Repérez sa planète maîtresse
                  </h3>

                  <p>
                    Sa position montre où vos talents et vos
                    ressources cherchent à se développer.
                  </p>
                </div>
              </article>

              <article className="house-two-step-card">
                <span>3</span>

                <div>
                  <h3>
                    Observez les planètes présentes
                  </h3>

                  <p>
                    Chaque planète en Maison 2 influence votre
                    rapport à l’argent, aux talents et à
                    l’estime personnelle.
                  </p>
                </div>
              </article>

              <article className="house-two-step-card">
                <span>4</span>

                <div>
                  <h3>
                    Analysez les aspects
                  </h3>

                  <p>
                    Les aspects à la planète maîtresse précisent
                    les facilités, les tensions et les
                    apprentissages liés à vos ressources.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 2 dans votre thème natal
            </h2>

            <p>
              La Maison 2 doit être interprétée avec l’ensemble
              du thème natal. Son signe, ses planètes, sa
              planète maîtresse et ses aspects révèlent
              différentes dimensions de votre rapport à la
              sécurité.
            </p>

            <p>
              Cette analyse peut vous aider à mieux comprendre
              votre façon de gérer l’argent, les talents que
              vous pouvez développer et les valeurs qui
              orientent vos décisions.
            </p>

            <div className="house-two-cta-card">
              <div>
                <span className="house-two-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Quel signe et quelles planètes se trouvent dans votre Maison 2 ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir vos maisons astrologiques, votre
                  Ascendant et les positions de vos planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="house-two-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="house-two-navigation">
            <span className="house-two-kicker">
              Les maisons astrologiques
            </span>

            <h2>
              Continuer votre exploration
            </h2>

            <div className="house-two-navigation-grid">
              <Link
                href="/astrologie/maisons/maison-1"
                className="house-two-navigation-card"
              >
                <span>Ⅰ</span>

                <div>
                  <h3>
                    Maison 1
                  </h3>

                  <p>
                    Identité, personnalité, apparence et
                    manière d’aborder la vie.
                  </p>
                </div>
              </Link>

              <Link
                href="/astrologie/maisons"
                className="house-two-navigation-card"
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
                href="/astrologie/maisons/maison-3"
                className="house-two-navigation-card"
              >
                <span>Ⅲ</span>

                <div>
                  <h3>
                    Maison 3
                  </h3>

                  <p>
                    Communication, apprentissage, entourage et
                    déplacements quotidiens.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <section className="house-two-faq">
            <span className="house-two-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur la Maison 2
            </h2>

            <div className="house-two-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="house-two-faq-item"
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

          <p className="house-two-disclaimer">
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
