import SpotifyWebApi from 'spotify-web-api-js';

export type SpotifyAuthorizationResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export type SpotifyErrorResponse = {
  error: string;
  error_description: string;
};

export type SpotifyApiCallback = {
  (api: SpotifyWebApi.SpotifyWebApiJs): any;
};
