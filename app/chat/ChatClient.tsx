// app/chat/ChatClient.tsx
"use client";






import frI18n from "../../i18n/migrated/fr/app/chat/chatclient.json";
import enI18n from "../../i18n/migrated/en/app/chat/chatclient.json";
import esI18n from "../../i18n/migrated/es/app/chat/chatclient.json";
import deI18n from "../../i18n/migrated/de/app/chat/chatclient.json";
import itI18n from "../../i18n/migrated/it/app/chat/chatclient.json";
import ptI18n from "../../i18n/migrated/pt/app/chat/chatclient.json";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import ChatSidebar from "./ChatSidebar";
import ChatPanel, { TopBar } from "./ChatPanel";
import ChatModals from "./ChatModals";

type ThreadMsg = { role: "user" | "ai"; text: string };
type Plan = "guest" | "free" | "premium";

const FALLBACK_FREE_LIMIT = 15; // juste un fallback si serveur down
const STORAGE_PREFIX = "la_chat_";
const MAX_VISIBLE = 14;

const LS_SIGN_KEY = "la_sign";
const COOKIE_SIGN_KEY = "la_sign";
const SIGN_QUERY_PARAM = "sign";
const LS_LANG_KEY = "la_lang";

type Lang = "fr" | "en" | "es" | "de" | "it" | "pt";

const SUPPORTED_LANGS: Lang[] = ["fr", "en", "es", "de", "it", "pt"];

const I18N_BY_LANG: Record<Lang, Record<string, string>> = {
  fr: frI18n,
  en: enI18n,
  es: esI18n,
  de: deI18n,
  it: itI18n,
  pt: ptI18n,
};

const CHAT_UI: Record<
  Lang,
  {
    desktopFallback: string;
    mobileFallback: string;
    hello: string;
    unknownError: string;
    emptyReply: string;
    technicalError: string;
    deepen: string;
    freeRemaining: (n: number) => string;
    freeLimitReached: string;
    plans: string;
    history: string;
  }
