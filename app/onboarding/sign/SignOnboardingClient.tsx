/* =========================================================
   app/onboarding/sign/page.tsx

   - 6 langues : fr / en / es / de / it / pt
   - Route unique : /onboarding/sign?lang=en
   - Conserve la langue
   - Conserve next=
   - Sauvegarde le signe dans localStorage + cookie
   - Retourne vers pricing si l'utilisateur vient d'un forfait
   - Sinon ouvre le chat avec le bon signe et la bonne langue
========================================================= */

"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

import fr from "../../../i18n/migrated/fr/app/onboarding/sign/signonboardingclient.json";
import en from "../../../i18n/migrated/en/app/onboarding/sign/signonboardingclient.json";
import es from "../../../i18n/migrated/es/app/onboarding/sign/signonboardingclient.json";
import de from "../../../i18n/migrated/de/app/onboarding/sign/signonboardingclient.json";
import it from "../../../i18n/migrated/it/app/onboarding/sign/signonboardingclient.json";
import pt from "../../../i18n/migrated/pt/app/onboarding/sign/signonboardingclient.json";

type Lang = "fr" | "en" | "es" | "de" | "it" | "pt";

type ElementKey = "feu" | "terre" | "air" | "eau";

type Sign = {
  key: string;
  element: ElementKey;
};

const DICTS: Record<Lang, Record<string, string>> = {
  fr: fr as Record<string, string>,
  en: en as Record<string, string>,
  es: es as Record<string, string>,
  de: de as Record<string, string>,
  it: it as Record<string, string>,
  pt: pt as Record<string, string>,
};

const UI: Record<
  Lang,
  {
    changeSign: string;
    chooseSign: string;
    chooseFor: string;
    changeFor: string;

    step1Text: string;
    step2Title: string;
    step2Text: string;
    step3Text: string;
    step4Text: string;

    fire: string;
    earth: string;
    air: string;
    water: string;
  }
> = {
  fr: {
    changeSign: "Changer de signe",
    chooseSign: "Choisir un signe",
    chooseFor: "Choisir",
    changeFor: "Changer pour",

    step1Text: "Tu démarres en 1 clic.",
    step2Title: "Connecte-toi",
    step2Text:
      "Ton accès est sécurisé et tes échanges sont protégés.",
    step3Text: "Forces, blocages, besoins.",
    step4Text:
      "Une exploration guidée, à travers ton signe.",

    fire: "FEU",
    earth: "TERRE",
    air: "AIR",
    water: "EAU",
  },

  en: {
    changeSign: "Change sign",
    chooseSign: "Choose a sign",
    chooseFor: "Choose",
    changeFor: "Change to",

    step1Text: "Get started in one click.",
    step2Title: "Sign in",
    step2Text:
      "Your access is secure and your conversations are protected.",
    step3Text: "Strengths, blocks and needs.",
    step4Text:
      "A guided exploration through your sign.",

    fire: "FIRE",
    earth: "EARTH",
    air: "AIR",
    water: "WATER",
  },

  es: {
    changeSign: "Cambiar de signo",
    chooseSign: "Elegir un signo",
    chooseFor: "Elegir",
    changeFor: "Cambiar a",

    step1Text: "Empieza con un solo clic.",
    step2Title: "Inicia sesión",
    step2Text:
      "Tu acceso es seguro y tus conversaciones están protegidas.",
    step3Text: "Fortalezas, bloqueos y necesidades.",
    step4Text:
      "Una exploración guiada a través de tu signo.",

    fire: "FUEGO",
    earth: "TIERRA",
    air: "AIRE",
    water: "AGUA",
  },

  de: {
    changeSign: "Sternzeichen ändern",
    chooseSign: "Sternzeichen wählen",
    chooseFor: "Wählen",
    changeFor: "Ändern zu",

    step1Text: "Starte mit nur einem Klick.",
    step2Title: "Anmelden",
    step2Text:
      "Dein Zugang ist sicher und deine Gespräche sind geschützt.",
    step3Text: "Stärken, Blockaden und Bedürfnisse.",
    step4Text:
      "Eine geführte Erkundung durch dein Sternzeichen.",

    fire: "FEUER",
    earth: "ERDE",
    air: "LUFT",
    water: "WASSER",
  },

  it: {
    changeSign: "Cambia segno",
    chooseSign: "Scegli un segno",
    chooseFor: "Scegli",
    changeFor: "Cambia in",

    step1Text: "Inizia con un solo clic.",
    step2Title: "Accedi",
    step2Text:
      "Il tuo accesso è sicuro e le tue conversazioni sono protette.",
    step3Text: "Punti di forza, blocchi e bisogni.",
    step4Text:
      "Un'esplorazione guidata attraverso il tuo segno.",

    fire: "FUOCO",
    earth: "TERRA",
    air: "ARIA",
    water: "ACQUA",
  },

  pt: {
    changeSign: "Mudar signo",
    chooseSign: "Escolher um signo",
    chooseFor: "Escolher",
    changeFor: "Mudar para",

    step1Text: "Comece com apenas um clique.",
    step2Title: "Entrar",
    step2Text:
      "Seu acesso é seguro e suas conversas são protegidas.",
    step3Text: "Forças, bloqueios e necessidades.",
    step4Text:
      "Uma exploração guiada através do seu signo.",

    fire: "FOGO",
    earth: "TERRA",
    air: "AR",
    water: "ÁGUA",
  },
};

