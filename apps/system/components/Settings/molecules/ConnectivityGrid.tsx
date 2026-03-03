
import React from 'react';
import { Wifi, Database, User } from 'lucide-react';
import { SettingsSectionHeader } from '../atoms/SettingsSectionHeader';
import { ConnectivityCard } from '../atoms/ConnectivityCard';
import { ConnectivityStatus } from '../hooks/useSettings';

interface ConnectivityGridProps {
  status: ConnectivityStatus;
  onSync: () => void;
}

export const ConnectivityGrid: React.FC<ConnectivityGridProps> = ({ status, onSync }) => (
  <section>
    <SettingsSectionHeader icon={Wifi} title="Konektivitas" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ConnectivityCard 
        icon={Database} 
        title="Local DB" 
        statusLabel={status.localDb.label} 
        statusColor="emerald" 
      />
      <ConnectivityCard 
        icon={User} 
        title="Cloud Sync" 
        statusLabel={`Last sync: ${status.cloudSync.lastSync}`} 
        statusColor="blue" 
        showSync 
        onSync={onSync} 
      />
    </div>
  </section>
);
