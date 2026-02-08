
"use client";
import React from 'react';
import { JobRole } from '../types';
import { AlertCircle } from 'lucide-react';
import { Button } from 'ui';

interface OpenRolesProps {
  title: string;
  emptyText: string;
  roles: JobRole[];
  applyText: string;
}

export const OpenRolesAtom: React.FC<OpenRolesProps> = ({ title, emptyText, roles, applyText }) => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-12 text-center">
          {title}
        </h2>

        {roles.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl text-center bg-zinc-50 dark:bg-zinc-900/50">
            <AlertCircle size={48} className="text-zinc-300 dark:text-zinc-700 mb-4" />
            <p className="text-xl font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-wide">
              {emptyText}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
             {roles.map((role) => (
                <div key={role.id} className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 group hover:border-brand-500 transition-colors">
                   <div>
                      <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase">{role.title}</h3>
                      <div className="flex gap-4 mt-2 text-sm font-bold text-zinc-500">
                         <span>{role.type}</span>
                         <span>•</span>
                         <span>{role.location}</span>
                      </div>
                   </div>
                   <Button>{applyText}</Button>
                </div>
             ))}
          </div>
        )}
      </div>
    </div>
  );
};
