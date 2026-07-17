import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";

import "../page.css";
import "../horoscope.css";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type HoroscopeSign = {
  nom: string;
  slug: string;
  symbole: string;
  dates: string;
  element: string;
  qualite: string;
  couleur: string;
  nombre: number;
};

type PageProps = {
  params: Promise<{
    signe: string;
  }>;
};

/*
|--------------------------------------------------------------------------
| Signes astrologiques
|--------------------------------------------------------------------------
*/

const SIGNES: HoroscopeSign[] = [
  {
    nom: "Bélier",
    slug: "belier",
    symbole: "♈",
    dates: "21 mars au 19 avril",
    element: "Feu",
    qualite: "initiative",
    couleur: "Rouge",
    nombre: 1,
  },
  {
    nom: "Taureau",
    slug: "taureau",
    symbole: "♉",
    dates: "20 avril au 20 mai",
    element: "Terre",
    qualite: "stabilité",
    couleur: "Vert",
    nombre: 6,
  },
  {
    nom: "Gémeaux",
    slug: "gemeaux",
    symbole: "♊",
    dates: "21 mai au 20 juin",
    element: "Air",
    qualite: "communication",
    couleur: "Jaune",
    nombre: 5,
  },
  {
    nom: "Cancer",
    slug: "cancer",
    symbole: "♋",
    dates: "21 juin au 22 juillet",
    element: "Eau",
    qualite: "sensibilité",
    couleur: "Blanc",
    nombre: 2,
  },
  {
    nom: "Lion",
    slug: "lion",
    symbole: "♌",
    dates: "23 juillet au 22 août",
    element: "Feu",
    qualite: "confiance",
    couleur: "Or",
    nombre: 9,
  },
  {
    nom: "Vierge",
    slug: "vierge",
    symbole: "♍",
    dates: "23 août au 22 septembre",
    element: "Terre",
    qualite: "organisation",
    couleur: "Beige",
    nombre: 4,
  },
  {
    nom: "Balance",
    slug: "balance",
    symbole: "♎",
    dates: "23 septembre au 22 octobre",
    element: "Air",
    qualite: "harmonie",
    couleur: "Rose",
    nombre: 7,
  },
  {
    nom: "Scorpion",
    slug: "scorpion",
    symbole: "♏",
    dates: "23 octobre au 21 novembre",
    element: "Eau",
    qualite: "transformation",
    couleur: "Bordeaux",
    nombre: 8,
  },
  {
    nom: "Sagittaire",
    slug: "sagittaire",
    symbole: "♐",
    dates: "22 novembre au 21 décembre",
    element: "Feu",
    qualite: "expansion",
    couleur: "Violet",
    nombre: 3,
  },
  {
    nom: "Capricorne",
    slug: "capricorne",
    symbole: "♑",
    dates: "22 décembre au 19 janvier",
    element: "Terre",
    qualite: "discipline",
    couleur: "Brun",
    nombre: 10,
  },
  {
    nom: "Verseau",
    slug: "verseau",
    symbole: "♒",
    dates: "20 janvier au 18 février",
    element: "Air",
    qualite: "innovation",
    couleur: "Bleu électrique",
    nombre: 11,
  },
  {
    nom: "Poissons",
    slug: "poissons",
    symbole: "♓",
    dates: "19 février au 20 mars",
    element: "Eau",
    qualite: "intuition",
    couleur: "Turquoise",
    nombre: 12,
  },
];

/*
|--------------------------------------------------------------------------
| Recherche du signe
|--------------------------------------------------------------------------
*/

function getSigne(slug: string) {
  return SIGNES.find(
    (signe) => signe.slug === slug
  );
}

/*
|--------------------------------------------------------------------------
| Date du jour
|--------------------------------------------------------------------------
*/

function getDateDuJour() {
  return new Intl.DateTimeFormat(
    "fr-CA",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "America/Toronto",
    }
  ).format(new Date());
}

/*
|--------------------------------------------------------------------------
| Horoscope quotidien automatique
|--------------------------------------------------------------------------
|
| Le contenu est sélectionné selon :
|
| - la date du jour;
| - le signe astrologique;
| - un décalage différent pour chaque rubrique.
|
| Le contenu change donc automatiquement chaque jour.
|
|--------------------------------------------------------------------------
*/

