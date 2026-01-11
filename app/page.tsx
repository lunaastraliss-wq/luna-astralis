// app/page.tsx
"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase/client"; // ✅ adapte si ton chemin diffère

// ⚙️ Storage keys (doivent matcher LoginClient + ChatClient)
const LS_SIGN_KEY = "la_sign";

const SIGNS: Array<{ key: string; label: string; cls: string }> = [
  { key: "belier", label: "♈ Bélier", cls: "sign-fire" },
  { key: "taureau", label: "♉ Taureau", cls: "sign-earth" },
  { key: "gemeaux", label: "♊ Gémeaux", cls: "sign-air" },
  { key: "cancer", label: "♋ Cancer", cls: "sign-water" },

  { key: "lion", label: "♌ Lion", cls: "sign-fire" },
  { key: "vierge", label: "♍ Vierge", cls: "sign-earth" },
  { key: "balance", label: "♎ Balance", cls: "sign-air" },
  { key: "scorpion", label: "♏ Scorpion", cls: "sign-water" },

  { key: "sagittaire", label: "♐ Sagittaire", cls: "sign-fire" },
  { key: "capricorne", label: "♑ Capricorne", cls: "sign-earth" },
  { key: "verseau", label: "♒ Verseau", cls: "sign-air" },
  { key: "poissons", label: "♓ Poissons", cls: "sign-water" },
];

function setCookie(name: string, value: string, maxAgeSeconds = 31536000) {
  if (typeof document === "undefined") return;
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax`;
}

function storeSign(signKey: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LS_SIGN_KEY, signKey);
  } catch {}
  // cookie optionnel (si tu veux pouvoir le lire côté serveur plus tard)
  setCookie(LS_SIGN_KEY, signKey);
}

export default function HomePage() {
  const router = useRouter();
  const y = useMemo(() => new Date().getFullYear(), []);

  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  // ✅ détecte session (optionnel, mais utile pour adapter CTA / comportement)
  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (!alive) return;
        if (error) {
          setIsAuth(false);
          return;
        }
        setIsAuth(!!data?.session?.user?.id);
      } catch {
        setIsAuth(false);
      }
    })();

    const { data } = supabase.auth.onAuthStateChange((_evt, session) => {
      setIsAuth(!!session?.user?.id);
    });

    return () => {
      alive = false;
      data.subscription.unsubscribe();
    };
  }, []);

  // ✅ clic sur signe: on mémorise le signe puis:
  // - si déjà connecté -> /chat?signe=...
  // - sinon -> /login?next=/chat?signe=...
  const onPickSign = useCallback(
    (signKey: string) => {
      storeSign(signKey);

      const next = `/chat?signe=${encodeURIComponent(signKey)}`;

      if (isAuth) {
        router.push(next);
        return;
      }

      router.push(`/login?next=${encodeURIComponent(next)}`);
    },
    [router, isAuth]
  );

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

          {/* ✅ Entrée unique */}
          <Link className="btn btn-small" href="/login">
            {isAuth ? "Mon compte" : "Se connecter"}
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
                <span className="hero-badge">Espace de discussion</span>
              </div>

              <h1 className="hero-title hero-title-center">
                Ce n’est pas un horoscope.
                <br />
                C’est une conversation.
              </h1>

              <p className="lead lead-center">
                Ici, on ne te dit pas ce qui va arriver.
                <br />
                On parle de ce que tu vis, à travers ton signe.
              </p>
            </div>

            {/* CTA */}
            <div className="hero-free-wrap hero-free-wrap-center" aria-label="Démarrage">
              <div className="hero-free hero-free-center">
                <h2 className="hero-free-title">Commence maintenant.</h2>

                <p className="hero-free-sub">
                  Choisis ton signe, puis connecte-toi si nécessaire.
                </p>

                <a href="#signes" className="hero-free-btn hero-free-btn--pulse">
                  Choisir mon signe →
                </a>

                <div className="hero-free-note">
                  {isAuth ? "Connectée · Accès immédiat" : "Compte requis · Gratuit au départ"}
                </div>
              </div>
            </div>

            <p className="hero-tech note-center">
              Fonctionne instantanément sur mobile · Aucun téléchargement
            </p>
            <p className="hero-disclaimer note-center">
              Exploration personnelle (non thérapeutique).
            </p>
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
                  🔐
                </span>
              </div>
              <h3>Connecte-toi</h3>
              <p>Ton accès est sécurisé et tes échanges sont protégés.</p>
            </div>

            <div className="box step">
              <div className="step-top">
                <span className="step-n">03</span>
                <span className="step-ico" aria-hidden="true">
                  ✧
                </span>
              </div>
              <h3>Reçois un miroir</h3>
              <p>Forces, angles morts, besoins.</p>
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
            <p className="section-sub">
              Clique un signe : si tu n’es pas connectée, on te redirige vers le login.
            </p>
          </div>

          <div className="signs signs-grid" role="list">
            {SIGNS.map((s) => (
              <button
                key={s.key}
                type="button"
                role="listitem"
                className={`sign ${s.cls}`}
                onClick={() => onPickSign(s.key)}
                style={{ cursor: "pointer" }}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="elements" aria-label="Éléments">
            <span className="el sign-fire">Feu</span>
            <span className="el sign-earth">Terre</span>
            <span className="el sign-air">Air</span>
            <span className="el sign-water">Eau</span>
          </div>

          <div className="note-center" style={{ marginTop: 14 }}>
            <Link className="btn btn-small" href="/login">
              {isAuth ? "Mon compte →" : "Se connecter →"}
            </Link>
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

          <div className="footer-note">
            Exploration personnelle — non thérapeutique. Réservé aux 18 ans et plus.
          </div>
        </footer>
      </main>
    </div>
  );
}
