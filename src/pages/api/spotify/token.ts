import axios from 'axios';
import querystring from 'querystring';
import type { AxiosError } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import type {
  SpotifyAuthorizationResponse,
  SpotifyErrorResponse,
} from '../../../spotify';

const { NEXT_PUBLIC_SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

export default async (
  req: NextApiRequest,
  res: NextApiResponse<SpotifyAuthorizationResponse | SpotifyErrorResponse>
) => {
  try {
    const buf = Buffer.from(
      `${NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
    ).toString('base64');
    const headers = {
      Authorization: `Basic ${buf}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const data = querystring.stringify({ grant_type: 'client_credentials' });
    const { data: responseData } = await axios({
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      headers,
      data,
    });
    res.status(200).json(responseData);
  } catch (e) {
    if (e.response) {
      const { data: responseData, status } = e.response;
      res.status(status).json(responseData);
    } else {
      res
        .status(500)
        .json({ error: 'server_error', error_description: e.message });
    }
  }
};
