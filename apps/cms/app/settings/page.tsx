"use client";

import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { Button, GlassCard } from 'ui';
import { Repository, CompanyIdentity, BankAccount } from 'data';
import { 
  Globe, Save, User, Building2, CreditCard, Phone, 
  ShieldCheck, Quote, UploadCloud, Plus, Trash2, Clock, MapPin, 
  ScanEye, Cpu, CheckCircle2, XCircle
} from 'lucide-react';
import Image from 'next/image';
import { analyzeImageForSEO } from '../../utils/ai-services';
import { uploadToCloudinary } from '../actions/upload'; // Use Server Action

export default function CMSSettingsPage() {
  const [activeTab, setActiveTab] = useState<'IDENTITY' | 'PROTOCOLS'>('IDENTITY');
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // AI Upload State
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStep, setUploadStep] = useState<string>(''); 

  // WEB PROTOCOLS STATE
  const [webConfig, setWebConfig] = useState({
    gsc: '', ga4: '', gMerchant: '', bing: '', yandex: '', pinterest: ''
  });

  // IDENTITY STATE
  const [identity, setIdentity] = useState<CompanyIdentity>({
    founderName: '', founderRole: '', founderPhoto: '', founderQuote: '',
    companyName: '', brandName: '', addressLegal: '', addressOps: '',
    mapLegalUrl: '', mapOpsUrl: '', operatingHours: '',
    nib: '', skKemenkumham: '', npwp: '',
    bankAccounts: [],
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
            setWebConfig({
                gsc: protocols.gsc || '',
                ga4: protocols.ga4 || '',
                gMerchant: protocols.gMerchant || '',
                bing: protocols.bing || '',
                yandex: protocols.yandex || '',
                pinterest: protocols.pinterest || ''
            });

            // Set Identity
            setIdentity({
                ...idData,
                bankAccounts: idData.bankAccounts || [] 
            });

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
                maintenanceMode: false, // Defaulting
                visibility: 'PUBLIC', // Defaulting
                ...webConfig
            });
        } else {
            await Repository.saveCompanyIdentity(identity);
        }
        alert(`✅ SUKSES! ${activeTab} Updated.`);
    } catch (e: any) {
        console.error("Save Error:", e);
        alert(`❌ GAGAL: ${e.message}`);
    } finally {
        setIsSaving(false);
    }
  };

  // --- HANDLERS ---

  const handleIdentityChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIdentity({ ...identity, [e.target.name]: e.target.value });
  };

  // --- DELETE PHOTO FUNCTION ---
  const handleRemovePhoto = async () => {
    if(!confirm("Yakin mau hapus foto founder? Tampilan di web bakal kosong.")) return;
    
    setIsSaving(true);
    try {
        // 1. Update State
        const updatedIdentity = { ...identity, founderPhoto: '' };
        setIdentity(updatedIdentity);
        
        // 2. Auto Save to DB
        await Repository.saveCompanyIdentity(updatedIdentity);
        alert("Foto berhasil dihapus dari database.");
    } catch (e: any) {
        alert("Gagal hapus: " + e.message);
    } finally {
        setIsSaving(false);
    }
  };

  // --- AI-POWERED UPLOAD PIPELINE ---
  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    
    setIsUploading(true);
    setUploadStep('INITIALIZING AI VISION...');

    try {
        // 1. AI Analysis
        setUploadStep('SCANNING & OPTIMIZING SEO...');
        const seoData = await analyzeImageForSEO(file, "Founder Profile Picture of PT Mesin Kasir Solo");
        
        // 2. Prepare Payload
        setUploadStep('INJECTING METADATA...');
        
        // Construct the FormData
        const formData = new FormData();
        formData.append('file', file);
        formData.append('folder', 'mks_founder');
        
        // STRATEGY: Append Timestamp to ensure uniqueness while keeping SEO keywords
        const timestamp = Date.now();
        const cleanSlug = seoData.filename.replace(/[^a-z0-9-]/gi, '-').toLowerCase();
        const finalPublicId = `${cleanSlug}-${timestamp}`;

        formData.append('public_id', finalPublicId); 
        formData.append('alt', seoData.alt_text);
        formData.append('caption', seoData.caption);

        // 3. Upload (Server-Side)
        setUploadStep('COOKING ON SERVER...');
        
        // Use Server Action
        const result: any = await uploadToCloudinary(formData);
        
        if (result && result.secure_url) {
            
            // 4. AUTO SAVE TO DATABASE
            const updatedIdentity = { ...identity, founderPhoto: result.secure_url };
            setIdentity(updatedIdentity);
            
            await Repository.saveCompanyIdentity(updatedIdentity);
            
            setUploadStep('DONE');
            alert(`✅ Foto Terupload Mateng!\nFormat: ${result.format}\nSEO ID: ${finalPublicId}`);
        } else {
            throw new Error('Upload failed on server.');
        }

    } catch (err: any) {
        console.error(err);
        alert(`Upload Failed: ${err.message}`);
    } finally {
        setIsUploading(false);
        setUploadStep('');
    }
  };

  const addBankAccount = () => {
    setIdentity({
        ...identity,
        bankAccounts: [...identity.bankAccounts, { bankName: '', accountNumber: '', accountHolder: '' }]
    });
  };

  const removeBankAccount = (idx: number) => {
    const newBanks = [...identity.bankAccounts];
    newBanks.splice(idx, 1);
    setIdentity({ ...identity, bankAccounts: newBanks });
  };

  const updateBankAccount = (idx: number, field: keyof BankAccount, value: string) => {
    const newBanks = [...identity.bankAccounts];
    newBanks[idx] = { ...newBanks[idx], [field]: value };
    setIdentity({ ...identity, bankAccounts: newBanks });
  };

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <Header title="SYSTEM CONFIGURATION" />

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
                                            {/* Photo Upload Area */}
                                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group">
                                                {identity.founderPhoto ? (
                                                    <>
                                                        <Image src={identity.founderPhoto} alt="Founder" fill className="object-cover" />
                                                        {/* Delete Overlay */}
                                                        <button 
                                                            onClick={handleRemovePhoto}
                                                            className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:scale-110 shadow-lg"
                                                            title="Hapus Foto"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <div className="flex items-center justify-center h-full text-zinc-400 flex-col gap-2">
                                                        <User size={48} className="opacity-20"/>
                                                        <span className="text-[9px] font-bold uppercase text-zinc-500">No Photo</span>
                                                    </div>
                                                )}
                                                
                                                {/* Upload Overlay */}
                                                <div className={`absolute inset-0 bg-black/80 transition-opacity flex flex-col items-center justify-center text-white ${isUploading ? 'opacity-100 z-30' : 'opacity-0 group-hover:opacity-100 z-10'}`}>
                                                    {isUploading ? (
                                                        <>
                                                            <Cpu size={32} className="mb-2 text-brand-500 animate-pulse" />
                                                            <span className="text-[10px] font-black uppercase tracking-widest animate-pulse text-center px-4">
                                                                {uploadStep}
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <label className="cursor-pointer flex flex-col items-center w-full h-full justify-center">
                                                            <ScanEye size={32} className="mb-2 text-brand-500" />
                                                            <span className="text-[10px] font-bold uppercase tracking-wider">
                                                                {identity.founderPhoto ? 'GANTI FOTO' : 'UPLOAD BARU'}
                                                            </span>
                                                            <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" disabled={isUploading} />
                                                        </label>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            <div className="text-[9px] text-zinc-400 text-center px-2">
                                                *Otomatis SEO (Rename, Metadata & Resize).
                                            </div>
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
                                <div className="flex items-center gap-3 mb-4 justify-between">
                                    <div className="flex items-center gap-3">
                                        <CreditCard size={20} className="text-brand-600" />
                                        <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">Official Bank Accounts</h3>
                                    </div>
                                    <Button size="sm" onClick={addBankAccount} className="h-8 text-xs font-bold bg-zinc-800 hover:bg-zinc-700">
                                        <Plus size={14} className="mr-1"/> Add Bank
                                    </Button>
                                </div>
                                <div className="space-y-4">
                                    {identity.bankAccounts.map((bank, idx) => (
                                        <GlassCard key={idx} variant="solid" className="p-4 md:p-6 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-black relative group">
                                            <button onClick={() => removeBankAccount(idx)} className="absolute top-4 right-4 text-zinc-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div>
                                                    <label className="text-[10px] font-bold text-zinc-500 uppercase">Bank Name</label>
                                                    <input type="text" value={bank.bankName} onChange={(e) => updateBankAccount(idx, 'bankName', e.target.value)} className="w-full mt-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-sm font-bold" />
                                                </div>
                                                <div>
                                                    <label className="text-[10px] font-bold text-zinc-500 uppercase">Account Number</label>
                                                    <input type="text" value={bank.accountNumber} onChange={(e) => updateBankAccount(idx, 'accountNumber', e.target.value)} className="w-full mt-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-lg font-mono font-black text-brand-600" />
                                                </div>
                                                <div>
                                                    <label className="text-[10px] font-bold text-zinc-500 uppercase">Account Holder</label>
                                                    <input type="text" value={bank.accountHolder} onChange={(e) => updateBankAccount(idx, 'accountHolder', e.target.value)} className="w-full mt-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-sm font-bold" />
                                                </div>
                                            </div>
                                        </GlassCard>
                                    ))}
                                </div>
                            </section>

                            {/* ADDRESS & MAPS */}
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <MapPin size={20} className="text-brand-600" />
                                    <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">Locations & Maps</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* LEGAL OFFICE */}
                                    <GlassCard variant="solid" className="p-6 space-y-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 dark:text-white">Legal Office</h4>
                                        </div>
                                        <textarea name="addressLegal" rows={3} value={identity.addressLegal} onChange={handleIdentityChange} className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-xs font-medium resize-none" placeholder="Address..." />
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase">Map Embed URL (SRC Only)</label>
                                            <input type="text" name="mapLegalUrl" value={identity.mapLegalUrl} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-xs font-mono text-zinc-600 dark:text-zinc-400" />
                                        </div>
                                        {identity.mapLegalUrl && (
                                            <div className="w-full h-32 bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
                                                <iframe src={identity.mapLegalUrl} width="100%" height="100%" style={{border:0}} loading="lazy" />
                                            </div>
                                        )}
                                    </GlassCard>

                                    {/* OPS OFFICE */}
                                    <GlassCard variant="solid" className="p-6 space-y-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-brand-500" />
                                            <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 dark:text-white">Operational HQ</h4>
                                        </div>
                                        <textarea name="addressOps" rows={3} value={identity.addressOps} onChange={handleIdentityChange} className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-xs font-medium resize-none" placeholder="Address..." />
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase">Map Embed URL (SRC Only)</label>
                                            <input type="text" name="mapOpsUrl" value={identity.mapOpsUrl} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-xs font-mono text-zinc-600 dark:text-zinc-400" />
                                        </div>
                                        {identity.mapOpsUrl && (
                                            <div className="w-full h-32 bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
                                                <iframe src={identity.mapOpsUrl} width="100%" height="100%" style={{border:0}} loading="lazy" />
                                            </div>
                                        )}
                                    </GlassCard>
                                </div>
                            </section>

                            {/* CONTACT */}
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <Phone size={20} className="text-brand-600" />
                                    <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">Contacts & Hours</h3>
                                </div>
                                <GlassCard variant="solid" className="p-6 md:p-8 space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-2"><Phone size={12}/> WhatsApp (No +)</label>
                                            <input type="text" name="whatsapp" value={identity.whatsapp} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-bold" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-2"><Globe size={12}/> Email</label>
                                            <input type="text" name="email" value={identity.email} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-bold" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-2"><Clock size={12}/> Operating Hours</label>
                                        <textarea name="operatingHours" rows={2} value={identity.operatingHours} onChange={handleIdentityChange} className="w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-medium resize-none" />
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

      <Sidebar />
    </div>
  );
}