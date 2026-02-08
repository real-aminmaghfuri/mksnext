
"use client";

import React from 'react';
import { useVision } from './useVision';
import { VisionHeaderAtom } from './atoms/VisionHeaderAtom';
import { MissionGridAtom } from './atoms/MissionGridAtom';
import { DnaGridAtom } from './atoms/DnaGridAtom';
import { ManifestoAtom } from './atoms/ManifestoAtom';

export const Vision: React.FC = () => {
  const content = useVision();

  return (
    <section className="min-h-screen bg-black text-white transition-colors duration-500">
      <VisionHeaderAtom 
        heading={content.heading}
        sub={content.sub}
        visionTitle={content.visionTitle}
        statement={content.statement}
      />
      
      <MissionGridAtom 
        title={content.missionTitle}
        subtitle={content.missionSub}
        items={content.missionItems}
      />

      <DnaGridAtom 
        title={content.dnaTitle}
        subtitle={content.dnaSub}
        items={content.dnaItems}
      />

      <ManifestoAtom 
        title={content.manifesto.title}
        text={content.manifesto.text}
        footer={content.manifesto.footer}
      />
    </section>
  );
};
