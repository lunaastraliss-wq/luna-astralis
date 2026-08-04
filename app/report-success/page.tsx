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
            "Content-Type": __i18n["application_json"],
          },
          body: JSON.stringify({
            session_id: sessionId,
          }),
        });

        const contentType = res.headers.get("content-type");

        if (!contentType?.includes("application/json")) {
          const responseText = await res.text();

          throw new Error(
            `La route de génération n'a pas retourné du JSON. Statut : ${res.status}. Réponse : ${responseText}`
          );
        }

        const data = await res.json();

        if (!res.ok) {
          throw new Error(
            data?.error ||
              data?.message ||
              `Erreur pendant la génération du rapport (${res.status}).`
          );
        }

        if (!data?.pdf_url) {
          throw new Error(
            data?.error ||
              data?.message ||
              "Le rapport a été généré, mais aucune adresse PDF n'a été retournée."
          );
        }

        setPdfUrl(data.pdf_url);
      } catch (error: unknown) {
        console.error("PDF generation error:", error);

        setErrorDetail(
          error instanceof Error ? error.message : "Erreur inconnue."
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
        padding: __i18n["40px_20px"],
        background:
          __i18n["radial_gradient_circle_at_top_18203d_0_0b1022_45_070b18_100"],
        color: __i18n["fff"],
      }}
    >
      <div
        style={{
          maxWidth: 650,
          width: "100%",
          textAlign: "center",
          padding: __i18n["48px_32px"],
          borderRadius: 28,
          background: __i18n["rgba_255_255_255_0_055"],
          border: __i18n["1px_solid_rgba_244_201_93_0_28"],
          boxShadow: __i18n["0_30px_80px_rgba_0_0_0_0_35"],
          backdropFilter: __i18n["blur_16px"],
          WebkitBackdropFilter: __i18n["blur_16px_2"],
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
            margin: __i18n["0_0_12px"],
            color: __i18n["f4c95d"],
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {__i18n["luna_astralis"]}</p>

        <h1
          style={{
            margin: __i18n["0_0_16px"],
            fontSize: __i18n["clamp_32px_6vw_44px"],
            lineHeight: 1.1,
          }}
        >
          {__i18n["paiement_confirme"]}</h1>

        <p
          style={{
            margin: 0,
            fontSize: 18,
            lineHeight: 1.7,
            opacity: 0.9,
          }}
        >
          {__i18n["merci_pour_votre_confiance"]}</p>

        {loading && (
          <div
            style={{
              marginTop: 30,
              padding: 20,
              borderRadius: 18,
              background: __i18n["rgba_255_255_255_0_04"],
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                margin: __i18n["0_auto_16px"],
                borderRadius: "50%",
                border: __i18n["3px_solid_rgba_244_201_93_0_2"],
                borderTopColor: __i18n["f4c95d_2"],
                animation: __i18n["report_spin_0_8s_linear_infinite"],
              }}
            />

            <p
              style={{
                margin: 0,
                opacity: 0.8,
                lineHeight: 1.6,
              }}
            >
              {__i18n["votre_rapport_astrologique_est_en_cours_de_generation"]}</p>
          </div>
        )}

        {!loading && pdfUrl && (
          <div style={{ marginTop: 30 }}>
            <p
              style={{
                margin: __i18n["0_0_22px"],
                color: __i18n["d7f5df"],
                lineHeight: 1.6,
              }}
            >
              {__i18n["votre_rapport_est_pret"]}</p>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: __i18n["15px_32px"],
                borderRadius: 999,
                textDecoration: "none",
                background: __i18n["f4c95d_3"],
                color: "#111",
                fontSize: 16,
                fontWeight: 800,
                boxShadow: __i18n["0_12px_30px_rgba_244_201_93_0_2"],
              }}
            >
              {__i18n["telecharger_mon_rapport_pdf"]}</a>
          </div>
        )}

        {!loading && !pdfUrl && (
          <div
            style={{
              marginTop: 30,
              padding: 20,
              borderRadius: 18,
              background: __i18n["rgba_255_100_100_0_08"],
              border: __i18n["1px_solid_rgba_255_130_130_0_2"],
            }}
          >
            <p
              style={{
                margin: 0,
                opacity: 0.9,
                lineHeight: 1.6,
              }}
            >
              {__i18n["la_generation_du_rapport_a_rencontre_un_probleme"]}</p>

            {errorDetail && (
              <p
                style={{
                  margin: __i18n["14px_0_0"],
                  padding: 12,
                  borderRadius: 10,
                  background: __i18n["rgba_0_0_0_0_2"],
                  fontSize: 13,
                  lineHeight: 1.5,
                  opacity: 0.75,
                  wordBreak: "break-word",
                  fontFamily: "monospace",
                }}
              >
                {errorDetail}
              </p>
            )}
          </div>
        )}

        <div style={{ marginTop: 32 }}>
          <Link
            href="/carte-du-ciel"
            style={{
              color: __i18n["fff_2"],
              textDecoration: "underline",
              textUnderlineOffset: 4,
              opacity: 0.8,
            }}
          >
            {__i18n["retour_a_luna_astralis"]}</Link>
        </div>
      </div>

      <style jsx>{__i18n["keyframes_report_spin_to_transform_rotate_360deg"]}</style>
    </main>
  );
}
