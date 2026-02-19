
import { generateImageSEOAction } from "../app/actions/gemini";

export interface SEOAnalysis {
    filename: string;
    alt_text: string;
    caption: string;
}

// 1. Helper: File to Base64 (Client Side)
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      // Remove data url prefix if present to get pure base64
      const base64Data = base64String.split(',')[1] || base64String;
      resolve(base64Data);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// 2. Core: Analyze Image Bridge
export const analyzeImageForSEO = async (file: File, context: string = 'General Business Asset'): Promise<SEOAnalysis> => {
    try {
        // Convert file to base64 on client
        const base64Data = await fileToBase64(file);
        
        // Send to Server Action (Secure Environment)
        const result = await generateImageSEOAction(base64Data, file.type, context);
        
        return result;
    } catch (error) {
        console.error("AI Bridge Error:", error);
        // Fallback
        return {
            filename: file.name.split('.')[0].replace(/\s+/g, '-').toLowerCase(),
            alt_text: `${context} - PT Mesin Kasir Solo`,
            caption: "Dokumentasi Resmi MKS (Manual Fallback)"
        };
    }
};
