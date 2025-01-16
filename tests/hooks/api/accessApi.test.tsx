import { endpoints } from '../../../src/hooks/api/accessApi';

const mockJournalId = '12345';
const mockAccountBody = {
  profile: {
    fname: 'John',
    lname: 'Doe',
    email: 'john.doe@example.com',
  },
  password: {
    oldPassword: 'old-password',
    newPassword: 'new-password',
  },
  config: {
    model: {
      chat: 'gpt-4',
      analysis: 'default',
    },
  },
};

describe('API Endpoints', () => {
  test('login generates correct RequestBundle', () => {
    const body = {
      email: 'test@example.com',
      password: 'password',
      remember: true,
    };
    const result = endpoints.login(body);

    expect(result).toEqual({
      endpoint: '/login',
      options: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      },
    });
  });

  test('token-login generates correct RequestBundle', () => {
    const body = { token: 'test-token' };
    const result = endpoints['token-login'](body);

    expect(result).toEqual({
      endpoint: '/token-login',
      options: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      },
    });
  });

  test('register generates correct RequestBundle', () => {
    const body = {
      fname: 'John',
      lname: 'Doe',
      email: 'john.doe@example.com',
      password: 'password',
    };
    const result = endpoints.register(body);

    expect(result).toEqual({
      endpoint: '/register',
      options: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      },
    });
  });

  test('journal generates correct RequestBundle', () => {
    const method = 'POST';
    const body = { title: 'Journal Title', description: 'Description' };
    const result = endpoints.journal(method, mockJournalId, body);

    expect(result).toEqual({
      endpoint: `/${mockJournalId}`,
      options: {
        method,
        headers: { 'Content-Type': 'application/json' },
        body,
      },
    });
  });

  test('account generates correct RequestBundle', () => {
    const method = 'PUT';
    const result = endpoints.account(method, mockJournalId, mockAccountBody);

    expect(result).toEqual({
      endpoint: `/${mockJournalId}/account`,
      options: {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: mockAccountBody,
      },
    });
  });

  test('forgot-password generates correct RequestBundle', () => {
    const body = { email: 'forgot@example.com' };
    const result = endpoints['forgot-password'](body);

    expect(result).toEqual({
      endpoint: '/forgot-password',
      options: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      },
    });
  });

  test('reset-password generates correct RequestBundle', () => {
    const body = { newPassword: 'new-password', token: 'reset-token' };
    const result = endpoints['reset-password'](body);

    expect(result).toEqual({
      endpoint: '/reset-password',
      options: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      },
    });
  });

  test('logout generates correct RequestBundle', () => {
    const result = endpoints.logout();

    expect(result).toEqual({
      endpoint: '/logout',
      options: {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      },
    });
  });

  test('account throws an error when journalId is missing', () => {
    const method = 'PUT';
    expect(() => endpoints.account(method, '', mockAccountBody)).toThrow(
      'Journal ID is required but not provided.'
    );
  });
});
