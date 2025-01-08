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

/**
 * Makes an API request to the specified URL with the given options.
 *
 * @param {string} url - The endpoint to call, relative to `API_BASE_URL`.
 * @param {ApiOptions} [options=defaultOptions] - Options for configuring the request,
 * including HTTP method, headers, request body, and credentials. Defaults to `defaultOptions`.
 * @returns {Promise<T>} A promise resolving to the parsed response data of type `T`.
 * @throws {Error} Throws an error if the network response is not OK or if the request fails.
 * The error contains the response body as a JSON string if available.
 * @example
 * // Example usage of a POST request
 * const result = await apiRequest<{ message: string }>('/access/register', {
 *   method: 'POST',
 *   body: { email: 'user@example.com', password: 'securePassword' },
 * });
 * console.log(result.message);
 **/

export const apiRequest = async <T>(
  url: string,
  options: ApiOptions = defaultOptions
): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...(options as RequestInit),
    body: options.body && JSON.stringify(options.body),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(JSON.stringify(errorResponse));
  }

  return response.json();
};
