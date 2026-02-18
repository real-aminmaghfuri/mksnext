
"use client";

import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { Button, GlassCard } from 'ui';
import { UploadCloud, Image as ImageIcon, Copy, Check, FileType, Zap } from 'lucide-react';
import Image from 'next/image';

interface MediaItem {
  id: string;
  url: string;
  avifUrl: string;
  format: string;
  originalSize: number;
}

export default function MediaPage() {
  const [uploading, setUploading] = useState(false);
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  
  // NOTE: Di Vercel, pastikan tambah Environment Variable: NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
  // Buat "Unsigned Upload Preset" di Cloudinary Settings > Upload > Add Upload Preset
  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'mks_preset'; // Fallback for dev

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);
    formData.append('folder', 'mks_assets');

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.secure_url) {
        // FORCE TRANSFORMATION LOGIC
        // Kita manipulasi URL agar Cloudinary mengirimkan versi AVIF yang sudah dikompres (q_auto)
        // Original: .../image/upload/v1234/mks/img.jpg
        // Optimized: .../image/upload/f_avif,q_auto/v1234/mks/img.jpg
        
        const optimizedUrl = data.secure_url.replace('/upload/', '/upload/f_avif,q_auto/');

        const newItem: MediaItem = {
          id: data.public_id,
          url: data.secure_url, // Raw
          avifUrl: optimizedUrl, // Forced AVIF
          format: data.format,
          originalSize: data.bytes
        };

        setMediaList(prev => [newItem, ...prev]);
      } else {
        alert('Upload failed: ' + (data.error?.message || 'Unknown error'));
      }
    } catch (err) {
      console.error(err);
      alert('Network error during upload');
    } finally {
      setUploading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("URL Copied to Clipboard!");
  };

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <Header title="MEDIA COMMAND" />

         <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar relative z-10 pb-24">
            
            {/* Upload Area */}
            <div className="max-w-5xl mx-auto mb-12">
                <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-3xl p-10 text-center relative hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors group">
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleFileChange}
                        disabled={uploading}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    />
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            {uploading ? <Zap size={32} className="animate-pulse" /> : <UploadCloud size={32} />}
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-tight mb-2">
                            {uploading ? 'COMPRESSING & CONVERTING...' : 'DROP INTEL HERE'}
                        </h3>
                        <p className="text-zinc-500 text-sm max-w-md mx-auto">
                            Upload foto (JPG/PNG). Sistem otomatis melakukan <strong>Kompresi (q_auto)</strong> dan konversi ke format <strong>AVIF (f_avif)</strong> untuk performa maksimal.
                        </p>
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-black uppercase tracking-widest text-zinc-500">
                        Recent Uploads
                    </h3>
                    <span className="text-xs font-bold bg-brand-100 dark:bg-brand-900/30 text-brand-600 px-3 py-1 rounded-full">
                        {mediaList.length} ASSETS
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mediaList.map((item) => (
                        <GlassCard key={item.id} variant="solid" className="overflow-hidden group">
                            <div className="aspect-video relative bg-zinc-100 dark:bg-zinc-800">
                                {/* Next.js Image automatically handles generic optimization, 
                                    but we use the forced AVIF URL here to prove the requirement */}
                                <Image 
                                    src={item.avifUrl} 
                                    alt="Uploaded Asset"
                                    fill
                                    className="object-cover"
                                    unoptimized // We use Cloudinary URL directly to force AVIF param
                                />
                                <div className="absolute top-2 right-2 flex gap-1">
                                    <span className="px-2 py-1 bg-black/70 backdrop-blur text-white text-[10px] font-black uppercase rounded flex items-center gap-1">
                                        <FileType size={10} /> AVIF
                                    </span>
                                    <span className="px-2 py-1 bg-brand-600 text-white text-[10px] font-black uppercase rounded flex items-center gap-1">
                                        <Zap size={10} /> COMPRESSED
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-xs font-mono text-zinc-500 truncate max-w-[150px]" title={item.id}>
                                        {item.id}
                                    </p>
                                    <button 
                                        onClick={() => copyToClipboard(item.avifUrl)}
                                        className="text-xs font-bold text-brand-600 hover:text-brand-500 flex items-center gap-1"
                                    >
                                        <Copy size={12} /> COPY URL
                                    </button>
                                </div>
                                <div className="text-[10px] text-zinc-400 font-medium">
                                    Original: {(item.originalSize / 1024).toFixed(1)} KB (JPG/PNG) <br/>
                                    Served as: <span className="text-emerald-500 font-bold">AVIF (Optimized)</span>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                    
                    {mediaList.length === 0 && (
                        <div className="col-span-full py-12 text-center text-zinc-400 text-sm font-bold border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl">
                            Belum ada aset. Upload dulu, Ndan.
                        </div>
                    )}
                </div>
            </div>

         </main>
      </div>
    </div>
  );
}
