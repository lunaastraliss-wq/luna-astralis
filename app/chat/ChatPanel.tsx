"use client";

import React, { useCallback, useEffect, useRef } from "react";

type ThreadMsg = { role: "user" | "ai"; text: string };

function TopBar({
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
        <a className="chat-back" href="/#signes">
          Changer de signe
        </a>

        {isAuth ? (
          <>
            <a className="chat-upgrade" href="/pricing">
              Upgrade
            </a>
            <a className="chat-logout" href="#" onClick={onLogout}>
              Déconnexion
            </a>
          </>
        ) : (
          <a className="chat-upgrade" href="/pricing">
            Offres
          </a>
        )}
      </div>
    </>
  );
}

function autoGrow(el: HTMLTextAreaElement) {
  el.style.height = "auto";
  const maxPx = 180;
  el.style.height = Math.min(el.scrollHeight, maxPx) + "px";
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

  const taRef = useRef<HTMLTextAreaElement | null>(null);

  // Auto-grow + stabilité mobile
  useEffect(() => {
    const el = taRef.current;
    if (!el) return;
    autoGrow(el);
  }, [input]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (disabled) return;

      // Enter = envoyer / Shift+Enter = saut de ligne
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        // Déclenche le submit du form
        const form = (e.currentTarget as any)?.form as HTMLFormElement | null;
        form?.requestSubmit?.();
      }
    },
    [disabled]
  );

  const onFocus = useCallback(() => {
    // aide Android/iOS à ne pas cacher le champ sous le clavier
    setTimeout(() => {
      taRef.current?.scrollIntoView({ block: "nearest" });
    }, 50);
  }, []);

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
            Historique
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

      {/* ✅ textarea = beaucoup plus fiable sur mobile */}
      <form className="chat-inputbar" onSubmit={onSend} autoComplete="off">
        <textarea
          ref={taRef}
          className="chat-input"
          placeholder="Écris ton message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          autoComplete="off"
          disabled={disabled}
          rows={1}
          // Mobile-friendly
          inputMode="text"
          autoCapitalize="sentences"
          autoCorrect="on"
          spellCheck
        />
        <button className="chat-send" type="submit" disabled={disabled || !input.trim()}>
          Envoyer
        </button>
      </form>
    </section>
  );
}

(ChatPanel as any).TopBar = TopBar;
