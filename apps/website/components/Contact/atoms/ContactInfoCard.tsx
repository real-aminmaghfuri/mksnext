
"use client";
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactInfoData } from '../types';

interface ContactInfoCardProps {
  info: ContactInfoData;
}

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ info }) => {
  return (
    <div className="lg:col-span-4 bg-white dark:bg-zinc-900 p-8 rounded-[32px] border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-none h-full">
        {/* Card Title */}
        <h3 className="text-3xl font-black text-zinc-900 dark:text-white mb-6">
            {info.infoTitle}
        </h3>
        
        {/* Separator */}
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-full mb-8" />

        <div className="space-y-10">
            {/* Legal Office */}
            <div>
                <div className="flex items-center gap-2 text-zinc-500 mb-2">
                    <MapPin size={16} />
                    <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">{info.officeLegal}</span>
                </div>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {info.officeLegalAddress}
                </p>
            </div>

              {/* Ops Office */}
              <div>
                <div className="flex items-center gap-2 text-zinc-500 mb-2">
                    <MapPin size={16} />
                    <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">{info.officeOps}</span>
                </div>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {info.officeOpsAddress}
                </p>
            </div>

            <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-full" />

            {/* Contact Details */}
            <div className="space-y-8">
                <div>
                    <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">{info.labelWa}</p>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                      <Phone size={18} className="text-zinc-500" /> {info.dynamicWa}
                    </p>
                </div>
                <div>
                    <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">{info.labelEmail}</p>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                      <Mail size={18} className="text-zinc-500" /> {info.dynamicEmail}
                    </p>
                </div>
                <div>
                    <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2">{info.labelHours}</p>
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-zinc-500 mt-0.5" /> 
                      <div className="flex flex-col">
                          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 whitespace-pre-line">
                            {info.dynamicHours}
                          </span>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
