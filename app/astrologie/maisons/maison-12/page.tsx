import type { Metadata } from "next";
import Link from "next/link";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/astrologie/maisons/maison-12";

export const metadata: Metadata = {
  title:
    "Maison 12 en astrologie : inconscient, spiritualité et guérison | Luna Astralis",

  description:
    "Découvrez la Maison 12 en astrologie : inconscient, rêves, solitude, spiritualité, intuition, épreuves cachées, secrets, compassion et guérison intérieure.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Maison 12 en astrologie : inconscient, spiritualité et guérison intérieure",
    description:
      "Guide complet de la Maison 12 : inconscient, rêves, solitude, intuition, secrets, compassion, épreuves intérieures et libération.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "La Maison 12 en astrologie | Luna Astralis",
    description:
      "Découvrez ce que la Maison 12 révèle sur votre inconscient, votre intuition, vos rêves et votre monde intérieur.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const HOUSE_TRAITS = [
  {
    title: "Votre inconscient",
    symbol: "Ⅻ",
    text:
      "La Maison 12 représente les émotions, les souvenirs, les peurs et les mécanismes intérieurs qui agissent parfois sans être clairement conscients.",
  },
  {
    title: "Votre monde spirituel",
    symbol: "☾",
    text:
      "Cette maison concerne l’intuition, les rêves, la méditation, la compassion et la recherche d’un lien avec une dimension plus vaste de l’existence.",
  },
  {
    title: "Votre guérison intérieure",
    symbol: "∞",
    text:
      "Elle montre les blessures cachées, les périodes de retrait et les processus de libération qui permettent de terminer un cycle et de retrouver la paix.",
  },
];

const HOUSE_STRENGTHS = [
  "Grande intuition",
  "Compassion profonde",
  "Imagination riche",
  "Sensibilité au monde invisible",
  "Capacité d’introspection",
  "Talent pour accompagner les autres",
];

const HOUSE_CHALLENGES = [
  "Tendance à l’isolement",
  "Difficulté à poser des limites",
  "Fuite face à la réalité",
  "Peurs inconscientes",
  "Sacrifice excessif",
  "Sentiment d’être incompris",
];

const PLANETS_IN_HOUSE = [
  {
    name: "Soleil",
    symbol: "☀",
    text:
      "Le Soleil en Maison 12 donne une identité intérieure, discrète et souvent difficile à exprimer directement. La personne peut avoir besoin de solitude pour se retrouver et développer une vocation liée à l’aide, à la création ou à la spiritualité.",
  },
  {
    name: "Lune",
    symbol: "☽",
    text:
      "La Lune en Maison 12 crée une grande sensibilité émotionnelle et intuitive. La personne absorbe facilement l’ambiance qui l’entoure et peut avoir besoin de périodes régulières de retrait pour retrouver son équilibre.",
  },
  {
    name: "Mercure",
    symbol: "☿",
    text:
      "Mercure en Maison 12 donne une pensée intuitive, imaginative et tournée vers l’introspection. La personne peut comprendre les non-dits, mais avoir parfois de la difficulté à exprimer clairement ce qu’elle ressent.",
  },
  {
    name: "Vénus",
    symbol: "♀",
    text:
      "Vénus en Maison 12 apporte une grande sensibilité affective, de la compassion et un amour discret. La personne peut vivre des sentiments secrets ou idéaliser les relations et doit apprendre à protéger ses limites.",
  },
  {
    name: "Mars",
    symbol: "♂",
    text:
      "Mars en Maison 12 peut rendre l’action plus intérieure ou indirecte. La personne possède une énergie importante, mais peut refouler sa colère ou agir dans l’ombre avant d’apprendre à affirmer clairement ses besoins.",
  },
  {
    name: "Jupiter",
    symbol: "♃",
    text:
      "Jupiter en Maison 12 peut offrir une grande foi intérieure, une protection discrète et un intérêt pour la spiritualité ou l’aide humanitaire. La personne peut trouver de la force dans la solitude et la compassion.",
  },
  {
    name: "Saturne",
    symbol: "♄",
    text:
      "Saturne en Maison 12 peut révéler des peurs profondes, un sentiment d’isolement ou une difficulté à demander de l’aide. Avec le temps, cette position peut donner une grande discipline intérieure et une solide résilience.",
  },
  {
    name: "Uranus",
    symbol: "♅",
    text:
      "Uranus en Maison 12 donne une intuition soudaine, une vie intérieure originale et un besoin inconscient de liberté. La personne peut vivre des prises de conscience rapides ou des changements invisibles aux autres.",
  },
  {
    name: "Neptune",
    symbol: "♆",
    text:
      "Neptune en Maison 12 renforce l’intuition, l’imagination, la spiritualité et la sensibilité aux ambiances. La personne doit cependant veiller aux illusions, à la fuite et à l’absorption des émotions extérieures.",
  },
  {
    name: "Pluton",
    symbol: "♇",
    text:
      "Pluton en Maison 12 donne une vie intérieure intense et une grande capacité de transformation psychologique. La personne peut être confrontée à des peurs profondes avant de découvrir une force intérieure remarquable.",
  },
];

