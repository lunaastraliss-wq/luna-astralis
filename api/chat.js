import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    const response = await client.responses.create({
      model: "gpt-5.2",
      input: [
        {
          role: "system",
          content: `
Tu es Luna Astralis.
Tu combines astrologie et psychologie douce.
Tu aides à comprendre émotions, schémas relationnels et cycles intérieurs.
Ton approche est bienveillante, claire, introspective.
Pas de diagnostic médical.
Astrologie = outil de lecture, jamais une fatalité.
`
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    res.status(200).json({
      reply: response.output_text
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
