import { useState } from 'react';
import { AI_SYSTEM_PROMPT } from 'shared';
import { generateWriterAction } from '../../actions/gemini';

export function useWriter() {
  const [topic, setTopic] = useState('');
  const [generatedHtml, setGeneratedHtml] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return;
    setIsGenerating(true);
    setGeneratedHtml(''); 

    try {
      // Execute via Server Action (Secure)
      const content = await generateWriterAction(topic, AI_SYSTEM_PROMPT);
      
      if (content) {
        setGeneratedHtml(content);
      }
    } catch (error: any) {
      console.error("AI Error:", error);
      setGeneratedHtml(`<div class="p-6 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/50 rounded-xl text-red-600 dark:text-red-400 font-bold flex flex-col items-center gap-2"><p>CONNECTION SEVERED: ${error.message}</p></div>`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    if (!generatedHtml) return;
    navigator.clipboard.writeText(generatedHtml);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return {
    topic,
    setTopic,
    generatedHtml,
    isGenerating,
    isCopied,
    handleGenerate,
    handleCopy
  };
}
