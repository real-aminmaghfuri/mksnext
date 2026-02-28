import React from 'react';
import Image from 'next/image';
import { Copy, Trash2 } from 'lucide-react';
import { GlassCard } from 'ui';
import { MediaAsset } from 'data';
import { StatusBadgeAtom } from '../atoms/StatusBadgeAtom';
import { ActionButtonAtom } from '../atoms/ActionButtonAtom';

interface MediaCardMoleculeProps {
  item: MediaAsset;
  onCopy: (url: string) => void;
  onDelete?: (id: string) => void;
}

export const MediaCardMolecule: React.FC<MediaCardMoleculeProps> = ({
  item,
  onCopy,
  onDelete
}) => {
  return (
    <GlassCard variant="solid" className="overflow-hidden group hover:border-brand-500/50 transition-colors">
      <div className="aspect-square relative bg-zinc-100 dark:bg-zinc-800">
        <Image 
          src={item.url} 
          alt={item.alt}
          fill
          className="object-cover"
          unoptimized 
        />
        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <StatusBadgeAtom label={item.format.toUpperCase()} variant="dark" />
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-zinc-900 dark:text-white truncate max-w-[150px]" title={item.filename}>
            {item.filename}
          </p>
        </div>
        <p className="text-[10px] text-zinc-500 line-clamp-1 mb-3">{item.caption}</p>
        
        <div className="flex gap-2">
          <ActionButtonAtom 
            label="COPY" 
            icon={Copy} 
            onClick={() => onCopy(item.url)} 
          />
          {onDelete && (
            <ActionButtonAtom 
              label="DEL" 
              icon={Trash2} 
              onClick={() => onDelete(item.id)}
              variant="danger"
            />
          )}
        </div>
      </div>
    </GlassCard>
  );
};