> = {
  fr: {
    desktopFallback: "Exploration douce : émotions, relations, stress, schémas, besoins, limites.",
    mobileFallback: "Exploration émotionnelle.",
    hello: "Bonjour ✨ Je suis Luna. Je suis là pour t'aider à mieux comprendre tes émotions, tes défis et tes forces. Que souhaites-tu explorer aujourd'hui ?",
    unknownError: "Erreur inconnue",
    emptyReply: "Réponse vide.",
    technicalError: "Erreur. Vérifie /api/chat sur Vercel.",
    deepen: "Approfondir",
    freeRemaining: (n) => `Il te reste ${n} message(s) gratuit(s).`,
    freeLimitReached: "Limite gratuite atteinte.",
    plans: "Forfaits",
    history: "Historique",
  },
  en: {
    desktopFallback: "A gentle exploration of emotions, relationships, stress, patterns, needs and boundaries.",
    mobileFallback: "Emotional exploration.",
    hello: "Hello ✨ I'm Luna. I'm here to help you better understand your emotions, challenges and strengths. What would you like to explore today?",
    unknownError: "Unknown error",
    emptyReply: "Empty response.",
    technicalError: "Error. Check /api/chat on Vercel.",
    deepen: "Explore",
    freeRemaining: (n) => `You have ${n} free message(s) left.`,
    freeLimitReached: "Free limit reached.",
    plans: "Plans",
    history: "History",
  },
  es: {
    desktopFallback: "Exploración suave: emociones, relaciones, estrés, patrones, necesidades y límites.",
    mobileFallback: "Exploración emocional.",
    hello: "Hola ✨ Soy Luna. Estoy aquí para ayudarte a comprender mejor tus emociones, tus desafíos y tus fortalezas. ¿Qué te gustaría explorar hoy?",
    unknownError: "Error desconocido",
    emptyReply: "Respuesta vacía.",
    technicalError: "Error. Revisa /api/chat en Vercel.",
    deepen: "Profundizar",
    freeRemaining: (n) => `Te quedan ${n} mensaje(s) gratis.`,
    freeLimitReached: "Has alcanzado el límite gratuito.",
    plans: "Planes",
    history: "Historial",
  },
  de: {
    desktopFallback: "Sanfte Erkundung von Emotionen, Beziehungen, Stress, Mustern, Bedürfnissen und Grenzen.",
    mobileFallback: "Emotionale Erkundung.",
    hello: "Hallo ✨ Ich bin Luna. Ich helfe dir, deine Gefühle, Herausforderungen und Stärken besser zu verstehen. Was möchtest du heute erkunden?",
    unknownError: "Unbekannter Fehler",
    emptyReply: "Leere Antwort.",
    technicalError: "Fehler. Prüfe /api/chat auf Vercel.",
    deepen: "Vertiefen",
    freeRemaining: (n) => `Du hast noch ${n} kostenlose Nachricht(en).`,
    freeLimitReached: "Kostenloses Limit erreicht.",
    plans: "Tarife",
    history: "Verlauf",
  },
  it: {
    desktopFallback: "Esplorazione delicata: emozioni, relazioni, stress, schemi, bisogni e limiti.",
    mobileFallback: "Esplorazione emotiva.",
    hello: "Ciao ✨ Sono Luna. Sono qui per aiutarti a comprendere meglio le tue emozioni, le tue sfide e i tuoi punti di forza. Cosa vorresti esplorare oggi?",
    unknownError: "Errore sconosciuto",
    emptyReply: "Risposta vuota.",
    technicalError: "Errore. Controlla /api/chat su Vercel.",
    deepen: "Approfondisci",
    freeRemaining: (n) => `Ti restano ${n} messaggio/i gratuito/i.`,
    freeLimitReached: "Limite gratuito raggiunto.",
    plans: "Piani",
    history: "Cronologia",
  },
  pt: {
    desktopFallback: "Exploração suave: emoções, relacionamentos, estresse, padrões, necessidades e limites.",
    mobileFallback: "Exploração emocional.",
    hello: "Olá ✨ Eu sou Luna. Estou aqui para ajudar você a compreender melhor suas emoções, seus desafios e seus pontos fortes. O que você gostaria de explorar hoje?",
    unknownError: "Erro desconhecido",
    emptyReply: "Resposta vazia.",
    technicalError: "Erro. Verifique /api/chat na Vercel.",
    deepen: "Aprofundar",
    freeRemaining: (n) => `Você ainda tem ${n} mensagem(ns) gratuita(s).`,
    freeLimitReached: "Limite gratuito atingido.",
    plans: "Planos",
    history: "Histórico",
  },
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

/* ---------------- helpers ---------------- */

function norm(s: string) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "");
}

function clampInt(v: any, fallback = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? Math.trunc(n) : fallback;
}

