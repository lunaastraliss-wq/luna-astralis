import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/ascendant";

export const metadata: Metadata = {
  title:
    "Ascendant en astrologie : personnalité, apparence et première impression | Luna Astralis",

  description:
    "Découvrez la signification de l’Ascendant en astrologie, son influence sur la personnalité, l’apparence et la première impression, ainsi que les 12 Ascendants du zodiaque.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "L’Ascendant en astrologie : personnalité et première impression",
    description:
      "Comprenez le rôle de l’Ascendant dans votre thème astral, son calcul et son influence sur votre manière d’aborder la vie.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "L’Ascendant en astrologie | Luna Astralis",
    description:
      "Découvrez votre Ascendant et son influence sur votre personnalité, votre comportement et votre manière d’entrer en relation avec le monde.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const RISING_SIGNS = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "L’Ascendant Bélier aborde la vie avec énergie, spontanéité et courage. Il donne souvent une impression de dynamisme, de franchise et d’indépendance. Cette personne avance rapidement et préfère agir plutôt qu’attendre.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "L’Ascendant Taureau donne une présence calme, stable et rassurante. Il favorise une approche prudente, patiente et concrète de la vie. Cette personne cherche généralement à construire sur des bases solides.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "L’Ascendant Gémeaux apporte curiosité, mobilité et facilité de communication. Il donne souvent une impression vive, adaptable et sociable. Cette personne aime comprendre son environnement et multiplier les échanges.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "L’Ascendant Cancer donne une présence sensible, protectrice et réceptive. Il favorise une approche prudente et intuitive du monde. Cette personne observe souvent l’atmosphère avant de s’ouvrir pleinement.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "L’Ascendant Lion apporte chaleur, assurance et visibilité. Il donne souvent une impression de générosité, de présence et de créativité. Cette personne cherche naturellement à exprimer son individualité.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "L’Ascendant Vierge donne une apparence réservée, attentive et organisée. Il favorise une approche pratique et analytique de la vie. Cette personne remarque rapidement les détails et cherche à améliorer ce qui l’entoure.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "L’Ascendant Balance apporte charme, diplomatie et recherche d’harmonie. Il donne souvent une impression agréable, sociable et équilibrée. Cette personne tient compte des autres avant de prendre position.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "L’Ascendant Scorpion donne une présence intense, mystérieuse et magnétique. Il favorise une approche lucide et prudente des relations. Cette personne observe profondément avant d’accorder sa confiance.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "L’Ascendant Sagittaire apporte enthousiasme, franchise et goût de l’exploration. Il donne souvent une impression optimiste et ouverte. Cette personne cherche naturellement à élargir ses horizons.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "L’Ascendant Capricorne donne une présence sérieuse, maîtrisée et responsable. Il favorise une approche structurée et ambitieuse de la vie. Cette personne avance avec prudence et persévérance.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "L’Ascendant Verseau apporte originalité, indépendance et recul. Il donne souvent une impression différente, libre et imprévisible. Cette personne préfère suivre sa propre voie plutôt que les conventions.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "L’Ascendant Poissons donne une présence douce, intuitive et réceptive. Il favorise une approche sensible et imaginative du monde. Cette personne capte facilement les émotions et les ambiances qui l’entourent.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente l’Ascendant en astrologie ?",
    answer:
      "L’Ascendant représente la manière spontanée d’aborder la vie, l’attitude visible, la première impression donnée aux autres et la façon dont une personne entre en relation avec son environnement.",
  },
  {
    question:
      "Comment l’Ascendant est-il calculé ?",
    answer:
      "L’Ascendant correspond au signe qui se levait à l’horizon Est au moment précis de la naissance. Son calcul nécessite la date, l’heure et le lieu de naissance.",
  },
  {
    question:
      "Pourquoi l’heure de naissance est-elle importante ?",
    answer:
      "L’Ascendant change approximativement toutes les deux heures. Une différence de quelques minutes peut parfois modifier son degré et, près d’un changement de signe, changer l’Ascendant lui-même.",
  },
  {
    question:
      "L’Ascendant est-il plus important que le signe solaire ?",
    answer:
      "L’Ascendant et le signe solaire décrivent des dimensions différentes. Le Soleil représente l’identité consciente, tandis que l’Ascendant décrit la manière immédiate d’aborder la vie et de se présenter au monde.",
  },
  {
    question:
      "Peut-on connaître son Ascendant sans heure de naissance ?",
    answer:
      "Une heure précise est normalement nécessaire pour déterminer l’Ascendant avec fiabilité. Sans cette information, le résultat demeure incertain.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "L’Ascendant en astrologie : personnalité, apparence et première impression",
  description:
    "Guide complet consacré au rôle de l’Ascendant dans le thème natal, à son calcul et à son expression dans les douze signes du zodiaque.",
  inLanguage: "fr-CA",
  mainEntityOfPage: PAGE_URL,
  publisher: {
    "@type": "Organization",
    name: "Luna Astralis",
    url: "https://luna-astralis.app",
  },
};

