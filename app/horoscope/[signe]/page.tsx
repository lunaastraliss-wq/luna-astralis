import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";

import "../page.css";
import "../horoscope.css";

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

type PageProps = {
  params: Promise<{
    signe: string;
  }>;
};

function getSigne(slug: string) {
  return SIGNES.find((signe) => signe.slug === slug);
}

function getDateDuJour() {
  return new Intl.DateTimeFormat("fr-CA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Toronto",
  }).format(new Date());
}

function getHoroscopeDuJour(signe: HoroscopeSign) {
  const dateKey = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
  }).format(new Date());

  const seed = Array.from(`${dateKey}-${signe.slug}`).reduce(
    (total, caractere) => total + caractere.charCodeAt(0),
    0
  );

  const choisir = (textes: string[], decalage: number) =>
    textes[(seed + decalage) % textes.length];

  return {
    energie: choisir(
      [
        `Une énergie de ${signe.qualite} accompagne votre journée. Avancez avec confiance, sans chercher à tout contrôler immédiatement.`,
        `La journée vous invite à miser sur votre ${signe.qualite}. Une décision simple pourrait clarifier une situation restée floue.`,
        `Votre nature ${signe.element.toLowerCase()} vous aide à retrouver votre élan. Écoutez ce qui vous semble juste avant d’agir.`,
        `Un changement de rythme pourrait vous être bénéfique aujourd’hui. Accordez de la place à ce qui nourrit réellement votre équilibre.`,
      ],
      1
    ),
    amour: choisir(
      [
        "Les échanges gagnent à rester simples et sincères. Une parole bien choisie peut rapprocher les cœurs.",
        "Prenez le temps d’écouter avant de répondre. La douceur favorisera une meilleure compréhension dans vos relations.",
        "Une belle occasion de créer de la complicité pourrait se présenter. Restez ouvert sans forcer les choses.",
        "Votre vie affective demande de la présence plus que de grandes promesses. Les petits gestes auront beaucoup de valeur.",
      ],
      2
    ),
    travail: choisir(
      [
        "Une tâche qui semblait lourde pourrait avancer plus facilement avec une méthode claire et quelques priorités bien choisies.",
        "Votre concentration sera votre meilleure alliée. Évitez de disperser votre énergie dans trop de directions.",
        "Une idée mérite d’être notée ou partagée. Elle pourrait devenir plus importante que vous ne le pensez.",
        "Le climat favorise les ajustements intelligents. Corrigez ce qui doit l’être sans remettre tout votre plan en question.",
      ],
      3
    ),
    finances: choisir(
      [
        "La prudence reste préférable pour les dépenses impulsives. Vérifiez vos priorités avant de prendre une décision.",
        "Une meilleure organisation de vos dépenses pourrait vous apporter un sentiment de contrôle et de tranquillité.",
        "Évitez les décisions prises sous le coup de l’émotion. Une courte réflexion peut faire une vraie différence.",
        "La journée convient davantage à la planification qu’aux grands risques financiers.",
      ],
      4
    ),
    bienEtre: choisir(
      [
        "Votre corps pourrait réclamer un rythme plus régulier. Hydratation, mouvement doux et repos seront bénéfiques.",
        "Accordez-vous quelques minutes de calme pour relâcher la tension mentale accumulée.",
        "Une activité simple à l’extérieur pourrait vous aider à retrouver plus d’énergie.",
        "Respectez vos limites sans culpabilité. Votre équilibre dépend aussi de votre capacité à ralentir.",
      ],
      5
    ),
    conseil: choisir(
      [
        "Faites aujourd’hui un pas concret plutôt que d’attendre le moment parfait.",
        "Choisissez ce qui vous apporte de la clarté, pas ce qui nourrit la confusion.",
        "Ne sous-estimez pas la puissance d’une décision calme et réfléchie.",
        "Votre intuition peut vous guider, mais prenez aussi le temps de vérifier les faits.",
      ],
      6
    ),
  };
}

