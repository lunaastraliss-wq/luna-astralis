// app/page.tsx
"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase/client";
import "./home.css";

const LS_SIGN_KEY = "la_sign";
const COOKIE_SIGN_KEY = "la_sign";
const SIGN_PARAM = "sign";

const AMAZON_AUTHOR_LINK = "TON_LIEN_AMAZON_AUTEUR";

const SIGNS = [
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

const MINI_REVIEWS = [
  {
    sign: "♈ Bélier",
    name: "Marie L.",
    text: "“Je ne comprenais plus si ce qu’il ressentait était vrai ou juste un silence. Là, j’ai enfin mis des mots sur ce que je vivais.”",
  },
  {
    sign: "♊ Gémeaux",
    name: "Julie R.",
    text: "“J’attendais un message chaque jour. En quelques minutes, j’ai su si ça venait de lui ou de mes pensées.”",
  },
  {
    sign: "♋ Cancer",
    name: "Camille D.",
    text: "“Il était distant et je tournais en rond. Ça m’a aidée à comprendre mes besoins et mes doutes.”",
  },
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
  setCookie(COOKIE_SIGN_KEY, signKey);
}

export default function HomePage() {
  const router = useRouter();
  const y = useMemo(() => new Date().getFullYear(), []);

  const [isAuth, setIsAuth] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [soundReady, setSoundReady] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const scrollToId = useCallback((id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (!el) {
      window.location.hash = `#${id}`;
      return;
    }
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const onNavTo = useCallback(
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      closeMenu();
      scrollToId(id);
    },
    [closeMenu, scrollToId]
  );

  const onPickSign = useCallback(
    (signKey: string) => {
      storeSign(signKey);

      const next = `/chat?${SIGN_PARAM}=${encodeURIComponent(signKey)}`;

      if (isAuth) {
        router.push(next);
        return;
      }

      router.push(`/login?next=${encodeURIComponent(next)}`);
    },
    [router, isAuth]
  );

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

  useEffect(() => {
    setMenuOpen(false);
  }, [isAuth]);

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

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.volume = 1;

    (async () => {
      try {
        await v.play();
      } catch {}
    })();
  }, []);

  const toggleSound = useCallback(async () => {
    const v = videoRef.current;
    if (!v) return;

    try {
      if (!soundOn) {
        v.muted = false;
        v.volume = 1;
        await v.play();
        setSoundOn(true);
        setSoundReady(true);
      } else {
        v.muted = true;
        setSoundOn(false);
        setSoundReady(true);
      }
    } catch {
      v.muted = true;
      setSoundOn(false);
      setSoundReady(false);
    }
  }, [soundOn]);

  return (
    <div className="page-astro">
      <header className="top" role="banner">
        <Link className="brand" href="/" aria-label="Accueil Luna Astralis" onClick={closeMenu}>
          <div className="logo" aria-hidden="true">
            <img src="/logo-luna-astralis-transparent.png" alt="" />
          </div>

          <div className="brand-text">
            <div className="brand-name">LUNA ASTRALIS</div>
            <div className="brand-sub">Astro & psycho</div>
          </div>
        </Link>

        <nav className="nav" aria-label="Navigation principale">
          <div className="nav-desktop">
            <a href="#comment" onClick={onNavTo("comment")}>
              Comment ça fonctionne
            </a>

            <a href="#livres" onClick={onNavTo("livres")}>
              Mes livres
            </a>

            <a href="#signes" className="btn btn-small btn-ghost" onClick={onNavTo("signes")}>
              Choisir un signe
            </a>

            <Link className="btn btn-small btn-ghost" href="/pricing">
              Tarifs
            </Link>

            <Link className="btn btn-small" href="/login">
              {isAuth ? "Mon compte" : "Se connecter"}
            </Link>
          </div>

          <button
            type="button"
            className="nav-burger"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen ? "true" : "false"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            ☰
          </button>

          <div className={`nav-mobile ${menuOpen ? "open" : ""}`} role="menu">
            <a href="#comment" onClick={onNavTo("comment")} role="menuitem">
              Comment ça fonctionne
            </a>

            <a href="#livres" onClick={onNavTo("livres")} role="menuitem">
              Mes livres
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
                Luna t’aide à voir plus clair à travers une discussion basée sur ton signe.
              </p>
            </div>

            <div className="hero-free-wrap hero-free-wrap-center" aria-label="Démarrage">
              <div className="hero-free hero-free-center">
                <h2 className="hero-free-title">
                  Parfois, tu as juste besoin d’en parler.
                </h2>

                <p className="hero-free-sub">
                  Une conversation privée pour mieux comprendre ce que tu ressens.
                </p>

                <a
                  href="#signes"
                  className="hero-free-btn hero-free-btn--pulse"
                  onClick={onNavTo("signes")}
                >
                  Parler avec Luna ✨
                </a>

                <a
                  href="#livres"
                  className="hero-free-btn"
                  onClick={onNavTo("livres")}
                  style={{ marginTop: 10 }}
                >
                  Découvrir les livres 📚
                </a>

                <div className="hero-free-note">
                  {isAuth
                    ? "Connectée · Accès immédiat"
                    : "Gratuit pour commencer · Discussion privée"}
                </div>
              </div>
            </div>

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
                <button type="button" className="btn btn-small btn-ghost" onClick={toggleSound}>
                  {soundOn ? "Couper le son" : "Activer le son"}
                </button>

                <span className="astro-video-hint">
                  {!soundReady ? "Le son démarre après un clic." : " "}
                </span>
              </div>

              <p className="astro-video-caption">Bienvenue sur Luna Astralis ✨</p>
            </div>

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

              <h2>L’Âme des Signes</h2>

              <p>
                Un guide complet pour explorer les 144 compatibilités amoureuses
                entre les douze signes du zodiaque.
              </p>

              <p>
                Découvre les forces, les défis, les dynamiques émotionnelles
                et le potentiel d’évolution de chaque union astrologique.
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
                  Voir tous mes livres
                </a>
              </div>
            </div>

            <div className="book-cta-cover" aria-label="Couverture du livre">
              <img
                src="/couverture-ame-des-signes.jpg"
                alt="Couverture du livre L’Âme des Signes"
              />
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
