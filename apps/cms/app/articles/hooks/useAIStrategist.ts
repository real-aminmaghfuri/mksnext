
import { useState } from 'react';
import { Repository, AIKeywordResearch, AIGenerationConfig } from 'data';

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
      console.log("Calling Repository.researchKeywords...");
      const results = await Repository.researchKeywords(topic);
      console.log("Research results received:", results);
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
    try {
      const content = await Repository.generateArticle(config);
      setGeneratedContent(content);
    } catch (error) {
      console.error("Generation failed", error);
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
