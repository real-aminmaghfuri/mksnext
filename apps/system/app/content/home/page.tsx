"use client";

import React from 'react';
import { 
  Save, 
  Eye, 
  Sparkles, 
  Layout, 
  Zap, 
  Briefcase, 
  Newspaper, 
  MousePointer2,
  ChevronRight,
  Info,
  Monitor,
  CheckCircle2
} from 'lucide-react';
import { GlassCard, Button } from 'ui';

const SECTIONS = [
  { id: 'hero', label: 'Hero Section', icon: Monitor },
  { id: 'solutions', label: 'Our Solutions', icon: Briefcase },
  { id: 'tech', label: 'Advanced Tech', icon: Zap },
  { id: 'portfolio', label: 'Showcase Proyek', icon: Layout },
  { id: 'articles', label: 'News & Insights', icon: Newspaper },
];

export default function HomeContentPage() {
  const [activeSection, setActiveSection] = React.useState('hero');
  const [isSaving, setIsSaving] = React.useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 2000);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex h-full overflow-hidden bg-zinc-50 dark:bg-black">
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-8 py-12 scroll-smooth custom-scrollbar">
        <div className="max-w-4xl mx-auto space-y-24 pb-24">
          
          {/* Header */}
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tighter text-zinc-900 dark:text-white mb-2">
                Editor <span className="text-brand-500">Beranda</span>
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                Kelola seluruh konten narasi dan copywriting di halaman utama website.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Eye size={16} /> Preview
              </Button>
              <Button className="gap-2" onClick={handleSave} disabled={isSaving}>
                {isSaving ? <CheckCircle2 size={16} className="animate-bounce" /> : <Save size={16} />} 
                {isSaving ? 'Tersimpan' : 'Simpan Perubahan'}
              </Button>
            </div>
          </div>

          {/* Section: Hero */}
          <section id="hero" className="space-y-8 pt-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                    <Monitor size={20} />
                </div>
                <h2 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">Hero Section</h2>
            </div>
            
            <GlassCard className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Top Badge Text</label>
                        <input 
                            type="text" 
                            defaultValue="SYSTEM V2.0: SECURE & READY"
                            className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Primary Headline Tag</label>
                        <input 
                            type="text" 
                            defaultValue="SOLUSI MESIN KASIR & MANAJEMEN BISNIS"
                            className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Main Headline</label>
                    <textarea 
                        rows={3}
                        defaultValue="PT MESIN KASIR SOLO. Bisnis Lo Medan Perang, Bos. Jangan Bawa Mainan."
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-xl font-black focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Sub-headline / Description</label>
                    <textarea 
                        rows={3}
                        defaultValue="Ini senjata paling savage buat validasi cuan lo di Solo. Gue ngeracik MKS bukan buat gaya-gayaan doang, tapi buat mastiin operasional lo gak hancur di tengah jalan."
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-medium leading-relaxed focus:ring-2 focus:ring-brand-500 outline-none transition-all text-zinc-500"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Primary CTA Label</label>
                        <input 
                            type="text" 
                            defaultValue="Sikat Sekarang"
                            className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Secondary CTA Label</label>
                        <input 
                            type="text" 
                            defaultValue="Liat Barangnya"
                            className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        />
                    </div>
                </div>
            </GlassCard>
          </section>

          {/* Section: Solutions */}
          <section id="solutions" className="space-y-8 pt-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Briefcase size={20} />
                </div>
                <h2 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">Our Solutions</h2>
            </div>

            <GlassCard className="p-8 space-y-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Section Badge</label>
                    <input 
                        type="text" 
                        defaultValue="OUR SOLUTIONS"
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Section Title</label>
                    <input 
                        type="text" 
                        defaultValue="Amunisi Tempur Kita"
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-2xl font-black focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Section Description</label>
                    <textarea 
                        rows={2}
                        defaultValue="Gue gak jualan kecap manis. Ini semua infrastruktur sadis biar bisnis lo gak mati konyol dimakan kompetitor."
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-brand-500 outline-none transition-all text-zinc-500"
                    />
                </div>
            </GlassCard>
          </section>

          {/* Section: Tech (Bento) */}
          <section id="tech" className="space-y-8 pt-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                    <Zap size={20} />
                </div>
                <h2 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">Advanced Technology</h2>
            </div>

            <GlassCard className="p-8 space-y-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Section Badge</label>
                    <input 
                        type="text" 
                        defaultValue="ADVANCED TECHNOLOGY"
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Section Title (HTML supported)</label>
                    <textarea 
                        rows={2}
                        defaultValue="Dibangun untuk <span class='text-brand-500'>Skalabilitas</span> Tanpa Batas."
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-xl font-black focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>
            </GlassCard>
          </section>

          {/* Section: Portfolio Preview */}
          <section id="portfolio" className="space-y-8 pt-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Layout size={20} />
                </div>
                <h2 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">Showcase Proyek</h2>
            </div>

            <GlassCard className="p-8 space-y-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Section Badge</label>
                    <input 
                        type="text" 
                        defaultValue="SHOWCASE PROYEK"
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Section Title</label>
                    <textarea 
                        rows={2}
                        defaultValue="Transformasi bisnis yang telah kami <span class='text-brand-500'>wujudkan.</span>"
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-xl font-black focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">CTA Label</label>
                    <input 
                        type="text" 
                        defaultValue="LIHAT SEMUA PORTOFOLIO"
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>
            </GlassCard>
          </section>

          {/* Section: Articles Preview */}
          <section id="articles" className="space-y-8 pt-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Newspaper size={20} />
                </div>
                <h2 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">News & Insights</h2>
            </div>

            <GlassCard className="p-8 space-y-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Section Badge</label>
                    <input 
                        type="text" 
                        defaultValue="NEWS & INSIGHTS"
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Section Title</label>
                    <textarea 
                        rows={2}
                        defaultValue="Edukasi terbaru dari <span class='text-brand-500'>SIBOS AI.</span>"
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-xl font-black focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Newsletter Description</label>
                    <textarea 
                        rows={2}
                        defaultValue="Ingin mendapatkan tips bisnis dan teknologi langsung ke email Anda?"
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-brand-500 outline-none transition-all text-zinc-500"
                    />
                </div>
            </GlassCard>
          </section>

          <footer className="pt-12 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-zinc-400">
             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <Info size={14} /> Terakhir diperbarui: 5 Mei 2026
             </div>
             <div className="flex gap-4">
                <Button variant="outline" size="sm">Reset</Button>
                <Button size="sm" onClick={handleSave} disabled={isSaving}>Simpan</Button>
             </div>
          </footer>

        </div>
      </div>

      {/* Right Navigation Sidebar */}
      <div className="w-80 border-r border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-xl p-8 hidden xl:block">
        <div className="sticky top-8 space-y-8">
            <div>
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-6">Navigasi Seksi</p>
                <div className="space-y-2">
                    {SECTIONS.map((section) => {
                        const Icon = section.icon;
                        const isActive = activeSection === section.id;
                        return (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group
                                    ${isActive 
                                        ? 'bg-zinc-900 dark:bg-white text-white dark:text-black shadow-lg shadow-zinc-500/20' 
                                        : 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white'
                                    }`}
                            >
                                <Icon size={18} />
                                <span className="font-bold text-sm tracking-tight">{section.label}</span>
                                <ChevronRight size={14} className={`ml-auto opacity-0 group-hover:opacity-100 transition-all ${isActive ? 'opacity-100' : ''}`} />
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-500/5 border border-brand-500/10 space-y-4">
                <div className="flex items-center gap-2 text-brand-500">
                    <MousePointer2 size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Tips Editor</span>
                </div>
                <p className="text-xs text-brand-900/60 dark:text-brand-100/60 leading-relaxed font-medium">
                    Gunakan tag HTML seperti <code className="bg-brand-500/10 px-1 rounded">&lt;span class="text-brand-500"&gt;</code> untuk memberi aksen warna pada judul tertentu.
                </p>
            </div>

            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <Button className="w-full py-6 text-sm font-black uppercase tracking-widest bg-zinc-900 text-white dark:bg-white dark:text-black hover:scale-105 active:scale-95 transition-all">
                    SINKRONISASI LIVE
                </Button>
                <p className="text-[10px] font-black text-zinc-400 uppercase text-center mt-4 tracking-widest">
                    Update terinstan ke website utama
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
