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
  
  // Stroke Colors
  const mainStroke = color === 'brand' ? 'stroke-zinc-900 dark:stroke-white' : 
                     color === 'white' ? 'stroke-white' : 'stroke-zinc-900';
                     
  const accentStroke = color === 'brand' ? '#f97316' : // Orange-500
                       color === 'white' ? '#ffffff' : '#f97316';

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <linearGradient id="scanBeam" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color === 'brand' ? '#f97316' : 'currentColor'} stopOpacity="1" />
          <stop offset="100%" stopColor={color === 'brand' ? '#dc2626' : 'currentColor'} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* 1. THE SCANNER (Outline) */}
      <g transform="translate(0, -2)">
        <path 
          d="M38 68 L32 55 L32 45 L25 45 L30 35 L70 35 L75 45 L70 55 L48 55" 
          className={mainStroke}
          strokeWidth="3"
        />
        {/* Trigger */}
        <path d="M42 55 L45 60" className={mainStroke} strokeWidth="2.5" />
      </g>

      {/* 2. THE CABLE SHIELD (The wire creates the shield shape) */}
      {/* Starts from handle bottom (38, 68), loops down to form shield tip, then up around */}
      <path 
        d="M38 66 C 38 75, 45 90, 50 92 C 55 90, 85 75, 85 50 C 85 25, 65 15, 50 15 C 35 15, 15 25, 15 50 C 15 65, 25 75, 28 78" 
        stroke={accentStroke}
        strokeWidth="3"
        strokeDasharray="100 0" // Solid line feel
      />
      
      {/* 3. CONNECTION NODE (Where cable meets shield start) */}
      <circle cx="38" cy="66" r="2" fill={accentStroke} stroke="none" />

      {/* 4. THE DATA BEAM (Barcode Style output hitting the shield wire) */}
      <path d="M72 45 L82 45" stroke="url(#scanBeam)" strokeWidth="3" />
      <path d="M74 40 L84 40" stroke="url(#scanBeam)" strokeWidth="2" opacity="0.6" />
      <path d="M74 50 L80 50" stroke="url(#scanBeam)" strokeWidth="2" opacity="0.6" />

      {/* 5. Tech Accents (Decorations on the shield wire) */}
      <circle cx="50" cy="92" r="1.5" className={mainStroke} fill="none" strokeWidth="1" />
      <path d="M15 50 L15 45" stroke={accentStroke} strokeWidth="4" />
      <path d="M85 50 L85 55" stroke={accentStroke} strokeWidth="4" />

    </svg>
  );
};
