type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ApiOptions {
  method?: Method;
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
}

interface ApiError extends Error {
  flash?: Record<string, unknown>;
  statusCode?: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const defaultOptions: ApiOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
};

export const apiRequest = async <T>(
  url: string,
  options: ApiOptions = defaultOptions
): Promise<T> => {
  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  const authHeaders: Record<string, string> = token
    ? { Authorization: `Bearer ${token}` }
    : {};

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method,
      headers: {
        ...defaultHeaders,
        ...authHeaders,
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const jsonResponse: T = await response.json();

    if (!response.ok) {

      interface JsonResponseWithFlash {
        flash?: Record<string, unknown>;
      }

      const flashMessages =
        (jsonResponse as JsonResponseWithFlash)?.flash || {};
      const errorMessages = flashMessages as {
        error?: string[];
        info?: string[];
      };
      const errorMessage =
        errorMessages.error?.[0] || errorMessages.info?.[0] || 'API Error';

      const apiError: ApiError = new Error(errorMessage);
      apiError.flash = flashMessages;
      apiError.statusCode = response.status;
      throw apiError;
    }

    return jsonResponse;
  } catch (error) {
    if (error instanceof Error && 'flash' in error) {
      throw error;
    }
    throw new Error('Unexpected API Error');
  }
};