function safeJsonParse<T>(raw: string | null, fallback: T): T {
  try {
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function safePath(nextUrl: string) {
  const s = (nextUrl || "").trim();
  if (!s) return "/";
  if (s.startsWith("/") && !s.startsWith("//") && !s.includes("://")) return s;
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

function makeGuestIdLocal(): string {
  const rand =
    (typeof window !== "undefined" &&
      (window.crypto as any)?.randomUUID &&
      typeof (window.crypto as any).randomUUID === "function" &&
      (window.crypto as any).randomUUID()) ||
    `${Math.random().toString(36).slice(2)}${Date.now()}`;

  return String(rand).replace(/-/g, "");
}

/* ---------------- component ---------------- */

export default function ChatClient() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const lang = useMemo<Lang>(() => {
    const first = (pathname || "").split("/").filter(Boolean)[0]?.toLowerCase();
    if (SUPPORTED_LANGS.includes(first as Lang)) {
      if (typeof window !== "undefined") {
        try { localStorage.setItem(LS_LANG_KEY, first); } catch {}
      }
      return first as Lang;
    }

    const queryLang = (sp.get("lang") || "").toLowerCase();
    if (SUPPORTED_LANGS.includes(queryLang as Lang)) {
      if (typeof window !== "undefined") {
        try { localStorage.setItem(LS_LANG_KEY, queryLang); } catch {}
      }
      return queryLang as Lang;
    }

    if (typeof document !== "undefined") {
      const htmlLang = (document.documentElement.lang || "")
        .toLowerCase()
        .split("-")[0];

      if (SUPPORTED_LANGS.includes(htmlLang as Lang)) {
        if (typeof window !== "undefined") {
          try { localStorage.setItem(LS_LANG_KEY, htmlLang); } catch {}
        }
        return htmlLang as Lang;
      }
    }

    if (typeof window !== "undefined") {
      try {
        const storedLang = (localStorage.getItem(LS_LANG_KEY) || "").toLowerCase();
        if (SUPPORTED_LANGS.includes(storedLang as Lang)) {
          return storedLang as Lang;
        }
      } catch {}
    }

    return "fr";
  }, [pathname, sp]);

  const __i18n = I18N_BY_LANG[lang];
  const ui = CHAT_UI[lang];

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(LS_LANG_KEY, lang);
    } catch {}
  }, [lang]);

  const SIGNS = useMemo<Record<string, string>>(
    () => ({
      belier: __i18n["belier"],
      taureau: __i18n["taureau"],
      gemeaux: __i18n["gemeaux"],
      cancer: __i18n["cancer"],
      lion: __i18n["lion"],
      vierge: __i18n["vierge"],
      balance: __i18n["balance"],
      scorpion: __i18n["scorpion"],
      sagittaire: __i18n["sagittaire"],
      capricorne: __i18n["capricorne"],
      verseau: __i18n["verseau"],
      poissons: __i18n["poissons"],
    }),
    [__i18n]
  );

  const SIGN_DESC = useMemo<Record<string, string>>(
    () => ({
      belier: __i18n["energie_d_action_et_d_elan_on_explore_ton_impulsion_ta_coler"],
      taureau: __i18n["besoin_de_stabilite_et_de_concret_on_explore_l_attachement_l"],
      gemeaux: __i18n["mental_rapide_et_curiosite_on_explore_tes_pensees_en_boucle"],
      cancer: __i18n["hyper_sensibilite_et_protection_on_explore_tes_besoins_affec"],
      lion: __i18n["rayonnement_et_fierte_du_c_ur_on_explore_l_estime_de_soi_la"],
      vierge: __i18n["lucidite_et_exigence_on_explore_le_controle_la_charge_mental"],
      balance: __i18n["equilibre_et_relation_on_explore_la_peur_du_conflit_le_besoi"],
      scorpion: __i18n["intensite_et_transformation_on_explore_la_confiance_la_jalou"],
      sagittaire: __i18n["sens_et_liberte_on_explore_l_ennui_l_envie_d_ailleurs_et_com"],
      capricorne: __i18n["structure_et_responsabilite_on_explore_la_pression_la_perfor"],
      verseau: __i18n["independance_et_vision_on_explore_la_distance_emotionnelle_t"],
      poissons: __i18n["intuition_et_empathie_on_explore_l_hypersensibilite_la_fatig"],
    }),
    [__i18n]
  );

  const SIGN_DESC_MOBILE = useMemo<Record<string, string>>(
    () => ({
      belier: __i18n["action_elan"],
      taureau: __i18n["stabilite_securite"],
      gemeaux: __i18n["mental_dualite"],
      cancer: __i18n["emotions_protection"],
      lion: __i18n["confiance_c_ur"],
      vierge: __i18n["clarte_controle"],
      balance: __i18n["relation_equilibre"],
      scorpion: __i18n["intensite_confiance"],
      sagittaire: __i18n["liberte_sens"],
      capricorne: __i18n["pression_maitrise"],
      verseau: __i18n["independance"],
      poissons: __i18n["intuition_empathie"],
    }),
    [__i18n]
  );

  const supabase = useMemo(() => createClientComponentClient(), []);

  // ✅ sign standard + fallback "signe"
  const rawKeyFromUrl = useMemo(
    () => sp.get(SIGN_QUERY_PARAM) || sp.get("signe") || "",
    [sp]
  );
  const signFromUrl = useMemo(() => norm(rawKeyFromUrl), [rawKeyFromUrl]);

  const messagesRef = useRef<HTMLDivElement | null>(null);

  const [sessionEmail, setSessionEmail] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState("");

  const [plan, setPlan] = useState<Plan>("guest");
  const [signKey, setSignKey] = useState("");

  const [thread, setThread] = useState<ThreadMsg[]>([]);
  const [input, setInput] = useState("");

  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallMode, setPaywallMode] = useState<"guest" | "premium">("guest");
  const [historyOpen, setHistoryOpen] = useState(false);

  const [freeLeft, setFreeLeft] = useState<number | null>(null);

  const [quotaReady, setQuotaReady] = useState(false);
  const [booted, setBooted] = useState(false);

  const KEY_GUEST_ID = `${STORAGE_PREFIX}guest_id`;

  const KEY_SERVER_REMAINING = useMemo(() => {
    if (!userId) return `${STORAGE_PREFIX}server_remaining_guest`;
    return `${STORAGE_PREFIX}server_remaining_user_${userId}`;
  }, [userId]);

  const KEY_THREAD_LOCAL = useMemo(
    () => (signKey ? `${STORAGE_PREFIX}thread_${lang}_${signKey}` : ""),
    [lang, signKey]
  );

  const KEY_SERVER_THREAD_ID = useMemo(
    () => (signKey ? `${STORAGE_PREFIX}server_thread_id_${lang}_${signKey}` : ""),
    [lang, signKey]
  );

