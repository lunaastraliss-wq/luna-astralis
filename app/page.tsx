// app/page.tsx
"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase/client";

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
  setCookie(LS_SIGN_KEY, signKey);
}

type MiniReview = {
  sign: string;
  name: string;
  text: string;
};

const MINI_REVIEWS: MiniReview[] = [
  {
    sign: "♈ Bélier",
    name: "Marie L.",
    text:
      "“Ça m’a fait du bien. J’ai ralenti sans culpabiliser, et j’ai enfin canalisé mon énergie.”",
  },
  {
    sign: "♊ Gémeaux",
    name: "Julie R.",
    text:
      "“Je suis Gémeaux et j’ai mille pensées. Là, j’ai réussi à clarifier ce que je ressens. Ça suit vraiment mon rythme.”",
  },
  {
    sign: "♋ Cancer",
    name: "Camille D.",
    text:
      "“C’était doux, juste, et réconfortant. Ça m’a aidée à comprendre ce que je porte émotionnellement.”",
  },
];

export default function HomePage() {
  const router = useRouter();
  const y = useMemo(() => new Date().getFullYear(), []);

  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  // menu mobile
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // scroll helper
  const scrollToId = useCallback((id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (!el) {
      window.location.hash = `#${id}`;
      return;
    }
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      const first = el.querySelector("button, a, [tabindex]") as HTMLElement | null;
      first?.focus?.();
    }, 250);
  }, []);

  // détecte session
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

  // ferme menu si auth change
  useEffect(() => {
    setMenuOpen(false);
  }, [isAuth]);

  // ferme menu au clic dehors + ESC
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;

      if (t.closest(".nav-mobile")) return;
      if (t.closest(".nav-burger")) return;

      closeMenu();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, [menuOpen, closeMenu]);

  // clic sur signe: store + redirect
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

  // nav handlers (desktop + mobile)
  const onNavTo = useCallback(
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      closeMenu();
      scrollToId(id);
    },
    [closeMenu, scrollToId]
  );

  // ---------------------------
  // VIDEO (son)
  // ---------------------------
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [soundReady, setSoundReady] = useState(false);

  // démarre la vidéo en muet automatiquement (OK partout)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.volume = 1;

    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        // si le navigateur bloque, pas grave
      }
    };
    tryPlay();
  }, []);

  // toggle son (nécessite un geste utilisateur)
  const toggleSound = useCallback(async () => {
    const v = videoRef.current;
    if (!v) return;

    try {
      if (!soundOn) {
        // activer son
        v.muted = false;
        v.volume = 1;
        await v.play(); // important
        setSoundOn(true);
        setSoundReady(true);
      } else {
        // couper son
        v.muted = true;
        setSoundOn(false);
        setSoundReady(true);
      }
    } catch {
      // si ça échoue, on revient en muet
      v.muted = true;
      setSoundOn(false);
      setSoundReady(false);
    }
  }, [soundOn]);

  return (
    <div className="page-astro">
      {/* HEADER */}
      <header className="top" role="banner">
        <Link
          className="brand"
          href="/"
          aria-label="Accueil Luna Astralis"
          onClick={closeMenu}
        >
          <div className="logo" aria-hidden="true">
            <img src="/logo-luna-astralis-transparent.png" alt="" />
          </div>

          <div className="brand-text">
            <div className="brand-name">LUNA ASTRALIS</div>
            <div className="brand-sub">Astro & psycho</div>
          </div>
        </Link>

        <nav className="nav" aria-label="Navigation principale">
          {/* DESKTOP NAV */}
          <div className="nav-desktop">
            <a href="#comment" onClick={onNavTo("comment")}>
              Comment ça fonctionne
            </a>

            <a
              href="#signes"
              className="btn btn-small btn-ghost"
              onClick={onNavTo("signes")}
            >
              Choisir un signe
            </a>

            <Link className="btn btn-small btn-ghost" href="/pricing">
              Tarifs
            </Link>

            <Link className="btn btn-small" href="/login">
              {isAuth ? "Mon compte" : "Se connecter"}
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="nav-burger"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen ? "true" : "false"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            ☰
          </button>

          {/* MOBILE MENU */}
          <div className={`nav-mobile ${menuOpen ? "open" : ""}`} role="menu">
            <a href="#comment" onClick={onNavTo("comment")} role="menuitem">
              Comment ça fonctionne
            </a>

            <a href="#signes" onClick={onNavTo("signes")} role="menuitem">
              Choisir un signe
            </a>

            <Link href="/pricing" onClick={closeMenu} role="menuitem">
              Tarifs
            </Link>

            <Link href="/login" onClick={closeMenu} role="menuitem">
              {isAuth ? "Mon compte" : "Se connecter"}
            </Link>
          </div>
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

                <a
                  href="#signes"
                  className="hero-free-btn hero-free-btn--pulse"
                  onClick={onNavTo("signes")}
                >
                  Choisir mon signe →
                </a>

                <div className="hero-free-note">
                  {isAuth ? "Connectée · Accès immédiat" : "Compte requis · Gratuit au départ"}
                </div>
              </div>
            </div>

            {/* 🎥 VIDEO WELCOME (Astro frame + son) */}
            <div className="astro-video-wrap" aria-label="Bienvenue Luna Astralis">
              <div className="astro-video-frame">
                <video
                  ref={videoRef}
                  className="astro-video"
                  src="/luna_welcome_fr.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>

              <div className="astro-video-actions">
                <button
                  type="button"
                  className="btn btn-small btn-ghost"
                  onClick={toggleSound}
                >
                  {soundOn ? "Couper le son" : "Activer le son"}
                </button>

                <span className="astro-video-hint">
                  {!soundReady ? "Le son démarre après un clic." : " "}
                </span>
              </div>

              <p className="astro-video-caption">Bienvenue sur Luna Astralis ✨</p>
            </div>

            {/* ⭐ MINI REVIEWS */}
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
    </div>
  );
}
