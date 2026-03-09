
import { useState } from 'react';
import { AIKeywordResearch, AIGenerationConfig } from 'data';
import { researchKeywordsAction, generateArticleAction } from '../../actions/ai';

export const useAIStrategist = () => {
  const [topic, setTopic] = useState('');
  const [isResearching, setIsResearching] = useState(false);
  const [recommendations, setRecommendations] = useState<AIKeywordResearch[]>([]);
  
  const [selectedRecommendation, setSelectedRecommendation] = useState<AIKeywordResearch | null>(null);
  const [config, setConfig] = useState<AIGenerationConfig>({
    type: 'CLUSTER',
    minWords: 1000,
    language: 'ID',
    narrativeStyle: 'STREET_SMART',
    targetKeyword: '',
    title: ''
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleResearch = async () => {
    console.log("Research button clicked. Topic:", topic);
    if (!topic) {
      console.warn("Topic is empty, skipping research.");
      return;
    }
    setIsResearching(true);
    setError(null);
    try {
      console.log("Calling researchKeywordsAction (Server Action)...");
      const results = await researchKeywordsAction(topic);
      console.log("Research results received from server:", results);
      if (results.length === 0) {
        setError("No results found. Try a different topic or check your API keys.");
      }
      setRecommendations(results);
    } catch (err: any) {
      console.error("Research failed in hook:", err);
      setError(err.message || "Research failed. Please check your connection or API keys.");
    } finally {
      setIsResearching(false);
    }
  };

  const handleSelectRecommendation = (rec: AIKeywordResearch) => {
    setSelectedRecommendation(rec);
    setConfig(prev => ({
      ...prev,
      targetKeyword: rec.keyword,
      title: rec.suggestedTitle
    }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      console.log("Calling generateArticleAction (Server Action)...");
      const content = await generateArticleAction(config);
      setGeneratedContent(content);
    } catch (err: any) {
      console.error("Generation failed in hook:", err);
      setError(err.message || "Generation failed. Please check your connection or API keys.");
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    topic, setTopic,
    isResearching,
    recommendations,
    handleResearch,
    selectedRecommendation,
    handleSelectRecommendation,
    config, setConfig,
    isGenerating,
    generatedContent,
    handleGenerate,
    error
  };
};
