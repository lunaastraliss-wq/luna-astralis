"use client";

import React, { useMemo, useCallback } from "react";
import { usePathname } from "next/navigation";
import { supabase } from "../../lib/supabase/client";

import fr from "../../i18n/migrated/fr/app/chat/chatsidebar.json";
import en from "../../i18n/migrated/en/app/chat/chatsidebar.json";
import es from "../../i18n/migrated/es/app/chat/chatsidebar.json";
import de from "../../i18n/migrated/de/app/chat/chatsidebar.json";
import it from "../../i18n/migrated/it/app/chat/chatsidebar.json";
import pt from "../../i18n/migrated/pt/app/chat/chatsidebar.json";

type Plan = "guest" | "free" | "premium";
type Lang = "fr" | "en" | "es" | "de" | "it" | "pt";

type Props = {
  isAuth: boolean;
  sessionEmail: string;

  plan: Plan;
  freeLeft: number | null;

  // slug exact du forfait payé
  // ex: "essential-month", "unlimited-year"
  planSlug?: string | null;

  signName: string;
  signDesc: string;
  bookUrl: string;
};

const DICTS: Record<Lang, Record<string, string>> = {
  fr: fr as Record<string, string>,
  en: en as Record<string, string>,
  es: es as Record<string, string>,
  de: de as Record<string, string>,
  it: it as Record<string, string>,
  pt: pt as Record<string, string>,
};

/*
  IMPORTANT :
  Les emails admin sont des identifiants techniques.
  Ils ne doivent PAS être traduits ni venir des fichiers i18n.
*/
const ADMIN_EMAILS = new Set([
  "kemaprintstudio@gmail.com",
  "spinoz.fr@gmail.com",
  "comptanetquebec@gmail.com",
]);

const UI_TEXT: Record<
  Lang,
  {
    profile: string;
    sign: string;
    book: string;
    deepen: string;
    plan: string;

    guest: string;
    free: string;
    premium: string;

    essentialMonthly: string;
    unlimitedMonthly: string;
    essentialYearly: string;
    unlimitedYearly: string;
    premiumAccess: string;

    limitReached: string;
    message: string;
    messages: string;

    disclaimer: string;

    resetConfirm: string;
    resetLabel: string;
    resetTitle: string;
    resetButton: string;
  }
