import Spotify from 'spotify-web-api-js';

export const useSpotifyTracks = async (resourceUrl: string): Promise<any> => {
  if (typeof window === 'undefined') {
    return [];
  }
  const spotify = new Spotify();
  spotify.setAccessToken(process.env.SPOTIFY_CLIENT_SECRET);
  try {
    const response = await spotify.search(resourceUrl, [
      'album',
      'playlist',
      'track',
    ]);
    console.log(response);
  } catch (e) {
    console.error(e);
  }
};
