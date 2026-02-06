import React, { useState } from 'react';
import { ConfigProvider } from './contexts/ConfigContext';
import { DataProvider } from './contexts/DataContext';
import { Hero } from './apps/website/components/Hero';
import { About } from './apps/website/components/About';
import { Services } from './apps/website/components/Services';
import { Shop } from './apps/website/components/Shop';
import { Footer } from './apps/website/components/Footer';
import { DashboardLayout } from './apps/system/DashboardLayout';
import { Navbar } from './components/layout/Navbar';
import { WebsiteMobileNav } from './apps/website/components/MobileNav';
import { AppMode, WebsitePage } from './types';

// App Shell that handles switching between Website (Public) and System (Private)
const AppShell: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.WEBSITE);
  const [websitePage, setWebsitePage] = useState<WebsitePage>(WebsitePage.HOME);

  // Helper to scroll to top on nav
  const navigateWebsite = (page: WebsitePage) => {
    setWebsitePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (mode === AppMode.SYSTEM) {
    return (
      <div className="fade-in">
        <DashboardLayout />
        <div className="fixed bottom-20 md:bottom-4 right-4 z-[60]">
           <button 
            onClick={() => setMode(AppMode.WEBSITE)}
            className="text-xs text-zinc-500 hover:text-brand-500 underline bg-black/50 px-2 py-1 rounded backdrop-blur"
           >
             Return to Website
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-luxury-dark transition-colors duration-500 pb-20 md:pb-0">
      <Navbar 
        onEnterSystem={() => setMode(AppMode.SYSTEM)} 
        activePage={websitePage}
        onNavigate={navigateWebsite}
      />
      <main>
        {websitePage === WebsitePage.HOME && (
          <>
            <Hero />
            <Services />
          </>
        )}
        
        {websitePage === WebsitePage.ABOUT && (
          <div className="pt-20">
             <About />
          </div>
        )}

        {websitePage === WebsitePage.SERVICES && (
          <div className="pt-20">
             <Services />
          </div>
        )}

        {websitePage === WebsitePage.SHOP && (
          <div className="pt-20">
             <Shop />
          </div>
        )}
      </main>
      <Footer />
      <WebsiteMobileNav 
        onLoginClick={() => setMode(AppMode.SYSTEM)} 
        activePage={websitePage}
        onNavigate={navigateWebsite}
      />
    </div>
  );
};

export default function App() {
  return (
    <ConfigProvider>
      <DataProvider>
        <AppShell />
      </DataProvider>
    </ConfigProvider>
  );
}