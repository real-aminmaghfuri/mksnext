
import { GoogleGenAI, Type } from "@google/genai";
import { AIKeywordResearch, AIGenerationConfig } from "../types";

const SYSTEM_PROMPT = `
You are the AI Strategist for PT MESIN KASIR SOLO, a leading POS and ERP provider in Indonesia.
Your tone is "street smart", dramatic, sharp, and professional. Use "lo", "gue", "kita" but keep technical terms accurate.
Founder: Amin Maghfuri. Established: 2015.
Goal: Dominate the Indonesian market with brutal SEO content.
`;

export class AIService {
  private static keyIndex = 0;
  private static readonly API_KEYS = [
    // Try NEXT_PUBLIC_ (Next.js client-side standard)
    process.env.NEXT_PUBLIC_GEMINI_API_KEY,
    process.env.NEXT_PUBLIC_GEMINI_API_KEY_1,
    process.env.NEXT_PUBLIC_GEMINI_API_KEY_2,
    process.env.NEXT_PUBLIC_GEMINI_API_KEY_3,
    process.env.NEXT_PUBLIC_GEMINI_API_KEY_4,
    process.env.NEXT_PUBLIC_GEMINI_API_KEY_5,
    process.env.NEXT_PUBLIC_GEMINI_API_KEY_6,
    // Try process.env (platform injected)
    process.env.GEMINI_API_KEY,
    process.env.GEMINI_API_KEY_1,
    process.env.GEMINI_API_KEY_2,
    process.env.GEMINI_API_KEY_3,
    process.env.GEMINI_API_KEY_4,
    process.env.GEMINI_API_KEY_5,
    process.env.GEMINI_API_KEY_6,
    // Try import.meta.env (Vite standard)
    (import.meta as any).env?.VITE_GEMINI_API_KEY,
    (import.meta as any).env?.VITE_GEMINI_API_KEY_1,
    (import.meta as any).env?.VITE_GEMINI_API_KEY_2,
    (import.meta as any).env?.VITE_GEMINI_API_KEY_3,
    (import.meta as any).env?.VITE_GEMINI_API_KEY_4,
    (import.meta as any).env?.VITE_GEMINI_API_KEY_5,
    (import.meta as any).env?.VITE_GEMINI_API_KEY_6,
  ].filter(Boolean) as string[];

  private static getAI() {
    const apiKey = this.API_KEYS[this.keyIndex] || 
                   process.env.NEXT_PUBLIC_GEMINI_API_KEY || 
                   process.env.GEMINI_API_KEY || 
                   (import.meta as any).env?.VITE_GEMINI_API_KEY || '';
    
    if (!apiKey) {
      console.error("CRITICAL: No Gemini API Key found! AI features will not work. Please ensure NEXT_PUBLIC_GEMINI_API_KEY is set.");
    }
    return new GoogleGenAI({ apiKey });
  }

  private static rotateKey() {
    if (this.API_KEYS.length > 1) {
      this.keyIndex = (this.keyIndex + 1) % this.API_KEYS.length;
      console.log(`Rotating to API Key index: ${this.keyIndex} (Total keys: ${this.API_KEYS.length})`);
    }
  }

  private static extractJSON(text: string): any {
    try {
      const cleanedText = text.trim();
      return JSON.parse(cleanedText);
    } catch (e) {
      // Try to find JSON block with regex
      const jsonRegex = /\[\s*\{[\s\S]*\}\s*\]|\{\s*".*"\s*:[\s\S]*\}/;
      const match = text.match(jsonRegex);
      
      if (match) {
        try {
          return JSON.parse(match[0]);
        } catch (innerE) {
          console.error("Failed to parse extracted JSON match", innerE);
        }
      }
      
      const mdMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
      if (mdMatch) {
        try {
          return JSON.parse(mdMatch[1]);
        } catch (innerE) {
          console.error("Failed to parse Markdown JSON block", innerE);
        }
      }
      
      console.error("Raw AI Response that failed parsing:", text);
      throw new Error("Could not find valid JSON in AI response.");
    }
  }

