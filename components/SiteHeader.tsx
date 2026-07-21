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

  const [horoscopeOpen, setHoroscopeOpen] =
    useState(false);

  const [
    compatibilityOpen,
    setCompatibilityOpen,
  ] = useState(false);

  const [astrologyOpen, setAstrologyOpen] =
    useState(false);

  const [
    mobileHoroscopeOpen,
    setMobileHoroscopeOpen,
  ] = useState(false);

  const [
    mobileCompatibilityOpen,
    setMobileCompatibilityOpen,
  ] = useState(false);

  const [
    mobileAstrologyOpen,
    setMobileAstrologyOpen,
  ] = useState(false);

  const horoscopeRef =
    useRef<HTMLDivElement | null>(null);

  const compatibilityRef =
    useRef<HTMLDivElement | null>(null);

  const astrologyRef =
    useRef<HTMLDivElement | null>(null);

  const closeDesktopDropdowns =
    useCallback(() => {
      setHoroscopeOpen(false);
      setCompatibilityOpen(false);
      setAstrologyOpen(false);
    }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);

    closeDesktopDropdowns();

    setMobileHoroscopeOpen(false);
    setMobileCompatibilityOpen(false);
    setMobileAstrologyOpen(false);
  }, [closeDesktopDropdowns]);

  useEffect(() => {
    closeMenu();
  }, [isAuth, closeMenu]);

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

      const insideDesktopDropdown =
        horoscopeRef.current?.contains(target) ||
        compatibilityRef.current?.contains(
          target
        ) ||
        astrologyRef.current?.contains(target);

      if (insideDesktopDropdown) {
        return;
      }

      const insideMobileMenu =
        target.closest(".premium-mobile-menu") ||
        target.closest(
          ".premium-menu-toggle"
        );

      if (insideMobileMenu) {
        return;
      }

      closeDesktopDropdowns();

      if (menuOpen) {
        setMenuOpen(false);
        setMobileHoroscopeOpen(false);
        setMobileCompatibilityOpen(false);
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
  }, [
    closeDesktopDropdowns,
    closeMenu,
    menuOpen,
  ]);

  const toggleHoroscope = () => {
    setHoroscopeOpen(
      (currentValue) => !currentValue
    );

    setCompatibilityOpen(false);
    setAstrologyOpen(false);
  };

  const toggleCompatibility = () => {
    setCompatibilityOpen(
      (currentValue) => !currentValue
    );

    setHoroscopeOpen(false);
    setAstrologyOpen(false);
  };

  const toggleAstrology = () => {
    setAstrologyOpen(
      (currentValue) => !currentValue
    );

    setHoroscopeOpen(false);
    setCompatibilityOpen(false);
  };

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

          {/* Horoscope */}

          <div
            className="premium-dropdown"
            ref={horoscopeRef}
          >
            <button
              type="button"
              className={`premium-nav-link premium-dropdown-button ${
                horoscopeOpen
                  ? "premium-dropdown-button--open"
                  : ""
              }`}
              aria-expanded={horoscopeOpen}
              aria-haspopup="true"
              onClick={toggleHoroscope}
            >
              <span>Horoscope</span>

              <span
                className="premium-dropdown-arrow"
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <div
              className={`premium-dropdown-menu premium-dropdown-menu--compact ${
                horoscopeOpen
                  ? "premium-dropdown-menu--open"
                  : ""
              }`}
            >
              <div className="premium-dropdown-intro">
                <span className="premium-dropdown-icon">
                  🔮
                </span>

                <div>
                  <strong>
                    Votre horoscope
                  </strong>

                  <span>
                    Gratuit ou personnalisé
                  </span>
                </div>
              </div>

              <div className="premium-dropdown-grid">
                <Link
                  href="/horoscope"
                  onClick={closeMenu}
                >
                  <span>☀</span>

                  <div>
                    <strong>
                      Horoscope gratuit
                    </strong>

                    <small>
                      Les 12 signes du jour
                    </small>
                  </div>
                </Link>

                <Link
                  href="/horoscope/premium/jour"
                  onClick={closeMenu}
                >
                  <span>✦</span>

                  <div>
                    <strong>
                      Premium du jour
                    </strong>

                    <small>
                      Votre journée personnalisée
                    </small>
                  </div>
                </Link>

                <Link
                  href="/horoscope/premium/mois"
                  onClick={closeMenu}
                >
                  <span>☾</span>

                  <div>
                    <strong>
                      Premium du mois
                    </strong>

                    <small>
                      Vos tendances du mois
                    </small>
                  </div>
                </Link>

                <Link
                  href="/horoscope/premium/annee"
                  onClick={closeMenu}
                >
                  <span>★</span>

                  <div>
                    <strong>
                      Premium de l’année
                    </strong>

                    <small>
                      Votre année complète
                    </small>
                  </div>
                </Link>

                <Link
                  href="/horoscope/premium"
                  onClick={closeMenu}
                >
                  <span>☰</span>

                  <div>
                    <strong>
                      Comparer les offres
                    </strong>

                    <small>
                      Jour, mois ou année
                    </small>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/carte-du-ciel"
            className="premium-nav-link"
            onClick={closeMenu}
          >
            Carte du ciel
          </Link>

          {/* Compatibilité */}

          <div
            className="premium-dropdown"
            ref={compatibilityRef}
          >
            <button
              type="button"
              className={`premium-nav-link premium-nav-link--highlight premium-dropdown-button ${
                compatibilityOpen
                  ? "premium-dropdown-button--open"
                  : ""
              }`}
              aria-expanded={
                compatibilityOpen
              }
              aria-haspopup="true"
              onClick={toggleCompatibility}
            >
              <span>Compatibilité</span>

              <span
                className="premium-dropdown-arrow"
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <div
              className={`premium-dropdown-menu premium-dropdown-menu--compact ${
                compatibilityOpen
                  ? "premium-dropdown-menu--open"
                  : ""
              }`}
            >
              <div className="premium-dropdown-intro">
                <span className="premium-dropdown-icon">
                  💕
                </span>

                <div>
                  <strong>
                    Compatibilité amoureuse
                  </strong>

                  <span>
                    Gratuite ou personnalisée
                  </span>
                </div>
              </div>

              <div className="premium-dropdown-grid">
                <Link
                  href="/compatibilite"
                  onClick={closeMenu}
                >
                  <span>♡</span>

                  <div>
                    <strong>
                      Compatibilité gratuite
                    </strong>

                    <small>
                      Comparez deux signes
                    </small>
                  </div>
                </Link>

                <Link
                  href="/compatibilite/premium"
                  onClick={closeMenu}
                >
                  <span>✦</span>

                  <div>
                    <strong>
                      Compatibilité Premium
                    </strong>

                    <small>
                      Analyse complète du couple
                    </small>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Astrologie */}

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
              onClick={toggleAstrology}
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

          {/* Horoscope mobile */}

          <button
            type="button"
            className="premium-mobile-dropdown-button"
            aria-expanded={
              mobileHoroscopeOpen
            }
            onClick={() => {
              setMobileHoroscopeOpen(
                (currentValue) =>
                  !currentValue
              );

              setMobileCompatibilityOpen(
                false
              );

              setMobileAstrologyOpen(false);
            }}
          >
            <span className="premium-mobile-link-left">
              <span>🔮</span>
              Horoscope
            </span>

            <span
              className={`premium-mobile-arrow ${
                mobileHoroscopeOpen
                  ? "premium-mobile-arrow--open"
                  : ""
              }`}
            >
              ▾
            </span>
          </button>

          <div
            className={`premium-mobile-submenu ${
              mobileHoroscopeOpen
                ? "premium-mobile-submenu--open"
                : ""
            }`}
          >
            <Link
              href="/horoscope"
              onClick={closeMenu}
            >
              Horoscope du jour gratuit
            </Link>

            <Link
              href="/horoscope/premium/jour"
              onClick={closeMenu}
            >
              ✦ Premium du jour
            </Link>

            <Link
              href="/horoscope/premium/mois"
              onClick={closeMenu}
            >
              ☾ Premium du mois
            </Link>

            <Link
              href="/horoscope/premium/annee"
              onClick={closeMenu}
            >
              ★ Premium de l’année
            </Link>

            <Link
              href="/horoscope/premium"
              onClick={closeMenu}
            >
              Comparer les offres
            </Link>
          </div>

          <Link
            href="/carte-du-ciel"
            onClick={closeMenu}
          >
            <span>🌌</span>
            Carte du ciel
          </Link>

          {/* Compatibilité mobile */}

          <button
            type="button"
            className="premium-mobile-dropdown-button premium-mobile-highlight"
            aria-expanded={
              mobileCompatibilityOpen
            }
            onClick={() => {
              setMobileCompatibilityOpen(
                (currentValue) =>
                  !currentValue
              );

              setMobileHoroscopeOpen(false);
              setMobileAstrologyOpen(false);
            }}
          >
            <span className="premium-mobile-link-left">
              <span>💕</span>
              Compatibilité
            </span>

            <span
              className={`premium-mobile-arrow ${
                mobileCompatibilityOpen
                  ? "premium-mobile-arrow--open"
                  : ""
              }`}
            >
              ▾
            </span>
          </button>

          <div
            className={`premium-mobile-submenu ${
              mobileCompatibilityOpen
                ? "premium-mobile-submenu--open"
                : ""
            }`}
          >
            <Link
              href="/compatibilite"
              onClick={closeMenu}
            >
              Compatibilité gratuite
            </Link>

            <Link
              href="/compatibilite/premium"
              onClick={closeMenu}
            >
              ✦ Compatibilité Premium
            </Link>
          </div>

          {/* Astrologie mobile */}

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

              setMobileHoroscopeOpen(false);
              setMobileCompatibilityOpen(
                false
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
