import type { Metadata } from "next";

import NatalChartForm from "@/components/NatalChartForm";

import "./page.css";

const PAGE_URL =
  "https://luna-astralis.app/carte-du-ciel";

export const metadata: Metadata = {
  title:
    "Carte du ciel gratuite : thème astral et ascendant | Luna Astralis",

  description:
    "Créez gratuitement votre carte du ciel personnalisée. Découvrez votre Soleil, votre Lune, votre Ascendant, vos planètes, vos maisons et votre roue astrologique.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Carte du ciel gratuite : découvrez votre thème astral",
    description:
      "Générez gratuitement votre roue astrologique et découvrez votre Soleil, votre Lune, votre Ascendant et les positions de vos planètes.",
    url: PAGE_URL,
    siteName: "Luna Astralis",
    locale: "fr_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Carte du ciel gratuite | Luna Astralis",
    description:
      "Découvrez gratuitement votre thème astral, votre Ascendant et votre roue astrologique personnalisée.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const FAQ_ITEMS = [
  {
    question:
      "Qu’est-ce qu’une carte du ciel ?",
    answer:
      "Une carte du ciel, aussi appelée thème astral ou thème natal, représente la position des planètes, des signes, des maisons astrologiques et des principaux angles au moment précis de votre naissance.",
  },
  {
    question:
      "La carte du ciel est-elle vraiment gratuite ?",
    answer:
      "Oui. Vous pouvez générer gratuitement votre roue astrologique et découvrir notamment votre Soleil, votre Lune et votre Ascendant. Des rapports astrologiques plus détaillés sont ensuite proposés en option.",
  },
  {
    question:
      "De quelles informations ai-je besoin ?",
    answer:
      "Vous avez besoin de votre date de naissance, de votre heure de naissance et de votre ville de naissance. Une heure précise permet d’obtenir un Ascendant et des maisons astrologiques plus fiables.",
  },
  {
    question:
      "Quelle est la différence entre le signe astrologique et l’Ascendant ?",
    answer:
      "Le signe astrologique correspond généralement à la position du Soleil au moment de la naissance. L’Ascendant dépend de l’heure et du lieu de naissance et décrit votre manière spontanée d’aborder le monde.",
  },
  {
    question:
      "Que contient un thème astral ?",
    answer:
      "Un thème astral comprend le Soleil, la Lune, l’Ascendant, les planètes, les douze signes du zodiaque, les douze maisons astrologiques, les angles majeurs et les aspects entre les planètes.",
  },
  {
    question:
      "Que faire si je ne connais pas mon heure de naissance ?",
    answer:
      "Vous pouvez tout de même découvrir certaines positions planétaires, mais l’Ascendant et les maisons astrologiques peuvent être inexacts. Il est préférable de vérifier votre certificat de naissance ou de consulter votre famille.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Carte du ciel gratuite Luna Astralis",
  url: PAGE_URL,
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web",
  inLanguage: "fr-CA",
  description:
    "Outil gratuit permettant de générer une carte du ciel personnalisée à partir de la date, de l’heure et du lieu de naissance.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  provider: {
    "@type": "Organization",
    name: "Luna Astralis",
    url: "https://luna-astralis.app",
  },
};