function getHoroscopeDuJour(
  signe: HoroscopeSign
) {
  const dateKey =
    new Intl.DateTimeFormat(
      "en-CA",
      {
        timeZone: "America/Toronto",
      }
    ).format(new Date());

  const seed = Array.from(
    `${dateKey}-${signe.slug}`
  ).reduce(
    (total, caractere) =>
      total +
      caractere.charCodeAt(0),
    0
  );

  const choisir = (
    textes: string[],
    decalage: number
  ) =>
    textes[
      (seed + decalage) %
        textes.length
    ];

  return {
    energie: choisir(
      [
        `Une énergie de ${signe.qualite} accompagne votre journée. Avancez avec confiance, sans chercher à tout contrôler immédiatement.`,

        `La journée vous invite à miser sur votre ${signe.qualite}. Une décision simple pourrait clarifier une situation restée floue.`,

        `Votre nature ${signe.element.toLowerCase()} vous aide à retrouver votre élan. Écoutez ce qui vous semble juste avant d’agir.`,

        `Un changement de rythme pourrait vous être bénéfique aujourd’hui. Accordez de la place à ce qui nourrit réellement votre équilibre.`,

        `Votre énergie évolue progressivement au fil de la journée. Prenez le temps d’observer avant de choisir votre prochaine direction.`,

        `Une nouvelle perspective pourrait vous aider à comprendre une situation autrement. Restez disponible aux idées inattendues.`,

        `La journée favorise les gestes simples et les décisions cohérentes. Votre ${signe.qualite} peut vous aider à avancer avec assurance.`,

        `Vous pourriez ressentir le besoin de revenir à l’essentiel. Ne vous dispersez pas dans des situations qui ne vous ressemblent plus.`,

        `Une énergie plus lumineuse vous accompagne aujourd’hui. Profitez-en pour reprendre confiance dans un projet ou une décision.`,

        `Votre sensibilité aux ambiances sera plus forte. Choisissez soigneusement les personnes et les environnements qui vous entourent.`,
      ],
      1
    ),

    amour: choisir(
      [
        "Les échanges gagnent à rester simples et sincères. Une parole bien choisie peut rapprocher les cœurs.",

        "Prenez le temps d’écouter avant de répondre. La douceur favorisera une meilleure compréhension dans vos relations.",

        "Une belle occasion de créer de la complicité pourrait se présenter. Restez ouvert sans forcer les choses.",

        "Votre vie affective demande de la présence plus que de grandes promesses. Les petits gestes auront beaucoup de valeur.",

        "Une discussion honnête pourrait dissiper un doute. Exprimez vos besoins sans chercher à imposer votre point de vue.",

        "Une personne pourrait vous surprendre par son attention ou sa disponibilité. Accueillez ce geste avec simplicité.",

        "Vous pourriez ressentir le besoin d’être rassuré. Évitez toutefois de chercher des réponses dans chaque silence.",

        "Une énergie de rapprochement favorise les échanges. Célibataire, une rencontre légère pourrait éveiller votre curiosité.",

        "Votre intuition relationnelle sera particulièrement forte. Faites-lui confiance, mais évitez les conclusions trop rapides.",

        "L’harmonie passe aujourd’hui par un équilibre entre proximité et liberté. Respectez votre rythme autant que celui de l’autre.",
      ],
      2
    ),

    travail: choisir(
      [
        "Une tâche qui semblait lourde pourrait avancer plus facilement avec une méthode claire et quelques priorités bien choisies.",

        "Votre concentration sera votre meilleure alliée. Évitez de disperser votre énergie dans trop de directions.",

        "Une idée mérite d’être notée ou partagée. Elle pourrait devenir plus importante que vous ne le pensez.",

        "Le climat favorise les ajustements intelligents. Corrigez ce qui doit l’être sans remettre tout votre plan en question.",

        "Une conversation professionnelle pourrait vous aider à mieux comprendre les attentes d’une personne ou d’un projet.",

        "Vous pourriez recevoir une information utile. Prenez le temps de l’analyser avant de modifier votre organisation.",

        "Votre constance portera davantage ses fruits que la précipitation. Avancez étape par étape.",

        "Une responsabilité supplémentaire pourrait se présenter. Vérifiez votre disponibilité avant de vous engager.",

        "Une solution plus simple pourrait remplacer une méthode devenue trop compliquée. Osez revoir votre façon de faire.",

        "Votre travail pourrait être remarqué aujourd’hui. Restez professionnel et laissez vos résultats parler pour vous.",
      ],
      3
    ),

    finances: choisir(
      [
        "La prudence reste préférable pour les dépenses impulsives. Vérifiez vos priorités avant de prendre une décision.",

        "Une meilleure organisation de vos dépenses pourrait vous apporter un sentiment de contrôle et de tranquillité.",

        "Évitez les décisions prises sous le coup de l’émotion. Une courte réflexion peut faire une vraie différence.",

        "La journée convient davantage à la planification qu’aux grands risques financiers.",

        "Une petite économie réalisée aujourd’hui pourrait devenir plus importante avec le temps. Pensez à long terme.",

        "Vous pourriez être tenté de vous offrir quelque chose pour compenser une émotion. Accordez-vous quelques heures avant d’acheter.",

        "Un détail administratif ou financier mérite votre attention. Une vérification rapide pourrait éviter une erreur.",

        "La stabilité financière passe aujourd’hui par la modération. Vous n’avez pas besoin de tout régler immédiatement.",

        "Une discussion concernant l’argent gagnerait à être claire et précise. Évitez les suppositions.",

        "Votre intuition peut vous alerter sur une dépense ou une proposition. Prenez le temps de vérifier les conditions.",
      ],
      4
    ),

    bienEtre: choisir(
      [
        "Votre corps pourrait réclamer un rythme plus régulier. Hydratation, mouvement doux et repos seront bénéfiques.",

        "Accordez-vous quelques minutes de calme pour relâcher la tension mentale accumulée.",

        "Une activité simple à l’extérieur pourrait vous aider à retrouver plus d’énergie.",

        "Respectez vos limites sans culpabilité. Votre équilibre dépend aussi de votre capacité à ralentir.",

        "Une routine légère pourrait vous faire beaucoup de bien. Évitez de surcharger votre journée inutilement.",

        "Votre énergie pourrait varier selon les moments. Adaptez votre rythme au lieu de lutter contre votre fatigue.",

        "Un moment loin des écrans vous aiderait à retrouver davantage de présence et de calme intérieur.",

        "Votre bien-être passe aujourd’hui par des choix simples : respirer, marcher, vous hydrater et dormir suffisamment.",

        "Une tension émotionnelle pourrait se manifester physiquement. Prenez le temps de relâcher votre corps.",

        "Vous pourriez bénéficier d’un environnement plus calme. Accordez-vous un espace où vous n’avez rien à prouver.",
      ],
      5
    ),

    conseil: choisir(
      [
        "Faites aujourd’hui un pas concret plutôt que d’attendre le moment parfait.",

        "Choisissez ce qui vous apporte de la clarté, pas ce qui nourrit la confusion.",

        "Ne sous-estimez pas la puissance d’une décision calme et réfléchie.",

        "Votre intuition peut vous guider, mais prenez aussi le temps de vérifier les faits.",

        "Ne dépensez pas votre énergie à convaincre les personnes qui refusent de vous comprendre.",

        "Ce qui avance lentement peut tout de même avancer dans la bonne direction.",

        "Une limite clairement exprimée vaut mieux qu’un silence rempli de frustration.",

        "Faites confiance à ce que vous ressentez, sans laisser la peur décider à votre place.",

        "Donnez votre attention à ce que vous pouvez réellement améliorer aujourd’hui.",

        "Vous n’avez pas besoin de tout comprendre immédiatement pour continuer à avancer.",
      ],
      6
    ),
  };
}

