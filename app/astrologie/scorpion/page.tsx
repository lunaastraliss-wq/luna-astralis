import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/scorpion";

export const metadata: Metadata = {
  title:
    "Scorpion : personnalité, amour, travail et compatibilités | Luna Astralis",

  description:
    "Découvrez le signe du Scorpion en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Pluton, Mars, élément Eau, Lune et Ascendant Scorpion.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Le Scorpion en astrologie : personnalité, amour et compatibilités",
    description:
      "Guide complet du signe du Scorpion : caractère, forces, défis, relations, carrière, Pluton, Mars et principales compatibilités astrologiques.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le signe du Scorpion | Luna Astralis",
    description:
      "Découvrez la personnalité du Scorpion, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const SCORPIO_TRAITS = [
  {
    title: "La profondeur",
    symbol: "♏",
    text:
      "Le Scorpion cherche naturellement à comprendre ce qui se cache derrière les apparences. Il observe les motivations, les émotions et les vérités que les autres ne perçoivent pas toujours.",
  },
  {
    title: "La transformation",
    symbol: "♇",
    text:
      "Ce signe possède une grande capacité à traverser les périodes de changement et à se reconstruire. Il peut transformer les crises en occasions de croissance et de renouvellement.",
  },
  {
    title: "L’intensité",
    symbol: "✦",
    text:
      "Le Scorpion vit rarement les choses à moitié. Ses sentiments, ses engagements et ses convictions peuvent être profonds, puissants et difficiles à ignorer.",
  },
];

const SCORPIO_STRENGTHS = [
  "Intuition",
  "Détermination",
  "Loyauté",
  "Profondeur",
  "Courage émotionnel",
  "Capacité de transformation",
];

const SCORPIO_CHALLENGES = [
  "Méfiance",
  "Jalousie",
  "Besoin de contrôle",
  "Difficulté à pardonner",
  "Tendance à garder ses émotions",
  "Intensité parfois excessive",
];

