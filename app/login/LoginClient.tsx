"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type MsgType = "ok" | "err" | "info";

const LS_SIGN_KEY = "la_sign"; // même key que ton ChatClient
const SS_POST_OAUTH_TARGET = "la_post_oauth_target";

/** Empêche les redirections externes + évite les boucles login/auth */
function safeNext(raw: string | null) {
  const s = (raw || "").trim();
  if (!s) return "/chat";
  if (/^https?:\/\//i.test(s) || s.startsWith("//")) return "/chat";
  const path = s.startsWith("/") ? s : `/${s}`;
  if (path.startsWith("/login") || path.startsWith("/auth")) return "/chat";
  return path;
}

function getStoredSign() {
  if (typeof window === "undefined") return "";
  try {
    return (localStorage.getItem(LS_SIGN_KEY) || "").trim();
  } catch {
    return "";
  }
}

/**
 * Logique demandée :
 * - si next est un chemin précis (ex: /pricing), on le respecte
 * - sinon (next absent ou /chat):
 *    - si signe existe => /chat?signe=...
 *    - sinon => onboarding choix du signe
 */
function computePostLoginTarget(nextUrl: string) {
  if (nextUrl && nextUrl !== "/chat") return nextUrl;

  const s = getStoredSign();
  if (s) return `/chat?signe=${encodeURIComponent(s)}`;

  return `/onboarding/sign?next=${encodeURIComponent("/chat")}`;
}

/** Détecte les erreurs “mauvais identifiants” (Supabase varie selon config/langue) */
function looksLikeInvalidLogin(message: string) {
  const m = (message || "").toLowerCase();
  return (
    m.includes("invalid login credentials") ||
    m.includes("invalid credentials") ||
    m.includes("email not confirmed") ||
    m.includes("invalid")
  );
}

export default function LoginClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const supabase = useMemo(() => createClientComponentClient(), []);

  const nextUrl = useMemo(() => safeNext(sp.get("next")), [sp]);
  const postLoginTarget = useMemo(() => computePostLoginTarget(nextUrl), [nextUrl]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [busy, setBusy] = useState(false);
  const [alreadyConnected, setAlreadyConnected] = useState(false);
  const [msg, setMsg] = useState<{ text: string; type: MsgType } | null>(null);

  const showMsg = useCallback((text: string, type: MsgType = "info") => {
    setMsg({ text, type });
  }, []);

  const clearMsg = useCallback(() => setMsg(null), []);

  // Boot + écoute session
  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (!mounted) return;

        if (error) {
          showMsg("Erreur session: " + error.message, "err");
          return;
        }

        const hasSession = !!data?.session;
        setAlreadyConnected(hasSession);

        // Si déjà connecté, on peut auto-continuer sans afficher AUTH_REQUIRED ailleurs
        if (hasSession) {
          showMsg("Tu es déjà connectée. Redirection…", "ok");
          router.replace(postLoginTarget);
        }
      } catch (e: any) {
        if (!mounted) return;
        showMsg("Erreur JS: " + (e?.message || String(e)), "err");
      }
    })();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      const has = !!session;
      setAlreadyConnected(has);
      if (has) setBusy(false);
    });

    return () => {
      mounted = false;
      sub.subscription?.unsubscribe();
    };
  }, [supabase, router, postLoginTarget, showMsg]);

  async function onEmailPassword(e: React.FormEvent) {
    e.preventDefault();
    clearMsg();

    const em = email.trim();
    if (!em || !em.includes("@")) return showMsg("Entre un email valide.", "err");
    if (!password || password.length < 6) return showMsg("Mot de passe (6 caractères min).", "err");

    setBusy(true);
    showMsg("Connexion…", "info");

    // 1) Sign-in
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email: em,
      password,
    });

    if (signInData?.session) {
      showMsg("Connectée. Redirection…", "ok");
      router.replace(postLoginTarget);
      return;
    }

    // 2) Si identifiants invalides => tentative signup auto (comme ton code actuel)
    if (signInError && looksLikeInvalidLogin(signInError.message)) {
      showMsg("Compte introuvable. Création du compte…", "info");

      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: em,
        password,
      });

      if (signUpError) {
        setBusy(false);
        return showMsg(signUpError.message, "err");
      }

      if (signUpData?.session) {
        showMsg("Compte créé. Redirection…", "ok");
        router.replace(postLoginTarget);
        return;
      }

      // cas email confirmation requise
      setBusy(false);
      showMsg("Compte créé. Vérifie ton email pour confirmer, puis reviens te connecter.", "ok");
      return;
    }

    // 3) Autres erreurs
    setBusy(false);
    if (signInError) return showMsg(signInError.message, "err");
    showMsg("Connexion faite, mais session introuvable. Réessaie.", "err");
  }

  async function onGoogle() {
    clearMsg();
    setBusy(true);
    showMsg("Ouverture de Google…", "info");

    // On stocke LA cible finale (avec signe / onboarding)
    try {
      sessionStorage.setItem(SS_POST_OAUTH_TARGET, postLoginTarget);
    } catch {}

    const origin = window.location.origin;

    // IMPORTANT: on garde next dans l’URL pour ton /auth/callback
    const redirectTo = `${origin}/auth/callback?next=${encodeURIComponent(nextUrl)}`;

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });

    if (error) {
      setBusy(false);
      showMsg(error.message, "err");
      return;
    }

    window.setTimeout(() => {
      setBusy(false);
      showMsg("Si rien ne s’ouvre, autorise les popups puis réessaie.", "info");
    }, 2500);
  }

  async function onForgot() {
    clearMsg();

    const em = email.trim();
    if (!em || !em.includes("@")) {
      return showMsg("Entre ton email, puis clique “Mot de passe oublié ?”.", "err");
    }

    setBusy(true);
    showMsg("Envoi du lien de réinitialisation…", "info");

    const origin = window.location.origin;
    const { error } = await supabase.auth.resetPasswordForEmail(em, {
      redirectTo: `${origin}/reset-password`,
    });

    setBusy(false);

    if (error) return showMsg(error.message, "err");
    showMsg("Email envoyé. Vérifie ta boîte (et indésirables).", "ok");
  }

  async function onLogout() {
    clearMsg();
    setBusy(true);
    showMsg("Déconnexion…", "info");

    const { error } = await supabase.auth.signOut();
    setBusy(false);

    if (error) return showMsg(error.message, "err");
    setAlreadyConnected(false);
    showMsg("Déconnectée.", "ok");
  }

  return (
    <div className="auth-body">
      <header className="top" role="banner">
        <Link className="brand" href="/" aria-label="Accueil Luna Astralis">
          <div className="logo" aria-hidden="true">
            <img src="/logo-luna-astralis-transparent.png" alt="" />
          </div>

          <div className="brand-text">
            <div className="brand-name">LUNA ASTRALIS</div>
            <div className="brand-sub">Astro & psycho</div>
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
          <h1 className="auth-title">Se connecter</h1>
          <p className="auth-sub">
            Connecte-toi pour continuer. Si tu n’as pas de compte, il sera créé automatiquement.
          </p>

          {msg ? (
            <div
              className={`auth-msg ${
                msg.type === "ok" ? "is-ok" : msg.type === "err" ? "is-err" : "is-info"
              }`}
              role="status"
              aria-live="polite"
            >
              {msg.text}
            </div>
          ) : null}

          {alreadyConnected ? (
            <div style={{ marginTop: 12 }}>
              <p className="auth-sub" style={{ margin: "0 0 10px 0" }}>
                Tu es déjà connectée.
              </p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="btn"
                  onClick={() => router.replace(postLoginTarget)}
                  disabled={busy}
                >
                  Continuer
                </button>

                <button type="button" className="btn btn-ghost" onClick={onLogout} disabled={busy}>
                  Se déconnecter
                </button>
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
            Continuer avec Google
          </button>

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
              placeholder="ex. toi@email.com"
              required
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={busy}
            />

            <label className="auth-label" htmlFor="password">
              Mot de passe
            </label>
            <input
              className="auth-input"
              id="password"
              name="password"
              type="password"
              placeholder="6 caractères min."
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={busy}
            />

            <button
              className="btn auth-submit"
              type="submit"
              disabled={busy}
              style={{ opacity: busy ? 0.7 : 1 }}
            >
              Se connecter
            </button>

            <button type="button" className="auth-forgot" onClick={onForgot} disabled={busy}>
              Mot de passe oublié ?
            </button>

            <p className="auth-switch">
              Pas de compte ? Entre ton email + mot de passe et clique <b>Se connecter</b> : on le crée
              automatiquement.
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}
