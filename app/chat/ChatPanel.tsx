"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";

import fr from "../../i18n/migrated/fr/app/chat/chatpanel.json";
import en from "../../i18n/migrated/en/app/chat/chatpanel.json";
import es from "../../i18n/migrated/es/app/chat/chatpanel.json";
import de from "../../i18n/migrated/de/app/chat/chatpanel.json";
import it from "../../i18n/migrated/it/app/chat/chatpanel.json";
import pt from "../../i18n/migrated/pt/app/chat/chatpanel.json";

export type ThreadMsg = {
  role: "user" | "ai";
  text: string;
};

type Lang = "fr" | "en" | "es" | "de" | "it" | "pt";

const DICTS: Record<Lang, Record<string, string>> = {
  fr: fr as Record<string, string>,
  en: en as Record<string, string>,
  es: es as Record<string, string>,
  de: de as Record<string, string>,
  it: it as Record<string, string>,
  pt: pt as Record<string, string>,
};

const UI_TEXT: Record<
  Lang,
  {
    discussion: string;
    logoutDesktop: string;
    logoutMobile: string;
    loginDesktop: string;
    loginMobile: string;
    send: string;
    home: string;
    lunaAstralis: string;
    lunaAI: string;
    placeholder: string;
    astroPsycho: string;
  }
> = {
  fr: {
    discussion: "Discussion",
    logoutDesktop: "Déconnexion",
    logoutMobile: "Quitter",
    loginDesktop: "Se connecter",
    loginMobile: "Connexion",
    send: "Envoyer",
    home: "Retour à l’accueil",
    lunaAstralis: "Luna Astralis",
    lunaAI: "Luna IA",
    placeholder: "Écris ton message…",
    astroPsycho: "Astro-psycho",
  },

  en: {
    discussion: "Conversation",
    logoutDesktop: "Log out",
    logoutMobile: "Exit",
    loginDesktop: "Log in",
    loginMobile: "Login",
    send: "Send",
    home: "Back to home",
    lunaAstralis: "Luna Astralis",
    lunaAI: "Luna AI",
    placeholder: "Write your message…",
    astroPsycho: "Astro-psychology",
  },

  es: {
    discussion: "Conversación",
    logoutDesktop: "Cerrar sesión",
    logoutMobile: "Salir",
    loginDesktop: "Iniciar sesión",
    loginMobile: "Entrar",
    send: "Enviar",
    home: "Volver al inicio",
    lunaAstralis: "Luna Astralis",
    lunaAI: "Luna IA",
    placeholder: "Escribe tu mensaje…",
    astroPsycho: "Astropsicología",
  },

  de: {
    discussion: "Unterhaltung",
    logoutDesktop: "Abmelden",
    logoutMobile: "Beenden",
    loginDesktop: "Anmelden",
    loginMobile: "Login",
    send: "Senden",
    home: "Zur Startseite",
    lunaAstralis: "Luna Astralis",
    lunaAI: "Luna KI",
    placeholder: "Schreibe deine Nachricht…",
    astroPsycho: "Astro-Psychologie",
  },

  it: {
    discussion: "Conversazione",
    logoutDesktop: "Disconnetti",
    logoutMobile: "Esci",
    loginDesktop: "Accedi",
    loginMobile: "Accedi",
    send: "Invia",
    home: "Torna alla home",
    lunaAstralis: "Luna Astralis",
    lunaAI: "Luna IA",
    placeholder: "Scrivi il tuo messaggio…",
    astroPsycho: "Astropsicologia",
  },

  pt: {
    discussion: "Conversa",
    logoutDesktop: "Sair da conta",
    logoutMobile: "Sair",
    loginDesktop: "Entrar",
    loginMobile: "Entrar",
    send: "Enviar",
    home: "Voltar ao início",
    lunaAstralis: "Luna Astralis",
    lunaAI: "Luna IA",
    placeholder: "Escreva sua mensagem…",
    astroPsycho: "Astropsicologia",
  },
};

function getLangFromPath(pathname: string | null): Lang {
  if (pathname) {
    const firstSegment = pathname.split("/").filter(Boolean)[0]?.toLowerCase();

    if (
      firstSegment === "fr" ||
      firstSegment === "en" ||
      firstSegment === "es" ||
      firstSegment === "de" ||
      firstSegment === "it" ||
      firstSegment === "pt"
    ) {
      return firstSegment;
    }
  }

  if (typeof document !== "undefined") {
    const htmlLang = document.documentElement.lang
      ?.toLowerCase()
      .split("-")[0];

    if (
      htmlLang === "fr" ||
      htmlLang === "en" ||
      htmlLang === "es" ||
      htmlLang === "de" ||
      htmlLang === "it" ||
      htmlLang === "pt"
    ) {
      return htmlLang;
    }
  }

  return "fr";
}

