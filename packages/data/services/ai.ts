
import { GoogleGenAI, Type } from "@google/genai";
import { AIKeywordResearch, AIGenerationConfig } from "../types";

const SYSTEM_PROMPT = `
You are the AI Strategist for PT MESIN KASIR SOLO, a leading POS and ERP provider in Indonesia.
Your tone is "street smart", dramatic, sharp, and professional. Use "lo", "gue", "kita" but keep technical terms accurate.
Founder: Amin Maghfuri. Established: 2015.
Goal: Dominate the Indonesian market with brutal SEO content.
`;

export class AIService {
  private static getAI() {
    return new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
  }

  static async researchKeywords(topic: string): Promise<AIKeywordResearch[]> {
    const ai = this.getAI();
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: `Riset keyword populer untuk topik: "${topic}". 
      Berikan 10 rekomendasi judul artikel. 
      Filter hanya yang memiliki tingkat kesulitan LOW atau MEDIUM. 
      Sertakan estimasi volume pencarian bulanan dan angka difficulty (0-100).
      Gunakan gaya bahasa street smart PT Mesin Kasir Solo.`,
      config: {
        tools: [{ googleSearch: {} }],
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
      }
    });

    try {
      return JSON.parse(response.text || '[]');
    } catch (e) {
      console.error("Failed to parse AI response", e);
      return [];
    }
  }

  static async generateArticle(config: AIGenerationConfig): Promise<string> {
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
  }
}
