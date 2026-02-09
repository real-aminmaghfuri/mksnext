
"use client";
import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export const ArticleProgressBarAtom: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
       <div 
         className="h-full bg-gradient-to-r from-brand-600 to-red-600 transition-all duration-100 ease-out shadow-[0_0_10px_rgba(249,115,22,0.5)]"
         style={{ width: `${progress * 100}%` }}
       />
    </div>
  );
};
