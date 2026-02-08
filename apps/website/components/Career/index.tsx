
"use client";

import React from 'react';
import { useCareer } from './useCareer';
import { CareerHeaderAtom } from './atoms/CareerHeaderAtom';
import { PerksGridAtom } from './atoms/PerksGridAtom';
import { OpenRolesAtom } from './atoms/OpenRolesAtom';

export const Career: React.FC = () => {
  const content = useCareer();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500">
      <CareerHeaderAtom 
        heading={content.heading}
        sub={content.sub}
      />
      
      <PerksGridAtom 
        items={content.perks} 
      />

      <OpenRolesAtom 
        title={content.roleTitle}
        emptyText={content.roleEmpty}
        roles={content.roles}
        applyText={content.applyBtn}
      />
    </section>
  );
};
