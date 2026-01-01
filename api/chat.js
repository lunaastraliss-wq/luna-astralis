// /api/chat.js
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // à mettre dans Vercel -> Env Vars
});

function pick(obj, keys) {
  const out = {};
  for (const k of keys) if (obj && obj[k] != null) out[k] = obj[k];
  return out;
}

export default async function handler(req, res) {
  // (Optionnel) CORS minimal si tu testes depuis un autre domaine
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        error: "OPENAI_API_KEY manquante (Vercel > Settings > Environment Variables).",
      });
    }

    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const { message, signKey, signName, lang } = pick(body, [
      "message",
      "signKey",
      "signName",
      "lang",
    ]);

    const userText = (message || "").toString().trim();
    if (!userText) {
      return res.status(400).json({ error: "Message vide." });
    }

    // Contexte signe (optionnel)
    const signLabel = (signName || signKey || "").toString().trim();
    const language = (lang || "fr").toString().trim();

    const instructions = `
Tu es Luna Astralis.
Tu combines astrologie et psychologie douce.
Tu aides à comprendre émotions, schémas relationnels et cycles intérieurs.
Ton approche est bienveillante, claire, introspective.
Pas de diagnostic médical.
Astrologie = outil de lecture, jamais une fatalité.

Règles de style:
- Réponds en ${language}.
- Pose 1 à 3 questions max si nécessaire.
- Si la demande est trop vague, guide avec une structure simple.
- Si risque de crise (suicide/automutilation), encourage à contacter de l’aide immédiatement.
`.trim();

    const input = [
      {
        role: "user",
        content:
          (signLabel ? `Signe actuel: ${signLabel}\n\n` : "") +
          `Message utilisateur: ${userText}`,
      },
    ];

    const response = await client.responses.create({
      model: "gpt-5.2",
      instructions,
      input,
      // options utiles (tu peux ajuster)
      reasoning: { effort: "low" },
      max_output_tokens: 400,
    });

    return res.status(200).json({
      reply: response.output_text || "",
    });
  } catch (err) {
    // Erreur JSON parse, OpenAI, etc.
    return res.status(500).json({
      error: err?.message || "Server error",
    });
  }
}
