import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/cancer";

export const metadata: Metadata = {
  title:
    "Cancer : personnalité, amour, travail et compatibilités | Luna Astralis",

  description:
    "Découvrez le signe du Cancer en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Lune, élément Eau, Soleil, Lune et Ascendant en Cancer.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Le Cancer en astrologie : personnalité, amour et compatibilités",
    description:
      "Guide complet du signe du Cancer : caractère, forces, défis, relations, carrière, planète maîtresse et principales compatibilités.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le signe du Cancer | Luna Astralis",
    description:
      "Découvrez la personnalité du Cancer, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const CANCER_TRAITS = [
  {
    title: "La sensibilité",
    symbol: "🌙",
    text:
      "Le Cancer ressent profondément les ambiances, les émotions et les changements subtils dans son environnement. Sa sensibilité nourrit son intuition et sa compréhension des autres.",
  },
  {
    title: "La protection",
    symbol: "✦",
    text:
      "Ce signe cherche naturellement à protéger les personnes, les liens et les espaces auxquels il tient. Il peut devenir très présent lorsqu’un proche a besoin de soutien.",
  },
  {
    title: "Les racines",
    symbol: "⌂",
    text:
      "Le Cancer accorde une grande importance au foyer, aux souvenirs, à la famille et au sentiment d’appartenance. Ses repères affectifs participent fortement à son équilibre.",
  },
];

const CANCER_STRENGTHS = [
  "Sensibilité",
  "Intuition",
  "Loyauté",
  "Empathie",
  "Protection",
  "Mémoire émotionnelle",
];

const CANCER_CHALLENGES = [
  "Hypersensibilité",
  "Attachement au passé",
  "Peur du rejet",
  "Repli sur soi",
  "Difficulté à exprimer directement ses besoins",
  "Tendance à trop protéger",
];

const COMPATIBILITIES = [
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "Le Scorpion partage avec le Cancer une grande profondeur émotionnelle et un fort besoin de confiance. Cette relation peut devenir très intense et loyale.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "Les Poissons comprennent la sensibilité et l’intuition du Cancer. Ensemble, ils peuvent créer un lien doux, réceptif et profondément affectif.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "Le Taureau apporte stabilité, présence et sécurité concrète. Le Cancer nourrit la relation par sa chaleur, son attention et son attachement.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "La Vierge peut offrir structure, fiabilité et soutien pratique. Le Cancer apporte en retour sensibilité, écoute et profondeur émotionnelle.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Quelles sont les principales qualités du Cancer ?",
    answer:
      "Le Cancer est souvent associé à la sensibilité, à l’intuition, à l’empathie, à la loyauté, à la protection et à l’importance accordée aux liens affectifs.",
  },
  {
    question:
      "Quels sont les principaux défis du Cancer ?",
    answer:
      "Le Cancer peut parfois se replier sur lui-même, s’attacher au passé ou avoir de la difficulté à exprimer directement ses besoins. Son évolution passe souvent par davantage de confiance et de clarté émotionnelle.",
  },
  {
    question:
      "Quel astre gouverne le Cancer ?",
    answer:
      "Le Cancer est gouverné par la Lune, associée aux émotions, aux besoins affectifs, aux habitudes, à la mémoire, à l’intuition et à la sécurité intérieure.",
  },
  {
    question:
      "Quel est l’élément du Cancer ?",
    answer:
      "Le Cancer appartient à l’élément Eau. Cet élément est lié aux émotions, à l’intuition, à la réceptivité, à la sensibilité et à la profondeur intérieure.",
  },
  {
    question:
      "Comment savoir si le Cancer est important dans mon thème natal ?",
    answer:
      "Le Cancer peut être important si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet de le vérifier.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Le Cancer en astrologie : personnalité, amour, travail et compatibilités",
  description:
    "Guide complet consacré au signe du Cancer, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
  inLanguage: "fr-CA",
  mainEntityOfPage: PAGE_URL,
  publisher: {
    "@type": "Organization",
    name: "Luna Astralis",
    url: "https://luna-astralis.app",
  },
};

