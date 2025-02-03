import { NextRequest, NextResponse } from 'next/server';
import { endpoints } from './hooks/api/accessApi';
import { useAccess } from './hooks/useAccess';

/**
 * Middleware to handle authentication and route access control.
 * Redirects users based on their authentication status and requested route.
 * @param req - The incoming request object from Next.js.
 * @returns A NextResponse to proceed, redirect, or modify cookies.
 */
export async function middleware(req: NextRequest) {
  const { request } = useAccess();
  const token = req.cookies.get('authToken')?.value;
  const connectSid = req.cookies.get('connect.sid')?.value;
  const currentPath = req.nextUrl.pathname;

  const isLoginRoute = currentPath === '/login';
  const isRootRoute = currentPath === '/';
  const isIndexRoute = currentPath === '/index';

  /**
   * Clears authentication-related cookies.
   * @param res - The response object to clear cookies on.
   */
  const clearCookies = (res: NextResponse) => {
    res.cookies.set('authToken', '', { maxAge: -1 });
    res.cookies.set('connect.sid', '', { maxAge: -1 });
  };

  /**
   * Redirects the user to the login page after clearing cookies and handling logout.
   * @returns A redirect response to the login page.
   */
  const redirectToLogin = async () => {
    if (token || connectSid) {
      try {
        await request(endpoints.logout(connectSid));
      } catch {
        console.info('Session already invalid. Skipping logout.');
      }
    } else {
      console.info('No session tokens found. Skipping logout request.');
    }

    const res = NextResponse.redirect(new URL('/login', req.url));
    clearCookies(res);
    return res;
  };

  /**
   * Authenticates the user based on the token stored in cookies.
   * @returns The authentication response if successful, or null otherwise.
   */
  const authenticateToken = async () => {
    if (token) {
      try {
        const response = await request(endpoints['token-login']({ token }));
        return response;
      } catch {
        return null;
      }
    }
    return null;
  };

  if (isLoginRoute) {
    const response = await authenticateToken();
    if (response) {
      return NextResponse.redirect(new URL('/index', req.url));
    }
    const res = NextResponse.next();
    res.cookies.delete('connect.sid');
    return res;
  }

  if (isRootRoute) {
    const response = await authenticateToken();
    return response
      ? NextResponse.redirect(new URL('/index', req.url))
      : redirectToLogin();
  }

  if (isIndexRoute) {
    const response = await authenticateToken();
    const referer = req.headers.get('referer');
    const cameFromLogin = referer && referer.includes('/login');
  
    if (response) {
      return NextResponse.next();
    }
  
    if (!token && connectSid) {
      if (cameFromLogin) {
        return NextResponse.next();
      } else {
        return redirectToLogin();
      }
    }
  
    return redirectToLogin();
  }

  return NextResponse.next();
}

/**
 * Configuration for Next.js middleware to match specific routes.
 */
export const config = {
  matcher: ['/', '/index', '/login'],
};