const SIGNS: Sign[] = [
  { key: "belier", element: "feu" },
  { key: "lion", element: "feu" },
  { key: "sagittaire", element: "feu" },

  { key: "taureau", element: "terre" },
  { key: "vierge", element: "terre" },
  { key: "capricorne", element: "terre" },

  { key: "gemeaux", element: "air" },
  { key: "balance", element: "air" },
  { key: "verseau", element: "air" },

  { key: "cancer", element: "eau" },
  { key: "scorpion", element: "eau" },
  { key: "poissons", element: "eau" },
];

const LS_SIGN_KEY = "la_sign";
const LS_LANG_KEY = "la_lang";

const SIGNS_SET = new Set(SIGNS.map((s) => s.key));

function normalizeLang(value: unknown): Lang {
  const raw = String(value ?? "")
    .trim()
    .toLowerCase()
    .split("-")[0];

  if (
    raw === "fr" ||
    raw === "en" ||
    raw === "es" ||
    raw === "de" ||
    raw === "it" ||
    raw === "pt"
  ) {
    return raw;
  }

  if (typeof window !== "undefined") {
    try {
      const stored = String(
        localStorage.getItem(LS_LANG_KEY) || ""
      )
        .trim()
        .toLowerCase()
        .split("-")[0];

      if (
        stored === "fr" ||
        stored === "en" ||
        stored === "es" ||
        stored === "de" ||
        stored === "it" ||
        stored === "pt"
      ) {
        return stored;
      }
    } catch {}
  }

  return "fr";
}

