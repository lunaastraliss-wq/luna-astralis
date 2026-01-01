// /api/chat.js
import OpenAI from "openai";

/*
  Luna Astralis — API Chat (FR uniquement)
  - Astrologie + psychologie douce
  - Aucun diagnostic médical
  - Usage via fetch("/api/chat") depuis chat.html
*/

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function safeParse(body) {
  if (typeof body === "string") {
    try { return JSON.parse(body); } catch { return {}; }
  }
  return body || {};
}

function clean(text) {
  return (text == null ? "" : String(text)).trim();
}

function getOutputText(response) {
  if (response?.output_text) return response.output_text.trim();
  const fallback = response?.output?.[0]?.content?.[0]?.text;
  return typeof fallback === "string" ? fallback.trim() : "";
}

export default async function handler(req, res) {
  // CORS simple (ok pour Vercel)
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

    const body = safeParse(req.body);

    const message = clean(body.message);
    const signKey = clean(body.signKey);
    const signName = clean(body.signName);
    const history = Array.isArray(body.history) ? body.history : [];

    if (!message) {
      return res.status(400).json({ error: "Message vide." });
    }

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
- Pose au maximum 1 à 3 questions.
- Si la demande est floue, guide avec :
  événement → émotion → pensée → besoin.
- Si une détresse grave est exprimée (suicide, automutilation),
  encourage clairement à contacter une aide professionnelle immédiate.

Contexte :
Signe actuel : ${signLabel}
`.trim();

    // Historique léger (optionnel)
    const recentHistory = history
      .slice(-12)
      .map(m => ({
        role: m.role === "ai" ? "assistant" : "user",
        content: clean(m.text),
      }))
      .filter(m => m.content);

    const input = [
      ...recentHistory,
      {
        role: "user",
        content: `Message utilisateur : ${message}`,
      },
    ];

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
