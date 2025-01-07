import { handleApiError } from '../utils/errorHandling';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ApiOptions {
  method?: Method;
  body?: Record<string, unknown>;
  headers: Record<string, string>;
  credentials?: RequestCredentials;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const defaultOptions: ApiOptions = {
  method: undefined,
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
};

export const apiRequest = async <T>(
  url: string,
  options: ApiOptions = defaultOptions
): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      ...(options as RequestInit),
      body: options.body && JSON.stringify(options.body),
    });

    return await handleApiError<T>(response);
  } catch (error) {
    if (error instanceof Error && 'flash' in error) {
      throw error;
    }
    throw new Error('Unexpected API Error');
  }
};
