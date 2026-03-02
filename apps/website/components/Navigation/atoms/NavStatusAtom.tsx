import React from 'react';

interface NavStatusAtomProps {
  version?: string;
}

export const NavStatusAtom: React.FC<NavStatusAtomProps> = ({ version = "v2.0.5" }) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
      <span className="text-[10px] font-mono font-black text-zinc-400 uppercase tracking-[0.2em]">
        System Online &bull; {version}
      </span>
    </div>
  );
};
