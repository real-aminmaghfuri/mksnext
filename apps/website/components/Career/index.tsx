
"use client";

import React from 'react';
import { useCareer } from './useCareer';
import { CareerHeaderAtom } from './atoms/CareerHeaderAtom';
import { CareerDnaAtom } from './atoms/CareerDnaAtom';
import { AntiPersonaAtom } from './atoms/AntiPersonaAtom';
import { OpenRolesAtom } from './atoms/OpenRolesAtom';

export const Career: React.FC = () => {
  const content = useCareer();

  return (
    <section className="min-h-screen bg-black text-white transition-colors duration-500">
      <CareerHeaderAtom 
        heading={content.heading}
        headingSpan={content.headingSpan}
        sub={content.sub}
      />
      
      <CareerDnaAtom 
        title={content.dnaTitle}
        subtitle={content.dnaSub}
        items={content.dnaItems} 
      />

      <AntiPersonaAtom 
        title={content.antiTitle}
        items={content.antiPersonas}
      />

      <OpenRolesAtom 
        roleTitle={content.roleTitle}
        roleSub={content.roleSub}
        forceHireTitle={content.forceHireTitle}
        forceHireDesc={content.forceHireDesc}
        forceHireBtn={content.forceHireBtn}
      />
    </section>
  );
};
