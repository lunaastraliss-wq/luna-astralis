// app/pricing/PricingClient.tsx
"use client";







import React, { useEffect, useMemo, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import "../../css/pricing.css";

type PricingDictionary = Record<string, string>;

type PricingClientProps = {
  locale: string;
  dictionary: PricingDictionary;
};

type MsgType = "ok" | "err" | "info";
const LS_SIGN_KEY = "la_sign";

function safeNext(v: string | null, locale: string) {
  const s = (v || "").trim();
  const fallback = `/${locale}/chat`;
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

export default function PricingClient({
  locale,
  dictionary,
}: PricingClientProps) {
  const __i18n = dictionary;
  const router = useRouter();
  const sp = useSearchParams();
  const supabase = useMemo(() => createClientComponentClient(), []);

  const [msg, setMsg] = useState<{ text: string; type: MsgType } | null>(null);
  const [busyPlan, setBusyPlan] = useState<string | null>(null);
  const autoStartedRef = useRef(false);

  const y = useMemo(() => new Date().getFullYear(), []);

  const nextRaw = sp.get("next");
  const nextUrl = useMemo(() => safeNext(nextRaw, locale), [nextRaw, locale]);
  const nextEnc = useMemo(() => encodeURIComponent(nextUrl), [nextUrl]);

  const showMsg = useCallback((text: string, type: MsgType = "info") => {
    setMsg({ text, type });
  }, []);

  // Messages Stripe (retour checkout)
  useEffect(() => {
    const canceled = sp.get("canceled");
    const paid = sp.get("paid");

    if (canceled === "1") {
      showMsg(ui.canceled, "info");
    } else if (paid === "1") {
      showMsg(ui.paid, "ok");
    } else {
      setMsg(null);
    }
  }, [sp, showMsg]);

  async function startCheckout(plan: string) {
    try {
      setBusyPlan(plan);
      showMsg(ui.checking, "info");

      const { data } = await supabase.auth.getSession();
      const authed = !!data?.session?.user?.id;

      // URL de retour (après login/onboarding) = pricing + plan + next
      const back = `/${locale}/pricing?plan=${encodeURIComponent(plan)}&next=${encodeURIComponent(nextUrl)}`;

      // ✅ pas connecté -> LOGIN, puis ONBOARDING, puis retour pricing (plan)
      if (!authed) {
        const afterLogin = `/${locale}/onboarding/sign?next=${encodeURIComponent(back)}`;
        router.push(`/${locale}/login?next=${encodeURIComponent(afterLogin)}`);
        setBusyPlan(null);
        return;
      }

      // ✅ connecté mais pas de signe -> onboarding puis retour pricing (plan)
      const s = getStoredSign();
      if (!s) {
        router.push(`/${locale}/onboarding/sign?next=${encodeURIComponent(back)}`);
        setBusyPlan(null);
        return;
      }

      // ✅ connecté + signe ok -> checkout
      showMsg(ui.openingStripe, "info");

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": __i18n["application_json"] },
        body: JSON.stringify({ plan, next: nextUrl }),
      });

      const out = (await res.json().catch(() => ({}))) as any;
      if (!res.ok) throw new Error(out?.error || ui.checkoutError);
      if (!out?.url) throw new Error(ui.missingStripeUrl);

      // (optionnel) enlève ?plan=... pour éviter de relancer si l’utilisateur revient en arrière
      try {
        router.replace(`/${locale}/pricing?next=${nextEnc}`);
      } catch {}

      window.location.href = out.url;
    } catch (err: any) {
      setBusyPlan(null);
      showMsg(ui.errorPrefix + (err?.message || String(err)), "err");
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

  const ui = {
    fr: {
      home: "Accueil",
      pricing: "Tarifs",
      back: "Retour",
      title: "TARIFS",
      info: "Informations",
      trust: "Confiance",
      plans: "Formules",
      month: "/ mois",
      year: "/ an",
      redirect: "Redirection…",
      unlock: "Débloquer la réponse",
      unlimited: "Accès illimité 24h/7",
      chooseYearly: "Choisir l’annuel",
      yearlyUnlimited: "Accès illimité annuel",
      canceled: "Paiement annulé. Tu peux réessayer quand tu veux.",
      paid: "Paiement reçu. Merci ✨ Tu peux retourner au chat.",
      checking: "Vérification…",
      openingStripe: "Ouverture de Stripe…",
      checkoutError: "Erreur checkout.",
      missingStripeUrl: "URL Stripe manquante.",
      errorPrefix: "Erreur: ",
    },
    en: {
      home: "Home",
      pricing: "Pricing",
      back: "Back",
      title: "PRICING",
      info: "Information",
      trust: "Trust",
      plans: "Plans",
      month: "/ month",
      year: "/ year",
      redirect: "Redirecting…",
      unlock: "Unlock the answer",
      unlimited: "Unlimited access 24/7",
      chooseYearly: "Choose annual",
      yearlyUnlimited: "Annual unlimited access",
      canceled: "Payment canceled. You can try again anytime.",
      paid: "Payment received. Thank you ✨ You can return to the chat.",
      checking: "Checking…",
      openingStripe: "Opening Stripe…",
      checkoutError: "Checkout error.",
      missingStripeUrl: "Missing Stripe URL.",
      errorPrefix: "Error: ",
    },
    es: {
      home: "Inicio",
      pricing: "Precios",
      back: "Volver",
      title: "PRECIOS",
      info: "Información",
      trust: "Confianza",
      plans: "Planes",
      month: "/ mes",
      year: "/ año",
      redirect: "Redirigiendo…",
      unlock: "Desbloquear la respuesta",
      unlimited: "Acceso ilimitado 24/7",
      chooseYearly: "Elegir anual",
      yearlyUnlimited: "Acceso ilimitado anual",
      canceled: "Pago cancelado. Puedes intentarlo de nuevo cuando quieras.",
      paid: "Pago recibido. Gracias ✨ Puedes volver al chat.",
      checking: "Verificando…",
      openingStripe: "Abriendo Stripe…",
      checkoutError: "Error de pago.",
      missingStripeUrl: "Falta la URL de Stripe.",
      errorPrefix: "Error: ",
    },
    de: {
      home: "Startseite",
      pricing: "Preise",
      back: "Zurück",
      title: "PREISE",
      info: "Informationen",
      trust: "Vertrauen",
      plans: "Tarife",
      month: "/ Monat",
      year: "/ Jahr",
      redirect: "Weiterleitung…",
      unlock: "Antwort freischalten",
      unlimited: "Unbegrenzter Zugang 24/7",
      chooseYearly: "Jahresplan wählen",
      yearlyUnlimited: "Unbegrenzter Jahreszugang",
      canceled: "Zahlung abgebrochen. Du kannst es jederzeit erneut versuchen.",
      paid: "Zahlung erhalten. Danke ✨ Du kannst zum Chat zurückkehren.",
      checking: "Überprüfung…",
      openingStripe: "Stripe wird geöffnet…",
      checkoutError: "Checkout-Fehler.",
      missingStripeUrl: "Stripe-URL fehlt.",
      errorPrefix: "Fehler: ",
    },
    it: {
      home: "Home",
      pricing: "Prezzi",
      back: "Indietro",
      title: "PREZZI",
      info: "Informazioni",
      trust: "Fiducia",
      plans: "Piani",
      month: "/ mese",
      year: "/ anno",
      redirect: "Reindirizzamento…",
      unlock: "Sblocca la risposta",
      unlimited: "Accesso illimitato 24/7",
      chooseYearly: "Scegli annuale",
      yearlyUnlimited: "Accesso illimitato annuale",
      canceled: "Pagamento annullato. Puoi riprovare quando vuoi.",
      paid: "Pagamento ricevuto. Grazie ✨ Puoi tornare alla chat.",
      checking: "Verifica…",
      openingStripe: "Apertura di Stripe…",
      checkoutError: "Errore di checkout.",
      missingStripeUrl: "URL Stripe mancante.",
      errorPrefix: "Errore: ",
    },
    pt: {
      home: "Início",
      pricing: "Preços",
      back: "Voltar",
      title: "PREÇOS",
      info: "Informações",
      trust: "Confiança",
      plans: "Planos",
      month: "/ mês",
      year: "/ ano",
      redirect: "Redirecionando…",
      unlock: "Desbloquear a resposta",
      unlimited: "Acesso ilimitado 24/7",
      chooseYearly: "Escolher anual",
      yearlyUnlimited: "Acesso ilimitado anual",
      canceled: "Pagamento cancelado. Você pode tentar novamente quando quiser.",
      paid: "Pagamento recebido. Obrigado ✨ Você pode voltar ao chat.",
      checking: "Verificando…",
      openingStripe: "Abrindo Stripe…",
      checkoutError: "Erro no checkout.",
      missingStripeUrl: "URL do Stripe ausente.",
      errorPrefix: "Erro: ",
    },
  }[locale as "fr" | "en" | "es" | "de" | "it" | "pt"] ?? {
    home: "Accueil",
    pricing: "Tarifs",
    back: "Retour",
    title: "TARIFS",
    info: "Informations",
    trust: "Confiance",
    plans: "Formules",
    month: "/ mois",
    year: "/ an",
    redirect: "Redirection…",
    unlock: "Débloquer la réponse",
    unlimited: "Accès illimité 24h/7",
    chooseYearly: "Choisir l’annuel",
    yearlyUnlimited: "Accès illimité annuel",
    canceled: "Paiement annulé. Tu peux réessayer quand tu veux.",
    paid: "Paiement reçu. Merci ✨ Tu peux retourner au chat.",
    checking: "Vérification…",
    openingStripe: "Ouverture de Stripe…",
    checkoutError: "Erreur checkout.",
    missingStripeUrl: "URL Stripe manquante.",
    errorPrefix: "Erreur: ",
  };

  const msgClass =
    msg?.type === "ok" ? "is-ok" : msg?.type === "err" ? "is-err" : msg?.type === "info" ? "is-info" : "";

  return (
    <div className="pricing-body pricing-page">
      <header className="top" role="banner">
        <Link className="brand" href={`/${locale}`} aria-label={__i18n["accueil_luna_astralis"]}>
          <div className="logo" aria-hidden="true">
            <img src="/logo-luna-astralis-transparent.png" alt="" />
          </div>

          <div className="brand-text">
            <div className="brand-name">{__i18n["luna_astralis"]}</div>
            <div className="brand-sub">{__i18n["astro_psycho"]}</div>
          </div>
        </Link>

        <nav className="nav" aria-label={__i18n["navigation_principale"]}>
          <Link href={`/${locale}`}>{ui.home}</Link>
          <Link className="active" href={`/${locale}/pricing?next=${nextEnc}`}>
            {ui.pricing}
          </Link>
          <Link className="btn btn-small btn-ghost" href={nextUrl || `/${locale}/chat`}>
            {ui.back}
          </Link>
        </nav>
      </header>

      <main className="wrap" role="main">
        {/* ===========================
            HERO
        =========================== */}
        <section className="pricing-hero" aria-label={__i18n["presentation_des_tarifs"]}>
          <div className="pricing-hero-inner">
            <div className="pricing-kicker">{__i18n["acces_24h_7"]}</div>
            <div className="pricing-kicker pricing-kicker-alt">{ui.title}</div>

            <h1 className="pricing-title">{__i18n["debloque_une_direction_claire_quand_tu_es_dans_le_flou"]}</h1>

            <p className="pricing-subtitle">{__i18n["paiement_securise_acces_immediat_annule_quand_tu_veux"]}</p>

            <div className="pricing-chips" aria-label={ui.info}>
              <span className="chip">{__i18n["prix_en_dollars_us_usd"]}</span>
              <span className="chip">{__i18n["change_ou_annule_en_tout_temps"]}</span>
              <span className="chip">{__i18n["reponse_claire_en_quelques_minutes"]}</span>
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
        <section className="section" aria-label={ui.trust}>
          <div className="pricing-trust">
            <div className="trust-line">{__i18n["une_guidance_douce_et_directe_pour_comprendre_ce_qui_se_joue"]}</div>
            <div className="trust-sub">{__i18n["paiement_securise_annulation_simple_aucun_frais_cache"]}</div>
          </div>
        </section>

        {/* ===========================
            PLANS
        =========================== */}
        <section className="section" aria-label={ui.plans}>
          <div className="pricing-grid">
            {/* Mensuel — Essentiel */}
            <article className="price-card" aria-label={__i18n["mensuel_debloquer_la_reponse"]}>
              <div className="price-head">
                <div className="price-name">{__i18n["debloquer_la_reponse"]}</div>
                <div className="price-value">
                  <span className="price-now">{__i18n["4_99_nbsp"]}</span>
                  <span className="price-period">{ui.month}</span>
                </div>
                <div className="price-mini">{__i18n["quand_tu_veux_une_direction_claire_tout_de_suite"]}</div>
              </div>

              <ul className="price-features">
                <li>{__i18n["clarifier_ce_qui_se_passe_vraiment"]}</li>
                <li>{__i18n["voir_ta_part_l_autre_part_sans_te_juger"]}</li>
                <li>{__i18n["savoir_quoi_faire_maintenant"]}</li>
                <li>{__i18n["acces_24h_7_mobile"]}</li>
              </ul>

              <button
                className="price-cta"
                aria-busy={busyPlan === "monthly_essential"}
                type="button"
                onClick={() => startCheckout("monthly_essential")}
                disabled={!!busyPlan}
              >
                {busyPlan === "monthly_essential" ? ui.redirect : ui.unlock}
              </button>
            </article>

            {/* Mensuel — Illimité (populaire) */}
            <div className="price-halo" role="group" aria-label={__i18n["mensuel_illimite_le_plus_populaire"]}>
              <article className="price-card price-featured" aria-label={__i18n["mensuel_aller_au_fond_des_choses"]}>
                <div className="price-badge">{__i18n["le_plus_populaire"]}</div>

                <div className="price-head">
                  <div className="price-name">{__i18n["aller_au_fond_des_choses"]}</div>
                  <div className="price-value">
                    <span className="price-now">{__i18n["9_99_nbsp"]}</span>
                    <span className="price-period">{ui.month}</span>
                  </div>
                  <div className="price-mini">{__i18n["pour_avancer_avec_un_vrai_fil_conducteur"]}</div>
                </div>

                <ul className="price-features">
                  <li>{__i18n["explorer_en_profondeur_patterns_emotions_repetitions"]}</li>
                  <li>{__i18n["historique_pour_suivre_ton_evolution"]}</li>
                  <li>{__i18n["guidance_plus_complete_astro_psycho"]}</li>
                  <li>{__i18n["acces_24h_7_sans_limites"]}</li>
                </ul>

                <button
                  className="price-cta btn-primary"
                  aria-busy={busyPlan === "monthly_unlimited"}
                  type="button"
                  onClick={() => startCheckout("monthly_unlimited")}
                  disabled={!!busyPlan}
                >
                  {busyPlan === "monthly_unlimited" ? ui.redirect : ui.unlimited}
                </button>
              </article>
            </div>

            {/* ===== Annuel (à “cacher” plus bas : ici c’est juste le copy, tu gères le layout via CSS plus tard) ===== */}

            <article className="price-card" aria-label={__i18n["annuel_essentiel_pour_celles_qui_reviennent_souvent"]}>
              <div className="price-head">
                <div className="price-name">{__i18n["annuel_essentiel_pour_celles_qui_reviennent_souvent_2"]}</div>
                <div className="price-value">
                  <span className="price-was">
                    <s>{__i18n["59_99_nbsp"]}</s>
                  </span>
                  <span className="price-now">{__i18n["49_99_nbsp"]}</span>
                  <span className="price-period">{ui.year}</span>
                </div>
                <div className="price-mini">{__i18n["le_plus_economique_si_tu_utilises_luna_regulierement"]}</div>
              </div>

              <ul className="price-features">
                <li>{__i18n["direction_claire_quand_tu_en_as_besoin"]}</li>
                <li>{__i18n["un_rythme_simple_sans_pression"]}</li>
                <li>{__i18n["acces_24h_7_toute_l_annee"]}</li>
                <li>{__i18n["meilleur_prix_sur_12_mois"]}</li>
              </ul>

              <button
                className="price-cta"
                aria-busy={busyPlan === "yearly_essential"}
                type="button"
                onClick={() => startCheckout("yearly_essential")}
                disabled={!!busyPlan}
              >
                {busyPlan === "yearly_essential" ? ui.redirect : ui.chooseYearly}
              </button>
            </article>

            <article className="price-card premium" aria-label={__i18n["annuel_illimite_accompagnement_complet"]}>
              <div className="price-badge premium">{__i18n["meilleure_valeur"]}</div>

              <div className="price-head">
                <div className="price-name">{__i18n["annuel_illimite_accompagnement_complet_2"]}</div>
                <div className="price-value">
                  <span className="price-was">
                    <s>{__i18n["119_99_nbsp"]}</s>
                  </span>
                  <span className="price-now">{__i18n["99_99_nbsp"]}</span>
                  <span className="price-period">{ui.year}</span>
                </div>
                <div className="price-mini">{__i18n["si_tu_veux_un_espace_stable_pour_te_comprendre_en_profondeur"]}</div>
              </div>

              <ul className="price-features">
                <li>{__i18n["illimite_historique_complet"]}</li>
                <li>{__i18n["acces_prioritaire"]}</li>
                <li>{__i18n["evolution_future_tarot_lune_ascendant"]}</li>
                <li>{__i18n["le_meilleur_prix_par_mois"]}</li>
              </ul>

              <button
                className="price-cta btn-primary"
                aria-busy={busyPlan === "yearly_unlimited"}
                type="button"
                onClick={() => startCheckout("yearly_unlimited")}
                disabled={!!busyPlan}
              >
                {busyPlan === "yearly_unlimited" ? ui.redirect : ui.yearlyUnlimited}
              </button>
            </article>
          </div>
        </section>

        <footer className="footer" role="contentinfo">
          <div>© {y} {__i18n["luna_astralis_2"]}</div>
          <div className="footer-note">{__i18n["prix_en_usd_acces_24h_7"]}</div>
        </footer>
      </main>

      <style jsx>{`
.pricing-msg { margin: 14px 0 0; padding: 12px 14px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.14); background: rgba(255, 255, 255, 0.06); color: rgba(255, 255, 255, 0.92); line-height: 1.35; } .pricing-msg.is-ok { background: rgba(120, 255, 190, 0.1); border-color: rgba(120, 255, 190, 0.22); } .pricing-msg.is-err { background: rgba(255, 90, 90, 0.1); border-color: rgba(255, 90, 90, 0.22); } .pricing-msg.is-info { background: rgba(159, 211, 255, 0.1); border-color: rgba(159, 211, 255, 0.22); } .price-cta[aria-busy="true"] { opacity: 0.75; pointer-events: none; }
`}</style>
    </div>
  );
}
