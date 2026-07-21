import React from "react";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { renderToBuffer } from "@react-pdf/renderer";
import { calculateChart } from "celestine";
import tzlookup from "tz-lookup";

import EssentialPdfDocument from "@/components/EssentialPdf/EssentialPdfDocument";
import PremiumPdfDocument from "@/components/PremiumPdf/PremiumPdfDocument";
import SignaturePdfDocument from "@/components/SignaturePdf/SignaturePdfDocument";
import CompatibilityPdfDocument from "@/components/CompatibilityPdf/CompatibilityPdfDocument";
import HoroscopePdfDocument from "@/components/HoroscopePdf/HoroscopePdf";

import type { CompatibilityPerson } from "@/components/CompatibilityPdf/CompatibilityPdfTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function clean(value: unknown): string {
  return value == null ? "" : String(value).trim();
}

const SUPABASE_URL = clean(
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
);

const SUPABASE_SERVICE_ROLE_KEY = clean(
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const supabase =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      })
    : null;

function getTimezoneOffsetHours(
  timeZone: string,
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number
): number {
  const utcDate = new Date(
    Date.UTC(year, month - 1, day, hour, minute, 0)
  );

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const values: Record<string, string> = {};

  for (const part of formatter.formatToParts(utcDate)) {
    if (part.type !== "literal") {
      values[part.type] = part.value;
    }
  }

  let formattedHour = Number(values.hour);

  if (formattedHour === 24) {
    formattedHour = 0;
  }

  const asUTC = Date.UTC(
    Number(values.year),
    Number(values.month) - 1,
    Number(values.day),
    formattedHour,
    Number(values.minute),
    Number(values.second)
  );

  return (asUTC - utcDate.getTime()) / 3_600_000;
}

function parseBirthDate(date: string) {
  const normalizedDate = clean(date);

  if (normalizedDate.includes("/")) {
    const [day, month, year] = normalizedDate.split("/").map(Number);
    return { year, month, day };
  }

  const [year, month, day] = normalizedDate.split("-").map(Number);
  return { year, month, day };
}

function parseBirthTime(time: string) {
  const [hour, minute] = clean(time).split(":").map(Number);

  return {
    hour: Number.isFinite(hour) ? hour : 12,
    minute: Number.isFinite(minute) ? minute : 0,
  };
}

function isValidDateParts(
  year: number,
  month: number,
  day: number
): boolean {
  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day)
  ) {
    return false;
  }

  if (year < 1800 || year > 2200) {
    return false;
  }

  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }

  const testDate = new Date(Date.UTC(year, month - 1, day));

  return (
    testDate.getUTCFullYear() === year &&
    testDate.getUTCMonth() === month - 1 &&
    testDate.getUTCDate() === day
  );
}

function isValidTimeParts(hour: number, minute: number): boolean {
  return (
    Number.isInteger(hour) &&
    Number.isInteger(minute) &&
    hour >= 0 &&
    hour <= 23 &&
    minute >= 0 &&
    minute <= 59
  );
}

function isImageDataUrl(value: string): boolean {
  return /^data:image\/(png|jpeg|jpg|webp);base64,/i.test(value);
}

function getImageMimeType(fileName: string, fileType?: string): string {
  const normalizedType = clean(fileType).toLowerCase();

  if (normalizedType.startsWith("image/")) {
    return normalizedType;
  }

  const normalizedName = fileName.toLowerCase();

  if (
    normalizedName.endsWith(".jpg") ||
    normalizedName.endsWith(".jpeg")
  ) {
    return "image/jpeg";
  }

  if (normalizedName.endsWith(".webp")) {
    return "image/webp";
  }

  return "image/png";
}

async function downloadWheelImageFromStorage(
  wheelPath: string
): Promise<string> {
  if (!supabase || !wheelPath) {
    return "";
  }

  const buckets = ["rapport-images", "rapport-pdf"] as const;

  for (const bucket of buckets) {
    const result = await supabase.storage.from(bucket).download(wheelPath);

    if (!result.error && result.data) {
      const arrayBuffer = await result.data.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const mimeType = getImageMimeType(
        wheelPath,
        result.data.type
      );

      return `data:${mimeType};base64,${buffer.toString("base64")}`;
    }
  }

  console.warn("WHEEL_IMAGE_DOWNLOAD_FAILED", { wheelPath });
  return "";
}

async function resolveWheelImage(
  order: any,
  birthData: any
): Promise<string> {
  const directWheelImage = clean(
    birthData?.wheelImage ||
      birthData?.wheel_image ||
      order?.wheel_image
  );

  if (directWheelImage) {
    if (isImageDataUrl(directWheelImage)) {
      return directWheelImage;
    }

    if (
      directWheelImage.length > 500 &&
      !directWheelImage.startsWith("http")
    ) {
      return `data:image/png;base64,${directWheelImage}`;
    }
  }

  const wheelImagePath = clean(
    order?.wheel_image_path ||
      birthData?.wheelImagePath ||
      birthData?.wheel_image_path
  );

  return wheelImagePath
    ? downloadWheelImageFromStorage(wheelImagePath)
    : "";
}

