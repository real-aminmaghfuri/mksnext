import React from 'react';
import { useConfig, Button } from 'ui';
import { Moon, Sun, Languages, ExternalLink } from 'lucide-react';
import { Language, WebsitePage, DICTIONARY } from 'shared';

interface NavbarProps {
  activePage: WebsitePage;
  onNavigate: (page: WebsitePage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const { theme, toggleTheme, language, setLanguage } = useConfig();
  const isDark = theme === 'dark';
  const text = DICTIONARY[language];

  const toggleLang = () => {
    setLanguage(language === Language.ID ? Language.EN : Language.ID);
  };

  const navLinkClass = (page: WebsitePage) => 
    `text-sm font-semibold transition-colors hover:text-brand-500 ${
      activePage === page 
        ? 'text-brand-600 dark:text-brand-500' 
        : 'text-zinc-600 dark:text-zinc-400'
    }`;

  // In production, this would be an ENV variable
  const SYSTEM_URL = "http://localhost:3001";

  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-3 md:py-4 transition-all duration-300 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => onNavigate(WebsitePage.HOME)}
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-brand-500 to-red-600 rounded-lg group-hover:scale-110 transition-transform duration-300" />
          <span className="font-extrabold text-xl tracking-tighter text-zinc-900 dark:text-white">
            MKS<span className="text-brand-500">.SOLO</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => onNavigate(WebsitePage.HOME)} className={navLinkClass(WebsitePage.HOME)}>
            {text.navHome}
          </button>
          <button onClick={() => onNavigate(WebsitePage.SERVICES)} className={navLinkClass(WebsitePage.SERVICES)}>
            {text.navServices}
          </button>
           <button onClick={() => onNavigate(WebsitePage.SHOP)} className={navLinkClass(WebsitePage.SHOP)}>
            {text.navShop}
          </button>
          <button onClick={() => onNavigate(WebsitePage.ABOUT)} className={navLinkClass(WebsitePage.ABOUT)}>
            {text.navAbout}
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={toggleLang}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 flex items-center gap-1 font-mono text-xs"
          >
            <Languages size={20} />
            {language}
          </button>

          <a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Button size="sm" variant="outline">
              System Login <ExternalLink size={14} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};