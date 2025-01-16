import { ApiOptions, apiRequest } from '../../src/hooks/apiRequest';

global.fetch = jest.fn();

describe('apiRequest', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should use default options for a basic GET request', async () => {
    const mockResponse = { data: 'test data' };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const response = await apiRequest('/test-endpoint');

    const fetchCalls = (global.fetch as jest.Mock).mock.calls;

    expect(fetchCalls[0][0]).toBe('/test-endpoint');
    expect(fetchCalls[0][1]).toMatchObject({
      method: 'GET',
      credentials: 'include',
    });
    expect(response).toEqual(mockResponse);
  });

  it('should override default options with custom options', async () => {
    const mockResponse = { data: 'custom data' };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const customOptions: ApiOptions = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer token',
        'Content-Type': 'application/json',
      },
      body: { name: 'test' },
      credentials: 'include',
    };

    await apiRequest('/test-endpoint', customOptions);

    const fetchCalls = (global.fetch as jest.Mock).mock.calls;

    expect(fetchCalls[0][1]).toMatchObject({
      method: 'POST',
      headers: {
        Authorization: 'Bearer token',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ name: 'test' }),
    });
  });

  it('should make a successful POST request and return the correct response', async () => {
    const mockResponse = { message: 'Success' };
    const requestBody = { email: 'test@example.com', password: 'password123' };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const options: ApiOptions = {
      method: 'POST',
      body: requestBody,
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await apiRequest('/register', options);

    expect(response).toEqual(mockResponse);

    const fetchCalls = (global.fetch as jest.Mock).mock.calls;

    expect(fetchCalls[0][1]).toMatchObject({
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: { 'Content-Type': 'application/json' },
    });
  });

  it('should throw an error for non-OK responses', async () => {
    const errorResponse = { message: 'Error occurred' };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: jest.fn().mockResolvedValueOnce(errorResponse),
    });

    await expect(apiRequest('/error-endpoint')).rejects.toThrow(
      JSON.stringify(errorResponse)
    );
  });

  it('should handle network errors gracefully', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error('Network error')
    );

    await expect(apiRequest('/test-endpoint')).rejects.toThrow('Network error');
  });
});
