
"use client";
import { useState } from 'react';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { TrackResult } from '../types';

export const useTrack = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  
  const [resi, setResi] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TrackResult | null>(null);
  const [error, setError] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resi.trim()) return;

    setLoading(true);
    setError(false);
    setResult(null);

    // Simulate API call
    setTimeout(() => {
      if (resi.toUpperCase() === 'MKS-77889900') {
        setResult({
          resi: 'MKS-77889900',
          courier: 'MKS LOGISTICS',
          status: 'DELIVERED',
          history: [
            { date: '2024-03-05 14:20', location: 'Solo, Jawa Tengah', status: 'Paket diterima oleh Amin Maghfuri (Penerima)', isCompleted: true },
            { date: '2024-03-05 09:15', location: 'Solo, Jawa Tengah', status: 'Kurir sedang menuju lokasi pengantaran' },
            { date: '2024-03-04 22:30', location: 'Semarang, Jawa Tengah', status: 'Paket sedang dalam perjalanan ke Solo' },
            { date: '2024-03-04 10:00', location: 'Jakarta, DKI Jakarta', status: 'Paket telah diserahkan ke kurir' },
            { date: '2024-03-03 18:00', location: 'Jakarta, DKI Jakarta', status: 'Pesanan sedang diproses oleh tim MKS' },
          ]
        });
      } else {
        setError(true);
      }
      setLoading(false);
    }, 1500);
  };

  return {
    text: {
      heading: text.trackHeading,
      sub: text.trackSub,
      placeholder: text.trackPlaceholder,
      btn: text.trackBtn,
      resultTitle: text.trackResultTitle,
      statusHeader: text.trackStatusHeader,
      locationHeader: text.trackLocationHeader,
      dateHeader: text.trackDateHeader,
      notFound: text.trackNotFound,
      example: text.trackExample
    },
    resi,
    setResi,
    loading,
    result,
    error,
    handleTrack
  };
};
