"use client";

import React from "react";

export type ThreadMsg = { role: "user" | "ai"; text: string };

export function TopBar({
  isAuth,
  onLogout,
}: {
  isAuth: boolean;
  onLogout: (e: React.MouseEvent) => void;
}) {
  return (
    <>
      <a className="chat-brand" href="/" aria-label="Retour à l’accueil">
        <img
          className="chat-logo"
          src="/logo-luna-astralis-transparent.png"
          alt="Luna Astralis"
        />
        <div className="chat-brand-text">
          <div className="chat-brand-name">LUNA ASTRALIS</div>
          <div className="chat-brand-sub">Astro & psycho</div>
        </div>
      </a>

      <div className="chat-top-actions">
        <a className="chat-back" href="/#signes" aria-label="Changer de signe">
          <span className="hide-mobile">Changer de signe</span>
          <span className="show-mobile">Signe</span>
        </a>

        {isAuth ? (
          <>
            <a className="chat-upgrade" href="/pricing" aria-label="Voir les offres">
              <span className="hide-mobile">Upgrade</span>
              <span className="show-mobile">Offres</span>
            </a>

            <a
              className="chat-logout"
              href="#"
              onClick={onLogout}
              aria-label="Déconnexion"
            >
              <span className="hide-mobile">Déconnexion</span>
              <span className="show-mobile">Quitter</span>
            </a>
          </>
        ) : (
          <a className="chat-upgrade" href="/pricing" aria-label="Voir les offres">
            <span className="hide-mobile">Offres</span>
            <span className="show-mobile">Offres</span>
          </a>
        )}
      </div>
    </>
  );
}

export default function ChatPanel(props: {
  signName: string;
  tail: ThreadMsg[];
  messagesRef: React.RefObject<HTMLDivElement>;
  input: string;
  setInput: (v: string) => void;
  onSend: (e: React.FormEvent) => void;
  onOpenHistory: () => void;
  disabled: boolean;
}) {
  const {
    signName,
    tail,
    messagesRef,
    input,
    setInput,
    onSend,
    onOpenHistory,
    disabled,
  } = props;

  return (
    <section className="chat-panel" aria-label="Discussion">
      <div className="chat-header">
        <div className="chat-title">
          Discussion <span className="chat-pill">{signName}</span>
        </div>

        <div className="chat-header-right">
          <button
            className="chat-history-btn"
            type="button"
            onClick={onOpenHistory}
            aria-label="Ouvrir l’historique"
            disabled={disabled}
          >
            <span className="hide-mobile">Historique</span>
            <span className="show-mobile">Hist.</span>
          </button>

          <div className="ai-face-mini-wrap" aria-hidden="true">
            <img className="ai-face-mini" src="/ia-luna-astralis.png" alt="" />
          </div>
        </div>
      </div>

      <div
        className="chat-messages"
        id="messages"
        ref={messagesRef}
        role="log"
        aria-live="polite"
      >
        {tail.map((m, idx) => (
          <div
            key={idx}
            className={"msg-row " + (m.role === "ai" ? "msg-ai" : "msg-user")}
          >
            {m.role === "ai" ? (
              <img
                className="msg-avatar"
                src="/ia-luna-astralis.png"
                alt="Luna (IA)"
              />
            ) : (
              <div className="msg-avatar-spacer" />
            )}

            <div className="msg-bubble">{m.text}</div>
          </div>
        ))}
      </div>

      <form className="chat-inputbar" onSubmit={onSend} autoComplete="off">
        <input
          className="chat-input"
          placeholder="Écris ton message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
          disabled={disabled}
        />
        <button className="chat-send" type="submit" disabled={disabled}>
          <span className="hide-mobile">Envoyer</span>
          <span className="show-mobile">Go</span>
        </button>
      </form>
    </section>
  );
}
