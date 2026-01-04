import { GoogleGenAI, Type } from "@google/genai";
import { Tool, ToolCategory, PricingModel } from '../types';

const readApiKey = (): string => {
  try {
    const env = (import.meta as any).env || {};
    return (
      env.VITE_GEMINI_API_KEY ||
      env.GEMINI_API_KEY ||
      (typeof window !== 'undefined' && (window as any).GEMINI_API_KEY) ||
      (typeof localStorage !== 'undefined' && localStorage.getItem('GEMINI_API_KEY')) ||
      ''
    );
  } catch {
    return '';
  }
};

const getProxyUrl = (): string => {
  try {
    const env = (import.meta as any).env || {};
    return (
      env.VITE_AI_PROXY_URL ||
      (typeof window !== 'undefined' && (window as any).AI_PROXY_URL) ||
      (typeof localStorage !== 'undefined' && localStorage.getItem('AI_PROXY_URL')) ||
      ''
    );
  } catch {
    return '';
  }
};

// Initialize client only if key is present to prevent immediate crashes, handle errors at call site
const getAiClient = () => {
  const key = readApiKey();
  if (!key) {
    console.warn("GEMINI API KEY missing.");
    return null;
  }
  return new GoogleGenAI({ apiKey: key });
};

/**
 * Uses Gemini to find new tools via Google Search and format them as structured JSON.
 * Model: gemini-3-flash-preview (Speed + Search capability)
 */
export const findNewTools = async (query: string, language: string = 'en'): Promise<Tool[]> => {
  const proxy = getProxyUrl();
  if (proxy) {
    const res = await fetch(`${proxy.replace(/\/$/, '')}/v1/search`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ query, language }),
    });
    if (!res.ok) throw new Error(`Proxy error: ${await res.text()}`);
    const data = await res.json();
    if (data.tools && Array.isArray(data.tools)) {
      return data.tools.map((t: any, index: number) => ({
        id: `discovered-${Date.now()}-${index}`,
        name: t.name,
        description: t.description,
        descriptions: { [language]: t.description }, // Populate current language
        category: t.category,
        pricing: t.pricing,
        url: t.url,
        tags: t.tags || [],
        isAiDiscovered: true,
        createdAt: Date.now(),
        scenarios: t.scenarios || [],
        apiDocUrl: t.apiDocsUrl || t.apiDocUrl,
        hasStableApi: t.stableApi ?? undefined,
        developerDocsUrl: t.developerDocsUrl || undefined
      }));
    }
    return [];
  }
  const ai = getAiClient();
  if (!ai) throw new Error("API Key missing");

  const prompt = `
    Find 3 to 5 real, high-quality AI software tools related to this user query: "${query}".
    Focus on practical, commonly used tools.
    
    You must output a valid JSON object.
    The response structure must be:
    {
      "tools": [
        {
          "name": "Tool Name",
          "description": "A short, concise description (max 20 words) in ${language} language.",
          "category": "One of: Text & Writing, Image Generation, Video Creation, Audio & Music, Programming, Productivity, Business",
          "pricing": "Free, Freemium, or Paid",
          "url": "The official website URL (must be accurate)",
          "tags": ["tag1", "tag2"],
          "scenarios": ["common use case 1", "common use case 2"],
          "apiDocsUrl": "Direct link to official API documentation (if available)",
          "stableApi": true
        }
      ]
    }
    
    If you cannot find exact matches, find the closest alternatives. 
    Ensure URLs are real/valid by using Google Search grounding.
    IMPORTANT: Return ONLY the JSON object. Do not wrap it in markdown code blocks.
  `;

  try {
    // Note: When using googleSearch tool, enforcing responseMimeType: "application/json"
    // can cause RPC errors. We rely on the prompt to generate JSON and manual parsing.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      }
    });

    let jsonText = response.text || "{}";
    
    // Clean potential markdown formatting (```json ... ```)
    jsonText = jsonText.replace(/```json/g, '').replace(/```/g, '').trim();

    // Attempt to extract JSON if there's extra text
    const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      jsonText = jsonMatch[0];
    }

    const data = JSON.parse(jsonText);
    
    if (data.tools && Array.isArray(data.tools)) {
      // Map to our internal Tool structure with IDs
      return data.tools.map((t: any, index: number) => ({
        id: `discovered-${Date.now()}-${index}`,
        name: t.name,
        description: t.description,
        descriptions: { [language]: t.description }, // Populate current language
        category: t.category,
        pricing: t.pricing,
        url: t.url,
        tags: t.tags || [],
        isAiDiscovered: true,
        createdAt: Date.now(),
        scenarios: t.scenarios || [],
        apiDocUrl: t.apiDocsUrl || t.apiDocUrl,
        hasStableApi: t.stableApi ?? undefined,
        developerDocsUrl: t.developerDocsUrl || undefined
      }));
    }
    return [];
  } catch (error) {
    console.error("Error finding tools:", error);
    throw error;
  }
};

/**
 * Chatbot logic.
 * Model: gemini-3-pro-preview (Complex reasoning for helpful advice)
 */
export const chatWithBot = async (history: { role: string; parts: { text: string }[] }[], newMessage: string, language: string = 'en') => {
  const proxy = getProxyUrl();
  if (proxy) {
    const res = await fetch(`${proxy.replace(/\/$/, '')}/v1/chat`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ history, message: newMessage, language }),
    });
    if (!res.ok) throw new Error(`Proxy error: ${await res.text()}`);
    const data = await res.json();
    return data.text;
  }
  const ai = getAiClient();
  if (!ai) throw new Error("API Key missing");

  const chat = ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: `You are NavAI, a helpful expert consultant on AI software tools. Help users choose the right tool for their specific needs. Be concise, professional, and friendly. If a user asks for a recommendation, explain why you are recommending it. Please reply in ${language}.`,
    },
    history: history
  });

  const response = await chat.sendMessage({ message: newMessage });
  return response.text;
};

/**
 * Fast summary or analysis of a specific tool request.
 * Model: gemini-3-flash-preview (Standard fast model)
 */
export const getFastToolSummary = async (toolName: string, language: string = 'en'): Promise<string> => {
  const proxy = getProxyUrl();
  if (proxy) {
    const res = await fetch(`${proxy.replace(/\/$/, '')}/v1/summary`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ toolName, language }),
    });
    if (!res.ok) return "Could not load summary.";
    const data = await res.json();
    return data.summary || "No summary available.";
  }
  const ai = getAiClient();
  if (!ai) throw new Error("API Key missing");

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a 1-sentence quick summary of what the AI tool "${toolName}" is best known for. Write the summary in ${language}. Return ONLY the sentence.`,
    });
    return response.text || "No summary available.";
  } catch (e) {
    return "Could not load summary.";
  }
};
