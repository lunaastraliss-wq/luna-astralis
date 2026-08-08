"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import fr from "../../i18n/migrated/fr/app/login/loginclient.json";
import en from "../../i18n/migrated/en/app/login/loginclient.json";
import es from "../../i18n/migrated/es/app/login/loginclient.json";
import de from "../../i18n/migrated/de/app/login/loginclient.json";
import it from "../../i18n/migrated/it/app/login/loginclient.json";
import pt from "../../i18n/migrated/pt/app/login/loginclient.json";

type MsgType = "ok" | "err" | "info";
type Lang = "fr" | "en" | "es" | "de" | "it" | "pt";

const LS_SIGN_KEY = "la_sign";
const LS_LANG_KEY = "la_lang";
const CANON_ORIGIN = "https://luna-astralis.app";

const DICTS: Record<Lang, Record<string, string>> = {
  fr: fr as Record<string, string>,
  en: en as Record<string, string>,
  es: es as Record<string, string>,
  de: de as Record<string, string>,
  it: it as Record<string, string>,
  pt: pt as Record<string, string>,
};

const UI: Record<
  Lang,
  {
    sessionError: string;
    genericError: string;
    validEmail: string;
    passwordMin: string;
    connecting: string;
    creatingAccount: string;
    accountCreated: string;
    loginFailed: string;
    openingGoogle: string;
    forgotEmailHint: string;
    sendingLink: string;
    emailSent: string;
    loggingOut: string;
    loggedOut: string;
    home: string;
    pricing: string;
    login: string;
    loginRequired: string;
    continue: string;
    logout: string;
    or: string;
    email: string;
    password: string;
    hidePassword: string;
    showPassword: string;
    hide: string;
    show: string;
    continueGoogle: string;
    forgotPassword: string;
    noAccountPrefix: string;
    noAccountAction: string;
    noAccountSuffix: string;
    astroPsycho: string;
    lunaAstralis: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
  }
