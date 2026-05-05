"use client";

import React, { useState } from 'react';
import { HeroSettings } from './hero-settings';
import { SolutionSettings } from './solution-settings';
import { TechSettings } from './tech-settings';
import { 
  Monitor, 
  Settings, 
  Shield, 
  Layout, 
  ChevronRight,
  Eye,
  Save
} from 'lucide-react';

const SECTIONS = [
  { id: 'hero', label: 'Hero Section', icon: Monitor },
  { id: 'solutions', label: 'Solution Amunisi', icon: Settings },
  { id: 'tech', label: 'Stack Teknologi', icon: Shield },
  { id: 'portfolio', label: 'Portofolio', icon: Layout },
] as const;

type SectionId = (typeof SECTIONS)[number]['id'];

export default function HomeEditor() {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  return (
    <div className="flex flex-col h-screen bg-[#050505] text-white overflow-hidden font-sans">
      {/* Header - Mewah & Immersif */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-orange-500/10 bg-black/80 backdrop-blur-xl z-50">
        <div className="flex items-center gap-4">
          <div className="p-2.5 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg shadow-orange-500/20 ring-1 ring-white/10">
            <Settings className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tighter uppercase italic">Editor Beranda <span className="text-orange-500">SIBOS</span></h1>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold">PT Mesin Kasir Solo</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 hover:bg-white/5 transition-all text-[11px] font-bold uppercase tracking-widest">
            <Eye className="w-4 h-4" />
            <span>Preview</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 hover:scale-105 transition-all text-[11px] font-black uppercase tracking-widest shadow-lg shadow-orange-500/30">
            <Save className="w-4 h-4" />
            <span>Publish</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Nav - Desktop / Tablet */}
        <nav className="hidden md:block w-72 bg-black/40 border-r border-white/5 p-4 space-y-2">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-4 ml-4">Navigasi Layer</p>
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl transition-all group border ${
                activeSection === section.id 
                  ? 'bg-orange-500/10 border-orange-500/30 text-orange-500 shadow-inner shadow-orange-500/5' 
                  : 'text-white/40 hover:text-white hover:bg-white/[0.02] border-transparent'
              }`}
            >
              <section.icon className={`w-5 h-5 ${activeSection === section.id ? 'text-orange-500' : 'text-white/20 group-hover:text-white/40'}`} />
              <span className="flex-1 text-left font-bold text-xs uppercase tracking-wider">{section.label}</span>
              {activeSection === section.id && <ChevronRight className="w-4 h-4 animate-pulse" />}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-transparent to-orange-500/[0.02] p-6 md:p-12 pb-32">
          <div className="max-w-3xl mx-auto space-y-12">
            {activeSection === 'hero' && <HeroSettings />}
            {activeSection === 'solutions' && <SolutionSettings />}
            {activeSection === 'tech' && <TechSettings />}
            {activeSection === 'portfolio' && (
              <div className="flex flex-col items-center justify-center py-20 text-white/20 border-2 border-dashed border-white/5 rounded-[2rem] bg-white/[0.01]">
                <Layout className="w-16 h-16 mb-6 opacity-10" />
                <p className="text-sm font-bold uppercase tracking-widest italic">Modul Portfolio Segera Hadir</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Mobile Bottom Nav - Sesuai Request Lo */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-2xl border-t border-white/5 flex items-center justify-around px-6 z-50">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex flex-col items-center gap-1.5 transition-all ${
              activeSection === section.id ? 'text-orange-500' : 'text-white/20'
            }`}
          >
            <div className={`p-2 rounded-xl ${activeSection === section.id ? 'bg-orange-500/10 shadow-lg shadow-orange-500/10' : ''}`}>
              <section.icon className="w-5 h-5" />
            </div>
            <span className="text-[8px] uppercase font-black tracking-tighter opacity-80">{section.label.split(' ')[0]}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
