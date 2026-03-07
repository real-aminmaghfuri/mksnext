import React from 'react';

interface NavContainerAtomProps {
  children: React.ReactNode;
}

/**
 * NavContainerAtom - The main responsive container for the mobile navigation bar.
 * Handles Portrait (Bottom) and Landscape (Right) layouts.
 */
export const NavContainerAtom: React.FC<NavContainerAtomProps> = ({ children }) => {
  return (
    <nav className="
      fixed z-[100] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-zinc-200 dark:border-zinc-800 transition-all duration-300 shadow-2xl
      
      /* PORTRAIT STYLES (Mobile Default) */
      bottom-0 left-0 w-full h-[72px] border-t pb-safe
      
      /* BREAKPOINT: Hide strictly on XL (1280px+) */
      xl:hidden xl:landscape:hidden
      
      /* LANDSCAPE STYLES (Right Sidebar for Mobile/Tablet Landscape) */
      landscape:top-0 landscape:right-0 landscape:left-auto landscape:bottom-auto 
      landscape:w-[80px] landscape:h-full landscape:border-l landscape:border-t-0 
      landscape:flex landscape:flex-col landscape:justify-center
      
      /* Constraint: No Scroll on Nav Bar */
      landscape:overflow-hidden
    ">
      {children}
    </nav>
  );
};
