import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/pluton";

export const metadata: Metadata = {
  title:
    "Pluton en astrologie : transformation, pouvoir et renaissance | Luna Astralis",

  description:
    "Découvrez la signification de Pluton en astrologie, son influence sur les transformations, le pouvoir intérieur, les crises, la régénération et son expression dans les 12 signes.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Pluton en astrologie : transformation, pouvoir et renaissance",
    description:
      "Comprenez le rôle de Pluton dans votre thème natal et découvrez comment cette planète symbolise les transformations profondes, le pouvoir intérieur et la régénération.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Pluton en astrologie | Luna Astralis",
    description:
      "Découvrez comment Pluton symbolise la transformation, la puissance intérieure, les crises et la renaissance.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const PLUTO_SIGNS = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "Pluton en Bélier transforme profondément le rapport à l’action, à l’indépendance et à l’affirmation personnelle. Cette position générationnelle peut remettre en question les modèles de pouvoir fondés sur la force, la conquête et l’autorité directe.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "Pluton en Taureau bouleverse le rapport aux ressources, à la sécurité et aux valeurs matérielles. Cette position invite à reconstruire des bases plus solides après des transformations économiques, sociales ou personnelles majeures.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "Pluton en Gémeaux transforme les idées, les communications et la circulation des connaissances. Cette position peut révéler la puissance des mots, de l’information et des nouvelles manières de comprendre le monde.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "Pluton en Cancer transforme les modèles familiaux, les racines et le sentiment d’appartenance. Cette position peut provoquer une profonde remise en question des structures protectrices et des héritages émotionnels.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "Pluton en Lion transforme le rapport à la créativité, à la reconnaissance et au pouvoir personnel. Cette position peut intensifier le besoin d’expression tout en révélant les limites de l’ego et de l’autorité individuelle.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "Pluton en Vierge transforme les méthodes de travail, les habitudes et le rapport à l’efficacité. Cette position cherche à purifier, corriger et reconstruire ce qui ne fonctionne plus dans les systèmes quotidiens.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "Pluton en Balance transforme les relations, les contrats et les modèles de partenariat. Cette position révèle les rapports de pouvoir dans les liens et pousse à rechercher une réciprocité plus authentique.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "Pluton en Scorpion intensifie les transformations, les crises et la recherche de vérité. Cette position générationnelle confronte les tabous, les attachements et les mécanismes de pouvoir afin de favoriser une profonde régénération.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "Pluton en Sagittaire transforme les croyances, les idéologies et les visions du monde. Cette position remet en question les certitudes collectives et pousse à rechercher une compréhension plus profonde du sens et de la vérité.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "Pluton en Capricorne transforme les institutions, les structures de pouvoir et les modèles de réussite. Cette position révèle les failles des systèmes trop rigides et pousse à reconstruire des bases plus responsables.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "Pluton en Verseau transforme les réseaux, les groupes, les technologies et les idéaux collectifs. Cette position peut bouleverser les rapports entre l’individu, la communauté et les nouvelles formes de pouvoir social.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "Pluton en Poissons transforme les croyances invisibles, les idéaux, la spiritualité symbolique et les frontières émotionnelles. Cette position peut révéler les illusions collectives afin de permettre une profonde renaissance intérieure.",
  },
];

