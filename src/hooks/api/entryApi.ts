import { Method, RequestBundle } from '../apiRequest';

// Common types shared across interfaces
interface PrivacySettings {
  public: boolean;
  shared_with: string[];
}

interface FlashMessage {
  success?: string[];
  info?: string[];
  error?: string[];
}

// Entry Body for Requests
export interface EntryBody extends Record<string, unknown> {
  title: string;
  content: string;
  mood: string;
  tags: string[];
  privacy_settings: PrivacySettings;
}

// Entry Response from Server
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

export interface GetAllEntriesResponse extends Record<string, unknown> {
  entries: EntryResponse[];
  flash?: FlashMessage;
}

// Entry Analysis Body for Requests
export interface EntryAnalysisBody extends Record<string, unknown> {
  entry: string;
  analysis_content: string;
}

// Entry Analysis Response from Server
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

// Message structure for conversations
interface Message extends Record<string, unknown> {
  message_content: string;
  llm_response?: string;
}

// Entry Conversation Body for Requests
export interface EntryConversationRequestBody extends Record<string, unknown> {
  messages: Message[];
}

// Entry Conversation Response from Server
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
  entry: (method: Method, entryId?: string, body?: EntryBody) => RequestBundle;

  entryAnalysis: (
    method: Method,
    entryId: string,
    body?: EntryAnalysisBody
  ) => RequestBundle;

  entryConversation: (
    method: Method,
    entryId: string,
    chatId?: string,
    body?: EntryConversationRequestBody
  ) => RequestBundle;
}

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

export const endpoints: Api = {
  entry,
  entryAnalysis,
  entryConversation,
};
