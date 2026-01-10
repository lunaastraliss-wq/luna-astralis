/* =========================================================
   app/onboarding/sign/page.tsx
   - Onboarding (connecté): choisir un signe -> save -> redirect
   - Pas de lien "Aller au chat"
========================================================= */

"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

type Sign = { key: string; label: string; element: "feu" | "terre" | "air" | "eau" };

const SIGNS: Sign[] = [
  { key: "belier", label: "Bélier ♈", element: "feu" },
  { key: "lion", label: "Lion ♌", element: "feu" },
  { key: "sagittaire", label: "Sagittaire ♐", element: "feu" },

  { key: "taureau", label: "Taureau ♉", element: "terre" },
  { key: "vierge", label: "Vierge ♍", element: "terre" },
  { key: "capricorne", label: "Capricorne ♑", element: "terre" },

  { key: "gemeaux", label: "Gémeaux ♊", element: "air" },
  { key: "balance", label: "Balance ♎", element: "air" },
  { key: "verseau", label: "Verseau ♒", element: "air" },

  { key: "cancer", label: "Cancer ♋", element: "eau" },
  { key: "scorpion", label: "Scorpion ♏", element: "eau" },
  { key: "poissons", label: "Poissons ♓", element: "eau" },
];

const LS_SIGN_KEY = "la_sign";
const SIGN_QUERY_PARAM = "sign";

const SIGNS_SET = new Set(SIGNS.map((s) => s.key));

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
  setCookie(LS_SIGN_KEY, signKey);
}

function safeInternalPath(raw: string | null): string {
  const s = (raw || "").trim();
  if (!s) return "";
  if (!s.startsWith("/")) return "";
  if (s.startsWith("//")) return "";
  if (s.includes("://")) return "";

  // éviter boucles / flows d'auth / onboarding
  const blocked = ["/login", "/signup", "/auth", "/onboarding"];
  if (blocked.some((p) => s.startsWith(p))) return "";

  return s;
}

function buildChatUrl(signKey: string) {
  return `/chat?${SIGN_QUERY_PARAM}=${encodeURIComponent(signKey)}`;
}

