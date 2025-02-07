import { FlashContext, FlashContextType } from '../../src/contexts/FlashContext';
import { act, renderHook } from '@testing-library/react';
import React from 'react';
import { apiRequest } from '../../src/hooks/apiRequest';
import { useAccess } from '../../src/hooks/useAccess';

jest.mock('../../src/hooks/apiRequest', () => ({
  apiRequest: jest.fn(),
}));

describe('useAccess Hook', () => {
  const mockProcessFlash = jest.fn();
  const mockFlashContextValue: FlashContextType = {
    flash: { message: '', type: 'info' },
    setFlash: jest.fn(),
    clearFlash: jest.fn(),
    processFlash: mockProcessFlash,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.NEXT_PUBLIC_ACCESS_BASE_URL = 'https://mock-api.com';
  });

  // Wrapper to provide FlashContext
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <FlashContext.Provider value={mockFlashContextValue}>
      {children}
    </FlashContext.Provider>
  );

  test('request calls apiRequest with correct parameters', async () => {
    const { result } = renderHook(() => useAccess(), { wrapper });
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

    const response = await act(async () => request(mockRequestBundle));

    expect(apiRequest).toHaveBeenCalledWith(
      'https://mock-api.com/test-endpoint',
      mockRequestBundle.options
    );
    expect(response).toEqual(mockResponse);
  });

  test('request handles API errors correctly and calls processFlash', async () => {
    const { result } = renderHook(() => useAccess(), { wrapper });
    const { request } = result.current;

    const mockRequestBundle = {
      endpoint: '/test-endpoint',
      options: {
        method: 'GET' as const,
        headers: { 'Content-Type': 'application/json' },
      },
    };

    const mockErrorResponse = JSON.stringify({ flash: { error: ['API failure'] } });
    (apiRequest as jest.Mock).mockRejectedValue(new Error(mockErrorResponse));

    await act(async () => {
      await expect(request(mockRequestBundle)).rejects.toThrow();
    });

    expect(mockProcessFlash).toHaveBeenCalledWith({ flash: { error: ['API failure'] } });
  });

  test('request handles unexpected errors correctly and calls processFlash', async () => {
    const { result } = renderHook(() => useAccess(), { wrapper });
    const { request } = result.current;

    const mockRequestBundle = {
      endpoint: '/test-endpoint',
      options: {
        method: 'GET' as const,
        headers: { 'Content-Type': 'application/json' },
      },
    };

    const mockError = new Error('Unexpected error');
    (apiRequest as jest.Mock).mockRejectedValue(mockError);

    await act(async () => {
      await expect(request(mockRequestBundle)).rejects.toThrow('Unexpected error');
    });

    expect(mockProcessFlash).toHaveBeenCalledWith({ flash: { error: ['An unexpected error occurred.'] } });
  });
});