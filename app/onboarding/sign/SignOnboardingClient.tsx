/* =========================================================
   1) NEW FILE
   app/onboarding/sign/page.tsx
   - Page onboarding pour les gens CONNECTÉS qui n'ont pas de signe
   - Choisir un signe -> sauvegarde -> redirect vers /chat?sign=...
========================================================= */

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

// ✅ adapte ce chemin selon ton projet
import { supabase } from "@/lib/supabase/client";

type Sign = { key: string; label: string };

const SIGNS: Sign[] = [
  { key: "belier", label: "Bélier ♈" },
  { key: "taureau", label: "Taureau ♉" },
  { key: "gemeaux", label: "Gémeaux ♊" },
  { key: "cancer", label: "Cancer ♋" },
  { key: "lion", label: "Lion ♌" },
  { key: "vierge", label: "Vierge ♍" },
  { key: "balance", label: "Balance ♎" },
  { key: "scorpion", label: "Scorpion ♏" },
  { key: "sagittaire", label: "Sagittaire ♐" },
  { key: "capricorne", label: "Capricorne ♑" },
  { key: "verseau", label: "Verseau ♒" },
  { key: "poissons", label: "Poissons ♓" },
];

const LS_SIGN_KEY = "la_sign";

function setCookie(name: string, value: string, maxAgeSeconds = 31536000) {
  // 1 an
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax`;
}

function getStoredSign(): string {
  if (typeof window === "undefined") return "";
  return (localStorage.getItem(LS_SIGN_KEY) || "").trim();
}

function storeSign(signKey: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LS_SIGN_KEY, signKey);
  setCookie(LS_SIGN_KEY, signKey);
}

export default function OnboardingSignPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const next = (sp.get("next") || "").trim(); // optionnel: /chat?sign=...
  const [checking, setChecking] = useState(true);
  const [authed, setAuthed] = useState(false);

  const nextUrl = useMemo(() => {
    if (next.startsWith("/")) return next;
    return "";
  }, [next]);

  useEffect(() => {
    let alive = true;

    (async () => {
      // 1) vérifier session
      const { data } = await supabase.auth.getSession();
      const isAuthed = !!data?.session?.user?.id;

      if (!alive) return;
      setAuthed(isAuthed);

      // 2) Si pas connecté -> retourne au flow normal (page signes "guest" ou home)
      if (!isAuthed) {
        router.replace("/"); // adapte si ta landing est ailleurs
        return;
      }

      // 3) Si déjà un signe stocké -> chat direct (pas besoin onboarding)
      const s = getStoredSign();
      if (s) {
        router.replace(nextUrl || `/chat?sign=${encodeURIComponent(s)}`);
        return;
      }

      setChecking(false);
    })();

    return () => {
      alive = false;
    };
  }, [router, nextUrl]);

  function choose(signKey: string) {
    storeSign(signKey);
    router.push(nextUrl || `/chat?sign=${encodeURIComponent(signKey)}`);
  }

  if (checking) {
    return (
      <main style={{ padding: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700 }}>Chargement…</h1>
      </main>
    );
  }

  // safety: si authed false, l'effet a déjà redirect
  if (!authed) return null;

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>
        Choisis ton signe pour commencer
      </h1>
      <p style={{ marginBottom: 18, opacity: 0.85 }}>
        Tu as droit à <b>15 messages gratuits à vie</b>. Après, tu pourras débloquer
        l’accès complet si tu le souhaites.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 12,
        }}
      >
        {SIGNS.map((s) => (
          <button
            key={s.key}
            onClick={() => choose(s.key)}
            style={{
              padding: 14,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.06)",
              textAlign: "left",
              cursor: "pointer",
              fontSize: 16,
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 18, opacity: 0.8 }}>
        <Link href="/chat" style={{ textDecoration: "underline" }}>
          Aller au chat
        </Link>
      </div>
    </main>
  );
      }
