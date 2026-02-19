"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { Button, GlassCard } from 'ui';
import { UploadCloud, Image as ImageIcon, Copy, FileType, Zap, ScanEye, Edit3, Type, Save } from 'lucide-react';
import Image from 'next/image';
import { analyzeImageForSEO } from '../../utils/ai-services';
import { Repository, MediaAsset } from 'data';
import { uploadToCloudinary } from '../actions/upload'; // Import Server Action

interface AnalysisResult {
  filename: string;
  alt_text: string;
  caption: string;
}

export default function MediaPage() {
  // State
  const [uploading, setUploading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [mediaList, setMediaList] = useState<MediaAsset[]>([]);
  const [isLoadingList, setIsLoadingList] = useState(true);
  
  // Staging State (Pre-Upload)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // LOAD DATA
  useEffect(() => {
    const loadMedia = async () => {
        setIsLoadingList(true);
        try {
            const data = await Repository.getMediaLibrary();
            setMediaList(data);
        } catch (e) {
            console.error("Failed to load media", e);
        } finally {
            setIsLoadingList(false);
        }
    };
    loadMedia();
  }, []);

  // 1. ACTION: Select & Analyze
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setAnalysis(null);
    setAnalyzing(true);

    try {
      const data = await analyzeImageForSEO(file, "Product Asset / Business Asset for MKS");
      setAnalysis(data);
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

  // 2. ACTION: Final Upload (Server-Side)
  const handleUpload = async () => {
    if (!selectedFile || !analysis) return;
    setUploading(true);

    try {
      // CLEAN FILENAME: Ensure strict SEO friendly format
      // We append a short random string to avoid collision but keep the SEO slug
      const timestamp = Date.now().toString().slice(-4); 
      const cleanSlug = analysis.filename.replace(/[^a-z0-9-]/gi, '-').toLowerCase();
      const finalPublicId = `${cleanSlug}-${timestamp}`;

      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('public_id', finalPublicId);
      formData.append('alt', analysis.alt_text);
      formData.append('caption', analysis.caption);
      formData.append('folder', 'mks_assets');

      // CALL SERVER ACTION
      const result: any = await uploadToCloudinary(formData);

      if (result && result.secure_url) {
        
        const newItem: MediaAsset = {
          id: result.public_id,
          url: result.secure_url, // This is already WebP and Optimized from Server
          originalUrl: result.secure_url,
          format: result.format,
          size: result.bytes,
          filename: finalPublicId,
          alt: analysis.alt_text,
          caption: analysis.caption,
          uploadedAt: new Date().toISOString()
        };

        // SAVE TO DATABASE PERSISTENTLY
        await Repository.saveMediaToLibrary(newItem);

        // Update Local State
        setMediaList(prev => [newItem, ...prev]);
        
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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("URL Copied!");
  };

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <Header title="MEDIA INTELLIGENCE" />

         <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar relative z-10 pb-24">
            
            {/* UPLOAD & ANALYSIS ZONE */}
            <div className="max-w-6xl mx-auto mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* DROPZONE */}
                    <div className="lg:col-span-5">
                        <div className="h-full border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-3xl p-8 text-center relative hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors group flex flex-col items-center justify-center min-h-[300px]">
                            <input 
                                ref={fileInputRef}
                                type="file" 
                                accept="image/*" 
                                onChange={handleFileSelect}
                                disabled={analyzing || uploading}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                            />
                            
                            {previewUrl ? (
                                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 shadow-xl">
                                    <Image src={previewUrl} alt="Preview" fill className="object-contain" />
                                </div>
                            ) : (
                                <div className="w-20 h-20 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                    <UploadCloud size={40} />
                                </div>
                            )}

                            <h3 className="text-xl font-black uppercase tracking-tight mb-2">
                                {analyzing ? 'SCANNING PIXELS...' : uploading ? 'UPLOADING TO SERVER...' : previewUrl ? 'CHANGE FILE' : 'DROP ASSET HERE'}
                            </h3>
                            
                            {analyzing && (
                                <div className="w-full max-w-[200px] h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden mt-4">
                                    <div className="h-full bg-brand-600 animate-[shimmer_1s_infinite]" style={{width: '60%'}} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* AI ANALYSIS PANEL */}
                    <div className="lg:col-span-7">
                        <GlassCard variant="solid" className="h-full p-8 flex flex-col justify-center border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                            {!analysis ? (
                                <div className="text-center text-zinc-400 flex flex-col items-center opacity-50">
                                    <ScanEye size={64} strokeWidth={1} className="mb-4" />
                                    <p className="font-black uppercase tracking-widest text-sm">WAITING FOR INTEL...</p>
                                    <p className="text-xs mt-2">Upload image to trigger AI SEO analysis.</p>
                                </div>
                            ) : (
                                <div className="space-y-6 animate-fade-in-up">
                                    <div className="flex items-center gap-2 text-brand-600 mb-2">
                                        <Zap size={18} />
                                        <span className="text-xs font-black uppercase tracking-widest">AI SUGGESTIONS READY</span>
                                    </div>

                                    {/* Edit Form */}
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-2 mb-1">
                                                <FileType size={12} /> Suggested Filename (Clean)
                                            </label>
                                            <input 
                                                type="text" 
                                                value={analysis.filename}
                                                onChange={(e) => setAnalysis({...analysis, filename: e.target.value})}
                                                className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-mono font-bold text-emerald-600 dark:text-emerald-500 focus:ring-2 focus:ring-brand-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-2 mb-1">
                                                <Type size={12} /> Alt Text (Injected to Cloudinary)
                                            </label>
                                            <input 
                                                type="text" 
                                                value={analysis.alt_text}
                                                onChange={(e) => setAnalysis({...analysis, alt_text: e.target.value})}
                                                className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-brand-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-2 mb-1">
                                                <Edit3 size={12} /> Caption (Injected to Cloudinary)
                                            </label>
                                            <textarea 
                                                rows={2}
                                                value={analysis.caption}
                                                onChange={(e) => setAnalysis({...analysis, caption: e.target.value})}
                                                className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-medium resize-none focus:ring-2 focus:ring-brand-500 outline-none"
                                            />
                                        </div>
                                    </div>

                                    <Button 
                                        fullWidth 
                                        size="lg" 
                                        onClick={handleUpload} 
                                        disabled={uploading}
                                        className="mt-4 bg-brand-600 hover:bg-brand-500 shadow-xl shadow-brand-500/30"
                                    >
                                        {uploading ? 'COOKING FILE...' : <><Save size={18} className="mr-2" /> EXECUTE SERVER UPLOAD</>}
                                    </Button>
                                </div>
                            )}
                        </GlassCard>
                    </div>

                </div>
            </div>

            {/* GALLERY GRID */}
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-black uppercase tracking-widest text-zinc-500">
                        Asset Archive
                    </h3>
                    <span className="text-xs font-bold bg-brand-100 dark:bg-brand-900/30 text-brand-600 px-3 py-1 rounded-full">
                        {mediaList.length} ITEMS
                    </span>
                </div>

                {isLoadingList ? (
                    <div className="py-20 text-center">
                        <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest">Loading Library...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {mediaList.map((item) => (
                            <GlassCard key={item.id} variant="solid" className="overflow-hidden group hover:border-brand-500/50 transition-colors">
                                <div className="aspect-square relative bg-zinc-100 dark:bg-zinc-800">
                                    <Image 
                                        src={item.url} 
                                        alt={item.alt}
                                        fill
                                        className="object-cover"
                                        unoptimized 
                                    />
                                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="px-2 py-1 bg-black/80 backdrop-blur text-white text-[9px] font-black uppercase rounded">
                                            {item.format.toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-xs font-bold text-zinc-900 dark:text-white truncate max-w-[150px]" title={item.filename}>
                                            {item.filename}
                                        </p>
                                    </div>
                                    <p className="text-[10px] text-zinc-500 line-clamp-1 mb-3">{item.caption}</p>
                                    
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={() => copyToClipboard(item.url)}
                                            className="flex-1 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-brand-50 dark:hover:bg-brand-900/20 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-brand-600 transition-all flex items-center justify-center gap-1"
                                        >
                                            <Copy size={12} /> COPY
                                        </button>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                )}
            </div>

         </main>
      </div>

      <Sidebar />
    </div>
  );
}