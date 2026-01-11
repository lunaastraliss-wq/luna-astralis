// app/signup/page.tsx
"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

function safeNext(v: string | null) {
  const fallback = "/chat";
  const s = (v || "").trim();
  if (!s) return fallback;

  // Bloque URLs externes
  if (/^https?:\/\//i.test(s) || s.startsWith("//")) return fallback;

  const path = s.startsWith("/") ? s : `/${s}`;

  // évite boucles
  if (path.startsWith("/login") || path.startsWith("/signup") || path.startsWith("/auth"))
    return fallback;

  return path;
}

export default function SignupRedirectPage() {
  const sp = useSearchParams();
  const next = safeNext(sp.get("next"));

  useEffect(() => {
    const target = next ? `/login?next=${encodeURIComponent(next)}` : "/login";
    window.location.replace(target);
  }, [next]);

  return null;
}
