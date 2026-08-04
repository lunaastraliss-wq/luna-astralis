/* =========================================================
   app/onboarding/sign/page.tsx
   - Onboarding (connecté): choisir un signe -> save -> redirect
   - ✅ Mode change: /onboarding/sign?change=1&next=/chat
   - ✅ “Chat d’abord”: après choix -> /chat?sign=...
   - ✅ Steps: typographie UNIFORME avec les boutons (même style)
   - ✅ Hover/active plus “premium” (sans casser la logique)
========================================================= */

"use client";





import __i18n from "../../../i18n/migrated/fr/app/onboarding/sign/signonboardingclient.json";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

type ElementKey = "feu" | "terre" | "air" | "eau";
type Sign = { key: string; label: string; element: ElementKey };

const SIGNS: Sign[] = [
  { key: "belier", label: __i18n["belier"], element: "feu" },
  { key: "lion", label: __i18n["lion"], element: "feu" },
  { key: "sagittaire", label: __i18n["sagittaire"], element: "feu" },

  { key: "taureau", label: __i18n["taureau"], element: "terre" },
  { key: "vierge", label: __i18n["vierge"], element: "terre" },
  { key: "capricorne", label: __i18n["capricorne"], element: "terre" },

  { key: "gemeaux", label: __i18n["gemeaux"], element: "air" },
  { key: "balance", label: __i18n["balance"], element: "air" },
  { key: "verseau", label: __i18n["verseau"], element: "air" },

  { key: "cancer", label: __i18n["cancer"], element: "eau" },
  { key: "scorpion", label: __i18n["scorpion"], element: "eau" },
  { key: "poissons", label: __i18n["poissons"], element: "eau" },
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
            <div style={styles.loadingTitle}>{__i18n["chargement"]}</div>
            <div style={styles.loadingSub}>{__i18n["preparation_de_ton_espace_luna_astralis"]}</div>
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
          <div style={styles.kicker}>{__i18n["exploration_personnelle_reliee_a_ton_signe"]}</div>
          <h1 style={styles.h1}>{changeMode ? "Changer de signe" : "Choisir un signe"}</h1>
          <p style={styles.sub}>
            {__i18n["tu_as_droit_a"]}<b>{__i18n["15_messages_gratuits_a_vie"]}</b>{__i18n["ensuite_tu_peux_debloquer_l_acces_complet_si_tu_le_souhaites"]}</p>
        </div>

        {/* STEPS */}
        <div style={styles.stepsWrap} aria-label={__i18n["etapes"]}>
          <StepCard no="01" icon="♈" title={__i18n["choisis_ton_signe"]} text="Tu démarres en 1 clic." />
          <StepCard no="02" icon="🔐" title="Connecte-toi" text="Ton accès est sécurisé et tes échanges sont protégés." />
          <StepCard no="03" icon="✧" title={__i18n["gagne_en_clarte"]} text="Forces, blocages, besoins." />
          <StepCard no="04" icon="☾" title={__i18n["garde_le_controle"]} text="Une exploration guidée, à travers ton signe." />
        </div>

        {/* GRID SIGNS */}
        <div style={styles.sectionTitleRow}>
          <div style={styles.sectionTitle}>{__i18n["choisir_un_signe"]}</div>
          <div style={styles.sectionHint}>
            {__i18n["clique_un_signe_si_tu_n_es_pas_connectee_on_te_redirige_vers"]}</div>
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
            <div style={styles.footerBrand}>{__i18n["luna_astralis"]}</div>
            <div style={styles.footerCopy}>© {new Date().getFullYear()} {__i18n["tous_droits_reserves"]}</div>
          </div>

          <div style={styles.footerRight}>
            <div style={styles.footerNote}>{__i18n["exploration_personnelle_non_therapeutique_reserve_aux_18_ans"]}</div>
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
      __i18n["radial_gradient_1200px_700px_at_20_10_rgba_130_90_255_0_22_t"],
    color: __i18n["rgba_255_255_255_0_92"],
    padding: __i18n["22px_14px"],
  },
  shell: { maxWidth: 1020, margin: __i18n["0_auto"] },

  /* Loading */
  loadingCard: {
    marginTop: 12,
    background: __i18n["rgba_255_255_255_0_06"],
    border: __i18n["1px_solid_rgba_255_255_255_0_10"],
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
    padding: __i18n["7px_10px"],
    borderRadius: 999,
    border: __i18n["1px_solid_rgba_255_255_255_0_12"],
    background: __i18n["rgba_255_255_255_0_05"],
    marginBottom: 10,
  },
  h1: { fontSize: 28, fontWeight: 900, letterSpacing: -0.3, margin: 0 },
  sub: { marginTop: 8, marginBottom: 0, opacity: 0.84, maxWidth: 820, lineHeight: 1.45 },

  /* Steps */
  stepsWrap: {
    display: "grid",
    gridTemplateColumns: __i18n["repeat_auto_fit_minmax_190px_1fr"],
    gap: 12,
    marginTop: 14,
    marginBottom: 16,
  },
  stepCard: {
    background: __i18n["linear_gradient_180deg_rgba_255_255_255_0_07_rgba_255_255_25"],
    border: __i18n["1px_solid_rgba_255_255_255_0_12_2"],
    borderRadius: 18,
    padding: 14,
    minHeight: 92,
    boxShadow: __i18n["0_10px_30px_rgba_0_0_0_0_25"],
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
    gridTemplateColumns: __i18n["repeat_auto_fit_minmax_150px_1fr"],
    gap: 12,
    marginTop: 10,
  },

  signBtn: {
    padding: __i18n["16px_14px"],
    borderRadius: 16,
    border: __i18n["1px_solid_rgba_255_255_255_0_10_2"],
    background: __i18n["rgba_255_255_255_0_06_2"],
    color: __i18n["rgba_255_255_255_0_92_2"],
    textAlign: "left",
    cursor: "pointer",
    transition: __i18n["transform_140ms_ease_filter_140ms_ease_border_color_140ms_ea"],
    WebkitTapHighlightColor: "transparent",
    boxShadow: __i18n["0_12px_26px_rgba_0_0_0_0_22"],
  },
  signLabel: { fontSize: 16, fontWeight: 900, letterSpacing: -0.1 },

  // Couleurs douces par élément (sans changer ton UI)
  sign_feu: {
    background:
      __i18n["linear_gradient_90deg_rgba_255_170_90_0_16_rgba_255_120_80_0"],
  },
  sign_terre: {
    background:
      __i18n["linear_gradient_90deg_rgba_120_255_170_0_14_rgba_80_200_140"],
  },
  sign_air: {
    background:
      __i18n["linear_gradient_90deg_rgba_170_200_255_0_14_rgba_120_160_255"],
  },
  sign_eau: {
    background:
      __i18n["linear_gradient_90deg_rgba_90_220_255_0_14_rgba_80_140_255_0"],
  },

  active: {
    borderColor: __i18n["rgba_255_255_255_0_22"],
    transform: __i18n["translatey_1px"],
    filter: __i18n["brightness_1_06_saturate_1_1"],
    boxShadow: __i18n["0_14px_34px_rgba_0_0_0_0_30"],
  },
  disabled: { opacity: 0.75, cursor: "default" },

  /* Chips */
  chipsRow: { display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" },
  chip: {
    fontSize: 11,
    letterSpacing: 0.8,
    fontWeight: 900,
    padding: __i18n["6px_10px"],
    borderRadius: 999,
    border: __i18n["1px_solid_rgba_255_255_255_0_12_3"],
    background: __i18n["rgba_255_255_255_0_05_2"],
    opacity: 0.92,
  },
  chip_feu: { background: __i18n["rgba_255_160_90_0_12"] },
  chip_terre: { background: __i18n["rgba_120_255_170_0_10"] },
  chip_air: { background: __i18n["rgba_170_200_255_0_10"] },
  chip_eau: { background: __i18n["rgba_90_220_255_0_10"] },

  /* Footer */
  footer: {
    marginTop: 18,
    paddingTop: 14,
    borderTop: __i18n["1px_solid_rgba_255_255_255_0_10_3"],
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
