import { Method, RequestBundle } from '../apiRequest';

/**
 * API interface defining all available endpoint methods
 */
interface Api {
  /**
   * Manages journal operations
   * @param method - HTTP method to be used
   * @param journalId - Unique identifier for the journal
   * @param body - Optional journal data
   * @returns A bundle containing endpoint and request options
   */
  journal: (
    method: Method,
    journalId: string,
    body?: JournalBody
  ) => RequestBundle;

  /**
   * Manages account operations
   * @param method - HTTP method to be used
   * @param journalId - Unique identifier for the journal context
   * @param body - Account data to be processed
   * @returns A bundle containing endpoint and request options
   */
  account: (
    method: Method,
    journalId: string,
    body: AccountBody
  ) => RequestBundle;

  /**
   * Handles user login
   * @param body - Login credentials
   * @returns A bundle containing endpoint and request options
   */
  login: (body: LoginBody) => RequestBundle;

  /**
   * Handles token-based login
   * @param body - Token login data
   * @returns A bundle containing endpoint and request options
   */
  'token-login': (body: TokenLoginBody) => RequestBundle;

  /**
   * Initiates password recovery process
   * @param body - Email information for password recovery
   * @returns A bundle containing endpoint and request options
   */
  'forgot-password': (body: ForgotPasswordBody) => RequestBundle;

  /**
   * Handles password reset
   * @param body - New password and reset token
   * @returns A bundle containing endpoint and request options
   */
  'reset-password': (body: ResetPasswordBody) => RequestBundle;

  /**
   * Handles user logout
   * @returns A bundle containing endpoint and request options
   * @param connectSid - The session ID cookie.
   */
  logout: ( connectSid?: string) => RequestBundle;
  
  /**
   * Handles user registration
   * @param body - Registration information
   * @returns A bundle containing endpoint and request options
   */
  register: (body: RegisterBody) => RequestBundle;
}

/**
 * Represents the body of a login request.
 * @typeParam email - The email address of the user.
 * @typeParam password - The password of the user.
 * @typeParam remember - Whether the user's session should be remembered.
 */
export interface LoginBody extends Record<string, unknown> {
  email: string;
  password: string;
  remember: boolean;
}

/**
 * Represents the body of a token-based login request.
 * @typeParam token - The token used for authentication.
 */
export interface TokenLoginBody extends Record<string, unknown> {
  token: string;
}

/**
 * Represents the body of an account update request.
 * @typeParam profile - Profile details of the user.
 * @typeParam password - Password details of the user.
 * @typeParam config - Configuration settings.
 */
interface AccountBody extends Record<string, unknown> {
  /**
   * @typeParam fname - First name of the user.
   * @typeParam lname - Last name of the user.
   * @typeParam email - Email address of the user.
   */
  profile: {
    fname: string;
    lname: string;
    email: string;
  };
  /**
   * @typeParam oldPassword - The current password of the user.
   * @typeParam newPassword - The new password of the user.
   */
  password: {
    oldPassword: string;
    newPassword: string;
  };
  /**
   * @typeParam model - Model settings for the user.
   */
  config: {
    /**
     * @typeParam chat - Chat model option.
     * @typeParam analysis - Analysis model option.
     */
    model: {
      chat: string;
      analysis: string;
    };
  };
}

/**
 * Represents the body of a user registration request.
 * @typeParam fname - First name of the user.
 * @typeParam lname - Last name of the user.
 * @typeParam email - Email address of the user.
 * @typeParam password - The password for the new account.
 */
