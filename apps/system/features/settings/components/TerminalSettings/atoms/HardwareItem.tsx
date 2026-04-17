
import React from 'react';
import { Button } from 'ui';

interface HardwareItemProps {
  name: string;
  connection: string;
  onTest: () => void;
}

export const HardwareItem: React.FC<HardwareItemProps> = ({ name, connection, onTest }) => (
  <div className="flex items-center justify-between">
    <div>
      <h4 className="font-bold text-sm">{name}</h4>
      <p className="text-xs text-zinc-500">{connection}</p>
    </div>
    <Button size="sm" variant="outline" className="text-xs" onClick={onTest}>TEST PRINT</Button>
  </div>
);
