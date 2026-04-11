import React from 'react';
import { ChatMessage } from '../types';
import { ChatHeaderMolecule } from '../molecules/ChatHeaderMolecule';
import { ChatFooterMolecule } from '../molecules/ChatFooterMolecule';
import { ChatBubbleAtom } from '../atoms/ChatBubbleAtom';
import { TypingIndicatorAtom } from '../atoms/TypingIndicatorAtom';

interface ChatWindowOrganismProps {
  isOpen: boolean;
  messages: ChatMessage[];
  isTyping: boolean;
  scrollRef: React.RefObject<HTMLDivElement | null>;
  input: string;
  setInput: (val: string) => void;
  onSend: () => void;
  labels: {
    header: string;
    status: string;
    placeholder: string;
    disclaimer: string;
  };
}

export const ChatWindowOrganism: React.FC<ChatWindowOrganismProps> = ({
  isOpen,
  messages,
  isTyping,
  scrollRef,
  input,
  setInput,
  onSend,
  labels
}) => {
  return (
    <div className={`
      fixed bottom-48 right-6 md:bottom-24 md:right-8 landscape:right-[100px] landscape:bottom-20 z-50 w-[320px] md:w-[380px] bg-white dark:bg-zinc-950 
      border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden
      transition-all duration-300 origin-bottom-right
      ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'}
    `}>
      <ChatHeaderMolecule title={labels.header} statusText={labels.status} />

      {/* Messages Area */}
      <div 
        ref={scrollRef}
        className="h-[350px] overflow-y-auto p-4 bg-zinc-50 dark:bg-black/50 custom-scrollbar space-y-4"
      >
        {messages.map((msg, idx) => (
          <ChatBubbleAtom key={idx} message={msg} />
        ))}
        {isTyping && <TypingIndicatorAtom />}
      </div>

      <ChatFooterMolecule 
        input={input}
        setInput={setInput}
        onSend={onSend}
        isTyping={isTyping}
        placeholder={labels.placeholder}
        disclaimer={labels.disclaimer}
      />
    </div>
  );
};
