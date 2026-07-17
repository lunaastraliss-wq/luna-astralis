// app/page.tsx

import Link from "next/link";

import AuthProvider from "@/components/AuthProvider";
import SignGrid from "@/components/SignGrid";
import SiteHeader from "@/components/SiteHeader";
import WelcomeVideo from "@/components/WelcomeVideo";

import "./home.css";

const AMAZON_AUTHOR_LINK =
  "https://www.amazon.com/stores/author/B0DLVLC7QF";

/*
|--------------------------------------------------------------------------
| Avis
|--------------------------------------------------------------------------
*/

const MINI_REVIEWS = [
  {
    sign: "♈ Bélier",
    name: "Marie L.",
    text:
      "Je ne comprenais plus si ce qu'il ressentait était vrai ou juste un silence. Là, j'ai enfin mis des mots sur ce que je vivais.",
  },
  {
    sign: "♊ Gémeaux",
    name: "Julie R.",
    text:
      "J'attendais un message chaque jour. En quelques minutes, j'ai su si ça venait de lui ou de mes pensées.",
  },
  {
    sign: "♋ Cancer",
    name: "Camille D.",
    text:
      "Il était distant et je tournais en rond. Ça m'a aidée à comprendre mes besoins et mes doutes.",
  },
];

/*
|--------------------------------------------------------------------------
| Rapports astrologiques
|--------------------------------------------------------------------------
*/

const PAID_REPORTS = [
  {
    name: "Essentielle",
    price: "24,99 $ US",
    badge: "Pour commencer",
    description:
      "Une première lecture personnalisée de votre thème natal pour comprendre vos grandes énergies astrologiques.",
    features: [
      "Votre roue astrologique",
      "Votre Soleil, votre Lune et votre Ascendant",
      "Vos dix principales planètes",
      "Vos éléments et vos modalités",
      "Rapport PDF personnalisé",
    ],
    featured: false,
  },
  {
    name: "Premium",
    price: "49,99 $ US",
    badge: "Analyse approfondie",
    description:
      "Une exploration complète de votre personnalité, de vos maisons, de vos relations et de votre potentiel.",
    features: [
      "Tout le contenu de l’analyse Essentielle",
      "Vos douze maisons astrologiques",
      "Vos aspects planétaires",
      "Vos dominantes astrologiques",
      "Relations, carrière, forces et défis",
    ],
    featured: true,
  },
  {
    name: "Signature",
    price: "79,99 $ US",
    badge: "Le plus complet",
    description:
      "L’analyse la plus complète de votre thème natal, avec vos grandes dynamiques de vie et vos axes d’évolution.",
    features: [
      "Tout le contenu du rapport Premium",
      "Mission de vie et chemin de l’âme",
      "Monde intérieur et blocages inconscients",
      "Talents cachés et guide d’intégration",
      "Synthèse Signature personnalisée",
    ],
    featured: false,
  },
];

/*
|--------------------------------------------------------------------------
| Livres
|--------------------------------------------------------------------------
*/

const BOOKS = [
  {
    image: "ASTRO 101.jpg",
    title: "Astro 101",
    amazon: "https://a.co/d/05rwtdhp",
  },
  {
    image: "ASTROLOGIE ET CHIROMANCIE.png",
    title: "Astrologie et Chiromancie",
    amazon: "https://a.co/d/03osw44E",
  },
  {
    image: "ASTROLOGIE ET DEVELOPPEMENT PERSONNEL.jpg",
    title: "Développement personnel",
    amazon: "https://a.co/d/05mlDRXi",
  },
  {
    image:
      "Astrologie et transformation personnelle (1).jpg",
    title: "Transformation personnelle",
    amazon: "https://a.co/d/08qzDp1D",
  },
  {
    image:
      "guide-de-compatibilite-astrologique.jpg",
    title: "Guide de compatibilité astrologique",
    amazon: "https://a.co/d/00V8gKyx",
  },
  {
    image: "Bélier.jpg",
    title: "Bélier",
    amazon: "https://a.co/d/0h9C8bSp",
  },
  {
    image: "Taureau.jpg",
    title: "Taureau",
    amazon: "https://a.co/d/06iXVhrd",
  },
  {
    image: "Gémeaux.jpg",
    title: "Gémeaux",
    amazon: "https://a.co/d/02MIWm2d",
  },
  {
    image: "Cancer.jpg",
    title: "Cancer",
    amazon: "https://a.co/d/0bfnfFhD",
  },
  {
    image: "Lion.png",
    title: "Lion",
    amazon: "https://a.co/d/0cFooiSG",
  },
  {
    image: "Vierge.jpg",
    title: "Vierge",
    amazon: "https://a.co/d/0aQhmhkB",
  },
  {
    image: "Balance.jpg",
    title: "Balance",
    amazon: "https://a.co/d/0gnJSdeE",
  },
  {
    image: "Scorpion.jpg",
    title: "Scorpion",
    amazon: "https://a.co/d/07JHWrTe",
  },
  {
    image: "Sagittaire.jpg",
    title: "Sagittaire",
    amazon: "https://a.co/d/05jeVtb0",
  },
  {
    image: "Capricorne.jpg",
    title: "Capricorne",
    amazon: "https://a.co/d/0cwFnIuC",
  },
  {
    image: "Verseau.jpg",
    title: "Verseau",
    amazon: "https://a.co/d/07MPr0lj",
  },
  {
    image: "Poisson.jpg",
    title: "Poissons",
    amazon: "https://a.co/d/04E0atUr",
  },
];

