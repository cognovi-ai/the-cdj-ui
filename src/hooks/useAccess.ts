import { RequestBundle, apiRequest } from './apiRequest';
import { FlashContext } from '../contexts/FlashContext';
import { useContext } from 'react';


/**
 * Custom hook for making API requests to the access API
 * @returns Object containing a request method for making API calls
 */
export const useAccess = () => {
  const flashContext = useContext(FlashContext);

  if (!flashContext) {
    throw new Error('useAccess must be used within a FlashProvider');
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
   * Makes an API request and processes flash messages from the response.
   * @typeParam T - The expected response data type.
   * @param requestBundle - Bundle containing endpoint and request options.
   * @returns A Promise resolving to the response data.
   * @throws An error if the API request fails.
   */
  const request = async <T extends object>(requestBundle: RequestBundle): Promise<T> => {
    const accessUri = `${process.env.NEXT_PUBLIC_ACCESS_BASE_URL}${requestBundle.endpoint}`;

    try {
      const response = await apiRequest<T>(accessUri, { ...requestBundle.options });

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
