"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

import fr from "../../../i18n/migrated/fr/app/onboarding/sign/signonboardingclient.json";
import en from "../../../i18n/migrated/en/app/onboarding/sign/signonboardingclient.json";
import es from "../../../i18n/migrated/es/app/onboarding/sign/signonboardingclient.json";
import de from "../../../i18n/migrated/de/app/onboarding/sign/signonboardingclient.json";
import it from "../../../i18n/migrated/it/app/onboarding/sign/signonboardingclient.json";
import pt from "../../../i18n/migrated/pt/app/onboarding/sign/signonboardingclient.json";

type Lang = "fr" | "en" | "es" | "de" | "it" | "pt";
type Plan =
  | "monthly_essential"
  | "monthly_unlimited"
  | "yearly_essential"
  | "yearly_unlimited";

type SignKey =
  | "belier"
  | "taureau"
  | "gemeaux"
  | "cancer"
  | "lion"
  | "vierge"
  | "balance"
  | "scorpion"
  | "sagittaire"
  | "capricorne"
  | "verseau"
  | "poissons";

type Sign = {
  key: SignKey;
  image: string;
};

const DICTS: Record<Lang, Record<string, string>> = {
  fr: fr as Record<string, string>,
  en: en as Record<string, string>,
  es: es as Record<string, string>,
  de: de as Record<string, string>,
  it: it as Record<string, string>,
  pt: pt as Record<string, string>,
};

const VALID_PLANS = new Set<Plan>([
  "monthly_essential",
  "monthly_unlimited",
  "yearly_essential",
  "yearly_unlimited",
]);

const SIGNS: Sign[] = [
  { key: "belier", image: "/astrology/belier.png" },
  { key: "taureau", image: "/astrology/taureau.png" },
  { key: "gemeaux", image: "/astrology/gemeaux.png" },
  { key: "cancer", image: "/astrology/cancer.png" },
  { key: "lion", image: "/astrology/lion.png" },
  { key: "vierge", image: "/astrology/vierge.png" },
  { key: "balance", image: "/astrology/balance.png" },
  { key: "scorpion", image: "/astrology/scorpion.png" },
  { key: "sagittaire", image: "/astrology/sagittaire.png" },
  { key: "capricorne", image: "/astrology/capricorne.png" },
  { key: "verseau", image: "/astrology/verseau.png" },
  { key: "poissons", image: "/astrology/poissons.png" },
];

const LS_SIGN_KEY = "la_sign";
const LS_LANG_KEY = "la_lang";

const UI: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    secure: string;
    click: string;
    loading: string;
    openingStripe: string;
    checkoutError: string;
    missingPlan: string;
    back: string;
  }
> = {
  fr: {
    eyebrow: "PERSONNALISE TON EXPÉRIENCE",
    title: "Choisis ton signe",
    subtitle:
      "Sélectionne ton signe astrologique pour personnaliser ton expérience Luna Astralis avant le paiement.",
    secure: "Paiement sécurisé avec Stripe",
    click: "Choisis un signe pour continuer",
    loading: "Chargement…",
    openingStripe: "Ouverture de Stripe…",
    checkoutError: "Impossible d’ouvrir le paiement.",
    missingPlan: "Forfait manquant ou invalide.",
    back: "Retour aux tarifs",
  },
  en: {
    eyebrow: "PERSONALIZE YOUR EXPERIENCE",
    title: "Choose your sign",
    subtitle:
      "Select your zodiac sign to personalize your Luna Astralis experience before payment.",
    secure: "Secure payment with Stripe",
    click: "Choose a sign to continue",
    loading: "Loading…",
    openingStripe: "Opening Stripe…",
    checkoutError: "Unable to open checkout.",
    missingPlan: "Missing or invalid plan.",
    back: "Back to pricing",
  },
  es: {
    eyebrow: "PERSONALIZA TU EXPERIENCIA",
    title: "Elige tu signo",
    subtitle:
      "Selecciona tu signo del zodiaco para personalizar tu experiencia Luna Astralis antes del pago.",
    secure: "Pago seguro con Stripe",
    click: "Elige un signo para continuar",
    loading: "Cargando…",
    openingStripe: "Abriendo Stripe…",
    checkoutError: "No se pudo abrir el pago.",
    missingPlan: "Plan ausente o no válido.",
    back: "Volver a precios",
  },
  de: {
    eyebrow: "PERSONALISIERE DEIN ERLEBNIS",
    title: "Wähle dein Sternzeichen",
    subtitle:
      "Wähle dein Sternzeichen, um dein Luna-Astralis-Erlebnis vor der Zahlung zu personalisieren.",
    secure: "Sichere Zahlung mit Stripe",
    click: "Wähle ein Sternzeichen, um fortzufahren",
    loading: "Laden…",
    openingStripe: "Stripe wird geöffnet…",
    checkoutError: "Die Zahlung konnte nicht geöffnet werden.",
    missingPlan: "Tarif fehlt oder ist ungültig.",
    back: "Zurück zu den Tarifen",
  },
  it: {
    eyebrow: "PERSONALIZZA LA TUA ESPERIENZA",
    title: "Scegli il tuo segno",
    subtitle:
      "Seleziona il tuo segno zodiacale per personalizzare la tua esperienza Luna Astralis prima del pagamento.",
    secure: "Pagamento sicuro con Stripe",
    click: "Scegli un segno per continuare",
    loading: "Caricamento…",
    openingStripe: "Apertura di Stripe…",
    checkoutError: "Impossibile aprire il pagamento.",
    missingPlan: "Piano mancante o non valido.",
    back: "Torna ai prezzi",
  },
  pt: {
    eyebrow: "PERSONALIZE SUA EXPERIÊNCIA",
    title: "Escolha seu signo",
    subtitle:
      "Selecione seu signo do zodíaco para personalizar sua experiência Luna Astralis antes do pagamento.",
    secure: "Pagamento seguro com Stripe",
    click: "Escolha um signo para continuar",
    loading: "Carregando…",
    openingStripe: "Abrindo o Stripe…",
    checkoutError: "Não foi possível abrir o pagamento.",
    missingPlan: "Plano ausente ou inválido.",
    back: "Voltar aos preços",
  },
};

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
      const stored = String(localStorage.getItem(LS_LANG_KEY) || "")
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

