// app/layout.tsx
import type { Metadata } from "next";
import React from "react";

import "./styles.css"; // variables globales, base
import "./index.css"; // home
import "./pricing.css"; // pricing
import "./chat.css"; // chat
import "./auth.css"; // auth (login / signup)

export const metadata: Metadata = {
  title: "Luna Astralis — Astro & psycho",
  description: "Exploration douce et guidée",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        style={{
          // ✅ anti “lettres trop collées” si un CSS global force letter-spacing
          letterSpacing: "normal",
          // ✅ meilleure lisibilité par défaut
          lineHeight: 1.5,
          // ✅ évite les écarts bizarres (certaines feuilles mettent margin/padding)
          margin: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
