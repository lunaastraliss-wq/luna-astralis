// app/api/chat/quota/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FREE_LIMIT = 15;

// tables
const GUEST_USAGE_TABLE = "guest_usage";
const USER_USAGE_TABLE = "user_usage_lifetime";
const SUBS_TABLE = "user_subscriptions";

const ACTIVE_STATUSES = new Set(["active", "trialing"]);

const SUPABASE_URL =
  process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

const supabaseAdmin =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: { persistSession: false },
      })
    : null;

function cleanStr(v: unknown) {
  return (v == null ? "" : String(v)).trim();
}
function nowUnix() {
  return Math.floor(Date.now() / 1000);
}
function toUnixMaybe(v: any): number | null {
  if (!v) return null;
  if (typeof v === "number") return v;
  const t = Date.parse(String(v));
  if (Number.isFinite(t)) return Math.floor(t / 1000);
  return null;
}
function setGuestCookie(res: NextResponse, guest_id: string) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  res.headers.append(
    "Set-Cookie",
    `la_gid=${guest_id}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`
  );
}
function makeGuestId() {
  return crypto.randomBytes(16).toString("hex");
}

async function isPremiumActive(user_id: string) {
  if (!supabaseAdmin) return false;

  const { data, error } = await supabaseAdmin
    .from(SUBS_TABLE)
    .select("status, current_period_end, created_at")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error || !data) return false;

  const status = cleanStr((data as any).status).toLowerCase();
  if (!ACTIVE_STATUSES.has(status)) return false;

  const cpeUnix = toUnixMaybe((data as any).current_period_end);
  if (cpeUnix == null) return true;
  return cpeUnix > nowUnix();
}

async function getGuestUsed(guest_id: string) {
  if (!supabaseAdmin) return 0;
  const { data } = await supabaseAdmin
    .from(GUEST_USAGE_TABLE)
    .select("used")
    .eq("guest_id", guest_id)
    .maybeSingle();
  return Number((data as any)?.used ?? 0);
}

async function getUserUsed(user_id: string) {
  if (!supabaseAdmin) return 0;
  const { data } = await supabaseAdmin
    .from(USER_USAGE_TABLE)
    .select("used")
    .eq("user_id", user_id)
    .maybeSingle();
  return Number((data as any)?.used ?? 0);
}

export async function GET() {
  if (!supabaseAdmin) {
    return NextResponse.json({ error: "SUPABASE_ADMIN_MISSING" }, { status: 500 });
  }

  // Auth via cookies (comme ton /api/chat)
  let user_id: string | null = null;
  try {
    const supabaseAuth = createRouteHandlerClient({ cookies });
    const { data } = await supabaseAuth.auth.getSession();
    user_id = data?.session?.user?.id ?? null;
  } catch {
    user_id = null;
  }

  const cookieStore = cookies();
  const cookieGid = cookieStore.get("la_gid")?.value;
  const guest_id = cookieGid || makeGuestId();

  // Premium?
  if (user_id) {
    const premium = await isPremiumActive(user_id);
    if (premium) {
      const res = NextResponse.json({ mode: "auth_premium" }, { status: 200 });
      setGuestCookie(res, guest_id);
      return res;
    }

    const used = await getUserUsed(user_id);
    const remaining = Math.max(0, FREE_LIMIT - used);
    const res = NextResponse.json(
      { mode: "auth_free", remaining, free_limit: FREE_LIMIT },
      { status: 200 }
    );
    setGuestCookie(res, guest_id);
    return res;
  }

  // Guest
  const used = await getGuestUsed(guest_id);
  const remaining = Math.max(0, FREE_LIMIT - used);

  const res = NextResponse.json(
    { mode: "guest", remaining, free_limit: FREE_LIMIT, guestId: guest_id },
    { status: 200 }
  );
  setGuestCookie(res, guest_id);
  return res;
}
