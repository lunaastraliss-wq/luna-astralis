// app/api/chat/quota/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Règle:
 * - Compte requis (pas de quota "guest")
 * - Free: 15 messages lifetime (user_usage_lifetime.used)
 * - Premium: actif si status in (active, trialing) ET current_period_end (si présent) dans le futur
 */

const FREE_LIMIT = 15;

const SUPABASE_URL =
  process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

const USER_USAGE_TABLE = "user_usage_lifetime";
const SUBS_TABLE = "user_subscriptions";
const ACTIVE_STATUSES = new Set(["active", "trialing"]);

type Plan = "guest" | "free" | "premium";

function cleanStr(v: unknown) {
  return (v == null ? "" : String(v)).trim();
}

function toUnixMaybe(v: any): number | null {
  if (!v) return null;
  if (typeof v === "number") return v;

  const t = Date.parse(String(v));
  if (Number.isFinite(t)) return Math.floor(t / 1000);

  return null;
}

function nowUnix() {
  return Math.floor(Date.now() / 1000);
}

function json(data: any, status = 200) {
  return NextResponse.json(data, { status });
}

const supabaseAdmin =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: { persistSession: false },
      })
    : null;

async function isPremiumActive(user_id: string) {
  if (!supabaseAdmin) return false;

  const { data, error } = await supabaseAdmin
    .from(SUBS_TABLE)
    .select("status,current_period_end,created_at")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error || !data) return false;

  const status = cleanStr((data as any).status).toLowerCase();
  if (!ACTIVE_STATUSES.has(status)) return false;

  const cpeUnix = toUnixMaybe((data as any).current_period_end);

  // Si pas de current_period_end (ou champ null), on considère actif
  if (cpeUnix == null) return true;

  return cpeUnix > nowUnix();
}

async function getUsedLifetime(user_id: string) {
  if (!supabaseAdmin) return 0;

  const { data, error } = await supabaseAdmin
    .from(USER_USAGE_TABLE)
    .select("used")
    .eq("user_id", user_id)
    .maybeSingle();

  if (error) return 0;

  const raw = Number((data as any)?.used ?? 0);
  return Number.isFinite(raw) ? Math.max(0, Math.trunc(raw)) : 0;
}

export async function GET() {
  try {
    if (!supabaseAdmin) {
      return json({ error: "SUPABASE_ADMIN_MISSING" }, 500);
    }

    // ✅ Session via cookies (supabase auth helpers)
    const supabaseAuth = createRouteHandlerClient({
      cookies: () => cookies(),
    });

    const { data, error } = await supabaseAuth.auth.getSession();
    if (error) {
      return json({ error: "SESSION_ERROR", detail: cleanStr(error.message) }, 401);
    }

    const user_id = data?.session?.user?.id;

    // ✅ Compte requis
    if (!user_id) {
      const plan: Plan = "guest";
      return json({
        plan,
        premium: false,
        mode: "guest",
        require_auth: true,
        limit: FREE_LIMIT,

        // compat + UI
        freeLeft: 0,
        remaining: 0,
        used: 0,
      });
    }

    const premium = await isPremiumActive(user_id);

    if (premium) {
      const plan: Plan = "premium";
      return json({
        plan,
        premium: true,
        mode: "auth_premium",
        require_auth: false,

        // payant = pas de compteur
        limit: null,
        freeLeft: null,
        remaining: null,
        used: null,
      });
    }

    const used = await getUsedLifetime(user_id);
    const remaining = Math.max(0, FREE_LIMIT - used);

    const plan: Plan = "free";
    return json({
      plan,
      premium: false,
      mode: "auth_free",
      require_auth: false,
      limit: FREE_LIMIT,

      // compat + UI
      freeLeft: remaining,
      remaining,
      used,
    });
  } catch (e: any) {
    return json({ error: "SERVER_ERROR", detail: cleanStr(e?.message || e) }, 500);
  }
}
