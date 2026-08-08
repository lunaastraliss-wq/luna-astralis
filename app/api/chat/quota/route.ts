// app/api/chat/quota/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Règle:
 *
 * - Compte requis pour ce endpoint de quota UI
 * - Free: 15 messages lifetime via chat_usage.messages_count
 * - Premium: actif si status in (active, trialing)
 *   ET current_period_end (si présent) > now
 *
 * BONUS:
 * - Renvoie planSlug / planName depuis user_subscriptions
 */

const FREE_LIMIT = 15;

const SUPABASE_URL =
  process.env.SUPABASE_URL ??
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "";

const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  "";

const CHAT_USAGE_TABLE = "chat_usage";
const SUBS_TABLE = "user_subscriptions";

type Plan = "guest" | "free" | "premium";

function cleanStr(v: unknown) {
  return (v == null ? "" : String(v)).trim();
}

function toUnixMaybe(v: unknown): number | null {
  if (v == null) return null;

  if (
    typeof v === "number" &&
    Number.isFinite(v)
  ) {
    return Math.floor(v);
  }

  const t = Date.parse(String(v));

  if (Number.isFinite(t)) {
    return Math.floor(t / 1000);
  }

  return null;
}

function nowUnix() {
  return Math.floor(Date.now() / 1000);
}

function json(
  data: any,
  status = 200
) {
  return NextResponse.json(
    data,
    {
      status,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}

const supabaseAdmin =
  SUPABASE_URL &&
  SUPABASE_SERVICE_ROLE_KEY
    ? createClient(
        SUPABASE_URL,
        SUPABASE_SERVICE_ROLE_KEY,
        {
          auth: {
            persistSession: false,
          },
        }
      )
    : null;

/**
 * Retourne la subscription premium ACTIVE/TRIALING
 * la plus récente.
 *
 * plan_slug / plan_name sont renvoyés
 * s'ils existent dans user_subscriptions.
 */
async function getActivePremiumSubscription(
  user_id: string
): Promise<
  | null
  | {
      status: string;
      current_period_end: string | null;
      plan_slug: string | null;
      plan_name: string | null;
    }
> {
  if (!supabaseAdmin) {
    return null;
  }

  const {
    data,
    error,
  } = await supabaseAdmin
    .from(SUBS_TABLE)
    .select(
      "status,current_period_end,created_at,plan_slug,plan_name"
    )
    .eq("user_id", user_id)
    .in(
      "status",
      ["active", "trialing"]
    )
    .order(
      "created_at",
      {
        ascending: false,
      }
    )
    .limit(1)
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  const status =
    cleanStr(
      (data as any).status
    ).toLowerCase();

  if (
    status !== "active" &&
    status !== "trialing"
  ) {
    return null;
  }

  const cpeUnix =
    toUnixMaybe(
      (data as any)
        .current_period_end
    );

  /*
    Si current_period_end est NULL,
    on considère l'abonnement actif.
  */
  if (
    cpeUnix == null ||
    cpeUnix > nowUnix()
  ) {
    return {
      status,

      current_period_end:
        (data as any)
          .current_period_end ??
        null,

      plan_slug:
        cleanStr(
          (data as any).plan_slug
        ) || null,

      plan_name:
        cleanStr(
          (data as any).plan_name
        ) || null,
    };
  }

  return null;
}

/**
 * Lit le compteur utilisé depuis chat_usage,
 * exactement la même table que /api/chat.
 */
async function getUsedLifetime(
  user_id: string
) {
  if (!supabaseAdmin) {
    return 0;
  }

  const {
    data,
    error,
  } = await supabaseAdmin
    .from(CHAT_USAGE_TABLE)
    .select(
      "messages_count,free_limit"
    )
    .eq(
      "user_id",
      user_id
    )
    .limit(1)
    .maybeSingle();

  if (error || !data) {
    return {
      used: 0,
      limit: FREE_LIMIT,
    };
  }

  const rawUsed =
    Number(
      (data as any)
        .messages_count ??
      0
    );

  const rawLimit =
    Number(
      (data as any)
        .free_limit ??
      FREE_LIMIT
    );

  const used =
    Number.isFinite(rawUsed)
      ? Math.max(
          0,
          Math.trunc(rawUsed)
        )
      : 0;

  const limit =
    Number.isFinite(rawLimit)
      ? Math.max(
          0,
          Math.trunc(rawLimit)
        )
      : FREE_LIMIT;

  return {
    used,
    limit:
      limit > 0
        ? limit
        : FREE_LIMIT,
  };
}

export async function GET() {
  try {
    if (!supabaseAdmin) {
      return json(
        {
          error:
            "SUPABASE_ADMIN_MISSING",
        },
        500
      );
    }

    /*
      Session via cookies.
    */
    const supabaseAuth =
      createRouteHandlerClient({
        cookies: () => cookies(),
      });

    const {
      data,
      error,
    } =
      await supabaseAuth
        .auth
        .getSession();

    if (error) {
      return json(
        {
          error:
            "SESSION_ERROR",

          detail:
            cleanStr(
              error.message
            ),
        },
        401
      );
    }

    const user_id =
      data?.session?.user?.id ||
      "";

    /*
      Pas connecté.
      Le vrai quota invité est géré
      directement par /api/chat avec guest_id.
    */
    if (!user_id) {
      const plan: Plan =
        "guest";

      return json({
        plan,
        premium: false,
        mode: "guest",
        require_auth: true,

        limit:
          FREE_LIMIT,

        freeLeft:
          FREE_LIMIT,

        remaining:
          FREE_LIMIT,

        used:
          0,

        planSlug:
          null,

        planName:
          null,
      });
    }

    /*
      Premium ?
    */
    const sub =
      await getActivePremiumSubscription(
        user_id
      );

    if (sub) {
      const plan: Plan =
        "premium";

      return json({
        plan,
        premium: true,
        mode:
          "auth_premium",

        require_auth:
          false,

        /*
          Payant = pas de compteur
          affiché.
        */
        limit:
          null,

        freeLeft:
          null,

        remaining:
          null,

        used:
          null,

        planSlug:
          sub.plan_slug,

        planName:
          sub.plan_name,

        currentPeriodEnd:
          sub.current_period_end,
      });
    }

    /*
      Free :
      lire chat_usage.messages_count
    */
    const usage =
      await getUsedLifetime(
        user_id
      );

    const used =
      usage.used;

    const limit =
      usage.limit;

    const remaining =
      Math.max(
        0,
        limit - used
      );

    const plan: Plan =
      "free";

    return json({
      plan,
      premium: false,
      mode:
        "auth_free",

      require_auth:
        false,

      limit,

      freeLeft:
        remaining,

      remaining,

      used,

      planSlug:
        null,

      planName:
        null,
    });
  } catch (e: any) {
    return json(
      {
        error:
          "SERVER_ERROR",

        detail:
          cleanStr(
            e?.message ||
            e
          ),
      },
      500
    );
  }
}
