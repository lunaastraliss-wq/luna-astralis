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

export default function ChatPage() {
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

  const KEY_THREAD = useMemo(() => STORAGE_PREFIX + "thread_" + signKey, [signKey]);
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

    const threshold = 140;
    const nearBottom = el.scrollHeight - (el.scrollTop + el.clientHeight) < threshold;
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

  // Boot (sign change => reload local thread + uiUsed)
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

  // Auto scroll on new messages
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

    // placeholder typing
    setThread([...t1, { role: "ai", text: "…" }]);

    try {
      const reply = await askLuna(text, t1);
      const t2: ThreadMsg[] = [...t1, { role: "ai", text: reply }];
      saveThread(t2);
      setThread(t2);
    } catch (err: any) {
      if (err?.message === "FREE_LIMIT_REACHED" || err?.message === "PREMIUM_REQUIRED") {
        setThread([...t1]); // retire “...”
        return;
      }

      const msg =
        "Erreur. Vérifie que /api/chat existe sur Vercel. " + (err?.message ? `(${err.message})` : "");

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
      <style>{`
        html, body { height: 100%; }
        body { height: 100%; overflow: hidden; }
        .chat-wrap { min-height: 0; }

        .chat-panel{
          display:flex;
          flex-direction:column;
          min-height:0;
          position:relative;
        }
        .chat-messages{
          flex:1;
          min-height:0;
          overflow-y:auto;
          overscroll-behavior: contain;
          scroll-behavior: smooth;
          padding-bottom: 12px;
        }
        .chat-inputbar{
          position: sticky;
          bottom: 0;
          z-index: 10;
          backdrop-filter: blur(6px);
        }
        .msg-bubble{ white-space: pre-wrap; }

        @media (max-width: 720px){
          .chat-hero-img{ display:none !important; }
          .chat-hero-overlay{ display:none !important; }
          .chat-hero-inner{
            min-height:auto !important;
            padding: 12px 12px 6px !important;
          }
          .chat-hero-card{
            position: relative !important;
            transform: none !important;
            margin: 0 !important;
          }
          .hero-book{ margin-top: 10px; }
        }
      `}</style>

      <header className="chat-top" role="banner">
        <Link className="chat-brand" href="/" aria-label="Retour à l’accueil">
          <img className="chat-logo" src="/logo-luna-astralis-transparent.png" alt="Luna Astralis" />
          <div className="chat-brand-text">
            <div className="chat-brand-name">LUNA ASTRALIS</div>
            <div className="chat-brand-sub">Astro & psycho</div>
          </div>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
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

            <div style={{ marginTop: 10, fontSize: 12, opacity: 0.7 }}>{isAuth ? sessionEmail : ""}</div>

            {!isAuth && (
              <div style={{ marginTop: 6, fontSize: 12, opacity: 0.7 }}>
                {freeLeft > 0 ? <>Gratuit : {freeLeft} message(s) restant(s)</> : <>Limite gratuite atteinte</>}
              </div>
            )}
          </div>

          <div className="ai-disclaimer">
            Outil d’exploration personnelle, non thérapeutique. Aucune thérapie, aucun diagnostic.
          </div>
        </aside>

        <section className="chat-panel" aria-label="Discussion">
          <div className="chat-hero" aria-hidden="true">
            <div className="chat-hero-inner">
              <img className="chat-hero-img" src="/ia-luna-astralis.png" alt="" />
              <div className="chat-hero-overlay" />

              <div className="chat-hero-card">
                <p className="hero-title">Ton signe : {signName}</p>
                <p className="hero-desc">{signDesc}</p>

                {!!bookUrl && (
                  <div className="hero-book" style={{ display: "block" }}>
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
              </div>
            </div>
          </div>

          <div className="chat-header">
            <div className="chat-title">
              Discussion <span className="chat-pill">{signName}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button className="chat-history-btn" type="button" onClick={() => setHistoryOpen(true)}>
                Historique
              </button>
              <div className="ai-face-mini-wrap" aria-hidden="true">
                <img className="ai-face-mini" src="/ia-luna-astralis.png" alt="" />
              </div>
            </div>
          </div>

          <div className="chat-messages" id="messages" ref={messagesRef} role="log" aria-live="polite">
            {tail.map((m, idx) => (
              <div key={idx} className={"msg-row " + (m.role === "ai" ? "msg-ai" : "msg-user")}>
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
            <button className="chat-send" type="submit" disabled={paywallOpen || historyOpen}>
              Envoyer
            </button>
          </form>
        </section>
      </main>

      {/* PAYWALL */}
      {paywallOpen && (
        <div
          className="paywall"
          style={{ display: "flex" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closePaywall();
          }}
        >
          <div className="paywall-card" role="dialog" aria-modal="true" aria-label="Continuer la discussion">
            <h3 className="paywall-title">Continuer la discussion</h3>

            {paywallMode === "guest" ? (
              <>
                <p className="paywall-desc">
                  Tu as atteint la limite gratuite. Crée un compte (gratuit) pour continuer et retrouver tes échanges.
                </p>
                <div className="paywall-actions">
                  <Link className="btn btn-primary" href={`/login?next=${encodeURIComponent(currentPathWithQuery())}`}>
                    Créer un compte / Se connecter
                  </Link>
                  <Link className="btn" href={`/pricing?next=${encodeURIComponent(currentPathWithQuery())}`}>
                    Voir les offres
                  </Link>
                  <button className="btn" type="button" onClick={closePaywall}>
                    Fermer
                  </button>
                </div>
                <div className="paywall-foot">
                  Astuce : le compte sert à sauvegarder ton historique. L’accès complet est disponible via une offre.
                </div>
              </>
            ) : (
              <>
                <p className="paywall-desc">
                  Ton compte est bien connecté, mais ce chat complet est réservé aux abonnés. Choisis une offre pour
                  continuer.
                </p>
                <div className="paywall-actions">
                  <Link className="btn btn-primary" href={`/pricing?next=${encodeURIComponent(currentPathWithQuery())}`}>
                    Voir les offres
                  </Link>
                  <button className="btn" type="button" onClick={closePaywall}>
                    Fermer
                  </button>
                </div>
                <div className="paywall-foot">Après paiement, reviens ici : l’accès se débloquera automatiquement.</div>
              </>
            )}
          </div>
        </div>
      )}

      {/* HISTORIQUE */}
      {historyOpen && (
        <div
          className="history"
          style={{ display: "flex" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setHistoryOpen(false);
          }}
        >
          <div className="history-card" role="dialog" aria-modal="true" aria-label="Historique">
            <div className="history-top">
              <div className="history-title">Historique</div>
              <button className="history-close" type="button" onClick={() => setHistoryOpen(false)}>
                Fermer
              </button>
            </div>

            <div className="history-body">
              {thread.map((m, idx) => (
                <div
                  key={idx}
                  className={"history-item " + (m.role === "user" ? "user" : "ai")}
                  style={{ justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}
                >
                  {m.role !== "user" ? (
                    <img className="history-avatar" src="/ia-luna-astralis.png" alt="Luna (IA)" />
                  ) : (
                    <div style={{ width: 34, height: 34 }} />
                  )}
                  <div className="history-bubble">{m.text}</div>
                </div>
              ))}
            </div>

            <div className="history-foot">
              <button
                className="btn"
                type="button"
                onClick={() => {
                  const el = document.querySelector(".history-body") as HTMLDivElement | null;
                  if (el) el.scrollTop = el.scrollHeight;
                }}
              >
                Aller au bas
              </button>
              <button className="btn btn-primary" type="button" onClick={onClearHistoryLocal}>
                Effacer (local)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
