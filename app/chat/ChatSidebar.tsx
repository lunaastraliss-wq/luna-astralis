"use client";

import React from "react";

export default function ChatSidebar(props: {
  isAuth: boolean;
  sessionEmail: string;
  freeLeft: number;
  signName: string;
  signDesc: string;
  bookUrl: string;
}) {
  const { isAuth, sessionEmail, freeLeft, signName, signDesc, bookUrl } = props;

  return (
    <aside className="chat-side" aria-label="Profil IA">
      <div className="chat-side-content">
        <div className="ai-face-wrap">
          <img className="ai-face" src="/ia-luna-astralis.png" alt="Luna (IA)" />
        </div>

        <div className="ai-name">Luna</div>
        <div className="ai-tag">Signe : {signName}</div>
        <div className="ai-desc">{signDesc}</div>

        {!!bookUrl && (
          <div className="ai-book">
            <a
              className="ai-book-link"
              href={bookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Approfondir ce signe"
              title="Approfondir ce signe"
            >
              ✦ Approfondir ce signe
            </a>
          </div>
        )}

        {isAuth && !!sessionEmail && (
          <div style={{ marginTop: 10, fontSize: 12, opacity: 0.75 }}>
            {sessionEmail}
          </div>
        )}

        <div className="ai-disclaimer">
          Outil d’exploration personnelle, non thérapeutique. Aucune thérapie, aucun diagnostic.
        </div>
      </div>

      {!isAuth && (
        <div id="freeCounter">
          {freeLeft > 0 ? `Gratuit : ${freeLeft} message(s) restant(s)` : "Limite gratuite atteinte"}
        </div>
      )}
    </aside>
  );
}
