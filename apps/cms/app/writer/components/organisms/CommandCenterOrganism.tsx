import React from 'react';
import { Button } from 'ui';
import { Sparkles } from 'lucide-react';
import { CommandHeaderMolecule } from '../molecules/CommandHeaderMolecule';
import { TopicInputMolecule } from '../molecules/TopicInputMolecule';

interface CommandCenterOrganismProps {
  topic: string;
  setTopic: (value: string) => void;
  handleGenerate: () => void;
  isGenerating: boolean;
}

export const CommandCenterOrganism: React.FC<CommandCenterOrganismProps> = ({
  topic,
  setTopic,
  handleGenerate,
  isGenerating
}) => {
  return (
    <div className="w-full md:w-1/3 p-6 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col overflow-y-auto">
      <CommandHeaderMolecule />

      <div className="flex-1">
        <TopicInputMolecule value={topic} onChange={setTopic} />
      </div>

      <Button 
        onClick={handleGenerate} 
        disabled={isGenerating || !topic}
        fullWidth 
        size="lg" 
        className="mt-6 shadow-2xl shadow-brand-500/20 bg-gradient-to-r from-brand-600 to-red-600 hover:to-red-500 border-none font-black tracking-widest"
      >
        {isGenerating ? (
          <span className="animate-pulse uppercase">Generating Intel...</span>
        ) : (
          <><Sparkles size={18} className="mr-2" /> EXECUTE</>
        )}
      </Button>
    </div>
  );
};