function setCookie(
  name: string,
  value: string,
  maxAgeSeconds = 31536000
) {
  if (typeof document === "undefined") return;

  document.cookie =
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}` +
    `; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax`;
}

function getStoredSign(): string {
  if (typeof window === "undefined") return "";

  try {
    return (
      localStorage.getItem(LS_SIGN_KEY) || ""
    ).trim();
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

function storeLang(lang: Lang) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(LS_LANG_KEY, lang);
  } catch {}
}

function stripLocalePrefix(path: string) {
  const clean = path.startsWith("/")
    ? path
    : `/${path}`;

  return (
    clean.replace(
      /^\/(fr|en|es|de|it|pt)(?=\/|$)/i,
      ""
    ) || "/"
  );
}

function addLangParam(
  path: string,
  lang: Lang
): string {
  const clean = stripLocalePrefix(path);

  try {
    const url = new URL(
      clean,
      "http://dummy.local"
    );

    url.searchParams.set("lang", lang);

    return (
      url.pathname +
      (url.search ? url.search : "")
    );
  } catch {
    const separator = clean.includes("?")
      ? "&"
      : "?";

    return `${clean}${separator}lang=${encodeURIComponent(
      lang
    )}`;
  }
}

function safeInternalPath(
  raw: string | null,
  lang: Lang
): string {
  const value = (raw || "").trim();

  if (!value) return "";

  if (!value.startsWith("/")) return "";

  if (value.startsWith("//")) return "";

  if (value.includes("://")) return "";

  const clean = stripLocalePrefix(value);

  const blocked = [
    "/login",
    "/signup",
    "/auth",
    "/onboarding",
  ];

  if (
    blocked.some((path) =>
      clean.startsWith(path)
    )
  ) {
    return "";
  }

  return addLangParam(clean, lang);
}

function buildChatUrl(
  signKey: string,
  lang: Lang
) {
  return (
    `/chat?lang=${encodeURIComponent(lang)}` +
    `&sign=${encodeURIComponent(signKey)}`
  );
}

function injectSignIntoChat(
  url: string,
  signKey: string,
  lang: Lang
) {
  try {
    const parsed = new URL(
      url,
      "http://dummy.local"
    );

    if (parsed.pathname !== "/chat") {
      return addLangParam(url, lang);
    }

    parsed.searchParams.set("lang", lang);
    parsed.searchParams.set("sign", signKey);
    parsed.searchParams.delete("signe");

    return (
      parsed.pathname +
      "?" +
      parsed.searchParams.toString()
    );
  } catch {
    return buildChatUrl(signKey, lang);
  }
}

export default function OnboardingSignPage() {
  const router = useRouter();
  const sp = useSearchParams();

  const lang = useMemo(
    () => normalizeLang(sp.get("lang")),
    [sp]
  );

  const dict = DICTS[lang];
  const ui = UI[lang];

  const t = useCallback(
    (key: string, fallback = "") => {
      const value = dict?.[key];

      if (
        typeof value === "string" &&
        value.trim()
      ) {
        return value;
      }

      return fallback;
    },
    [dict]
  );

  const nextUrl = useMemo(
    () =>
      safeInternalPath(
        sp.get("next"),
        lang
      ),
    [sp, lang]
  );

  const changeMode = useMemo(
    () => sp.get("change") === "1",
    [sp]
  );

  const [checking, setChecking] =
    useState(true);

  const [authed, setAuthed] =
    useState(false);

  const [selected, setSelected] =
    useState("");

  const [busy, setBusy] =
    useState(false);

  useEffect(() => {
    storeLang(lang);
  }, [lang]);

  useEffect(() => {
    let alive = true;

    (async () => {
      const { data, error } =
        await supabase.auth.getSession();

      const isAuthed =
        !error &&
        !!data?.session?.user?.id;

      if (!alive) return;

      setAuthed(isAuthed);

      if (!isAuthed) {
        const resume =
          `/onboarding/sign?lang=${encodeURIComponent(
            lang
          )}` +
          (nextUrl
            ? `&next=${encodeURIComponent(
                nextUrl
              )}`
            : "");

        router.replace(
          `/login?lang=${encodeURIComponent(
            lang
          )}&next=${encodeURIComponent(
            resume
          )}`
        );

        return;
      }

      const storedSign =
        getStoredSign();

      if (
        !changeMode &&
        storedSign &&
        SIGNS_SET.has(storedSign)
      ) {
        const target = nextUrl
          ? injectSignIntoChat(
              nextUrl,
              storedSign,
              lang
            )
          : buildChatUrl(
              storedSign,
              lang
            );

        router.replace(target);
        return;
      }

      if (
        storedSign &&
        !SIGNS_SET.has(storedSign)
      ) {
        try {
          localStorage.removeItem(
            LS_SIGN_KEY
          );
        } catch {}

        setCookie(
          LS_SIGN_KEY,
          "",
          0
        );
      }

      setChecking(false);
    })();

    return () => {
      alive = false;
    };
  }, [
    router,
    nextUrl,
    changeMode,
    lang,
  ]);

  const hardNavigate =
    useCallback((url: string) => {
      if (
        typeof window === "undefined"
      ) {
        return;
      }

      window.location.assign(url);
    }, []);

  const choose = useCallback(
    (signKey: string) => {
      if (busy) return;

      if (!SIGNS_SET.has(signKey)) {
        return;
      }

      setBusy(true);
      setSelected(signKey);

      storeSign(signKey);
      storeLang(lang);

      /*
       * Si next= existe :
       * - pricing -> retour pricing
       * - chat -> ajoute sign + lang
       *
       * Sinon :
       * - chat avec sign + lang
       */
      const target = nextUrl
        ? injectSignIntoChat(
            nextUrl,
            signKey,
            lang
          )
        : buildChatUrl(
            signKey,
            lang
          );

      try {
        router.replace(target);
      } catch {}

      setTimeout(() => {
        if (
          typeof window !==
            "undefined" &&
          window.location.pathname.includes(
            "/onboarding/sign"
          )
        ) {
          hardNavigate(target);
        }
      }, 180);
    },
    [
      busy,
      router,
      hardNavigate,
      nextUrl,
      lang,
    ]
  );

  if (checking) {
    return (
      <main style={styles.page}>
        <div style={styles.shell}>
          <div
            style={styles.loadingCard}
          >
            <div
              style={
                styles.loadingTitle
              }
            >
              {t(
                "chargement",
                "Chargement…"
              )}
            </div>

            <div
              style={
                styles.loadingSub
              }
            >
              {t(
                "preparation_de_ton_espace_luna_astralis",
                "Préparation de ton espace Luna Astralis"
              )}
            </div>
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
          <div style={styles.kicker}>
            {t(
              "exploration_personnelle_reliee_a_ton_signe",
              "Exploration personnelle reliée à ton signe"
            )}
          </div>

          <h1 style={styles.h1}>
            {changeMode
              ? ui.changeSign
              : ui.chooseSign}
          </h1>

          <p style={styles.sub}>
            {t(
              "tu_as_droit_a",
              "Tu as droit à "
            )}{" "}
            <b>
              {t(
                "15_messages_gratuits_a_vie",
                "15 messages gratuits à vie"
              )}
            </b>{" "}
            {t(
              "ensuite_tu_peux_debloquer_l_acces_complet_si_tu_le_souhaites",
              ". Ensuite, tu peux débloquer l’accès complet si tu le souhaites."
            )}
          </p>
        </div>

        {/* STEPS */}

        <div
          style={styles.stepsWrap}
          aria-label={t(
            "etapes",
            "Étapes"
          )}
        >
          <StepCard
            no="01"
            icon="♈"
            title={t(
              "choisis_ton_signe",
              ui.chooseSign
            )}
            text={ui.step1Text}
          />

          <StepCard
            no="02"
            icon="🔐"
            title={ui.step2Title}
            text={ui.step2Text}
          />

          <StepCard
            no="03"
            icon="✧"
            title={t(
              "gagne_en_clarte",
              "Gagne en clarté"
            )}
            text={ui.step3Text}
          />

          <StepCard
            no="04"
            icon="☾"
            title={t(
              "garde_le_controle",
              "Garde le contrôle"
            )}
            text={ui.step4Text}
          />
        </div>

        {/* GRID SIGNS */}

        <div
          style={
            styles.sectionTitleRow
          }
        >
          <div
            style={styles.sectionTitle}
          >
            {t(
              "choisir_un_signe",
              ui.chooseSign
            )}
          </div>

          <div
            style={styles.sectionHint}
          >
            {t(
              "clique_un_signe_si_tu_n_es_pas_connectee_on_te_redirige_vers",
              ""
            )}
          </div>
        </div>

        <div style={styles.grid}>
          {SIGNS.map((sign) => {
            const active =
              selected === sign.key;

            const label = t(
              sign.key,
              sign.key
            );

            return (
              <button
                key={sign.key}
                type="button"
                onClick={() =>
                  choose(sign.key)
                }
                disabled={busy}
                style={{
                  ...styles.signBtn,
                  ...(styles[
                    `sign_${sign.element}`
                  ] as React.CSSProperties),
                  ...(active
                    ? styles.active
                    : null),
                  ...(busy
                    ? styles.disabled
                    : null),
                }}
                onMouseEnter={(e) => {
                  if (busy) return;

                  e.currentTarget.style.transform =
                    "translateY(-1px)";

                  e.currentTarget.style.filter =
                    "brightness(1.06) saturate(1.1)";
                }}
                onMouseLeave={(e) => {
                  if (busy) return;

                  const el =
                    e.currentTarget;

                  el.style.transform =
                    active
                      ? "translateY(-1px)"
                      : "translateY(0px)";

                  el.style.filter =
                    active
                      ? "brightness(1.06) saturate(1.1)"
                      : "none";
                }}
                aria-label={`${
                  changeMode
                    ? ui.changeFor
                    : ui.chooseFor
                } ${label}`}
              >
                <span
                  style={
                    styles.signLabel
                  }
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        {/* ELEMENTS */}

        <div
          style={styles.chipsRow}
          aria-hidden="true"
        >
          <span
            style={{
              ...styles.chip,
              ...styles.chip_feu,
            }}
          >
            {ui.fire}
          </span>

          <span
            style={{
              ...styles.chip,
              ...styles.chip_terre,
            }}
          >
            {ui.earth}
          </span>

          <span
            style={{
              ...styles.chip,
              ...styles.chip_air,
            }}
          >
            {ui.air}
          </span>

          <span
            style={{
              ...styles.chip,
              ...styles.chip_eau,
            }}
          >
            {ui.water}
          </span>
        </div>

        {/* FOOTER */}

        <div style={styles.footer}>
          <div
            style={styles.footerLeft}
          >
            <div
              style={
                styles.footerBrand
              }
            >
              {t(
                "luna_astralis",
                "Luna Astralis"
              )}
            </div>

            <div
              style={
                styles.footerCopy
              }
            >
              ©{" "}
              {new Date().getFullYear()}{" "}
              {t(
                "tous_droits_reserves",
                "· Tous droits réservés"
              )}
            </div>
          </div>

          <div
            style={
              styles.footerRight
            }
          >
            <div
              style={
                styles.footerNote
              }
            >
              {t(
                "exploration_personnelle_non_therapeutique_reserve_aux_18_ans",
                "Exploration personnelle — non thérapeutique. Réservé aux 18 ans et plus."
              )}
            </div>
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
        <div style={styles.stepNo}>
          {no}
        </div>

        <div
          style={styles.stepIcon}
          aria-hidden="true"
        >
          {icon}
        </div>
      </div>

      <div style={styles.stepTitle}>
        {title}
      </div>

      <div style={styles.stepText}>
        {text}
      </div>
    </div>
  );
}

const styles: Record<
  string,
  React.CSSProperties
> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(1200px 700px at 20% 10%, rgba(130,90,255,0.22), transparent 60%), radial-gradient(900px 600px at 80% 20%, rgba(0,200,255,0.12), transparent 55%), linear-gradient(180deg, #0b0c12 0%, #07070b 100%)",
    color: "rgba(255,255,255,0.92)",
    padding: "22px 14px",
  },

  shell: {
    maxWidth: 1020,
    margin: "0 auto",
  },

  loadingCard: {
    marginTop: 12,
    background:
      "rgba(255,255,255,0.06)",
    border:
      "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: 18,
    maxWidth: 520,
  },

  loadingTitle: {
    fontSize: 18,
    fontWeight: 900,
    letterSpacing: -0.2,
  },

  loadingSub: {
    marginTop: 6,
    fontSize: 13,
    opacity: 0.78,
  },

  head: {
    marginBottom: 14,
  },

  kicker: {
    display: "inline-block",
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: 0.2,
    opacity: 0.8,
    padding: "7px 10px",
    borderRadius: 999,
    border:
      "1px solid rgba(255,255,255,0.12)",
    background:
      "rgba(255,255,255,0.05)",
    marginBottom: 10,
  },

  h1: {
    fontSize: 28,
    fontWeight: 900,
    letterSpacing: -0.3,
    margin: 0,
  },

  sub: {
    marginTop: 8,
    marginBottom: 0,
    opacity: 0.84,
    maxWidth: 820,
    lineHeight: 1.45,
  },

  stepsWrap: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(190px, 1fr))",
    gap: 12,
    marginTop: 14,
    marginBottom: 16,
  },

  stepCard: {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.04))",
    border:
      "1px solid rgba(255,255,255,0.12)",
    borderRadius: 18,
    padding: 14,
    minHeight: 92,
    boxShadow:
      "0 10px 30px rgba(0,0,0,0.25)",
  },

  stepTop: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "space-between",
    marginBottom: 10,
  },

  stepNo: {
    fontSize: 12,
    opacity: 0.75,
    fontWeight: 900,
  },

  stepIcon: {
    fontSize: 16,
    opacity: 0.92,
  },

  stepTitle: {
    fontSize: 16,
    fontWeight: 900,
    letterSpacing: -0.15,
    marginBottom: 6,
  },

  stepText: {
    fontSize: 13,
    fontWeight: 700,
    opacity: 0.82,
    lineHeight: 1.25,
  },

  sectionTitleRow: {
    marginTop: 6,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 900,
    letterSpacing: -0.15,
  },

  sectionHint: {
    marginTop: 6,
    fontSize: 13,
    opacity: 0.78,
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 12,
    marginTop: 10,
  },

  signBtn: {
    padding: "16px 14px",
    borderRadius: 16,
    border:
      "1px solid rgba(255,255,255,0.10)",
    background:
      "rgba(255,255,255,0.06)",
    color:
      "rgba(255,255,255,0.92)",
    textAlign: "left",
    cursor: "pointer",
    transition:
      "transform 140ms ease, filter 140ms ease, border-color 140ms ease, box-shadow 140ms ease",
    WebkitTapHighlightColor:
      "transparent",
    boxShadow:
      "0 12px 26px rgba(0,0,0,0.22)",
  },

  signLabel: {
    fontSize: 16,
    fontWeight: 900,
    letterSpacing: -0.1,
  },

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
    borderColor:
      "rgba(255,255,255,0.22)",
    transform:
      "translateY(-1px)",
    filter:
      "brightness(1.06) saturate(1.1)",
    boxShadow:
      "0 14px 34px rgba(0,0,0,0.30)",
  },

  disabled: {
    opacity: 0.75,
    cursor: "default",
  },

  chipsRow: {
    display: "flex",
    gap: 8,
    marginTop: 14,
    flexWrap: "wrap",
  },

  chip: {
    fontSize: 11,
    letterSpacing: 0.8,
    fontWeight: 900,
    padding: "6px 10px",
    borderRadius: 999,
    border:
      "1px solid rgba(255,255,255,0.12)",
    background:
      "rgba(255,255,255,0.05)",
    opacity: 0.92,
  },

  chip_feu: {
    background:
      "rgba(255,160,90,0.12)",
  },

  chip_terre: {
    background:
      "rgba(120,255,170,0.10)",
  },

  chip_air: {
    background:
      "rgba(170,200,255,0.10)",
  },

  chip_eau: {
    background:
      "rgba(90,220,255,0.10)",
  },

  footer: {
    marginTop: 18,
    paddingTop: 14,
    borderTop:
      "1px solid rgba(255,255,255,0.10)",
    display: "flex",
    gap: 12,
    justifyContent:
      "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
  },

  footerLeft: {},

  footerBrand: {
    fontSize: 14,
    fontWeight: 900,
    letterSpacing: -0.1,
  },

  footerCopy: {
    marginTop: 4,
    fontSize: 12,
    opacity: 0.72,
  },

  footerRight: {
    maxWidth: 540,
  },

  footerNote: {
    fontSize: 12,
    opacity: 0.72,
    lineHeight: 1.35,
  },
};
