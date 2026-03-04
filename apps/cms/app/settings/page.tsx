
"use client";

import { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { MobileNav } from '../../components/MobileNav';
import { Button } from 'ui';
import { useSettingsData } from './hooks/useSettingsData';
import { usePhotoUpload } from './hooks/usePhotoUpload';
import { IdentityTabOrganism } from './components/organisms/IdentityTabOrganism';
import { ProtocolsTabOrganism } from './components/organisms/ProtocolsTabOrganism';
import { TabButtonAtom } from './components/atoms/TabButtonAtom';
import { Globe, User, Save } from 'lucide-react'; 

export default function CMSSettingsPage() {
  const [activeTab, setActiveTab] = useState<'IDENTITY' | 'PROTOCOLS'>('IDENTITY');

  const { 
    identity, setIdentity, 
    webConfig, setWebConfig, 
    isLoading, isSaving, 
    handleSave, handleIdentityChange, 
    addBankAccount, removeBankAccount, updateBankAccount 
  } = useSettingsData();

  const { 
    isUploading, 
    uploadStep, 
    handlePhotoUpload, 
    handleRemovePhoto 
  } = usePhotoUpload({ identity, setIdentity });

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <Header title="SYSTEM CONFIGURATION" />

        <div className="flex border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 pt-2">
          <TabButtonAtom
            label="Corporate Identity"
            icon={User}
            isActive={activeTab === 'IDENTITY'}
            onClick={() => setActiveTab('IDENTITY')}
          />
          <TabButtonAtom
            label="Web Protocols"
            icon={Globe}
            isActive={activeTab === 'PROTOCOLS'}
            onClick={() => setActiveTab('PROTOCOLS')}
          />
        </div>

         <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar relative z-10 pb-24">
            
            {isLoading ? (
                <div className="flex flex-col items-center justify-center h-64 text-zinc-500">
                    <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin mb-4" />
                    <p className="text-xs font-black uppercase tracking-widest">Fetching Data...</p>
                </div>
            ) : (
            <div className="max-w-5xl mx-auto space-y-8">
              {activeTab === 'IDENTITY' && (
                <IdentityTabOrganism
                  identity={identity}
                  handleIdentityChange={handleIdentityChange}
                  addBankAccount={addBankAccount}
                  removeBankAccount={removeBankAccount}
                  updateBankAccount={updateBankAccount}
                  isUploading={isUploading}
                  uploadStep={uploadStep}
                  handlePhotoUpload={handlePhotoUpload}
                  handleRemovePhoto={handleRemovePhoto}
                />
              )}

              {activeTab === 'PROTOCOLS' && (
                <ProtocolsTabOrganism
                  webConfig={webConfig}
                  setWebConfig={setWebConfig}
                />
              )}

              {/* SAVE ACTION */}
              <div className="fixed bottom-0 md:bottom-6 left-0 md:left-auto right-0 md:right-6 p-4 md:p-0 z-50">
                <Button
                  size="lg"
                  onClick={() => handleSave(activeTab)}
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
      <MobileNav />
    </div>
  );
}
