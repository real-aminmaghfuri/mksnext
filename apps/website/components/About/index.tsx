
"use client";

import React from 'react';
import { CompanyIdentity } from 'shared';
import { useAboutData } from './useAboutData';
import { AboutHeader } from './Sections/AboutHeader';
import { FounderSection } from './Sections/FounderSection';
import { TurningPointSection } from './Sections/TurningPointSection';
import { TimelineSection } from './Sections/TimelineSection';
import { LegalitySection } from './Sections/LegalitySection';

interface AboutProps {
  identity: CompanyIdentity;
}

export const About: React.FC<AboutProps> = ({ identity }) => {
  const { text, founderData, turningPoint, timeline, legality } = useAboutData(identity);

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500 pb-24 overflow-x-hidden">
      <AboutHeader 
        heading={text.aboutHeading} 
        tagline={text.aboutTagline} 
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FounderSection 
            quote={founderData.quote} 
            photo={founderData.photo}
            name={founderData.name}
            role={founderData.role}
        />
        <TurningPointSection content={turningPoint} />
        <TimelineSection items={timeline} />
        <div className="h-32" /> 
        <LegalitySection content={legality} />
      </div>
    </section>
  );
};
