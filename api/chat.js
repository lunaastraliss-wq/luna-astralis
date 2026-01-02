// /api/chat.js
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

/*
  Luna Astralis — API Chat (FR)
  ✅ La vraie règle est côté API (pas contournable par le front)
  - Guest (pas de session): FREE_LIMIT via public.guest_usage
  - Auth (session trouvée): PREMIUM obligatoire => sinon PREMIUM_REQUIRED
  - Réponse guest ultra courte (2 phrases + 1 question, 240 chars)
*/

const FREE_LIMIT = 15;

// OpenAI
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Supabase (service role, server-only)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
);

/* =========================
   Utils
========================= */
function clean(v) {
  return (v == null ? "" : String(v)).trim();
}

function safeJson(body) {
  if (body == null) return {};
  if (typeof body === "object") return body;
  if (typeof body === "string") {
    try { return JSON.parse(body); } catch { return {}; }
  }
  return {};
}

function getOutputText(response) {
  const t = response?.output_text;
  if (typeof t === "string" && t.trim()) return t.trim();
  const fallback = response?.output?.[0]?.content?.[0]?.text;
  return typeof fallback === "string" ? fallback.trim() : "";
}

function sha256(s) {
  return crypto.createHash("sha256").update(String(s)).digest("hex");
}

function getClientIp(req) {
  const xff = clean(req.headers["x-forwarded-for"]);
  if (xff) return xff.split(",")[0].trim();
  return clean(req.socket?.remoteAddress) || "";
}

function makeIpHash(req) {
  const ip = getClientIp(req);
  const ua = clean(req.headers["user-agent"]);
  return sha256(`${ip}||${ua}`);
}

function parseCookies(cookieHeader) {
  const out = {};
  const raw = clean(cookieHeader);
  if (!raw) return out;
  raw.split(";").forEach((pair) => {
    const idx = pair.indexOf("=");
    if (idx === -1) return;
    const k = clean(pair.slice(0, idx));
    const v = clean(pair.slice(idx + 1));
    if (!k) return;
    out[k] = v;
  });
  return out;
}

/* =========================
   Supabase session (cookie -> access_token)
   - Fonctionne si ton site est sur le même domaine que Supabase Auth cookies
   - On supporte plusieurs formats de cookies (robuste)
========================= */
function tryExtractAccessTokenFromCookies(req) {
  const cookies = parseCookies(req.headers?.cookie || "");
  const keys = Object.keys(cookies);

  // 1) cookie moderne: sb-<project-ref>-auth-token
  const authTokenKey = keys.find((k) => k.startsWith("sb-") && k.endsWith("-auth-token"));
  if (authTokenKey) {
    const raw = cookies[authTokenKey];
    // souvent URL-encoded
    const decoded = (() => {
      try { return decodeURIComponent(raw); } catch { return raw; }
    })();

    // ce cookie peut être JSON string: {"access_token": "...", ...}
    try {
      const obj = JSON.parse(decoded);
      if (obj?.access_token) return clean(obj.access_token);
    } catch (_) {
      // parfois c’est un token direct (rare)
      if (decoded.split(".").length === 3) return clean(decoded);
    }
  }

  // 2) fallback: sb-access-token (ancien / certains setups)
  const accessKey = keys.find((k) => k === "sb-access-token" || k.endsWith("access-token"));
  if (accessKey) {
    const v = (() => {
      try { return decodeURIComponent(cookies[accessKey]); } catch { return cookies[accessKey]; }
    })();
    if (v && v.split(".").length === 3) return clean(v);
  }

  return "";
}

async function getAuthUserFromRequest(req) {
  // Support optionnel Authorization: Bearer <jwt>
  const auth = clean(req.headers?.authorization || "");
  let token = "";
  if (auth.toLowerCase().startsWith("bearer ")) token = clean(auth.slice(7));

  if (!token) token = tryExtractAccessTokenFromCookies(req);
  if (!token) return null;

  try {
    const { data, error } = await supabase.auth.getUser(token);
    if (error) return null;
    return data?.user || null;
  } catch (_) {
    return null;
  }
}