type BuiltChart = {
  firstName: string;
  birthDate: string;
  birthTime: string;
  birthCity: string;
  birthCountry: string;
  latitude: number;
  longitude: number;
  timeZone: string;
  timezoneOffset: number;
  planets: any[];
  angles: any;
  wheelImage: string;
};

async function buildChartData(
  personData: any,
  orderFallback: any = {}
): Promise<BuiltChart> {
  const firstName = clean(
    personData?.firstName ||
      personData?.first_name ||
      orderFallback?.first_name
  );

  const birthDate = clean(
    personData?.birthDate ||
      personData?.birth_date ||
      orderFallback?.birth_date
  );

  const birthTime = clean(
    personData?.birthTime ||
      personData?.birth_time ||
      orderFallback?.birth_time
  );

  const birthCity = clean(
    personData?.birthCity ||
      personData?.birth_city ||
      orderFallback?.birth_city
  );

  const birthCountry = clean(
    personData?.birthCountry ||
      personData?.birth_country ||
      orderFallback?.birth_country
  );

  const latitude = Number(
    personData?.latitude ?? orderFallback?.latitude
  );

  const longitude = Number(
    personData?.longitude ?? orderFallback?.longitude
  );

  if (
    !birthDate ||
    !birthTime ||
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude)
  ) {
    throw new Error("INVALID_BIRTH_DATA");
  }

  const { year, month, day } = parseBirthDate(birthDate);
  const { hour, minute } = parseBirthTime(birthTime);

  if (!isValidDateParts(year, month, day)) {
    throw new Error("INVALID_BIRTH_DATE");
  }

  if (!isValidTimeParts(hour, minute)) {
    throw new Error("INVALID_BIRTH_TIME");
  }

  let timeZone = clean(
    personData?.timezone ||
      personData?.timeZone ||
      orderFallback?.timezone
  );

  if (!timeZone) {
    try {
      timeZone = tzlookup(latitude, longitude);
    } catch (error: any) {
      throw new Error(
        error?.message || "TIMEZONE_LOOKUP_FAILED"
      );
    }
  }

  const timezoneOffset = getTimezoneOffsetHours(
    timeZone,
    year,
    month,
    day,
    hour,
    minute
  );

  const chart = calculateChart({
    year,
    month,
    day,
    hour,
    minute,
    second: 0,
    timezone: timezoneOffset,
    latitude,
    longitude,
  });

  const planets = (chart as any)?.planets || [];
  const angles = (chart as any)?.angles || {};
  const wheelImage = await resolveWheelImage(
    orderFallback,
    personData
  );

  return {
    firstName,
    birthDate,
    birthTime,
    birthCity,
    birthCountry,
    latitude,
    longitude,
    timeZone,
    timezoneOffset,
    planets,
    angles,
    wheelImage,
  };
}

async function saveGeneratedPdf(
  sessionId: string,
  productType: string,
  pdfDocument: React.ReactElement
) {
  if (!supabase) {
    throw new Error("SUPABASE_CONFIG_MISSING");
  }

  const pdfBuffer = await renderToBuffer(pdfDocument);

  const safeProductType = productType.replace(
    /[^a-zA-Z0-9-_]/g,
    "-"
  );

  const filePath =
    `${sessionId}/rapport-${safeProductType}.pdf`;

  const { error: uploadError } = await supabase.storage
    .from("rapport-pdf")
    .upload(filePath, pdfBuffer, {
      contentType: "application/pdf",
      upsert: true,
    });

  if (uploadError) {
    throw new Error(`PDF_UPLOAD_FAILED: ${uploadError.message}`);
  }

  const { error: updateError } = await supabase
    .from("orders")
    .update({
      status: "generated",
      pdf_path: filePath,
      updated_at: new Date().toISOString(),
    })
    .eq("stripe_session_id", sessionId);

  if (updateError) {
    throw new Error(`ORDER_UPDATE_FAILED: ${updateError.message}`);
  }

  const { data: signed, error: signedError } =
    await supabase.storage
      .from("rapport-pdf")
      .createSignedUrl(filePath, 60 * 60);

  if (signedError) {
    throw new Error(`SIGNED_URL_FAILED: ${signedError.message}`);
  }

  return {
    filePath,
    signedUrl: signed?.signedUrl || null,
  };
}

