import React from 'react';
import Image from 'next/image';
import { UploadCloud } from 'lucide-react';
import { MediaIconAtom } from '../atoms/MediaIconAtom';

interface UploadDropzoneMoleculeProps {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  previewUrl: string | null;
  analyzing: boolean;
  uploading: boolean;
}

export const UploadDropzoneMolecule: React.FC<UploadDropzoneMoleculeProps> = ({
  fileInputRef,
  handleFileSelect,
  previewUrl,
  analyzing,
  uploading
}) => {
  return (
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
        <MediaIconAtom icon={UploadCloud} />
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
  );
};
