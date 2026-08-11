"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  PDFViewer,
} from "@react-pdf/renderer";

import html2canvas from "html2canvas";

import NatalChartWheel from "@/components/NatalChartWheel";

import SignaturePdfDocument from "@/components/SignaturePdf/SignaturePdfDocument";

type ChartData = {
  planets: any[];
  houses: any;
  angles: any;
};

const MAIN_PLANETS = [
  "Sun",
  "Moon",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];

function getAngleLongitude(
  angle: any
): number | null {
  if (
    typeof angle === "number" &&
    Number.isFinite(angle)
  ) {
    return angle;
  }

  const longitude =
    Number(
      angle?.longitude
    );

  return Number.isFinite(
    longitude
  )
    ? longitude
    : null;
}

export default function PdfSignatureViewer() {
  const pdfWheelRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const [
    chart,
    setChart,
  ] =
    useState<ChartData | null>(
      null
    );

  const [
    wheelImage,
    setWheelImage,
  ] =
    useState("");

  const [
    loading,
    setLoading,
  ] =
    useState(true);

  const [
    error,
    setError,
  ] =
    useState("");

  /*
  |--------------------------------------------------------------------------
  | 1. Calcul réel de la carte de Martine
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    let cancelled = false;

    async function loadChart() {
      try {
        setLoading(true);
        setError("");

        /*
        |--------------------------------------------------------------------------
        | Géocodage de Québec
        |--------------------------------------------------------------------------
        */

        const geoResponse =
          await fetch(
            `/api/geocode?city=${encodeURIComponent(
              "Québec"
            )}`,
            {
              method: "GET",
              cache: "no-store",
            }
          );

        const geoData =
          await geoResponse.json();

        if (
          !geoResponse.ok ||
          !geoData?.ok ||
          !geoData?.result
        ) {
          throw new Error(
            geoData?.error ||
              "Géocodage impossible"
          );
        }

        const latitude =
          Number(
            geoData.result.latitude
          );

        const longitude =
          Number(
            geoData.result.longitude
          );

        if (
          !Number.isFinite(
            latitude
          ) ||
          !Number.isFinite(
            longitude
          )
        ) {
          throw new Error(
            "Coordonnées invalides"
          );
        }

        /*
        |--------------------------------------------------------------------------
        | Calcul natal réel
        |--------------------------------------------------------------------------
        */

        const chartResponse =
          await fetch(
            "/api/natal-chart",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              cache: "no-store",

              body:
                JSON.stringify({
                  year: 1970,
                  month: 11,
                  day: 17,
                  hour: 21,
                  minute: 36,
                  latitude,
                  longitude,
                }),
            }
          );

        const chartData =
          await chartResponse.json();

        if (
          !chartResponse.ok ||
          !chartData?.ok ||
          !chartData?.chart
        ) {
          throw new Error(
            chartData?.error ||
              "Calcul astrologique impossible"
          );
        }

        if (cancelled) {
          return;
        }

        const calculatedChart =
          chartData.chart;

        const planets =
          (
            calculatedChart?.planets ||
            []
          ).filter(
            (
              planet: any
            ) =>
              MAIN_PLANETS.includes(
                planet?.name
              )
          );

        setChart({
          planets,

          houses:
            calculatedChart?.houses ||
            [],

          angles:
            calculatedChart?.angles ||
            {},
        });
      } catch (
        loadError
      ) {
        console.error(
          "Erreur DEV Signature:",
          loadError
        );

        if (!cancelled) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Erreur de calcul"
          );

          setLoading(false);
        }
      }
    }

    loadChart();

    return () => {
      cancelled = true;
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | 2. Capture de la vraie roue
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!chart) {
      return;
    }

    let cancelled = false;

    async function createWheelImage() {
      try {
        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              350
            )
        );

        if (
          !pdfWheelRef.current
        ) {
          throw new Error(
            "Roue PDF introuvable"
          );
        }

        const canvas =
          await html2canvas(
            pdfWheelRef.current,
            {
              backgroundColor:
                "#0b1124",

              scale: 3,

              useCORS: true,

              logging: false,
            }
          );

        const image =
          canvas.toDataURL(
            "image/png"
          );

        if (
          !image ||
          !image.startsWith(
            "data:image/png;base64,"
          )
        ) {
          throw new Error(
            "La roue PNG n’a pas pu être créée"
          );
        }

        if (cancelled) {
          return;
        }

        setWheelImage(
          image
        );

        setLoading(
          false
        );
      } catch (
        wheelError
      ) {
        console.error(
          "Erreur génération roue Signature DEV:",
          wheelError
        );

        if (!cancelled) {
          setError(
            wheelError instanceof Error
              ? wheelError.message
              : "Erreur de génération de la roue"
          );

          setLoading(
            false
          );
        }
      }
    }

    createWheelImage();

    return () => {
      cancelled = true;
    };
  }, [
    chart,
  ]);

  /*
  |--------------------------------------------------------------------------
  | 3. Angles pour la roue
  |--------------------------------------------------------------------------
  */

  const ascendantLongitude =
    getAngleLongitude(
      chart?.angles
        ?.ascendant
    );

  const midheavenLongitude =
    getAngleLongitude(
      chart?.angles
        ?.midheaven
    );

  /*
  |--------------------------------------------------------------------------
  | Angles complets pour SignaturePdfDocument
  |--------------------------------------------------------------------------
  */

  const pdfAngles = {
    ascendant:
      chart?.angles?.ascendant ||
      null,

    midheaven:
      chart?.angles?.midheaven ||
      null,

    descendant:
      chart?.angles?.descendant ||
      null,

    imumCoeli:
      chart?.angles?.imumCoeli ||
      null,
  };

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        backgroundColor:
          "#081020",
        overflow:
          "hidden",
        position:
          "relative",
      }}
    >
      {/*
      |--------------------------------------------------------------------------
      | Roue cachée
      |--------------------------------------------------------------------------
      */}

      {chart && (
        <div
          aria-hidden="true"

          style={{
            position:
              "fixed",

            left:
              "-10000px",

            top:
              0,

            width:
              900,

            height:
              900,

            pointerEvents:
              "none",

            opacity:
              1,
          }}
        >
          <div
            ref={
              pdfWheelRef
            }

            style={{
              width:
                820,

              height:
                820,

              display:
                "flex",

              alignItems:
                "center",

              justifyContent:
                "center",

              background:
                "#0b1124",

              color:
                "#fff8e7",
            }}
          >
            <NatalChartWheel
              planets={
                chart.planets
              }

              houses={
                chart.houses
              }

              ascendantLongitude={
                ascendantLongitude ??
                undefined
              }

              midheavenLongitude={
                midheavenLongitude ??
                undefined
              }

              size={
                760
              }

              showLegend={
                false
              }
            />
          </div>
        </div>
      )}

      {/*
      |--------------------------------------------------------------------------
      | Chargement / erreur / PDF
      |--------------------------------------------------------------------------
      */}

      {loading ? (
        <div
          style={{
            width:
              "100%",

            height:
              "100%",

            display:
              "flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            color:
              "#fff8e7",

            fontFamily:
              "Arial, sans-serif",

            fontSize:
              16,
          }}
        >
          Génération du rapport Signature et de la roue astrologique...
        </div>
      ) : error ? (
        <div
          style={{
            width:
              "100%",

            height:
              "100%",

            display:
              "flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            color:
              "#fff8e7",

            fontFamily:
              "Arial, sans-serif",

            padding:
              30,

            textAlign:
              "center",
          }}
        >
          {error}
        </div>
      ) : chart &&
        wheelImage ? (
        <PDFViewer
          key={
            wheelImage.length
          }

          width="100%"

          height="100%"

          style={{
            border:
              "none",
          }}

          showToolbar
        >
          <SignaturePdfDocument
            firstName="Martine"

            birthDate="17/11/1970"

            birthTime="21:36"

            birthCity="Québec"

            planets={
              chart.planets
            }

            angles={
              pdfAngles
            }

            wheelImage={
              wheelImage
            }
          />
        </PDFViewer>
      ) : null}
    </main>
  );
}
