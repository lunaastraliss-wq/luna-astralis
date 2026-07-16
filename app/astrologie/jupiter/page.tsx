import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/jupiter";

export const metadata: Metadata = {
  title:
    "Jupiter en astrologie : expansion, chance et croissance | Luna Astralis",

  description:
    "Découvrez la signification de Jupiter en astrologie, son influence sur l’expansion, la confiance, les croyances et son expression dans les 12 signes du zodiaque.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Jupiter en astrologie : expansion, confiance et croissance",
    description:
      "Comprenez le rôle de Jupiter dans votre thème natal et découvrez comment cette planète symbolise l’expansion, les possibilités, les croyances et la recherche de sens.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Jupiter en astrologie | Luna Astralis",
    description:
      "Découvrez comment Jupiter symbolise la croissance, la confiance, les possibilités et la recherche de sens.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const JUPITER_SIGNS = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "Jupiter en Bélier favorise la croissance par l’initiative, le courage et l’indépendance. La personne peut développer sa confiance lorsqu’elle ose commencer, prendre des risques mesurés et ouvrir de nouvelles voies.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "Jupiter en Taureau recherche une expansion stable, concrète et durable. La croissance peut passer par la patience, la fidélité aux valeurs, le rapport à la nature et la construction progressive de ressources.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "Jupiter en Gémeaux favorise l’expansion par les idées, les échanges et l’apprentissage. La curiosité, les rencontres et la capacité à considérer plusieurs points de vue enrichissent la compréhension du monde.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "Jupiter en Cancer développe la confiance à travers les liens affectifs, le foyer et le sentiment d’appartenance. La générosité, la protection et la transmission familiale peuvent devenir des sources d’épanouissement.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "Jupiter en Lion favorise la croissance par la créativité, l’expression personnelle et la confiance en soi. La personne peut s’épanouir lorsqu’elle ose rayonner, inspirer et partager généreusement ses talents.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "Jupiter en Vierge recherche le développement par le travail, l’amélioration et l’utilité. La croissance passe souvent par l’apprentissage de méthodes efficaces et la mise en pratique des connaissances.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "Jupiter en Balance favorise l’expansion à travers les relations, la coopération et la justice. La personne peut grandir grâce au dialogue, aux partenariats et à la recherche d’un équilibre respectueux.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "Jupiter en Scorpion encourage une croissance profonde et transformatrice. La personne peut développer sa force en explorant la psychologie, les vérités cachées et les expériences qui invitent à se renouveler.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "Jupiter en Sagittaire favorise l’exploration, les études, les voyages et la recherche de sens. La personne s’épanouit souvent lorsqu’elle élargit ses horizons et partage une vision inspirante.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "Jupiter en Capricorne recherche une croissance structurée, responsable et réaliste. Les possibilités se développent par la discipline, la persévérance et la construction d’objectifs à long terme.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "Jupiter en Verseau favorise l’expansion par les idées nouvelles, les réseaux et les projets collectifs. La personne peut grandir lorsqu’elle contribue à une vision tournée vers l’avenir.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "Jupiter en Poissons développe la confiance par l’intuition, la compassion et l’imagination. La croissance peut passer par la créativité, la spiritualité symbolique et l’ouverture aux dimensions sensibles de l’existence.",
  },
];

