import { RequestBundle, apiRequest } from './apiRequest';
import { FlashContext } from '../contexts/FlashContext';
import { useContext } from 'react';

/**
 * Custom hook for making API requests to the entry API
 * @returns Object containing request method for making API calls
 * @param journalId - Unique identifier for the journal
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

  const flashContext = useContext(FlashContext);
  
  if (!flashContext) {
    throw new Error('useEntry must be used within a FlashProvider');
  }

  const { processFlash } = flashContext;

  /**
   * Processes API errors and extracts flash messages
   * @param error - The API error
   * @returns The extracted flash message or a default error message
   */
  const handleError = (error: any) => {
    try {
      const errorResponse = JSON.parse(error.message);
      return errorResponse?.flash ? errorResponse : { flash: { error: ['An unexpected error occurred.'] } };
    } catch {
      return { flash: { error: ['An unexpected error occurred.'] } };
    }
  };
  
  /**
   * @typeParam T - The type of the response data
   * @param requestBundle - Bundle containing endpoint and request options
   * @returns A Promise resolving to the response data or an error
   */
  const request = async <T>(requestBundle: RequestBundle): Promise<T> => {
    const entryUri = `${process.env.NEXT_PUBLIC_ENTRY_BASE_URL}/${journalId}/entries${requestBundle.endpoint}`;

    try {
      const response = await apiRequest<T>(entryUri, { ...requestBundle.options });

      if (response && typeof response === 'object' && 'flash' in response) {
        processFlash(response);
      }

      return response;
    } catch (error: any) {
      processFlash(handleError(error));
      throw error;
    }
  };

  return { request };
};
