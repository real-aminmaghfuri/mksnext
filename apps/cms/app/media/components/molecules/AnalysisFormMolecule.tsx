import React from 'react';
import { GlassCard, Button } from 'ui';
import { ScanEye, Zap, FileType, Type, Edit3, Save } from 'lucide-react';
import { AnalysisResult } from '../../hooks/useMediaUpload';

interface AnalysisFormMoleculeProps {
  analysis: AnalysisResult | null;
  setAnalysis: (analysis: AnalysisResult) => void;
  handleUpload: () => void;
  uploading: boolean;
}

export const AnalysisFormMolecule: React.FC<AnalysisFormMoleculeProps> = ({
  analysis,
  setAnalysis,
  handleUpload,
  uploading
}) => {
  return (
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
            className="mt-4 bg-brand-600 hover:bg-brand-500 shadow-xl shadow-brand-500/30 font-black uppercase tracking-widest"
          >
            {uploading ? 'COOKING FILE...' : <><Save size={18} className="mr-2" /> EXECUTE SERVER UPLOAD</>}
          </Button>
        </div>
      )}
    </GlassCard>
  );
};
