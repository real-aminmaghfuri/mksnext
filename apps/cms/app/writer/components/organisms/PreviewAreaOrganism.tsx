import React from 'react';
import { Sparkles } from 'lucide-react';
import { PreviewHeaderMolecule } from '../molecules/PreviewHeaderMolecule';
import { TypographyWrapperAtom } from '../atoms/TypographyWrapperAtom';

interface PreviewAreaOrganismProps {
  generatedHtml: string;
  isCopied: boolean;
  handleCopy: () => void;
}

export const PreviewAreaOrganism: React.FC<PreviewAreaOrganismProps> = ({
  generatedHtml,
  isCopied,
  handleCopy
}) => {
  return (
    <div className="w-full md:w-2/3 bg-zinc-50 dark:bg-black relative flex flex-col">
      <PreviewHeaderMolecule 
        hasContent={!!generatedHtml} 
        isCopied={isCopied} 
        onCopy={handleCopy} 
      />

      <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar bg-white dark:bg-black relative">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {generatedHtml ? (
          <div className="max-w-3xl mx-auto relative z-10 animate-fade-in-up">
            <TypographyWrapperAtom content={generatedHtml} />
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-zinc-300 dark:text-zinc-800 opacity-50">
            <div className="w-20 h-20 border-4 border-zinc-200 dark:border-zinc-800 border-dashed rounded-full flex items-center justify-center mb-4">
              <Sparkles size={32} strokeWidth={1} />
            </div>
            <p className="font-black uppercase tracking-widest text-sm">Awaiting Input Data</p>
          </div>
        )}
      </div>
    </div>
  );
};
