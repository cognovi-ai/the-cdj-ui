/**
 * The available HTTP methods for an API request.
 * @typeParam GET - The GET method is used to retrieve data from the server.
 * @typeParam POST - The POST method is used to send data to the server.
 * @typeParam PUT - The PUT method is used to update data on the server.
 * @typeParam DELETE - The DELETE method is used to remove data from the server.
 */
export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const DEFAULT_OPTIONS: ApiOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
};

/**
 * The request bundle containing the endpoint and options to build an API 
 * request.
 * @typeParam endpoint - The endpoint to call.
 * @typeParam options - The options to use for the request.
 */
export interface RequestBundle {
  endpoint: string;
  options: ApiOptions;
}

/**
 * Options for configuring an API request.
 * @typeParam method - The HTTP Method to use for the request.
 * @typeParam body - The request body to send with the request (e.g., JSON 
 * data).
 * @typeParam headers - Headers to include in the request (e.g., 
 * 'Content-Type', 'Authorization').
 * @typeParam credentials - The credentials policy for the request (e.g., 
 * 'include', 'same-origin', 'omit').
 */
export interface ApiOptions {
  method: Method;
  body?: Record<string, unknown>;
  headers: Record<string, string>;
  credentials?: RequestCredentials;
}

/**
 * Makes an API request to the specified URL with the given options.
 * @param url - The endpoint to call, relative to `API_BASE_URL`.
 * @param options - The options to use for the request.
 * @returns A promise that resolves to the response data as a generic type `T`.
 * @throws Throws an error if the network response is not OK or if the request 
 * fails. The error contains the response body as a JSON string.
 * @example
 * ```ts
 * const options: ApiOptions = {
 *   method: 'POST',
 * };
 * const response = await apiRequest('/test-endpoint', options);
 * ```
 **/
export const apiRequest = async <T>(
  url: string,
  options: ApiOptions = DEFAULT_OPTIONS
): Promise<T> => {
  const response = await fetch(url, {
    ...(options as RequestInit),
    body: options.body && JSON.stringify(options.body),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(JSON.stringify(errorResponse));
  }

  return response.json();
};
