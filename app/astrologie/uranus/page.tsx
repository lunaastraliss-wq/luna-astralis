import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/uranus";

export const metadata: Metadata = {
  title:
    "Uranus en astrologie : liberté, changement et innovation | Luna Astralis",

  description:
    "Découvrez la signification d’Uranus en astrologie, son influence sur la liberté, les changements, l’originalité et son expression dans les 12 signes du zodiaque.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Uranus en astrologie : liberté, innovation et changement",
    description:
      "Comprenez le rôle d’Uranus dans votre thème natal et découvrez comment cette planète symbolise l’indépendance, l’éveil, l’originalité et les transformations soudaines.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Uranus en astrologie | Luna Astralis",
    description:
      "Découvrez comment Uranus symbolise la liberté, l’innovation, l’indépendance et les changements inattendus.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const URANUS_SIGNS = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "Uranus en Bélier favorise une indépendance directe, audacieuse et spontanée. Cette génération cherche à ouvrir de nouvelles voies, à agir rapidement et à remettre en question les modèles qui limitent l’initiative personnelle.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "Uranus en Taureau transforme progressivement le rapport aux ressources, aux valeurs et à la sécurité. Cette position invite à inventer de nouvelles façons de construire une stabilité plus libre et plus adaptée.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "Uranus en Gémeaux stimule les idées nouvelles, les échanges rapides et les innovations liées à la communication. Cette position favorise une pensée originale, mobile et capable de relier des concepts inattendus.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "Uranus en Cancer remet en question les modèles familiaux, les traditions et les manières de créer un sentiment d’appartenance. La liberté peut se construire par une définition plus personnelle du foyer et de la sécurité émotionnelle.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "Uranus en Lion favorise une expression créative originale et indépendante. Cette position pousse à rayonner autrement, à inventer de nouvelles formes d’expression et à refuser les rôles trop rigides.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "Uranus en Vierge transforme les méthodes, les habitudes et l’organisation du travail. Cette position recherche des solutions nouvelles, efficaces et capables d’améliorer concrètement le quotidien.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "Uranus en Balance remet en question les modèles relationnels et les conventions sociales. Cette position favorise des partenariats plus libres, égalitaires et respectueux de l’individualité de chacun.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "Uranus en Scorpion intensifie le besoin de transformation et de vérité. Cette position peut bouleverser les rapports au pouvoir, à l’intimité et aux attachements afin de libérer ce qui était profondément enfoui.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "Uranus en Sagittaire favorise l’exploration de nouvelles croyances, cultures et visions du monde. Cette position remet en question les certitudes et encourage une recherche de sens plus libre et indépendante.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "Uranus en Capricorne transforme les structures, les institutions et les modèles de réussite. Cette position cherche à moderniser ce qui est devenu rigide tout en construisant des systèmes plus adaptés à l’avenir.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "Uranus en Verseau renforce l’innovation, l’indépendance et la vision collective. Cette position favorise les idées progressistes, les réseaux et les changements capables d’influencer durablement la société.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "Uranus en Poissons transforme l’imagination, l’intuition et la sensibilité collective. Cette position peut ouvrir de nouvelles perceptions et encourager des formes originales de créativité ou de spiritualité symbolique.",
  },
];