> = {
  fr: {
    profile: "Profil IA",
    sign: "Signe :",
    book: "Livre",
    deepen: "Approfondir",
    plan: "Forfait",

    guest: "Invité",
    free: "Gratuit",
    premium: "Premium",

    essentialMonthly: "Essentiel · Mensuel",
    unlimitedMonthly: "Illimité · Mensuel",
    essentialYearly: "Essentiel · Annuel",
    unlimitedYearly: "Illimité · Annuel",
    premiumAccess: "Accès premium",

    limitReached: "Limite atteinte",
    message: "message",
    messages: "messages",

    disclaimer: "Outil d’exploration personnelle",

    resetConfirm:
      "Reset local (admin) : déconnexion + vider localStorage + cookies. Continuer ?",
    resetLabel: "Réinitialisation admin",
    resetTitle: "Réinitialiser les données locales",
    resetButton: "Reset admin",
  },

  en: {
    profile: "AI profile",
    sign: "Sign:",
    book: "Book",
    deepen: "Explore",
    plan: "Plan",

    guest: "Guest",
    free: "Free",
    premium: "Premium",

    essentialMonthly: "Essential · Monthly",
    unlimitedMonthly: "Unlimited · Monthly",
    essentialYearly: "Essential · Yearly",
    unlimitedYearly: "Unlimited · Yearly",
    premiumAccess: "Premium access",

    limitReached: "Limit reached",
    message: "message",
    messages: "messages",

    disclaimer: "Personal exploration tool",

    resetConfirm:
      "Local reset (admin): sign out + clear localStorage + cookies. Continue?",
    resetLabel: "Admin reset",
    resetTitle: "Reset local data",
    resetButton: "Admin reset",
  },

  es: {
    profile: "Perfil de IA",
    sign: "Signo:",
    book: "Libro",
    deepen: "Profundizar",
    plan: "Plan",

    guest: "Invitado",
    free: "Gratis",
    premium: "Premium",

    essentialMonthly: "Esencial · Mensual",
    unlimitedMonthly: "Ilimitado · Mensual",
    essentialYearly: "Esencial · Anual",
    unlimitedYearly: "Ilimitado · Anual",
    premiumAccess: "Acceso premium",

    limitReached: "Límite alcanzado",
    message: "mensaje",
    messages: "mensajes",

    disclaimer: "Herramienta de exploración personal",

    resetConfirm:
      "Restablecimiento local (admin): cerrar sesión + borrar localStorage + cookies. ¿Continuar?",
    resetLabel: "Restablecimiento admin",
    resetTitle: "Restablecer datos locales",
    resetButton: "Reset admin",
  },

  de: {
    profile: "KI-Profil",
    sign: "Sternzeichen:",
    book: "Buch",
    deepen: "Mehr erfahren",
    plan: "Tarif",

    guest: "Gast",
    free: "Kostenlos",
    premium: "Premium",

    essentialMonthly: "Essential · Monatlich",
    unlimitedMonthly: "Unbegrenzt · Monatlich",
    essentialYearly: "Essential · Jährlich",
    unlimitedYearly: "Unbegrenzt · Jährlich",
    premiumAccess: "Premium-Zugang",

    limitReached: "Limit erreicht",
    message: "Nachricht",
    messages: "Nachrichten",

    disclaimer: "Tool zur persönlichen Reflexion",

    resetConfirm:
      "Lokaler Reset (Admin): Abmelden + localStorage + Cookies löschen. Fortfahren?",
    resetLabel: "Admin-Reset",
    resetTitle: "Lokale Daten zurücksetzen",
    resetButton: "Admin-Reset",
  },

  it: {
    profile: "Profilo IA",
    sign: "Segno:",
    book: "Libro",
    deepen: "Approfondisci",
    plan: "Piano",

    guest: "Ospite",
    free: "Gratuito",
    premium: "Premium",

    essentialMonthly: "Essenziale · Mensile",
    unlimitedMonthly: "Illimitato · Mensile",
    essentialYearly: "Essenziale · Annuale",
    unlimitedYearly: "Illimitato · Annuale",
    premiumAccess: "Accesso premium",

    limitReached: "Limite raggiunto",
    message: "messaggio",
    messages: "messaggi",

    disclaimer: "Strumento di esplorazione personale",

    resetConfirm:
      "Reset locale (admin): disconnessione + cancellazione localStorage + cookie. Continuare?",
    resetLabel: "Reset admin",
    resetTitle: "Reimposta i dati locali",
    resetButton: "Reset admin",
  },

  pt: {
    profile: "Perfil da IA",
    sign: "Signo:",
    book: "Livro",
    deepen: "Aprofundar",
    plan: "Plano",

    guest: "Visitante",
    free: "Gratuito",
    premium: "Premium",

    essentialMonthly: "Essencial · Mensal",
    unlimitedMonthly: "Ilimitado · Mensal",
    essentialYearly: "Essencial · Anual",
    unlimitedYearly: "Ilimitado · Anual",
    premiumAccess: "Acesso premium",

    limitReached: "Limite atingido",
    message: "mensagem",
    messages: "mensagens",

    disclaimer: "Ferramenta de exploração pessoal",

    resetConfirm:
      "Redefinição local (admin): sair + limpar localStorage + cookies. Continuar?",
    resetLabel: "Redefinição admin",
    resetTitle: "Redefinir dados locais",
    resetButton: "Reset admin",
  },
};