export async function POST(req: Request) {
  try {
    if (!supabase) {
      return NextResponse.json(
        {
          error: "SUPABASE_CONFIG_MISSING",
          detail:
            "SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY est absent.",
        },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => null);
    const sessionId = clean(body?.session_id);

    if (!sessionId) {
      return NextResponse.json(
        { error: "MISSING_SESSION_ID" },
        { status: 400 }
      );
    }

    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("*")
      .eq("stripe_session_id", sessionId)
      .single();

    if (orderError || !order) {
      return NextResponse.json(
        {
          error: "ORDER_NOT_FOUND",
          detail: orderError?.message || null,
        },
        { status: 404 }
      );
    }

    const birthData =
      order.birth_data && typeof order.birth_data === "object"
        ? order.birth_data
        : {};

    const productType = clean(
      order.product_type ||
        order.report_type ||
        "essential"
    ).toLowerCase();

    let pdfDocument: React.ReactElement;
    let wheelIncluded = false;
    let wheelsIncluded:
      | { person1: boolean; person2: boolean }
      | undefined;

    if (productType === "compatibility") {
      const person1Data =
        birthData.person1 && typeof birthData.person1 === "object"
          ? birthData.person1
          : {};

      const person2Data =
        birthData.person2 && typeof birthData.person2 === "object"
          ? birthData.person2
          : {};

      if (
        Object.keys(person1Data).length === 0 ||
        Object.keys(person2Data).length === 0
      ) {
        return NextResponse.json(
          {
            error: "INVALID_COMPATIBILITY_DATA",
            detail: "Les données des deux personnes sont absentes.",
            birth_data: birthData,
          },
          { status: 400 }
        );
      }

      const [chart1, chart2] = await Promise.all([
        buildChartData(person1Data),
        buildChartData(person2Data),
      ]);

      const person1: CompatibilityPerson = {
        firstName: chart1.firstName,
        birthDate: chart1.birthDate,
        birthTime: chart1.birthTime,
        birthCity: chart1.birthCity,
        birthCountry: chart1.birthCountry,
        planets: chart1.planets,
        angles: chart1.angles,
        wheelImage: chart1.wheelImage,
      };

      const person2: CompatibilityPerson = {
        firstName: chart2.firstName,
        birthDate: chart2.birthDate,
        birthTime: chart2.birthTime,
        birthCity: chart2.birthCity,
        birthCountry: chart2.birthCountry,
        planets: chart2.planets,
        angles: chart2.angles,
        wheelImage: chart2.wheelImage,
      };

      wheelsIncluded = {
        person1: Boolean(chart1.wheelImage),
        person2: Boolean(chart2.wheelImage),
      };

      wheelIncluded =
        wheelsIncluded.person1 && wheelsIncluded.person2;

      console.log("COMPATIBILITY_REPORT_GENERATION", {
        sessionId,
        productType,
        person1: chart1.firstName,
        person2: chart2.firstName,
        person1PlanetsCount: chart1.planets.length,
        person2PlanetsCount: chart2.planets.length,
        wheelsIncluded,
      });

      pdfDocument = React.createElement(
        CompatibilityPdfDocument,
        { person1, person2 }
      );
    } else {
      const chart = await buildChartData(birthData, order);

      wheelIncluded = Boolean(chart.wheelImage);

      const commonProps = {
        firstName: chart.firstName,
        birthDate: chart.birthDate,
        birthTime: chart.birthTime,
        birthCity: chart.birthCity,
        planets: chart.planets,
        angles: chart.angles,
        wheelImage: chart.wheelImage,
      };

      console.log("REPORT_GENERATION", {
        sessionId,
        productType,
        firstName: chart.firstName,
        birthDate: chart.birthDate,
        birthTime: chart.birthTime,
        birthCity: chart.birthCity,
        timeZone: chart.timeZone,
        timezoneOffset: chart.timezoneOffset,
        planetsCount: chart.planets.length,
        hasAngles: Boolean(
          chart.angles && Object.keys(chart.angles).length
        ),
        hasWheelImage: wheelIncluded,
      });

      if (productType === "horoscope-daily") {
        pdfDocument = React.createElement(
          HoroscopePdfDocument as React.ComponentType<any>,
          {
            ...commonProps,
            birthCountry: chart.birthCountry,
            latitude: chart.latitude,
            longitude: chart.longitude,
            timezone: chart.timeZone,
            timezoneOffset: chart.timezoneOffset,
            period: "day",
          }
        );
      } else if (productType === "signature") {
        pdfDocument = React.createElement(
          SignaturePdfDocument,
          commonProps
        );
      } else if (productType === "premium") {
        pdfDocument = React.createElement(
          PremiumPdfDocument,
          commonProps
        );
      } else {
        pdfDocument = React.createElement(
          EssentialPdfDocument,
          commonProps
        );
      }
    }

    const { filePath, signedUrl } = await saveGeneratedPdf(
      sessionId,
      productType,
      pdfDocument
    );

    return NextResponse.json({
      ok: true,
      generated: true,
      product_type: productType,
      pdf_path: filePath,
      pdf_url: signedUrl,
      wheel_included: wheelIncluded,
      ...(wheelsIncluded
        ? { wheels_included: wheelsIncluded }
        : {}),
    });
  } catch (err: any) {
    console.error("REPORT_GENERATE_ERROR");
    console.error("Message:", err?.message);
    console.error("Stack:", err?.stack);
    console.error("Erreur complète:", err);

    const message = err?.message || "REPORT_GENERATE_ERROR";

    const isClientError =
      message.startsWith("INVALID_") ||
      message.startsWith("TIMEZONE_");

    return NextResponse.json(
      { error: message },
      { status: isClientError ? 400 : 500 }
    );
  }
}