export default function OnboardingSignPage() {
  const router = useRouter();
  const sp = useSearchParams();

  const nextUrl = useMemo(() => safeInternalPath(sp.get("next")), [sp]);

  const [checking, setChecking] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [selected, setSelected] = useState<string>("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let alive = true;

    (async () => {
      // 1) vérifier session
      const { data, error } = await supabase.auth.getSession();
      const isAuthed = !error && !!data?.session?.user?.id;

      if (!alive) return;

      setAuthed(isAuthed);

      // 2) Pas connecté -> landing
      if (!isAuthed) {
        router.replace("/");
        return;
      }

      // 3) Si déjà un signe stocké et valide -> redirect direct
      const s = getStoredSign();
      if (s && SIGNS_SET.has(s)) {
        router.replace(nextUrl || buildChatUrl(s));
        return;
      }

      // si invalide, on nettoie (évite boucles)
      if (s && !SIGNS_SET.has(s)) {
        try {
          localStorage.removeItem(LS_SIGN_KEY);
        } catch {}
        setCookie(LS_SIGN_KEY, "", 0);
      }

      setChecking(false);
    })();

    return () => {
      alive = false;
    };
  }, [router, nextUrl]);

  const choose = useCallback(
    (signKey: string) => {
      if (busy) return;
      if (!SIGNS_SET.has(signKey)) return;

      setBusy(true);
      setSelected(signKey);

      storeSign(signKey);

      // IMPORTANT: replace (onboarding ne reste pas dans l'historique)
      router.replace(nextUrl || buildChatUrl(signKey));
    },
    [router, nextUrl, busy]
  );

  if (checking) {
    return (
      <main style={styles.page}>
        <div style={styles.shell}>
          <h1 style={styles.h1}>Chargement…</h1>
        </div>
      </main>
    );
  }

  if (!authed) return null;

  return (
    <main style={styles.page}>
      <div style={styles.shell}>
        {/* Steps */}
        <div style={styles.stepsWrap}>
          <div style={styles.stepCard}>
            <div style={styles.stepNo}>01</div>
            <div style={styles.stepTitle}>Choisis ton signe</div>
            <div style={styles.stepText}>Tu démarres en 1 clic.</div>
          </div>

          <div style={styles.stepCard}>
            <div style={styles.stepNo}>02</div>
            <div style={styles.stepTitle}>Reçois un miroir</div>
            <div style={styles.stepText}>Forces, angles morts, besoins.</div>
          </div>

          <div style={styles.stepCard}>
            <div style={styles.stepNo}>03</div>
            <div style={styles.stepTitle}>Comprends tes schémas</div>
            <div style={styles.stepText}>Émotions, stress, relations.</div>
          </div>

          <div style={styles.stepCard}>
            <div style={styles.stepNo}>04</div>
            <div style={styles.stepTitle}>Garde le contrôle</div>
            <div style={styles.stepText}>Exploration personnelle uniquement.</div>
          </div>
        </div>

        {/* Header */}
        <div style={{ marginTop: 18 }}>
          <h1 style={styles.h1}>Choisir un signe</h1>
          <p style={styles.sub}>
            Tu as droit à <b>15 messages gratuits à vie</b>. Après, tu pourras débloquer l’accès complet si tu le
            souhaites.
          </p>
        </div>

        {/* Grid signs */}
        <div style={styles.grid}>
          {SIGNS.map((s) => {
            const active = selected === s.key;
            return (
              <button
                key={s.key}
                onClick={() => choose(s.key)}
                disabled={busy}
                style={{
                  ...styles.signBtn,
                  ...(s.element === "feu"
                    ? styles.feu
                    : s.element === "terre"
                    ? styles.terre
                    : s.element === "air"
                    ? styles.air
                    : styles.eau),
                  ...(active ? styles.active : null),
                  ...(busy ? styles.disabled : null),
                }}
                aria-label={`Choisir ${s.label}`}
              >
                <span style={styles.signLabel}>{s.label}</span>
              </button>
            );
          })}
        </div>

        {/* Chips elements */}
        <div style={styles.chipsRow} aria-hidden="true">
          <span style={styles.chip}>FEU</span>
          <span style={styles.chip}>TERRE</span>
          <span style={styles.chip}>AIR</span>
          <span style={styles.chip}>EAU</span>
        </div>

        <div style={styles.footerHint}>
          © {new Date().getFullYear()} Luna Astralis · Exploration personnelle — non thérapeutique.
        </div>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(1200px 700px at 20% 10%, rgba(130,90,255,0.22), transparent 60%), radial-gradient(900px 600px at 80% 20%, rgba(0,200,255,0.12), transparent 55%), linear-gradient(180deg, #0b0c12 0%, #07070b 100%)",
    color: "rgba(255,255,255,0.92)",
    padding: "28px 18px",
  },
  shell: {
    maxWidth: 1020,
    margin: "0 auto",
  },

  stepsWrap: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 12,
  },
  stepCard: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 16,
    padding: 14,
    minHeight: 86,
  },
  stepNo: { fontSize: 12, opacity: 0.75, fontWeight: 800, marginBottom: 6 },
  stepTitle: { fontSize: 14, fontWeight: 800, marginBottom: 4 },
  stepText: { fontSize: 13, opacity: 0.78 },

  h1: { fontSize: 26, fontWeight: 900, letterSpacing: -0.2, margin: 0 },
  sub: { marginTop: 8, marginBottom: 14, opacity: 0.84, maxWidth: 780, lineHeight: 1.45 },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 12,
    marginTop: 10,
  },

  signBtn: {
    padding: "14px 14px",
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.92)",
    textAlign: "left",
    cursor: "pointer",
    transition: "transform 120ms ease, filter 120ms ease, border-color 120ms ease",
  },
  signLabel: { fontSize: 15, fontWeight: 800 },

  feu: { filter: "saturate(1.05)" },
  terre: { filter: "saturate(1.02)" },
  air: { filter: "saturate(1.06)" },
  eau: { filter: "saturate(1.04)" },

  active: {
    borderColor: "rgba(255,255,255,0.22)",
    transform: "translateY(-1px)",
    filter: "brightness(1.05) saturate(1.08)",
  },
  disabled: { opacity: 0.75, cursor: "default" },

  chipsRow: { display: "flex", gap: 8, marginTop: 14 },
  chip: {
    fontSize: 11,
    letterSpacing: 0.8,
    fontWeight: 900,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.05)",
    opacity: 0.9,
  },

  footerHint: { marginTop: 18, fontSize: 12, opacity: 0.7 },
};
