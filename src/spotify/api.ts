import axios, { AxiosError, AxiosResponse } from 'axios';
import querystring from 'querystring';
import SpotifyWebApi from 'spotify-web-api-js';
import {
  SpotifyApiCallback,
  SpotifyAuthorizationResponse,
  SpotifyErrorResponse,
} from './types';

let expiresAt = 0;

export const spotifyApi = new SpotifyWebApi();

export const authorize = async (): Promise<void> => {
  if (new Date().getTime() < expiresAt) return;
  try {
    const { data } = await axios.get<SpotifyAuthorizationResponse>(
      '/api/spotify/token'
    );
    expiresAt = new Date().getTime() + data.expires_in;
    spotifyApi.setAccessToken(data.access_token);
  } catch (e) {
    if (e.response) {
      console.log(e.response.data);
    } else {
      console.error(e);
    }
    throw e;
  }
};

export const authorizeUser = (): void => {
  const clientId = <string>process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const scopes = [
    'streaming',
    'user-read-private',
    'user-modify-playback-state',
  ];
  const spotifyParams = new URLSearchParams();
  spotifyParams.set('client_id', clientId);
  spotifyParams.set('redirect_uri', window.location.origin);
  spotifyParams.set('response_type', 'token');
  spotifyParams.set('scopes', scopes.join(' '));
  spotifyParams.set('show_dialog', 'false');
  window.location.href = `https://accounts.spotify.com/authorize?${spotifyParams.toString()}`;
};
