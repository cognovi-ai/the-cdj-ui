import { JournalContext } from './JournalContext';
import { useContext } from 'react';

/**
 * Custom hook to access the Journal context.
 * Must be used within a `JournalProvider`.
 *
 * @returns The `journalId` and `setJournalId` from the `JournalContext`.
 * @throws An error if used outside a `JournalProvider`.
 */
export const useJournal = () => {
  const context = useContext(JournalContext);

  if (!context) {
    throw new Error('useJournal must be used within a JournalProvider');
  }

  return context;
};
