import React from 'react';
import { MediaAsset } from 'data';
import { MediaCardMolecule } from '../molecules/MediaCardMolecule';
import { StatusBadgeAtom } from '../atoms/StatusBadgeAtom';

interface MediaGridOrganismProps {
  mediaList: MediaAsset[];
  isLoadingList: boolean;
  onCopy: (url: string) => void;
  onDelete?: (id: string) => void;
}

export const MediaGridOrganism: React.FC<MediaGridOrganismProps> = ({
  mediaList,
  isLoadingList,
  onCopy,
  onDelete
}) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">
          Asset Archive
        </h3>
        <StatusBadgeAtom label={`${mediaList.length} ITEMS`} />
      </div>

      {isLoadingList ? (
        <div className="py-12 text-center">
          <div className="w-6 h-6 border-3 border-brand-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest">Loading Library...</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {mediaList.map((item) => (
            <MediaCardMolecule 
              key={item.id} 
              item={item} 
              onCopy={onCopy} 
              onDelete={onDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
};
