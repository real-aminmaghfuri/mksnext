
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
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" className="group shadow-brand-500/25">
        <Rocket className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        {primaryText}
      </Button>
      <Button variant="secondary" size="lg" className="border-2">
        <MonitorPlay className="mr-2 h-5 w-5" />
        {secondaryText}
      </Button>
    </div>
  );
};
