import __i18n from "../i18n/migrated/fr/app/layout.json";
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
  metadataBase: new URL("https://luna-astralis.app"),
  title: {
    default: __i18n["luna_astralis_astro_psycho"],
    template: __i18n["s_luna_astralis"],
  },
 description: __i18n["exploration_douce_et_guidee_a_travers_une_discussion_privee"],
  verification: {
    google: "4QYboYsN4iM2g0qJTIJSvmJ_tb5PxmLUlLdaEKV6E6I",
  },
  openGraph: {
    title: __i18n["luna_astralis_astro_psycho_2"],
    description: __i18n["exploration_douce_et_guidee_a_travers_une_discussion_privee_2"],
    url: "https://luna-astralis.app",
    siteName: __i18n["luna_astralis"],
    images: [
      {
        url: "/logo-luna-astralis.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: __i18n["luna_astralis_astro_psycho_3"],
    description: __i18n["exploration_douce_et_guidee_a_travers_une_discussion_privee_3"],
    images: ["/logo-luna-astralis.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
          {__i18n["window_datalayer_window_datalayer_function_gtag_datalayer_pu"]}
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
