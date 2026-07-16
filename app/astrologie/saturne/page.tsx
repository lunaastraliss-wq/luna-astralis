import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/saturne";

export const metadata: Metadata = {
  title:
    "Saturne en astrologie : limites, maturité et responsabilités | Luna Astralis",

  description:
    "Découvrez la signification de Saturne en astrologie, son influence sur les responsabilités, les limites, la discipline et son expression dans les 12 signes du zodiaque.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Saturne en astrologie : structure, maturité et responsabilités",
    description:
      "Comprenez le rôle de Saturne dans votre thème natal et découvrez comment cette planète symbolise les limites, la discipline, les responsabilités et la construction durable.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Saturne en astrologie | Luna Astralis",
    description:
      "Découvrez comment Saturne symbolise la maturité, les responsabilités, les limites et la persévérance.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const SATURN_SIGNS = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "Saturne en Bélier invite à construire une affirmation personnelle plus consciente. La personne apprend progressivement à agir avec courage sans confondre spontanéité, précipitation et véritable autonomie.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "Saturne en Taureau met l’accent sur la sécurité, les ressources et la stabilité. La personne développe sa solidité par la patience, la constance et une relation plus réaliste à ses besoins matériels.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "Saturne en Gémeaux demande de structurer la pensée, la parole et les apprentissages. La personne peut apprendre à communiquer avec davantage de précision, de profondeur et de responsabilité.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "Saturne en Cancer invite à construire une sécurité émotionnelle intérieure. La personne peut ressentir de fortes responsabilités familiales et apprendre progressivement à exprimer ses besoins avec plus de confiance.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "Saturne en Lion demande de développer une confiance créative solide. La personne apprend à exprimer ses talents sans dépendre entièrement de la reconnaissance ou de l’approbation extérieure.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "Saturne en Vierge renforce le sens du devoir, de la méthode et de la précision. La personne apprend à rechercher l’efficacité sans tomber dans le perfectionnisme ou l’autocritique excessive.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "Saturne en Balance met l’accent sur les engagements, l’équilibre et la responsabilité relationnelle. La personne apprend à construire des liens durables fondés sur la réciprocité et des limites claires.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "Saturne en Scorpion invite à affronter les peurs, les attachements et les transformations profondes. La personne peut développer une grande force intérieure en apprenant à faire confiance sans perdre son discernement.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "Saturne en Sagittaire demande de structurer les croyances, les connaissances et la recherche de sens. La personne apprend à construire une vision cohérente à partir de l’expérience et de la réflexion.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "Saturne en Capricorne favorise la discipline, l’ambition et la construction à long terme. La personne peut développer une grande capacité de responsabilité, à condition de ne pas porter seule toutes les obligations.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "Saturne en Verseau invite à donner une forme concrète aux idées nouvelles. La personne apprend à contribuer au collectif, à organiser des projets et à concilier indépendance et responsabilité sociale.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "Saturne en Poissons demande de créer des limites dans les domaines émotionnels, intuitifs et imaginaires. La personne apprend à transformer sa sensibilité en force structurée et utilisable.",
  },
];