export async function generateStaticParams() {
  return SIGNES.map((signe) => ({
    signe: signe.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { signe: slug } = await params;
  const signe = getSigne(slug);

  if (!signe) {
    return {
      title: "Horoscope introuvable | Luna Astralis",
    };
  }

  const title = `Horoscope ${signe.nom} du jour gratuit | Luna Astralis`;
  const description = `Découvrez gratuitement l’horoscope du jour du signe ${signe.nom} : amour, travail, finances, bien-être et conseil astrologique.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://luna-astralis.app/horoscope/${signe.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://luna-astralis.app/horoscope/${signe.slug}`,
      siteName: "Luna Astralis",
      locale: "fr_CA",
      type: "article",
    },
  };
}

export default async function HoroscopeSignePage({
  params,
}: PageProps) {
  const { signe: slug } = await params;
  const signe = getSigne(slug);

  if (!signe) {
    notFound();
  }

  const horoscope = getHoroscopeDuJour(signe);
  const dateDuJour = getDateDuJour();

  const indexActuel = SIGNES.findIndex(
    (element) => element.slug === signe.slug
  );

  const signePrecedent =
    SIGNES[
      (indexActuel - 1 + SIGNES.length) %
        SIGNES.length
    ];

  const signeSuivant =
    SIGNES[(indexActuel + 1) % SIGNES.length];

  return (
    <AuthProvider>
      <SiteHeader />

      <main className="horoscope-page">
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
              Horoscope quotidien gratuit
            </span>

            <h1>
              Horoscope {signe.nom} du jour
            </h1>

            <p className="horoscope-date">
              {dateDuJour}
            </p>

            <p className="horoscope-intro">
              Découvrez les principales tendances
              de votre journée en amour, au travail,
              dans vos finances et votre bien-être.
            </p>

            <div className="horoscope-sign-meta">
              <span>{signe.dates}</span>
              <span>Élément {signe.element}</span>
            </div>
          </div>
        </section>

        <section className="horoscope-daily-section">
          <div className="horoscope-daily-grid">
            <article className="horoscope-daily-card horoscope-daily-card-wide">
              <span className="horoscope-daily-icon">
                ✦
              </span>

              <div>
                <h2>Énergie du jour</h2>
                <p>{horoscope.energie}</p>
              </div>
            </article>

            <article className="horoscope-daily-card">
              <span className="horoscope-daily-icon">
                ♡
              </span>

              <div>
                <h2>Amour</h2>
                <p>{horoscope.amour}</p>
              </div>
            </article>

            <article className="horoscope-daily-card">
              <span className="horoscope-daily-icon">
                ◇
              </span>

              <div>
                <h2>Travail</h2>
                <p>{horoscope.travail}</p>
              </div>
            </article>

            <article className="horoscope-daily-card">
              <span className="horoscope-daily-icon">
                $
              </span>

              <div>
                <h2>Finances</h2>
                <p>{horoscope.finances}</p>
              </div>
            </article>

            <article className="horoscope-daily-card">
              <span className="horoscope-daily-icon">
                ☾
              </span>

              <div>
                <h2>Bien-être</h2>
                <p>{horoscope.bienEtre}</p>
              </div>
            </article>
          </div>
        </section>

        <section className="horoscope-advice-section">
          <div className="horoscope-advice-card">
            <span className="horoscope-section-kicker">
              Conseil astrologique
            </span>

            <h2>Votre conseil du jour</h2>

            <p>{horoscope.conseil}</p>

            <div className="horoscope-lucky-grid">
              <div>
                <span>Nombre du jour</span>
                <strong>{signe.nombre}</strong>
              </div>

              <div>
                <span>Couleur du jour</span>
                <strong>{signe.couleur}</strong>
              </div>

              <div>
                <span>Force à privilégier</span>
                <strong>{signe.qualite}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="horoscope-cta-section">
          <div className="horoscope-cta">
            <span className="horoscope-cta-kicker">
              Votre astrologie personnelle
            </span>

            <h2>
              Votre horoscope général n’est qu’un
              aperçu
            </h2>

            <p>
              Votre carte du ciel tient compte de
              votre date, de votre heure et de votre
              lieu de naissance pour offrir une
              lecture beaucoup plus personnelle.
            </p>

            <div className="horoscope-cta-actions">
              <Link
                href="/carte-du-ciel"
                className="horoscope-primary-button"
              >
                Créer ma carte du ciel gratuite
              </Link>

              <Link
                href="/compatibilite"
                className="horoscope-secondary-button"
              >
                Tester une compatibilité
              </Link>
            </div>
          </div>
        </section>

        <nav
          className="horoscope-sign-navigation"
          aria-label="Navigation entre les horoscopes"
        >
          <Link
            href={`/horoscope/${signePrecedent.slug}`}
          >
            <span aria-hidden="true">←</span>
            Horoscope {signePrecedent.nom}
          </Link>

          <Link href="/horoscope">
            Tous les horoscopes
          </Link>

          <Link
            href={`/horoscope/${signeSuivant.slug}`}
          >
            Horoscope {signeSuivant.nom}
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </main>
    </AuthProvider>
  );
}
