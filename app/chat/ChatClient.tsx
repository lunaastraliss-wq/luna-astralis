"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { supabase } from "../../lib/supabase/client";

type ThreadMsg = { role: "user" | "ai"; text: string };

// UI uniquement (la vraie règle doit rester côté API)
const FREE_LIMIT = 15;

const STORAGE_PREFIX = "la_chat_";
const MAX_VISIBLE = 14;
const CONTEXT_HISTORY = 8;

const SIGNS: Record<string, string> = {
  belier: "Bélier ♈",
  taureau: "Taureau ♉",
  gemeaux: "Gémeaux ♊",
  cancer: "Cancer ♋",
  lion: "Lion ♌",
  vierge: "Vierge ♍",
  balance: "Balance ♎",
  scorpion: "Scorpion ♏",
  sagittaire: "Sagittaire ♐",
  capricorne: "Capricorne ♑",
  verseau: "Verseau ♒",
  poissons: "Poissons ♓",
};

const SIGN_DESC: Record<string, string> = {
  belier:
    "Énergie d’action et d’élan. On explore ton impulsion, ta colère (quand elle monte), et comment canaliser ton courage sans te brûler.",
  taureau:
    "Besoin de stabilité et de concret. On explore l’attachement, le plaisir, la sécurité intérieure, et comment lâcher sans perdre ton ancrage.",
  gemeaux:
    "Mental rapide et curiosité. On explore tes pensées en boucle, ta dualité, et comment clarifier ce que tu ressens derrière ce que tu analyses.",
  cancer:
    "Hyper-sensibilité et protection. On explore tes besoins affectifs, tes limites, et comment te sentir en sécurité sans tout porter seul·e.",
  lion:
    "Rayonnement et fierté du cœur. On explore l’estime de soi, la reconnaissance, et comment briller sans te suradapter au regard des autres.",
  vierge:
    "Lucidité et exigence. On explore le contrôle, la charge mentale, et comment trouver du calme quand tu veux que tout soit “bien fait”.",
  balance:
    "Équilibre et relation. On explore la peur du conflit, le besoin d’harmonie, et comment dire “non” sans culpabilité.",
  scorpion:
    "Intensité et transformation. On explore la confiance, la jalousie/la peur de perdre, et comment traverser une émotion sans te fermer.",
  sagittaire:
    "Sens et liberté. On explore l’ennui, l’envie d’ailleurs, et comment rester aligné·e quand tu te sens coincé·e ou limité·e.",
  capricorne:
    "Structure et responsabilité. On explore la pression, la performance, et comment te reposer sans te sentir “inutile”.",
  verseau:
    "Indépendance et vision. On explore la distance émotionnelle, ton besoin d’espace, et comment te connecter sans te sentir envahi·e.",
  poissons:
    "Intuition et empathie. On explore l’hypersensibilité, la fatigue émotionnelle, et comment te protéger sans t’éteindre.",
};

const SIGN_BOOKS: Record<string, string> = {
  belier: "https://a.co/d/ipv7KsG",
  taureau: "https://a.co/d/cNzESwI",
  gemeaux: "https://a.co/d/5rzhkCv",
  cancer: "https://a.co/d/9T3gj30",
  lion: "https://a.co/d/eQ0Fa2u",
  vierge: "https://a.co/d/7mMxP9f",
  balance: "https://a.co/d/i93cts5",
  scorpion: "https://a.co/d/0HQBCE8",
  sagittaire: "https://a.co/d/iOLDHqS",
  capricorne: "https://a.co/d/4JuWLu1",
  verseau: "https://a.co/d/de3Ukra",
  poissons: "https://a.co/d/hIM81yC",
};

function norm(s: string) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "");
}

