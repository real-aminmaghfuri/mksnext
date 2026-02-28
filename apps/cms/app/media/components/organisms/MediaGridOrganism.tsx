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
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-black uppercase tracking-widest text-zinc-500">
          Asset Archive
        </h3>
        <StatusBadgeAtom label={`${mediaList.length} ITEMS`} />
      </div>

      {isLoadingList ? (
        <div className="py-20 text-center">
          <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest">Loading Library...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