  static async researchKeywords(topic: string): Promise<AIKeywordResearch[]> {
    let attempts = 0;
    const maxAttempts = Math.max(this.API_KEYS.length, 2);
    let useSearch = false; // Disable search by default to be safe

    console.log("DEBUG: API_KEYS found:", this.API_KEYS.length);
    console.log("DEBUG: Current Key Index:", this.keyIndex);
    console.log(`Starting research for topic: ${topic}`);

    while (attempts < maxAttempts) {
      try {
        const ai = this.getAI();
        const config: any = {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                keyword: { type: Type.STRING },
                volume: { type: Type.NUMBER },
                difficulty: { type: Type.NUMBER },
                level: { type: Type.STRING, enum: ['LOW', 'MEDIUM'] },
                suggestedTitle: { type: Type.STRING },
                reasoning: { type: Type.STRING }
              },
              required: ['keyword', 'volume', 'difficulty', 'level', 'suggestedTitle', 'reasoning']
            }
          }
        };

        if (useSearch) {
          config.tools = [{ googleSearch: {} }];
        }

        // Use gemini-3-flash-preview for faster research
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: `Riset keyword populer untuk topik: "${topic}". 
          Berikan 10 rekomendasi judul artikel dalam format JSON ARRAY. 
          Filter hanya yang memiliki tingkat kesulitan LOW atau MEDIUM. 
          Sertakan estimasi volume pencarian bulanan (angka) dan angka difficulty (0-100).
          Gunakan gaya bahasa street smart PT Mesin Kasir Solo dalam kolom reasoning.
          
          PENTING: Kembalikan HANYA array JSON sesuai schema.`,
          config
        });

        if (!response.text) {
          throw new Error("Empty response from AI");
        }

        const data = this.extractJSON(response.text);
        console.log("Research successful, found items:", data.length);
        return data;
      } catch (e: any) {
        const errorMsg = e.message?.toLowerCase() || "";
        console.error(`Research attempt ${attempts + 1} failed:`, e.message || e);
        
        if (errorMsg.includes('quota') || errorMsg.includes('limit') || errorMsg.includes('429')) {
          console.log("Quota exceeded, rotating key...");
          this.rotateKey();
        } else if (errorMsg.includes('not found') || errorMsg.includes('model')) {
          console.log("Model issue? Rotating key just in case...");
          this.rotateKey();
        } else {
          this.rotateKey();
        }

        attempts++;
        if (attempts >= maxAttempts) {
          console.error("All research attempts failed.");
          throw e;
        }
        
        await new Promise(r => setTimeout(r, 1000));
      }
    }
    return [];
  }

  static async generateArticle(config: AIGenerationConfig): Promise<string> {
    let attempts = 0;
    const maxAttempts = Math.max(this.API_KEYS.length, 1);

    while (attempts < maxAttempts) {
      try {
        const ai = this.getAI();
        const stylePrompts = {
          STREET_SMART: 'Gaya bahasa lo/gue, tajam, blak-blakan, dramatis, tapi teknis akurat.',
          PROFESSIONAL: 'Formal, edukatif, terpercaya, berwibawa, cocok untuk audiens B2B.',
          STORYTELLING: 'Naratif, emosional, dimulai dari keresahan realita di lapangan, mengalir seperti cerita.',
          TECHNICAL: 'Sangat teknis, fokus pada spesifikasi, fitur, tutorial langkah-demi-langkah, dan data.'
        };

        const prompt = `
          Buat artikel ${config.type === 'PILLAR' ? 'Pillar (Komprehensif & Mendalam)' : 'Cluster (Spesifik & Fokus)'}.
          Judul: "${config.title}"
          Target Keyword: "${config.targetKeyword}"
          Minimal Kata: ${config.minWords}
          Bahasa: ${config.language === 'DUAL' ? 'Indonesia & Inggris (Bilingual)' : config.language}
          Gaya Narasi: ${stylePrompts[config.narrativeStyle]}
          
          Gunakan identitas PT Mesin Kasir Solo (Founder: Amin Maghfuri).
          Format dalam HTML dengan struktur H1, H2, H3 yang SEO friendly.
          Sertakan internal linking placeholders jika ini artikel cluster.
        `;

        const response = await ai.models.generateContent({
          model: "gemini-3.1-pro-preview",
          contents: prompt,
          config: {
            systemInstruction: SYSTEM_PROMPT,
            temperature: 0.8,
          }
        });

        return response.text || '';
      } catch (e: any) {
        console.error(`Generation attempt ${attempts + 1} failed:`, e.message);
        this.rotateKey();
        attempts++;
        if (attempts >= maxAttempts) throw e;
      }
    }
    return '';
  }
}
