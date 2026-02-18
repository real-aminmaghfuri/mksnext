"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp, MessageSquare, X, Send, Bot, AlertTriangle } from 'lucide-react';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { GoogleGenAI } from "@google/genai";

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export const FloatingAssistants: React.FC = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  const [showTop, setShowTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Chat State
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Scroll To Top Action
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 3. Auto-scroll chat to bottom
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isChatOpen]);

  // 4. Initialize Chat
  useEffect(() => {
    if (messages.length === 0) {
        setMessages([{ role: 'model', text: text.chatWelcome }]);
    }
  }, [text.chatWelcome]); // Reset if language changes, optional

  // 5. Send Message to Gemini
  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
        if (!process.env.API_KEY) {
            throw new Error("API Key Missing");
        }

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-lite-latest",
            contents: [
                {
                    role: "user",
                    parts: [{ text: `You are SIBOS, a helpful AI Assistant for PT Mesin Kasir Solo (MKS). Answer briefly and professionally in ${language === 'ID' ? 'Indonesian' : 'English'}. User asks: ${userMsg}` }]
                }
            ]
        });

        const reply = response.text || "Maaf, saya tidak dapat menjawab saat ini.";
        setMessages(prev => [...prev, { role: 'model', text: reply }]);

    } catch (error) {
        setMessages(prev => [...prev, { role: 'model', text: "Maaf, koneksi ke markas terputus (API Error). Coba lagi nanti." }]);
    } finally {
        setIsTyping(false);
    }
  };

  return (
    <>
      {/* Container: Bottom Right */}
      {/* Logic: Mobile has bottom nav (72px), so we lift higher (bottom-24). Desktop uses bottom-8 */}
      <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-40 flex items-end gap-3">
         
         {/* LEFT: BACK TO TOP (Conditional) */}
         <button
            onClick={scrollToTop}
            className={`
                w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 
                flex items-center justify-center text-zinc-600 dark:text-zinc-300 shadow-lg 
                hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:-translate-y-1 transition-all duration-300
                ${showTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-0 pointer-events-none'}
            `}
            title={text.fabBackTop}
         >
            <ArrowUp size={20} strokeWidth={2.5} />
         </button>

         {/* RIGHT: CHAT TRIGGER */}
         <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`
                w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95
                ${isChatOpen ? 'bg-red-600 text-white rotate-90' : 'bg-gradient-to-r from-brand-600 to-orange-600 text-white animate-pulse-slow'}
            `}
            title={text.fabChat}
         >
            {isChatOpen ? <X size={24} /> : <MessageSquare size={26} strokeWidth={2.5} />}
         </button>

      </div>

      {/* CHAT WINDOW POPOVER */}
      <div className={`
          fixed bottom-40 right-6 md:bottom-24 md:right-8 z-50 w-[320px] md:w-[380px] bg-white dark:bg-zinc-950 
          border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden
          transition-all duration-300 origin-bottom-right
          ${isChatOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'}
      `}>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-600 to-orange-600 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                  <Bot size={20} />
              </div>
              <div>
                  <h3 className="text-white font-black text-sm uppercase tracking-wider">{text.chatHeader}</h3>
                  <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-white/80 font-bold">Online</span>
                  </div>
              </div>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="h-[350px] overflow-y-auto p-4 bg-zinc-50 dark:bg-black/50 custom-scrollbar space-y-4"
          >
              {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-3 rounded-2xl text-xs md:text-sm font-medium leading-relaxed
                          ${msg.role === 'user' 
                              ? 'bg-brand-600 text-white rounded-tr-none' 
                              : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 rounded-tl-none'}
                      `}>
                          {msg.text}
                      </div>
                  </div>
              ))}
              {isTyping && (
                  <div className="flex justify-start">
                      <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-none border border-zinc-200 dark:border-zinc-700">
                          <div className="flex gap-1">
                              <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                              <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                              <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                      </div>
                  </div>
              )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
              <form 
                className="flex items-center gap-2"
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              >
                  <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={text.chatPlaceholder}
                      className="flex-1 bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-xs md:text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-zinc-400"
                  />
                  <button 
                      type="submit"
                      disabled={!input.trim() || isTyping}
                      className="p-3 bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-colors shadow-lg shadow-brand-500/20"
                  >
                      <Send size={18} />
                  </button>
              </form>
              <div className="mt-2 flex items-center justify-center gap-1.5 text-[9px] text-zinc-400">
                  <AlertTriangle size={10} />
                  {text.chatDisclaimer}
              </div>
          </div>

      </div>
    </>
  );
};
