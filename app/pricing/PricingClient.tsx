// app/pricing/PricingClient.tsx
"use client";

import React, { useEffect, useMemo, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type MsgType = "ok" | "err" | "info";
const LS_SIGN_KEY = "la_sign";

function safeNext(v: string | null) {
  const s = (v || "").trim();
  const fallback = "/chat";
  if (!s) return fallback;

  if (/^https?:\/\//i.test(s) || s.startsWith("//")) return fallback;

  const path = s.startsWith("/") ? s : `/${s}`;
  if (path.startsWith("/login") || path.startsWith("/auth")) return fallback;

  return path;
}

function getStoredSign(): string {
  if (typeof window === "undefined") return "";
  try {
    return (localStorage.getItem(LS_SIGN_KEY) || "").trim();
  } catch {
    return "";
  }
}

export default function PricingClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const supabase = useMemo(() => createClientComponentClient(), []);

  const [msg, setMsg] = useState<{ text: string; type: MsgType } | null>(null);
  const [busyPlan, setBusyPlan] = useState<string | null>(null);
  const autoStartedRef = useRef(false);

  const y = useMemo(() => new Date().getFullYear(), []);

  const nextRaw = sp.get("next");
  const nextUrl = useMemo(() => safeNext(nextRaw), [nextRaw]);
  const nextEnc = useMemo(() => encodeURIComponent(nextUrl), [nextUrl]);

  const showMsg = useCallback((text: string, type: MsgType = "info") => {
    setMsg({ text, type });
  }, []);

  // Messages Stripe (retour checkout)
  useEffect(() => {
    const canceled = sp.get("canceled");
    const paid = sp.get("paid");

    if (canceled === "1") {
      showMsg("Paiement annulé. Tu peux réessayer quand tu veux.", "info");
    } else if (paid === "1") {
      showMsg("Paiement reçu. Merci ✨ Tu peux retourner au chat.", "ok");
    } else {
      setMsg(null);
    }
  }, [sp, showMsg]);

  async function startCheckout(plan: string) {
    try {
      setBusyPlan(plan);
      showMsg("Vérification…", "info");

      const { data } = await supabase.auth.getSession();
      const authed = !!data?.session?.user?.id;

      // URL de retour (après login/onboarding) = pricing + plan + next
      const back = `/pricing?plan=${encodeURIComponent(plan)}&next=${encodeURIComponent(nextUrl)}`;

      // ✅ pas connecté -> LOGIN, puis ONBOARDING, puis retour pricing (plan)
      if (!authed) {
        const afterLogin = `/onboarding/sign?next=${encodeURIComponent(back)}`;
        router.push(`/login?next=${encodeURIComponent(afterLogin)}`);
        setBusyPlan(null);
        return;
      }

      // ✅ connecté mais pas de signe -> onboarding puis retour pricing (plan)
      const s = getStoredSign();
      if (!s) {
        router.push(`/onboarding/sign?next=${encodeURIComponent(back)}`);
        setBusyPlan(null);
        return;
      }

      // ✅ connecté + signe ok -> checkout
      showMsg("Ouverture de Stripe…", "info");

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, next: nextUrl }),
      });

      const out = (await res.json().catch(() => ({}))) as any;
      if (!res.ok) throw new Error(out?.error || "Erreur checkout.");
      if (!out?.url) throw new Error("URL Stripe manquante.");

      // (optionnel) enlève ?plan=... pour éviter de relancer si l’utilisateur revient en arrière
      try {
        router.replace(`/pricing?next=${nextEnc}`);
      } catch {}

      window.location.href = out.url;
    } catch (err: any) {
      setBusyPlan(null);
      showMsg("Erreur: " + (err?.message || String(err)), "err");
    }
  }

  // ✅ Auto-checkout après login/onboarding si ?plan=... est présent
  useEffect(() => {
    const plan = sp.get("plan");
    if (!plan) return;
    if (autoStartedRef.current) return;

    let alive = true;

    (async () => {
      try {
        const { data } = await supabase.auth.getSession();
        if (!alive) return;

        const authed = !!data?.session?.user?.id;
        if (!authed) return;

        const s = getStoredSign();
        if (!s) return; // onboarding pas fait encore

        autoStartedRef.current = true;
        startCheckout(plan);
      } catch {}
    })();

    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sp, supabase]);

  const msgClass =
    msg?.type === "ok" ? "is-ok" : msg?.type === "err" ? "is-err" : msg?.type === "info" ? "is-info" : "";

  return (
    <div className="pricing-body pricing-page">
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

        <nav className="nav" aria-label="Navigation principale">
          <Link href="/">Accueil</Link>
          <Link className="active" href={`/pricing?next=${nextEnc}`}>
            Tarifs
          </Link>
          <Link className="btn btn-small btn-ghost" href={nextUrl || "/chat"}>
            Retour
          </Link>
        </nav>
      </header>

      <main className="wrap" role="main">
        {/* ===========================
            HERO
        =========================== */}
        <section className="pricing-hero" aria-label="Présentation des tarifs">
          <div className="pricing-hero-inner">
            <div className="pricing-kicker">Accès 24h/7</div>
            <div className="pricing-kicker pricing-kicker-alt">TARIFS</div>

            <h1 className="pricing-title">Débloque une direction claire quand tu es dans le flou</h1>

            <p className="pricing-subtitle">Paiement sécurisé • Accès immédiat • Annule quand tu veux</p>

            <div className="pricing-chips" aria-label="Informations">
              <span className="chip">Prix en dollars US (USD)</span>
              <span className="chip">Change ou annule en tout temps</span>
              <span className="chip">Réponse claire en quelques minutes</span>
            </div>

            {msg ? (
              <div role="status" aria-live="polite" className={`pricing-msg ${msgClass}`}>
                {msg.text}
              </div>
            ) : null}
          </div>
        </section>

        {/* ===========================
            TRUST
        =========================== */}
        <section className="section" aria-label="Confiance">
          <div className="pricing-trust">
            <div className="trust-line">✦ Une guidance douce et directe pour comprendre ce qui se joue — et savoir quoi faire maintenant.</div>
            <div className="trust-sub">Paiement sécurisé • Annulation simple • Aucun frais caché</div>
          </div>
        </section>

        {/* ===========================
            PLANS
        =========================== */}
        <section className="section" aria-label="Formules">
          <div className="pricing-grid">
            {/* Mensuel — Essentiel */}
            <article className="price-card" aria-label="Mensuel — Débloquer la réponse">
              <div className="price-head">
                <div className="price-name">Débloquer la réponse</div>
                <div className="price-value">
                  <span className="price-now">4,99&nbsp;$</span>
                  <span className="price-period">/ mois</span>
                </div>
                <div className="price-mini">Quand tu veux une direction claire, tout de suite.</div>
              </div>

              <ul className="price-features">
                <li>Clarifier ce qui se passe vraiment</li>
                <li>Voir ta part + l’autre part (sans te juger)</li>
                <li>Savoir quoi faire maintenant</li>
                <li>Accès 24h/7 – mobile</li>
              </ul>

              <button
                className="price-cta"
                aria-busy={busyPlan === "monthly_essential"}
                type="button"
                onClick={() => startCheckout("monthly_essential")}
                disabled={!!busyPlan}
              >
                {busyPlan === "monthly_essential" ? "Redirection…" : "Débloquer la réponse"}
              </button>
            </article>

            {/* Mensuel — Illimité (populaire) */}
            <div className="price-halo" role="group" aria-label="Mensuel — Illimité (le plus populaire)">
              <article className="price-card price-featured" aria-label="Mensuel — Aller au fond des choses">
                <div className="price-badge">LE PLUS POPULAIRE</div>

                <div className="price-head">
                  <div className="price-name">Aller au fond des choses</div>
                  <div className="price-value">
                    <span className="price-now">9,99&nbsp;$</span>
                    <span className="price-period">/ mois</span>
                  </div>
                  <div className="price-mini">Pour avancer avec un vrai fil conducteur.</div>
                </div>

                <ul className="price-features">
                  <li>Explorer en profondeur (patterns, émotions, répétitions)</li>
                  <li>Historique pour suivre ton évolution</li>
                  <li>Guidance plus complète (astro + psycho)</li>
                  <li>Accès 24h/7 – sans limites</li>
                </ul>

                <button
                  className="price-cta btn-primary"
                  aria-busy={busyPlan === "monthly_unlimited"}
                  type="button"
                  onClick={() => startCheckout("monthly_unlimited")}
                  disabled={!!busyPlan}
                >
                  {busyPlan === "monthly_unlimited" ? "Redirection…" : "Accès illimité 24h/7"}
                </button>
              </article>
            </div>

            {/* ===== Annuel (à “cacher” plus bas : ici c’est juste le copy, tu gères le layout via CSS plus tard) ===== */}

            <article className="price-card" aria-label="Annuel — Essentiel (pour celles qui reviennent souvent)">
              <div className="price-head">
                <div className="price-name">Annuel — Essentiel (pour celles qui reviennent souvent)</div>
                <div className="price-value">
                  <span className="price-was">
                    <s>59,99&nbsp;$</s>
                  </span>
                  <span className="price-now">49,99&nbsp;$</span>
                  <span className="price-period">/ an</span>
                </div>
                <div className="price-mini">Le plus économique si tu utilises Luna régulièrement.</div>
              </div>

              <ul className="price-features">
                <li>Direction claire quand tu en as besoin</li>
                <li>Un rythme simple, sans pression</li>
                <li>Accès 24h/7 toute l’année</li>
                <li>Meilleur prix sur 12 mois</li>
              </ul>

              <button
                className="price-cta"
                aria-busy={busyPlan === "yearly_essential"}
                type="button"
                onClick={() => startCheckout("yearly_essential")}
                disabled={!!busyPlan}
              >
                {busyPlan === "yearly_essential" ? "Redirection…" : "Choisir l’annuel"}
              </button>
            </article>

            <article className="price-card premium" aria-label="Annuel — Illimité (accompagnement complet)">
              <div className="price-badge premium">MEILLEURE VALEUR</div>

              <div className="price-head">
                <div className="price-name">Annuel — Illimité (accompagnement complet)</div>
                <div className="price-value">
                  <span className="price-was">
                    <s>119,99&nbsp;$</s>
                  </span>
                  <span className="price-now">99,99&nbsp;$</span>
                  <span className="price-period">/ an</span>
                </div>
                <div className="price-mini">Si tu veux un espace stable pour te comprendre en profondeur.</div>
              </div>

              <ul className="price-features">
                <li>Illimité + historique complet</li>
                <li>Accès prioritaire</li>
                <li>Évolution future (Tarot, Lune, Ascendant)</li>
                <li>Le meilleur prix par mois</li>
              </ul>

              <button
                className="price-cta btn-primary"
                aria-busy={busyPlan === "yearly_unlimited"}
                type="button"
                onClick={() => startCheckout("yearly_unlimited")}
                disabled={!!busyPlan}
              >
                {busyPlan === "yearly_unlimited" ? "Redirection…" : "Accès illimité annuel"}
              </button>
            </article>
          </div>
        </section>

        <footer className="footer" role="contentinfo">
          <div>© {y} Luna Astralis</div>
          <div className="footer-note">Prix en USD • Accès 24h/7</div>
        </footer>
      </main>

      <style jsx>{`
        .pricing-msg {
          margin: 14px 0 0;
          padding: 12px 14px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.35;
        }
        .pricing-msg.is-ok {
          background: rgba(120, 255, 190, 0.1);
          border-color: rgba(120, 255, 190, 0.22);
        }
        .pricing-msg.is-err {
          background: rgba(255, 90, 90, 0.1);
          border-color: rgba(255, 90, 90, 0.22);
        }
        .pricing-msg.is-info {
          background: rgba(159, 211, 255, 0.1);
          border-color: rgba(159, 211, 255, 0.22);
        }
        .price-cta[aria-busy="true"] {
          opacity: 0.75;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
