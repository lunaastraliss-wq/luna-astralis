import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/mars";

export const metadata: Metadata = {
  title:
    "Mars en astrologie : action, désir, courage et énergie | Luna Astralis",

  description:
    "Découvrez la signification de Mars en astrologie, son influence sur l’action, le désir, le courage, l’affirmation et son expression dans les 12 signes du zodiaque.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Mars en astrologie : action, désir, courage et affirmation",
    description:
      "Comprenez le rôle de Mars dans votre thème natal et découvrez comment cette planète influence votre énergie, votre volonté d’agir et votre manière de vous affirmer.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mars en astrologie | Luna Astralis",
    description:
      "Découvrez comment Mars influence votre énergie, votre désir, votre courage et votre manière de passer à l’action.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const MARS_SIGNS = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "Mars en Bélier agit avec rapidité, courage et spontanéité. Cette position favorise l’initiative, la compétition et le besoin d’avancer directement vers ses objectifs.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "Mars en Taureau agit avec patience, endurance et détermination. La personne avance lentement, mais elle peut poursuivre ses efforts avec une grande constance lorsqu’elle désire vraiment quelque chose.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "Mars en Gémeaux dirige son énergie vers les idées, les échanges et la découverte. La parole, l’intelligence et la curiosité deviennent des moyens privilégiés d’agir et de se défendre.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "Mars en Cancer agit sous l’influence des émotions et du besoin de protéger. La personne peut mobiliser une grande force lorsqu’elle défend sa famille, son foyer ou ce qui lui tient profondément à cœur.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "Mars en Lion agit avec confiance, créativité et fierté. Cette position recherche des actions valorisantes et permet souvent de mobiliser beaucoup d’énergie lorsqu’un objectif stimule le cœur.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "Mars en Vierge agit avec précision, méthode et efficacité. La personne concentre son énergie sur les détails, l’organisation et l’amélioration concrète des situations.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "Mars en Balance cherche à agir en tenant compte des autres et des conséquences relationnelles. La personne peut défendre l’équité, négocier et mobiliser son énergie pour rétablir l’harmonie.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "Mars en Scorpion agit avec intensité, stratégie et profondeur. Cette position favorise la détermination, la résistance et la capacité à poursuivre un objectif malgré les obstacles.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "Mars en Sagittaire agit avec enthousiasme, franchise et besoin de liberté. La personne mobilise son énergie lorsqu’elle peut explorer, apprendre, voyager ou défendre ses convictions.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "Mars en Capricorne agit avec discipline, ambition et maîtrise. Cette position favorise la planification, la persévérance et la capacité à poursuivre des objectifs à long terme.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "Mars en Verseau agit de manière indépendante, inventive et parfois imprévisible. La personne peut investir son énergie dans des idées nouvelles, des causes ou des projets collectifs.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "Mars en Poissons agit grâce à l’intuition, à l’imagination et à la sensibilité. La personne peut mobiliser son énergie dans la création, l’aide aux autres ou les projets porteurs de sens.",
  },
];

