// app/page.tsx
import Link from "next/link";
import AuthProvider from "@/components/AuthProvider";
import SiteHeader from "@/components/SiteHeader";
import WelcomeVideo from "@/components/WelcomeVideo";
import SignGrid from "@/components/SignGrid";
import "./home.css";

const AMAZON_AUTHOR_LINK = "https://www.amazon.com/stores/author/B0DLVLC7QF";

const MINI_REVIEWS = [
  {
    sign: "♈ Bélier",
    name: "Marie L.",
    text: "Je ne comprenais plus si ce qu'il ressentait était vrai ou juste un silence. Là, j'ai enfin mis des mots sur ce que je vivais.",
  },
  {
    sign: "♊ Gémeaux",
    name: "Julie R.",
    text: "J'attendais un message chaque jour. En quelques minutes, j'ai su si ça venait de lui ou de mes pensées.",
  },
  {
    sign: "♋ Cancer",
    name: "Camille D.",
    text: "Il était distant et je tournais en rond. Ça m'a aidée à comprendre mes besoins et mes doutes.",
  },
];

export default function HomePage() {
  const y = new Date().getFullYear();

  return (
    <div className="page-astro">
      <AuthProvider>
        <SiteHeader />

        <main className="wrap" role="main">
          <section className="hero-astro" aria-label="Présentation">
            <div className="hero-inner">
              <div className="hero-top">
                <div className="hero-kicker">
                  <span className="astro-mark">☾ Luna Astralis</span>
                  <span className="hero-badge">
                    Carte du ciel · Compatibilité · IA astrologique
                  </span>
                </div>

                <h1 className="hero-title">
                  Carte du ciel gratuite et compatibilité amoureuse
                </h1>

                <p className="hero-sub">
                  Découvrez gratuitement votre Soleil, votre Lune, votre
                  Ascendant et votre alchimie amoureuse.
                </p>

                <p className="lead">
                  Créez votre thème astral, explorez votre carte du ciel et
                  comparez deux signes astrologiques en quelques secondes.
                </p>
              </div>

              <section className="hero-showcase" aria-label="Outils gratuits">
                <article className="hero-tool-card">
                  <div className="hero-tool-icon">🌌</div>
                  <h2>Carte du ciel gratuite</h2>
                  <p>
                    Générez votre thème astral avec votre Soleil, votre Lune,
                    votre Ascendant et votre roue astrologique.
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
                    className="hero-free-btn hero-free-btn--pulse"
                  >
                    Créer ma carte
                  </Link>
                </article>

                <div className="hero-video-card">
                  <WelcomeVideo />
                </div>

                <article className="hero-tool-card">
                  <div className="hero-tool-icon">💕</div>
                  <h2>Compatibilité amoureuse</h2>
                  <p>
                    Comparez deux signes astrologiques et obtenez votre score
                    de compatibilité instantanément.
                  </p>

                  <ul>
                    <li>❤️ Score amoureux</li>
                    <li>✨ Forces du couple</li>
                    <li>⚠️ Défis possibles</li>
                    <li>💡 Conseils relationnels</li>
                    <li>📊 Analyse instantanée</li>
                  </ul>

                  <Link href="/compatibilite" className="hero-free-btn">
                    Comparer deux signes
                  </Link>
                </article>
              </section>

              <div className="hero-secondary-actions">
                <a href="#signes" className="hero-free-btn">
                  ✨ Parler avec Luna
                </a>

                <a href="#livres" className="hero-free-btn">
                  📚 Découvrir les livres
                </a>
              </div>

              <p className="hero-free-note">
                Gratuit pour commencer · Résultat instantané · Mobile
              </p>

              <section className="mini-reviews" aria-label="Avis 5 étoiles">
                {MINI_REVIEWS.map((r) => (
                  <article key={r.name + r.sign} className="mini-review">
                    <div className="mini-review-top">
                      <div className="mini-review-name">{r.name}</div>
                      <div className="mini-review-stars">★★★★★</div>
                    </div>

                    <div className="mini-review-sign">{r.sign}</div>
                    <p className="mini-review-text">{r.text}</p>
                  </article>
                ))}
              </section>

              <p className="hero-tech">
                Fonctionne instantanément sur mobile · Aucun téléchargement
              </p>

              <p className="hero-disclaimer">
                Exploration personnelle non thérapeutique.
              </p>
            </div>
          </section>

          <section className="section-problem">
            <p className="problem-intro">
              En quelques minutes, tu comprends enfin ce que tu vis, sans te mentir.
            </p>

            <ul className="problem-list">
              <li>Il ou elle est distant(e), et tu ne comprends pas pourquoi ?</li>
              <li>Tu attends un message, mais rien ne vient ?</li>
              <li>Tu sens que quelque chose cloche, sans savoir quoi ?</li>
            </ul>
          </section>

         <section id="livres" className="section">
  <div className="section-head">
    <h2>La bibliothèque Luna Astralis</h2>

    <p className="section-sub">
      Découvrez une collection de guides astrologiques sur les signes du zodiaque,
      la compatibilité amoureuse et le développement personnel.
    </p>
  </div>

  <div className="books-intro">
    <div className="hero-badge">Disponible sur Amazon</div>

    <h3>
      Explorez votre univers astrologique
    </h3>

    <p>
      Des livres pour mieux comprendre votre personnalité, vos relations,
      vos émotions et votre cheminement personnel à travers l'astrologie.
    </p>
  </div>


  <div className="books-grid">

    <article className="book-card">
      <img
        src="/livres/astro-101.jpg"
        alt="Astro 101"
      />

      <h3>Astro 101</h3>

      <a
        href={AMAZON_AUTHOR_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-free-btn"
      >
        Voir sur Amazon
      </a>
    </article>


    <article className="book-card">
      <img
        src="/livres/chiromancie.png"
        alt="Astrologie et Chiromancie"
      />

      <h3>Astrologie et Chiromancie</h3>

      <a
        href={AMAZON_AUTHOR_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-free-btn"
      >
        Voir sur Amazon
      </a>
    </article>


    <article className="book-card">
      <img
        src="/livres/compatibilite.jpg"
        alt="Guide de Compatibilité Astrologique"
      />

      <h3>Guide de Compatibilité Astrologique</h3>

      <a
        href={AMAZON_AUTHOR_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-free-btn"
      >
        Voir sur Amazon
      </a>
    </article>


    <article className="book-card">
      <img
        src="/livres/developpement.jpg"
        alt="Astrologie et Développement Personnel"
      />

      <h3>Astrologie et Développement Personnel</h3>

      <a
        href={AMAZON_AUTHOR_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-free-btn"
      >
        Voir sur Amazon
      </a>
    </article>


    <article className="book-card">
      <img
        src="/livres/transformation.jpg"
        alt="Astrologie et Transformation Personnelle"
      />

      <h3>Astrologie et Transformation Personnelle</h3>

      <a
        href={AMAZON_AUTHOR_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-free-btn"
      >
        Voir sur Amazon
      </a>
    </article>

  </div>


  <div className="sign-books-title">

    <div className="hero-badge">
      Collection L'Âme des Signes
    </div>

    <h3>
      Un livre pour chaque signe du zodiaque
    </h3>

    <p>
      Découvrez les forces, les émotions et les dynamiques propres à chaque signe.
    </p>

  </div>


  <div className="sign-books-grid">

    {[
      ["Bélier","belier.jpg"],
      ["Taureau","taureau.jpg"],
      ["Gémeaux","gemeaux.jpg"],
      ["Cancer","cancer.jpg"],
      ["Lion","lion.jpg"],
      ["Vierge","vierge.jpg"],
      ["Balance","balance.jpg"],
      ["Scorpion","scorpion.jpg"],
      ["Sagittaire","sagittaire.jpg"],
      ["Capricorne","capricorne.jpg"],
      ["Verseau","verseau.jpg"],
      ["Poissons","poissons.jpg"],
    ].map(([title,image]) => (

      <article
        key={title}
        className="book-card book-card-sign"
      >

        <img
          src={`/livres/${image}`}
          alt={`Livre ${title}`}
        />

        <h3>{title}</h3>

        <a
          href={AMAZON_AUTHOR_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-free-btn"
        >
          Voir sur Amazon
        </a>

      </article>

    ))}

  </div>


  <div className="book-final-cta">

    <h3>
      Découvrez toute la collection Luna Astralis
    </h3>

    <p>
      Retrouvez tous les guides astrologiques disponibles sur Amazon.
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
          <section id="comment" className="section">
            <div className="section-head">
              <h2>Comment ça fonctionne</h2>
              <p className="section-sub">4 étapes simples.</p>
            </div>

            <div className="grid4">
              <div className="box step">
                <div className="step-top">
                  <span className="step-n">01</span>
                  <span className="step-ico">♈</span>
                </div>
                <h3>Choisis ton outil</h3>
                <p>Carte du ciel, compatibilité ou discussion avec Luna.</p>
              </div>

              <div className="box step">
                <div className="step-top">
                  <span className="step-n">02</span>
                  <span className="step-ico">🌙</span>
                </div>
                <h3>Obtiens ton résultat</h3>
                <p>Ton analyse apparaît en quelques secondes.</p>
              </div>

              <div className="box step">
                <div className="step-top">
                  <span className="step-n">03</span>
                  <span className="step-ico">✧</span>
                </div>
                <h3>Gagne en clarté</h3>
                <p>Forces, besoins, défis et dynamiques relationnelles.</p>
              </div>

              <div className="box step">
                <div className="step-top">
                  <span className="step-n">04</span>
                  <span className="step-ico">🔐</span>
                </div>
                <h3>Va plus loin</h3>
                <p>Rapport premium ou discussion privée selon ton besoin.</p>
              </div>
            </div>
          </section>

          <SignGrid />

          <footer className="site-footer">
            <div className="footer-card">
              <div className="footer-row">
                <div className="footer-left">
                  <div className="footer-brand">Luna Astralis</div>
                  <div className="footer-copy">© {y} · Tous droits réservés</div>
                </div>

                <nav className="footer-links">
                  <Link href="/mentions-legales">Mentions légales</Link>
                  <span className="sep">•</span>
                  <Link href="/confidentialite">Confidentialité</Link>
                  <span className="sep">•</span>
                  <Link href="/conditions">Conditions</Link>
                  <span className="sep">•</span>
                  <Link href="/age-18">18+</Link>
                </nav>
              </div>

              <div className="footer-note">
                Exploration personnelle — non thérapeutique. Réservé aux 18 ans et plus.
              </div>
            </div>
          </footer>
        </main>
      </AuthProvider>
    </div>
  );
}