function useChatLanguage() {
  const pathname = usePathname();

  const lang = useMemo(() => {
    return getLangFromPath(pathname);
  }, [pathname]);

  const dict = DICTS[lang];
  const ui = UI_TEXT[lang];

  const t = (key: string, fallback: string) => {
    return dict?.[key] || fallback;
  };

  return {
    lang,
    dict,
    ui,
    t,
    pathname,
  };
}

/* =========================================================
   TOP BAR
========================================================= */

export function TopBar({
  isAuth,
  onLogout,
}: {
  isAuth: boolean;
  onLogout: (e: React.MouseEvent) => void;
}) {
  const { lang, ui, t, pathname } = useChatLanguage();

  const currentPath =
    pathname || `/${lang}/chat`;

  const loginHref =
    `/login?next=${encodeURIComponent(currentPath)}`;

  const homeHref = `/${lang}`;

  return (
    <>
      <a
        className="chat-brand"
        href={homeHref}
        aria-label={t("retour_a_l_accueil", ui.home)}
      >
        <img
          className="chat-logo"
          src="/logo-luna-astralis-transparent.png"
          alt={t("luna_astralis", ui.lunaAstralis)}
        />

        <div className="chat-brand-text">
          <div className="chat-brand-name">
            {t("luna_astralis_2", ui.lunaAstralis)}
          </div>

          <div className="chat-brand-sub">
            {t("astro_psycho", ui.astroPsycho)}
          </div>
        </div>
      </a>

      <div className="chat-top-actions">
        {isAuth ? (
          <a
            className="chat-logout"
            href="#"
            onClick={onLogout}
            aria-label={t("deconnexion", ui.logoutDesktop)}
          >
            <span className="hide-mobile">
              {t("deconnexion_2", ui.logoutDesktop)}
            </span>

            <span className="show-mobile">
              {ui.logoutMobile}
            </span>
          </a>
        ) : (
          <a
            className="chat-login"
            href={loginHref}
            aria-label={t("se_connecter", ui.loginDesktop)}
          >
            <span className="hide-mobile">
              {t("se_connecter_2", ui.loginDesktop)}
            </span>

            <span className="show-mobile">
              {ui.loginMobile}
            </span>
          </a>
        )}
      </div>
    </>
  );
}

/* =========================================================
   CHAT PANEL
========================================================= */

export default function ChatPanel(props: {
  signName: string;
  tail: ThreadMsg[];
  messagesRef: React.RefObject<HTMLDivElement | null>;
  input: string;
  setInput: (v: string) => void;
  onSend: (e: React.FormEvent) => void;
  disabled: boolean;
}) {
  const {
    signName,
    tail,
    messagesRef,
    input,
    setInput,
    onSend,
    disabled,
  } = props;

  const { ui, t } = useChatLanguage();

  return (
    <section className="chat-main">
      <div className="chat-header">
        <div className="chat-header-left">
          <div className="chat-header-title">
            {ui.discussion} {signName}
          </div>
        </div>

        <div className="chat-header-right">
          <div
            className="ai-face-mini-wrap"
            aria-hidden="true"
          >
            <img
              className="ai-face-mini"
              src="/ia-luna-astralis.png"
              alt=""
            />
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
            className={
              "msg-row " +
              (m.role === "ai"
                ? "msg-ai"
                : "msg-user")
            }
          >
            {m.role === "ai" ? (
              <img
                className="msg-avatar"
                src="/ia-luna-astralis.png"
                alt={t("luna_ia", ui.lunaAI)}
              />
            ) : (
              <div className="msg-avatar-spacer" />
            )}

            <div className="msg-bubble">
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <form
        className="chat-inputbar"
        onSubmit={onSend}
        autoComplete="off"
      >
        <input
          className="chat-input"
          placeholder={t(
            "ecris_ton_message",
            ui.placeholder
          )}
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          autoComplete="off"
          disabled={disabled}
        />

        <button
          className="chat-send"
          type="submit"
          disabled={disabled}
        >
          <span className="hide-mobile">
            {ui.send}
          </span>

          <span className="show-mobile">
            ✨
          </span>
        </button>
      </form>
    </section>
  );
}
