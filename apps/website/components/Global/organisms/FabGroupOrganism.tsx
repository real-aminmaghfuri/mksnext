import React from 'react';
import { MessageSquare, X } from 'lucide-react';
import { ScrollToTopMolecule } from '../molecules/ScrollToTopMolecule';
import { FabButtonAtom } from '../atoms/FabButtonAtom';

interface FabGroupOrganismProps {
  showTop: boolean;
  onScrollToTop: () => void;
  isChatOpen: boolean;
  onToggleChat: () => void;
  labels: {
    backTop: string;
    chat: string;
  };
}

export const FabGroupOrganism: React.FC<FabGroupOrganismProps> = ({
  showTop,
  onScrollToTop,
  isChatOpen,
  onToggleChat,
  labels
}) => {
  return (
    <div className="fixed bottom-32 right-6 md:bottom-8 md:right-8 landscape:right-[100px] landscape:bottom-6 z-40 flex items-end gap-3">
      <ScrollToTopMolecule 
        isVisible={showTop} 
        onClick={onScrollToTop} 
        title={labels.backTop} 
      />

      <FabButtonAtom 
        icon={isChatOpen ? X : MessageSquare}
        onClick={onToggleChat}
        title={labels.chat}
        size="lg"
        isActive={isChatOpen}
        className={`
          ${isChatOpen ? 'bg-red-600 text-white' : 'bg-gradient-to-r from-brand-600 to-orange-600 text-white animate-pulse-slow'}
        `}
      />
    </div>
  );
};