export interface RegisterBody extends Record<string, unknown> {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

/**
 * Represents the body of a forgot password request.
 * @typeParam email - The email address of the user requesting password recovery.
 */
export interface ForgotPasswordBody extends Record<string, unknown> {
  email: string;
}

/**
 * Represents the body of a reset password request.
 * @typeParam newPassword - The new password for the user's account.
 * @typeParam token - The token used to authorize the password reset.
 */
export interface ResetPasswordBody extends Record<string, unknown> {
  newPassword: string;
  token: string;
}

/**
 * Represents the body of a journal entry.
 * @typeParam title - The title of the journal entry (optional).
 * @typeParam description - The description or content of the journal entry
 * (optional).
 */
export interface JournalBody extends Record<string, unknown> {
  title?: string;
  description?: string;
}

export interface FlashMessage {
  success?: string[];
  info?: string[];
  error?: string[];
}

/**
 * Represents the response from a login request.
 * @typeParam flash - Flash message to be displayed.
 * @typeParam journalId - Unique identifier for the user's journal.
 * @typeParam journalTitle - Title of the user's journal.
 */
export interface LoginResponse {
  flash?: FlashMessage;
  journalId?: string;
  journalTitle?: string;
  token?: string;
}

/**
 * Represents the response from a registration request.
 * @typeParam flash - Flash message to be displayed.
 * @typeParam journalId - Unique identifier for the user's journal.
 * @typeParam journalTitle - Title of the user's journal.
 */
export interface RegisterResponse {
  flash?: FlashMessage;
  journalId?: string;
  journalTitle?: string;
}

/**
 * Represents the response from a logout request.
 * @typeParam message - The message returned from the server.
 * @typeParam flash - Flash message to be displayed.
 */
export interface LogoutResponse {
  message: string;
  flash?: FlashMessage;
}

/**
 * Represents the response from a password reset request.
 * @typeParam flash - Flash message to be displayed.
 */
export interface ResetPasswordResponse {
  flash?: FlashMessage;
}

/**
 * Represents the response from a password recovery request.
 * @typeParam flash - Flash message to be displayed.
 */
export interface ForgotPasswordResponse {
  flash?: FlashMessage;
}

/**
 * Creates a request bundle for user login
 * @param body - Login credentials and preferences
 * @returns A bundle containing endpoint and request options
 */
const login = (body: LoginBody): RequestBundle => {
  return {
    endpoint: '/login',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body,
    },
  };
};

/**
 * Creates a request bundle for token-based login
 * @param body - Token login data
 * @returns A bundle containing endpoint and request options
 */
const tokenLogin = (body: TokenLoginBody): RequestBundle => {
  const { token } = body; // Extract the token from the body

  return {
    endpoint: '/token-login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body,
    },
  };
};

/**
 * Creates a request bundle for user registration
 * @param body - User registration information
 * @returns A bundle containing endpoint and request options
 */
const register = (body: RegisterBody): RequestBundle => {
  return {
    endpoint: '/register',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    },
  };
};

/**
 * Creates a request bundle for journal operations
 * @param method - HTTP method to be used
 * @param journalId - Unique identifier for the journal
 * @param body - Optional journal data
 * @returns A bundle containing endpoint and request options
 */
const journal = (
  method: Method,
  journalId: string,
  body?: JournalBody
): RequestBundle => {
  const endpoint = `/${journalId}`;
  return {
    endpoint,
    options: {
      method,
      headers: { 'Content-Type': 'application/json' },
      body,
    },
  };
};

/**
 * Creates a request bundle for account operations
 * @param method - HTTP method to be used
 * @param journalId - Unique identifier for the journal context
 * @param body - Account data to be processed
 * @throws an error if the journal ID is not provided
 * @returns A bundle containing endpoint and request options
 */
const account = (
  method: Method,
  journalId: string,
  body: AccountBody
): RequestBundle => {
  if (!journalId) {
    throw new Error('Journal ID is required but not provided.');
  }

  return {
    endpoint: `/${journalId}/account`,
    options: {
      method,
      headers: { 'Content-Type': 'application/json' },
      body,
    },
  };
};

/**
 * Creates a request bundle for password recovery initiation
 * @param body - User's email information
 * @returns A bundle containing endpoint and request options
 */
const forgotPassword = (body: ForgotPasswordBody): RequestBundle => {
  return {
    endpoint: '/forgot-password',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    },
  };
};

/**
 * Creates a request bundle for password reset
 * @param body - New password and reset token
 * @returns A bundle containing endpoint and request options
 */
const resetPassword = (body: ResetPasswordBody): RequestBundle => {
  return {
    endpoint: '/reset-password',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    },
  };
};

/**
 * Creates a request bundle for user logout
 * @returns A bundle containing endpoint and request options
 */
const logout = ( connectSid?: string): RequestBundle => {
  return {
    endpoint: '/logout',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(connectSid && { Cookie: `connect.sid=${connectSid}` }),
      },
      credentials: 'include'
    },
  };
};

/**
 * Object containing all available API endpoints for the components to
 * reference.
 */
export const endpoints: Api = {
  journal,
  account,
  login,
  'token-login': tokenLogin,
  'forgot-password': forgotPassword,
  'reset-password': resetPassword,
  logout,
  register,
};
