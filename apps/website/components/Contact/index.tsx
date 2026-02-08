
"use client";

import React from 'react';
import { useContact } from './useContact';
import { ContactHeaderAtom } from './atoms/ContactHeaderAtom';
import { ContactInfoAtom } from './atoms/ContactInfoAtom';
import { ContactFormAtom } from './atoms/ContactFormAtom';

export const Contact: React.FC = () => {
  const content = useContact();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500 pb-24">
      <ContactHeaderAtom 
        heading={content.heading}
        sub={content.sub}
      />
      
      <div className="container mx-auto px-6 -mt-10 relative z-10">
        <ContactInfoAtom items={content.infoItems} />
        <ContactFormAtom data={content.form} />
      </div>
    </section>
  );
};
