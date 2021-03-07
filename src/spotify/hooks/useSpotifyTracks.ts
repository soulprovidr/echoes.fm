import Spotify from 'spotify-web-api-js';

export const useSpotifyTracks = async (resourceUrl: String): void => {
  const spotify = new Spotify();
  spotify.setAccessToken(process.env.SPOTIFY_CLIENT_SECRET);
  const response = await spotify.search(resourceUrl, [
    'album',
    'playlist',
    'track',
  ]);
  console.log(response);
};
