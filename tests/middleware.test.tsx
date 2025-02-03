import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { endpoints } from '../src/hooks/api/accessApi';
import { middleware } from '../src/middleware';
import { useAccess } from '../src/hooks/useAccess';


jest.mock('next/server', () => ({
  NextResponse: {
    redirect: jest.fn((url) => ({
      type: 'redirect',
      url,
      cookies: {
        delete: jest.fn(),
        set: jest.fn(),
      },
    })),
    next: jest.fn(() => ({
      type: 'next',
      cookies: {
        delete: jest.fn(),
        set: jest.fn(),
      },
    })),
  },
}));

jest.mock('../src/hooks/useAccess', () => ({
  useAccess: jest.fn(),
}));

jest.mock('../src/hooks/api/accessApi', () => ({
  endpoints: {
    'token-login': jest.fn(),
    logout: jest.fn(),
  },
}));

const MOCK_VALID_TOKEN = 'validToken123';
const MOCK_INVALID_TOKEN = 'invalidToken456';
const MOCK_SESSION_ID = 'sessionID789';

const createMockRequest = (pathname, cookies = {}, referer = ''): NextRequest => {
  return {
    nextUrl: { pathname },
    cookies: {
      get: (key) => (cookies[key] ? { value: cookies[key] } : undefined),
      delete: jest.fn(),
    },
    headers: {
      get: (header) => (header === 'referer' ? referer : null),
    },
    url: `http://localhost${pathname}`,
    geo: {},
    ip: '',
    page: { name: '', params: {} },
    ua: '',
    body: null,
    method: 'GET',
    signal: new AbortController().signal,
    clone: jest.fn(),
  } as unknown as NextRequest;
};

describe('Middleware Tests', () => {
  let requestMock;

  beforeEach(() => {
    jest.clearAllMocks();

    requestMock = jest.fn();
    (useAccess as jest.Mock).mockReturnValue({ request: requestMock });

    (endpoints['token-login'] as jest.Mock).mockImplementation(({ token }) => ({
      method: 'POST',
      url: '/api/token-login',
      headers: { Authorization: `Bearer ${token}` },
    }));
  });
  test('Redirects to /login when no token or connect.sid is present on root path', async () => {
    const req = createMockRequest('/', {});
  
    const res = await middleware(req);
  
    expect(NextResponse.redirect).toHaveBeenCalledWith(new URL('/login', req.url));
    expect(res.type).toBe('redirect');
  
    // Updated cookie clearing assertions
    expect(res.cookies.set).toHaveBeenCalledWith('authToken', '', { maxAge: -1 });
    expect(res.cookies.set).toHaveBeenCalledWith('connect.sid', '', { maxAge: -1 });
  });

  test('Redirects to /index when valid token is present on /login', async () => {
    requestMock.mockResolvedValueOnce(true);
    const req = createMockRequest('/login', { authToken: MOCK_VALID_TOKEN });

    const res = await middleware(req);

    expect(NextResponse.redirect).toHaveBeenCalledWith(new URL('/index', req.url));
    expect(res.type).toBe('redirect');
  });

  test('Allows access to /index if connect.sid exists and referer is /login (session login)', async () => {
    const req = createMockRequest('/index', { 'connect.sid': MOCK_SESSION_ID }, 'http://localhost/login');

    const res = await middleware(req);

    expect(NextResponse.next).toHaveBeenCalled();
    expect(res.type).toBe('next');
  });

  test('Redirects to /login if connect.sid exists but no referer (refresh case)', async () => {
    const req = createMockRequest('/index', { 'connect.sid': MOCK_SESSION_ID });

    const res = await middleware(req);

    expect(NextResponse.redirect).toHaveBeenCalledWith(new URL('/login', req.url));
    expect(res.type).toBe('redirect');
  });

  test('Proceeds normally when on /login without token', async () => {
    const req = createMockRequest('/login', {});

    const res = await middleware(req);

    expect(NextResponse.next).toHaveBeenCalled();
    expect(res.type).toBe('next');
    expect(res.cookies.delete).toHaveBeenCalledWith('connect.sid');
  });

  test('Calls token-login endpoint and proceeds on valid token at /index', async () => {
    requestMock.mockResolvedValueOnce(true);
    const req = createMockRequest('/index', { authToken: MOCK_VALID_TOKEN });

    const res = await middleware(req);

    expect(requestMock).toHaveBeenCalledTimes(1);
    expect(NextResponse.next).toHaveBeenCalled();
    expect(res.type).toBe('next');
  });

  test('Redirects to /login if token-login fails at /index', async () => {
    requestMock.mockResolvedValueOnce(null); // Simulate token-login failure
  
    const req = createMockRequest('/index', { authToken: MOCK_INVALID_TOKEN });
  
    const res = await middleware(req);
  
    // Adjusted expectation to account for both token-login and logout requests
    expect(requestMock).toHaveBeenCalledTimes(2);
  
    expect(NextResponse.redirect).toHaveBeenCalledWith(new URL('/login', req.url));
    expect(res.type).toBe('redirect');
  });

  test('Proceeds normally when hitting an unspecified route', async () => {
    const req = createMockRequest('/other-route', {});

    const res = await middleware(req);

    expect(NextResponse.next).toHaveBeenCalled();
    expect(res.type).toBe('next');
  });
});
