
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { GlassCard, Button } from 'ui';

interface ConnectivityCardProps {
  icon: LucideIcon;
  title: string;
  statusLabel: string;
  statusColor: 'emerald' | 'blue';
  showSync?: boolean;
  onSync?: () => void;
}

export const ConnectivityCard: React.FC<ConnectivityCardProps> = ({ 
  icon: Icon, 
  title, 
  statusLabel, 
  statusColor, 
  showSync, 
  onSync 
}) => {
  const colorClasses = {
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600',
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
  };

  return (
    <GlassCard variant="solid" className="p-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${colorClasses[statusColor]}`}>
          <Icon size={20} />
        </div>
        <div>
          <h4 className="font-bold text-sm">{title}</h4>
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{statusLabel}</p>
        </div>
      </div>
      {showSync ? (
        <Button size="sm" variant="ghost" className="text-xs h-8" onClick={onSync}>SYNC NOW</Button>
      ) : (
        <div className={`w-2 h-2 rounded-full animate-pulse ${statusColor === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'}`} />
      )}
    </GlassCard>
  );
};
