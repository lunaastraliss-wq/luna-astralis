"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { useAuth } from "./AuthProvider";
import "./SiteHeader.css";

export default function SiteHeader() {
  const { isAuth } = useAuth();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [
    astrologyOpen,
    setAstrologyOpen,
  ] = useState(false);

  const [
    mobileAstrologyOpen,
    setMobileAstrologyOpen,
  ] = useState(false);

  const astrologyRef =
    useRef<HTMLDivElement | null>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setAstrologyOpen(false);
    setMobileAstrologyOpen(false);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setAstrologyOpen(false);
    setMobileAstrologyOpen(false);
  }, [isAuth]);

  useEffect(() => {
    const onKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const onPointerDown = (
      event: MouseEvent
    ) => {
      const target =
        event.target as HTMLElement | null;

      if (!target) {
        return;
      }

      if (
        astrologyRef.current?.contains(
          target
        )
      ) {
        return;
      }

      if (
        target.closest(".premium-mobile-menu") ||
        target.closest(".premium-menu-toggle")
      ) {
        return;
      }

      setAstrologyOpen(false);

      if (menuOpen) {
        setMenuOpen(false);
        setMobileAstrologyOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      onKeyDown
    );

    window.addEventListener(
      "mousedown",
      onPointerDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        onKeyDown
      );

      window.removeEventListener(
        "mousedown",
        onPointerDown
      );
    };
  }, [closeMenu, menuOpen]);

  return (
    <header
      className="premium-site-header"
      role="banner"
    >
      <div className="premium-header-glow" />

      <Link
        className="premium-brand"
        href="/"
        aria-label="Accueil Luna Astralis"
        onClick={closeMenu}
      >
        <div className="premium-logo">
          <img
            src="/logo-luna-astralis-transparent.png"
            alt="Luna Astralis"
          />
        </div>

        <div className="premium-brand-text">
          <div className="premium-brand-name">
            LUNA ASTRALIS
          </div>

          <div className="premium-brand-subtitle">
            Astrologie & découverte de soi
          </div>
        </div>
      </Link>

      <nav
        className="premium-navigation"
        aria-label="Navigation principale"
      >
        {/* Menu ordinateur */}

        <div className="premium-desktop-menu">
          <Link
            href="/"
            className="premium-nav-link"
            onClick={closeMenu}
          >
            Accueil
          </Link>

          <Link
            href="/horoscope"
            className="premium-nav-link"
            onClick={closeMenu}
          >
            Horoscope
          </Link>

          <Link
            href="/carte-du-ciel"
            className="premium-nav-link"
            onClick={closeMenu}
          >
            Carte du ciel
          </Link>

          <Link
            href="/compatibilite"
            className="premium-nav-link premium-nav-link--highlight"
            onClick={closeMenu}
          >
            Compatibilité
          </Link>

          {/* Sous-menu Astrologie */}

          <div
            className="premium-dropdown"
            ref={astrologyRef}
          >
            <button
              type="button"
              className={`premium-nav-link premium-dropdown-button ${
                astrologyOpen
                  ? "premium-dropdown-button--open"
                  : ""
              }`}
              aria-expanded={astrologyOpen}
              aria-haspopup="true"
              onClick={() => {
                setAstrologyOpen(
                  (currentValue) =>
                    !currentValue
                );
              }}
            >
              <span>Astrologie</span>

              <span
                className="premium-dropdown-arrow"
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <div
              className={`premium-dropdown-menu ${
                astrologyOpen
                  ? "premium-dropdown-menu--open"
                  : ""
              }`}
            >
              <div className="premium-dropdown-intro">
                <span className="premium-dropdown-icon">
                  ✦
                </span>

                <div>
                  <strong>
                    Explorer l’astrologie
                  </strong>

                  <span>
                    Signes, planètes, maisons et
                    aspects
                  </span>
                </div>
              </div>

              <div className="premium-dropdown-grid">
                <Link
                  href="/astrologie"
                  onClick={closeMenu}
                >
                  <span>✦</span>
                  <div>
                    <strong>
                      Découvrir l’astrologie
                    </strong>
                    <small>
                      La page principale
                    </small>
                  </div>
                </Link>

                <Link
                  href="/astrologie/signes"
                  onClick={closeMenu}
                >
                  <span>♈</span>
                  <div>
                    <strong>
                      Les signes
                    </strong>
                    <small>
                      Les 12 signes du zodiaque
                    </small>
                  </div>
                </Link>

                <Link
                  href="/astrologie/planetes"
                  onClick={closeMenu}
                >
                  <span>☉</span>
                  <div>
                    <strong>
                      Les planètes
                    </strong>
                    <small>
                      Leurs influences
                    </small>
                  </div>
                </Link>

                <Link
                  href="/astrologie/maisons"
                  onClick={closeMenu}
                >
                  <span>⌂</span>
                  <div>
                    <strong>
                      Les maisons
                    </strong>
                    <small>
                      Les domaines de vie
                    </small>
                  </div>
                </Link>

                <Link
                  href="/astrologie/aspects"
                  onClick={closeMenu}
                >
                  <span>△</span>
                  <div>
                    <strong>
                      Les aspects
                    </strong>
                    <small>
                      Les liens planétaires
                    </small>
                  </div>
                </Link>

                <Link
                  href="/astrologie/soleil"
                  onClick={closeMenu}
                >
                  <span>☀</span>
                  <div>
                    <strong>
                      Le Soleil
                    </strong>
                    <small>
                      Identité et vitalité
                    </small>
                  </div>
                </Link>

                <Link
                  href="/astrologie/lune"
                  onClick={closeMenu}
                >
                  <span>☾</span>
                  <div>
                    <strong>
                      La Lune
                    </strong>
                    <small>
                      Émotions et intuition
                    </small>
                  </div>
                </Link>

                <Link
                  href="/astrologie/ascendant"
                  onClick={closeMenu}
                >
                  <span>↑</span>
                  <div>
                    <strong>
                      L’Ascendant
                    </strong>
                    <small>
                      Image et personnalité
                    </small>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <a
            href="/#livres"
            className="premium-nav-link"
            onClick={closeMenu}
          >
            Livres
          </a>

          <Link
            href="/pricing"
            className="premium-nav-link"
            onClick={closeMenu}
          >
            Luna IA
          </Link>

          <Link
            href="/login"
            className="premium-account-button"
            onClick={closeMenu}
          >
            {isAuth
              ? "Mon compte"
              : "Se connecter"}
          </Link>
        </div>

        {/* Bouton mobile */}

        <button
          type="button"
          className="premium-menu-toggle"
          aria-label={
            menuOpen
              ? "Fermer le menu"
              : "Ouvrir le menu"
          }
          aria-expanded={menuOpen}
          aria-controls="premium-mobile-navigation"
          onClick={() => {
            setMenuOpen(
              (currentValue) =>
                !currentValue
            );
          }}
        >
          <span
            className={
              menuOpen
                ? "premium-burger premium-burger--open"
                : "premium-burger"
            }
          >
            <span />
            <span />
            <span />
          </span>
        </button>

        {/* Menu mobile */}

        <div
          id="premium-mobile-navigation"
          className={`premium-mobile-menu ${
            menuOpen
              ? "premium-mobile-menu--open"
              : ""
          }`}
        >
          <Link
            href="/"
            onClick={closeMenu}
          >
            <span>⌂</span>
            Accueil
          </Link>

          <Link
            href="/horoscope"
            onClick={closeMenu}
          >
            <span>🔮</span>
            Horoscope
          </Link>

          <Link
            href="/carte-du-ciel"
            onClick={closeMenu}
          >
            <span>🌌</span>
            Carte du ciel
          </Link>

          <Link
            href="/compatibilite"
            className="premium-mobile-highlight"
            onClick={closeMenu}
          >
            <span>💕</span>
            Compatibilité
          </Link>

          <button
            type="button"
            className="premium-mobile-dropdown-button"
            aria-expanded={
              mobileAstrologyOpen
            }
            onClick={() => {
              setMobileAstrologyOpen(
                (currentValue) =>
                  !currentValue
              );
            }}
          >
            <span className="premium-mobile-link-left">
              <span>✦</span>
              Astrologie
            </span>

            <span
              className={`premium-mobile-arrow ${
                mobileAstrologyOpen
                  ? "premium-mobile-arrow--open"
                  : ""
              }`}
            >
              ▾
            </span>
          </button>

          <div
            className={`premium-mobile-submenu ${
              mobileAstrologyOpen
                ? "premium-mobile-submenu--open"
                : ""
            }`}
          >
            <Link
              href="/astrologie"
              onClick={closeMenu}
            >
              Découvrir l’astrologie
            </Link>

            <Link
              href="/astrologie/signes"
              onClick={closeMenu}
            >
              Les signes
            </Link>

            <Link
              href="/astrologie/planetes"
              onClick={closeMenu}
            >
              Les planètes
            </Link>

            <Link
              href="/astrologie/maisons"
              onClick={closeMenu}
            >
              Les maisons
            </Link>

            <Link
              href="/astrologie/aspects"
              onClick={closeMenu}
            >
              Les aspects
            </Link>

            <Link
              href="/astrologie/soleil"
              onClick={closeMenu}
            >
              Le Soleil
            </Link>

            <Link
              href="/astrologie/lune"
              onClick={closeMenu}
            >
              La Lune
            </Link>

            <Link
              href="/astrologie/ascendant"
              onClick={closeMenu}
            >
              L’Ascendant
            </Link>
          </div>

          <a
            href="/#livres"
            onClick={closeMenu}
          >
            <span>📚</span>
            Livres
          </a>

          <Link
            href="/pricing"
            onClick={closeMenu}
          >
            <span>✧</span>
            Luna IA
          </Link>

          <Link
            href="/login"
            className="premium-mobile-account"
            onClick={closeMenu}
          >
            <span>♙</span>

            {isAuth
              ? "Mon compte"
              : "Se connecter"}
          </Link>
        </div>
      </nav>
    </header>
  );
}