function normalizePlan(value: unknown): Plan | null {
  const raw = String(value ?? "").trim() as Plan;
  return VALID_PLANS.has(raw) ? raw : null;
}

function safeNext(raw: string | null, lang: Lang): string {
  const fallback = `/${lang}/chat`;
  const value = (raw || "").trim();

  if (!value) return fallback;
  if (!value.startsWith("/")) return fallback;
  if (value.startsWith("//")) return fallback;
  if (value.includes("://")) return fallback;
  if (value.startsWith("/login") || value.startsWith("/auth")) return fallback;

  return value;
}

function setCookie(name: string, value: string, maxAgeSeconds = 31536000) {
  if (typeof document === "undefined") return;

  document.cookie =
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}` +
    `; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax`;
}

function storeSign(signKey: SignKey) {
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

export default function CheckoutSignClient() {
  const router = useRouter();
  const sp = useSearchParams();

  const lang = useMemo(() => normalizeLang(sp.get("lang")), [sp]);
  const plan = useMemo(() => normalizePlan(sp.get("plan")), [sp]);
  const nextUrl = useMemo(() => safeNext(sp.get("next"), lang), [sp, lang]);

  const dict = DICTS[lang];
  const ui = UI[lang];

  const [checking, setChecking] = useState(true);
  const [busy, setBusy] = useState(false);
  const [selected, setSelected] = useState<SignKey | null>(null);
  const [msg, setMsg] = useState("");

  const signLabel = useCallback(
    (key: SignKey) => {
      const value = dict?.[key];
      return typeof value === "string" && value.trim() ? value : key;
    },
    [dict]
  );

  useEffect(() => {
    storeLang(lang);
  }, [lang]);

  useEffect(() => {
    let alive = true;

    (async () => {
      const { data, error } = await supabase.auth.getSession();
      if (!alive) return;

      const authed = !error && !!data?.session?.user?.id;

      if (!authed) {
        const resume =
          `/checkout/sign?lang=${encodeURIComponent(lang)}` +
          (plan ? `&plan=${encodeURIComponent(plan)}` : "") +
          `&next=${encodeURIComponent(nextUrl)}`;

        router.replace(
          `/login?lang=${encodeURIComponent(lang)}` +
            `&next=${encodeURIComponent(resume)}`
        );
        return;
      }

      setChecking(false);
    })();

    return () => {
      alive = false;
    };
  }, [router, lang, plan, nextUrl]);

  const chooseSign = useCallback(
    async (signKey: SignKey) => {
      if (busy) return;

      if (!plan) {
        setMsg(ui.missingPlan);
        return;
      }

      try {
        setBusy(true);
        setSelected(signKey);
        setMsg(ui.openingStripe);

        storeSign(signKey);
        storeLang(lang);

        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            plan,
            next: nextUrl,
          }),
        });

        const out = (await res.json().catch(() => ({}))) as {
          url?: string;
          error?: string;
        };

        if (!res.ok) {
          throw new Error(out?.error || ui.checkoutError);
        }

        if (!out?.url) {
          throw new Error(ui.checkoutError);
        }

        window.location.href = out.url;
      } catch (err) {
        const text = err instanceof Error ? err.message : ui.checkoutError;
        setMsg(text);
        setBusy(false);
        setSelected(null);
      }
    },
    [busy, lang, nextUrl, plan, ui.checkoutError, ui.missingPlan, ui.openingStripe]
  );

  if (checking) {
    return (
      <main className="checkout-sign-page">
        <div className="checkout-sign-loading">{ui.loading}</div>

        <style jsx>{`
          .checkout-sign-page {
            min-height: 100vh;
            display: grid;
            place-items: center;
            padding: 24px;
            background:
              radial-gradient(circle at 50% 0%, rgba(182, 132, 72, 0.18), transparent 34%),
              radial-gradient(circle at 20% 20%, rgba(85, 64, 180, 0.18), transparent 32%),
              #07070b;
            color: rgba(255, 255, 255, 0.92);
          }

          .checkout-sign-loading {
            font-size: 15px;
            font-weight: 800;
            opacity: 0.8;
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="checkout-sign-page">
      <div className="stars stars-one" aria-hidden="true" />
      <div className="stars stars-two" aria-hidden="true" />

      <section className="checkout-sign-shell" aria-label={ui.title}>
        <header className="checkout-sign-head">
          <div className="brand-row">
            <img
              className="brand-logo"
              src="/logo-luna-astralis-transparent.png"
              alt="Luna Astralis"
            />

            <div>
              <div className="brand-name">Luna Astralis</div>
              <div className="brand-sub">Astro • Psycho</div>
            </div>
          </div>

          <div className="eyebrow">{ui.eyebrow}</div>
          <h1>{ui.title}</h1>
          <p>{ui.subtitle}</p>

          <div className="trust-row">
            <span>✦ {ui.secure}</span>
            <span>✦ {ui.click}</span>
          </div>
        </header>

        {!plan ? (
          <div className="error-box">
            <div>{ui.missingPlan}</div>
            <button
              type="button"
              onClick={() => router.push(`/${lang}/pricing`)}
            >
              {ui.back}
            </button>
          </div>
        ) : (
          <div className="sign-grid">
            {SIGNS.map((sign) => {
              const active = selected === sign.key;

              return (
                <button
                  key={sign.key}
                  type="button"
                  className={`sign-card ${active ? "is-active" : ""}`}
                  onClick={() => chooseSign(sign.key)}
                  disabled={busy}
                  aria-label={signLabel(sign.key)}
                >
                  <div className="sign-image-wrap">
                    <img
                      src={sign.image}
                      alt=""
                      className="sign-image"
                      loading="eager"
                    />
                  </div>

                  <div className="sign-name">{signLabel(sign.key)}</div>

                  {active ? (
                    <div className="sign-status">{ui.openingStripe}</div>
                  ) : (
                    <div className="sign-arrow" aria-hidden="true">
                      ✦
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {msg ? (
          <div className="status" role="status" aria-live="polite">
            {msg}
          </div>
        ) : null}

        <footer>
          <span>© {new Date().getFullYear()} Luna Astralis</span>
          <span>{ui.secure}</span>
        </footer>
      </section>

      <style jsx>{`
        .checkout-sign-page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 28px 16px 36px;
          background:
            radial-gradient(circle at 50% -10%, rgba(211, 161, 86, 0.20), transparent 30%),
            radial-gradient(circle at 15% 20%, rgba(91, 66, 190, 0.22), transparent 31%),
            radial-gradient(circle at 85% 26%, rgba(31, 113, 170, 0.16), transparent 31%),
            linear-gradient(180deg, #0b0a12 0%, #07070b 58%, #050507 100%);
          color: rgba(255, 255, 255, 0.94);
        }

        .checkout-sign-shell {
          position: relative;
          z-index: 2;
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .checkout-sign-head {
          max-width: 820px;
          margin: 0 auto 28px;
          text-align: center;
        }

        .brand-row {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
          text-align: left;
        }

        .brand-logo {
          width: 44px;
          height: 44px;
          object-fit: contain;
        }

        .brand-name {
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.1px;
        }

        .brand-sub {
          margin-top: 2px;
          font-size: 11px;
          opacity: 0.68;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 7px 11px;
          margin-bottom: 13px;
          border: 1px solid rgba(217, 171, 92, 0.28);
          border-radius: 999px;
          background: rgba(214, 163, 86, 0.08);
          color: #e5c486;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.2px;
        }

        h1 {
          margin: 0;
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.02;
          letter-spacing: -1.5px;
        }

        p {
          max-width: 720px;
          margin: 14px auto 0;
          font-size: 16px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.72);
        }

        .trust-row {
          display: flex;
          justify-content: center;
          gap: 10px 18px;
          flex-wrap: wrap;
          margin-top: 18px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.68);
        }

        .sign-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .sign-card {
          position: relative;
          display: flex;
          min-height: 230px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 18px 14px 16px;
          border: 1px solid rgba(225, 190, 126, 0.18);
          border-radius: 22px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.025));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 18px 50px rgba(0, 0, 0, 0.28);
          color: rgba(255, 255, 255, 0.96);
          cursor: pointer;
          transition:
            transform 160ms ease,
            border-color 160ms ease,
            box-shadow 160ms ease,
            background 160ms ease;
          -webkit-tap-highlight-color: transparent;
        }

        .sign-card:hover:not(:disabled) {
          transform: translateY(-4px);
          border-color: rgba(226, 186, 112, 0.52);
          background:
            linear-gradient(180deg, rgba(220, 170, 90, 0.10), rgba(255, 255, 255, 0.035));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 22px 58px rgba(0, 0, 0, 0.40),
            0 0 34px rgba(211, 159, 79, 0.08);
        }

        .sign-card.is-active {
          border-color: rgba(237, 196, 117, 0.72);
          background:
            linear-gradient(180deg, rgba(219, 165, 83, 0.14), rgba(255, 255, 255, 0.04));
          box-shadow:
            0 0 0 1px rgba(233, 190, 109, 0.12),
            0 20px 60px rgba(0, 0, 0, 0.45),
            0 0 44px rgba(210, 156, 76, 0.12);
        }

        .sign-card:disabled {
          cursor: default;
        }

        .sign-image-wrap {
          display: grid;
          width: 142px;
          height: 142px;
          place-items: center;
          margin-bottom: 8px;
        }

        .sign-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 18px rgba(218, 169, 84, 0.14));
          pointer-events: none;
          user-select: none;
        }

        .sign-name {
          margin-top: 3px;
          font-size: 17px;
          font-weight: 900;
          letter-spacing: 0.1px;
        }

        .sign-arrow {
          margin-top: 8px;
          color: rgba(226, 184, 107, 0.78);
          font-size: 11px;
        }

        .sign-status {
          min-height: 14px;
          margin-top: 8px;
          color: #e8c98d;
          font-size: 11px;
          font-weight: 800;
        }

        .status {
          width: fit-content;
          max-width: 720px;
          margin: 20px auto 0;
          padding: 10px 14px;
          border: 1px solid rgba(226, 184, 107, 0.24);
          border-radius: 14px;
          background: rgba(226, 184, 107, 0.07);
          text-align: center;
          font-size: 13px;
        }

        .error-box {
          max-width: 560px;
          margin: 40px auto;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          text-align: center;
        }

        .error-box button {
          margin-top: 14px;
          padding: 10px 14px;
          border: 1px solid rgba(226, 184, 107, 0.34);
          border-radius: 12px;
          background: rgba(226, 184, 107, 0.10);
          color: white;
          cursor: pointer;
        }

        footer {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 26px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 11px;
          color: rgba(255, 255, 255, 0.52);
        }

        .stars {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.55;
          background-repeat: repeat;
        }

        .stars-one {
          background-image:
            radial-gradient(circle, rgba(255, 255, 255, 0.52) 0 1px, transparent 1.2px);
          background-size: 82px 82px;
          background-position: 13px 21px;
        }

        .stars-two {
          opacity: 0.25;
          background-image:
            radial-gradient(circle, rgba(220, 185, 122, 0.75) 0 1px, transparent 1.2px);
          background-size: 137px 137px;
          background-position: 48px 74px;
        }

        @media (max-width: 920px) {
          .sign-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 680px) {
          .checkout-sign-page {
            padding: 20px 12px 28px;
          }

          .checkout-sign-head {
            margin-bottom: 20px;
          }

          .sign-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .sign-card {
            min-height: 185px;
            padding: 12px 8px;
            border-radius: 18px;
          }

          .sign-image-wrap {
            width: 112px;
            height: 112px;
          }

          .sign-name {
            font-size: 15px;
          }

          .trust-row {
            font-size: 11px;
          }
        }

        @media (max-width: 380px) {
          .sign-image-wrap {
            width: 96px;
            height: 96px;
          }

          .sign-card {
            min-height: 166px;
          }
        }
      `}</style>
    </main>
  );
}
