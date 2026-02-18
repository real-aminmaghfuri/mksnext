
"use client";

import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { Button, GlassCard } from 'ui';
import { 
  Globe, 
  Eye, 
  EyeOff, 
  Save, 
  Search, 
  BarChart3, 
  ShoppingBag, 
  LayoutGrid, 
  Map, 
  Pin,
  AlertOctagon,
  Power,
  ShieldCheck
} from 'lucide-react';

export default function CMSSettingsPage() {
  const [isSaving, setIsSaving] = useState(false);
  
  // State for Public Website Configuration
  const [maintenanceMode, setMaintenanceMode] = useState(false); 
  const [visibility, setVisibility] = useState('PUBLIC'); 
  const [config, setConfig] = useState({
    gsc: '',
    ga4: '',
    gMerchant: '',
    bing: '',
    yandex: '',
    pinterest: ''
  });

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API Call to update Vercel Edge Config / DB
    setTimeout(() => {
      setIsSaving(false);
      alert("WEBSITE PROTOCOLS UPDATED SUCCESSFULLY.");
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      <Sidebar />
      
      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <Header title="WEB PROTOCOLS" />

         <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar relative z-10 pb-24">
            
            <div className="max-w-5xl mx-auto space-y-8">
                
                {/* 0. EMERGENCY LOCKDOWN (MAINTENANCE) */}
                <section className="p-1 rounded-3xl bg-gradient-to-r from-red-600 to-rose-600 shadow-2xl">
                    <div className="bg-zinc-900 rounded-[22px] p-6 md:p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <AlertOctagon size={120} className="text-red-500" />
                        </div>
                        
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative z-10 gap-6">
                            <div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
                                    <AlertOctagon className="text-red-500" /> Website Lockdown
                                </h3>
                                <p className="text-zinc-400 mt-2 max-w-xl text-sm leading-relaxed">
                                    Aktifkan mode ini untuk menutup akses publik ke <strong>mesinkasirsolo.com</strong>. 
                                    Traffic dialihkan ke halaman 'Under Maintenance'. 
                                    Gunakan saat deploy konten besar.
                                </p>
                            </div>

                            <div className="flex items-center gap-4 bg-black/40 p-2 rounded-2xl border border-white/5">
                                <span className={`text-xs font-black uppercase tracking-widest ${maintenanceMode ? 'text-zinc-500' : 'text-emerald-500'}`}>
                                    {maintenanceMode ? 'OFFLINE' : 'LIVE'}
                                </span>
                                <button 
                                    onClick={() => setMaintenanceMode(!maintenanceMode)}
                                    className={`relative w-16 h-8 rounded-full transition-colors duration-300 flex items-center px-1 shadow-inner
                                        ${maintenanceMode ? 'bg-red-600' : 'bg-zinc-700'}
                                    `}
                                >
                                    <div className={`w-6 h-6 rounded-full bg-white shadow-lg transition-transform duration-300 flex items-center justify-center
                                        ${maintenanceMode ? 'translate-x-8' : 'translate-x-0'}
                                    `}>
                                        <Power size={12} className={maintenanceMode ? 'text-red-600' : 'text-zinc-900'} strokeWidth={3} />
                                    </div>
                                </button>
                                <span className={`text-xs font-black uppercase tracking-widest ${maintenanceMode ? 'text-red-500 animate-pulse' : 'text-zinc-500'}`}>
                                    {maintenanceMode ? 'MAINTENANCE' : 'STANDBY'}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 1. VISIBILITY CONTROL (SEO) */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <Globe size={20} className="text-brand-600" />
                        <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">Search Engine Visibility</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button 
                            onClick={() => setVisibility('PUBLIC')}
                            className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left group overflow-hidden
                                ${visibility === 'PUBLIC' 
                                    ? 'bg-emerald-500/10 border-emerald-500' 
                                    : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100'}
                            `}
                        >
                            <div className="flex justify-between items-start mb-2 relative z-10">
                                <Eye size={24} className={visibility === 'PUBLIC' ? 'text-emerald-500' : 'text-zinc-400'} />
                                {visibility === 'PUBLIC' && <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />}
                            </div>
                            <h4 className={`text-lg font-black uppercase tracking-tight mb-1 ${visibility === 'PUBLIC' ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-600 dark:text-zinc-400'}`}>
                                Public Indexing
                            </h4>
                            <p className="text-xs font-medium text-zinc-500">
                                Robots.txt: Allow All. Website terbaca oleh Google crawler.
                            </p>
                        </button>

                        <button 
                            onClick={() => setVisibility('STEALTH')}
                            className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left group overflow-hidden
                                ${visibility === 'STEALTH' 
                                    ? 'bg-red-500/10 border-red-500' 
                                    : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100'}
                            `}
                        >
                            <div className="flex justify-between items-start mb-2 relative z-10">
                                <EyeOff size={24} className={visibility === 'STEALTH' ? 'text-red-500' : 'text-zinc-400'} />
                                {visibility === 'STEALTH' && <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]" />}
                            </div>
                            <h4 className={`text-lg font-black uppercase tracking-tight mb-1 ${visibility === 'STEALTH' ? 'text-red-600 dark:text-red-400' : 'text-zinc-600 dark:text-zinc-400'}`}>
                                Stealth / No-Index
                            </h4>
                            <p className="text-xs font-medium text-zinc-500">
                                Robots.txt: Disallow All. Website disembunyikan dari Google.
                            </p>
                        </button>
                    </div>
                </section>

                {/* 2. GOOGLE ECOSYSTEM */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <LayoutGrid size={20} className="text-brand-600" />
                        <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">Google Ecosystem</h3>
                    </div>

                    <GlassCard variant="solid" className="p-6 md:p-8 space-y-6">
                        {/* Search Console */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                            <div className="md:col-span-4">
                                <div className="flex items-center gap-2 mb-1 text-zinc-900 dark:text-white font-bold">
                                    <Search size={16} className="text-blue-500" />
                                    Google Search Console
                                </div>
                                <p className="text-[10px] text-zinc-500">Meta tag verifikasi kepemilikan domain.</p>
                            </div>
                            <div className="md:col-span-8">
                                <input 
                                    type="text" 
                                    name="gsc"
                                    value={config.gsc}
                                    onChange={handleChange}
                                    placeholder="Paste HTML Tag Content"
                                    className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-xs font-mono font-bold focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                                />
                            </div>
                        </div>

                        <div className="h-px bg-zinc-100 dark:bg-zinc-800 w-full" />

                        {/* Analytics */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                            <div className="md:col-span-4">
                                <div className="flex items-center gap-2 mb-1 text-zinc-900 dark:text-white font-bold">
                                    <BarChart3 size={16} className="text-orange-500" />
                                    Google Analytics 4
                                </div>
                                <p className="text-[10px] text-zinc-500">Tracking ID untuk trafik visitor.</p>
                            </div>
                            <div className="md:col-span-8">
                                <input 
                                    type="text" 
                                    name="ga4"
                                    value={config.ga4}
                                    onChange={handleChange}
                                    placeholder="G-XXXXXXXXXX"
                                    className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-xs font-mono font-bold focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                                />
                            </div>
                        </div>

                        <div className="h-px bg-zinc-100 dark:bg-zinc-800 w-full" />

                        {/* Merchant Center */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                            <div className="md:col-span-4">
                                <div className="flex items-center gap-2 mb-1 text-zinc-900 dark:text-white font-bold">
                                    <ShoppingBag size={16} className="text-blue-400" />
                                    Google Shopping
                                </div>
                                <p className="text-[10px] text-zinc-500">Integrasi katalog produk (Merchant Center).</p>
                            </div>
                            <div className="md:col-span-8">
                                <input 
                                    type="text" 
                                    name="gMerchant"
                                    value={config.gMerchant}
                                    onChange={handleChange}
                                    placeholder="Merchant Verification ID"
                                    className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-xs font-mono font-bold focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                                />
                            </div>
                        </div>
                    </GlassCard>
                </section>

                {/* 3. GLOBAL NETWORKS */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <Map size={20} className="text-brand-600" />
                        <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">Global Verification</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Bing */}
                        <GlassCard variant="solid" className="p-6">
                            <div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-white font-bold">
                                <div className="w-8 h-8 rounded bg-teal-600 flex items-center justify-center text-white font-black text-xs">B</div>
                                Bing Webmaster
                            </div>
                            <input 
                                type="text" 
                                name="bing"
                                value={config.bing}
                                onChange={handleChange}
                                placeholder="Bing Auth XML"
                                className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-[10px] font-mono focus:outline-none focus:border-brand-500 transition-all"
                            />
                        </GlassCard>

                        {/* Pinterest */}
                        <GlassCard variant="solid" className="p-6">
                            <div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-white font-bold">
                                <Pin size={20} className="text-red-600" />
                                Pinterest Tag
                            </div>
                            <input 
                                type="text" 
                                name="pinterest"
                                value={config.pinterest}
                                onChange={handleChange}
                                placeholder="Pinterest Tag ID"
                                className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-[10px] font-mono focus:outline-none focus:border-brand-500 transition-all"
                            />
                        </GlassCard>

                        {/* Yandex */}
                        <GlassCard variant="solid" className="p-6">
                            <div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-white font-bold">
                                <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white font-black text-xs">Y</div>
                                Yandex Connect
                            </div>
                            <input 
                                type="text" 
                                name="yandex"
                                value={config.yandex}
                                onChange={handleChange}
                                placeholder="Yandex ID"
                                className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-[10px] font-mono focus:outline-none focus:border-brand-500 transition-all"
                            />
                        </GlassCard>
                    </div>
                </section>

                {/* SAVE ACTION */}
                <div className="fixed bottom-0 md:bottom-6 left-0 md:left-auto right-0 md:right-6 p-4 md:p-0 z-50">
                    <Button 
                        size="lg" 
                        onClick={handleSave}
                        className="w-full md:w-auto bg-brand-600 hover:bg-brand-500 shadow-2xl shadow-brand-500/40 font-black tracking-widest uppercase"
                        disabled={isSaving}
                    >
                        {isSaving ? 'SYNCING...' : <><Save size={18} className="mr-2" /> UPDATE PROTOCOLS</>}
                    </Button>
                </div>

            </div>
         </main>
      </div>
    </div>
  );
}
