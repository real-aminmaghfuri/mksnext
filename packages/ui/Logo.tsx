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
  // Color logic
  const fillClass = color === 'brand' ? 'fill-brand-600 dark:fill-brand-500' : 
                    color === 'white' ? 'fill-white' : 'fill-zinc-900 dark:fill-white';
  
  const beamClass = color === 'brand' ? 'fill-red-600' : 'fill-red-500';

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* THE DIGITAL BLASTER (Scanner Body) - Sharp, Tactical, Geometric */}
      <g transform="translate(5, 10)">
        {/* Handle (Grip) */}
        <path 
          d="M25 55 L35 55 L40 85 L25 90 Z" 
          className={fillClass} 
          opacity="0.9"
        />
        
        {/* Main Body (Head) - Gun-like shape */}
        <path 
          d="M20 25 L75 25 L80 35 L75 55 L25 55 L15 45 Z" 
          className={fillClass}
        />
        
        {/* Trigger Area / Negative Space Accent */}
        <path d="M35 55 L40 65 L45 55" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-500" />
        
        {/* Tactical Detail - Top Rail */}
        <rect x="25" y="20" width="40" height="3" className={fillClass} opacity="0.6" />
      </g>

      {/* THE BEAM (Profit Chart) - Laser turning into Bar Chart */}
      <g transform="translate(5, 10)">
        {/* Bar 1 */}
        <rect x="85" y="40" width="4" height="15" className={beamClass} rx="1" />
        {/* Bar 2 - Higher */}
        <rect x="92" y="32" width="4" height="23" className={beamClass} rx="1" />
        {/* Bar 3 - Highest (The Strike) */}
        <path d="M99 20 L103 20 L103 55 L99 55 Z" className={beamClass} />
        
        {/* Speed Lines / Laser effect */}
        <path d="M82 35 L120 35" stroke="url(#beamGradient)" strokeWidth="2" strokeDasharray="4 2" opacity="0.6" />
      </g>
    </svg>
  );
};
