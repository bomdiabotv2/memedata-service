import { UnsplashResponse } from './types';
import dotenv from 'dotenv';
import nodeFetch from 'node-fetch';

dotenv.config();
const { UNSPLASHED_ACCESS_KEY: unsplashedAccessKey } = process.env;

const unsplashConfig = {
  baseUrl: 'https://api.unsplash.com'
};

interface fetchImageByQueryProps {
  queryString: string
  page: number
  limit?: number
}

export const fetchImageByQuery = async ({ queryString, page }: fetchImageByQueryProps): Promise<UnsplashResponse> => {
  const result = await nodeFetch(
    `${unsplashConfig.baseUrl}/search/photos?query=${queryString}&page=${page}&orientation=landscape`,
    {
      headers: {
        Authorization: `Client-ID ${unsplashedAccessKey as string}`
      }
    }
  );

  const response = await result.json() as UnsplashResponse;

  return response;
};