> = {
  fr: {
    sessionError: "Erreur de session. Réessaie.",
    genericError: "Erreur. Réessaie.",
    validEmail: "Entre un email valide.",
    passwordMin: "Mot de passe : 6 caractères minimum.",
    connecting: "Connexion…",
    creatingAccount: "Création du compte…",
    accountCreated: "Compte créé. Confirme l’email reçu, puis reconnecte-toi.",
    loginFailed: "Connexion impossible. Réessaie.",
    openingGoogle: "Ouverture de Google…",
    forgotEmailHint: "Entre ton email, puis clique « Mot de passe oublié ? ».",
    sendingLink: "Envoi du lien…",
    emailSent: "Email envoyé. Vérifie la boîte de réception et les indésirables.",
    loggingOut: "Déconnexion…",
    loggedOut: "Déconnectée.",
    home: "Accueil Luna Astralis",
    pricing: "Tarifs",
    login: "Se connecter",
    loginRequired: "Connexion requise pour continuer.",
    continue: "Continuer",
    logout: "Se déconnecter",
    or: "ou",
    email: "Email",
    password: "Mot de passe",
    hidePassword: "Masquer le mot de passe",
    showPassword: "Afficher le mot de passe",
    hide: "Masquer",
    show: "Afficher",
    continueGoogle: "Continuer avec Google",
    forgotPassword: "Mot de passe oublié ?",
    noAccountPrefix: "Aucun compte ? Entre un email et un mot de passe puis clique sur",
    noAccountAction: "Se connecter",
    noAccountSuffix: "pour créer le compte.",
    astroPsycho: "Astro-psycho",
    lunaAstralis: "Luna Astralis",
    emailPlaceholder: "ex. toi@email.com",
    passwordPlaceholder: "6 caractères min.",
  },
  en: {
    sessionError: "Session error. Please try again.",
    genericError: "Something went wrong. Please try again.",
    validEmail: "Enter a valid email address.",
    passwordMin: "Password must be at least 6 characters.",
    connecting: "Signing in…",
    creatingAccount: "Creating account…",
    accountCreated: "Account created. Confirm the email you received, then sign in again.",
    loginFailed: "Unable to sign in. Please try again.",
    openingGoogle: "Opening Google…",
    forgotEmailHint: "Enter your email, then click “Forgot password?”.",
    sendingLink: "Sending link…",
    emailSent: "Email sent. Check your inbox and spam folder.",
    loggingOut: "Signing out…",
    loggedOut: "Signed out.",
    home: "Luna Astralis home",
    pricing: "Plans",
    login: "Sign in",
    loginRequired: "Sign in is required to continue.",
    continue: "Continue",
    logout: "Sign out",
    or: "or",
    email: "Email",
    password: "Password",
    hidePassword: "Hide password",
    showPassword: "Show password",
    hide: "Hide",
    show: "Show",
    continueGoogle: "Continue with Google",
    forgotPassword: "Forgot password?",
    noAccountPrefix: "No account? Enter an email and password, then click",
    noAccountAction: "Sign in",
    noAccountSuffix: "to create the account.",
    astroPsycho: "Astro-psychology",
    lunaAstralis: "Luna Astralis",
    emailPlaceholder: "e.g. you@email.com",
    passwordPlaceholder: "6 characters min.",
  },
  es: {
    sessionError: "Error de sesión. Inténtalo de nuevo.",
    genericError: "Error. Inténtalo de nuevo.",
    validEmail: "Introduce un correo electrónico válido.",
    passwordMin: "La contraseña debe tener al menos 6 caracteres.",
    connecting: "Iniciando sesión…",
    creatingAccount: "Creando cuenta…",
    accountCreated: "Cuenta creada. Confirma el correo recibido y vuelve a iniciar sesión.",
    loginFailed: "No se pudo iniciar sesión. Inténtalo de nuevo.",
    openingGoogle: "Abriendo Google…",
    forgotEmailHint: "Introduce tu correo y luego pulsa «¿Olvidaste tu contraseña?».",
    sendingLink: "Enviando enlace…",
    emailSent: "Correo enviado. Revisa la bandeja de entrada y el spam.",
    loggingOut: "Cerrando sesión…",
    loggedOut: "Sesión cerrada.",
    home: "Inicio de Luna Astralis",
    pricing: "Planes",
    login: "Iniciar sesión",
    loginRequired: "Debes iniciar sesión para continuar.",
    continue: "Continuar",
    logout: "Cerrar sesión",
    or: "o",
    email: "Correo electrónico",
    password: "Contraseña",
    hidePassword: "Ocultar contraseña",
    showPassword: "Mostrar contraseña",
    hide: "Ocultar",
    show: "Mostrar",
    continueGoogle: "Continuar con Google",
    forgotPassword: "¿Olvidaste tu contraseña?",
    noAccountPrefix: "¿No tienes cuenta? Introduce un correo y una contraseña y pulsa",
    noAccountAction: "Iniciar sesión",
    noAccountSuffix: "para crear la cuenta.",
    astroPsycho: "Astropsicología",
    lunaAstralis: "Luna Astralis",
    emailPlaceholder: "ej. tu@email.com",
    passwordPlaceholder: "6 caracteres mín.",
  },
  de: {
    sessionError: "Sitzungsfehler. Bitte versuche es erneut.",
    genericError: "Fehler. Bitte versuche es erneut.",
    validEmail: "Gib eine gültige E-Mail-Adresse ein.",
    passwordMin: "Das Passwort muss mindestens 6 Zeichen haben.",
    connecting: "Anmeldung…",
    creatingAccount: "Konto wird erstellt…",
    accountCreated: "Konto erstellt. Bestätige die erhaltene E-Mail und melde dich danach erneut an.",
    loginFailed: "Anmeldung nicht möglich. Bitte versuche es erneut.",
    openingGoogle: "Google wird geöffnet…",
    forgotEmailHint: "Gib deine E-Mail ein und klicke dann auf „Passwort vergessen?“.",
    sendingLink: "Link wird gesendet…",
    emailSent: "E-Mail gesendet. Prüfe deinen Posteingang und Spam-Ordner.",
    loggingOut: "Abmeldung…",
    loggedOut: "Abgemeldet.",
    home: "Luna Astralis Startseite",
    pricing: "Tarife",
    login: "Anmelden",
    loginRequired: "Du musst angemeldet sein, um fortzufahren.",
    continue: "Weiter",
    logout: "Abmelden",
    or: "oder",
    email: "E-Mail",
    password: "Passwort",
    hidePassword: "Passwort ausblenden",
    showPassword: "Passwort anzeigen",
    hide: "Ausblenden",
    show: "Anzeigen",
    continueGoogle: "Mit Google fortfahren",
    forgotPassword: "Passwort vergessen?",
    noAccountPrefix: "Noch kein Konto? Gib E-Mail und Passwort ein und klicke auf",
    noAccountAction: "Anmelden",
    noAccountSuffix: "um ein Konto zu erstellen.",
    astroPsycho: "Astro-Psychologie",
    lunaAstralis: "Luna Astralis",
    emailPlaceholder: "z. B. du@email.com",
    passwordPlaceholder: "mind. 6 Zeichen",
  },
  it: {
    sessionError: "Errore di sessione. Riprova.",
    genericError: "Errore. Riprova.",
    validEmail: "Inserisci un indirizzo email valido.",
    passwordMin: "La password deve contenere almeno 6 caratteri.",
    connecting: "Accesso in corso…",
    creatingAccount: "Creazione account…",
    accountCreated: "Account creato. Conferma l’email ricevuta, poi accedi di nuovo.",
    loginFailed: "Accesso non riuscito. Riprova.",
    openingGoogle: "Apertura di Google…",
    forgotEmailHint: "Inserisci la tua email, poi clicca su «Password dimenticata?».",
    sendingLink: "Invio del link…",
    emailSent: "Email inviata. Controlla la posta in arrivo e lo spam.",
    loggingOut: "Disconnessione…",
    loggedOut: "Disconnesso.",
    home: "Home di Luna Astralis",
    pricing: "Piani",
    login: "Accedi",
    loginRequired: "Devi accedere per continuare.",
    continue: "Continua",
    logout: "Disconnetti",
    or: "oppure",
    email: "Email",
    password: "Password",
    hidePassword: "Nascondi password",
    showPassword: "Mostra password",
    hide: "Nascondi",
    show: "Mostra",
    continueGoogle: "Continua con Google",
    forgotPassword: "Password dimenticata?",
    noAccountPrefix: "Non hai un account? Inserisci email e password e clicca su",
    noAccountAction: "Accedi",
    noAccountSuffix: "per creare l’account.",
    astroPsycho: "Astropsicologia",
    lunaAstralis: "Luna Astralis",
    emailPlaceholder: "es. tu@email.com",
    passwordPlaceholder: "min. 6 caratteri",
  },
  pt: {
    sessionError: "Erro de sessão. Tente novamente.",
    genericError: "Erro. Tente novamente.",
    validEmail: "Digite um email válido.",
    passwordMin: "A senha deve ter pelo menos 6 caracteres.",
    connecting: "Entrando…",
    creatingAccount: "Criando conta…",
    accountCreated: "Conta criada. Confirme o email recebido e depois entre novamente.",
    loginFailed: "Não foi possível entrar. Tente novamente.",
    openingGoogle: "Abrindo o Google…",
    forgotEmailHint: "Digite seu email e depois clique em “Esqueceu a senha?”.",
    sendingLink: "Enviando link…",
    emailSent: "Email enviado. Verifique a caixa de entrada e o spam.",
    loggingOut: "Saindo…",
    loggedOut: "Sessão encerrada.",
    home: "Início Luna Astralis",
    pricing: "Planos",
    login: "Entrar",
    loginRequired: "É preciso entrar para continuar.",
    continue: "Continuar",
    logout: "Sair",
    or: "ou",
    email: "Email",
    password: "Senha",
    hidePassword: "Ocultar senha",
    showPassword: "Mostrar senha",
    hide: "Ocultar",
    show: "Mostrar",
    continueGoogle: "Continuar com Google",
    forgotPassword: "Esqueceu a senha?",
    noAccountPrefix: "Ainda não tem conta? Digite um email e uma senha e clique em",
    noAccountAction: "Entrar",
    noAccountSuffix: "para criar a conta.",
    astroPsycho: "Astropsicologia",
    lunaAstralis: "Luna Astralis",
    emailPlaceholder: "ex. voce@email.com",
    passwordPlaceholder: "mín. 6 caracteres",
  },
};

