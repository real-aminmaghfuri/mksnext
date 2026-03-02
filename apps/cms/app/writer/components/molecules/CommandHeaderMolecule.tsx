import React from 'react';
import { Terminal } from 'lucide-react';

export const CommandHeaderMolecule: React.FC = () => {
  return (
    <div className="mb-8 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800">
      <div className="flex items-center gap-2 mb-2 text-brand-600">
        <Terminal size={20} />
        <span className="text-xs font-black uppercase tracking-widest">PROPAGANDA MACHINE</span>
      </div>
      <h2 className="text-2xl font-black uppercase tracking-tight mb-2 leading-none">Create Content</h2>
      <p className="text-xs text-zinc-500 font-medium">
        System automatically injects <strong>'MKS Typography Standard'</strong> & <strong>'Street Smart'</strong> persona.
      </p>
    </div>
  );
};
