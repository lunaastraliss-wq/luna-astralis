// app/layout.tsx
import type { Metadata } from "next";

import "../public/css/styles.css";
import "../public/css/index.css";
import "../public/css/pricing.css";
import "../public/css/chat.css";
import "../public/css/auth.css"; // ✅ pour /login et /signup

export const metadata: Metadata = {
  title: "Luna Astralis — Astro & psycho",
  description: "Exploration douce et guidée",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.luna-astralis.app"),
  openGraph: {
    title: "Luna Astralis — Astro & psycho",
    description: "Exploration douce et guidée",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