function normalizeLang(v: unknown): Lang | null {
  const s = String(v ?? "").trim().toLowerCase().split("-")[0];
  if (s === "fr" || s === "en" || s === "es" || s === "de" || s === "it" || s === "pt") {
    return s;
  }
  return null;
}

function getLang(pathname: string | null, queryLang: string | null): Lang {
  const fromQuery = normalizeLang(queryLang);
  if (fromQuery) {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(LS_LANG_KEY, fromQuery);
      } catch {}
    }
    return fromQuery;
  }

  const seg = pathname?.split("/").filter(Boolean)[0]?.toLowerCase();
  const fromPath = normalizeLang(seg);
  if (fromPath) {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(LS_LANG_KEY, fromPath);
      } catch {}
    }
    return fromPath;
  }

  if (typeof document !== "undefined") {
    const fromHtml = normalizeLang(document.documentElement.lang);
    if (fromHtml) {
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(LS_LANG_KEY, fromHtml);
        } catch {}
      }
      return fromHtml;
    }
  }

  if (typeof window !== "undefined") {
    try {
      const stored = normalizeLang(localStorage.getItem(LS_LANG_KEY));
      if (stored) return stored;
    } catch {}
  }

  return "fr";
}

function stripLocalePrefix(path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return clean.replace(/^\/(fr|en|es|de|it|pt)(?=\/|$)/, "") || "/";
}

