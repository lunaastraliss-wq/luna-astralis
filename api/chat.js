// /api/chat.js
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

/*
  Luna Astralis — API Chat (FR uniquement)
  - Astrologie + psychologie douce
  - Aucun diagnostic médical
  - Limite INVITÉE: 15 messages (table public.guest_usage)
  - Usage via fetch("/api/chat") depuis chat.html
*/

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ⚠️ IMPORTANT : utiliser la SERVICE ROLE KEY côté serveur (Vercel env vars)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const FREE_LIMIT = 15;

function safeParse(body) {
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body || {};
}

function clean(v) {
  return (v == null ? "" : String(v)).trim();
}

function getOutputText(response) {
  if (response?.output_text) return response.output_text.trim();
  const fallback = response?.output?.[0]?.content?.[0]?.text;
  return typeof fallback === "string" ? fallback.trim() : "";
}

async function getOrInitGuestUsed(guestId) {
  // 1) Essayer de lire
  const { data, error } = await supabase
    .from("guest_usage")
    .select("used")
    .eq("guest_id", guestId)
    .single();

  // Si pas trouvé (ou erreur "no rows"), on crée
  if (error || !data) {
    const { error: insErr } = await supabase
      .from("guest_usage")
      .insert([{ guest_id: guestId, used: 0 }]);

    if (insErr) throw new Error(insErr.message);

    return 0;
  }

  return Number(data.used || 0);
}

async function incrementGuestUsed(guestId, newUsed) {
  const { error } = await supabase
    .from("guest_usage")
    .update({ used: newUsed, updated_at: new Date().toISOString() })
    .eq("guest_id", guestId);

  if (error) throw new Error(error.message);
}

export default async function handler(req, res) {
  // CORS simple (ok Vercel)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        error: "Clé OPENAI_API_KEY manquante (Vercel > Environment Variables).",
      });
    }
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return res.status(500).json({
        error:
          "SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY manquante (Vercel > Environment Variables).",
      });
    }

    const body = safeParse(req.body);

    const message = clean(body.message);
    const signKey = clean(body.signKey);
    const signName = clean(body.signName);
    const history = Array.isArray(body.history) ? body.history : [];

    // guest control
    const mode = clean(body.mode) || "guest"; // "guest" ou "auth" (ton front l'envoie déjà)
    const guestId = clean(body.guestId);      // requis si mode=guest

    if (!message) return res.status(400).json({ error: "Message vide." });

    /* =========================
       1) LIMITE INVITÉ (15)
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

      // on incrémente AVANT l'appel OpenAI (plus safe contre spam)
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

Règles de réponse :
- Réponds uniquement en français.
- Ton calme, doux et structurant.
- Réponse claire et utile, pas trop longue.
- Pose au maximum 1 à 3 questions.
- Si la demande est floue, guide avec :
  événement → émotion → pensée → besoin.
- Si une détresse grave est exprimée (suicide, automutilation),
  encourage clairement à contacter une aide professionnelle immédiate.

Contexte :
Signe actuel : ${signLabel}
`.trim();

    /* =========================
       3) HISTORIQUE (optionnel)
    ========================= */
    const recentHistory = history
      .slice(-12)
      .map((m) => ({
        role: m.role === "ai" ? "assistant" : "user",
        content: clean(m.text),
      }))
      .filter((m) => m.content);

    const input = [
      ...recentHistory,
      { role: "user", content: `Message utilisateur : ${message}` },
    ];

    /* =========================
       4) OPENAI
    ========================= */
    const response = await client.responses.create({
      model: "gpt-5.2",
      instructions,
      input,
      reasoning: { effort: "low" },
      max_output_tokens: 450,
    });

    const reply = getOutputText(response);

    return res.status(200).json({
      reply: reply || "Je t’écoute. Peux-tu préciser ce que tu ressens ?",
    });
  } catch (err) {
    return res.status(500).json({
      error: err?.message || "Erreur serveur",
    });
  }
}
