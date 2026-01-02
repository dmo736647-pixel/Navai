export interface Env {
  GEMINI_API_KEY: string;
}

const BASE = "https://generativelanguage.googleapis.com/v1beta";
const MODELS = {
  search: "gemini-3-flash-preview",
  summary: "gemini-3-flash-preview",
  chat: "gemini-3-pro-preview",
};

async function callGenerateContent(model: string, prompt: string, key: string, extra?: any) {
  const url = `${BASE}/models/${model}:generateContent?key=${encodeURIComponent(key)}`;
  const body = {
    contents: [{ role: "user", parts: [{ text: prompt }]}],
    ...(extra || {})
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(`Gemini API error: ${res.status} ${msg}`);
  }
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
  return text;
}

function jsonResponse(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" }
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };
    try {
      if (url.pathname === "/v1/search" && request.method === "POST") {
        const { query, language = "en" } = await request.json();
        if (!env.GEMINI_API_KEY) {
          return jsonResponse({ error: "Server API key missing" }, 500);
        }
        const prompt = `
          You are an expert AI tool search engine.
          User Query: "${query}"
          Target Language: "${language}"

          STRICT INSTRUCTIONS:
          1. **Exact Match**: If the query is a specific tool name (e.g., "Suno", "Midjourney"), your response MUST contain ONLY that specific tool. Do NOT include competitors or alternatives unless the query explicitly asks for them (e.g. "alternatives to Suno").
          2. **Language**: The 'description', 'category', and 'pricing' fields MUST be translated into ${language}.
          3. **Relevance**: If the query is a category (e.g. "music generator"), return top 3-5 high-quality tools.
          4. **Quality**: Do not invent tools. Only return real, existing tools.
          
          Output Format (JSON Only):
          {
            "tools": [
              {
                "name": "Exact Tool Name",
                "description": "Concise description (max 20 words) in ${language}.",
                "category": "The specific category translated to ${language}",
                "pricing": "Pricing translated to ${language} (e.g. Free/Paid/Freemium)",
                "url": "Official URL",
                "tags": ["tag1", "tag2"]
              }
            ]
          }
          IMPORTANT: Return ONLY raw JSON. No markdown blocks.
        `;
        const text = await callGenerateContent(MODELS.search, prompt, env.GEMINI_API_KEY);
        let jsonText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const match = jsonText.match(/\{[\s\S]*\}/);
        if (match) jsonText = match[0];
        let data;
        try { data = JSON.parse(jsonText); } catch { data = { tools: [] }; }
        return new Response(JSON.stringify(data), { status: 200, headers: { ...cors, "content-type": "application/json" }});
      }
      if (url.pathname === "/v1/summary" && request.method === "POST") {
        const { toolName, language = "en" } = await request.json();
        const prompt = `Provide a 1-sentence quick summary of what the AI tool "${toolName}" is best known for. Write the summary in ${language}. Return ONLY the sentence.`;
        const text = await callGenerateContent(MODELS.summary, prompt, env.GEMINI_API_KEY);
        return new Response(JSON.stringify({ summary: text }), { status: 200, headers: { ...cors, "content-type": "application/json" }});
      }
      if (url.pathname === "/v1/chat" && request.method === "POST") {
        const { history = [], message = "", language = "en" } = await request.json();
        // Flatten history to a single instruction for simplicity
        const histText = history.map((h: any) => `${h.role}: ${h.parts?.[0]?.text || h.text || ""}`).join("\n");
        const prompt = `You are NavAI, a helpful expert consultant on AI software tools. Reply in ${language}.
        Conversation so far:
        ${histText}
        User: ${message}`;
        const text = await callGenerateContent(MODELS.chat, prompt, env.GEMINI_API_KEY);
        return new Response(JSON.stringify({ text }), { status: 200, headers: { ...cors, "content-type": "application/json" }});
      }
      return new Response("Not Found", { status: 404, headers: cors });
    } catch (e: any) {
      return jsonResponse({ error: e?.message || String(e) }, 500);
    }
  }
};
