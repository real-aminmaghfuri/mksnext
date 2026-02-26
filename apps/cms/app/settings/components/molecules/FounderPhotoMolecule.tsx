import React from 'react';
import Image from 'next/image';
import { User, Trash2, Hammer, ScanEye } from 'lucide-react';

interface FounderPhotoMoleculeProps {
  photoUrl: string;
  isUploading: boolean;
  uploadStep: string;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
}

export const FounderPhotoMolecule: React.FC<FounderPhotoMoleculeProps> = ({
  photoUrl,
  isUploading,
  uploadStep,
  onUpload,
  onRemove
}) => {
  return (
    <div className="w-full md:w-1/4 flex flex-col gap-4">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group shadow-inner">
        {photoUrl ? (
          <>
            <Image src={photoUrl} alt="Founder" fill className="object-cover" />
            <button 
              onClick={onRemove}
              className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:scale-110 shadow-lg"
              title="Hapus Foto"
            >
              <Trash2 size={14} />
            </button>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-zinc-400 flex-col gap-2">
            <User size={48} className="opacity-20"/>
            <span className="text-[9px] font-bold uppercase text-zinc-500">No Photo</span>
          </div>
        )}
        
        <div className={`absolute inset-0 bg-black/90 transition-opacity flex flex-col items-center justify-center text-white ${isUploading ? 'opacity-100 z-30' : 'opacity-0 group-hover:opacity-100 z-10'}`}>
          {isUploading ? (
            <>
              <Hammer size={32} className="mb-2 text-brand-500 animate-bounce" />
              <span className="text-[10px] font-black uppercase tracking-widest animate-pulse text-center px-4 leading-relaxed">
                {uploadStep}
              </span>
            </>
          ) : (
            <label className="cursor-pointer flex flex-col items-center w-full h-full justify-center hover:bg-white/5 transition-colors">
              <ScanEye size={32} className="mb-2 text-brand-500" />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                {photoUrl ? 'GANTI FOTO' : 'UPLOAD BARU'}
              </span>
              <span className="text-[8px] text-zinc-400 mt-1">Auto: SEO Rename + WebP</span>
              <input type="file" accept="image/*" onChange={onUpload} className="hidden" disabled={isUploading} />
            </label>
          )}
        </div>
      </div>
      
      <div className="text-[9px] text-zinc-400 text-center px-2">
        *Sistem otomatis konversi ke WebP & Rename file sesuai SEO sebelum upload.
      </div>
    </div>
  );
};
