
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
}

export const SettingsSectionHeader: React.FC<SectionHeaderProps> = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-4">
    <Icon size={20} className="text-brand-600" />
    <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">{title}</h3>
  </div>
);
