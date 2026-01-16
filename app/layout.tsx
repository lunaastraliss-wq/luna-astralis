// app/layout.tsx
import type { Metadata } from "next";
import React from "react";
import Script from "next/script";

import "./styles.css";   // variables globales, base
import "./index.css";    // home
import "./pricing.css";  // pricing
import "./auth.css";     // auth (login / signup)
// ✅ PAS de chat.css ici (il est dans /app/chat/chat.css)

import CookieBanner from "@/components/CookieBanner";

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

        {/* ✅ Google tag (gtag.js) - Google Ads */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17878472225"
          strategy="afterInteractive"
        />

        {/* ✅ Init gtag + Consent Mode (DEFAULT = REFUSÉ) */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;

            // ✅ Consent Mode : par défaut, on refuse tout (jusqu'au choix utilisateur)
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });

            gtag('js', new Date());
            gtag('config', 'AW-17878472225');
          `}
        </Script>

        {/* reCAPTCHA v3 global (utilisé seulement par le chat) */}
        {siteKey ? (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
            strategy="afterInteractive"
          />
        ) : null}

        {/* ✅ Bandeau cookies Luna Astralis */}
        <CookieBanner />
      </body>
    </html>
  );
}
