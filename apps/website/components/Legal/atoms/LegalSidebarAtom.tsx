
"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, FileText } from 'lucide-react';
import { LEGAL_SIDEBAR_DATA } from 'shared';

interface LegalSidebarProps {
  data: typeof LEGAL_SIDEBAR_DATA;
}

export const LegalSidebarAtom: React.FC<LegalSidebarProps> = ({ data }) => {
  return (
    <aside className="sticky top-32">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-zinc-100 dark:border-zinc-800">
            <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/20 flex items-center justify-center text-brand-600 dark:text-brand-500">
                <ShieldCheck size={20} />
            </div>
            <div>
                <h4 className="text-xs font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">
                    LEGAL PROTOCOL
                </h4>
                <p className="text-sm font-bold text-zinc-900 dark:text-white leading-none">
                    Daftar Isi Hukum
                </p>
            </div>
        </div>

        {/* Navigation Groups */}
        <div className="space-y-8">
            {data.map((group, idx) => (
                <div key={idx}>
                    <h5 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 pl-2 border-l-2 border-brand-500 flex items-center gap-2">
                        {group.category}
                    </h5>
                    <div className="space-y-1">
                        {group.items.map((item, iIdx) => {
                            const Icon = item.icon;
                            return (
                                <Link 
                                    key={iIdx} 
                                    href={item.path}
                                    className="flex items-center justify-between group p-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="text-zinc-400 group-hover:text-brand-500 transition-colors">
                                            <Icon size={16} />
                                        </div>
                                        <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                                            {item.label}
                                        </span>
                                    </div>
                                    <ChevronRight size={12} className="text-zinc-300 group-hover:text-brand-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex gap-2 items-start">
                <FileText size={14} className="text-zinc-400 mt-0.5" />
                <p className="text-[10px] text-zinc-400 font-medium leading-relaxed italic">
                    Dokumen ini sah dan mengikat secara hukum sejak lo menggunakan layanan MKS.
                </p>
            </div>
        </div>

      </div>
    </aside>
  );
};
