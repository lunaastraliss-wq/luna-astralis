"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type MsgType = "ok" | "err" | "info";

function safeNext(v: string | null) {
  const s = (v || "").trim();
  if (!s) return "/chat";
  if (s.includes("http://") || s.includes("https://") || s.startsWith("//")) return "/chat";
  return s.startsWith("/") ? s : "/" + s;
}

export default function LoginPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const supabase = useMemo(() => createClientComponentClient(), []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ text: string; type: MsgType } | null>(null);
  const [alreadyConnected, setAlreadyConnected] = useState(false);

  const nextUrl = useMemo(() => safeNext(sp.get("next")), [sp]);

  function showMsg(text: string, type: MsgType = "info") {
    setMsg({ text, type });
  }
  function clearMsg() {
    setMsg(null);
  }

  // BOOT
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
        if (hasSession) {
          setAlreadyConnected(true);
          showMsg("Tu es déjà connectée.", "ok");
        } else {
          setAlreadyConnected(false);
        }
      } catch (e: any) {
        showMsg("Erreur JS: " + (e?.message || String(e)), "err");
      }
    })();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAlreadyConnected(true);
        setBusy(false);
      } else {
        setAlreadyConnected(false);
      }
    });

    return () => {
      mounted = false;
      sub.subscription?.unsubscribe();
    };
  }, [supabase]);

  async function onEmailPassword(e: React.FormEvent) {
    e.preventDefault();
    clearMsg();

    const em = email.trim();
    if (!em || !em.includes("@")) return showMsg("Entre un email valide.", "err");
    if (!password || password.length < 6) return showMsg("Mot de passe invalide.", "err");

    setBusy(true);
    showMsg("Connexion…", "info");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: em,
      password,
    });

    if (error) {
      setBusy(false);
      return showMsg(error.message, "err");
    }

    if (data?.session) {
      showMsg("Connectée. Redirection…", "ok");
      router.replace(nextUrl);
      return;
    }

    setBusy(false);
    showMsg("Connexion faite, mais session introuvable. Réessaie.", "err");
  }

  // ✅ Google OAuth — redirige vers /auth/callback (server) qui échange le code -> session
  async function onGoogle() {
    clearMsg();
    setBusy(true);
    showMsg("Ouverture de Google…", "info");

    // (window seulement) — page client
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

    // Normalement ça redirige; fallback UX si popup bloquée
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
      redirectTo: `${origin}/reset-password?next=${encodeURIComponent(nextUrl)}`,
    });

    setBusy(false);

    if (error) return showMsg(error.message, "err");
    showMsg("Email envoyé. Vérifie ta boîte de réception (et indésirables).", "ok");
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

  const signupHref = `/signup?next=${encodeURIComponent(nextUrl)}`;

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
          <Link className="btn btn-small" href={signupHref}>
            Créer un compte
          </Link>
        </nav>
      </header>

      <main className="wrap auth-wrap" role="main">
        <section className="auth-card" aria-label="Connexion">
          <h1 className="auth-title">Mon compte</h1>
          <p className="auth-sub">
            Connecte-toi pour continuer la discussion et retrouver tes échanges.
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
                <Link className="btn" href={nextUrl}>
                  Continuer
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
              placeholder="Ton mot de passe"
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
              Pas encore de compte ?{" "}
              <Link className="auth-link" href={signupHref}>
                Créer un compte
              </Link>
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}
