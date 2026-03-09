
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

  const handleResearch = async () => {
    if (!topic) return;
    setIsResearching(true);
    try {
      const results = await Repository.researchKeywords(topic);
      setRecommendations(results);
    } catch (error) {
      console.error("Research failed", error);
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
    handleGenerate
  };
};
