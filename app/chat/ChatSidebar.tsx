"use client";

import React, { useMemo, useCallback } from "react";
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
  /**
   * ✅ Règle demandée :
   * - compteur affiché UNIQUEMENT quand c'est "free" (mode guest)
   * - dès que c'est payant (donc auth), pas de compteur (ok)
   */
  const showFreeCounter = !isAuth;

  const counterText = useMemo(() => {
    if (!showFreeCounter) return "";
    return freeLeft > 0
      ? `Gratuit : ${freeLeft} message(s) restant(s)`
      : "Limite gratuite atteinte";
  }, [freeLeft, showFreeCounter]);

  /**
   * ✅ Admin : seulement TES mails (comme tu voulais)
   * (on garde exactement ta logique)
   */
  const isAdmin = useMemo(() => {
    const email = (sessionEmail || "").toLowerCase().trim();
    return (
      email === "kemaprintstudio@gmail.com" ||
      email === "spinoz.fr@gmail.com" ||
      email === "comptanetquebec@gmail.com"
    );
  }, [sessionEmail]);

  const resetApp = useCallback(async () => {
    const ok = confirm(
      "Reset local (admin) : déconnexion + vider localStorage + cookies. Continuer ?"
    );
    if (!ok) return;

    // 1) Déconnexion Supabase
    try {
      await supabase.auth.signOut();
    } catch {}

    // 2) localStorage
    try {
      localStorage.clear();
    } catch {}

    // 3) cookies (best-effort)
    try {
      document.cookie.split(";").forEach((c) => {
        const name = c.split("=")[0]?.trim();
        if (!name) return;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
      });
    } catch {}

    // 4) reload
    try {
      location.assign("/");
    } catch {
      location.reload();
    }
  }, []);

  return (
    <aside className="chat-side" aria-label="Profil IA">
      <div className="chat-side-header">
        <div className="chat-side-title">Luna</div>
      </div>

      {/* ✅ Zone “milieu” (pas de scroll) */}
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

          {/* ✅ email visible seulement si connecté */}
          {isAuth && !!sessionEmail && (
            <p className="chat-side-muted" style={{ marginTop: 10 }}>
              {sessionEmail}
            </p>
          )}

          <p className="chat-side-muted" style={{ marginTop: 12 }}>
            Outil d’exploration personnelle, non thérapeutique. Aucune thérapie,
            aucun diagnostic.
          </p>
        </div>
      </div>

      {/* ✅ Footer (toujours visible) */}
      <div className="chat-side-footer">
        {/* ✅ Compteur visible seulement en free/guest */}
        {showFreeCounter && (
          <div className="free-counter" id="freeCounter">
            {counterText}
          </div>
        )}

        {/* ✅ Reset admin seulement pour tes mails */}
        {isAdmin && (
          <button
            type="button"
            onClick={resetApp}
            className="reset-admin-btn"
            aria-label="Reset admin"
            title="Reset admin"
          >
            reset admin
          </button>
        )}
      </div>
    </aside>
  );
}
