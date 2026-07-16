import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/mercure";

export const metadata: Metadata = {
  title:
    "Mercure en astrologie : communication, pensée et intelligence | Luna Astralis",

  description:
    "Découvrez la signification de Mercure en astrologie, son influence sur la communication, la pensée et l’apprentissage, ainsi que son expression dans les 12 signes du zodiaque.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Mercure en astrologie : pensée, communication et intelligence",
    description:
      "Comprenez le rôle de Mercure dans votre thème natal et découvrez comment cette planète influence votre manière de penser, de communiquer et d’apprendre.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mercure en astrologie | Luna Astralis",
    description:
      "Découvrez comment Mercure influence votre pensée, votre communication et votre manière d’apprendre.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const MERCURY_SIGNS = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "Mercure en Bélier favorise une pensée rapide, directe et spontanée. La personne exprime généralement ses idées avec franchise et préfère aller droit au but plutôt que de multiplier les détours.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "Mercure en Taureau développe une pensée concrète, patiente et pragmatique. La personne prend le temps d’assimiler les informations et accorde de l’importance à la cohérence, à l’expérience et au bon sens.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "Mercure en Gémeaux stimule la curiosité, la vivacité intellectuelle et le besoin d’échanger. Cette position favorise l’apprentissage, la polyvalence et la capacité à relier rapidement plusieurs idées.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "Mercure en Cancer associe la pensée aux émotions, aux souvenirs et à l’intuition. La communication peut être sensible, protectrice et particulièrement attentive aux besoins affectifs des autres.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "Mercure en Lion donne une expression chaleureuse, créative et assurée. La personne aime transmettre ses idées avec conviction et peut posséder un véritable talent pour raconter, inspirer ou captiver.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "Mercure en Vierge favorise une pensée analytique, précise et méthodique. La personne remarque facilement les détails et cherche souvent à organiser, corriger ou améliorer ce qui l’entoure.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "Mercure en Balance développe une communication diplomatique, équilibrée et attentive aux différents points de vue. La personne cherche généralement les mots justes et privilégie le dialogue.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "Mercure en Scorpion donne une pensée profonde, stratégique et intuitive. La personne cherche à comprendre ce qui se cache derrière les apparences et communique souvent avec intensité et lucidité.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "Mercure en Sagittaire favorise une pensée expansive, enthousiaste et orientée vers le sens. La personne aime explorer de nouvelles idées, partager ses convictions et élargir ses horizons.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "Mercure en Capricorne développe une pensée structurée, réaliste et stratégique. La personne communique généralement avec sérieux et cherche des solutions applicables, durables et efficaces.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "Mercure en Verseau favorise une pensée originale, indépendante et tournée vers l’avenir. La personne aime remettre en question les idées établies et explorer de nouvelles manières de comprendre le monde.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "Mercure en Poissons associe la pensée à l’imagination, à l’intuition et à la sensibilité. La personne peut communiquer par les images, les émotions, les symboles ou une perception très subtile de son environnement.",
  },
];

