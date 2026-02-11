
"use client";

import React from 'react';
import { useWebApp } from './useWebApp';
import { WebAppHeroAtom } from './atoms/WebAppHeroAtom';
import { WebAppProblemAtom } from './atoms/WebAppProblemAtom';
import { WebAppStackAtom } from './atoms/WebAppStackAtom';
import { WebAppFlowAtom } from './atoms/WebAppFlowAtom';
import { WebAppCtaAtom } from './atoms/WebAppCtaAtom';

export const WebAppService: React.FC = () => {
  const content = useWebApp();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500">
      <WebAppHeroAtom content={content.hero} />
      <WebAppProblemAtom content={content.problems} />
      <WebAppStackAtom content={content.stack} />
      <WebAppFlowAtom content={content.process} />
      <WebAppCtaAtom content={content.cta} />
    </section>
  );
};
