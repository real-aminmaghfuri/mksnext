
"use client";

import React from 'react';
import { CompanyIdentity } from 'shared';
import { useContact } from './useContact';
import { ContactHeaderAtom } from './atoms/ContactHeaderAtom';
import { ContactQnaAtom } from './atoms/ContactQnaAtom';
import { ContactFormLayoutAtom } from './atoms/ContactFormLayoutAtom';
import { ContactMapsAtom } from './atoms/ContactMapsAtom';

interface ContactProps {
  identity: CompanyIdentity;
}

export const Contact: React.FC<ContactProps> = ({ identity }) => {
  const content = useContact(identity);

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500 pb-0">
      <ContactHeaderAtom 
        heading={content.heading}
        sub={content.sub}
      />
      
      <ContactFormLayoutAtom 
        info={content.info} 
        form={content.form} 
      />

      <ContactMapsAtom data={content.maps} />

      <ContactQnaAtom 
        items={content.qna.items} 
        title={content.qna.title}
      />
    </section>
  );
};
