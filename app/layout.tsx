// app/layout.tsx
import type { Metadata } from "next";
import React from "react";
import Script from "next/script";

import "./styles.css";   // variables globales, base
import "./index.css";    // home
import "./pricing.css";  // pricing
import "./auth.css";     // auth (login / signup)
// ✅ PAS de chat.css ici (il est dans /app/chat/chat.css)

export const metadata: Metadata = {
  title: "Luna Astralis — Astro & psycho",
  description: "Exploration douce et guidée",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <html lang="fr" suppressHydrationWarning>
      <body style={{ margin: 0, letterSpacing: "normal", lineHeight: 1.5 }}>
        {children}

        {/* reCAPTCHA v3 global (utilisé seulement par le chat) */}
        {siteKey ? (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
