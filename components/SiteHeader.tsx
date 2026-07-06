"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";

export default function SiteHeader() {
  const { isAuth } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
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
  );
}
