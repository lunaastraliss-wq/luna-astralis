// app/login/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type MsgType = "ok" | "err" | "info";

export default function LoginPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const supabase = useMemo(() => createClientComponentClient(), []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ text: string; type: MsgType } | null>(null);
  const [alreadyConnected, setAlreadyConnected] = useState(false);

  const nextRaw = sp.get("next") || "/chat";
  const oauth = sp.get("oauth") === "1";

  function safeNext(v: string) {
    const s = (v || "").trim();
    if (!s) return "/chat";
    if (s.includes("http://") || s.includes("https://") || s.startsWith("//")) return "/chat";
    // force absolute internal path
    return s.startsWith("/") ? s : "/" + s;
  }

  const nextUrl = useMemo(() => safeNext(nextRaw), [nextRaw]);

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

        if (oauth) {
          if (hasSession) {
            router.replace(nextUrl);
            return;
          }
          setAlreadyConnected(false);
          showMsg("Connexion Google incomplète. Réessaie.", "err");
          return;
        }

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
  }, [supabase, oauth, router, nextUrl]);

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

  async function onGoogle() {
    clearMsg();
    setBusy(true);
    showMsg("Ouverture de Google…", "info");

    const origin = window.location.origin;
    const redirectTo = `${origin}/login?oauth=1&next=${encodeURIComponent(nextUrl)}`;

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
    if (!em || !em.includes("@")) {
      return showMsg("Entre ton email, puis clique “Mot de passe oublié ?”.", "err");
    }

    setBusy(true);
    showMsg("Envoi du lien de réinitialisation…", "info");

    const origin = window.location.origin;

    const { error } = await supabase.auth.resetPasswordForEmail(em, {
      redirectTo: `${origin}/login?next=${encodeURIComponent(nextUrl)}`,
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
      {/* HEADER */}
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

          {/* message */}
          {msg ? (
            <div
              id="msg"
              className={`auth-msg ${msg.type === "ok" ? "is-ok" : msg.type === "err" ? "is-err" : "is-info"}`}
              role="status"
              aria-live="polite"
              style={{ display: "block" }}
            >
              {msg.text}
            </div>
          ) : (
            <div id="msg" className="auth-msg" role="status" aria-live="polite" style={{ display: "none" }} />
          )}

          {/* ✅ Déjà connecté */}
          {alreadyConnected ? (
            <div id="already" style={{ display: "block", marginTop: 12 }}>
              <p className="auth-sub" style={{ margin: "0 0 10px 0" }}>
                Tu es déjà connectée.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link className="btn" id="goNextBtn" href={nextUrl}>
                  Continuer
                </Link>
                <button type="button" className="btn btn-ghost" id="logoutBtn" onClick={onLogout} disabled={busy}>
                  Se déconnecter
                </button>
              </div>
              <div className="auth-sep" aria-hidden="true" style={{ marginTop: 14 }}>
                <span>ou</span>
              </div>
            </div>
          ) : null}

          {/* Google */}
          <button
            type="button"
            className="btn auth-google"
            id="googleLogin"
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

          {/* Email / password */}
          <form className="auth-form" id="loginForm" autoComplete="on" noValidate onSubmit={onEmailPassword}>
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

            <button className="btn auth-submit" id="submitBtn" type="submit" disabled={busy} style={{ opacity: busy ? 0.7 : 1 }}>
              Se connecter
            </button>

            <button type="button" className="auth-forgot" id="forgot" onClick={onForgot} disabled={busy}>
              Mot de passe oublié ?
            </button>

            <p className="auth-switch">
              Pas encore de compte ?{" "}
              <Link className="auth-link" id="signupLink2" href={signupHref}>
                Créer un compte
              </Link>
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}

