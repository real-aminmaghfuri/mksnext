import { useState, useRef } from 'react';
import { analyzeImageForSEO } from '../../../utils/ai-services';
import { Repository, MediaAsset } from 'data';
import { uploadToCloudinary } from '../../actions/upload';

export interface AnalysisResult {
  filename: string;
  alt_text: string;
  caption: string;
}

interface UseMediaUploadProps {
  onUploadSuccess: (newItem: MediaAsset) => void;
}

export const useMediaUpload = ({ onUploadSuccess }: UseMediaUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setAnalysis(null);
    setAnalyzing(true);

    try {
      const data = await analyzeImageForSEO(file, "Product Asset / Business Asset for MKS");
      setAnalysis(data as AnalysisResult);
    } catch (err) {
      console.error("AI Analysis Failed:", err);
      // Fallback
      setAnalysis({
        filename: file.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase(),
        alt_text: "Produk Mesin Kasir Solo",
        caption: "Aset Digital MKS"
      });
    } finally {
      setAnalyzing(false);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !analysis) return;
    setUploading(true);

    try {
      const timestamp = Date.now().toString().slice(-4); 
      const cleanSlug = analysis.filename.replace(/[^a-z0-9-]/gi, '-').toLowerCase();
      const finalPublicId = `${cleanSlug}-${timestamp}`;

      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('public_id', finalPublicId);
      formData.append('alt', analysis.alt_text);
      formData.append('caption', analysis.caption);
      formData.append('folder', 'mks_assets');

      const result: any = await uploadToCloudinary(formData);

      if (result && result.secure_url) {
        const newItem: MediaAsset = {
          id: result.public_id,
          url: result.secure_url,
          originalUrl: result.secure_url,
          format: result.format,
          size: result.bytes,
          filename: finalPublicId,
          alt: analysis.alt_text,
          caption: analysis.caption,
          uploadedAt: new Date().toISOString()
        };

        await Repository.saveMediaToLibrary(newItem);
        onUploadSuccess(newItem);
        
        // Reset Staging
        setSelectedFile(null);
        setPreviewUrl(null);
        setAnalysis(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        
        alert("✅ Upload Sukses! File Mateng (WebP + Metadata).");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err: any) {
      console.error(err);
      alert('Server Error: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  return {
    uploading,
    analyzing,
    selectedFile,
    previewUrl,
    analysis,
    setAnalysis,
    fileInputRef,
    handleFileSelect,
    handleUpload
  };
};
