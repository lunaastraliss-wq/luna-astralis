// app/layout.tsx
import "../public/css/styles.css";
import "../public/css/index.css";
import "../public/css/pricing.css";
import "../public/css/chat.css";

export const metadata = {
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
      <body className="page-astro">{children}</body>
    </html>
  );
}