// --- Détection mobile ---
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  if (typeof window === "undefined") return;

  const mq = window.matchMedia("(max-width: 768px)");
  const apply = () => setIsMobile(mq.matches);

  apply();

  if ("addEventListener" in mq) {
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  } else {
    // vieux Safari
    // @ts-ignore
    mq.addListener(apply);
    // @ts-ignore
    return () => mq.removeListener(apply);
  }
}, []);

// --- Nom du signe ---
const signName = useMemo(() => {
  return signKey ? SIGNS[signKey] || "—" : "—";
}, [signKey, SIGNS]);

// --- Desc desktop ---
const signDescDesktop = useMemo(() => {
  const fallback = ui.desktopFallback;
  if (!signKey) return fallback;
  return SIGN_DESC[signKey] || fallback;
}, [signKey, SIGN_DESC, ui.desktopFallback]);

// --- Desc mobile ---
const signDescMobile = useMemo(() => {
  const fallback = ui.mobileFallback;
  if (!signKey) return fallback;
  return SIGN_DESC_MOBILE[signKey] || fallback;
}, [signKey, SIGN_DESC_MOBILE, ui.mobileFallback]);

// ✅ Desc finale utilisée partout
const signDesc = useMemo(() => {
  return isMobile ? signDescMobile : signDescDesktop;
}, [isMobile, signDescMobile, signDescDesktop]);

