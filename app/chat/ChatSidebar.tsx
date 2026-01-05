"use client";

import React from "react";

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
  const showFreeCounter = !isAuth; // ✅ un seul endroit

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

      {showFreeCounter && (
        <div id="freeCounter" className="free-counter">
          {freeLeft > 0
            ? `Gratuit : ${freeLeft} message(s) restant(s)`
            : "Limite gratuite atteinte"}
        </div>
      )}
    </aside>
  );
}
