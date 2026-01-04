// app/layout.tsx
import "./css/styles.css";
import "./css/pricing.css";
import "./css/chat.css";

export const metadata = {
  title: "Luna Astralis",
  description: "Astro & psycho",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
