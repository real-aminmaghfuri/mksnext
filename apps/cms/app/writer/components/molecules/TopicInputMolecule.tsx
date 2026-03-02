import React from 'react';
import { FileCode } from 'lucide-react';
import { LabelAtom } from '../atoms/LabelAtom';

interface TopicInputMoleculeProps {
  value: string;
  onChange: (value: string) => void;
}

export const TopicInputMolecule: React.FC<TopicInputMoleculeProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <LabelAtom label="Target Topic" icon={FileCode} className="ml-1" />
        <textarea 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Contoh: Bongkar rahasia markup harga supplier nakal..."
          className="w-full h-40 mt-2 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-brand-500 outline-none resize-none transition-all placeholder:text-zinc-400 custom-scrollbar"
        />
      </div>
    </div>
  );
};
