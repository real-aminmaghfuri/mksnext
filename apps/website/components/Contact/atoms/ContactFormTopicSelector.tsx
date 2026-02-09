
"use client";
import React from 'react';

interface TopicSelectorProps {
  topics: string[];
  selectedTopic: string;
  onTopicChange: (topic: string) => void;
  label: string;
}

export const ContactFormTopicSelector: React.FC<TopicSelectorProps> = ({ topics, selectedTopic, onTopicChange, label }) => {
  return (
    <div className="space-y-3 mb-6">
      <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider ml-1">{label}</label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {topics.map(topic => (
              <button
                key={topic}
                onClick={() => onTopicChange(topic)}
                className={`w-full px-2 py-4 rounded-xl text-[10px] md:text-xs font-black border transition-all duration-200 uppercase tracking-wider text-center shadow-sm flex items-center justify-center
                  ${selectedTopic === topic 
                      ? 'bg-brand-600 border-brand-600 text-white shadow-lg shadow-brand-500/20 scale-[1.02]' 
                      : 'bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800'
                  }`}
              >
                  {topic}
              </button>
          ))}
      </div>
    </div>
  );
};
