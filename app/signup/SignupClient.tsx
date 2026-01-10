
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type MsgType = "ok" | "err" | "info";

// ✅ même logique que LoginClient: si pas de signe stocké => onboarding
const LS_SIGN_KEY = "la_sign";
const SS_NEXT_AFTER_OAUTH = "la_next_after_oauth";

function safeNext(v: string | null) {
  // ✅ plus de fallback "belier" en dur ici.
  // On garde un next neutre, puis on calcule la vraie destination ensuite.
  const fallback = "/chat";
  const s = (v || "").trim();
  if (!s) return fallback;

  // Bloque URLs externes
  if (/^https?:\/\//i.test(s) || s.startsWith("//")) return fallback;

  const path = s.startsWith("/") ? s : `/${s}`;

  // évite boucles
  if (path.startsWith("/login") || path.startsWith("/signup") || path.startsWith("/auth"))
    return fallback;

  return path;
}

function getStoredSign(): string {
  if (typeof window === "undefined") return "";
  try {
    return (localStorage.getItem(LS_SIGN_KEY) || "").trim();
  } catch {
    return "";
  }
}

function computePostAuthTarget(nextUrl: string) {
  // ✅ si next est une page précise (ex: /chat?sign=lion, /pricing, etc.) => on respecte
  if (nextUrl && nextUrl !== "/chat") return nextUrl;

  // ✅ sinon: si signe déjà choisi => chat direct, sinon => onboarding signe
  const s = getStoredSign();
  if (s) return `/chat?sign=${encodeURIComponent(s)}`;
  return `/onboarding/sign?next=${encodeURIComponent("/chat")}`;
}

function rememberNext(target: string) {
  try {
    sessionStorage.setItem(SS_NEXT_AFTER_OAUTH, target);
  } catch {}
}

export default function SignupClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const supabase = useMemo(() => createClientComponentClient(), []);

  const nextRaw = sp.get("next");
  const nextUrl = useMemo(() => safeNext(nextRaw), [nextRaw]);
  const nextEnc = useMemo(() => encodeURIComponent(nextUrl), [nextUrl]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [busy, setBusy] = useState(false);
  const [alreadyConnected, setAlreadyConnected] = useState(false);
  const [msg, setMsg] = useState<{ text: string; type: MsgType } | null>(null);

  function showMsg(text: string, type: MsgType = "info") {
    setMsg({ text, type });
  }
  function clearMsg() {
    setMsg(null);
  }

  // BOOT + listener
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
        if (hasSession) showMsg("Tu es déjà connectée.", "ok");
      } catch (e: any) {
        showMsg("Erreur JS: " + (e?.message || String(e)), "err");
      }
    })();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      setAlreadyConnected(!!session);
      if (session) setBusy(false);
    });

    return () => {
      mounted = false;
      sub.subscription?.unsubscribe();
    };
  }, [supabase]);

  async function onSignupEmail(e: React.FormEvent) {
    e.preventDefault();
    clearMsg();

    const em = email.trim();
    if (!em || !em.includes("@")) return showMsg("Entre un email valide.", "err");
    if (!password || password.length < 8)
      return showMsg("Mot de passe : minimum 8 caractères.", "err");

    setBusy(true);
    showMsg("Création du compte…", "info");

    // ✅ destination réelle après signup/login
    const target = computePostAuthTarget(nextUrl);
    rememberNext(target);

    const origin = window.location.origin;
    // IMPORTANT : pas de query string dans emailRedirectTo
    const emailRedirectTo = `${origin}/auth/callback`;

    const { data, error } = await supabase.auth.signUp({
      email: em,
      password,
      options: { emailRedirectTo },
    });

    if (error) {
      setBusy(false);
      return showMsg(error.message, "err");
    }

    // Si confirmation email OFF -> session immédiate
    if (data?.session) {
      showMsg("Compte créé. Redirection…", "ok");
      router.replace(target);
      return;
    }

    setBusy(false);
    showMsg("Compte créé ! Vérifie ton email pour confirmer, puis reviens.", "ok");
  }

  async function onGoogle() {
    clearMsg();
    setBusy(true);
    showMsg("Ouverture de Google…", "info");

    // ✅ destination réelle après OAuth
    const target = computePostAuthTarget(nextUrl);
    rememberNext(target);

    const origin = window.location.origin;
    // IMPORTANT : pas de query string dans redirectTo
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

  const loginHref = `/login?next=${nextEnc}`;
  const continueHref = computePostAuthTarget(nextUrl);

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
          <Link className="btn btn-small btn-ghost" href={loginHref}>
            Mon compte
          </Link>
        </nav>
      </header>

      <main className="wrap auth-wrap" role="main">
        <section className="auth-card" aria-label="Créer un compte">
          <h1 className="auth-title">Créer un compte</h1>
          <p className="auth-sub">
            Sauvegarde tes échanges et continue après les messages gratuits.
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
                <Link className="btn" href={continueHref}>
                  Continuer
                </Link>
                <Link className="btn btn-ghost" href={loginHref}>
                  Mon compte
                </Link>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={onLogout}
                  disabled={busy}
                >
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

          <form className="auth-form" autoComplete="on" noValidate onSubmit={onSignupEmail}>
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
              placeholder="Minimum 8 caractères"
              minLength={8}
              required
              autoComplete="new-password"
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
              Créer mon compte
            </button>

            <p className="auth-legal">
              En créant un compte, tu acceptes que cet outil soit une exploration personnelle
              (non thérapeutique) et ne remplace pas un professionnel.
            </p>

            <p className="auth-switch">
              Déjà un compte ?{" "}
              <Link className="auth-link" href={loginHref}>
                Se connecter
              </Link>
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}
