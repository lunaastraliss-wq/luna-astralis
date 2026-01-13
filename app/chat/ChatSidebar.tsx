"use client";

import React, { useMemo, useCallback } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabase/client";

type Plan = "guest" | "free" | "premium";

type Props = {
  isAuth: boolean;
  sessionEmail: string;

  // plan logique pour l’UI (guest/free/premium)
  plan: Plan;

  // quota: seulement utile en free
  freeLeft: number | null;

  // ✅ optionnel: slug exact du forfait payé (ex: "essential-month", "unlimited-year")
  planSlug?: string | null;

  signName: string;
  signDesc: string;
  bookUrl: string;
};

const ADMIN_EMAILS = new Set([
  "kemaprintstudio@gmail.com",
  "spinoz.fr@gmail.com",
  "comptanetquebec@gmail.com",
]);

function normalizeFreeLeft(v: number | null): number | null {
  if (typeof v !== "number") return null;
  if (!Number.isFinite(v)) return null;
  return Math.max(0, Math.trunc(v));
}

function labelFromPlan(plan: Plan, planSlug?: string | null) {
  if (plan === "guest") return "Invité";
  if (plan === "free") return "Gratuit (15 messages)";
  if (plan !== "premium") return "";

  const slug = String(planSlug || "").trim().toLowerCase();
  switch (slug) {
    case "essential-month":
      return "Essentiel · Mensuel";
    case "unlimited-month":
      return "Illimité · Mensuel";
    case "essential-year":
      return "Essentiel · Annuel";
    case "unlimited-year":
      return "Illimité · Annuel";
    default:
      return "Accès premium";
  }
}

export default function ChatSidebar({
  isAuth,
  sessionEmail,
  plan,
  freeLeft,
  planSlug,
  signName,
  signDesc,
  bookUrl,
}: Props) {
  const freeLeftNorm = useMemo(() => normalizeFreeLeft(freeLeft), [freeLeft]);

  // ✅ compteur seulement si plan === "free" ET freeLeft est un nombre valide
  const showFreeCounter = plan === "free" && freeLeftNorm !== null;

  const counterText = useMemo(() => {
    if (!showFreeCounter) return "";
    if ((freeLeftNorm ?? 0) <= 0) return "Limite gratuite atteinte";
    const plural = (freeLeftNorm ?? 0) > 1 ? "s" : "";
    return `Il te reste ${freeLeftNorm} message${plural} gratuit${plural}.`;
  }, [showFreeCounter, freeLeftNorm]);

  const isAdmin = useMemo(() => {
    const email = (sessionEmail || "").toLowerCase().trim();
    return ADMIN_EMAILS.has(email);
  }, [sessionEmail]);

  const resetApp = useCallback(async () => {
    const ok = confirm(
      "Reset local (admin) : déconnexion + vider localStorage + cookies. Continuer ?"
    );
    if (!ok) return;

    try {
      await supabase.auth.signOut();
    } catch {}

    try {
      localStorage.clear();
    } catch {}

    try {
      document.cookie.split(";").forEach((c) => {
        const name = c.split("=")[0]?.trim();
        if (!name) return;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
      });
    } catch {}

    try {
      location.assign("/");
    } catch {
      location.reload();
    }
  }, []);

  const showEmail = isAuth && !!sessionEmail;

  const planLabel = useMemo(() => labelFromPlan(plan, planSlug), [plan, planSlug]);
  const showPlanBadge = plan !== "guest";

  return (
    <aside className="chat-side" aria-label="Profil IA">
      <div className="chat-side-content">
        {/* Image: desktop seulement */}
        <div className="ai-face-wrap desktop-only" aria-hidden="true">
          <img className="ai-face" src="/ia-luna-astralis.png" alt="" loading="lazy" />
        </div>

        <div className="chat-side-center">
          <p className="chat-side-p">
            <strong>Signe :</strong> {signName}
          </p>

          {/* ✅ Changer de signe */}
          <Link
            className="book-btn"
            href="/onboarding/sign?change=1&next=/chat"
            aria-label="Changer de signe"
            title="Changer de signe"
          >
            ⇄ Changer de signe
          </Link>

          <p className="chat-side-muted">{signDesc}</p>

          {!!bookUrl && (
            <a
              className="book-btn"
              href={bookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Approfondir ce signe"
              title="Approfondir ce signe"
            >
              ✦ Approfondir ce signe
            </a>
          )}

          {/* ✅ Badge forfait */}
          {showPlanBadge && (
            <p className="chat-side-plan" aria-label="Forfait">
              {plan === "premium" ? "✅ " : ""}
              {planLabel}
            </p>
          )}

          {showEmail && <p className="chat-side-email">{sessionEmail}</p>}

          <p className="chat-side-disclaimer">Outil d’exploration personnelle</p>
        </div>
      </div>

      <div className="chat-side-footer">
        {/* Compteur visible seulement en free */}
        {showFreeCounter && (
          <div className="free-counter" id="freeCounter" aria-live="polite">
            {counterText}
          </div>
        )}

        {isAdmin && (
          <button
            type="button"
            onClick={resetApp}
            className="reset-admin-btn"
            aria-label="Reset admin"
            title="Reset admin"
          >
            reset admin
          </button>
        )}
      </div>
    </aside>
  );
          }
