
"use client";
import React from 'react';
import { useTrack } from './hooks/useTrack';
import { TrackFormAtom } from './atoms/TrackFormAtom';
import { TrackResultAtom } from './atoms/TrackResultAtom';

export const OrderTracking: React.FC = () => {
  const logic = useTrack();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500">
      <TrackFormAtom 
        heading={logic.text.heading}
        sub={logic.text.sub}
        placeholder={logic.text.placeholder}
        btn={logic.text.btn}
        resi={logic.resi}
        setResi={logic.setResi}
        loading={logic.loading}
        onSubmit={logic.handleTrack}
        example={logic.text.example}
      />
      
      <TrackResultAtom 
        result={logic.result}
        error={logic.error}
        notFound={logic.text.notFound}
      />
    </section>
  );
};