export default function CancerAstrologiePage() {
  return (
    <div className="cancer-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="cancer-wrap">
        <section className="cancer-hero">
          <div className="cancer-badge">
            ♋ Quatrième signe du zodiaque
          </div>

          <h1>
            Le Cancer en astrologie
          </h1>

          <p className="cancer-hero-lead">
            Le Cancer symbolise la sensibilité, l’intuition,
            les racines et le besoin de sécurité affective. Ce
            signe d’Eau cherche à protéger ce qui lui est cher
            et à créer un véritable sentiment d’appartenance.
          </p>

          <div className="cancer-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="cancer-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#personnalite-cancer"
              className="cancer-secondary-button"
            >
              Découvrir le Cancer
            </a>
          </div>
        </section>

        <article className="cancer-content">
          <section id="personnalite-cancer">
            <span className="cancer-kicker">
              Personnalité du Cancer
            </span>

            <h2>
              Que représente le signe du Cancer ?
            </h2>

            <p>
              Le Cancer est le quatrième signe du zodiaque. Il
              représente le besoin de construire une sécurité
              intérieure, de préserver les liens affectifs et de
              créer un espace dans lequel il est possible de se
              sentir protégé.
            </p>

            <p>
              Une personne marquée par le Cancer ressent souvent
              très rapidement l’atmosphère d’un lieu ou les
              émotions des autres. Elle peut être intuitive,
              attentive et profondément attachée aux personnes
              qu’elle considère comme sa famille.
            </p>

            <p>
              Cette énergie apporte douceur, loyauté et capacité
              de protection. Elle demande toutefois d’apprendre
              à ne pas tout intérioriser, à exprimer clairement
              ses besoins et à ne pas rester prisonnier du passé.
            </p>
          </section>

          <section>
            <h2>
              Les grandes caractéristiques du Cancer
            </h2>

            <div className="cancer-info-grid">
              {CANCER_TRAITS.map((item) => (
                <article
                  className="cancer-info-card"
                  key={item.title}
                >
                  <span className="cancer-card-icon">
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
              Élément, modalité et astre maître
            </h2>

            <div className="cancer-pillars">
              <div className="cancer-pillar-card">
                <div className="cancer-pillar-symbol">
                  🌊
                </div>

                <h3>
                  Élément Eau
                </h3>

                <p>
                  L’Eau apporte sensibilité, intuition,
                  réceptivité et profondeur émotionnelle. Elle
                  pousse le Cancer à ressentir avant d’agir.
                </p>
              </div>

              <div className="cancer-pillar-card">
                <div className="cancer-pillar-symbol">
                  ✦
                </div>

                <h3>
                  Modalité cardinale
                </h3>

                <p>
                  La modalité cardinale favorise l’initiative.
                  Chez le Cancer, elle se manifeste souvent par
                  le désir de créer un foyer, un lien ou une
                  sécurité durable.
                </p>
              </div>

              <div className="cancer-pillar-card">
                <div className="cancer-pillar-symbol">
                  ☾
                </div>

                <h3>
                  Astre maître : la Lune
                </h3>

                <p>
                  La Lune représente les émotions, les habitudes,
                  les souvenirs et les besoins affectifs. Elle
                  renforce la grande réceptivité du Cancer.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les forces et les défis du Cancer
            </h2>

            <div className="cancer-strengths-grid">
              <div className="cancer-list-card">
                <span className="cancer-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Ce que le Cancer apporte
                </h3>

                <ul>
                  {CANCER_STRENGTHS.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cancer-list-card">
                <span className="cancer-kicker">
                  Points d’attention
                </span>

                <h3>
                  Ce que le Cancer apprend
                </h3>

                <ul>
                  {CANCER_CHALLENGES.map((item) => (
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
              Le Cancer en amour
            </h2>

            <p>
              En amour, le Cancer recherche généralement une
              relation profonde, sincère et sécurisante. Il a
              besoin de sentir que le lien repose sur la
              confiance, la présence et une véritable attention
              émotionnelle.
            </p>

            <p>
              Il peut se montrer très tendre, protecteur et
              fidèle lorsqu’il se sent en sécurité. Les gestes
              simples, les habitudes partagées et le sentiment de
              construire un foyer ont souvent beaucoup
              d’importance.
            </p>

            <p>
              Son principal défi consiste à ne pas attendre que
              l’autre devine ses besoins. Une relation équilibrée
              lui demande de communiquer plus directement et de
              laisser à chacun l’espace nécessaire pour évoluer.
            </p>
          </section>

          <section>
            <h2>
              Le Cancer au travail
            </h2>

            <p>
              Dans la vie professionnelle, le Cancer se distingue
              souvent par son intuition, sa mémoire, son sens de
              l’écoute et sa capacité à comprendre les besoins
              humains.
            </p>

            <p>
              Il peut être particulièrement efficace dans les
              domaines liés à l’accompagnement, à la santé, à
              l’éducation, à l’hébergement, à l’alimentation, à
              l’immobilier ou à la création.
            </p>

            <p>
              Il a généralement besoin d’un environnement dans
              lequel il se sent respecté et en confiance. Une
              atmosphère trop froide ou instable peut diminuer
              sa motivation et sa capacité à s’investir.
            </p>
          </section>

          <section>
            <h2>
              Soleil, Lune et Ascendant en Cancer
            </h2>

            <div className="cancer-pillars">
              <div className="cancer-pillar-card">
                <div className="cancer-pillar-symbol">
                  ☀️
                </div>

                <h3>
                  Soleil en Cancer
                </h3>

                <p>
                  Le Soleil en Cancer construit son identité par
                  la sensibilité, les racines, la protection et
                  l’importance accordée aux liens affectifs.
                </p>

                <Link
                  href="/astrologie/soleil"
                  className="cancer-text-link"
                >
                  Comprendre le Soleil
                </Link>
              </div>

              <div className="cancer-pillar-card">
                <div className="cancer-pillar-symbol">
                  🌙
                </div>

                <h3>
                  Lune en Cancer
                </h3>

                <p>
                  La Lune en Cancer ressent avec intensité et a
                  besoin d’un foyer, de repères et de proximité
                  émotionnelle pour se sentir en sécurité.
                </p>

                <Link
                  href="/astrologie/lune"
                  className="cancer-text-link"
                >
                  Comprendre la Lune
                </Link>
              </div>

              <div className="cancer-pillar-card">
                <div className="cancer-pillar-symbol">
                  ↑
                </div>

                <h3>
                  Ascendant Cancer
                </h3>

                <p>
                  L’Ascendant Cancer donne une présence douce,
                  prudente et réceptive. Il observe souvent
                  l’atmosphère avant de s’ouvrir pleinement.
                </p>

                <Link
                  href="/astrologie/ascendant"
                  className="cancer-text-link"
                >
                  Comprendre l’Ascendant
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les compatibilités du Cancer
            </h2>

            <p>
              Les compatibilités astrologiques ne reposent jamais
              uniquement sur le signe solaire. La Lune, Vénus,
              Mars, l’Ascendant et les aspects entre les deux
              thèmes apportent des informations essentielles.
            </p>

            <p>
              Certaines associations peuvent néanmoins sembler
              plus naturelles lorsqu’elles partagent un besoin
              de profondeur émotionnelle, de loyauté et de
              sécurité.
            </p>

            <div className="cancer-compatibility-grid">
              {COMPATIBILITIES.map((item) => (
                <article
                  className="cancer-compatibility-card"
                  key={item.sign}
                >
                  <div className="cancer-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Cancer et {item.sign}
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
              Le Cancer dans votre thème natal
            </h2>

            <p>
              Le Cancer ne concerne pas uniquement les personnes
              nées sous ce signe. Chaque thème natal contient le
              Cancer dans une maison astrologique particulière.
            </p>

            <p>
              Cette maison montre le domaine de vie dans lequel
              vous recherchez davantage de sécurité, de
              protection, d’appartenance et de continuité
              émotionnelle.
            </p>

            <p>
              La présence de planètes en Cancer renforce
              également cette énergie. Vénus, Mars, Mercure ou
              la Lune en Cancer ne s’expriment pas de la même
              façon, mais chacune adopte une qualité plus
              sensible, intuitive et protectrice.
            </p>

            <div className="cancer-cta-card">
              <div>
                <span className="cancer-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Où se trouve le Cancer dans votre carte du ciel ?
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
                className="cancer-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="cancer-faq">
            <span className="cancer-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur le Cancer
            </h2>

            <div className="cancer-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="cancer-faq-item"
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

          <p className="cancer-disclaimer">
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
