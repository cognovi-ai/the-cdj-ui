import { endpoints } from '../../../src/hooks/api/entryApi';
import fetch from 'cross-fetch';

const mockEntryId = '12345';

describe('Entry API Endpoints', () => {
  const mockEntryBody = {
    title: 'Test Entry',
    content: 'Test Content',
    mood: 'Happy',
    tags: ['test', 'integration'],
    privacy_settings: {
      public: true,
      shared_with: ['user123'],
    },
  };

  describe('entry endpoint', () => {
    test('generates correct RequestBundle for GET all entries', () => {
      const result = endpoints.entry('GET');

      expect(result).toEqual({
        endpoint: '/',
        options: {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: undefined,
        },
      });
    });

    test('generates correct RequestBundle for GET single entry', () => {
      const result = endpoints.entry('GET', mockEntryId);

      expect(result).toEqual({
        endpoint: `/${mockEntryId}`,
        options: {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: undefined,
        },
      });
    });

    test('generates correct RequestBundle for POST', () => {
      const result = endpoints.entry('POST', undefined, mockEntryBody);

      expect(result).toEqual({
        endpoint: '/',
        options: {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: mockEntryBody,
        },
      });
    });

    test('generates correct RequestBundle for PUT', () => {
      const result = endpoints.entry('PUT', mockEntryId, mockEntryBody);

      expect(result).toEqual({
        endpoint: `/${mockEntryId}`,
        options: {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: mockEntryBody,
        },
      });
    });

    test('generates correct RequestBundle for DELETE', () => {
      const result = endpoints.entry('DELETE', mockEntryId);

      expect(result).toEqual({
        endpoint: `/${mockEntryId}`,
        options: {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: undefined,
        },
      });
    });
  });

  describe('entryAnalysis endpoint', () => {
    const mockAnalysisBody = {
      entry: mockEntryId,
      analysis_content: 'Test analysis content',
    };

    test('generates correct RequestBundle for PUT', () => {
      const result = endpoints.entryAnalysis(
        'PUT',
        mockEntryId,
        mockAnalysisBody
      );

      expect(result).toEqual({
        endpoint: `/${mockEntryId}/analysis`,
        options: {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: mockAnalysisBody,
        },
      });
    });

    test('generates correct RequestBundle for GET', () => {
      const result = endpoints.entryAnalysis('GET', mockEntryId);

      expect(result).toEqual({
        endpoint: `/${mockEntryId}/analysis`,
        options: {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: undefined,
        },
      });
    });
  });

  describe('entryConversation endpoint', () => {
    const mockChatId = 'chat789';
    const mockConversationBody = {
      messages: [
        {
          message_content: 'Test message',
          llm_response: 'Test response',
        },
      ],
    };

    test('generates correct RequestBundle for POST without chatId', () => {
      const result = endpoints.entryConversation(
        'POST',
        mockEntryId,
        undefined,
        mockConversationBody
      );

      expect(result).toEqual({
        endpoint: `/${mockEntryId}/chat`,
        options: {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: mockConversationBody,
        },
      });
    });

    test('generates correct RequestBundle for GET with chatId', () => {
      const result = endpoints.entryConversation(
        'GET',
        mockEntryId,
        mockChatId
      );

      expect(result).toEqual({
        endpoint: `/${mockEntryId}/chat/${mockChatId}`,
        options: {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: undefined,
        },
      });
    });

    test('generates correct RequestBundle for PUT with chatId', () => {
      const result = endpoints.entryConversation(
        'PUT',
        mockEntryId,
        mockChatId,
        mockConversationBody
      );

      expect(result).toEqual({
        endpoint: `/${mockEntryId}/chat/${mockChatId}`,
        options: {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: mockConversationBody,
        },
      });
    });
  });
});

/* -------------------------------------------------------------------------- */

/*
 * TODO: Remove .skip from the describe block to run tests once the CI/CD 
 *   pipeline is set up for integration tests.
 *
 * To run integration tests locally:
 *   1. Ensure the the-cdj backend is running at http://localhost:3000
 *   2. Install the `cross-fetch` package: npm install cross-fetch
 *   3. Remove the .skip from the describe block
 *   4. Run: `npm run test entryApi`
 */

/* -------------------------------------------------------------------------- */
global.fetch = fetch;

