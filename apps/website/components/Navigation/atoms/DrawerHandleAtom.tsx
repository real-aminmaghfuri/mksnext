import React from 'react';

/**
 * DrawerHandleAtom - A visual indicator (pill) for bottom sheets.
 */
export const DrawerHandleAtom: React.FC = () => {
  return (
    <div className="w-full flex justify-center pt-3 pb-1">
      <div className="w-12 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
    </div>
  );
};
