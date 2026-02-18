
"use client";
import React from 'react';
import { PortfolioItem } from 'shared';
import { Button } from 'ui';
import { MessageCircle, CheckCircle2, Calendar, FileText, Cpu, Layers } from 'lucide-react';

interface InfoProps {
  item: PortfolioItem;
  waLink: string;
}

export const PortfolioInfoAtom: React.FC<InfoProps> = ({ item, waLink }) => {
  const isDigital = item.category === 'DIGITAL';

  // Simulasi Scope of Work
  const scopeOfWork = isDigital 
    ? ['UI/UX Design Strategy', 'Full Stack Development', 'SEO Optimization', 'Server Deployment']
    : ['Hardware Installation', 'Network Cabling', 'Staff Training', 'System Calibration'];

  // Simulasi Tech Specs
  const techSpecs = isDigital
    ? ['Next.js Framework', 'TypeScript', 'Tailwind CSS', 'Supabase DB', 'Vercel Cloud']
    : ['Android POS Terminal', 'Thermal Printer 80mm', 'Laser Scanner 2D', 'Cash Drawer RJ11', 'Local Server'];

  return (
    <div className="p-8 lg:p-12 space-y-10">
       
       {/* Header */}
       <div>
          <span className="text-brand-600 dark:text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-3 block">
             PROJECT {item.id < 10 ? `00${item.id}` : `0${item.id}`}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
             {item.title}
          </h1>
          <div className="flex items-center gap-4 text-xs font-bold text-zinc-500 border-y border-zinc-100 dark:border-zinc-800 py-4">
             <span className="flex items-center gap-2"><Calendar size={14} /> 2024 FINISHED</span>
             <span className="w-1 h-1 bg-zinc-300 rounded-full" />
             <span className="uppercase text-brand-600">{item.tag}</span>
          </div>
       </div>

       {/* Description */}
       <article className="prose dark:prose-invert">
          <h3 className="text-sm font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">Mission Brief</h3>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base font-medium">
             {item.desc}
          </p>
       </article>

       {/* Scope of Work Box */}
       <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 className="flex items-center gap-2 text-xs font-black text-brand-600 uppercase tracking-widest mb-4">
             <FileText size={14} /> SCOPE OF WORK
          </h3>
          <ul className="space-y-3">
             {scopeOfWork.map((scope, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300 font-bold">
                   <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                   {scope}
                </li>
             ))}
          </ul>
       </div>

       {/* Tech Specs Section */}
       <div>
          <h3 className="flex items-center gap-2 text-xs font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
             <Cpu size={14} className="text-brand-600" /> {isDigital ? 'TECH STACK' : 'HARDWARE SPECS'}
          </h3>
          <div className="flex flex-wrap gap-2">
             {techSpecs.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black shadow-sm text-xs font-bold text-zinc-600 dark:text-zinc-400">
                   <Layers size={12} className="text-zinc-400" />
                   {tech}
                </div>
             ))}
          </div>
       </div>

       {/* Actions */}
       <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 sticky bottom-0 bg-white dark:bg-black pb-6 -mb-6 z-10">
          <a href={waLink} target="_blank" rel="noopener noreferrer">
             <Button fullWidth className="h-14 bg-gradient-to-r from-brand-600 to-red-600 hover:to-red-500 font-black uppercase tracking-widest text-sm rounded-xl shadow-xl shadow-brand-500/20 border-0">
                <MessageCircle size={20} className="mr-2" /> KONSULTASI PROJECT
             </Button>
          </a>
       </div>

    </div>
  );
};
