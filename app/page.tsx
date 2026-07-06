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
          <section className="hero hero-astro" aria-label="Présentation">
            <div className="hero-card">
              <div className="hero-top hero-top-center">
                <div className="hero-kicker hero-kicker-center">
                  <span className="astro-mark">☾ Luna Astralis</span>
                  <span className="hero-badge">Discussion privée astrologique</span>
                </div>

                <h1 className="hero-title hero-title-center">
                  Pourquoi certaines relations te bouleversent autant ?
                </h1>

                <p className="hero-sub hero-sub-center">
                  Ce que tu ressens a peut-être plus de sens que tu le crois.
                </p>

                <p className="lead lead-center">
                  Luna t'aide à voir plus clair à travers une discussion basée sur ton signe.
                </p>
              </div>

              <div className="hero-free-wrap hero-free-wrap-center" aria-label="Démarrage">
                <div className="hero-free hero-free-center">
                  <h2 className="hero-free-title">
                    Parfois, tu as juste besoin d'en parler.
                  </h2>

                  <p className="hero-free-sub">
                    Une conversation privée pour mieux comprendre ce que tu ressens.
                  </p>

                 <Link href="/compatibilite" className="hero-free-btn hero-free-btn--pulse">
  💕 Compatibilité amoureuse (gratuit)
</Link>

<a href="#signes" className="hero-free-btn" style={{ marginTop: 10 }}>
  Parler avec Luna, 15 messages gratuits ✨
</a>

                  <a href="#livres" className="hero-free-btn" style={{ marginTop: 10 }}>
                    Découvrir les livres 📚
                  </a>

                  <div className="hero-free-note">
                    Gratuit pour commencer · Discussion privée
                  </div>
                </div>
              </div>

              <WelcomeVideo />

              <section className="mini-reviews" aria-label="Avis 5 étoiles">
                {MINI_REVIEWS.map((r) => (
                  <article key={r.name + r.sign} className="mini-review">
                    <div className="mini-review-top">
                      <div className="mini-review-name">{r.name}</div>
                      <div className="mini-review-stars" aria-label="5 étoiles">
                        ★★★★★
                      </div>
                    </div>

                    <div className="mini-review-sign">{r.sign}</div>
                    <p className="mini-review-text">{r.text}</p>
                  </article>
                ))}
              </section>

              <p className="hero-tech note-center">
                Fonctionne instantanément sur mobile · Aucun téléchargement
              </p>

              <p className="hero-disclaimer note-center">
                Exploration personnelle (non thérapeutique).
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
              <h2>Les livres Luna Astralis</h2>
              <p className="section-sub">
                Guides astrologiques, compatibilités amoureuses et développement personnel.
              </p>
            </div>

            <div className="book-cta">
              <div className="book-cta-text">
                <div className="hero-badge">Disponible sur Amazon</div>

                <h2>L'âme des signes</h2>

                <p>
                  Un guide complet pour explorer les 144 compatibilités amoureuses
                  entre les douze signes du zodiaque.
                </p>

                <p>
                  Découvre les forces, les défis, les dynamiques émotionnelles
                  et le potentiel d'évolution de chaque union astrologique.
                </p>

                <div className="book-actions">
                  <a
                    href={AMAZON_AUTHOR_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-free-btn"
                  >
                    Voir le livre sur Amazon
                  </a>

                  <a
                    href={AMAZON_AUTHOR_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-small btn-ghost"
                  >
                    ✨ Voir la collection Luna Astralis
                  </a>
                </div>
              </div>
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
                  <span className="step-ico" aria-hidden="true">♈</span>
                </div>
                <h3>Choisis ton signe</h3>
                <p>Tu démarres en 1 clic.</p>
              </div>

              <div className="box step">
                <div className="step-top">
                  <span className="step-n">02</span>
                  <span className="step-ico" aria-hidden="true">🔐</span>
                </div>
                <h3>Connecte-toi</h3>
                <p>Ton accès est sécurisé et tes échanges sont protégés.</p>
              </div>

              <div className="box step">
                <div className="step-top">
                  <span className="step-n">03</span>
                  <span className="step-ico" aria-hidden="true">✧</span>
                </div>
                <h3>Gagne en clarté</h3>
                <p>Forces, blocages, besoins.</p>
              </div>

              <div className="box step">
                <div className="step-top">
                  <span className="step-n">04</span>
                  <span className="step-ico" aria-hidden="true">☾</span>
                </div>
                <h3>Garde le contrôle</h3>
                <p>Une exploration guidée, à travers ton signe.</p>
              </div>
            </div>
          </section>

          <SignGrid />

          <footer className="site-footer" role="contentinfo" aria-label="Pied de page">
            <div className="footer-card">
              <div className="footer-row">
                <div className="footer-left">
                  <div className="footer-brand">Luna Astralis</div>
                  <div className="footer-copy">© {y} · Tous droits réservés</div>
                </div>

                <nav className="footer-links" aria-label="Liens légaux">
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