const PLUTO_HOUSES = [
  {
    house: "Maison I",
    text:
      "Pluton en Maison I donne une présence intense, magnétique et profondément transformatrice. La personne peut vivre plusieurs renaissances identitaires et développer une grande puissance intérieure.",
  },
  {
    house: "Maison II",
    text:
      "Pluton en Maison II transforme le rapport aux ressources, aux valeurs et à la sécurité. La personne peut traverser des changements matériels importants qui l’amènent à redéfinir ce qui possède réellement de la valeur.",
  },
  {
    house: "Maison III",
    text:
      "Pluton en Maison III donne une pensée profonde, investigatrice et persuasive. La personne peut chercher à comprendre les non-dits, les mécanismes cachés et la véritable portée des mots.",
  },
  {
    house: "Maison IV",
    text:
      "Pluton en Maison IV intensifie les expériences liées au foyer, à la famille et aux racines. La personne peut être appelée à transformer profondément certains héritages émotionnels ou familiaux.",
  },
  {
    house: "Maison V",
    text:
      "Pluton en Maison V donne une créativité intense, des passions puissantes et un besoin profond d’expression personnelle. Les relations amoureuses et les projets créatifs peuvent devenir des expériences transformatrices.",
  },
  {
    house: "Maison VI",
    text:
      "Pluton en Maison VI transforme les habitudes, le travail et l’organisation quotidienne. La personne peut ressentir un besoin puissant d’améliorer les méthodes, d’éliminer les dysfonctionnements et de reprendre le contrôle de son quotidien.",
  },
  {
    house: "Maison VII",
    text:
      "Pluton en Maison VII intensifie les relations et révèle les rapports de pouvoir dans les partenariats. Les liens importants peuvent provoquer de profondes transformations personnelles.",
  },
  {
    house: "Maison VIII",
    text:
      "Pluton en Maison VIII renforce la capacité à traverser les crises, les pertes et les transformations. La personne peut posséder une grande profondeur psychologique et une forte aptitude à se régénérer.",
  },
  {
    house: "Maison IX",
    text:
      "Pluton en Maison IX transforme les croyances, les convictions et la vision du monde. Les études, les voyages ou certaines expériences peuvent remettre en question des certitudes profondément ancrées.",
  },
  {
    house: "Maison X",
    text:
      "Pluton en Maison X intensifie l’ambition, la vocation et le rapport au pouvoir professionnel. La personne peut connaître plusieurs transformations de carrière et chercher à exercer une influence profonde.",
  },
  {
    house: "Maison XI",
    text:
      "Pluton en Maison XI transforme les amitiés, les réseaux et les projets collectifs. La personne peut jouer un rôle puissant dans un groupe et être appelée à redéfinir ses alliances.",
  },
  {
    house: "Maison XII",
    text:
      "Pluton en Maison XII révèle des forces inconscientes, des peurs profondes et des mécanismes cachés. L’introspection peut devenir un puissant outil de guérison symbolique et de transformation intérieure.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente Pluton en astrologie ?",
    answer:
      "Pluton représente symboliquement les transformations profondes, les crises, le pouvoir, les pertes, la régénération, les vérités cachées et la capacité à renaître après une période de bouleversement.",
  },
  {
    question:
      "Pourquoi Pluton est-il associé à la transformation ?",
    answer:
      "Pluton symbolise les processus qui obligent à abandonner une ancienne structure devenue inadéquate afin de reconstruire quelque chose de plus authentique et plus solide.",
  },
  {
    question:
      "Que signifie le signe de Pluton ?",
    answer:
      "Le signe de Pluton décrit la manière dont une génération vit les transformations collectives, les crises de pouvoir et les grandes remises en question de son époque.",
  },
  {
    question:
      "Que signifie Pluton rétrograde dans un thème natal ?",
    answer:
      "Pluton rétrograde à la naissance peut symboliser une transformation plus intérieure, un rapport personnel au pouvoir et une tendance à explorer profondément les mécanismes inconscients.",
  },
  {
    question:
      "Pluton rétrograde est-il négatif ?",
    answer:
      "Non. Cette position est plutôt interprétée comme une invitation à examiner son rapport au contrôle, aux peurs, aux attachements et aux transformations intérieures.",
  },
  {
    question:
      "Comment connaître mon signe de Pluton ?",
    answer:
      "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance pour connaître la position exacte de Pluton.",
  },
  {
    question:
      "Quelle différence entre Neptune et Pluton ?",
    answer:
      "Neptune symbolise l’intuition, l’imagination et la dissolution des frontières, tandis que Pluton représente la transformation profonde, le pouvoir, les crises et la régénération.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Pluton en astrologie : transformation, pouvoir et renaissance",
  description:
    "Guide complet consacré au rôle de Pluton dans le thème natal, à son expression dans les douze signes et les douze maisons astrologiques.",
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

export default function PlutonAstrologiePage() {
  return (
    <div className="pluto-page">
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

      <main className="pluto-wrap">
        <section className="pluto-hero">
          <div className="pluto-badge">
            ♇ Planètes et thème natal
          </div>

          <h1>
            Pluton en astrologie
          </h1>

          <p className="pluto-hero-lead">
            Pluton représente vos transformations profondes,
            votre pouvoir intérieur, vos crises de croissance
            et votre capacité à renaître après les grands
            bouleversements.
          </p>

          <div className="pluto-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="pluto-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#pluton-dans-les-signes"
              className="pluto-secondary-button"
            >
              Voir les 12 signes
            </a>
          </div>
        </section>

        <article className="pluto-content">
          <section>
            <span className="pluto-kicker">
              Comprendre votre pouvoir de transformation
            </span>

            <h2>
              Que représente Pluton dans un thème astral ?
            </h2>

            <p>
              En astrologie, Pluton symbolise les
              transformations profondes, les crises, les
              rapports de pouvoir et la régénération. Il décrit
              les processus qui obligent une personne à
              abandonner ce qui n’est plus viable afin de
              reconstruire autrement.
            </p>

            <p>
              Sa position dans votre carte du ciel peut
              révéler les domaines dans lesquels vous vivez des
              expériences intenses, des remises en question
              majeures et un besoin profond de vérité.
            </p>

            <p>
              Pluton n’annonce pas nécessairement des événements
              négatifs. Il représente surtout la capacité à
              traverser une crise, à comprendre les mécanismes
              cachés et à retrouver une force intérieure plus
              consciente.
            </p>
          </section>

          <section>
            <h2>
              Pluton, le pouvoir et la transformation
            </h2>

            <div className="pluto-info-grid">
              <div className="pluto-info-card">
                <span className="pluto-card-icon">
                  ♇
                </span>

                <h3>
                  Votre transformation
                </h3>

                <p>
                  Pluton décrit les domaines dans lesquels vous
                  êtes invité à abandonner une ancienne forme
                  pour évoluer profondément.
                </p>
              </div>

              <div className="pluto-info-card">
                <span className="pluto-card-icon">
                  ✦
                </span>

                <h3>
                  Votre pouvoir intérieur
                </h3>

                <p>
                  Il révèle votre capacité à affronter les
                  situations complexes, à résister et à
                  reconstruire après une période difficile.
                </p>
              </div>

              <div className="pluto-info-card">
                <span className="pluto-card-icon">
                  ◈
                </span>

                <h3>
                  Votre profondeur
                </h3>

                <p>
                  Pluton montre votre besoin de comprendre les
                  vérités cachées, les motivations profondes et
                  les mécanismes invisibles.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les principales fonctions de Pluton
            </h2>

            <div className="pluto-functions-grid">
              <div className="pluto-function-card">
                <span>
                  01
                </span>

                <h3>
                  Révéler
                </h3>

                <p>
                  Pluton met en lumière les vérités cachées, les
                  peurs, les attachements et les mécanismes de
                  pouvoir.
                </p>
              </div>

              <div className="pluto-function-card">
                <span>
                  02
                </span>

                <h3>
                  Détruire
                </h3>

                <p>
                  Il symbolise la fin des structures devenues
                  trop rigides, artificielles ou incapables de
                  soutenir l’évolution.
                </p>
              </div>

              <div className="pluto-function-card">
                <span>
                  03
                </span>

                <h3>
                  Transformer
                </h3>

                <p>
                  Pluton pousse à modifier profondément les
                  comportements, les rapports de force et les
                  manières de vivre.
                </p>
              </div>

              <div className="pluto-function-card">
                <span>
                  04
                </span>

                <h3>
                  Régénérer
                </h3>

                <p>
                  Il représente la capacité à reconstruire, à
                  retrouver sa puissance et à renaître après une
                  période de crise.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Pluton, Neptune et Saturne
            </h2>

            <div className="pluto-pillars">
              <div className="pluto-pillar-card">
                <div className="pluto-pillar-symbol">
                  ♄
                </div>

                <h3>
                  Saturne
                </h3>

                <p>
                  Il représente les structures, les limites, la
                  responsabilité et la construction durable.
                </p>

                <Link
                  href="/astrologie/saturne"
                  className="pluto-text-link"
                >
                  Découvrir Saturne
                </Link>
              </div>

              <div className="pluto-pillar-card">
                <div className="pluto-pillar-symbol">
                  ♆
                </div>

                <h3>
                  Neptune
                </h3>

                <p>
                  Il symbolise l’intuition, l’imagination, les
                  idéaux et les perceptions subtiles.
                </p>

                <Link
                  href="/astrologie/neptune"
                  className="pluto-text-link"
                >
                  Découvrir Neptune
                </Link>
              </div>

              <div className="pluto-pillar-card">
                <div className="pluto-pillar-symbol">
                  ♇
                </div>

                <h3>
                  Pluton
                </h3>

                <p>
                  Il représente la transformation profonde, le
                  pouvoir, les crises et la régénération.
                </p>
              </div>
            </div>
          </section>

          <section id="pluton-dans-les-signes">
            <span className="pluto-kicker">
              Les douze expressions de Pluton
            </span>

            <h2>
              Pluton dans les 12 signes astrologiques
            </h2>

            <p>
              Pluton conserve toujours sa fonction de
              transformation, de pouvoir et de régénération. Le
              signe dans lequel il se trouve décrit la manière
              dont une génération traverse les grandes crises
              et remises en question collectives.
            </p>

            <div className="pluto-sign-grid">
              {PLUTO_SIGNS.map((item) => (
                <article
                  className="pluto-sign-card"
                  key={item.sign}
                >
                  <div className="pluto-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Pluton en {item.sign}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="pluton-dans-les-maisons">
            <span className="pluto-kicker">
              Les domaines de votre transformation
            </span>

            <h2>
              Pluton dans les 12 maisons astrologiques
            </h2>

            <p>
              Le signe de Pluton décrit une transformation
              collective, tandis que sa maison indique le
              domaine de vie dans lequel votre pouvoir
              intérieur, vos crises et votre capacité de
              régénération s’expriment le plus personnellement.
            </p>

            <div className="pluto-house-grid">
              {PLUTO_HOUSES.map((item, index) => (
                <article
                  className="pluto-house-card"
                  key={item.house}
                >
                  <div className="pluto-house-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>
                    Pluton en {item.house}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <span className="pluto-kicker">
              Transformation intérieure
            </span>

            <h2>
              Que signifie Pluton rétrograde ?
            </h2>

            <div className="pluto-retrograde-layout">
              <div>
                <p>
                  Depuis la Terre, Pluton semble parfois
                  ralentir puis reculer temporairement dans le
                  ciel. Il s’agit d’un mouvement apparent lié
                  aux positions relatives de la Terre et de
                  Pluton.
                </p>

                <p>
                  Dans l’interprétation astrologique, Pluton
                  rétrograde est souvent associé à un processus
                  de transformation plus intérieur. La personne
                  peut explorer profondément son rapport au
                  pouvoir, au contrôle et aux peurs cachées.
                </p>

                <p>
                  Cette période peut inviter à reconnaître les
                  attachements devenus trop lourds, à observer
                  les mécanismes inconscients et à reprendre son
                  pouvoir personnel sans chercher à contrôler
                  les autres.
                </p>
              </div>

              <aside className="pluto-retrograde-card">
                <span className="pluto-retrograde-symbol">
                  ♇℞
                </span>

                <h3>
                  Une invitation à transformer
                </h3>

                <ul>
                  <li>
                    Observer son rapport au contrôle
                  </li>

                  <li>
                    Reconnaître les peurs profondes
                  </li>

                  <li>
                    Abandonner les anciens attachements
                  </li>

                  <li>
                    Reprendre son pouvoir personnel
                  </li>

                  <li>
                    Transformer les schémas inconscients
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis de Pluton
            </h2>

            <div className="pluto-strengths-grid">
              <div className="pluto-strength-card">
                <span className="pluto-kicker">
                  Forces possibles
                </span>

                <h3>
                  Une puissance de régénération
                </h3>

                <ul>
                  <li>
                    Résilience
                  </li>

                  <li>
                    Profondeur psychologique
                  </li>

                  <li>
                    Courage face aux crises
                  </li>

                  <li>
                    Capacité de transformation
                  </li>

                  <li>
                    Lucidité
                  </li>
                </ul>
              </div>

              <div className="pluto-strength-card">
                <span className="pluto-kicker">
                  Points d’attention
                </span>

                <h3>
                  Utiliser le pouvoir avec conscience
                </h3>

                <ul>
                  <li>
                    Besoin de contrôle
                  </li>

                  <li>
                    Méfiance excessive
                  </li>

                  <li>
                    Obsession
                  </li>

                  <li>
                    Difficulté à lâcher prise
                  </li>

                  <li>
                    Rapports de force
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les aspects astrologiques de Pluton
            </h2>

            <p>
              Les aspects relient Pluton aux autres planètes du
              thème natal. Ils apportent des nuances à votre
              rapport au pouvoir, aux transformations, aux
              crises et à la régénération.
            </p>

            <div className="pluto-aspect-grid">
              <article className="pluto-aspect-card">
                <span>
                  ☌
                </span>

                <h3>
                  La conjonction
                </h3>

                <p>
                  Elle fusionne Pluton avec une autre planète et
                  intensifie profondément son expression.
                </p>
              </article>

              <article className="pluto-aspect-card">
                <span>
                  △
                </span>

                <h3>
                  Le trigone
                </h3>

                <p>
                  Il peut symboliser une capacité naturelle à
                  transformer, approfondir et régénérer les
                  qualités de l’autre planète.
                </p>
              </article>

              <article className="pluto-aspect-card">
                <span>
                  ✶
                </span>

                <h3>
                  Le sextile
                </h3>

                <p>
                  Il représente un potentiel de transformation
                  constructive, de lucidité et de croissance
                  intérieure.
                </p>
              </article>

              <article className="pluto-aspect-card">
                <span>
                  □
                </span>

                <h3>
                  Le carré
                </h3>

                <p>
                  Il peut créer une tension intense autour du
                  pouvoir, du contrôle ou de la nécessité de
                  changer profondément.
                </p>
              </article>

              <article className="pluto-aspect-card">
                <span>
                  ☍
                </span>

                <h3>
                  L’opposition
                </h3>

                <p>
                  Elle invite à reconnaître les rapports de
                  force extérieurs et à trouver un équilibre
                  entre contrôle et lâcher-prise.
                </p>
              </article>
            </div>
          </section>

          <section>
            <div className="pluto-cta-card">
              <div>
                <span className="pluto-kicker">
                  Découvrez votre position
                </span>

                <h2>
                  Dans quel signe et quelle maison se trouve
                  votre Pluton ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir votre Pluton, votre Neptune, votre
                  Uranus, votre Saturne et les positions de vos
                  principales planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="pluto-primary-button"
              >
                Découvrir mon thème natal
              </Link>
            </div>
          </section>

          <section className="pluto-faq">
            <span className="pluto-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur Pluton en astrologie
            </h2>

            <div className="pluto-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="pluto-faq-item"
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

          <p className="pluto-disclaimer">
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
