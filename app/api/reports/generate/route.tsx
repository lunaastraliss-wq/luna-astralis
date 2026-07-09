import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { pdf } from "@react-pdf/renderer";
import { calculateChart } from "celestine";
import tzlookup from "tz-lookup";
import EssentialPdfDocument from "@/components/EssentialPdf/EssentialPdfDocument";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function clean(value: unknown) {
  return value == null ? "" : String(value).trim();
}

const SUPABASE_URL = clean(
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
);

const SUPABASE_SERVICE_ROLE_KEY = clean(process.env.SUPABASE_SERVICE_ROLE_KEY);

const supabase =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: { persistSession: false },
      })
    : null;

function getTimezoneOffsetHours(
  timeZone: string,
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number
) {
  const utcDate = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));

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

  const parts = formatter.formatToParts(utcDate);
  const values: Record<string, string> = {};

  for (const part of parts) {
    if (part.type !== "literal") {
      values[part.type] = part.value;
    }
  }

  const asUTC = Date.UTC(
    Number(values.year),
    Number(values.month) - 1,
    Number(values.day),
    Number(values.hour),
    Number(values.minute),
    Number(values.second)
  );

  return (asUTC - utcDate.getTime()) / 60000 / 60;
}
function parseBirthDate(date: string) {
  if (date.includes("/")) {
    const [day, month, year] = date.split("/").map(Number);

    return {
      year,
      month,
      day,
    };
  }

  const [year, month, day] = date.split("-").map(Number);

  return {
    year,
    month,
    day,
  };
}

function parseBirthTime(time: string) {
  const [hour, minute] = time.split(":").map(Number);

  return {
    hour: Number.isFinite(hour) ? hour : 12,
    minute: Number.isFinite(minute) ? minute : 0,
  };
}

export async function POST(req: Request) {
  try {
    if (!supabase) {
      return NextResponse.json(
        { error: "SUPABASE_CONFIG_MISSING" },
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

    if (order.pdf_path) {
      const { data: signed } = await supabase.storage
        .from("rapport-pdf")
        .createSignedUrl(order.pdf_path, 60 * 60);

      return NextResponse.json({
        ok: true,
        already_generated: true,
        pdf_path: order.pdf_path,
        pdf_url: signed?.signedUrl || null,
      });
    }

    const birthData = order.birth_data || {};

    const firstName = clean(birthData.firstName);
    const birthDate = clean(birthData.birthDate);
    const birthTime = clean(birthData.birthTime);
    const birthCity = clean(birthData.birthCity);

    const latitude = Number(birthData.latitude);
    const longitude = Number(birthData.longitude);

    if (
      !birthDate ||
      !birthTime ||
      !Number.isFinite(latitude) ||
      !Number.isFinite(longitude)
    ) {
      return NextResponse.json(
        {
          error: "INVALID_BIRTH_DATA",
          birth_data: birthData,
        },
        { status: 400 }
      );
    }

    const { year, month, day } = parseBirthDate(birthDate);
    const { hour, minute } = parseBirthTime(birthTime);

    if (
      !Number.isFinite(year) ||
      !Number.isFinite(month) ||
      !Number.isFinite(day)
    ) {
      return NextResponse.json(
        { error: "INVALID_BIRTH_DATE" },
        { status: 400 }
      );
    }

    const timeZone = tzlookup(latitude, longitude);

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

    const planets = (chart as any).planets || [];
    const angles = (chart as any).angles || {};

    const pdfBuffer = await pdf(
      <EssentialPdfDocument
        firstName={firstName}
        birthDate={birthDate}
        birthTime={birthTime}
        birthCity={birthCity}
        planets={planets}
        angles={angles}
      />
    ).toBuffer();

    const filePath = `${sessionId}/rapport-${order.product_type || "essential"}.pdf`;

    const { error: uploadError } = await supabase.storage
      .from("rapport-pdf")
      .upload(filePath, pdfBuffer, {
        contentType: "application/pdf",
        upsert: true,
      });

    if (uploadError) {
      return NextResponse.json(
        {
          error: "PDF_UPLOAD_FAILED",
          detail: uploadError.message,
        },
        { status: 500 }
      );
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
      return NextResponse.json(
        {
          error: "ORDER_UPDATE_FAILED",
          detail: updateError.message,
        },
        { status: 500 }
      );
    }

    const { data: signed } = await supabase.storage
      .from("rapport-pdf")
      .createSignedUrl(filePath, 60 * 60);

    return NextResponse.json({
      ok: true,
      generated: true,
      pdf_path: filePath,
      pdf_url: signed?.signedUrl || null,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err?.message || "REPORT_GENERATE_ERROR",
      },
      { status: 500 }
    );
  }
}
