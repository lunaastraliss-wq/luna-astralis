/* =========================================================
   app/onboarding/sign/page.tsx
   - Onboarding (connecté): choisir un signe -> save -> redirect
   - ✅ Mode change: /onboarding/sign?change=1&next=/chat
   - ✅ “Chat d’abord”: après choix -> /chat?sign=...
   - ✅ Steps: typographie UNIFORME avec les boutons (même style)
   - ✅ Hover/active plus “premium” (sans casser la logique)
========================================================= */

"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

type ElementKey = "feu" | "terre" | "air" | "eau";
type Sign = { key: string; label: string; element: ElementKey };

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
  const changeMode = useMemo(() => sp.get("change") === "1", [sp]);

  const [checking, setChecking] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [selected, setSelected] = useState<string>("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let alive = true;

    (async () => {
      const { data, error } = await supabase.auth.getSession();
      const isAuthed = !error && !!data?.session?.user?.id;

      if (!alive) return;
      setAuthed(isAuthed);

      if (!isAuthed) {
        router.replace("/");
        return;
      }

      const s = getStoredSign();

      // ✅ si signe déjà choisi:
      // - onboarding normal: on redirige
      // - changeMode: on reste sur la page pour permettre de changer
      if (!changeMode && s && SIGNS_SET.has(s)) {
        router.replace(nextUrl || buildChatUrl(s));
        return;
      }

      // nettoyage si signe invalide
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
  }, [router, nextUrl, changeMode]);

  const hardNavigate = useCallback((url: string) => {
    if (typeof window === "undefined") return;
    window.location.assign(url);
  }, []);

  const choose = useCallback(
    (signKey: string) => {
      if (busy) return;
      if (!SIGNS_SET.has(signKey)) return;

      setBusy(true);
      setSelected(signKey);

      storeSign(signKey);

      // ✅ CHAT D’ABORD: après choix => chat
      const target = buildChatUrl(signKey);

      // 1) Next router
      try {
        router.replace(target);
      } catch {}

      // 2) Fallback: si jamais le router ne navigue pas
      setTimeout(() => {
        if (
          typeof window !== "undefined" &&
          window.location.pathname.includes("/onboarding/sign")
        ) {
          hardNavigate(target);
        }
      }, 180);
    },
    [busy, router, hardNavigate]
  );

  if (checking) {
    return (
      <main style={styles.page}>
        <div style={styles.shell}>
          <div style={styles.loadingCard}>
            <div style={styles.loadingTitle}>Chargement…</div>
            <div style={styles.loadingSub}>Préparation de ton espace Luna Astralis</div>
          </div>
        </div>
      </main>
    );
  }

  if (!authed) return null;

  return (
    <main style={styles.page}>
      <div style={styles.shell}>
        {/* HEADER */}
        <div style={styles.head}>
          <div style={styles.kicker}>Exploration personnelle reliée à ton signe</div>
          <h1 style={styles.h1}>{changeMode ? "Changer de signe" : "Choisir un signe"}</h1>
          <p style={styles.sub}>
            Tu as droit à <b>15 messages gratuits à vie</b>. Ensuite, tu peux débloquer l’accès complet si tu le souhaites.
          </p>
        </div>

        {/* STEPS */}
        <div style={styles.stepsWrap} aria-label="Étapes">
          <StepCard no="01" icon="♈" title="Choisis ton signe" text="Tu démarres en 1 clic." />
          <StepCard no="02" icon="🔐" title="Connecte-toi" text="Ton accès est sécurisé et tes échanges sont protégés." />
          <StepCard no="03" icon="✧" title="Gagne en clarté" text="Forces, blocages, besoins." />
          <StepCard no="04" icon="☾" title="Garde le contrôle" text="Une exploration guidée, à travers ton signe." />
        </div>

        {/* GRID SIGNS */}
        <div style={styles.sectionTitleRow}>
          <div style={styles.sectionTitle}>Choisir un signe</div>
          <div style={styles.sectionHint}>
            Clique un signe : si tu n’es pas connectée, on te redirige vers le login.
          </div>
        </div>

        <div style={styles.grid}>
          {SIGNS.map((s) => {
            const active = selected === s.key;

            return (
              <button
                key={s.key}
                type="button"
                onClick={() => choose(s.key)}
                disabled={busy}
                style={{
                  ...styles.signBtn,
                  ...(styles[`sign_${s.element}`] as React.CSSProperties),
                  ...(active ? styles.active : null),
                  ...(busy ? styles.disabled : null),
                }}
                onMouseEnter={(e) => {
                  if (busy) return;
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                  (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.06) saturate(1.1)";
                }}
                onMouseLeave={(e) => {
                  if (busy) return;
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.transform = active ? "translateY(-1px)" : "translateY(0px)";
                  el.style.filter = active ? "brightness(1.06) saturate(1.1)" : "none";
                }}
                aria-label={`${changeMode ? "Changer pour" : "Choisir"} ${s.label}`}
              >
                <span style={styles.signLabel}>{s.label}</span>
              </button>
            );
          })}
        </div>

        {/* ELEMENT CHIPS */}
        <div style={styles.chipsRow} aria-hidden="true">
          <span style={{ ...styles.chip, ...styles.chip_feu }}>FEU</span>
          <span style={{ ...styles.chip, ...styles.chip_terre }}>TERRE</span>
          <span style={{ ...styles.chip, ...styles.chip_air }}>AIR</span>
          <span style={{ ...styles.chip, ...styles.chip_eau }}>EAU</span>
        </div>

        {/* FOOTER */}
        <div style={styles.footer}>
          <div style={styles.footerLeft}>
            <div style={styles.footerBrand}>Luna Astralis</div>
            <div style={styles.footerCopy}>© {new Date().getFullYear()} · Tous droits réservés</div>
          </div>

          <div style={styles.footerRight}>
            <div style={styles.footerNote}>Exploration personnelle — non thérapeutique. Réservé aux 18 ans et plus.</div>
          </div>
        </div>
      </div>
    </main>
  );
}

