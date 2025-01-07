export interface ApiError extends Error {
  flash?: Record<string, unknown>;
  statusCode?: number;
}

export const handleApiError = async <T>(response: Response): Promise<T> => {
  const jsonResponse: T = await response.json();

  interface JsonResponseWithFlash {
    flash?: {
      success?: string[];
      error?: string[];
      info?: string[];
    };
  }

  const flashMessages = (jsonResponse as JsonResponseWithFlash)?.flash || {};
  const successMessages = flashMessages.success;

  if (!response.ok) {
    const errorMessages = flashMessages.error || [];
    const errorMessage = errorMessages[0] || 'API Error';

    const apiError: ApiError = new Error(errorMessage);
    apiError.flash = flashMessages;
    apiError.statusCode = response.status;
    throw apiError;
  }

  if (successMessages && successMessages.length > 0) {
    return {
      ...jsonResponse,
      flash: { success: successMessages },
    } as T;
  }

  return jsonResponse;
};
