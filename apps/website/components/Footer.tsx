"use client";

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';

export const Footer: React.FC = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return (
    <footer className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800 pt-20 pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-tr from-brand-500 to-red-600 rounded-lg" />
              <span className="font-extrabold text-xl tracking-tighter text-zinc-900 dark:text-white">
                MKS<span className="text-brand-500">.SOLO</span>
              </span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mb-6">
              {text.footerDesc}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-6">{text.footerCol1}</h4>
            <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="#" className="hover:text-brand-500">{text.footerLink1}</a></li>
              <li><a href="#" className="hover:text-brand-500">{text.footerLink2}</a></li>
              <li><a href="#" className="hover:text-brand-500">{text.footerLink3}</a></li>
              <li><a href="#" className="hover:text-brand-500">{text.footerLink4}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-6">{text.footerCol2}</h4>
            <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                <span>Jl. Slamet Riyadi No. X, Surakarta, Jawa Tengah, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <span>+62 812-XXXX-XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <span>biz@mesinkasirsolo.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <p>{text.footerCopy}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>{text.footerLegal1}</span>
             <span>{text.footerLegal2}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};