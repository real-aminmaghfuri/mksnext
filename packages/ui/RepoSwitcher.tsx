
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
  const repos: RepoItem[] = [
    {
      name: 'website',
      label: 'Website',
      icon: <Globe className="w-4 h-4" />,
      url: '/',
      color: 'bg-blue-500',
    },
    {
      name: 'cms',
      label: 'CMS',
      icon: <Settings className="w-4 h-4" />,
      url: '/cms', // Assuming path-based or subdomain-based in prod
      color: 'bg-orange-500',
    },
    {
      name: 'system',
      label: 'System',
      icon: <Layout className="w-4 h-4" />,
      url: '/system',
      color: 'bg-emerald-500',
    },
  ];

  return (
    <div className="flex items-center gap-2 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-inner">
      <div className="flex items-center px-2 py-1 gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 border-r border-zinc-200 dark:border-zinc-800 mr-1">
        <ArrowRightLeft className="w-3 h-3" />
        <span className="hidden sm:inline">Repos</span>
      </div>
      {repos.map((repo) => (
        <a
          key={repo.name}
          href={repo.url}
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
            "hover:scale-105 active:scale-95",
            "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 shadow-sm border border-zinc-200 dark:border-zinc-700",
            "hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-white"
          )}
          title={`Switch to ${repo.label}`}
        >
          <span className={cn("p-1 rounded-full text-white", repo.color)}>
            {repo.icon}
          </span>
          <span className="hidden md:inline">{repo.label}</span>
        </a>
      ))}
    </div>
  );
};
