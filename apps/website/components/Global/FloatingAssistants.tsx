
"use client";

import React from 'react';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { useScrollAssistant } from './hooks/useScrollAssistant';
import { useChatAssistant } from './hooks/useChatAssistant';
import { ChatWindowOrganism } from './organisms/ChatWindowOrganism';
import { FabGroupOrganism } from './organisms/FabGroupOrganism';

/**
 * FloatingAssistants - Orchestrates the floating UI elements (Back to Top & AI Chat).
 * Separates logic into custom hooks and visuals into organisms.
 */
export const FloatingAssistants: React.FC = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  // Logic Extraction
  const { showTop, scrollToTop } = useScrollAssistant();
  const {
    isChatOpen,
    messages,
    input,
    isTyping,
    scrollRef,
    setInput,
    toggleChat,
    handleSend
  } = useChatAssistant({ 
    welcomeMessage: text.chatWelcome,
    language 
  });

  return (
    <>
      <FabGroupOrganism 
        showTop={showTop}
        onScrollToTop={scrollToTop}
        isChatOpen={isChatOpen}
        onToggleChat={toggleChat}
        labels={{
          backTop: text.fabBackTop,
          chat: text.fabChat
        }}
      />

      <ChatWindowOrganism 
        isOpen={isChatOpen}
        messages={messages}
        isTyping={isTyping}
        scrollRef={scrollRef}
        input={input}
        setInput={setInput}
        onSend={handleSend}
        labels={{
          header: text.chatHeader,
          status: "Online (V2.0)",
          placeholder: text.chatPlaceholder,
          disclaimer: text.chatDisclaimer
        }}
      />
    </>
  );
};

