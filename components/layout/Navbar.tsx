import React from 'react';
import { useConfig } from '../../contexts/ConfigContext';
import { Button } from '../../packages/ui/Button';
import { Moon, Sun, Languages } from 'lucide-react';
import { Language, WebsitePage } from '../../types';
import { DICTIONARY } from '../../constants';

interface NavbarProps {
  onEnterSystem: () => void;
  activePage: WebsitePage;
  onNavigate: (page: WebsitePage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnterSystem, activePage, onNavigate }) => {
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

  return (
    // Removed 'hidden md:block' to make it visible on mobile
    // Adjusted padding: px-4 py-3 for mobile, px-6 py-4 for desktop
    <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-3 md:py-4 transition-all duration-300 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => onNavigate(WebsitePage.HOME)}
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-brand-500 to-red-600 rounded-lg group-hover:scale-110 transition-transform duration-300" />
          <span className="font-extrabold text-xl tracking-tighter text-zinc-900 dark:text-white">
            MKS<span className="text-brand-500">.SOLO</span>
          </span>
        </div>

        {/* Desktop Nav Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onNavigate(WebsitePage.HOME)} 
            className={navLinkClass(WebsitePage.HOME)}
          >
            {text.navHome}
          </button>
          <button 
            onClick={() => onNavigate(WebsitePage.SERVICES)} 
            className={navLinkClass(WebsitePage.SERVICES)}
          >
            {text.navServices}
          </button>
           <button 
            onClick={() => onNavigate(WebsitePage.SHOP)} 
            className={navLinkClass(WebsitePage.SHOP)}
          >
            {text.navShop}
          </button>
          <button 
            onClick={() => onNavigate(WebsitePage.ABOUT)} 
            className={navLinkClass(WebsitePage.ABOUT)}
          >
            {text.navAbout}
          </button>
        </div>

        {/* Right Actions */}
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

          {/* System Login - Hidden on Mobile (handled by bottom nav) */}
          <Button size="sm" variant="outline" onClick={onEnterSystem} className="hidden md:flex">
            System Login
          </Button>
        </div>
      </div>
    </nav>
  );
};