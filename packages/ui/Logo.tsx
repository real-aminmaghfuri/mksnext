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
  
  // High contrast bold stroke colors
  const strokeColor = color === 'brand' ? '#dc2626' : // Red-600 for that bold brand look
                      color === 'white' ? '#ffffff' : '#18181b'; // Zinc-950

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      stroke={strokeColor}
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* 1. THE SHIELD CONTAINER */}
      {/* A wide, protective shield outline */}
      <path 
        d="M 15 25 
           C 15 25, 15 45, 15 45
           C 15 75, 40 88, 50 95 
           C 60 88, 85 75, 85 45
           C 85 45, 85 25, 85 25
           L 50 15 
           L 15 25 Z" 
        strokeWidth="6"
      />

      {/* 2. THE SCANNER GUN */}
      <g transform="translate(0, 2)">
        {/* Main Body & Handle */}
        <path 
          d="M 35 45 
             L 35 35 
             C 35 30, 38 28, 42 28 
             L 70 28 
             L 75 45 
             L 60 45 
             L 55 55 
             L 50 80 
             L 38 75 
             L 45 55 
             L 35 45 Z" 
          strokeWidth="6"
        />

        {/* Inner Detail: The Window/Display on the side */}
        <path 
          d="M 42 35 L 62 35 L 60 40 L 42 40 Z" 
          strokeWidth="4" 
        />

        {/* Trigger */}
        <path 
          d="M 52 55 L 55 60" 
          strokeWidth="4" 
        />
        
        {/* Laser Emitter Lines (Optional Accent) */}
        <path d="M 72 32 L 72 40" strokeWidth="3" />
      </g>

    </svg>
  );
};
