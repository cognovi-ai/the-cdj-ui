import { createContext } from 'react';

/**
 * The context type for the Journal.
 * @typeParam journalId - The currently active journal's ID.
 * @typeParam setJournalId - A function to update the journal ID.
 */
export interface JournalContextType {
  journalId: string;

  /**
   * Updates the journal ID.
   * @param id - The new journal ID to set.
   */
  setJournalId: (id: string) => void;
}

/**
 * The React Context for the Journal feature.
 * Provides access to the `journalId` and `setJournalId` functions.
 */
export const JournalContext = createContext<JournalContextType | undefined>(
  undefined
);
