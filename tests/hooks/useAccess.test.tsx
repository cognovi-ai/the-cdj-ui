import { apiRequest } from '../../src/hooks/apiRequest';
import { renderHook } from '@testing-library/react';
import { useAccess } from '../../src/hooks/useAccess';

jest.mock('../../src/hooks/apiRequest', () => ({
  apiRequest: jest.fn(),
}));

describe('useAccess Hook', () => {
  test('request calls apiRequest with correct parameters', async () => {
    const { result } = renderHook(() => useAccess());
    const { request } = result.current;

    const mockRequestBundle = {
      endpoint: '/test-endpoint',
      options: {
        method: 'GET' as const,
        headers: { 'Content-Type': 'application/json' },
      },
    };

    const mockResponse = { data: 'test' };
    (apiRequest as jest.Mock).mockResolvedValue(mockResponse);

    const response = await request(mockRequestBundle);

    expect(apiRequest).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_ACCESS_BASE_URL}/test-endpoint`,
      mockRequestBundle.options
    );
    expect(response).toEqual(mockResponse);
  });

  test('request handles errors correctly', async () => {
    const { result } = renderHook(() => useAccess());
    const { request } = result.current;

    const mockRequestBundle = {
      endpoint: '/test-endpoint',
      options: {
        method: 'GET' as const,
        headers: { 'Content-Type': 'application/json' },
      },
    };

    const mockError = new Error('Test error');
    (apiRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(request(mockRequestBundle)).rejects.toThrow('Test error');
  });
});
