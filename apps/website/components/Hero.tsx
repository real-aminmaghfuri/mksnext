
"use client";

import React from 'react';
import { useHero } from './LandingHero/useHero';
import { HeroBackgroundAtom } from './LandingHero/atoms/HeroBackgroundAtom';
import { HeroBadgeAtom } from './LandingHero/atoms/HeroBadgeAtom';
import { HeroHeadingAtom } from './LandingHero/atoms/HeroHeadingAtom';
import { HeroActionsAtom } from './LandingHero/atoms/HeroActionsAtom';

export const Hero: React.FC = () => {
  const { content } = useHero();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Particle: Background & Atmosphere */}
      <HeroBackgroundAtom />

      <div className="max-w-7xl mx-auto px-6 md:px-10 landscape:pr-[max(100px,12vw)] relative z-10 w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            
            {/* Particle: Status Badge */}
            <HeroBadgeAtom text={content.badgeText} />
            
            {/* Particle: Typography */}
            <HeroHeadingAtom 
              brandName={content.brandName}
              title={content.title}
              subtitle={content.subtitle}
            />
            
            {/* Particle: Interactive Actions */}
            <HeroActionsAtom 
              primaryText={content.ctaPrimary}
              secondaryText={content.ctaSecondary}
            />

          </div>
        </div>
      </div>
    </section>
  );
};
