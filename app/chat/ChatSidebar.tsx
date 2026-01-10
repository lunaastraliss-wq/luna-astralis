"use client";

import React, { useMemo } from "react";
import { supabase } from "../../lib/supabase/client";

type Props = {
  isAuth: boolean;
  sessionEmail: string;
  freeLeft: number;
  signName: string;
  signDesc: string;
  bookUrl: string;
};

export default function ChatSidebar({
  isAuth,
  sessionEmail,
  freeLeft,
  signName,
  signDesc,
  bookUrl,
}: Props) {
  // Compteur seulement en mode guest (non connecté)
  const showFreeCounter = !isAuth;

  const counterText = useMemo(() => {
    return freeLeft > 0
      ? `Gratuit : ${freeLeft} message(s) restant(s)`
      : "Limite gratuite atteinte";
  }, [freeLeft]);

  // ✅ Admin: limite à tes emails (ajuste si tu veux)
  const isAdmin = useMemo(() => {
    const email = (sessionEmail || "").toLowerCase().trim();
    return (
      email === "kemaprintstudio@gmail.com" ||
      email === "spinoz.fr@gmail.com" ||
      email === "comptanetquebec@gmail.com"
    );
  }, [sessionEmail]);

  const resetApp = async () => {
    const ok = confirm(
      "Reset local (admin) : déconnexion + vider localStorage + cookies. Continuer ?"
    );
    if (!ok) return;

    // 1) Déconnexion Supabase (client) si possible
    try {
      await supabase.auth.signOut();
    } catch {}

    // 2) localStorage
    try {
      localStorage.clear();
    } catch {}

    // 3) cookies
    try {
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/");
      });
    } catch {}

    // 4) reload
    try {
      location.assign("/");
    } catch {
      location.reload();
    }
  };

  return (
    <aside className="chat-side" aria-label="Profil IA">
      <div className="chat-side-header">
        <div className="chat-side-title">Luna</div>
      </div>

      <div className="chat-side-content">
        <div className="ai-face-wrap ai-face-small">
          <img
            className="ai-face"
            src="/ia-luna-astralis.png"
            alt="Luna (IA)"
            loading="lazy"
          />
        </div>

        <div className="chat-side-center">
          <p className="chat-side-p">
            <strong>Signe :</strong> {signName}
          </p>

          <p className="chat-side-muted">{signDesc}</p>

          {!!bookUrl && (
            <a
              className="book-btn"
              href={bookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Approfondir ce signe"
              title="Approfondir ce signe"
            >
              ✦ Approfondir ce signe
            </a>
          )}

          {/* ✅ Compteur guest (visible sans scroller) */}
          {showFreeCounter && (
            <div
              className="free-counter"
              id="freeCounter"
              style={{
                marginTop: 12,
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.06)",
                fontSize: 13,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {counterText}
            </div>
          )}

          {/* Email seulement si connecté */}
          {isAuth && !!sessionEmail && (
            <p className="chat-side-muted" style={{ marginTop: 10 }}>
              {sessionEmail}
            </p>
          )}

          <p className="chat-side-muted" style={{ marginTop: 12 }}>
            Outil d’exploration personnelle, non thérapeutique. Aucune thérapie,
            aucun diagnostic.
          </p>

          {/* ✅ Bouton reset (admin uniquement) */}
          {isAdmin && (
            <button
              type="button"
              onClick={resetApp}
              style={{
                margin: "12px auto 0",
                display: "block",
                fontSize: 11,
                opacity: 0.45,
                background: "transparent",
                border: "none",
                color: "#9aa",
                cursor: "pointer",
              }}
              aria-label="Reset admin"
              title="Reset admin"
            >
              reset admin
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
