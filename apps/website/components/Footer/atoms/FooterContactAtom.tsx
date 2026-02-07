
"use client";
import React from 'react';
import { ContactItem } from '../types';

interface FooterContactAtomProps {
  title: string;
  items: ContactItem[];
}

export const FooterContactAtom: React.FC<FooterContactAtomProps> = ({ title, items }) => {
  return (
    <div>
      <h4 className="font-bold text-zinc-900 dark:text-white mb-6 uppercase tracking-tight">{title}</h4>
      <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <li key={idx} className="flex items-start gap-3">
              <Icon className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
