"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "../../lib/supabase/client";

import ChatSidebar from "./ChatSidebar";
import ChatPanel, { TopBar } from "./ChatPanel";
import ChatModals from "./ChatModals";

type ThreadMsg = { role: "user" | "ai"; text: string };

const FREE_LIMIT = 15;

const STORAGE_PREFIX = "la_chat_";
const MAX_VISIBLE = 14;

const LS_SIGN_KEY = "la_sign"; // ✅ signe choisi (user/guest)
const COOKIE_SIGN_KEY = "la_sign";

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

function clampInt(v: any, fallback = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? Math.trunc(n) : fallback;
}

function safePath(nextUrl: string) {
  if (!nextUrl) return "/";
  if (nextUrl.startsWith("/") && !nextUrl.startsWith("//") && !nextUrl.includes("://"))
    return nextUrl;
  return "/";
}

function setCookie(name: string, value: string, maxAgeSeconds = 31536000) {
  if (typeof document === "undefined") return;
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax`;
}

function getStoredSign(): string {
  if (typeof window === "undefined") return "";
  try {
    return (localStorage.getItem(LS_SIGN_KEY) || "").trim();
  } catch {
    return "";
  }
}

function storeSign(signKey: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LS_SIGN_KEY, signKey);
  } catch {}
  setCookie(COOKIE_SIGN_KEY, signKey);
}

export default function ChatClient() {
  const router = useRouter();
  const sp = useSearchParams();

  // ✅ récupère le signe depuis URL, sans fallback automatique
  const rawKeyFromUrl = useMemo(() => sp.get("signe") || sp.get("sign") || "", [sp]);
  const signFromUrl = useMemo(() => norm(rawKeyFromUrl), [rawKeyFromUrl]);

  const messagesRef = useRef<HTMLDivElement | null>(null);

  const [sessionEmail, setSessionEmail] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const [signKey, setSignKey] = useState<string>(""); // ✅ déterminé par rules
  const [thread, setThread] = useState<ThreadMsg[]>([]);
  const [input, setInput] = useState("");

  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallMode, setPaywallMode] = useState<"guest" | "premium">("guest");

  const [historyOpen, setHistoryOpen] = useState(false);

  const [freeLeft, setFreeLeft] = useState<number>(FREE_LIMIT);

  // ✅ IMPORTANT: renvoie l’URL réelle (pathname + query)
  const currentPathWithQuery = useCallback(() => {
    if (typeof window === "undefined") return "/";
    return safePath(window.location.pathname + window.location.search);
  }, []);

  const KEY_GUEST_ID = `${STORAGE_PREFIX}guest_id`;
  const KEY_SERVER_REMAINING = `${STORAGE_PREFIX}server_remaining`;

  // Ces keys dépendent du signe (donc on les calcule après que signKey soit fixé)
  const KEY_THREAD_LOCAL = useMemo(
    () => (signKey ? `${STORAGE_PREFIX}thread_${signKey}` : ""),
    [signKey]
  );
  const KEY_SERVER_THREAD_ID = useMemo(
    () => (signKey ? `${STORAGE_PREFIX}server_thread_id_${signKey}` : ""),
    [signKey]
  );

  const signName = useMemo(() => (signKey ? SIGNS[signKey] || "—" : "—"), [signKey]);
  const signDesc = useMemo(() => {
    if (!signKey) return "Exploration douce : émotions, relations, stress, schémas, besoins, limites.";
    return (
      SIGN_DESC[signKey] ||
      "Exploration douce : émotions, relations, stress, schémas, besoins, limites."
    );
  }, [signKey]);
  const bookUrl = useMemo(() => (signKey ? SIGN_BOOKS[signKey] || "" : ""), [signKey]);

  const getGuestId = useCallback(() => {
    if (typeof window === "undefined") return "";
    try {
      const existing = localStorage.getItem(KEY_GUEST_ID);
      if (existing) return existing;

      const id =
        (window.crypto &&
          "randomUUID" in window.crypto &&
          typeof (window.crypto as any).randomUUID === "function" &&
          (window.crypto as any).randomUUID()) ||
        "guest_" + Math.random().toString(36).slice(2) + Date.now();

      localStorage.setItem(KEY_GUEST_ID, id);
      return id;
    } catch {
      return "guest_" + Math.random().toString(36).slice(2) + Date.now();
    }
  }, [KEY_GUEST_ID]);

  const getServerThreadId = useCallback(() => {
    if (typeof window === "undefined") return 0;
    if (!KEY_SERVER_THREAD_ID) return 0;
    return clampInt(localStorage.getItem(KEY_SERVER_THREAD_ID), 0);
  }, [KEY_SERVER_THREAD_ID]);

  const setServerThreadId = useCallback(
    (id: number) => {
      if (typeof window === "undefined") return;
      if (!KEY_SERVER_THREAD_ID) return;
      try {
        localStorage.setItem(KEY_SERVER_THREAD_ID, String(id || 0));
      } catch {}
    },
    [KEY_SERVER_THREAD_ID]
  );

  const getSavedRemaining = useCallback(() => {
    if (typeof window === "undefined") return FREE_LIMIT;
    const n = clampInt(localStorage.getItem(KEY_SERVER_REMAINING), FREE_LIMIT);
    if (n < 0) return 0;
    if (n > FREE_LIMIT) return FREE_LIMIT;
    return n;
  }, []);

  const setSavedRemaining = useCallback((n: number) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(KEY_SERVER_REMAINING, String(Math.max(0, Math.trunc(n))));
    } catch {}
  }, []);

  const loadThreadLocal = useCallback((): ThreadMsg[] => {
    if (typeof window === "undefined") return [];
    if (!KEY_THREAD_LOCAL) return [];
    const arr = safeJsonParse<unknown>(localStorage.getItem(KEY_THREAD_LOCAL), []);
    return Array.isArray(arr) ? (arr as ThreadMsg[]) : [];
  }, [KEY_THREAD_LOCAL]);

  const saveThreadLocal = useCallback(
    (arr: ThreadMsg[]) => {
      if (typeof window === "undefined") return;
      if (!KEY_THREAD_LOCAL) return;
      try {
        localStorage.setItem(KEY_THREAD_LOCAL, JSON.stringify(arr || []));
      } catch {}
    },
    [KEY_THREAD_LOCAL]
  );

  const ensureHello = useCallback(
    (existing: ThreadMsg[]) => {
      if (existing.length) return existing;

      const hello =
        `Bonjour ✨\n` +
        (signName !== "—"
          ? `Avec l’énergie de ton signe, ${signName}, on peut prendre un moment pour toi.\n`
          : `On peut prendre un moment pour toi.\n`) +
        `De quoi as-tu envie de parler aujourd’hui ?`;

      const t: ThreadMsg[] = [{ role: "ai", text: hello }];
      saveThreadLocal(t);
      return t;
    },
    [saveThreadLocal, signName]
  );

  const scrollToBottom = useCallback((force = false) => {
    const el = messagesRef.current;
    if (!el) return;

    if (force) {
      el.scrollTop = el.scrollHeight;
      return;
    }

    const threshold = 160;
    const nearBottom = el.scrollHeight - (el.scrollTop + el.clientHeight) < threshold;
    if (nearBottom) el.scrollTop = el.scrollHeight;
  }, []);

  // ✅ Redirect paywall vers page plans (au lieu d’un modal)
  const goPlans = useCallback(
    (reason: "free" | "premium") => {
      const next = encodeURIComponent(currentPathWithQuery());
      const url = `/pricing?reason=${encodeURIComponent(reason)}&next=${next}`;
      router.push(url);
    },
    [router, currentPathWithQuery]
  );

  // (Tu peux garder les modals si tu veux; là on redirige direct)
  const openPaywallGuest = useCallback(() => {
    setPaywallMode("guest");
    setPaywallOpen(false);
    goPlans("free");
  }, [goPlans]);

  const openPaywallPremiumRequired = useCallback(() => {
    setPaywallMode("premium");
    setPaywallOpen(false);
    goPlans("premium");
  }, [goPlans]);

  const closePaywall = useCallback(() => setPaywallOpen(false), []);

  const getSessionSafe = useCallback(async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) return null;
      return data?.session || null;
    } catch {
      return null;
    }
  }, []);

  // ✅ 1) Déterminer le signe à utiliser + gérer onboarding
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const session = await getSessionSafe();
      const authed = !!session?.user?.id;

      if (cancelled) return;
      setIsAuth(authed);
      setSessionEmail(session?.user?.email || "");

      const stored = getStoredSign();
      const urlSign = signFromUrl && SIGNS[signFromUrl] ? signFromUrl : "";

      // Si un signe est dans l’URL, on le garde + on le sauvegarde
      if (urlSign) {
        setSignKey(urlSign);
        storeSign(urlSign);
        return;
      }

      // Sinon, si on a un signe stocké, on l’utilise (et on stabilise l’URL)
      if (stored && SIGNS[stored]) {
        setSignKey(stored);
        // stabiliser l’URL pour éviter "belier par défaut"
        router.replace(`/chat?sign=${encodeURIComponent(stored)}`);
        return;
      }

      // Sinon: pas de signe connu
      if (authed) {
        // ✅ connecté: on va à l’onboarding signe
        const next = encodeURIComponent("/chat");
        router.replace(`/onboarding/sign?next=${next}`);
        return;
      }

      // ✅ guest sans signe: on renvoie vers ta page choix signe (home)
      router.replace("/");
    })();

    return () => {
      cancelled = true;
    };
  }, [getSessionSafe, router, signFromUrl]);

  const askLuna = useCallback(
    async (userText: string) => {
      const session = await getSessionSafe();
      const authed = !!session;

      if (!signKey) throw new Error("SIGN_NOT_READY");

      const payload: any = {
        lang: "fr",
        signKey,
        signName,
        message: userText,
      };

      // Guest: envoyer guestId + threadId
      if (!authed) {
        payload.guestId = getGuestId();
        const tid = getServerThreadId();
        if (tid) payload.threadId = tid;
      } else {
        // Optionnel: tu peux quand même envoyer guestId pour le merge guest->user côté API
        payload.guestId = getGuestId();
      }

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({} as any));

      if (!res.ok) {
        if (data?.error === "FREE_LIMIT_REACHED") {
          setFreeLeft(0);
          setSavedRemaining(0);
          openPaywallGuest();
          throw new Error("FREE_LIMIT_REACHED");
        }
        if (data?.error === "PREMIUM_REQUIRED") {
          openPaywallPremiumRequired();
          throw new Error("PREMIUM_REQUIRED");
        }
        throw new Error(data?.error || "Erreur serveur (/api/chat).");
      }

      // ✅ remaining peut venir en guest OU en auth_free
      if (typeof data?.remaining === "number") {
        const r = Math.max(0, Math.trunc(data.remaining));
        setFreeLeft(r);
        setSavedRemaining(r);
      }

      // threadId + guestId utiles surtout en guest
      if (!authed) {
        if (data?.threadId != null) {
          const tid = clampInt(data.threadId, 0);
          if (tid) setServerThreadId(tid);
        }
        if (typeof data?.guestId === "string" && data.guestId) {
          try {
            localStorage.setItem(KEY_GUEST_ID, String(data.guestId));
          } catch {}
        }
      }

      const reply = data?.reply ?? data?.message;
      if (!reply) throw new Error("Réponse vide.");
      return String(reply);
    },
    [
      getSessionSafe,
      signKey,
      signName,
      getGuestId,
      getServerThreadId,
      setServerThreadId,
      KEY_GUEST_ID,
      openPaywallGuest,
      openPaywallPremiumRequired,
      setSavedRemaining,
    ]
  );

  // ✅ 2) Charger thread + remaining une fois le signe prêt
  useEffect(() => {
    if (!signKey) return;

    const saved = getSavedRemaining();
    setFreeLeft(saved);

    const t0 = ensureHello(loadThreadLocal());
    setThread(t0);

    // n’écrase plus le quota à 15 juste parce qu’on est connecté
    // on garde la valeur "remaining" stockée / renvoyée par l’API
  }, [signKey, ensureHello, loadThreadLocal, getSavedRemaining]);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (_event, session) => {
      closePaywall();
      setIsAuth(!!session);
      setSessionEmail(session?.user?.email || "");

      // on ne reset pas freeLeft ici
      if (signKey) {
        const t0 = ensureHello(loadThreadLocal());
        setThread(t0);
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, [closePaywall, ensureHello, loadThreadLocal, signKey]);

  useEffect(() => {
    scrollToBottom(true);
  }, [thread.length, scrollToBottom]);

  const tail = useMemo(() => thread.slice(-MAX_VISIBLE), [thread]);

  const onSend = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const text = (input || "").trim();
      if (!text) return;

      if (!signKey) {
        // signe pas prêt -> onboarding/home
        const s = await getSessionSafe();
        if (s) router.push("/onboarding/sign?next=/chat");
        else router.push("/");
        return;
      }

      const s = await getSessionSafe();
      const authed = !!s;

      setIsAuth(authed);
      setSessionEmail(s?.user?.email || "");

      // Si on sait déjà que c’est 0, on va direct aux plans
      if (freeLeft <= 0) {
        openPaywallGuest();
        return;
      }

      const t = loadThreadLocal();
      const t1: ThreadMsg[] = [...t, { role: "user", text }];
      saveThreadLocal(t1);
      setThread(t1);
      setInput("");

      setThread([...t1, { role: "ai", text: "…" }]);

      try {
        const reply = await askLuna(text);
        const t2: ThreadMsg[] = [...t1, { role: "ai", text: reply }];
        saveThreadLocal(t2);
        setThread(t2);
      } catch (err: any) {
        if (err?.message === "FREE_LIMIT_REACHED" || err?.message === "PREMIUM_REQUIRED") {
          setThread([...t1]);
          return;
        }

        const msg =
          "Erreur. Vérifie que /api/chat existe sur Vercel. " +
          (err?.message ? `(${err.message})` : "");

        const t2: ThreadMsg[] = [...t1, { role: "ai", text: msg }];
        saveThreadLocal(t2);
        setThread(t2);
      }
    },
    [
      askLuna,
      freeLeft,
      getSessionSafe,
      input,
      loadThreadLocal,
      openPaywallGuest,
      saveThreadLocal,
      router,
      signKey,
    ]
  );

  const onLogout = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      try {
        await supabase.auth.signOut();
      } catch {}

      closePaywall();
      setIsAuth(false);
      setSessionEmail("");

      if (signKey) {
        const t0 = ensureHello(loadThreadLocal());
        setThread(t0);
      }

      setFreeLeft(getSavedRemaining());
    },
    [closePaywall, ensureHello, loadThreadLocal, getSavedRemaining, signKey]
  );

  const onClearHistoryLocal = useCallback(() => {
    if (!signKey) return;

    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(KEY_THREAD_LOCAL);
      } catch {}
    }
    const t0 = ensureHello([]);
    setThread(t0);
  }, [KEY_THREAD_LOCAL, ensureHello, signKey]);

  // Tant que le signe n’est pas fixé, on évite de rendre un chat “incorrect”
  if (!signKey) {
    return (
      <div className="chat-body">
        <div className="chat-top">
          <TopBar isAuth={isAuth} onLogout={onLogout} />
        </div>
        <main className="chat-wrap" role="main" style={{ padding: 24 }}>
          <div>Chargement…</div>
        </main>
      </div>
    );
  }

  return (
    <div className="chat-body">
      <div className="chat-top">
        <TopBar isAuth={isAuth} onLogout={onLogout} />
      </div>

      <main className="chat-wrap" role="main">
        <aside className="chat-side" aria-label="Profil IA">
          <ChatSidebar
            isAuth={isAuth}
            sessionEmail={sessionEmail}
            freeLeft={freeLeft} // ✅ on affiche le vrai remaining, connecté ou non
            signName={signName}
            signDesc={signDesc}
            bookUrl={bookUrl}
          />
        </aside>

        <section className="chat-panel">
          <ChatPanel
            signName={signName}
            tail={tail}
            messagesRef={messagesRef}
            input={input}
            setInput={setInput}
            onSend={onSend}
            onOpenHistory={() => setHistoryOpen(true)}
            disabled={paywallOpen || historyOpen}
          />
        </section>
      </main>

      {/* Tu peux garder tes modals pour l’historique.
          PaywallOpen reste false (on redirige sur /pricing). */}
      <ChatModals
        paywallOpen={paywallOpen}
        paywallMode={paywallMode}
        historyOpen={historyOpen}
        thread={thread}
        onClosePaywall={closePaywall}
        onCloseHistory={() => setHistoryOpen(false)}
        onClearHistoryLocal={onClearHistoryLocal}
        nextUrl={currentPathWithQuery()}
      />
    </div>
  );
}
