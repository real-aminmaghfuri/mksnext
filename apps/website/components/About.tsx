"use client";

import React from 'react';
import { useAboutData } from './About/useAboutData';
import { AboutHeader } from './About/Sections/AboutHeader';
import { FounderSection } from './About/Sections/FounderSection';
import { PhilosophySection } from './About/Sections/PhilosophySection';
import { TimelineSection } from './About/Sections/TimelineSection';

// This is now purely an Orchestrator Component
// It holds NO UI logic, only structural composition
export const About: React.FC = () => {
  const { text, quote, timeline, philosophies } = useAboutData();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500 pb-24 overflow-x-hidden">
      {/* Atomic Part: Header */}
      <AboutHeader 
        heading={text.aboutHeading} 
        tagline={text.aboutTagline} 
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Atomic Part: Founder Section (Layout fixed) */}
        <FounderSection quote={quote} />
        
        {/* Atomic Part: Philosophy Grid */}
        <PhilosophySection items={philosophies} />
        
        {/* Atomic Part: Timeline */}
        <TimelineSection items={timeline} />
      </div>
    </section>
  );
};