// app/layout.tsx
import type { Metadata } from "next";
import React from "react";
import Script from "next/script";

import "./styles.css";
import "./index.css";
import "./pricing.css";
import "./auth.css";

import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Luna Astralis — Astro & psycho",
  description: "Exploration douce et guidée",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* ✅ Google tag (gtag.js) - Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17878472225"
          strategy="afterInteractive"
        />

        {/* ✅ Init gtag + Consent Mode (DEFAULT = REFUSÉ) */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;

            // Consent Mode : par défaut, on refuse tout (jusqu'au choix utilisateur)
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

        {/* reCAPTCHA v3 global (utilisé seulement si tu l'appelles dans le chat) */}
        {siteKey ? (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
            strategy="afterInteractive"
          />
        ) : null}
      </head>

      <body style={{ margin: 0, letterSpacing: "normal", lineHeight: 1.5 }}>
        {children}

        {/* ✅ Footer support */}
        <Footer />

        {/* ✅ Bandeau cookies Luna Astralis (doit appeler gtag('consent','update',...) ) */}
        <CookieBanner />
      </body>
    </html>
  );
}
