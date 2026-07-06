"use client";

import Link from "next/link";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

const LS_SIGN_KEY = "la_sign";
const COOKIE_SIGN_KEY = "la_sign";
const SIGN_PARAM = "sign";

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

export default function SignGrid() {
  const router = useRouter();
  const { isAuth } = useAuth();

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

  return (
    <section id="signes" className="section">
      <div className="section-head">
        <h2>Choisir un signe</h2>
        <p className="section-sub">
          Clique un signe : si tu n'es pas connectée, on te redirige vers le login.
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
  );
}
