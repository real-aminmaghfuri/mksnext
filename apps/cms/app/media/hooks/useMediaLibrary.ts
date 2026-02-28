import { useState, useEffect } from 'react';
import { Repository, MediaAsset } from 'data';

export const useMediaLibrary = () => {
  const [mediaList, setMediaList] = useState<MediaAsset[]>([]);
  const [isLoadingList, setIsLoadingList] = useState(true);

  const loadMedia = async () => {
    setIsLoadingList(true);
    try {
      const data = await Repository.getMediaLibrary();
      setMediaList(data);
    } catch (e) {
      console.error("Failed to load media", e);
    } finally {
      setIsLoadingList(false);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return {
    mediaList,
    setMediaList,
    isLoadingList,
    refreshMedia: loadMedia
  };
};
