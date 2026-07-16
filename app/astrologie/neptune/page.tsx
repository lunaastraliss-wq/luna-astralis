import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/neptune";

export const metadata: Metadata = {
  title:
    "Neptune en astrologie : intuition, imagination et idéal | Luna Astralis",

  description:
    "Découvrez la signification de Neptune en astrologie, son influence sur l’intuition, l’imagination, la compassion, les idéaux et son expression dans les 12 signes du zodiaque.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Neptune en astrologie : intuition, imagination et sensibilité",
    description:
      "Comprenez le rôle de Neptune dans votre thème natal et découvrez comment cette planète symbolise l’intuition, les rêves, la compassion, les idéaux et les perceptions subtiles.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Neptune en astrologie | Luna Astralis",
    description:
      "Découvrez comment Neptune symbolise l’intuition, l’imagination, les rêves, les idéaux et la sensibilité.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const NEPTUNE_SIGNS = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "Neptune en Bélier associe l’imagination à l’action, à l’initiative et au désir d’ouvrir de nouvelles voies. Cette position générationnelle peut inspirer des idéaux audacieux, tout en demandant de distinguer l’intuition de l’impulsivité.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "Neptune en Taureau relie les idéaux à la matière, aux valeurs et à la sécurité. Cette position peut inspirer une sensibilité particulière à la nature, à l’art et aux plaisirs, tout en invitant à préserver un rapport réaliste aux ressources.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "Neptune en Gémeaux nourrit une pensée imaginative, intuitive et symbolique. Cette position peut favoriser la poésie, les récits et les idées inspirées, mais demande de vérifier les informations et de clarifier les messages.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "Neptune en Cancer intensifie la sensibilité aux émotions, à la famille et au sentiment d’appartenance. Cette position peut développer une grande compassion, tout en invitant à différencier ses propres émotions de celles des autres.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "Neptune en Lion favorise une créativité inspirée, théâtrale et généreuse. Cette position peut nourrir de grands idéaux artistiques ou romantiques, tout en demandant de préserver une vision réaliste de la reconnaissance.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "Neptune en Vierge cherche à donner une forme concrète à la compassion, à l’intuition et au service. Cette position peut inspirer une grande sensibilité aux besoins des autres, mais demande des méthodes claires et des limites pratiques.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "Neptune en Balance idéalise les relations, l’harmonie et la coopération. Cette position peut favoriser une grande sensibilité à la beauté et à la justice, tout en invitant à éviter les projections affectives.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "Neptune en Scorpion approfondit l’intuition, la perception psychologique et le besoin de transformation. Cette position peut être attirée par les mystères et les vérités cachées, tout en demandant de préserver des limites émotionnelles solides.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "Neptune en Sagittaire associe l’idéal à la quête de sens, aux croyances et à l’exploration. Cette position peut inspirer une grande ouverture spirituelle ou philosophique, tout en demandant de questionner les certitudes absolues.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "Neptune en Capricorne cherche à donner une structure aux rêves, aux idéaux et aux ambitions collectives. Cette position peut inspirer de nouvelles visions de la réussite, tout en révélant les illusions liées au pouvoir ou au statut.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "Neptune en Verseau nourrit les idéaux collectifs, les visions d’avenir et le désir de contribuer à une société plus inclusive. Cette position peut inspirer des projets humanistes, tout en demandant de rester attentif aux utopies irréalistes.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "Neptune en Poissons renforce l’intuition, l’imagination, la compassion et la réceptivité symbolique. Cette position peut favoriser une grande créativité, tout en exigeant des limites claires pour éviter la confusion ou l’idéalisation.",
  },
];

