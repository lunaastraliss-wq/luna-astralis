import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/soleil";

export const metadata: Metadata = {
  title:
    "Soleil en astrologie : signe solaire, identité et personnalité | Luna Astralis",

  description:
    "Découvrez la signification du Soleil en astrologie, son influence sur l’identité, la volonté et la personnalité, ainsi que son expression dans les 12 signes du zodiaque.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Le Soleil en astrologie : identité, volonté et signe solaire",
    description:
      "Comprenez le rôle du Soleil dans votre thème astral et découvrez comment il influence votre identité, votre vitalité et votre direction intérieure.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Le Soleil en astrologie | Luna Astralis",
    description:
      "Découvrez la signification de votre signe solaire et le rôle du Soleil dans votre thème natal.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const SUN_SIGNS = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "Le Soleil en Bélier cherche à affirmer son identité par l’action, l’initiative et le courage. Cette position favorise l’indépendance, la spontanéité et le désir d’ouvrir de nouveaux chemins.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "Le Soleil en Taureau construit son identité à travers la stabilité, la patience et la fidélité à ses valeurs. Il recherche des bases solides et une progression durable.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "Le Soleil en Gémeaux s’épanouit grâce aux idées, aux échanges et à la découverte. Sa curiosité nourrit son besoin de comprendre, d’apprendre et de transmettre.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "Le Soleil en Cancer développe son identité à travers la sensibilité, les racines et le sentiment d’appartenance. Il accorde une grande importance à la protection et à la sécurité affective.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "Le Soleil en Lion cherche à rayonner, créer et exprimer pleinement son individualité. Il possède un besoin naturel de reconnaissance, de générosité et d’expression personnelle.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "Le Soleil en Vierge construit son identité à travers l’utilité, l’amélioration et le sens du détail. Il cherche à comprendre comment rendre les choses plus claires et plus efficaces.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "Le Soleil en Balance se définit à travers les relations, l’équilibre et la recherche d’harmonie. Il développe ses qualités par la coopération, le dialogue et le sens de la justice.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "Le Soleil en Scorpion révèle une identité profonde, intense et tournée vers la transformation. Il cherche à comprendre les vérités cachées et à évoluer à travers les grandes expériences de la vie.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "Le Soleil en Sagittaire s’épanouit par l’exploration, la liberté et la recherche de sens. Il développe son identité en élargissant ses horizons et en partageant sa vision.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "Le Soleil en Capricorne construit son identité par la responsabilité, la persévérance et l’accomplissement. Il cherche à créer quelque chose de solide et de durable.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "Le Soleil en Verseau affirme son identité à travers l’originalité, l’indépendance et la contribution au collectif. Il aime remettre en question les modèles établis.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "Le Soleil en Poissons développe son identité grâce à l’intuition, l’imagination et la compassion. Il est sensible aux émotions, aux symboles et aux dimensions invisibles de l’existence.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente le Soleil en astrologie ?",
    answer:
      "Le Soleil représente l’identité consciente, la volonté, la vitalité et les qualités que la personne cherche progressivement à exprimer avec davantage de confiance.",
  },
  {
    question:
      "Le signe solaire est-il la même chose que le signe astrologique ?",
    answer:
      "Oui. Lorsqu’une personne dit qu’elle est Bélier, Taureau ou Scorpion, elle parle généralement du signe dans lequel se trouvait le Soleil au moment de sa naissance.",
  },
  {
    question:
      "Le Soleil est-il plus important que l’Ascendant ?",
    answer:
      "Le Soleil et l’Ascendant décrivent des dimensions différentes. Le Soleil concerne l’identité profonde et la direction intérieure, tandis que l’Ascendant décrit la manière spontanée d’aborder le monde.",
  },
  {
    question:
      "Pourquoi deux personnes du même signe sont-elles différentes ?",
    answer:
      "Le signe solaire ne représente qu’une partie du thème natal. La Lune, l’Ascendant, les autres planètes, les maisons et les aspects rendent chaque carte du ciel unique.",
  },
  {
    question:
      "Comment connaître la maison de mon Soleil ?",
    answer:
      "La maison du Soleil dépend de l’heure et du lieu de naissance. Vous pouvez la découvrir en générant une carte du ciel complète.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Le Soleil en astrologie : identité, volonté et signe solaire",
  description:
    "Guide complet consacré au rôle du Soleil dans le thème natal et à son expression dans les douze signes du zodiaque.",
  inLanguage: "fr-CA",
  mainEntityOfPage: PAGE_URL,
  publisher: {
    "@type": "Organization",
    name: "Luna Astralis",
    url: "https://luna-astralis.app",
  },
};

