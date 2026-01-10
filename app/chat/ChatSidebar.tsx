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
  // ✅ Affiche le compteur aussi pour les users connectés.
  // Si tu veux afficher le compteur seulement pour les guests, remets: const showCounter = !isAuth;
  const showCounter = true;

  const counterText = useMemo(() => {
    // Si user connecté, normalement freeLeft devrait être "infini" / non applicable
    // mais on affiche quand même ce que tu passes.
    if (typeof freeLeft !== "number") return "Compteur indisponible";
    return freeLeft > 0
      ? `Gratuit : ${freeLeft} message(s) restant(s)`
      : "Limite gratuite atteinte";
  }, [freeLeft]);

  // ✅ Admin: recommande de garder seulement TON email perso
  const isAdmin = useMemo(() => {
    const email = (sessionEmail || "").toLowerCase().trim();
    return email === "kemaprintstudio@gmail.com"; // <- mets seulement celui-là, ou enlève tout.
  }, [sessionEmail]);

  const resetApp = async () => {
    const ok = confirm(
      "Reset local (admin) : déconnexion + vider localStorage + cookies. Continuer ?"
    );
    if (!ok) return;

    try {
      await supabase.auth.signOut();
    } catch {}

    try {
      localStorage.clear();
    } catch {}

    try {
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/");
      });
    } catch {}

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

          {/* ✅ Compteur (toujours visible) */}
          {showCounter && (
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
              {isAuth && (
                <div style={{ marginTop: 6, fontSize: 11, opacity: 0.7 }}>
                  (Connecté)
                </div>
              )}
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
