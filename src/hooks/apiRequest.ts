type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const DEFAULT_OPTIONS: ApiOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
};

/**
 * Options for configuring an API request.
 *
 * @property {Method} [method] - The HTTP method to use for the request (e.g.,
 * 'GET', 'POST', 'PUT', 'DELETE').
 * @property {Record<string, unknown>} [body] - The request body to send with
 * the request (e.g., JSON data).
 * @property {Record<string, string>} headers - Headers to include in the
 * request (e.g., 'Content-Type', 'Authorization').
 * @property {RequestCredentials} [credentials] - The credentials policy for
 * the request (e.g., 'include', 'same-origin', 'omit').
 */
export interface ApiOptions {
  method: Method;
  body?: Record<string, unknown>;
  headers: Record<string, string>;
  credentials?: RequestCredentials;
}

/**
 * Makes an API request to the specified URL with the given options.
 *
 * @param {string} url - The endpoint to call, relative to `API_BASE_URL`.
 * @param {ApiOptions} [options=defaultOptions] - The options to use for the
 * request.
 * @returns {Promise<T>} A promise that resolves to the response data as a
 * generic type `T`.
 * @throws {Error} Throws an error if the network response is not OK or if the
 * request fails. The error contains the response body as a JSON string.
 * @example
 * const options: ApiOptions = {
 *   method: 'POST',
 * };
 *
 * const response = await apiRequest('/test-endpoint', options);
 **/
export const apiRequest = async <T>(
  url: string,
  options: ApiOptions = DEFAULT_OPTIONS
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
