import React from 'react';

interface StatusIndicatorAtomProps {
  active: boolean;
}

export const StatusIndicatorAtom: React.FC<StatusIndicatorAtomProps> = ({ active }) => {
  return (
    <span className={`w-2 h-2 rounded-full transition-colors duration-500 ${active ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-zinc-300 dark:bg-zinc-800'}`} />
  );
};
