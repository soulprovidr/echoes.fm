import { useState, useEffect } from 'react';
import { authorize, spotifyApi } from '../api';

const getIdFromUri = (uri: string): string => {
  const parts = uri.split(':');
  if (parts.length !== 3) {
    throw new Error('Invalid URI.');
  }
  return parts[2];
};

export const usePlaylist = (
  playlistUri: string
): SpotifyApi.SinglePlaylistResponse | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  const [
    playlist,
    setPlaylist,
  ] = useState<SpotifyApi.SinglePlaylistResponse | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const playlistId = getIdFromUri(playlistUri);
        authorize()
          .then(() => spotifyApi.getPlaylist(playlistId))
          .then(setPlaylist);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [playlistUri]);
  return playlist;
};