/*
|--------------------------------------------------------------------------
| Génération des 12 routes
|--------------------------------------------------------------------------
*/

export async function generateStaticParams() {
  return SIGNES.map(
    (signe) => ({
      signe: signe.slug,
    })
  );
}

/*
|--------------------------------------------------------------------------
| Métadonnées SEO dynamiques
|--------------------------------------------------------------------------
*/

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { signe: slug } =
    await params;

  const signe =
    getSigne(slug);

  if (!signe) {
    return {
      title:
        "Horoscope introuvable | Luna Astralis",
      description:
        "Cet horoscope astrologique est introuvable.",
    };
  }

  const title =
    `Horoscope ${signe.nom} du jour gratuit | Luna Astralis`;

  const description =
    `Découvrez gratuitement l’horoscope du jour du signe ${signe.nom} : amour, travail, finances, bien-être et conseil astrologique.`;

  const canonical =
    `https://luna-astralis.app/horoscope/${signe.slug}`;

  return {
    title,
    description,

    alternates: {
      canonical,
    },

    openGraph: {
      title,
      description,
      url: canonical,
      siteName:
        "Luna Astralis",
      locale:
        "fr_CA",
      type:
        "article",
    },
  };
}

/*
|--------------------------------------------------------------------------
| Page Horoscope par signe
|--------------------------------------------------------------------------
*/

