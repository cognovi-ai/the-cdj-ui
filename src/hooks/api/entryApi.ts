import { Method, RequestBundle } from '../apiRequest';

/**
 * Represents the privacy settings for an entry.
 * @typeParam public - Indicates whether the entry is public.
 * @typeParam shared_with - List of users the entry is shared with.
 */
interface PrivacySettings {
  public: boolean;
  shared_with: string[];
}

/**
 * Represents flash messages returned from the server.
 * @typeParam success - Array of success messages.
 * @typeParam info - Array of informational messages.
 * @typeParam error - Array of error messages.
 */
interface FlashMessage {
  success?: string[];
  info?: string[];
  error?: string[];
}

/**
 * Represents the body of an entry request.
 * @typeParam title - Title of the entry.
 * @typeParam content - Content of the entry.
 * @typeParam mood - Mood associated with the entry.
 * @typeParam tags - Tags associated with the entry.
 * @typeParam privacy_settings - Privacy settings for the entry.
 */
export interface EntryBody extends Record<string, unknown> {
  title: string;
  content: string;
  mood: string;
  tags: string[];
  privacy_settings: PrivacySettings;
}

/**
 * Represents the response structure for an entry from the server.
 * @typeParam _id - Unique identifier for the entry.
 * @typeParam journal - Associated journal ID.
 * @typeParam title - Title of the entry.
 * @typeParam content - Content of the entry.
 * @typeParam mood - Mood associated with the entry.
 * @typeParam tags - Tags associated with the entry.
 * @typeParam privacy_settings - Privacy settings for the entry.
 * @typeParam created_at - Timestamp of entry creation.
 * @typeParam updated_at - Timestamp of last update.
 * @typeParam analysis - Optional analysis data related to the entry.
 * @typeParam __v - Version key for the document.
 * @typeParam flash - Optional flash messages.
 */
export interface EntryResponse extends Record<string, unknown> {
  _id: string;
  journal: string;
  title: string;
  content: string;
  mood: string;
  tags: string[];
  privacy_settings: PrivacySettings;
  created_at: string;
  updated_at: string;
  analysis?:
    | string
    | {
      _id: string;
      entry: string;
      analysis_content: string;
      created_at: string;
      updated_at: string;
      __v: number;
    };
  __v: number;
  flash?: FlashMessage;
}

/**
 * Represents the response structure for fetching all entries.
 * @typeParam entries - Array of entries.
 * @typeParam flash - Optional flash messages.
 */
export interface GetAllEntriesResponse extends Record<string, unknown> {
  entries: EntryResponse[];
  flash?: FlashMessage;
}

/**
 * Represents the body of an entry analysis request.
 * @typeParam entry - Entry ID to be analyzed.
 * @typeParam analysis_content - Content of the analysis.
 */
export interface EntryAnalysisBody extends Record<string, unknown> {
  entry: string;
  analysis_content: string;
}

/**
 * Represents the response structure for an entry analysis from the server.
 * @typeParam _doc - Document data for the analysis.
 * @typeParam entry - Optional associated entry.
 * @typeParam flash - Optional flash messages.
 */
export interface EntryAnalysisResponse extends Record<string, unknown> {
  _doc: {
    _id: string;
    entry: string;
    analysis_content: string;
    created_at: string;
    updated_at: string;
    __v: number;
  };
  entry?: EntryResponse;
  flash?: FlashMessage;
}

/**
 * Represents a message in a conversation.
 * @typeParam message_content - Content of the message.
 * @typeParam llm_response - Optional response from the LLM.
 */
interface Message extends Record<string, unknown> {
  message_content: string;
  llm_response?: string;
}

/**
 * Represents the body of an entry conversation request.
 * @typeParam messages - Array of messages in the conversation.
 */
export interface EntryConversationRequestBody extends Record<string, unknown> {
  messages: Message[];
}

/**
 * Represents the response structure for an entry conversation from the server.
 * @typeParam _id - Unique identifier for the conversation.
 * @typeParam entry - Associated entry ID.
 * @typeParam messages - Array of messages with metadata.
 * @typeParam __v - Version key for the document.
 * @typeParam flash - Optional flash messages.
 */
export interface EntryConversationResponse extends Record<string, unknown> {
  _id: string;
  entry: string;
  messages: Array<
    Message & {
      _id: string;
      created_at: string;
    }
  >;
  __v: number;
  flash?: FlashMessage;
}

interface Api {

  /**
   * 
   * @param method - HTTP method to be used
   * @param entryId - Unique identifier for the entry
   * @param body - Entry body
   * @returns 
   */
  entry: (method: Method, entryId?: string, body?: EntryBody) => RequestBundle;

  /**
   * 
   * @param method - HTTP method to be used
   * @param entryId - Unique identifier for the entry
   * @param body - Entry analysis body
   * @returns 
   */
  entryAnalysis: (
    method: Method,
    entryId: string,
    body?: EntryAnalysisBody
  ) => RequestBundle;

  /**
   * 
   * @param method - HTTP method to be used
   * @param entryId - Unique identifier for the entry
   * @param chatId - Unique identifier for the chat
   * @param body - Entry conversation body
   * @returns 
   */
  entryConversation: (
    method: Method,
    entryId: string,
    chatId?: string,
    body?: EntryConversationRequestBody
  ) => RequestBundle;
}

/**
 * 
 * @param method - HTTP method to be used
 * @param entryId - Unique identifier for the entry
 * @param body - Entry body
 * @returns A bundle containing endpoint and request options
 */
const entry = (
  method: Method,
  entryId?: string,
  body?: EntryBody
): RequestBundle => {
  const endpoint = entryId ? `/${entryId}` : '/';
  return {
    endpoint,
    options: {
      method,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body,
    },
  };
};

/**
 * 
 * @param method - HTTP method to be used
 * @param entryId - Unique identifier for the entry
 * @param body - Entry analysis body
 * @returns A bundle containing endpoint and request options
 */
const entryAnalysis = (
  method: Method,
  entryId: string,
  body?: EntryAnalysisBody
): RequestBundle => {
  const endpoint = `/${entryId}/analysis`;
  return {
    endpoint,
    options: {
      method,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body,
    },
  };
};

/**
 * 
 * @param method - HTTP method to be used
 * @param entryId - Unique identifier for the entry
 * @param chatId - Unique identifier for the chat
 * @param body - Entry conversation body
 * @returns A bundle containing endpoint and request options
 */
const entryConversation = (
  method: Method,
  entryId: string,
  chatId?: string,
  body?: EntryConversationRequestBody
): RequestBundle => {
  const endpoint = chatId ? `/${entryId}/chat/${chatId}` : `/${entryId}/chat`;
  return {
    endpoint,
    options: {
      method,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body,
    },
  };
};

/**
 * Object containing all available API endpoints for the components to
 * reference.
 */
export const endpoints: Api = {
  entry,
  entryAnalysis,
  entryConversation,
};
