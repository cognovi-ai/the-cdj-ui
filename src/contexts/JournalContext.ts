import { createContext } from 'react';

/**
 * The context type for the Journal.
 * @typeParam journalId - The currently active journal's ID.
 * @typeParam setJournalId - A function to update the journal ID.
 * @typeParam journalTitle - The currently active journal's title.
 * @typeParam setJournalTitle - A function to update the journal title.
 */
export interface JournalContextType {
  journalId: string;
  setJournalId: (id: string) => void;
  journalTitle: string;
  setJournalTitle: (title: string) => void;
}

/**
 * The React Context for the Journal feature providing access to the 
 * `journalId` and `setJournalId` functions.
 */
export const JournalContext = createContext<JournalContextType | undefined>(
  undefined
);
