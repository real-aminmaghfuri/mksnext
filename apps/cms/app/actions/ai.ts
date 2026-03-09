
"use server";

import { Repository, AIKeywordResearch, AIGenerationConfig } from 'data';

export async function researchKeywordsAction(topic: string): Promise<AIKeywordResearch[]> {
  try {
    console.log(`[SERVER ACTION] Researching keywords for: ${topic}`);
    const results = await Repository.researchKeywords(topic);
    return results;
  } catch (error: any) {
    console.error("[SERVER ACTION] Research failed:", error);
    throw new Error(error.message || "Failed to research keywords on server");
  }
}

export async function generateArticleAction(config: AIGenerationConfig): Promise<string> {
  try {
    console.log(`[SERVER ACTION] Generating article for: ${config.title}`);
    const content = await Repository.generateArticle(config);
    return content;
  } catch (error: any) {
    console.error("[SERVER ACTION] Generation failed:", error);
    throw new Error(error.message || "Failed to generate article on server");
  }
}