const API_BASE_URL = 'http://localhost:3000';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('entryApi Integration Tests', () => {
  let journalId: string;
  let entryId: string;
  let cookies: string;

  const makeRequest = async (url: string, options: RequestInit) => {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Cookie: cookies,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  };

  beforeAll(async () => {
    const response = await fetch(`${API_BASE_URL}/access/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'alicej92@berkeley.edu',
        password: 'gobears!2014',
      }),
      credentials: 'include',
    });

    // Get cookies from response headers
    const setCookie = response.headers.get('set-cookie');
    if (!setCookie) {
      throw new Error('No cookies received from login');
    }
    cookies = setCookie;

    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Failed to log in: ${JSON.stringify(data)}`);
    }

    const { journalId: extractedJournalId } = data;
    journalId = extractedJournalId;
    console.log('Login successful, got journalId:', journalId);
  });

  test('should create a new entry', async () => {
    const body = {
      title: 'Content for Integration Testing',
      content: 'This is content for integration testing.',
      mood: 'Neutral',
      tags: ['testing', 'content', 'integration'],
      privacy_settings: {
        public: true,
        shared_with: ['64b7f20cd3e85b2b1c8e3f7e'],
      },
    };

    const request = endpoints.entry('POST', undefined, body);
    const response = await makeRequest(
      `${API_BASE_URL}/journals/${journalId}/entries`,
      {
        ...request.options,
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();
    console.log('Create entry response:', data);

    if (!response.ok) {
      console.error('Create entry failed:', {
        status: response.status,
        statusText: response.statusText,
        data,
        body: JSON.stringify(body),
      });
      throw new Error(`Failed to create entry: ${JSON.stringify(data)}`);
    }

    expect(data).toHaveProperty('_id');
    entryId = data._id;
    expect(data.title).toBe('Content for Integration Testing');
    expect(data.content).toBe(body.content);
    expect(data.mood).toBe('Neutral');
  });

  test('should retrieve all entries for a journal', async () => {
    const request = endpoints.entry('GET', journalId);
    const response = await makeRequest(
      `${API_BASE_URL}/journals/${journalId}/entries`,
      {
        ...request.options,
        body: request.options.body
          ? JSON.stringify(request.options.body)
          : undefined,
      }
    );

    const data = await response.json();
    console.log('Get all entries response:', data);

    if (!response.ok) {
      throw new Error(`Failed to retrieve entries: ${JSON.stringify(data)}`);
    }

    expect(Array.isArray(data.entries)).toBe(true);
    expect(data.entries.length).toBeGreaterThan(0);
  });

  test('should retrieve the created entry', async () => {
    if (!entryId) {
      console.log('Skipping test - no entry ID available');
      return;
    }

    const request = endpoints.entry('GET', entryId);
    const response = await makeRequest(
      `${API_BASE_URL}/journals/${journalId}/entries/${entryId}`,
      {
        ...request.options,
        body: request.options.body
          ? JSON.stringify(request.options.body)
          : undefined,
      }
    );

    const data = await response.json();
    console.log('Get entry response:', data);

    if (!response.ok) {
      console.error('Get entry failed:', {
        status: response.status,
        statusText: response.statusText,
        data,
        entryId,
      });
      throw new Error(`Failed to retrieve entry: ${JSON.stringify(data)}`);
    }

    expect(data).toHaveProperty('_id', entryId);
    expect(data).toHaveProperty('title');
    expect(data).toHaveProperty('content');
  });

  test('should update an entry analysis', async () => {
    if (!entryId) {
      console.log('Skipping test - no entry ID available');
      return;
    }

    const body = {
      entry: entryId,
      analysis_content: 'Updated analysis for integration testing.',
    };

    const request = endpoints.entryAnalysis('PUT', entryId, body);
    const response = await makeRequest(
      `${API_BASE_URL}/journals/${journalId}/entries/${entryId}/analysis`,
      {
        ...request.options,
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();
    console.log('Update analysis response:', data);

    if (!response.ok) {
      console.error('Update analysis failed:', {
        status: response.status,
        statusText: response.statusText,
        data,
        body: JSON.stringify(body),
      });
      throw new Error(`Failed to update analysis: ${JSON.stringify(data)}`);
    }

    expect(data._doc).toHaveProperty('analysis_content');
    expect(data.flash.success).toContain(
      'Successfully generated a new analysis.'
    );
  });

  test('should add a conversation to the entry', async () => {
    if (!entryId) {
      console.log('Skipping test - no entry ID available');
      return;
    }

    const body = {
      messages: [
        {
          message_content: 'This is a test message.',
          llm_response: 'This is an AI response.',
        },
      ],
    };

    const request = endpoints.entryConversation(
      'POST',
      entryId,
      undefined,
      body
    );
    const response = await makeRequest(
      `${API_BASE_URL}/journals/${journalId}/entries/${entryId}/chat`,
      {
        ...request.options,
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();
    console.log('Add conversation response:', data);

    if (!response.ok) {
      console.error('Add conversation failed:', {
        status: response.status,
        statusText: response.statusText,
        data,
        body: JSON.stringify(body),
      });
      throw new Error(`Failed to add conversation: ${JSON.stringify(data)}`);
    }

    expect(data).toHaveProperty('messages');
    expect(data.messages[0]).toHaveProperty(
      'message_content',
      'This is a test message.'
    );
  });

  afterAll(async () => {
    if (!entryId) {
      console.log('No entry to delete - skipping cleanup');
      return;
    }

    const request = endpoints.entry('DELETE', entryId);
    const response = await makeRequest(
      `${API_BASE_URL}/journals/${journalId}/entries/${entryId}`,
      {
        ...request.options,
        body: request.options.body
          ? JSON.stringify(request.options.body)
          : undefined,
      }
    );

    const data = await response.json();
    console.log('Delete entry response:', data);

    if (!response.ok) {
      console.error('Delete entry failed:', {
        status: response.status,
        statusText: response.statusText,
        data,
        entryId,
      });
      throw new Error(`Failed to delete entry: ${JSON.stringify(data)}`);
    }

    expect(data.flash.success).toContain('Successfully deleted entry.');
  });
});
