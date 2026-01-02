// /api/chat.js
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

/*
  Luna Astralis — API Chat (FR)
  - Limite INVITÉE: 15 messages (table public.guest_usage)
  - Anti-reset: quota lié à guestId + ip_hash (hash IP + User-Agent)
  - Mode guest: réponses COURTES + 1 question finale (conversion)
  - Optimisé vitesse: historique réduit, tokens réduits, post-traitement strict
*/

const FREE_LIMIT = 15;

// OpenAI (server-side)
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Supabase (server-side) — SERVICE ROLE KEY uniquement côté serveur
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
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return {};
}

function getOutputText(response) {
  const t = response?.output_text;
  if (typeof t === "string" && t.trim()) return t.trim();
  const fallback = response?.output?.[0]?.content?.[0]?.text;
  return typeof fallback === "string" ? fallback.trim() : "";
}

function getClientIp(req) {
  // Vercel / proxies: x-forwarded-for peut contenir "ip, ip, ip"
  const xff = clean(req.headers["x-forwarded-for"]);
  if (xff) return xff.split(",")[0].trim();
  return clean(req.socket?.remoteAddress) || "";
}

function sha256(s) {
  return crypto.createHash("sha256").update(String(s)).digest("hex");
}

function makeIpHash(req) {
  const ip = getClientIp(req);
  const ua = clean(req.headers["user-agent"]);
  return sha256(`${ip}||${ua}`);
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
  // 1) chercher par ip_hash (anti-reset)
  const byIp = await supabase
    .from("guest_usage")
    .select("guest_id, ip_hash, used")
    .eq("ip_hash", ipHash)
    .maybeSingle();

  if (byIp.error) {
    throw new Error(`Supabase read guest_usage (ip_hash): ${byIp.error.message}`);
  }

  if (byIp.data) {
    // sync guest_id si nécessaire (non bloquant)
    if (guestId && byIp.data.guest_id !== guestId) {
      await supabase
        .from("guest_usage")
        .update({ guest_id: guestId, updated_at: new Date().toISOString() })
        .eq("ip_hash", ipHash);
    }
    return { used: Number(byIp.data.used || 0) };
  }

  // 2) chercher par guest_id (fallback)
  if (guestId) {
    const byGuest = await supabase
      .from("guest_usage")
      .select("guest_id, ip_hash, used")
      .eq("guest_id", guestId)
      .maybeSingle();

    if (byGuest.error) {
      throw new Error(`Supabase read guest_usage (guest_id): ${byGuest.error.message}`);
    }

    if (byGuest.data) {
      // si ip_hash manquait (ancienne donnée), on le met
      if (!byGuest.data.ip_hash) {
        await supabase
          .from("guest_usage")
          .update({ ip_hash: ipHash, updated_at: new Date().toISOString() })
          .eq("guest_id", guestId);
      }
      return { used: Number(byGuest.data.used || 0) };
    }
  }

  // 3) créer une nouvelle ligne
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
    // Course/contrainte unique: relire
    const msg = String(ins.error.message || "").toLowerCase();
    if (msg.includes("duplicate") || msg.includes("unique")) {
      const reread = await supabase
        .from("guest_usage")
        .select("used")
        .eq("ip_hash", ipHash)
        .maybeSingle();

      if (reread.error) {
        throw new Error(`Supabase reread guest_usage: ${reread.error.message}`);
      }
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
   Enforce short guest replies
   - max 3 phrases
   - 1 seule question (la dernière)
   - coupe stricte en caractères
========================= */
function normalizeSpaces(s) {
  return clean(s).replace(/\s+/g, " ");
}

function splitSentencesFR(text) {
  const t = normalizeSpaces(text);
  if (!t) return [];
  // Split simple sur fin de phrase.
  const parts = t.split(/(?<=[.!?])\s+/).map((p) => clean(p)).filter(Boolean);
  return parts.length ? parts : [t];
}

function enforceGuestReply(raw) {
  let t = normalizeSpaces(raw);
  if (!t) return "";

  // Retire puces/listes
  t = t.replace(/•\s*/g, "").replace(/-\s+/g, "");

  // Max 3 phrases
  const sentences = splitSentencesFR(t).slice(0, 3);
  t = sentences.join(" ");

  // Une seule question, à la fin
  const qCount = (t.match(/\?/g) || []).length;
  if (qCount > 1) {
    const lastIdx = t.lastIndexOf("?");
    const before = t.slice(0, lastIdx).replace(/\?/g, "."); // remplace questions intermédiaires
    const after = t.slice(lastIdx + 1);
    t = (before + "?" + after).replace(/\.\s*\./g, ".").trim();
  }

  // Si pas de question, on en ajoute une
  if (!t.includes("?")) {
    if (!/[.!]$/.test(t)) t += ".";
    t += " Qu’est-ce qui te préoccupe le plus en ce moment ?";
  } else {
    // Coupe tout après le dernier ?
    const lastQ = t.lastIndexOf("?");
    const tail = t.slice(lastQ + 1).trim();
    if (tail.length > 0) t = t.slice(0, lastQ + 1);
  }

  // Coupe stricte chars
  const MAX_CHARS = 380;
  if (t.length > MAX_CHARS) {
    t = t
      .slice(0, MAX_CHARS)
      .trim()
      .replace(/[.,;:!?]$/g, "") + "…";
  }

  return t.trim();
}

/* =========================
   Handler
========================= */
export default async function handler(req, res) {
  // CORS simple
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Méthode non autorisée" });

  try {
    // Vérifs ENV
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        error: "OPENAI_API_KEY manquante (Vercel > Environment Variables).",
      });
    }
    if (!process.env.SUPABASE_URL) {
      return res.status(500).json({
        error: "SUPABASE_URL manquante (Vercel > Environment Variables).",
      });
    }
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return res.status(500).json({
        error: "SUPABASE_SERVICE_ROLE_KEY manquante (Vercel > Environment Variables).",
      });
    }

    const body = safeJson(req.body);

    const message = clean(body.message);
    const signKey = clean(body.signKey);
    const signName = clean(body.signName);
    const history = Array.isArray(body.history) ? body.history : [];

    const mode = clean(body.mode) || "guest"; // "guest" ou "auth"
    const guestId = clean(body.guestId);

    if (!message) return res.status(400).json({ error: "Message vide." });

    const ipHash = makeIpHash(req);

    /* =========================
       1) LIMITE INVITÉ (anti-reset)
    ========================= */
    if (mode === "guest") {
      const row = await getOrInitGuestRow({ guestId, ipHash });
      const used = Number(row.used || 0);

      if (used >= FREE_LIMIT) {
        return res.status(403).json({
          error: "FREE_LIMIT_REACHED",
          limit: FREE_LIMIT,
          used,
        });
      }

      // incrémente avant OpenAI (anti-spam)
      await incrementGuestUsedByIpHash(ipHash, used + 1);
    }

    /* =========================
       2) INSTRUCTIONS (FR)
    ========================= */
    const signLabel = signName || signKey || "non précisé";

    const baseStyle = `
Tu es Luna Astralis.
Tu combines astrologie (lecture symbolique) et psychologie douce (non thérapeutique).
Aucun diagnostic médical.
Réponds uniquement en français.
Ton: doux, calme, clair.
`.trim();

    const guestRules = `
MODE INVITÉ (gratuit) — RÈGLES STRICTES :
- Réponds très directement (pas de préambule).
- MAXIMUM 3 PHRASES.
- MAXIMUM 380 caractères.
- UNE seule question au total, et elle doit être la dernière phrase.
- Pas de liste, pas de plan, pas d’analyse complète.
- Donne un aperçu + une petite piste, puis invite à préciser.
`.trim();

    const authRules = `
MODE CONNECTÉ :
- Tu peux approfondir et structurer si utile.
- Donne des pistes concrètes et nuancées.
- 1 à 3 questions max si pertinent.
`.trim();

    const safety = `
Si détresse grave (suicide / automutilation) :
- Encourage immédiatement à contacter une aide locale / urgence.
- Reste bref et bienveillant.
`.trim();

    const instructions = `
${baseStyle}

Contexte :
Signe actuel : ${signLabel}

${mode === "guest" ? guestRules : authRules}

Règle de conduite :
- Si la demande est floue, guide avec : événement → émotion → pensée → besoin.
${safety}
`.trim();

    /* =========================
       3) HISTORIQUE (OPTIMISÉ VITESSE)
       - 6 messages au lieu de 12
    ========================= */
    const recentHistory = history
      .slice(-6)
      .map((m) => ({
        role: m.role === "ai" ? "assistant" : "user",
        content: clean(m.text),
      }))
      .filter((m) => m.content);

    const input = [...recentHistory, { role: "user", content: message }];

    /* =========================
       4) OPENAI (OPTIMISÉ)
       - guest: tokens bas
    ========================= */
    const maxTokens = mode === "guest" ? 120 : 520;

    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      instructions,
      input,
      max_output_tokens: maxTokens,
    });

    let reply = getOutputText(response);

    // Post-traitement strict guest
    if (mode === "guest") reply = enforceGuestReply(reply);
    else reply = clean(reply);

    if (!reply) {
      reply =
        mode === "guest"
          ? "Je t’écoute. Qu’est-ce qui te préoccupe le plus en ce moment ?"
          : "Je t’écoute. Dis-moi ce que tu vis en ce moment, et ce qui te pèse le plus.";
    }

    return res.status(200).json({ reply });
  } catch (err) {
    const msg = err?.message || "Erreur serveur";
    return res.status(500).json({
      error: msg,
      debug: {
        hasOpenAIKey: Boolean(process.env.OPENAI_API_KEY),
        hasSupabaseUrl: Boolean(process.env.SUPABASE_URL),
        hasServiceRole: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
      },
    });
  }
}
