"use client";
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  color?: 'brand' | 'white' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "w-10 h-10", 
  variant = 'icon',
  color = 'brand'
}) => {
  // Logic: "The Shield" requires high contrast.
  // If brand mode: Shield is Dark, Scanner is White, Laser is Orange/Red.
  
  const shieldClass = color === 'brand' ? 'fill-zinc-900 dark:fill-white' : 
                      color === 'white' ? 'fill-white' : 'fill-zinc-900';
                      
  const scannerClass = color === 'brand' ? 'fill-white dark:fill-zinc-900' : 
                       color === 'white' ? 'fill-zinc-900' : 'fill-white';

  const accentClass = color === 'brand' ? 'fill-brand-500' : 
                      color === 'white' ? 'fill-brand-600' : 'fill-brand-500';

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="shieldClip">
           <path d="M50 95 L15 80 L15 15 L85 15 L85 80 Z" />
        </clipPath>
      </defs>

      {/* 1. THE SHIELD CONTAINER (Tactical Hexagon/Shield Hybrid) */}
      <path 
        d="M50 95 L15 80 L15 15 L85 15 L85 80 Z" 
        className={shieldClass}
      />

      {/* 2. THE SCANNER (Silhouette inside the shield) */}
      <g transform="translate(24, 28) scale(0.55)">
         {/* Handle */}
         <path 
           d="M25 55 L35 55 L40 85 L20 85 Z" 
           className={scannerClass} 
         />
         {/* Head/Body */}
         <path 
           d="M15 25 L75 25 L80 35 L75 55 L25 55 L10 45 Z" 
           className={scannerClass} 
         />
         {/* Trigger Detail */}
         <path d="M35 55 L40 65" stroke={color === 'brand' ? '#f97316' : 'currentColor'} strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* 3. THE BEAM & BARCODE REFLECTION */}
      {/* The laser hits the inner right wall of the shield and turns into data bars */}
      <g>
        {/* The Beam Line */}
        <path 
          d="M 65 47 L 82 47" 
          stroke={color === 'brand' ? '#f97316' : '#ea580c'} 
          strokeWidth="3" 
          strokeDasharray="4 2"
        />
        
        {/* The Barcode Wall (Integrated into the shield edge) */}
        <rect x="85" y="30" width="3" height="35" className={accentClass} />
        <rect x="80" y="35" width="2" height="25" className={accentClass} opacity="0.7" />
        <rect x="76" y="40" width="1.5" height="15" className={accentClass} opacity="0.5" />
      </g>
      
      {/* 4. Gloss/Reflection Effect on Shield (Luxury touch) */}
      <path 
        d="M15 15 L50 15 L15 50 Z" 
        fill="white" 
        opacity="0.1" 
        style={{ mixBlendMode: 'overlay' }} 
      />
    </svg>
  );
};
