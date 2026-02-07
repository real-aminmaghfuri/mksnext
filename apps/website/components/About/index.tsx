"use client";

import React from 'react';
import { useAboutData } from './useAboutData';
import { AboutHeader } from './Sections/AboutHeader';
import { FounderSection } from './Sections/FounderSection';
import { TurningPointSection } from './Sections/TurningPointSection';
import { TimelineSection } from './Sections/TimelineSection';
import { LegalitySection } from './Sections/LegalitySection';

export const About: React.FC = () => {
  const { text, quote, turningPoint, timeline, legality } = useAboutData();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500 pb-24 overflow-x-hidden">
      <AboutHeader 
        heading={text.aboutHeading} 
        tagline={text.aboutTagline} 
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FounderSection quote={quote} />
        <TurningPointSection content={turningPoint} />
        <TimelineSection items={timeline} />
        <div className="h-32" /> {/* Spacer between timeline and legality */}
        <LegalitySection content={legality} />
      </div>
    </section>
  );
};