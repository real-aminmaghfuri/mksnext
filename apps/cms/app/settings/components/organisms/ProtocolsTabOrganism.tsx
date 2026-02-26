import React from 'react';
import { Globe } from 'lucide-react';
import { GlassCard } from 'ui';
import { SectionHeaderAtom } from '../atoms/SectionHeaderAtom';
import { SettingInputAtom } from '../atoms/SettingInputAtom';

interface ProtocolsTabOrganismProps {
  webConfig: { gsc: string; ga4: string; gMerchant: string; bing: string; yandex: string; pinterest: string; };
  setWebConfig: React.Dispatch<React.SetStateAction<{ gsc: string; ga4: string; gMerchant: string; bing: string; yandex: string; pinterest: string; }>>;
}

export const ProtocolsTabOrganism: React.FC<ProtocolsTabOrganismProps> = ({
  webConfig,
  setWebConfig
}) => {
  return (
    <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <SectionHeaderAtom icon={Globe} title="SEO & Analytics Protocols" />

      <GlassCard variant="solid" className="p-6 md:p-8 space-y-6">
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
