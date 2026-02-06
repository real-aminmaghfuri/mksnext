"use client";

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Shop } from '../components/Shop';
import { Footer } from '../components/Footer';
import { WebsiteMobileNav } from '../components/MobileNav';
import { WebsitePage } from 'shared';

export default function Home() {
  const [activePage, setActivePage] = useState<WebsitePage>(WebsitePage.HOME);

  const navigateTo = (page: WebsitePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Navbar activePage={activePage} onNavigate={navigateTo} />
      
      {activePage === WebsitePage.HOME && (
        <>
          <Hero />
          <Services />
        </>
      )}
      
      {activePage === WebsitePage.ABOUT && (
        <div className="pt-20">
           <About />
        </div>
      )}

      {activePage === WebsitePage.SERVICES && (
        <div className="pt-20">
           <Services />
        </div>
      )}

      {activePage === WebsitePage.SHOP && (
        <div className="pt-20">
           <Shop />
        </div>
      )}

      <Footer />
      <WebsiteMobileNav activePage={activePage} onNavigate={navigateTo} />
    </main>
  );
}