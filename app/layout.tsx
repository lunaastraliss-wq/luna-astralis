// app/layout.tsx
import type { Metadata } from "next";

import "./styles/styles.css";
import "./styles/index.css";
import "./styles/pricing.css";
import "./styles/chat.css";
import "./styles/auth.css";

export const metadata: Metadata = {
  title: "Luna Astralis — Astro & psycho",
  description: "Exploration douce et guidée",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

