
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
  
  // Brand color matches Tailwind brand-500 (#f97316)
  const strokeColor = color === 'brand' ? '#f97316' : 
                      color === 'white' ? '#ffffff' : '#18181b'; 

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
      {/* 1. THE SHIELD */}
      <path 
        d="M 18 25 Q 50 12 82 25 L 82 48 Q 82 75 50 92 Q 18 75 18 48 Z" 
        strokeWidth="6"
      />

      {/* 2. THE SCANNER & MKS Text */}
      <g transform="translate(0, 2)">
        {/* Main Body - Updated Geometry */}
        <path 
          d="M 28 35 L 62 35 L 68 50 L 55 50 L 50 55 L 44 75 L 34 72 L 40 55 L 32 55 C 25 55 25 35 35 35 Z" 
          strokeWidth="6"
        />

        {/* Inner Window */}
        <path 
          d="M 35 42 L 55 42 L 52 47 L 35 47 Z" 
          strokeWidth="3" 
        />

        {/* Rear Vents */}
        <path d="M 64 38 L 68 47" strokeWidth="3" />
        <path d="M 70 38 L 74 47" strokeWidth="3" />
        
        {/* Trigger */}
        <path d="M 46 58 L 48 62" strokeWidth="3" />

        {/* MKS Label */}
        <text 
          x="61" 
          y="55" 
          fontFamily="Arial, sans-serif" 
          fontSize="10" 
          fontWeight="bold" 
          fill={strokeColor} 
          stroke="none"
        >
          MKS
        </text>
      </g>
    </svg>
  );
};
