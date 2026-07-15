"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { useAuth } from "./AuthProvider";

export default function SiteHeader() {
  const { isAuth } = useAuth();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const navigateToSection = useCallback(
    (id: string) => {
      if (typeof window === "undefined") {
        return;
      }

      const isHomePage =
        window.location.pathname === "/";

      if (!isHomePage) {
        window.location.href = `/#${id}`;
        return;
      }

      const element =
        document.getElementById(id);

      if (!element) {
        window.location.hash = `#${id}`;
        return;
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    []
  );

  const onNavTo = useCallback(
    (
      id: string
    ) =>
      (
        event: React.MouseEvent<HTMLAnchorElement>
      ) => {
        event.preventDefault();
        closeMenu();
        navigateToSection(id);
      },
    [
      closeMenu,
      navigateToSection,
    ]
  );

  useEffect(() => {
    setMenuOpen(false);
  }, [isAuth]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKey = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const onClick = (
      event: MouseEvent
    ) => {
      const target =
        event.target as HTMLElement | null;

      if (!target) {
        return;
      }

      if (
        target.closest(".nav-mobile") ||
        target.closest(".nav-burger")
      ) {
        return;
      }

      closeMenu();
    };

    window.addEventListener(
      "keydown",
      onKey
    );

    window.addEventListener(
      "click",
      onClick
    );

    return () => {
      window.removeEventListener(
        "keydown",
        onKey
      );

      window.removeEventListener(
        "click",
        onClick
      );
    };
  }, [
    menuOpen,
    closeMenu,
  ]);

  return (
    <header
      className="top"
      role="banner"
    >
      <Link
        className="brand"
        href="/"
        aria-label="Accueil Luna Astralis"
        onClick={closeMenu}
      >
        <div
          className="logo"
          aria-hidden="true"
        >
          <img
            src="/logo-luna-astralis-transparent.png"
            alt=""
          />
        </div>

        <div className="brand-text">
          <div className="brand-name">
            LUNA ASTRALIS
          </div>

          <div className="brand-sub">
            Astro & psycho
          </div>
        </div>
      </Link>

      <nav
        className="nav"
        aria-label="Navigation principale"
      >
        <div className="nav-desktop">
          <a
            href="/#comment"
            className="btn btn-small btn-ghost"
            onClick={onNavTo("comment")}
          >
            Comment ça fonctionne
          </a>

          <a
            href="/#livres"
            className="btn btn-small btn-ghost"
            onClick={onNavTo("livres")}
          >
            Mes livres
          </a>

          <a
            href="/#signes"
            className="btn btn-small btn-ghost"
            onClick={onNavTo("signes")}
          >
            Choisir un signe
          </a>

          <a
            href="/#rapports"
            className="btn btn-small btn-ghost"
            onClick={onNavTo("rapports")}
          >
            Rapports
          </a>

          <Link
            className="btn btn-small btn-ghost"
            href="/pricing"
            onClick={closeMenu}
          >
            Luna IA
          </Link>

          <Link
            className="btn btn-small"
            href="/login"
            onClick={closeMenu}
          >
            {isAuth
              ? "Mon compte"
              : "Se connecter"}
          </Link>
        </div>

        <button
          type="button"
          className="nav-burger"
          aria-label={
            menuOpen
              ? "Fermer le menu"
              : "Ouvrir le menu"
          }
          aria-expanded={menuOpen}
          aria-controls="navigation-mobile"
          onClick={() => {
            setMenuOpen(
              (currentValue) =>
                !currentValue
            );
          }}
        >
          ☰
        </button>

        <div
          id="navigation-mobile"
          className={`nav-mobile ${
            menuOpen ? "open" : ""
          }`}
          role="menu"
        >
          <a
            href="/#comment"
            onClick={onNavTo("comment")}
            role="menuitem"
          >
            Comment ça fonctionne
          </a>

          <a
            href="/#livres"
            onClick={onNavTo("livres")}
            role="menuitem"
          >
            Mes livres
          </a>

          <a
            href="/#signes"
            onClick={onNavTo("signes")}
            role="menuitem"
          >
            Choisir un signe
          </a>

          <a
            href="/#rapports"
            onClick={onNavTo("rapports")}
            role="menuitem"
          >
            Rapports
          </a>

          <Link
            href="/pricing"
            onClick={closeMenu}
            role="menuitem"
          >
            Luna IA
          </Link>

          <Link
            href="/login"
            onClick={closeMenu}
            role="menuitem"
          >
            {isAuth
              ? "Mon compte"
              : "Se connecter"}
          </Link>
        </div>
      </nav>
    </header>
  );
}
