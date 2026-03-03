
import React from 'react';
import { Receipt } from 'lucide-react';
import { GlassCard } from 'ui';
import { SettingsSectionHeader } from '../atoms/SettingsSectionHeader';
import { ReceiptConfig } from '../hooks/useSettings';

interface ReceiptSectionProps {
  config: ReceiptConfig;
  onUpdate: (field: keyof ReceiptConfig, value: string) => void;
}

export const ReceiptSection: React.FC<ReceiptSectionProps> = ({ config, onUpdate }) => (
  <section>
    <SettingsSectionHeader icon={Receipt} title="Struk & Nota" />
    <GlassCard variant="solid" className="p-6 space-y-4">
      <div>
        <label className="text-xs font-bold text-zinc-500 uppercase">Header Text</label>
        <input 
          type="text" 
          value={config.header} 
          onChange={(e) => onUpdate('header', e.target.value)}
          className="w-full mt-2 p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm font-bold focus:outline-none focus:border-brand-500 transition-colors" 
        />
      </div>
      <div>
        <label className="text-xs font-bold text-zinc-500 uppercase">Footer Message</label>
        <input 
          type="text" 
          value={config.footer} 
          onChange={(e) => onUpdate('footer', e.target.value)}
          className="w-full mt-2 p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm font-bold focus:outline-none focus:border-brand-500 transition-colors" 
        />
      </div>
    </GlassCard>
  </section>
);
