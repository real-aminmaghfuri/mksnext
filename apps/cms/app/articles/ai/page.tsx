
"use client";

import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { MobileNav } from '../../components/MobileNav';
import { useAIStrategist } from './hooks/useAIStrategist';
import { AIStrategistOrganism } from './components/organisms/AIStrategistOrganism';
import { AIGeneratorOrganism } from './components/organisms/AIGeneratorOrganism';
import { Sparkles, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AIStrategistPage() {
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
    handleGenerate
  } = useAIStrategist();

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header title="AI CONTENT STRATEGIST" />

        <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <Link 
                  href="/articles"
                  className="flex items-center text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-brand-600 transition-colors mb-2"
                >
                  <ArrowLeft size={14} className="mr-1" /> Back to Articles
                </Link>
                <h1 className="text-3xl font-black tracking-tight uppercase">
                  AI <span className="text-brand-600">Strategist</span>
                </h1>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">Dominate the market with data-driven content</p>
              </div>
            </div>

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
        </main>
      </div>

      <Sidebar />
      <MobileNav />
    </div>
  );
}