function StepCard({
  no,
  icon,
  title,
  text,
}: {
  no: string;
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div style={styles.stepCard}>
      <div style={styles.stepTop}>
        <div style={styles.stepNo}>{no}</div>
        <div style={styles.stepIcon} aria-hidden="true">
          {icon}
        </div>
      </div>

      {/* ✅ typographie uniformisée (même esprit que signLabel) */}
      <div style={styles.stepTitle}>{title}</div>
      <div style={styles.stepText}>{text}</div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(1200px 700px at 20% 10%, rgba(130,90,255,0.22), transparent 60%), radial-gradient(900px 600px at 80% 20%, rgba(0,200,255,0.12), transparent 55%), linear-gradient(180deg, #0b0c12 0%, #07070b 100%)",
    color: "rgba(255,255,255,0.92)",
    padding: "22px 14px",
  },
  shell: { maxWidth: 1020, margin: "0 auto" },

  /* Loading */
  loadingCard: {
    marginTop: 12,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: 18,
    maxWidth: 520,
  },
  loadingTitle: { fontSize: 18, fontWeight: 900, letterSpacing: -0.2 },
  loadingSub: { marginTop: 6, fontSize: 13, opacity: 0.78 },

  /* Head */
  head: { marginBottom: 14 },
  kicker: {
    display: "inline-block",
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: 0.2,
    opacity: 0.8,
    padding: "7px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.05)",
    marginBottom: 10,
  },
  h1: { fontSize: 28, fontWeight: 900, letterSpacing: -0.3, margin: 0 },
  sub: { marginTop: 8, marginBottom: 0, opacity: 0.84, maxWidth: 820, lineHeight: 1.45 },

  /* Steps */
  stepsWrap: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
    gap: 12,
    marginTop: 14,
    marginBottom: 16,
  },
  stepCard: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.04))",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 18,
    padding: 14,
    minHeight: 92,
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },
  stepTop: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 },
  stepNo: { fontSize: 12, opacity: 0.75, fontWeight: 900 },
  stepIcon: { fontSize: 16, opacity: 0.92 },
  // ✅ Typo harmonisée
  stepTitle: { fontSize: 16, fontWeight: 900, letterSpacing: -0.15, marginBottom: 6 },
  stepText: { fontSize: 13, fontWeight: 700, opacity: 0.82, lineHeight: 1.25 },

  /* Section Title */
  sectionTitleRow: { marginTop: 6, marginBottom: 10 },
  sectionTitle: { fontSize: 16, fontWeight: 900, letterSpacing: -0.15 },
  sectionHint: { marginTop: 6, fontSize: 13, opacity: 0.78 },

  /* Grid */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 12,
    marginTop: 10,
  },

  signBtn: {
    padding: "16px 14px",
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.92)",
    textAlign: "left",
    cursor: "pointer",
    transition: "transform 140ms ease, filter 140ms ease, border-color 140ms ease, box-shadow 140ms ease",
    WebkitTapHighlightColor: "transparent",
    boxShadow: "0 12px 26px rgba(0,0,0,0.22)",
  },
  signLabel: { fontSize: 16, fontWeight: 900, letterSpacing: -0.1 },

  // Couleurs douces par élément (sans changer ton UI)
  sign_feu: {
    background:
      "linear-gradient(90deg, rgba(255,170,90,0.16), rgba(255,120,80,0.06))",
  },
  sign_terre: {
    background:
      "linear-gradient(90deg, rgba(120,255,170,0.14), rgba(80,200,140,0.06))",
  },
  sign_air: {
    background:
      "linear-gradient(90deg, rgba(170,200,255,0.14), rgba(120,160,255,0.06))",
  },
  sign_eau: {
    background:
      "linear-gradient(90deg, rgba(90,220,255,0.14), rgba(80,140,255,0.06))",
  },

  active: {
    borderColor: "rgba(255,255,255,0.22)",
    transform: "translateY(-1px)",
    filter: "brightness(1.06) saturate(1.1)",
    boxShadow: "0 14px 34px rgba(0,0,0,0.30)",
  },
  disabled: { opacity: 0.75, cursor: "default" },

  /* Chips */
  chipsRow: { display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" },
  chip: {
    fontSize: 11,
    letterSpacing: 0.8,
    fontWeight: 900,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.05)",
    opacity: 0.92,
  },
  chip_feu: { background: "rgba(255,160,90,0.12)" },
  chip_terre: { background: "rgba(120,255,170,0.10)" },
  chip_air: { background: "rgba(170,200,255,0.10)" },
  chip_eau: { background: "rgba(90,220,255,0.10)" },

  /* Footer */
  footer: {
    marginTop: 18,
    paddingTop: 14,
    borderTop: "1px solid rgba(255,255,255,0.10)",
    display: "flex",
    gap: 12,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
  },
  footerLeft: {},
  footerBrand: { fontSize: 14, fontWeight: 900, letterSpacing: -0.1 },
  footerCopy: { marginTop: 4, fontSize: 12, opacity: 0.72 },
  footerRight: { maxWidth: 540 },
  footerNote: { fontSize: 12, opacity: 0.72, lineHeight: 1.35 },
};