const URANUS_HOUSES = [
  {
    house: "Maison I",
    text:
      "Uranus en Maison I renforce l’indépendance, l’originalité et le besoin de vivre selon ses propres règles. La personne peut se présenter de manière singulière et changer régulièrement sa façon d’affirmer son identité.",
  },
  {
    house: "Maison II",
    text:
      "Uranus en Maison II transforme le rapport à l’argent, aux ressources et aux valeurs. La personne peut rechercher des formes de sécurité plus flexibles et développer des talents dans des domaines innovants.",
  },
  {
    house: "Maison III",
    text:
      "Uranus en Maison III donne une pensée rapide, inventive et indépendante. La communication peut être originale, surprenante et tournée vers des idées nouvelles ou peu conventionnelles.",
  },
  {
    house: "Maison IV",
    text:
      "Uranus en Maison IV peut rendre la vie familiale ou résidentielle changeante. La personne cherche à créer un foyer qui respecte sa liberté et peut remettre en question certains modèles hérités.",
  },
  {
    house: "Maison V",
    text:
      "Uranus en Maison V favorise une créativité originale, des passions soudaines et une expression personnelle imprévisible. La personne recherche souvent des expériences stimulantes et non conventionnelles.",
  },
  {
    house: "Maison VI",
    text:
      "Uranus en Maison VI transforme le travail, les habitudes et l’organisation quotidienne. La personne peut avoir besoin de liberté dans ses méthodes et préférer des environnements souples ou innovants.",
  },
  {
    house: "Maison VII",
    text:
      "Uranus en Maison VII rend les relations dynamiques, originales et parfois imprévisibles. La personne recherche un partenaire capable de respecter son indépendance et son besoin d’espace.",
  },
  {
    house: "Maison VIII",
    text:
      "Uranus en Maison VIII peut provoquer des transformations soudaines dans l’intimité, les ressources partagées ou la psychologie. La personne cherche à se libérer des attachements devenus limitants.",
  },
  {
    house: "Maison IX",
    text:
      "Uranus en Maison IX favorise une vision du monde indépendante et novatrice. Les voyages, les études et la découverte de nouvelles philosophies peuvent provoquer de véritables éveils.",
  },
  {
    house: "Maison X",
    text:
      "Uranus en Maison X peut donner un parcours professionnel atypique, changeant ou innovant. La personne cherche souvent à construire une vocation qui lui permet de préserver sa liberté.",
  },
  {
    house: "Maison XI",
    text:
      "Uranus en Maison XI renforce le lien avec les groupes, les réseaux et les projets collectifs. La personne peut contribuer à des idées nouvelles et attirer des amitiés originales ou indépendantes.",
  },
  {
    house: "Maison XII",
    text:
      "Uranus en Maison XII peut produire des prises de conscience soudaines et une vie intérieure très active. La personne peut ressentir un besoin profond de se libérer de mécanismes inconscients ou de peurs invisibles.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente Uranus en astrologie ?",
    answer:
      "Uranus représente symboliquement la liberté, l’indépendance, l’innovation, les changements soudains, l’éveil et le besoin de remettre en question les modèles devenus trop rigides.",
  },
  {
    question:
      "Pourquoi Uranus est-il associé aux changements imprévus ?",
    answer:
      "Dans l’interprétation astrologique, Uranus symbolise les ruptures de rythme, les prises de conscience rapides et les transformations qui permettent de sortir d’une situation devenue limitante.",
  },
  {
    question:
      "Que signifie le signe d’Uranus ?",
    answer:
      "Le signe d’Uranus décrit la manière dont une génération cherche à innover, à se libérer et à transformer certains domaines de la société.",
  },
  {
    question:
      "Que signifie Uranus rétrograde dans un thème natal ?",
    answer:
      "Uranus rétrograde à la naissance peut symboliser une indépendance plus intérieure, une originalité discrète et une manière très personnelle de remettre en question les normes.",
  },
  {
    question:
      "Uranus rétrograde est-il négatif ?",
    answer:
      "Non. Cette période est plutôt interprétée comme une invitation à réfléchir à son besoin de liberté, à ses résistances au changement et aux transformations devenues nécessaires.",
  },
  {
    question:
      "Comment connaître mon signe d’Uranus ?",
    answer:
      "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance pour connaître la position exacte d’Uranus.",
  },
  {
    question:
      "Quelle différence entre Saturne et Uranus ?",
    answer:
      "Saturne représente la structure, la stabilité et les règles, tandis qu’Uranus symbolise la liberté, l’innovation et la remise en question de ce qui est devenu trop rigide.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Uranus en astrologie : liberté, changement et innovation",
  description:
    "Guide complet consacré au rôle d’Uranus dans le thème natal, à son expression dans les douze signes et les douze maisons astrologiques.",
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

export default function UranusAstrologiePage() {
  return (
    <div className="uranus-page">
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

      <main className="uranus-wrap">
        <section className="uranus-hero">
          <div className="uranus-badge">
            ♅ Planètes et thème natal
          </div>

          <h1>
            Uranus en astrologie
          </h1>

          <p className="uranus-hero-lead">
            Uranus représente votre besoin de liberté,
            d’indépendance et de changement, ainsi que la
            manière dont vous innovez et refusez les modèles
            devenus trop rigides.
          </p>

          <div className="uranus-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="uranus-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#uranus-dans-les-signes"
              className="uranus-secondary-button"
            >
              Voir les 12 signes
            </a>
          </div>
        </section>

        <article className="uranus-content">
          <section>
            <span className="uranus-kicker">
              Comprendre votre besoin de liberté
            </span>

            <h2>
              Que représente Uranus dans un thème astral ?
            </h2>

            <p>
              En astrologie, Uranus symbolise la liberté,
              l’innovation, l’indépendance et les changements
              rapides. Il décrit la manière dont une personne
              cherche à sortir des modèles trop limitants et à
              exprimer son originalité.
            </p>

            <p>
              Sa position dans votre carte du ciel peut
              révéler les domaines dans lesquels vous ressentez
              un besoin de renouvellement, d’autonomie ou de
              transformation. Elle peut aussi montrer la façon
              dont vous réagissez aux changements inattendus.
            </p>

            <p>
              Uranus ne symbolise pas uniquement la rupture. Il
              représente également l’éveil, l’inventivité et la
              capacité à imaginer des solutions différentes
              lorsque les anciennes structures ne répondent
              plus aux besoins présents.
            </p>
          </section>

          <section>
            <h2>
              Uranus, la liberté et l’innovation
            </h2>

            <div className="uranus-info-grid">
              <div className="uranus-info-card">
                <span className="uranus-card-icon">
                  ♅
                </span>

                <h3>
                  Votre indépendance
                </h3>

                <p>
                  Uranus décrit les domaines dans lesquels vous
                  avez besoin de penser, de choisir et d’agir
                  selon vos propres règles.
                </p>
              </div>

              <div className="uranus-info-card">
                <span className="uranus-card-icon">
                  ⚡
                </span>

                <h3>
                  Votre capacité de changement
                </h3>

                <p>
                  Il révèle votre manière de rompre avec les
                  habitudes devenues trop étroites et d’ouvrir
                  un nouveau chemin.
                </p>
              </div>

              <div className="uranus-info-card">
                <span className="uranus-card-icon">
                  ✦
                </span>

                <h3>
                  Votre originalité
                </h3>

                <p>
                  Uranus montre comment vos idées singulières
                  peuvent contribuer à renouveler votre vie ou
                  votre environnement.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les principales fonctions d’Uranus
            </h2>

            <div className="uranus-functions-grid">
              <div className="uranus-function-card">
                <span>
                  01
                </span>

                <h3>
                  Libérer
                </h3>

                <p>
                  Uranus invite à se détacher des modèles, des
                  habitudes et des contraintes qui empêchent
                  une expression plus authentique.
                </p>
              </div>

              <div className="uranus-function-card">
                <span>
                  02
                </span>

                <h3>
                  Innover
                </h3>

                <p>
                  Il symbolise la capacité à imaginer des
                  solutions nouvelles et à créer des méthodes
                  différentes.
                </p>
              </div>

              <div className="uranus-function-card">
                <span>
                  03
                </span>

                <h3>
                  Réveiller
                </h3>

                <p>
                  Uranus peut provoquer des prises de conscience
                  rapides qui modifient profondément la manière
                  de comprendre une situation.
                </p>
              </div>

              <div className="uranus-function-card">
                <span>
                  04
                </span>

                <h3>
                  Transformer
                </h3>

                <p>
                  Il pousse à moderniser ce qui est devenu trop
                  rigide et à construire une réalité plus
                  cohérente avec l’évolution personnelle.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Uranus, Saturne et Neptune
            </h2>

            <div className="uranus-pillars">
              <div className="uranus-pillar-card">
                <div className="uranus-pillar-symbol">
                  ♄
                </div>

                <h3>
                  Saturne
                </h3>

                <p>
                  Il représente les structures, les limites, la
                  discipline et la construction durable.
                </p>

                <Link
                  href="/astrologie/saturne"
                  className="uranus-text-link"
                >
                  Découvrir Saturne
                </Link>
              </div>

              <div className="uranus-pillar-card">
                <div className="uranus-pillar-symbol">
                  ♅
                </div>

                <h3>
                  Uranus
                </h3>

                <p>
                  Il symbolise la liberté, l’innovation,
                  l’éveil et les changements qui brisent les
                  anciennes structures.
                </p>
              </div>

              <div className="uranus-pillar-card">
                <div className="uranus-pillar-symbol">
                  ♆
                </div>

                <h3>
                  Neptune
                </h3>

                <p>
                  Il représente l’intuition, l’imagination, la
                  compassion et les perceptions subtiles.
                </p>
              </div>
            </div>
          </section>

          <section id="uranus-dans-les-signes">
            <span className="uranus-kicker">
              Les douze expressions d’Uranus
            </span>

            <h2>
              Uranus dans les 12 signes astrologiques
            </h2>

            <p>
              Uranus conserve toujours sa fonction de liberté,
              d’innovation et de transformation. Le signe dans
              lequel il se trouve décrit la manière dont une
              génération cherche à renouveler certains modèles.
            </p>

            <div className="uranus-sign-grid">
              {URANUS_SIGNS.map((item) => (
                <article
                  className="uranus-sign-card"
                  key={item.sign}
                >
                  <div className="uranus-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Uranus en {item.sign}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="uranus-dans-les-maisons">
            <span className="uranus-kicker">
              Les domaines de votre liberté
            </span>

            <h2>
              Uranus dans les 12 maisons astrologiques
            </h2>

            <p>
              Le signe d’Uranus décrit une transformation
              collective, tandis que sa maison indique le
              domaine de vie dans lequel votre besoin de
              liberté, de changement et d’originalité
              s’exprime le plus personnellement.
            </p>

            <div className="uranus-house-grid">
              {URANUS_HOUSES.map((item, index) => (
                <article
                  className="uranus-house-card"
                  key={item.house}
                >
                  <div className="uranus-house-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>
                    Uranus en {item.house}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <span className="uranus-kicker">
              Révision du besoin de liberté
            </span>

            <h2>
              Que signifie Uranus rétrograde ?
            </h2>

            <div className="uranus-retrograde-layout">
              <div>
                <p>
                  Depuis la Terre, Uranus semble parfois
                  ralentir puis reculer temporairement dans le
                  ciel. Il s’agit d’un mouvement apparent lié
                  aux positions relatives de la Terre et
                  d’Uranus.
                </p>

                <p>
                  Dans l’interprétation astrologique, Uranus
                  rétrograde est souvent associé à une
                  indépendance plus intérieure. La personne
                  peut remettre profondément en question les
                  normes sans toujours exprimer immédiatement
                  cette différence.
                </p>

                <p>
                  Cette période peut inviter à réfléchir aux
                  changements devenus nécessaires, aux habitudes
                  qui limitent la liberté et à la manière
                  d’introduire du renouveau sans agir uniquement
                  par impulsion.
                </p>
              </div>

              <aside className="uranus-retrograde-card">
                <span className="uranus-retrograde-symbol">
                  ♅℞
                </span>

                <h3>
                  Une invitation à se réinventer
                </h3>

                <ul>
                  <li>
                    Repenser son besoin de liberté
                  </li>

                  <li>
                    Identifier les habitudes limitantes
                  </li>

                  <li>
                    Clarifier les changements nécessaires
                  </li>

                  <li>
                    Explorer de nouvelles solutions
                  </li>

                  <li>
                    Affirmer son originalité avec conscience
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis d’Uranus
            </h2>

            <div className="uranus-strengths-grid">
              <div className="uranus-strength-card">
                <span className="uranus-kicker">
                  Forces possibles
                </span>

                <h3>
                  Une vision libre et novatrice
                </h3>

                <ul>
                  <li>
                    Originalité
                  </li>

                  <li>
                    Indépendance
                  </li>

                  <li>
                    Inventivité
                  </li>

                  <li>
                    Adaptation au changement
                  </li>

                  <li>
                    Capacité à remettre en question
                  </li>
                </ul>
              </div>

              <div className="uranus-strength-card">
                <span className="uranus-kicker">
                  Points d’attention
                </span>

                <h3>
                  Stabiliser le besoin de rupture
                </h3>

                <ul>
                  <li>
                    Impatience
                  </li>

                  <li>
                    Rébellion automatique
                  </li>

                  <li>
                    Changements trop brusques
                  </li>

                  <li>
                    Difficulté avec les contraintes
                  </li>

                  <li>
                    Instabilité
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les aspects astrologiques d’Uranus
            </h2>

            <p>
              Les aspects relient Uranus aux autres planètes du
              thème natal. Ils apportent des nuances à votre
              besoin de liberté, à votre originalité et à votre
              manière de vivre les changements.
            </p>

            <div className="uranus-aspect-grid">
              <article className="uranus-aspect-card">
                <span>
                  ☌
                </span>

                <h3>
                  La conjonction
                </h3>

                <p>
                  Elle fusionne Uranus avec une autre planète
                  et rend son expression plus originale,
                  indépendante ou imprévisible.
                </p>
              </article>

              <article className="uranus-aspect-card">
                <span>
                  △
                </span>

                <h3>
                  Le trigone
                </h3>

                <p>
                  Il peut symboliser une capacité naturelle à
                  innover et à accepter les changements avec
                  souplesse.
                </p>
              </article>

              <article className="uranus-aspect-card">
                <span>
                  ✶
                </span>

                <h3>
                  Le sextile
                </h3>

                <p>
                  Il représente un potentiel de renouvellement,
                  d’ouverture et d’expérimentation constructive.
                </p>
              </article>

              <article className="uranus-aspect-card">
                <span>
                  □
                </span>

                <h3>
                  Le carré
                </h3>

                <p>
                  Il peut créer une tension entre le besoin de
                  stabilité et le désir de changement ou
                  d’indépendance.
                </p>
              </article>

              <article className="uranus-aspect-card">
                <span>
                  ☍
                </span>

                <h3>
                  L’opposition
                </h3>

                <p>
                  Elle invite à équilibrer la liberté
                  personnelle avec les attentes, les besoins ou
                  les engagements extérieurs.
                </p>
              </article>
            </div>
          </section>

          <section>
            <div className="uranus-cta-card">
              <div>
                <span className="uranus-kicker">
                  Découvrez votre position
                </span>

                <h2>
                  Dans quel signe et quelle maison se trouve
                  votre Uranus ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir votre Uranus, votre Saturne, votre
                  Jupiter, votre Mars et les positions de vos
                  principales planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="uranus-primary-button"
              >
                Découvrir mon thème natal
              </Link>
            </div>
          </section>

          <section className="uranus-faq">
            <span className="uranus-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur Uranus en astrologie
            </h2>

            <div className="uranus-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="uranus-faq-item"
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

          <p className="uranus-disclaimer">
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
