import React from 'react';
import { ChatMessage } from '../types';

interface ChatBubbleAtomProps {
  message: ChatMessage;
}

export const ChatBubbleAtom: React.FC<ChatBubbleAtomProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[85%] p-3 rounded-2xl text-xs md:text-sm font-medium leading-relaxed
        ${isUser 
          ? 'bg-brand-600 text-white rounded-tr-none' 
          : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 rounded-tl-none'}
      `}>
        {message.text}
      </div>
    </div>
  );
};
