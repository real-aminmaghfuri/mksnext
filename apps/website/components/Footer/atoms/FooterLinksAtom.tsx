
"use client";
import React from 'react';
import { LinkItem } from '../types';

interface FooterLinksAtomProps {
  title: string;
  links: LinkItem[];
}

export const FooterLinksAtom: React.FC<FooterLinksAtomProps> = ({ title, links }) => {
  return (
    <div>
      <h4 className="font-bold text-zinc-900 dark:text-white mb-6 uppercase tracking-tight">{title}</h4>
      <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.href} className="hover:text-brand-500 transition-colors duration-300 block">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
