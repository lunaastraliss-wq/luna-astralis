"use client";


import __i18n from "../../i18n/migrated/fr/app/login/loginclient.json";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type MsgType = "ok" | "err" | "info";

const LS_SIGN_KEY = "la_sign";
const FALLBACK_NEXT = "/chat?sign=belier";

// ✅ ton domaine canon (un seul, sans www si c’est celui que tu forces)
const CANON_ORIGIN = "https://luna-astralis.app";

function safeNext(raw: string | null) {
  const s = (raw || "").trim();
  if (!s) return FALLBACK_NEXT;

  // block absolute / protocol-relative
  if (/^https?:\/\//i.test(s) || s.startsWith("//")) return FALLBACK_NEXT;

  const path = s.startsWith("/") ? s : `/${s}`;

  // éviter loops
  if (path.startsWith("/auth") || path.startsWith("/login") || path.startsWith("/signup")) return FALLBACK_NEXT;

  // autoriser zones utiles
  const allowed =
    path.startsWith("/chat") ||
    path.startsWith("/pricing") ||
    path.startsWith("/onboarding") ||
    path.startsWith("/checkout/success") ||
    path === "/";

  return allowed ? path : FALLBACK_NEXT;
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

/**
 * Normalise le "next" pour que le chat reçoive toujours ?sign=
 */
function normalizeChatNext(nextUrl: string) {
  if (!nextUrl.startsWith("/chat")) return nextUrl;

  try {
    const u = new URL(nextUrl, "http://dummy.local");
    const signFromNext = (u.searchParams.get("sign") || u.searchParams.get("signe") || "").trim();

    if (signFromNext) {
      u.searchParams.set("sign", signFromNext);
      u.searchParams.delete("signe");
      return u.pathname + "?" + u.searchParams.toString();
    }

    const s = getStoredSign();
    if (s) {
      u.searchParams.set("sign", s);
      u.searchParams.delete("signe");
      return u.pathname + "?" + u.searchParams.toString();
    }

    return FALLBACK_NEXT;
  } catch {
    return FALLBACK_NEXT;
  }
}

/**
 * Post-login target
 */
function computePostLoginTarget(nextUrl: string) {
  if (nextUrl === "/pricing") return "/pricing";

  if (nextUrl.startsWith("/chat")) return normalizeChatNext(nextUrl);

  const s = getStoredSign();
  if (s) return `/chat?sign=${encodeURIComponent(s)}`;

  return `/onboarding/sign?next=${encodeURIComponent("/chat")}`;
}

function trackLoginConversionOnce() {
  if (typeof window === "undefined") return;

  const g = (window as any).gtag;
  if (typeof g !== "function") return;

  if (sessionStorage.getItem("la_login_conv") === "1") return;
  sessionStorage.setItem("la_login_conv", "1");

  g("event", "conversion", {
    send_to: __i18n["aw_17878472225_f8fmcmdpdy_gbekgs181c"],
    value: 1.0,
    currency: "CAD",
  });
}

export default function LoginClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const supabase = useMemo(() => createClientComponentClient(), []);

  const nextUrl = useMemo(() => {
    const safe = safeNext(sp.get("next"));
    return safe.startsWith("/chat") ? normalizeChatNext(safe) : safe;
  }, [sp]);

  const postLoginTarget = useMemo(() => computePostLoginTarget(nextUrl), [nextUrl]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const [busy, setBusy] = useState(false);
  const [alreadyConnected, setAlreadyConnected] = useState(false);
  const [msg, setMsg] = useState<{ text: string; type: MsgType } | null>(null);

  const showMsg = useCallback((text: string, type: MsgType = "info") => setMsg({ text, type }), []);
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
          showMsg("Erreur de session. Réessaie.", "err");
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
        showMsg("Erreur. Réessaie.", "err");
      }
    })();

    const { data: sub } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!mounted) return;

      const has = !!session;
      setAlreadyConnected(has);

      if (has) {
        setBusy(false);
        trackLoginConversionOnce();
        await pingSeen();
        router.replace(postLoginTarget);
      }
    });

    return () => {
      mounted = false;
      sub.subscription?.unsubscribe();
    };
  }, [supabase, router, postLoginTarget, showMsg, pingSeen]);

  async function onEmailPassword(e: React.FormEvent) {
    e.preventDefault();
    clearMsg();

    const em = email.trim();
    if (!isValidEmail(em)) return showMsg("Entre un email valide.", "err");
    if (!password || password.length < 6) return showMsg("Mot de passe : 6 caractères minimum.", "err");

    setBusy(true);
    showMsg("Connexion…", "info");

    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email: em,
      password,
    });

    if (signInData?.session) {
      trackLoginConversionOnce();
      await pingSeen();
      router.replace(postLoginTarget);
      return;
    }

    // si mauvais login => on tente signup
    if (signInError && looksLikeInvalidLogin(signInError.message)) {
      showMsg("Création du compte…", "info");

      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: em,
        password,
        options: {
          emailRedirectTo: `${CANON_ORIGIN}/auth/callback?next=${encodeURIComponent(postLoginTarget)}`,
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
      showMsg("Compte créé. Confirme l’email reçu, puis reconnecte-toi.", "ok");
      return;
    }

    setBusy(false);
    if (signInError) return showMsg(signInError.message, "err");
    showMsg("Connexion impossible. Réessaie.", "err");
  }

  async function onGoogle() {
    clearMsg();
    setBusy(true);
    showMsg("Ouverture de Google…", "info");

    // ✅ canon
    const redirectTo = `${CANON_ORIGIN}/auth/callback?next=${encodeURIComponent(postLoginTarget)}`;

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });

    if (error) {
      setBusy(false);
      showMsg(error.message, "err");
      return;
    }
  }

  async function onForgot() {
    clearMsg();

    const em = email.trim();
    if (!isValidEmail(em)) return showMsg("Entre ton email, puis clique “Mot de passe oublié ?”.", "err");

    setBusy(true);
    showMsg("Envoi du lien…", "info");

    const { error } = await supabase.auth.resetPasswordForEmail(em, {
      // ✅ canon
      redirectTo: `${CANON_ORIGIN}/reset-password`,
    });

    setBusy(false);
    if (error) return showMsg(error.message, "err");
    showMsg("Email envoyé. Vérifie la boîte de réception (et indésirables).", "ok");
  }

  async function onLogout() {
    clearMsg();
    setBusy(true);
    showMsg("Déconnexion…", "info");

    const { error } = await supabase.auth.signOut();
    setBusy(false);

    if (error) return showMsg(error.message, "err");
    setAlreadyConnected(false);

    try {
      sessionStorage.removeItem("la_login_conv");
    } catch {}

    showMsg("Déconnectée.", "ok");
  }

  const msgClass =
    msg?.type === "ok" ? "is-ok" : msg?.type === "err" ? "is-err" : msg?.type === "info" ? "is-info" : "";

  return (
    <div className="auth-body">
      <header className="top" role="banner">
        <Link className="brand" href="/" aria-label={__i18n["accueil_luna_astralis"]}>
          <div className="logo" aria-hidden="true">
            <img src="/logo-luna-astralis-transparent.png" alt="" />
          </div>

          <div className="brand-text">
            <div className="brand-name">{__i18n["luna_astralis"]}</div>
            <div className="brand-sub">{__i18n["astro_psycho"]}</div>
          </div>
        </Link>

        <nav className="nav" aria-label="Navigation">
          <Link className="btn btn-small btn-ghost" href="/pricing">
            Tarifs
          </Link>
        </nav>
      </header>

      <main className="wrap auth-wrap" role="main">
        <section className="auth-card" aria-label="Connexion">
          <h1 className="auth-title">{__i18n["se_connecter"]}</h1>
          <p className="auth-sub">{__i18n["connexion_requise_pour_continuer"]}</p>

          {msg ? (
            <div className={`auth-msg ${msgClass}`} role="status" aria-live="polite">
              {msg.text}
            </div>
          ) : null}

          {alreadyConnected ? (
            <div style={{ marginTop: 12 }}>
              <p className="auth-sub" style={{ margin: __i18n["0_0_10px_0"] }}>
                {__i18n["connexion_active"]}</p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
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
                  Continuer
                </button>

                <button type="button" className="btn btn-ghost" onClick={onLogout} disabled={busy}>
                  {__i18n["se_deconnecter"]}</button>
              </div>

              <div className="auth-sep" aria-hidden="true" style={{ marginTop: 14 }}>
                <span>ou</span>
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
            <img src="/google-g.png" alt="" className="google-icon" aria-hidden="true" />
            {__i18n["continuer_avec_google"]}</button>

          <div className="auth-sep" aria-hidden="true">
            <span>ou</span>
          </div>

          <form className="auth-form" autoComplete="on" noValidate onSubmit={onEmailPassword}>
            <label className="auth-label" htmlFor="email">
              Email
            </label>
            <input
              className="auth-input"
              id="email"
              name="email"
              type="email"
              placeholder={__i18n["ex_toi_email_com"]}
              required
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={busy}
            />

            <label className="auth-label" htmlFor="password">
              {__i18n["mot_de_passe"]}</label>

            <div className="pwd-wrap">
              <input
                className="auth-input"
                id="password"
                name="password"
                type={showPwd ? "text" : "password"}
                placeholder={__i18n["6_caracteres_min"]}
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
                aria-label={showPwd ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                title={showPwd ? "Masquer" : "Afficher"}
              >
                {showPwd ? "🙈" : "👁️"}
              </button>
            </div>

            <button className="btn auth-submit" type="submit" disabled={busy} style={{ opacity: busy ? 0.7 : 1 }}>
              {__i18n["se_connecter_2"]}</button>

            <button type="button" className="auth-forgot" onClick={onForgot} disabled={busy}>
              {__i18n["mot_de_passe_oublie"]}</button>

            <p className="auth-switch">
              {__i18n["aucun_compte_entre_un_email_un_mot_de_passe_puis_clique"]}<b>{__i18n["se_connecter_3"]}</b> {__i18n["pour_creer_le_compte"]}</p>
          </form>

          <style jsx>{__i18n["pwd_wrap_position_relative_width_100_pwd_wrap_global_auth_in"]}</style>
        </section>
      </main>
    </div>
  );
}