const MARS_HOUSES = [
  {
    house: "Maison I",
    text:
      "Mars en Maison I renforce l’affirmation, l’initiative et le besoin d’agir directement. La personne peut dégager une énergie volontaire, combative ou particulièrement dynamique.",
  },
  {
    house: "Maison II",
    text:
      "Mars en Maison II dirige l’énergie vers les ressources, la sécurité et la construction matérielle. La personne peut se montrer très déterminée lorsqu’il s’agit de défendre ses valeurs ou ses possessions.",
  },
  {
    house: "Maison III",
    text:
      "Mars en Maison III donne une communication vive, directe et énergique. La personne peut défendre ses idées avec force et investir beaucoup d’énergie dans les apprentissages et les déplacements.",
  },
  {
    house: "Maison IV",
    text:
      "Mars en Maison IV concentre l’action dans la vie privée, le foyer et la famille. La personne peut ressentir un fort besoin de protéger ses racines ou de transformer son environnement personnel.",
  },
  {
    house: "Maison V",
    text:
      "Mars en Maison V stimule la créativité, le désir, la compétition et l’expression personnelle. La personne recherche souvent des activités passionnantes et des relations vivantes.",
  },
  {
    house: "Maison VI",
    text:
      "Mars en Maison VI dirige l’énergie vers le travail, les responsabilités et les habitudes quotidiennes. La personne peut être très productive lorsqu’elle dispose d’objectifs précis.",
  },
  {
    house: "Maison VII",
    text:
      "Mars en Maison VII rend les relations particulièrement dynamiques. La personne peut attirer des partenaires affirmés et doit apprendre à gérer les désaccords avec équilibre.",
  },
  {
    house: "Maison VIII",
    text:
      "Mars en Maison VIII donne une volonté intense, stratégique et transformatrice. La personne peut affronter les crises avec courage et rechercher une intimité profonde.",
  },
  {
    house: "Maison IX",
    text:
      "Mars en Maison IX mobilise l’énergie autour des voyages, des études, des convictions et de la recherche de sens. La personne agit avec enthousiasme lorsqu’elle défend une vision.",
  },
  {
    house: "Maison X",
    text:
      "Mars en Maison X renforce l’ambition, le désir de réussite et la capacité à agir dans la sphère professionnelle. La personne peut poursuivre ses objectifs avec beaucoup de détermination.",
  },
  {
    house: "Maison XI",
    text:
      "Mars en Maison XI dirige l’action vers les projets, les réseaux et les causes collectives. La personne peut devenir un moteur important au sein d’un groupe.",
  },
  {
    house: "Maison XII",
    text:
      "Mars en Maison XII donne une énergie plus intérieure ou difficile à exprimer directement. La personne peut agir efficacement dans l’ombre, mais doit apprendre à reconnaître et canaliser sa colère.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente Mars en astrologie ?",
    answer:
      "Mars représente symboliquement l’action, l’énergie, le courage, le désir, l’affirmation, la colère et la manière dont une personne poursuit ce qu’elle veut.",
  },
  {
    question:
      "Que signifie le signe de Mars ?",
    answer:
      "Le signe de Mars décrit votre manière d’agir, de vous défendre, d’exprimer votre désir et de mobiliser votre énergie face aux obstacles.",
  },
  {
    question:
      "Mars représente-t-il seulement l’agressivité ?",
    answer:
      "Non. Mars symbolise aussi l’initiative, le courage, la motivation, la détermination et la capacité à poser des limites ou à défendre ses intérêts.",
  },
  {
    question:
      "Que signifie Mars rétrograde dans un thème natal ?",
    answer:
      "Dans l’interprétation astrologique, Mars rétrograde à la naissance peut indiquer une manière plus intérieure, réfléchie ou personnelle d’exprimer la colère, le désir et l’affirmation.",
  },
  {
    question:
      "Mars rétrograde empêche-t-il d’agir ?",
    answer:
      "Non. Cette période est plutôt interprétée comme une invitation à revoir ses objectifs, son rythme d’action et la manière dont on utilise son énergie.",
  },
  {
    question:
      "Comment connaître mon signe de Mars ?",
    answer:
      "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance pour connaître la position exacte de Mars.",
  },
  {
    question:
      "Quelle différence entre Mars et Vénus ?",
    answer:
      "Vénus décrit l’attirance, les valeurs et la manière d’aimer, tandis que Mars représente le désir, l’action, l’initiative et la manière de poursuivre ce que l’on veut.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Mars en astrologie : action, désir, courage et affirmation",
  description:
    "Guide complet consacré au rôle de Mars dans le thème natal, à son expression dans les douze signes et les douze maisons astrologiques.",
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

export default function MarsAstrologiePage() {
  return (
    <div className="mars-page">
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

      <main className="mars-wrap">
        <section className="mars-hero">
          <div className="mars-badge">
            ♂ Planètes et thème natal
          </div>

          <h1>
            Mars en astrologie
          </h1>

          <p className="mars-hero-lead">
            Mars représente votre énergie, votre courage,
            votre désir, votre manière de passer à l’action et
            votre capacité à vous affirmer.
          </p>

          <div className="mars-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="mars-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#mars-dans-les-signes"
              className="mars-secondary-button"
            >
              Voir les 12 signes
            </a>
          </div>
        </section>

        <article className="mars-content">
          <section>
            <span className="mars-kicker">
              Comprendre votre force d’action
            </span>

            <h2>
              Que représente Mars dans un thème astral ?
            </h2>

            <p>
              En astrologie, Mars symbolise l’action, le désir,
              le courage et la capacité à défendre ses
              intérêts. Il décrit la manière dont une personne
              mobilise son énergie pour poursuivre ses
              objectifs.
            </p>

            <p>
              Sa position dans votre carte du ciel peut révéler
              votre style d’affirmation, votre manière de
              réagir face aux obstacles et les situations qui
              éveillent naturellement votre combativité.
            </p>

            <p>
              Mars ne représente pas uniquement la colère ou
              l’agressivité. Il symbolise également la
              motivation, la détermination, l’initiative et la
              capacité à poser des limites claires.
            </p>
          </section>

          <section>
            <h2>
              Mars, l’action et l’affirmation
            </h2>

            <div className="mars-info-grid">
              <div className="mars-info-card">
                <span className="mars-card-icon">
                  ♂
                </span>

                <h3>
                  Votre manière d’agir
                </h3>

                <p>
                  Mars décrit la façon dont vous transformez
                  une intention en action et poursuivez
                  concrètement vos objectifs.
                </p>
              </div>

              <div className="mars-info-card">
                <span className="mars-card-icon">
                  ✦
                </span>

                <h3>
                  Votre désir
                </h3>

                <p>
                  Il révèle ce qui stimule votre énergie, votre
                  passion et votre besoin de conquérir ou
                  d’obtenir quelque chose.
                </p>
              </div>

              <div className="mars-info-card">
                <span className="mars-card-icon">
                  ⚔
                </span>

                <h3>
                  Votre affirmation
                </h3>

                <p>
                  Mars montre comment vous défendez vos
                  limites, exprimez votre désaccord et prenez
                  votre place.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les principales fonctions de Mars
            </h2>

            <div className="mars-functions-grid">
              <div className="mars-function-card">
                <span>
                  01
                </span>

                <h3>
                  Initier
                </h3>

                <p>
                  Mars donne l’impulsion nécessaire pour
                  commencer une action, prendre une décision
                  et sortir de l’immobilité.
                </p>
              </div>

              <div className="mars-function-card">
                <span>
                  02
                </span>

                <h3>
                  Poursuivre
                </h3>

                <p>
                  Il symbolise la volonté de continuer malgré
                  les obstacles, les résistances ou les
                  difficultés rencontrées.
                </p>
              </div>

              <div className="mars-function-card">
                <span>
                  03
                </span>

                <h3>
                  Défendre
                </h3>

                <p>
                  Mars permet de protéger ses intérêts, de poser
                  des limites et de réagir lorsqu’une situation
                  semble injuste ou menaçante.
                </p>
              </div>

              <div className="mars-function-card">
                <span>
                  04
                </span>

                <h3>
                  Conquérir
                </h3>

                <p>
                  Il représente le besoin d’avancer vers un
                  objectif, de relever un défi et de dépasser
                  ses propres limites.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Mars, Vénus et le Soleil
            </h2>

            <div className="mars-pillars">
              <div className="mars-pillar-card">
                <div className="mars-pillar-symbol">
                  ☀️
                </div>

                <h3>
                  Le Soleil
                </h3>

                <p>
                  Il représente votre identité consciente,
                  votre volonté et la direction générale que
                  vous cherchez à donner à votre vie.
                </p>

                <Link
                  href="/astrologie/soleil"
                  className="mars-text-link"
                >
                  Découvrir le Soleil
                </Link>
              </div>

              <div className="mars-pillar-card">
                <div className="mars-pillar-symbol">
                  ♀
                </div>

                <h3>
                  Vénus
                </h3>

                <p>
                  Elle décrit votre manière d’aimer, vos
                  valeurs, vos goûts et ce qui vous attire dans
                  les relations.
                </p>

                <Link
                  href="/astrologie/venus"
                  className="mars-text-link"
                >
                  Découvrir Vénus
                </Link>
              </div>

              <div className="mars-pillar-card">
                <div className="mars-pillar-symbol">
                  ♂
                </div>

                <h3>
                  Mars
                </h3>

                <p>
                  Il représente l’action, le désir, le courage
                  et la manière dont vous poursuivez ce que
                  vous voulez.
                </p>
              </div>
            </div>
          </section>

          <section id="mars-dans-les-signes">
            <span className="mars-kicker">
              Les douze expressions de Mars
            </span>

            <h2>
              Mars dans les 12 signes astrologiques
            </h2>

            <p>
              Mars conserve toujours sa fonction d’action, de
              désir et d’affirmation. Le signe dans lequel il
              se trouve décrit la manière particulière dont
              votre énergie se mobilise.
            </p>

            <div className="mars-sign-grid">
              {MARS_SIGNS.map((item) => (
                <article
                  className="mars-sign-card"
                  key={item.sign}
                >
                  <div className="mars-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Mars en {item.sign}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="mars-dans-les-maisons">
            <span className="mars-kicker">
              Les domaines de votre action
            </span>

            <h2>
              Mars dans les 12 maisons astrologiques
            </h2>

            <p>
              Le signe de Mars décrit votre manière d’agir,
              tandis que sa maison indique le domaine de vie
              dans lequel votre énergie, votre courage et
              votre besoin d’affirmation s’expriment le plus.
            </p>

            <div className="mars-house-grid">
              {MARS_HOUSES.map((item, index) => (
                <article
                  className="mars-house-card"
                  key={item.house}
                >
                  <div className="mars-house-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>
                    Mars en {item.house}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <span className="mars-kicker">
              Révision de l’action
            </span>

            <h2>
              Que signifie Mars rétrograde ?
            </h2>

            <div className="mars-retrograde-layout">
              <div>
                <p>
                  Depuis la Terre, Mars semble parfois ralentir
                  puis reculer temporairement dans le ciel. Il
                  s’agit d’un mouvement apparent produit par
                  les positions relatives de la Terre et de
                  Mars.
                </p>

                <p>
                  Dans l’interprétation astrologique, Mars
                  rétrograde est souvent associé à une période
                  de réflexion sur les objectifs, la colère, la
                  motivation et la manière d’utiliser son
                  énergie.
                </p>

                <p>
                  Cette période ne signifie pas nécessairement
                  qu’il faut arrêter d’agir. Elle peut plutôt
                  inviter à ralentir, à revoir sa stratégie et
                  à éviter de gaspiller son énergie dans des
                  conflits inutiles.
                </p>
              </div>

              <aside className="mars-retrograde-card">
                <span className="mars-retrograde-symbol">
                  ♂℞
                </span>

                <h3>
                  Une invitation à réorienter
                </h3>

                <ul>
                  <li>
                    Revoir ses objectifs
                  </li>

                  <li>
                    Observer sa manière de gérer la colère
                  </li>

                  <li>
                    Clarifier ses motivations
                  </li>

                  <li>
                    Éviter les actions impulsives
                  </li>

                  <li>
                    Reprendre un projet avec une nouvelle stratégie
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis de Mars
            </h2>

            <div className="mars-strengths-grid">
              <div className="mars-strength-card">
                <span className="mars-kicker">
                  Forces possibles
                </span>

                <h3>
                  Une énergie volontaire
                </h3>

                <ul>
                  <li>
                    Courage
                  </li>

                  <li>
                    Initiative
                  </li>

                  <li>
                    Détermination
                  </li>

                  <li>
                    Capacité à défendre ses limites
                  </li>

                  <li>
                    Goût du défi
                  </li>
                </ul>
              </div>

              <div className="mars-strength-card">
                <span className="mars-kicker">
                  Points d’attention
                </span>

                <h3>
                  Canaliser l’intensité
                </h3>

                <ul>
                  <li>
                    Impulsivité
                  </li>

                  <li>
                    Colère difficile à maîtriser
                  </li>

                  <li>
                    Compétition excessive
                  </li>

                  <li>
                    Tendance à agir trop vite
                  </li>

                  <li>
                    Difficulté à accepter les obstacles
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les aspects astrologiques de Mars
            </h2>

            <p>
              Les aspects relient Mars aux autres planètes du
              thème natal. Ils apportent des nuances à votre
              manière d’agir, de vous affirmer et de mobiliser
              votre énergie.
            </p>

            <div className="mars-aspect-grid">
              <article className="mars-aspect-card">
                <span>
                  ☌
                </span>

                <h3>
                  La conjonction
                </h3>

                <p>
                  Elle fusionne Mars avec une autre planète et
                  intensifie leur expression commune dans
                  l’action.
                </p>
              </article>

              <article className="mars-aspect-card">
                <span>
                  △
                </span>

                <h3>
                  Le trigone
                </h3>

                <p>
                  Il peut symboliser une circulation naturelle
                  entre l’énergie de Mars et les qualités de
                  l’autre planète.
                </p>
              </article>

              <article className="mars-aspect-card">
                <span>
                  ✶
                </span>

                <h3>
                  Le sextile
                </h3>

                <p>
                  Il représente un potentiel de coopération,
                  d’initiative et de développement constructif.
                </p>
              </article>

              <article className="mars-aspect-card">
                <span>
                  □
                </span>

                <h3>
                  Le carré
                </h3>

                <p>
                  Il peut créer une tension qui pousse à
                  développer davantage de maîtrise, de patience
                  et de stratégie.
                </p>
              </article>

              <article className="mars-aspect-card">
                <span>
                  ☍
                </span>

                <h3>
                  L’opposition
                </h3>

                <p>
                  Elle invite à trouver un équilibre entre ses
                  propres désirs et les besoins ou les actions
                  des autres.
                </p>
              </article>
            </div>
          </section>

          <section>
            <div className="mars-cta-card">
              <div>
                <span className="mars-kicker">
                  Découvrez votre position
                </span>

                <h2>
                  Dans quel signe et quelle maison se trouve
                  votre Mars ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir votre Mars, votre Vénus, votre
                  Soleil, votre Lune et les positions de vos
                  principales planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="mars-primary-button"
              >
                Découvrir mon thème natal
              </Link>
            </div>
          </section>

          <section className="mars-faq">
            <span className="mars-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur Mars en astrologie
            </h2>

            <div className="mars-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="mars-faq-item"
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

          <p className="mars-disclaimer">
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
