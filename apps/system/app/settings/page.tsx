
"use client";

import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { MobileNav } from '../../components/MobileNav';
import { DashboardHeaderAtom } from '../../components/Dashboard/atoms/DashboardHeaderAtom';
import { Button, GlassCard } from 'ui';
import { Printer, Receipt, Wifi, Save, Database, User } from 'lucide-react';

export default function SystemSettingsPage() {
  const [isSaving, setIsSaving] = useState(false);
  
  const user = {
    name: "AMIN MAGHFURI",
    role: "Commander",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100"
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("HARDWARE CONFIG SAVED");
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-luxury-dark text-zinc-900 dark:text-white overflow-hidden">
      
      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <DashboardHeaderAtom 
            title="SISTEM OPERASIONAL"
            isLoading={isSaving}
            onRefresh={() => {}}
            user={user}
         />

         <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar relative z-10 pb-24">
            
            <div className="max-w-4xl mx-auto space-y-8">
                
                {/* 1. HARDWARE CONFIG */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <Printer size={20} className="text-brand-600" />
                        <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">POS Hardware</h3>
                    </div>
                    
                    <GlassCard variant="solid" className="p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-sm">Printer Dapur (Kitchen)</h4>
                                <p className="text-xs text-zinc-500">IP Address: 192.168.1.200</p>
                            </div>
                            <Button size="sm" variant="outline" className="text-xs">TEST PRINT</Button>
                        </div>
                        <div className="h-px bg-zinc-100 dark:bg-zinc-800" />
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-sm">Printer Kasir (Cashier)</h4>
                                <p className="text-xs text-zinc-500">Connected via USB-001</p>
                            </div>
                            <Button size="sm" variant="outline" className="text-xs">TEST PRINT</Button>
                        </div>
                    </GlassCard>
                </section>

                {/* 2. RECEIPT SETTINGS */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <Receipt size={20} className="text-brand-600" />
                        <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">Struk & Nota</h3>
                    </div>
                    
                    <GlassCard variant="solid" className="p-6 space-y-4">
                        <div>
                            <label className="text-xs font-bold text-zinc-500 uppercase">Header Text</label>
                            <input type="text" defaultValue="PT MESIN KASIR SOLO" className="w-full mt-2 p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm font-bold" />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-zinc-500 uppercase">Footer Message</label>
                            <input type="text" defaultValue="Terima Kasih, Selamat Belanja Kembali" className="w-full mt-2 p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm font-bold" />
                        </div>
                    </GlassCard>
                </section>

                {/* 3. SYNC */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <Wifi size={20} className="text-brand-600" />
                        <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">Konektivitas</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <GlassCard variant="solid" className="p-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg">
                                    <Database size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Local DB</h4>
                                    <p className="text-[10px] text-zinc-500">IndexedDB Active</p>
                                </div>
                            </div>
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        </GlassCard>

                        <GlassCard variant="solid" className="p-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                                    <User size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Cloud Sync</h4>
                                    <p className="text-[10px] text-zinc-500">Last sync: 2m ago</p>
                                </div>
                            </div>
                            <Button size="sm" variant="ghost" className="text-xs h-8">SYNC NOW</Button>
                        </GlassCard>
                    </div>
                </section>

                <div className="pt-4">
                    <Button 
                        fullWidth 
                        size="lg" 
                        onClick={handleSave}
                        disabled={isSaving}
                        className="shadow-xl"
                    >
                        {isSaving ? 'SAVING...' : <><Save size={18} className="mr-2" /> SIMPAN KONFIGURASI</>}
                    </Button>
                </div>

            </div>
         </main>

         <MobileNav />
      </div>

      <Sidebar />
    </div>
  );
}
