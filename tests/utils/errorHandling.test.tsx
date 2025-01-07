import { handleApiError } from '../../src/utils/errorHandling';

describe('handleApiError', () => {
  const createMockResponse = (options: {
    ok: boolean;
    status: number;
    jsonData: {
      data?: string;
      flash?: { success?: string[]; error?: string[]; info?: string[] };
    };
  }): Response => {
    return {
      ok: options.ok,
      status: options.status,
      json: () => Promise.resolve(options.jsonData),
    } as Response;
  };

  it('should return json response for successful requests without flash messages', async () => {
    const mockResponse = createMockResponse({
      ok: true,
      status: 200,
      jsonData: { data: 'test data' },
    });

    const result = await handleApiError(mockResponse);
    expect(result).toEqual({ data: 'test data' });
  });

  it('should return json response with success flash messages', async () => {
    const mockResponse = createMockResponse({
      ok: true,
      status: 200,
      jsonData: {
        data: 'test data',
        flash: { success: ['Operation completed successfully'] },
      },
    });

    const result = await handleApiError(mockResponse);
    expect(result).toEqual({
      data: 'test data',
      flash: { success: ['Operation completed successfully'] },
    });
  });

  it('should throw error with default message when response is not ok', async () => {
    const mockResponse = createMockResponse({
      ok: false,
      status: 400,
      jsonData: {},
    });

    await expect(handleApiError(mockResponse)).rejects.toMatchObject({
      message: 'API Error',
      statusCode: 400,
      flash: {},
    });
  });

  it('should throw error with custom message and flash data', async () => {
    const mockResponse = createMockResponse({
      ok: false,
      status: 403,
      jsonData: {
        flash: {
          error: ['Access denied'],
          info: ['Please check your permissions'],
        },
      },
    });

    await expect(handleApiError(mockResponse)).rejects.toMatchObject({
      message: 'Access denied',
      statusCode: 403,
      flash: {
        error: ['Access denied'],
        info: ['Please check your permissions'],
      },
    });
  });

  it('should handle multiple error messages and use the first one', async () => {
    const mockResponse = createMockResponse({
      ok: false,
      status: 400,
      jsonData: {
        flash: { error: ['Primary error', 'Secondary error'] },
      },
    });

    await expect(handleApiError(mockResponse)).rejects.toMatchObject({
      message: 'Primary error',
      flash: { error: ['Primary error', 'Secondary error'] },
    });
  });

  it('should handle json parsing errors', async () => {
    const mockResponse = {
      ...createMockResponse({ ok: false, status: 500, jsonData: {} }),
      json: () => Promise.reject(new Error('JSON parsing failed')),
    };

    await expect(handleApiError(mockResponse)).rejects.toThrow(
      'JSON parsing failed'
    );
  });
});
