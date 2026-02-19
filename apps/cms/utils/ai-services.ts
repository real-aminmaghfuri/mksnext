
import { GoogleGenAI } from "@google/genai";

export interface SEOAnalysis {
    filename: string;
    alt_text: string;
    caption: string;
}

// 1. Helper: File to Base64
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const base64Data = base64String.split(',')[1];
      resolve(base64Data);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// 2. Helper: Get Load Balanced Gemini Client
export const getGeminiClient = () => {
    const apiKeys = [
        process.env.GEMINI_API_KEY_1,
        process.env.GEMINI_API_KEY_2,
        process.env.GEMINI_API_KEY_3,
        process.env.GEMINI_API_KEY_4,
        process.env.GEMINI_API_KEY_5,
        process.env.GEMINI_API_KEY_6,
        process.env.API_KEY
    ].filter(Boolean);

    if (apiKeys.length === 0) {
        throw new Error("No Gemini API Keys available in environment.");
    }

    const randomKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];
    return new GoogleGenAI({ apiKey: randomKey as string });
};

// 3. Core: Analyze Image for Brutal SEO
export const analyzeImageForSEO = async (file: File, context: string = 'General Business Asset'): Promise<SEOAnalysis> => {
    const ai = getGeminiClient();
    // Use generic flash model for vision tasks
    const model = ai.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });
    const base64Data = await fileToBase64(file);

    const prompt = `
        Role: Senior SEO Specialist for PT Mesin Kasir Solo (MKS).
        Task: Analyze this image for the context: "${context}".
        
        Output Requirements (JSON Only):
        1. "filename": Create a kebab-case filename (English). NO file extension. Must contain keywords relevant to the image content and MKS brand.
        2. "alt_text": Descriptive Alt Text (Indonesian, max 150 chars). Focus on accessibility and keywords.
        3. "caption": A short, punchy marketing caption (Indonesian, max 20 words). "Street smart" tone.

        Return ONLY raw JSON string. No markdown formatting.
    `;

    try {
        const result = await model.generateContent({
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: prompt },
                        { inlineData: { mimeType: file.type, data: base64Data } }
                    ]
                }
            ]
        });

        const responseText = result.response.text();
        // Clean potential markdown wrappers
        const cleanJson = responseText.replace(/```json|```/g, '').trim();
        return JSON.parse(cleanJson);
    } catch (error) {
        console.error("Gemini Vision Error:", error);
        // Fallback if AI fails
        return {
            filename: file.name.split('.')[0].replace(/\s+/g, '-').toLowerCase(),
            alt_text: `${context} - PT Mesin Kasir Solo`,
            caption: "Dokumentasi Resmi MKS"
        };
    }
};
