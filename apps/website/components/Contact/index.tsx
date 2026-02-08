
"use client";

import React from 'react';
import { useContact } from './useContact';
import { ContactHeaderAtom } from './atoms/ContactHeaderAtom';
import { ContactQnaAtom } from './atoms/ContactQnaAtom';
import { ContactFormLayoutAtom } from './atoms/ContactFormLayoutAtom';
import { ContactMapsAtom } from './atoms/ContactMapsAtom';

export const Contact: React.FC = () => {
  const content = useContact();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500 pb-0">
      <ContactHeaderAtom 
        heading={content.heading}
        sub={content.sub}
      />
      
      {/* 1. QnA Section after Hero */}
      <ContactQnaAtom items={content.qna} />

      {/* 2. Main Form Layout (30/70) */}
      <ContactFormLayoutAtom 
        info={content.info} 
        form={content.form} 
      />

      {/* 3. Full Width Maps */}
      <ContactMapsAtom data={content.maps} />
    </section>
  );
};
