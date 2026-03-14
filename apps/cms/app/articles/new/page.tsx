
"use client";

import React, { useState } from 'react';
import { Sidebar } from '../../../components/Sidebar';
import { Header } from '../../../components/Header';
import { MobileNav } from '../../../components/MobileNav';
import { useArticleEditor } from '../hooks/useArticleEditor';
import { ArticleEditorOrganism } from '../components/organisms/ArticleEditorOrganism';
import { useAIStrategist } from '../hooks/useAIStrategist';
import { AIStrategistOrganism } from '../components/organisms/AIStrategistOrganism';
import { AIGeneratorOrganism } from '../components/organisms/AIGeneratorOrganism';
import { GlassCard, Button } from 'ui';
import { Edit3, Wand2, Sparkles, ArrowLeft } from 'lucide-react';

type CreationMode = 'CHOOSE' | 'MANUAL' | 'AI';

export default function NewArticlePage() {
  const [mode, setMode] = useState<CreationMode>('CHOOSE');
  
  const {
    article,
    setArticle,
    isSaving,
    handleSave,
    handleChange
  } = useArticleEditor({});

  const {
    topic, setTopic,
    isResearching,
    recommendations,
    handleResearch,
    selectedRecommendation,
    handleSelectRecommendation,
    config, setConfig,
    isGenerating,
    generatedContent,
    handleGenerate,
    error: aiError
  } = useAIStrategist();

  const handleAcceptAIContent = (content: string) => {
    setArticle(prev => ({
      ...prev,
      title: config.title || prev.title,
      content: content
    }));
    setMode('MANUAL');
  };

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header title={mode === 'CHOOSE' ? "NEW ARTICLE" : mode === 'AI' ? "AI STRATEGIST" : "CREATE ARTICLE"} />

        <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <div className="max-w-6xl mx-auto">
            {mode === 'CHOOSE' && (
              <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-12 animate-in fade-in zoom-in-95 duration-700">
                <div className="text-center space-y-4">
                  <h1 className="text-4xl font-black tracking-tighter uppercase">How do you want to <span className="text-brand-600">Create?</span></h1>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-[0.3em]">Choose your weapon of mass creation</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                  <GlassCard 
                    variant="solid" 
                    className="p-8 group cursor-pointer hover:border-brand-500/50 transition-all duration-500 flex flex-col items-center text-center space-y-6"
                    onClick={() => setMode('MANUAL')}
                  >
                    <div className="p-6 rounded-3xl bg-zinc-100 dark:bg-zinc-900 text-zinc-400 group-hover:bg-brand-500/10 group-hover:text-brand-600 transition-all duration-500">
                      <Edit3 size={48} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-widest mb-2">Manual Editor</h3>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider leading-relaxed">
                        Craft your masterpiece from scratch with our brutalist editor. Total control, zero limits.
                      </p>
                    </div>
                    <Button variant="outline" className="w-full font-black uppercase tracking-widest text-[10px] group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 transition-all">
                      Start Writing
                    </Button>
                  </GlassCard>

                  <GlassCard 
                    variant="solid" 
                    className="p-8 group cursor-pointer hover:border-brand-500/50 transition-all duration-500 flex flex-col items-center text-center space-y-6"
                    onClick={() => setMode('AI')}
                  >
                    <div className="p-6 rounded-3xl bg-zinc-100 dark:bg-zinc-900 text-zinc-400 group-hover:bg-brand-500/10 group-hover:text-brand-600 transition-all duration-500">
                      <Wand2 size={48} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-widest mb-2">AI Strategist</h3>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider leading-relaxed">
                        Leverage Gemini to research keywords and generate high-impact content in seconds.
                      </p>
                    </div>
                    <Button variant="outline" className="w-full font-black uppercase tracking-widest text-[10px] group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 transition-all">
                      Summon AI
                    </Button>
                  </GlassCard>
                </div>
              </div>
            )}

            {mode === 'MANUAL' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <button 
                  onClick={() => setMode('CHOOSE')}
                  className="flex items-center text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-brand-600 transition-colors"
                >
                  <ArrowLeft size={14} className="mr-1" /> Back to Choice
                </button>
                <ArticleEditorOrganism 
                  article={article}
                  setArticle={setArticle}
                  isSaving={isSaving}
                  onSave={handleSave}
                  onChange={handleChange}
                />
              </div>
            )}

            {mode === 'AI' && (
              <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setMode('CHOOSE')}
                    className="flex items-center text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-brand-600 transition-colors"
                  >
                    <ArrowLeft size={14} className="mr-1" /> Back to Choice
                  </button>
                </div>

                {aiError && (
                  <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-600 text-[10px] font-black uppercase tracking-widest">
                    ⚠️ {aiError}
                  </div>
                )}

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <section>
                      <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-4 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-zinc-200 dark:bg-zinc-800" /> 01. Research & Titles
                      </h2>
                      <AIStrategistOrganism 
                        topic={topic}
                        setTopic={setTopic}
                        isResearching={isResearching}
                        recommendations={recommendations}
                        onResearch={handleResearch}
                        onSelect={handleSelectRecommendation}
                        selectedId={selectedRecommendation?.suggestedTitle}
                      />
                    </section>
                  </div>

                  <div className="space-y-8">
                    <section>
                      <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-4 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-zinc-200 dark:bg-zinc-800" /> 02. Configure & Generate
                      </h2>
                      {selectedRecommendation ? (
                        <AIGeneratorOrganism 
                          config={config}
                          setConfig={setConfig}
                          isGenerating={isGenerating}
                          onGenerate={handleGenerate}
                          generatedContent={generatedContent}
                          onAccept={handleAcceptAIContent}
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-zinc-400 bg-white dark:bg-zinc-950 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl">
                          <Sparkles size={32} className="mb-4 opacity-20" />
                          <p className="font-black uppercase tracking-widest text-[10px]">Select a title from research to begin</p>
                        </div>
                      )}
                    </section>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      <Sidebar />
      <MobileNav />
    </div>
  );
}
