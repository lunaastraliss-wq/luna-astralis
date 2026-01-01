// /api/chat.js
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

/*
  Luna Astralis — API Chat (FR uniquement)
  - Astrologie + psychologie douce
  - Aucun diagnostic médical
  - Limite INVITÉE: 15 messages (table public.guest_usage)
  - Appelé via fetch("/api/chat") depuis chat.html
*/

const FREE_LIMIT = 15;

// ✅ OpenAI (server-side)
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ✅ Supabase (server-side) — SERVICE ROLE KEY uniquement côté serveur
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

  // fallback (structure parfois différente)
  const fallback = response?.output?.[0]?.content?.[0]?.text;
  return typeof fallback === "string" ? fallback.trim() : "";
}

/* =========================
   Guest usage helpers
========================= */
async function getOrInitGuestUsed(guestId) {
  const { data, error } = await supabase
    .from("guest_usage")
    .select("used")
    .eq("guest_id", guestId)
    .single();

  if (error) {
    const msg = String(error.message || "").toLowerCase();
    const code = String(error.code || "");
    const isNoRows =
      code === "PGRST116" || msg.includes("no rows") || msg.includes("0 rows");

    if (!isNoRows) {
      throw new Error(`Supabase read guest_usage: ${error.message || "Erreur"}`);
    }

    const { error: insErr } = await supabase
      .from("guest_usage")
      .insert([{ guest_id: guestId, used: 0 }]);

    if (insErr) {
      throw new Error(`Supabase insert guest_usage: ${insErr.message}`);
    }
    return 0;
  }

  return Number(data?.used || 0);
}

async function incrementGuestUsed(guestId, newUsed) {
  const { error } = await supabase
    .from("guest_usage")
    .update({ used: newUsed, updated_at: new Date().toISOString() })
    .eq("guest_id", guestId);

  if (error) throw new Error(`Supabase update guest_usage: ${error.message}`);
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
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    // ✅ Vérifs ENV
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
        error:
          "SUPABASE_SERVICE_ROLE_KEY manquante (Vercel > Environment Variables).",
      });
    }

    const body = safeJson(req.body);

    const message = clean(body.message);
    const signKey = clean(body.signKey);
    const signName = clean(body.signName);
    const history = Array.isArray(body.history) ? body.history : [];

    const mode = clean(body.mode) || "guest"; // "guest" ou "auth"
    const guestId = clean(body.guestId); // requis si mode=guest

    if (!message) return res.status(400).json({ error: "Message vide." });

    /* =========================
       1) LIMITE INVITÉ
    ========================= */
    if (mode === "guest") {
      if (!guestId) {
        return res.status(400).json({ error: "guestId manquant (mode invité)." });
      }

      const used = await getOrInitGuestUsed(guestId);

      if (used >= FREE_LIMIT) {
        return res.status(403).json({
          error: "FREE_LIMIT_REACHED",
          limit: FREE_LIMIT,
          used,
        });
      }

      // Incrémente avant l'appel OpenAI (anti-spam)
      await incrementGuestUsed(guestId, used + 1);
    }

    /* =========================
       2) INSTRUCTIONS (FR)
    ========================= */
    const signLabel = signName || signKey || "non précisé";

    const instructions = `
Tu es Luna Astralis.
Tu combines astrologie et psychologie douce.
Tu aides à comprendre émotions, schémas relationnels et cycles intérieurs.
Ton approche est bienveillante, claire et introspective.
Aucun diagnostic médical.
L’astrologie est un outil de lecture symbolique, jamais une fatalité.

Règles :
- Réponds uniquement en français.
- Ton calme, doux et structurant.
- Réponse claire et utile, pas trop longue.
- Pose au maximum 1 à 3 questions.
- Si la demande est floue, guide avec : événement → émotion → pensée → besoin.
- Si détresse grave (suicide / automutilation), encourage clairement à contacter une aide immédiate.

Contexte :
Signe actuel : ${signLabel}
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
    ========================= */
    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      instructions,
      input,
      max_output_tokens: 450,
    });

    const reply = getOutputText(response);

    return res.status(200).json({
      reply: reply || "Je t’écoute. Peux-tu préciser ce que tu ressens ?",
    });
  } catch (err) {
    // ✅ Debug utile côté navigateur + logs Vercel
    const msg = err?.message || "Erreur serveur";
    return res.status(500).json({
      error: msg,
      // tu peux enlever debug ensuite
      debug: {
        hasOpenAIKey: Boolean(process.env.OPENAI_API_KEY),
        hasSupabaseUrl: Boolean(process.env.SUPABASE_URL),
        hasServiceRole: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
      },
    });
  }
}