export default function SoleilAstrologiePage() {
  return (
    <div className="sun-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="sun-wrap">
        <section className="sun-hero">
          <div className="sun-badge">
            ☀️ Astrologie et thème natal
          </div>

          <h1>
            Le Soleil en astrologie
          </h1>

          <p className="sun-hero-lead">
            Le Soleil représente votre identité consciente,
            votre volonté, votre vitalité et la direction que
            vous cherchez progressivement à donner à votre vie.
          </p>

          <div className="sun-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="sun-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#soleil-dans-les-signes"
              className="sun-secondary-button"
            >
              Voir les 12 signes
            </a>
          </div>
        </section>

        <article className="sun-content">
          <section>
            <span className="sun-kicker">
              Comprendre votre signe solaire
            </span>

            <h2>
              Que représente le Soleil dans un thème astral ?
            </h2>

            <p>
              En astrologie, le Soleil représente le centre de
              l’identité consciente. Il symbolise la volonté,
              la vitalité, la créativité et les qualités qu’une
              personne cherche à développer et à exprimer au
              cours de sa vie.
            </p>

            <p>
              Votre signe solaire est déterminé par la position
              du Soleil au moment de votre naissance. C’est le
              signe que l’on utilise habituellement lorsqu’on
              affirme être Bélier, Taureau, Gémeaux ou
              Scorpion.
            </p>

            <p>
              Le Soleil ne décrit toutefois pas toute votre
              personnalité. Il constitue l’un des piliers de
              votre carte du ciel, aux côtés de la Lune et de
              l’Ascendant. Les autres planètes, les maisons et
              les aspects apportent des nuances qui rendent
              chaque thème natal unique.
            </p>
          </section>

          <section>
            <h2>
              Le Soleil, l’identité et la volonté
            </h2>

            <div className="sun-info-grid">
              <div className="sun-info-card">
                <span className="sun-card-icon">
                  ✦
                </span>

                <h3>
                  Votre identité consciente
                </h3>

                <p>
                  Le Soleil montre les qualités que vous
                  reconnaissez progressivement comme étant
                  profondément les vôtres.
                </p>
              </div>

              <div className="sun-info-card">
                <span className="sun-card-icon">
                  ✧
                </span>

                <h3>
                  Votre volonté
                </h3>

                <p>
                  Il révèle ce qui vous motive à avancer, à
                  choisir une direction et à construire une vie
                  qui vous ressemble.
                </p>
              </div>

              <div className="sun-info-card">
                <span className="sun-card-icon">
                  ☀
                </span>

                <h3>
                  Votre vitalité
                </h3>

                <p>
                  Le Soleil est associé à l’énergie vitale, au
                  rayonnement personnel et à la capacité
                  d’exprimer votre créativité.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Quelle différence entre le Soleil, la Lune et
              l’Ascendant ?
            </h2>

            <div className="sun-pillars">
              <div className="sun-pillar-card">
                <div className="sun-pillar-symbol">
                  ☀️
                </div>

                <h3>
                  Le Soleil
                </h3>

                <p>
                  Il représente votre identité consciente,
                  votre volonté et la personne que vous cherchez
                  pleinement à devenir.
                </p>
              </div>

              <div className="sun-pillar-card">
                <div className="sun-pillar-symbol">
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
              </div>

              <div className="sun-pillar-card">
                <div className="sun-pillar-symbol">
                  ↑
                </div>

                <h3>
                  L’Ascendant
                </h3>

                <p>
                  Il révèle votre manière spontanée d’aborder
                  la vie et l’énergie que les autres perçoivent
                  souvent en premier.
                </p>
              </div>
            </div>
          </section>

          <section id="soleil-dans-les-signes">
            <span className="sun-kicker">
              Les douze expressions solaires
            </span>

            <h2>
              Le Soleil dans les 12 signes astrologiques
            </h2>

            <p>
              Le Soleil conserve toujours sa fonction
              d’identité, de volonté et de rayonnement, mais il
              l’exprime différemment selon le signe du zodiaque
              dans lequel il se trouve.
            </p>

            <div className="sun-sign-grid">
              {SUN_SIGNS.map((item) => (
                <article
                  className="sun-sign-card"
                  key={item.sign}
                >
                  <div className="sun-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Soleil en {item.sign}
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
              L’importance de la maison astrologique du Soleil
            </h2>

            <p>
              Le signe du Soleil explique la manière dont votre
              identité cherche à s’exprimer. Sa maison
              astrologique indique plutôt le domaine de vie
              dans lequel cette énergie prend une importance
              particulière.
            </p>

            <p>
              Un Soleil en Maison I peut renforcer le besoin
              d’affirmation personnelle, tandis qu’un Soleil en
              Maison IV peut accorder davantage d’importance
              au foyer, aux racines et à la sécurité
              intérieure. Un Soleil en Maison X peut orienter
              l’identité vers la vocation, la reconnaissance et
              la construction d’une place dans la société.
            </p>

            <div className="sun-cta-card">
              <div>
                <span className="sun-kicker">
                  Découvrez votre position
                </span>

                <h2>
                  Dans quel signe et quelle maison se trouve
                  votre Soleil ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir votre Soleil, votre Lune, votre
                  Ascendant et les positions de vos principales
                  planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="sun-primary-button"
              >
                Découvrir mon thème natal
              </Link>
            </div>
          </section>

          <section className="sun-faq">
            <span className="sun-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur le Soleil en astrologie
            </h2>

            <div className="sun-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="sun-faq-item"
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

          <p className="sun-disclaimer">
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