const COMPATIBILITIES = [
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "Le Cancer et le Scorpion partagent une grande sensibilité et un besoin de sécurité émotionnelle. Leur relation peut devenir profonde, protectrice et très intuitive.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "Les Poissons apportent douceur, imagination et compréhension émotionnelle. Le Scorpion offre en retour intensité, protection et force intérieure.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "La Vierge peut apprécier la loyauté et la détermination du Scorpion. Le Scorpion respecte souvent son intelligence, sa discrétion et son sens de l’engagement.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "Le Capricorne et le Scorpion partagent une grande détermination et un goût pour les relations solides. Ensemble, ils peuvent construire avec patience, ambition et fidélité.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Quelles sont les principales qualités du Scorpion ?",
    answer:
      "Le Scorpion est souvent associé à l’intuition, à la détermination, à la loyauté, à la profondeur émotionnelle, au courage et à la capacité de se transformer.",
  },
  {
    question:
      "Quels sont les principaux défis du Scorpion ?",
    answer:
      "Le Scorpion peut parfois devenir méfiant, jaloux ou chercher à contrôler ce qui lui échappe. Son évolution passe par la confiance, le lâcher-prise et une expression plus directe de ses émotions.",
  },
  {
    question:
      "Quelle planète gouverne le Scorpion ?",
    answer:
      "Le Scorpion est traditionnellement associé à Mars et, dans l’astrologie moderne, à Pluton. Mars représente l’action et le désir, tandis que Pluton symbolise la transformation, le pouvoir intérieur et la régénération.",
  },
  {
    question:
      "Quel est l’élément du Scorpion ?",
    answer:
      "Le Scorpion appartient à l’élément Eau. Cet élément est lié aux émotions, à l’intuition, à la sensibilité, à la profondeur psychologique et aux liens affectifs.",
  },
  {
    question:
      "Comment savoir si le Scorpion est important dans mon thème natal ?",
    answer:
      "Le Scorpion peut être important si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet également de découvrir la maison astrologique occupée par le Scorpion.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Le Scorpion en astrologie : personnalité, amour, travail et compatibilités",
  description:
    "Guide complet consacré au signe du Scorpion, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
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

export default function ScorpionAstrologiePage() {
  return (
    <div className="scorpio-page">
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
          __html: JSON.stringify(faqJsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="scorpio-wrap">
        <section className="scorpio-hero">
          <div className="scorpio-badge">
            ♏ Huitième signe du zodiaque
          </div>

          <h1>
            Le Scorpion en astrologie
          </h1>

          <p className="scorpio-hero-lead">
            Le Scorpion symbolise la profondeur, la
            transformation, l’intuition et la puissance
            émotionnelle. Ce signe d’Eau cherche à comprendre
            les vérités cachées, à créer des liens profonds et
            à renaître après les périodes de changement.
          </p>

          <div className="scorpio-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="scorpio-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#personnalite-scorpion"
              className="scorpio-secondary-button"
            >
              Découvrir le Scorpion
            </a>
          </div>
        </section>

        <article className="scorpio-content">
          <section id="personnalite-scorpion">
            <span className="scorpio-kicker">
              Personnalité du Scorpion
            </span>

            <h2>
              Que représente le signe du Scorpion ?
            </h2>

            <p>
              Le Scorpion est le huitième signe du zodiaque. Il
              représente la transformation, l’intimité, les
              vérités cachées, la puissance émotionnelle et la
              capacité à évoluer profondément.
            </p>

            <p>
              Une personne marquée par le Scorpion cherche
              généralement à comprendre ce qui se trouve sous
              la surface. Elle observe attentivement les
              comportements, les émotions et les intentions qui
              ne sont pas toujours exprimées ouvertement.
            </p>

            <p>
              Cette énergie apporte intuition, courage et
              profondeur. Elle demande toutefois d’apprendre à
              faire confiance, à exprimer ses émotions sans
              stratégie et à accepter que tout ne peut pas être
              contrôlé.
            </p>
          </section>

          <section>
            <h2>
              Les grandes caractéristiques du Scorpion
            </h2>

            <div className="scorpio-info-grid">
              {SCORPIO_TRAITS.map((item) => (
                <article
                  className="scorpio-info-card"
                  key={item.title}
                >
                  <span className="scorpio-card-icon">
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
              Élément, modalité et planètes maîtresses
            </h2>

            <div className="scorpio-pillars">
              <div className="scorpio-pillar-card">
                <div className="scorpio-pillar-symbol">
                  🌊
                </div>

                <h3>
                  Élément Eau
                </h3>

                <p>
                  L’Eau apporte intuition, sensibilité,
                  profondeur et réceptivité émotionnelle. Elle
                  pousse le Scorpion à vivre ses liens avec
                  intensité et authenticité.
                </p>
              </div>

              <div className="scorpio-pillar-card">
                <div className="scorpio-pillar-symbol">
                  ◆
                </div>

                <h3>
                  Modalité fixe
                </h3>

                <p>
                  La modalité fixe favorise la détermination, la
                  fidélité et la capacité à maintenir une
                  direction. Elle peut aussi renforcer
                  l’entêtement et la difficulté à lâcher prise.
                </p>
              </div>

              <div className="scorpio-pillar-card">
                <div className="scorpio-pillar-symbol">
                  ♇
                </div>

                <h3>
                  Pluton et Mars
                </h3>

                <p>
                  Pluton représente la transformation et le
                  pouvoir intérieur. Mars apporte action,
                  courage et désir. Ensemble, ils renforcent
                  l’intensité du Scorpion.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis du Scorpion
            </h2>

            <div className="scorpio-strengths-grid">
              <div className="scorpio-list-card">
                <span className="scorpio-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Ce que le Scorpion apporte
                </h3>

                <ul>
                  {SCORPIO_STRENGTHS.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="scorpio-list-card">
                <span className="scorpio-kicker">
                  Points d’attention
                </span>

                <h3>
                  Ce que le Scorpion apprend
                </h3>

                <ul>
                  {SCORPIO_CHALLENGES.map((item) => (
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
              Le Scorpion en amour
            </h2>

            <p>
              En amour, le Scorpion recherche généralement une
              relation profonde, sincère et engagée. Il ne se
              satisfait pas facilement d’un lien superficiel et
              cherche à comprendre réellement la personne avec
              laquelle il partage sa vie.
            </p>

            <p>
              Lorsqu’il accorde sa confiance, il peut être
              profondément loyal, protecteur et passionné. Il
              accorde beaucoup d’importance à l’intimité, à la
              fidélité et au sentiment de pouvoir se révéler
              sans masque.
            </p>

            <p>
              Son principal défi consiste à ne pas laisser la
              peur de perdre l’autre nourrir la jalousie ou le
              contrôle. Une relation durable lui demande de
              communiquer clairement, de respecter l’autonomie
              de l’autre et d’accepter sa propre vulnérabilité.
            </p>
          </section>

          <section>
            <h2>
              Le Scorpion au travail
            </h2>

            <p>
              Dans la vie professionnelle, le Scorpion se
              distingue souvent par sa concentration, sa
              persévérance et sa capacité à gérer des situations
              complexes ou sensibles.
            </p>

            <p>
              Il peut être particulièrement efficace dans les
              domaines liés à la psychologie, à la recherche, à
              la médecine, aux finances, à l’enquête, à la
              stratégie, à la sécurité, à la gestion de crise ou
              à l’accompagnement du changement.
            </p>

            <p>
              Il préfère généralement les projets qui ont du
              sens et qui lui permettent d’aller au fond des
              choses. Il gagne toutefois à partager davantage
              l’information et à éviter de vouloir tout gérer
              seul.
            </p>
          </section>

          <section>
            <h2>
              Soleil, Lune et Ascendant en Scorpion
            </h2>

            <div className="scorpio-pillars">
              <div className="scorpio-pillar-card">
                <div className="scorpio-pillar-symbol">
                  ☀️
                </div>

                <h3>
                  Soleil en Scorpion
                </h3>

                <p>
                  Le Soleil en Scorpion construit son identité
                  par la profondeur, la transformation, la
                  détermination et la recherche de vérité.
                </p>

                <Link
                  href="/astrologie/soleil"
                  className="scorpio-text-link"
                >
                  Comprendre le Soleil
                </Link>
              </div>

              <div className="scorpio-pillar-card">
                <div className="scorpio-pillar-symbol">
                  🌙
                </div>

                <h3>
                  Lune en Scorpion
                </h3>

                <p>
                  La Lune en Scorpion ressent les émotions avec
                  intensité. Elle a besoin de confiance,
                  d’authenticité et de liens profonds pour se
                  sentir en sécurité.
                </p>

                <Link
                  href="/astrologie/lune"
                  className="scorpio-text-link"
                >
                  Comprendre la Lune
                </Link>
              </div>

              <div className="scorpio-pillar-card">
                <div className="scorpio-pillar-symbol">
                  ↑
                </div>

                <h3>
                  Ascendant Scorpion
                </h3>

                <p>
                  L’Ascendant Scorpion donne une présence
                  intense, mystérieuse et observatrice. Il
                  aborde généralement la vie avec prudence,
                  intuition et détermination.
                </p>

                <Link
                  href="/astrologie/ascendant"
                  className="scorpio-text-link"
                >
                  Comprendre l’Ascendant
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les compatibilités du Scorpion
            </h2>

            <p>
              Les compatibilités astrologiques ne reposent
              jamais uniquement sur le signe solaire. La Lune,
              Vénus, Mars, l’Ascendant et les aspects entre les
              deux thèmes apportent des informations
              essentielles.
            </p>

            <p>
              Certaines associations peuvent néanmoins sembler
              naturellement plus harmonieuses lorsqu’elles
              partagent un besoin de loyauté, de profondeur, de
              stabilité et de sécurité émotionnelle.
            </p>

            <div className="scorpio-compatibility-grid">
              {COMPATIBILITIES.map((item) => (
                <article
                  className="scorpio-compatibility-card"
                  key={item.sign}
                >
                  <div className="scorpio-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Scorpion et {item.sign}
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
              Le Scorpion dans votre thème natal
            </h2>

            <p>
              Le Scorpion ne concerne pas uniquement les
              personnes nées sous ce signe. Chaque thème natal
              contient le Scorpion dans une maison astrologique
              particulière.
            </p>

            <p>
              Cette maison montre le domaine de vie dans lequel
              vous cherchez à approfondir, à transformer, à
              comprendre ce qui est caché ou à développer votre
              puissance intérieure. La présence de planètes en
              Scorpion renforce également cette énergie.
            </p>

            <div className="scorpio-cta-card">
              <div>
                <span className="scorpio-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Où se trouve le Scorpion dans votre carte du ciel ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir vos signes, vos maisons
                  astrologiques, votre Ascendant et les
                  positions de vos planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="scorpio-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="scorpio-faq">
            <span className="scorpio-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur le Scorpion
            </h2>

            <div className="scorpio-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="scorpio-faq-item"
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

          <p className="scorpio-disclaimer">
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
