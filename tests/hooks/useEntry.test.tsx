import { FlashContext } from '../../src/contexts/FlashContext';
import React from 'react';
import { ReactNode } from 'react';
import { apiRequest } from '../../src/hooks/apiRequest';
import { renderHook } from '@testing-library/react';
import { useEntry } from '../../src/hooks/useEntry';

jest.mock('../../src/hooks/apiRequest', () => ({
  apiRequest: jest.fn(),
}));

describe('useEntry Hook', () => {
  const mockJournalId = '12345';
  const processFlash = jest.fn();

  const wrapper = ({ children }: { children: ReactNode }) => (
    <FlashContext.Provider value={{ flash: { type: 'info', message: '' }, setFlash: jest.fn(), clearFlash: jest.fn(), processFlash }}>{children}</FlashContext.Provider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('throws error when journalId is not provided', () => {
    expect(() => {
      renderHook(() => useEntry(''), { wrapper });
    }).toThrow('journalId is required to use useEntry.');
  });

  test('request calls apiRequest with correct parameters', async () => {
    const { result } = renderHook(() => useEntry(mockJournalId), { wrapper });
    const { request } = result.current;

    const mockRequestBundle = {
      endpoint: '/test-endpoint',
      options: {
        method: 'GET' as const,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include' as RequestCredentials,
      },
    };

    const mockResponse = { data: 'test' };
    (apiRequest as jest.Mock).mockResolvedValue(mockResponse);

    const response = await request(mockRequestBundle);

    expect(apiRequest).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_ENTRY_BASE_URL}/${mockJournalId}/entries/test-endpoint`,
      mockRequestBundle.options
    );
    expect(response).toEqual(mockResponse);
  });

  test('request handles errors correctly and triggers processFlash', async () => {
    const { result } = renderHook(() => useEntry(mockJournalId), { wrapper });
    const { request } = result.current;

    const mockRequestBundle = {
      endpoint: '/test-endpoint',
      options: {
        method: 'GET' as const,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include' as RequestCredentials,
      },
    };

    const mockError = new Error(JSON.stringify({ flash: { error: ['Test API error'] } }));
    (apiRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(request(mockRequestBundle)).rejects.toThrow(mockError);
    expect(processFlash).toHaveBeenCalledWith({ flash: { error: ['Test API error'] } });
  });

  test('processFlash is triggered when response contains flash message', async () => {
    const { result } = renderHook(() => useEntry(mockJournalId), { wrapper });
    const { request } = result.current;

    const mockResponse = { data: 'test', flash: { success: ['Success message'] } };
    (apiRequest as jest.Mock).mockResolvedValue(mockResponse);

    await request({ endpoint: '/flash-test', options: {
      method: 'GET',
      headers: {}
    } });

    expect(processFlash).toHaveBeenCalledWith(mockResponse);
  });

  test('request constructs URLs correctly with different endpoints', async () => {
    const { result } = renderHook(() => useEntry(mockJournalId), { wrapper });
    const { request } = result.current;

    const mockResponse = { data: 'test' };
    (apiRequest as jest.Mock).mockResolvedValue(mockResponse);

    const mockOptions = {
      method: 'GET' as const,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include' as RequestCredentials,
    };

    await request({ endpoint: '/test', options: mockOptions });
    expect(apiRequest).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_ENTRY_BASE_URL}/${mockJournalId}/entries/test`,
      mockOptions
    );

    await request({ endpoint: '/', options: mockOptions });
    expect(apiRequest).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_ENTRY_BASE_URL}/${mockJournalId}/entries/`,
      mockOptions
    );
  });
});