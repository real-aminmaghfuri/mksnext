"use server";

import { GoogleGenAI } from "@google/genai";

/**
 * HELPER: Load Balancing API Keys securely on Server Side with Rotation
 */
const API_KEYS = [
  process.env.GEMINI_API_KEY,
  process.env.GEMINI_API_KEY_1,
  process.env.GEMINI_API_KEY_2,
  process.env.GEMINI_API_KEY_3,
  process.env.GEMINI_API_KEY_4,
  process.env.GEMINI_API_KEY_5,
  process.env.GEMINI_API_KEY_6,
  process.env.API_KEY,
].filter(Boolean) as string[];

let currentKeyIndex = Math.floor(Math.random() * API_KEYS.length);

const getSecureGeminiClient = () => {
  if (API_KEYS.length === 0) {
    throw new Error("SERVER ERROR: No Gemini API Keys found in environment variables.");
  }

  const apiKey = API_KEYS[currentKeyIndex];
  return new GoogleGenAI({ apiKey });
};

const rotateKey = () => {
  if (API_KEYS.length > 1) {
    currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
    console.warn(`[GeminiAction] Rotating to API Key index: ${currentKeyIndex}`);
  }
};

/**
 * ACTION: Analyze Image for SEO (Vision)
 */
export async function generateImageSEOAction(base64Data: string, mimeType: string, context: string) {
  let attempts = 0;
  const maxAttempts = Math.max(API_KEYS.length, 2);

  while (attempts < maxAttempts) {
    try {
      const ai = getSecureGeminiClient();
      
      const prompt = `
          Role: Senior SEO Specialist for PT Mesin Kasir Solo (MKS).
          Task: Analyze this image for the context: "${context}".
          
          Output Requirements (JSON Only):
          1. "filename": Create a kebab-case filename (English). NO file extension. Must contain keywords relevant to the image content and MKS brand.
          2. "alt_text": Descriptive Alt Text (Indonesian, max 150 chars). Focus on accessibility and keywords.
          3. "caption": A short, punchy marketing caption (Indonesian, max 20 words). "Street smart" tone.

          Return ONLY raw JSON string. No markdown formatting.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-latest',
        contents: [
          {
            role: "user",
            parts: [
              { text: prompt },
              { inlineData: { mimeType: mimeType, data: base64Data } }
            ]
          }
        ]
      });

      const responseText = response.text;
      if (!responseText) throw new Error("Empty response from AI");

      const cleanJson = responseText.replace(/```json|```/g, '').trim();
      return JSON.parse(cleanJson);

    } catch (error: any) {
      const errorMsg = error.message?.toLowerCase() || "";
      console.error(`Vision attempt ${attempts + 1} failed:`, error.message);
      
      if (errorMsg.includes('quota') || errorMsg.includes('limit') || errorMsg.includes('429')) {
        rotateKey();
      } else {
        rotateKey();
      }

      attempts++;
      if (attempts >= maxAttempts) throw error;
      await new Promise(r => setTimeout(r, 1000));
    }
  }
}

/**
 * ACTION: Generate Text Content (Writer)
 */
export async function generateWriterAction(topic: string, systemPrompt: string) {
  let attempts = 0;
  const maxAttempts = Math.max(API_KEYS.length, 2);

  while (attempts < maxAttempts) {
    try {
      const ai = getSecureGeminiClient();
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview", // Updated to flash for better reliability
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.8,
        },
        contents: [
          {
            role: "user",
            parts: [{ text: `Topic: ${topic}` }]
          }
        ]
      });

      return response.text;

    } catch (error: any) {
      const errorMsg = error.message?.toLowerCase() || "";
      console.error(`Writer attempt ${attempts + 1} failed:`, error.message);
      
      if (errorMsg.includes('quota') || errorMsg.includes('limit') || errorMsg.includes('429')) {
        rotateKey();
      } else {
        rotateKey();
      }

      attempts++;
      if (attempts >= maxAttempts) throw error;
      await new Promise(r => setTimeout(r, 1000));
    }
  }
}