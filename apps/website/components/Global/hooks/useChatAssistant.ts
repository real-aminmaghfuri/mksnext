"use client";

import { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

interface UseChatAssistantProps {
  welcomeMessage: string;
  language: string;
}

/**
 * useChatAssistant - Hook to manage AI Chat logic with Gemini load balancing.
 */
export function useChatAssistant({ welcomeMessage, language }: UseChatAssistantProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize Chat with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'model', text: welcomeMessage }]);
    }
  }, [welcomeMessage]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isChatOpen]);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      // LOAD BALANCING LOGIC: Pick one random key from the available pool
      const apiKeys = [
        process.env.GEMINI_API_KEY_1,
        process.env.GEMINI_API_KEY_2,
        process.env.GEMINI_API_KEY_3,
        process.env.GEMINI_API_KEY_4,
        process.env.GEMINI_API_KEY_5,
        process.env.GEMINI_API_KEY_6,
        process.env.API_KEY // Fallback
      ].filter(Boolean);

      if (apiKeys.length === 0) {
        throw new Error("No API Keys Available");
      }

      const randomKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];
      
      // Initialize with the selected random key
      const ai = new GoogleGenAI({ apiKey: randomKey as string });
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: "user",
            parts: [{ text: `You are SIBOS, a helpful AI Assistant for PT Mesin Kasir Solo (MKS). Answer briefly and professionally in ${language === 'ID' ? 'Indonesian' : 'English'}. User asks: ${userMsg}` }]
          }
        ]
      });

      const reply = response.text || (language === 'ID' ? "Maaf, saya tidak dapat menjawab saat ini." : "Sorry, I cannot answer at this time.");
      setMessages(prev => [...prev, { role: 'model', text: reply }]);

    } catch (error) {
      console.error(error);
      const errorMsg = language === 'ID' 
        ? "Maaf, koneksi ke markas terputus (API Error). Coba lagi nanti." 
        : "Sorry, connection to headquarters severed (API Error). Try again later.";
      setMessages(prev => [...prev, { role: 'model', text: errorMsg }]);
    } finally {
      setIsTyping(false);
    }
  };

  return {
    isChatOpen,
    messages,
    input,
    isTyping,
    scrollRef,
    setInput,
    toggleChat,
    handleSend
  };
}