export default function CarteDuCielPage() {
  return (
    <div className="page-astro">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="wrap astro-chart-page">
        <section
          className="astro-hero"
          aria-labelledby="carte-du-ciel-title"
        >
          <div className="astro-badge">
            ✨ Outil astrologique gratuit
          </div>

          <h1 id="carte-du-ciel-title">
            Carte du ciel gratuite et thème astral personnalisé
          </h1>

          <p className="section-sub">
            Créez gratuitement votre carte du ciel à partir de
            votre date, de votre heure et de votre lieu de
            naissance. Découvrez votre Soleil, votre Lune,
            votre Ascendant, vos planètes et votre roue
            astrologique personnalisée.
          </p>
        </section>

        <NatalChartForm />

        <article className="astro-seo-content">
          <section>
            <span className="astro-content-kicker">
              Comprendre votre ciel de naissance
            </span>

            <h2>
              Qu’est-ce qu’une carte du ciel ?
            </h2>

            <p>
              Une carte du ciel est une représentation du ciel
              au moment précis de votre naissance. Elle est
              également appelée thème astral, thème natal ou
              carte astrale. Elle montre la position du Soleil,
              de la Lune, des planètes, des douze signes du
              zodiaque et des maisons astrologiques.
            </p>

            <p>
              Contrairement à l’horoscope général, qui repose
              principalement sur le signe solaire, le thème
              natal est calculé à partir de vos informations
              personnelles de naissance. Deux personnes ayant
              le même signe astrologique peuvent donc posséder
              des cartes du ciel très différentes.
            </p>
          </section>

          <section>
            <h2>
              Comment calculer votre thème astral gratuitement ?
            </h2>

            <p>
              Pour générer votre carte du ciel gratuite, vous
              devez indiquer votre date de naissance, votre
              heure de naissance et votre ville de naissance.
              Ces informations permettent de reconstituer la
              position des astres au moment où vous êtes né.
            </p>

            <div className="astro-info-grid">
              <div className="astro-info-card">
                <h3>
                  Votre date de naissance
                </h3>

                <p>
                  Elle permet de calculer la position du Soleil,
                  de la Lune et des différentes planètes dans
                  les signes astrologiques.
                </p>
              </div>

              <div className="astro-info-card">
                <h3>
                  Votre heure de naissance
                </h3>

                <p>
                  Elle est essentielle pour déterminer votre
                  Ascendant, votre Milieu du Ciel et la
                  répartition de vos maisons astrologiques.
                </p>
              </div>

              <div className="astro-info-card">
                <h3>
                  Votre lieu de naissance
                </h3>

                <p>
                  La ville de naissance permet de calculer les
                  coordonnées géographiques et le fuseau
                  horaire associés à votre naissance.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Que révèle votre carte du ciel ?
            </h2>

            <p>
              Votre thème natal ne se limite pas à votre signe
              astrologique. Il rassemble plusieurs éléments qui
              décrivent différentes dimensions de votre
              personnalité, de votre sensibilité et de votre
              manière d’évoluer.
            </p>

            <div className="astro-info-grid">
              <div className="astro-info-card">
                <h3>
                  Le Soleil
                </h3>

                <p>
                  Il représente votre identité consciente,
                  votre volonté, votre vitalité et la direction
                  que vous cherchez à donner à votre vie.
                </p>
              </div>

              <div className="astro-info-card">
                <h3>
                  La Lune
                </h3>

                <p>
                  Elle décrit votre monde émotionnel, vos
                  besoins affectifs, vos réactions instinctives
                  et ce qui vous procure un sentiment de
                  sécurité.
                </p>
              </div>

              <div className="astro-info-card">
                <h3>
                  L’Ascendant
                </h3>

                <p>
                  Il révèle votre manière spontanée d’aborder
                  le monde, votre première impression et votre
                  façon de commencer de nouvelles expériences.
                </p>
              </div>

              <div className="astro-info-card">
                <h3>
                  Les planètes
                </h3>

                <p>
                  Mercure, Vénus, Mars, Jupiter, Saturne,
                  Uranus, Neptune et Pluton représentent
                  différentes fonctions de votre personnalité.
                </p>
              </div>

              <div className="astro-info-card">
                <h3>
                  Les maisons astrologiques
                </h3>

                <p>
                  Les douze maisons correspondent aux grands
                  domaines de la vie : identité, relations,
                  foyer, travail, amour, ressources et vocation.
                </p>
              </div>

              <div className="astro-info-card">
                <h3>
                  Les aspects
                </h3>

                <p>
                  Les aspects montrent les relations entre les
                  planètes et révèlent les accords, les tensions
                  et les dynamiques de votre thème natal.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              Quelle est la différence entre une carte du ciel
              et un horoscope ?
            </h2>

            <p>
              Un horoscope quotidien ou mensuel est
              généralement rédigé pour l’ensemble des personnes
              partageant le même signe solaire. Une carte du
              ciel est beaucoup plus personnelle, car elle
              repose sur la configuration exacte du ciel au
              moment de votre naissance.
            </p>

            <p>
              Votre thème astral peut donc révéler des nuances
              qui ne sont pas visibles dans un simple
              horoscope : votre Ascendant, votre signe lunaire,
              vos maisons, vos aspects et la répartition de vos
              éléments astrologiques.
            </p>
          </section>

          <section>
            <h2>
              Pourquoi connaître son Ascendant ?
            </h2>

            <p>
              L’Ascendant est le signe qui se levait à
              l’horizon au moment précis de votre naissance. Il
              change approximativement toutes les deux heures,
              ce qui explique pourquoi l’heure de naissance est
              importante.
            </p>

            <p>
              Il complète votre signe solaire en décrivant votre
              attitude spontanée, la manière dont vous entrez en
              relation avec votre environnement et l’énergie
              que les autres perçoivent souvent en premier.
            </p>
          </section>

          <section>
            <h2>
              Approfondir votre thème natal
            </h2>

            <p>
              La carte du ciel gratuite vous permet de découvrir
              les fondations de votre thème natal. Après avoir
              généré votre roue astrologique, vous pouvez
              choisir un rapport personnalisé Essentiel,
              Premium ou Signature afin d’explorer plus en
              profondeur vos planètes, vos maisons, vos
              relations, vos forces et vos axes d’évolution.
            </p>
          </section>

          <section
            className="astro-faq"
            aria-labelledby="faq-title"
          >
            <span className="astro-content-kicker">
              Questions fréquentes
            </span>

            <h2 id="faq-title">
              Questions sur la carte du ciel gratuite
            </h2>

            <div className="astro-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="astro-faq-item"
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

          <p className="astro-seo-disclaimer">
            L’astrologie est proposée comme un outil
            symbolique d’exploration personnelle. Elle ne
            remplace pas un avis médical, psychologique,
            juridique ou financier.
          </p>
        </article>
      </main>
    </div>
  );
}
