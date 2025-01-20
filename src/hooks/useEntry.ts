import { RequestBundle, apiRequest } from './apiRequest';

const ENTRY_BASE_URL = process.env.NEXT_PUBLIC_ENTRY_BASE_URL;

export const useEntry = (journalId: string) => {
  if (!journalId) {
    throw new Error('journalId is required to use useEntry.');
  }

  const request = async <T>(requestBundle: RequestBundle): Promise<T> => {
    const entryUri = `${ENTRY_BASE_URL}/${journalId}/entries${requestBundle.endpoint}`;

    return await apiRequest<T>(entryUri, {
      ...requestBundle.options,
    });
  };

  return { request };
};
