"use client";

import Link from "next/link";

export default function ReportSuccessPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        background: "#070b18",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 650,
          width: "100%",
          textAlign: "center",
          padding: 40,
          borderRadius: 24,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(244,201,93,.25)",
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 20 }}>✨</div>

        <h1 style={{ fontSize: 38, marginBottom: 16 }}>
          Paiement confirmé
        </h1>

        <p style={{ fontSize: 18, opacity: 0.9, lineHeight: 1.7 }}>
          Merci pour votre confiance.
        </p>

        <p style={{ marginTop: 12, opacity: 0.75, lineHeight: 1.7 }}>
          Votre rapport astrologique est en cours de génération.
          Il sera disponible dans quelques instants.
        </p>

        <Link
          href="/carte-du-ciel"
          style={{
            display: "inline-block",
            marginTop: 32,
            padding: "14px 32px",
            borderRadius: 999,
            textDecoration: "none",
            background: "#f4c95d",
            color: "#111",
            fontWeight: 700,
          }}
        >
          Retour à Luna Astralis
        </Link>
      </div>
    </main>
  );
}
