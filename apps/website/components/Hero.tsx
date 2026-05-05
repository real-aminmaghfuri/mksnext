
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 w-full">
      
      {/* Particle: Background & Atmosphere */}
      <HeroBackgroundAtom />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="text-center space-y-10 w-full">
            
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

            {/* Social Proof: Trusted By */}
            <div className="pt-16 animate-fade-in-up [animation-delay:600ms]">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-8">
                TRUSTED BY INDUSTRY LEADERS
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500">
                {['MKS', 'GTI', 'ERP', 'BOS', 'CRM'].map((brand) => (
                  <div key={brand} className="text-xl font-black tracking-tighter text-zinc-400 dark:text-zinc-600">
                    {brand} <span className="text-brand-500">SYSTEM</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
