
"use client";

import React from 'react';
import { useFooter } from './Footer/useFooter';
import { FooterBrandAtom } from './Footer/atoms/FooterBrandAtom';
import { FooterLinksAtom } from './Footer/atoms/FooterLinksAtom';
import { FooterContactAtom } from './Footer/atoms/FooterContactAtom';
import { FooterCopyrightAtom } from './Footer/atoms/FooterCopyrightAtom';

export const Footer: React.FC = () => {
  const content = useFooter();

  return (
    /* 
       LOGIC UPDATE:
       - `hidden`: Hidden by default (Mobile Portrait & Landscape).
       - `md:block`: Visible only on Desktop/Tablet (min-width: 768px).
       - Removed `pb-24` because mobile padding is no longer needed.
    */
    <footer className="hidden md:block bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800 pt-20 pb-10">
      <div className="w-full px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Particle: Brand Identity */}
          <FooterBrandAtom description={content.description} />

          {/* Particle: Navigation Links (The Arsenal) */}
          <FooterLinksAtom 
            title={content.col1Title} 
            links={content.col1Links} 
          />

          {/* Particle: Contact Info (Command HQ) */}
          <FooterContactAtom 
            title={content.col2Title} 
            items={content.contactItems} 
          />
        </div>
        
        {/* Particle: Legal & Copyright */}
        <FooterCopyrightAtom 
          copyright={content.copyright} 
          legalLinks={content.legalLinks} 
        />
      </div>
    </footer>
  );
};
