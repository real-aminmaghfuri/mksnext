
"use client";

import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { Button, GlassCard } from 'ui';
import { Repository } from 'data';
import { SITE_CONFIG } from 'shared'; 
import { 
  Globe, Eye, EyeOff, Save, Search, BarChart3, ShoppingBag, 
  LayoutGrid, Map, Pin, AlertOctagon, Power, User, Building2, 
  CreditCard, Phone, ShieldCheck, Quote
} from 'lucide-react';
import Image from 'next/image';

export default function CMSSettingsPage() {
  const [activeTab, setActiveTab] = useState<'IDENTITY' | 'PROTOCOLS'>('IDENTITY');
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // WEB PROTOCOLS STATE
  const [maintenanceMode, setMaintenanceMode] = useState(false); 
  const [visibility, setVisibility] = useState<'PUBLIC' | 'STEALTH'>('PUBLIC'); 
  const [webConfig, setWebConfig] = useState({
    gsc: '', ga4: '', gMerchant: '', bing: '', yandex: '', pinterest: ''
  });

  // IDENTITY STATE
  const [identity, setIdentity] = useState({
    founderName: '', founderRole: '', founderPhoto: '', founderQuote: '',
    companyName: '', brandName: '', addressLegal: '', addressOps: '',
    nib: '', skKemenkumham: '', npwp: '',
    bankName: '', bankAccount: '', bankHolder: '',
    whatsapp: '', email: ''
  });

  // FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const [protocols, idData] = await Promise.all([
                Repository.getWebProtocols(),
                Repository.getCompanyIdentity()
            ]);
            
            // Set Protocols
            setMaintenanceMode(protocols.maintenanceMode);
            setVisibility(protocols.visibility);
            setWebConfig({
                gsc: protocols.gsc || '',
                ga4: protocols.ga4 || '',
                gMerchant: protocols.gMerchant || '',
                bing: protocols.bing || '',
                yandex: protocols.yandex || '',
                pinterest: protocols.pinterest || ''
            });

            // Set Identity
            setIdentity(idData);

        } catch (e) {
            console.error("Failed to load settings", e);
        } finally {
            setIsLoading(false);
        }
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
        if (activeTab === 'PROTOCOLS') {
            await Repository.saveWebProtocols({
                maintenanceMode,
                visibility,
                ...webConfig
            });
        } else {
            await Repository.saveCompanyIdentity(identity);
        }
        alert(`✅ SUKSES! ${activeTab} Updated.`);
    } catch (e: any) {
        console.error("Save Error:", e);
        if (e.message && e.message.includes('relation "settings" does not exist')) {
             alert("⚠️ ERROR: TABEL DATABASE BELUM DIBUAT. Jalankan SQL Create Table.");
        } else {
             alert(`❌ GAGAL: ${e.message}`);
        }
    } finally {
        setIsSaving(false);
    }
  };

  const handleWebChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWebConfig({ ...webConfig, [e.target.name]: e.target.value });
  };

  const handleIdentityChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIdentity({ ...identity, [e.target.name]: e.target.value });
  };

  const displayDomain = SITE_CONFIG.domain.replace(/(^\w+:|^)\/\//, '');

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      
      {/* 1. Main Area (Left) */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <Header title="SYSTEM CONFIGURATION" />

         {/* Tabs Navigation */}
         <div className="flex border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 pt-2">
            <button 
                onClick={() => setActiveTab('IDENTITY')}
                className={`px-6 py-4 text-xs font-black uppercase tracking-widest border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'IDENTITY' ? 'border-brand-600 text-brand-600' : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'}`}
            >
                <User size={16} /> Corporate Identity
            </button>
            <button 
                onClick={() => setActiveTab('PROTOCOLS')}
                className={`px-6 py-4 text-xs font-black uppercase tracking-widest border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'PROTOCOLS' ? 'border-brand-600 text-brand-600' : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'}`}
            >
                <Globe size={16} /> Web Protocols
            </button>
         </div>

         <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar relative z-10 pb-24">
            
            {isLoading ? (
                <div className="flex flex-col items-center justify-center h-64 text-zinc-500">
                    <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin mb-4" />
                    <p className="text-xs font-black uppercase tracking-widest">Fetching Data...</p>
                </div>
            ) : (
                <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
                    
                    {/* === IDENTITY TAB === */}
                    {activeTab === 'IDENTITY' && (
                        <>
                            {/* FOUNDER PROFILE */}
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <User size={20} className="text-brand-600" />
                                    <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">Founder Profile</h3>
                                </div>
                                <GlassCard variant="solid" className="p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="w-full md:w-1/4 flex flex-col gap-4">
                                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                                                {identity.founderPhoto ? (
                                                    <Image src={identity.founderPhoto} alt="Founder" fill className="object-cover" />
                                                ) : (
                                                    <div className="flex items-center justify-center h-full text-zinc-400"><User size={48}/></div>
                                                )}
                                            </div>
                                            <input 
                                                type="text" 
                                                name="founderPhoto" 
                                                value={identity.founderPhoto} 
                                                onChange={handleIdentityChange}
                                                placeholder="Photo URL..." 
                                                className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-xs"
                                            />
                                        </div>
                                        <div className="w-full md:w-3/4 space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-[10px] font-bold text-zinc-500 uppercase">Founder Name</label>
                                                    <input type="text" name="founderName" value={identity.founderName} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-bold" />
                                                </div>
                                                <div>
                                                    <label className="text-[10px] font-bold text-zinc-500 uppercase">Role / Title</label>
                                                    <input type="text" name="founderRole" value={identity.founderRole} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-bold" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-2"><Quote size={12}/> The Quote</label>
                                                <textarea name="founderQuote" rows={4} value={identity.founderQuote} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-sm font-medium resize-none" />
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </section>

                            {/* COMPANY & LEGALITY */}
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <Building2 size={20} className="text-brand-600" />
                                    <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">Legal Entity</h3>
                                </div>
                                <GlassCard variant="solid" className="p-6 md:p-8 space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase">Official PT Name</label>
                                            <input type="text" name="companyName" value={identity.companyName} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-bold" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase">Brand Short Name</label>
                                            <input type="text" name="brandName" value={identity.brandName} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-bold" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-1"><ShieldCheck size={12}/> NIB</label>
                                            <input type="text" name="nib" value={identity.nib} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-xs font-mono font-bold" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-1"><ShieldCheck size={12}/> SK KEMENKUMHAM</label>
                                            <input type="text" name="skKemenkumham" value={identity.skKemenkumham} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-xs font-mono font-bold" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-1"><ShieldCheck size={12}/> NPWP</label>
                                            <input type="text" name="npwp" value={identity.npwp} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-xs font-mono font-bold" />
                                        </div>
                                    </div>
                                </GlassCard>
                            </section>

                            {/* FINANCE */}
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <CreditCard size={20} className="text-brand-600" />
                                    <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">Official Bank Account</h3>
                                </div>
                                <GlassCard variant="solid" className="p-6 md:p-8 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-black">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase">Bank Name</label>
                                            <input type="text" name="bankName" value={identity.bankName} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-sm font-bold" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase">Account Number</label>
                                            <input type="text" name="bankAccount" value={identity.bankAccount} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-lg font-mono font-black text-brand-600" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase">Account Holder (A.N)</label>
                                            <input type="text" name="bankHolder" value={identity.bankHolder} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-sm font-bold" />
                                        </div>
                                    </div>
                                </GlassCard>
                            </section>

                            {/* ADDRESS & CONTACT */}
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <Map size={20} className="text-brand-600" />
                                    <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">HQ Location & Comms</h3>
                                </div>
                                <GlassCard variant="solid" className="p-6 md:p-8 space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase">Legal Office Address</label>
                                            <textarea name="addressLegal" rows={3} value={identity.addressLegal} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-xs font-medium resize-none" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase">Operational HQ Address</label>
                                            <textarea name="addressOps" rows={3} value={identity.addressOps} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-xs font-medium resize-none" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-2"><Phone size={12}/> WhatsApp (No +)</label>
                                            <input type="text" name="whatsapp" value={identity.whatsapp} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-bold" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-2"><Globe size={12}/> Email</label>
                                            <input type="text" name="email" value={identity.email} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-bold" />
                                        </div>
                                    </div>
                                </GlassCard>
                            </section>
                        </>
                    )}

                    {/* === PROTOCOLS TAB === */}
                    {activeTab === 'PROTOCOLS' && (
                        <>
                            {/* EMERGENCY */}
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
                                                Aktifkan mode ini untuk menutup akses publik ke <strong>{displayDomain}</strong>. 
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4 bg-black/40 p-2 rounded-2xl border border-white/5">
                                            <span className={`text-xs font-black uppercase tracking-widest ${maintenanceMode ? 'text-zinc-500' : 'text-emerald-500'}`}>
                                                {maintenanceMode ? 'OFFLINE' : 'LIVE'}
                                            </span>
                                            <button 
                                                onClick={() => setMaintenanceMode(!maintenanceMode)}
                                                className={`relative w-16 h-8 rounded-full transition-colors duration-300 flex items-center px-1 shadow-inner ${maintenanceMode ? 'bg-red-600' : 'bg-zinc-700'}`}
                                            >
                                                <div className={`w-6 h-6 rounded-full bg-white shadow-lg transition-transform duration-300 flex items-center justify-center ${maintenanceMode ? 'translate-x-8' : 'translate-x-0'}`}>
                                                    <Power size={12} className={maintenanceMode ? 'text-red-600' : 'text-zinc-900'} strokeWidth={3} />
                                                </div>
                                            </button>
                                            <span className={`text-xs font-black uppercase tracking-widest ${maintenanceMode ? 'text-red-500 animate-pulse' : 'text-zinc-500'}`}>
                                                MAINTENANCE
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SEO GRID */}
                            <section>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <button 
                                        onClick={() => setVisibility('PUBLIC')}
                                        className={`p-6 rounded-2xl border-2 text-left transition-all ${visibility === 'PUBLIC' ? 'bg-emerald-500/10 border-emerald-500' : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'}`}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <Eye size={24} className={visibility === 'PUBLIC' ? 'text-emerald-500' : 'text-zinc-400'} />
                                            {visibility === 'PUBLIC' && <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />}
                                        </div>
                                        <h4 className="font-black uppercase text-sm">Public Indexing</h4>
                                        <p className="text-xs text-zinc-500 mt-1">Google Crawler Allowed</p>
                                    </button>
                                    <button 
                                        onClick={() => setVisibility('STEALTH')}
                                        className={`p-6 rounded-2xl border-2 text-left transition-all ${visibility === 'STEALTH' ? 'bg-red-500/10 border-red-500' : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'}`}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <EyeOff size={24} className={visibility === 'STEALTH' ? 'text-red-500' : 'text-zinc-400'} />
                                            {visibility === 'STEALTH' && <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />}
                                        </div>
                                        <h4 className="font-black uppercase text-sm">Stealth Mode</h4>
                                        <p className="text-xs text-zinc-500 mt-1">No-Index / Hidden</p>
                                    </button>
                                </div>

                                <GlassCard variant="solid" className="p-6 space-y-6">
                                    <h4 className="text-xs font-black uppercase text-zinc-500 tracking-widest border-b border-zinc-200 dark:border-zinc-800 pb-2">Verification Tags</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 flex items-center gap-2"><Search size={12}/> Google Search Console</label>
                                            <input type="text" name="gsc" value={webConfig.gsc} onChange={handleWebChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-xs font-mono" placeholder="<meta name='google-site-verification'...>" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 flex items-center gap-2"><BarChart3 size={12}/> Google Analytics 4</label>
                                            <input type="text" name="ga4" value={webConfig.ga4} onChange={handleWebChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-xs font-mono" placeholder="G-XXXXXXXXXX" />
                                        </div>
                                    </div>
                                </GlassCard>
                            </section>
                        </>
                    )}

                    {/* SAVE ACTION */}
                    <div className="fixed bottom-0 md:bottom-6 left-0 md:left-auto right-0 md:right-6 p-4 md:p-0 z-50">
                        <Button 
                            size="lg" 
                            onClick={handleSave}
                            className="w-full md:w-auto bg-brand-600 hover:bg-brand-500 shadow-2xl shadow-brand-500/40 font-black tracking-widest uppercase"
                            disabled={isSaving}
                        >
                            {isSaving ? 'SYNCING TO CLOUD...' : <><Save size={18} className="mr-2" /> UPDATE CONFIG</>}
                        </Button>
                    </div>
                </div>
            )}
         </main>
      </div>

      {/* 2. Sidebar (Right) */}
      <Sidebar />
    </div>
  );
}
