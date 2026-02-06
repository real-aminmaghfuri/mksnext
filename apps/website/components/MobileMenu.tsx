import React from 'react';
import { useConfig, GlassCard } from 'ui';
import { DICTIONARY, Language } from 'shared';
import { X, Moon, Sun, Languages, Globe, LogIn } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { theme, toggleTheme, language, setLanguage } = useConfig();
  const text = DICTIONARY[language];
  const isDark = theme === 'dark';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center md:hidden">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full bg-white dark:bg-zinc-950 rounded-t-3xl p-6 shadow-2xl animate-fade-in-up border-t border-zinc-200 dark:border-zinc-800 max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
            {text.navMenu}
          </h3>
          <button onClick={onClose} className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-500">
            <X size={20} />
          </button>
        </div>

        <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer">
            <button 
            className="w-full flex items-center justify-between p-4 mb-6 rounded-xl bg-gradient-to-r from-zinc-800 to-black text-white shadow-lg active:scale-95 transition-transform"
            >
            <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                    <LogIn size={20} />
                </div>
                <div className="text-left">
                <p className="font-bold text-sm">System Login</p>
                <p className="text-[10px] text-zinc-400">Access ERP Dashboard</p>
                </div>
            </div>
            <div className="text-xs font-bold bg-white/20 px-2 py-1 rounded">SECURE</div>
            </button>
        </a>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <GlassCard 
            variant="solid" 
            className="p-4 flex flex-col items-center justify-center gap-3 cursor-pointer active:scale-95"
            onClick={toggleTheme}
          >
            <div className={`p-3 rounded-full ${isDark ? 'bg-zinc-800 text-yellow-400' : 'bg-orange-100 text-orange-600'}`}>
              {isDark ? <Moon size={24} /> : <Sun size={24} />}
            </div>
            <span className="font-bold text-sm text-zinc-700 dark:text-zinc-300">
              {isDark ? 'Dark Mode' : 'Light Mode'}
            </span>
          </GlassCard>

          <GlassCard 
            variant="solid" 
            className="p-4 flex flex-col items-center justify-center gap-3 cursor-pointer active:scale-95"
            onClick={() => setLanguage(language === Language.ID ? Language.EN : Language.ID)}
          >
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <Languages size={24} />
            </div>
            <span className="font-bold text-sm text-zinc-700 dark:text-zinc-300">
              {language === Language.ID ? 'Bahasa IND' : 'English US'}
            </span>
          </GlassCard>
        </div>

        <div className="space-y-4">
           <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50">
             <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500">
                <Globe size={20} />
             </div>
             <div>
               <p className="text-xs font-bold text-zinc-500 uppercase">Website Version</p>
               <p className="font-bold text-zinc-900 dark:text-white">v2.0.4 (Stable)</p>
             </div>
           </div>
        </div>

        <div className="mt-8 text-center text-xs text-zinc-400">
           &copy; 2024 PT Mesin Kasir Solo
        </div>
      </div>
    </div>
  );
};