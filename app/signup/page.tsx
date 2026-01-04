// app/signup/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type MsgType = "ok" | "err" | "info";

function safeNext(v: string | null) {
  const s = (v || "").trim();
  const fallback = "/chat?signe=belier";
  if (!s) return fallback;
  if (s.includes("http://") || s.includes("https://") || s.startsWith("//")) return fallback;
  return s.startsWith("/") ? s : "/" + s;
}

export default function SignupPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const supabase = useMemo(() => createClientComponentClient(), []);

  const nextUrl = useMemo(() => safeNext(sp.get("next")), [sp]);
  const nextEnc = useMemo(() => encodeURIComponent(nextUrl), [nextUrl]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [busy, setBusy] = useState(false);
  const [alreadyConnected, setAlreadyConnected] = useState(false);
  const [msg, setMsg] = useState<{ text: string; type: MsgType } | null>(null);

  function showMsg(text: string, type: MsgType = "info") {
    setMsg({ text, type });
  }

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
    setMsg(null);

    const em = email.trim();
    if (!em || !em.includes("@")) return showMsg("Entre un email valide.", "err");
    if (!password || password.length < 8) return showMsg("Mot de passe : minimum 8 caractères.", "err");

    setBusy(true);
    showMsg("Création du compte…", "info");

    const origin = window.location.origin;

    // ✅ Quand l'email est confirmé, on repasse par /auth/callback (échange code -> session)
    const emailRedirectTo = `${origin}/auth/callback?next=${encodeURIComponent(nextUrl)}`;

    const { data, error } = await supabase.auth.signUp({
      email: em,
      password,
      options: { emailRedirectTo },
    });

    if (error) {
      setBusy(false);
      return showMsg(error.message, "err");
    }

    // Email confirmation OFF -> session immédiate
    if (data?.session) {
      showMsg("Compte créé. Redirection…", "ok");
      router.replace(nextUrl);
      return;
    }

    setBusy(false);
    showMsg("Compte créé ! Vérifie ton email pour confirmer, puis reviens.", "ok");
  }

  async function onGoogle() {
    setMsg(null);
    setBusy(true);
    showMsg("Ouverture de Google…", "info");

    const origin = window.location.origin;
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

    // fallback UX si popup bloquée
    window.setTimeout(() => {
      setBusy(false);
      showMsg("Si rien ne s’ouvre, autorise les popups puis réessaie.", "info");
    }, 2500);
  }

  async function onLogout() {
    setMsg(null);
    setBusy(true);
    showMsg("Déconnexion…", "info");

    const { error } = await supabase.auth.signOut();
    setBusy(false);

    if (error) return showMsg(error.message, "err");

    setAlreadyConnected(false);
    showMsg("Déconnectée.", "ok");
  }

  const loginHref = `/login?next=${nextEnc}`;
  const goNextHref = nextUrl;

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
          <p className="auth-sub">Sauvegarde tes échanges et continue après les messages gratuits.</p>

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
                <Link className="btn" href={goNextHref}>
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
              En créant un compte, tu acceptes que cet outil soit une exploration personnelle (non thérapeutique) et ne
              remplace pas un professionnel.
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
