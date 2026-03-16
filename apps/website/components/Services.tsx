
"use client";

import React from 'react';
import { useServices } from './LandingServices/useServices';
import { ServicesHeaderAtom } from './LandingServices/atoms/ServicesHeaderAtom';
import { ServiceCardAtom } from './LandingServices/atoms/ServiceCardAtom';

export const Services: React.FC = () => {
  const content = useServices();

  return (
    <section className="py-fluid-padding relative z-10 bg-white dark:bg-luxury-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-fluid-padding">
        
        {/* Particle: Section Header */}
        <ServicesHeaderAtom 
          title={content.title} 
          subtitle={content.subtitle} 
        />

        {/* Particle: Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-fluid-gap">
          {content.items.map((item, idx) => (
            <ServiceCardAtom key={idx} item={item} />
          ))}
        </div>
        
      </div>
    </section>
  );
};