/* =========================
   Premium check (IMPORTANT)
   👉 Tu dois dire où tu stockes le statut premium.
   Ici je fais un check "multi-try" sans casser:
   - table: profiles (id uuid, is_premium boolean)  OU
   - table: subscriptions (user_id uuid, status text, current_period_end timestamptz)
   Ajuste selon TON schéma.
========================= */
async function isPremiumUser(userId) {
  if (!userId) return false;

  // Try #1: profiles.is_premium
  try {
    const q1 = await supabase
      .from("profiles")
      .select("is_premium")
      .eq("id", userId)
      .maybeSingle();

    if (!q1.error && q1.data && typeof q1.data.is_premium === "boolean") {
      return q1.data.is_premium === true;
    }
  } catch (_) {}

  // Try #2: subscriptions.status + current_period_end
  try {
    const q2 = await supabase
      .from("subscriptions")
      .select("status,current_period_end,plan")
      .eq("user_id", userId)
      .order("current_period_end", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (!q2.error && q2.data) {
      const status = clean(q2.data.status).toLowerCase();
      const cpe = q2.data.current_period_end ? new Date(q2.data.current_period_end) : null;
      const now = new Date();

      const activeLike = status === "active" || status === "trialing";
      const notExpired = cpe ? cpe.getTime() > now.getTime() : true;

      if (activeLike && notExpired) return true;
    }
  } catch (_) {}

  return false;
}

/* =========================
   Guest usage (anti-reset)
   Table: guest_usage(
     guest_id text unique,
     ip_hash  text unique,
     used     int,
     updated_at timestamptz
   )
========================= */
async function getOrInitGuestRow({ guestId, ipHash }) {
  const byIp = await supabase
    .from("guest_usage")
    .select("guest_id, ip_hash, used")
    .eq("ip_hash", ipHash)
    .maybeSingle();

  if (byIp.error) throw new Error(`Supabase read guest_usage (ip_hash): ${byIp.error.message}`);

  if (byIp.data) {
    if (guestId && byIp.data.guest_id !== guestId) {
      await supabase
        .from("guest_usage")
        .update({ guest_id: guestId, updated_at: new Date().toISOString() })
        .eq("ip_hash", ipHash);
    }
    return { used: Number(byIp.data.used || 0) };
  }

  if (guestId) {
    const byGuest = await supabase
      .from("guest_usage")
      .select("guest_id, ip_hash, used")
      .eq("guest_id", guestId)
      .maybeSingle();

    if (byGuest.error) throw new Error(`Supabase read guest_usage (guest_id): ${byGuest.error.message}`);

    if (byGuest.data) {
      if (!byGuest.data.ip_hash) {
        await supabase
          .from("guest_usage")
          .update({ ip_hash: ipHash, updated_at: new Date().toISOString() })
          .eq("guest_id", guestId);
      }
      return { used: Number(byGuest.data.used || 0) };
    }
  }

  const ins = await supabase
    .from("guest_usage")
    .insert([
      {
        guest_id: guestId || `guest_${ipHash.slice(0, 16)}`,
        ip_hash: ipHash,
        used: 0,
        updated_at: new Date().toISOString(),
      },
    ]);

  if (ins.error) {
    const msg = String(ins.error.message || "").toLowerCase();
    if (msg.includes("duplicate") || msg.includes("unique")) {
      const reread = await supabase
        .from("guest_usage")
        .select("used")
        .eq("ip_hash", ipHash)
        .maybeSingle();
      if (reread.error) throw new Error(`Supabase reread guest_usage: ${reread.error.message}`);
      return { used: Number(reread.data?.used || 0) };
    }
    throw new Error(`Supabase insert guest_usage: ${ins.error.message}`);
  }

  return { used: 0 };
}

async function incrementGuestUsedByIpHash(ipHash, nextUsed) {
  const upd = await supabase
    .from("guest_usage")
    .update({ used: nextUsed, updated_at: new Date().toISOString() })
    .eq("ip_hash", ipHash);

  if (upd.error) throw new Error(`Supabase update guest_usage: ${upd.error.message}`);
}

/* =========================
   Guest shortener (ULTRA)
========================= */
function normalizeSpaces(s) {
  return clean(s).replace(/\s+/g, " ");
}
function splitSentencesFR(text) {
  const t = normalizeSpaces(text);
  if (!t) return [];
  const parts = t.split(/(?<=[.!?])\s+/).map((p) => clean(p)).filter(Boolean);
  return parts.length ? parts : [t];
}
function enforceGuestReply(raw) {
  let t = normalizeSpaces(raw);
  if (!t) return "";

  t = t.replace(/•\s*/g, "").replace(/-\s+/g, "");

  let sentences = splitSentencesFR(t).slice(0, 2);
  t = sentences.join(" ").trim();

  const qCount = (t.match(/\?/g) || []).length;
  if (qCount > 1) {
    const lastIdx = t.lastIndexOf("?");
    const before = t.slice(0, lastIdx).replace(/\?/g, ".");
    const after = t.slice(lastIdx + 1);
    t = (before + "?" + after).replace(/\.\s*\./g, ".").trim();
  }

  if (!t.includes("?")) {
    if (!/[.!]$/.test(t)) t += ".";
    t += " Qu’est-ce qui te touche le plus là-dedans ?";
  } else {
    const lastQ = t.lastIndexOf("?");
    const tail = t.slice(lastQ + 1).trim();
    if (tail.length > 0) t = t.slice(0, lastQ + 1).trim();
  }

  const MAX_CHARS = 240;
  if (t.length > MAX_CHARS) {
    t = t.slice(0, MAX_CHARS).trim().replace(/[.,;:!?]$/g, "") + "…";
  }

  return t.trim();
}

/* =========================
   Handler
========================= */
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Méthode non autorisée" });

  try {
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "OPENAI_API_KEY manquante." });
    }
    if (!process.env.SUPABASE_URL) {
      return res.status(500).json({ error: "SUPABASE_URL manquante." });
    }
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return res.status(500).json({ error: "SUPABASE_SERVICE_ROLE_KEY manquante." });
    }

    const body = safeJson(req.body);

    const message = clean(body.message);
    const signKey = clean(body.signKey);
    const signName = clean(body.signName);
    const history = Array.isArray(body.history) ? body.history : [];

    // guestId sert uniquement si PAS connecté
    const guestId = clean(body.guestId);

    if (!message) return res.status(400).json({ error: "Message vide." });

    // ✅ 1) Déterminer AUTH uniquement via session (cookies/Authorization)
    const user = await getAuthUserFromRequest(req);
    const isAuth = !!user;

    // ✅ 2) ENFORCEMENT
    const ipHash = makeIpHash(req);

    if (!isAuth) {
      // GUEST: limiter ici
      const row = await getOrInitGuestRow({ guestId, ipHash });
      const used = Number(row.used || 0);

      if (used >= FREE_LIMIT) {
        return res.status(403).json({ error: "FREE_LIMIT_REACHED", limit: FREE_LIMIT, used });
      }
      await incrementGuestUsedByIpHash(ipHash, used + 1);
    } else {
      // AUTH: premium obligatoire
      const premium = await isPremiumUser(user.id);
      if (!premium) {
        return res.status(403).json({ error: "PREMIUM_REQUIRED" });
      }
    }

    // ✅ 3) Instructions
    const signLabel = signName || signKey || "non précisé";

    const baseStyle = `
Tu es Luna Astralis.
Astrologie = lecture symbolique, jamais une fatalité.
Psychologie douce (non thérapeutique). Aucun diagnostic.
Réponds uniquement en français.
Ton: doux, calme, clair.
`.trim();

    const guestRules = `
MODE INVITÉ:
- Réponds en 1 à 2 phrases maximum, puis 1 question finale.
- Pas de listes, pas d’analyse complète.
`.trim();

    const authRules = `
MODE PREMIUM:
- Tu peux approfondir, nuancer, et donner des pistes concrètes.
`.trim();

    const safety = `
Si détresse grave (suicide / automutilation), encourage à contacter une aide immédiate.
`.trim();

    const instructions = `
${baseStyle}
Signe actuel : ${signLabel}
${isAuth ? authRules : guestRules}
${safety}
`.trim();

    // ✅ 4) Historique réduit
    const recentHistory = history
      .slice(-4)
      .map((m) => ({
        role: m.role === "ai" ? "assistant" : "user",
        content: clean(m.text),
      }))
      .filter((m) => m.content);

    const input = [...recentHistory, { role: "user", content: message }];

    // ✅ 5) OpenAI
    const maxTokens = isAuth ? 420 : 90;

    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      instructions,
      input,
      max_output_tokens: maxTokens,
    });

    let reply = getOutputText(response);
    reply = isAuth ? clean(reply) : enforceGuestReply(reply);

    if (!reply) {
      reply = isAuth
        ? "Je t’écoute. Dis-moi ce que tu vis, et ce que tu veux comprendre."
        : "Je t’écoute. Qu’est-ce qui te touche le plus en ce moment ?";
    }

    return res.status(200).json({ reply });
  } catch (err) {
    return res.status(500).json({
      error: err?.message || "Erreur serveur",
      debug: {
        hasOpenAIKey: Boolean(process.env.OPENAI_API_KEY),
        hasSupabaseUrl: Boolean(process.env.SUPABASE_URL),
        hasServiceRole: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
      },
    });
  }
}
