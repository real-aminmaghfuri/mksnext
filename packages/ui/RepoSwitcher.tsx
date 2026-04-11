
import React from 'react';
import { Layout, Settings, Globe, ArrowRightLeft } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface RepoItem {
  name: string;
  label: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

export const RepoSwitcher: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  const getRepoUrl = (name: string) => {
    const isProd = typeof window !== 'undefined' && !window.location.hostname.includes('localhost');
    
    if (isProd) {
      switch(name) {
        case 'website': return 'https://mkswebsite.vercel.app/';
        case 'cms': return 'https://mks-cms.vercel.app/';
        case 'system': return 'https://mksapp.vercel.app/';
        default: return '/';
      }
    }
    
    // Local development fallback
    switch(name) {
      case 'website': return 'http://localhost:3000';
      case 'cms': return 'http://localhost:3001';
      case 'system': return 'http://localhost:3002';
      default: return '/';
    }
  };

  const repos: RepoItem[] = [
    {
      name: 'website',
      label: 'Website',
      icon: <Globe className="w-4 h-4" />,
      url: getRepoUrl('website'),
      color: 'bg-blue-500',
    },
    {
      name: 'cms',
      label: 'CMS',
      icon: <Settings className="w-4 h-4" />,
      url: getRepoUrl('cms'),
      color: 'bg-orange-500',
    },
    {
      name: 'system',
      label: 'System',
      icon: <Layout className="w-4 h-4" />,
      url: getRepoUrl('system'),
      color: 'bg-emerald-500',
    },
  ];

  return (
    <div 
      className={cn(
        "flex items-center gap-2 p-1 bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-full border border-zinc-200 dark:border-zinc-800 shadow-lg transition-all duration-500 ease-in-out overflow-hidden",
        isExpanded ? "max-w-[500px] px-2" : "max-w-[44px] px-1"
      )}
    >
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
          isExpanded 
            ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white rotate-180" 
            : "bg-brand-500 text-white shadow-lg shadow-brand-500/20"
        )}
        title={isExpanded ? "Close Switcher" : "Switch Repos"}
      >
        <ArrowRightLeft className="w-4 h-4" />
      </button>

      {isExpanded && (
        <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
          <div className="w-px h-4 bg-zinc-200 dark:border-zinc-800 mx-1" />
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap",
                "hover:scale-105 active:scale-95",
                "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 shadow-sm border border-zinc-200 dark:border-zinc-700",
                "hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-white"
              )}
            >
              <span className={cn("p-1 rounded-full text-white", repo.color)}>
                {repo.icon}
              </span>
              <span>{repo.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
