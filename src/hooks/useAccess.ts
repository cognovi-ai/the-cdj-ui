import { ApiOptions, apiRequest } from './apiRequest';

const ACCESS_BASE_URL = process.env.NEXT_PUBLIC_ACCESS_BASE_URL;

/**
 * Interface representing the structure of an API request bundle
 * @interface RequestBundle
 */
export interface RequestBundle {
  endpoint: string;
  options: ApiOptions;
}

/**
 * @returns Object containing request method for making API calls
 */
export const useAccess = () => {
  /**
   * @template T Type of the expected response data
   * @param requestBundle - Bundle containing endpoint and request options
   * @returns {Promise<T>} Promise resolving to the response data
   * @throws {Error} When the API request fails
   */
  const request = async <T>(requestBundle: RequestBundle): Promise<T> => {
    try {
      const accessUri = `${ACCESS_BASE_URL}${requestBundle.endpoint}`;
      return await apiRequest<T>(accessUri, {
        ...requestBundle.options,
      });
    } catch (error) {
      console.error('Error in request:', error);
      throw error;
    }
  };

  return { request };
};
