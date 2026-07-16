import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/venus";

export const metadata: Metadata = {
  title:
    "Vénus en astrologie : amour, relations, désir et valeurs | Luna Astralis",

  description:
    "Découvrez la signification de Vénus en astrologie, son influence sur l’amour, les relations, l’attirance, les valeurs et son expression dans les 12 signes du zodiaque.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Vénus en astrologie : amour, attirance, plaisir et relations",
    description:
      "Comprenez le rôle de Vénus dans votre thème natal et découvrez comment cette planète influence votre manière d’aimer, vos valeurs et vos relations.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vénus en astrologie | Luna Astralis",
    description:
      "Découvrez comment Vénus influence votre vie amoureuse, vos relations, vos goûts et vos valeurs.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const VENUS_SIGNS = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "Vénus en Bélier aime avec spontanéité, enthousiasme et intensité. Cette position recherche des relations vivantes, stimulantes et capables d’entretenir le désir de découverte.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "Vénus en Taureau recherche la stabilité, la sensualité et la fidélité. L’amour s’exprime souvent par la présence, les gestes concrets, le toucher et la création d’un environnement sécurisant.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "Vénus en Gémeaux est attirée par les échanges, l’intelligence et la curiosité. La complicité mentale, l’humour et la liberté de communiquer occupent une place essentielle dans les relations.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "Vénus en Cancer aime avec sensibilité, douceur et attachement. Elle recherche une relation rassurante, intime et profondément liée au sentiment de sécurité émotionnelle.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "Vénus en Lion exprime l’amour avec chaleur, générosité et créativité. Elle souhaite se sentir choisie, admirée et pleinement engagée dans une relation vivante et sincère.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "Vénus en Vierge montre son affection par l’attention, la disponibilité et les gestes utiles. Elle recherche une relation honnête, cohérente et construite sur la confiance quotidienne.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "Vénus en Balance accorde une grande importance à l’harmonie, au dialogue et à l’équilibre. Elle recherche une relation élégante, respectueuse et fondée sur la réciprocité.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "Vénus en Scorpion aime avec intensité, profondeur et loyauté. Elle recherche une connexion authentique, transformatrice et capable de dépasser les apparences superficielles.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "Vénus en Sagittaire associe l’amour à la liberté, à l’aventure et à l’élargissement des horizons. Elle apprécie les relations qui permettent de grandir, d’explorer et de rester pleinement soi-même.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "Vénus en Capricorne recherche la stabilité, la loyauté et la maturité. L’amour se construit progressivement par les engagements, les responsabilités partagées et la confiance.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "Vénus en Verseau valorise l’indépendance, l’originalité et la complicité intellectuelle. Elle recherche une relation libre, sincère et capable de respecter l’individualité de chacun.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "Vénus en Poissons aime avec compassion, romantisme et intuition. Elle recherche une connexion émotionnelle et spirituelle profonde, tout en devant préserver des limites relationnelles claires.",
  },
];

