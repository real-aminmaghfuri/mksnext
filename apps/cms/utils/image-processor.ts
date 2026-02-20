
/**
 * CLIENT-SIDE IMAGE PROCESSOR
 * Tugas: Masak file mentah jadi WebP yang SEO-ready sebelum dikirim ke server.
 */

export const processImageLocally = async (file: File, newNameWithoutExt: string): Promise<File> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    
    img.onload = () => {
      // 1. Setup Canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error("Browser Canvas context not available"));
        return;
      }

      // 2. Resize Logic (Max Width 1200px - Standard Web)
      const MAX_WIDTH = 1200;
      let width = img.width;
      let height = img.height;

      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }

      canvas.width = width;
      canvas.height = height;

      // 3. Draw & Convert
      ctx.drawImage(img, 0, 0, width, height);

      // 4. Export as WebP (Quality 0.85 - Sweet Spot)
      canvas.toBlob((blob) => {
        if (blob) {
          // 5. Create New File Object with SEO Name
          const finalName = `${newNameWithoutExt}.webp`;
          const optimizedFile = new File([blob], finalName, {
            type: 'image/webp',
            lastModified: Date.now(),
          });
          
          console.log(`🔥 [LOCAL OPTIMIZER] Converted: ${file.name} (${(file.size/1024).toFixed(2)}KB) -> ${finalName} (${(optimizedFile.size/1024).toFixed(2)}KB)`);
          
          resolve(optimizedFile);
        } else {
          reject(new Error("Canvas to Blob conversion failed"));
        }
      }, 'image/webp', 0.85);
    };

    img.onerror = (err) => reject(err);
  });
};
