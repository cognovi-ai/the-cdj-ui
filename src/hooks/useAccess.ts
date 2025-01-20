import { RequestBundle, apiRequest } from './apiRequest';

const ACCESS_BASE_URL = process.env.NEXT_PUBLIC_ACCESS_BASE_URL;

/**
 * Custom hook for making API requests to the access API
 * @returns Object containing request method for making API calls
 */
export const useAccess = () => {
  /**
   * @typeParam T - The type of the response data
   * @param requestBundle - Bundle containing endpoint and request options
   * @throws An error When the API request fails
   * @returns A promise resolving to the response data
   * @returns A Promise resolving to the response data or an error
   */
  const request = async <T>(requestBundle: RequestBundle): Promise<T> => {
    const accessUri = `${ACCESS_BASE_URL}${requestBundle.endpoint}`;

    return await apiRequest<T>(accessUri, {
      ...requestBundle.options,
    });
  };

  return { request };
};
