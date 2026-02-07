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
        <linearGradient id="laserFade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={accentStroke} stopOpacity="1" />
          <stop offset="100%" stopColor={accentStroke} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* 1. THE CABLE SHIELD (Kabel membentuk Perisai) */}
      {/* Starts from handle bottom (45, 75), loops down to shield tip (50, 95), then up to form shield body */}
      <path 
        d="M 45 75 
           C 45 85, 50 95, 50 95 
           C 50 95, 88 80, 88 35 
           C 88 15, 65 10, 50 10 
           C 35 10, 12 15, 12 35 
           C 12 60, 35 70, 38 72" 
        stroke={accentStroke}
        strokeWidth="2.5"
      />

      {/* 2. THE SCANNER (Short Snout, Long Handle) */}
      <g transform="translate(-2, 0)">
        {/* Main Body Outline */}
        <path 
          d="M40 75 L40 40 L35 40 L35 28 L62 28 L62 42 L48 42 L48 75 Z" 
          className={mainStroke}
          strokeWidth="3"
        />
        
        {/* Trigger Detail */}
        <path d="M48 48 L52 52" className={mainStroke} strokeWidth="2" />
        
        {/* Grip Details (Lines on handle) */}
        <path d="M43 65 L45 65" className={mainStroke} strokeWidth="2" opacity="0.5" />
        <path d="M43 60 L45 60" className={mainStroke} strokeWidth="2" opacity="0.5" />
      </g>

      {/* 3. CONNECTION NODE (Cable meets Handle) */}
      <circle cx="45" cy="75" r="2.5" fill={accentStroke} stroke="none" />

      {/* 4. THE LASER BEAM (Scanning the Shield Wall) */}
      {/* Shooting from the short snout (60, 35) to the shield wall (88, 35) */}
      <path d="M62 35 L85 35" stroke="url(#laserFade)" strokeWidth="3" strokeDasharray="3 1" />
      
      {/* 5. IMPACT DATA (Barcode effect on the shield wire) */}
      <path d="M83 28 L83 42" stroke={accentStroke} strokeWidth="2" opacity="0.8" />
      <path d="M87 30 L87 40" stroke={accentStroke} strokeWidth="1.5" opacity="0.6" />

    </svg>
  );
};