export default function AscendantAstrologiePage() {
  return (
    <div className="rising-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="rising-wrap">
        <section className="rising-hero">
          <div className="rising-badge">
            ⬆️ Astrologie et thème natal
          </div>

          <h1>
            L’Ascendant en astrologie
          </h1>

          <p className="rising-hero-lead">
            L’Ascendant représente votre manière spontanée
            d’aborder la vie, l’énergie que vous projetez et la
            première impression que vous donnez aux autres.
          </p>

          <div className="rising-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="rising-primary-button"
            >
              Calculer mon Ascendant gratuitement
            </Link>

            <a
              href="#ascendant-dans-les-signes"
              className="rising-secondary-button"
            >
              Voir les 12 Ascendants
            </a>
          </div>
        </section>

        <article className="rising-content">
          <section>
            <span className="rising-kicker">
              Comprendre votre Ascendant
            </span>

            <h2>
              Que représente l’Ascendant dans un thème astral ?
            </h2>

            <p>
              En astrologie, l’Ascendant correspond au signe du
              zodiaque qui se levait à l’horizon Est au moment
              précis de votre naissance. Il constitue le point
              de départ de la Maison I et influence fortement
              votre manière d’entrer en contact avec le monde.
            </p>

            <p>
              L’Ascendant décrit votre comportement spontané,
              votre attitude visible et l’énergie que les autres
              perçoivent souvent en premier. Il peut également
              indiquer la manière dont vous vous adaptez à un
              nouvel environnement ou à une situation inconnue.
            </p>

            <p>
              Il ne représente pas un masque faux ou artificiel.
              Il constitue plutôt une porte d’entrée vers votre
              personnalité et une manière instinctive de
              répondre aux expériences de la vie.
            </p>
          </section>

          <section>
            <h2>
              L’Ascendant, la personnalité et la première impression
            </h2>

            <div className="rising-info-grid">
              <div className="rising-info-card">
                <span className="rising-card-icon">
                  ↑
                </span>

                <h3>
                  Votre manière d’aborder la vie
                </h3>

                <p>
                  L’Ascendant révèle votre attitude spontanée
                  lorsque vous entrez dans une situation
                  nouvelle ou inconnue.
                </p>
              </div>

              <div className="rising-info-card">
                <span className="rising-card-icon">
                  ✦
                </span>

                <h3>
                  Votre présence visible
                </h3>

                <p>
                  Il influence l’énergie que vous projetez et
                  la façon dont les autres vous perçoivent lors
                  d’une première rencontre.
                </p>
              </div>

              <div className="rising-info-card">
                <span className="rising-card-icon">
                  ◇
                </span>

                <h3>
                  Votre réflexe d’adaptation
                </h3>

                <p>
                  Il montre comment vous vous ajustez
                  instinctivement à votre environnement et aux
                  circonstances extérieures.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Comment l’Ascendant est-il calculé ?
            </h2>

            <p>
              L’Ascendant est calculé à partir de trois
              informations essentielles : la date, l’heure
              précise et le lieu de naissance. Ces données
              permettent de déterminer quel signe se trouvait à
              l’horizon Est au moment de la naissance.
            </p>

            <p>
              Contrairement au signe solaire, qui demeure
              généralement le même pendant plusieurs semaines,
              l’Ascendant change rapidement au cours de la
              journée. En moyenne, un nouveau signe se lève
              environ toutes les deux heures.
            </p>

            <p>
              Le lieu de naissance est également indispensable,
              car la position de l’horizon varie selon la
              latitude et la longitude. Deux personnes nées au
              même moment dans des régions différentes peuvent
              donc avoir un Ascendant différent.
            </p>
          </section>

          <section>
            <h2>
              Pourquoi l’heure de naissance doit-elle être précise ?
            </h2>

            <p>
              Une petite différence dans l’heure de naissance
              peut modifier le degré de l’Ascendant et déplacer
              les cuspides des maisons astrologiques. Lorsque
              la naissance se situe près d’un changement de
              signe, quelques minutes peuvent parfois produire
              un Ascendant différent.
            </p>

            <p>
              Une heure approximative peut donner une indication,
              mais elle ne garantit pas un résultat exact. Pour
              une carte du ciel complète, il est préférable
              d’utiliser l’heure inscrite sur le certificat ou
              le dossier de naissance lorsque cette information
              est disponible.
            </p>
          </section>

          <section>
            <h2>
              Quelle différence entre le Soleil, la Lune et
              l’Ascendant ?
            </h2>

            <div className="rising-pillars">
              <div className="rising-pillar-card">
                <div className="rising-pillar-symbol">
                  ☀️
                </div>

                <h3>
                  Le Soleil
                </h3>

                <p>
                  Il représente votre identité consciente,
                  votre volonté, votre vitalité et la direction
                  que vous cherchez à donner à votre vie.
                </p>

                <Link
                  href="/astrologie/soleil"
                  className="rising-text-link"
                >
                  Découvrir le Soleil
                </Link>
              </div>

              <div className="rising-pillar-card">
                <div className="rising-pillar-symbol">
                  🌙
                </div>

                <h3>
                  La Lune
                </h3>

                <p>
                  Elle décrit votre sensibilité, vos réactions
                  instinctives, vos besoins affectifs et votre
                  recherche de sécurité intérieure.
                </p>

                <Link
                  href="/astrologie/lune"
                  className="rising-text-link"
                >
                  Découvrir la Lune
                </Link>
              </div>

              <div className="rising-pillar-card">
                <div className="rising-pillar-symbol">
                  ↑
                </div>

                <h3>
                  L’Ascendant
                </h3>

                <p>
                  Il révèle votre attitude visible, votre
                  manière spontanée d’aborder la vie et
                  l’impression que vous produisez.
                </p>
              </div>
            </div>
          </section>

          <section id="ascendant-dans-les-signes">
            <span className="rising-kicker">
              Les douze expressions de l’Ascendant
            </span>

            <h2>
              L’Ascendant dans les 12 signes astrologiques
            </h2>

            <p>
              L’Ascendant conserve toujours sa fonction liée à
              l’apparence, au comportement spontané et à la
              manière d’entrer en relation avec le monde. Son
              expression varie toutefois selon le signe du
              zodiaque qui se levait au moment de la naissance.
            </p>

            <div className="rising-sign-grid">
              {RISING_SIGNS.map((item) => (
                <article
                  className="rising-sign-card"
                  key={item.sign}
                >
                  <div className="rising-sign-symbol">
                    {item.symbol}
                  </div>

                  <h3>
                    Ascendant {item.sign}
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
              L’Ascendant et la Maison I
            </h2>

            <p>
              L’Ascendant marque le début de la Maison I, la
              maison astrologique associée à l’identité visible,
              à l’initiative, au comportement spontané et à la
              manière d’occuper l’espace.
            </p>

            <p>
              Le signe de l’Ascendant donne une première couleur
              à cette maison, mais les planètes présentes en
              Maison I peuvent également modifier son
              expression. Une planète proche de l’Ascendant
              peut devenir particulièrement visible dans la
              personnalité.
            </p>

            <p>
              Le maître de l’Ascendant, c’est-à-dire la planète
              qui gouverne son signe, apporte aussi des
              informations importantes. Sa position en signe et
              en maison aide à comprendre comment l’énergie de
              l’Ascendant se développe dans la vie.
            </p>
          </section>

          <section>
            <h2>
              L’Ascendant influence-t-il l’apparence physique ?
            </h2>

            <p>
              En astrologie traditionnelle, l’Ascendant est
              parfois associé à l’apparence, à la posture, aux
              expressions du visage et à la manière de se
              présenter. Il peut contribuer à certaines
              tendances visibles, sans déterminer à lui seul
              les caractéristiques physiques.
            </p>

            <p>
              L’hérédité, le mode de vie, l’environnement et de
              nombreux facteurs personnels jouent évidemment
              un rôle majeur. L’Ascendant doit donc être
              interprété comme un symbole de présence et
              d’expression plutôt que comme une description
              physique absolue.
            </p>
          </section>

          <section>
            <h2>
              Pourquoi connaître son Ascendant ?
            </h2>

            <p>
              Connaître son Ascendant permet de mieux comprendre
              la différence entre ce que l’on ressent
              intérieurement et ce que l’on montre
              spontanément. Certaines personnes se reconnaissent
              immédiatement dans leur signe solaire, tandis que
              d’autres remarquent d’abord les traits de leur
              Ascendant.
            </p>

            <p>
              L’Ascendant aide également à comprendre
              l’organisation complète du thème natal, puisqu’il
              détermine la position des douze maisons
              astrologiques. Il constitue donc une donnée
              essentielle pour interpréter les domaines de vie
              associés aux planètes.
            </p>

            <div className="rising-cta-card">
              <div>
                <span className="rising-kicker">
                  Découvrez votre Ascendant
                </span>

                <h2>
                  Quel signe se levait au moment de votre naissance ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir votre Ascendant, votre Soleil, votre
                  Lune et les positions de vos principales
                  planètes.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="rising-primary-button"
              >
                Calculer mon Ascendant
              </Link>
            </div>
          </section>

          <section className="rising-faq">
            <span className="rising-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur l’Ascendant en astrologie
            </h2>

            <div className="rising-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="rising-faq-item"
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

          <p className="rising-disclaimer">
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