const SIGNS_IN_HOUSE = [
  {
    sign: "Bélier",
    symbol: "♈",
    text:
      "La Maison 12 en Bélier peut refouler le besoin d’agir ou d’affirmer sa volonté. La personne apprend à reconnaître sa colère, son courage et son désir d’indépendance.",
  },
  {
    sign: "Taureau",
    symbol: "♉",
    text:
      "La Maison 12 en Taureau recherche une sécurité intérieure profonde. Les peurs peuvent concerner la perte, le changement ou le manque, et la guérison passe par l’ancrage et la confiance.",
  },
  {
    sign: "Gémeaux",
    symbol: "♊",
    text:
      "La Maison 12 en Gémeaux donne une vie mentale riche, intuitive et parfois agitée. La personne peut avoir besoin d’écrire, de parler ou de méditer pour organiser ses pensées.",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    text:
      "La Maison 12 en Cancer renforce la sensibilité aux souvenirs, à la famille et aux émotions du passé. La personne peut porter des blessures familiales profondes et chercher une sécurité intérieure.",
  },
  {
    sign: "Lion",
    symbol: "♌",
    text:
      "La Maison 12 en Lion peut cacher un grand besoin de reconnaissance ou de créativité. La personne apprend à rayonner sans attendre constamment l’approbation des autres.",
  },
  {
    sign: "Vierge",
    symbol: "♍",
    text:
      "La Maison 12 en Vierge peut créer une tendance à l’autocritique, au doute ou au perfectionnisme silencieux. La guérison passe par l’acceptation, le repos et une relation plus douce avec soi-même.",
  },
  {
    sign: "Balance",
    symbol: "♎",
    text:
      "La Maison 12 en Balance peut éviter les conflits pour préserver la paix. La personne apprend à reconnaître ses besoins et à créer des relations équilibrées sans se sacrifier.",
  },
  {
    sign: "Scorpion",
    symbol: "♏",
    text:
      "La Maison 12 en Scorpion donne une vie intérieure intense, secrète et profondément transformatrice. La personne peut posséder une grande intuition face aux motivations cachées.",
  },
  {
    sign: "Sagittaire",
    symbol: "♐",
    text:
      "La Maison 12 en Sagittaire cherche une foi ou une vérité intérieure. La personne peut ressentir un appel vers la spiritualité, les voyages intérieurs ou une compréhension plus vaste de la vie.",
  },
  {
    sign: "Capricorne",
    symbol: "♑",
    text:
      "La Maison 12 en Capricorne peut cacher une peur de l’échec ou une forte pression intérieure. La personne apprend à relâcher le contrôle et à accepter de ne pas toujours tout porter seule.",
  },
  {
    sign: "Verseau",
    symbol: "♒",
    text:
      "La Maison 12 en Verseau donne une vie intérieure originale et indépendante. La personne peut se sentir différente ou isolée avant de reconnaître la valeur de sa vision particulière.",
  },
  {
    sign: "Poissons",
    symbol: "♓",
    text:
      "La Maison 12 en Poissons renforce l’intuition, la compassion, les rêves et la sensibilité spirituelle. La personne doit toutefois développer des limites claires pour ne pas absorber les émotions des autres.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Que représente la Maison 12 en astrologie ?",
    answer:
      "La Maison 12 représente l’inconscient, les rêves, la solitude, la spiritualité, les secrets, les peurs cachées, la compassion, les fins de cycle et la guérison intérieure.",
  },
  {
    question:
      "Que signifie une planète en Maison 12 ?",
    answer:
      "Une planète en Maison 12 agit souvent de manière intérieure, discrète ou inconsciente. Son énergie demande à être reconnue, comprise et exprimée avec davantage de conscience.",
  },
  {
    question:
      "Que signifie une Maison 12 vide ?",
    answer:
      "Une Maison 12 vide ne signifie pas une absence de vie intérieure ou de spiritualité. Il faut observer le signe placé sur sa cuspide, sa planète maîtresse et les aspects reçus.",
  },
  {
    question:
      "Pourquoi la Maison 12 est-elle associée à la solitude ?",
    answer:
      "Elle représente les périodes de retrait, d’introspection et de séparation du monde extérieur qui permettent de se recentrer, de guérir ou de terminer un cycle.",
  },
  {
    question:
      "La Maison 12 représente-t-elle les ennemis cachés ?",
    answer:
      "En astrologie traditionnelle, elle peut représenter les adversaires cachés, les obstacles invisibles et les comportements inconscients qui peuvent agir contre nos propres intérêts.",
  },
  {
    question:
      "Quelle différence existe entre la Maison 8 et la Maison 12 ?",
    answer:
      "La Maison 8 représente les transformations profondes, l’intimité et les ressources partagées. La Maison 12 concerne davantage l’inconscient, le retrait, les secrets et la libération intérieure.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Maison 12 en astrologie : inconscient, spiritualité et guérison intérieure",
  description:
    "Guide complet consacré à la Maison 12, à l’inconscient, aux rêves, à la solitude, à la spiritualité, aux secrets et à la guérison intérieure.",
  inLanguage: "fr-CA",
  mainEntityOfPage: PAGE_URL,
  publisher: {
    "@type": "Organization",
    name: "Luna Astralis",
    url: "https://luna-astralis.app",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://luna-astralis.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Astrologie",
      item: "https://luna-astralis.app/astrologie",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Maisons astrologiques",
      item:
        "https://luna-astralis.app/astrologie/maisons",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Maison 12",
      item: PAGE_URL,
    },
  ],
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

export default function MaisonDouzeAstrologiePage() {
  return (
    <div className="house-twelve-page">
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
          __html: JSON.stringify(
            breadcrumbJsonLd
          ).replace(/</g, "\\u003c"),
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

      <main className="house-twelve-wrap">
        <section className="house-twelve-hero">
          <div className="house-twelve-badge">
            Ⅻ Douzième maison astrologique
          </div>

          <h1>
            La Maison 12 en astrologie
          </h1>

          <p className="house-twelve-hero-lead">
            La Maison 12 représente l’inconscient, les rêves,
            la solitude, la spiritualité, les secrets, les
            épreuves intérieures et votre capacité à terminer
            un cycle pour retrouver la paix.
          </p>

          <div className="house-twelve-hero-actions">
            <Link
              href="/carte-du-ciel"
              className="house-twelve-primary-button"
            >
              Créer ma carte du ciel gratuite
            </Link>

            <a
              href="#signification-maison-12"
              className="house-twelve-secondary-button"
            >
              Découvrir la Maison 12
            </a>
          </div>
        </section>

        <article className="house-twelve-content">
          <section id="signification-maison-12">
            <span className="house-twelve-kicker">
              Signification de la Maison 12
            </span>

            <h2>
              Que représente la Maison 12 ?
            </h2>

            <p>
              La Maison 12 est la maison de l’inconscient, de
              l’introspection, de la solitude et du monde
              intérieur.
            </p>

            <p>
              Elle représente les émotions, les peurs, les
              souvenirs et les mécanismes qui agissent en vous
              sans toujours être visibles ou faciles à
              comprendre.
            </p>

            <p>
              Cette maison concerne également les rêves, la
              spiritualité, la compassion, les secrets, les
              retraites et les périodes où vous avez besoin de
              vous éloigner du bruit extérieur.
            </p>

            <p>
              Elle marque la fin du cycle des douze maisons et
              symbolise la libération, le pardon, la guérison et
              la préparation d’un nouveau commencement.
            </p>
          </section>

          <section>
            <h2>
              Les grands domaines de la Maison 12
            </h2>

            <div className="house-twelve-info-grid">
              {HOUSE_TRAITS.map((item) => (
                <article
                  className="house-twelve-info-card"
                  key={item.title}
                >
                  <span className="house-twelve-card-icon">
                    {item.symbol}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Inconscient et monde intérieur
            </h2>

            <p>
              La Maison 12 représente tout ce qui existe en vous
              sans être immédiatement accessible à votre
              conscience.
            </p>

            <p>
              Elle contient les souvenirs enfouis, les peurs
              difficiles à nommer, les émotions refoulées et les
              comportements automatiques.
            </p>

            <p>
              Explorer cette maison permet de mieux comprendre
              certaines réactions, certaines répétitions et les
              obstacles invisibles qui peuvent ralentir votre
              évolution.
            </p>

            <div className="house-twelve-highlight-card">
              <div className="house-twelve-highlight-symbol">
                Ⅻ
              </div>

              <div>
                <h3>
                  La Maison 12 révèle ce qui agit dans l’ombre
                </h3>

                <p>
                  Pour interpréter cette maison, observez le
                  signe placé sur sa cuspide, sa planète
                  maîtresse, les planètes présentes et les
                  aspects qu’elles reçoivent.
                </p>

                <Link
                  href="/astrologie/maisons"
                  className="house-twelve-text-link"
                >
                  Comprendre les douze maisons astrologiques
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Rêves, intuition et imagination
            </h2>

            <p>
              La Maison 12 est associée aux rêves, aux images
              symboliques et aux messages qui viennent de
              l’inconscient.
            </p>

            <p>
              Elle peut donner une grande intuition, une forte
              imagination et une sensibilité particulière aux
              ambiances, aux émotions et aux non-dits.
            </p>

            <p>
              Une Maison 12 importante peut favoriser la
              créativité, la méditation, la contemplation et
              les pratiques qui demandent d’écouter son monde
              intérieur.
            </p>
          </section>

          <section>
            <h2>
              Solitude, retrait et besoin de silence
            </h2>

            <p>
              La Maison 12 représente les périodes où vous avez
              besoin de vous retirer du monde extérieur.
            </p>

            <p>
              Cette solitude peut être choisie et réparatrice,
              ou vécue comme un isolement lorsque vous ne vous
              sentez pas compris.
            </p>

            <p>
              Son rôle est de créer un espace de repos,
              d’introspection et de récupération avant de
              recommencer un nouveau cycle.
            </p>
          </section>

          <section>
            <h2>
              Spiritualité et connexion invisible
            </h2>

            <p>
              La Maison 12 est liée à la spiritualité, à la foi,
              à la méditation et aux expériences qui dépassent
              les limites de l’identité individuelle.
            </p>

            <p>
              Elle peut montrer un besoin de se relier à quelque
              chose de plus vaste : la nature, l’humanité, une
              tradition spirituelle ou une forme de conscience
              universelle.
            </p>

            <p>
              Cette sensibilité doit être accompagnée de limites
              solides afin d’éviter la confusion, l’idéalisation
              ou la perte de repères.
            </p>
          </section>

          <section>
            <h2>
              Compassion, service et sacrifice
            </h2>

            <p>
              La Maison 12 donne souvent une grande capacité à
              ressentir la souffrance ou les besoins des
              autres.
            </p>

            <p>
              Elle peut encourager les métiers d’aide, de soin,
              d’accompagnement, de création ou de soutien auprès
              de personnes vulnérables.
            </p>

            <p>
              Son défi consiste à aider sans se sacrifier, à
              compatir sans absorber toute la douleur et à
              protéger son propre équilibre.
            </p>
          </section>

          <section>
            <h2>
              Secrets et choses cachées
            </h2>

            <p>
              La Maison 12 représente les secrets, les
              informations cachées et les situations qui se
              déroulent loin du regard des autres.
            </p>

            <p>
              Elle peut concerner ce que vous gardez pour vous,
              ce que vous ne souhaitez pas montrer ou ce que
              vous ne comprenez pas encore clairement.
            </p>

            <p>
              Elle demande de faire preuve de lucidité afin que
              le secret ne devienne pas une source de confusion,
              de honte ou d’isolement.
            </p>
          </section>

          <section>
            <h2>
              Épreuves cachées et autosabotage
            </h2>

            <p>
              En astrologie traditionnelle, la Maison 12 peut
              représenter les obstacles invisibles, les ennemis
              cachés et les comportements inconscients qui
              agissent contre vos propres intérêts.
            </p>

            <p>
              L’autosabotage peut apparaître lorsque des peurs,
              des croyances ou des blessures non reconnues
              influencent vos décisions.
            </p>

            <p>
              Le travail de cette maison consiste à rendre
              conscient ce qui était caché afin de retrouver
              davantage de liberté.
            </p>
          </section>

          <section>
            <h2>
              Institutions, lieux de retrait et isolement
            </h2>

            <p>
              La Maison 12 est traditionnellement associée aux
              hôpitaux, aux monastères, aux prisons, aux centres
              de soins et aux lieux séparés de la vie
              quotidienne.
            </p>

            <p>
              Ces lieux ont en commun le retrait, l’isolement,
              la guérison, la discipline ou la nécessité de
              vivre temporairement en dehors du rythme habituel.
            </p>

            <p>
              Symboliquement, cette maison représente toute
              période durant laquelle vous devez ralentir et
              vous tourner vers votre monde intérieur.
            </p>
          </section>

          <section>
            <h2>
              Fin de cycle, pardon et libération
            </h2>

            <p>
              La Maison 12 est la dernière maison du thème
              natal. Elle représente ce qui doit être terminé,
              accepté ou relâché avant un nouveau départ.
            </p>

            <p>
              Elle invite à faire la paix avec le passé, à
              pardonner lorsque cela est possible et à
              abandonner les comportements qui n’ont plus leur
              place.
            </p>

            <p>
              Son potentiel le plus profond est la libération :
              transformer les blessures en compréhension et le
              passé en sagesse.
            </p>
          </section>

          <section>
            <h2>
              Les forces et les défis de la Maison 12
            </h2>

            <div className="house-twelve-strengths-grid">
              <div className="house-twelve-list-card">
                <span className="house-twelve-kicker">
                  Forces naturelles
                </span>

                <h3>
                  Une Maison 12 équilibrée
                </h3>

                <ul>
                  {HOUSE_STRENGTHS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="house-twelve-list-card">
                <span className="house-twelve-kicker">
                  Points d’attention
                </span>

                <h3>
                  Les défis possibles
                </h3>

                <ul>
                  {HOUSE_CHALLENGES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Les planètes en Maison 12
            </h2>

            <p>
              Une planète présente en Maison 12 agit souvent de
              manière intérieure, discrète ou inconsciente.
            </p>

            <p>
              Son énergie peut être difficile à reconnaître au
              début, mais elle devient une grande force
              lorsqu’elle est comprise et exprimée
              consciemment.
            </p>

            <div className="house-twelve-planets-grid">
              {PLANETS_IN_HOUSE.map((planet) => (
                <article
                  className="house-twelve-planet-card"
                  key={planet.name}
                >
                  <div className="house-twelve-planet-symbol">
                    {planet.symbol}
                  </div>

                  <div>
                    <h3>
                      {planet.name} en Maison 12
                    </h3>

                    <p>{planet.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Les douze signes dans la Maison 12
            </h2>

            <p>
              Le signe placé sur la cuspide de la Maison 12
              décrit votre manière de vivre la solitude,
              l’intuition, les peurs inconscientes et la
              guérison intérieure.
            </p>

            <p>
              Il montre également les qualités cachées que vous
              devez progressivement reconnaître et intégrer.
            </p>

            <div className="house-twelve-signs-grid">
              {SIGNS_IN_HOUSE.map((item) => (
                <article
                  className="house-twelve-sign-card"
                  key={item.sign}
                >
                  <div className="house-twelve-sign-symbol">
                    {item.symbol}
                  </div>

                  <div>
                    <h3>
                      Maison 12 en {item.sign}
                    </h3>

                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>
              Maison 12 vide : que signifie-t-elle ?
            </h2>

            <p>
              Une Maison 12 vide ne signifie pas une absence de
              vie intérieure, de rêves ou de spiritualité.
            </p>

            <p>
              Toutes les maisons restent actives. Il faut
              observer le signe situé sur la cuspide de la
              Maison 12 et la planète qui gouverne ce signe.
            </p>

            <p>
              La position de cette planète maîtresse montre
              comment et dans quel domaine les thèmes de
              l’inconscient, du retrait et de la libération
              cherchent à s’exprimer.
            </p>
          </section>

          <section>
            <h2>
              La planète maîtresse de la Maison 12
            </h2>

            <p>
              La planète maîtresse de la Maison 12 est celle
              qui gouverne le signe situé au début de cette
              maison.
            </p>

            <p>
              Sa position par signe, par maison et par aspect
              apporte des informations importantes sur votre
              monde intérieur, vos peurs cachées, votre
              intuition et votre processus de guérison.
            </p>

            <div className="house-twelve-rulers-grid">
              <div className="house-twelve-ruler-card">
                <span>♈</span>
                <h3>Bélier</h3>
                <p>Mars</p>
              </div>

              <div className="house-twelve-ruler-card">
                <span>♉</span>
                <h3>Taureau</h3>
                <p>Vénus</p>
              </div>

              <div className="house-twelve-ruler-card">
                <span>♊</span>
                <h3>Gémeaux</h3>
                <p>Mercure</p>
              </div>

              <div className="house-twelve-ruler-card">
                <span>♋</span>
                <h3>Cancer</h3>
                <p>Lune</p>
              </div>

              <div className="house-twelve-ruler-card">
                <span>♌</span>
                <h3>Lion</h3>
                <p>Soleil</p>
              </div>

              <div className="house-twelve-ruler-card">
                <span>♍</span>
                <h3>Vierge</h3>
                <p>Mercure</p>
              </div>

              <div className="house-twelve-ruler-card">
                <span>♎</span>
                <h3>Balance</h3>
                <p>Vénus</p>
              </div>

              <div className="house-twelve-ruler-card">
                <span>♏</span>
                <h3>Scorpion</h3>
                <p>Pluton et Mars</p>
              </div>

              <div className="house-twelve-ruler-card">
                <span>♐</span>
                <h3>Sagittaire</h3>
                <p>Jupiter</p>
              </div>

              <div className="house-twelve-ruler-card">
                <span>♑</span>
                <h3>Capricorne</h3>
                <p>Saturne</p>
              </div>

              <div className="house-twelve-ruler-card">
                <span>♒</span>
                <h3>Verseau</h3>
                <p>Uranus et Saturne</p>
              </div>

              <div className="house-twelve-ruler-card">
                <span>♓</span>
                <h3>Poissons</h3>
                <p>Neptune et Jupiter</p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Maison 6 et Maison 12 : quelle différence ?
            </h2>

            <div className="house-twelve-comparison-grid">
              <article className="house-twelve-comparison-card">
                <span className="house-twelve-kicker">
                  Maison 6
                </span>

                <h3>
                  Votre organisation quotidienne
                </h3>

                <p>
                  La Maison 6 représente les habitudes, le
                  travail quotidien, le service, l’organisation
                  et l’entretien concret de l’équilibre.
                </p>
              </article>

              <article className="house-twelve-comparison-card">
                <span className="house-twelve-kicker">
                  Maison 12
                </span>

                <h3>
                  Votre guérison intérieure
                </h3>

                <p>
                  La Maison 12 représente le retrait,
                  l’inconscient, les rêves, la spiritualité et
                  les processus de libération intérieure.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              Maison 8 et Maison 12 : quelle différence ?
            </h2>

            <div className="house-twelve-comparison-grid">
              <article className="house-twelve-comparison-card">
                <span className="house-twelve-kicker">
                  Maison 8
                </span>

                <h3>
                  La transformation profonde
                </h3>

                <p>
                  La Maison 8 représente les crises, l’intimité,
                  les ressources partagées, le pouvoir et les
                  transformations vécues avec les autres.
                </p>
              </article>

              <article className="house-twelve-comparison-card">
                <span className="house-twelve-kicker">
                  Maison 12
                </span>

                <h3>
                  La dissolution et la libération
                </h3>

                <p>
                  La Maison 12 représente les fins de cycle, le
                  retrait, les secrets, l’inconscient et la
                  nécessité de relâcher ce qui appartient au
                  passé.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              Maison 1 et Maison 12 : quelle différence ?
            </h2>

            <div className="house-twelve-comparison-grid">
              <article className="house-twelve-comparison-card">
                <span className="house-twelve-kicker">
                  Maison 12
                </span>

                <h3>
                  La fin du cycle
                </h3>

                <p>
                  La Maison 12 représente le retrait, la
                  libération, les souvenirs et tout ce qui doit
                  être intégré avant un nouveau commencement.
                </p>
              </article>

              <article className="house-twelve-comparison-card">
                <span className="house-twelve-kicker">
                  Maison 1
                </span>

                <h3>
                  Le nouveau départ
                </h3>

                <p>
                  La Maison 1 représente l’identité, l’action,
                  l’affirmation de soi et la manière d’entrer
                  dans un nouveau cycle.
                </p>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 12 dans votre évolution personnelle
            </h2>

            <p>
              La Maison 12 vous invite à ralentir, à écouter
              votre monde intérieur et à reconnaître les
              blessures ou les peurs que vous avez longtemps
              évitées.
            </p>

            <p>
              Elle vous apprend à faire preuve de compassion
              envers vous-même, à poser des limites et à
              abandonner ce qui vous maintient dans le passé.
            </p>

            <p>
              Son évolution consiste à transformer l’isolement
              en introspection, la peur en compréhension et la
              fin d’un cycle en préparation d’un nouveau départ.
            </p>
          </section>

          <section>
            <h2>
              Comment interpréter votre Maison 12 ?
            </h2>

            <div className="house-twelve-steps">
              <article className="house-twelve-step-card">
                <span>1</span>

                <div>
                  <h3>
                    Identifiez le signe de la Maison 12
                  </h3>

                  <p>
                    Il décrit votre manière de vivre la
                    solitude, l’intuition, les peurs
                    inconscientes et la guérison intérieure.
                  </p>
                </div>
              </article>

              <article className="house-twelve-step-card">
                <span>2</span>

                <div>
                  <h3>
                    Repérez sa planète maîtresse
                  </h3>

                  <p>
                    Sa position montre où les thèmes de
                    l’inconscient, du retrait et de la
                    libération cherchent à s’exprimer.
                  </p>
                </div>
              </article>

              <article className="house-twelve-step-card">
                <span>3</span>

                <div>
                  <h3>
                    Observez les planètes présentes
                  </h3>

                  <p>
                    Chaque planète influence votre vie
                    intérieure, vos rêves, vos peurs et votre
                    manière de vous ressourcer.
                  </p>
                </div>
              </article>

              <article className="house-twelve-step-card">
                <span>4</span>

                <div>
                  <h3>
                    Analysez les aspects
                  </h3>

                  <p>
                    Les aspects précisent les forces, les
                    tensions et les apprentissages liés à votre
                    inconscient et à votre guérison.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2>
              La Maison 12 dans votre thème natal
            </h2>

            <p>
              La Maison 12 doit être interprétée avec
              l’ensemble du thème natal. Son signe, sa planète
              maîtresse, les planètes présentes et leurs
              aspects précisent sa signification.
            </p>

            <p>
              Cette analyse peut vous aider à mieux comprendre
              votre intuition, vos rêves, vos besoins de
              solitude et les mécanismes intérieurs qui
              influencent votre parcours.
            </p>

            <div className="house-twelve-cta-card">
              <div>
                <span className="house-twelve-kicker">
                  Découvrez votre thème natal
                </span>

                <h2>
                  Quel signe et quelles planètes se trouvent dans votre Maison 12 ?
                </h2>

                <p>
                  Générez gratuitement votre carte du ciel pour
                  découvrir vos maisons astrologiques, vos
                  planètes et les grandes dynamiques de votre
                  thème natal.
                </p>
              </div>

              <Link
                href="/carte-du-ciel"
                className="house-twelve-primary-button"
              >
                Créer ma carte du ciel
              </Link>
            </div>
          </section>

          <section className="house-twelve-navigation">
            <span className="house-twelve-kicker">
              Les maisons astrologiques
            </span>

            <h2>
              Continuer votre exploration
            </h2>

            <div className="house-twelve-navigation-grid">
              <Link
                href="/astrologie/maisons/maison-11"
                className="house-twelve-navigation-card"
              >
                <span>Ⅺ</span>

                <div>
                  <h3>Maison 11</h3>

                  <p>
                    Amitiés, réseaux, projets collectifs,
                    communautés, espoirs et avenir.
                  </p>
                </div>
              </Link>

              <Link
                href="/astrologie/maisons"
                className="house-twelve-navigation-card"
              >
                <span>☾</span>

                <div>
                  <h3>Les 12 maisons</h3>

                  <p>
                    Découvrez la signification de toutes les
                    maisons astrologiques.
                  </p>
                </div>
              </Link>

              <Link
                href="/astrologie/maisons/maison-1"
                className="house-twelve-navigation-card"
              >
                <span>Ⅰ</span>

                <div>
                  <h3>Maison 1</h3>

                  <p>
                    Identité, apparence, personnalité,
                    affirmation de soi et nouveau départ.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <section className="house-twelve-faq">
            <span className="house-twelve-kicker">
              Questions fréquentes
            </span>

            <h2>
              Questions sur la Maison 12
            </h2>

            <div className="house-twelve-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="house-twelve-faq-item"
                  key={item.question}
                >
                  <summary>{item.question}</summary>

                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="house-twelve-disclaimer">
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