/*
|--------------------------------------------------------------------------
| Page principale
|--------------------------------------------------------------------------
*/

export default function HomePage() {
  const year =
    new Date().getFullYear();

  return (
    <div className="page-astro">
      <AuthProvider>
        <SiteHeader />

        <main
          className="wrap"
          role="main"
        >
          {/* Présentation principale */}

          <section
            className="hero-astro"
            aria-label="Présentation"
          >
            <div className="hero-inner">
              <div className="hero-top">
                <div className="hero-kicker">
                  <span className="astro-mark">
                    ☾ Luna Astralis
                  </span>

                  <span className="hero-badge">
                    Carte du ciel · Compatibilité · IA
                    astrologique
                  </span>
                </div>

                <h1 className="hero-title">
                  Carte du ciel gratuite et compatibilité
                  amoureuse
                </h1>

                <p className="hero-sub">
                  Découvrez gratuitement votre Soleil, votre
                  Lune, votre Ascendant et votre alchimie
                  amoureuse.
                </p>

                <p className="lead">
                  Créez votre thème astral, explorez votre
                  carte du ciel et comparez deux signes
                  astrologiques en quelques secondes.
                </p>
              </div>

              {/* Outils gratuits */}

              <section
                className="hero-tools-section"
                aria-label="Outils astrologiques gratuits"
              >
                <div className="hero-showcase">
                  {/* Horoscope du jour */}

                  <article className="hero-tool-card hero-tool-card--horoscope">
                    <div className="hero-tool-icon">
                      🔮
                    </div>

                    <div className="hero-tool-label">
                      Chaque jour
                    </div>

                    <h2>
                      Horoscope du jour gratuit
                    </h2>

                    <p>
                      Consultez les prévisions astrologiques
                      de votre signe pour mieux comprendre
                      l’énergie de votre journée.
                    </p>

                    <ul>
                      <li>☀️ Tendance générale</li>
                      <li>❤️ Amour et relations</li>
                      <li>💼 Travail et projets</li>
                      <li>🌿 Bien-être</li>
                      <li>✨ Conseil du jour</li>
                    </ul>

                    <Link
                      href="/horoscope-du-jour"
                      className="hero-free-btn hero-free-btn--pulse"
                    >
                      Voir mon horoscope
                    </Link>
                  </article>

                  {/* Vidéo de présentation */}

                  <div className="hero-video-card">
                    <WelcomeVideo />
                  </div>

                  {/* Carte du ciel */}

                  <article className="hero-tool-card">
                    <div className="hero-tool-icon">
                      🌌
                    </div>

                    <h2>
                      Carte du ciel gratuite
                    </h2>

                    <p>
                      Générez votre thème astral avec votre
                      Soleil, votre Lune, votre Ascendant et
                      votre roue astrologique.
                    </p>

                    <ul>
                      <li>☀️ Soleil</li>
                      <li>🌙 Lune</li>
                      <li>⬆️ Ascendant</li>
                      <li>🪐 Roue astrologique</li>
                      <li>✨ Résumé gratuit</li>
                    </ul>

                    <Link
                      href="/carte-du-ciel"
                      className="hero-free-btn"
                    >
                      Créer ma carte
                    </Link>
                  </article>
                </div>

                {/* Compatibilité amoureuse sous la première ligne */}

                <article className="hero-tool-card hero-tool-card--compatibility">
                  <div className="hero-tool-icon">
                    💕
                  </div>

                  <div className="hero-compatibility-content">
                    <div>
                      <h2>
                        Compatibilité amoureuse
                      </h2>

                      <p>
                        Comparez deux signes astrologiques et
                        obtenez instantanément votre score, vos
                        forces, vos défis et des conseils pour
                        votre relation.
                      </p>
                    </div>

                    <ul>
                      <li>❤️ Score amoureux</li>
                      <li>✨ Forces du couple</li>
                      <li>⚠️ Défis possibles</li>
                      <li>💡 Conseils relationnels</li>
                      <li>📊 Analyse instantanée</li>
                    </ul>

                    <Link
                      href="/compatibilite"
                      className="hero-free-btn"
                    >
                      Comparer deux signes
                    </Link>
                  </div>
                </article>
              </section>

              {/* Rapports astrologiques */}

              <section
                id="rapports"
                className="reports-preview"
                aria-labelledby="reports-preview-title"
              >
                <div className="reports-preview-head">
                  <span className="hero-badge">
                    Rapports astrologiques personnalisés
                  </span>

                  <h2 id="reports-preview-title">
                    Approfondissez votre thème natal
                  </h2>

                  <p>
                    Après avoir créé votre carte du ciel
                    gratuitement, choisissez le niveau
                    d’analyse qui correspond à vos besoins.
                    Chaque rapport est personnalisé selon
                    votre date, votre heure et votre lieu de
                    naissance.
                  </p>
                </div>

                <div className="reports-preview-grid">
                  {PAID_REPORTS.map(
                    (report) => (
                      <article
                        key={report.name}
                        className={[
                          "report-preview-card",
                          report.featured
                            ? "report-preview-card--featured"
                            : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {report.featured ? (
                          <div className="report-featured-label">
                            Recommandé
                          </div>
                        ) : null}

                        <div className="report-preview-badge">
                          {report.badge}
                        </div>

                        <h3>
                          Rapport {report.name}
                        </h3>

                        <div className="report-preview-price">
                          {report.price}
                        </div>

                        <div className="report-preview-payment">
                          Paiement unique
                        </div>

                        <p className="report-preview-description">
                          {report.description}
                        </p>

                        <ul className="report-preview-features">
                          {report.features.map(
                            (feature) => (
                              <li key={feature}>
                                <span
                                  aria-hidden="true"
                                >
                                  ✓
                                </span>

                                <span>
                                  {feature}
                                </span>
                              </li>
                            )
                          )}
                        </ul>

                        <Link
                          href="/carte-du-ciel"
                          className={[
                            "hero-free-btn",
                            report.featured
                              ? "hero-free-btn--pulse"
                              : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          Créer ma carte gratuite
                        </Link>
                      </article>
                    )
                  )}
                </div>

                <div className="reports-preview-note">
                  <p>
                    Commencez gratuitement. Vos offres
                    personnalisées apparaîtront après la
                    création de votre carte du ciel.
                  </p>

                  <Link
                    href="/carte-du-ciel"
                    className="hero-free-btn hero-free-btn--pulse"
                  >
                    ✨ Découvrir mon thème natal
                  </Link>
                </div>
              </section>

              {/* Actions secondaires */}

              <div className="hero-secondary-actions">
                <a
                  href="#signes"
                  className="hero-free-btn"
                >
                  ✨ Parler avec Luna
                </a>

                <a
                  href="#livres"
                  className="hero-free-btn"
                >
                  📚 Découvrir les livres
                </a>
              </div>

              <p className="hero-free-note">
                Gratuit pour commencer · Résultat
                instantané · Mobile
              </p>

              {/* Avis */}

              <section
                className="mini-reviews"
                aria-label="Avis 5 étoiles"
              >
                {MINI_REVIEWS.map(
                  (review) => (
                    <article
                      key={`${review.name}-${review.sign}`}
                      className="mini-review"
                    >
                      <div className="mini-review-top">
                        <div className="mini-review-name">
                          {review.name}
                        </div>

                        <div className="mini-review-stars">
                          ★★★★★
                        </div>
                      </div>

                      <div className="mini-review-sign">
                        {review.sign}
                      </div>

                      <p className="mini-review-text">
                        {review.text}
                      </p>
                    </article>
                  )
                )}
              </section>

              <p className="hero-tech">
                Fonctionne instantanément sur mobile · Aucun
                téléchargement
              </p>

              <p className="hero-disclaimer">
                Exploration personnelle non thérapeutique.
              </p>
            </div>
          </section>

          {/* Problèmes rencontrés */}

          <section className="section-problem">
            <p className="problem-intro">
              En quelques minutes, tu comprends enfin ce que
              tu vis, sans te mentir.
            </p>

            <ul className="problem-list">
              <li>
                Il ou elle est distant(e), et tu ne comprends
                pas pourquoi ?
              </li>

              <li>
                Tu attends un message, mais rien ne vient ?
              </li>

              <li>
                Tu sens que quelque chose cloche, sans savoir
                quoi ?
              </li>
            </ul>
          </section>

          {/* Livres */}

          <section
            id="livres"
            className="section books-section"
          >
            <div className="section-head">
              <h2>
                La bibliothèque Luna Astralis
              </h2>

              <p className="section-sub">
                Découvrez des guides astrologiques conçus pour
                mieux comprendre votre personnalité, vos
                relations et votre évolution personnelle.
              </p>
            </div>

            <div className="books-intro">
              <div className="hero-badge">
                Disponible sur Amazon
              </div>

              <h3>
                Une collection complète
                d&apos;astrologie
              </h3>

              <p>
                Signes du zodiaque, développement personnel,
                compatibilité amoureuse et bien plus encore.
              </p>
            </div>

            <div className="books-grid">
              {BOOKS.map(
                (book) => (
                  <article
                    className="book-card"
                    key={book.title}
                  >
                    <img
                      src={`/books/${book.image}`}
                      alt={`Couverture du livre ${book.title}`}
                      loading="lazy"
                    />

                    <h3>
                      {book.title}
                    </h3>

                    <a
                      href={book.amazon}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-free-btn"
                    >
                      Voir sur Amazon
                    </a>
                  </article>
                )
              )}
            </div>

            <div className="book-final-cta">
              <h3>
                Découvrez toute la collection Luna Astralis
              </h3>

              <p>
                Retrouvez tous les guides astrologiques
                disponibles sur Amazon.
              </p>

              <a
                href={AMAZON_AUTHOR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-free-btn"
              >
                ✨ Voir toute la collection
              </a>
            </div>
          </section>

          {/* Fonctionnement */}

          <section
            id="comment"
            className="section"
          >
            <div className="section-head">
              <h2>
                Comment ça fonctionne
              </h2>

              <p className="section-sub">
                4 étapes simples.
              </p>
            </div>

            <div className="grid4">
              <div className="box step">
                <div className="step-top">
                  <span className="step-n">
                    01
                  </span>

                  <span className="step-ico">
                    ♈
                  </span>
                </div>

                <h3>
                  Choisis ton outil
                </h3>

                <p>
                  Carte du ciel, compatibilité ou discussion
                  avec Luna.
                </p>
              </div>

              <div className="box step">
                <div className="step-top">
                  <span className="step-n">
                    02
                  </span>

                  <span className="step-ico">
                    🌙
                  </span>
                </div>

                <h3>
                  Obtiens ton résultat
                </h3>

                <p>
                  Ton analyse apparaît en quelques secondes.
                </p>
              </div>

              <div className="box step">
                <div className="step-top">
                  <span className="step-n">
                    03
                  </span>

                  <span className="step-ico">
                    ✧
                  </span>
                </div>

                <h3>
                  Gagne en clarté
                </h3>

                <p>
                  Forces, besoins, défis et dynamiques
                  relationnelles.
                </p>
              </div>

              <div className="box step">
                <div className="step-top">
                  <span className="step-n">
                    04
                  </span>

                  <span className="step-ico">
                    🔐
                  </span>
                </div>

                <h3>
                  Va plus loin
                </h3>

                <p>
                  Choisis l&apos;analyse Essentielle,
                  Premium ou Signature pour approfondir ton
                  thème natal.
                </p>
              </div>
            </div>
          </section>

          {/* Signes et Luna */}

          <div id="signes">
            <SignGrid />
          </div>

          {/* Pied de page */}

          <footer className="site-footer">
            <div className="footer-card">
              <div className="footer-row">
                <div className="footer-left">
                  <div className="footer-brand">
                    Luna Astralis
                  </div>

                  <div className="footer-copy">
                    © {year} · Tous droits réservés
                  </div>
                </div>

                <nav
                  className="footer-links"
                  aria-label="Liens légaux"
                >
                  <Link href="/mentions-legales">
                    Mentions légales
                  </Link>

                  <span className="sep">
                    •
                  </span>

                  <Link href="/confidentialite">
                    Confidentialité
                  </Link>

                  <span className="sep">
                    •
                  </span>

                  <Link href="/conditions">
                    Conditions
                  </Link>

                  <span className="sep">
                    •
                  </span>

                  <Link href="/age-18">
                    18+
                  </Link>
                </nav>
              </div>

              <div className="footer-note">
                Exploration personnelle — non thérapeutique.
                Réservé aux 18 ans et plus.
              </div>
            </div>
          </footer>
        </main>
      </AuthProvider>
    </div>
  );
      }
