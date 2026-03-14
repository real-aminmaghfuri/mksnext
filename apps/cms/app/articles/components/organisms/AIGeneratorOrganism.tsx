
import React from 'react';
import { GlassCard, Button } from 'ui';
import { AIGenerationConfig } from 'data';
import { Wand2, Type, Languages, FileText, MessageSquareText } from 'lucide-react';
import { ArticlePreviewAtom } from '../atoms/ArticlePreviewAtom';

interface AIGeneratorOrganismProps {
  config: AIGenerationConfig;
  setConfig: (c: AIGenerationConfig) => void;
  isGenerating: boolean;
  onGenerate: () => void;
  generatedContent: string | null;
  onAccept?: (content: string) => void;
  onlyPreview?: boolean;
}

export const AIGeneratorOrganism: React.FC<AIGeneratorOrganismProps> = ({
  config, setConfig, isGenerating, onGenerate, generatedContent, onAccept, onlyPreview = false
}) => {
  const narrativeStyles = [
    { id: 'STREET_SMART', label: 'STREET SMART', desc: 'Tajam & Dramatis' },
    { id: 'PROFESSIONAL', label: 'PROFESSIONAL', desc: 'Formal & B2B' },
    { id: 'STORYTELLING', label: 'STORYTELLING', desc: 'Naratif & Emosional' },
    { id: 'TECHNICAL', label: 'TECHNICAL', desc: 'Data & Tutorial' }
  ] as const;

  if (onlyPreview && generatedContent) {
    return (
      <div className="space-y-4 animate-in zoom-in-95 duration-500">
        <div className="flex items-center justify-between px-2">
          <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500">Generated Content Preview</h4>
          <Button 
            size="sm" 
            onClick={() => {
              if (onAccept) onAccept(generatedContent);
            }}
            className="bg-brand-600 hover:bg-brand-500 text-[10px] font-black uppercase tracking-widest px-6"
          >
            Accept & Edit Article
          </Button>
        </div>
        <ArticlePreviewAtom content={generatedContent} title={config.title} />
      </div>
    );
  }

  return (
    <div className="h-full animate-in fade-in slide-in-from-right-4 duration-500">
      <GlassCard variant="solid" className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-brand-500/10 text-brand-600">
            <Wand2 size={20} />
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest">Article Configuration</h3>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Fine-tune your AI generation</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <Type size={12} /> Content Type
            </label>
            <div className="flex gap-2 p-1 bg-zinc-100 dark:bg-black rounded-xl">
              {(['PILLAR', 'CLUSTER'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setConfig({ ...config, type: t })}
                  className={`flex-1 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
                    ${config.type === t ? 'bg-white dark:bg-zinc-800 text-brand-600 shadow-sm' : 'text-zinc-500'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <Languages size={12} /> Language
            </label>
            <div className="flex gap-2 p-1 bg-zinc-100 dark:bg-black rounded-xl">
              {(['ID', 'EN', 'DUAL'] as const).map(l => (
                <button
                  key={l}
                  onClick={() => setConfig({ ...config, language: l })}
                  className={`flex-1 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
                    ${config.language === l ? 'bg-white dark:bg-zinc-800 text-brand-600 shadow-sm' : 'text-zinc-500'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2 mb-1">
              <MessageSquareText size={12} /> Narrative Style
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {narrativeStyles.map(style => (
                <button
                  key={style.id}
                  onClick={() => setConfig({ ...config, narrativeStyle: style.id })}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all
                    ${config.narrativeStyle === style.id 
                      ? 'border-brand-500 bg-brand-500/5 text-brand-600' 
                      : 'border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-black text-zinc-500 hover:border-brand-500/30'}`}
                >
                  <span className="text-[9px] font-black uppercase tracking-widest">{style.label}</span>
                  <span className="text-[7px] font-bold opacity-60 mt-0.5">{style.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 pt-2">
            <div className="flex items-end gap-3">
              <div className="flex-1 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                  <FileText size={12} /> Min Words
                </label>
                <div className="relative">
                  <input 
                    type="number"
                    min="500"
                    max="5000"
                    step="100"
                    value={config.minWords}
                    onChange={(e) => setConfig({ ...config, minWords: parseInt(e.target.value) || 500 })}
                    className="w-full bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-xs font-black text-brand-600 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[8px] font-black text-zinc-400 uppercase tracking-widest pointer-events-none">WORDS</span>
                </div>
              </div>
              
              <Button 
                onClick={onGenerate}
                disabled={isGenerating || !config.title}
                className="flex-[1.5] bg-gradient-to-r from-brand-600 to-red-600 hover:to-red-500 font-black uppercase tracking-widest text-[10px] py-3.5 rounded-xl shadow-lg shadow-brand-500/20 border-none h-[42px]"
              >
                {isGenerating ? (
                  <span className="animate-pulse">GENERATING...</span>
                ) : (
                  'GENERATE BRUTAL CONTENT'
                )}
              </Button>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};
