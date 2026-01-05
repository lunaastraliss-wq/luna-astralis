// app/layout.tsx
import type { Metadata } from "next";
import React from "react";

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
  return (
    <html lang="fr" suppressHydrationWarning>
      <body style={{ margin: 0, letterSpacing: "normal", lineHeight: 1.5 }}>
        {children}
      </body>
    </html>
  );
}
