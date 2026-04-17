
import React from 'react';
import { Printer } from 'lucide-react';
import { GlassCard } from 'ui';
import { SettingsSectionHeader } from '../atoms/SettingsSectionHeader';
import { HardwareItem } from '../atoms/HardwareItem';
import { HardwareConfig } from '../../../types';

interface HardwareSectionProps {
  hardware: HardwareConfig[];
  onTest: (id: string) => void;
}

export const HardwareSection: React.FC<HardwareSectionProps> = ({ hardware, onTest }) => (
  <section>
    <SettingsSectionHeader icon={Printer} title="POS Hardware" />
    <GlassCard variant="solid" className="p-6 space-y-6">
      {hardware.map((item, index) => (
        <React.Fragment key={item.id}>
          <HardwareItem 
            name={item.name} 
            connection={item.type === 'IP' ? `IP Address: ${item.connection}` : `Connected via ${item.connection}`} 
            onTest={() => onTest(item.id)} 
          />
          {index < hardware.length - 1 && <div className="h-px bg-zinc-100 dark:bg-zinc-800" />}
        </React.Fragment>
      ))}
    </GlassCard>
  </section>
);
