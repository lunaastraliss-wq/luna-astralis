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

const ADMIN_EMAILS = new Set([
  "kemaprintstudio@gmail.com",
  "spinoz.fr@gmail.com",
  "comptanetquebec@gmail.com",
]);

export default function ChatSidebar({
  isAuth,
  sessionEmail,
  freeLeft,
  signName,
  signDesc,
  bookUrl,
}: Props) {
  // ✅ compteur seulement en guest
  const showFreeCounter = !isAuth;

  const counterText = useMemo(() => {
    if (!showFreeCounter) return "";
    if (freeLeft <= 0) return "Limite gratuite atteinte";

    const plural = freeLeft > 1 ? "s" : "";
    // "gratuits" / "gratuit" suit le pluriel
    return `Il te reste ${freeLeft} message${plural} gratuit${plural}.`;
  }, [freeLeft, showFreeCounter]);

  const isAdmin = useMemo(() => {
    const email = (sessionEmail || "").toLowerCase().trim();
    return ADMIN_EMAILS.has(email);
  }, [sessionEmail]);

  const resetApp = useCallback(async () => {
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
        const name = c.split("=")[0]?.trim();
        if (!name) return;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
      });
    } catch {}

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

          {/* Email visible seulement si connecté */}
          {isAuth && !!sessionEmail && (
            <p className="chat-side-email">{sessionEmail}</p>
          )}

          {/* ✅ phrase plus pâle/petite via CSS .chat-side-disclaimer */}
          <p className="chat-side-disclaimer">
            Outil d’exploration personnelle, non thérapeutique. Aucune thérapie,
            aucun diagnostic.
          </p>
        </div>
      </div>

      <div className="chat-side-footer">
        {/* ✅ Compteur visible seulement en guest */}
        {showFreeCounter && (
          <div className="free-counter" id="freeCounter" aria-live="polite">
            {counterText}
          </div>
        )}

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
