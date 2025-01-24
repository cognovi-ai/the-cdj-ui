import { RequestBundle, apiRequest } from './apiRequest';

const ENTRY_BASE_URL = process.env.NEXT_PUBLIC_ENTRY_BASE_URL;

/**
 * Custom hook for making API requests to the entry API
 * @returns Object containing request method for making API calls
 * @param journalId - Unique identifier for the journal
 * @example 
 * @example Fetching all entries
 * ```typescript
 * const { request } = useEntry('journal123');
 * 
 * const fetchEntries = async () => {
 *   const requestBundle = endpoints.entry('GET');
 *   return await request<GetAllEntriesResponse>(requestBundle);
 * };
 * ```
 * @example Creating a new entry
 * ```typescript
 * const { request } = useEntry('journal123');
 * 
 * const createEntry = async ( entryData: EntryBody ) => {
 *   const requestBundle = endpoints.entry('POST', undefined, entryData);
 *   return await request<EntryResponse>(requestBundle);
 * };
 * ```
 */
export const useEntry = (journalId: string) => {
  if (!journalId) {
    throw new Error('journalId is required to use useEntry.');
  }
  
  /**
   * @typeParam T - The type of the response data
   * @param requestBundle - Bundle containing endpoint and request options
   * @returns A Promise resolving to the response data or an error
   */
  const request = async <T>(requestBundle: RequestBundle): Promise<T> => {
    const entryUri = `${ENTRY_BASE_URL}/${journalId}/entries${requestBundle.endpoint}`;

    return await apiRequest<T>(entryUri, {
      ...requestBundle.options,
    });
  };

  return { request };
};
