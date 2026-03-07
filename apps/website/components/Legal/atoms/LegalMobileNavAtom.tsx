
"use client";
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, List } from 'lucide-react';
import { LEGAL_SIDEBAR_DATA } from 'shared';

interface LegalMobileNavProps {
  data: typeof LEGAL_SIDEBAR_DATA;
}

export const LegalMobileNavAtom: React.FC<LegalMobileNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // Filter groups based on pathname (same logic as sidebar)
  const activeGroups = data.filter(group => {
    if (group.category === "DOKUMEN RESMI") return true;
    if (pathname === '/terms' && group.category === "PASAL SPESIFIK (TOS)") return true;
    if (pathname === '/privacy' && group.category === "PROTOKOL PRIVASI") return true;
    if (pathname === '/faq' && group.category === "INTEL BRIEF (FAQ)") return true;
    return false;
  });

  return (
    <div className="lg:hidden sticky top-20 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="flex items-center px-4 py-3 gap-3">
        <div className="bg-brand-500 p-1.5 rounded-lg text-white">
          <List size={16} />
        </div>
        <div 
          ref={scrollRef}
          className="flex-1 overflow-x-auto no-scrollbar flex items-center gap-2 scroll-smooth"
        >
          {activeGroups.map((group) => (
            <React.Fragment key={group.category}>
              {group.items.map((item, idx) => {
                const itemPath = item.path.split('#')[0];
                const itemHash = item.path.includes('#') ? '#' + item.path.split('#')[1] : '';
                const isActive = pathname === itemPath && currentHash === itemHash;

                return (
                  <Link
                    key={idx}
                    href={item.path}
                    onClick={() => setCurrentHash(itemHash)}
                    className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isActive 
                        ? 'bg-brand-500 border-brand-500 text-white shadow-md shadow-brand-500/20' 
                        : 'bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-500'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
