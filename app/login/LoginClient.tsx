"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type MsgType = "ok" | "err" | "info";

const LS_SIGN_KEY = "la_sign";
const FALLBACK_NEXT = "/chat";

/** ✅ Anti open-redirect + évite boucles */
function safeNext(raw: string | null) {
  const s = (raw || "").trim();
  if (!s) return FALLBACK_NEXT;

  // Block absolute / protocol-relative
  if (/^https?:\/\//i.test(s) || s.startsWith("//")) return FALLBACK_NEXT;

  const path = s.startsWith("/") ? s : `/${s}`;

  // ✅ Autorise uniquement /login?next=/chat (cas spécial OAuth)
  if (path.startsWith("/login")) {
    try {
      const u = new URL(path, "http://dummy.local");
      const n = (u.searchParams.get("next") || "").trim();
      if (n === "/chat") return "/login?next=/chat";
    } catch {}
    return FALLBACK_NEXT;
  }

  // Evite loops
  if (path.startsWith("/auth") || path.startsWith("/signup")) return FALLBACK_NEXT;

  // Autorise zones utiles
  const allowed =
    path.startsWith("/chat") ||
    path.startsWith("/pricing") ||
    path.startsWith("/onboarding") ||
    path.startsWith("/checkout/success");

  return allowed ? path : FALLBACK_NEXT;
}

function getStoredSign() {
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
 * ✅ RÈGLE FINALE:
 * - si next = /pricing => /pricing
 * - sinon:
 *    - si signe => /chat?sign=...
 *    - sinon => /onboarding/sign?next=/chat
 */
function computePostLoginTarget(nextUrl: string) {
  if (nextUrl === "/pricing") return "/pricing";

  const s = getStoredSign();
  if (s) return `/chat?sign=${encodeURIComponent(s)}`;

  return `/onboarding/sign?next=${encodeURIComponent("/chat")}`;
}

/** ✅ Conversion Google Ads = login OK (anti-double) */
function trackLoginConversionOnce() {
  if (typeof window === "undefined") return;

  const g = (window as any).gtag;
  if (typeof g !== "function") return;

  if (sessionStorage.getItem("la_login_conv") === "1") return;
  sessionStorage.setItem("la_login_conv", "1");

  g("event", "conversion", {
    send_to: "AW-17878472225/f8fMCMDpDy-gbEKGs181C",
    value: 1.0,
    currency: "CAD",
  });
}

export default function LoginClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const supabase = useMemo(() => createClientComponentClient(), []);

  // next venant de l’URL
  const nextUrl = useMemo(() => safeNext(sp.get("next")), [sp]);

  // destination finale après login (en fonction de la_sign)
  const postLoginTarget = useMemo(() => computePostLoginTarget(nextUrl), [nextUrl]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const [busy, setBusy] = useState(false);
  const [alreadyConnected, setAlreadyConnected] = useState(false);
  const [msg, setMsg] = useState<{ text: string; type: MsgType } | null>(null);

  const showMsg = useCallback((text: string, type: MsgType = "info") => {
    setMsg({ text, type });
  }, []);

  const clearMsg = useCallback(() => setMsg(null), []);

  // ping "seen"
  const pingSeen = useCallback(async () => {
    try {
      await fetch("/api/reminders/seen", { method: "POST" });
    } catch {}
  }, []);

  // Boot: si déjà connecté -> go direct
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
          // ✅ Ici, on est sûr que c’est un login "réussi" (session existante)
          // (ex: après OAuth callback, ou déjà loggé)
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
        // conversion + redirect ici aussi (OAuth termine souvent par onAuthStateChange)
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

    // 1) Sign-in
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

    // 2) Si identifiants invalides -> signup auto
    if (signInError && looksLikeInvalidLogin(signInError.message)) {
      showMsg("Création du compte…", "info");

      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: em,
        password,
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

    const origin = window.location.origin;

    // ✅ Forcer le retour via /login?next=/chat (pour relire localStorage la_sign)
    const forcedNextAfterCallback = "/login?next=/chat";

    const redirectTo = `${origin}/auth/callback?next=${encodeURIComponent(forcedNextAfterCallback)}`;

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
    if (!isValidEmail(em)) return showMsg("Entre ton email, puis clique “Mot de passe oublié ?”.", "err");

    setBusy(true);
    showMsg("Envoi du lien…", "info");

    const origin = window.location.origin;
    const { error } = await supabase.auth.resetPasswordForEmail(em, {
      redirectTo: `${origin}/reset-password`,
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
          <p className="auth-sub">Connexion requise pour continuer.</p>

          {msg ? (
            <div className={`auth-msg ${msgClass}`} role="status" aria-live="polite">
              {msg.text}
            </div>
          ) : null}

          {alreadyConnected ? (
            <div style={{ marginTop: 12 }}>
              <p className="auth-sub" style={{ margin: "0 0 10px 0" }}>
                Connexion active.
              </p>

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

            <div className="pwd-wrap">
              <input
                className="auth-input"
                id="password"
                name="password"
                type={showPwd ? "text" : "password"}
                placeholder="6 caractères min."
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
              Se connecter
            </button>

            <button type="button" className="auth-forgot" onClick={onForgot} disabled={busy}>
              Mot de passe oublié ?
            </button>

            <p className="auth-switch">
              Aucun compte ? Entre un email + un mot de passe, puis clique <b>Se connecter</b> pour créer le compte.
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