function getLangFromPath(pathname: string | null): Lang {
  if (pathname) {
    const firstSegment = pathname
      .split("/")
      .filter(Boolean)[0]
      ?.toLowerCase();

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

function normalizeFreeLeft(v: number | null): number | null {
  if (typeof v !== "number") return null;
  if (!Number.isFinite(v)) return null;

  return Math.max(0, Math.trunc(v));
}

function labelFromPlan(
  plan: Plan,
  planSlug: string | null | undefined,
  lang: Lang
) {
  const ui = UI_TEXT[lang];

  if (plan === "guest") return ui.guest;
  if (plan === "free") return ui.free;
  if (plan !== "premium") return "";

  const slug = String(planSlug || "")
    .trim()
    .toLowerCase();

  switch (slug) {
    case "essential-month":
      return ui.essentialMonthly;

    case "unlimited-month":
      return ui.unlimitedMonthly;

    case "essential-year":
      return ui.essentialYearly;

    case "unlimited-year":
      return ui.unlimitedYearly;

    default:
      return ui.premiumAccess;
  }
}

export default function ChatSidebar({
  isAuth,
  sessionEmail,
  plan,
  freeLeft,
  planSlug,
  signName,
  signDesc,
  bookUrl,
}: Props) {
  const pathname = usePathname();

  const lang = useMemo(
    () => getLangFromPath(pathname),
    [pathname]
  );

  const dict = DICTS[lang];
  const ui = UI_TEXT[lang];

  const t = useCallback(
    (key: string, fallback: string) => {
      return dict?.[key] || fallback;
    },
    [dict]
  );

  const freeLeftNorm = useMemo(
    () => normalizeFreeLeft(freeLeft),
    [freeLeft]
  );

  /*
    Compteur seulement si plan === "free"
    ET freeLeft est un nombre valide.
  */
  const showFreeCounter =
    plan === "free" && freeLeftNorm !== null;

  const counterText = useMemo(() => {
    if (!showFreeCounter) return "";

    if ((freeLeftNorm ?? 0) <= 0) {
      return ui.limitReached;
    }

    const count = freeLeftNorm ?? 0;

    return `${count} ${
      count === 1 ? ui.message : ui.messages
    }`;
  }, [
    showFreeCounter,
    freeLeftNorm,
    ui.limitReached,
    ui.message,
    ui.messages,
  ]);

  const isAdmin = useMemo(() => {
    const email = (sessionEmail || "")
      .toLowerCase()
      .trim();

    return ADMIN_EMAILS.has(email);
  }, [sessionEmail]);

  const resetApp = useCallback(async () => {
    const ok = confirm(ui.resetConfirm);

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

        document.cookie =
          `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
      });
    } catch {}

    try {
      location.assign(`/${lang}`);
    } catch {
      location.reload();
    }
  }, [lang, ui.resetConfirm]);

  const showEmail =
    isAuth && !!sessionEmail;

  const planLabel = useMemo(
    () => labelFromPlan(plan, planSlug, lang),
    [plan, planSlug, lang]
  );

  const showPlanBadge =
    plan !== "guest";

  return (
    <aside
      className="chat-side"
      aria-label={t("profil_ia", ui.profile)}
    >
      <div className="chat-side-inner">
        {/* Image : desktop seulement */}
        <div className="chat-side-avatar-wrap">
          <img
            className="chat-side-avatar"
            src="/ia-luna-astralis.png"
            alt="Luna"
          />
        </div>

        <div className="chat-side-center">
          <p className="chat-side-p">
            <strong>
              {t("signe", ui.sign)}
            </strong>{" "}
            {signName}
          </p>

          <p className="chat-side-muted">
            {signDesc}
          </p>

          {!!bookUrl && (
            <a
              className="book-btn"
              href={bookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${ui.deepen} ${signName}`}
              title={`${ui.deepen} ${signName}`}
            >
              {t("livre", ui.book)}
            </a>
          )}

          {/* Badge forfait */}
          {showPlanBadge && (
            <p
              className="chat-side-plan"
              aria-label={ui.plan}
            >
              {plan === "premium"
                ? "✅ "
                : ""}
              {planLabel}
            </p>
          )}

          {showEmail && (
            <p className="chat-side-email">
              {sessionEmail}
            </p>
          )}

          <p className="chat-side-disclaimer">
            {t(
              "outil_d_exploration_personnelle",
              ui.disclaimer
            )}
          </p>
        </div>
      </div>

      <div className="chat-side-footer">
        {/* Compteur visible seulement en free */}
        {showFreeCounter && (
          <div
            className="free-counter"
            id="freeCounter"
            aria-live="polite"
          >
            {counterText}
          </div>
        )}

        {isAdmin && (
          <button
            type="button"
            onClick={resetApp}
            className="reset-admin-btn"
            aria-label={t(
              "reset_admin",
              ui.resetLabel
            )}
            title={t(
              "reset_admin_2",
              ui.resetTitle
            )}
          >
            {t(
              "reset_admin_3",
              ui.resetButton
            )}
          </button>
        )}
      </div>
    </aside>
  );
}
