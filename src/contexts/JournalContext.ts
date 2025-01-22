import { createContext } from 'react';

/**
 * The context type for the Journal feature, which contains:
 * - `journalId`: The currently active journal's ID.
 * - `setJournalId`: A function to update the journal ID.
 * - `journalTitle`: The currently active journal's title.
 * - `setJournalTitle`: A function to update the journal title.
 * The context type for the Journal.
 * @typeParam journalId - The currently active journal's ID.
 * @typeParam setJournalId - A function to update the journal ID.
 * @typeParam journalTitle - The currently active journal's title.
 * @typeParam setJournalTitle - A function to update the journal title.
 */
export interface JournalContextType {
  /** The currently active journal's ID. */

  journalId: string;

  /**
   * Updates the journal ID.
   * @param id - The new journal ID to set.
   */
  setJournalId: (id: string) => void;

  /** The currently active journal's title. */

  journalTitle: string;

  /**
   * Updates the journal title.
   * @param title - The new journal title to set.
   */
  setJournalTitle: (title: string) => void;
}

/**
 * The React Context for the Journal feature.
 * Provides access to the `journalId` and `setJournalId` functions.
 */
export const JournalContext = createContext<JournalContextType | undefined>(
  undefined
);
