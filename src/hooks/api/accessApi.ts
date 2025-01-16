import { Method } from '../apiRequest';
import { RequestBundle } from '../useAccess';

/**
 * Main API interface defining all available endpoint methods
 *
 * @interface Api
 */
interface Api {
  /**
   * Manages journal operations
   *
   * @param method - HTTP method to be used
   * @param journalId - Unique identifier for the journal
   * @param body - Optional journal data
   * @returns {RequestBundle} Bundle containing endpoint and request options
   */
  journal: (
    method: Method,
    journalId: string,
    body?: JournalBody
  ) => RequestBundle;

  /**
   * Manages account operations
   *
   * @param method - HTTP method to be used
   * @param journalId - Unique identifier for the journal context
   * @param body - Account data to be processed
   * @returns {RequestBundle} Bundle containing endpoint and request options
   */
  account: (
    method: Method,
    journalId: string,
    body: AccountBody
  ) => RequestBundle;

  /**
   * Handles user login
   *
   * @param body - Login credentials
   * @returns {RequestBundle} Bundle containing endpoint and request options
   */
  login: (body: LoginBody) => RequestBundle;

  /**
   * Handles token-based login
   *
   * @param body - Token login data
   * @returns {RequestBundle} Bundle containing endpoint and request options
   */
  'token-login': (body: TokenLoginBody) => RequestBundle;

  /**
   * Initiates password recovery process
   *
   * @param body - Email information for password recovery
   * @returns {RequestBundle} Bundle containing endpoint and request options
   */
  'forgot-password': (body: ForgotPasswordBody) => RequestBundle;

  /**
   * Handles password reset
   *
   * @param body - New password and reset token
   * @returns {RequestBundle} Bundle containing endpoint and request options
   */
  'reset-password': (body: ResetPasswordBody) => RequestBundle;

  /**
   * Handles user logout
   *
   * @returns {RequestBundle} Bundle containing endpoint and request options
   */
  logout: () => RequestBundle;

  /**
   * Handles user registration
   *
   * @param body - Registration information
   * @returns {RequestBundle} Bundle containing endpoint and request options
   */
  register: (body: RegisterBody) => RequestBundle;
}

/**
 * Represents the body of a login request.
 *
 * @property email - The email address of the user.
 * @property password - The password of the user.
 * @property remember - Whether the user's session should be remembered.
 */
export interface LoginBody extends Record<string, unknown> {
  email: string;
  password: string;
  remember: boolean;
}

/**
 * Represents the body of a token-based login request.
 *
 * @property token - The token used for authentication.
 */
export interface TokenLoginBody extends Record<string, unknown> {
  token: string;
}

/**
 * Represents the body of an account update request.
 *
 * @property profile - Profile details of the user.
 * @property profile.fname - First name of the user.
 * @property profile.lname - Last name of the user.
 * @property profile.email - Email address of the user.
 * @property password - Password details of the user.
 * @property password.oldPassword - The current password of the user.
 * @property password.newPassword - The new password of the user.
 * @property config - Configuration settings.
 * @property config.model.chat - Chat model configuration.
 * @property config.model.analysis - Analysis model configuration.
 */
interface AccountBody extends Record<string, unknown> {
  profile: {
    fname: string;
    lname: string;
    email: string;
  };
  password: {
    oldPassword: string;
    newPassword: string;
  };
  config: {
    model: {
      chat: string;
      analysis: string;
    };
  };
}

/**
 * Represents the body of a user registration request.
 *
 * @property fname - First name of the user.
 * @property lname - Last name of the user.
 * @property email - Email address of the user.
 * @property password - The password for the new account.
 */
export interface RegisterBody extends Record<string, unknown> {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

/**
 * Represents the body of a forgot password request.
 *
 * @property email - The email address of the user requesting password recovery.
 */
export interface ForgotPasswordBody extends Record<string, unknown> {
  email: string;
}

/**
 * Represents the body of a reset password request.
 *
 * @property newPassword - The new password for the user's account.
 * @property token - The token used to authorize the password reset.
 */
export interface ResetPasswordBody extends Record<string, unknown> {
  newPassword: string;
  token: string;
}

/**
 * Represents the body of a journal entry.
 *
 * @property title - The title of the journal entry (optional).
 * @property description - The description or content of the journal entry
 * (optional).
 */
export interface JournalBody extends Record<string, unknown> {
  title?: string;
  description?: string;
}

/**
 * Creates a request bundle for user login
 *
 * @param body - Login credentials and preferences
 * @returns {RequestBundle} Bundle containing endpoint and request options
 */
const login = (body: LoginBody): RequestBundle => {
  return {
    endpoint: '/login',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    },
  };
};

/**
 * Creates a request bundle for token-based login
 *
 * @param body - Token login data
 * @returns {RequestBundle} Bundle containing endpoint and request options
 */
const tokenLogin = (body: TokenLoginBody): RequestBundle => {
  return {
    endpoint: '/token-login',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    },
  };
};

/**
 * Creates a request bundle for user registration
 *
 * @param body - User registration information
 * @returns {RequestBundle} Bundle containing endpoint and request options
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
 *
 * @param method - HTTP method to be used
 * @param journalId - Unique identifier for the journal
 * @param body - Optional journal data
 * @returns {RequestBundle} Bundle containing endpoint and request options
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
 *
 * @param method - HTTP method to be used
 * @param journalId - Unique identifier for the journal context
 * @param body - Account data to be processed
 * @throws {Error} When journal ID is not provided
 * @returns {RequestBundle} Bundle containing endpoint and request options
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
 *
 * @param body - User's email information
 * @returns {RequestBundle} Bundle containing endpoint and request options
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
 *
 * @param body - New password and reset token
 * @returns {RequestBundle} Bundle containing endpoint and request options
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
 *
 * @returns {RequestBundle} Bundle containing endpoint and request options
 */
const logout = (): RequestBundle => {
  return {
    endpoint: '/logout',
    options: {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
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
