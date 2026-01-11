"use client";

import React, { useMemo, useCallback } from "react";
import { supabase } from "../../lib/supabase/client";

type Plan = "guest" | "free" | "premium";

type Props = {
  isAuth: boolean;
  sessionEmail: string;
  plan: Plan;
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
  plan,
  freeLeft,
  signName,
  signDesc,
  bookUrl,
}: Props) {
  // ✅ compteur seulement si plan === "free"
  const showFreeCounter = plan === "free";

  const counterText = useMemo(() => {
    if (!showFreeCounter) return "";
    if (freeLeft <= 0) return "Limite gratuite atteinte";

    const plural = freeLeft > 1 ? "s" : "";
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
      <div className="chat-side-content">
        {/* ✅ Image : DESKTOP SEULEMENT (mobile = rien du tout) */}
        <div className="ai-face-wrap desktop-only" aria-hidden="true">
          <img
            className="ai-face"
            src="/ia-luna-astralis.png"
            alt=""
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

          <p className="chat-side-disclaimer">Outil d’exploration personnelle</p>
        </div>
      </div>

      <div className="chat-side-footer">
        {/* ✅ Compteur visible seulement en free */}
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
