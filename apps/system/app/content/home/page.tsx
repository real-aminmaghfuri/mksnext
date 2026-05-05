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
      {/* Right Navigation Sidebar (Moved to Left for better flow with 30/70 editor) */}
      <div className="w-72 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 hidden xl:block overflow-y-auto">
        <div className="space-y-8">
            <div>
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-4 ml-2">Navigasi Seksi</p>
                <div className="space-y-1">
                    {SECTIONS.map((section) => {
                        const Icon = section.icon;
                        const isActive = activeSection === section.id;
                        return (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`w-full flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group cursor-pointer
                                    ${isActive 
                                        ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white' 
                                        : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
                                    }`}
                            >
                                <ChevronRight size={12} className={`mr-2 transition-transform duration-300 ${isActive ? 'rotate-0 opacity-100 text-brand-500' : '-rotate-90 opacity-20'}`} />
                                <Icon size={16} strokeWidth={isActive ? 2.5 : 1.5} className="mr-3" />
                                <span className={`font-bold text-xs tracking-tight ${isActive ? 'text-zinc-900 dark:text-white' : ''}`}>{section.label}</span>
                                {isActive && <div className="ml-auto w-1 h-1 rounded-full bg-brand-500" />}
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
                    Gunakan aksen warna pada judul agar lebih menarik dan profesional.
                </p>
            </div>
        </div>
      </div>

      {/* Main Container: 30/70 Grid */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Column 1: SEO Score & Info (30%) */}
        <div className="w-[30%] border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 overflow-y-auto hidden lg:block custom-scrollbar">
           <div className="p-8 space-y-8">
              <div className="pt-4">
                <h3 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] mb-6">Analisis SEO Halaman</h3>
                <GlassCard className="p-6 space-y-6 border-brand-500/20">
                   <div className="flex flex-col items-center justify-center py-4 bg-brand-500/5 rounded-2xl border border-brand-500/10">
                      <span className="text-4xl font-black text-brand-500">85</span>
                      <span className="text-[10px] font-bold text-brand-500/60 uppercase tracking-widest mt-1">SEO Score</span>
                   </div>
                   
                   <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                          <span>Keterbacaan</span>
                          <span className="text-emerald-500 uppercase">Bagus</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full w-[90%] bg-emerald-500 rounded-full" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                          <span>Densitas Kata Kunci</span>
                          <span className="text-brand-500 uppercase">Optimal</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full w-[75%] bg-brand-500 rounded-full" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                          <span>Struktur Heading</span>
                          <span className="text-yellow-500 uppercase">Perlu Cek</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full w-[60%] bg-yellow-500 rounded-full" />
                        </div>
                      </div>
                   </div>

                   <ul className="space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                      <li className="flex gap-2 text-xs text-zinc-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1" />
                        Judul mengandung kata kunci utama "Mesin Kasir Solo".
                      </li>
                      <li className="flex gap-2 text-xs text-zinc-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1" />
                        Deskripsi meta sudah optimal untuk tingkat klik.
                      </li>
                      <li className="flex gap-2 text-xs text-zinc-500 text-yellow-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0 mt-1" />
                        Tambahkan lebih banyak teks pada Hero Section.
                      </li>
                   </ul>
                </GlassCard>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                 <div className="flex items-center gap-2 text-white">
                    <Info size={16} className="text-brand-500" />
                    <span className="text-[10px] font-black tracking-widest uppercase">Info Live</span>
                 </div>
                 <p className="text-xs text-zinc-400 leading-relaxed">
                   Perubahan yang Anda simpan akan langsung memperbarui konten di website publik dalam hitungan detik.
                 </p>
              </div>
           </div>
        </div>

        {/* Column 2: Content Editor (70%) */}
        <div className="flex-1 overflow-y-auto px-8 py-0 scroll-smooth custom-scrollbar bg-white dark:bg-black/40">
          <div className="max-w-4xl mx-auto space-y-16 pb-32">
            
            {/* Header - Sticky */}
            <div className="sticky top-0 z-30 pt-10 pb-6 bg-white/80 dark:bg-black/80 backdrop-blur-md flex justify-between items-center border-b border-zinc-100 dark:border-zinc-800 mb-8">
              <div>
                <h1 className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-white mb-1 uppercase">
                  Editor <span className="text-brand-500">Beranda</span>
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400 font-bold text-[10px] uppercase tracking-wider">
                  Konten Halaman Utama
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" className="gap-2 h-9 px-4 text-[10px] font-bold uppercase tracking-widest cursor-pointer text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
                  <Eye size={14} /> Preview
                </Button>
                <Button className="gap-2 h-9 px-4 text-[10px] font-black uppercase tracking-widest cursor-pointer bg-zinc-900 dark:bg-white text-white dark:text-black hover:opacity-90 transition-all rounded-lg" onClick={handleSave} disabled={isSaving}>
                  {isSaving ? <CheckCircle2 size={14} className="animate-spin" /> : <Save size={14} />} 
                  {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
                </Button>
              </div>
            </div>

          {/* Section: Hero */}
          <section id="hero" className="space-y-8 pt-12 px-10">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                    <Monitor size={20} />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">Hero Section</h2>
            </div>
            
            <GlassCard className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Top Badge Text</label>
                        <input 
                            type="text" 
                            defaultValue="SYSTEM V2.0: SECURE & READY"
                            className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Primary Headline Tag</label>
                        <input 
                            type="text" 
                            defaultValue="SOLUSI MESIN KASIR & MANAJEMEN BISNIS"
                            className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Main Headline</label>
                    <textarea 
                        rows={2}
                        defaultValue="PT MESIN KASIR SOLO. Bisnis Lo Medan Perang, Bos. Jangan Bawa Mainan."
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-medium tracking-tight focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Sub-headline / Description</label>
                    <textarea 
                        rows={3}
                        defaultValue="Ini senjata paling savage buat validasi cuan lo di Solo. Gue ngeracik MKS bukan buat gaya-gayaan doang, tapi buat mastiin operasional lo gak hancur di tengah jalan."
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm leading-relaxed focus:ring-2 focus:ring-brand-500 outline-none transition-all text-zinc-500"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Primary CTA Label</label>
                        <input 
                            type="text" 
                            defaultValue="Sikat Sekarang"
                            className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        />
                        <input 
                            type="text" 
                            placeholder="Link (url)..."
                            defaultValue="/hubungi"
                            className="w-full bg-zinc-50 dark:bg-zinc-950 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-[10px] font-mono text-brand-500 outline-none"
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Secondary CTA Label</label>
                        <input 
                            type="text" 
                            defaultValue="Liat Barangnya"
                            className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        />
                        <input 
                            type="text" 
                            placeholder="Link (url)..."
                            defaultValue="/hardware"
                            className="w-full bg-zinc-50 dark:bg-zinc-950 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-[10px] font-mono text-brand-500 outline-none"
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
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">Our Solutions</h2>
            </div>

            <GlassCard className="p-8 space-y-6">
                 <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Section Badge</label>
                    <input 
                        type="text" 
                        defaultValue="OUR SOLUTIONS"
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Section Title</label>
                    <input 
                        type="text" 
                        defaultValue="Amunisi Tempur Kita"
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-medium tracking-tight focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Section Description</label>
                    <textarea 
                        rows={2}
                        defaultValue="Gue gak jualan kecap manis. Ini semua infrastruktur sadis biar bisnis lo gak mati konyol dimakan kompetitor."
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm leading-relaxed focus:ring-2 focus:ring-brand-500 outline-none transition-all text-zinc-500"
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
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">Advanced Technology</h2>
            </div>

            <GlassCard className="p-8 space-y-6">
                 <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Section Badge</label>
                    <input 
                        type="text" 
                        defaultValue="ADVANCED TECHNOLOGY"
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Section Title</label>
                    <textarea 
                        rows={2}
                        defaultValue="Dibangun untuk Skalabilitas Tanpa Batas."
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-medium tracking-tight focus:ring-2 focus:ring-brand-500 outline-none transition-all"
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
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">Showcase Proyek</h2>
            </div>

            <GlassCard className="p-8 space-y-6">
                 <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Section Badge</label>
                    <input 
                        type="text" 
                        defaultValue="SHOWCASE PROYEK"
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Section Title</label>
                    <textarea 
                        rows={2}
                        defaultValue="Transformasi bisnis yang telah kami wujudkan."
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-medium tracking-tight focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">CTA Label & Link</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            defaultValue="LIHAT SEMUA PORTOFOLIO"
                            className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        />
                        <input 
                            type="text" 
                            defaultValue="/portfolio"
                            className="w-full bg-zinc-50 dark:bg-zinc-950 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-[10px] font-mono text-brand-500 outline-none"
                        />
                    </div>
                </div>
            </GlassCard>
          </section>

          {/* Section: Articles Preview */}
          <section id="articles" className="space-y-8 pt-12 pb-24">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Newspaper size={20} />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">News & Insights</h2>
            </div>

            <GlassCard className="p-8 space-y-6">
                 <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Section Badge</label>
                    <input 
                        type="text" 
                        defaultValue="NEWS & INSIGHTS"
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Section Title</label>
                    <textarea 
                        rows={2}
                        defaultValue="Edukasi terbaru dari SIBOS AI."
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-medium tracking-tight focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">CTA Label & Link</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            defaultValue="LIHAT SEMUA ARTIKEL"
                            className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        />
                        <input 
                            type="text" 
                            defaultValue="/articles"
                            className="w-full bg-zinc-50 dark:bg-zinc-950 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-[10px] font-mono text-brand-500 outline-none"
                        />
                    </div>
                </div>
                <div className="space-y-3 pt-6 border-t border-zinc-100 dark:border-zinc-900">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Newsletter Description</label>
                    <textarea 
                        rows={2}
                        defaultValue="Ingin mendapatkan tips bisnis dan teknologi langsung ke email Anda?"
                        className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm leading-relaxed focus:ring-2 focus:ring-brand-500 outline-none transition-all text-zinc-500"
                    />
                </div>
            </GlassCard>
          </section>

          </div>
        </div>
      </div>
    </div>
  );
}
