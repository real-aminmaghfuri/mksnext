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

    const apiKeys = [
      process.env.GEMINI_API_KEY_1,
      process.env.GEMINI_API_KEY_2,
      process.env.GEMINI_API_KEY_3,
      process.env.GEMINI_API_KEY_4,
      process.env.GEMINI_API_KEY_5,
      process.env.GEMINI_API_KEY_6,
      process.env.API_KEY,
      process.env.GEMINI_API_KEY
    ].filter(Boolean) as string[];

    if (apiKeys.length === 0) {
      console.error("No API Keys Available in Client Context. Ensure they are prefixed with NEXT_PUBLIC_ if intended for client-side use.");
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: language === 'ID' 
          ? "Maaf, konfigurasi AI belum lengkap. Hubungi admin." 
          : "Sorry, AI configuration is incomplete. Contact admin." 
      }]);
      setIsTyping(false);
      return;
    }

    let attempts = 0;
    const maxAttempts = Math.min(apiKeys.length, 3); // Don't retry too many times on client
    let success = false;

    while (attempts < maxAttempts && !success) {
      try {
        // Pick a key based on attempt (simple rotation)
        const currentKey = apiKeys[attempts % apiKeys.length];
        const ai = new GoogleGenAI({ apiKey: currentKey });
        
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
        success = true;

      } catch (error: any) {
        console.error(`Chat attempt ${attempts + 1} failed:`, error);
        attempts++;
        
        if (attempts >= maxAttempts) {
          const errorMsg = language === 'ID' 
            ? "Maaf, koneksi ke markas terputus (API Error). Coba lagi nanti." 
            : "Sorry, connection to headquarters severed (API Error). Try again later.";
          setMessages(prev => [...prev, { role: 'model', text: errorMsg }]);
        } else {
          // Small delay before retry
          await new Promise(r => setTimeout(r, 500));
        }
      }
    }
    
    setIsTyping(false);
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
