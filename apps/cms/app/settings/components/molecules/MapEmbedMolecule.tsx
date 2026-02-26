import React from 'react';
import { GlassCard } from 'ui';
import { SettingInputAtom } from '../atoms/SettingInputAtom';

interface MapEmbedMoleculeProps {
  title: string;
  address: string;
  mapUrl: string;
  indicatorColor: 'blue' | 'brand';
  onAddressChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onMapUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  namePrefix: string;
}

export const MapEmbedMolecule: React.FC<MapEmbedMoleculeProps> = ({
  title,
  address,
  mapUrl,
  indicatorColor,
  onAddressChange,
  onMapUrlChange,
  namePrefix
}) => {
  const colorClass = indicatorColor === 'blue' ? 'bg-blue-500' : 'bg-brand-500';

  return (
    <GlassCard variant="solid" className="p-6 space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-2 h-2 rounded-full ${colorClass}`} />
        <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 dark:text-white">{title}</h4>
      </div>
      <SettingInputAtom 
        label="Address" 
        isTextarea 
        rows={3} 
        value={address} 
        onChange={onAddressChange} 
        placeholder="Address..." 
        name={`${namePrefix}Address`}
      />
      <SettingInputAtom 
        label="Map Embed URL (SRC Only)" 
        value={mapUrl} 
        onChange={onMapUrlChange} 
        className="font-mono text-zinc-600 dark:text-zinc-400"
        name={`${namePrefix}MapUrl`}
      />
      {mapUrl && (
        <div className="w-full h-32 bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
          <iframe src={mapUrl} width="100%" height="100%" style={{border:0}} loading="lazy" title={title} />
        </div>
      )}
    </GlassCard>
  );
};
