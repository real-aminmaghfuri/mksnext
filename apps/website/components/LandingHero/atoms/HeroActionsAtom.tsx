
"use client";
import React from 'react';
import { Button } from 'ui';
import { Rocket, MonitorPlay } from 'lucide-react';

interface HeroActionsProps {
  primaryText: string;
  secondaryText: string;
}

export const HeroActionsAtom: React.FC<HeroActionsProps> = ({ primaryText, secondaryText }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up [animation-delay:300ms]">
      <Button size="lg" className="group min-w-[200px] !rounded-full">
        <Rocket className="mr-3 h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={2.5} />
        {primaryText}
      </Button>
      <Button variant="secondary" size="lg" className="group min-w-[200px] !rounded-full border-zinc-200 dark:border-zinc-800">
        <MonitorPlay className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" strokeWidth={2.5} />
        {secondaryText}
      </Button>
    </div>
  );
};