function addLangParam(path: string, lang: Lang) {
  const clean = stripLocalePrefix(path);

  try {
    const u = new URL(clean, "http://dummy.local");
    u.searchParams.set("lang", lang);
    return u.pathname + (u.search ? u.search : "");
  } catch {
    const sep = clean.includes("?") ? "&" : "?";
    return `${clean}${sep}lang=${encodeURIComponent(lang)}`;
  }
}

function getStoredSign(): string {
  if (typeof window === "undefined") return "";
  try {
    return (localStorage.getItem(LS_SIGN_KEY) || "").trim();
  } catch {
    return "";
  }
}

function isValidEmail(em: string) {
  const v = (em || "").trim();
  return v.includes("@") && v.includes(".");
}

function looksLikeInvalidLogin(message: string) {
  const m = (message || "").toLowerCase();
  return (
    m.includes("invalid login credentials") ||
    m.includes("invalid credentials") ||
    m.includes("email not confirmed") ||
    m.includes("invalid")
  );
}

function safeNext(raw: string | null, lang: Lang) {
  const fallback = `/chat?lang=${encodeURIComponent(lang)}&sign=belier`;
  const s = (raw || "").trim();
  if (!s) return fallback;

  if (/^https?:\/\//i.test(s) || s.startsWith("//")) return fallback;

  const path = stripLocalePrefix(s.startsWith("/") ? s : `/${s}`);

  if (
    path.startsWith("/auth") ||
    path.startsWith("/login") ||
    path.startsWith("/signup")
  ) {
    return fallback;
  }

  const allowed =
    path.startsWith("/chat") ||
    path.startsWith("/pricing") ||
    path.startsWith("/onboarding") ||
    path.startsWith("/checkout/success") ||
    path === "/";

  return allowed ? addLangParam(path, lang) : fallback;
}

function normalizeChatNext(nextUrl: string, lang: Lang) {
  const clean = addLangParam(nextUrl, lang);

  try {
    const u = new URL(clean, "http://dummy.local");

    if (u.pathname !== "/chat") {
      return clean;
    }

    const signFromNext = (
      u.searchParams.get("sign") ||
      u.searchParams.get("signe") ||
      ""
    ).trim();

    if (signFromNext) {
      u.searchParams.set("sign", signFromNext);
      u.searchParams.delete("signe");
      u.searchParams.set("lang", lang);
      return u.pathname + "?" + u.searchParams.toString();
    }

    const s = getStoredSign();
    if (s) {
      u.searchParams.set("sign", s);
      u.searchParams.delete("signe");
      u.searchParams.set("lang", lang);
      return u.pathname + "?" + u.searchParams.toString();
    }

    return `/chat?lang=${encodeURIComponent(lang)}&sign=belier`;
  } catch {
    return `/chat?lang=${encodeURIComponent(lang)}&sign=belier`;
  }
}

function computePostLoginTarget(nextUrl: string, lang: Lang) {
  const clean = addLangParam(nextUrl, lang);

  // Si une destination onboarding est explicitement demandée,
  // on la respecte avant toute autre logique.
  if (clean.startsWith("/onboarding")) {
    return clean;
  }

  if (clean.startsWith("/pricing")) {
    return clean;
  }

  if (clean.startsWith("/chat")) {
    return normalizeChatNext(clean, lang);
  }

  const s = getStoredSign();

  if (s) {
    return `/chat?lang=${encodeURIComponent(lang)}&sign=${encodeURIComponent(s)}`;
  }

  return `/onboarding/sign?lang=${encodeURIComponent(lang)}&next=${encodeURIComponent(
    `/chat?lang=${lang}`
  )}`;
}

function trackLoginConversionOnce() {
  if (typeof window === "undefined") return;

  const g = (window as any).gtag;
  if (typeof g !== "function") return;

  if (sessionStorage.getItem("la_login_conv") === "1") return;
  sessionStorage.setItem("la_login_conv", "1");

  g("event", "conversion", {
    send_to: "AW-17878472225/f8fMCmDpDY_GBEkgs181C",
    value: 1.0,
    currency: "CAD",
  });
}

export default function LoginClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const pathname = usePathname();
  const supabase = useMemo(() => createClientComponentClient(), []);

  const lang = useMemo(() => getLang(pathname, sp.get("lang")), [pathname, sp]);
  const dict = DICTS[lang];
  const ui = UI[lang];

  const t = useCallback(
    (key: string, fallback: string) => dict?.[key] || fallback,
    [dict]
  );

  const nextUrl = useMemo(() => {
    const safe = safeNext(sp.get("next"), lang);
    return safe.startsWith("/chat")
      ? normalizeChatNext(safe, lang)
      : safe;
  }, [sp, lang]);

  const postLoginTarget = useMemo(
    () => computePostLoginTarget(nextUrl, lang),
    [nextUrl, lang]
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const [busy, setBusy] = useState(false);
  const [alreadyConnected, setAlreadyConnected] = useState(false);
  const [msg, setMsg] = useState<{ text: string; type: MsgType } | null>(null);

  const showMsg = useCallback(
    (text: string, type: MsgType = "info") => setMsg({ text, type }),
    []
  );

  const clearMsg = useCallback(() => setMsg(null), []);

  const pingSeen = useCallback(async () => {
    try {
      await fetch("/api/reminders/seen", { method: "POST" });
    } catch {}
  }, []);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (!mounted) return;

        if (error) {
          showMsg(ui.sessionError, "err");
          return;
        }

        const hasSession = !!data?.session;
        setAlreadyConnected(hasSession);

        if (hasSession) {
          trackLoginConversionOnce();
          await pingSeen();
          router.replace(postLoginTarget);
        }
      } catch {
        if (!mounted) return;
        showMsg(ui.genericError, "err");
      }
    })();

    const { data: sub } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (!mounted) return;

        const has = !!session;
        setAlreadyConnected(has);

        if (has) {
          setBusy(false);
          trackLoginConversionOnce();
          await pingSeen();
          router.replace(postLoginTarget);
        }
      }
    );

    return () => {
      mounted = false;
      sub.subscription?.unsubscribe();
    };
  }, [supabase, router, postLoginTarget, showMsg, pingSeen, ui.sessionError, ui.genericError]);

  async function onEmailPassword(e: React.FormEvent) {
    e.preventDefault();
    clearMsg();

    const em = email.trim();

    if (!isValidEmail(em)) {
      return showMsg(ui.validEmail, "err");
    }

    if (!password || password.length < 6) {
      return showMsg(ui.passwordMin, "err");
    }

    setBusy(true);
    showMsg(ui.connecting, "info");

    const { data: signInData, error: signInError } =
      await supabase.auth.signInWithPassword({
        email: em,
        password,
      });

    if (signInData?.session) {
      trackLoginConversionOnce();
      await pingSeen();
      router.replace(postLoginTarget);
      return;
    }

    if (signInError && looksLikeInvalidLogin(signInError.message)) {
      showMsg(ui.creatingAccount, "info");

      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({
          email: em,
          password,
          options: {
            emailRedirectTo:
              `${CANON_ORIGIN}/auth/callback?lang=${encodeURIComponent(lang)}` +
              `&next=${encodeURIComponent(postLoginTarget)}`,
          },
        });

      if (signUpError) {
        setBusy(false);
        return showMsg(signUpError.message, "err");
      }

      if (signUpData?.session) {
        trackLoginConversionOnce();
        await pingSeen();
        router.replace(postLoginTarget);
        return;
      }

      setBusy(false);
      showMsg(ui.accountCreated, "ok");
      return;
    }

    setBusy(false);

    if (signInError) {
      return showMsg(signInError.message, "err");
    }

    showMsg(ui.loginFailed, "err");
  }

  async function onGoogle() {
    clearMsg();
    setBusy(true);
    showMsg(ui.openingGoogle, "info");

    const redirectTo =
      `${CANON_ORIGIN}/auth/callback?lang=${encodeURIComponent(lang)}` +
      `&next=${encodeURIComponent(postLoginTarget)}`;

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });

    if (error) {
      setBusy(false);
      showMsg(error.message, "err");
    }
  }

  async function onForgot() {
    clearMsg();

    const em = email.trim();

    if (!isValidEmail(em)) {
      return showMsg(ui.forgotEmailHint, "err");
    }

    setBusy(true);
    showMsg(ui.sendingLink, "info");

    const { error } = await supabase.auth.resetPasswordForEmail(em, {
      redirectTo: `${CANON_ORIGIN}/${lang}/reset-password`,
    });

    setBusy(false);

    if (error) {
      return showMsg(error.message, "err");
    }

    showMsg(ui.emailSent, "ok");
  }

  async function onLogout() {
    clearMsg();
    setBusy(true);
    showMsg(ui.loggingOut, "info");

    const { error } = await supabase.auth.signOut();
    setBusy(false);

    if (error) {
      return showMsg(error.message, "err");
    }

    setAlreadyConnected(false);

    try {
      sessionStorage.removeItem("la_login_conv");
    } catch {}

    showMsg(ui.loggedOut, "ok");
  }

  const msgClass =
    msg?.type === "ok"
      ? "is-ok"
      : msg?.type === "err"
      ? "is-err"
      : msg?.type === "info"
      ? "is-info"
      : "";

  return (
    <div className="auth-body">
      <header className="top" role="banner">
        <Link
          className="brand"
          href={`/${lang}`}
          aria-label={t("accueil_luna_astralis", ui.home)}
        >
          <div className="logo" aria-hidden="true">
            <img src="/logo-luna-astralis-transparent.png" alt="" />
          </div>

          <div className="brand-text">
            <div className="brand-name">
              {t("luna_astralis", ui.lunaAstralis)}
            </div>

            <div className="brand-sub">
              {t("astro_psycho", ui.astroPsycho)}
            </div>
          </div>
        </Link>

        <nav className="nav" aria-label="Navigation">
          <Link
            className="btn btn-small btn-ghost"
            href={`/${lang}/pricing`}
          >
            {ui.pricing}
          </Link>
        </nav>
      </header>

      <main className="wrap auth-wrap" role="main">
        <section
          className="auth-card"
          aria-label={ui.login}
        >
          <h1 className="auth-title">
            {t("se_connecter", ui.login)}
          </h1>

          <p className="auth-sub">
            {t("connexion_requise_pour_continuer", ui.loginRequired)}
          </p>

          {msg ? (
            <div
              className={`auth-msg ${msgClass}`}
              role="status"
              aria-live="polite"
            >
              {msg.text}
            </div>
          ) : null}

          {alreadyConnected ? (
            <div style={{ marginTop: 12 }}>
              <p
                className="auth-sub"
                style={{ margin: "0 0 10px 0" }}
              >
                {t("connexion_active", ui.loginRequired)}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                <button
                  type="button"
                  className="btn"
                  onClick={async () => {
                    trackLoginConversionOnce();
                    await pingSeen();
                    router.replace(postLoginTarget);
                  }}
                  disabled={busy}
                >
                  {ui.continue}
                </button>

                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={onLogout}
                  disabled={busy}
                >
                  {t("se_deconnecter", ui.logout)}
                </button>
              </div>

              <div
                className="auth-sep"
                aria-hidden="true"
                style={{ marginTop: 14 }}
              >
                <span>{ui.or}</span>
              </div>
            </div>
          ) : null}

          <button
            type="button"
            className="btn auth-google"
            onClick={onGoogle}
            disabled={busy}
            style={{ opacity: busy ? 0.7 : 1 }}
          >
            <img
              src="/google-g.png"
              alt=""
              className="google-icon"
              aria-hidden="true"
            />
            {t("continuer_avec_google", ui.continueGoogle)}
          </button>

          <div className="auth-sep" aria-hidden="true">
            <span>{ui.or}</span>
          </div>

          <form
            className="auth-form"
            autoComplete="on"
            noValidate
            onSubmit={onEmailPassword}
          >
            <label
              className="auth-label"
              htmlFor="email"
            >
              {ui.email}
            </label>

            <input
              className="auth-input"
              id="email"
              name="email"
              type="email"
              placeholder={t("ex_toi_email_com", ui.emailPlaceholder)}
              required
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={busy}
            />

            <label
              className="auth-label"
              htmlFor="password"
            >
              {t("mot_de_passe", ui.password)}
            </label>

            <div className="pwd-wrap">
              <input
                className="auth-input"
                id="password"
                name="password"
                type={showPwd ? "text" : "password"}
                placeholder={t("6_caracteres_min", ui.passwordPlaceholder)}
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={busy}
              />

              <button
                type="button"
                className="pwd-eye"
                onClick={() => setShowPwd((v) => !v)}
                disabled={busy}
                aria-label={
                  showPwd
                    ? ui.hidePassword
                    : ui.showPassword
                }
                title={
                  showPwd
                    ? ui.hide
                    : ui.show
                }
              >
                {showPwd ? "🙈" : "👁️"}
              </button>
            </div>

            <button
              className="btn auth-submit"
              type="submit"
              disabled={busy}
              style={{ opacity: busy ? 0.7 : 1 }}
            >
              {t("se_connecter_2", ui.login)}
            </button>

            <button
              type="button"
              className="auth-forgot"
              onClick={onForgot}
              disabled={busy}
            >
              {t("mot_de_passe_oublie", ui.forgotPassword)}
            </button>

            <p className="auth-switch">
              {t("aucun_compte_entre_un_email_un_mot_de_passe_puis_clique", ui.noAccountPrefix)}{" "}
              <b>{t("se_connecter_3", ui.noAccountAction)}</b>{" "}
              {t("pour_creer_le_compte", ui.noAccountSuffix)}
            </p>
          </form>

          <style jsx>{`
            .pwd-wrap {
              position: relative;
              width: 100%;
            }

            .pwd-wrap :global(.auth-input) {
              padding-right: 46px;
            }

            .pwd-eye {
              position: absolute;
              right: 10px;
              top: 50%;
              transform: translateY(-50%);
              width: 34px;
              height: 34px;
              border-radius: 12px;
              border: 1px solid rgba(255, 255, 255, 0.16);
              background: rgba(255, 255, 255, 0.06);
              color: rgba(255, 255, 255, 0.92);
              cursor: pointer;
              display: grid;
              place-items: center;
            }

            .pwd-eye:disabled {
              opacity: 0.6;
              cursor: default;
            }

            .auth-msg.is-ok {
              background: rgba(120, 255, 190, 0.1);
              border-color: rgba(120, 255, 190, 0.22);
            }

            .auth-msg.is-err {
              background: rgba(255, 90, 90, 0.1);
              border-color: rgba(255, 90, 90, 0.22);
            }

            .auth-msg.is-info {
              background: rgba(159, 211, 255, 0.1);
              border-color: rgba(159, 211, 255, 0.22);
            }
          `}</style>
        </section>
      </main>
    </div>
  );
}
