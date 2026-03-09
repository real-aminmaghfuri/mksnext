
import React from 'react';
import { GlassCard, Button } from 'ui';
import { AIGenerationConfig } from 'data';
import { Wand2, Type, Languages, FileText, MessageSquareText } from 'lucide-react';

interface AIGeneratorOrganismProps {
  config: AIGenerationConfig;
  setConfig: (c: AIGenerationConfig) => void;
  isGenerating: boolean;
  onGenerate: () => void;
  generatedContent: string;
}

export const AIGeneratorOrganism: React.FC<AIGeneratorOrganismProps> = ({
  config, setConfig, isGenerating, onGenerate, generatedContent
}) => {
  const narrativeStyles = [
    { id: 'STREET_SMART', label: 'STREET SMART', desc: 'Tajam & Dramatis' },
    { id: 'PROFESSIONAL', label: 'PROFESSIONAL', desc: 'Formal & B2B' },
    { id: 'STORYTELLING', label: 'STORYTELLING', desc: 'Naratif & Emosional' },
    { id: 'TECHNICAL', label: 'TECHNICAL', desc: 'Data & Tutorial' }
  ] as const;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <GlassCard variant="solid" className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-brand-500/10 text-brand-600">
            <Wand2 size={20} />
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest">Article Configuration</h3>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Fine-tune your AI generation</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <Type size={12} /> Content Type
            </label>
            <div className="flex gap-2 p-1 bg-zinc-100 dark:bg-black rounded-xl">
              {(['PILLAR', 'CLUSTER'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setConfig({ ...config, type: t })}
                  className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
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
                  className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
                    ${config.language === l ? 'bg-white dark:bg-zinc-800 text-brand-600 shadow-sm' : 'text-zinc-500'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2 mb-2">
              <MessageSquareText size={12} /> Narrative Style
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {narrativeStyles.map(style => (
                <button
                  key={style.id}
                  onClick={() => setConfig({ ...config, narrativeStyle: style.id })}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all
                    ${config.narrativeStyle === style.id 
                      ? 'border-brand-500 bg-brand-500/5 text-brand-600' 
                      : 'border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-black text-zinc-500 hover:border-brand-500/30'}`}
                >
                  <span className="text-[10px] font-black uppercase tracking-widest">{style.label}</span>
                  <span className="text-[8px] font-bold opacity-60 mt-1">{style.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <div className="flex justify-between items-center mb-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <FileText size={12} /> Minimum Word Count
              </label>
              <span className="text-[10px] font-black text-brand-600">{config.minWords} WORDS</span>
            </div>
            <input 
              type="range"
              min="500"
              max="5000"
              step="100"
              value={config.minWords}
              onChange={(e) => setConfig({ ...config, minWords: parseInt(e.target.value) })}
              className="w-full accent-brand-500 h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[8px] font-bold text-zinc-400 uppercase tracking-widest mt-1">
              <span>500</span>
              <span>2500</span>
              <span>5000</span>
            </div>
          </div>
        </div>

        <Button 
          onClick={onGenerate}
          disabled={isGenerating || !config.title}
          className="w-full bg-brand-600 hover:bg-brand-500 font-black uppercase tracking-widest text-xs py-6 rounded-2xl shadow-lg shadow-brand-500/20"
        >
          {isGenerating ? 'GENERATING ARTICLE...' : 'GENERATE BRUTAL CONTENT'}
        </Button>
      </GlassCard>

      {generatedContent && (
        <GlassCard variant="solid" className="p-6 animate-in zoom-in-95 duration-500">
           <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-black uppercase tracking-widest">Generated Content Preview</h4>
              <Button size="sm" variant="outline" className="text-[10px] font-black uppercase tracking-widest">Copy to Editor</Button>
           </div>
           <div className="prose prose-sm dark:prose-invert max-w-none h-[400px] overflow-y-auto p-4 bg-zinc-50 dark:bg-black rounded-xl border border-zinc-100 dark:border-zinc-800 custom-scrollbar">
              <div dangerouslySetInnerHTML={{ __html: generatedContent }} />
           </div>
        </GlassCard>
      )}
    </div>
  );
};
