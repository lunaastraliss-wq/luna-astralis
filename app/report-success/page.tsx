"use client";




import __i18n from "../../i18n/migrated/fr/app/report-success/page.json";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ReportSuccessPage() {
  const [loading, setLoading] = useState(true);
  const [pdfUrl, setPdfUrl] = useState("");
  const [errorDetail, setErrorDetail] = useState("");

  useEffect(() => {
    async function generateReport() {
      const params = new URLSearchParams(window.location.search);
      const sessionId = params.get("session_id");

      if (!sessionId) {
        setErrorDetail("Le numéro de session Stripe est manquant.");
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

        const contentType = res.headers.get("content-type");

        if (!contentType?.includes("application/json")) {
          const responseText = await res.text();

          throw new Error(
            `La route de génération n'a pas retourné du JSON. Statut : ${res.status}. Réponse : ${responseText}`,
          );
        }

        const data = await res.json();

        if (!res.ok) {
          throw new Error(
            data?.error ||
              data?.message ||
              `Erreur pendant la génération du rapport (${res.status}).`,
          );
        }

        if (!data?.pdf_url) {
          throw new Error(
            data?.error ||
              data?.message ||
              "Le rapport a été généré, mais aucune adresse PDF n'a été retournée.",
          );
        }

        setPdfUrl(data.pdf_url);
      } catch (error: unknown) {
        console.error(
          "PDF generation error:",
          error,
        );

        setErrorDetail(
          error instanceof Error
            ? error.message
            : "Erreur inconnue.",
        );
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
        background:
          "radial-gradient(circle at top, #18203d 0%, #0b1022 45%, #070b18 100%)",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 650,
          width: "100%",
          textAlign: "center",
          padding: "48px 32px",
          borderRadius: 28,
          background:
            "rgba(255, 255, 255, 0.055)",
          border:
            "1px solid rgba(244, 201, 93, 0.28)",
          boxShadow:
            "0 30px 80px rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter:
            "blur(16px)",
        }}
      >
        <div
          style={{
            fontSize: 64,
            marginBottom: 20,
          }}
        >
          ✨
        </div>

        <p
          style={{
            margin: "0 0 12px",
            color: "#f4c95d",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {__i18n["luna_astralis"]}
        </p>

        <h1
          style={{
            margin: "0 0 16px",
            fontSize:
              "clamp(32px, 6vw, 44px)",
            lineHeight: 1.1,
          }}
        >
          {__i18n["paiement_confirme"]}
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: 18,
            lineHeight: 1.7,
            opacity: 0.9,
          }}
        >
          {
            __i18n[
              "merci_pour_votre_confiance"
            ]
          }
        </p>

        {loading && (
          <div
            style={{
              marginTop: 30,
              padding: 20,
              borderRadius: 18,
              background:
                "rgba(255, 255, 255, 0.04)",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                margin: "0 auto 16px",
                borderRadius: "50%",
                border:
                  "3px solid rgba(244, 201, 93, 0.2)",
                borderTopColor:
                  "#f4c95d",
                animation:
                  "report-spin 0.8s linear infinite",
              }}
            />

            <p
              style={{
                margin: 0,
                opacity: 0.8,
                lineHeight: 1.6,
              }}
            >
              {
                __i18n[
                  "votre_rapport_astrologique_est_en_cours_de_generation"
                ]
              }
            </p>
          </div>
        )}

        {!loading && pdfUrl && (
          <div
            style={{
              marginTop: 30,
            }}
          >
            <p
              style={{
                margin: "0 0 22px",
                color: "#d7f5df",
                lineHeight: 1.6,
              }}
            >
              {
                __i18n[
                  "votre_rapport_est_pret"
                ]
              }
            </p>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 32px",
                borderRadius: 999,
                textDecoration: "none",
                background: "#f4c95d",
                color: "#111",
                fontSize: 16,
                fontWeight: 800,
                boxShadow:
                  "0 12px 30px rgba(244, 201, 93, 0.2)",
              }}
            >
              {
                __i18n[
                  "telecharger_mon_rapport_pdf"
                ]
              }
            </a>
          </div>
        )}

        {!loading && !pdfUrl && (
          <div
            style={{
              marginTop: 30,
              padding: 20,
              borderRadius: 18,
              background:
                "rgba(255, 100, 100, 0.08)",
              border:
                "1px solid rgba(255, 130, 130, 0.2)",
            }}
          >
            <p
              style={{
                margin: 0,
                opacity: 0.9,
                lineHeight: 1.6,
              }}
            >
              {
                __i18n[
                  "la_generation_du_rapport_a_rencontre_un_probleme"
                ]
              }
            </p>

            {errorDetail && (
              <p
                style={{
                  margin: "14px 0 0",
                  padding: 12,
                  borderRadius: 10,
                  background:
                    "rgba(0, 0, 0, 0.2)",
                  fontSize: 13,
                  lineHeight: 1.5,
                  opacity: 0.75,
                  wordBreak:
                    "break-word",
                  fontFamily:
                    "monospace",
                }}
              >
                {errorDetail}
              </p>
            )}
          </div>
        )}

        <div
          style={{
            marginTop: 32,
          }}
        >
          <Link
            href="/carte-du-ciel"
            style={{
              color: "#fff",
              textDecoration:
                "underline",
              textUnderlineOffset: 4,
              opacity: 0.8,
            }}
          >
            {
              __i18n[
                "retour_a_luna_astralis"
              ]
            }
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes report-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </main>
  );
}
