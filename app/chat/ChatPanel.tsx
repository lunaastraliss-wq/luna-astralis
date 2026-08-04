"use client";


import __i18n from "../../i18n/migrated/fr/app/chat/chatpanel.json";
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
      <a className="chat-brand" href="/" aria-label={__i18n["retour_a_l_accueil"]}>
        <img
          className="chat-logo"
          src="/logo-luna-astralis-transparent.png"
          alt={__i18n["luna_astralis"]}
        />
        <div className="chat-brand-text">
          <div className="chat-brand-name">{__i18n["luna_astralis_2"]}</div>
          <div className="chat-brand-sub">{__i18n["astro_psycho"]}</div>
        </div>
      </a>

      <div className="chat-top-actions">
        {isAuth ? (
          <a
            className="chat-logout"
            href="#"
            onClick={onLogout}
            aria-label={__i18n["deconnexion"]}
          >
            <span className="hide-mobile">{__i18n["deconnexion_2"]}</span>
            <span className="show-mobile">Quitter</span>
          </a>
        ) : (
          <a className="chat-login" href="/login?next=%2Fchat" aria-label={__i18n["se_connecter"]}>
            <span className="hide-mobile">{__i18n["se_connecter_2"]}</span>
            <span className="show-mobile">Login</span>
          </a>
        )}
      </div>
    </>
  );
}

export default function ChatPanel(props: {
  signName: string;
  tail: ThreadMsg[];
  messagesRef: React.RefObject<HTMLDivElement | null>;
  input: string;
  setInput: (v: string) => void;
  onSend: (e: React.FormEvent) => void;
  disabled: boolean;
}) {
  const { signName, tail, messagesRef, input, setInput, onSend, disabled } = props;

  return (
    <section className="chat-panel" aria-label="Discussion">
      <div className="chat-header">
        <div className="chat-title">
          Discussion <span className="chat-pill">{signName}</span>
        </div>

        <div className="chat-header-right">
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
                alt={__i18n["luna_ia"]}
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
          placeholder={__i18n["ecris_ton_message"]}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
          disabled={disabled}
        />
        <button className="chat-send" type="submit" disabled={disabled}>
          <span className="hide-mobile">Envoyer</span>
          <span className="show-mobile">✨</span>
        </button>
      </form>
    </section>
  );
}
