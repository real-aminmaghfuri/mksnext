"use client";

import React, { useState } from 'react';
import { HeroSettings } from './hero-settings';
import { SolutionSettings } from './solution-settings';
import { TechSettings } from './tech-settings';
import { 
  Monitor, 
  Settings, 
  Shield, 
  Smartphone, 
  Layout, 
  ChevronRight,
  Eye,
  Save,
  Trash2,
  Plus
} from 'lucide-react';

const SECTIONS = [
  { id: 'hero', label: 'Hero Section', icon: Monitor },
  { id: 'solutions', label: 'Our Solutions', icon: Settings },
  { id: 'tech', label: 'Advanced Tech', icon: Shield },
  { id: 'portfolio', label: 'Portfolio', icon: Layout },
] as const;

type SectionId = (typeof SECTIONS)[number]['id'];

export default function HomeEditor() {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  return (
    <div className="flex flex-col h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg shadow-lg shadow-orange-500/20">
            <Settings className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">Editor Beranda</h1>
            <p className="text-xs text-white/50 uppercase tracking-widest font-medium">PT Mesin Kasir Solo</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all text-sm">
            <Eye className="w-4 h-4" />
            <span>Preview Website</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all text-sm font-bold shadow-lg shadow-orange-500/30">
            <Save className="w-4 h-4" />
            <span>Simpan Perubahan</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Nav */}
        <nav className="w-72 bg-black/40 border-r border-white/10 p-4 space-y-2">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                activeSection === section.id 
                  ? 'bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/20 text-orange-500' 
                  : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <section.icon className={`w-5 h-5 ${activeSection === section.id ? 'text-orange-500' : 'text-white/40 group-hover:text-white/60'}`} />
              <span className="flex-1 text-left font-medium">{section.label}</span>
              {activeSection === section.id && <ChevronRight className="w-4 h-4" />}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-transparent to-orange-500/5">
          <div className="max-w-4xl mx-auto p-12">
            {activeSection === 'hero' && <HeroSettings />}
            {activeSection === 'solutions' && <SolutionSettings />}
            {activeSection === 'tech' && <TechSettings />}
            {activeSection === 'portfolio' && (
              <div className="flex flex-col items-center justify-center h-64 text-white/30 border-2 border-dashed border-white/10 rounded-2xl">
                <Layout className="w-12 h-12 mb-4 opacity-20" />
                <p>Pengaturan Portfolio sedang dikembangkan.</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Mobile Nav Mockup (as per user request: bottom nav like native app) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-black border-t border-white/10 flex items-center justify-around px-6">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex flex-col items-center gap-1 ${activeSection === section.id ? 'text-orange-500' : 'text-white/40'}`}
          >
            <section.icon className="w-5 h-5" />
            <span className="text-[10px] uppercase font-bold tracking-tighter">{section.label.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
