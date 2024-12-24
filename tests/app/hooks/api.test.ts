// ApiRequest.test.ts
import { apiRequest } from '../../../src/hooks/api';

describe('apiRequest', () => {
  beforeEach(() => {
    // Mock the global fetch function
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  it('should make a GET request and return data', async () => {
    // Mocked response for fetch
    const mockResponse = { data: 'success' };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await apiRequest('/test-endpoint', { method: 'GET' });

    expect(global.fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/test-endpoint`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: undefined,
      }
    );
    expect(result).toEqual(mockResponse);
  });

  it('should handle API errors correctly', async () => {
    const mockErrorResponse = {
      flash: { error: ['Something went wrong'] },
    };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: jest.fn().mockResolvedValueOnce(mockErrorResponse),
    });

    await expect(
      apiRequest('/test-endpoint', { method: 'GET' })
    ).rejects.toThrow('Something went wrong');
  });

  it('should handle unexpected errors', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error('Network Error')
    );

    await expect(
      apiRequest('/test-endpoint', { method: 'GET' })
    ).rejects.toThrow('Unexpected API Error');
  });
});

it('should handle missing optional parameters', async () => {
  const mockResponse = { data: 'default test' };
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: jest.fn().mockResolvedValueOnce(mockResponse),
  });

  const result = await apiRequest('/test-endpoint');

  expect(global.fetch).toHaveBeenCalledWith(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/test-endpoint`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: undefined,
    }
  );
  expect(result).toEqual(mockResponse);
});

it('should include Authorization header if token is provided', async () => {
  const mockResponse = { data: 'authorized' };
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: jest.fn().mockResolvedValueOnce(mockResponse),
  });

  const result = await apiRequest('/test-endpoint', { token: 'mock-token' });

  expect(global.fetch).toHaveBeenCalledWith(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/test-endpoint`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer mock-token',
      },
      body: undefined,
    }
  );
  expect(result).toEqual(mockResponse);
});
