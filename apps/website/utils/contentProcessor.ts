
import { TOCItem } from 'shared';

/**
 * THE BRAIN SHIFT OPERATION
 * Logic extracted from Client Hook to Server Utility.
 * 
 * Tugas:
 * 1. Scanning konten HTML mentah.
 * 2. Deteksi tag <h3>.
 * 3. Suntik ID unik (section-0, section-1, dst).
 * 4. Generate daftar isi (TOC) bersih.
 */
export const processArticleContent = (content: string): { processedContent: string, toc: TOCItem[] } => {
  const toc: TOCItem[] = [];
  let index = 0;

  // Regex barbar buat nyari H3 dan nyuntikkin ID
  const processedContent = content.replace(/<h3>(.*?)<\/h3>/g, (match, title) => {
    const id = `section-${index}`;
    
    // Bersihin title dari tag HTML lain kalau ada (biar TOC bersih)
    const cleanTitle = title.replace(/<[^>]*>?/gm, '');
    
    toc.push({ id, text: cleanTitle });
    index++;
    
    // Return tag H3 yang udah dimodif ada ID-nya
    return `<h3 id="${id}">${title}</h3>`;
  });

  return { processedContent, toc };
};
