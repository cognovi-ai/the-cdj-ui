import { ApiOptions, apiRequest } from '../../../src/hooks/apiRequest';
import { handleApiError } from '../../../src/utils/errorHandling';

global.fetch = jest.fn();

jest.mock('../../../src/utils/errorHandling', () => ({
  handleApiError: jest.fn(),
}));

describe('apiRequest', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should use default options for a basic request', async () => {
    const mockResponse = { data: 'test data' };
    (handleApiError as jest.Mock).mockResolvedValueOnce(mockResponse);
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    await apiRequest('/test-endpoint');

    const fetchCalls = (global.fetch as jest.Mock).mock.calls;

    expect(fetchCalls[0][1]).toMatchObject({
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
  });

  it('should override default options with custom options', async () => {
    const mockResponse = { data: 'test data' };
    (handleApiError as jest.Mock).mockResolvedValueOnce(mockResponse);
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const customOptions: ApiOptions = {
      headers: {
        Authorization: 'Bearer token',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    };

    await apiRequest('/test-endpoint', customOptions);

    const fetchCalls = (global.fetch as jest.Mock).mock.calls;

    expect(fetchCalls[0][1]).toMatchObject(customOptions);
  });

  it('should make a successful POST request', async () => {
    const mockResponse = { data: 'created' };
    const requestBody = { name: 'test' };

    (handleApiError as jest.Mock).mockResolvedValueOnce(mockResponse);
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const options: ApiOptions = {
      method: 'POST',
      body: requestBody,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    };

    const result = await apiRequest('/create', options);

    const fetchCalls = (global.fetch as jest.Mock).mock.calls;

    expect(fetchCalls[0][1]).toMatchObject({
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    expect(result).toEqual(mockResponse);
  });

  it('should handle API errors', async () => {
    const errorResponse = {
      flash: {
        error: ['Invalid request'],
      },
    };

    const apiError = new Error('Invalid request');
    Object.assign(apiError, {
      flash: errorResponse.flash,
      statusCode: 400,
    });

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: () => Promise.resolve(errorResponse),
    });

    (handleApiError as jest.Mock).mockRejectedValueOnce(apiError);

    await expect(apiRequest('/test-endpoint')).rejects.toThrow(
      'Invalid request'
    );
  });

  it('should handle network errors', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error('Network error')
    );

    await expect(apiRequest('/test-endpoint')).rejects.toThrow(
      'Unexpected API Error'
    );
  });
});