function safeJsonParse<T>(raw: string | null, fallback: T): T {
  try {
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export default function ChatClient() {
  const sp = useSearchParams();
  const rawKey = sp.get("signe") || sp.get("sign") || "belier";

  const signKey = useMemo(() => norm(rawKey) || "belier", [rawKey]);
  const signName = SIGNS[signKey] || "—";
  const signDesc =
    SIGN_DESC[signKey] ||
    "Exploration douce : émotions, relations, stress, schémas, besoins, limites.";
  const bookUrl = SIGN_BOOKS[signKey] || "";

  const messagesRef = useRef<HTMLDivElement | null>(null);

  const [sessionEmail, setSessionEmail] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const [thread, setThread] = useState<ThreadMsg[]>([]);
  const [input, setInput] = useState("");

  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallMode, setPaywallMode] = useState<"guest" | "premium">("guest");

  const [historyOpen, setHistoryOpen] = useState(false);
  const [uiUsed, setUiUsed] = useState(0);

  const KEY_THREAD = useMemo(
    () => STORAGE_PREFIX + "thread_" + signKey,
    [signKey]
  );
  const KEY_UI_USED = STORAGE_PREFIX + "ui_used_global";
  const KEY_GUEST_ID = STORAGE_PREFIX + "guest_id";

  function currentPathWithQuery() {
    if (typeof window === "undefined") return "/chat";
    return "/chat" + window.location.search;
  }

  function getGuestId() {
    if (typeof window === "undefined") return "guest_server";
    try {
      const existing = localStorage.getItem(KEY_GUEST_ID);
      if (existing) return existing;

      const id =
        (window.crypto &&
          "randomUUID" in window.crypto &&
          typeof window.crypto.randomUUID === "function" &&
          window.crypto.randomUUID()) ||
        "guest_" + Math.random().toString(36).slice(2) + Date.now();

      localStorage.setItem(KEY_GUEST_ID, id);
      return id;
    } catch {
      return "guest_" + Math.random().toString(36).slice(2) + Date.now();
    }
  }

  function loadThread(): ThreadMsg[] {
    if (typeof window === "undefined") return [];
    const arr = safeJsonParse<unknown>(localStorage.getItem(KEY_THREAD), []);
    return Array.isArray(arr) ? (arr as ThreadMsg[]) : [];
  }

  function saveThread(arr: ThreadMsg[]) {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(KEY_THREAD, JSON.stringify(arr || []));
    } catch {}
  }

  function ensureHello(existing: ThreadMsg[]) {
    if (existing.length) return existing;

    const hello =
      `Bonjour ✨\n` +
      `Avec l’énergie de ton signe, ${signName}, on peut explorer ce que tu vis en ce moment.\n` +
      `Qu’est-ce qui te préoccupe aujourd’hui ?`;

    const t: ThreadMsg[] = [{ role: "ai", text: hello }];
    saveThread(t);
    return t;
  }

  function getUiUsed() {
    if (typeof window === "undefined") return 0;
    const n = Number(localStorage.getItem(KEY_UI_USED) || "0");
    return Number.isFinite(n) ? n : 0;
  }

  function incUiUsed() {
    const n = getUiUsed() + 1;
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(KEY_UI_USED, String(n));
      } catch {}
    }
    setUiUsed(n);
    return n;
  }

  function scrollToBottom(force = false) {
    const el = messagesRef.current;
    if (!el) return;

    if (force) {
      el.scrollTop = el.scrollHeight;
      return;
    }

    const threshold = 160;
    const nearBottom =
      el.scrollHeight - (el.scrollTop + el.clientHeight) < threshold;
    if (nearBottom) el.scrollTop = el.scrollHeight;
  }

  function openPaywallGuest() {
    setPaywallMode("guest");
    setPaywallOpen(true);
  }
  function openPaywallPremiumRequired() {
    setPaywallMode("premium");
    setPaywallOpen(true);
  }
  function closePaywall() {
    setPaywallOpen(false);
  }

  async function getSessionSafe() {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) return null;
      return data?.session || null;
    } catch {
      return null;
    }
  }

  async function askLuna(userText: string, threadForContext: ThreadMsg[]) {
    const session = await getSessionSafe();
    const authed = !!session;

    const context = (threadForContext || []).slice(-CONTEXT_HISTORY);

    const messages = [
      { role: "user", content: `Signe: ${signName} (key=${signKey}).` },
      ...context.map((m) => ({
        role: m.role === "ai" ? "assistant" : "user",
        content: m.text,
      })),
      { role: "user", content: userText },
    ];

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lang: "fr",
        messages,
        guestId: authed ? undefined : getGuestId(),
      }),
    });

    const data = await res.json().catch(() => ({} as any));

    if (!res.ok) {
      if (data?.error === "FREE_LIMIT_REACHED") {
        openPaywallGuest();
        throw new Error("FREE_LIMIT_REACHED");
      }
      if (data?.error === "PREMIUM_REQUIRED") {
        openPaywallPremiumRequired();
        throw new Error("PREMIUM_REQUIRED");
      }
      throw new Error(data?.error || "Erreur serveur (/api/chat).");
    }

    if (!data?.message) throw new Error("Réponse vide.");
    return String(data.message);
  }

  // Boot
  useEffect(() => {
    setUiUsed(getUiUsed());

    const t = ensureHello(loadThread());
    setThread(t);

    (async () => {
      const s1 = await getSessionSafe();
      if (!s1) await new Promise((r) => setTimeout(r, 250));
      const s2 = (await getSessionSafe()) || s1;

      setIsAuth(!!s2);
      setSessionEmail(s2?.user?.email || "");
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [KEY_THREAD]);

  // Auth changes
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (_event, session) => {
      closePaywall();
      setIsAuth(!!session);
      setSessionEmail(session?.user?.email || "");

      const t = ensureHello(loadThread());
      setThread(t);
    });

    return () => {
      data.subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [KEY_THREAD]);

  // Auto scroll
  useEffect(() => {
    scrollToBottom(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thread.length]);

  const freeLeft = Math.max(0, FREE_LIMIT - uiUsed);
  const tail = useMemo(() => thread.slice(-MAX_VISIBLE), [thread]);

  async function onSend(e: React.FormEvent) {
    e.preventDefault();
    const text = (input || "").trim();
    if (!text) return;

    const s = await getSessionSafe();
    const authed = !!s;

    setIsAuth(authed);
    setSessionEmail(s?.user?.email || "");

    // gate UI invité (UI uniquement)
    if (!authed && getUiUsed() >= FREE_LIMIT) {
      openPaywallGuest();
      return;
    }

    const t = loadThread();
    const t1: ThreadMsg[] = [...t, { role: "user", text }];
    saveThread(t1);
    setThread(t1);
    setInput("");

    if (!authed) incUiUsed();

    // placeholder typing (sans sauvegarder)
    setThread([...t1, { role: "ai", text: "…" }]);

    try {
      const reply = await askLuna(text, t1);
      const t2: ThreadMsg[] = [...t1, { role: "ai", text: reply }];
      saveThread(t2);
      setThread(t2);
    } catch (err: any) {
      if (
        err?.message === "FREE_LIMIT_REACHED" ||
        err?.message === "PREMIUM_REQUIRED"
      ) {
        setThread([...t1]); // retire “...”
        return;
      }

      const msg =
        "Erreur. Vérifie que /api/chat existe sur Vercel. " +
        (err?.message ? `(${err.message})` : "");

      const t2: ThreadMsg[] = [...t1, { role: "ai", text: msg }];
      saveThread(t2);
      setThread(t2);
    }
  }

  async function onLogout(e: React.MouseEvent) {
    e.preventDefault();
    try {
      await supabase.auth.signOut();
    } catch {}

    closePaywall();
    setIsAuth(false);
    setSessionEmail("");

    const t = ensureHello(loadThread());
    setThread(t);
  }

  function onClearHistoryLocal() {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(KEY_THREAD);
      } catch {}
    }
    const t = ensureHello([]);
    setThread(t);
  }

  return (
    <>
      {/* CSS complet */}
      <style>{`
        :root{
          --topH: 64px;
          --cardBg: rgba(10,10,14,.58);
          --panelBg: rgba(10,10,14,.46);
          --bd: rgba(255,255,255,.10);
          --bd2: rgba(255,255,255,.08);
          --txt: rgba(255,255,255,.92);
          --muted: rgba(255,255,255,.74);
        }

        html, body { height: 100%; }
        body{
          height: 100%;
          overflow: hidden;
          color: var(--txt);
          letter-spacing: .15px;
          line-height: 1.45;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        /* ===== LAYOUT ===== */
        .chat-top{
          height: var(--topH);
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding: 0 16px;
          border-bottom: 1px solid var(--bd2);
          background: rgba(8,8,12,.62);
          backdrop-filter: blur(10px);
        }

        .chat-wrap{
          height: calc(100dvh - var(--topH));
          min-height: 0;
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 16px;
          padding: 16px;
        }

        .chat-side{
          min-height: 0;
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid var(--bd2);
          background: var(--cardBg);
          backdrop-filter: blur(10px);
          display:flex;
          flex-direction:column;
          padding: 14px;
        }

        .chat-panel{
          min-height: 0;
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid var(--bd2);
          background: var(--panelBg);
          backdrop-filter: blur(10px);
          display:flex;
          flex-direction:column;
          position:relative;
        }

        /* ===== SIDE (profil) ===== */
        .ai-face-wrap{
          border-radius: 16px;
          overflow:hidden;
          border: 1px solid var(--bd2);
          margin-bottom: 12px;
        }
        .ai-face{ width: 100%; height: auto; display:block; }

        .ai-name{
          font-size: 18px;
          font-weight: 800;
          letter-spacing: .25px;
          margin-bottom: 8px;
        }
        .ai-tag{
          display:inline-flex;
          align-items:center;
          gap: 8px;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid var(--bd2);
          background: rgba(255,255,255,.06);
          font-size: 13px;
          color: var(--muted);
          margin-bottom: 10px;
        }
        .ai-desc{
          font-size: 14px;
          line-height: 1.55;
          color: var(--txt);
          margin-bottom: 12px;
        }
        .ai-book-link{
          display:inline-flex;
          align-items:center;
          gap: 8px;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid var(--bd2);
          background: rgba(255,255,255,.06);
          text-decoration: none;
          color: var(--txt);
          font-weight: 700;
          letter-spacing: .15px;
        }
        .ai-disclaimer{
          margin-top: auto;
          font-size: 12px;
          color: rgba(255,255,255,.65);
          line-height: 1.5;
          padding-top: 12px;
          border-top: 1px solid var(--bd2);
        }

        /* ===== HERO (image en haut du chat) ===== */
        .chat-hero{
          position: relative;
          flex: 0 0 auto;
          height: 220px;
          overflow: hidden;
          border-bottom: 1px solid var(--bd2);
        }
        .chat-hero-inner{ position:relative; height:100%; }
        .chat-hero-img{
          position:absolute; inset:0;
          width:100%; height:100%;
          object-fit: cover;
          transform: scale(1.03);
        }
        .chat-hero-overlay{
          position:absolute; inset:0;
          background:
            radial-gradient(700px 280px at 30% 20%, rgba(120,80,255,.22), transparent 60%),
            linear-gradient(to bottom, rgba(0,0,0,.08), rgba(0,0,0,.72));
          pointer-events:none;
        }
        .chat-hero-card{
          position:absolute;
          left: 14px; right: 14px; bottom: 12px;
          z-index:2;
          max-width: 720px;
          padding: 12px 14px;
          border-radius: 16px;
          border: 1px solid var(--bd2);
          background: rgba(8,8,12,.62);
          backdrop-filter: blur(10px);
        }
        .hero-title{
          margin: 0 0 6px 0;
          font-weight: 900;
          letter-spacing: .2px;
          font-size: 16px;
        }
        .hero-desc{
          margin: 0;
          font-size: 13.5px;
          line-height: 1.55;
          color: rgba(255,255,255,.86);
        }
        .hero-book{ margin-top: 10px; }

        /* ===== HEADER CHAT ===== */
        .chat-header{
          flex: 0 0 auto;
          padding: 12px 14px;
          border-bottom: 1px solid var(--bd2);
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 12px;
        }
        .chat-title{
          font-size: 14px;
          font-weight: 800;
          letter-spacing: .2px;
        }
        .chat-pill{
          margin-left: 8px;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid var(--bd2);
          background: rgba(255,255,255,.06);
          font-size: 12px;
          color: var(--muted);
        }

        /* ===== MESSAGES ===== */
        .chat-messages{
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          overscroll-behavior: contain;
          scroll-behavior: smooth;
          padding: 14px;
          padding-bottom: 92px;
        }
        .msg-row{
          display:flex;
          gap: 10px;
          margin-bottom: 12px;
          align-items:flex-end;
        }
        .msg-avatar{
          width: 34px;
          height: 34px;
          border-radius: 999px;
          border: 1px solid var(--bd2);
          object-fit: cover;
          flex: 0 0 auto;
        }
        .msg-avatar-spacer{ width: 34px; height: 34px; }

        .msg-bubble{
          white-space: pre-wrap;
          max-width: 760px;
          padding: 12px 14px;
          border-radius: 16px;
          border: 1px solid var(--bd2);
          background: rgba(255,255,255,.06);
          line-height: 1.6;
          font-size: 14px;
          letter-spacing: .15px;
        }
        .msg-user{ justify-content: flex-end; }
        .msg-user .msg-bubble{
          background: rgba(120,80,255,.14);
          border-color: rgba(120,80,255,.26);
        }

        /* ===== INPUT ===== */
        .chat-inputbar{
          position: sticky;
          bottom: 0;
          z-index: 10;
          display:flex;
          gap: 10px;
          padding: 12px 14px;
          background: rgba(10,10,14,.84);
          border-top: 1px solid var(--bd2);
          backdrop-filter: blur(12px);
        }
        .chat-input{
          flex: 1;
          height: 46px;
          border-radius: 14px;
          padding: 0 14px;
          border: 1px solid var(--bd2);
          background: rgba(255,255,255,.06);
          color: var(--txt);
          outline: none;
          letter-spacing: .2px;
        }
        .chat-input::placeholder{ color: rgba(255,255,255,.55); }
        .chat-send{
          height: 46px;
          padding: 0 16px;
          border-radius: 14px;
          border: 1px solid rgba(120,80,255,.35);
          background: rgba(120,80,255,.22);
          color: var(--txt);
          font-weight: 800;
          letter-spacing: .2px;
          cursor: pointer;
        }
        .chat-send:disabled,
        .chat-input:disabled{
          opacity: .55;
          cursor: not-allowed;
        }

        /* ===== TOP ===== */
        .chat-brand{ display:flex; align-items:center; gap: 10px; text-decoration:none; color: var(--txt); }
        .chat-logo{ width: 34px; height: 34px; object-fit: contain; }
        .chat-brand-name{ font-weight: 900; letter-spacing: .6px; line-height: 1.05; }
        .chat-brand-sub{ font-size: 12px; color: rgba(255,255,255,.65); letter-spacing:.2px; margin-top: 2px; }

        .chat-back, .chat-upgrade{
          text-decoration:none;
          color: rgba(255,255,255,.86);
          padding: 8px 10px;
          border-radius: 12px;
          border: 1px solid var(--bd2);
          background: rgba(255,255,255,.05);
          font-weight: 700;
          letter-spacing: .15px;
          font-size: 13px;
        }
        .chat-logout{
          text-decoration:none;
          color: rgba(255,255,255,.78);
          padding: 8px 10px;
          border-radius: 12px;
          border: 1px solid var(--bd2);
          background: rgba(255,255,255,.04);
          font-weight: 700;
          font-size: 13px;
        }
        .mode-pill{
          display:inline-flex;
          align-items:center;
          gap: 8px;
          padding: 8px 10px;
          border-radius: 999px;
          border: 1px solid var(--bd2);
          background: rgba(255,255,255,.05);
          font-size: 13px;
          color: rgba(255,255,255,.80);
          letter-spacing: .15px;
        }
        .mode-dot{
          width: 8px; height: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,.35);
        }
        .mode-dot.green{ background: rgba(60, 255, 160, .75); }

        /* ===== MOBILE ===== */
        @media (max-width: 920px){
          .chat-wrap{
            grid-template-columns: 1fr;
            padding: 12px;
          }
          .chat-side{ order: 2; }
          .chat-panel{ order: 1; }
        }
        @media (max-width: 720px){
          .chat-hero{ display:none !important; }
          .chat-messages{ padding-bottom: 98px; }
          .msg-bubble{ font-size: 14px; line-height: 1.62; }
        }
      `}</style>

      <header className="chat-top" role="banner">
        <Link className="chat-brand" href="/" aria-label="Retour à l’accueil">
          <img
            className="chat-logo"
            src="/logo-luna-astralis-transparent.png"
            alt="Luna Astralis"
          />
          <div className="chat-brand-text">
            <div className="chat-brand-name">LUNA ASTRALIS</div>
            <div className="chat-brand-sub">Astro & psycho</div>
          </div>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link className="chat-back" href="/#signes">
            Changer de signe
          </Link>

          <span className="mode-pill" title="Mode actuel">
            <span className={"mode-dot " + (isAuth ? "green" : "")} />
            <span>{isAuth ? "Connecté" : "Invité"}</span>
          </span>

          {isAuth ? (
            <>
              <Link className="chat-upgrade" href="/pricing">
                Upgrade
              </Link>
              <a className="chat-logout" href="#" onClick={onLogout}>
                Déconnexion
              </a>
            </>
          ) : (
            <Link className="chat-upgrade" href="/pricing">
              Offres
            </Link>
          )}
        </div>
      </header>

      <main className="chat-wrap" role="main">
        <aside className="chat-side" aria-label="Profil IA">
          <div className="ai-face-wrap">
            <img className="ai-face" src="/ia-luna-astralis.png" alt="Luna (IA)" />
          </div>

          <div>
            <div className="ai-name">Luna</div>
            <div className="ai-tag">Signe : {signName}</div>
            <div className="ai-desc">{signDesc}</div>

            {!!bookUrl && (
              <div className="ai-book" style={{ marginTop: 10 }}>
                <a
                  className="ai-book-link"
                  href={bookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Approfondir ce signe"
                  title="Approfondir ce signe"
                >
                  ✦ Approfondir ce signe
                </a>
              </div>
            )}

            <div style={{ marginTop: 10, fontSize: 12, opacity: 0.75 }}>
              {isAuth ? sessionEmail : ""}
            </div>

            {!isAuth && (
              <div style={{ marginTop: 8, fontSize: 12, opacity: 0.75 }}>
                {freeLeft > 0 ? (
                  <>Gratuit : {freeLeft} message(s) restant(s)</>
                ) : (
                  <>Limite gratuite atteinte</>
                )}
              </div>
            )}
          </div>

          <div className="ai-disclaimer">
            Outil d’exploration personnelle, non thérapeutique. Aucune thérapie,
            aucun diagnostic.
          </div>
        </aside>

        <section className="chat-panel" aria-label="Discussion">
          {/* HERO (optionnel) */}
          <div className="chat-hero" aria-hidden="true">
            <div className="chat-hero-inner">
              <img className="chat-hero-img" src="/hero-luna.jpg" alt="" />
              <div className="chat-hero-overlay" />
              <div className="chat-hero-card">
                <p className="hero-title">Discussion — {signName}</p>
                <p className="hero-desc">
                  Une exploration douce : émotions, schémas, besoins, limites.
                </p>
                {!!bookUrl && (
                  <div className="hero-book">
                    <a
                      className="ai-book-link"
                      href={bookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ✦ Approfondir ce signe
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="chat-header">
            <div className="chat-title">
              Discussion <span className="chat-pill">{signName}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button
                type="button"
                onClick={() => setHistoryOpen(true)}
                style={{
                  padding: "8px 10px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,.10)",
                  background: "rgba(255,255,255,.05)",
                  color: "rgba(255,255,255,.86)",
                  fontWeight: 800,
                  letterSpacing: ".15px",
                  cursor: "pointer",
                }}
              >
                Historique
              </button>

              <div
                aria-hidden="true"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 999,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,.10)",
                }}
              >
                <img
                  src="/ia-luna-astralis.png"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                className={"msg-row " + (m.role === "ai" ? "msg-ai" : "msg-user")}
              >
                {m.role === "ai" ? (
                  <img className="msg-avatar" src="/ia-luna-astralis.png" alt="Luna (IA)" />
                ) : (
                  <div className="msg-avatar-spacer" />
                )}
                <div className="msg-bubble">{m.text}</div>
              </div>
            ))}
          </div>

          <form className="chat-inputbar" onSubmit={onSend} autoComplete="off">
            <input
              className="chat-input"
              placeholder="Écris ton message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
              disabled={paywallOpen || historyOpen}
            />
            <button
              className="chat-send"
              type="submit"
              disabled={paywallOpen || historyOpen}
            >
              Envoyer
            </button>
          </form>
        </section>
      </main>

      {/* PAYWALL */}
      {paywallOpen && (
        <div
          className="paywall"
          style={{
            display: "flex",
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.55)",
            backdropFilter: "blur(6px)",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            zIndex: 50,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closePaywall();
          }}
        >
          <div
            className="paywall-card"
            role="dialog"
            aria-modal="true"
            aria-label="Continuer la discussion"
            style={{
              width: "min(520px, 100%)",
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,.10)",
              background: "rgba(10,10,14,.92)",
              padding: 16,
            }}
          >
            <h3 style={{ margin: 0, fontSize: 18, letterSpacing: ".2px" }}>
              Continuer la discussion
            </h3>

            {paywallMode === "guest" ? (
              <>
                <p
                  style={{
                    marginTop: 10,
                    color: "rgba(255,255,255,.82)",
                    lineHeight: 1.55,
                  }}
                >
                  Tu as atteint la limite gratuite. Crée un compte (gratuit)
                  pour continuer et retrouver tes échanges.
                </p>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                  <Link
                    href={`/login?next=${encodeURIComponent(currentPathWithQuery())}`}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 14,
                      border: "1px solid rgba(120,80,255,.35)",
                      background: "rgba(120,80,255,.22)",
                      color: "rgba(255,255,255,.92)",
                      fontWeight: 900,
                      textDecoration: "none",
                    }}
                  >
                    Créer un compte / Se connecter
                  </Link>

                  <Link
                    href={`/pricing?next=${encodeURIComponent(currentPathWithQuery())}`}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 14,
                      border: "1px solid rgba(255,255,255,.12)",
                      background: "rgba(255,255,255,.06)",
                      color: "rgba(255,255,255,.90)",
                      fontWeight: 800,
                      textDecoration: "none",
                    }}
                  >
                    Voir les offres
                  </Link>

                  <button
                    type="button"
                    onClick={closePaywall}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 14,
                      border: "1px solid rgba(255,255,255,.12)",
                      background: "rgba(255,255,255,.04)",
                      color: "rgba(255,255,255,.85)",
                      fontWeight: 800,
                      cursor: "pointer",
                    }}
                  >
                    Fermer
                  </button>
                </div>

                <div style={{ marginTop: 10, fontSize: 12, opacity: 0.75, lineHeight: 1.5 }}>
                  Astuce : le compte sert à sauvegarder ton historique. L’accès complet est
                  disponible via une offre.
                </div>
              </>
            ) : (
              <>
                <p
                  style={{
                    marginTop: 10,
                    color: "rgba(255,255,255,.82)",
                    lineHeight: 1.55,
                  }}
                >
                  Ton compte est bien connecté, mais ce chat complet est réservé aux abonnés.
                  Choisis une offre pour continuer.
                </p>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                  <Link
                    href={`/pricing?next=${encodeURIComponent(currentPathWithQuery())}`}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 14,
                      border: "1px solid rgba(120,80,255,.35)",
                      background: "rgba(120,80,255,.22)",
                      color: "rgba(255,255,255,.92)",
                      fontWeight: 900,
                      textDecoration: "none",
                    }}
                  >
                    Voir les offres
                  </Link>

                  <button
                    type="button"
                    onClick={closePaywall}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 14,
                      border: "1px solid rgba(255,255,255,.12)",
                      background: "rgba(255,255,255,.04)",
                      color: "rgba(255,255,255,.85)",
                      fontWeight: 800,
                      cursor: "pointer",
                    }}
                  >
                    Fermer
                  </button>
                </div>

                <div style={{ marginTop: 10, fontSize: 12, opacity: 0.75, lineHeight: 1.5 }}>
                  Après paiement, reviens ici : l’accès se débloquera automatiquement.
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* HISTORIQUE */}
      {historyOpen && (
        <div
          className="history"
          style={{
            display: "flex",
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.55)",
            backdropFilter: "blur(6px)",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            zIndex: 60,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setHistoryOpen(false);
          }}
        >
          <div
            className="history-card"
            role="dialog"
            aria-modal="true"
            aria-label="Historique"
            style={{
              width: "min(860px, 100%)",
              height: "min(78vh, 820px)",
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,.10)",
              background: "rgba(10,10,14,.92)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="history-top"
              style={{
                padding: 14,
                borderBottom: "1px solid rgba(255,255,255,.10)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <div style={{ fontWeight: 900, letterSpacing: ".2px" }}>Historique</div>
              <button
                type="button"
                onClick={() => setHistoryOpen(false)}
                style={{
                  padding: "8px 10px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,.12)",
                  background: "rgba(255,255,255,.05)",
                  color: "rgba(255,255,255,.90)",
                  fontWeight: 900,
                  cursor: "pointer",
                }}
              >
                Fermer
              </button>
            </div>

            <div
              className="history-body"
              style={{
                flex: 1,
                minHeight: 0,
                overflowY: "auto",
                padding: 14,
              }}
            >
              {thread.map((m, idx) => (
                <div
                  key={idx}
                  className={"history-item " + (m.role === "user" ? "user" : "ai")}
                  style={{
                    display: "flex",
                    gap: 10,
                    justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                    marginBottom: 12,
                    alignItems: "flex-end",
                  }}
                >
                  {m.role !== "user" ? (
                    <img
                      src="/ia-luna-astralis.png"
                      alt="Luna (IA)"
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 999,
                        border: "1px solid rgba(255,255,255,.10)",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div style={{ width: 34, height: 34 }} />
                  )}

                  <div
                    className="history-bubble"
                    style={{
                      maxWidth: 760,
                      padding: "12px 14px",
                      borderRadius: 16,
                      border: "1px solid rgba(255,255,255,.10)",
                      background:
                        m.role === "user"
                          ? "rgba(120,80,255,.14)"
                          : "rgba(255,255,255,.06)",
                      lineHeight: 1.6,
                      letterSpacing: ".15px",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="history-foot"
              style={{
                padding: 14,
                borderTop: "1px solid rgba(255,255,255,.10)",
                display: "flex",
                gap: 10,
                justifyContent: "flex-end",
                flexWrap: "wrap",
              }}
            >
              <button
                type="button"
                onClick={() => {
                  const el = document.querySelector(".history-body") as HTMLDivElement | null;
                  if (el) el.scrollTop = el.scrollHeight;
                }}
                style={{
                  padding: "10px 12px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,.12)",
                  background: "rgba(255,255,255,.05)",
                  color: "rgba(255,255,255,.90)",
                  fontWeight: 900,
                  cursor: "pointer",
                }}
              >
                Aller au bas
              </button>

              <button
                type="button"
                onClick={onClearHistoryLocal}
                style={{
                  padding: "10px 12px",
                  borderRadius: 14,
                  border: "1px solid rgba(120,80,255,.35)",
                  background: "rgba(120,80,255,.22)",
                  color: "rgba(255,255,255,.92)",
                  fontWeight: 900,
                  cursor: "pointer",
                }}
              >
                Effacer (local)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