// --- Livre ---
const bookUrl = useMemo(() => {
  return signKey ? SIGN_BOOKS[signKey] || "" : "";
}, [signKey]);

  const currentPathWithQuery = useCallback(() => {
    if (typeof window === "undefined") return "/";
    return safePath(window.location.pathname + window.location.search);
  }, []);

  const getGuestId = useCallback(() => {
    if (typeof window === "undefined") return "";
    try {
      const existing = localStorage.getItem(KEY_GUEST_ID);
      if (existing) return existing;

      const id = makeGuestIdLocal();
      localStorage.setItem(KEY_GUEST_ID, id);
      return id;
    } catch {
      return makeGuestIdLocal();
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

  const setSavedRemaining = useCallback(
    (n: number) => {
      if (typeof window === "undefined") return;
      try {
        localStorage.setItem(
          KEY_SERVER_REMAINING,
          String(Math.max(0, Math.trunc(n)))
        );
      } catch {}
    },
    [KEY_SERVER_REMAINING]
  );

  const loadThreadLocal = useCallback((): ThreadMsg[] => {
    if (typeof window === "undefined") return [];
    if (!KEY_THREAD_LOCAL) return [];
    const arr = safeJsonParse<unknown>(
      localStorage.getItem(KEY_THREAD_LOCAL),
      []
    );
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

const hello = ui.hello;

const t: ThreadMsg[] = [{ role: "ai", text: hello }];
saveThreadLocal(t);
return t;
},
[saveThreadLocal, ui.hello]
);

const scrollToBottom = useCallback((force = false) => {
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
  }, []);

  const getSessionSafe = useCallback(async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) return null;
      return data?.session || null;
    } catch {
      return null;
    }
  }, [supabase]);

  // --- TRACKING (Supabase) ---
  const logEvent = useCallback(
    async (event_type: "open_chat" | "send_message") => {
      try {
        const session = await getSessionSafe();
        const uid = session?.user?.id ?? null;

        await supabase.from("chat_events").insert({
          user_id: uid,
          guest_id: uid ? null : getGuestId(),
          event_type,
          sign_key: signKey || null,
        });
      } catch {
        // ne bloque jamais le chat si le tracking échoue
      }
    },
    [supabase, getSessionSafe, getGuestId, signKey]
  );

  const refreshQuotaFromServer = useCallback(async () => {
    try {
      const res = await fetch("/api/chat/quota", {
        method: "GET",
        cache: "no-store",
      });
      if (!res.ok) return;

      const data = await res.json().catch(() => ({} as any));

      const nextPlan: Plan =
        data?.plan === "free" || data?.plan === "premium" || data?.plan === "guest"
          ? data.plan
          : "guest";

      setPlan(nextPlan);

      if (nextPlan === "premium") {
  setFreeLeft(null);
  setSavedRemaining(0);
  return;
}

const r = clampInt(data?.freeLeft ?? data?.remaining, FALLBACK_FREE_LIMIT);
const safe = Math.max(0, r);

setFreeLeft(safe);
setSavedRemaining(safe);
    } catch {}
  }, [setSavedRemaining]);

  const changeSignUrl = useMemo(() => {
    const next = encodeURIComponent("/chat");
    return `/onboarding/sign?change=1&next=${next}`;
  }, []);

  const goPlans = useCallback(
    (reason: "free" | "premium" | "nav" = "nav") => {
      const next = encodeURIComponent(currentPathWithQuery());
      router.push(
        `/pricing/plans?reason=${encodeURIComponent(reason)}&next=${next}`
      );
    },
    [router, currentPathWithQuery]
  );

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

  /* ---------------- boot logic ---------------- */

  useEffect(() => {
    let alive = true;

    (async () => {
      const session = await getSessionSafe();
      if (!alive) return;

      const authed = !!session?.user?.id;
      const uid = session?.user?.id || "";
      const email = session?.user?.email || "";

      setIsAuth(authed);
      setUserId(uid);
      setSessionEmail(email);

      // load cached remaining quickly
      try {
  const key = uid
    ? `${STORAGE_PREFIX}server_remaining_user_${uid}`
    : `${STORAGE_PREFIX}server_remaining_guest`;
  const n = clampInt(localStorage.getItem(key), FALLBACK_FREE_LIMIT);
  setFreeLeft(Math.max(0, n));
} catch {
  setFreeLeft(null);
}

      await refreshQuotaFromServer();
      setQuotaReady(true);

      // choose sign priority:
      // 1) URL
      // 2) stored
      const urlSign = signFromUrl && SIGNS[signFromUrl] ? signFromUrl : "";
      const stored = getStoredSign();
      const storedOk = stored && SIGNS[stored] ? stored : "";
      const chosen = urlSign || storedOk;

      if (chosen) {
        // Le signe est déjà fourni par SignGrid ou le stockage local.
        // IMPORTANT : ne pas réécrire l'URL ici.
        // Cela évite un remontage du ChatClient et les appels quota répétés.
        setSignKey(chosen);
        storeSign(chosen);
      } else {
        router.replace(`/onboarding/sign?next=${encodeURIComponent("/chat")}`);
      }

      setBooted(true);
    })();

    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      // IMPORTANT:
      // ne pas lancer /api/chat/quota depuis ce callback.
      // Le quota est déjà chargé au boot et mis à jour après les messages.
      setPaywallOpen(false);

      const authed = !!session?.user?.id;
      const uid = session?.user?.id || "";
      const email = session?.user?.email || "";

      setIsAuth(authed);
      setUserId(uid);
      setSessionEmail(email);
    });

    return () => data.subscription.unsubscribe();
  }, [supabase]);

  useEffect(() => {
    if (!signKey) return;
    const t0 = ensureHello(loadThreadLocal());
    setThread(t0);
  }, [signKey, ensureHello, loadThreadLocal]);

  useEffect(() => {
    if (!booted) return;
    scrollToBottom(true);
  }, [booted, thread.length, scrollToBottom]);

  // --- TRACKING: chat opened (once ready) ---
  useEffect(() => {
    if (!booted || !signKey) return;
    logEvent("open_chat");
  }, [booted, signKey, logEvent]);

  const tail = useMemo(() => thread.slice(-MAX_VISIBLE), [thread]);

  /* ---------------- chat call ---------------- */

  const askLuna = useCallback(
    async (userText: string) => {
      const session = await getSessionSafe();
      const authed = !!session?.user?.id;

      if (!signKey) throw new Error("SIGN_NOT_READY");

      const payload: any = {
        lang,
        signKey,
        signName,
        message: userText,
        guestId: getGuestId(),
      };

      // guest: keep server thread id
      if (!authed) {
        const tid = getServerThreadId();
        if (tid) payload.threadId = tid;
      }

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({} as any));

if (!res.ok) {
  if (res.status === 401 || data?.error === "AUTH_REQUIRED") {
    storeSign(signKey);
    const next = encodeURIComponent(currentPathWithQuery());
    router.push(`/login?lang=${encodeURIComponent(lang)}&next=${next}`);
    throw new Error("AUTH_REQUIRED");
  }

  if (data?.error === "FREE_LIMIT_REACHED") {
    setPlan("free");
    setFreeLeft(0);
    setSavedRemaining(0);
    openPaywallGuest();
    throw new Error("FREE_LIMIT_REACHED");
  }

  if (data?.error === "PREMIUM_REQUIRED") {
    openPaywallPremiumRequired();
    throw new Error("PREMIUM_REQUIRED");
  }

  const msg = data?.message || data?.detail || data?.error || ui.unknownError;
  throw new Error(msg);
}

if (typeof data?.remaining === "number") {
  const r = Math.max(0, Math.trunc(data.remaining));
  setFreeLeft(r);
  setSavedRemaining(r);
}
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
      if (!reply) throw new Error(ui.emptyReply);
      return String(reply);
    },
    [
      getSessionSafe,
      lang,
      signKey,
      signName,
      getGuestId,
      getServerThreadId,
      setServerThreadId,
      KEY_GUEST_ID,
      openPaywallGuest,
      openPaywallPremiumRequired,
      setSavedRemaining,
      currentPathWithQuery,
      router,
      ui.emptyReply,
      ui.unknownError,
    ]
  );

  const onSend = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const text = (input || "").trim();
      if (!text) return;

      // --- TRACKING: message sent ---
      await logEvent("send_message");

      if (!signKey) {
        router.push("/onboarding/sign?next=/chat");
        return;
      }

      if (
        quotaReady &&
        plan === "free" &&
        typeof freeLeft === "number" &&
        freeLeft <= 0
      ) {
        openPaywallGuest();
        return;
      }

      const t = loadThreadLocal();
      const t1: ThreadMsg[] = [...t, { role: "user", text }];
      saveThreadLocal(t1);
      setInput("");

      setThread([...t1, { role: "ai", text: "…" }]);

      try {
        const reply = await askLuna(text);
        const t2: ThreadMsg[] = [...t1, { role: "ai", text: reply }];
        saveThreadLocal(t2);
        setThread(t2);
      } catch (err: any) {
        if (
          err?.message === "FREE_LIMIT_REACHED" ||
          err?.message === "PREMIUM_REQUIRED" ||
          err?.message === "AUTH_REQUIRED"
        ) {
          setThread(t1);
          return;
        }

        const msg =
          ui.technicalError +
          (err?.message ? ` (${err.message})` : "");

        const t2: ThreadMsg[] = [...t1, { role: "ai", text: msg }];
        saveThreadLocal(t2);
        setThread(t2);
      }
    },
    [
      askLuna,
      freeLeft,
      quotaReady,
      input,
      loadThreadLocal,
      openPaywallGuest,
      saveThreadLocal,
      router,
      signKey,
      plan,
      logEvent,
      ui.technicalError,
    ]
  );

  /* ---------------- logout ---------------- */

  const onLogout = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();

      try {
        await supabase.auth.signOut();
      } catch {}

      setPaywallOpen(false);
      setHistoryOpen(false);
      closePaywall();

      setIsAuth(false);
      setSessionEmail("");
      setUserId("");
      setPlan("guest");

      router.replace("/");
      router.refresh();
    },
    [supabase, closePaywall, router]
  );

  /* ---------------- actions ---------------- */

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

  const onOpenPlans = useCallback(() => {
    if (plan === "premium") goPlans("nav");
    else goPlans("free");
  }, [plan, goPlans]);

  const onChangeSign = useCallback(() => router.push(changeSignUrl), [router, changeSignUrl]);

  const onLogin = useCallback(() => {
    const next = encodeURIComponent(currentPathWithQuery());
    router.push(`/login?lang=${encodeURIComponent(lang)}&next=${next}`);
  }, [router, currentPathWithQuery, lang]);

  /* ---------------- render ---------------- */

  if (!booted || !signKey) {
    return (
      <div className="chat-body">
        <div className="chat-top">
          <TopBar isAuth={isAuth === true} onLogout={onLogout} />
        </div>

        <main className="chat-wrap" role="main" style={{ padding: 24 }}>
          <div>{__i18n["chargement"]}</div>
        </main>
      </div>
    );
  }

  return (
    <div className="chat-body">
      <div className="chat-top">
        <TopBar isAuth={isAuth === true} onLogout={onLogout} />
      </div>

      <main className="chat-wrap" role="main">
        <ChatSidebar
          isAuth={isAuth === true}
          sessionEmail={sessionEmail}
          plan={plan}
          freeLeft={freeLeft}
          signName={signName}
          signDesc={signDesc}
          bookUrl={bookUrl}
        />

        <section className="chat-panel">
          <div className="mobile-sign-card" aria-label={__i18n["profil_du_signe_mobile"]}>
            <div className="msc-row">
              <img className="msc-avatar" src="/ia-luna-astralis.png" alt="Luna" loading="lazy" />
              <div className="msc-text">
                <div className="msc-title">{signName}</div>
                <div className="msc-sub">{signDescMobile}</div>
              </div>
            </div>

            <div className="msc-actions">
  {bookUrl ? (
    <a
      className="btn btn-small btn-ghost"
      href={bookUrl}
      target="_blank"
      rel="noreferrer"
    >
      {ui.deepen} {signName} →
    </a>
  ) : null}
</div>
            {plan === "free" && typeof freeLeft === "number" ? (
              <div className="msc-quota">
                {freeLeft > 0 ? ui.freeRemaining(freeLeft) : ui.freeLimitReached}
              </div>
            ) : null}
          </div>

          <div className="chat-actions-bar" role="navigation" aria-label={__i18n["actions_du_chat"]}>
            <div className="cab-left">
              <span className="cab-pill">{signName}</span>
            </div>

            <div className="cab-right">
              {!isAuth ? (
                <button type="button" className="btn btn-small btn-ghost" onClick={onLogin}>
                  {__i18n["se_connecter"]}</button>
              ) : null}

              <button type="button" className="btn btn-small btn-ghost" onClick={onChangeSign}>
                {__i18n["changer_de_signe"]}</button>

              <button
                type="button"
                className={`btn btn-small ${plan !== "premium" ? "btn-primary" : "btn-ghost"}`}
                onClick={onOpenPlans}
              >
                {ui.plans}
              </button>

              <button type="button" className="btn btn-small btn-ghost" onClick={() => setHistoryOpen(true)}>
                {ui.history}
              </button>
            </div>
          </div>

          <ChatPanel
            signName={signName}
            tail={tail}
            messagesRef={messagesRef}
            input={input}
            setInput={setInput}
            onSend={onSend}
            disabled={paywallOpen || historyOpen}
          />
        </section>
      </main>

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

      <style jsx>{`
.chat-actions-bar { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 10px; margin: 10px 0 8px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.12); background: rgba(255, 255, 255, 0.06); } .cab-right { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: flex-end; } .cab-pill { display: inline-flex; align-items: center; padding: 6px 10px; border-radius: 999px; font-size: 12px; border: 1px solid rgba(255, 255, 255, 0.12); background: rgba(255, 255, 255, 0.06); opacity: 0.95; } @media (max-width: 768px) { .mobile-sign-card { display: none !important; } .chat-actions-bar { padding: 6px !important; margin: 0 0 6px !important; gap: 6px; } .cab-left { display: none !important; } .cab-right { width: 100%; justify-content: space-between !important; flex-wrap: nowrap !important; gap: 6px; } .cab-right .btn { font-size: 12px !important; padding: 8px 10px !important; white-space: nowrap !important; } .cab-pill { font-size: 11px; padding: 4px 8px; } }
`}</style>
    </div>
  );
}
