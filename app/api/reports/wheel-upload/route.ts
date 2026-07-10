import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function s(value: unknown): string {
  return value == null ? "" : String(value).trim();
}

const SUPABASE_URL = s(
  process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL
);

const SUPABASE_SERVICE_ROLE_KEY = s(
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const supabase =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(
        SUPABASE_URL,
        SUPABASE_SERVICE_ROLE_KEY,
        {
          auth: {
            persistSession: false,
            autoRefreshToken: false,
          },
        }
      )
    : null;

export async function POST() {
  try {
    if (!supabase) {
      return NextResponse.json(
        {
          error: "SUPABASE_CONFIG_MISSING",
        },
        { status: 500 }
      );
    }

    const requestId = randomUUID();

    const wheelImagePath =
      `pending/${requestId}/roue-astrologique.png`;

    const {
      data,
      error,
    } = await supabase.storage
      .from("rapport-images")
      .createSignedUploadUrl(
        wheelImagePath
      );

    if (error || !data) {
      return NextResponse.json(
        {
          error: "SIGNED_UPLOAD_URL_FAILED",
          detail: error?.message || null,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      wheelImagePath,
      signedUrl: data.signedUrl,
      token: data.token,
    });
  } catch (error: any) {
    console.error(
      "[wheel upload]",
      error
    );

    return NextResponse.json(
      {
        error:
          error?.message ||
          "WHEEL_UPLOAD_ERROR",
      },
      { status: 500 }
    );
  }
}
