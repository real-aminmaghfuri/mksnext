"use server";

import { GoogleGenAI } from "@google/genai";

/**
 * HELPER: Load Balancing API Keys securely on Server Side
 */
const getSecureGeminiClient = () => {
  const apiKeys = [
    process.env.GEMINI_API_KEY_1,
    process.env.GEMINI_API_KEY_2,
    process.env.GEMINI_API_KEY_3,
    process.env.GEMINI_API_KEY_4,
    process.env.GEMINI_API_KEY_5,
    process.env.GEMINI_API_KEY_6,
    process.env.API_KEY,
  ].filter(Boolean);

  if (apiKeys.length === 0) {
    throw new Error("SERVER ERROR: No Gemini API Keys found in environment variables.");
  }

  const randomKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];
  return new GoogleGenAI({ apiKey: randomKey as string });
};

/**
 * ACTION: Analyze Image for SEO (Vision)
 */
export async function generateImageSEOAction(base64Data: string, mimeType: string, context: string) {
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
      model: 'gemini-2.0-flash-exp', // Ensure model supports vision
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
    console.error("Server Action Error (Vision):", error);
    throw new Error(error.message || "AI Processing Failed on Server");
  }
}

/**
 * ACTION: Generate Text Content (Writer)
 */
export async function generateWriterAction(topic: string, systemPrompt: string) {
  try {
    const ai = getSecureGeminiClient();
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
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
    console.error("Server Action Error (Writer):", error);
    throw new Error(error.message || "AI Writer Failed on Server");
  }
}