const VENUS_HOUSES = [
  {
    house: "Maison I",
    text:
      "Vénus en Maison I renforce le charme, la douceur et le besoin de créer des relations harmonieuses. La personne peut exprimer naturellement une présence agréable, attirante ou diplomatique.",
  },
  {
    house: "Maison II",
    text:
      "Vénus en Maison II relie les relations aux valeurs, au confort et à la sécurité matérielle. La personne accorde souvent une importance particulière à la qualité, à la stabilité et au plaisir des sens.",
  },
  {
    house: "Maison III",
    text:
      "Vénus en Maison III favorise une communication aimable, séduisante et conciliante. Les échanges, l’écriture, les apprentissages et les liens de proximité peuvent procurer beaucoup de plaisir.",
  },
  {
    house: "Maison IV",
    text:
      "Vénus en Maison IV recherche l’harmonie dans le foyer et la vie privée. La personne peut avoir besoin de créer un environnement chaleureux, esthétique et émotionnellement sécurisant.",
  },
  {
    house: "Maison V",
    text:
      "Vénus en Maison V renforce le romantisme, la créativité, la séduction et le plaisir d’aimer. Cette position peut favoriser l’expression artistique et le besoin de vivre des relations inspirantes.",
  },
  {
    house: "Maison VI",
    text:
      "Vénus en Maison VI exprime l’affection par l’aide, la présence et les gestes quotidiens. La personne recherche souvent un environnement de travail harmonieux et des habitudes agréables.",
  },
  {
    house: "Maison VII",
    text:
      "Vénus en Maison VII souligne l’importance du couple, de la coopération et de l’équilibre relationnel. La personne s’épanouit souvent à travers les partenariats et les engagements réciproques.",
  },
  {
    house: "Maison VIII",
    text:
      "Vénus en Maison VIII recherche une intimité profonde, émotionnelle et transformatrice. Les relations peuvent être vécues avec intensité, attachement et désir de fusion.",
  },
  {
    house: "Maison IX",
    text:
      "Vénus en Maison IX associe l’amour à la découverte, aux voyages et à l’ouverture culturelle. La personne peut être attirée par des relations qui élargissent sa vision du monde.",
  },
  {
    house: "Maison X",
    text:
      "Vénus en Maison X peut favoriser une image publique agréable, diplomatique ou créative. Les relations, l’esthétique ou la recherche d’harmonie peuvent jouer un rôle important dans la vocation.",
  },
  {
    house: "Maison XI",
    text:
      "Vénus en Maison XI valorise l’amitié, les réseaux et les projets collectifs. Les relations amoureuses peuvent naître d’une complicité intellectuelle ou d’un idéal partagé.",
  },
  {
    house: "Maison XII",
    text:
      "Vénus en Maison XII donne une vie affective intérieure, sensible et parfois secrète. La personne peut idéaliser l’amour et doit apprendre à reconnaître clairement ses besoins et ses limites.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente Vénus en astrologie ?",
    answer:
      "Vénus représente symboliquement l’amour, l’attirance, les relations, le plaisir, les goûts personnels, les valeurs et la manière dont une personne cherche l’harmonie.",
  },
  {
    question:
      "Que signifie le signe de Vénus ?",
    answer:
      "Le signe de Vénus décrit votre manière d’aimer, ce qui vous attire, ce que vous appréciez dans une relation et la façon dont vous exprimez votre affection.",
  },
  {
    question:
      "Vénus représente-t-elle seulement la vie amoureuse ?",
    answer:
      "Non. Vénus concerne aussi les valeurs, le rapport au plaisir, l’esthétique, la créativité, la diplomatie et la manière dont vous recherchez l’équilibre.",
  },
  {
    question:
      "Que signifie Vénus rétrograde dans un thème natal ?",
    answer:
      "Dans l’interprétation astrologique, Vénus rétrograde à la naissance peut symboliser une manière plus intérieure ou personnelle de vivre les sentiments, les valeurs et l’estime de soi.",
  },
  {
    question:
      "Vénus rétrograde annonce-t-elle une rupture ?",
    answer:
      "Non. L’astrologie ne permet pas d’affirmer qu’une rupture se produira. Cette période est plutôt interprétée comme une invitation à réfléchir aux relations, aux valeurs et aux attentes affectives.",
  },
  {
    question:
      "Comment connaître mon signe de Vénus ?",
    answer:
      "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance pour connaître la position exacte de Vénus.",
  },
  {
    question:
      "Quelle différence entre Vénus et la Lune ?",
    answer:
      "La Lune représente les besoins émotionnels et la sécurité intérieure, tandis que Vénus décrit la manière d’aimer, les goûts, l’attirance et les valeurs relationnelles.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Vénus en astrologie : amour, relations, attirance et valeurs",
  description:
    "Guide complet consacré au rôle de Vénus dans le thème natal, à son expression dans les douze signes et les douze maisons astrologiques.",
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

export default function VenusAstrologiePage() {
  return (
    <div className="venus-page">
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

      <main className="venus-wrap">
        <section className="venus-hero">
          <div className="venus-badge">
            ♀ Planètes et thème natal
          </div>

          <h1>
            Vénus en astrologie
          </h1>

          <p className="venus-hero-lead">
            Vénus représente votre manière d’aimer, ce qui
            vous attire, vos valeurs, votre rapport au plaisir
            et votre recherche d’harmonie dans les relations.
          </p>

          <div className="venus-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="venus-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#venus-dans-les-signes"
              className="venus-secondary-button"
            >
              Voir les 12 signes
            </a>
          </div>
        </section>

        <article className="venus-content">
          <section>
            <span className="venus-kicker">
              Comprendre votre langage amoureux
            </span>

            <h2>
              Que représente Vénus dans un thème astral ?
            </h2>

            <p>
              En astrologie, Vénus symbolise l’amour,
              l’attirance, les relations, le plaisir et les
              valeurs personnelles. Elle décrit ce qui vous
              touche, ce que vous trouvez beau et la manière
              dont vous recherchez l’harmonie.
            </p>

            <p>
              Sa position dans votre carte du ciel peut révéler
              la façon dont vous exprimez votre affection, les
              qualités que vous appréciez chez les autres et
              les conditions qui vous permettent de vous sentir
              aimé et valorisé.
            </p>

            <p>
              Vénus ne décrit pas à elle seule toute votre vie
              amoureuse. La Lune, Mars, la Maison V, la Maison
              VII et les aspects astrologiques apportent
              également des informations importantes sur vos
              besoins affectifs et relationnels.
            </p>
          </section>

          <section>
            <h2>
              Vénus, l’amour et les valeurs
            </h2>

            <div className="venus-info-grid">
              <div className="venus-info-card">
                <span className="venus-card-icon">
                  ♀
                </span>

                <h3>
                  Votre manière d’aimer
                </h3>

                <p>
                  Vénus décrit la façon dont vous exprimez
                  votre affection et les gestes qui vous
                  permettent de créer un lien harmonieux.
                </p>
              </div>

              <div className="venus-info-card">
                <span className="venus-card-icon">
                  ♡
                </span>

                <h3>
                  Ce qui vous attire
                </h3>

                <p>
                  Elle révèle les qualités, les comportements
                  et les ambiances qui éveillent votre intérêt
                  et votre désir de rapprochement.
                </p>
              </div>

              <div className="venus-info-card">
                <span className="venus-card-icon">
                  ✦
                </span>

                <h3>
                  Vos valeurs
                </h3>

                <p>
                  Vénus montre ce que vous appréciez, ce que
                  vous cherchez à préserver et ce qui vous
                  procure un véritable sentiment de satisfaction.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les principales fonctions de Vénus
            </h2>

            <div className="venus-functions-grid">
              <div className="venus-function-card">
                <span>
                  01
                </span>

                <h3>
                  Attirer
                </h3>

                <p>
                  Vénus symbolise ce qui vous attire et la
                  manière dont vous suscitez naturellement
                  l’intérêt, la sympathie ou le rapprochement.
                </p>
              </div>

              <div className="venus-function-card">
                <span>
                  02
                </span>

                <h3>
                  Aimer
                </h3>

                <p>
                  Elle décrit votre manière d’offrir de
                  l’affection, de recevoir l’amour et de
                  construire une relation agréable.
                </p>
              </div>

              <div className="venus-function-card">
                <span>
                  03
                </span>

                <h3>
                  Apprécier
                </h3>

                <p>
                  Vénus représente vos goûts, vos préférences,
                  votre sens esthétique et votre rapport aux
                  plaisirs de la vie.
                </p>
              </div>

              <div className="venus-function-card">
                <span>
                  04
                </span>

                <h3>
                  Harmoniser
                </h3>

                <p>
                  Elle recherche l’équilibre, la coopération,
                  la réciprocité et la création de liens plus
                  doux et plus respectueux.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Vénus, la Lune et Mars
            </h2>

            <div className="venus-pillars">
              <div className="venus-pillar-card">
                <div className="venus-pillar-symbol">
                  🌙
                </div>

                <h3>
                  La Lune
                </h3>

                <p>
                  Elle représente vos besoins émotionnels, vos
                  réactions instinctives et votre sentiment de
                  sécurité intérieure.
                </p>

                <Link
                  href="/astrologie/lune"
                  className="venus-text-link"
                >
                  Découvrir la Lune
                </Link>
              </div>

              <div className="venus-pillar-card">
                <div className="venus-pillar-symbol">
                  ♀
                </div>

                <h3>
                  Vénus
                </h3>

                <p>
                  Elle décrit votre manière d’aimer, vos goûts,
                  vos valeurs et ce qui vous attire dans une
                  relation.
                </p>
              </div>

              <div className="venus-pillar-card">
                <div className="venus-pillar-symbol">
                  ♂
                </div>

                <h3>
                  Mars
                </h3>

                <p>
                  Il représente le désir, l’action, l’élan,
                  l’affirmation et la manière dont vous
                  poursuivez ce que vous voulez.
                </p>
              </div>
            </div>
          </section>

          <section id="venus-dans-les-signes">
            <span className="venus-kicker">
              Les douze expressions de Vénus
            </span>

            <h2>
              Vénus dans les 12 signes astrologiques
            </h2>

            <p>
              Vénus conserve toujours sa fonction d’amour, de
              plaisir, d’attirance et d’harmonie. Le signe dans
              lequel elle se trouve décrit la manière
              particulière dont ces qualités s’expriment.
            </p>

            <div className="venus-sign-grid">
              {VENUS_SIGNS.map((item) => (
                <article
                  className="venus-sign-card"
                  key={item.sign}
                >
                  <div className="venus-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Vénus en {item.sign}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="venus-dans-les-maisons">
            <span className="venus-kicker">
              Les domaines du cœur
            </span>

            <h2>
              Vénus dans les 12 maisons astrologiques
            </h2>

            <p>
              Le signe de Vénus décrit votre style amoureux,
              tandis que sa maison indique le domaine de vie
              dans lequel l’amour, le plaisir, les valeurs et
              la recherche d’harmonie prennent une importance
              particulière.
            </p>

            <div className="venus-house-grid">
              {VENUS_HOUSES.map((item, index) => (
                <article
                  className="venus-house-card"
                  key={item.house}
                >
                  <div className="venus-house-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>
                    Vénus en {item.house}
                  </h3>

                  <p>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <span className="venus-kicker">
              Réflexion affective
            </span>

            <h2>
              Que signifie Vénus rétrograde ?
            </h2>

            <div className="venus-retrograde-layout">
              <div>
                <p>
                  Depuis la Terre, Vénus semble parfois
                  ralentir puis reculer temporairement dans le
                  ciel. Il s’agit d’un mouvement apparent
                  produit par la position relative de la Terre
                  et de Vénus.
                </p>

                <p>
                  Dans l’interprétation astrologique, une
                  période de Vénus rétrograde est souvent
                  associée à une réflexion sur les relations,
                  les valeurs, l’estime de soi, les désirs et
                  les attentes affectives.
                </p>

                <p>
                  Elle ne signifie pas automatiquement qu’une
                  relation va se terminer ou qu’un ancien amour
                  reviendra. Elle peut plutôt inviter à
                  observer ce qui vous rend réellement heureux
                  et à clarifier vos besoins.
                </p>
              </div>

              <aside className="venus-retrograde-card">
                <span className="venus-retrograde-symbol">
                  ♀℞
                </span>

                <h3>
                  Une invitation à réévaluer
                </h3>

                <ul>
                  <li>
                    Repenser ses attentes amoureuses
                  </li>

                  <li>
                    Clarifier ses valeurs
                  </li>

                  <li>
                    Observer son rapport au plaisir
                  </li>

                  <li>
                    Réviser ses limites relationnelles
                  </li>

                  <li>
                    Renforcer l’estime de soi
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis de Vénus
            </h2>

            <div className="venus-strengths-grid">
              <div className="venus-strength-card">
                <span className="venus-kicker">
                  Forces possibles
                </span>

                <h3>
                  Créer des liens harmonieux
                </h3>

                <ul>
                  <li>
                    Sensibilité relationnelle
                  </li>

                  <li>
                    Diplomatie
                  </li>

                  <li>
                    Capacité à apprécier la beauté
                  </li>

                  <li>
                    Tendresse et affection
                  </li>

                  <li>
                    Recherche de réciprocité
                  </li>
                </ul>
              </div>

              <div className="venus-strength-card">
                <span className="venus-kicker">
                  Points d’attention
                </span>

                <h3>
                  Préserver son équilibre personnel
                </h3>

                <ul>
                  <li>
                    Besoin excessif d’approbation
                  </li>

                  <li>
                    Difficulté à poser des limites
                  </li>

                  <li>
                    Idéalisation des relations
                  </li>

                  <li>
                    Peur du conflit
                  </li>

                  <li>
                    Dépendance au regard des autres
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les aspects astrologiques de Vénus
            </h2>

            <p>
              Les aspects relient Vénus aux autres planètes de
              votre thème natal. Ils apportent des nuances à
              votre manière d’aimer, à vos valeurs et à votre
              façon de vivre l’attirance et les relations.
            </p>

            <div className="venus-aspect-grid">
              <article className="venus-aspect-card">
                <span>
                  ☌
                </span>

                <h3>
                  La conjonction
                </h3>

                <p>
                  Elle fusionne Vénus avec l’énergie d’une autre
                  planète et renforce leur expression commune
                  dans la vie affective.
                </p>
              </article>

              <article className="venus-aspect-card">
                <span>
                  △
                </span>

                <h3>
                  Le trigone
                </h3>

                <p>
                  Il peut symboliser une circulation naturelle
                  entre les sentiments, les valeurs et les
                  qualités de l’autre planète.
                </p>
              </article>

              <article className="venus-aspect-card">
                <span>
                  ✶
                </span>

                <h3>
                  Le sextile
                </h3>

                <p>
                  Il représente un potentiel de coopération,
                  d’ouverture et d’épanouissement dans les
                  relations.
                </p>
              </article>

              <article className="venus-aspect-card">
                <span>
                  □
                </span>

                <h3>
                  Le carré
                </h3>

                <p>
                  Il peut révéler une tension entre les désirs,
                  les valeurs et les attentes, invitant à
                  développer plus de conscience.
                </p>
              </article>

              <article className="venus-aspect-card">
                <span>
                  ☍
                </span>

                <h3>
                  L’opposition
                </h3>

                <p>
                  Elle invite à trouver un équilibre entre ses
                  propres besoins affectifs et ceux des autres.
                </p>
              </article>
            </div>
          </section>

          <section>
            <div className="venus-cta-card">
              <div>
                <span className="venus-kicker">
                  Découvrez votre position
                </span>

                <h2>
                  Dans quel signe et quelle maison se trouve
                  votre Vénus ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir votre Vénus, votre Soleil, votre
                  Lune, votre Ascendant et les positions de vos
                  principales planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="venus-primary-button"
              >
                Découvrir mon thème natal
              </Link>
            </div>
          </section>

          <section className="venus-faq">
            <span className="venus-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur Vénus en astrologie
            </h2>

            <div className="venus-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="venus-faq-item"
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

          <p className="venus-disclaimer">
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
