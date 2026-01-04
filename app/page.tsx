// app/page.tsx
"use client";

import React, { useMemo } from "react";
import Link from "next/link";

export default function HomePage() {
  const y = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="page-astro">
      {/* HEADER */}
      <header className="top" role="banner">
        <Link className="brand" href="/" aria-label="Accueil Luna Astralis">
          <div className="logo" aria-hidden="true">
            <img src="/logo-luna-astralis-transparent.png" alt="" />
          </div>

          <div className="brand-text">
            <div className="brand-name">LUNA ASTRALIS</div>
            <div className="brand-sub">Astro & psycho</div>
          </div>
        </Link>

        <nav className="nav" aria-label="Navigation principale">
          <a href="#comment">Comment ça fonctionne</a>
          <a href="#signes">Choisir un signe</a>
          <Link className="btn btn-small btn-ghost" href="/pricing">
            Tarifs
          </Link>
          <Link className="btn btn-small btn-ghost" href="/login">
            Mon compte
          </Link>
          <Link className="btn btn-small" href="/signup">
            Créer un compte
          </Link>
        </nav>
      </header>

      {/* MAIN */}
      <main className="wrap" role="main">
        {/* HERO */}
        <section className="hero hero-astro" aria-label="Présentation">
          <div className="hero-card">
            <div className="hero-top hero-top-center">
              <div className="hero-kicker hero-kicker-center">
                <span className="astro-mark">☾ Luna Astralis</span>
                <span className="hero-badge">Exploration guidée</span>
              </div>

              <h1 className="hero-title hero-title-center">Astro & psycho</h1>

              <p className="lead lead-center">Ce que ton signe révèle de toi — au-delà des clichés.</p>
            </div>

            {/* BLOC GRATUIT */}
            <div className="hero-free-wrap hero-free-wrap-center" aria-label="Démarrage gratuit">
              <div className="hero-free hero-free-center">
                <h2 className="hero-free-title">Commence gratuitement.</h2>

                <p className="hero-free-sub">Choisis ton signe et commence maintenant.</p>

                <a href="#signes" className="hero-free-btn hero-free-btn--pulse">
                  Choisir mon signe →
                </a>

                <div className="hero-free-note">Sans compte · Sans carte</div>
              </div>
            </div>

            <p className="hero-tech note-center">Fonctionne instantanément sur mobile · Aucun téléchargement</p>

            <p className="hero-disclaimer note-center">Exploration personnelle (non thérapeutique).</p>
          </div>
        </section>

        {/* TRUST */}
        <section className="trust" aria-label="Promesse">
          <div className="trust-item">
            <div className="trust-ico" aria-hidden="true">
              ✦
            </div>
            <div>
              <div className="trust-title">Doux, mais précis</div>
              <div className="trust-sub">Des mots clairs, sans blabla.</div>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-ico" aria-hidden="true">
              ☾
            </div>
            <div>
              <div className="trust-title">Guidé</div>
              <div className="trust-sub">Questions + reflets pour avancer.</div>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-ico" aria-hidden="true">
              ◎
            </div>
            <div>
              <div className="trust-title">Sans jugement</div>
              <div className="trust-sub">On explore. On n’étiquette pas.</div>
            </div>
          </div>
        </section>

        {/* COMMENT */}
        <section id="comment" className="section">
          <div className="section-head">
            <h2>Comment ça fonctionne</h2>
            <p className="section-sub">4 étapes simples.</p>
          </div>

          <div className="grid4">
            <div className="box step">
              <div className="step-top">
                <span className="step-n">01</span>
                <span className="step-ico" aria-hidden="true">
                  ♈
                </span>
              </div>
              <h3>Choisis ton signe</h3>
              <p>Tu démarres en 1 clic.</p>
            </div>

            <div className="box step">
              <div className="step-top">
                <span className="step-n">02</span>
                <span className="step-ico" aria-hidden="true">
                  ✧
                </span>
              </div>
              <h3>Reçois un miroir</h3>
              <p>Forces, angles morts, besoins.</p>
            </div>

            <div className="box step">
              <div className="step-top">
                <span className="step-n">03</span>
                <span className="step-ico" aria-hidden="true">
                  🧠
                </span>
              </div>
              <h3>Comprends tes schémas</h3>
              <p>Émotions, stress, relations.</p>
            </div>

            <div className="box step">
              <div className="step-top">
                <span className="step-n">04</span>
                <span className="step-ico" aria-hidden="true">
                  ☾
                </span>
              </div>
              <h3>Garde le contrôle</h3>
              <p>Exploration personnelle uniquement.</p>
            </div>
          </div>
        </section>

        {/* SIGNES */}
        <section id="signes" className="section">
          <div className="section-head">
            <h2>Choisir un signe</h2>
            <p className="section-sub">Commence ici.</p>
          </div>

          <div className="signs signs-grid" role="list">
            <Link className="sign sign-fire" role="listitem" href="/chat?signe=belier">
              ♈ Bélier
            </Link>
            <Link className="sign sign-earth" role="listitem" href="/chat?signe=taureau">
              ♉ Taureau
            </Link>
            <Link className="sign sign-air" role="listitem" href="/chat?signe=gemeaux">
              ♊ Gémeaux
            </Link>
            <Link className="sign sign-water" role="listitem" href="/chat?signe=cancer">
              ♋ Cancer
            </Link>

            <Link className="sign sign-fire" role="listitem" href="/chat?signe=lion">
              ♌ Lion
            </Link>
            <Link className="sign sign-earth" role="listitem" href="/chat?signe=vierge">
              ♍ Vierge
            </Link>
            <Link className="sign sign-air" role="listitem" href="/chat?signe=balance">
              ♎ Balance
            </Link>
            <Link className="sign sign-water" role="listitem" href="/chat?signe=scorpion">
              ♏ Scorpion
            </Link>

            <Link className="sign sign-fire" role="listitem" href="/chat?signe=sagittaire">
              ♐ Sagittaire
            </Link>
            <Link className="sign sign-earth" role="listitem" href="/chat?signe=capricorne">
              ♑ Capricorne
            </Link>
            <Link className="sign sign-air" role="listitem" href="/chat?signe=verseau">
              ♒ Verseau
            </Link>
            <Link className="sign sign-water" role="listitem" href="/chat?signe=poissons">
              ♓ Poissons
            </Link>
          </div>

          <div className="elements" aria-label="Éléments">
            <span className="el sign-fire">Feu</span>
            <span className="el sign-earth">Terre</span>
            <span className="el sign-air">Air</span>
            <span className="el sign-water">Eau</span>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer" role="contentinfo">
          <div className="footer-top">
            <div>© {y} Luna Astralis</div>

            <nav className="footer-links" aria-label="Liens légaux">
              <Link href="/mentions-legales">Mentions légales</Link>
              <Link href="/confidentialite">Confidentialité (RGPD)</Link>
              <Link href="/conditions">Conditions d’utilisation</Link>
              <Link href="/age-18">18+</Link>
            </nav>
          </div>

          <div className="footer-note">Exploration personnelle — non thérapeutique. Réservé aux 18 ans et plus.</div>
        </footer>
      </main>
    </div>
  );
}
