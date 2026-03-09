
import React from 'react';

interface StatusBadgeAtomProps {
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
}

export const StatusBadgeAtom: React.FC<StatusBadgeAtomProps> = ({ status }) => {
  const styles = {
    DRAFT: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
    PUBLISHED: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400',
    ARCHIVED: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
  };

  return (
    <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${styles[status]}`}>
      {status}
    </span>
  );
};
