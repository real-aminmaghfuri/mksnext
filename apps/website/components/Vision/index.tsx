
"use client";

import React from 'react';
import { useVision } from './useVision';
import { VisionHeaderAtom } from './atoms/VisionHeaderAtom';
import { MissionGridAtom } from './atoms/MissionGridAtom';
import { ManifestoAtom } from './atoms/ManifestoAtom';

export const Vision: React.FC = () => {
  const content = useVision();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500">
      <VisionHeaderAtom 
        heading={content.heading}
        sub={content.sub}
        statement={content.statement}
      />
      
      <MissionGridAtom 
        title={content.missionTitle}
        items={content.missionItems}
      />

      <ManifestoAtom 
        title={content.manifesto.title}
        text={content.manifesto.text}
      />
    </section>
  );
};