const SATURN_HOUSES = [
  {
    house: "Maison I",
    text:
      "Saturne en Maison I peut donner une attitude sérieuse, réservée ou responsable. La personne construit progressivement sa confiance, son identité et sa capacité à prendre sa place avec solidité.",
  },
  {
    house: "Maison II",
    text:
      "Saturne en Maison II met l’accent sur les ressources, les valeurs et la sécurité matérielle. La personne apprend à bâtir une stabilité durable par la patience, la prévoyance et l’autonomie.",
  },
  {
    house: "Maison III",
    text:
      "Saturne en Maison III invite à structurer la pensée, la communication et les apprentissages. La personne peut développer une parole réfléchie, précise et profondément responsable.",
  },
  {
    house: "Maison IV",
    text:
      "Saturne en Maison IV souligne les responsabilités liées au foyer, à la famille et aux racines. La personne apprend à créer une sécurité intérieure indépendante du passé.",
  },
  {
    house: "Maison V",
    text:
      "Saturne en Maison V demande de construire la confiance créative, la spontanéité et le plaisir. La personne peut prendre ses talents très au sérieux et apprendre à s’exprimer sans craindre le jugement.",
  },
  {
    house: "Maison VI",
    text:
      "Saturne en Maison VI renforce le sens du travail, des responsabilités et de l’organisation quotidienne. La personne développe sa maîtrise grâce à la discipline et à des habitudes durables.",
  },
  {
    house: "Maison VII",
    text:
      "Saturne en Maison VII met l’accent sur les engagements, les contrats et la maturité relationnelle. La personne recherche généralement des liens solides, responsables et construits dans le temps.",
  },
  {
    house: "Maison VIII",
    text:
      "Saturne en Maison VIII invite à approfondir le rapport à l’intimité, à la confiance et aux ressources partagées. La personne apprend à traverser les transformations sans perdre sa stabilité intérieure.",
  },
  {
    house: "Maison IX",
    text:
      "Saturne en Maison IX demande de structurer les croyances, les études et la vision du monde. La personne développe une philosophie fondée sur l’expérience, la rigueur et la réflexion.",
  },
  {
    house: "Maison X",
    text:
      "Saturne en Maison X renforce l’ambition, la responsabilité et la construction professionnelle. La personne peut avancer lentement, mais elle recherche une réussite solide, crédible et durable.",
  },
  {
    house: "Maison XI",
    text:
      "Saturne en Maison XI met l’accent sur les projets collectifs, les réseaux et les responsabilités sociales. La personne apprend à construire des alliances fiables autour d’objectifs communs.",
  },
  {
    house: "Maison XII",
    text:
      "Saturne en Maison XII invite à reconnaître les peurs intérieures, les mécanismes inconscients et les charges invisibles. La solitude constructive et l’introspection peuvent favoriser une profonde maturation.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente Saturne en astrologie ?",
    answer:
      "Saturne représente symboliquement les limites, les responsabilités, la discipline, la patience, la maturité et la capacité à construire quelque chose de solide dans le temps.",
  },
  {
    question:
      "Pourquoi Saturne est-il parfois considéré comme difficile ?",
    answer:
      "Saturne est associé aux délais, aux efforts et aux réalités que l’on ne peut pas éviter. Son rôle symbolique n’est toutefois pas seulement restrictif : il représente aussi la maîtrise, l’endurance et la stabilité.",
  },
  {
    question:
      "Que signifie le signe de Saturne ?",
    answer:
      "Le signe de Saturne décrit la manière dont vous apprenez à développer la discipline, la responsabilité et la maturité dans votre vie.",
  },
  {
    question:
      "Que signifie Saturne rétrograde dans un thème natal ?",
    answer:
      "Dans l’interprétation astrologique, Saturne rétrograde à la naissance peut symboliser une relation plus intérieure aux règles, aux responsabilités, à l’autorité et au sentiment de légitimité.",
  },
  {
    question:
      "Saturne rétrograde est-il négatif ?",
    answer:
      "Non. Cette période est plutôt interprétée comme une invitation à revoir ses structures, ses responsabilités, ses limites et la manière dont on exerce son autorité personnelle.",
  },
  {
    question:
      "Comment connaître mon signe de Saturne ?",
    answer:
      "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance pour connaître la position exacte de Saturne.",
  },
  {
    question:
      "Quelle différence entre Jupiter et Saturne ?",
    answer:
      "Jupiter symbolise l’expansion, la confiance et les possibilités, tandis que Saturne représente la structure, les limites, la responsabilité et la construction durable.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Saturne en astrologie : structure, limites et maturité",
  description:
    "Guide complet consacré au rôle de Saturne dans le thème natal, à son expression dans les douze signes et les douze maisons astrologiques.",
  inLanguage: "fr-CA",
  mainEntityOfPage: PAGE_URL,
  publisher: {
    "@type": "Organization",
    name: "Luna Astralis",
    url: "https://luna-astralis.app",
  },
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

export default function SaturneAstrologiePage() {
  return (
    <div className="saturn-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
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

      <main className="saturn-wrap">
        <section className="saturn-hero">
          <div className="saturn-badge">
            ♄ Planètes et thème natal
          </div>

          <h1>
            Saturne en astrologie
          </h1>

          <p className="saturn-hero-lead">
            Saturne représente vos responsabilités, vos
            limites, votre discipline et la manière dont vous
            construisez une force durable avec le temps.
          </p>

          <div className="saturn-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="saturn-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#saturne-dans-les-signes"
              className="saturn-secondary-button"
            >
              Voir les 12 signes
            </a>
          </div>
        </section>

        <article className="saturn-content">
          <section>
            <span className="saturn-kicker">
              Comprendre votre maturation
            </span>

            <h2>
              Que représente Saturne dans un thème astral ?
            </h2>

            <p>
              En astrologie, Saturne symbolise la structure,
              les limites, le temps, les responsabilités et la
              maturation. Il décrit les domaines dans lesquels
              une personne doit souvent développer davantage
              de patience, de discipline et de maîtrise.
            </p>

            <p>
              Sa position dans votre carte du ciel peut
              révéler les expériences qui demandent un effort
              soutenu, mais aussi les domaines dans lesquels
              vous pouvez construire une compétence
              particulièrement solide.
            </p>

            <p>
              Saturne n’est pas uniquement associé aux
              difficultés. Il représente également la
              persévérance, l’engagement, la fiabilité et la
              capacité à transformer l’expérience en sagesse
              concrète.
            </p>
          </section>

          <section>
            <h2>
              Saturne, la structure et les responsabilités
            </h2>

            <div className="saturn-info-grid">
              <div className="saturn-info-card">
                <span className="saturn-card-icon">
                  ♄
                </span>

                <h3>
                  Vos responsabilités
                </h3>

                <p>
                  Saturne décrit les domaines dans lesquels
                  vous êtes invité à devenir plus autonome,
                  fiable et conscient de vos engagements.
                </p>
              </div>

              <div className="saturn-info-card">
                <span className="saturn-card-icon">
                  ⏳
                </span>

                <h3>
                  Votre rapport au temps
                </h3>

                <p>
                  Il rappelle que certaines constructions
                  exigent de la patience, de la répétition et
                  une progression régulière.
                </p>
              </div>

              <div className="saturn-info-card">
                <span className="saturn-card-icon">
                  ✦
                </span>

                <h3>
                  Votre maturité
                </h3>

                <p>
                  Saturne montre comment l’expérience, les
                  limites et les choix responsables peuvent
                  renforcer votre stabilité intérieure.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les principales fonctions de Saturne
            </h2>

            <div className="saturn-functions-grid">
              <div className="saturn-function-card">
                <span>
                  01
                </span>

                <h3>
                  Structurer
                </h3>

                <p>
                  Saturne donne une forme concrète aux idées,
                  aux projets et aux ambitions en imposant une
                  organisation réaliste.
                </p>
              </div>

              <div className="saturn-function-card">
                <span>
                  02
                </span>

                <h3>
                  Limiter
                </h3>

                <p>
                  Il représente les frontières, les règles et
                  les contraintes nécessaires pour préserver
                  l’équilibre et la cohérence.
                </p>
              </div>

              <div className="saturn-function-card">
                <span>
                  03
                </span>

                <h3>
                  Consolider
                </h3>

                <p>
                  Saturne favorise la construction de bases
                  durables grâce à la patience, à l’effort et
                  à la répétition.
                </p>
              </div>

              <div className="saturn-function-card">
                <span>
                  04
                </span>

                <h3>
                  Maîtriser
                </h3>

                <p>
                  Il symbolise la compétence qui se développe
                  progressivement lorsque l’on accepte
                  d’apprendre de l’expérience.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Saturne, Jupiter et le Soleil
            </h2>

            <div className="saturn-pillars">
              <div className="saturn-pillar-card">
                <div className="saturn-pillar-symbol">
                  ☀️
                </div>

                <h3>
                  Le Soleil
                </h3>

                <p>
                  Il représente votre identité consciente,
                  votre volonté et la direction intérieure que
                  vous cherchez à exprimer.
                </p>

                <Link
                  href="/astrologie/soleil"
                  className="saturn-text-link"
                >
                  Découvrir le Soleil
                </Link>
              </div>

              <div className="saturn-pillar-card">
                <div className="saturn-pillar-symbol">
                  ♃
                </div>

                <h3>
                  Jupiter
                </h3>

                <p>
                  Il symbolise l’expansion, la confiance, les
                  possibilités et la recherche d’un sens plus
                  vaste.
                </p>

                <Link
                  href="/astrologie/jupiter"
                  className="saturn-text-link"
                >
                  Découvrir Jupiter
                </Link>
              </div>

              <div className="saturn-pillar-card">
                <div className="saturn-pillar-symbol">
                  ♄
                </div>

                <h3>
                  Saturne
                </h3>

                <p>
                  Il représente les limites, la discipline,
                  les responsabilités et la construction dans
                  le temps.
                </p>
              </div>
            </div>
          </section>

          <section id="saturne-dans-les-signes">
            <span className="saturn-kicker">
              Les douze expressions de Saturne
            </span>

            <h2>
              Saturne dans les 12 signes astrologiques
            </h2>

            <p>
              Saturne conserve toujours sa fonction de
              structure, de responsabilité et de maturation.
              Le signe dans lequel il se trouve décrit la
              manière particulière dont ces apprentissages
              prennent forme.
            </p>

            <div className="saturn-sign-grid">
              {SATURN_SIGNS.map((item) => (
                <article
                  className="saturn-sign-card"
                  key={item.sign}
                >
                  <div className="saturn-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Saturne en {item.sign}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="saturne-dans-les-maisons">
            <span className="saturn-kicker">
              Les domaines de votre construction
            </span>

            <h2>
              Saturne dans les 12 maisons astrologiques
            </h2>

            <p>
              Le signe de Saturne décrit votre manière de
              développer la discipline, tandis que sa maison
              indique le domaine de vie dans lequel les
              responsabilités, les limites et la maturation
              prennent une importance particulière.
            </p>

            <div className="saturn-house-grid">
              {SATURN_HOUSES.map((item, index) => (
                <article
                  className="saturn-house-card"
                  key={item.house}
                >
                  <div className="saturn-house-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>
                    Saturne en {item.house}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <span className="saturn-kicker">
              Révision des structures
            </span>

            <h2>
              Que signifie Saturne rétrograde ?
            </h2>

            <div className="saturn-retrograde-layout">
              <div>
                <p>
                  Depuis la Terre, Saturne semble parfois
                  ralentir puis reculer temporairement dans le
                  ciel. Il s’agit d’un mouvement apparent lié
                  aux positions relatives de la Terre et de
                  Saturne.
                </p>

                <p>
                  Dans l’interprétation astrologique, Saturne
                  rétrograde est souvent associé à une relation
                  plus intérieure aux responsabilités, aux
                  règles, à l’autorité et au sentiment de
                  légitimité.
                </p>

                <p>
                  Cette période peut inviter à revoir certaines
                  structures, à clarifier ses engagements et à
                  distinguer les responsabilités réellement
                  utiles des charges devenues trop lourdes.
                </p>
              </div>

              <aside className="saturn-retrograde-card">
                <span className="saturn-retrograde-symbol">
                  ♄℞
                </span>

                <h3>
                  Une invitation à restructurer
                </h3>

                <ul>
                  <li>
                    Revoir ses responsabilités
                  </li>

                  <li>
                    Clarifier ses limites
                  </li>

                  <li>
                    Réorganiser ses priorités
                  </li>

                  <li>
                    Examiner son rapport à l’autorité
                  </li>

                  <li>
                    Consolider ce qui doit durer
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis de Saturne
            </h2>

            <div className="saturn-strengths-grid">
              <div className="saturn-strength-card">
                <span className="saturn-kicker">
                  Forces possibles
                </span>

                <h3>
                  Une solidité construite dans le temps
                </h3>

                <ul>
                  <li>
                    Discipline
                  </li>

                  <li>
                    Fiabilité
                  </li>

                  <li>
                    Persévérance
                  </li>

                  <li>
                    Sens des responsabilités
                  </li>

                  <li>
                    Capacité à construire durablement
                  </li>
                </ul>
              </div>

              <div className="saturn-strength-card">
                <span className="saturn-kicker">
                  Points d’attention
                </span>

                <h3>
                  Assouplir les structures trop rigides
                </h3>

                <ul>
                  <li>
                    Peur de l’échec
                  </li>

                  <li>
                    Autocritique excessive
                  </li>

                  <li>
                    Rigidité
                  </li>

                  <li>
                    Difficulté à déléguer
                  </li>

                  <li>
                    Tendance à porter trop de responsabilités
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les aspects astrologiques de Saturne
            </h2>

            <p>
              Les aspects relient Saturne aux autres planètes
              du thème natal. Ils apportent des nuances à votre
              rapport aux responsabilités, aux limites, à la
              discipline et à la construction personnelle.
            </p>

            <div className="saturn-aspect-grid">
              <article className="saturn-aspect-card">
                <span>
                  ☌
                </span>

                <h3>
                  La conjonction
                </h3>

                <p>
                  Elle fusionne Saturne avec une autre planète
                  et donne davantage de sérieux, de structure
                  ou d’exigence à leur expression commune.
                </p>
              </article>

              <article className="saturn-aspect-card">
                <span>
                  △
                </span>

                <h3>
                  Le trigone
                </h3>

                <p>
                  Il peut symboliser une capacité naturelle à
                  organiser, stabiliser et utiliser les
                  qualités de l’autre planète.
                </p>
              </article>

              <article className="saturn-aspect-card">
                <span>
                  ✶
                </span>

                <h3>
                  Le sextile
                </h3>

                <p>
                  Il représente un potentiel de construction,
                  de coopération et de progression réaliste.
                </p>
              </article>

              <article className="saturn-aspect-card">
                <span>
                  □
                </span>

                <h3>
                  Le carré
                </h3>

                <p>
                  Il peut créer une tension entre le désir
                  d’expression et les limites, invitant à
                  développer patience et maîtrise.
                </p>
              </article>

              <article className="saturn-aspect-card">
                <span>
                  ☍
                </span>

                <h3>
                  L’opposition
                </h3>

                <p>
                  Elle invite à équilibrer les responsabilités,
                  les limites personnelles et les attentes
                  provenant de l’extérieur.
                </p>
              </article>
            </div>
          </section>

          <section>
            <div className="saturn-cta-card">
              <div>
                <span className="saturn-kicker">
                  Découvrez votre position
                </span>

                <h2>
                  Dans quel signe et quelle maison se trouve
                  votre Saturne ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir votre Saturne, votre Jupiter, votre
                  Mars, votre Vénus et les positions de vos
                  principales planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="saturn-primary-button"
              >
                Découvrir mon thème natal
              </Link>
            </div>
          </section>

          <section className="saturn-faq">
            <span className="saturn-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur Saturne en astrologie
            </h2>

            <div className="saturn-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="saturn-faq-item"
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

          <p className="saturn-disclaimer">
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