const JUPITER_HOUSES = [
  {
    house: "Maison I",
    text:
      "Jupiter en Maison I peut renforcer la confiance, l’enthousiasme et le désir de grandir. La personne peut aborder la vie avec optimisme et chercher constamment à élargir ses possibilités.",
  },
  {
    house: "Maison II",
    text:
      "Jupiter en Maison II dirige l’expansion vers les ressources, les valeurs et la sécurité matérielle. La personne peut chercher à développer ses talents et à construire une relation généreuse avec l’abondance.",
  },
  {
    house: "Maison III",
    text:
      "Jupiter en Maison III favorise les apprentissages, les échanges, l’écriture et les déplacements. La personne peut posséder une grande curiosité et aimer transmettre ses connaissances.",
  },
  {
    house: "Maison IV",
    text:
      "Jupiter en Maison IV peut favoriser un sentiment d’expansion à travers le foyer, la famille et les racines. La personne cherche souvent à créer un environnement protecteur et accueillant.",
  },
  {
    house: "Maison V",
    text:
      "Jupiter en Maison V encourage la créativité, le plaisir, l’expression personnelle et la confiance. La personne peut s’épanouir par les arts, les loisirs, les projets passionnés et la transmission.",
  },
  {
    house: "Maison VI",
    text:
      "Jupiter en Maison VI dirige la croissance vers le travail, les méthodes et les habitudes quotidiennes. La personne peut progresser en développant des compétences utiles et une organisation plus efficace.",
  },
  {
    house: "Maison VII",
    text:
      "Jupiter en Maison VII favorise l’expansion à travers les relations, les partenariats et la coopération. La personne peut apprendre beaucoup grâce aux autres et rechercher des engagements enrichissants.",
  },
  {
    house: "Maison VIII",
    text:
      "Jupiter en Maison VIII encourage une croissance profonde à travers les transformations, l’intimité et les ressources partagées. La personne peut développer une grande compréhension psychologique.",
  },
  {
    house: "Maison IX",
    text:
      "Jupiter en Maison IX renforce le besoin d’explorer, d’étudier et de rechercher un sens plus vaste. Les voyages, les cultures, la philosophie et les connaissances peuvent occuper une place centrale.",
  },
  {
    house: "Maison X",
    text:
      "Jupiter en Maison X peut soutenir l’ambition, la reconnaissance et le développement professionnel. La personne cherche souvent à construire une vocation porteuse de sens et d’influence.",
  },
  {
    house: "Maison XI",
    text:
      "Jupiter en Maison XI favorise l’expansion par les groupes, les réseaux et les projets collectifs. Les amitiés et les idéaux partagés peuvent ouvrir de nouvelles possibilités.",
  },
  {
    house: "Maison XII",
    text:
      "Jupiter en Maison XII développe une croissance intérieure, intuitive et discrète. La personne peut trouver du sens dans la solitude, la compassion, la spiritualité symbolique ou l’aide apportée aux autres.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente Jupiter en astrologie ?",
    answer:
      "Jupiter représente symboliquement l’expansion, la croissance, la confiance, les croyances, la recherche de sens et la capacité à reconnaître de nouvelles possibilités.",
  },
  {
    question:
      "Pourquoi Jupiter est-il associé à la chance ?",
    answer:
      "Jupiter est traditionnellement associé aux occasions, à l’ouverture et à la croissance. Cela ne signifie pas qu’il garantit des événements heureux, mais qu’il peut symboliser les domaines où une personne cherche à se développer.",
  },
  {
    question:
      "Que signifie le signe de Jupiter ?",
    answer:
      "Le signe de Jupiter décrit la manière dont vous développez votre confiance, élargissez vos connaissances et recherchez un sens plus vaste à vos expériences.",
  },
  {
    question:
      "Que signifie Jupiter rétrograde dans un thème natal ?",
    answer:
      "Dans l’interprétation astrologique, Jupiter rétrograde à la naissance peut symboliser une recherche de sens plus intérieure, personnelle et indépendante des croyances collectives.",
  },
  {
    question:
      "Jupiter rétrograde est-il négatif ?",
    answer:
      "Non. Cette période est plutôt interprétée comme une invitation à revoir ses croyances, ses objectifs de croissance et la manière dont on définit la réussite ou l’abondance.",
  },
  {
    question:
      "Comment connaître mon signe de Jupiter ?",
    answer:
      "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance pour connaître la position exacte de Jupiter.",
  },
  {
    question:
      "Quelle différence entre Jupiter et Saturne ?",
    answer:
      "Jupiter symbolise l’expansion, la confiance et les possibilités, tandis que Saturne représente davantage la structure, les limites, les responsabilités et la maturation.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Jupiter en astrologie : expansion, confiance et croissance",
  description:
    "Guide complet consacré au rôle de Jupiter dans le thème natal, à son expression dans les douze signes et les douze maisons astrologiques.",
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

export default function JupiterAstrologiePage() {
  return (
    <div className="jupiter-page">
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

      <main className="jupiter-wrap">
        <section className="jupiter-hero">
          <div className="jupiter-badge">
            ♃ Planètes et thème natal
          </div>

          <h1>
            Jupiter en astrologie
          </h1>

          <p className="jupiter-hero-lead">
            Jupiter représente votre manière de grandir,
            d’élargir vos horizons, de développer votre
            confiance et de donner un sens plus vaste à vos
            expériences.
          </p>

          <div className="jupiter-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="jupiter-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#jupiter-dans-les-signes"
              className="jupiter-secondary-button"
            >
              Voir les 12 signes
            </a>
          </div>
        </section>

        <article className="jupiter-content">
          <section>
            <span className="jupiter-kicker">
              Comprendre votre potentiel d’expansion
            </span>

            <h2>
              Que représente Jupiter dans un thème astral ?
            </h2>

            <p>
              En astrologie, Jupiter symbolise l’expansion, la
              confiance, les croyances et la recherche de sens.
              Il décrit la manière dont une personne cherche à
              grandir, à apprendre et à dépasser ses limites
              habituelles.
            </p>

            <p>
              Sa position dans votre carte du ciel peut
              indiquer les domaines dans lesquels vous ressentez
              un besoin d’ouverture, de découverte ou de
              développement. Elle révèle également la manière
              dont vous construisez votre vision du monde.
            </p>

            <p>
              Jupiter est souvent associé à la chance, mais il
              ne garantit pas automatiquement la réussite. Il
              symbolise plutôt une tendance à reconnaître les
              possibilités et à les développer avec confiance,
              discernement et engagement.
            </p>
          </section>

          <section>
            <h2>
              Jupiter, la croissance et la confiance
            </h2>

            <div className="jupiter-info-grid">
              <div className="jupiter-info-card">
                <span className="jupiter-card-icon">
                  ♃
                </span>

                <h3>
                  Votre expansion
                </h3>

                <p>
                  Jupiter décrit la manière dont vous élargissez
                  vos connaissances, vos expériences et votre
                  vision de la vie.
                </p>
              </div>

              <div className="jupiter-info-card">
                <span className="jupiter-card-icon">
                  ✦
                </span>

                <h3>
                  Votre confiance
                </h3>

                <p>
                  Il révèle ce qui vous aide à croire en vos
                  possibilités et à avancer avec davantage
                  d’optimisme.
                </p>
              </div>

              <div className="jupiter-info-card">
                <span className="jupiter-card-icon">
                  ✧
                </span>

                <h3>
                  Votre recherche de sens
                </h3>

                <p>
                  Jupiter représente les croyances, les valeurs
                  philosophiques et les idées qui donnent une
                  direction plus vaste à votre existence.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les principales fonctions de Jupiter
            </h2>

            <div className="jupiter-functions-grid">
              <div className="jupiter-function-card">
                <span>
                  01
                </span>

                <h3>
                  Explorer
                </h3>

                <p>
                  Jupiter encourage la découverte de nouvelles
                  idées, cultures, connaissances et façons de
                  comprendre le monde.
                </p>
              </div>

              <div className="jupiter-function-card">
                <span>
                  02
                </span>

                <h3>
                  Grandir
                </h3>

                <p>
                  Il représente le besoin de dépasser ses
                  limites habituelles et de développer un
                  potentiel encore inexploité.
                </p>
              </div>

              <div className="jupiter-function-card">
                <span>
                  03
                </span>

                <h3>
                  Transmettre
                </h3>

                <p>
                  Jupiter symbolise le partage des connaissances,
                  l’enseignement et la capacité à inspirer les
                  autres par une vision.
                </p>
              </div>

              <div className="jupiter-function-card">
                <span>
                  04
                </span>

                <h3>
                  Donner du sens
                </h3>

                <p>
                  Il aide à relier les expériences à une
                  philosophie personnelle, à des convictions ou
                  à une compréhension plus large de la vie.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Jupiter, Mars et Saturne
            </h2>

            <div className="jupiter-pillars">
              <div className="jupiter-pillar-card">
                <div className="jupiter-pillar-symbol">
                  ♂
                </div>

                <h3>
                  Mars
                </h3>

                <p>
                  Il représente l’action, le désir, le courage
                  et la manière dont vous poursuivez vos
                  objectifs.
                </p>

                <Link
                  href="/astrologie/mars"
                  className="jupiter-text-link"
                >
                  Découvrir Mars
                </Link>
              </div>

              <div className="jupiter-pillar-card">
                <div className="jupiter-pillar-symbol">
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
              </div>

              <div className="jupiter-pillar-card">
                <div className="jupiter-pillar-symbol">
                  ♄
                </div>

                <h3>
                  Saturne
                </h3>

                <p>
                  Il représente la structure, les responsabilités,
                  les limites et la maturation progressive.
                </p>
              </div>
            </div>
          </section>

          <section id="jupiter-dans-les-signes">
            <span className="jupiter-kicker">
              Les douze expressions de Jupiter
            </span>

            <h2>
              Jupiter dans les 12 signes astrologiques
            </h2>

            <p>
              Jupiter conserve toujours sa fonction de
              croissance, de confiance et d’expansion. Le signe
              dans lequel il se trouve décrit la manière
              particulière dont ces qualités s’expriment.
            </p>

            <div className="jupiter-sign-grid">
              {JUPITER_SIGNS.map((item) => (
                <article
                  className="jupiter-sign-card"
                  key={item.sign}
                >
                  <div className="jupiter-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Jupiter en {item.sign}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="jupiter-dans-les-maisons">
            <span className="jupiter-kicker">
              Les domaines de votre expansion
            </span>

            <h2>
              Jupiter dans les 12 maisons astrologiques
            </h2>

            <p>
              Le signe de Jupiter décrit votre manière de
              grandir, tandis que sa maison indique le domaine
              de vie dans lequel votre besoin d’expansion, de
              découverte et de confiance s’exprime le plus.
            </p>

            <div className="jupiter-house-grid">
              {JUPITER_HOUSES.map((item, index) => (
                <article
                  className="jupiter-house-card"
                  key={item.house}
                >
                  <div className="jupiter-house-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>
                    Jupiter en {item.house}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <span className="jupiter-kicker">
              Révision des croyances
            </span>

            <h2>
              Que signifie Jupiter rétrograde ?
            </h2>

            <div className="jupiter-retrograde-layout">
              <div>
                <p>
                  Depuis la Terre, Jupiter semble parfois
                  ralentir puis reculer temporairement dans le
                  ciel. Il s’agit d’un mouvement apparent lié
                  aux positions relatives de la Terre et de
                  Jupiter.
                </p>

                <p>
                  Dans l’interprétation astrologique, Jupiter
                  rétrograde est souvent associé à une recherche
                  de sens plus intérieure. La personne peut
                  avoir besoin de développer ses propres
                  croyances plutôt que d’adopter celles de son
                  environnement.
                </p>

                <p>
                  Cette période peut inviter à revoir ses
                  objectifs de croissance, sa définition de la
                  réussite et les idées qui orientent ses choix.
                  Elle ne signifie pas que les possibilités
                  disparaissent.
                </p>
              </div>

              <aside className="jupiter-retrograde-card">
                <span className="jupiter-retrograde-symbol">
                  ♃℞
                </span>

                <h3>
                  Une invitation à approfondir
                </h3>

                <ul>
                  <li>
                    Revoir ses croyances
                  </li>

                  <li>
                    Clarifier sa vision de la réussite
                  </li>

                  <li>
                    Approfondir ses connaissances
                  </li>

                  <li>
                    Repenser ses objectifs d’expansion
                  </li>

                  <li>
                    Développer une confiance plus intérieure
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis de Jupiter
            </h2>

            <div className="jupiter-strengths-grid">
              <div className="jupiter-strength-card">
                <span className="jupiter-kicker">
                  Forces possibles
                </span>

                <h3>
                  Une vision expansive
                </h3>

                <ul>
                  <li>
                    Optimisme
                  </li>

                  <li>
                    Confiance
                  </li>

                  <li>
                    Curiosité intellectuelle
                  </li>

                  <li>
                    Générosité
                  </li>

                  <li>
                    Capacité à inspirer
                  </li>
                </ul>
              </div>

              <div className="jupiter-strength-card">
                <span className="jupiter-kicker">
                  Points d’attention
                </span>

                <h3>
                  Préserver le sens de la mesure
                </h3>

                <ul>
                  <li>
                    Excès de confiance
                  </li>

                  <li>
                    Promesses difficiles à tenir
                  </li>

                  <li>
                    Dispersion
                  </li>

                  <li>
                    Tendance à exagérer
                  </li>

                  <li>
                    Difficulté à reconnaître les limites
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les aspects astrologiques de Jupiter
            </h2>

            <p>
              Les aspects relient Jupiter aux autres planètes
              du thème natal. Ils apportent des nuances à votre
              manière de développer votre confiance, vos
              croyances et votre potentiel d’expansion.
            </p>

            <div className="jupiter-aspect-grid">
              <article className="jupiter-aspect-card">
                <span>
                  ☌
                </span>

                <h3>
                  La conjonction
                </h3>

                <p>
                  Elle fusionne Jupiter avec une autre planète
                  et amplifie leur expression commune dans le
                  thème natal.
                </p>
              </article>

              <article className="jupiter-aspect-card">
                <span>
                  △
                </span>

                <h3>
                  Le trigone
                </h3>

                <p>
                  Il peut symboliser une circulation naturelle
                  entre la confiance de Jupiter et les qualités
                  de l’autre planète.
                </p>
              </article>

              <article className="jupiter-aspect-card">
                <span>
                  ✶
                </span>

                <h3>
                  Le sextile
                </h3>

                <p>
                  Il représente un potentiel de développement,
                  d’ouverture et de coopération constructive.
                </p>
              </article>

              <article className="jupiter-aspect-card">
                <span>
                  □
                </span>

                <h3>
                  Le carré
                </h3>

                <p>
                  Il peut créer une tension entre le désir
                  d’expansion et la nécessité de développer
                  davantage de discernement.
                </p>
              </article>

              <article className="jupiter-aspect-card">
                <span>
                  ☍
                </span>

                <h3>
                  L’opposition
                </h3>

                <p>
                  Elle invite à équilibrer deux visions, deux
                  croyances ou deux manières différentes de
                  rechercher la croissance.
                </p>
              </article>
            </div>
          </section>

          <section>
            <div className="jupiter-cta-card">
              <div>
                <span className="jupiter-kicker">
                  Découvrez votre position
                </span>

                <h2>
                  Dans quel signe et quelle maison se trouve
                  votre Jupiter ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir votre Jupiter, votre Mars, votre
                  Vénus, votre Soleil, votre Lune et les
                  positions de vos principales planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="jupiter-primary-button"
              >
                Découvrir mon thème natal
              </Link>
            </div>
          </section>

          <section className="jupiter-faq">
            <span className="jupiter-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur Jupiter en astrologie
            </h2>

            <div className="jupiter-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="jupiter-faq-item"
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

          <p className="jupiter-disclaimer">
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
