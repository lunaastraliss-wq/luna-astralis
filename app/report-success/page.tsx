"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ReportSuccessPage() {
  const [loading, setLoading] = useState(true);
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    async function generateReport() {
      const params = new URLSearchParams(window.location.search);
      const sessionId = params.get("session_id");

      if (!sessionId) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("/api/reports/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            session_id: sessionId,
          }),
        });

        const data = await res.json();

        if (data.pdf_url) {
          setPdfUrl(data.pdf_url);
        }
      } catch (error) {
        console.error("PDF generation error", error);
      } finally {
        setLoading(false);
      }
    }

    generateReport();
  }, []);

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
        <div style={{ fontSize: 64, marginBottom: 20 }}>
          ✨
        </div>

        <h1 style={{ fontSize: 38, marginBottom: 16 }}>
          Paiement confirmé
        </h1>

        <p style={{ fontSize: 18, opacity: 0.9 }}>
          Merci pour votre confiance.
        </p>

        {loading && (
          <p style={{ marginTop: 20, opacity: 0.75 }}>
            Votre rapport astrologique est en cours de génération...
          </p>
        )}

        {!loading && pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: 30,
              padding: "14px 32px",
              borderRadius: 999,
              textDecoration: "none",
              background: "#f4c95d",
              color: "#111",
              fontWeight: 700,
            }}
          >
            📖 Télécharger mon rapport PDF
          </a>
        )}

        {!loading && !pdfUrl && (
          <p style={{ marginTop: 20, opacity: 0.75 }}>
            La génération du rapport a rencontré un problème.
          </p>
        )}

        <div>
          <Link
            href="/carte-du-ciel"
            style={{
              display: "inline-block",
              marginTop: 30,
              color: "#fff",
              opacity: 0.8,
            }}
          >
            Retour à Luna Astralis
          </Link>
        </div>
      </div>
    </main>
  );
}