const NEPTUNE_HOUSES = [
  {
    house: "Maison I",
    text:
      "Neptune en Maison I peut donner une présence sensible, intuitive et difficile à définir. La personne peut absorber facilement les ambiances et doit apprendre à construire une identité claire sans perdre sa réceptivité.",
  },
  {
    house: "Maison II",
    text:
      "Neptune en Maison II relie les valeurs, les ressources et l’estime de soi à l’intuition ou à l’idéal. La personne doit veiller à maintenir une gestion concrète et transparente de ses finances.",
  },
  {
    house: "Maison III",
    text:
      "Neptune en Maison III favorise une pensée imagée, intuitive et créative. La personne peut communiquer avec poésie et sensibilité, mais doit vérifier les faits et éviter les messages trop ambigus.",
  },
  {
    house: "Maison IV",
    text:
      "Neptune en Maison IV intensifie la sensibilité au foyer, aux racines et aux souvenirs. La personne peut idéaliser la famille ou rechercher un refuge intérieur très inspirant.",
  },
  {
    house: "Maison V",
    text:
      "Neptune en Maison V favorise l’imagination, le romantisme et la créativité artistique. La personne peut vivre ses passions avec intensité, tout en devant éviter d’idéaliser excessivement les relations.",
  },
  {
    house: "Maison VI",
    text:
      "Neptune en Maison VI invite à apporter de la compassion, de l’intuition et du sens au quotidien. La personne peut avoir besoin d’un travail inspirant, mais doit préserver des habitudes et des limites claires.",
  },
  {
    house: "Maison VII",
    text:
      "Neptune en Maison VII peut favoriser des relations sensibles, inspirantes et profondément empathiques. La personne doit toutefois distinguer l’amour réel des projections, des attentes ou du désir de sauver l’autre.",
  },
  {
    house: "Maison VIII",
    text:
      "Neptune en Maison VIII intensifie la perception intuitive de l’intimité, des transformations et des liens invisibles. La personne doit protéger ses limites émotionnelles et clarifier les ressources partagées.",
  },
  {
    house: "Maison IX",
    text:
      "Neptune en Maison IX nourrit une quête spirituelle, philosophique ou artistique. Les voyages, les études et les croyances peuvent devenir des sources d’inspiration profonde.",
  },
  {
    house: "Maison X",
    text:
      "Neptune en Maison X peut orienter la vocation vers l’art, l’aide, l’imaginaire ou les domaines fondés sur l’inspiration. La personne doit clarifier ses objectifs professionnels et éviter les attentes trop floues.",
  },
  {
    house: "Maison XI",
    text:
      "Neptune en Maison XI favorise les idéaux collectifs, la compassion et les projets humanistes. La personne peut rêver d’un monde meilleur, tout en devant choisir ses groupes et ses alliances avec discernement.",
  },
  {
    house: "Maison XII",
    text:
      "Neptune en Maison XII renforce l’intuition, les rêves, l’imagination et la vie intérieure. La solitude, la création et l’introspection peuvent devenir des ressources importantes lorsqu’elles sont soutenues par des repères concrets.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente Neptune en astrologie ?",
    answer:
      "Neptune représente symboliquement l’intuition, l’imagination, les rêves, la compassion, les idéaux, la sensibilité et les perceptions qui dépassent le raisonnement strictement rationnel.",
  },
  {
    question:
      "Pourquoi Neptune est-il associé aux illusions ?",
    answer:
      "Neptune symbolise les frontières floues, les projections et l’idéalisation. Son influence astrologique invite à développer l’intuition tout en vérifiant les faits et en maintenant des limites claires.",
  },
  {
    question:
      "Que signifie le signe de Neptune ?",
    answer:
      "Le signe de Neptune décrit la manière dont une génération exprime ses rêves, ses idéaux, son imagination et sa vision du collectif.",
  },
  {
    question:
      "Que signifie Neptune rétrograde dans un thème natal ?",
    answer:
      "Neptune rétrograde à la naissance peut symboliser une vie imaginative et intuitive plus intérieure, ainsi qu’un besoin personnel de clarifier ses idéaux, ses rêves et ses perceptions.",
  },
  {
    question:
      "Neptune rétrograde est-il négatif ?",
    answer:
      "Non. Cette période est plutôt interprétée comme une invitation à revoir ses idéaux, à reconnaître les illusions éventuelles et à approfondir son rapport à l’intuition.",
  },
  {
    question:
      "Comment connaître mon signe de Neptune ?",
    answer:
      "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance pour connaître la position exacte de Neptune.",
  },
  {
    question:
      "Quelle différence entre Uranus et Neptune ?",
    answer:
      "Uranus symbolise la liberté, l’innovation et les changements rapides, tandis que Neptune représente l’intuition, l’imagination, les idéaux et la dissolution des frontières.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Neptune en astrologie : intuition, imagination et idéal",
  description:
    "Guide complet consacré au rôle de Neptune dans le thème natal, à son expression dans les douze signes et les douze maisons astrologiques.",
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

export default function NeptuneAstrologiePage() {
  return (
    <div className="neptune-page">
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

      <main className="neptune-wrap">
        <section className="neptune-hero">
          <div className="neptune-badge">
            ♆ Planètes et thème natal
          </div>

          <h1>
            Neptune en astrologie
          </h1>

          <p className="neptune-hero-lead">
            Neptune représente votre imagination, votre
            intuition, vos idéaux, votre sensibilité et votre
            manière de percevoir ce qui dépasse les apparences.
          </p>

          <div className="neptune-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="neptune-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#neptune-dans-les-signes"
              className="neptune-secondary-button"
            >
              Voir les 12 signes
            </a>
          </div>
        </section>

        <article className="neptune-content">
          <section>
            <span className="neptune-kicker">
              Comprendre votre monde imaginaire
            </span>

            <h2>
              Que représente Neptune dans un thème astral ?
            </h2>

            <p>
              En astrologie, Neptune symbolise l’imagination,
              l’intuition, les rêves, la compassion et les
              idéaux. Il représente les dimensions de
              l’expérience qui ne se laissent pas toujours
              saisir par la logique ou les faits immédiats.
            </p>

            <p>
              Sa position dans votre carte du ciel peut
              révéler les domaines dans lesquels vous êtes
              particulièrement sensible, inspiré ou réceptif
              aux émotions et aux ambiances.
            </p>

            <p>
              Neptune peut favoriser la créativité, l’empathie
              et la perception symbolique. Il invite cependant
              à maintenir des limites claires afin de
              distinguer l’intuition, les projections et les
              attentes idéalisées.
            </p>
          </section>

          <section>
            <h2>
              Neptune, l’intuition et l’imagination
            </h2>

            <div className="neptune-info-grid">
              <div className="neptune-info-card">
                <span className="neptune-card-icon">
                  ♆
                </span>

                <h3>
                  Votre intuition
                </h3>

                <p>
                  Neptune décrit votre réceptivité aux
                  ambiances, aux émotions et aux perceptions
                  qui ne passent pas toujours par la logique.
                </p>
              </div>

              <div className="neptune-info-card">
                <span className="neptune-card-icon">
                  ✦
                </span>

                <h3>
                  Votre imagination
                </h3>

                <p>
                  Il révèle votre capacité à créer des images,
                  des histoires, des symboles et des visions
                  inspirantes.
                </p>
              </div>

              <div className="neptune-info-card">
                <span className="neptune-card-icon">
                  ♡
                </span>

                <h3>
                  Votre compassion
                </h3>

                <p>
                  Neptune montre comment vous percevez la
                  vulnérabilité, la souffrance et le besoin de
                  créer davantage de douceur.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les principales fonctions de Neptune
            </h2>

            <div className="neptune-functions-grid">
              <div className="neptune-function-card">
                <span>
                  01
                </span>

                <h3>
                  Inspirer
                </h3>

                <p>
                  Neptune nourrit la créativité, les rêves et
                  les visions capables de donner un sens plus
                  profond aux expériences.
                </p>
              </div>

              <div className="neptune-function-card">
                <span>
                  02
                </span>

                <h3>
                  Ressentir
                </h3>

                <p>
                  Il accentue la sensibilité aux émotions, aux
                  atmosphères et aux mouvements subtils de
                  l’environnement.
                </p>
              </div>

              <div className="neptune-function-card">
                <span>
                  03
                </span>

                <h3>
                  Relier
                </h3>

                <p>
                  Neptune invite à percevoir ce qui unit les
                  êtres, les expériences et les symboles au-delà
                  des différences visibles.
                </p>
              </div>

              <div className="neptune-function-card">
                <span>
                  04
                </span>

                <h3>
                  Idéaliser
                </h3>

                <p>
                  Il représente la capacité à imaginer un idéal,
                  mais aussi le risque de projeter sur une
                  situation ce que l’on souhaite y voir.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Neptune, Uranus et Pluton
            </h2>

            <div className="neptune-pillars">
              <div className="neptune-pillar-card">
                <div className="neptune-pillar-symbol">
                  ♅
                </div>

                <h3>
                  Uranus
                </h3>

                <p>
                  Il représente la liberté, l’innovation,
                  l’éveil et les changements qui renouvellent
                  les structures.
                </p>

                <Link
                  href="/astrologie/uranus"
                  className="neptune-text-link"
                >
                  Découvrir Uranus
                </Link>
              </div>

              <div className="neptune-pillar-card">
                <div className="neptune-pillar-symbol">
                  ♆
                </div>

                <h3>
                  Neptune
                </h3>

                <p>
                  Il symbolise l’intuition, l’imagination, les
                  idéaux, la compassion et les perceptions
                  subtiles.
                </p>
              </div>

              <div className="neptune-pillar-card">
                <div className="neptune-pillar-symbol">
                  ♇
                </div>

                <h3>
                  Pluton
                </h3>

                <p>
                  Il représente les transformations profondes,
                  le pouvoir intérieur et les cycles de
                  régénération.
                </p>
              </div>
            </div>
          </section>

          <section id="neptune-dans-les-signes">
            <span className="neptune-kicker">
              Les douze expressions de Neptune
            </span>

            <h2>
              Neptune dans les 12 signes astrologiques
            </h2>

            <p>
              Neptune conserve toujours sa fonction
              d’intuition, d’imagination et d’idéal. Le signe
              dans lequel il se trouve décrit la manière dont
              une génération exprime ses rêves, sa sensibilité
              et ses aspirations collectives.
            </p>

            <div className="neptune-sign-grid">
              {NEPTUNE_SIGNS.map((item) => (
                <article
                  className="neptune-sign-card"
                  key={item.sign}
                >
                  <div className="neptune-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Neptune en {item.sign}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="neptune-dans-les-maisons">
            <span className="neptune-kicker">
              Les domaines de votre inspiration
            </span>

            <h2>
              Neptune dans les 12 maisons astrologiques
            </h2>

            <p>
              Le signe de Neptune décrit une sensibilité
              collective, tandis que sa maison indique le
              domaine de vie dans lequel votre intuition, vos
              idéaux, votre imagination et vos projections
              s’expriment le plus personnellement.
            </p>

            <div className="neptune-house-grid">
              {NEPTUNE_HOUSES.map((item, index) => (
                <article
                  className="neptune-house-card"
                  key={item.house}
                >
                  <div className="neptune-house-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>
                    Neptune en {item.house}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <span className="neptune-kicker">
              Révision des idéaux
            </span>

            <h2>
              Que signifie Neptune rétrograde ?
            </h2>

            <div className="neptune-retrograde-layout">
              <div>
                <p>
                  Depuis la Terre, Neptune semble parfois
                  ralentir puis reculer temporairement dans le
                  ciel. Il s’agit d’un mouvement apparent lié
                  aux positions relatives de la Terre et de
                  Neptune.
                </p>

                <p>
                  Dans l’interprétation astrologique, Neptune
                  rétrograde est souvent associé à une
                  imagination et à une intuition plus
                  intérieures. La personne peut remettre en
                  question les idéaux collectifs et chercher
                  une vérité plus personnelle.
                </p>

                <p>
                  Cette période peut inviter à reconnaître les
                  illusions, à clarifier les attentes et à
                  distinguer les perceptions intuitives des
                  projections émotionnelles.
                </p>
              </div>

              <aside className="neptune-retrograde-card">
                <span className="neptune-retrograde-symbol">
                  ♆℞
                </span>

                <h3>
                  Une invitation à clarifier
                </h3>

                <ul>
                  <li>
                    Revoir ses idéaux
                  </li>

                  <li>
                    Observer ses projections
                  </li>

                  <li>
                    Clarifier ses limites
                  </li>

                  <li>
                    Approfondir son intuition
                  </li>

                  <li>
                    Donner une forme concrète à ses rêves
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis de Neptune
            </h2>

            <div className="neptune-strengths-grid">
              <div className="neptune-strength-card">
                <span className="neptune-kicker">
                  Forces possibles
                </span>

                <h3>
                  Une grande sensibilité intérieure
                </h3>

                <ul>
                  <li>
                    Imagination
                  </li>

                  <li>
                    Intuition
                  </li>

                  <li>
                    Compassion
                  </li>

                  <li>
                    Créativité
                  </li>

                  <li>
                    Perception symbolique
                  </li>
                </ul>
              </div>

              <div className="neptune-strength-card">
                <span className="neptune-kicker">
                  Points d’attention
                </span>

                <h3>
                  Préserver des repères clairs
                </h3>

                <ul>
                  <li>
                    Idéalisation
                  </li>

                  <li>
                    Confusion
                  </li>

                  <li>
                    Limites floues
                  </li>

                  <li>
                    Tendance à fuir la réalité
                  </li>

                  <li>
                    Difficulté à vérifier ses perceptions
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les aspects astrologiques de Neptune
            </h2>

            <p>
              Les aspects relient Neptune aux autres planètes
              du thème natal. Ils apportent des nuances à votre
              imagination, à votre intuition, à vos idéaux et
              à votre manière de percevoir les émotions.
            </p>

            <div className="neptune-aspect-grid">
              <article className="neptune-aspect-card">
                <span>
                  ☌
                </span>

                <h3>
                  La conjonction
                </h3>

                <p>
                  Elle fusionne Neptune avec une autre planète
                  et rend son expression plus intuitive,
                  imaginative ou difficile à définir.
                </p>
              </article>

              <article className="neptune-aspect-card">
                <span>
                  △
                </span>

                <h3>
                  Le trigone
                </h3>

                <p>
                  Il peut symboliser une circulation naturelle
                  entre l’intuition de Neptune et les qualités
                  de l’autre planète.
                </p>
              </article>

              <article className="neptune-aspect-card">
                <span>
                  ✶
                </span>

                <h3>
                  Le sextile
                </h3>

                <p>
                  Il représente un potentiel d’inspiration, de
                  créativité, de compassion et d’ouverture
                  symbolique.
                </p>
              </article>

              <article className="neptune-aspect-card">
                <span>
                  □
                </span>

                <h3>
                  Le carré
                </h3>

                <p>
                  Il peut créer une tension entre les attentes,
                  les perceptions et la réalité, invitant à
                  développer plus de clarté.
                </p>
              </article>

              <article className="neptune-aspect-card">
                <span>
                  ☍
                </span>

                <h3>
                  L’opposition
                </h3>

                <p>
                  Elle invite à équilibrer les idéaux
                  personnels avec les faits, les limites et les
                  attentes provenant de l’extérieur.
                </p>
              </article>
            </div>
          </section>

          <section>
            <div className="neptune-cta-card">
              <div>
                <span className="neptune-kicker">
                  Découvrez votre position
                </span>

                <h2>
                  Dans quel signe et quelle maison se trouve
                  votre Neptune ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir votre Neptune, votre Uranus, votre
                  Saturne, votre Jupiter et les positions de
                  vos principales planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="neptune-primary-button"
              >
                Découvrir mon thème natal
              </Link>
            </div>
          </section>

          <section className="neptune-faq">
            <span className="neptune-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur Neptune en astrologie
            </h2>

            <div className="neptune-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="neptune-faq-item"
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

          <p className="neptune-disclaimer">
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