export default async function HoroscopeSignePage({
  params,
}: PageProps) {
  const { signe: slug } =
    await params;

  const signe =
    getSigne(slug);

  if (!signe) {
    notFound();
  }

  const horoscope =
    getHoroscopeDuJour(
      signe
    );

  const dateDuJour =
    getDateDuJour();

  const indexActuel =
    SIGNES.findIndex(
      (element) =>
        element.slug ===
        signe.slug
    );

  const signePrecedent =
    SIGNES[
      (
        indexActuel -
        1 +
        SIGNES.length
      ) %
        SIGNES.length
    ];

  const signeSuivant =
    SIGNES[
      (
        indexActuel +
        1
      ) %
        SIGNES.length
    ];

  return (
    <AuthProvider>
      <SiteHeader />

      <main className="horoscope-page">
        {/* Hero */}

        <section className="horoscope-hero">
          <div className="horoscope-hero-glow" />

          <div className="horoscope-hero-content">
            <span
              className="horoscope-sign-symbol"
              aria-hidden="true"
            >
              {signe.symbole}
            </span>

            <span className="horoscope-eyebrow">
              ✨ Mis à jour chaque jour
            </span>

            <h1>
              Horoscope{" "}
              {signe.nom} du jour
            </h1>

            <p className="horoscope-date">
              {dateDuJour}
            </p>

            <p className="horoscope-intro">
              Découvrez les
              principales tendances
              de votre journée en
              amour, au travail,
              dans vos finances et
              votre bien-être.
            </p>

            <div className="horoscope-sign-meta">
              <span>
                {signe.dates}
              </span>

              <span>
                Élément{" "}
                {signe.element}
              </span>
            </div>
          </div>
        </section>

        {/* Horoscope du jour */}

        <section className="horoscope-daily-section">
          <div className="horoscope-daily-grid">
            <article className="horoscope-daily-card horoscope-daily-card-wide">
              <span
                className="horoscope-daily-icon"
                aria-hidden="true"
              >
                ✦
              </span>

              <div>
                <h2>
                  Énergie du jour
                </h2>

                <p>
                  {
                    horoscope.energie
                  }
                </p>
              </div>
            </article>

            <article className="horoscope-daily-card">
              <span
                className="horoscope-daily-icon"
                aria-hidden="true"
              >
                ♡
              </span>

              <div>
                <h2>
                  Amour
                </h2>

                <p>
                  {
                    horoscope.amour
                  }
                </p>
              </div>
            </article>

            <article className="horoscope-daily-card">
              <span
                className="horoscope-daily-icon"
                aria-hidden="true"
              >
                ◇
              </span>

              <div>
                <h2>
                  Travail
                </h2>

                <p>
                  {
                    horoscope.travail
                  }
                </p>
              </div>
            </article>

            <article className="horoscope-daily-card">
              <span
                className="horoscope-daily-icon"
                aria-hidden="true"
              >
                $
              </span>

              <div>
                <h2>
                  Finances
                </h2>

                <p>
                  {
                    horoscope.finances
                  }
                </p>
              </div>
            </article>

            <article className="horoscope-daily-card">
              <span
                className="horoscope-daily-icon"
                aria-hidden="true"
              >
                ☾
              </span>

              <div>
                <h2>
                  Bien-être
                </h2>

                <p>
                  {
                    horoscope.bienEtre
                  }
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Conseil du jour */}

        <section className="horoscope-advice-section">
          <div className="horoscope-advice-card">
            <span className="horoscope-section-kicker">
              Conseil astrologique
            </span>

            <h2>
              Votre conseil du jour
            </h2>

            <p>
              {horoscope.conseil}
            </p>

            <div className="horoscope-lucky-grid">
              <div>
                <span>
                  Nombre du jour
                </span>

                <strong>
                  {signe.nombre}
                </strong>
              </div>

              <div>
                <span>
                  Couleur du jour
                </span>

                <strong>
                  {signe.couleur}
                </strong>
              </div>

              <div>
                <span>
                  Force à privilégier
                </span>

                <strong>
                  {signe.qualite}
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* Carte du ciel */}

        <section className="horoscope-cta-section">
          <div className="horoscope-cta">
            <span className="horoscope-cta-kicker">
              🌌 Votre astrologie personnelle
            </span>

            <h2>
              Votre horoscope
              général n’est qu’un
              aperçu
            </h2>

            <p>
              Votre carte du ciel
              tient compte de votre
              date, de votre heure
              et de votre lieu de
              naissance pour offrir
              une lecture beaucoup
              plus personnelle.
            </p>

            <div className="horoscope-cta-actions">
              <Link
                href="/carte-du-ciel"
                className="horoscope-primary-button"
              >
                Créer ma carte du
                ciel gratuite
              </Link>

              <Link
                href="/compatibilite"
                className="horoscope-secondary-button"
              >
                Tester une
                compatibilité
              </Link>
            </div>
          </div>
        </section>

        {/* Horoscope Premium */}

        <section className="horoscope-premium-section">
          <div className="horoscope-premium-card">
            <span className="horoscope-premium-kicker">
              🌙 Luna Astralis
              Premium
            </span>

            <h2>
              Découvrez votre
              horoscope personnalisé
            </h2>

            <p className="horoscope-premium-intro">
              L’horoscope gratuit
              présente les grandes
              tendances de votre
              signe solaire. Votre
              horoscope Premium sera
              calculé selon votre
              date, votre heure et
              votre lieu de
              naissance.
            </p>

            <div className="horoscope-premium-offers">
              <article className="horoscope-premium-offer">
                <span
                  className="horoscope-premium-offer-icon"
                  aria-hidden="true"
                >
                  ✨
                </span>

                <div>
                  <h3>
                    Horoscope Premium
                    du jour
                  </h3>

                  <p>
                    Une lecture
                    approfondie des
                    énergies qui vous
                    accompagnent
                    aujourd’hui.
                  </p>
                </div>
              </article>

              <article className="horoscope-premium-offer">
                <span
                  className="horoscope-premium-offer-icon"
                  aria-hidden="true"
                >
                  📅
                </span>

                <div>
                  <h3>
                    Horoscope Premium
                    du mois
                  </h3>

                  <p>
                    Vos grandes
                    périodes, vos
                    opportunités et
                    les moments à
                    surveiller durant
                    le mois.
                  </p>
                </div>
              </article>

              <article className="horoscope-premium-offer">
                <span
                  className="horoscope-premium-offer-icon"
                  aria-hidden="true"
                >
                  🌟
                </span>

                <div>
                  <h3>
                    Horoscope Premium
                    de l’année
                  </h3>

                  <p>
                    Une vision
                    complète de votre
                    année en amour,
                    au travail, dans
                    vos finances et
                    votre évolution.
                  </p>
                </div>
              </article>
            </div>

            <ul className="horoscope-premium-list">
              <li>
                <span
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>
                  Analyse basée sur
                  votre naissance
                </span>
              </li>

              <li>
                <span
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>
                  Transits
                  astrologiques
                  personnalisés
                </span>
              </li>

              <li>
                <span
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>
                  Amour, travail,
                  argent et
                  bien-être
                </span>
              </li>

              <li>
                <span
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>
                  Conseils
                  approfondis et
                  périodes clés
                </span>
              </li>
            </ul>

            <div className="horoscope-premium-actions">
              <Link
                href="/horoscope/premium"
                className="horoscope-premium-button"
              >
                Découvrir
                l’Horoscope Premium
              </Link>

              <p className="horoscope-premium-note">
                Horoscope du jour,
                du mois et de
                l’année
              </p>
            </div>
          </div>
        </section>

        {/* Navigation entre les signes */}

        <nav
          className="horoscope-sign-navigation"
          aria-label="Navigation entre les horoscopes"
        >
          <Link
            href={`/horoscope/${signePrecedent.slug}`}
          >
            <span aria-hidden="true">
              ←
            </span>

            Horoscope{" "}
            {signePrecedent.nom}
          </Link>

          <Link href="/horoscope">
            Tous les horoscopes
          </Link>

          <Link
            href={`/horoscope/${signeSuivant.slug}`}
          >
            Horoscope{" "}
            {signeSuivant.nom}

            <span aria-hidden="true">
              →
            </span>
          </Link>
        </nav>
      </main>
    </AuthProvider>
  );
}