const MERCURY_HOUSES = [
  {
    house: "Maison I",
    text:
      "Mercure en Maison I renforce la curiosité, l’expression personnelle et le besoin de communiquer. La vivacité d’esprit peut être immédiatement perceptible dans la manière d’aborder les autres.",
  },
  {
    house: "Maison II",
    text:
      "Mercure en Maison II relie la réflexion aux valeurs, aux ressources et à la sécurité matérielle. La personne peut chercher à utiliser ses connaissances de manière concrète et productive.",
  },
  {
    house: "Maison III",
    text:
      "Mercure en Maison III accentue les échanges, l’apprentissage, les déplacements et la curiosité. Cette position favorise souvent la communication, l’écriture et la transmission des connaissances.",
  },
  {
    house: "Maison IV",
    text:
      "Mercure en Maison IV oriente la pensée vers le foyer, les racines et l’histoire familiale. Les souvenirs, les conversations intimes et la compréhension du passé peuvent occuper une place importante.",
  },
  {
    house: "Maison V",
    text:
      "Mercure en Maison V encourage une communication créative, expressive et ludique. La personne peut aimer raconter, écrire, enseigner ou partager ses idées avec enthousiasme.",
  },
  {
    house: "Maison VI",
    text:
      "Mercure en Maison VI développe une pensée pratique, organisée et attentive aux détails. Le travail quotidien, les méthodes et l’amélioration des habitudes sollicitent fortement l’esprit.",
  },
  {
    house: "Maison VII",
    text:
      "Mercure en Maison VII souligne l’importance du dialogue dans les relations. La personne recherche souvent un partenaire avec qui elle peut échanger, réfléchir et résoudre les désaccords.",
  },
  {
    house: "Maison VIII",
    text:
      "Mercure en Maison VIII favorise une pensée profonde et investigatrice. La personne peut s’intéresser aux secrets, à la psychologie, aux transformations et aux vérités difficiles à percevoir.",
  },
  {
    house: "Maison IX",
    text:
      "Mercure en Maison IX stimule le besoin d’élargir ses connaissances. Les voyages, la philosophie, les cultures, les études et la recherche de sens nourrissent particulièrement l’esprit.",
  },
  {
    house: "Maison X",
    text:
      "Mercure en Maison X peut faire de la communication, de l’analyse ou du savoir un élément important de la vocation. La personne souhaite que ses idées soient reconnues et utiles dans la société.",
  },
  {
    house: "Maison XI",
    text:
      "Mercure en Maison XI favorise les échanges au sein des groupes, des réseaux et des projets collectifs. La personne aime partager des idées nouvelles et participer à une vision commune.",
  },
  {
    house: "Maison XII",
    text:
      "Mercure en Maison XII donne une pensée intérieure, intuitive et parfois difficile à verbaliser immédiatement. L’écriture, la solitude et l’imagination peuvent aider à clarifier les perceptions.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente Mercure en astrologie ?",
    answer:
      "Mercure représente symboliquement la pensée, la communication, la curiosité, l’apprentissage et la manière dont une personne traite et transmet les informations.",
  },
  {
    question:
      "Que signifie le signe de Mercure ?",
    answer:
      "Le signe de Mercure décrit la manière dont votre esprit fonctionne, le ton de votre communication et la façon dont vous apprenez, analysez et partagez vos idées.",
  },
  {
    question:
      "Mercure influence-t-il seulement la communication ?",
    answer:
      "Non. Mercure est également associé au raisonnement, à la mémoire, aux déplacements, à l’adaptation, à l’écriture et à la manière de comprendre son environnement.",
  },
  {
    question:
      "Que signifie Mercure rétrograde dans un thème natal ?",
    answer:
      "Dans l’interprétation astrologique, Mercure rétrograde à la naissance peut symboliser une pensée plus intérieure, réflexive ou personnelle. Cela ne signifie pas qu’une personne communique moins bien.",
  },
  {
    question:
      "Mercure rétrograde est-il toujours négatif ?",
    answer:
      "Non. En astrologie, cette période est souvent associée à la révision, à la réflexion et à la nécessité de vérifier certaines informations. Elle n’annonce pas automatiquement des événements négatifs.",
  },
  {
    question:
      "Comment connaître mon signe de Mercure ?",
    answer:
      "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance afin de connaître la position exacte de Mercure.",
  },
  {
    question:
      "Pourquoi Mercure peut-il être dans un autre signe que mon Soleil ?",
    answer:
      "Les planètes se déplacent à des rythmes différents. Votre signe solaire décrit votre identité consciente, tandis que Mercure peut se trouver dans un signe voisin et décrire une autre manière de penser.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Mercure en astrologie : communication, pensée et intelligence",
  description:
    "Guide complet consacré au rôle de Mercure dans le thème natal, à son expression dans les douze signes et les douze maisons astrologiques.",
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

export default function MercureAstrologiePage() {
  return (
    <div className="mercury-page">
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

      <main className="mercury-wrap">
        <section className="mercury-hero">
          <div className="mercury-badge">
            ☿ Planètes et thème natal
          </div>

          <h1>
            Mercure en astrologie
          </h1>

          <p className="mercury-hero-lead">
            Mercure représente votre manière de penser,
            d’apprendre, de communiquer et de comprendre le
            monde qui vous entoure.
          </p>

          <div className="mercury-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="mercury-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#mercure-dans-les-signes"
              className="mercury-secondary-button"
            >
              Voir les 12 signes
            </a>
          </div>
        </section>

        <article className="mercury-content">
          <section>
            <span className="mercury-kicker">
              Comprendre votre esprit
            </span>

            <h2>
              Que représente Mercure dans un thème astral ?
            </h2>

            <p>
              En astrologie, Mercure symbolise la pensée,
              l’intelligence, la communication et la manière
              dont une personne recueille, organise et transmet
              les informations.
            </p>

            <p>
              Sa position dans votre carte du ciel décrit votre
              manière de réfléchir, d’apprendre, de poser des
              questions et de partager vos idées. Elle peut
              également révéler votre style de communication,
              votre rythme mental et les sujets qui éveillent
              naturellement votre curiosité.
            </p>

            <p>
              Mercure ne détermine pas votre intelligence. Son
              rôle astrologique consiste plutôt à représenter la
              forme que prend votre pensée et la manière dont
              vous utilisez vos facultés intellectuelles au
              quotidien.
            </p>
          </section>

          <section>
            <h2>
              Mercure, la pensée et la communication
            </h2>

            <div className="mercury-info-grid">
              <div className="mercury-info-card">
                <span className="mercury-card-icon">
                  ☿
                </span>

                <h3>
                  Votre manière de penser
                </h3>

                <p>
                  Mercure décrit la façon dont vous analysez
                  une situation, établissez des liens et
                  organisez mentalement les informations.
                </p>
              </div>

              <div className="mercury-info-card">
                <span className="mercury-card-icon">
                  ✦
                </span>

                <h3>
                  Votre communication
                </h3>

                <p>
                  Il révèle votre manière de parler, d’écrire,
                  d’écouter et de transmettre ce que vous
                  pensez aux autres.
                </p>
              </div>

              <div className="mercury-info-card">
                <span className="mercury-card-icon">
                  ✧
                </span>

                <h3>
                  Votre apprentissage
                </h3>

                <p>
                  Mercure montre comment votre curiosité
                  s’éveille et de quelle manière vous assimilez
                  le plus facilement de nouvelles connaissances.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les principales fonctions de Mercure
            </h2>

            <div className="mercury-functions-grid">
              <div className="mercury-function-card">
                <span>
                  01
                </span>

                <h3>
                  Observer
                </h3>

                <p>
                  Mercure recueille les informations présentes
                  dans l’environnement et remarque les détails
                  utiles à la compréhension.
                </p>
              </div>

              <div className="mercury-function-card">
                <span>
                  02
                </span>

                <h3>
                  Comprendre
                </h3>

                <p>
                  Il classe les idées, compare les faits et
                  cherche à donner une structure logique ou
                  personnelle aux expériences.
                </p>
              </div>

              <div className="mercury-function-card">
                <span>
                  03
                </span>

                <h3>
                  Transmettre
                </h3>

                <p>
                  Mercure permet de transformer une pensée en
                  paroles, en écrits, en gestes ou en messages
                  compréhensibles.
                </p>
              </div>

              <div className="mercury-function-card">
                <span>
                  04
                </span>

                <h3>
                  S’adapter
                </h3>

                <p>
                  Il symbolise la capacité à modifier son point
                  de vue, à apprendre et à répondre rapidement
                  aux changements.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Mercure, le Soleil et la Lune
            </h2>

            <div className="mercury-pillars">
              <div className="mercury-pillar-card">
                <div className="mercury-pillar-symbol">
                  ☀️
                </div>

                <h3>
                  Le Soleil
                </h3>

                <p>
                  Il représente votre identité consciente,
                  votre volonté et la direction que vous
                  cherchez à donner à votre vie.
                </p>

                <Link
                  href="/astrologie/soleil"
                  className="mercury-text-link"
                >
                  Découvrir le Soleil
                </Link>
              </div>

              <div className="mercury-pillar-card">
                <div className="mercury-pillar-symbol">
                  🌙
                </div>

                <h3>
                  La Lune
                </h3>

                <p>
                  Elle décrit votre monde émotionnel, vos
                  réactions instinctives et vos besoins de
                  sécurité affective.
                </p>

                <Link
                  href="/astrologie/lune"
                  className="mercury-text-link"
                >
                  Découvrir la Lune
                </Link>
              </div>

              <div className="mercury-pillar-card">
                <div className="mercury-pillar-symbol">
                  ☿
                </div>

                <h3>
                  Mercure
                </h3>

                <p>
                  Il révèle votre fonctionnement mental, votre
                  manière de communiquer et votre façon
                  d’assimiler les informations.
                </p>
              </div>
            </div>
          </section>

          <section id="mercure-dans-les-signes">
            <span className="mercury-kicker">
              Les douze expressions de Mercure
            </span>

            <h2>
              Mercure dans les 12 signes astrologiques
            </h2>

            <p>
              Mercure conserve toujours sa fonction de pensée,
              de communication et d’apprentissage. Le signe
              astrologique dans lequel il se trouve décrit la
              manière particulière dont ces facultés
              s’expriment.
            </p>

            <div className="mercury-sign-grid">
              {MERCURY_SIGNS.map((item) => (
                <article
                  className="mercury-sign-card"
                  key={item.sign}
                >
                  <div className="mercury-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Mercure en {item.sign}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="mercure-dans-les-maisons">
            <span className="mercury-kicker">
              Les domaines de votre pensée
            </span>

            <h2>
              Mercure dans les 12 maisons astrologiques
            </h2>

            <p>
              Le signe de Mercure décrit votre style mental,
              tandis que sa maison indique le domaine de vie
              dans lequel votre curiosité, votre réflexion et
              votre besoin de communiquer s’expriment le plus
              naturellement.
            </p>

            <div className="mercury-house-grid">
              {MERCURY_HOUSES.map((item, index) => (
                <article
                  className="mercury-house-card"
                  key={item.house}
                >
                  <div className="mercury-house-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>
                    Mercure en {item.house}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <span className="mercury-kicker">
              Révision et réflexion
            </span>

            <h2>
              Que signifie Mercure rétrograde ?
            </h2>

            <div className="mercury-retrograde-layout">
              <div>
                <p>
                  Depuis la Terre, Mercure semble parfois
                  ralentir puis reculer temporairement dans le
                  ciel. Il s’agit d’un effet apparent lié aux
                  mouvements relatifs de la Terre et de Mercure,
                  et non d’un véritable changement de direction
                  de la planète.
                </p>

                <p>
                  Dans l’interprétation astrologique, les
                  périodes de Mercure rétrograde sont souvent
                  associées à la révision, à la réflexion et à
                  la nécessité de vérifier plus attentivement
                  les informations, les communications ou les
                  décisions.
                </p>

                <p>
                  Mercure rétrograde ne signifie pas que tout
                  doit nécessairement mal fonctionner. Cette
                  période peut plutôt inviter à ralentir, à
                  reprendre une conversation, à revoir un
                  document ou à clarifier une situation restée
                  incomplète.
                </p>
              </div>

              <aside className="mercury-retrograde-card">
                <span className="mercury-retrograde-symbol">
                  ℞
                </span>

                <h3>
                  Une invitation à réviser
                </h3>

                <ul>
                  <li>
                    Vérifier les informations importantes
                  </li>

                  <li>
                    Relire les documents et les messages
                  </li>

                  <li>
                    Clarifier les malentendus
                  </li>

                  <li>
                    Repenser une décision
                  </li>

                  <li>
                    Reprendre un projet inachevé
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis de Mercure
            </h2>

            <div className="mercury-strengths-grid">
              <div className="mercury-strength-card">
                <span className="mercury-kicker">
                  Forces possibles
                </span>

                <h3>
                  Une pensée vivante et adaptable
                </h3>

                <ul>
                  <li>
                    Curiosité intellectuelle
                  </li>

                  <li>
                    Facilité à apprendre
                  </li>

                  <li>
                    Capacité à communiquer
                  </li>

                  <li>
                    Souplesse mentale
                  </li>

                  <li>
                    Sens de l’observation
                  </li>
                </ul>
              </div>

              <div className="mercury-strength-card">
                <span className="mercury-kicker">
                  Points d’attention
                </span>

                <h3>
                  Canaliser l’activité mentale
                </h3>

                <ul>
                  <li>
                    Dispersion
                  </li>

                  <li>
                    Nervosité intellectuelle
                  </li>

                  <li>
                    Surcharge d’informations
                  </li>

                  <li>
                    Tendance à suranalyser
                  </li>

                  <li>
                    Difficulté à écouter pleinement
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              L’importance des aspects de Mercure
            </h2>

            <p>
              Les aspects astrologiques relient Mercure aux
              autres planètes de votre thème natal. Ils
              apportent des nuances supplémentaires à votre
              manière de penser et de communiquer.
            </p>

            <div className="mercury-aspect-grid">
              <article className="mercury-aspect-card">
                <span>
                  ☌
                </span>

                <h3>
                  La conjonction
                </h3>

                <p>
                  Elle fusionne Mercure avec l’énergie d’une
                  autre planète et intensifie leur expression
                  commune.
                </p>
              </article>

              <article className="mercury-aspect-card">
                <span>
                  △
                </span>

                <h3>
                  Le trigone
                </h3>

                <p>
                  Il peut symboliser une circulation fluide
                  entre la pensée et les qualités de l’autre
                  planète.
                </p>
              </article>

              <article className="mercury-aspect-card">
                <span>
                  ✶
                </span>

                <h3>
                  Le sextile
                </h3>

                <p>
                  Il représente un potentiel de coopération et
                  de développement intellectuel ou
                  relationnel.
                </p>
              </article>

              <article className="mercury-aspect-card">
                <span>
                  □
                </span>

                <h3>
                  Le carré
                </h3>

                <p>
                  Il peut créer une tension mentale qui pousse
                  à développer de nouvelles stratégies de
                  communication.
                </p>
              </article>

              <article className="mercury-aspect-card">
                <span>
                  ☍
                </span>

                <h3>
                  L’opposition
                </h3>

                <p>
                  Elle invite à trouver un équilibre entre deux
                  façons différentes de penser, de comprendre
                  ou de s’exprimer.
                </p>
              </article>
            </div>
          </section>

          <section>
            <div className="mercury-cta-card">
              <div>
                <span className="mercury-kicker">
                  Découvrez votre position
                </span>

                <h2>
                  Dans quel signe et quelle maison se trouve
                  votre Mercure ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir votre Mercure, votre Soleil, votre
                  Lune, votre Ascendant et les positions de vos
                  principales planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="mercury-primary-button"
              >
                Découvrir mon thème natal
              </Link>
            </div>
          </section>

          <section className="mercury-faq">
            <span className="mercury-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur Mercure en astrologie
            </h2>

            <div className="mercury-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="mercury-faq-item"
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

          <p className="mercury-disclaimer">
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
