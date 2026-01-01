// /api/chat.js
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

/*
  Luna Astralis — API Chat (FR)
  - Limite INVITÉE: 15 messages (table public.guest_usage)
  - Anti-reset: quota lié à guestId + ip_hash (hash IP + User-Agent)
  - Mode guest: réponses courtes (2–3 paragraphes)
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
  // On ne stocke pas l'IP brute, juste un hash
  return sha256(`${ip}||${ua}`);
}

/* =========================
   Guest usage (anti-reset)
   Table: guest_usage(guest_id text unique, ip_hash text unique, used int, updated_at timestamptz)
========================= */
async function getOrInitGuestRow({ guestId, ipHash }) {
  // 1) On cherche d’abord par ip_hash (le plus fiable contre reset)
  // 2) Sinon par guest_id
  // 3) Sinon on crée une ligne

  // a) chercher par ip_hash
  const byIp = await supabase
    .from("guest_usage")
    .select("guest_id, ip_hash, used")
    .eq("ip_hash", ipHash)
    .maybeSingle();

  if (byIp.error) {
    throw new Error(`Supabase read guest_usage (ip_hash): ${byIp.error.message}`);
  }
  if (byIp.data) {
    // Si l'utilisateur a un nouveau guestId, on le synchronise (anti-reset côté navigateur)
    if (guestId && byIp.data.guest_id !== guestId) {
      const upd = await supabase
        .from("guest_usage")
        .update({ guest_id: guestId, updated_at: new Date().toISOString() })
        .eq("ip_hash", ipHash);

      if (upd.error) {
        // non-bloquant, mais on signale si tu veux
        // throw new Error(`Supabase update guest_usage (sync guest_id): ${upd.error.message}`);
      }
    }
    return { used: Number(byIp.data.used || 0) };
  }

  // b) chercher par guest_id (au cas où)
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
      // S'il manque ip_hash (ancienne ligne), on la met
      if (!byGuest.data.ip_hash) {
        const upd2 = await supabase
          .from("guest_usage")
          .update({ ip_hash: ipHash, updated_at: new Date().toISOString() })
          .eq("guest_id", guestId);
        if (upd2.error) {
          // idem: on peut rendre strict si tu préfères
        }
      }
      return { used: Number(byGuest.data.used || 0) };
    }
  }

  // c) créer une nouvelle ligne
  const ins = await supabase
    .from("guest_usage")
    .insert([{ guest_id: guestId || `guest_${ipHash.slice(0, 16)}`, ip_hash: ipHash, used: 0 }]);

  if (ins.error) {
    // Si contrainte unique ip_hash déjà prise (course), on relit
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
      return res.status(500).json({ error: "OPENAI_API_KEY manquante (Vercel > Environment Variables)." });
    }
    if (!process.env.SUPABASE_URL) {
      return res.status(500).json({ error: "SUPABASE_URL manquante (Vercel > Environment Variables)." });
    }
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return res.status(500).json({ error: "SUPABASE_SERVICE_ROLE_KEY manquante (Vercel > Environment Variables)." });
    }

    const body = safeJson(req.body);

    const message = clean(body.message);
    const signKey = clean(body.signKey);
    const signName = clean(body.signName);
    const history = Array.isArray(body.history) ? body.history : [];

    const mode = clean(body.mode) || "guest"; // "guest" ou "auth"
    const guestId = clean(body.guestId);      // idéalement fourni par le front

    if (!message) return res.status(400).json({ error: "Message vide." });

    const ipHash = makeIpHash(req);

    /* =========================
       1) LIMITE INVITÉ (anti-reset)
    ========================= */
    if (mode === "guest") {
      // même si guestId change (changement de signe / reset navigateur), ipHash garde le quota
      const row = await getOrInitGuestRow({ guestId, ipHash });
      const used = Number(row.used || 0);

      if (used >= FREE_LIMIT) {
        return res.status(403).json({
          error: "FREE_LIMIT_REACHED",
          limit: FREE_LIMIT,
          used,
        });
      }

      // Incrémente AVANT l'appel OpenAI (anti-spam)
      await incrementGuestUsedByIpHash(ipHash, used + 1);
    }

    /* =========================
       2) INSTRUCTIONS (FR) + MODE
       - guest: réponses courtes et incomplètes (conversion)
       - auth: profond
    ========================= */
    const signLabel = signName || signKey || "non précisé";

    const guestRules = `
MODE INVITÉ (gratuit) :
- Réponds en 2 à 3 paragraphes courts maximum.
- Ne donne pas une analyse complète.
- Termine par UNE seule question ouverte.
- Ton style est fluide, chaleureux, et donne envie d’approfondir.
`.trim();

    const authRules = `
MODE CONNECTÉ :
- Tu peux approfondir librement et structurer si utile.
- Donne des pistes concrètes et détaillées.
`.trim();

    const welcomeStyle = `
Tu es Luna Astralis.
Tu combines astrologie et psychologie douce (non thérapeutique).
Aucun diagnostic médical.
Astrologie = lecture symbolique, jamais une fatalité.
Réponds uniquement en français.
Ton calme, doux, structurant.
`.trim();

    const instructions = `
${welcomeStyle}

Contexte :
Signe actuel : ${signLabel}

${mode === "guest" ? guestRules : authRules}

Règles générales :
- Pose au maximum 1 à 3 questions (en invité: 1 seule question).
- Si la demande est floue, guide avec : événement → émotion → pensée → besoin.
- Si détresse grave (suicide / automutilation), encourage à contacter une aide immédiate.
`.trim();

    /* =========================
       3) HISTORIQUE
    ========================= */
    const recentHistory = history
      .slice(-12)
      .map((m) => ({
        role: m.role === "ai" ? "assistant" : "user",
        content: clean(m.text),
      }))
      .filter((m) => m.content);

    const input = [...recentHistory, { role: "user", content: message }];

    /* =========================
       4) OPENAI
       - guest: moins de tokens + coupe de sécurité
    ========================= */
    const maxTokens = mode === "guest" ? 220 : 450;

    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      instructions,
      input,
      max_output_tokens: maxTokens,
    });

    let reply = getOutputText(response);

    // Coupe sécurité (si jamais l'IA dépasse)
    if (mode === "guest") {
      const MAX_CHARS_GUEST = 700; // ~2–3 paragraphes courts
      if (reply.length > MAX_CHARS_GUEST) reply = reply.slice(0, MAX_CHARS_GUEST).trim() + "…";
    }

    return res.status(200).json({
      reply: reply || "Je t’écoute. Qu’est-ce qui te pèse le plus aujourd’hui ?",
    });
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
