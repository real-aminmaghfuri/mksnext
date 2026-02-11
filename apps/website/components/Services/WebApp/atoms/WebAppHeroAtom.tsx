
"use client";
import React from 'react';
import { Terminal, Code2 } from 'lucide-react';

interface WebAppHeroProps {
  content: {
    badge: string;
    title: string;
    titleSpan: string;
    sub: string;
  }
}

export const WebAppHeroAtom: React.FC<WebAppHeroProps> = ({ content }) => {
  return (
    <div className="pt-40 pb-24 relative overflow-hidden bg-black border-b border-zinc-900">
       {/* Cyber Grid Background */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1d4ed81a_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed81a_1px,transparent_1px)] bg-[size:40px_40px]" />
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
       
       <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-800 text-blue-400 text-xs font-black animate-fade-in-up mx-auto shadow-sm mb-8 uppercase tracking-widest">
             <Terminal size={14} />
             <span>{content.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.85]">
            {content.title} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">{content.titleSpan}</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-medium">
            {content.sub}
          </p>

          {/* Decorative Code Block */}
          <div className="mt-16 max-w-2xl mx-auto bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-xl p-4 text-left shadow-2xl">
             <div className="flex gap-2 mb-4 border-b border-zinc-800 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"/>
                <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                <div className="w-3 h-3 rounded-full bg-green-500"/>
             </div>
             <div className="font-mono text-xs md:text-sm text-zinc-300">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">businessGrowth</span> = <span className="text-purple-400">async</span> () ={">"} {'{'}</p>
                <p className="pl-4"><span className="text-purple-400">if</span> (system === <span className="text-green-400">'MKS_CUSTOM'</span>) {'{'}</p>
                <p className="pl-8"><span className="text-purple-400">await</span> revenue.scaleUp(<span className="text-orange-400">1000%</span>);</p>
                <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-green-400">'DOMINATION_MODE'</span>;</p>
                <p className="pl-4">{'}'}</p>
                <p>{'}'}</p>
             </div>
          </div>
       </div>
    </div>
  );
};
