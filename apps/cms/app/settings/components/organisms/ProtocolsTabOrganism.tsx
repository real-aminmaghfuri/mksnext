import React from 'react';
import { Globe } from 'lucide-react';
import { GlassCard } from 'ui';
import { SectionHeaderAtom } from '../atoms/SectionHeaderAtom';
import { SettingInputAtom } from '../atoms/SettingInputAtom';

interface ProtocolsTabOrganismProps {
  webConfig: { 
    maintenanceMode: boolean;
    visibility: 'PUBLIC' | 'STEALTH';
    gsc: string; 
    ga4: string; 
    gMerchant: string; 
    bing: string; 
    yandex: string; 
    pinterest: string; 
  };
  setWebConfig: React.Dispatch<React.SetStateAction<any>>;
}

export const ProtocolsTabOrganism: React.FC<ProtocolsTabOrganismProps> = ({
  webConfig,
  setWebConfig
}) => {
  return (
    <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <SectionHeaderAtom icon={Globe} title="SEO & Analytics Protocols" />

      <GlassCard variant="solid" className="p-6 md:p-8 space-y-8">
        {/* SYSTEM STATUS & VISIBILITY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-zinc-100 dark:border-zinc-800 pb-8">
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 dark:text-white mb-2">
              System Status
            </h4>
            <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 dark:bg-black/40 border border-zinc-100 dark:border-zinc-800">
              <div>
                <p className="text-sm font-bold text-zinc-900 dark:text-white">Maintenance Mode</p>
                <p className="text-xs text-zinc-500">Tampilkan halaman perbaikan ke publik</p>
              </div>
              <button 
                onClick={() => setWebConfig({...webConfig, maintenanceMode: !webConfig.maintenanceMode})}
                className={`w-12 h-6 rounded-full transition-colors relative ${webConfig.maintenanceMode ? 'bg-brand-500' : 'bg-zinc-300 dark:bg-zinc-700'}`}
              >
                <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${webConfig.maintenanceMode ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 dark:text-white mb-2">
              Search Engine Visibility
            </h4>
            <div className="flex gap-2">
              {[
                { id: 'PUBLIC', label: 'Visible (Index)', desc: 'Bisa dicari di Google' },
                { id: 'STEALTH', label: 'Hidden (Noindex)', desc: 'Sembunyikan dari SEO' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setWebConfig({...webConfig, visibility: opt.id as any})}
                  className={`flex-1 p-4 rounded-2xl border transition-all text-left ${
                    webConfig.visibility === opt.id 
                      ? 'border-brand-500 bg-brand-50/50 dark:bg-brand-500/10 ring-1 ring-brand-500' 
                      : 'border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-black/40 hover:border-zinc-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <p className={`text-sm font-bold ${webConfig.visibility === opt.id ? 'text-brand-600 dark:text-brand-400' : 'text-zinc-900 dark:text-white'}`}>
                    {opt.label}
                  </p>
                  <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider font-medium">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Google Ecosystem */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-2 mb-4">
              Google Ecosystem
            </h4>
            <SettingInputAtom 
              label="Google Search Console (HTML Tag)" 
              value={webConfig.gsc} 
              onChange={(e) => setWebConfig({...webConfig, gsc: e.target.value})}
              placeholder="e.g. content='...'"
              className="font-mono"
            />
            <SettingInputAtom 
              label="Google Analytics 4 (Measurement ID)" 
              value={webConfig.ga4} 
              onChange={(e) => setWebConfig({...webConfig, ga4: e.target.value})}
              placeholder="G-XXXXXXXXXX"
              className="font-mono"
            />
            <SettingInputAtom 
              label="Google Merchant Center (Verification)" 
              value={webConfig.gMerchant} 
              onChange={(e) => setWebConfig({...webConfig, gMerchant: e.target.value})}
              className="font-mono"
            />
          </div>

          {/* Other Search Engines */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-2 mb-4">
              Global Search Engines
            </h4>
            <SettingInputAtom 
              label="Bing Webmaster Tools" 
              value={webConfig.bing} 
              onChange={(e) => setWebConfig({...webConfig, bing: e.target.value})}
              className="font-mono"
            />
            <SettingInputAtom 
              label="Yandex Webmaster" 
              value={webConfig.yandex} 
              onChange={(e) => setWebConfig({...webConfig, yandex: e.target.value})}
              className="font-mono"
            />
            <SettingInputAtom 
              label="Pinterest Verification" 
              value={webConfig.pinterest} 
              onChange={(e) => setWebConfig({...webConfig, pinterest: e.target.value})}
              className="font-mono"
            />
          </div>
        </div>
      </GlassCard>
    </section>
  );
};
